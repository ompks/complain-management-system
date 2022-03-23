import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {



  constructor(
    private appComponent:AppComponent,
    private router: Router
    ) { 
    
  }

  ngOnInit(): void {
    this.onSubmit()

  }

  onSubmit(){
  this.appComponent.isAdmin=false;
  this.appComponent.isManager=false;
  this.appComponent.isEngineer=false;
  this.appComponent.isCustomer=false;
  this.router.navigate(['login']).then(() => {
    window.location.reload();
  });
    // this.saveEmployee();
  }

}
