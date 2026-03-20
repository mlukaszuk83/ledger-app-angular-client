import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Invoice } from "../model/invoice";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private readonly invoicesUrl: string;

  constructor(private http: HttpClient) {
    this.invoicesUrl = environment.restApiUrl + "/invoices"
  }

  public findAll(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.invoicesUrl);
  }

  public save(invoice: Invoice) {
    return this.http.post<Invoice>(this.invoicesUrl + "/add", invoice);
  }

  public getInvoiceTypes(): Observable<String[]> {
    return this.http.get<String[]>(this.invoicesUrl + '/types');
  }

  public getInvoiceKinds(): Observable<String[]> {
    return this.http.get<String[]>(this.invoicesUrl + '/kinds');
  }
}
