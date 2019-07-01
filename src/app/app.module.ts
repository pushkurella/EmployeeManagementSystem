import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { StudentComponent } from './student/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HelloworldComponent } from './helloworld/helloworld.component';

const appRoutes: Routes = [
  {path: 'student', component: StudentComponent},
  {path: 'list', component: ListEmployeesComponent,
  children:[
    {path : '',redirectTo:'create',pathMatch:'full'},
    {path: 'employee',component: CreateEmployeeComponent},
    { path : 'create' , component : CreateEmployeeComponent}
  ]},
  {path : 'error',component : PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    StudentComponent,
    PageNotFoundComponent,
    HelloworldComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
