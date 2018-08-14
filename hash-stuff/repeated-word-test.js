'use strict';

import repeatedWord from '../repeated-word';

const testOne = 'taco cat taco cat';
const testTwo = 'taco cat taco cat cat taco';
const testThree = 'This string has no repeated words';

describe('repeatedWord', () => {
  test('Should return first match if only one match', () => {
    expect(sameWord(testOne)).toEqual('taco');
  });
  test('Should return first match when multiple matches exist', () => {
    expect(sameWord(testTwo)).toEqual('taco');
  });
  test('Should return null when no matches exist', () => {
    expect(sameWordWord(testThree)).toBeNull();
  });
});