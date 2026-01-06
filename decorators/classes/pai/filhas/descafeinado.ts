import { Bebida } from "../bebida";

export class Descafeinado extends Bebida {
  constructor() {
    super();
    this.descricao = "Descafeinado";
  }

  getCost(): number {
    return 1.5;
  }

  getDescription(): string {
    return this.descricao;
  }
}
