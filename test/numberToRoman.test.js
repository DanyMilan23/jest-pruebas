const { numberToRoman } = require('../src/numberToRoman')

test('Controlar que sea numero', () => {
  const result = numberToRoman("hola");
  expect(result).toBe("No es un numero");
})

test('Controlar negativos', () => {
  const result = numberToRoman(-1);
  expect(result).toBe("No se admite negativos");
})

test('Controlar arriba de 4000', () => {
  const result = numberToRoman(4000);
  expect(result).toBe("A partir de 4000 es otra nomenclatura");
})

test('Controlar 1 es igual a I', () => {
  const result = numberToRoman(1);
  expect(result).toBe("I");
})

test('Controlar 4 es igual a IV', () => {
  const result = numberToRoman(4);
  expect(result).toBe("IV");
})

test('Controlar 9 es igual a IX', () => {
  const result = numberToRoman(9);
  expect(result).toBe("IX");
})

test('Controlar 11 es igual a XI', () => {
  const result = numberToRoman(11);
  expect(result).toBe("XI");
})