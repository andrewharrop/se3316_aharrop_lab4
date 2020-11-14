import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { url } from '../server';

@Component({
  selector: 'app-delete-schedule',
  templateUrl: './delete-schedule.component.html',
  styleUrls: ['./delete-schedule.component.css']
})
export class DeleteScheduleComponent implements OnInit {
  stcText = "";
  input: string;
  serverVal: string = "";
  
  ngOnInit() { }
  constructor(private http: HttpClient) { }
  onUpdateValue(event) {
    this.stcText = (<HTMLInputElement>event.target).value
  }
  setServer(value) {
    this.serverVal = value.data;
  }
  submit() {
    this.http.post<any>(url.url + '/deleteschedule', { value: this.stcText }).subscribe(data => { this.setServer(data) });
  }
}
