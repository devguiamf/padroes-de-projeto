import { AtaqueComportamento } from "../../../interfaces/ataque-compoetamento";

export class AtaqueComEspada implements AtaqueComportamento {
  executar(): void {
    console.log("Ataque com espada");
  }
}
