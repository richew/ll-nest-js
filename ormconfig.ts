import 'reflect-metadata';
import { DataSource } from 'typeorm';
// import { User } from './models/user/entity';

const host = process.env.DB_HOST ?? 'localhost';
const port = process.env.DB_PORT ?? 5432;
const username = process.env.DB_USER ?? 'postgres';
const password = process.env.DB_PASS ?? 'postgres';
const database = process.env.DB_NAME ?? 'test';

export const AppDataSource = new DataSource({
  type: 'postgres',
  port: Number(port),
  host,
  username,
  password,
  database,
  synchronize: true,
  logging: false,
  entities: ['src/models/*.ts'],
  migrations: ['migrations/*.ts'],
  subscribers: [],
});

export const config = {};
