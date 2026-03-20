import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import {Income} from "../model/income";
import {Cost} from "../model/cost";
import {HttpClient} from "@angular/common/http";
import {TaxCalculationParams} from "../model/tax-calculation-params";
import {TaxCalculationResult} from "../model/tax-calculation-result";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaxComparatorService {

  private readonly taxCalculatorUrl: string;

  constructor(private http: HttpClient) {
    this.taxCalculatorUrl = environment.restApiUrl + "/taxCalculator"
  }

  calculate(income: Income, cost: Cost): Observable<TaxCalculationResult[]> {
    return this.http.post<TaxCalculationResult[]>(this.taxCalculatorUrl + "/calculate", new TaxCalculationParams(income, cost));
  }
}
