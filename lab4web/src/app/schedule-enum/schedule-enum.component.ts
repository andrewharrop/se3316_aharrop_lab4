import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../server';

@Component({
  selector: 'app-schedule-enum',
  templateUrl: './schedule-enum.component.html',
  styleUrls: ['./schedule-enum.component.css']
})
export class ScheduleEnumComponent implements OnInit {
  serverVal;
  constructor(private http: HttpClient) { }

  getServer() {
    return this.http.get<any>(url.url + '/schedules')
  }
  ngOnInit() {

    this.getServer().subscribe(data => {
      this.serverVal = (data["data"]);
    })

  }


}
