import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userMessage=""
  constructor(
    private appComponent:AppComponent
  ) { }

  ngOnInit(): void {
    this.userMessage=this.appComponent.message
  }

}
