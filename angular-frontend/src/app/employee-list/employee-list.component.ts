import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  isAdmin=false;
  isManager=false;
  isEngineer=false;
  isCustomer=false
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
  enableEmployeeRoute(){
    const data={user:'om',role:2};
    if(data.role==1){
      this.isAdmin=true;
      this.isManager=true;
      this.isEngineer=true;
      this.isCustomer=true
    }else if(data.role==2){
      this.isAdmin=false;
      this.isManager=true;
      this.isEngineer=false;
      this.isCustomer=false
    }else if(data.role==3){
      this.isAdmin=false;
      this.isManager=false;
      this.isEngineer=true;
      this.isCustomer=false
    }else if(data.role==4){
      this.isAdmin=false;
      this.isManager=false;
      this.isEngineer=false;
      this.isCustomer=true
    }
    else {
      this.router.navigate['/login']
    }

  }
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
