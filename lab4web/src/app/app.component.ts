import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  value: string;
  ngOnInit() {
    this.value = "";
  }

  setValue(val: string) {
    alert(this.value);

    this.value = val;
  }

  componentSwitches: string[] = ["home", "search course codes"];
}
