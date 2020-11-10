import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {SearchCourseCodesComponent} from './search-course-codes/search-course-codes.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'searchcoursecodes', component:SearchCourseCodesComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
