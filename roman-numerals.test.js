import {romanNumerals} from "./roman-numerals.js";
  
  describe("romanNumerals", () => {
    test("returns hello+paramater", () => {
      expect(romanNumerals("world")).toBe("Helloworld");
    });
  });