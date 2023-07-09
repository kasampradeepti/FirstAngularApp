import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService : EmployeeService, private router :Router) { }

  ngOnInit() : void {
    this.getEmployee();
  }

  private getEmployee() {
 this.employeeService.getEmployees().subscribe( data => {
  this.employees = data;
});
  }

 UpdateEmployee(id: number) {
console.log("id from employee-list is "+id);
this.router.navigate(['updateEmployee',id]);
  }

  DeleteEmployee(id: number) {
    this.employeeService.DeleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployee();
    },
   error => console.error());
  }
}
