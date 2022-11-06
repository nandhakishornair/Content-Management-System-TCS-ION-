import {FormControl, Validators,FormGroup} from '@angular/forms';
import { Input, Component, Output, EventEmitter,OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(private user:UserService) { }
  // form: FormGroup = new FormGroup({
  //   firstname: new FormControl(''),
  //   lastname: new FormControl(''),
  //   email: new FormControl('',[Validators.required, Validators.email]),
  //   password: new FormControl(''),
  //   adress: new FormControl(''),
  //   city: new FormControl(false),
  // });
  // submitted = false;
Signup={
  email:'',
  firstname:'',
  lastname:'',
  password:'',
  phone:'',
  city:'',
  state:''
}
  ngOnInit(): void {
   
  }
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  firstname= new FormControl('');
  lastname= new FormControl('');
  // email: new FormControl('',[Validators.required, Validators.email]);
  password= new FormControl('');
  city= new FormControl(false);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  adduser(){
 this.user.SignupUser(this.Signup).subscribe((data)=>{
  console.log("subscribed in user-signup component",data)
 })
  }
}
