import Router from 'express';

import {
    getProducts,
    getProductById,
    createProduct,
    modifyProduct,
    dropProduct
} from '../controller/ProductController.js';

const VehiculeRoute = Router();

VehiculeRoute.get('/produits', getProducts);
VehiculeRoute.get('/produits/:id', getProductById);
VehiculeRoute.delete('/produits/:id', dropProduct);
VehiculeRoute.post('/produits', createProduct);
VehiculeRoute.put('/produits/:id', modifyProduct);

export default VehiculeRoute;