export abstract class Bebida {

    protected descricao: string = "Bebida Desconhecida";
    

    abstract getCost(): number;
    abstract getDescription(): string
}