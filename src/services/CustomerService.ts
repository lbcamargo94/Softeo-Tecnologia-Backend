import Customer from '../database/models/Customer';
import TypesCustomer from '../@types/TypeCustomer';

class CustomerService {
  private modelCustomer;

  constructor() {
    this.modelCustomer = Customer;
  }

  public async getAllCustomer() {
    const result = await this.modelCustomer.findAll();
    return { status: 200, message: result };
  }

  public async createCustomer(newCustomer: TypesCustomer) {
    const result = await this.modelCustomer.create(newCustomer);
    return { status: 201, message: result };
  }
}

export default CustomerService;
