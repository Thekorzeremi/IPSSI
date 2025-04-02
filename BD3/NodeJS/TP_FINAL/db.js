import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "tp_node",
    "root",
    "",
    {
        host: 'localhost',
        dialect: "mysql",
        port: "3307",
        logging: console.log
    }
)

export default sequelize;