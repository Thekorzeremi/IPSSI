import Router from 'express';

import {
    getCategories,
    getCategoryById,
    createCategory,
    modifyCategory,
    dropCategory,
    showCategoryTotalNumberOfProduct,
    showCategoriesWithFiveProductsOrMore,
    calculateAveragePriceByCategory,
    showCategoriesWithAveragePriceAbove100,
    showOutOfStockProducts
} from '../controller/CategoryController.js';

const CategoryRoute = Router();

CategoryRoute.get('/categories', getCategories);
CategoryRoute.get('/categories/:id', getCategoryById);
CategoryRoute.delete('/categories/:id', dropCategory);
CategoryRoute.post('/categories', createCategory);
CategoryRoute.put('/categories/:id', modifyCategory);
CategoryRoute.get('/bonus/nb-product', showCategoryTotalNumberOfProduct);
CategoryRoute.get('/bonus/five-products', showCategoriesWithFiveProductsOrMore);
CategoryRoute.get('/bonus/average-price', calculateAveragePriceByCategory);
CategoryRoute.get('/bonus/average-price-above-100', showCategoriesWithAveragePriceAbove100);
CategoryRoute.get('/bonus/out-of-stock', showOutOfStockProducts);

export default CategoryRoute;