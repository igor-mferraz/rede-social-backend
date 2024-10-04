import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDataBase1728001530993 implements MigrationInterface {
    name = 'InitDataBase1728001530993'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "slug" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "avatar" character varying NOT NULL, "cover" character varying NOT NULL, "bio" character varying NOT NULL, "link" character varying NOT NULL, "teste" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tweet" ("id" SERIAL NOT NULL, "body" character varying NOT NULL, "image" character varying NOT NULL, "idUser" integer NOT NULL, CONSTRAINT "PK_6dbf0db81305f2c096871a585f6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tweet"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
