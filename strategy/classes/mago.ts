import { Personagem } from "./personagem";
import { AtaqueComMagia } from "./comportamentos/ataques/ataque-com-magia";
import { DefesaComBarreiraMagica } from "./comportamentos/defesas/defesa-com-barreira-magica";
import { AtaqueComEspada } from "./comportamentos/ataques/ataque-com-espada";
import { DefesaComEscudo } from "./comportamentos/defesas/defesa-com-escudo";

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

// Exemplo de uso
if (require.main === module) {
  console.log("=== Exemplo: Mago usando Padrão Strategy ===\n");
  
  const mago = new Mago("Gandalf");
  
  console.log("\n--- Ataque e Defesa do Mago ---");
  mago.atacar();
  mago.defender();
  
  console.log("\n--- Mago pode trocar de estratégia em tempo de execução ---");
  // Mesmo sendo um Mago, pode usar estratégias de Guerreiro se necessário
  mago.mudarAtaque(new AtaqueComEspada());
  mago.mudarDefesa(new DefesaComEscudo());
  
  console.log("\n--- Mago usando estratégias de Guerreiro ---");
  mago.atacar();
  mago.defender();
  
  console.log("\n✅ Este exemplo demonstra a flexibilidade do padrão Strategy!");
  console.log("   O Mago pode usar qualquer estratégia, não apenas as de magia.");
}

