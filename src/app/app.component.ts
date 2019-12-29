import { Component, OnInit } from "@angular/core";
import { from, fromEvent, interval } from "rxjs";
import { multiply, divide } from "./operators/multiply";
import { buffer, count, bufferTime, map, take } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "own-rxjs-operator";
  obs$ = from([1, 2, 3, 4, 5]);

  ngOnInit() {
    console.log("asdsadsa")
    this.obs$.pipe(multiply(5), divide(2)).subscribe(console.log);

    // fromEvent(document, "click")
    //   .pipe(
    //     bufferTime(1000),
    //     map((x: Event[]) => x.map(y => y.clientX)),
    //   )
    //   .subscribe(console.log);
  }
}
