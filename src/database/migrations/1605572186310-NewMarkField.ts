import {MigrationInterface, QueryRunner} from "typeorm";

export default class NewMarkField1605572186310 implements MigrationInterface {
name = 'NewMarkField1605572186310'
   
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `ALTER TABLE "mark" ADD "student" character varying NOT NULL`,
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `ALTER TABLE "mark" DROP COLUMN "student"`,
        );
      }
    }