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

  describe("Hex to RGB conversion", function(){
    it("converts the basic colours", function(){
      const red = converter.hexToRgb("ff0000");
      const green = converter.hexToRgb("00ff00");
      const blue = converter.hexToRgb("0000fa");
      expect(red).to.deep.equal([255, 0, 0]);
      expect(green).to.deep.equal([0, 255, 0]);
      expect(blue).to.deep.equal([0, 0, 250]);
    });
  });
});