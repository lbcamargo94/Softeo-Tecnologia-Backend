import { Request, Response } from 'express';
import PuschaseService from '../services/PurchaseService';
import TypesPurchase from '../@types/TypePurchase';

class PurchaseController {
  private servicePurchase: PuschaseService;

  constructor() {
    this.servicePurchase = new PuschaseService();
  }

  public getAllCustommer = async (_req: Request, res: Response): Promise<Response | void> => {
    const result = await this.servicePurchase.getAllPurchase();
    return res.status(result.status).json(result.message);
  };

  public getByPurchaseId = async (req: Request, res: Response): Promise<Response | void> => {
    const { id } = req.params;
    const result = await this.servicePurchase.getByPurchaseId(Number(id));
    return res.status(result.status).json(result.message);
  };

  public createNewPurchase = async (req: Request, res: Response): Promise<Response | void> => {
    const newPurchase = req.body;
    const result = await this.servicePurchase.createNewPurchase({ ...newPurchase } as TypesPurchase);
    return res.status(result.status).json(result.message);
  };

  public deletePurchase = async (req: Request, res: Response): Promise<Response | void> => {
    const { id } = req.params;
    const result = await this.servicePurchase.deletePurchase(Number(id));
    return res.status(result.status).json(result.message);
  };
}

export default PurchaseController;
