import { Router } from 'express';

import MoviesRoutes from './movies';

const routes = Router();

routes.use('/movies', MoviesRoutes);

export default routes;
