import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminAddEmployeesComponent } from './admin-add-employees/admin-add-employees.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminAddSecurityComponent } from './admin-add-security/admin-add-security.component';
import { AdminAddemployeeEntryComponent } from './admin-addemployee-entry/admin-addemployee-entry.component';
import { LeaveEntryComponent } from './leave-entry/leave-entry.component';
import { VisitorComponent } from './visitor/visitor.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { SearchSecurityGuardComponent } from './search-security-guard/search-security-guard.component';

const myRoute:Routes = [
  {
    path : "",
    component:AdminLoginComponent
  },
  {
    path : "adminHome",
    component:AdminHomeComponent
  },
  {
    path : "addEmployees",
    component:AdminAddEmployeesComponent
  },
  {
    path : "addSecurity",
    component:AdminAddSecurityComponent
  },
  {
    path : "employeeEntry",
    component:AdminAddEmployeesComponent
  },
  {
    path : "employeeLeaveEntry",
    component:LeaveEntryComponent
  },
  {
    path : "visitor",
    component:VisitorComponent
  },
  {
    path : "searchEmployee",
    component:SearchEmployeeComponent
  },
  {
    path : "searchSecurity",
    component:SearchSecurityGuardComponent
  }
  
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminAddEmployeesComponent,
    AdminNavbarComponent,
    AdminAddSecurityComponent,
    AdminAddemployeeEntryComponent,
    LeaveEntryComponent,
    VisitorComponent,
    AdminHomeComponent,
    SearchEmployeeComponent,
    SearchSecurityGuardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
