import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-add-security',
  templateUrl: './admin-add-security.component.html',
  styleUrls: ['./admin-add-security.component.css']
})
export class AdminAddSecurityComponent {

  empId = ""
  name = ""
  address = ""
  dob = ""
  bloodGroup = ""
  phone = ""
  email = ""
  password = ""
  constructor(private api:ApiService){}
  Reg = () =>{
    let data:any = {
      "empId" : this.empId,
      "name" : this.name,
      "address" : this.address,
      "dob" : this.dob,
      "bloodGroup" : this.bloodGroup,
      "phone" : this.phone,
      "email" : this.email,
      "password" : this.password
    }
    this.api.AddSecurityGuard(data).subscribe(
      (response:any) =>{
        if (response.status == "success") {
          alert("successfull")
        } else {
          alert("failed")
        }
      }
    )
  }
}
