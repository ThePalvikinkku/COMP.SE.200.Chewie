import { expect } from 'chai';
import countBy from '../src/countBy.js';

describe('countBy()', () => {

    it('count by active status', () => {
        const users = [
          { 'user': 'niko', 'active': true },
          { 'user': 'mangi', 'active': true },
          { 'user': 'chewie', 'active': false }
        ];
        const result = countBy(users, (user) => user.active);
        expect(result).to.deep.equal({ 'true': 2, 'false': 1 });
      });

    it('return an empty object for an empty collection', () => {
      const result = countBy([], Math.floor);
      expect(result).to.deep.equal({});
    });

  });