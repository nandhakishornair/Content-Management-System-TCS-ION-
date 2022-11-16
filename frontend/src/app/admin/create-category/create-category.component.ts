import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent implements OnInit {
  constructor(private service: AdminService) {}
  category = {
    categoryTitle: '',
    description:''
  };
  ngOnInit(): void {}
  createCategory(){
    console.log(this.category)
    this.service.createCategory(this.category).subscribe((data)=>{
      console.log("data from backend is",data)
    })
  }
}
