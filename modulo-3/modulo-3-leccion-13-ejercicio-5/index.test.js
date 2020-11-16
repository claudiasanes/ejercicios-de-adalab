const fizzbuzz = require('./index');

describe('Fizbuzz', () => {
  test('returns fizz when the input is multiple of 3', () => {
    const number = 3; //arrange
    const result = fizzbuzz(number); //act
    expect(result).toBe('fizz'); //assert})
  });

  test('returns buzz when the input is multiple of 5', () => {
    const number = 5; //arrange
    const result = fizzbuzz(number); //act
    expect(result).toBe('buzz'); //assert})
  });

  test('returns fizzbuzz when the input is multiple of 3 and 5', () => {
    const number = 15; //arrange
    const result = fizzbuzz(number); //act
    expect(result).toBe('fizzbuzz'); //assert})
  });

  test('returns the same number when in other cases', () => {
    const number = 1; //arrange
    const result = fizzbuzz(number); //act
    expect(result).toBe(1); //assert
    expect(result).toStrictEqual(1); //assert
  });
});
