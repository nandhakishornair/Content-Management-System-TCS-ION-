import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateFormComponent } from '../update-form/update-form.component';
@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css'],
})
export class ViewCategoryComponent implements OnInit {

  name = [{_id:'', categoryTitle: '', description: '' }];

  constructor(private service: AdminService, public dialog: MatDialog) {}

  openDialog(id:any,title:any,description:any) {
    console.log("inside open",title)
    const dialogRef = this.dialog.open(UpdateFormComponent , {data: {_id:id,title: title,description:description}});
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.service.viewCategory().subscribe((data) => {
      console.log('the data from back', data);
      let x = JSON.parse(JSON.stringify(data));
      console.log('x is ', x);
      this.name = x;
    });
  }
  onclick(data: any) {
    localStorage.removeItem('categoryTitle');
    console.log('in onclick func' + data);
    localStorage.setItem('categoryTitle', data);
  }
  delete(data: any) {
    this.service.deleteCategory(data).subscribe((data) => {
      console.log(data);
      let x = JSON.stringify(data);
      if(x.match(/delete/)){
        this.ngOnInit();
      }
    });
  }
  // update(data:any){
  //   this.service.updateCategory(data)
  // }
}

// @Component({
//   selector: 'update-form',
//   templateUrl: 'update-form.html',
// })
// export class updateForm {}
