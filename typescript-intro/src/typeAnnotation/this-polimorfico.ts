// export class Calculadora {
//   constructor(public numero: number) {}

//   add(n: number): this {
//     this.numero += n;
//     return this;
//   }

//   sub(n: number): this {
//     this.numero -= n;
//     return this;
//   }

//   mult(n: number): this {
//     this.numero *= n;
//     return this;
//   }

//   div(n: number): this {
//     this.numero /= n;
//     return this;
//   }
// }

// const calc = new Calculadora(10);
// console.log(calc.add(10).sub(10).mult(10).div(2));

// export class SubCalculadora extends Calculadora {
//   exp(n: number): this {
//     this.numero **= n;
//     return this;
//   }
// }

// const calc1 = new SubCalculadora(10);
// console.log(calc1.add(10).sub(10).mult(10).div(2).exp(2));

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviado dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request.send();
request.setUrl('www.google.com').setMethod('get').send();
