import { Component,OnInit } from '@angular/core';
import { CommonService } from './common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  sideNavStatus=false;
  constructor(private service:CommonService){}
  onSideNavOpen(data:any){
    if(data=='show'){
      this.sideNavStatus=true
    }else if(data=='hide'){
      this.sideNavStatus=false;
    }else{
      this.sideNavStatus=!this.sideNavStatus;;
    }    
  }
  ngOnInit() {
    this.service.currentSideBarStatus.subscribe(status => {
      if(status=='show'){
        this.sideNavStatus=true
      }else if(status=='hide'){
        this.sideNavStatus=false;
      }else{
        this.sideNavStatus=!this.sideNavStatus;;
      }
    });
  }
}
