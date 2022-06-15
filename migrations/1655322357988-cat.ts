import { MigrationInterface, QueryRunner } from "typeorm";

export class cat1655322357988 implements MigrationInterface {
    name = 'cat1655322357988'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cat" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "breed" character varying NOT NULL, "lbsFoodPerDay" integer NOT NULL, "lives" integer NOT NULL, "isAlive" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cat"`);
    }

}
