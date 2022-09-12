import { NotFoundError } from './../helpers/ApiErrors';
import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../helpers/ApiErrors';
import CustomerService from '../services/CustomerService';
import validator from 'validator';

export const customerIdValidation = async (req: Request, _res: Response, next: NextFunction) => {
  const { id } = req.params;
  const customerService = new CustomerService();
  const result = await customerService.getByCustomerId(Number(id));
  if (!result) {
    throw new NotFoundError('Customer does not exist');
  }
  next();
};

export const paymantTypeValidation = async (req: Request, _res: Response, next: NextFunction) => {
  const { paymantType } = req.body;
  const paymantTypes = ['à vista', 'parcelado'];
  if (!paymantType) {
    throw new BadRequestError('Paymant type are required');
  }
  if (!paymantTypes.includes(paymantType)) {
    throw new BadRequestError(`Paymant type must be one of ${paymantTypes}`);
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
  const { paymantType, totalInstallments } = req.body;
  const paymentInInstallments = paymantType == 'parcelado';
  if (!paymentInInstallments && totalInstallments > 0) {
    throw new BadRequestError('Installments value is invalid');
  }
  next();
};
