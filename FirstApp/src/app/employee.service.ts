
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private baseUrl = "http://localhost:8080/api/v1";
  constructor(private httpClient: HttpClient ) { 

  }

   getEmployees() : Observable<Employee[]> {
    console.log(this.baseUrl);
    return this.httpClient.get<Employee[]>(`${this.baseUrl}/employees`); 
  }

  AddEmployee(employee : Employee) : Observable<Object> {
   return  this.httpClient.post(`${this.baseUrl}/createEmployees`, employee);
  }

 updateEmployee(employee : Employee) : Observable<Object> {
return this.httpClient.patch(`${this.baseUrl}/employeeUpdate/`+employee.id, employee);
  }
  
  getEmployeeById(id: number): Observable<Employee> {
    console.log("id at service is :"+id);
    return this.httpClient.get<Employee>(`${this.baseUrl}/employees/${id}`);
  }

  DeleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete<Map<String,Boolean>>(`${this.baseUrl}/employees/${id}`);
  }
  
}
