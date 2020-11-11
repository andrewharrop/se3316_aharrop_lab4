import { Component, OnInit } from '@angular/core';
import { Form} from '@angular/forms'
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';


@Component({
  selector: '[app-weekly-things]',
  templateUrl: './weekly-things.component.html',
  styleUrls: ['./weekly-things.component.css']
})
export class WeeklyThingsComponent implements OnInit {

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
    this.http.post<any>('http://localhost:3000/whatdoihavethisweek', {value:this.stcText}).subscribe(data => {this.setServer(data)});
  }  

}
