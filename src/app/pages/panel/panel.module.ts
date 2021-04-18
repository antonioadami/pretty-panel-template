import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';

import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel.routing.module';

@NgModule({
  declarations: [PanelComponent],
  imports: [PanelRoutingModule, ComponentsModule],
  providers: [],
  exports: [PanelComponent]
})
export class PanelModule {}
