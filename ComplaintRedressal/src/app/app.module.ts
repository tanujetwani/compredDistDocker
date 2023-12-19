import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ComplaintRedressalServiceService } from './complaint-redressal-service.service';
import { LoginComponent } from './login/login.component';
import { CustomerpageComponent } from './customerpage/customerpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { EngineerpageComponent } from './engineerpage/engineerpage.component';
import { ManagerpageComponent } from './managerpage/managerpage.component';
import { SubmitFeedbkComponent } from './submit-feedbk/submit-feedbk.component';
import { RegisterComplaintComponent } from './register-complaint/register-complaint.component';
import { AssignToEngineerComponent } from './assign-to-engineer/assign-to-engineer.component';
import { ChangeStatusComponent } from './change-status/change-status.component';
import { SetremarkComponent } from './setremark/setremark.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AssignPincodesComponent } from './assign-pincodes/assign-pincodes.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';


const routes:Routes=[

  {path:'register', component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'customerPage',component:CustomerpageComponent},
  {path:'AdminPage', component:AdminpageComponent},
  {path:'engineerPage',component:EngineerpageComponent},
  {path:'ManagerPage', component:ManagerpageComponent},
  {path:'submitFeedbk',component:SubmitFeedbkComponent},
  {path:'registerComplaint',component:RegisterComplaintComponent},
  {path:'assignToEngineer',component:AssignToEngineerComponent},
  {path:'changeStatus',component:ChangeStatusComponent},
  {path:'setRemark',component:SetremarkComponent},
  {path:'logout',component:LogoutComponent},
  {path:'updateUser',component:UpdateUserComponent},
  {path:'assignPincodes',component:AssignPincodesComponent},
  {path:'updateTicket',component:UpdateTicketComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CustomerpageComponent,
    AdminpageComponent,
    EngineerpageComponent,
    ManagerpageComponent,
    SubmitFeedbkComponent,
    RegisterComplaintComponent,
    AssignToEngineerComponent,
    ChangeStatusComponent,
    SetremarkComponent,
    LogoutComponent,
    UpdateUserComponent,
    AssignPincodesComponent,
    UpdateTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [ComplaintRedressalServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
