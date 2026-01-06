import { Bebida } from "../bebida";

export class MisturaDaCasa extends Bebida {
  constructor() {
    super();
    this.descricao = "Mistura da casa com leite";
  }

  getCost(): number {
    return 1.5;
  }

  getDescription(): string {
    return this.descricao;
  }
}
