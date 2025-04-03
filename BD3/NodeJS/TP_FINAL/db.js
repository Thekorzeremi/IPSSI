import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        port: process.env.DB_PORT,
        logging: console.log
    }
);

export default sequelize;