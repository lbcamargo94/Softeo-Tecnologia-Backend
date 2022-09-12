import CustomerRoutes from '../routes/CustomerRoutes';
import PurchaseRoutes from '../routes/PurchaseRoutes';
import { Router } from 'express';

const Routes = Router();

const customerRoutes = CustomerRoutes;

const purchaseRoutes = PurchaseRoutes;

Routes.use(customerRoutes);

Routes.use(purchaseRoutes);

export default Routes;
