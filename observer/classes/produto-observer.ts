import { Assunto } from "../interfaces/assunto";
import { Observador } from "../interfaces/observador";
import { LogProduto } from "./log-produto";
import { Produto } from "./produto";

export class ProdutoObserver implements Assunto<Produto> {
    private _observadores: Observador<Produto>[] = [];
    private _produto: Produto;
    
    constructor(produto: Produto){
        this._produto = produto;
    }

    adicionarObservador(observador: Observador<Produto>): void {
        this._observadores.push(observador);
    }

    removerObservador(observador: Observador<Produto>): void {
        this._observadores = this._observadores.filter(o => o !== observador);
    }

    notificar(value: Produto): void {
        this._observadores.forEach(observador => observador.atualizar(value));
    }
}

const produto = new Produto("Controle Remoto", 100);
const produtoObserver = new ProdutoObserver(produto);
const logProduto = new LogProduto();
produtoObserver.adicionarObservador(logProduto);
produtoObserver.notificar(produto);