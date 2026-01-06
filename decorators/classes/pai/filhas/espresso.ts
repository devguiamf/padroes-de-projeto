import { Bebida } from "../bebida";

export class Espresso extends Bebida {
  getCost(): number {
    return 1.99;
  }

  getDescription(): string {
    return this.descricao;
  }
}
