import { Component, OnInit } from '@angular/core';
import { ComplaintRedressalServiceService } from '../complaint-redressal-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css'],
  styles: [
    `
    :host {
      display:block;
      background-color: aqua;
    }
  `,
  ],
})
export class AdminpageComponent implements OnInit {

  ngOnInit():void{}

  constructor(public service:ComplaintRedressalServiceService,private router:Router){}

 public createUser(){

  this.router.navigate(['/register']);
 }


 public updateUser(){

  this.router.navigate(['/updateUser']);
 }

 public gotoCustDashboard(){
  this.router.navigate(['/customerPage']);
 }

 public gotoManDashboard(){
  this.router.navigate(['/ManagerPage']);
 }

 public gotoEngrDashboard(){
  this.router.navigate(['/engineerPage']);
 }

 public assignPincodesToMan(){

  this.router.navigate(['/assignPincodes']);
 }
}
