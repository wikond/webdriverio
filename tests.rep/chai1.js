var assert = require('chai').assert; 
var expect = require('chai').expect; 
var should = require('chai').should(); 

var actual = 1;
var expected = 1;


assert.equal(actual, expected);
expect(actual).to.equal(expected);
actual.should.equal(expected);
