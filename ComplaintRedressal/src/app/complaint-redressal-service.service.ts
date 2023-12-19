import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from './User';
import { Ticket } from './Ticket';


@Injectable({
  providedIn: 'root'
})
export class ComplaintRedressalServiceService {

  constructor(private http:HttpClient) { }

  user:any;
  //user:User=new User();
  //username:string;
  ticket_id:any;
  engrId:any;
  isLoggedIn:boolean=false;
  isadmin:boolean=false;
  
  

  public register(user:any){

    return this.http.post("http://localhost:8080/register",user,{responseType:"text" as "json"})
  }


  public login(username:any,pwd:any){

    return this.http.get(`http://localhost:8080/login/${username}/${pwd}`);
  }

  
  public registerTicket(ticket:any){
    console.log("Inside Register Ticket");
    console.log("User: "+ this.user.username);
    return this.http.post(`http://localhost:8080/createTicket/${this.user.userid}`,ticket, {responseType:"text" as "json"})
  }

  public viewComplaints(){
    return this.http.get(`http://localhost:8080/viewTicket/${this.user.username}`);


  }


  public submitFdbk(ticket_id:number,feedback:any){

    return this.http.post(`http://localhost:8080/submitfeedback/${ticket_id}/${feedback}`,{responseType:"text" as "json"});
  }


  public registerComplaint(problem:any,details:any){
           
    return this.http.post(`http://localhost:8080/registerComplaint/${this.ticket_id}/${problem}/${details}`,{responseType:"text" as "json"});


  }

  public viewTicketsByManager(){

    return this.http.get("http://localhost:8080/viewTicketsByManager");
  }


  public assignTickets(){

    return this.http.get("http://localhost:8080/getActiveTickets");
  }


  public assignToEngr(){

    return this.http.get(`http://localhost:8080/CheckassigntoEngineer/${this.ticket_id}/${this.user.username}`);

  }


  public assignTicketToEngr(){

    return this.http.post(`http://localhost:8080/assignTicketToEngineer/${this.engrId}/${this.ticket_id}`,{responseType:"text" as "json"});
  }


  public viewTicketsByEngr(){

    return this.http.get(`http://localhost:8080/viewTicketsByEngineer/${this.user.userid}`);
  }

  public chngStatus(ticket_id:any,status:any){

    return this.http.post(`http://localhost:8080/assignStatus/${ticket_id}/${status}`,{responseType:"text" as "json"});
  }

  public setRemrk(remark:any){

    return this.http.post(`http://localhost:8080/setRemark/${this.ticket_id}/${remark}`,{responseType:"text" as "json"});
  }


  public viewTicketsByCust(cust_id:any){

    return this.http.get(`http://localhost:8080/viewComplaintsBasedonCustomer/${cust_id}`);


  }

  public searchUsr(usernm:any){

    return this.http.get(`http://localhost:8080/searchUser/${usernm}`);
  }


  public updateusr(userid:any,user:any){


    return this.http.put(`http://localhost:8080/updateUser/${userid}`,user,{responseType:"text" as "json"});
  }

  public getPinCodes(){

    return this.http.get("http://localhost:8080/getPinCodes");
  }

  public setPinCode(username:any,pincode:any){

    return this.http.post(`http://localhost:8080/setPincode/${username}/${pincode}`,{responseType:"text" as "json"});
  }


  public delTicket(ticketId:any){

    return this.http.delete(`http://localhost:8080/deleteTicket/${ticketId}`);
  }

  public searchTicket(ticket_id:any){

    return this.http.get(`http://localhost:8080/searchTicket/${ticket_id}`);
  }


  public updTicket(ticket_id:any,ticket1:Ticket){

    return this.http.put(`http://localhost:8080/updateTicket/${ticket_id}`,ticket1,{responseType:"text"as "json"});


  }
}
