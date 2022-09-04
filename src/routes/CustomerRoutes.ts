import 'dotenv/config';
import { Router } from 'express';
import CustommerConstroller from '../controllers/CustomerController';
import {
  nameValidation,
  emailValidation,
  phoneNumberValidation,
  cpfValidation,
  addressValidation,
} from '../middlewares/CustomerValidation';

const customer = new CustommerConstroller();

const Route = Router();

Route.get('/', customer.getAllCustommer);

Route.post(
  '/register',
  nameValidation,
  emailValidation,
  phoneNumberValidation,
  cpfValidation,
  addressValidation,
  customer.createNewCustomer,
);

Route.patch(
  '/customer/:id',
  nameValidation,
  emailValidation,
  phoneNumberValidation,
  cpfValidation,
  addressValidation,
  customer.updateCustomerById,
);

Route.delete('/customer/:id', emailValidation, cpfValidation, customer.deleteCustomer);

export default Route;
