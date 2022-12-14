import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  email = ""
  password = ""


  constructor(private api:ApiService, private route:Router){}
  Login = () =>{
    let data:any = {
      "email" : this.email,
      "password" :this.password
    }  
    this.api.EmployeeLogin(data).subscribe(
      (response:any) =>{
        if(response.length == 0){
          alert("login failed")
          this.email = ""
          this.password = ""
        }else{          
          console.log("xxx",response)
          let Id = response.empId
          
          localStorage.setItem("userInfo",Id)
          console.log(localStorage.getItem("userInfo"))
          this.route.navigate(["/employeeHome"])
        }
      }  
    )
  }
}
