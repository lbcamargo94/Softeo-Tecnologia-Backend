import 'dotenv/config';
import { Router } from 'express';
import CustomerConstroller from '../controllers/CustomerController';
import {
  nameValidation,
  emailValidation,
  phoneNumberValidation,
  cpfValidation,
  addressValidation,
} from '../middlewares/CustomerValidations';

const customer = new CustomerConstroller();

const CustomerRoute = Router();

CustomerRoute.get('/', customer.getAllCustommer);

CustomerRoute.post(
  '/register',
  nameValidation,
  emailValidation,
  phoneNumberValidation,
  cpfValidation,
  addressValidation,
  customer.createNewCustomer,
);

CustomerRoute.patch(
  '/customer/:id',
  nameValidation,
  emailValidation,
  phoneNumberValidation,
  cpfValidation,
  addressValidation,
  customer.updateCustomerById,
);

CustomerRoute.delete('/customer/:id', emailValidation, cpfValidation, customer.deleteCustomer);

export default CustomerRoute;
