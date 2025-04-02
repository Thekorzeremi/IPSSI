import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "tp_node",
    "root",
    "",
    {
        host: 'localhost',
        dialect: "mariadb"
    }
)

export default sequelize;