import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

 

  ngOnInit(): void {
  }

  login(){

     console.log("Login Successfull")
    this.employeeService.userLogin(this.employee).subscribe( data =>{
      console.log(data);
      console.log("Login Successfull");
      this.router.navigate(['/employees']);

      // this.goToEmployeeList();
    },
    error => console.log(error));
  }

  onSubmit(){
    // console.log(this.employee);
    this.login();
    
  }
}
