import {MigrationInterface, QueryRunner} from 'typeorm';

export class Mig1773945830291 implements MigrationInterface {
	name = 'Mig1773945830291';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "book_chapter" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "chapterNumber" integer NOT NULL, "wordCount" integer NOT NULL, "completed" boolean NOT NULL, "text" character varying NOT NULL, "bookId" uuid, CONSTRAINT "PK_fbbb2dc8c35e77c96e9d3700f06" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE TABLE "extension" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "code" character varying NOT NULL, "value" character varying NOT NULL, CONSTRAINT "UQ_804533275bcf16b3d7733fde4e6" UNIQUE ("code"), CONSTRAINT "PK_e9e7da4f1cfc826aba870c20589" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE TABLE "language" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "code" character varying NOT NULL, "value" character varying NOT NULL, CONSTRAINT "UQ_465b3173cdddf0ac2d3fe73a33c" UNIQUE ("code"), CONSTRAINT "PK_cc0a99e710eb3733f6fb42b1d4c" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE TABLE "book" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "title" character varying NOT NULL, "author" character varying NOT NULL, "touchedAt" TIMESTAMP WITH TIME ZONE, "extensionId" uuid, "languageId" uuid, CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE TABLE "task_status_lookup" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "code" character varying NOT NULL, "value" character varying NOT NULL, CONSTRAINT "UQ_668d78118b5cbb417f6df5987e0" UNIQUE ("code"), CONSTRAINT "PK_527f9b7cb944c3ff91fa32200bb" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE TABLE "task_priority_lookup" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "code" character varying NOT NULL, "value" character varying NOT NULL, CONSTRAINT "UQ_90fa420e8cc7f024b4f605a59bb" UNIQUE ("code"), CONSTRAINT "PK_afcd52d26f385e40556033c5060" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE TABLE "tag" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "UQ_6a9775008add570dc3e5a0bab7b" UNIQUE ("name"), CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE TABLE "task" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "title" character varying NOT NULL, "description" character varying NOT NULL, "prompt" json NOT NULL, "status_id" uuid, "priority_id" uuid, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`,
		);
		await queryRunner.query(
			`CREATE TABLE "task_tag_relation" ("task_id" uuid NOT NULL, "tag_id" uuid NOT NULL, CONSTRAINT "PK_6d6c7920cac0d17b424f4309215" PRIMARY KEY ("task_id", "tag_id"))`,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_4c9b1a6466e8de17d2fbb9c8d6" ON "task_tag_relation" ("task_id") `,
		);
		await queryRunner.query(
			`CREATE INDEX "IDX_888e8c9c32ff9e0b198c447cab" ON "task_tag_relation" ("tag_id") `,
		);
		await queryRunner.query(
			`ALTER TABLE "book_chapter" ADD CONSTRAINT "FK_a9ee2ba2c8216960f41d8ff8be6" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await queryRunner.query(
			`ALTER TABLE "book" ADD CONSTRAINT "FK_1f1a17737fae2f6d8df1f582d7a" FOREIGN KEY ("extensionId") REFERENCES "extension"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await queryRunner.query(
			`ALTER TABLE "book" ADD CONSTRAINT "FK_a1d1140264d98ba83fa11de0da1" FOREIGN KEY ("languageId") REFERENCES "language"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await queryRunner.query(
			`ALTER TABLE "task" ADD CONSTRAINT "FK_b8747cc6a41b6cef4639babf61d" FOREIGN KEY ("status_id") REFERENCES "task_status_lookup"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await queryRunner.query(
			`ALTER TABLE "task" ADD CONSTRAINT "FK_42fc82c4e184b727a3ccd7863ee" FOREIGN KEY ("priority_id") REFERENCES "task_priority_lookup"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
		await queryRunner.query(
			`ALTER TABLE "task_tag_relation" ADD CONSTRAINT "FK_4c9b1a6466e8de17d2fbb9c8d6a" FOREIGN KEY ("task_id") REFERENCES "task"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
		);
		await queryRunner.query(
			`ALTER TABLE "task_tag_relation" ADD CONSTRAINT "FK_888e8c9c32ff9e0b198c447cabf" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "task_tag_relation" DROP CONSTRAINT "FK_888e8c9c32ff9e0b198c447cabf"`,
		);
		await queryRunner.query(
			`ALTER TABLE "task_tag_relation" DROP CONSTRAINT "FK_4c9b1a6466e8de17d2fbb9c8d6a"`,
		);
		await queryRunner.query(
			`ALTER TABLE "task" DROP CONSTRAINT "FK_42fc82c4e184b727a3ccd7863ee"`,
		);
		await queryRunner.query(
			`ALTER TABLE "task" DROP CONSTRAINT "FK_b8747cc6a41b6cef4639babf61d"`,
		);
		await queryRunner.query(
			`ALTER TABLE "book" DROP CONSTRAINT "FK_a1d1140264d98ba83fa11de0da1"`,
		);
		await queryRunner.query(
			`ALTER TABLE "book" DROP CONSTRAINT "FK_1f1a17737fae2f6d8df1f582d7a"`,
		);
		await queryRunner.query(
			`ALTER TABLE "book_chapter" DROP CONSTRAINT "FK_a9ee2ba2c8216960f41d8ff8be6"`,
		);
		await queryRunner.query(`DROP INDEX "public"."IDX_888e8c9c32ff9e0b198c447cab"`);
		await queryRunner.query(`DROP INDEX "public"."IDX_4c9b1a6466e8de17d2fbb9c8d6"`);
		await queryRunner.query(`DROP TABLE "task_tag_relation"`);
		await queryRunner.query(`DROP TABLE "task"`);
		await queryRunner.query(`DROP TABLE "tag"`);
		await queryRunner.query(`DROP TABLE "task_priority_lookup"`);
		await queryRunner.query(`DROP TABLE "task_status_lookup"`);
		await queryRunner.query(`DROP TABLE "user"`);
		await queryRunner.query(`DROP TABLE "book"`);
		await queryRunner.query(`DROP TABLE "language"`);
		await queryRunner.query(`DROP TABLE "extension"`);
		await queryRunner.query(`DROP TABLE "book_chapter"`);
	}
}
