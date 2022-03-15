import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
// import { AppComponent } from '../app.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUrl="http://localhost:8080/api/v1/login"
  employee: Employee = new Employee();
  isAdmin=false;
  isManager=false;
  isEngineer=false;
  isCustomer=false;
  loginData=[]

  constructor(
    // public fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
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


enableEmployeeRoute(data){
  // const data={user:'om',role:1};
  console.log(data)
  if(data['role']==1){
    this.isAdmin=true;
    this.isManager=true;
    this.isEngineer=true;
    this.isCustomer=true
  }else if(data['role']==2){
    this.isAdmin=false;
    this.isManager=true;
    this.isEngineer=false;
    this.isCustomer=false
  }else if(data['role']==3){
    this.isAdmin=false;
    this.isManager=false;
    this.isEngineer=true;
    this.isCustomer=false
  }else if(data['role']==4){
    this.isAdmin=false;
    this.isManager=false;
    this.isEngineer=false;
    this.isCustomer=true
  }
  else {
    this.router.navigate['/login']
  }

}




  login() {
    this.employeeService.callServerForPost(this.loginUrl, this.employee).subscribe(data => {
    this.loginData=data
    if(data['emailId'] != null){
        console.log("inside data status")
        this.enableEmployeeRoute(data)
        this.employeeService.loginData=data;

        // this.setData(data)
        // appComponent.enableEmployeeRoute()
        // let appComponent= new AppComponent(this.router);
        // appComponent.enableEmployeeRoute(data);
        this.router.navigate(['/employees']);
      }
      else {
        window.confirm("Please Enter Valid Credentials")
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
