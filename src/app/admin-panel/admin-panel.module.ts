import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelRoutingModule } from './admin-apmel-routing.module';
import { FormsModule } from '@angular/forms';
import { PrimengUiModule} from '../primeng-ui.module';
@NgModule({
  declarations: [
    AdminPanelComponent
  ],
  exports:[AdminPanelComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminPanelRoutingModule,
    PrimengUiModule,
  ]
})
export class AdminPanelModule { }
