/**
 * Exemplo de Herança Simples
 * 
 * Demonstra como uma classe filha herda características
 * e comportamentos da classe pai
 */

// Classe Pai (Base) - contém características comuns
export class Pessoa {
  protected nome: string;
  protected idade: number;
  protected cpf: string;

  constructor(nome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
  }

  // Métodos comuns a todas as pessoas
  apresentar(): void {
    console.log(`👋 Olá, eu sou ${this.nome} e tenho ${this.idade} anos`);
  }

  dormir(): void {
    console.log(`😴 ${this.nome} está dormindo...`);
  }

  comer(): void {
    console.log(`🍽️ ${this.nome} está comendo...`);
  }

  obterInfo(): string {
    return `${this.nome}, ${this.idade} anos, CPF: ${this.cpf}`;
  }
}

// Classe Filha 1: Estudante - herda de Pessoa
export class Estudante extends Pessoa {
  private matricula: string;
  private curso: string;

  constructor(nome: string, idade: number, cpf: string, matricula: string, curso: string) {
    super(nome, idade, cpf); // Chama construtor da classe pai
    this.matricula = matricula;
    this.curso = curso;
  }

  // Método específico do Estudante
  estudar(): void {
    console.log(`📚 ${this.nome} está estudando ${this.curso}...`);
  }

  // Sobrescreve método da classe pai (override)
  apresentar(): void {
    super.apresentar(); // Chama método da classe pai
    console.log(`🎓 Sou estudante de ${this.curso}, matrícula: ${this.matricula}`);
  }

  obterMatricula(): string {
    return this.matricula;
  }
}

// Classe Filha 2: Professor - herda de Pessoa
export class Professor extends Pessoa {
  private registro: string;
  private disciplina: string;

  constructor(nome: string, idade: number, cpf: string, registro: string, disciplina: string) {
    super(nome, idade, cpf);
    this.registro = registro;
    this.disciplina = disciplina;
  }

  // Método específico do Professor
  ensinar(): void {
    console.log(`📖 ${this.nome} está ensinando ${this.disciplina}...`);
  }

  // Sobrescreve método da classe pai
  apresentar(): void {
    super.apresentar();
    console.log(`👨‍🏫 Sou professor de ${this.disciplina}, registro: ${this.registro}`);
  }

  obterRegistro(): string {
    return this.registro;
  }
}

// Classe Filha 3: Funcionario - herda de Pessoa
export class Funcionario extends Pessoa {
  private cargo: string;
  private salario: number;

  constructor(nome: string, idade: number, cpf: string, cargo: string, salario: number) {
    super(nome, idade, cpf);
    this.cargo = cargo;
    this.salario = salario;
  }

  // Método específico do Funcionario
  trabalhar(): void {
    console.log(`💼 ${this.nome} está trabalhando como ${this.cargo}...`);
  }

  // Sobrescreve método da classe pai
  apresentar(): void {
    super.apresentar();
    console.log(`💼 Trabalho como ${this.cargo}, salário: R$ ${this.salario.toFixed(2)}`);
  }

  obterSalario(): number {
    return this.salario;
  }
}

// Exemplo de uso
if (require.main === module) {
  console.log("=== Exemplo de Herança ===\n");

  // Criando instâncias das classes filhas
  const estudante = new Estudante("João", 20, "123.456.789-00", "2024001", "Ciência da Computação");
  const professor = new Professor("Maria", 35, "987.654.321-00", "PROF001", "Programação");
  const funcionario = new Funcionario("Pedro", 28, "111.222.333-44", "Desenvolvedor", 5000);

  console.log("--- Estudante (herda de Pessoa) ---");
  estudante.apresentar(); // Método sobrescrito
  estudante.estudar();    // Método específico
  estudante.comer();      // Método herdado
  estudante.dormir();     // Método herdado

  console.log("\n--- Professor (herda de Pessoa) ---");
  professor.apresentar(); // Método sobrescrito
  professor.ensinar();    // Método específico
  professor.comer();     // Método herdado
  professor.dormir();    // Método herdado

  console.log("\n--- Funcionário (herda de Pessoa) ---");
  funcionario.apresentar(); // Método sobrescrito
  funcionario.trabalhar();  // Método específico
  funcionario.comer();      // Método herdado
  funcionario.dormir();     // Método herdado

  console.log("\n✅ Herança permite:");
  console.log("   - Reutilizar código comum (comer, dormir)");
  console.log("   - Adicionar comportamentos específicos (estudar, ensinar)");
  console.log("   - Sobrescrever métodos quando necessário");
}

