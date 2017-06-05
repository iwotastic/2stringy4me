# 2stringy4me [![Build Status](https://travis-ci.org/iwotastic/2stringy4me.svg?branch=master)](https://travis-ci.org/iwotastic/2stringy4me)
Extends JavaScript strings 4 more fun!

## What is it?
2stringy4me extends strings without touching `String.prototype`.

## How do I get it?

```shell
npm install --save 2stringy4me
```

## How do I use it?
Simply set a variable equal to `require("2stringy4me")`. This variable will become a function that can be used to extend strings like so...

```javascript
var ts4m = require("2stringy4me");
var yourString = ts4m("Hello, world");
```

## Note
I made this library for two reasons, both to help people who need this and to learn how to use a test suite + CI.
