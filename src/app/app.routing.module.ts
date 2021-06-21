import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsComponent } from './pages/forms/forms.component';
import { TablesComponent } from './pages/tables/tables.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
    },
  },
  {
    path: 'tables',
    component: TablesComponent,
    data: {
      title: 'Tables',
    },
  },
  {
    path: 'forms',
    component: FormsComponent,
    data: {
      title: 'Forms',
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
