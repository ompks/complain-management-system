import { Component, OnInit } from '@angular/core';
import { Complain } from '../complain';
import { ComplainService } from '../complain.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.css']
})
export class ViewComplaintComponent implements OnInit {

  complains:Complain[]
  isAdmin=false;
  isManager=false;
  isEngineer=false;
  isCustomer=false
  constructor(private complainService: ComplainService,
    private router: Router) { }

  ngOnInit(): void {
    this.getComplains();
  }


  private getComplains(){
    this.complainService.getComplainsList().subscribe(data => {
      this.complains = data;
    });
  }


  complainDetails(id: number){
    this.router.navigate(['complain-details', id]);
  }
  enableEmployeeRoute(){
    const data={user:'om',role:1};
    if(data.role==1){
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
      this.router.navigate['/login']
    }
}

updateComplain(id: number){
  this.router.navigate(['update-complain', id]);
}

deleteComplain(id: number){
  this.complainService.deleteComplain(id).subscribe( data => {
    console.log(data);
    this.getComplains();
  })
}
}
