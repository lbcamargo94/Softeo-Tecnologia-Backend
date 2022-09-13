import { NotFoundError } from './../helpers/ApiErrors';
import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../helpers/ApiErrors';
import CustomerService from '../services/CustomerService';
import validator from 'validator';

export const customerIdValidation = async (req: Request, _res: Response, next: NextFunction) => {
  const { customerId } = req.body;
  const customerService = new CustomerService();
  const result = await customerService.getByCustomerId(Number(customerId));
  if (!result) {
    throw new NotFoundError('Customer does not exist');
  }
  next();
};

export const paymentTypeValidation = async (req: Request, _res: Response, next: NextFunction) => {
  const { paymentType } = req.body;
  const paymentTypes = ['à vista', 'parcelado'];
  if (!paymentType) {
    throw new BadRequestError('Payment type are required');
  }
  if (!paymentTypes.includes(paymentType)) {
    throw new BadRequestError(`Payment type must be one of ${paymentType}`);
  }
  next();
};

export const purchaseDateValidation = async (req: Request, _res: Response, next: NextFunction) => {
  const { purchaseDate } = req.body;
  const validDate = validator.isDate(purchaseDate);
  if (!purchaseDate) {
    throw new BadRequestError('Purchase Date are required');
  }
  if (!validDate) {
    throw new BadRequestError('Invalid purchase date');
  }
  next();
};

export const totalInstallmentsValidation = async (req: Request, _res: Response, next: NextFunction) => {
  const { paymentType, totalInstallments } = req.body;
  const paymentInInstallments = paymentType == 'parcelado';
  if (!paymentInInstallments && totalInstallments > 0) {
    throw new BadRequestError('Installments value is invalid');
  }
  next();
};
