import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../server';


@Component({
  selector: '[app-weekly-things]',
  templateUrl: './weekly-things.component.html',
  styleUrls: ['./weekly-things.component.css']
})
export class WeeklyThingsComponent implements OnInit {

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
    this.http.post<any>(url.url + '/whatdoihavethisweek', { value: this.stcText }).subscribe(data => { this.setServer(data) });
  }

}
