export interface Observador<T = any> {
    atualizar(value: T): void;
}