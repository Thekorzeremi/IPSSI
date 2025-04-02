import Product from "../model/Product.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        products.length > 0
            ? res.status(200).json(products)
            : res.status(200).json({ message: "No products found" });
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        product
            ? res.status(200).json(product)
            : res.status(404).json({ message: `No product found for id = ${req.params.id}` });
    } catch (error) {
        res.status(500).json({ message: "Error fetching product", error });
    }
};

export const createProduct = async (req, res) => {
    const { name, description, price, stock, EANcode, categoryId } = req.body;
    try {
        const newProduct = await Product.create({
            name,
            description,
            price,
            stock,
            EANcode,
            categoryId,
        });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: "Error creating product", error });
    }
};

export const modifyProduct = async (req, res) => {
    const { name, description, price, stock, EANcode, categoryId } = req.body;
    try {
        const productToUpdate = await Product.findByPk(req.params.id);
        if (productToUpdate) {
            productToUpdate.name = name || productToUpdate.name;
            productToUpdate.description = description || productToUpdate.description;
            productToUpdate.price = price || productToUpdate.price;
            productToUpdate.stock = stock || productToUpdate.stock;
            productToUpdate.EANcode = EANcode || productToUpdate.EANcode;
            productToUpdate.categoryId = categoryId || productToUpdate.categoryId;
            await productToUpdate.save();
            res.status(200).json(productToUpdate);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error });
    }
};

export const dropProduct = async (req, res) => {
    try {
        const rowsDeleted = await Product.destroy({ where: { id: req.params.id } });
        rowsDeleted > 0
            ? res.status(200).json({ message: "Product deleted successfully" })
            : res.status(404).json({ message: "Product not found" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error });
    }
};