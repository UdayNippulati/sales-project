import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  salesPersonList: SalesPerson[] = [
    new SalesPerson('uday', 'nippulati', 'nippulatiuday@gmail.com', 80),
    new SalesPerson('dinesh', 'jalagam', 'jalagamdinesh@gmail.com', 90),
    new SalesPerson('keerthi', 'ramagiri', 'ramagirikeerthi@gmail.com', 92),
    new SalesPerson('vinvitha', 'akkati', 'akkativinvitha@gmail.com', 91),
  ];

  constructor() {}

  ngOnInit(): void {}
}
