import { Personajes } from "./Personajes";

export class HarryPotter extends Personajes{
private expelliarmus:string;
private escudoBrillante:string;
constructor(nombre:string, ataque:number, defensa:number, expelliarmus:string, escudoBrillante:string){
    super(nombre,ataque,defensa);
   this.expelliarmus= expelliarmus;
   this.escudoBrillante=escudoBrillante;
}

atacar(enemigo: Personajes): void {
    const daño = Math.max(this.getAtaque()- enemigo.getDefensa(), 0);
   enemigo.recibirDaño(daño);
    console.log(`${this.nombre } ataca con Expelliarmus a ${enemigo.getNombre()} y cuasa ${daño} puntos de daño`);
    
}

defender(): void {
    console.log(`${this.nombre} se defiende de su enemigo con su Escudo Brillante`);
    
}

habilidades(): void {
    console.log(`${this.nombre} usa su Expelliarmus desafiando a su rival`);

}

getExpelliarmus(){
    return this.expelliarmus;
}

getEscudoBrillante(){
    return this.escudoBrillante;
}





























}