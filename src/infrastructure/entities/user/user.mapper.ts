import {User} from 'src/domain/entities/user/user.entity';
import {UserOrmEntity} from './user.typeorm';

export class UserMapper {
	static toDomain(orm: UserOrmEntity): User {
		if (!orm) return null as any;
		return User.restore({
			id: orm.id,
			username: orm.username,
			email: orm.email,
			passwordHash: orm.password,
			createdAt: orm.createdAt,
			updatedAt: orm.updatedAt,
		});
	}

	static toOrm(domain: User): UserOrmEntity {
		if (!domain) return null as any;
		const orm = new UserOrmEntity();
		orm.id = domain.id;
		orm.username = domain.username;
		orm.email = domain.email;
		orm.password = (domain as any).password; // Access private property
		orm.createdAt = domain.createdAt;
		orm.updatedAt = domain.updatedAt;
		return orm;
	}
}
