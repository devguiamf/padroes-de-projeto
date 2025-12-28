# Fundamentos da Programação Orientada a Objetos (POO)

Este diretório contém explicações e exemplos práticos dos **4 pilares fundamentais** da Programação Orientada a Objetos.

## 📚 Os 4 Pilares da POO

### 1. 🔷 [Abstração](./abstracao/README.md)
**Esconder detalhes complexos e mostrar apenas o essencial**

- Classe abstrata vs Interface
- Métodos abstratos
- Exemplos práticos com animais e veículos

### 2. 🔗 [Herança](./heranca/README.md)
**Classes filhas herdam características da classe pai**

- Herança simples e multinível
- Palavra-chave `extends` e `super`
- Hierarquias de classes

### 3. 🔒 [Encapsulamento](./encapsulamento/README.md)
**Proteger dados e controlar acesso através de uma interface**

- Modificadores de acesso (`private`, `protected`, `public`)
- Getters e Setters
- Validação de dados

### 4. 🎭 [Polimorfismo](./polimorfismo/README.md)
**Mesma interface, comportamentos diferentes**

- Polimorfismo com herança
- Polimorfismo com interfaces
- Ligação tardia (late binding)

## 🗂️ Estrutura do Diretório

```
fundamentos/
├── README.md (este arquivo)
├── abstracao/
│   ├── README.md
│   └── exemplos/
│       ├── animal.ts
│       └── veiculo.ts
├── heranca/
│   ├── README.md
│   └── exemplos/
│       ├── pessoa.ts
│       └── animal.ts
├── encapsulamento/
│   ├── README.md
│   └── exemplos/
│       ├── conta-bancaria.ts
│       └── pessoa.ts
└── polimorfismo/
    ├── README.md
    └── exemplos/
        ├── animal.ts
        └── pagamento.ts
```

## 🚀 Como Usar

### Compilar os Exemplos

```bash
# Compilar todos os exemplos
npm run build

# Executar um exemplo específico
node dist/fundamentos/abstracao/exemplos/animal.js
node dist/fundamentos/heranca/exemplos/pessoa.js
node dist/fundamentos/encapsulamento/exemplos/conta-bancaria.js
node dist/fundamentos/polimorfismo/exemplos/animal.js
```

### Modo Watch (Desenvolvimento)

```bash
# Compilar e observar mudanças
npm run dev
```

## 📖 Como Estudar

1. **Comece pela Abstração** - Entenda como esconder complexidade
2. **Continue com Herança** - Aprenda a reutilizar código
3. **Estude Encapsulamento** - Proteja seus dados
4. **Finalize com Polimorfismo** - Trate diferentes tipos uniformemente

## 🔗 Relação entre os Conceitos

Os 4 pilares trabalham juntos:

- **Abstração** define interfaces comuns
- **Herança** reutiliza código através de hierarquias
- **Encapsulamento** protege dados e implementações
- **Polimorfismo** permite tratar diferentes tipos uniformemente

### Exemplo Prático Combinado

```typescript
// ABSTRAÇÃO: Interface comum
interface Animal {
  fazerSom(): void;
}

// ENCAPSULAMENTO: Dados protegidos
class Cachorro implements Animal {
  private nome: string; // Privado
  
  constructor(nome: string) {
    this.nome = nome;
  }
  
  fazerSom(): void {
    console.log(`${this.nome} faz: Au Au!`);
  }
}

// HERANÇA: Classe filha herda de Animal
class AnimalBase {
  protected nome: string;
}

class Gato extends AnimalBase implements Animal {
  fazerSom(): void {
    console.log(`${this.nome} faz: Miau!`);
  }
}

// POLIMORFISMO: Tratar diferentes tipos uniformemente
function fazerAnimalFalar(animal: Animal): void {
  animal.fazerSom(); // Cada um se comporta diferente
}
```

## ✅ Objetivos de Aprendizado

Ao finalizar o estudo destes fundamentos, você deve ser capaz de:

- ✅ Entender quando e como usar cada pilar
- ✅ Identificar problemas que cada conceito resolve
- ✅ Aplicar os conceitos em projetos reais
- ✅ Reconhecer quando NÃO usar cada conceito
- ✅ Combinar os conceitos de forma eficiente

## 📚 Recursos Adicionais

- [TypeScript Handbook - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [MDN - Object-Oriented Programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)
- [Refactoring Guru - OOP Concepts](https://refactoring.guru/design-patterns)

## 🎯 Próximos Passos

Depois de dominar os fundamentos, explore:

- **Padrões de Projeto** (Design Patterns)
- **SOLID Principles**
- **Clean Code**
- **Arquitetura de Software**

---

**Bons estudos! 🚀**

