import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { HomeComponent } from './home/home.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
const routes: Routes = [
  {path: 'employeeList', component : EmployeeListComponent},
  {path: 'createEmployee', component : CreateEmployeeComponent},
  {path: 'home', component: HomeComponent },
  {path: '' , redirectTo : '/home', pathMatch : 'full'},
  {path: 'updateEmployee/:id', component: UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
