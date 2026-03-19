import {Entity} from 'typeorm';
import {BaseLookupOrmEntity} from 'src/infrastructure/base/baseLookupOrmEntity';

@Entity('task_status_lookup')
export class TaskStatusOrmEntity extends BaseLookupOrmEntity {}
