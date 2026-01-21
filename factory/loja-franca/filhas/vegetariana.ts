import { Pizza } from "../../classes/pai/pizza";


export class VegetarianaFrancana extends Pizza {
  nome: string = "Vegetariana Francana";
  massa: string = "Massa fina";
  molho: string = "Molho de tomate";
  coberturas: string[] = ["Vegetariana", "Azeitonas", "Cebola", "Tomate", "Manjericão"];

  constructor() { 
    super();
  }
}
