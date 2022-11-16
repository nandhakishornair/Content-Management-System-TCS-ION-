import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {

  

  posts = [{ heading: '', description: '' }];

  post = {
    heading: '',
    description: '',
  };
  
  constructor(private service: AdminService) {}

  ngOnInit(): void {
    let title=localStorage.getItem("categoryTitle")
    this.service.viewPosts(title).subscribe((data)=>{
          // console.log("view post",data)
          let x=JSON.parse(JSON.stringify(data))
           console.log("x",x);
      this.posts=x

          
        })
  }
  createpost() {
    let categoryTitle = localStorage.getItem("categoryTitle")
    console.log(categoryTitle)
    this.service.createPost(this.post,categoryTitle).subscribe((data) => {
      console.log('data from back', data);
    });
  }
  // viewPosts(){
  //   this.service.GetPostAndCategory().subscribe((data)=>{
  //     // console.log("view post",data)
  //     let x=JSON.parse(JSON.stringify(data))
  //     console.log(x.category.post)
  //     this.posts=x.category.post
  //   })
  // }
  // deletePost(){
  //   this.service.deletePost().subscribe
  // }
}
