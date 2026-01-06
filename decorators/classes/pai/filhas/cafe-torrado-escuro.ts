import { Bebida } from "../bebida";

export class CafeTorradoEscuro extends Bebida {
  constructor() {
    super();
    this.descricao = "Café torrado escuro";
  }

  getCost(): number {
    return 1.99;
  }

  getDescription(): string {
    return this.descricao;
  }
}
