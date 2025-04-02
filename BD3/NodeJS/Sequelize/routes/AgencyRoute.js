import Router from 'express';

import {
    getAgency,
    getAgencyById,
    deleteAgency,
    createAgency
} from '../controller/AgencyController.js';

const route = Router();

route.get('/agency', getAgency);
route.get('/agency/:id', getAgencyById);
route.delete('/agency/:id', deleteAgency);
route.post('/agency', createAgency);

export default route;