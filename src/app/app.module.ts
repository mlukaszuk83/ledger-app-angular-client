import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceListComponent } from './component/invoice-list/invoice-list/invoice-list.component';
import { InvoiceFormComponent } from './component/invoice-form/invoice-form/invoice-form.component';
import { InvoiceService } from "./service/invoice.service";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TaxComparatorComponent } from './component/tax-comparator/tax-comparator.component';
import {TaxComparatorService} from "./service/tax-comparator.service";

@NgModule({
  declarations: [
    AppComponent,
    InvoiceListComponent,
    InvoiceFormComponent,
    TaxComparatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [InvoiceService, TaxComparatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
