import Customer from '../database/models/Customer';
import TypesCustomer from '../@types/TypeCustomer';
import { ConflictError, NotFoundError } from '../helpers/ApiErrors';
import { Op } from 'sequelize';

class CustomerService {
  private modelCustomer;

  constructor() {
    this.modelCustomer = Customer;
  }

  public async getAllCustomer() {
    const result = await this.modelCustomer.findAll();
    return { status: 200, message: result };
  }

  public async createNewCustomer(newCustomer: TypesCustomer) {
    const { email, cpf } = newCustomer;
    const customer = await this.modelCustomer.findOne({
      where: { [Op.or]: [{ email }, { cpf }] },
    });
    if (customer) {
      throw new ConflictError('Customer already exists');
    }
    const result = await this.modelCustomer.create(newCustomer);
    return { status: 201, message: result };
  }

  public async updateCustomerById(customer: TypesCustomer, id: string) {
    await this.modelCustomer.update({ ...customer }, { where: { id } });
    return { status: 204, message: { message: 'The customer has been updated' } };
  }

  public async deleteCustomer(email: TypesCustomer, cpf: TypesCustomer) {
    const customerDelete = await this.modelCustomer.findOne({
      where: { [Op.or]: [{ email }, { cpf }] },
    });
    if (!customerDelete) {
      throw new NotFoundError('Customer does not exists');
    }
    await this.modelCustomer.destroy({
      where: { [Op.or]: [{ email }, { cpf }] },
    });
    return { status: 200, message: { message: 'The customer has been deleted' } };
  }
}

export default CustomerService;
