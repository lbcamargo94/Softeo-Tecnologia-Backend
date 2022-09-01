import Customer from '../database/models/Customer';

class ServiceCustomer {
  private modelCustomer;

  constructor() {
    this.modelCustomer = Customer;
  }

  public async createCustomer(customer: Customer) {
    const result = await this.modelCustomer.create({ customer });

    return { status: 201, message: result };
  }
}

export default ServiceCustomer;
