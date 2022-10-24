describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10); //nao funciona com objetos
    expect(number).toEqual(10); //funciona com objetos

    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);
    expect(number).toBeGreaterThanOrEqual(10);

    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);

    expect(number).not.toBeNull();
    expect(number).not.toBe(null); //eh a mesma coisa do de cima

    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Gabriela', age: 28 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson); //toBe não funciona com objetos!
    expect(person).toHaveProperty('age');
    expect(person).not.toHaveProperty('lastName');
    expect(person).toHaveProperty('age', 28);

    expect(person.name).toBe('Gabriela');
  });
});
