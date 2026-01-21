import { Pizza } from "./pizza";

export abstract class SistemaPizza {
    
    constructor() {}

    // Agora com a ajuda da fabrica de pizzas, podemos criar uma pizza de qualquer tipo sem precisar modificar o codigo fonte.
    pedidoPizza(tipo: string): Pizza {
        let pizza: Pizza | null = null;
        
        pizza = this.criarPizza(tipo);

        if (!pizza) throw new Error("Tipo de pizza inválido");

        pizza.preparar();
        pizza.assar();
        pizza.cortar(); 
        pizza.empacotar();

        return pizza;
    }

    abstract criarPizza(tipo: string): Pizza | null;
}