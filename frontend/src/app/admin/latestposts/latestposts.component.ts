import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
@Component({
  selector: 'app-latestposts',
  templateUrl: './latestposts.component.html',
  styleUrls: ['./latestposts.component.css']
})
export class LatestpostsComponent implements OnInit {

  constructor(private service :AdminService) { }
  post = [{ description: '', email: '', heading: '',_id:'' }];
  ngOnInit(): void {
    this.service.viewLatestPost().subscribe((data) => {
      console.log(data);
      let x = JSON.parse(JSON.stringify(data));
      this.post = x;
    });
  }
  preview(id: any) {
    localStorage.removeItem('previewid');
    localStorage.setItem('previewid', id);
  }

}
