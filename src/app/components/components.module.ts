import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatButtonModule } from '@angular/material/button';

import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [RouterModule, FontAwesomeModule, MatButtonModule],
  providers: [],
  exports: [SidebarComponent],
})
export class ComponentsModule {}
