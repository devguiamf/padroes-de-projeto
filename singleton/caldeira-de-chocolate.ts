/*
    A primeira vista nos caldeira de chocolate parece estar segura e controlada, porem com a atribuição de novas instancias a caldeira pode ficar fora de controle.
*/
export class CaldeiraDeChocolate {
    private vazio: boolean;
    private fervido: boolean;

    constructor() {
        this.vazio = true;
        this.fervido = false;
    }

    preencher(): void {
        if (this.estaVazia()) {
            this.vazio = false;
            this.fervido = false;
        }
    }

    ferver(): void {
        if (!this.estaVazia() || this.estaFervida()) {
            throw new Error("A caldeira não está vazia ou já está fervida");
        }
        this.fervido = true;
    }

    esvaziar(): void {
        if (this.estaVazia()) {
            throw new Error("A caldeira já está vazia");
        }
        this.fervido = false;
    }

    estaVazia(): boolean {
        return this.vazio;
    }

    estaFervida(): boolean {
        return this.fervido;
    }
}