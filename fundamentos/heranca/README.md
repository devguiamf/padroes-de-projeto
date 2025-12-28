# Herança (Inheritance)

## 📚 O que é Herança?

**Herança** é o mecanismo que permite uma classe (filha) herdar características e comportamentos de outra classe (pai). É como uma família: os filhos herdam características dos pais, mas também podem ter suas próprias características únicas.

## 🎯 Por que usar Herança?

- **Reutilização de código**: Evita repetir código comum
- **Organização**: Cria hierarquias lógicas de classes
- **Manutenção**: Mudanças na classe pai afetam todas as filhas
- **Extensibilidade**: Facilita adicionar novas funcionalidades

## 💡 Exemplo do Mundo Real

Imagine uma **hierarquia de veículos**:
- **Veículo** (pai) - tem características comuns: rodas, motor, velocidade
- **Carro** (filho) - herda de Veículo + tem características próprias: 4 portas
- **Moto** (filho) - herda de Veículo + tem características próprias: 2 rodas
- **Caminhão** (filho) - herda de Veículo + tem características próprias: carga

Todos são veículos, mas cada um tem suas particularidades!

## 🏗️ Herança em Programação

Em TypeScript, herança é implementada usando a palavra-chave `extends`:

```typescript
class ClassePai {
  // Propriedades e métodos comuns
}

class ClasseFilha extends ClassePai {
  // Herda tudo da classe pai
  // + pode adicionar suas próprias características
}
```

## 📖 Exemplos no Código

### Exemplo 1: Herança Simples

```typescript
// Classe Pai (Base)
class Pessoa {
  protected nome: string;
  protected idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar(): void {
    console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos`);
  }

  dormir(): void {
    console.log(`${this.nome} está dormindo...`);
  }
}

// Classe Filha - herda de Pessoa
class Estudante extends Pessoa {
  private matricula: string;

  constructor(nome: string, idade: number, matricula: string) {
    super(nome, idade); // Chama o construtor da classe pai
    this.matricula = matricula;
  }

  estudar(): void {
    console.log(`${this.nome} está estudando...`);
  }

  // Pode sobrescrever métodos da classe pai
  apresentar(): void {
    super.apresentar(); // Chama o método da classe pai
    console.log(`Minha matrícula é: ${this.matricula}`);
  }
}
```

### Exemplo 2: Hierarquia de Classes

```typescript
// Classe Base
class Animal {
  protected nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  comer(): void {
    console.log(`${this.nome} está comendo`);
  }

  dormir(): void {
    console.log(`${this.nome} está dormindo`);
  }
}

// Classe Filha 1
class Mamifero extends Animal {
  amamentar(): void {
    console.log(`${this.nome} está amamentando`);
  }
}

// Classe Filha 2
class Ave extends Animal {
  voar(): void {
    console.log(`${this.nome} está voando`);
  }
}

// Classe Neto (herda de Mamifero, que herda de Animal)
class Cachorro extends Mamifero {
  latir(): void {
    console.log(`${this.nome} está latindo: Au Au!`);
  }
}
```

## 🔑 Palavras-chave Importantes

### `extends`
Usado para indicar que uma classe herda de outra:
```typescript
class Filha extends Pai { }
```

### `super`
Usado para acessar métodos e propriedades da classe pai:
```typescript
super.metodoPai();        // Chama método da classe pai
super.propriedadePai;     // Acessa propriedade da classe pai
super();                  // Chama construtor da classe pai
```

### `protected`
Modificador de acesso que permite acesso na classe e nas classes filhas:
```typescript
protected nome: string; // Acessível na classe e nas filhas
```

## 📊 Níveis de Acesso

| Modificador | Classe | Filha | Externa |
|------------|--------|-------|---------|
| `private` | ✅ | ❌ | ❌ |
| `protected` | ✅ | ✅ | ❌ |
| `public` | ✅ | ✅ | ✅ |

## 🔄 Tipos de Herança

### 1. Herança Simples
Uma classe herda de apenas uma classe pai:
```typescript
class Filha extends Pai { }
```

### 2. Herança Multinível
Uma classe herda de outra que herda de outra:
```typescript
class Avo { }
class Pai extends Avo { }
class Filho extends Pai { }
```

### 3. Hierarquia
Várias classes herdam da mesma classe pai:
```typescript
class Animal { }
class Cachorro extends Animal { }
class Gato extends Animal { }
class Passaro extends Animal { }
```

## ✅ Vantagens da Herança

1. **Reutilização**: Código comum é escrito uma vez
2. **Organização**: Hierarquia clara e lógica
3. **Manutenção**: Mudanças na classe pai afetam todas as filhas
4. **Extensibilidade**: Fácil adicionar novas classes
5. **Polimorfismo**: Permite tratar objetos de forma uniforme

## ⚠️ Desvantagens e Cuidados

1. **Acoplamento**: Classes filhas ficam acopladas à classe pai
2. **Rigidez**: Mudanças na classe pai podem quebrar classes filhas
3. **Herança Profunda**: Muitos níveis dificultam manutenção
4. **Herança Múltipla**: TypeScript não suporta (mas pode usar interfaces)

## 🎓 Quando Usar Herança?

Use herança quando:

- ✅ Há uma relação "é um" (ex: Cachorro É UM Animal)
- ✅ Classes compartilham muito código comum
- ✅ Você quer criar uma hierarquia lógica
- ✅ Classes filhas são especializações da classe pai

**NÃO use herança quando:**

- ❌ A relação é "tem um" (use composição)
- ❌ Você só quer reutilizar código (use composição)
- ❌ A hierarquia não faz sentido lógico

## 🔍 Herança vs Composição

### Herança (É UM)
```typescript
class Cachorro extends Animal { } // Cachorro É UM Animal
```

### Composição (TEM UM)
```typescript
class Carro {
  private motor: Motor; // Carro TEM UM Motor
}
```

## 📝 Resumo

**Herança = Classes filhas herdam características e comportamentos da classe pai**

É como uma árvore genealógica: os filhos herdam características dos pais, mas também podem ter suas próprias características únicas!

