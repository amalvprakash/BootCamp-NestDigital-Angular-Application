import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  AddEmployees =(dataToSend:any) =>{
    return this.http.post("http://localhost:8080/employeeReg",dataToSend)
  }
  AddSecurityGuard =(dataToSend:any) =>{
    return this.http.post("http://localhost:8080/securityReg",dataToSend)
  }
  AddEmployeeEntry =(dataToSend:any) =>{
    return this.http.post("http://localhost:8080/employeeEntry",dataToSend)
  }
  LeaveRequest =(dataToSend:any) =>{
    return this.http.post("http://localhost:8080/leaveApply",dataToSend)
  }
  Visitor =(dataToSend:any) =>{
    return this.http.post("http://localhost:8080/visitor",dataToSend)
  }
  SearchEmployee =(dataToSend:any) =>{
    return this.http.post("http://localhost:8080/searchEmployee",dataToSend)
  }
  SearchSecurityGuards =(dataToSend:any) =>{
    return this.http.post("http://localhost:8080/searchSecurityGuards",dataToSend)
  }
  DeleteEmployee =(dataToSend:any) =>{
    return this.http.post("http://localhost:8080/deleteEmployees",dataToSend)
  }
  DeleteSecurityGuards =(dataToSend:any) =>{
    return this.http.post("http://localhost:8080/deleteSecurityGuards",dataToSend)
  }
  EmployeeLogin =(dataToSend:any) =>{
    return this.http.post("http://localhost:8080/employeeLogin",dataToSend)
  }
  Profile =(dataToSend:any) =>{
    return this.http.post("http://localhost:8080/profile",dataToSend)
  }
  ViewLeave =(dataToSend:any) =>{
    return this.http.post("http://localhost:8080/viewEmployeeLeaves",dataToSend)
  }
  ViewLeaveRequests =() =>{
    return this.http.get("http://localhost:8080/viewLeaveRequests")
  }
  UpdateLeaveRequests = (dataToSend:any) =>{
    return this.http.post("http://localhost:8080/updateLeave",dataToSend)
  }
  SecurityLogin =(dataToSend:any) =>{
    return this.http.post("http://localhost:8080/securityLogin",dataToSend)
  }
  ViewAllVisitors =() =>{
    return this.http.get("http://localhost:8080/viewAllVisitors")
  }
  SearchVisitor =(dataToSend:any) =>{
    return this.http.post("http://localhost:8080/searchVisitor",dataToSend)
  }
}
