import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(
    // public fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
    ) { 
      
    }



  ngOnInit(): void {
  }


  // loginModel = {
  //   "emailId": "ompks95@gmail.com",
  //   "password": "1234"
  // };

  // loginForm: FormGroup;

//   public isEquals(val1: any, val2: any): boolean {
//     return BspUtil.isEquals(val1, val2);
// }




  login() {
    this.employeeService.callServerForPost("http://localhost:8080/api/v1/login", this.employee).subscribe(data => {
      
      console.log("inside data status")
    if(data.status == 'SUCCESS'){
        console.log("inside data status")
        this.router.navigate(['/employees']);
      }
      else {
        console.log('Error')
      }
    },
    error => console.log(error));

    // console.log("Login Successfull")
    // this.employeeService.userLogin(this.employee).subscribe(data => {
    //   console.log(data);
    //   console.log("Login Successfull");
    //   this.router.navigate(['/employees']);

    //   // this.goToEmployeeList();
    // },
    //   error => console.log(error));
  }

  onSubmit() {
    // console.log(this.employee);
    this.login();

  }
}
