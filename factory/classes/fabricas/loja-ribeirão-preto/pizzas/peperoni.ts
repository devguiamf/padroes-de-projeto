import { PizzaAbstrata } from "../../pizza-abstrata";
import { PizzaIngredientesFabrica } from "../../pizza-ingredientes";



export class PepperoniRibeiraoPreto extends PizzaAbstrata {
  nome: string = "Pepperoni Ribeirao Preto";
  fabricaIngredientes: PizzaIngredientesFabrica;

  constructor(fabricaIngredientes: PizzaIngredientesFabrica) { 
    super();
    this.fabricaIngredientes = fabricaIngredientes;
  }

  preparar(): void {
    console.log(`----   PREPARANDO A PIZZA ${this.nome}   ----`);
    this.massa = this.fabricaIngredientes.criarMassa();
    this.molho = this.fabricaIngredientes.criarMolho();
    this.queijo = this.fabricaIngredientes.criarQueijo();
    this.legumes = this.fabricaIngredientes.criarLegume();
  }
}
