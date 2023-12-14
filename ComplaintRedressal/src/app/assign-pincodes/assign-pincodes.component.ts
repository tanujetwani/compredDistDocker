import { Component, OnInit } from '@angular/core';
import { ComplaintRedressalServiceService } from '../complaint-redressal-service.service';
import { Router } from '@angular/router';
import {ManagerPinCode} from '../ManagerPinCode';

@Component({
  selector: 'app-assign-pincodes',
  templateUrl: './assign-pincodes.component.html',
  styleUrls: ['./assign-pincodes.component.css']
})
export class AssignPincodesComponent implements OnInit {

pincodes:any;
mp:ManagerPinCode=new ManagerPinCode();
message:any;
pincode2:any;

  constructor(public service :ComplaintRedressalServiceService,private router:Router){}

  ngOnInit():void{

      let response=this.service.getPinCodes();
      response.subscribe((data:any)=>this.pincodes=data);

  }


  public setPincode(username:any,pincode:any){

    let response=this.service.setPinCode(username,pincode);
    response.subscribe((data:any)=>{this.pincode2=data;
    
                    this.message="Pincode "+pincode + " for manager "+ username+ " has been set.";}
    );
  }


  public bktoadmindash(){

    this.router.navigate(['/AdminPage']);
  }

}
