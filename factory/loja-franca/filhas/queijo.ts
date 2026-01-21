import { Pizza } from "../../classes/pai/pizza";


export class QueijoFrancana extends Pizza {
  nome: string = "Queijo Francana";
  massa: string = "Massa fina";
  molho: string = "Molho de tomate";
  coberturas: string[] = ["Queijo Mussarela", "Queijo Prato", "Queijo Parmesão", "Cebola"];

  constructor() { 
    super();
  }
}
