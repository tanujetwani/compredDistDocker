import { Component ,OnInit} from '@angular/core';
import { ComplaintRedressalServiceService } from '../complaint-redressal-service.service';
import { Router } from '@angular/router';
import {User} from '../User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles: [
    `
    :host {
      display:block;
      background-color: skyblue;
    }
  `,
  ],
})
export class LoginComponent implements OnInit{

  ngOnInit():void {}

  constructor(private router:Router, private service:ComplaintRedressalServiceService){}

  usernm:any;
  pwd:any;
  message:any;
  //user:User=new User();
  user:any;
  //isLoggedIn:boolean=false;
 // mystyle:object={ background-color:skyblue};

  public loginNow(){

    let response=this.service.login(this.usernm,this.pwd);

    response.subscribe((data:any)=>{this.user=data;
         console.log("User :"+ this.user);

      if(this.user!==null){
          
              this.service.user=this.user;
             this.service.isLoggedIn=true;
           
        if(this.user.role.roleName==="Customer"){
               
               this.router.navigate(['/customerPage']);

        }

        else  if (this.user.role.roleName==="Engineer"){
             this.router.navigate(['/engineerPage']);

        }

         else if (this.user.role.roleName==="Manager"){
          this.router.navigate(['/ManagerPage']);
        }

         else if (this.user.role.roleName==="Admin"){
          this.service.isadmin=true;
          this.router.navigate(['/AdminPage']);
        }

      }
        else{

          this.message="Incorrect username or password"
        }

      }

    );  //End of response.subscribe
    }  //End of loginNow()


  }



