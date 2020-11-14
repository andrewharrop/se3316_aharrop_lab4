import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { DataComponent } from "./data/data.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { ScddataComponent } from "./scddata/scddata.component";
import { WeeklyThingsComponent } from "./weekly-things/weekly-things.component";
import { ScheduleEnumComponent } from "./schedule-enum/schedule-enum.component";
import { AddToScheduleComponent } from "./add-to-schedule/add-to-schedule.component";
import { DeleteScheduleComponent } from "./delete-schedule/delete-schedule.component";
import { CreateScheduleComponent } from "./create-schedule/create-schedule.component";
import { SearchForEntryComponent } from "./search-for-entry/search-for-entry.component";
import { DeleteSchedulesComponent } from "./delete-schedules/delete-schedules.component";
import { SearchCourseCodesComponent } from "./search-course-codes/search-course-codes.component";
import { SearchForScheduleComponent } from "./search-for-schedule/search-for-schedule.component";

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    HomeComponent,
    NavbarComponent,
    ScddataComponent,
    WeeklyThingsComponent,
    ScheduleEnumComponent,
    AddToScheduleComponent,
    SearchForEntryComponent,
    CreateScheduleComponent,
    DeleteScheduleComponent,
    DeleteSchedulesComponent,
    SearchForScheduleComponent,
    SearchCourseCodesComponent,
  ],
  imports: [FormsModule, BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
