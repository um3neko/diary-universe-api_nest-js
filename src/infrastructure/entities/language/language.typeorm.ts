import {Entity, PrimaryColumn, Column} from 'typeorm';
import {BaseOrmEntity} from '../../base/baseOrmEntity';
import {BaseLookupOrmEntity} from '../../base/baseLookupOrmEntity';

@Entity('language')
export class LanguageOrmEntity extends BaseLookupOrmEntity {}
