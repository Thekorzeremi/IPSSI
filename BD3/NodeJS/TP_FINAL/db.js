import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "tp_node",
    "root",
    "",
    {
        host: 'localhost',
        dialect: "mysql",
        logging: console.log
    }
)

export default sequelize;