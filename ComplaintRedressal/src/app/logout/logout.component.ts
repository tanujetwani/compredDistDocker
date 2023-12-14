import { Component, OnInit } from '@angular/core';
import { ComplaintRedressalServiceService } from '../complaint-redressal-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  constructor(private service:ComplaintRedressalServiceService){}

  ngOnInit():void{
    //Expression ___ has changed after it was checked.This error is coming because existing value is getting updated immediately after getting initialized. So if you will update new value after existing value is rendered in DOM, Then it will work fine.
    //setTimeout to prevent an error.As you can see i have not mentioned time in setTimeout method. As it is browser provided API, not a JavaScript API, So this will run seperately in browser stack and will wait till call stack items are finished.
   setTimeout(()=>{ this.service.isLoggedIn=false;
  
    this.service.isadmin=false;}
   );
   // this.service.isadmin=false;


   //this.service.isLoggedIn=false;

   //this.updateLoggedIn();
    }


   /* public updateLoggedIn(){
       this.service.isLoggedIn=false;

    }*/

}
