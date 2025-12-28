# Polimorfismo (Polymorphism)

## 📚 O que é Polimorfismo?

**Polimorfismo** significa "muitas formas". É a capacidade de objetos de diferentes classes serem tratados de forma uniforme através de uma interface comum, mas cada um se comportando de forma diferente.

## 🎯 Por que usar Polimorfismo?

- **Flexibilidade**: Tratar diferentes tipos de forma uniforme
- **Extensibilidade**: Adicionar novos tipos sem modificar código existente
- **Manutenibilidade**: Código mais limpo e fácil de manter
- **Reutilização**: Funções que trabalham com a interface comum funcionam com qualquer implementação

## 💡 Exemplo do Mundo Real

Imagine um **controle remoto universal**:
- Você pode usar o mesmo controle para **TV**, **Ar Condicionado**, **Som**
- Cada aparelho **responde diferente** ao mesmo botão
- Mas você usa o **mesmo controle** (interface) para todos

Isso é polimorfismo! A mesma interface (controle), mas comportamentos diferentes (cada aparelho faz algo diferente).

## 🏗️ Polimorfismo em Programação

Em TypeScript, polimorfismo é implementado através de:

1. **Herança**: Classes filhas sobrescrevem métodos da classe pai
2. **Interfaces**: Diferentes classes implementam a mesma interface
3. **Métodos virtuais**: Métodos que podem ser sobrescritos

## 📖 Tipos de Polimorfismo

### 1. Polimorfismo de Sobrescrita (Override)
Classes filhas sobrescrevem métodos da classe pai:

```typescript
class Animal {
  fazerSom(): void {
    console.log("Som genérico");
  }
}

class Cachorro extends Animal {
  fazerSom(): void {  // Sobrescreve método da classe pai
    console.log("Au Au!");
  }
}

class Gato extends Animal {
  fazerSom(): void {  // Sobrescreve método da classe pai
    console.log("Miau!");
  }
}
```

### 2. Polimorfismo de Interface
Diferentes classes implementam a mesma interface:

```typescript
interface Forma {
  calcularArea(): number;
}

class Retangulo implements Forma {
  calcularArea(): number {
    return largura * altura;
  }
}

class Circulo implements Forma {
  calcularArea(): number {
    return Math.PI * raio * raio;
  }
}
```

## 📖 Exemplos no Código

### Exemplo 1: Polimorfismo com Herança

```typescript
// Classe base
class Animal {
  protected nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  // Método que será sobrescrito (polimórfico)
  fazerSom(): void {
    console.log(`${this.nome} faz um som`);
  }

  mover(): void {
    console.log(`${this.nome} está se movendo`);
  }
}

// Classes filhas sobrescrevem o método fazerSom()
class Cachorro extends Animal {
  fazerSom(): void {
    console.log(`${this.nome} faz: Au Au!`);
  }
}

class Gato extends Animal {
  fazerSom(): void {
    console.log(`${this.nome} faz: Miau!`);
  }
}

// Função polimórfica - funciona com qualquer Animal
function fazerAnimalFalar(animal: Animal): void {
  animal.fazerSom(); // Chama o método da classe específica
}

// Uso
const cachorro = new Cachorro("Rex");
const gato = new Gato("Mimi");

fazerAnimalFalar(cachorro); // "Rex faz: Au Au!"
fazerAnimalFalar(gato);     // "Mimi faz: Miau!"
```

### Exemplo 2: Polimorfismo com Interface

```typescript
// Interface comum
interface Pagamento {
  processar(valor: number): boolean;
}

// Implementações diferentes
class PagamentoCartao implements Pagamento {
  processar(valor: number): boolean {
    console.log(`Processando pagamento de R$ ${valor} com cartão...`);
    return true;
  }
}

class PagamentoBoleto implements Pagamento {
  processar(valor: number): boolean {
    console.log(`Gerando boleto de R$ ${valor}...`);
    return true;
  }
}

class PagamentoPix implements Pagamento {
  processar(valor: number): boolean {
    console.log(`Processando PIX de R$ ${valor}...`);
    return true;
  }
}

// Função polimórfica
function processarPagamento(metodo: Pagamento, valor: number): void {
  metodo.processar(valor);
}

// Uso
processarPagamento(new PagamentoCartao(), 100);
processarPagamento(new PagamentoBoleto(), 200);
processarPagamento(new PagamentoPix(), 50);
```

### Exemplo 3: Polimorfismo com Arrays

```typescript
class Forma {
  calcularArea(): number {
    return 0;
  }
}

class Retangulo extends Forma {
  constructor(private largura: number, private altura: number) {
    super();
  }

  calcularArea(): number {
    return this.largura * this.altura;
  }
}

class Circulo extends Forma {
  constructor(private raio: number) {
    super();
  }

  calcularArea(): number {
    return Math.PI * this.raio * this.raio;
  }
}

// Array polimórfico - contém diferentes tipos de Forma
const formas: Forma[] = [
  new Retangulo(5, 10),
  new Circulo(3),
  new Retangulo(2, 8)
];

// Processa todas as formas de forma uniforme
formas.forEach(forma => {
  console.log(`Área: ${forma.calcularArea()}`);
});
```

## 🔍 Como Funciona?

### Ligação Tardia (Late Binding)

O polimorfismo funciona através de **ligação tardia** (runtime binding):

1. Em tempo de **compilação**: O código sabe que `animal` é do tipo `Animal`
2. Em tempo de **execução**: O código descobre qual classe específica e chama o método correto

```typescript
function fazerSom(animal: Animal): void {
  animal.fazerSom(); // Em runtime, chama o método da classe específica
}

fazerSom(new Cachorro()); // Chama Cachorro.fazerSom()
fazerSom(new Gato());     // Chama Gato.fazerSom()
```

## ✅ Vantagens do Polimorfismo

1. **Código mais limpo**: Menos condicionais (`if/else`, `switch`)
2. **Extensibilidade**: Adicionar novos tipos sem modificar código existente
3. **Manutenibilidade**: Mudanças isoladas em cada classe
4. **Reutilização**: Funções genéricas funcionam com múltiplos tipos
5. **Flexibilidade**: Trocar implementações facilmente

## 🔄 Comparação: Com vs Sem Polimorfismo

### ❌ Sem Polimorfismo (Abordagem Ruim)

```typescript
function fazerSom(animal: Animal): void {
  if (animal instanceof Cachorro) {
    console.log("Au Au!");
  } else if (animal instanceof Gato) {
    console.log("Miau!");
  } else if (animal instanceof Passaro) {
    console.log("Piu Piu!");
  }
  // Precisa adicionar mais if para cada novo tipo
}
```

**Problemas:**
- Muitos `if/else`
- Precisa modificar função para adicionar novos tipos
- Código difícil de manter

### ✅ Com Polimorfismo (Abordagem Boa)

```typescript
function fazerSom(animal: Animal): void {
  animal.fazerSom(); // Cada classe sabe como fazer seu som
}
```

**Benefícios:**
- Código limpo
- Adicionar novo tipo não requer modificar esta função
- Cada classe é responsável por seu comportamento

## 🎓 Quando Usar Polimorfismo?

Use polimorfismo quando:

- ✅ Você tem várias classes com comportamento similar
- ✅ Você quer tratar diferentes tipos de forma uniforme
- ✅ Você quer evitar muitos `if/else` ou `switch`
- ✅ Você quer adicionar novos tipos sem modificar código existente
- ✅ Você tem uma hierarquia de classes relacionadas

## 🔗 Relação com Outros Conceitos

### Polimorfismo + Herança
Classes filhas sobrescrevem métodos da classe pai

### Polimorfismo + Abstração
Interface abstrata permite múltiplas implementações

### Polimorfismo + Encapsulamento
Cada classe encapsula sua própria implementação

## 📝 Resumo

**Polimorfismo = Mesma interface, comportamentos diferentes**

É como um interruptor: você usa da mesma forma (liga/desliga), mas cada aparelho responde de forma diferente!

