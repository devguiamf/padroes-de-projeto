/**
 * Exemplo de Polimorfismo com Interface
 * 
 * Demonstra como diferentes classes (PagamentoCartao, PagamentoBoleto, PagamentoPix)
 * implementam a mesma interface, permitindo tratamento uniforme
 */

// Interface comum - define o contrato
export interface Pagamento {
  processar(valor: number): boolean;
  obterTipo(): string;
}

// Implementação 1: Pagamento com Cartão
export class PagamentoCartao implements Pagamento {
  private numeroCartao: string;

  constructor(numeroCartao: string) {
    this.numeroCartao = numeroCartao;
  }

  processar(valor: number): boolean {
    console.log(`💳 Processando pagamento de R$ ${valor.toFixed(2)} com cartão ${this.numeroCartao.slice(-4)}...`);
    console.log(`   Validando cartão...`);
    console.log(`   Processando transação...`);
    console.log(`✅ Pagamento com cartão aprovado!`);
    return true;
  }

  obterTipo(): string {
    return "Cartão de Crédito";
  }
}

// Implementação 2: Pagamento com Boleto
export class PagamentoBoleto implements Pagamento {
  processar(valor: number): boolean {
    const codigoBarras = this.gerarCodigoBarras();
    console.log(`📄 Gerando boleto de R$ ${valor.toFixed(2)}...`);
    console.log(`   Código de barras: ${codigoBarras}`);
    console.log(`   Vencimento: ${this.obterVencimento()}`);
    console.log(`✅ Boleto gerado com sucesso!`);
    return true;
  }

  obterTipo(): string {
    return "Boleto Bancário";
  }

  private gerarCodigoBarras(): string {
    return "34191.09008 01234.567890 12345.678901 2 12345678901234";
  }

  private obterVencimento(): string {
    const data = new Date();
    data.setDate(data.getDate() + 3); // 3 dias a partir de hoje
    return data.toLocaleDateString("pt-BR");
  }
}

// Implementação 3: Pagamento com PIX
export class PagamentoPix implements Pagamento {
  private chavePix: string;

  constructor(chavePix: string) {
    this.chavePix = chavePix;
  }

  processar(valor: number): boolean {
    console.log(`📱 Processando PIX de R$ ${valor.toFixed(2)}...`);
    console.log(`   Chave PIX: ${this.chavePix}`);
    console.log(`   Gerando QR Code...`);
    console.log(`   Processando transferência instantânea...`);
    console.log(`✅ PIX processado com sucesso!`);
    return true;
  }

  obterTipo(): string {
    return "PIX";
  }
}

// Função polimórfica - funciona com QUALQUER tipo de pagamento
export function processarPagamento(metodo: Pagamento, valor: number): void {
  console.log(`\n--- Processando pagamento com ${metodo.obterTipo()} ---`);
  metodo.processar(valor);
}

// Função polimórfica - processa múltiplos pagamentos
export function processarVariosPagamentos(pagamentos: Pagamento[], valor: number): void {
  console.log("\n=== Processando múltiplos métodos de pagamento ===");
  pagamentos.forEach(metodo => {
    processarPagamento(metodo, valor);
  });
}

// Classe que usa polimorfismo
export class CarrinhoCompras {
  private itens: { nome: string; preco: number }[] = [];

  adicionarItem(nome: string, preco: number): void {
    this.itens.push({ nome, preco });
  }

  calcularTotal(): number {
    return this.itens.reduce((total, item) => total + item.preco, 0);
  }

  // Método polimórfico - aceita qualquer tipo de pagamento
  finalizarCompra(metodoPagamento: Pagamento): boolean {
    const total = this.calcularTotal();
    console.log(`\n🛒 Finalizando compra...`);
    console.log(`   Total: R$ ${total.toFixed(2)}`);
    return metodoPagamento.processar(total);
  }
}

// Exemplo de uso
if (require.main === module) {
  console.log("=== Exemplo de Polimorfismo com Interface ===\n");

  // Criando diferentes métodos de pagamento
  const pagamentoCartao = new PagamentoCartao("1234 5678 9012 3456");
  const pagamentoBoleto = new PagamentoBoleto();
  const pagamentoPix = new PagamentoPix("usuario@email.com");

  console.log("--- Polimorfismo: Mesma função, implementações diferentes ---");
  
  // A mesma função funciona com diferentes implementações!
  processarPagamento(pagamentoCartao, 100);
  processarPagamento(pagamentoBoleto, 200);
  processarPagamento(pagamentoPix, 50);

  console.log("\n--- Array polimórfico ---");
  const metodosPagamento: Pagamento[] = [
    pagamentoCartao,
    pagamentoBoleto,
    pagamentoPix
  ];

  // Processa todos de forma uniforme
  processarVariosPagamentos(metodosPagamento, 150);

  console.log("\n--- Uso prático: Carrinho de Compras ---");
  const carrinho = new CarrinhoCompras();
  carrinho.adicionarItem("Notebook", 2500);
  carrinho.adicionarItem("Mouse", 50);
  carrinho.adicionarItem("Teclado", 150);

  // Pode finalizar com qualquer método de pagamento!
  carrinho.finalizarCompra(pagamentoPix);

  console.log("\n✅ Polimorfismo permite:");
  console.log("   - Tratar diferentes implementações de forma uniforme");
  console.log("   - Adicionar novos métodos de pagamento sem modificar código existente");
  console.log("   - Código mais flexível e extensível");
}

