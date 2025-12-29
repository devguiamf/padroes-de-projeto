import { AtaqueComportamento } from "../../../interfaces/ataque-compoetamento";

export class AtaqueComMagia implements AtaqueComportamento {
  executar(): void {
    console.log("Lançando bola de fogo mágica!");
  }
}

