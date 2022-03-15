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
   idList=[];
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
    
     this.fetchComplainDetail();

    
  }

fetchComplainDetail(){

  this.complainService.getComplainById(this.id).subscribe(
    data => {
    this.complain = data;
    this.pinCode=data["complainPinCode"]
    this.getEmployeeByPinCode(this.pinCode);
  }, 
  error =>{
    console.log(error)
  } );

}

getEmployeeByPinCode(pin){
  this.employeeService.getEmployeeByPinCode(pin).subscribe(data =>{
    console.log("pin"+this.pinCode);
    
    this.employee=data;
    console.log(this.employee);
    this.emplyeeIdList(this.employee)
  }, error => console.log(error) );
  
  console.log(this.assignedToValues)
}

  onSubmit(){
    this.complainService.updateComplain(this.id, this.complain).subscribe( data =>{
      this.goToComplainList();
    }
    , error => console.log(error));
  }

  public emplyeeIdList(employeeList){
      for(let key of employeeList){
        this.idList.push(key.id);
      }
      console.log("idList"+this.idList);
      
      return this.idList;
  }
  goToComplainList(){
    this.router.navigate(['/complains']);
  }
}
