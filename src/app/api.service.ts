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
    return this.http.post("http://localhost:8080/LeaveApply",dataToSend)
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
}
