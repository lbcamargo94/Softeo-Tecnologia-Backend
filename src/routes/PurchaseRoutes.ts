import 'dotenv/config';
import { Router } from 'express';
import PurchaseController from 'src/controllers/PurchaseController';
import {
  customerIdValidation,
  paymantTypeValidation,
  purchaseDateValidation,
  totalInstallmentsValidation,
} from '../middlewares/PurchaseValidations';

const purchase = new PurchaseController();

const PurchaseRoute = Router();

PurchaseRoute.get('/customer/:id', purchase.getByCustomerId);

PurchaseRoute.get('/customer/purchase/:id', purchase.getByCustomerId);

PurchaseRoute.get('/purchase', purchase.getAllPurchase);

PurchaseRoute.post(
  '/purchase/create',
  customerIdValidation,
  paymantTypeValidation,
  purchaseDateValidation,
  totalInstallmentsValidation,
  purchase.createNewPurchase,
);

PurchaseRoute.delete('/customer/purchase/:id', purchase.deletePurchase);
