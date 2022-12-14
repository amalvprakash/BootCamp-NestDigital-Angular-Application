import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-leave-approve',
  templateUrl: './admin-leave-approve.component.html',
  styleUrls: ['./admin-leave-approve.component.css']
})
export class AdminLeaveApproveComponent {
  userId:any = ""
  userData:any = []

  constructor(private api:ApiService){
    this.api.ViewLeaveRequests().subscribe(
      (response:any) =>{
        console.log(response)
        this.userData = response
      }
      
    )
  }
  Approve = (id:any) =>{
    let data:any = {
      "empId":id
    }
    console.log(id)
    this.api.UpdateLeaveRequests(data).subscribe(
      (response:any)=>{
        console.log("success")
        }
    )
  }
}
