import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { AdminService } from './shared/admin.service';
import { UserService } from './shared/user.service';
import { SuperadminService } from './shared/superadmin.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'frontend';
  // currentURL=this.router.url;
  val: boolean = false;
  constructor(
    public router: Router,
    public admin: AdminService,
    public user: UserService,
    public superadmin: SuperadminService
  ) {}
  ngOnInit(): void {
    // console.log("ssssssssss",x)
    // if(this.router.url)
  }
  check(): any {
    let x = this.router.url;
    if (x.match(/admin/) || x.match(/superadmin/)) {
      return false;
    } else {
      return true;
    }
  }
  logout(): any {
    let x = this.router.url;

    if (
      ((/admin/.test(x)==true&&/superadmin/.test(x)==false) && this.admin.loggedIn()) ||
      ((/superadmin/.test(x) && this.superadmin.loggedIn())) ||
      (((/admin/.test(x)==false) && (/superadmin/.test(x)==false)) && this.user.loggedIn())
    ) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    localStorage.clear();
  }
}
