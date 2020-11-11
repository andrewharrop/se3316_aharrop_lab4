import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-scddata',
  templateUrl: './scddata.component.html',
  styleUrls: ['./scddata.component.css']
})
export class ScddataComponent implements OnInit {
  serverVal;
  constructor(private http: HttpClient) { }
  
  
  getServer(){
    return this.http.get<any>('http://localhost:3000/scddata')
  }
  ngOnInit() {
    
    this.getServer().subscribe(data => {
        this.serverVal =  (data["data"]);
    })
    
  }

}
