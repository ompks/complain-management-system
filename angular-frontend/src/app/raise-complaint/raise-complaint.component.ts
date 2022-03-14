import { Component, OnInit } from '@angular/core';
// import { Employee } from '../employee';
import { Complain} from '../complain';
// import { EmployeeService } from '../employee.service';
import {ComplainService} from '../complain.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-raise-complaint',
  templateUrl: './raise-complaint.component.html',
  styleUrls: ['./raise-complaint.component.css']
})
export class RaiseComplaintComponent implements OnInit {
  // employee: Employee = new Employee();
  complain:Complain= new Complain();



  constructor(
    private complainService: ComplainService,
    private router: Router,
    private employeeService: EmployeeService,
    // private loginComponent:LoginComponent
    ) { }


  ngOnInit(): void {
  }

  saveComplain(){
    this.complain['complainStatus']= 'Open'
    this.complain['raisedBy']=this.employeeService.loginData['id']
    console.log(this.complain)
    this.complainService.raiseComplain(this.complain).subscribe( data =>{
      console.log(data);
      this.goToComplainList();
    },
    error => console.log(error));
  }

  goToComplainList(){
    this.router.navigate(['/complains']);
  }
  
  onSubmit(){
    console.log(this.complain);
    this.saveComplain();
  }

}

