import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-user-latest-post',
  templateUrl: './user-latest-post.component.html',
  styleUrls: ['./user-latest-post.component.css']
})
export class UserLatestPostComponent implements OnInit {

  constructor(private service : UserService) { }
 category = [{
  categoryTitle:''
 }]
  ngOnInit(): void {
    this.service.viewCategory().subscribe((data)=>{
      let x = JSON.parse(JSON.stringify(data))
      console.log(x)
      this.category=x
    })
  }
  onclick(data:any){
    console.log(data)
    localStorage.removeItem("category")
    localStorage.setItem("category",data)
  }

}
