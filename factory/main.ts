import { FabricaPizzaAbstrata } from "./classes/fabricas/fabrica-abstrata";
import { FrancaLojaPizza } from "./classes/fabricas/loja-franca/franca-loja-pizza";
import { JundiaiLojaPizza } from "./classes/fabricas/loja-jundiai/jundiai-loja-pizza";
import { RibeiraoPretoLojaPizza } from "./classes/fabricas/loja-ribeirão-preto/ribeirao-preto-loja-pizza";

class Main {

    private readonly pizzariaFranca: FabricaPizzaAbstrata;
    private readonly pizzariaJundiai: FabricaPizzaAbstrata;
    private readonly pizzariaRibeiraoPreto: FabricaPizzaAbstrata;

    constructor() {
        this.pizzariaFranca = new FrancaLojaPizza();
        this.pizzariaJundiai = new JundiaiLojaPizza();
        this.pizzariaRibeiraoPreto = new RibeiraoPretoLojaPizza();
    }

    public pedirPizzaFranca(tipo: string){
        this.pizzariaFranca.pedidoPizza(tipo);
    }

    public pedirPizzaJundiai(tipo: string){
        this.pizzariaJundiai.pedidoPizza(tipo);
    }

    public pedirPizzaRibeiraoPreto(tipo: string){
        this.pizzariaRibeiraoPreto.pedidoPizza(tipo);
    }
}

const main = new Main();

main.pedirPizzaFranca("queijo");
main.pedirPizzaJundiai("vegetariana");
main.pedirPizzaRibeiraoPreto("pepperoni");
