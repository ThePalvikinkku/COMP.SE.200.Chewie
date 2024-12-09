import { expect } from 'chai';
import chunk from '../src/chunk.js';

describe('chunk()', () => {
    it('split in one', () => {
      expect(chunk(['unit', 'test', 'code'], 3)).to.deep.equal([['unit', 'test', 'code']]);
    });
    
      it('split into no chunks with size 0', () => {
        expect(chunk(['unit', 'test', 'code'], 0)).to.deep.equal([]);
      });
});