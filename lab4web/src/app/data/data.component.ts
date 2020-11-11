import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {
  serverVal;
  constructor(private http: HttpClient) { }
  
  
  getServer(){
    return this.http.get<any>('http://localhost:3000/data')
  }
  ngOnInit() {
    
    this.getServer().subscribe(data => {
        this.serverVal =  (data["data"]);
    })
    
  }
  
}
