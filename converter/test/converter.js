const expect = require("chai").expect;
const converter = require("../app/converter");


describe("Color Code Converter", function(){
  describe("RGB to Hex conversion", function(){
    it("converts the basic colors", function(){
			var regHex = converter.rgbToHex(255,0,0);
			expect(regHex).to.equal("ff0000")
    });
  });
});