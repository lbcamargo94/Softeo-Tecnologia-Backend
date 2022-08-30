import { Router } from 'express';

const Route = Router();

Route.get('/', (_req, res) => res.json({ test: 'OK!' }));

export default Route;
