import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-your-posts',
  templateUrl: './user-your-posts.component.html',
  styleUrls: ['./user-your-posts.component.css']
})
export class UserYourPostsComponent implements OnInit {

  constructor( private service:UserService) { }
posts = [{
  _id:'',
heading:'',
description:''
}]
  ngOnInit(): void {
    let x=localStorage.getItem("email")
    console.log(x)
    this.service.viewYourPost(x).subscribe((data)=>{
      console.log(data);
      let y = JSON.parse(JSON.stringify(data));
      this.posts=y;
    })
  }
  delete(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
      this.service.deletePost(id).subscribe((data)=>{
        console.log(data)
      })
    })
  }
  savePostid(id:any){
    localStorage.removeItem("postid");
    localStorage.setItem("postid",id)
  }

}
