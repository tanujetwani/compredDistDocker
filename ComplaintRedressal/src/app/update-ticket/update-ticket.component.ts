import { Component, OnInit } from '@angular/core';
import { ComplaintRedressalServiceService } from '../complaint-redressal-service.service';
import { Router } from '@angular/router';
import {Ticket} from '../Ticket';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {

  ngOnInit():void{
      
   /* let response=this.service.searchTicket(); //Ticket id is set in the service ticket_is when we click on Update Ticket button on Cust dashnoard so no need of specifying ticket_id here.
    response.subscribe((data:any)=> this.ticket=data);*/

  }
  ticketID:any;
  ticket:any;
  searchTickt:boolean=false;
  ticket1:Ticket=new Ticket();
  message:any;
  ticket2:any;
  message2:any;

  constructor(public service:ComplaintRedressalServiceService,private router:Router){}
  
  public searchTicket(){


    let response=this.service.searchTicket(this.ticketID);
    response.subscribe((data:any)=>{this.ticket=data;
      
                if(this.ticket===null){
                  this.message="The ticket with id as "+ this.ticketID + " does not exist";}
                 
                  else{this.searchTickt=true;
                            this.message=""; }
                }
      
      );
  }



  public updateTicket(){

    let response=this.service.updTicket(this.ticketID,this.ticket1); //Ticket id is set in the service ticket_is when we click on Update Ticket button on Cust dashnoard so no need of specifying ticket_id here.
     
    response.subscribe((data:any)=>{this.ticket2=data;console.log("Ticket2 ID:"+ this.ticket2.ticket_id);
                       this.message2="Ticket with Id "+ this.ticketID+ " Updated Successfully";}
                      /* else {console.log("Ticket2 Id:"+ this.ticket2.ticket_id);
                       console.log("Ticket Id:"+ this.ticketID);
                        this.message2="Ticket not updated.";}*/

    
                              );

  }


  public bktocustpage(){

    this.router.navigate(['/customerPage']);
  }



}
