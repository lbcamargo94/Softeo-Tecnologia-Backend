import 'express-async-errors';
import express from 'express';
import Routes from './routes';
import cors from 'cors';
import { errorMiddleware } from './middlewares/HandleError';

const app: express.Express = express();

app.use(cors());

app.use(express.json());

app.use(Routes);

app.use(errorMiddleware);

export { app };
