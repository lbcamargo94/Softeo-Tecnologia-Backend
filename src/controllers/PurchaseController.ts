import { Request, Response } from 'express';
import PuschaseService from '../services/PurchaseService';
import TypesPurchase from '../@types/TypePurchase';

class PurchaseController {
  private servicePurchase: PuschaseService;

  constructor() {
    this.servicePurchase = new PuschaseService();
  }

  public getAllPurchase = async (_req: Request, res: Response): Promise<Response | void> => {
    try {
      const result = await this.servicePurchase.getAllPurchase();
      return res.status(result.status).json(result.message);
    } catch (error) {
      console.log('CONTROLLER_getAllPurchase:', error);
    }
  };

  public getPurchaseByCustomerId = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const { id } = req.params;
      console.log('CONTROLLER', id);
      const result = await this.servicePurchase.getPurchaseByCustomerId(Number(id));
      return res.status(result.status).json(result.message);
    } catch (error) {
      console.log('CONTROLLER_getByCustomerId:', error);
    }
  };

  public getByPurchaseId = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const { id } = req.params;
      const result = await this.servicePurchase.getByPurchaseId(Number(id));
      return res.status(result.status).json(result.message);
    } catch (error) {
      console.log('CONTROLLER_getByPurchaseId', error);
    }
  };

  public createNewPurchase = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const newPurchase = req.body;
      const result = await this.servicePurchase.createNewPurchase({
        ...newPurchase,
      } as TypesPurchase);
      return res.status(result.status).json(result.message);
    } catch (error) {
      console.log('CONTROLLER_createNewPurchase', error);
    }
  };

  public deletePurchase = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const { id } = req.params;
      const result = await this.servicePurchase.deletePurchase(Number(id));
      return res.status(result.status).json(result.message);
    } catch (error) {
      console.log('CONTROLLER_deletePurchase', error);
    }
  };
}

export default PurchaseController;
