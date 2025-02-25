const math = require('../math');

test('soma 2 + 3 é igual a 5', () => {
    expect(math.add(2, 3)).toBe(5);
    })

test('subtrai 3 - 2 igual a 1', () => {
    expect(math.subtract(3, 2)).toBe(1);
    })

test('dividi 10 / 2 igual a 5', () => {
    expect(math.divide(10, 2)).toBe(5);
})

test('multiplicar 5 * 2 igual a 10', () => {
    expect(math.multiply(5, 2)).toBe(10);
})