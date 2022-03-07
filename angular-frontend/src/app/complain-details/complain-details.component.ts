import { Component, OnInit } from '@angular/core';
import { Complain } from '../complain';
import { ActivatedRoute } from '@angular/router';
import { ComplainService } from '../complain.service';

@Component({
  selector: 'app-complain-details',
  templateUrl: './complain-details.component.html',
  styleUrls: ['./complain-details.component.css']
})
export class ComplainDetailsComponent implements OnInit {

  id:number
  complain:Complain
  constructor(private route: ActivatedRoute, private complainService: ComplainService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.complain = new Complain();
    this.complainService.getComplainById(this.id).subscribe( data => {
      this.complain = data;
    });
  }

}
