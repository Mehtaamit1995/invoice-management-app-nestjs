import { CustomerModel } from '../customer/customer.model';
import { CustomerService } from '../customer/customer.service';
import { InvoiceService } from './invoice.service';
import { Resolver, Query, Args, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { InvoiceModel } from './invoice.model';
import { CreateInvoiceDTO } from './invoice.dto';

@Resolver(of => InvoiceModel)
export class InvoiceResolver {
  constructor(
    @Inject(InvoiceService) private invoiceService: InvoiceService,
    @Inject(CustomerService) private customerService: CustomerService
  ) { }
  @Query(returns => InvoiceModel)
  async invoice(@Args('id') id: string): Promise<InvoiceModel> {
    return await this.invoiceService.findOne(id);
  }

  @ResolveField(returns => CustomerModel)
  async customer(@Parent() invoice) {
    const { customer } = invoice;
    return this.customerService.findOne(customer);
  }

  @Query(returns => [InvoiceModel])
  async invoices(): Promise<InvoiceModel[]> {
    return await this.invoiceService.findAll();
  }


  // @Query(returns => InvoiceModel)
  // async invoice(id: string): Promise<InvoiceModel> {
  //   return await this.invoiceService.
  // }


  @Mutation(returns => InvoiceModel)
  async createInvoice(
    @Args('invoice') invoice: CreateInvoiceDTO,
  ): Promise<InvoiceModel> {
    return await this.invoiceService.create(invoice)
  }

  // @Mutation(returns  => InvoiceModel)
  // async deleteItem(@Args('id') id: string) {
  //   return await this.invoiceService.delete(id);


  // @Mutation(returns => InvoiceModel)
  // async delete(id: string): Promise<DeleteModelInvoice>{
  //   const a = this.invoiceRepository.delete({ id })
  //   if((await a).affected){
  //     return {status:200, message: 'deleted'}
  //   }
  // }

  // @Mutation(returns => InvoiceModel)
  // async createPdf(
  //   @Args('pdf') pdf:) Promise<InvoiceModel> {
  //     return await this.invoiceService.create()
  //   }
  // )
}