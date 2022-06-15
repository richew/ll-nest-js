import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1655314413587 implements MigrationInterface {
    name = 'initial1655314413587'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "action" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "message" character varying, "received" TIMESTAMP WITH TIME ZONE NOT NULL, "processed" TIMESTAMP WITH TIME ZONE, "error" character varying, "isActive" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_2d9db9cf5edfbbae74eb56e3a39" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "action"`);
    }

}
