import {romanNumerals} from "./roman-numerals.js";
  
  describe("romanNumerals", () => {
    test("returns roman-numeral from number", () => {
      expect(romanNumerals(1)).toBe("I");
    });
    test("does nothing if roman-numeral not supplied", () => {
      expect(romanNumerals()).toBe();
    });
  });