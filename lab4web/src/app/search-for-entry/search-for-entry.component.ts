import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-search-for-entry',
  templateUrl: './search-for-entry.component.html',
  styleUrls: ['./search-for-entry.component.css']
})
export class SearchForEntryComponent implements OnInit {
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
    this.http.post<any>('http://localhost:3000/searchforentry', {value1:this.stcText1, value2:this.stcText2, value3:this.stcText3}).subscribe(data => {this.setServer(data)});
  }  

}
