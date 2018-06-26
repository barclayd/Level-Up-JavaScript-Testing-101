import { hello, add, multiply, removeSNames } from './App';

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

describe ('multiply', () => {
    it('should multiply 2 numbers', () => {
        expect(multiply(1, 2)).toBe(2);
        expect(multiply(3, 4)).toBe(12);
        expect(multiply(21, 4)).toBe(84);
    });
    it('should not multiply strings', () => {
        expect(multiply(2,'2')).toBe(null);
    });
    it('should not multiply objects', () => {
        expect(multiply(2,{})).toBe(null);
    });
    it('should not multiply arrays', () => {
        expect(multiply(2,[])).toBe(null);
    });
});

/*TDD:
write tests first
write code to make tests pass
refactor code for optimisation and efficiency*/

describe ('removeSNames', () => {
    it('should remove all s name', () => {
        const names = ['Scott', 'Steve', 'Ben'];
        expect(removeSNames(names)).not.toContain('Scott');
        expect(removeSNames(names)).not.toContain('Steve');



    });
    it('should not remove other names', () => {
        const names = ['Scott', 'Steve', 'Ben'];
        expect(removeSNames(names)).toContain('Ben');
    });
    it('should account for case', () => {
        const names = ['Scott', 'scott', 'Theresa'];
        expect(removeSNames(names)).not.toContain('Scott');
        expect(removeSNames(names)).not.toContain('scott');

    });
});
