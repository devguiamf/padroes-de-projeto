import { Bebida } from "../pai/bebida";

export abstract class CondimentDecorator extends Bebida {
    abstract getCost(): number;
}