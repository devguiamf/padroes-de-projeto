import { Pizza } from "../../classes/pai/pizza";


export class PepperoniFrancana extends Pizza {
  nome: string = "Pepperoni Francana";
  massa: string = "Massa fina";
  molho: string = "Molho de tomate";
  coberturas: string[] = ["Pepperoni", "Queijo", "Cebola"];

  constructor() { 
    super();
  }
}
