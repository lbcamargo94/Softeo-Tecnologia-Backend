import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../helpers/ApiErrors';
import { cpf } from 'cpf-cnpj-validator';
import validator from 'validator';

export const nameValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { fullName } = req.body;

  if (!fullName) {
    throw new BadRequestError('Full Name is required');
  }

  if (fullName.length > 30) {
    throw new BadRequestError('Full Name must be at least 30 characters long');
  }

  next();
};

export const emailValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { email } = req.body;
  const verifyEmail = validator.isEmail(email);

  if (!email) {
    throw new BadRequestError('Email are required');
  }

  if (!verifyEmail) {
    throw new BadRequestError('Invalid email');
  }

  next();
};

export const phoneNumberValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { phoneNumber } = req.body;
  const verifyPhoneNumner = validator.isMobilePhone(phoneNumber);

  if (!phoneNumber) {
    throw new BadRequestError('Phone Number are required');
  }

  if (phoneNumber.length !== 14) {
    throw new BadRequestError('Phone Number must be 11 characters long');
  }

  if (!verifyPhoneNumner) {
    throw new BadRequestError('Invalid phone number');
  }

  next();
};

export const cpfValidation = (req: Request, _res: Response, next: NextFunction) => {
  const body = req.body;
  const verifyCpf = cpf.isValid(body.cpf);
  console.log(body, body.cpf);

  if (!body.cpf) {
    throw new BadRequestError('CPF are required');
  }

  if (body.cpf.length !== 11) {
    throw new BadRequestError('CPF must be 11 characters long');
  }

  if (verifyCpf) {
    throw new BadRequestError('Invalid CPF');
  }

  next();
};

export const addressValidation = (req: Request, res: Response, next: NextFunction) => {
  const { address } = req.body;

  if (!address) {
    throw new BadRequestError('Address are required');
  }

  next();
};
