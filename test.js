var expect = require('chai').expect
var assert = require('assert')
var encrypt = require('./solution').encrypt
var decrypt = require('./solution').decrypt

describe('encrypt(string, shift)', function () {
	it('encrypt("a", 1) should return "b"', function () {
		var input = "a"
		var expected = "b"

		expect(encrypt(input, 1)).to.be.eql(expected)
  })

	// change xit() to it() to enable the test
	it('encrypt("a", 3) should return "d"', function () {
		var input = "a"
		var expected = "d"

		expect(encrypt(input, 3)).to.be.eql(expected)
  })

	it('encrypt("hello", 1) should return "ifmmp"', function () {
		var input = "hello"
		var expected = "ifmmp"

		expect(encrypt(input, 1)).to.be.eql(expected)
  })

	it('encrypt("hello world", 1) should return "ifmmp xpsme"', function () {
		var input = "hello world"
		var expected = "ifmmp xpsme"

    expect(encrypt(input, 1)).to.be.eql(expected)
  })

	it('encrypt("hello world", 2) should return "jgnnq yqtnf"', function () {
		var input = "hello world"
		var expected = "jgnnq yqtnf"

    expect(encrypt(input, 2)).to.be.eql(expected)
  })

	it('encrypt("i\'m gonna get smashed today!!!!!", 5) should return "n\'r ltssf ljy xrfxmji ytifd!!!!! #dtqt"', function () {
		var input = "i'm gonna get smashed today!!!!! #yolo"
		var expected = "n'r ltssf ljy xrfxmji ytifd!!!!! #dtqt"

    expect(encrypt(input, 5)).to.be.eql(expected)
  })
})

describe('decrypt(string, shift)', function () {
	it('encrypt("hello", 1) should return "ifmmp"', function () {
		var input = "ifmmp"
		var expected = "hello"

		expect(decrypt(input, 1)).to.be.eql(expected)
  })

	it('encrypt("hello world", 1) should return "ifmmp xpsme"', function () {
		var input = "ifmmp xpsme"
		var expected = "hello world"

    expect(decrypt(input, 1)).to.be.eql(expected)
  })

	it('encrypt("hello world", 2) should return "jgnnq yqtnf"', function () {
		var input = "jgnnq yqtnf"
		var expected = "hello world"

    expect(decrypt(input, 2)).to.be.eql(expected)
  })

	it('encrypt("i\'m gonna get smashed today!!!!!", 5) should return "n\'r ltssf ljy xrfxmji ytifd!!!!! #dtqt"', function () {
		var input = "n'r ltssf ljy xrfxmji ytifd!!!!! #dtqt"
		var expected = "i'm gonna get smashed today!!!!! #yolo"

    expect(decrypt(input, 5)).to.be.eql(expected)
  })
})
