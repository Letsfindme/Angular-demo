import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Link } from '../model/link';

@Injectable({
  providedIn: 'root'
})

export class DataserviceService {

  constructor(private httpClient: HttpClient) { } //appelle à la DB

  public getDailyLink(): Observable<Link[]>{
    return this.httpClient.get<Link[]>('http://localhost:8080/api/link/day')  }
  
}
