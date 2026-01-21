import { Pepperoni } from "../filhas/peperoni";
import { Queijo } from "../filhas/queijo";
import { Vegetariana } from "../filhas/vegetariana";
import { Pizza } from "../pai/pizza";

export class FabricaPizzaSimples {
    public criarPizza(tipo: string): Pizza | null {
        switch (tipo) {
            case "queijo":
                return new Queijo();
            case "pepperoni":
                return new Pepperoni();
            case "vegetariana":
                return new Vegetariana();
            default:
                return null;
        }
    }

}