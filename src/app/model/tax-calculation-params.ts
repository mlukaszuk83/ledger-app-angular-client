import {Income} from "./income";
import {Cost} from "./cost";

export class TaxCalculationParams {

  income: Income;
  cost: Cost;

  constructor(income: Income, cost: Cost) {
    this.income = income;
    this.cost = cost;
  }
}
