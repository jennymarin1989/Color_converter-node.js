const expect = require("chai").expect;
const request = require("request");

describe("Color code converter API", function(){
   
  var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";
   
  describe("RGB to Hex conversion", function(){
    it("returns status 200", function(){
      request(url, function(error, response, body){
				expect(response.statusCode).to.equal(200);
				done();
      });
    });
    it("returns the color in hex", function(){
			request(url, function(error, reponse, body){
				expect(body).to.equal("ffffff");
				done();
			});
		});
	});

	describe("HEX to RGB conversion", function(){
		var url =  "http://localhost:3000/hexToRgb?hex=00ff00"
		it("returns status 200", function(){
			request(url, function(err, response, body){
				expect(body).to.equal("[0, 255, 0]");
			});
		});
	})
	
})