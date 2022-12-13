import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-security-guard',
  templateUrl: './search-security-guard.component.html',
  styleUrls: ['./search-security-guard.component.css']
})
export class SearchSecurityGuardComponent {
  empId = ""
  searchData:any =[]

  constructor(private api:ApiService){}
  
  Search = () => {
    let data:any = {
      "empId":this.empId
    }
    this.api.SearchSecurityGuards(data).subscribe(
      (response:any)=>{
        if (response.length == 0) {
          alert("No Security Guards found!!!")
        } else {
          this.searchData = response
        }
      }
    )
  }
  Delete = () => {
    let data:any = {
      "empId":this.empId
    }
    this.api.DeleteSecurityGuards(data).subscribe(
      (response:any)=>{
        console.log("success")
        }
    )
  }
}
