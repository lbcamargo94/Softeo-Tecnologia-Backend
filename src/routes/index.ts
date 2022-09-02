import { Router } from 'express';
import ControllerCustommer from '../controllers/ControllerCustomer';
import 'dotenv/config';

const Route = Router();

const customer = new ControllerCustommer();

Route.get('/', customer.getAllCustommer);

Route.post('/register', customer.createCustomer);

export default Route;
