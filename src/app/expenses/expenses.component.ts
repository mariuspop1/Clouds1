import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pointByIndex } from '@syncfusion/ej2-angular-charts';
import { ExpensesService } from '../expenses.service';
import { User } from '../user.module';
export class Covid {
  constructor(
    Countries: string
  ) {
  }
}
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  public data: Object[];
  public data1: Object[];
  public data2: Object[];
  public data3: Object[];
  public chartTitle: string;
  public chartTitle1: string;
  public chartLabel: Object;
  public legend: Object;
  public legend1: Object;
  public tooltipsettings: Object;
  public xAxis: Object;
  public yAxis:Object;
  user: User;
  covid: Covid[];

  constructor(public expensesService: ExpensesService, private httpClient: HttpClient) {
    this.chartTitle='Corona Virus Cases Distribution Worldwide';
    this.chartTitle1='Daily Corona Virus Cases Worldwide';

    this.data =[
      { name: 'Dead Cases', value: 1213657},
      {name: 'Recovered Cases', value: 31602608},
      {name: 'Active Cases', value: 15795503}
      
    ];
    this.data1 =[
      { name: '29 Feb', value: 762318},
      {name: '30 Feb', value: 125315},
      {name: '31 Feb', value: 445996}
      
    ];
    this.data2 =[
      { name: '29 Feb', value: 982532},
      {name: '30 Feb', value: 256315},
      {name: '31 Feb', value: 449996}
      
    ];
    this.data3 =[
      { name: '29 Feb', value: 1242151},
      {name: '30 Feb', value: 257515},
      {name: '31 Feb', value: 862596}
      
    ];
    this.tooltipsettings={
      enable: true,
   
    }
    this.chartLabel={
      visible: true,
      position: 'Inside',
      name: 'text'
    };
    this.legend={
      visible: true,
      position: 'Bottom',
      height: '8%',
      width: '35%'
    };
    this.legend1={
      visible: true,
      position: 'Bottom',
      height: '8%',
      width: '35%'
    };
    this.xAxis={
      valueType: 'Category'
    };
    this.yAxis={

    };
   }

  ngOnInit(): void {  
    this.user = this.expensesService.getUser();
    this.getFriends();
  }
getFriends(Countries=''){
  this.covid = [];
  console.log(Countries);
  this.httpClient.get<any>('https://api.covid19api.com/summary')

  .subscribe(
  response => {
    console.log(response);
    this.covid = response;
  }

  );
}
}
