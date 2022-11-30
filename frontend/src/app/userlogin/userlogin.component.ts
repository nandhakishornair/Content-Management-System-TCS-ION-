import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent implements OnInit {
  constructor(private user: UserService ,private _router:Router) {}
  login = {
    email: '',
    password: '',
  };
  ngOnInit(): void {}
  hide = true;
  userdata() {
    console.log(this.login);
    this.user.userlogin(this.login).subscribe((data:any) => {
      localStorage.setItem('user-token',data.tok);
      console.log('data from backend in user login compt', data);
      let regx = /password matching/;
      let x = JSON.stringify(data.message);
      if (x.match(regx)) {
        console.log('succ:');
        Swal.fire({
          toast: true,
          color: 'green',
          // background:'whit',
          icon: 'success',
          title: 'verified',
          position: 'center-right',
          showConfirmButton: false,
          timer: 3000,
        }).then(()=>{
          this._router.navigate(['/dashboard'])
          localStorage.setItem("email",this.login.email)
        })
      }
      else{
        Swal.fire({
          toast: true,
          color:'red',
          background:'yellow',
          icon: 'error',
          title: 'wrong email or password',
          position: 'center-right',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          
        });
      }
    });
  }
}
