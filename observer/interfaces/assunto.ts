import { Observador } from "./observador";

export interface Assunto<T = any> {
    adicionarObservador(observador: Observador<T>): void;
    removerObservador(observador: Observador<T>): void;
    notificar(value: T): void;
}