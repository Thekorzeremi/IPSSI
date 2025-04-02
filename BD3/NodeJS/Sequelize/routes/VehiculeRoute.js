import Router from 'express';

import {
    getVehicles,
    getVehiclesById,
    deleteVehicle,
    createVehicle,
    getVehiclesByBrand
} from '../controller/VehiculeController.js';

const route = Router();

route.get('/vehicle', getVehicles);
route.get('/vehicle/:id', getVehiclesById);
route.delete('/vehicle/:id', deleteVehicle);
route.post('/vehicle', createVehicle);
route.get('/vehicle/search/:libelle', getVehiclesByBrand);

export default route;