export abstract class Pizza {
    nome: string;
    massa: string;
    molho: string;
    coberturas: string[];
    

    preparar(): void {
        this.assar();
        console.log(`Adicionando o molho: ${this.molho}`);
        console.log(`Adicionando as coberturas: ${this.coberturas.join(", ")}`);
        this.cortar();
        this.empacotar();
    }

    assar(): void {
        console.log(`Assando a pizza ${this.nome}`);
    }

    cortar(): void {
        console.log("Cortando a pizza");
    }

    empacotar(): void {
        console.log("Empacotando a pizza");
    }
}