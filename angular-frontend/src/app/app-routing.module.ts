import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CustomerComponent } from './customer/customer.component';
import { RaiseComplaintComponent } from './raise-complaint/raise-complaint.component';
import { LoginComponent } from './login/login.component';
import {AdminRouteGuardGuard} from 'src/app/RouteGuard/admin-route-guard.guard'
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';
import { ComplainDetailsComponent } from './complain-details/complain-details.component';
import { ComplainListComponent } from './complain-list/complain-list.component';
import {  UpdateComplainComponent} from './update-complain/update-complain.component'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ManagerComponent } from './manager/manager.component';
import { EngineerComponent } from './engineer/engineer.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent },
  {path: 'view-employees', component: EmployeeListComponent },
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: 'customer', component:CustomerComponent},
  {path: 'raise-complaint', component:RaiseComplaintComponent},
  {path: 'view-complaint', component:ViewComplaintComponent},
  {path: 'complain-details', component:ComplainDetailsComponent},
  {path: 'complains', component: ComplainListComponent },
  {path: 'update-complain/:id', component: UpdateComplainComponent},
  {path: 'complain-details/:id', component: ComplainDetailsComponent},
  {path: 'login', component:LoginComponent},
  {path:'user', component:UserComponent},
  {path:'user/raise-complaint', component:RaiseComplaintComponent},
  {path:'user/view-complaint', component:ViewComplaintComponent},
  {path:'admin', component:AdminComponent},
  {path: 'admin/employees', component: EmployeeListComponent },
  {path:'admin/raise-complaint', component:RaiseComplaintComponent},
  {path:'admin/view-complaint', component:ViewComplaintComponent},
  {path:'admin/create-employee', component:CreateEmployeeComponent},
  {path:'admin/view-employees', component:EmployeeListComponent},
  {path:'manager', component:ManagerComponent},
  {path:'manager/view-complaint', component:ViewComplaintComponent},
  {path:'engineer', component:EngineerComponent},
  {path:'engineer/view-complaint', component:ViewComplaintComponent},
  {path: 'logout', component:LogoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
