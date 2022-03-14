import { Component, OnInit } from '@angular/core';
import { ComplainService } from '../complain.service';
import { Complain } from '../complain';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';




@Component({
  selector: 'app-update-complain',
  templateUrl: './update-complain.component.html',
  styleUrls: ['./update-complain.component.css']
})
export class UpdateComplainComponent implements OnInit {

  public options: string[] = ["Open", "Closed", "In Progress", "Reopen"];
  selectedStatus = "Customer";
  public assignedToValues:string[]= [];
  pinCode: string;
  id: number;
  complain: Complain = new Complain();
  employee:Employee= new Employee();
  constructor(
    private complainService: ComplainService,
    private employeeService:EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    

    this.complainService.getComplainById(this.id).subscribe(data => {
      this.complain = data;
      this.pinCode=data["complainPinCode"]
      console.log(this.pinCode)
    }, error => console.log(error));


    this.employeeService.getEmployeeByPinCode("851129").subscribe(data =>{
      this.employee=data;
      console.log("inside pincode")
      this.assignedToValues.concat(data[0]['id'])
      this.assignedToValues.concat(data[1]['id'])
      console.log(data[0]['id'])
      console.log(data[1]['id'])
      console.log(this.assignedToValues)
    }, error => console.log(error) );
    
    console.log(this.assignedToValues)
  }

  onSubmit(){
    this.complainService.updateComplain(this.id, this.complain).subscribe( data =>{
      this.goToComplainList();
    }
    , error => console.log(error));
  }

  goToComplainList(){
    this.router.navigate(['/complains']);
  }
}
