var assert = require("assert");
var ts4m = require("./../index.js");
describe("tooStringyForMe", function() {
  describe("#forEach()", function() {
    it("should be able to create an array", function() {
      var strArr = []
      ts4m("Hello").forEach(function(c, i){
        strArr[i] = c
      })
      assert.equal("Hello", strArr.join(""));
    });
  });
  describe("#runFunction()", function() {
    it("should be given the exact string", function() {
      var str = ""
      ts4m("Hello").runFunction(function(s){
        str = s
      })
      assert.equal("Hello", str);
    });
  });
});