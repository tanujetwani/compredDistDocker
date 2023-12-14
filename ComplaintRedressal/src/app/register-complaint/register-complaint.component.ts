import { Component, OnInit } from '@angular/core';
import { ComplaintRedressalServiceService } from '../complaint-redressal-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-complaint',
  templateUrl: './register-complaint.component.html',
  styleUrls: ['./register-complaint.component.css'],
  styles: [
    `
    :host {
      display:block;
      background-color: skyblue;
    }
  `,
  ],
})
export class RegisterComplaintComponent implements OnInit{
  

  constructor(public service:ComplaintRedressalServiceService,private router:Router){}

  ngOnInit():void{}
  
  problem:any;
  details:any;
  message:any;
  ticket:any;

  public regComplaint(){

    if(this.problem===undefined){this.message="Enter the Type Of Problem";}
     
    else{
      //if (this.details===undefined) {this.details="";}    
    let response=this.service.registerComplaint(this.problem,this.details);

    response.subscribe((data:any)=>{this.ticket=data;
      
      if(this.ticket!=null){
        this.message="Your ticket is generated successfully with id "+ this.ticket.ticket_id;
      } 
      else{

        this.message="Complaint could not be registered due to some error";
      }
    }
      );



  }
}


  public bktocustpage(){

      this.router.navigate(['/customerPage']);

  }

}
