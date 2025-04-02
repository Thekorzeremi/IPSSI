import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Vehicules = sequelize.define('Vehicles', {
    id: 
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    libelle: 
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    prix_j:
    {
        type: DataTypes.FLOAT,
        defaultValue: 100
    }

});

(async () => {
    try {
        await Vehicules.create({
            libelle: "Car",
            prix_j: 150
        });
        console.log("Row inserted successfully");
    } catch (error) {
        console.error("Error inserting row:", error);
    }
})();

export default Vehicules;