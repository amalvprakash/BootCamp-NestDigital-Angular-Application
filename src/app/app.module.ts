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
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeViewLeavesComponent } from './employee-view-leaves/employee-view-leaves.component';
import { AdminLeaveApproveComponent } from './admin-leave-approve/admin-leave-approve.component';
import { SecurityLeaveComponent } from './security-leave/security-leave.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { SecurityHomeComponent } from './security-home/security-home.component';
import { SecurityNavbarComponent } from './security-navbar/security-navbar.component';
import { ViewAllVisitorsComponent } from './view-all-visitors/view-all-visitors.component';

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
    path : "leaveRequest",
    component:AdminLeaveApproveComponent
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
    path : "employeeEntrySecurity",
    component:AdminAddemployeeEntryComponent
  },
  {
    path : "searchEmployee",
    component:SearchEmployeeComponent
  },
  {
    path : "searchSecurity",
    component:SearchSecurityGuardComponent
  },
  {
    path : "employeeLogin",
    component:EmployeeLoginComponent
  },
  {
    path : "employeeHome",
    component:EmployeeHomeComponent
  },
  {
    path : "employeeProfile",
    component:EmployeeProfileComponent
  },
  {
    path : "leaveEntry",
    component:LeaveEntryComponent
  },
  {
    path : "viewLeave",
    component:EmployeeViewLeavesComponent
  },
  {
    path : "securitylogin",
    component:SecurityLoginComponent
  },
  {
    path : "securityHome",
    component:SecurityHomeComponent
  },
  {
    path : "viewallVisitors",
    component:ViewAllVisitorsComponent
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
    SearchSecurityGuardComponent,
    EmployeeLoginComponent,
    EmployeeHomeComponent,
    EmployeeNavbarComponent,
    EmployeeProfileComponent,
    EmployeeViewLeavesComponent,
    AdminLeaveApproveComponent,
    SecurityLeaveComponent,
    SecurityLoginComponent,
    SecurityHomeComponent,
    SecurityNavbarComponent,
    ViewAllVisitorsComponent
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
