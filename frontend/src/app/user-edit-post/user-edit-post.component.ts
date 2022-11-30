import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit-post',
  templateUrl: './user-edit-post.component.html',
  styleUrls: ['./user-edit-post.component.css'],
})
export class UserEditPostComponent implements OnInit {
  category = [
    {
      categoryTitle: '',
    },
  ];
  post = {
    heading:'',
    description:'',
    category:'',
  }
  constructor(private service: UserService ,private router:Router ) {}

  ngOnInit(): void {
    this.service.viewCategory().subscribe((data) => {
      // console.log(data);
      let x = JSON.parse(JSON.stringify(data));
      this.category = x;
      let postid = localStorage.getItem('postid');
      this.service.viewApost(postid).subscribe((data) => {
        // console.log(data);
        let p = JSON.parse(JSON.stringify(data))
        this.post = p;
      });
    });
  }
  editpost(){
    console.log(this.post);
    let postid = localStorage.getItem('postid');
    this.service.updatePost(this.post,postid).subscribe((data)=>{
      console.log("data",data);
      let x = JSON.stringify(data);
      if(x.match(/updated/)){
        Swal.fire( {toast: true,
          color: 'green',
        title:'editted',
        icon: 'success',
        timer: 3000,
        showConfirmButton: false,
        position: 'center-right',}).then(()=>{
          this.router.navigate(["/dashboard"])
        })
      }
    })
  }
}
