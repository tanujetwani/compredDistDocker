import { Component, OnInit } from '@angular/core';
import { ComplaintRedressalServiceService } from '../complaint-redressal-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engineerpage',
  templateUrl: './engineerpage.component.html',
  styleUrls: ['./engineerpage.component.css'],
  styles: [
    `
    :host {
      display:block;
      background-color: lightgreen;
    }
  `,
  ],
})
export class EngineerpageComponent implements OnInit{

  viewTicketEngr:boolean=false;
  ngOnInit():void{}
  tickets:any;
  //chngeStatus:boolean=false;
  status:any;
  message:any;
  complaintsByCustomer:boolean=false;
  cust_id:any;
  tickets1:any;
  viewCompByCust:boolean=false;

  constructor(public service:ComplaintRedressalServiceService,private router:Router){}

  public viewTicketsofEngr(){

    this.viewTicketEngr=true;

    let response=this.service.viewTicketsByEngr();
    response.subscribe((data:any)=>this.tickets=data);

     
}

public changeStatus(ticket_id:number){
   
  this.service.ticket_id=ticket_id;
  this.router.navigate(['/changeStatus']);
  //this.chngeStatus=true;
 // let response=this.service.chngStatus(ticket_id,this.status);
  //response.subscribe((data:any)=>this.message=data);


}

/*public chstatus(ticket_id:number){
  let response=this.service.chngStatus(ticket_id,this.status);
  response.subscribe((data:any)=>this.message=data);

}*/

public setRemark(ticket_id){

 this.service.ticket_id=ticket_id;
 this.router.navigate(['/setRemark']);

}


public viewComplaintsByCustomer(){

   this.complaintsByCustomer=true;


}

public viewComplaintsBasedOnCust(){
   
  this.viewCompByCust=true;
  let response=this.service.viewTicketsByCust(this.cust_id);
  response.subscribe((data:any)=>this.tickets1=data);
}

public bktoadmindash(){

  this.router.navigate(['/AdminPage']);
}

}
