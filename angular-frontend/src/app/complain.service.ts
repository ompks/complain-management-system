import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Complain } from './complain';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  private baseURL = "http://localhost:8080/api/v1/complains";
  private baseURLRaisedBy="http://localhost:8080/api/v1/complainsByRaisedBy";
  private baseURLAssignedTo="http://localhost:8080/api/v1/complainsAssignedTo";


  constructor(private httpClient: HttpClient) { }
  
  getComplainsList(): Observable<Complain[]>{
    return this.httpClient.get<Complain[]>(`${this.baseURL}`);
  }

  raiseComplain(complaint: Complain): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, complaint);
  }

  getComplainById(id: number): Observable<Complain>{
    return this.httpClient.get<Complain>(`${this.baseURL}/${id}`);
  }

  getEmployeeByRaiseBy(raiseby: string): Observable<Complain>{
    return this.httpClient.get<Complain>(`${this.baseURLRaisedBy}/${raiseby}`);
  }

  getEmployeeByAssignedTo(assinedTo: string): Observable<Complain>{
    return this.httpClient.get<Complain>(`${this.baseURLAssignedTo}/${assinedTo}`);
  }

  updateComplain(id: number, complaint: Complain): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, complaint);
  }

  deleteComplain(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  
}
