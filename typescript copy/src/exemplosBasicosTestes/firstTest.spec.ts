describe('Meu primeiro teste', () => {
  it('descrição do teste (IT)', () => {
    const numero = 1;
    expect(numero).toBe(1);
  });
});

describe('Meu segundo teste', () => {
  test('descrição do teste (TEST)', () => {
    const nome = 'Gabriela';
    expect(nome).toBe('Gabriela');
  });
});
