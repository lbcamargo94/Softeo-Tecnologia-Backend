import CustomerRoutes from '../routes/CustomerRoutes';
import { Router } from 'express';

const Routes = Router();

const customerRoutes = CustomerRoutes;

Routes.use(customerRoutes);

export default Routes;
