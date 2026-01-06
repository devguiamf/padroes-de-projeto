import { Pepperoni } from "./classes/peperoni";
import { Pizza } from "./classes/pizza";
import { Queijo } from "./classes/queijo";
import { Vegetariana } from "./classes/vegetariana";


// Codigo altamente acoplado a implementação, dificil de manter e extender. Esta ferindo o principio do aberto/fechado.
// Se precisarmos adicionar um novo tipo de pizza, precisamos modificar o codigo fonte.
export function pedidoPizza(tipo: string): Pizza {
    let pizza: Pizza;
    
    switch (tipo) {
        case "queijo":
            pizza = new Queijo();
            break
        case "pepperoni":
            pizza = new Pepperoni();
            break;
        case "vegetariana":
            pizza = new Vegetariana();
            break;
        default:
            throw new Error("Tipo de pizza inválido");
    }

    pizza.preparar();
    pizza.assar();
    pizza.cortar();
    pizza.empacotar();

    return pizza;
}