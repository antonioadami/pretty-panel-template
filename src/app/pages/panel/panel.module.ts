import { NgModule } from '@angular/core';

import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel.routing.module';

@NgModule({
  declarations: [PanelComponent],
  imports: [PanelRoutingModule],
  providers: [],
  exports: [PanelComponent]
})
export class PanelModule {}
