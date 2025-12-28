/**
 * Exemplo de Encapsulamento: Conta Bancária
 * 
 * Demonstra como proteger dados sensíveis (saldo)
 * e permitir acesso apenas através de métodos controlados
 */

export class ContaBancaria {
  // Propriedades PRIVADAS - não podem ser acessadas diretamente de fora
  private saldo: number;
  private numeroConta: string;
  private historicoTransacoes: string[];

  constructor(numeroConta: string, saldoInicial: number = 0) {
    this.numeroConta = numeroConta;
    this.saldo = saldoInicial;
    this.historicoTransacoes = [];
    this.registrarTransacao(`Conta criada com saldo inicial de R$ ${saldoInicial.toFixed(2)}`);
  }

  // Método PÚBLICO para depositar (com validação)
  depositar(valor: number): boolean {
    if (valor <= 0) {
      console.log("❌ Valor de depósito deve ser maior que zero");
      return false;
    }

    this.saldo += valor;
    this.registrarTransacao(`Depósito de R$ ${valor.toFixed(2)}`);
    console.log(`✅ Depósito de R$ ${valor.toFixed(2)} realizado com sucesso`);
    return true;
  }

  // Método PÚBLICO para sacar (com validação)
  sacar(valor: number): boolean {
    if (valor <= 0) {
      console.log("❌ Valor de saque deve ser maior que zero");
      return false;
    }

    if (valor > this.saldo) {
      console.log(`❌ Saldo insuficiente. Saldo atual: R$ ${this.saldo.toFixed(2)}`);
      return false;
    }

    this.saldo -= valor;
    this.registrarTransacao(`Saque de R$ ${valor.toFixed(2)}`);
    console.log(`✅ Saque de R$ ${valor.toFixed(2)} realizado com sucesso`);
    return true;
  }

  // Método PÚBLICO para transferir (usa outros métodos)
  transferir(contaDestino: ContaBancaria, valor: number): boolean {
    if (this.sacar(valor)) {
      contaDestino.depositar(valor);
      this.registrarTransacao(`Transferência de R$ ${valor.toFixed(2)} para conta ${contaDestino.obterNumeroConta()}`);
      console.log(`✅ Transferência de R$ ${valor.toFixed(2)} realizada`);
      return true;
    }
    return false;
  }

  // Getter PÚBLICO para consultar saldo (apenas leitura)
  obterSaldo(): number {
    return this.saldo;
  }

  // Getter PÚBLICO para consultar número da conta
  obterNumeroConta(): string {
    return this.numeroConta;
  }

  // Método PÚBLICO para consultar histórico (retorna cópia para proteção)
  obterHistorico(): string[] {
    return [...this.historicoTransacoes]; // Retorna cópia, não a referência original
  }

  // Método PRIVADO - só usado internamente pela classe
  private registrarTransacao(descricao: string): void {
    const data = new Date().toLocaleString();
    this.historicoTransacoes.push(`[${data}] ${descricao}`);
  }

  // Método PÚBLICO para exibir extrato
  exibirExtrato(): void {
    console.log(`\n📋 Extrato da Conta ${this.numeroConta}`);
    console.log(`💰 Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    console.log("\nHistórico de transações:");
    this.historicoTransacoes.forEach((transacao, index) => {
      console.log(`  ${index + 1}. ${transacao}`);
    });
  }
}

// Exemplo de uso
if (require.main === module) {
  console.log("=== Exemplo de Encapsulamento: Conta Bancária ===\n");

  const conta1 = new ContaBancaria("12345-6", 1000);
  const conta2 = new ContaBancaria("78901-2", 500);

  console.log("--- Operações na Conta 1 ---");
  console.log(`Saldo inicial: R$ ${conta1.obterSaldo().toFixed(2)}`);
  
  conta1.depositar(500);
  conta1.sacar(200);
  conta1.sacar(1500); // Tentativa de saque maior que o saldo

  console.log(`\nSaldo atual: R$ ${conta1.obterSaldo().toFixed(2)}`);

  console.log("\n--- Transferência entre contas ---");
  conta1.transferir(conta2, 300);

  console.log(`\nSaldo Conta 1: R$ ${conta1.obterSaldo().toFixed(2)}`);
  console.log(`Saldo Conta 2: R$ ${conta2.obterSaldo().toFixed(2)}`);

  console.log("\n--- Tentativa de acesso direto (NÃO FUNCIONA) ---");
  // console.log(conta1.saldo); // ❌ ERRO! Propriedade privada não pode ser acessada
  // conta1.saldo = 1000000;    // ❌ ERRO! Não pode modificar diretamente

  console.log("✅ O saldo está protegido! Só pode ser modificado através de métodos controlados.");

  console.log("\n--- Extrato ---");
  conta1.exibirExtrato();

  console.log("\n✅ Encapsulamento protege os dados e garante validação!");
}

