import { Component, OnInit } from '@angular/core';

import { BikeServiceService } from '../../Services/bike-service.service';

@Component({
  selector: 'app-bike-component',
  templateUrl: './bike-component.component.html',
  styleUrls: ['./bike-component.component.css']
})
export class BikeComponentComponent implements OnInit {

  public bikes;

  constructor(public bikeService: BikeServiceService) { }

  ngOnInit() {
    this.getBikes();
  }

  getBikes() {
    this.bikeService.getBikes().subscribe((data) => {
      this.bikes = data;
    }, (error) => {
      console.error(error);
    },() => {
      console.log("Bikes Loaded");
    })
  }

}
