import { DefesaComportamento } from "../../interfaces/defesa-compoetamento";

export class DefesaComAsMaos implements DefesaComportamento {
  executar(): void {
    console.log("Defesa com as mãos");
  }
}
