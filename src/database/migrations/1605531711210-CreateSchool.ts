import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSchool1605531711210 implements MigrationInterface {
    name = 'CreateSchool1605531711210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "classSchedule" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "room" character varying NOT NULL, "teacher" character varying NOT NULL, "lesson" character varying NOT NULL, CONSTRAINT "PK_8df94d5fbb0d426818a67e8f71b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employees" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "cleaners" character varying NOT NULL, "teachers" character varying NOT NULL, "principal" character varying NOT NULL, CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "employees"`);
        await queryRunner.query(`DROP TABLE "classSchedule"`);
    }

}
