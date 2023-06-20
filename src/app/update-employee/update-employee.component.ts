import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  id:number;
  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router){}

  employee:Employee = new Employee();

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {this.employee=data});

  }
  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe( data => {
      this.goToEmployeeList();
    });
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}
