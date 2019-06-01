import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
// gender = 'male';
// isActive = 'true';
// department = 'it';
departments : Department[] =[
  {id : 11, name: 'Help Desk'},
  {id : 12, name: 'IT'},
  {id : 13, name: 'Payroll'},
  {id : 14, name: 'Admin'},
  {id : 15, name: 'Help'}
];
  constructor() { }

  ngOnInit() {
  }
  saveEmployee(employeeForm : NgForm) : void{
    console.log(employeeForm);
    console.log(employeeForm.value);
  }
}
