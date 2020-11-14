import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../server';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {
  ngOnInit() { }
  constructor(private http: HttpClient) { }
  stcText = "";

  input: string;
  serverVal: string = "";
  onUpdateValue(event) {
    this.stcText = (<HTMLInputElement>event.target).value
  }
  setServer(value) {
    this.serverVal = value.data;
  }

  submit() {
    this.http.post<any>(url.url + "/createschedule", { value: this.stcText }).subscribe(data => { this.setServer(data) });
  }

}
