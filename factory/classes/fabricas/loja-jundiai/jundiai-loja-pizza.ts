import { PepperoniJundiai } from './pizzas/peperoni';
import { QueijoJundiai } from './pizzas/queijo';
import { FabricaPizzaAbstrata } from "../fabrica-abstrata";
import { PizzaAbstrata } from "../pizza-abstrata";
import { VegetarianaJundiai } from './pizzas/vegetariana';
import { PizzaIngredientesFabrica } from '../pizza-ingredientes';
import { JundiaiIngredientesFabrica } from './fabrica-ingredientes-jundiai';

export class JundiaiLojaPizza extends FabricaPizzaAbstrata {
    fabricaIngredientes: PizzaIngredientesFabrica = new JundiaiIngredientesFabrica();
    
    criarPizza(tipo: string): PizzaAbstrata {
        switch (tipo) {
            case "queijo":
                return new QueijoJundiai(this.fabricaIngredientes);
            case "pepperoni":
                return new PepperoniJundiai(this.fabricaIngredientes);
            case "vegetariana":
                return new VegetarianaJundiai(this.fabricaIngredientes);
            default:
                throw new Error("Tipo de pizza inválido");
        }
    }
}