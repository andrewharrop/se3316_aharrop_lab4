import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
 @Component({
  selector: 'app-delete-schedules',
  templateUrl: './delete-schedules.component.html',
  styleUrls: ['./delete-schedules.component.css']
})
export class DeleteSchedulesComponent implements OnInit {
  ngOnInit() {}
  constructor(private http: HttpClient) { } 

  serverVal:string = "";
  
  setServer(value){
    this.serverVal = value.data;
  }
  
  submit(){
    this.http.post<any>('http://localhost:3000/deleteschedules', {}).subscribe(data => {this.setServer(data)});
  }  

}
