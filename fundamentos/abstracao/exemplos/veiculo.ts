/**
 * Exemplo de Abstração usando Interface
 * 
 * Interface define APENAS o contrato (o que deve existir),
 * sem fornecer implementação (como fazer)
 */

// Interface - define o CONTRATO que todas as classes devem seguir
export interface Veiculo {
  acelerar(): void;
  frear(): void;
  obterVelocidade(): number;
  obterTipo(): string;
}

// Implementação 1: Carro
export class Carro implements Veiculo {
  private velocidade: number = 0;
  private tipo: string = "Carro";

  acelerar(): void {
    this.velocidade += 20;
    console.log("🚗 Carro acelerando... Vrum vrum!");
  }

  frear(): void {
    this.velocidade -= 15;
    if (this.velocidade < 0) this.velocidade = 0;
    console.log("🛑 Carro freando...");
  }

  obterVelocidade(): number {
    return this.velocidade;
  }

  obterTipo(): string {
    return this.tipo;
  }
}

// Implementação 2: Bicicleta
export class Bicicleta implements Veiculo {
  private velocidade: number = 0;
  private tipo: string = "Bicicleta";

  acelerar(): void {
    this.velocidade += 5; // Bicicleta acelera mais devagar
    console.log("🚴 Pedalando mais rápido...");
  }

  frear(): void {
    this.velocidade -= 5;
    if (this.velocidade < 0) this.velocidade = 0;
    console.log("🛑 Apertando os freios da bicicleta...");
  }

  obterVelocidade(): number {
    return this.velocidade;
  }

  obterTipo(): string {
    return this.tipo;
  }
}

// Implementação 3: Moto
export class Moto implements Veiculo {
  private velocidade: number = 0;
  private tipo: string = "Moto";

  acelerar(): void {
    this.velocidade += 30; // Moto acelera mais rápido
    console.log("🏍️ Moto acelerando... Brum brum!");
  }

  frear(): void {
    this.velocidade -= 20;
    if (this.velocidade < 0) this.velocidade = 0;
    console.log("🛑 Moto freando...");
  }

  obterVelocidade(): number {
    return this.velocidade;
  }

  obterTipo(): string {
    return this.tipo;
  }
}

// Função que usa abstração - funciona com QUALQUER veículo
function testarVeiculo(veiculo: Veiculo): void {
  console.log(`\n--- Testando ${veiculo.obterTipo()} ---`);
  console.log(`Velocidade inicial: ${veiculo.obterVelocidade()} km/h`);
  
  veiculo.acelerar();
  console.log(`Velocidade: ${veiculo.obterVelocidade()} km/h`);
  
  veiculo.acelerar();
  console.log(`Velocidade: ${veiculo.obterVelocidade()} km/h`);
  
  veiculo.frear();
  console.log(`Velocidade final: ${veiculo.obterVelocidade()} km/h`);
}

// Exemplo de uso
if (require.main === module) {
  console.log("=== Exemplo de Abstração com Interface ===\n");

  const carro = new Carro();
  const bicicleta = new Bicicleta();
  const moto = new Moto();

  // A função testarVeiculo funciona com QUALQUER veículo
  // porque todos implementam a interface Veiculo
  testarVeiculo(carro);
  testarVeiculo(bicicleta);
  testarVeiculo(moto);

  console.log("\n✅ Abstração permite tratar diferentes tipos");
  console.log("   de forma uniforme através de uma interface comum!");
}

