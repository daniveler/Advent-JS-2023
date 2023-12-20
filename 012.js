function checkIsValidCopy(original, copy) {
  return true
}

console.log(checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')) // true
console.log(checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#')) // false (por la p inicial)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (hay un # donde no debería)