import Purchase from '../database/models/Purchase';
import Customer from '../database/models/Customer';
import TypesPurchase from '../@types/TypePurchase';
import { NotFoundError } from '../helpers/ApiErrors';

class PurchaseService {
  private modelPurchase;

  constructor() {
    this.modelPurchase = Purchase;
  }

  public async getPurchaseByCustomerId(customerId: number) {
    const config = {
      where: { customerId: customerId },
      include: [{ model: Customer, as: 'id_customer', attributes: { exclude: ['id'] } }],
    };
    const result = await this.modelPurchase.findAll(config);
    return { status: 200, message: result };
  }

  public async getByPurchaseId(id: number) {
    const result = await this.modelPurchase.findOne({ where: { id } });
    return { status: 200, message: result };
  }

  public async getAllPurchase() {
    const result = await this.modelPurchase.findAll();
    return { status: 200, message: result };
  }

  public async createNewPurchase(newPurchase: TypesPurchase) {
    const result = await this.modelPurchase.create(newPurchase);
    return { status: 200, message: result };
  }

  public async deletePurchase(id: number) {
    const purchaseDelete = await this.modelPurchase.findOne({ where: { id } });
    if (!purchaseDelete) {
      throw new NotFoundError('Purchase does not exists');
    }
    await this.modelPurchase.destroy({ where: { id } });
    return { status: 200, message: { message: 'The purchase has been deleted' } };
  }
}

export default PurchaseService;
