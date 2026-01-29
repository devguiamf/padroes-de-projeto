import { PepperoniRibeiraoPreto } from './pizzas/peperoni';
import { QueijoRibeiraoPreto } from './pizzas/queijo';
import { FabricaPizzaAbstrata } from "../fabrica-abstrata";
import { PizzaAbstrata } from "../pizza-abstrata";
import { VegetarianaRibeiraoPreto } from './pizzas/vegetariana';
import { PizzaIngredientesFabrica } from '../pizza-ingredientes';
import { RibeiraoIngredientesFabrica } from './ribeirao-ingreditentes-fabrica';

export class RibeiraoPretoLojaPizza extends FabricaPizzaAbstrata {
    fabricaIngredientes: PizzaIngredientesFabrica = new RibeiraoIngredientesFabrica();

    criarPizza(tipo: string): PizzaAbstrata {
        switch (tipo) {
            case "queijo":
                return new QueijoRibeiraoPreto(this.fabricaIngredientes);
            case "pepperoni":
                return new PepperoniRibeiraoPreto(this.fabricaIngredientes);
            case "vegetariana":
                return new VegetarianaRibeiraoPreto(this.fabricaIngredientes);
            default:
                throw new Error("Tipo de pizza inválido");
        }
    }
}