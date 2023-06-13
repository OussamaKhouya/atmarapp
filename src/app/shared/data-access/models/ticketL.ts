
export class TicketL {
  tickete?: string;
  item?: string;
  description?: string;
  price?: number;
  quantity?: number;
  discount?: number;
  date?: string;
  totalht?: number;
  totalttc?: number;
  operator?: number;
  poste?: string

  constructor(ticketE: string,
              item: string,
              description: string,
              price: number, quantity: number, discount: number, date: string, totalht: number, totalttc: number, operator: number, poste: string) {
    this.tickete = ticketE;
    this.item = item;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.discount = discount;
    this.date = date;
    this.totalht = totalht;
    this.totalttc = totalttc;
    this.operator = operator;
    this.poste = poste;
  }
}
