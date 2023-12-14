import { Component, OnInit } from '@angular/core';
import { ComplaintRedressalServiceService } from '../complaint-redressal-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managerpage',
  templateUrl: './managerpage.component.html',
  styleUrls: ['./managerpage.component.css'],
  styles: [
    `
    :host {
      display:block;
      background-color: pink;
    }
  `,
  ],
  
  
})
export class ManagerpageComponent implements OnInit{

  ngOnInit():void{}

  constructor(public service:ComplaintRedressalServiceService, private router:Router){}
   
  tickets:any;
  tickets1:any;
  viewTicket:boolean=false;
  user:any;
  message:any;
  assignTicket:boolean=false;
  

  public viewTickets(){
    
    this.viewTicket=true;
     let response=this.service.viewTicketsByManager();
     response.subscribe((data:any)=>this.tickets=data);

  }


  public assignTickets(){
      this.assignTicket=true;
     let response=this.service.assignTickets();
     response.subscribe((data:any)=>this.tickets1=data);


  }

  public assignToEngineer(ticketId:number){
     this.service.ticket_id=ticketId;
     this.router.navigate(['assignToEngineer']);

     /*let response=this.service.assignToEngr(ticketId);
     response.subscribe((data:any)=>{this.user=data;
      
               if(this.user===null){
                this.message="Pincode of ticket and your pincode doesnt match.So cannot assign to engineer ";
               }
             
               else{

                        this.router.navigate([])
               }
      
      )*/


  }

  public bktoadmindash(){

      this.router.navigate(['/AdminPage']);

  }
}
