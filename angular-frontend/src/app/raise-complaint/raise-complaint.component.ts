import { Component, OnInit } from '@angular/core';
// import { Employee } from '../employee';
import { Complain} from '../complain';
// import { EmployeeService } from '../employee.service';
import {ComplainService} from '../complain.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-raise-complaint',
  templateUrl: './raise-complaint.component.html',
  styleUrls: ['./raise-complaint.component.css']
})
export class RaiseComplaintComponent implements OnInit {
  // employee: Employee = new Employee();
  complain:Complain= new Complain();
  constructor(private complainService: ComplainService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.complainService.raiseComplain(this.complain).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
    console.log(this.complain);
    this.saveEmployee();
  }
}

