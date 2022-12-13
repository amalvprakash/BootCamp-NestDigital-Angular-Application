import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-addemployee-entry',
  templateUrl: './admin-addemployee-entry.component.html',
  styleUrls: ['./admin-addemployee-entry.component.css']
})
export class AdminAddemployeeEntryComponent {
  empId = ""
  entryTime = ""
  exitTime = ""
  constructor(private api:ApiService){}

  Reg = () =>{
    let data:any = {
      "empId" : this.empId,
      "entryTime" : this.entryTime,
      "exitTime" : this.exitTime
    }
    this.api.AddEmployeeEntry(data).subscribe(
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

