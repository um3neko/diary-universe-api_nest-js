import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

export abstract class BaseOrmEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@CreateDateColumn({type: 'timestamptz'})
	createdAt: Date;

	@UpdateDateColumn({type: 'timestamptz'})
	updatedAt: Date;
}
