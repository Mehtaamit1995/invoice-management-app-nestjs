import { CustomerService } from '../customer/customer.service';
import { InvoiceModel } from './invoice.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInvoiceDTO } from './invoice.dto';

@Injectable()
export class InvoiceService {

  constructor(
    @InjectRepository(InvoiceModel)
    private invoiceRepository: Repository<InvoiceModel>,
    private customerService: CustomerService
  ) { }

  async create(invoice: CreateInvoiceDTO): Promise<InvoiceModel> {
    const customer = await this.customerService.findOne(invoice.customer);
    const subTotal = invoice.items.reduce((acc, curr) => {
      return acc + Number((curr.rate * curr.quantity).toFixed(2))
    }, 0)
    console.log(" InvoiceService - subTotal - subTotal", subTotal)

    const taxAmount = subTotal * Number.parseFloat((invoice.taxRate / 100).toFixed(2));
    console.log(" InvoiceService - create - taxAmount", taxAmount)

    const total = subTotal + taxAmount;
    console.log(" InvoiceService - create - total", total)

    const outstandingBalance = total;
    console.log(" InvoiceService - create - outstandingBalance", outstandingBalance)
    
    return this.invoiceRepository.save({
      ...invoice,
      customer,
      subTotal,
      taxAmount,
      total,
      outstandingBalance
    } as any);

  }

  findAll(): Promise<InvoiceModel[]> {
    return this.invoiceRepository.find();
  }

  findByCustomer(id: string): Promise<InvoiceModel[]> {
    return this.invoiceRepository.createQueryBuilder("invoice")
      .where("invoice.customer = :id", { id })
      .getMany();
  }

  findOne(id: string): Promise<InvoiceModel> {
    return this.invoiceRepository.findOne(id);
  }

  // async delete(id: string): Promise<InvoiceModel> {
  //   return await this.invoiceRepository.findByIdAndRemove(id);
  // }

}
