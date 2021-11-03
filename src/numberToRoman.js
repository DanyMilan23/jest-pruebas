const romansValue = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function numberToRoman(number) {
  if (isNaN(number)) {
    return "No es un numero";
  }
  if (number < 0) {
    return "No se admite negativos";
  }
  if(number >3999) {
    return "A partir de 4000 es otra nomenclatura";
  }
  let romainResult = "";
  for (const roman in romansValue) {
    while (number >= romansValue[roman]) {
      romainResult += roman;
      number -= romansValue[roman];
    }
  }
  return romainResult;
}
module.exports = {
  numberToRoman,
};
