import { LegumesAbstratos } from "./ingredientes/pai/legumes-abstratos";
import { MassaAbstrata } from "./ingredientes/pai/massa-abstrata";
import { MolhoAbstrata } from "./ingredientes/pai/molho-abstrato";
import { QueijoAbstrato } from "./ingredientes/pai/queijo-abstrato";

export abstract class PizzaAbstrata {
    nome: string;
    massa: MassaAbstrata;
    molho: MolhoAbstrata;
    queijo: QueijoAbstrato;
    legumes: LegumesAbstratos[];
    

    abstract preparar(): void

    assar(): void {
        console.log(`----   ASSANDO A PIZZA ${this.nome}   ----`);
    }

    cortar(): void {
        console.log(`----   CORTANDO A PIZZA ${this.nome}   ----`);
    }
    
    empacotar(): void {
        console.log(`----   EMPACOTANDO A PIZZA ${this.nome}   ----`);
    }
}