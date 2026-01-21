import { PepperoniFrancana } from './filhas/peperoni';
import { QueijoFrancana } from './filhas/queijo';
import { SistemaPizza } from "../classes/pai/sistema-abstrato";
import { Pizza } from "../classes/pai/pizza";
import { VegetarianaFrancana } from './filhas/vegetariana';

export class FrancaLojaPizza extends SistemaPizza {

    criarPizza(tipo: string): Pizza | null {
        switch (tipo) {
            case "queijo":
                return new QueijoFrancana();
            case "pepperoni":
                return new PepperoniFrancana();
            case "vegetariana":
                return new VegetarianaFrancana();
            default:
                return null;
        }
    }
}