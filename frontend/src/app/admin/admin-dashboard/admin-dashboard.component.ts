import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private service : AdminService) { }

  ngOnInit(): void {
  }
viewCategorys(){
  this.service.GetPostAndCategory().subscribe((data)=>{
    console.log("inside the ts file data from backend",data)
  })
}
}
