/**
 * Exemplo de Encapsulamento: Pessoa com Getters e Setters
 * 
 * Demonstra como usar getters e setters para controlar
 * acesso e validação de propriedades
 */

export class Pessoa {
  // Propriedades PRIVADAS (convenção: usar _ no início)
  private _nome: string;
  private _idade: number;
  private _email: string;
  private _cpf: string;

  constructor(nome: string, idade: number, email: string, cpf: string) {
    this.nome = nome;    // Usa o setter para validar
    this.idade = idade;   // Usa o setter para validar
    this.email = email;   // Usa o setter para validar
    this.cpf = cpf;       // Usa o setter para validar
  }

  // GETTER - permite ler o valor
  get nome(): string {
    return this._nome;
  }

  // SETTER - permite modificar com validação
  set nome(novoNome: string) {
    if (!novoNome || novoNome.trim().length < 2) {
      throw new Error("❌ Nome deve ter pelo menos 2 caracteres");
    }
    this._nome = novoNome.trim();
  }

  // GETTER
  get idade(): number {
    return this._idade;
  }

  // SETTER com validação
  set idade(novaIdade: number) {
    if (novaIdade < 0 || novaIdade > 150) {
      throw new Error("❌ Idade deve estar entre 0 e 150 anos");
    }
    this._idade = novaIdade;
  }

  // GETTER
  get email(): string {
    return this._email;
  }

  // SETTER com validação de email
  set email(novoEmail: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(novoEmail)) {
      throw new Error("❌ Email inválido");
    }
    this._email = novoEmail.toLowerCase();
  }

  // GETTER (apenas leitura - sem setter público)
  get cpf(): string {
    return this._cpf;
  }

  // SETTER privado - só pode ser usado no construtor
  private set cpf(novoCpf: string) {
    const cpfLimpo = novoCpf.replace(/\D/g, ""); // Remove caracteres não numéricos
    
    if (cpfLimpo.length !== 11) {
      throw new Error("❌ CPF deve ter 11 dígitos");
    }
    
    // Formata CPF: 123.456.789-00
    this._cpf = `${cpfLimpo.slice(0, 3)}.${cpfLimpo.slice(3, 6)}.${cpfLimpo.slice(6, 9)}-${cpfLimpo.slice(9)}`;
  }

  // Método público para obter informações formatadas
  obterInfo(): string {
    return `Nome: ${this.nome}, Idade: ${this.idade}, Email: ${this.email}, CPF: ${this.cpf}`;
  }

  // Método público para atualizar dados (com validação)
  atualizarDados(dados: { nome?: string; idade?: number; email?: string }): void {
    if (dados.nome !== undefined) {
      this.nome = dados.nome;
    }
    if (dados.idade !== undefined) {
      this.idade = dados.idade;
    }
    if (dados.email !== undefined) {
      this.email = dados.email;
    }
    // CPF não pode ser atualizado (sem setter público)
  }
}

// Exemplo de uso
if (require.main === module) {
  console.log("=== Exemplo de Encapsulamento: Pessoa ===\n");

  try {
    // Criando pessoa com dados válidos
    const pessoa = new Pessoa("João Silva", 25, "joao@email.com", "12345678900");
    console.log("✅ Pessoa criada com sucesso!");
    console.log(pessoa.obterInfo());

    console.log("\n--- Usando Getters ---");
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade}`);
    console.log(`Email: ${pessoa.email}`);
    console.log(`CPF: ${pessoa.cpf}`);

    console.log("\n--- Usando Setters (com validação) ---");
    pessoa.nome = "João da Silva";
    pessoa.idade = 30;
    pessoa.email = "joao.silva@email.com";
    console.log("✅ Dados atualizados!");
    console.log(pessoa.obterInfo());

    console.log("\n--- Tentativas de dados inválidos ---");
    
    try {
      pessoa.nome = "A"; // Nome muito curto
    } catch (error: any) {
      console.log(error.message);
    }

    try {
      pessoa.idade = 200; // Idade inválida
    } catch (error: any) {
      console.log(error.message);
    }

    try {
      pessoa.email = "email-invalido"; // Email inválido
    } catch (error: any) {
      console.log(error.message);
    }

    // CPF não pode ser modificado (setter privado)
    console.log("\n--- Tentativa de modificar CPF ---");
    // pessoa.cpf = "99999999999"; // ❌ ERRO! Setter é privado
    console.log("✅ CPF está protegido e não pode ser modificado após criação");

    console.log("\n--- Atualização em lote ---");
    pessoa.atualizarDados({
      nome: "João Silva Santos",
      idade: 28,
      email: "joao.santos@email.com"
    });
    console.log(pessoa.obterInfo());

  } catch (error: any) {
    console.log(`❌ Erro: ${error.message}`);
  }

  console.log("\n✅ Encapsulamento com getters/setters:");
  console.log("   - Protege dados de modificações inválidas");
  console.log("   - Valida dados automaticamente");
  console.log("   - Controla o que pode ser modificado");
}

