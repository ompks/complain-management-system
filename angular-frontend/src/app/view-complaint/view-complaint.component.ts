import { Component, OnInit } from '@angular/core';
import { Complain } from '../complain';
import { ComplainService } from '../complain.service';
import { Router } from '@angular/router';
import {EmployeeService} from '../employee.service'
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.css']
})
export class ViewComplaintComponent implements OnInit {

  complains:Complain[];
  complainsRaiseby:Complain;
  complainsAssignedTo:Complain;
  isAdmin=false;
  isManager=false;
  isEngineer=false;
  isCustomer=false
  viewComplaint=[]

  constructor(
    private complainService: ComplainService,
    private router: Router,
    private employeeService:EmployeeService,
    private appCOmponent:AppComponent
    ) { }

  ngOnInit(): void {
    // this.getComplains();
    console.log("login Data :- "+this.employeeService.loginData['id']);
    this.viewComplaint=this.appCOmponent.loginData
    // console.log("view-complaint role", this.appCOmponent.loginData['role'])
    if(this.appCOmponent.loginData['role'] == 'Admin'){
      // this.router.navigate(['/admin']);
      this.isAdmin=true;
      this.isManager=false;
      this.isEngineer=false;
      this.isCustomer=false
      this.getComplains();
    }
    else if (this.appCOmponent.loginData['role'] == 'Engineer'){
      this.isAdmin=false;
      this.isManager=false;
      this.isEngineer=true;
      this.isCustomer=false
      // key.firstName+" "+key.lastName
      console.log("assigned to value :-",this.appCOmponent.loginData['firstName']+" "+this.appCOmponent.loginData['lastName'])
      this.getComplainsBasedOnAssignedTo(this.appCOmponent.loginData['firstName']+" "+this.appCOmponent.loginData['lastName'])
      // this.router.navigate(['/engineer']);
    }
    else if (this.appCOmponent.loginData['role'] == 'Manager'){
      this.isAdmin=false;
      this.isManager=true;
      this.isEngineer=false;
      this.isCustomer=false
      this.getComplains();
      // this.router.navigate(['/manager']);
    }

    else if (this.appCOmponent.loginData['role'] == 'User'){
      this.isAdmin=false;
      this.isManager=false;
      this.isEngineer=false;
      this.isCustomer=true
      this.getComplainsBasedOnRaisedBy(this.appCOmponent.loginData['id'])
      // this.router.navigate(['/user']);
    }
    else {
      // this.router.navigate(['/login']);

  
    }
    
  }


  private getComplains(){
    this.complainService.getComplainsList().subscribe(data => {
      this.complains = data;
    });
  }


  private getComplainsBasedOnRaisedBy(raiseby: string){
    this.complainService.getEmployeeByRaiseBy(raiseby).subscribe(data => {
      this.complainsRaiseby=data;
    })
  }

  private getComplainsBasedOnAssignedTo(assinedTo: string){
    this.complainService.getEmployeeByAssignedTo(assinedTo).subscribe(data => {
      this.complainsAssignedTo=data;
    })
  }


  complainDetails(id: number){
    this.router.navigate(['complain-details', id]);
  }

//   enableEmployeeRoute(data){
//     const data={user:'om',role:4};

//     if(data.role==1){
//       this.isAdmin=true;
//       this.isManager=true;
//       this.isEngineer=true;
//       this.isCustomer=true
//     }else if(data.role==2){
//       this.isAdmin=false;
//       this.isManager=true;
//       this.isEngineer=false;
//       this.isCustomer=false
//     }else if(data.role==3){
//       this.isAdmin=false;
//       this.isManager=false;
//       this.isEngineer=true;
//       this.isCustomer=false
//     }else if(data.role==4){
//       this.isAdmin=false;
//       this.isManager=false;
//       this.isEngineer=false;
//       this.isCustomer=true
//     }
//     else {
//       this.router.navigate['/login']
//     }
// }

updateComplain(id: number){
  this.router.navigate(['update-complain', id]);
}

deleteComplain(id: number){
  this.complainService.deleteComplain(id).subscribe( data => {
    console.log(data);
    this.getComplains();
  })
}
}
