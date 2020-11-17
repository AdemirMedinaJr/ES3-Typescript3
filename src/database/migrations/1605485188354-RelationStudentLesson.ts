import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationStudentLesson1605485188354 implements MigrationInterface {
    name = 'RelationStudentLesson1605485188354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "student_lessons_lesson" ("studentId" uuid NOT NULL, "lessonId" uuid NOT NULL, CONSTRAINT "PK_d25a2839fccf23b186674905d0a" PRIMARY KEY ("studentId", "lessonId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_22b143a4458e3b299b8949c9c6" ON "student_lessons_lesson" ("studentId") `);
        await queryRunner.query(`CREATE INDEX "IDX_506e16c9e2561c89f7396a1a10" ON "student_lessons_lesson" ("lessonId") `);
        await queryRunner.query(`ALTER TABLE "student_lessons_lesson" ADD CONSTRAINT "FK_22b143a4458e3b299b8949c9c60" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_lessons_lesson" ADD CONSTRAINT "FK_506e16c9e2561c89f7396a1a10e" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_lessons_lesson" DROP CONSTRAINT "FK_506e16c9e2561c89f7396a1a10e"`);
        await queryRunner.query(`ALTER TABLE "student_lessons_lesson" DROP CONSTRAINT "FK_22b143a4458e3b299b8949c9c60"`);
        await queryRunner.query(`DROP INDEX "IDX_506e16c9e2561c89f7396a1a10"`);
        await queryRunner.query(`DROP INDEX "IDX_22b143a4458e3b299b8949c9c6"`);
        await queryRunner.query(`DROP TABLE "student_lessons_lesson"`);
    }

}
