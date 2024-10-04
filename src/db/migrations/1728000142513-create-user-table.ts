import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1728000142513 implements MigrationInterface {
    name = 'CreateUserTable1728000142513'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "slug" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "avatar" character varying NOT NULL, "cover" character varying NOT NULL, "bio" character varying NOT NULL, "link" character varying NOT NULL, "teste" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
