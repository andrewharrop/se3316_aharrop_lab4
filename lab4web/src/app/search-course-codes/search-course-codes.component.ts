import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {HttpClient } from '@angular/common/http'
@Component({
  selector: '[app-search-course-codes]',
  templateUrl: './search-course-codes.component.html',
  styleUrls: ['./search-course-codes.component.css']
})
export class SearchCourseCodesComponent implements OnInit {
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
    this.http.post<any>('http://localhost:3000/searchcoursecodes', {value:this.stcText}).subscribe(data => {this.setServer(data)});
  }  

}
