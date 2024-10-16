import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1728175961926 implements MigrationInterface {
    name = 'Init1728175961926'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "avatar" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "cover" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "bio" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "link" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "link" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "bio" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "cover" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "avatar" SET NOT NULL`);
    }

}
