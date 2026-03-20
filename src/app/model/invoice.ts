
export class Invoice {

  name!: string;
  invoiceType!: string;
  invoiceKind!: string;

  netValue!: number;
  grossValue!: number;

  issueDate!: Date;
  saleDate!: Date;
  createdOn!: Date;
  updatedOn!: Date;
}
