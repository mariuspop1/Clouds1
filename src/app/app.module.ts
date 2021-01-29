import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { SigninComponent } from './signin/signin.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import {HttpClientModule} from '@angular/common/http';
import {AccumulationChartModule,PieSeriesService,AccumulationDataLabelService,AccumulationLegendService,AccumulationTooltipService,ChartModule,ColumnSeriesService,CategoryService} from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ExpensesComponent,
    AddExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
    AccumulationChartModule,
    ChartModule
  ],
  providers: [PieSeriesService,AccumulationDataLabelService,AccumulationLegendService,AccumulationTooltipService,ColumnSeriesService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
