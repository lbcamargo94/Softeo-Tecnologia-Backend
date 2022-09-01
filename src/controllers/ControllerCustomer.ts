import { Request, Response } from 'express';
import Customer from 'src/database/models/Customer';
import ServiceCustomer from 'src/services/ServiceCustomer';

class ConstrollerCustommer {
  private serviceCustommer: ServiceCustomer;

  constructor() {
    this.serviceCustommer = new ServiceCustomer();
  }

  public createCustomer = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const customer = req.body;
      const result = await this.serviceCustommer.createCustomer({ ...customer } as Customer);

      return res.status(result.status).json(result.message);
    } catch (error) {
      return res.status(401).json(error);
    }
  };
}

export default ConstrollerCustommer;
