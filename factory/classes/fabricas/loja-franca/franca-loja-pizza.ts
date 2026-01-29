import { PepperoniFrancana } from './pizzas/peperoni';
import { QueijoFrancana } from './pizzas/queijo';
import { FabricaPizzaAbstrata } from "../fabrica-abstrata";
import { PizzaAbstrata } from "../pizza-abstrata";
import { VegetarianaFrancana } from './pizzas/vegetariana';
import { PizzaIngredientesFabrica } from '../pizza-ingredientes';
import { FrancanaIngredientesFabrica } from './fabrica-ingredientes-franca';

export class FrancaLojaPizza extends FabricaPizzaAbstrata {
    fabricaIngredientes: PizzaIngredientesFabrica = new FrancanaIngredientesFabrica();          

    criarPizza(tipo: string): PizzaAbstrata {
        switch (tipo) {
            case "queijo":
                return new QueijoFrancana(this.fabricaIngredientes);
            case "pepperoni":
                return new PepperoniFrancana(this.fabricaIngredientes);
            case "vegetariana":
                return new VegetarianaFrancana(this.fabricaIngredientes);
            default:
                throw new Error("Tipo de pizza inválido");
        }
    }
}