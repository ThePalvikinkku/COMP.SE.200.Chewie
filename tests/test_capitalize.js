import { expect } from 'chai';
import capitalize from '../src/capitalize.js';

describe('capitalize()', () => {
    it('all lower cases', () => {
      expect(capitalize('chewie')).to.equal('Chewie');
    });

    it('all upper cases', () => {
        expect(capitalize('CHEWIE')).to.equal('Chewie');
      });

      it('case where it already is capitalized', () => {
        expect(capitalize('Chewie')).to.equal('Chewie');
      });

      it('special character', () => {
        expect(capitalize('chewie"s')).to.equal('Chewie"s');
      });

      it('return empty string', () => {
        expect(capitalize('')).to.equal('');
      });


});