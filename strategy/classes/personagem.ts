import { AtaqueSemArma } from "./comportamentos/ataques/ataque-sem-arma";
import { DefesaComAsMaos } from "./comportamentos/defesas/defesa-com-as-maos";
import { AtaqueComportamento } from "./interfaces/ataque-compoetamento";
import { DefesaComportamento } from "./interfaces/defesa-compoetamento";

export abstract class Personagem {
  protected nome: string;
  private ataque: AtaqueComportamento;
  private defesa: DefesaComportamento;

  constructor(nome: string) {
    this.nome = nome;
    this.ataque = new AtaqueSemArma();
    this.defesa = new DefesaComAsMaos();
  }

  atacar(): void {
    this.ataque.executar();
  }

  defender(): void {
    this.defesa.executar();
  }

  mudarAtaque(ataque: AtaqueComportamento): void {
    this.ataque = ataque;
  }

  mudarDefesa(defesa: DefesaComportamento): void {
    this.defesa = defesa;
  }
}
