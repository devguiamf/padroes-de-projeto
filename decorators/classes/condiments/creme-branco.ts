import { CondimentDecorator } from "../decorator/condiment-decorator";
import { Bebida } from "../pai/bebida";

export class CremeBranco extends CondimentDecorator {
    protected bebida: Bebida;

    constructor(bebida: Bebida) {
        super();
        this.bebida = bebida;
        this.descricao = "Creme branco";
    }
    
    getCost(): number {
        return this.bebida.getCost() + 0.10;
    }

    getDescription(): string {
        return this.bebida.getDescription() + ", com creme branco";
    }
}