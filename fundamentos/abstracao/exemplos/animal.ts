/**
 * Exemplo de Abstração usando Classe Abstrata
 * 
 * A classe Animal é abstrata porque:
 * - Não faz sentido criar um "Animal" genérico
 * - Cada animal tem seu próprio som e movimento
 * - Força as classes filhas a implementar métodos essenciais
 */

// Classe abstrata - define o CONTRATO, mas não a IMPLEMENTAÇÃO completa
export abstract class Animal {
  protected nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  // Método concreto (já implementado) - todos os animais dormem igual
  dormir(): void {
    console.log(`😴 ${this.nome} está dormindo...`);
  }

  // Métodos abstratos (DEVEM ser implementados pelas classes filhas)
  abstract fazerSom(): void;
  abstract mover(): void;
  abstract comer(): void;
}

// Implementação concreta 1: Cachorro
export class Cachorro extends Animal {
  fazerSom(): void {
    console.log(`🐕 ${this.nome} faz: Au Au!`);
  }

  mover(): void {
    console.log(`🏃 ${this.nome} está correndo com 4 patas`);
  }

  comer(): void {
    console.log(`🍖 ${this.nome} está comendo ração`);
  }
}

// Implementação concreta 2: Gato
export class Gato extends Animal {
  fazerSom(): void {
    console.log(`🐱 ${this.nome} faz: Miau!`);
  }

  mover(): void {
    console.log(`🚶 ${this.nome} está andando silenciosamente`);
  }

  comer(): void {
    console.log(`🐟 ${this.nome} está comendo peixe`);
  }
}

// Implementação concreta 3: Pássaro
export class Passaro extends Animal {
  fazerSom(): void {
    console.log(`🐦 ${this.nome} faz: Piu Piu!`);
  }

  mover(): void {
    console.log(`✈️ ${this.nome} está voando`);
  }

  comer(): void {
    console.log(`🌾 ${this.nome} está comendo sementes`);
  }
}

// Exemplo de uso

// Não podemos criar um Animal diretamente (é abstrato)
// const animal = new Animal("Genérico"); // ❌ ERRO!

// Mas podemos criar animais específicos
const cachorro = new Cachorro("Rex");
const gato = new Gato("Mimi");
const passaro = new Passaro("Piu");

console.log("--- Cachorro ---");
cachorro.dormir();    // Método herdado (concreto)
cachorro.fazerSom();  // Método implementado
cachorro.mover();     // Método implementado
cachorro.comer();     // Método implementado

console.log("\n--- Gato ---");
gato.dormir();
gato.fazerSom();
gato.mover();
gato.comer();

console.log("\n--- Pássaro ---");
passaro.dormir();
passaro.fazerSom();
passaro.mover();
passaro.comer();

console.log("\n✅ Abstração permite criar um contrato comum,");
console.log("   mas cada classe implementa de forma diferente!");


