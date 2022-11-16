import { Component, OnInit, Inject } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
category={
  categoryTitle: '',
   description: '' 
}
  constructor(private service:AdminService,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
// this.service.updateCategory(this.category)

  }
  update(data:any){
    console.log("in form",data)
  }

}
