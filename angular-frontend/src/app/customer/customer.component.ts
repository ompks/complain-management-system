import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  userMessage=""
  constructor(
    private appComponent:AppComponent
  ) { }

  ngOnInit(): void {
    this.userMessage=this.appComponent.message
  }

}
