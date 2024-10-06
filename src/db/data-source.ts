import { DataSourceOptions, DataSource } from 'typeorm';
import { config } from 'dotenv';

config({ path: '.env.development.local' });

export const dataSourceOptions: DataSourceOptions = {
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        type: 'postgres',
        synchronize: false,
        entities: [`dist/**/**/*.entity.js`],
        migrations: [`${__dirname}/migrations/**/*{.ts,.js}`]
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;