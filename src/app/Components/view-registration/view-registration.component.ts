import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BikeServiceService } from '../../Services/bike-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  registeredBike;

  constructor(public bikeService: BikeServiceService, public currentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getRegisteredBike(this.currentRoute.snapshot.params.id);
  }

  getRegisteredBike(id) {
    this.bikeService.getBike(id).subscribe(
      (data) => {
        this.registeredBike = data;
      },
      (error) => {
        Observable.throw(error);
      },
      () => {
        console.log("Registered Bike Feteched Succesfully @-@")
      }
    )
  }

}
