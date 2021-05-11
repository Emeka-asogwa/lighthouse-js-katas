
var urlEncode = function(text) {
  var TextTrim = text.trim();
  var encoded = '';

  for (var i = 0; i < TextTrim.length; i++) {
    if (TextTrim[i] === ' ') {
      encoded += '%20';
    } else {
      encoded += TextTrim[i];
    }
  }

  return encoded;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));