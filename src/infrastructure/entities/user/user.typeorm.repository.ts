import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from 'src/domain/entities/user/user.entity';
import {UserOrmEntity} from './user.typeorm';
import {UserMapper} from './user.mapper';
import {Injectable} from '@nestjs/common/decorators/core/injectable.decorator';
import {BaseRepository} from 'src/infrastructure/base/baseRepository';
import {IUserRepository} from 'src/domain/entities/user/user.repository';

export const TypeOrmUserRepositoryToken = Symbol('TypeOrmUserRepository');

@Injectable()
export class TypeOrmUserRepository
	extends BaseRepository<UserOrmEntity, User>
	implements IUserRepository
{
	constructor(
		@InjectRepository(UserOrmEntity)
		repo: Repository<UserOrmEntity>,
	) {
		super(repo, UserMapper);
	}

	async authenticate(email: string, password: string): Promise<User | null> {
		const userOrm = await this.repo.findOne({where: {email}});
		if (!userOrm) return null;
		const user = UserMapper.toDomain(userOrm);
		if (!(await user.verifyPassword(password))) return null;
		return user;
	}

	async findByEmail(email: string): Promise<User | null> {
		const ormUser = await this.repo.findOne({where: {email}});
		return this.toDomainOrNull(ormUser);
	}
}
