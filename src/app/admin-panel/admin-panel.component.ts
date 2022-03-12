import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../core/services/admin.service';
import { Admin } from '../shared/model/admin';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {

  admins: Array<Admin> = [];
  selectedRecord: Array<Admin> = [];
  admin: Array<Admin> = [];
  first = 0;
  rows = 10;
  loading: boolean = true;
  cloneAdmins: { [s: string]: Admin; } = {};

  totalRecords: number = 0;
  selectAll: boolean = false;
  selectedAdmin: Admin[] = [];

  constructor(private adminService: AdminService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.adminService.getAdmins()
      .subscribe(data => {
        this.admins = data;
        this.loading = false;
      });
  }
  /**
   * Row Edit
   * @param admin 
   * 
   */
  onRowEditInit(admin: Admin) {
    this.cloneAdmins[admin.id] = { ...admin };
  }
  onRowEditSave(admin: Admin) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'admin is updated' });
  }
  onRowEditCancel(admin: Admin, index: number) {
    this.admins[index] = this.cloneAdmins[admin.id];
    delete this.cloneAdmins[admin.id];
  }
  /***
   * Pagination 
   * 
   */
  next() {
    this.first = this.first + this.rows;
  }
  prev() {
    this.first = this.first - this.rows;
  }
  reset() {
    this.first = 0;
  }
  isLastPage(): boolean {
    return this.admins ? this.first === (this.admins.length - this.rows) : true;
  }
  isFirstPage(): boolean {
    return this.admins ? this.first === 0 : true;
  }
  /**
   * Delected Selected Admins
   * 
   */
  deleteSelectedAdmins() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected admins?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.admins = this.admins.filter(val => !this.selectedRecord.includes(val));
        this.selectedRecord = [];
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Admin Deleted', life: 3000 });
      }
    });
  }
  /**
   * Delected Single Admin
   * @param admin 
   * 
   */
  deleteAdmin(admin: Admin) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + admin.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.admins = this.admins.filter(val => val.id !== admin.id);
        this.admin = [];
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Admin Deleted', life: 3000 });
      }
    });
  }


}
