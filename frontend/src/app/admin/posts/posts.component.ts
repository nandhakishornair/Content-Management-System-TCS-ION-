import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { PostFormComponent } from '../post-form/post-form.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts = [{ _id: '', heading: '', description: '',email:'' }];

  post = {
    heading: '',
    description: '',
    email:localStorage.getItem("Adminemail")
  };

  constructor(private service: AdminService, public dialog: MatDialog) {}

  openDialog(id: any, heading: any, description: any) {
    console.log('inside open', heading);
    const dialogRef = this.dialog.open(PostFormComponent, {
      data: { _id: id, title: heading, description: description },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
    let title = localStorage.getItem('categoryTitle');
    this.service.viewPosts(title).subscribe((data) => {
      // console.log("view post",data)
      let x = JSON.parse(JSON.stringify(data));
      console.log('x', x);
      this.posts = x;
    });
  }
  createpost() {
    let categoryTitle = localStorage.getItem('categoryTitle');
    // let email = localStorage.getItem('Adminemail')
    // this.post.email=email;
    console.log(categoryTitle);
    this.service.createPost(this.post, categoryTitle).subscribe((data) => {
      console.log('data from back', data);
      let x = JSON.stringify(data);
      if(x.match(/post created/)){
        console.log("post created successfully")
        Swal.fire({
toast:true,
text:"post created"
        }).then(()=>{
          this.ngOnInit();
        })
      }

    });
  }
  preview(id:any){
    localStorage.removeItem("previewid");
    localStorage.setItem("previewid",id)
  }

  delete(id: any) {
    Swal.fire({
      toast:true,
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deletePost(id).subscribe((data) => {
          console.log('from back', data);
        })
        Swal.fire({
          title:'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success'
      }).then(()=>{
        this.ngOnInit()
      })
      }
    
    
  })
}
}
