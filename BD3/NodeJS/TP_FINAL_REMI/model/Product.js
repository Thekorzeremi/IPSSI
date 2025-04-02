import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Product = sequelize.define('Product', {
    id:
    {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    description:
    {
        type: DataTypes.STRING,
        allowNull: true
    },
    price:
    {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            min: 10,
            max: 500
        }
    },
    stock:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    EANcode:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoryId:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categories',
            key: 'id'
        }
    }
});

export default Product;