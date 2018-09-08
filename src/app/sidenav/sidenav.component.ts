import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  sideNavMens:any;
  constructor() { }

  ngOnInit() {
    this.sideNavMens=[
      {"name":"Sales","url":"/sales"},
      {"name":"Stock","url":"/stock"},
      {"name":"Financials","url":"/sinancials"},
      {"name":"Admin","url":"/admin","childs":[
        {"name":"Setupuser","url":"newuser"},
        {"name":"Change password","url":"changepwd"}
      ]},
      {"name":"Logout","url":"/logout"},
  ]
  }

}
