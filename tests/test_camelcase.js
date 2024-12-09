import { expect } from 'chai';
import camelCase from '../src/camelCase.js';

describe('camelCase()', () => {
        it('normal expected operation', () => {
          expect(camelCase('Unit Test')).to.equal('unitTest');
        });
      
        it('strings with dashes', () => {
          expect(camelCase('--Unit Test--')).to.equal('unitTest');
        });
      
        it('strings with underscore', () => {
          expect(camelCase('__UNIT test__')).to.equal('unitTest');
        });
      
        it('all caps into lowercase', () => {
          expect(camelCase('PLAYWRIGHT')).to.equal('playwright');
        });
      
        it('given empty string, should give empty string', () => {
          expect(camelCase('')).to.equal('');
        });
      
        it('should handle strings with special characters', () => {
          expect(camelCase("unit's test")).to.equal('unitsTest');
        });
      
        it('handling string with numbers', () => {
          expect(camelCase('1unit 2test')).to.equal('1Unit2Test');
        });
      
        it('case of multiple spaces', () => {
          expect(camelCase('unit    test')).to.equal('unitTest');
        });
      
        it('already is in camelcase', () => {
          expect(camelCase('unitTest')).to.equal('unitTest');
        });
      
});