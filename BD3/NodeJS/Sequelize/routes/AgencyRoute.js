import Router from 'express';

import {
    getAgency,
    getAgencyById,
    deleteAgency,
    createAgency
} from '../controller/AgencyController.js';

const AgencyRoute = Router();

AgencyRoute.get('/agency', getAgency);
AgencyRoute.get('/agency/:id', getAgencyById);
AgencyRoute.delete('/agency/:id', deleteAgency);
AgencyRoute.post('/agency', createAgency);

export default AgencyRoute;