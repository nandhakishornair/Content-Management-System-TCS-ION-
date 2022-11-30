import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../shared/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
  constructor(private _formBuilder: FormBuilder,private service :UserService,private router :Router ) { }
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
  let x = JSON.stringify(data)
  if(x.match(/successfully/)){
    console.log("succ")
    Swal.fire({
      toast: true,
      color: 'green',
      // background:'whit',
      icon: 'success',
      title: 'post created successfully',
      position: 'center-right',
      showConfirmButton: false,
      timer: 3000,
    }).then(()=>{
      this.router.navigate(['/dashboard'])
    })
  }
})
}
}
