import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from 'src/domain/entities/user/user.entity';
import {UserRepository} from 'src/domain/entities/user/user.repository';
import {UserOrmEntity} from './user.typeorm';
import {UserMapper} from './user.mapper';
import {Injectable} from '@nestjs/common/decorators/core/injectable.decorator';

export const TypeOrmUserRepositoryToken = Symbol('TypeOrmUserRepository');

@Injectable()
export class TypeOrmUserRepository implements UserRepository {
	constructor(
		@InjectRepository(UserOrmEntity)
		private readonly repo: Repository<UserOrmEntity>,
	) {}

	async authenticate(email: string, password: string): Promise<User | null> {
		const userOrm = await this.repo.findOne({where: {email}});
		if (!userOrm) return null;
		const user = UserMapper.toDomain(userOrm);
		if (!(await user.verifyPassword(password))) return null;
		return user;
	}

	async findById(id: string): Promise<User | null> {
		const ormUser = await this.repo.findOne({where: {id}});
		return this.toDomainOrNull(ormUser);
	}

	async findByEmail(email: string): Promise<User | null> {
		const ormUser = await this.repo.findOne({where: {email}});
		return this.toDomainOrNull(ormUser);
	}

	async save(user: User): Promise<void> {
		const entity = UserMapper.toOrm(user);
		await this.repo.save(entity);
	}

	private toDomainOrNull(entity: UserOrmEntity | null): User | null {
		return entity ? UserMapper.toDomain(entity) : null;
	}
}
