import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service :AdminService , private _router:Router) { }
  login={
    email:'',
    password:''
    }
  ngOnInit(): void {
    
  }
  hide = true;

  adminlogin(){
    this.service.adminLogin(this.login).subscribe((data)=>{
      console.log("subscribed data",data)
      let x = JSON.stringify(data)
      if(x.match(/password matching/)){
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
          this._router.navigate(['admin/dashboard'])
          localStorage.clear();
          localStorage.setItem("Adminemail",this.login.email)
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
    })
  }
}
