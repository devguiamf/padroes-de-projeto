/**
 * Exemplo de Polimorfismo com Herança
 * 
 * Demonstra como diferentes classes (Cachorro, Gato, Passaro)
 * podem ser tratadas de forma uniforme através da classe base Animal,
 * mas cada uma se comporta de forma diferente
 */

// Classe base - define a interface comum
export class Animal {
  protected nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  // Método polimórfico - será sobrescrito pelas classes filhas
  fazerSom(): void {
    console.log(`${this.nome} faz um som genérico`);
  }

  // Método polimórfico - será sobrescrito pelas classes filhas
  mover(): void {
    console.log(`${this.nome} está se movendo`);
  }

  // Método comum - não precisa ser sobrescrito
  dormir(): void {
    console.log(`😴 ${this.nome} está dormindo...`);
  }

  obterNome(): string {
    return this.nome;
  }
}

// Classe filha 1 - sobrescreve métodos polimórficos
export class Cachorro extends Animal {
  fazerSom(): void {
    console.log(`🐕 ${this.nome} faz: Au Au!`);
  }

  mover(): void {
    console.log(`🏃 ${this.nome} está correndo com 4 patas`);
  }
}

// Classe filha 2 - sobrescreve métodos polimórficos
export class Gato extends Animal {
  fazerSom(): void {
    console.log(`🐱 ${this.nome} faz: Miau!`);
  }

  mover(): void {
    console.log(`🚶 ${this.nome} está andando silenciosamente`);
  }
}

// Classe filha 3 - sobrescreve métodos polimórficos
export class Passaro extends Animal {
  fazerSom(): void {
    console.log(`🐦 ${this.nome} faz: Piu Piu!`);
  }

  mover(): void {
    console.log(`✈️ ${this.nome} está voando`);
  }
}

// Função polimórfica - funciona com QUALQUER Animal
export function fazerAnimalFalar(animal: Animal): void {
  console.log(`\n--- ${animal.obterNome()} ---`);
  animal.fazerSom(); // Chama o método da classe específica em runtime
}

// Função polimórfica - processa múltiplos animais
export function fazerAnimaisFalarem(animais: Animal[]): void {
  console.log("\n=== Todos os animais falando ===");
  animais.forEach(animal => {
    fazerAnimalFalar(animal);
  });
}

// Função polimórfica - processa qualquer animal de forma uniforme
export function apresentarAnimal(animal: Animal): void {
  console.log(`\n--- Apresentando ${animal.obterNome()} ---`);
  animal.fazerSom();
  animal.mover();
  animal.dormir();
}

// Exemplo de uso
if (require.main === module) {
  console.log("=== Exemplo de Polimorfismo com Herança ===\n");

  // Criando diferentes tipos de animais
  const cachorro = new Cachorro("Rex");
  const gato = new Gato("Mimi");
  const passaro = new Passaro("Piu");

  console.log("--- Polimorfismo: Mesma função, comportamentos diferentes ---");
  
  // A mesma função funciona com diferentes tipos!
  fazerAnimalFalar(cachorro); // Chama Cachorro.fazerSom()
  fazerAnimalFalar(gato);     // Chama Gato.fazerSom()
  fazerAnimalFalar(passaro);  // Chama Passaro.fazerSom()

  console.log("\n--- Array polimórfico ---");
  const animais: Animal[] = [cachorro, gato, passaro];
  
  // Processa todos de forma uniforme
  fazerAnimaisFalarem(animais);

  console.log("\n--- Apresentação completa de cada animal ---");
  animais.forEach(animal => {
    apresentarAnimal(animal);
  });

  console.log("\n✅ Polimorfismo permite:");
  console.log("   - Tratar diferentes tipos de forma uniforme");
  console.log("   - Cada classe se comporta de forma diferente");
  console.log("   - Adicionar novos tipos sem modificar funções existentes");
  console.log("   - Código mais limpo sem muitos if/else");
}

