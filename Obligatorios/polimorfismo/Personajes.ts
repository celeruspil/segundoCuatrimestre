export abstract class Personajes {
    protected nombre: string;
    private nivel = 1;
    private vida = 100;
    private ataque: number;
    private defensa: number;

    


    public constructor(nombre: string, ataque: number, defensa: number) {
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
    }

    abstract atacar(enemigo: Personajes): void;
    abstract defender(): void;
    abstract habilidades(): void;

    getNombre(): string {
        return this.nombre;
    }

    getAtaque(): number {
        return this.ataque;
    }

    getDefensa(): number {
        return this.defensa
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    setNivel(nivel: number): void {
        this.nivel = nivel;
    }

    setVida(vidaReal: number): void {
        this.vida = Math.max(vidaReal, 0);
    }

    setAtaque(ataque: number): void {
        this.ataque = ataque;
    }

    setDefensa(defensa: number): void {
        this.defensa = defensa;
    }

    subirNivel(): void {
        this.nivel += 1;
        this.vida += 10;
        this.ataque += 5;
        this.defensa += 3;

    }

    recibirDaño(daño: number) {
        const dañoReal = Math.max(daño - this.defensa, 0);
        this.vida = Math.max(this.vida - dañoReal, 0);

    }

    estaVivo(): boolean {
        return this.vida > 0;
    }
















































}