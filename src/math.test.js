import { test, expect } from "vitest";
import { add } from "./math.js";

test("adds two numbers", () => {
  expect(add(10, 20)).toBe(30);
});
