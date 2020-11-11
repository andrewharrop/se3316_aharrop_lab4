import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-add-to-schedule',
  templateUrl: './add-to-schedule.component.html',
  styleUrls: ['./add-to-schedule.component.css']
})
export class AddToScheduleComponent implements OnInit {
  ngOnInit() {}
  constructor(private http: HttpClient) { } 
  stcText1="";
  stcText2="";
  stcText3="";

  input:string;
  serverVal:string = "";
  onUpdateValue1(event){
    this.stcText1 = (<HTMLInputElement>event.target).value
  }
  onUpdateValue2(event){
    this.stcText2 = (<HTMLInputElement>event.target).value
  }
  onUpdateValue3(event){
    this.stcText3 = (<HTMLInputElement>event.target).value
  }
  setServer(value){
    this.serverVal = value.data;
  }
  
  submit(){
    this.http.post<any>('http://localhost:3000/addtoschedule', {value1:this.stcText1, value2:this.stcText2, value3:this.stcText3}).subscribe(data => {this.setServer(data)});
  }  

}
