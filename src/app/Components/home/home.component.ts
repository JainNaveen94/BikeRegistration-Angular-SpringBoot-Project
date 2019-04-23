import { Component, OnInit } from '@angular/core';
import { BikeServiceService } from '../../Services/bike-service.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[] = [
    'Royal-Enfield 350 Classic',
    'KTM 350',
    'Bajaj pulsar 400',
    'Honda CBR 420',
    'Yamaha R1'
  ];
  bikeForm: FormGroup;
  validMessage: string = '';

  constructor(public bikeService: BikeServiceService) { }

  submitRegistration() {
    if(this.bikeForm.valid) {
      this.validMessage = "Bike Is Registered Succesfully";
      this.bikeService.registerBike(this.bikeForm.value).subscribe(
        (data)=> {
          this.bikeForm.reset();
          return true;
        },
        (error) => {
          return Observable.throw(error);
        },
        () => {
          console.log("Bike Register SuccessFully");
        }
      )
    } else {
      this.validMessage = "Please Fill The Form Properly With All Required Fields";
    }
  }

  ngOnInit() {
    this.bikeForm = new FormGroup ({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', [Validators.required]),
      contant: new FormControl()
    });
  }



}
