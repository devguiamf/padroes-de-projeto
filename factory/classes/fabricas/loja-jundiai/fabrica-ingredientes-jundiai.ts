import { MassaFina } from "../ingredientes/massa-fina";
import { MolhoApimentado } from "../ingredientes/molho-apimentado";
import { QueijoDoisQueijos } from "../ingredientes/queijo-dois-queijos";
import { LegumesAbstratos } from "../ingredientes/pai/legumes-abstratos";
import { Cebola } from "../ingredientes/cebola";
import { Tomate } from "../ingredientes/tomate";
import { PizzaIngredientesFabrica } from "../pizza-ingredientes";
import { MolhoAbstrata } from "../ingredientes/pai/molho-abstrato";
import { MassaAbstrata } from "../ingredientes/pai/massa-abstrata";
import { QueijoAbstrato } from "../ingredientes/pai/queijo-abstrato";
import { Azeitonas } from "../ingredientes/azitona";

export class JundiaiIngredientesFabrica implements PizzaIngredientesFabrica {
    criarMassa(): MassaAbstrata {
        return new MassaFina();
    }
    criarMolho(): MolhoAbstrata {
        return new MolhoApimentado();
    }
    criarQueijo(): QueijoAbstrato {
        return new QueijoDoisQueijos();
    }
    criarLegume(): LegumesAbstratos[] {
        return [new Cebola(), new Tomate(), new Azeitonas()];
    }
}   