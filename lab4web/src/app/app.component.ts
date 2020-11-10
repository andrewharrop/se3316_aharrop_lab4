import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  value:string;
  ngOnInit(){
    this.value="";
  }

  setValue(val:string){
    alert(this.value)

    this.value = val;
  }
  

  componentSwitches:string[]=[
    'home',
    
    'search course codes'
  ];

}
