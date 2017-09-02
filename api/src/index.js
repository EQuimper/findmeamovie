import express from 'express';

import Routes from './modules';

require('dotenv').config();

const app = express();

app.use('/api/v1', Routes);

app.listen(3000, () => console.log('yes work'))