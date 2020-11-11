import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-search-for-schedule',
  templateUrl: './search-for-schedule.component.html',
  styleUrls: ['./search-for-schedule.component.css']
})
export class SearchForScheduleComponent implements OnInit {
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
    this.http.post<any>('http://localhost:3000/searchforschedule', {value:this.stcText}).subscribe(data => {this.setServer(data)});
  }  

}
