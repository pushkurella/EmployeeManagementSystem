import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { map,filter} from 'rxjs/operators';
import { Student } from './models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
json;
  constructor(private http: HttpClient) { }
  getStudents(): Observable<Student[]>{
    // let source$ = of('hello world');
 
    // const newsource =source$.pipe(
    //   map(val=> `hello ${val}`)
    // );
    // newsource.subscribe(x=>{
    //   console.log('x val '+x);
    // })

    //const obj=this.http.get<any>('http://localhost:3000/');
    // const piped=obj.pipe(
    //   map(val=>{
    //    JSON.stringify(val);
    //   })
    // );
    let arr=[];
    return this.http.get<Student[]>('http://localhost:3000/');

  }
}
