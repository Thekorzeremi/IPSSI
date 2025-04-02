import Router from 'express';

import {
    getCategories,
    getCategoryById,
    createCategory,
    modifyCategory,
    dropCategory
} from '../controller/CategoryController.js';

const CategoryRoute = Router();

CategoryRoute.get('/categories', getCategories);
CategoryRoute.get('/categories/:id', getCategoryById);
CategoryRoute.delete('/categories/:id', dropCategory);
CategoryRoute.post('/categories', createCategory);
CategoryRoute.put('/categories/:id', modifyCategory)

export default CategoryRoute;