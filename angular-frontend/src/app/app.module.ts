import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CustomerComponent } from './customer/customer.component';
import { RaiseComplaintComponent } from './raise-complaint/raise-complaint.component';
import { LoginComponent } from './login/login.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';
import { ComplainDetailsComponent } from './complain-details/complain-details.component';
import { ComplainListComponent } from './complain-list/complain-list.component';
import { UpdateComplainComponent } from './update-complain/update-complain.component';
import { UserComponent } from './user/user.component';
import { ManagerComponent } from './manager/manager.component';
import { EngineerComponent } from './engineer/engineer.component';
import { AdminComponent } from './admin/admin.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    CustomerComponent,
    RaiseComplaintComponent,
    LoginComponent,
    ViewComplaintComponent,
    ComplainDetailsComponent,
    ComplainListComponent,
    UpdateComplainComponent,
    UserComponent,
    ManagerComponent,
    EngineerComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
