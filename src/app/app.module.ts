import { FormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengUiModule} from './primeng-ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminService } from './core/services/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AdminPanelModule,
    CoreModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [AdminService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
