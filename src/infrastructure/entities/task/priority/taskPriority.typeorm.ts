import {Entity} from 'typeorm';
import {BaseLookupOrmEntity} from 'src/infrastructure/base/baseLookupOrmEntity';

@Entity('task_priority_lookup')
export class TaskPriorityOrmEntity extends BaseLookupOrmEntity {}
