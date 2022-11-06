import {FormControl, Validators,FormGroup} from '@angular/forms';
import { Input, Component, Output, EventEmitter,OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private user : UserService) { }
  login={
    email:'',
    password:''
   
  }
  ngOnInit(): void {
  }
 hide = true;
 userdata(){
  console.log(this.login)
  this.user.userlogin(this.login).subscribe((data)=>{
    console.log("data from backend in user login compt",data)
  })
 }
 
}
