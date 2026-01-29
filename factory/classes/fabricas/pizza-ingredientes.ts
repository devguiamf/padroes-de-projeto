import { LegumesAbstratos } from "./ingredientes/pai/legumes-abstratos";
import { MassaAbstrata } from "./ingredientes/pai/massa-abstrata";
import { MolhoAbstrata } from "./ingredientes/pai/molho-abstrato";
import { QueijoAbstrato } from "./ingredientes/pai/queijo-abstrato";

export interface PizzaIngredientesFabrica {
    criarMassa(): MassaAbstrata;
    criarMolho(): MolhoAbstrata;
    criarQueijo(): QueijoAbstrato;
    criarLegume(): LegumesAbstratos[];
}