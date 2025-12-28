import { AtaqueComportamento } from "../../interfaces/ataque-compoetamento";

export class AtaqueSemArma implements AtaqueComportamento {
  executar(): void {
    console.log("Ataque sem arma");
  }
}
