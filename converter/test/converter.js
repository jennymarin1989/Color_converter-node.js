const expect = require("chai").expect;
const converter = require("../app/converter");


describe("Color Code Converter", function(){
  describe("RGB to Hex conversion", function(){
    it("converts the basic colors", function(){
      const redHex = converter.rgbToHex(255, 0, 0);
      const greenHex = converter.rgbToHex(0, 255, 0);
      const blueHex = converter.rgbToHex(0, 0, 250);
      expect(redHex).to.equal("ff0000");
      expect(greenHex).to.equal("00ff00");
      expect(blueHex).to.equal("0000fa");
    });
  });
});