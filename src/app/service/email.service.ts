import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUri:string = "http://localhost:8080"

  constructor(private httpClient:HttpClient) { }

  sendEmail(data:any){
    return this.httpClient.post(`${this.baseUri}/sendemail`, data);
  }
}
