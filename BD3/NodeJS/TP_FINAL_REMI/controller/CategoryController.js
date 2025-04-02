import Category from "../model/Category.js";

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
}