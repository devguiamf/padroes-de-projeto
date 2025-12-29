import { Observador } from "../interfaces/observador";
import { Produto } from "./produto";

export class LogProduto implements Observador<Produto> {
    atualizar(value: Produto): void {
        console.log(`Produto ${value.nome} atualizado: ${value.preco}`);
    }
}