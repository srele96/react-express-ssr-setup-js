import routes from '../../shared-routes';
import * as controllers from '../controllers';
import express from 'express';
const router = express.Router();

router.get(routes.index, controllers.homeGET);
router.get(routes.withData, controllers.withDataGET);

export { router };
