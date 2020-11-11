import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-schedule-enum',
  templateUrl: './schedule-enum.component.html',
  styleUrls: ['./schedule-enum.component.css']
})
export class ScheduleEnumComponent implements OnInit {
  serverVal;
  constructor(private http: HttpClient) { }
  
  
  getServer(){
    return this.http.get<any>('http://localhost:3000/schedules')
  }
  ngOnInit() {
    
    this.getServer().subscribe(data => {
        this.serverVal =  (data["data"]);
    })
    
  }
  

}
