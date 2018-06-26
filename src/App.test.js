import { hello, add } from './App';

describe('hello', () => {
    it('should output hello', () => {
        expect(hello()).toBe('Hello');
    });
});

describe ('add', () => {
    it('should add 2 numbers', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(3, 4)).toBe(7);
        expect(add(21, 4)).toBe(25);
    });
    it('should not add strings', () => {
        expect(add(2,'2')).toBe(null);
    });
    it('should not add objects', () => {
        expect(add(2,{})).toBe(null);
    });
    it('should not add arrays', () => {
        expect(add(2,[])).toBe(null);
    });
});
