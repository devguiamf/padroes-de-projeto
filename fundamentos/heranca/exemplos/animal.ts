/**
 * Exemplo de Herança Multinível
 * 
 * Demonstra uma hierarquia de classes:
 * Animal -> Mamifero -> Cachorro
 * Animal -> Ave -> Passaro
 */

// Classe Base (Raiz da hierarquia)
export class Animal {
  protected nome: string;
  protected especie: string;

  constructor(nome: string, especie: string) {
    this.nome = nome;
    this.especie = especie;
  }

  comer(): void {
    console.log(`🍽️ ${this.nome} (${this.especie}) está comendo`);
  }

  dormir(): void {
    console.log(`😴 ${this.nome} está dormindo`);
  }

  mover(): void {
    console.log(`🚶 ${this.nome} está se movendo`);
  }

  obterInfo(): string {
    return `${this.nome} - ${this.especie}`;
  }
}

// Classe Filha de Animal
export class Mamifero extends Animal {
  protected temperaturaCorporal: number = 37; // Graus Celsius

  constructor(nome: string, especie: string) {
    super(nome, especie);
  }

  amamentar(): void {
    console.log(`🍼 ${this.nome} está amamentando`);
  }

  manterTemperatura(): void {
    console.log(`🌡️ ${this.nome} mantém temperatura de ${this.temperaturaCorporal}°C`);
  }
}

// Classe Filha de Animal
export class Ave extends Animal {
  protected podeVoar: boolean;

  constructor(nome: string, especie: string, podeVoar: boolean = true) {
    super(nome, especie);
    this.podeVoar = podeVoar;
  }

  voar(): void {
    if (this.podeVoar) {
      console.log(`✈️ ${this.nome} está voando`);
    } else {
      console.log(`🚫 ${this.nome} não pode voar`);
    }
  }

  botarOvo(): void {
    console.log(`🥚 ${this.nome} botou um ovo`);
  }
}

// Classe Neto: herda de Mamifero (que herda de Animal)
export class Cachorro extends Mamifero {
  private raca: string;

  constructor(nome: string, raca: string) {
    super(nome, "Canis lupus");
    this.raca = raca;
  }

  latir(): void {
    console.log(`🐕 ${this.nome} está latindo: Au Au!`);
  }

  // Sobrescreve método da classe avô (Animal)
  mover(): void {
    console.log(`🏃 ${this.nome} está correndo com 4 patas`);
  }

  obterRaca(): string {
    return this.raca;
  }
}

// Classe Neto: herda de Mamifero (que herda de Animal)
export class Gato extends Mamifero {
  private raca: string;

  constructor(nome: string, raca: string) {
    super(nome, "Felis catus");
    this.raca = raca;
  }

  miar(): void {
    console.log(`🐱 ${this.nome} está miando: Miau!`);
  }

  // Sobrescreve método da classe avô (Animal)
  mover(): void {
    console.log(`🚶 ${this.nome} está andando silenciosamente`);
  }

  obterRaca(): string {
    return this.raca;
  }
}

// Classe Neto: herda de Ave (que herda de Animal)
export class Passaro extends Ave {
  private cor: string;

  constructor(nome: string, especie: string, cor: string, podeVoar: boolean = true) {
    super(nome, especie, podeVoar);
    this.cor = cor;
  }

  cantar(): void {
    console.log(`🎵 ${this.nome} está cantando: Piu Piu!`);
  }

  // Sobrescreve método da classe avô (Animal)
  mover(): void {
    if (this.podeVoar) {
      this.voar();
    } else {
      console.log(`🚶 ${this.nome} está andando`);
    }
  }

  obterCor(): string {
    return this.cor;
  }
}

// Classe Neto: herda de Ave (que herda de Animal)
export class Pinguim extends Ave {
  constructor(nome: string) {
    super(nome, "Spheniscidae", false); // Pinguim não voa
  }

  nadar(): void {
    console.log(`🏊 ${this.nome} está nadando`);
  }

  // Sobrescreve método da classe avô (Animal)
  mover(): void {
    this.nadar();
  }
}

// Exemplo de uso
if (require.main === module) {
  console.log("=== Exemplo de Herança Multinível ===\n");

  const cachorro = new Cachorro("Rex", "Labrador");
  const gato = new Gato("Mimi", "Persa");
  const passaro = new Passaro("Piu", "Canário", "Amarelo");
  const pinguim = new Pinguim("Pingu");

  console.log("--- Cachorro (Animal -> Mamifero -> Cachorro) ---");
  console.log(`Info: ${cachorro.obterInfo()}`);
  cachorro.comer();              // Herdado de Animal
  cachorro.dormir();             // Herdado de Animal
  cachorro.amamentar();          // Herdado de Mamifero
  cachorro.manterTemperatura();  // Herdado de Mamifero
  cachorro.latir();              // Específico de Cachorro
  cachorro.mover();              // Sobrescrito em Cachorro

  console.log("\n--- Gato (Animal -> Mamifero -> Gato) ---");
  console.log(`Info: ${gato.obterInfo()}`);
  gato.comer();
  gato.amamentar();
  gato.miar();
  gato.mover();

  console.log("\n--- Pássaro (Animal -> Ave -> Passaro) ---");
  console.log(`Info: ${passaro.obterInfo()}`);
  passaro.comer();
  passaro.voar();        // Herdado de Ave
  passaro.botarOvo();    // Herdado de Ave
  passaro.cantar();      // Específico de Passaro
  passaro.mover();       // Sobrescrito em Passaro

  console.log("\n--- Pinguim (Animal -> Ave -> Pinguim) ---");
  console.log(`Info: ${pinguim.obterInfo()}`);
  pinguim.comer();
  pinguim.voar();        // Herdado de Ave (mas retorna que não pode voar)
  pinguim.nadar();       // Específico de Pinguim
  pinguim.mover();       // Sobrescrito em Pinguim

  console.log("\n✅ Herança multinível permite:");
  console.log("   - Criar hierarquias complexas");
  console.log("   - Reutilizar código em vários níveis");
  console.log("   - Especializar cada vez mais as classes");
}

