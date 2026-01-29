import { LegumesAbstratos } from "../ingredientes/pai/legumes-abstratos";
import { MassaAbstrata } from "../ingredientes/pai/massa-abstrata";
import { MolhoAbstrata } from "../ingredientes/pai/molho-abstrato";
import { QueijoAbstrato } from "../ingredientes/pai/queijo-abstrato";
import { PizzaIngredientesFabrica } from "../pizza-ingredientes";
import { Azeitonas } from "../ingredientes/azitona";
import { Cebola } from "../ingredientes/cebola";
import { MassaFina } from "../ingredientes/massa-fina";
import { MolhoApimentado } from "../ingredientes/molho-apimentado";
import { QueijoDoisQueijos } from "../ingredientes/queijo-dois-queijos";
import { Tomate } from "../ingredientes/tomate";

export class RibeiraoIngredientesFabrica implements PizzaIngredientesFabrica {
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