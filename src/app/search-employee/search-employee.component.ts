import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {
  empId = ""
  searchData:any =[]

  constructor(private api:ApiService){}
  
  Search = () => {
    let data:any = {
      "empId":this.empId
    }
    this.api.SearchEmployee(data).subscribe(
      (response:any)=>{
        if (response.length == 0) {
          alert("No Employees found!!!")
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
    this.api.DeleteEmployee(data).subscribe(
      (response:any)=>{
        console.log("success")
        }
    )
  }
}
