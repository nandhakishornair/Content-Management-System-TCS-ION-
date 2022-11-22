import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

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
  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.viewCategory().subscribe((data) => {
      console.log(data);
      let x = JSON.parse(JSON.stringify(data));
      this.category = x;
      let postid = localStorage.getItem('postid');
      this.service.viewApost(postid).subscribe((data) => {
        console.log(data);
        let p = JSON.parse(JSON.stringify(data))
        this.post = p;
      });
    });
  }
}
