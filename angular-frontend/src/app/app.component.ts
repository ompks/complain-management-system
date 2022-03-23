import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginUrl="http://localhost:8080/api/v1/login"
  employee: Employee = new Employee();
  loginData=[]
  title = 'Complaint Redressal System';
  isAdmin=false;
  isManager=false;
  isEngineer=false;
  isCustomer=false;
  message=""
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ){}
  ngOnInit(): void {
    //  this.enableEmployeeRoute();
    this.login 
  }
  enableEmployeeRoute(data){
    console.log("role of user",data['role'])
    // const data={user:'om',role:'Admin'};
    this.message="Hello "+data['role']
    if(data['role']=="Admin"){
      console.log("test")
      this.isAdmin=true;
      this.isManager=true;
      this.isEngineer=true;
      this.isCustomer=true
      this.router.navigate['/main-url']
    }else if(data['role']=="Manager"){
      this.isAdmin=false;
      this.isManager=true;
      this.isEngineer=false;
      this.isCustomer=false
      this.router.navigate['/main-url']

    }else if(data['role']=="Engineer"){
      this.isAdmin=false;
      this.isManager=false;
      this.isEngineer=true;
      this.isCustomer=false
      this.router.navigate['/main-url']

    }else if(data['role']=="User"){
      this.isAdmin=false;
      this.isManager=false;
      this.isEngineer=false;
      this.isCustomer=true
      this.router.navigate['/main-url']

    }
    else {
      this.router.navigate['/login']
      console.log("wrong role for the user")
    }

  }
   

  login(loginInput) {
    this.employeeService.callServerForPost(this.loginUrl, loginInput).subscribe(data => {
    this.loginData=data
    if(data['emailId'] != null){
        console.log("inside data status")
        this.enableEmployeeRoute(data)
        this.employeeService.loginData=data;
        if(data['role'] == 'Admin'){
          this.router.navigate(['/admin']);
        }
        else if (data['role'] == 'Engineer'){
          this.router.navigate(['/engineer']);
        }
        else if (data['role'] == 'Manager'){
          this.router.navigate(['/manager']);
        }

        else if (data['role'] == 'User'){
          this.router.navigate(['/user']);
        }
        else {
          // this.router.navigate(['/login']);

      
        }

      }
      else {
        window.confirm("Please Enter Valid Credentials")
        console.log('Error')
      }
    },
    error => 
      {
        if(error.status==404){
                // console.log("error status",error.status)
          window.confirm("Please Enter Valid Credentials")
        }
      }
      
      );

    
  }
}

