import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  userMessage=""
  constructor(
    private appComponent:AppComponent
  ) { }

  ngOnInit(): void {
    this.userMessage=this.appComponent.message
  }

}
