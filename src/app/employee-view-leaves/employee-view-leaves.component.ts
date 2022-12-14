import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-view-leaves',
  templateUrl: './employee-view-leaves.component.html',
  styleUrls: ['./employee-view-leaves.component.css']
})
export class EmployeeViewLeavesComponent {
  userId:any = ""
  userData:any = []

  constructor(private api:ApiService){
    this.userId = localStorage.getItem("userInfo")
    let data:any = {
      "empId":this.userId
    }
    this.api.ViewLeave(data).subscribe(
      (response:any) =>{
        console.log(response)
        this.userData = response
      }
      
    )
  }
}
