import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-delete-schedule',
  templateUrl: './delete-schedule.component.html',
  styleUrls: ['./delete-schedule.component.css']
})
export class DeleteScheduleComponent implements OnInit {
  ngOnInit() {}
  constructor(private http: HttpClient) { } 
  stcText="";

  input:string;
  serverVal:string = "";
  onUpdateValue(event){
    this.stcText = (<HTMLInputElement>event.target).value
  }
  setServer(value){
    this.serverVal = value.data;
  }
  
  submit(){
    this.http.post<any>('http://localhost:3000/deleteschedule', {value:this.stcText}).subscribe(data => {this.setServer(data)});
  }  
}
