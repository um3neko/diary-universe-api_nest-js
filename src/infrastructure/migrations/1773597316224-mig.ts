import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig1773597316224 implements MigrationInterface {
    name = 'Mig1773597316224'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task_status_value" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "value" integer NOT NULL, "status_id" uuid, CONSTRAINT "PK_bc1b44fa3844b87ba5a9ed0b102" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task_status" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "title" character varying NOT NULL, "level" integer NOT NULL, CONSTRAINT "PK_b8747cc6a41b6cef4639babf61d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task_priority_value" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "value" integer NOT NULL, "priority_id" uuid, CONSTRAINT "PK_7942dc12ac30e728d03948308c5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task_priority" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "title" character varying NOT NULL, "level" integer NOT NULL, CONSTRAINT "PK_42fc82c4e184b727a3ccd7863ee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tag" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "UQ_6a9775008add570dc3e5a0bab7b" UNIQUE ("name"), CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "title" character varying NOT NULL, "description" character varying NOT NULL, "status_id" uuid, "priority_id" uuid, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task_tag" ("task_id" uuid NOT NULL, "tag_id" uuid NOT NULL, CONSTRAINT "PK_9bd1d11e72e0471503a8c07b5dd" PRIMARY KEY ("task_id", "tag_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8a266d51df4605134aa122fbda" ON "task_tag" ("task_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_343faa365ee706cad6e13a3828" ON "task_tag" ("tag_id") `);
        await queryRunner.query(`ALTER TABLE "task_status_value" ADD CONSTRAINT "FK_9832bb201e0d0814056d4108ac8" FOREIGN KEY ("status_id") REFERENCES "task_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "task_priority_value" ADD CONSTRAINT "FK_ff4e4583f6c3f4ad5e6c0fabe7d" FOREIGN KEY ("priority_id") REFERENCES "task_priority"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_b8747cc6a41b6cef4639babf61d" FOREIGN KEY ("status_id") REFERENCES "task_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_42fc82c4e184b727a3ccd7863ee" FOREIGN KEY ("priority_id") REFERENCES "task_priority"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "task_tag" ADD CONSTRAINT "FK_8a266d51df4605134aa122fbda1" FOREIGN KEY ("task_id") REFERENCES "task"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "task_tag" ADD CONSTRAINT "FK_343faa365ee706cad6e13a3828f" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task_tag" DROP CONSTRAINT "FK_343faa365ee706cad6e13a3828f"`);
        await queryRunner.query(`ALTER TABLE "task_tag" DROP CONSTRAINT "FK_8a266d51df4605134aa122fbda1"`);
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_42fc82c4e184b727a3ccd7863ee"`);
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_b8747cc6a41b6cef4639babf61d"`);
        await queryRunner.query(`ALTER TABLE "task_priority_value" DROP CONSTRAINT "FK_ff4e4583f6c3f4ad5e6c0fabe7d"`);
        await queryRunner.query(`ALTER TABLE "task_status_value" DROP CONSTRAINT "FK_9832bb201e0d0814056d4108ac8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_343faa365ee706cad6e13a3828"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8a266d51df4605134aa122fbda"`);
        await queryRunner.query(`DROP TABLE "task_tag"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TABLE "tag"`);
        await queryRunner.query(`DROP TABLE "task_priority"`);
        await queryRunner.query(`DROP TABLE "task_priority_value"`);
        await queryRunner.query(`DROP TABLE "task_status"`);
        await queryRunner.query(`DROP TABLE "task_status_value"`);
    }

}
