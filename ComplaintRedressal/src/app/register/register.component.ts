import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import { ComplaintRedressalServiceService } from '../complaint-redressal-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  user:User=new User();
  message:any;
  isAdmin:boolean=this.service.isadmin;


  constructor(public service:ComplaintRedressalServiceService,private router:Router){}
  ngOnInit(): void {
    
  }

  public registerNow(){

    let response=this.service.register(this.user);
    console.log("Response : "+ response);
    response.subscribe((data:any)=>{this.message=data;
      console.log("Message:"+ this.message);}

      );


  }

 bktoadminPage(){

  this.router.navigate(['/AdminPage']);
 }


}
