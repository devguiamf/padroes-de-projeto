import { CafeTorradoEscuro } from "./pai/filhas/cafe-torrado-escuro";
import { Cafe } from "./condiments/cafe";
import { CremeBranco } from "./condiments/creme-branco";
import { Leite } from "./condiments/leite";
import { Soja } from "./condiments/soja";

export class SistemaCafe {
    constructor() {
        // fazer cafe sem decorators
        console.log("Fazendo cafe sem decorators");
        this.fazerCafeSemDecorators();
        console.log("--------------------------------\n");
        // fazer cafe com decorators
        console.log("Fazendo cafe com decorators");
        this.fazerCafeComDecorators();
        console.log("--------------------------------");
    }

    fazerCafeSemDecorators(): void {
        const cafe = new CafeTorradoEscuro();
        console.log(`${cafe.getDescription()} R$: ${cafe.getCost()}`);
    }

    fazerCafeComDecorators(): void {
        let cafe = new CafeTorradoEscuro();
        cafe = new Cafe(cafe);
        cafe = new Leite(cafe);
        cafe = new Soja(cafe);
        cafe = new CremeBranco(cafe);
        console.log(`${cafe.getDescription()} R$: ${cafe.getCost()}`);
    }
}

const sistemaCafe = new SistemaCafe();