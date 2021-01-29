import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {

  date: any;
  description: string;
  amount: number;
  constructor() { }

  ngOnInit(): void {
  }

}
