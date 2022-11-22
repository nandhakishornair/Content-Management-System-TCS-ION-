import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-user-create-post',
  templateUrl: './user-create-post.component.html',
  styleUrls: ['./user-create-post.component.css']
})
export class UserCreatePostComponent implements OnInit {
  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: [ Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  isEditable = true;
  constructor(private _formBuilder: FormBuilder,private service :UserService ) { }
data={
    // email:'',
    heading:'',
    description:'',
    category:''
}
category=[{
  categoryTitle:''
}]
  ngOnInit(): void {
    this.service.viewCategory().subscribe((data)=>{
      console.log(data);
      let x = JSON.parse(JSON.stringify(data))
      this.category = x;
    })
  }
create(data:any){
  let email = localStorage.getItem("email")
  data.email = email;
  console.log(data)
this.service.createPost(data).subscribe((data)=>{
  console.log("from back",data)
})
}
}
