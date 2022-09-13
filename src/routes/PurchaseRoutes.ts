import 'dotenv/config';
import { Router } from 'express';
import PurchaseController from '../controllers/PurchaseController';
import {
  customerIdValidation,
  paymentTypeValidation,
  purchaseDateValidation,
  totalInstallmentsValidation,
} from '../middlewares/PurchaseValidations';

const purchase = new PurchaseController();

const PurchaseRoute = Router();

PurchaseRoute.get('/purchase', purchase.getAllPurchase);

PurchaseRoute.get('/purchase/:id', purchase.getByPurchaseId);

PurchaseRoute.get('/customer/:id', purchase.getPurchaseByCustomerId);

PurchaseRoute.post(
  '/register/purchase',
  customerIdValidation,
  paymentTypeValidation,
  purchaseDateValidation,
  totalInstallmentsValidation,
  purchase.createNewPurchase,
);

PurchaseRoute.delete('/purchase/:id', purchase.deletePurchase);

export default PurchaseRoute;
