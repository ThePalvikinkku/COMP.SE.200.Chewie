import { expect } from 'chai';
import slice from '../src/slice.js';

describe('slice()', () => {
  it('should return the entire array when start and end are not provided', () => {
    const array = [1, 2, 3, 4];
    const result = slice(array);
    expect(result).to.deep.equal([1, 2, 3, 4]);
  });

  it('should slice from the specified start index to the end of the array', () => {
    const array = [1, 2, 3, 4];
    const result = slice(array, 2);
    expect(result).to.deep.equal([3, 4]);
  });

  it('should slice from the start index to the specified end index', () => {
    const array = [1, 2, 3, 4];
    const result = slice(array, 1, 3);
    expect(result).to.deep.equal([2, 3]);
  });

  it('should handle negative start index', () => {
    const array = [1, 2, 3, 4];
    const result = slice(array, -2);
    expect(result).to.deep.equal([3, 4]);
  });

  it('should handle negative end index', () => {
    const array = [1, 2, 3, 4];
    const result = slice(array, 1, -1);
    expect(result).to.deep.equal([2, 3]);
  });

  it('should return an empty array when start is greater than or equal to end', () => {
    const array = [1, 2, 3, 4];
    const result = slice(array, 3, 1);
    expect(result).to.deep.equal([]);
  });

  it('should return an empty array when start exceeds array length', () => {
    const array = [1, 2, 3, 4];
    const result = slice(array, 5);
    expect(result).to.deep.equal([]);
  });

  it('should return an empty array when end is 0 or less', () => {
    const array = [1, 2, 3, 4];
    const result = slice(array, 0, 0);
    expect(result).to.deep.equal([]);
  });

  it('should handle null or undefined input gracefully', () => {
    expect(slice(null)).to.deep.equal([]);
    expect(slice(undefined)).to.deep.equal([]);
  });

  it('should work with arrays of non-numeric values', () => {
    const array = ['a', 'b', 'c', 'd'];
    const result = slice(array, 1, 3);
    expect(result).to.deep.equal(['b', 'c']);
  });

  it('should return a shallow copy of the array when no arguments are provided', () => {
    const array = [1, 2, 3, 4];
    const result = slice(array);
    expect(result).to.not.equal(array); // Ensure it's a different reference
    expect(result).to.deep.equal(array);
  });

  it('should handle arrays with sparse values', () => {
    const array = [1, , 3, 4]; // Sparse array
    const result = slice(array, 1, 3);
    expect(result).to.deep.equal([, 3]); // Preserve sparseness
  });

  it('should work with large arrays efficiently', () => {
    const array = Array.from({ length: 1000 }, (_, i) => i);
    const result = slice(array, 990, 995);
    expect(result).to.deep.equal([990, 991, 992, 993, 994]);
  });
});