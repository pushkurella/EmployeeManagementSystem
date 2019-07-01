import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService : StudentService) { }
  students ;
  arr=[];
  async ngOnInit() {
    console.log('inside on init');
    // await this.studentService.getStudents().subscribe(resp=>{
    //   console.log('response final '+resp);
    // });
    this.studentService.getStudents().subscribe(resp=>{
      console.log('response f'+JSON.stringify(resp));
      resp.map(data=>{
        this.arr.push(data.name);
        console.log('array '+this.arr);
        return this.arr;
      })
      
    });
  }

}
