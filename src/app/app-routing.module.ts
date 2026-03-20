import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceListComponent } from "./component/invoice-list/invoice-list/invoice-list.component";
import { InvoiceFormComponent } from "./component/invoice-form/invoice-form/invoice-form.component";
import {TaxComparatorComponent} from "./component/tax-comparator/tax-comparator.component";

const routes: Routes = [
  { path: 'invoices', component: InvoiceListComponent },
  { path: 'addInvoice', component: InvoiceFormComponent },
  { path: 'taxComparator', component: TaxComparatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
