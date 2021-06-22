import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgApexchartsModule } from 'ng-apexcharts';

import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [DashboardComponent, TablesComponent, FormsComponent],
  imports: [
    FontAwesomeModule,
    MatTableModule,
    MatTooltipModule,
    NgApexchartsModule,
  ],
})
export class PagesModule {}
