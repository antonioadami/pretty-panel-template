import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PanelComponent } from './panel.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
