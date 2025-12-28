# Abstração (Abstraction)

## 📚 O que é Abstração?

**Abstração** é o conceito de esconder detalhes complexos e mostrar apenas as informações essenciais. É como usar um controle remoto: você não precisa saber como ele funciona internamente, apenas pressiona os botões para obter o resultado desejado.

## 🎯 Por que usar Abstração?

- **Simplifica o uso**: Você não precisa entender todos os detalhes internos
- **Facilita manutenção**: Mudanças internas não afetam quem usa
- **Reduz complexidade**: Foca no que é importante, esconde o que não é
- **Promove reutilização**: Uma interface bem definida pode ser usada em vários contextos

## 💡 Exemplo do Mundo Real

Imagine um **carro**:
- Você sabe que tem um **volante** para virar
- Você sabe que tem um **pedal** para acelerar
- Você **NÃO precisa saber** como o motor funciona internamente
- Você **NÃO precisa saber** como a transmissão funciona

Isso é abstração! Você usa o carro através de uma interface simples (volante, pedais), sem precisar entender os detalhes complexos.

## 🏗️ Abstração em Programação

Em programação orientada a objetos, abstração é implementada através de:

1. **Classes Abstratas** - Definem o que deve existir, mas não como
2. **Interfaces** - Contratos que definem o que uma classe deve fazer
3. **Métodos Abstratos** - Métodos que devem ser implementados pelas classes filhas

## 📖 Exemplos no Código

### Exemplo 1: Classe Abstrata `Animal`

```typescript
// Classe abstrata define o CONTRATO, mas não a IMPLEMENTAÇÃO
abstract class Animal {
  protected nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  // Método concreto (já implementado)
  dormir(): void {
    console.log(`${this.nome} está dormindo...`);
  }

  // Método abstrato (DEVE ser implementado pelas classes filhas)
  abstract fazerSom(): void;
  abstract mover(): void;
}
```

**Por que é abstrato?**
- Não faz sentido criar um "Animal" genérico
- Cada animal tem seu próprio som e forma de movimento
- A classe abstrata força as classes filhas a implementar esses métodos

### Exemplo 2: Implementação Concreta

```typescript
class Cachorro extends Animal {
  fazerSom(): void {
    console.log(`${this.nome} faz: Au Au!`);
  }

  mover(): void {
    console.log(`${this.nome} está correndo com 4 patas`);
  }
}

class Gato extends Animal {
  fazerSom(): void {
    console.log(`${this.nome} faz: Miau!`);
  }

  mover(): void {
    console.log(`${this.nome} está andando silenciosamente`);
  }
}
```

### Exemplo 3: Interface (Outra forma de abstração)

```typescript
// Interface define APENAS o contrato, sem implementação
interface Veiculo {
  acelerar(): void;
  frear(): void;
  obterVelocidade(): number;
}

// Classes implementam a interface de formas diferentes
class Carro implements Veiculo {
  private velocidade: number = 0;

  acelerar(): void {
    this.velocidade += 10;
    console.log("Carro acelerando...");
  }

  frear(): void {
    this.velocidade -= 10;
    if (this.velocidade < 0) this.velocidade = 0;
    console.log("Carro freando...");
  }

  obterVelocidade(): number {
    return this.velocidade;
  }
}

class Bicicleta implements Veiculo {
  private velocidade: number = 0;

  acelerar(): void {
    this.velocidade += 5; // Bicicleta acelera mais devagar
    console.log("Pedalando mais rápido...");
  }

  frear(): void {
    this.velocidade -= 5;
    if (this.velocidade < 0) this.velocidade = 0;
    console.log("Apertando os freios...");
  }

  obterVelocidade(): number {
    return this.velocidade;
  }
}
```

## 🔍 Diferenças Importantes

### Classe Abstrata vs Interface

| Classe Abstrata | Interface |
|----------------|-----------|
| Pode ter métodos concretos (implementados) | Só tem métodos abstratos |
| Pode ter propriedades | Só define contratos |
| Usa `abstract class` | Usa `interface` |
| Classes filhas usam `extends` | Classes usam `implements` |
| Pode ter construtor | Não pode ter construtor |

## ✅ Vantagens da Abstração

1. **Reduz Complexidade**: Usuário não precisa entender detalhes internos
2. **Facilita Manutenção**: Mudanças internas não afetam código externo
3. **Promove Reutilização**: Uma interface pode ser usada por várias classes
4. **Força Boas Práticas**: Garante que classes implementem métodos necessários
5. **Melhora Legibilidade**: Código fica mais claro e fácil de entender

## 🎓 Quando Usar Abstração?

Use abstração quando:

- ✅ Você tem várias classes com comportamentos similares
- ✅ Você quer garantir que certos métodos sejam implementados
- ✅ Você quer esconder detalhes de implementação
- ✅ Você quer criar uma interface comum para diferentes tipos

## 📝 Resumo

**Abstração = Esconder detalhes complexos e mostrar apenas o essencial**

É como um menu de restaurante: você vê os pratos (interface), mas não precisa saber como são feitos na cozinha (implementação).

