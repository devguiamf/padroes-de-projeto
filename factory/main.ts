import { FrancaLojaPizza } from "./loja-franca/franca-loja-pizza";

const pizzariaFranca = new FrancaLojaPizza();

// Teste: criar algumas pizzas
console.log("=== Pedindo pizza de queijo ===");
pizzariaFranca.pedidoPizza("queijo");

console.log("\n=== Pedindo pizza vegetariana ===");
pizzariaFranca.pedidoPizza("vegetariana");

console.log("\n=== Pedindo pizza de pepperoni ===");
pizzariaFranca.pedidoPizza("pepperoni");

