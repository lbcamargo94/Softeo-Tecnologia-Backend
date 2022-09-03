import { Request, Response } from 'express';
import CustomerService from '../services/CustomerService';
import TypesCustomer from '../@types/TypeCustomer';

class ConstrollerCustommer {
  private serviceCustommer: CustomerService;

  constructor() {
    this.serviceCustommer = new CustomerService();
  }

  public getAllCustommer = async (req: Request, res: Response): Promise<Response | void> => {
    const result = await this.serviceCustommer.getAllCustomer();
    return res.status(result.status).json(result.message);
  };

  public createNewCustomer = async (req: Request, res: Response): Promise<Response | void> => {
    const newCustomer = req.body;
    const result = await this.serviceCustommer.createNewCustomer({ ...newCustomer } as TypesCustomer);
    return res.status(result.status).json(result.message);
  };
}

export default ConstrollerCustommer;
