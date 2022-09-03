import 'dotenv/config';
import { Router } from 'express';
import ConstrollerCustommer from '../controllers/CustomerController';

const customer = new ConstrollerCustommer();

const Route = Router();

Route.get('/', customer.getAllCustommer);

Route.post('/register', customer.createCustomer);

export default Route;
