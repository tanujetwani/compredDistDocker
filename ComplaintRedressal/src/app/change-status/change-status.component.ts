import { Component, OnInit } from '@angular/core';
import { ComplaintRedressalServiceService } from '../complaint-redressal-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.css'],
  styles: [
    `
    :host {
      display:block;
      background-color: lightgreen;
    }
  `,
  ],
})
export class ChangeStatusComponent implements OnInit {


  ngOnInit():void{}
   
  constructor(public service:ComplaintRedressalServiceService,private router:Router){}

  status:any;
  message:any;
  ticket:any;

  public changeStatus(){

    let response=this.service.chngStatus(this.service.ticket_id,this.status);

  response.subscribe((data:any)=>{this.ticket=data;
                          this.message="Status assigned as "+this.ticket.status;});
  }


  public bktoengPage(){

    this.router.navigate(['/engineerPage']);
  }
}
