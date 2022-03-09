import { Component, OnInit } from '@angular/core';
import { ComplainService } from '../complain.service';
import { Complain } from '../complain';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-update-complain',
  templateUrl: './update-complain.component.html',
  styleUrls: ['./update-complain.component.css']
})
export class UpdateComplainComponent implements OnInit {

  public options: string[] = ["Open", "Closed", "In Progress", "Reopen"];
  selectedStatus = "Customer";

  id: number;
  complain: Complain = new Complain();
  constructor(private complainService: ComplainService,
    private route: ActivatedRoute,
    private router: Router) { }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.complainService.getComplainById(this.id).subscribe(data => {
      this.complain = data;
    }, error => console.log(error));
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
