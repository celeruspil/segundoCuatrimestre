import { Personajes } from "./Personajes";

export class Voldemort extends Personajes{
    private hechizo:string;
    private escudoOscuro:string; 
   public constructor(nombre:string, ataque:number, defensa:number, hechizo:string, escudoOscuro: string){
    super(nombre,ataque,defensa);
    this.hechizo=hechizo;
    this.escudoOscuro= escudoOscuro;
}
    atacar(enemigo: Personajes): void {
        const daño= Math.max(this.getAtaque() - enemigo.getDefensa())
        enemigo.recibirDaño(daño);
        console.log(`${this.getNombre()} ataca a ${enemigo.getNombre()} y causa ${daño} puntos de daño`);
        
    }

    defender(): void {
        console.log(`${this.nombre} se defiende de su enemigo con su escudo oscuro`);
        
    }

    habilidades(): void {
        console.log(`${this.nombre} usa su hechizo Adava Kevrada`);
        
    }
    getHechizo(){
        return this.hechizo;
    }

    getEscudoOscuro(){
        return this.escudoOscuro;
    }
















}