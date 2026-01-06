import { CondimentDecorator } from "../decorator/condiment-decorator";
import { Bebida } from "../pai/bebida";

export class Cafe extends CondimentDecorator {
 
    protected bebida: Bebida;

    constructor(bebida: Bebida) {
        super();
        this.bebida = bebida;
        this.descricao = "Café";
    }
    
    getCost(): number {
        return this.bebida.getCost() + 0.90;
    }

    getDescription(): string {
        return this.bebida.getDescription() + ", com café";
    }
}