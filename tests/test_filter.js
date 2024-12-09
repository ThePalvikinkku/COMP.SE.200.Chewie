import { expect } from 'chai';
import filter from '../src/filter.js';

describe('filter()', () => {
    it('filter by activity', () => {
      const users = [
        { 'user': 'mangi', 'active': true },
        { 'user': 'niko', 'active': false }
      ];
      const result = filter(users, ({ active }) => active);
      expect(result).to.deep.equal([{ 'user': 'mangi', 'active': true }]);
    });
  
    it('divide and filter by even numbers', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const result = filter(numbers, (num) => num % 2 === 0);
      expect(result).to.deep.equal([2, 4, 6]);
    });
  
    it('return empty array due even dividing', () => {
      const numbers = [1, 3, 5];
      const result = filter(numbers, (num) => num % 2 === 0);
      expect(result).to.deep.equal([]);
    });
  
    it('empty array', () => {
      const result = filter([], (value) => true);
      expect(result).to.deep.equal([]);
    });
  
    it('handling null or undefined', () => {
      const resultNull = filter(null, (value) => true);
      const resultUndefined = filter(undefined, (value) => true);
      expect(resultNull).to.deep.equal([]);
      expect(resultUndefined).to.deep.equal([]);
    });
  
    it('filter by included letter', () => {
      const words = ['niko', 'nakki', 'mangi', 'koodaus'];
      const result = filter(words, (word) => word.includes('n'));
      expect(result).to.deep.equal(['niko', 'nakki', 'mangi']);
    });
  
    it('index filtering', () => {
      const numbers = [10, 20, 30, 40, 50];
      const result = filter(numbers, (num, index) => index % 2 === 0);
      expect(result).to.deep.equal([10, 30, 50]);
    });
  
    it('nested properties', () => {
      const data = [
        { id: 1, nested: { active: true } },
        { id: 2, nested: { active: false } },
        { id: 3, nested: { active: true } }
      ];
      const result = filter(data, (item) => item.nested.active);
      expect(result).to.deep.equal([
        { id: 1, nested: { active: true } },
        { id: 3, nested: { active: true } }
      ]);
    });
  
    it('mixed data  array', () => {
      const mixedArray = [1, 'text', false, 2, '', null, 'hello'];
      const result = filter(mixedArray, (value) => typeof value === 'string' && value.length > 0);
      expect(result).to.deep.equal(['text', 'hello']);
    });
  
    it('large array test', () => {
      const largeArray = Array.from({ length: 10000 }, (_, i) => i);
      const result = filter(largeArray, (num) => num % 1000 === 0);
      expect(result).to.deep.equal([0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]);
    });

});