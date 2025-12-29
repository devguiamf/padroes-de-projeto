import { Personagem } from "./classe-pai/personagem";
import { AtaqueComMagia } from "../comportamentos/ataques/ataque-com-magia";
import { DefesaComBarreiraMagica } from "../comportamentos/defesas/defesa-com-barreira-magica";
import { AtaqueComEspada } from "../comportamentos/ataques/ataque-com-espada";
import { DefesaComEscudo } from "../comportamentos/defesas/defesa-com-escudo";

/**
 * Exemplo de implementação do padrão Strategy
 * 
 * O Mago demonstra como diferentes personagens podem usar
 * estratégias diferentes (ataque e defesa) sem modificar
 * a classe base Personagem.
 * 
 * Este é um exemplo que mostra uma implementação que deveria
 * existir para demonstrar a flexibilidade do padrão Strategy.
 */
export class Mago extends Personagem {
  constructor(nome: string) {
    super(nome);
    // Configura estratégias específicas para o Mago
    this.mudarAtaque(new AtaqueComMagia());
    this.mudarDefesa(new DefesaComBarreiraMagica());
  }

  atacar(): void {
    console.log(`🧙 ${this.nome} está conjurando magia...`);
    super.atacar();
  }

  defender(): void {
    console.log(`🛡️ ${this.nome} está se protegendo...`);
    super.defender();
  }

  /**
   * Método específico do Mago que demonstra a flexibilidade
   * de trocar estratégias em tempo de execução
   */
  usarMagiaDefensiva(): void {
    console.log(`${this.nome} mudou para defesa mágica!`);
    this.mudarDefesa(new DefesaComBarreiraMagica());
  }
}


const mago = new Mago("Gandalf");

mago.atacar();
mago.defender();

// Mesmo sendo um Mago, pode usar estratégias de Guerreiro se necessário
mago.mudarAtaque(new AtaqueComEspada());
mago.mudarDefesa(new DefesaComEscudo());

mago.atacar();
mago.defender();
