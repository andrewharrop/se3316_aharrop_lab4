import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchCourseCodesComponent } from './search-course-codes/search-course-codes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataComponent } from './data/data.component';
import { ScddataComponent } from './scddata/scddata.component';
import { WeeklyThingsComponent } from './weekly-things/weekly-things.component';
import { ScheduleEnumComponent } from './schedule-enum/schedule-enum.component';
import { SearchForEntryComponent } from './search-for-entry/search-for-entry.component';
import { SearchForScheduleComponent } from './search-for-schedule/search-for-schedule.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { AddToScheduleComponent } from './add-to-schedule/add-to-schedule.component';
import { DeleteScheduleComponent } from './delete-schedule/delete-schedule.component';
import { DeleteSchedulesComponent } from './delete-schedules/delete-schedules.component';

@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    SearchCourseCodesComponent,
    NavbarComponent,
    DataComponent,
    ScddataComponent,
    WeeklyThingsComponent,
    ScheduleEnumComponent,
    SearchForEntryComponent,
    SearchForScheduleComponent,
    CreateScheduleComponent,
    AddToScheduleComponent,
    DeleteScheduleComponent,
    DeleteSchedulesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
