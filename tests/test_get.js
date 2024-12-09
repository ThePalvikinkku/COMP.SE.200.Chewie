import { expect } from 'chai';
import get from '../src/get.js';

describe('get()', () => {
  it('dot nation test', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const result = get(object, 'a[0].b.c');
    expect(result).to.equal(3);
  });

  it('array pathing the result', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const result = get(object, ['a', '0', 'b', 'c']);
    expect(result).to.equal(3);
  });

  it('default value if path doesnt exist', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const result = get(object, 'a.b.c', 'default');
    expect(result).to.equal('default');
  });

  it('undefined as no other result is given', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    const result = get(object, 'a.b.c');
    expect(result).to.equal(undefined);
  });

  it('returns entire object', () => {
    const object = { 'a': 1 };
    const result = get(object, '', 'default');
    expect(result).to.equal('default');
  });

  it('handling null or undefined situation', () => {
    expect(get(null, 'a.b.c', 'default')).to.equal('default');
    expect(get(undefined, 'a.b.c', 'default')).to.equal('default');
  });

  it('numeric path handling', () => {
    const array = [1, [2, 3], { 'a': 4 }];
    expect(get(array, '1.1')).to.equal(3);
    expect(get(array, [2, 'a'])).to.equal(4);
  });

  it('special characters and keys case', () => {
    const object = { 'a.b': { 'c[d]': 5 } };
    const result = get(object, ['a.b', 'c[d]']);
    expect(result).to.equal(5);
  });

  it('if resolved undefined, then go to default', () => {
    const object = { 'a': { 'b': { 'c': undefined } } };
    const result = get(object, 'a.b.c', 'default');
    expect(result).to.equal('default');
  });

  it('return the correct value for deeply nested objects', () => {
    const object = { 'a': { 'b': { 'c': { 'd': { 'e': 42 } } } } };
    const result = get(object, 'a.b.c.d.e');
    expect(result).to.equal(42);
  });
});