import {v4 as uuidv4} from 'uuid';
import * as argon2 from 'argon2';
import {BaseDomainEntity} from '../baseEntity';

export class User extends BaseDomainEntity {
	private constructor(
		id: string,
		createdAt: Date,
		updatedAt: Date,

		public username: string,
		public email: string,
		private password: string,
	) {
		super(id, createdAt, updatedAt);
	}

	static async register(data: {
		username: string;
		email: string;
		password: string;
	}): Promise<User> {
		const id = uuidv4();
		const hash = await argon2.hash(data.password);
		const now = new Date();

		return new User(id, now, now, data.username, data.email, hash);
	}

	static restore(data: {
		id: string;
		username: string;
		email: string;
		passwordHash: string;
		createdAt: Date;
		updatedAt: Date;
	}): User {
		return new User(
			data.id,
			data.createdAt,
			data.updatedAt,
			data.username,
			data.email,
			data.passwordHash,
		);
	}

	async verifyPassword(password: string): Promise<boolean> {
		return await argon2.verify(this.password, password);
	}

	changeEmail(newEmail: string): void {
		this.email = newEmail;
		this.touch();
	}

	changeUsername(newUsername: string): void {
		this.username = newUsername;
		this.touch();
	}

	async changePassword(newPassword: string): Promise<void> {
		const newHash = await argon2.hash(newPassword);
		this.password = newHash;
		this.touch();
	}

	toPrimitives(): {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		username: string;
		email: string;
		passwordHash: string;
	} {
		return {
			id: this.id,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			username: this.username,
			email: this.email,
			passwordHash: this.password,
		};
	}
}
