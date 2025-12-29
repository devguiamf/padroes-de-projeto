import { Personagem } from "./classe-pai/personagem";

export class Guerreiro extends Personagem {
    constructor(nome: string) {
        super(nome);
        this.atacar();
        this.defender();
    }

    atacar(): void {
        console.log(`${this.nome} atacando`);
        super.atacar();
    }

    defender(): void {
        console.log(`${this.nome} defendendo`);
        super.defender();
    }
}

new Guerreiro("Guilherme");