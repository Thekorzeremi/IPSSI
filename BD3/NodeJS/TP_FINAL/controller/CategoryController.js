import Category from "../model/Category.js";
import sequelize from "../db.js";
import QueryTypes from "sequelize/lib/query-types";

export const getCategories = async (req, res) => {
    const categories = await Category.findAll();
    categories ?
        res.status(200).json(categories) :
        res.status(200).json({ 
            message: `No categories found` 
        });
};

export const getCategoryById = async (req, res) => {
    const categoryByid = await Category.findByPk(req.params.id);
    const id = req.params.id;
    categoryByid ?
        res.status(200).json(categoryByid) :
        res.status(200).json({ 
            message: `No category found for id = ${id}` 
        });
};

export const createCategory = async (req, res) => {
    const { name, description } = req.body;
    const categoryToCreate = await Category.create({
            name,
            description
        });
    categoryToCreate ?
        res.status(200).json(categoryToCreate) :
        res.status(200).json({
            message: `Cannot create new category`
        });
}

export const modifyCategory = async (req, res) => {
    const { name, description } = req.body;
    const categoryToUpdate = await Category.findByPk(req.params.id);
    if (categoryToUpdate) {
        categoryToUpdate.name = name || categoryToUpdate.name;
        categoryToUpdate.description = description || categoryToUpdate.description;
        await categoryToUpdate.save();
        res.status(200).json(categoryToUpdate);
    } else {
        res.status(404).json({
            message: "Cannot update category"
        });
    }   
};

export const dropCategory = async (req, res) => {
    const categoryToDrop = await Category.destroy({ where: { id: req.params.id }});
    categoryToDrop > 0 ?
        res.status(200).json(categoryToDrop) :
        res.status(200).json({ message: "Cannot drop category "});
};

export const showCategoryTotalNumberOfProduct = async (req, res) => {
    try {
        const [results] = await sequelize.query(
            `SELECT c.id AS categoryId, c.name AS categoryName, COUNT(p.id) AS productCount
             FROM Categories c
             LEFT JOIN Products p ON p.categoryId = c.id
             GROUP BY c.id, c.name`,
             {type: QueryTypes.SELECT}
        );
        res.status(200).json(results);
    } catch (error) {
        console.error("Error executing query:", error);
        res.status(500).json({ message: "Cannot calculate number of products", error: error.message });
    }
};

export const showCategoriesWithFiveProductsOrMore = async (req, res) => {
    try {
        const [results] = await sequelize.query(
            `SELECT c.id AS categoryId, c.name AS categoryName, COUNT(p.id) AS productCount
             FROM Categories c
             LEFT JOIN Products p ON p.categoryId = c.id
             GROUP BY c.id, c.name
             HAVING COUNT(p.id) >= 5`,
             {type: QueryTypes.SELECT}
        );
        res.status(200).json(results);
    } catch (error) {
        console.error("Error executing query:", error);
        res.status(500).json({ message: "Cannot fetch categories with 5 or more products", error: error.message });
    }
};

export const calculateAveragePriceByCategory = async (req, res) => {
    try {
        const [results] = await sequelize.query(
            `SELECT c.id AS categoryId, c.name AS categoryName, AVG(p.price) AS averagePrice
             FROM Categories c
             LEFT JOIN Products p ON p.categoryId = c.id
             GROUP BY c.id, c.name`,
             {type: QueryTypes.SELECT}
        );
        res.status(200).json(results);
    } catch (error) {
        console.error("Error executing query:", error);
        res.status(500).json({ message: "Cannot calculate average price by category", error: error.message });
    }
};

export const showCategoriesWithAveragePriceAbove100 = async (req, res) => {
    try {
        const [results] = await sequelize.query(
            `SELECT c.id AS categoryId, c.name AS categoryName, AVG(p.price) AS averagePrice
             FROM Categories c
             LEFT JOIN Products p ON p.categoryId = c.id
             GROUP BY c.id, c.name
             HAVING AVG(p.price) > 100`,
             {type: QueryTypes.SELECT}
        );
        res.status(200).json(results);
    } catch (error) {
        console.error("Error executing query:", error);
        res.status(500).json({ message: "Cannot fetch categories with average price above 100", error: error.message });
    }
};

export const showOutOfStockProducts = async (req, res) => {
    try {
        const [results] = await sequelize.query(
            `SELECT p.id AS productId, p.name AS productName, p.stock
             FROM Products p
             WHERE p.stock = 0`,
             {type: QueryTypes.SELECT}
        );
        res.status(200).json(results);
    } catch (error) {
        console.error("Error executing query:", error);
        res.status(500).json({ message: "Cannot fetch out-of-stock products", error: error.message });
    }
};