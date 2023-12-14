import { Component,OnInit } from '@angular/core';
import { ComplaintRedressalServiceService } from '../complaint-redressal-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-feedbk',
  templateUrl: './submit-feedbk.component.html',
  styleUrls: ['./submit-feedbk.component.css'],
  styles: [
    `
    :host {
      display:block;
      background-color: peach;
    }
  `,
  ],
})
export class SubmitFeedbkComponent implements OnInit{

  ngOnInit():void{}

  constructor(public service:ComplaintRedressalServiceService,private router:Router){}

  ticketId:any;
  feedback:any;
  message:any;
  ticket:any


  public submtFeedbk(){

     this.ticketId=this.service.ticket_id;

     let response=this.service.submitFdbk(this.ticketId,this.feedback);

     response.subscribe((data:any)=>{this.ticket=data;
      if(this.ticket.feedback===this.feedback){
                           this.message="Feedback Submitted Successfully";}
                           
       else{
             this.message="Feedback not submitted";
       }                    
      }                    
                           
                           );




  }

   
  public bktocustPage(){

    this.router.navigate(['/customerPage']);
  }

}
