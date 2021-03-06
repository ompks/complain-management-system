import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";
  private baseURLWithPinCode="http://localhost:8080/api/v1/employeesByPinCode"

  loginData: [any];

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  userLogin(employee:Employee): Observable<Object>{
    {{ "debug" }}
    
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  callServerForPost(url: string, reqBody: any): Observable<any> {
    return this.httpClient.post(url, reqBody);
}

getEmployeeByPinCode(pinCode: string): Observable<Employee>{
  return this.httpClient.get<Employee>(`${this.baseURLWithPinCode}/${pinCode}`);
}
 
}
