
export class Item {
  code?: string;
  description?: string;
  sellprice?: number;
  rate?: number

  constructor(code: string, description: string, sellprice: number, rate: number) {
    this.code = code;
    this.description = description;
    this.sellprice = sellprice;
    this.rate = rate;
  }
}
