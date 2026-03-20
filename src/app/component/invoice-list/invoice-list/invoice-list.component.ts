import { Component, OnInit } from '@angular/core';
import {InvoiceService} from "../../../service/invoice.service";
import {Invoice} from "../../../model/invoice";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  invoices!: Invoice[];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.findAll()
      .subscribe(data => this.invoices = data);
  }

}
