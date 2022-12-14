import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-entry',
  templateUrl: './leave-entry.component.html',
  styleUrls: ['./leave-entry.component.css']
})
export class LeaveEntryComponent {
  empId = ""
  leaveFrom = ""
  leaveTo = ""
  reason = ""
  catagory = ""
  status = "pending"

  constructor(private api:ApiService){}
  Reg = () => {
    let data:any = {
      "empId" : this.empId,
      "leaveFrom" : this.leaveFrom,
      "leaveTo" : this.leaveTo,
      "reason" : this.reason,
      "catagory" : this.catagory,
      "status" : this.status
    }
    this.api.LeaveRequest(data).subscribe(
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


