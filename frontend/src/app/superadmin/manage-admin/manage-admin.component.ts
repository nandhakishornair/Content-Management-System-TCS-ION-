import { Component, OnInit } from '@angular/core';
// import swal from 'sweetalert';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css'],
})
export class ManageAdminComponent implements OnInit {
  y = 'hai';
  admins = [{ email: 'hai@gmail.com', description: 'das' }];

  constructor() {}

  ngOnInit(): void {}
  changePrivilage(email:any){
    console.log(email);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'success!',
          'the account privilage changed.',
          'success'
        )
      }
    })
  }
}
