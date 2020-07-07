export interface IProduct {
  id?: number;
  nameProduct?: string;
  price?: number;
  quantity?: number;
}
// tslint:disable-next-line:class-name
export class product implements IProduct {
  constructor(id?: number, nameProduct?: string, price?: number, quantity?: number) {}
}
