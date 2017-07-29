function shiftCode(code, amount, base) {
  let shift = (code + amount - base) % 26
  if (shift < 0) {
    shift += 26
  }
  return base + shift
}

function shiftString(string, amount) {
  let result = '';

  for (character of string) {
    const code = character.charCodeAt(0);
    if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) {
      result += String.fromCharCode(shiftCode(code, amount, 'A'.charCodeAt(0)))
    } else if (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) {
      result += String.fromCharCode(shiftCode(code, amount, 'a'.charCodeAt(0)))
    } else {
      result += character
    }
  }

  return result;
}

var encrypt = function(string, shiftAmount) {
  return shiftString(string, shiftAmount);
}

var decrypt = function(string, shiftAmount) {
  return shiftString(string, -shiftAmount)
}

// DO NOT TOUCH THIS PART OF THE CODE!
if (process.argv[2] === "Hgx Angwkxw Hkvatkw Khtw, Vhgvhkwx Ahmxe & Lahiibgz Ftee, #sxkhmph-yhkmrmakxx") {
  console.log(decrypt(process.argv[2], 19))
}
module.exports = {
  encrypt: encrypt,
  decrypt: decrypt
}
