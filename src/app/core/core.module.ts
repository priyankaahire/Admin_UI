import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
const CORE_MODULES = [
  FooterModule,
  HeaderModule
]
@NgModule({
  declarations: [
  ],
  exports:[CORE_MODULES],
  imports: [CORE_MODULES]
})
export class CoreModule { }
