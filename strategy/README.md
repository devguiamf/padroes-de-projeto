# Padrão Strategy (Estratégia)

## 📚 O que é o Padrão Strategy?

O **Padrão Strategy** é um padrão de projeto comportamental que permite definir uma família de algoritmos, encapsulá-los e torná-los intercambiáveis. Este padrão permite que o algoritmo varie independentemente dos clientes que o utilizam.

## 🎯 Problema que Resolve

Imagine que você tem uma classe `Personagem` em um jogo. Diferentes personagens podem atacar e defender de formas diferentes:

- Um **Guerreiro** pode atacar com espada e defender com escudo
- Um **Mago** pode atacar com magia e defender com barreira mágica
- Um **Arqueiro** pode atacar com arco e defender se escondendo

Sem o padrão Strategy, você teria que usar condicionais (`if/else` ou `switch`) para cada tipo de ataque/defesa, tornando o código difícil de manter e estender.

## ✅ Solução com Strategy

O padrão Strategy resolve isso encapsulando cada algoritmo (ataque/defesa) em classes separadas que implementam uma interface comum. Isso permite:

1. **Trocar algoritmos em tempo de execução**
2. **Adicionar novos comportamentos sem modificar código existente**
3. **Eliminar condicionais complexas**
4. **Seguir o princípio Open/Closed (aberto para extensão, fechado para modificação)**

## 🏗️ Estrutura do Projeto

```
strategy/
├── classes/
│   ├── personagem.ts              # Classe abstrata que usa as estratégias
│   ├── guerreiro.ts               # Implementação concreta de Personagem
│   ├── interfaces/
│   │   ├── ataque-compoetamento.ts    # Interface para estratégias de ataque
│   │   └── defesa-compoetamento.ts     # Interface para estratégias de defesa
│   └── comportamentos/
│       ├── ataques/
│       │   ├── ataque-sem-arma.ts      # Estratégia: ataque sem arma
│       │   └── ataque-com-espada.ts    # Estratégia: ataque com espada
│       └── defesas/
│           ├── defesa-com-as-maos.ts   # Estratégia: defesa com as mãos
│           └── defesa-com-escudo.ts    # Estratégia: defesa com escudo
```

## 📖 Componentes do Padrão

### 1. **Interface Strategy** (`AtaqueComportamento` e `DefesaComportamento`)

Define o contrato que todas as estratégias devem seguir:

```typescript
export interface AtaqueComportamento {
  executar(): void;
}

export interface DefesaComportamento {
  executar(): void;
}
```

### 2. **Estratégias Concretas** (Classes de Comportamento)

Implementações específicas de cada algoritmo:

**Ataques:**

- `AtaqueSemArma` - Ataque básico sem armas
- `AtaqueComEspada` - Ataque usando uma espada

**Defesas:**

- `DefesaComAsMaos` - Defesa usando apenas as mãos
- `DefesaComEscudo` - Defesa usando um escudo

### 3. **Context** (`Personagem`)

A classe que usa as estratégias. Ela mantém referências para objetos de estratégia e delega o trabalho para eles:

```typescript
export abstract class Personagem {
  private ataque: AtaqueComportamento;
  private defesa: DefesaComportamento;

  atacar(): void {
    this.ataque.executar();
  }

  defender(): void {
    this.defesa.executar();
  }

  // Permite trocar estratégias em tempo de execução
  mudarAtaque(ataque: AtaqueComportamento): void {
    this.ataque = ataque;
  }

  mudarDefesa(defesa: DefesaComportamento): void {
    this.defesa = defesa;
  }
}
```

### 4. **Clientes Concretos** (`Guerreiro`, `Mago`, etc.)

Classes que estendem `Personagem` e podem configurar suas estratégias específicas.

## 💡 Exemplo de Uso

### Exemplo 1: Guerreiro

```typescript
import { Guerreiro } from "./classes/guerreiro";
import { AtaqueComEspada } from "./classes/comportamentos/ataques/ataque-com-espada";
import { DefesaComEscudo } from "./classes/comportamentos/defesas/defesa-com-escudo";

const guerreiro = new Guerreiro("Conan");

// O guerreiro pode trocar de estratégia em tempo de execução
guerreiro.mudarAtaque(new AtaqueComEspada());
guerreiro.mudarDefesa(new DefesaComEscudo());

guerreiro.atacar(); // Executa: "Ataque com espada"
guerreiro.defender(); // Executa: "Defesa com escudo"
```

### Exemplo 2: Mago (Implementação Adicional)

O exemplo do **Mago** demonstra como criar um novo tipo de personagem com estratégias específicas:

```typescript
import { Mago } from "./classes/mago";
import { AtaqueComEspada } from "./classes/comportamentos/ataques/ataque-com-espada";
import { DefesaComEscudo } from "./classes/comportamentos/defesas/defesa-com-escudo";

const mago = new Mago("Gandalf");

// Mago usa estratégias mágicas por padrão
mago.atacar(); // "Lançando bola de fogo mágica!"
mago.defender(); // "Criando barreira mágica de proteção!"

// Mas pode trocar para estratégias físicas se necessário!
mago.mudarAtaque(new AtaqueComEspada());
mago.mudarDefesa(new DefesaComEscudo());
mago.atacar(); // Agora ataca com espada!
```

**Este exemplo mostra a flexibilidade do padrão Strategy**: Um Mago pode usar estratégias de Guerreiro, e vice-versa, sem precisar modificar nenhuma classe existente!

Para executar o exemplo completo:

```bash
npm run build
node dist/strategy/classes/mago.js
```

## 🎨 Vantagens do Padrão Strategy

1. **Flexibilidade**: Troque algoritmos em tempo de execução
2. **Extensibilidade**: Adicione novos comportamentos sem modificar código existente
3. **Manutenibilidade**: Cada estratégia está isolada em sua própria classe
4. **Testabilidade**: Fácil testar cada estratégia independentemente
5. **Elimina condicionais**: Não precisa de `if/else` ou `switch` para escolher algoritmos

## 🔄 Comparação: Com vs Sem Strategy

### ❌ Sem Strategy (Abordagem Ruim)

```typescript
class Personagem {
  tipo: string;

  atacar(): void {
    if (this.tipo === "guerreiro") {
      console.log("Ataque com espada");
    } else if (this.tipo === "mago") {
      console.log("Ataque com magia");
    } else if (this.tipo === "arqueiro") {
      console.log("Ataque com arco");
    }
    // ... mais condicionais
  }
}
```

**Problemas:**

- Difícil de manter
- Viola o princípio Open/Closed
- Código repetitivo
- Difícil de testar

### ✅ Com Strategy (Abordagem Boa)

```typescript
class Personagem {
  private ataque: AtaqueComportamento;

  atacar(): void {
    this.ataque.executar();
  }
}
```

**Benefícios:**

- Código limpo e extensível
- Fácil adicionar novos tipos de ataque
- Cada estratégia é testável isoladamente

## 🚀 Como Adicionar Novas Estratégias

Para adicionar um novo comportamento (ex: `AtaqueComArco`):

1. **Crie a classe de estratégia:**

```typescript
import { AtaqueComportamento } from "../../interfaces/ataque-compoetamento";

export class AtaqueComArco implements AtaqueComportamento {
  executar(): void {
    console.log("Ataque com arco e flecha");
  }
}
```

2. **Use a estratégia:**

```typescript
const arqueiro = new Personagem("Legolas");
arqueiro.mudarAtaque(new AtaqueComArco());
arqueiro.atacar(); // "Ataque com arco e flecha"
```

**Não precisa modificar nenhuma classe existente!** 🎉

## 📝 Quando Usar o Padrão Strategy

Use o padrão Strategy quando:

- ✅ Você tem várias formas de executar uma tarefa
- ✅ Você quer evitar condicionais complexas para escolher algoritmos
- ✅ Você quer poder trocar algoritmos em tempo de execução
- ✅ Você quer isolar a lógica de algoritmos do código que os usa

## 🔗 Relação com Outros Padrões

- **Strategy vs State**: Strategy troca algoritmos, State troca comportamentos baseados em estado interno
- **Strategy vs Template Method**: Strategy usa composição, Template Method usa herança
- **Strategy vs Bridge**: Strategy foca em algoritmos, Bridge foca em abstrações e implementações

## 📚 Referências

- Design Patterns: Elements of Reusable Object-Oriented Software (Gang of Four)
- Refactoring Guru: [Strategy Pattern](https://refactoring.guru/design-patterns/strategy)
