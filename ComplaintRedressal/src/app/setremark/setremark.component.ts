import { Component, OnInit } from '@angular/core';
import { ComplaintRedressalServiceService } from '../complaint-redressal-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setremark',
  templateUrl: './setremark.component.html',
  styleUrls: ['./setremark.component.css'],
  styles: [
    `
    :host {
      display:block;
      background-color: cyan;
    }
  `,
  ],
})
export class SetremarkComponent implements OnInit{

  ngOnInit():void{}

  constructor(public service:ComplaintRedressalServiceService,private router:Router){}

  remark:any;
  ticket:any;
  message:any

  public setRmrk(){

    let response=this.service.setRemrk(this.remark);
    response.subscribe((data:any)=>{this.ticket=data;
                      this.message="Remark set to '"+this.ticket.remark+ "' and status set to ESCALATED";}
      
      );
  }


  public bktoengPage(){

    this.router.navigate(['/engineerPage']);
  }

}
