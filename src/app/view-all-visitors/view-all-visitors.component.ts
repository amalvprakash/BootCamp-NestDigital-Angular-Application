import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-visitors',
  templateUrl: './view-all-visitors.component.html',
  styleUrls: ['./view-all-visitors.component.css']
})
export class ViewAllVisitorsComponent {
  date = ""
  userData:any = []
  searchData:any = []
  constructor(private api:ApiService){
    this.api.ViewAllVisitors().subscribe(
      (response:any) =>{
        this.userData = response
      }
    )
  }
  Search = () =>{
    let data:any = {
      "date" : this.date
    }
    this.api.SearchVisitor(data).subscribe(
    (response:any)=>{
      this.searchData = response
    }
    )
  }
}
