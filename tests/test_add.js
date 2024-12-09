import { expect } from 'chai';
import add from '../src/add.js';

describe('add()', () => {
    it('plus two positive numbers', () => {
        const result = add(1, 2);
        expect(result).to.equal(3);
    });

    it('confirm both are zero', () => {
        const result = add(0, 0);
        expect(result).to.equal(0);
    });

    it('negative number test', () => {
        const result = add(-1, -2);
        expect(result).to.equal(-3);
    });

    it('deduction works as intended', () => {
        const result = add(5, -4);
        expect(result).to.equal(1);
    });

    it('decimals test', () => {
        const result = add(1.1, 2.2);
        expect(result).to.be.closeTo(3.3, 0.001); // Using closeTo for floating-point precision
    });

    it('plus two positive numbers, but test for fail', () => {
        const result = add(1, 2);
        expect(result).not.to.equal(4);
    });

});