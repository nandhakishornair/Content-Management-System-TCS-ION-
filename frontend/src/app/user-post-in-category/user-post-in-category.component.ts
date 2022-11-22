import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-user-post-in-category',
  templateUrl: './user-post-in-category.component.html',
  styleUrls: ['./user-post-in-category.component.css']
})
export class UserPostInCategoryComponent implements OnInit {
y=localStorage.getItem("category");
posts=[{
  heading:'',
  description:'',

}]
  constructor(private service:UserService) { }

  ngOnInit(): void {
    console.log("hah")
    let x = localStorage.getItem("category");
this.service.viewPostsInCategory(x).subscribe((data)=>{
  console.log("from backend",data);
  let post=JSON.parse(JSON.stringify(data))
  this.posts = post
})
  }

}
