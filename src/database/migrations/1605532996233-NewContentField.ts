import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewContentField1605532996233 implements MigrationInterface {
  name = 'NewContentField1605532996233';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "content" ADD "referenceBooks" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "content" DROP COLUMN "referenceBooks"`,
    );
  }
}
