import { Router } from 'express';

const Route = Router();

Route.get('/', (_req, res) => res.json({ test: 'Meu airton é foda! by VHBS.py' }));

export default Route;
