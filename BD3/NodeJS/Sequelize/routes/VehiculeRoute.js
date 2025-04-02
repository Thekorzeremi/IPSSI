import Router from 'express';

import {
    getVehicles,
    getVehiclesById,
    deleteVehicle,
    createVehicle,
    getVehiclesByBrand
} from '../controller/VehiculeController.js';

const VehiculeRoute = Router();

VehiculeRoute.get('/vehicle', getVehicles);
VehiculeRoute.get('/vehicle/:id', getVehiclesById);
VehiculeRoute.delete('/vehicle/:id', deleteVehicle);
VehiculeRoute.post('/vehicle', createVehicle);
VehiculeRoute.get('/vehicle/search/:libelle', getVehiclesByBrand);

export default VehiculeRoute;