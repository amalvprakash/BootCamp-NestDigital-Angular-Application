import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent {
  name = ""
  purpose = ""
  whom = ""
  entryTime = ""
  exitTime = ""

  constructor(private api:ApiService){}
  Reg = () =>{
    let data:any = {
      "name" : this.name,
      "purpose" : this.purpose,
      "whom" : this.whom,
      "exitTime" : this.exitTime,
      "entryTime" : this.entryTime
    }
    this.api.Visitor(data).subscribe(
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
