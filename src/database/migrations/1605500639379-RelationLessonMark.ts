import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationLessonMark1605500639379 implements MigrationInterface {
    name = 'RelationLessonMark1605500639379'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mark" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "lessonId" uuid, CONSTRAINT "REL_9ddcac515e3d24fd0b21a4474f" UNIQUE ("lessonId"), CONSTRAINT "PK_0c6d4afd73cc2b4eee5a926aafc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "referenceBooks"`);
        await queryRunner.query(`ALTER TABLE "mark" ADD CONSTRAINT "FK_9ddcac515e3d24fd0b21a4474ff" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mark" DROP CONSTRAINT "FK_9ddcac515e3d24fd0b21a4474ff"`);
        await queryRunner.query(`ALTER TABLE "content" ADD "referenceBooks" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "mark"`);
    }

}
