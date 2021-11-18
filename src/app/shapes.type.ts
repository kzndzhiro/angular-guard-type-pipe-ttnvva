import { TypeGuard } from "./guard-type.pipe";

export interface Square {
  kind: "square";
  size: number;
}

export interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

export interface Circle {
  kind: "circle";
  radius: number;
}

export type Shape = Square | Rectangle | Circle;

export const isSquare: TypeGuard<Shape, Square> = (
  shape: Shape
): shape is Square => shape.kind === "square";

export const isRectangle: TypeGuard<Shape, Rectangle> = (
  shape: Shape
): shape is Rectangle => shape.kind === "rectangle";

export const isCircle: TypeGuard<Shape, Circle> = (
  shape: Shape
): shape is Circle => shape.kind === "circle";
