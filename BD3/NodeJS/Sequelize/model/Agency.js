import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Agency = sequelize.define('Agency', {
    id: 
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: 
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    address:
    {
        type: DataTypes.STRING,
        allowNull: false
    }

});

(async () => {
    try {
        await Agency.create({
            name: "Paris",
            address: "123 Rue de Paris"
        });
        console.log("Row inserted successfully");
    } catch (error) {
        console.error("Error inserting row:", error);
    }
})();

export default Vehicules;