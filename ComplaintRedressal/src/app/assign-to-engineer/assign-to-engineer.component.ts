import { Component, OnInit } from '@angular/core';
import { ComplaintRedressalServiceService } from '../complaint-redressal-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-to-engineer',
  templateUrl: './assign-to-engineer.component.html',
  styleUrls: ['./assign-to-engineer.component.css'],
  styles: [
    `
    :host {
      display:block;
      background-color:orange;
    }
  `,
  ],
})
export class AssignToEngineerComponent implements OnInit{

  constructor(private service:ComplaintRedressalServiceService,private router:Router){}

   users:any;
   message:any;
   engr:any;
   engineers:boolean=false;
   engrname:any;

  ngOnInit():void{

       let response=this.service.assignToEngr();
       response.subscribe((data:any)=>{this.users=data;
        
               if(this.users===null){
                this.message="Pincode of ticket and  pincode assigned to you dont match. So cannot assign Engineer to this ticket";

               }

               else{
                 this.engineers=true;

               }

       }
        
        );


  }

  public assignedTo(userid:any,engrnm:any){
    
    this.service.engrId=userid;
    this.engrname=engrnm;

  }

  public assignedSubmit(){

    let response=this.service.assignTicketToEngr();
    response.subscribe((data:any)=>{this.engr=data;
      
           if(this.engr!=null){

            this.message="Ticket with id "+ this.service.ticket_id+" assigned to Engineer  "+this.engrname;           }
      
           
      
           else{
               
            this.message="Engineer not assigned";

           }
          }
      );

    
  }

  public bkToManagerPg(){

    this.router.navigate(['/ManagerPage']);
  }

}
