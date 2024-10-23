import { Personajes } from "./Personajes";

export class Hagrid extends Personajes {
    private fuerzaBruta: string;
    private escudoEnorme: string;

    constructor(nombre: string, ataque: number, defensa: number, fuerzaBruta: string, escudoEnorme: string) {
        super(nombre, ataque, defensa);
        this.fuerzaBruta = fuerzaBruta;
        this.escudoEnorme = escudoEnorme;
    }

    atacar(enemigo: Personajes): void {
        const daño = Math.max(this.getAtaque() - enemigo.getDefensa());
        enemigo.recibirDaño(daño);
        console.log(`${this.getNombre()} ataca con su fuerza bruta ${enemigo.getNombre()} y cuasa ${daño} puntos de daño`);
    }

    defender(): void {
        console.log(`${this.nombre} se defiende de su enemigo con su escudo enorme`);

    }

    habilidades(): void {
        console.log(`${this.nombre} usa su fuerza bruta desafiando a su rival`);

    }































}