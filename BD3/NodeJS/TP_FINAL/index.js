import express from "express";
import sequelize from "./db.js";
import ProductRoute from './routes/ProductRoute.js';
import CategoryRoute from './routes/CategoryRoute.js';
import Category from "./model/Category.js";
import Product from "./model/Product.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const app = express();
app.use(express.json());

Category.hasMany(Product, { foreignKey: 'categoryId', as: 'products' });
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

sequelize.sync({ force: true }) 
    .then(async () => {
        console.log('Connected to the database');
        const category = await Category.create({
            name: "Alimentaire",
            description: "Les aliments consommables du quotidien"
        });
        console.log("Row in Category inserted");

        await Product.create({
            name: "Cereales Bio",
            price: 14.99,
            stock: 14,
            EANcode: "2E3R4THFR43T5Y67UHY",
            categoryId: category.id 
        });

        await Product.create({
            name: "Lait d'Amande",
            price: 33.49,
            stock: 30,
            EANcode: "1A2B3C4D5E6F7G8H9I0J",
            categoryId: category.id
        });

        await Product.create({
            name: "Pain Complet",
            price: 22.99,
            stock: 50,
            EANcode: "9Z8Y7X6W5V4U3T2S1R0Q",
            categoryId: category.id
        });
        console.log("Row in Product inserted");

        app.listen(process.env.EXPRESS_PORT, () => {
            console.log(`Server is running on port ${process.env.EXPRESS_PORT}`);
        });
    })
    .catch((error) => {
        console.error(`Unable to connect to the database > ${error}`);
    });

app.use(ProductRoute, CategoryRoute);