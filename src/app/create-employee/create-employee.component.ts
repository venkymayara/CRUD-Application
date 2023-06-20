import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {
  constructor(private employeeService:EmployeeService,private router:Router){}

  saveEmployee(){
      this.employeeService.createEmployee(this.employee).subscribe(data=>{console.log(data)});
      this.goToEmployeeList();
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  employee:Employee = new Employee();
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
  ngOnInit(){}

}
