import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
// gender = 'male';
// isActive = 'true';
// department = 'it';
previewPhoto = false;
employee : Employee = {
  id : 1,
  name : 'pushpak',
  gender : null,
  email : null,
  phoneNumber : null,
  contactPreference : null,
  dateOfBirth : null,
  department : null,
  isActive : null,
  photoPath : null
};

// dateOfBirth : Date = new Date(2018, 0 , 30);
datePickerConfig: Partial<BsDatepickerConfig>;
departments : Department[] =[
  {id : 11, name: 'Help Desk'},
  {id : 12, name: 'IT'},
  {id : 13, name: 'Payroll'},
  {id : 14, name: 'Admin'},
  {id : 15, name: 'Help'}
];
  constructor() {
    this.datePickerConfig = Object.assign({},{
      containerClass : 'theme-dark-blue',
      // showWeekNumbers: false,
      // minDate : new Date(2018, 0, 1),
      // maxDate : new Date(2018, 1, 31),
      dateInputFormat : 'DD/MM/YYYY'
    });
   }

  ngOnInit() {
  }
  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }
  saveEmployee(newEmployee : Employee) : void{
    // console.log(employeeForm);
    // console.log(employeeForm.value);
    console.log(newEmployee);
  }
}
