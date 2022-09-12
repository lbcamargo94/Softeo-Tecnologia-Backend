import { Request, Response } from 'express';
import CustomerService from '../services/CustomerService';
import TypesCustomer from '../@types/TypeCustomer';

class CustommerConstroller {
  private serviceCustommer: CustomerService;

  constructor() {
    this.serviceCustommer = new CustomerService();
  }

  public getAllCustommer = async (_req: Request, res: Response): Promise<Response | void> => {
    try {
      const result = await this.serviceCustommer.getAllCustomer();
      return res.status(result.status).json(result.message);
    } catch (error) {
      console.log(error);
    }
  };

  public createNewCustomer = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const newCustomer = req.body;
      const result = await this.serviceCustommer.createNewCustomer({ ...newCustomer } as TypesCustomer);
      return res.status(result.status).json(result.message);
    } catch (error) {
      console.log(error);
    }
  };

  public updateCustomerById = async (req: Request, res: Response): Promise<Response | void> => {
    const customer = req.body;
    const { id } = req.params;
    const result = await this.serviceCustommer.updateCustomerById(customer, id);
    return res.status(result.status).json(result.message);
  };

  public deleteCustomer = async (req: Request, res: Response): Promise<Response | void> => {
    const { email, cpf } = req.body;
    const result = await this.serviceCustommer.deleteCustomer(email, cpf);
    return res.status(result.status).json(result.message);
  };
}

export default CustommerConstroller;
