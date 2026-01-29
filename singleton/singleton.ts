/**
 * Singleton é um padrão de projeto que garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global para ela.
 */

export class Singleton {
    private static instance: Singleton;

    private constructor() {
        // inicialização da instância
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

// Exemplo de uso
const singleton = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

if (singleton === singleton2) {
    console.log("singleton e singleton2 são a mesma instância");
} else {
    console.log("singleton e singleton2 são instâncias diferentes");
}

