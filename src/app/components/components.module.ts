import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [RouterModule, FontAwesomeModule],
  providers: [],
  exports: [SidebarComponent],
})
export class ComponentsModule {}
