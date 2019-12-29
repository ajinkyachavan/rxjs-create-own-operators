import { Component, OnInit } from "@angular/core";
import { from, fromEvent, interval, of } from "rxjs";
import { multiply, divide } from "./operators/multiply";
import { buffer, count, bufferTime, map, take } from "rxjs/operators";
import { max } from './operators/max';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "own-rxjs-operator";
  obs$ = from([1, 2, 3, 4, 5]);

  ngOnInit() {

    /** multiply & divide */
    this.obs$.pipe(multiply(5), divide(2)).subscribe(console.log);

    /** max operator from operators */
    of(1, 2, 3).pipe(max()).subscribe(console.log);

  }
}
