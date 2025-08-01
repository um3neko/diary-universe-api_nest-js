import { BaseDomainEntity } from "src/domain/entities/baseEntity";

export class Aligment extends BaseDomainEntity {

	private constructor(
    id: string,
	createdAt: Date,
    updatedAt: Date,


  ) {
    super(id, createdAt, updatedAt);
  }

}
