import { CondimentDecorator } from "../decorator/condiment-decorator";
import { Bebida } from "../pai/bebida";

export class Leite extends CondimentDecorator {
 
    protected bebida: Bebida;

    constructor(bebida: Bebida) {
        super();
        this.bebida = bebida;
    }
    
    getCost(): number {
        return this.bebida.getCost() + 0.50;
    }

    getDescription(): string {
        return this.bebida.getDescription() + ", com leite";
    }
}