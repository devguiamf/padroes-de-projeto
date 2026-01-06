import { CondimentDecorator } from "../decorator/condiment-decorator";
import { Bebida } from "../pai/bebida";

export class Soja extends CondimentDecorator {
 
    protected bebida: Bebida;

    constructor(bebida: Bebida) {
        super();
        this.bebida = bebida;
        this.descricao = "Soja";
    }
    
    getCost(): number {
        return this.bebida.getCost() + 0.80;
    }

    getDescription(): string {
        return this.bebida.getDescription() + ", com soja";
    }
}