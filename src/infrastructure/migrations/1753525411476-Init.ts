import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1753525411476 implements MigrationInterface {
    name = 'Init1753525411476'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "book_chapter_orm_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "chapterNumber" integer NOT NULL, "wordCount" integer NOT NULL, "completed" boolean NOT NULL, "text" character varying NOT NULL, "bookId" uuid, CONSTRAINT "PK_6688eba8247076d1613003dccf2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "book_orm_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "title" character varying NOT NULL, "author" character varying NOT NULL, "extension" character varying NOT NULL, CONSTRAINT "PK_20a5898ddee46244e0df7b790f6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_orm_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "username" character varying NOT NULL, "email" character varying NOT NULL, "password" bytea NOT NULL, CONSTRAINT "PK_5fa555e23121a5c741ae858e469" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "book_chapter_orm_entity" ADD CONSTRAINT "FK_d367bc70fe59c7d6d4afb990937" FOREIGN KEY ("bookId") REFERENCES "book_orm_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book_chapter_orm_entity" DROP CONSTRAINT "FK_d367bc70fe59c7d6d4afb990937"`);
        await queryRunner.query(`DROP TABLE "user_orm_entity"`);
        await queryRunner.query(`DROP TABLE "book_orm_entity"`);
        await queryRunner.query(`DROP TABLE "book_chapter_orm_entity"`);
    }

}
