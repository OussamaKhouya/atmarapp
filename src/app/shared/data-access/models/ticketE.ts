
export class TicketE {
  number?: string;
  date?: string;
  client?: string;
  warehouse?: string;
  totalht?: number;
  totalttc?: number;
  totaltva?: number;
  stamp?: number;
  totalGeneral?: number;
  pending?: boolean | null


  constructor(number: string, date: string, client: string, warehouse: string, totalht: number, totalttc: number, totaltva: number, stamp: number, totalGeneral: number, pending: boolean | null) {
    this.number = number;
    this.date = date;
    this.client = client;
    this.warehouse = warehouse;
    this.totalht = totalht;
    this.totalttc = totalttc;
    this.totaltva = totaltva;
    this.stamp = stamp;
    this.totalGeneral = totalGeneral;
    this.pending = pending;
  }
}
