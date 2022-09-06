/*
import { IndividualCustomerProtocol, EnterpriseCustomerProtocol, CustomerOrder } from './interfaces/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.name;
  }

  getIDN(): string {
    return this.cnpj;
  }
}

DEVEMOS TESTAR:
1 - classe IndividualCustomer
  1.1 - construtor IndividualCustomer
  1.3 - método getName()
  1.4 - método getIDN()
2 - classe EnterpriseCustomer
  2.1 - construtor EnterpriseCustomer
  2.3 - método getName()
  2.4 - método getIDN()
*/
import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (firstName: string, lastName: string, cpf: string): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('IndividualCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should be an individual customer and have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Gabriela', 'Nery', '10204916470');
    expect(sut).toHaveProperty('firstName', 'Gabriela');
    expect(sut).toHaveProperty('lastName', 'Nery');
    expect(sut).toHaveProperty('cpf', '10204916470');
  });

  it('should have method getName()', () => {
    const sut = createIndividualCustomer('Gabriela', 'Nery', '10204916470');
    expect(sut.getName()).toBe('Gabriela Nery');
  });

  it('should have method getIDN()', () => {
    const sut = createIndividualCustomer('Gabriela', 'Nery', '10204916470');
    expect(sut.getIDN()).toBe('10204916470');
  });
});

describe('EnterpriseCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should be an enterprise customer and have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Gabriela', '10204916470/0001-21');
    expect(sut).toHaveProperty('name', 'Gabriela');
    expect(sut).toHaveProperty('cnpj', '10204916470/0001-21');
  });

  it('should have method getName()', () => {
    const sut = createEnterpriseCustomer('Gabriela', '10204916470/0001-21');
    expect(sut.getName()).toEqual('Gabriela');
  });

  it('should have method getIDN()', () => {
    const sut = createEnterpriseCustomer('Gabriela', '10204916470/0001-21');
    expect(sut.getIDN()).toEqual('10204916470/0001-21');
  });
});
