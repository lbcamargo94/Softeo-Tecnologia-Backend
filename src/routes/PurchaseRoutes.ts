import 'dotenv/config';
import { Router } from 'express';
import PurchaseController from '../controllers/PurchaseController';
import {
  customerIdValidation,
  paymantTypeValidation,
  purchaseDateValidation,
  totalInstallmentsValidation,
} from '../middlewares/PurchaseValidations';

const purchase = new PurchaseController();

const PurchaseRoute = Router();

PurchaseRoute.get('/purchase', purchase.getAllPurchase);

PurchaseRoute.get('/customer/:id', purchase.getByPurchaseId);

PurchaseRoute.get('/customer/purchase/:id', purchase.getPurchaseByCustomerId);

PurchaseRoute.post(
  '/customer/:id',
  customerIdValidation,
  paymantTypeValidation,
  purchaseDateValidation,
  totalInstallmentsValidation,
  purchase.createNewPurchase,
);

PurchaseRoute.delete('/customer/purchase/:id', purchase.deletePurchase);

export default PurchaseRoute;
