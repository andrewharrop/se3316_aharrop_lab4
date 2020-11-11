import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { DataComponent} from './data/data.component';
import { ScddataComponent } from './scddata/scddata.component';
import { WeeklyThingsComponent } from './weekly-things/weekly-things.component';
import { ScheduleEnumComponent } from './schedule-enum/schedule-enum.component';
import {SearchCourseCodesComponent} from './search-course-codes/search-course-codes.component';
import { SearchForEntryComponent } from './search-for-entry/search-for-entry.component';
import { SearchForScheduleComponent } from './search-for-schedule/search-for-schedule.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { AddToScheduleComponent } from './add-to-schedule/add-to-schedule.component';
import { DeleteScheduleComponent } from './delete-schedule/delete-schedule.component';
import { DeleteSchedulesComponent } from './delete-schedules/delete-schedules.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'data', component:DataComponent},
  {path: 'scddata', component:ScddataComponent},
  {path: 'whatdoihavethisweek', component:WeeklyThingsComponent},
  {path: 'schedules', component:ScheduleEnumComponent},
  {path: 'searchcoursecodes', component:SearchCourseCodesComponent},
  {path: 'searchforentry', component:SearchForEntryComponent},
  {path: 'searchforschedule', component:SearchForScheduleComponent},
  {path: 'createschedule', component:CreateScheduleComponent},
  {path: 'addtoschedule', component:AddToScheduleComponent},
  {path: 'deleteschedule', component:DeleteScheduleComponent},
  {path: 'deleteschedules', component:DeleteSchedulesComponent},

  
  
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
