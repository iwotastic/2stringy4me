var assert = require("assert");
var ts4m = require("./../index.js");
describe("tooStringyForMe", function() {
  it("should be recognized as a function", function() {
    assert.equal("function", typeof ts4m);
  });
  it("should return an object", function() {
    assert.equal("object", typeof ts4m("Hello"));
  });
  describe("#asString", function() {
    it("should be the same as the passed string", function() {
      assert.equal("Hello", ts4m("Hello").asString);
    });
  });
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
  describe("#wrap()", function() {
    it("should wrap string correctly", function() {
      assert.equal("<h1>Hello, World!</h1>", ts4m("Hello, World!").wrap("<h1>", "</h1>").asString);
    });
  });
});
