import { Component, VERSION } from "@angular/core";
import { isCircle, isRectangle, isSquare, Shape } from "./shapes.type";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  shapes: Shape[] = [
    {
      kind: "square",
      size: 5
    },
    {
      kind: "circle",
      radius: 10
    },
    {
      kind: "rectangle",
      height: 7,
      width: 9
    },
    {
      kind: "rectangle",
      height: 8.5,
      width: 11
    },
    {
      kind: "circle",
      radius: 8
    }
  ];

  // set the imported type guard functions as class properties
  // so they can be passed by the template to the guardType pipe
  isCircle = isCircle;
  isRectangle = isRectangle;
  isSquare = isSquare;
}
