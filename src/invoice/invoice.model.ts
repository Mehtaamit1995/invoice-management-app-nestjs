
import { CustomerModel } from './../customer/customer.model';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';


@ObjectType()
export class Item {
  @Field()
  description: string;

  @Field()
  rate: number;

  @Field()
  quantity: number
}

@ObjectType()
@Entity()
export class InvoiceModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ nullable: true })
  @Column({ length: 500, nullable: false })
  invoiceNo: string;

  @Field({ nullable: true })
  @Column('text')
  description: string;

  @Field(type => CustomerModel, { nullable: true })
  @ManyToOne(type => CustomerModel, customer => customer.invoices)
  customer: CustomerModel;


  @Field()
  @Column()
  taxRate: number;

  @Field()
  @Column()
  issueDate: string;

  @Field()
  @Column()
  dueDate: string;

  @Field()
  @Column('text')
  note: string;

  @Field(type => [Item])
  @Column({
    type: 'jsonb',
    array: false,
    default: [],
    nullable: false,
  })
  Items: Item[];

  @Column()
  @Field()
  taxAmount: number;

  @Column()
  @Field()
  subTotal: string;

  @Column()
  @Field()
  total: number;

  @Column({
    default: 0
  })
  @Field()
  amountPaid: number;

  @Column()
  @Field()
  outstandingBalance: number;

  @Field()
  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}