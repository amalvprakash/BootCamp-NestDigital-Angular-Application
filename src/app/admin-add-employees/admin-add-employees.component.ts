import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-add-employees',
  templateUrl: './admin-add-employees.component.html',
  styleUrls: ['./admin-add-employees.component.css']
})
export class AdminAddEmployeesComponent {
  empId = ""
  name = ""
  address = ""
  email = ""
  phone = ""
  dsgn = ""
  department = ""
  salary = ""
  dob = ""
  project = ""
  username = ""
  password = ""
  constructor(private api:ApiService){}
  Reg = () =>{
    let data:any = {
      "empId" : this.empId,
      "name" : this.name,
      "address" : this.address,
      "email" : this.email,
      "phone" : this.phone,
      "dsgn" : this.dsgn,
      "department" : this.department,
      "salary" : this.salary,
      "dob" : this.dob,
      "project": this.project,
      "username" : this.username,
      "password" : this.password
    }
    this.api.AddEmployees(data).subscribe(
      (response:any) => {
        if (response.status == "success") {
          alert("success")
        } else {
          alert("failed")
        }
      }
    )
  }
  
}
