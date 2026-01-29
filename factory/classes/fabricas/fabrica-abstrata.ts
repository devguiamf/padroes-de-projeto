import { PizzaAbstrata } from "./pizza-abstrata";

export abstract class FabricaPizzaAbstrata {
    
    constructor() {}

    // Agora com a ajuda da fabrica de pizzas, podemos criar uma pizza de qualquer tipo sem precisar modificar o codigo fonte.
    pedidoPizza(tipo: string): PizzaAbstrata {
        let pizza: PizzaAbstrata;
        
        pizza = this.criarPizza(tipo);

        if (!pizza) throw new Error("Tipo de pizza inválido");

        pizza.preparar();

        return pizza;
    }

    // a implementacao desse metodo e responsabilidade da classe filha, que ira criar a pizza de acordo com o tipo passado.
    abstract criarPizza(tipo: string): PizzaAbstrata;
}