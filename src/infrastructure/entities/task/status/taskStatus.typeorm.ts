import {Column, Entity} from 'typeorm';
import {BaseLookupOrmEntity} from 'src/infrastructure/base/baseLookupOrmEntity';

@Entity('task_status_lookup')
export class TaskStatusOrmEntity extends BaseLookupOrmEntity {
	@Column({type: 'varchar', nullable: true})
	emojiCode?: string;
}
