
import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../expenses.service';
import { User } from '../user.module';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  user: User;
 

  constructor(public expensesService: ExpensesService) { }
  
  ngOnInit(): void {
    this.user = this.expensesService.getUser();
  }

}
export class Friend {
  constructor(
    public country: string,
    public NewConfirmed: number,
    public TotalConfirmed: number,
    public NewDeaths: number,
    public TotalDeaths: number,
    public NewRecovered: number,
    public TotalRecovered: number,
    public Date: number
    
  ) {
  }
}
