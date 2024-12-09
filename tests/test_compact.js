import { expect } from 'chai';
import compact from '../src/compact.js';

describe('compact()', () => {
    it('expect cleaned array', () => {
        expect(compact([1, '', 2], 3)).to.deep.equal([1, 2]);
    });
    it('expect normal array return', () => {
        expect(compact([1, 'a', true, {}, []])).to.deep.equal([1, 'a', true, {}, []]);
      });
    
      it('expect empty array', () => {
        expect(compact([])).to.deep.equal([]);
      });
    
      it('expect working with mixed data', () => {
        expect(compact([0, 'a', false, 2, null, true, NaN])).to.deep.equal(['a', 2, true]);
      });
    
      it('expect only false values', () => {
        expect(compact([0, false, '', undefined, NaN, null])).to.deep.equal([]);
      });
    
      it('expect not to remove truthy values', () => {
        expect(compact(['0', 'false', 'null', 'undefined', 'NaN', 'true'])).to.deep.equal(['0', 'false', 'null', 'undefined', 'NaN', 'true']);
      });
});