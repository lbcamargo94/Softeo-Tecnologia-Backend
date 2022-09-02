import Customer from '../database/models/Customer';
import customer from '../@types/TypeCustomer';

class ServiceCustomer {
  private modelCustomer;

  constructor() {
    this.modelCustomer = Customer;
  }

  public async getAll() {
    const result = await this.modelCustomer.findAll();

    return { status: 200, message: result };
  }

  public async createCustomer(customer: customer) {
    const result = await this.modelCustomer.create(customer);

    return { status: 201, message: result };
  }
}

export default ServiceCustomer;
