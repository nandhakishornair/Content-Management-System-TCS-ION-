import { Component, OnInit } from '@angular/core';
// import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { SuperadminService } from 'src/app/shared/superadmin.service';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css'],
})
export class ManageAdminComponent implements OnInit {
  // y = 'hai';
  admins = [{ email: '' ,isAdmin:'',}];

  constructor(private service :SuperadminService) {}

  ngOnInit(): void {
    this.service.viewAllAdmins().subscribe((data)=>{
      console.log("from backend",data)
      let x = JSON.parse(JSON.stringify(data));
      this.admins=x

    })
  }
  changePrivilage(data:any){
    console.log("data",data);
    Swal.fire({
      toast:true,
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.editPrivilage(data).subscribe((data)=>{
          console.log("from back",data)
          let x = JSON.stringify(data)
          if(x.match(/updated/)){
            console.log(true)
            Swal.fire({
              toast:true,
              text:'the account privilage changed.',
              icon:'success'
          })
          this.ngOnInit();
          }
        })
       
      }
    })
  }
}
