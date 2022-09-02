import { Request, Response } from 'express';
import ServiceCustomer from '../services/ServiceCustomer';
import custumoer from '../@types/TypeCustomer';

class ConstrollerCustommer {
  private serviceCustommer: ServiceCustomer;

  constructor() {
    this.serviceCustommer = new ServiceCustomer();
  }

  public getAllCustommer = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const result = await this.serviceCustommer.getAll();
      return res.status(result.status).json(result.message);
    } catch (error) {
      console.log(error);
      return res.status(401).json(error);
    }
  };

  public createCustomer = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const newCustomer = req.body;
      const result = await this.serviceCustommer.createCustomer({ ...newCustomer } as custumoer);
      return res.status(result.status).json(result.message);
    } catch (error) {
      console.log(error);
      return res.status(401).json(error);
    }
  };
}

export default ConstrollerCustommer;
