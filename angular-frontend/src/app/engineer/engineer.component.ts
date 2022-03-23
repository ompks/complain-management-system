import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.css']
})
export class EngineerComponent implements OnInit {
  userMessage=""
  constructor(
    private appComponent:AppComponent
  ) { }

  ngOnInit(): void {
    this.userMessage=this.appComponent.message
  }

}
