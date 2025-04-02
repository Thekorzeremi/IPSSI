import { Sequelize } from "sequelize";

const sequelize = new Sequelize("node", "root", "", {
    host: "localhost",
    dialect: "mariadb"
});

export default sequelize;