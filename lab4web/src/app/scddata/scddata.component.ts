import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../server';

@Component({
  selector: 'app-scddata',
  templateUrl: './scddata.component.html',
  styleUrls: ['./scddata.component.css']
})
export class ScddataComponent implements OnInit {
  serverVal;
  constructor(private http: HttpClient) { }

  getServer() {
    return this.http.get<any>(url.url + '/scddata')
  }
  ngOnInit() {

    this.getServer().subscribe(data => {
      this.serverVal = (data["data"]);
    })

  }

}
