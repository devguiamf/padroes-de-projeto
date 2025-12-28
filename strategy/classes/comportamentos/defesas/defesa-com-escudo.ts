import { DefesaComportamento } from "../../../interfaces/defesa-compoetamento";

export class DefesaComEscudo implements DefesaComportamento {
  executar(): void {
    console.log("Defesa com escudo");
  }
}
