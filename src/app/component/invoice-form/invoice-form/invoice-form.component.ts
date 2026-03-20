import {Component, OnInit} from '@angular/core';
import { Invoice } from "../../../model/invoice";
import { InvoiceTypes } from "../../../model/invoice-types";
import { ActivatedRoute, Router } from "@angular/router";
import { InvoiceService } from "../../../service/invoice.service";
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  invoice: Invoice;
  invoiceTypes!: String[];
  invoiceKinds!: String[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private invoiceService: InvoiceService) {
    this.invoice = new Invoice();
  }

  ngOnInit(): void {
    this.invoiceService.getInvoiceTypes()
      .subscribe(data => this.invoiceTypes = data);

    this.invoiceService.getInvoiceKinds()
      .subscribe(data => this.invoiceKinds = data);
  }

  onSubmit() {
    console.log("onSubmit:");
    console.log(this.invoice);
    this.invoiceService.save(this.invoice)
      .subscribe(result => this.gotoInvoiceList());
  }

  gotoInvoiceList() {
    this.router.navigate(['/invoices']);
  }

}
