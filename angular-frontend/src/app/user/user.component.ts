import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'Complaint Management System';
  userMessage=""
  constructor(
    private appComponent:AppComponent
  ) { }

  ngOnInit(): void {
    this.userMessage=this.appComponent.message
  }

}

