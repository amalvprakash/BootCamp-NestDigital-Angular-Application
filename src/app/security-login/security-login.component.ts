import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent {
  email = ""
  password = ""


  constructor(private api:ApiService, private route:Router){}
  Login = () =>{
    let data:any = {
      "email" : this.email,
      "password" :this.password
    }  
    this.api.SecurityLogin(data).subscribe(
      (response:any) =>{
        if(response.length == 0){
          alert("login failed")
          this.email = ""
          this.password = ""
        }else{          
      
          let Id = response.empId
          
          // localStorage.setItem("userInfo",Id)
          // console.log(localStorage.getItem("userInfo"))
          this.route.navigate(["/securityHome"])
        }
      }  
    )
  }
}
