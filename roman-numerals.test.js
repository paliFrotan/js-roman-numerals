import {romanNumerals} from "./roman-numerals.js";
  
  describe("romanNumerals", () => {
    test("returns roman-numeral from number", () => {
      expect(romanNumerals(1)).toBe("I");
      expect(romanNumerals(2)).toBe("II");
    });
    test("returns RN from edge cases", () => {
      expect(romanNumerals(4)).toBe("IV");
      expect(romanNumerals(5)).toBe("V");
      expect(romanNumerals(6)).toBe("VI");
    });
    test("returns RN from edge cases", () => {
      expect(romanNumerals(3999)).toBe("MMMCMXCIX");
      expect(romanNumerals(4000)).toBe("");
    });
    test("returns RN from some further numbers", () => {
      expect(romanNumerals(900)).toBe("CM");
      expect(romanNumerals(17)).toBe("XVII");
      expect(romanNumerals(250)).toBe("CCL");
    });

    test("returns empty-string if roman-numeral not integer", () => {
      expect(romanNumerals(0)).toBe("");
      expect(romanNumerals(34.2)).toBe("");
      expect(romanNumerals("3")).toBe("");
    });
  });