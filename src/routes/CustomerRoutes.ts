import 'dotenv/config';
import { Router } from 'express';
import ConstrollerCustommer from '../controllers/CustomerController';
import {
  nameValidation,
  emailValidation,
  phoneNumberValidation,
  cpfValidation,
  addressValidation,
} from '../middlewares/CustomerValidation';

const customer = new ConstrollerCustommer();

const Route = Router();

Route.get('/', customer.getAllCustommer);

Route.post(
  '/register',
  nameValidation,
  emailValidation,
  phoneNumberValidation,
  cpfValidation,
  addressValidation,
  customer.createCustomer,
);

Route.patch('/customer/:id');

Route.delete('/customer/:id');

export default Route;
