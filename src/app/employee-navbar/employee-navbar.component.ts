import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-navbar',
  templateUrl: './employee-navbar.component.html',
  styleUrls: ['./employee-navbar.component.css']
})
export class EmployeeNavbarComponent {
  userId:any = ""
  userData:any = []

  constructor(private api:ApiService){
    this.userId = localStorage.getItem("userInfo")
    let data:any = {
      "empId":this.userId
    }
    this.api.Profile(data).subscribe(
      (response:any) =>{
        console.log(response)
        this.userData = response
      }
      
    )
  }
}
