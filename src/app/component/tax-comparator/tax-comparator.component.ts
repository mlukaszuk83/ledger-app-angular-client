import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TaxComparatorService} from "../../service/tax-comparator.service";
import {Income} from "../../model/income";
import {Cost} from "../../model/cost";
import {TaxCalculationResult} from "../../model/tax-calculation-result";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tax-comparator',
  templateUrl: './tax-comparator.component.html',
  styleUrls: ['./tax-comparator.component.scss']
})
export class TaxComparatorComponent implements OnInit {

  income: Income;
  cost: Cost;
  calculationResults?: TaxCalculationResult[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private taxComparatorService: TaxComparatorService) {

    this.income = new Income();
    this.cost = new Cost();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("onSubmit:");
    console.log(this.income);
    console.log(this.cost);
    this.taxComparatorService.calculate(this.income, this.cost)
      .subscribe(data => this.calculationResults = data);
  }
}
