import { Component, OnInit } from '@angular/core';
import { ComplaintRedressalServiceService } from '../complaint-redressal-service.service';
import {User} from '../User';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  ngOnInit():void{}

  usernm:any;
  user:any;
  message:any;
  userpresent:boolean=false;
  userUpdated:User=new User();

constructor(private service:ComplaintRedressalServiceService){}

  public searchUser(){

   let response=this.service.searchUsr(this.usernm);
   response.subscribe((data:any)=>{this.user=data;
            if(this.user===null){
              this.message="The user with username "+this.usernm+ " doesnt exist in database.";
            }
          else{

            this.userpresent=true;
          }
          
          }
    );

  }

  public updateUser(){
     
    let response=this.service.updateusr(this.user.userid,this.userUpdated);
    response.subscribe((data:any)=>{this.user=data;
                        this.message="User with username as "+this.usernm+"  updated successfully";}
      );

  }


}
