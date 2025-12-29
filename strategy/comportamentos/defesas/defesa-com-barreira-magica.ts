import { DefesaComportamento } from "../../../interfaces/defesa-compoetamento";

export class DefesaComBarreiraMagica implements DefesaComportamento {
  executar(): void {
    console.log("Criando barreira mágica de proteção!");
  }
}

