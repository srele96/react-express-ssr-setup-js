import path from 'path';
import express from 'express';
import * as middleware from './middleware';
import { router } from './routes';

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use('/', router);
app.use(middleware.notFound);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT);
