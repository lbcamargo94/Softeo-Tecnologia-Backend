import Payment from '../database/models/Payment';
import TypePayment from '../@types/TypePayment';

class PaymentService {
  private modelPayment;

  constructor() {
    this.modelPayment = Payment;
  }

  public async createNewPayment(newPayment: TypePayment) {
    const result = await this.modelPayment.create(newPayment);
    return { status: 200, message: result };
  }

  // public async createNewPayment(newPayment: TypePayment) {
  //   const result = await this.modelPayment.create(newPayment);
  //   return { status: 200, message: result };
  // }
}

export default PaymentService;
