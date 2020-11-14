import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../server';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {
  serverVal;
  constructor(private http: HttpClient) { }


  getServer() {
    return this.http.get<any>(url.url + '/data')
  }
  ngOnInit() {

    this.getServer().subscribe(data => {
      this.serverVal = (data["data"]);
    })

  }

}
