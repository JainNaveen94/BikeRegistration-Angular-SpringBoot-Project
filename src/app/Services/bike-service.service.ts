import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BikeServiceService {

  constructor(public httpClient:HttpClient) { }

  getBikes() {
    return this.httpClient.get("/server/api/v1/bike");
  }

  getBike(id:number) {
    return this.httpClient.get("/server/api/v1/bike/" + id);
  }

  registerBike(bike){
    let body = JSON.stringify(bike);
    return this.httpClient.post("/server/api/v1/bike", body, httpOptions);
  }


}
