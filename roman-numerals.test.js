import {romanNumerals} from "./roman-numerals.js";
  
  describe("romanNumerals", () => {
    test("returns roman-numeral from number", () => {
      expect(romanNumerals(1)).toBe("I");
      expect(romanNumerals(2)).toBe("II");
    });
    test("returns empty-string if roman-numeral not integer", () => {
      expect(romanNumerals(0)).toBe("");
      expect(romanNumerals(34.2)).toBe("");
      expect(romanNumerals("3")).toBe("");
    });
  });