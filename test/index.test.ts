import { hello } from "../src";

describe("hello check", () => {
  it("ed to equal array [E, D]", () => {
    expect(hello("ed")).toStrictEqual(["E", "D"]);
  });
});
