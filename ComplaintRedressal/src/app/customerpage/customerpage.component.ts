import { Component,OnInit } from '@angular/core';
import {Ticket} from '../Ticket';
import { ComplaintRedressalServiceService } from '../complaint-redressal-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerpage',
  templateUrl: './customerpage.component.html',
  styleUrls: ['./customerpage.component.css'],
  styles: [
    `
    :host {
      display:block;
      background-color: hotpink;
    }
  `,
  ],
})
export class CustomerpageComponent implements OnInit{

  ngOnInit():void{
          this.isAdmin=this.service.isadmin;

  }


  constructor(public service:ComplaintRedressalServiceService,private router:Router){}

  ticket:Ticket=new Ticket();
  message:any;
  tickets:any;
  //tickets:Ticket=new Ticket();
  //user:any
  viewTicket:boolean=false;
  feedback:any="";
  //message2:any;
  ResolvedEscalated:boolean=false;
  ticketId:any;
  isAdmin:boolean=false;
  delTicket:boolean=false;
  tid:any;
  delmessage:any;
  count:number;
  
 public  createTicket(){
         
     let response=this.service.registerTicket(this.ticket);
     response.subscribe((data:any)=>this.message=data);


  }

  public viewTickets(){
      
    console.log("Inside viewTickets");
      this.viewTicket=true;
      this.delTicket=false;
      let response=this.service.viewComplaints();
      response.subscribe((data:any)=>{this.tickets=data;
             console.log("Tickets :" +this.tickets);
             
           }
        );

  }


  public submitFeedback(ticket_id:any){
     
    console.log("Ticket id from html:"+ ticket_id);
    this.ticketId=ticket_id;
    this.service.ticket_id=this.ticketId;
    console.log("inside cust submit feedback");
    console.log("ticket id:"+ this.ticketId);
    this.router.navigate(['/submitFeedbk']);

       //let response=this.service.submitFdbk(ticket_id,this.feedback);
       //response.subscribe((data:any)=>this.message=data);


  }


  public registerComplaint(ticket_id:any){

      //this.viewTicket=false;
    this.service.ticket_id=ticket_id;
    this.router.navigate(['/registerComplaint']);


  }

   
  public updateTicket(){

      // this.service.ticket_id=ticketId;
       this.router.navigate(['/updateTicket']);


  }

  public deleteTicket(){

        /*let response=this.service.delTicket(ticketId);
        response.subscribe((data:any)=>{ this.tickets=data;
                this.message="The ticket with id "+ticketId+ " has been deleted";
        }
          );

        */
          this.viewTicket=false;
        this.delTicket=true;
        this.delmessage="";


  }

public gotoadmindash(){


  this.router.navigate(['/AdminPage']);
}

public delTick(){

  let response=this.service.delTicket(this.tid);
  response.subscribe((data:any)=>{// this.tickets=data;
             this.count=data;
          //this.delmessage="The ticket with id "+this.tid+ " has been deleted";

          if(this.count===0){
            this.delmessage="The ticket with id "+ this.tid+ " does not exist";
          }
          else {this.delmessage="The ticket with id "+this.tid+ " has been deleted";}


});

}

}
