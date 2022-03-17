import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AdminService } from '../core/services/admin.service';
import { GeneralService } from '../core/services/general.service';
import { PrimengUiModule } from '../primeng-ui.module';

import { AdminPanelComponent } from './admin-panel.component';

describe('AdminPanelComponent', () => {
  let component: AdminPanelComponent;
  let fixture: ComponentFixture<AdminPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelComponent ],
      imports: [ FormsModule, HttpClientModule, PrimengUiModule ],
      providers: [AdminService, MessageService, ConfirmationService, GeneralService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
