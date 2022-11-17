import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/admin.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private service:AdminService) { }

  ngOnInit(): void {
  }
update(data:any){
  console.log(data)
  this.service.updatePost(data).subscribe((data)=>{
    console.log("from back",data)
  })
}
}
