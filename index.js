// This is the 2S4M (2stringy4me) function that is provided by the package.
var tooStringyForMe = function(string) {
  // The object internally used by 2S4M. You can use `asString` to access the
  // raw string.
  var internal = {asString: string};

  internal.forEach = function(fun) {
    // `fun` should be a function in the form:
    // (currentCharacter, currentIndex) => Anything
    for (var i = 0; i < this.asString.length; i++) {
      fun(this.asString[i], i)
    }
    return this;
  }.bind(internal)

  internal.runFunction = function(fun) {
    // `fun` should be a function in the form:
    // (orignialString) => newString
    this.asString = fun(this.asString)

    return this;
  }.bind(internal)

  return internal;
}

module.exports = tooStringyForMe
