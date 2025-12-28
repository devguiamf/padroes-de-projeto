# Encapsulamento (Encapsulation)

## 📚 O que é Encapsulamento?

**Encapsulamento** é o princípio de esconder detalhes internos de uma classe e expor apenas o que é necessário através de uma interface controlada. É como uma cápsula de remédio: você não vê o que tem dentro, mas sabe como usar (engolir a cápsula).

## 🎯 Por que usar Encapsulamento?

- **Proteção de dados**: Previne acesso indevido e modificações incorretas
- **Controle de acesso**: Define quem pode ver e modificar o quê
- **Manutenção**: Facilita mudanças internas sem afetar código externo
- **Validação**: Permite validar dados antes de armazená-los
- **Abstração**: Esconde complexidade interna

## 💡 Exemplo do Mundo Real

Imagine um **cofre bancário**:
- Você **NÃO pode** acessar o dinheiro diretamente
- Você **DEVE** usar o sistema do banco (interface pública)
- O banco **valida** suas transações antes de executar
- O banco **protege** o dinheiro de acessos indevidos

Isso é encapsulamento! Os dados (dinheiro) estão protegidos, e você só pode acessá-los através de métodos controlados.

## 🏗️ Encapsulamento em Programação

Em TypeScript, encapsulamento é implementado através de:

1. **Modificadores de Acesso**: `private`, `protected`, `public`
2. **Getters e Setters**: Métodos para acessar e modificar propriedades
3. **Validação**: Verificar dados antes de armazenar

## 📖 Modificadores de Acesso

### `private`
Acessível **apenas dentro da própria classe**:
```typescript
class Conta {
  private saldo: number; // Só a classe Conta pode acessar
}
```

### `protected`
Acessível na **classe e nas classes filhas**:
```typescript
class Animal {
  protected nome: string; // Classe Animal e suas filhas podem acessar
}
```

### `public`
Acessível **de qualquer lugar** (padrão):
```typescript
class Pessoa {
  public nome: string; // Qualquer um pode acessar
}
```

## 📊 Tabela de Acesso

| Modificador | Classe | Filha | Externa |
|------------|--------|-------|---------|
| `private` | ✅ | ❌ | ❌ |
| `protected` | ✅ | ✅ | ❌ |
| `public` | ✅ | ✅ | ✅ |

## 📖 Exemplos no Código

### Exemplo 1: Conta Bancária (Básico)

```typescript
class ContaBancaria {
  private saldo: number; // Privado - não pode ser acessado diretamente
  private numeroConta: string;

  constructor(numeroConta: string, saldoInicial: number = 0) {
    this.numeroConta = numeroConta;
    this.saldo = saldoInicial;
  }

  // Método público para depositar (com validação)
  depositar(valor: number): boolean {
    if (valor > 0) {
      this.saldo += valor;
      return true;
    }
    return false;
  }

  // Método público para sacar (com validação)
  sacar(valor: number): boolean {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  // Getter público para consultar saldo
  obterSaldo(): number {
    return this.saldo;
  }

  // Getter público para consultar número da conta
  obterNumeroConta(): string {
    return this.numeroConta;
  }
}
```

### Exemplo 2: Usando Getters e Setters

```typescript
class Pessoa {
  private _idade: number; // Convenção: propriedade privada com _
  private _nome: string;

  constructor(nome: string, idade: number) {
    this._nome = nome;
    this.idade = idade; // Usa o setter para validar
  }

  // Getter - permite ler o valor
  get nome(): string {
    return this._nome;
  }

  // Setter - permite modificar com validação
  set nome(novoNome: string) {
    if (novoNome.length >= 2) {
      this._nome = novoNome;
    } else {
      throw new Error("Nome deve ter pelo menos 2 caracteres");
    }
  }

  // Getter
  get idade(): number {
    return this._idade;
  }

  // Setter com validação
  set idade(novaIdade: number) {
    if (novaIdade >= 0 && novaIdade <= 150) {
      this._idade = novaIdade;
    } else {
      throw new Error("Idade deve estar entre 0 e 150 anos");
    }
  }
}
```

### Exemplo 3: Encapsulamento com Métodos Privados

```typescript
class Calculadora {
  private historico: number[] = [];

  // Método público
  somar(a: number, b: number): number {
    const resultado = this.calcular(a, b, (x, y) => x + y);
    this.registrarNoHistorico(resultado);
    return resultado;
  }

  // Método público
  multiplicar(a: number, b: number): number {
    const resultado = this.calcular(a, b, (x, y) => x * y);
    this.registrarNoHistorico(resultado);
    return resultado;
  }

  // Método privado - só usado internamente
  private calcular(a: number, b: number, operacao: (x: number, y: number) => number): number {
    return operacao(a, b);
  }

  // Método privado - só usado internamente
  private registrarNoHistorico(valor: number): void {
    this.historico.push(valor);
  }

  // Método público para acessar histórico
  obterHistorico(): number[] {
    return [...this.historico]; // Retorna cópia (proteção adicional)
  }
}
```

## 🔒 Níveis de Encapsulamento

### 1. Encapsulamento Fraco (Ruim)
```typescript
class Pessoa {
  nome: string;        // Público - qualquer um pode modificar
  idade: number;       // Público - qualquer um pode modificar
  salario: number;     // Público - qualquer um pode ver/modificar
}
```

**Problemas:**
- Dados podem ser modificados incorretamente
- Sem validação
- Sem controle

### 2. Encapsulamento Forte (Bom)
```typescript
class Pessoa {
  private _nome: string;
  private _idade: number;
  private _salario: number;

  get nome(): string { return this._nome; }
  set nome(valor: string) { 
    if (valor.length >= 2) this._nome = valor; 
  }

  get idade(): number { return this._idade; }
  set idade(valor: number) { 
    if (valor >= 0) this._idade = valor; 
  }

  get salario(): number { return this._salario; }
  // Salário só pode ser modificado através de método específico
  aumentarSalario(percentual: number): void {
    if (percentual > 0) {
      this._salario *= (1 + percentual / 100);
    }
  }
}
```

**Benefícios:**
- Dados protegidos
- Validação automática
- Controle total sobre modificações

## ✅ Vantagens do Encapsulamento

1. **Segurança**: Protege dados de acesso indevido
2. **Validação**: Garante que dados sempre estejam corretos
3. **Manutenção**: Facilita mudanças internas
4. **Flexibilidade**: Pode mudar implementação sem afetar código externo
5. **Debugging**: Mais fácil encontrar problemas (tudo passa por métodos controlados)

## 🎓 Quando Usar Cada Modificador?

### Use `private` quando:
- ✅ A propriedade/método é apenas para uso interno
- ✅ Você não quer que classes filhas acessem
- ✅ Você quer esconder detalhes de implementação

### Use `protected` quando:
- ✅ A propriedade/método será usado por classes filhas
- ✅ Você quer manter encapsulamento, mas permitir herança

### Use `public` quando:
- ✅ A propriedade/método faz parte da interface pública
- ✅ Outras classes precisam acessar diretamente

## 🔍 Boas Práticas

1. **Sempre use `private` por padrão**: Só torne público o que realmente precisa ser
2. **Use getters/setters**: Para propriedades que precisam de validação
3. **Valide dados**: Sempre valide antes de armazenar
4. **Documente a interface pública**: Deixe claro o que pode ser usado
5. **Mantenha métodos privados pequenos**: Facilita manutenção

## 📝 Resumo

**Encapsulamento = Esconder detalhes internos e expor apenas o necessário**

É como uma caixa preta: você sabe o que entra (entrada) e o que sai (saída), mas não precisa saber como funciona por dentro!

