import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Complaint Management System';
  isAdmin=false;
  isManager=false;
  isEngineer=false;
  isCustomer=false
  constructor(
    private route:Router
  ){}
  ngOnInit(): void {
     this.enableEmployeeRoute(); 
  }
  enableEmployeeRoute(){
    // console.log(data)
    const data={user:'om',role:1};
    if(data.role==1){
      console.log("test")
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
      this.route.navigate['/login']
      console.log("wring role for the user")
    }

  }
   
}
