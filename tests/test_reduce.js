import { expect } from 'chai';
import reduce from '../src/reduce.js';

describe('reduce()', () => {
  it('reduce an array to a single value', () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n, 0);
    expect(result).to.equal(6);
  });

  it('reduced array without an initial accumulator', () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n);
    expect(result).to.equal(6);
  });

  it('handling empty array', () => {
    const result = reduce([], (sum, n) => sum + n, 0);
    expect(result).to.equal(0);
  });

  it('handling empty array without an initial accumulator', () => {
    const result = reduce([], (sum, n) => sum + n);
    expect(result).to.equal(undefined); // No accumulator to start with
  });

  it('reducing an object to a single value', () => {
    const result = reduce(
      { a: 1, b: 2, c: 3 },
      (sum, value) => sum + value,
      0
    );
    expect(result).to.equal(6);
  });

  it('group object keys by values', () => {
    const result = reduce(
      { a: 1, b: 2, c: 1 },
      (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
      },
      {}
    );
    expect(result).to.deep.equal({ 1: ['a', 'c'], 2: ['b'] });
  });

  it('null and undefined test', () => {
    const resultNull = reduce(null, (sum, n) => sum + n, 0);
    const resultUndefined = reduce(undefined, (sum, n) => sum + n, 0);
    expect(resultNull).to.equal(0);
    expect(resultUndefined).to.equal(0);
  });

  it('single-element array', () => {
    const result = reduce([42], (sum, n) => sum + n, 0);
    expect(result).to.equal(42);
  });

  it('concatenate strings in an array', () => {
    const result = reduce(['a', 'b', 'c'], (acc, char) => acc + char, '');
    expect(result).to.equal('abc');
  });

  it('nested objects case', () => {
    const nested = { a: { x: 1 }, b: { x: 2 }, c: { x: 3 } };
    const result = reduce(
      nested,
      (sum, value) => sum + value.x,
      0
    );
    expect(result).to.equal(6);
  });

  it('no accumulator and objects case', () => {
    const result = reduce(
      { a: 1, b: 2 },
      (acc, value) => acc + value
    );
    expect(result).to.equal(3);
  });

  it('non-numeric values', () => {
    const result = reduce(['a', 'b', 'c'], (acc, char) => acc + char);
    expect(result).to.equal('abc');
  });

  it('mixed arrays with initial accumulator', () => {
    const result = reduce([1, 'a', 2, 'b'], (acc, val) => acc + String(val), '');
    expect(result).to.equal('1a2b');
  });
});