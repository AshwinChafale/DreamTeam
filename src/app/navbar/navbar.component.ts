import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuitems: any[] = [{
    "name": "Home",
    "link": "/home"
  }, {
    "name": "Team",
    "link": "/team"
  }, {
    "name": "Players",
    "link": "/players"
  }];
  // buttonitems: any[] = [{
  //   "name": "LOG IN",
  //   "link": "/login"
  // }, {
  //   "name": "JOIN",
  //   "link": "/join"
  // }];
  logourl:any = "/assets/images/logo.svg";
  constructor() { }

  ngOnInit() {
  }

}
