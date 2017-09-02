import { Router } from 'express';

import * as controller from './controller';

const routes = Router();

routes.get('/popular', controller.getPopularMovies);

export default routes;