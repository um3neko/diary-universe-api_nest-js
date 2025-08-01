import {Entity, PrimaryColumn, Column} from 'typeorm';
import {BaseOrmEntity} from '../../base/baseOrmEntity';
import {BaseLookupOrmEntity} from '../../base/baseLookupOrmEntity';

@Entity('extensions')
export class ExtensionOrmEntity extends BaseLookupOrmEntity {}
