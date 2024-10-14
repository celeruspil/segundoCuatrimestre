export class Moto {
    private modelo:number;
    private marca:string;
    private color: string;

    public constructor (modelo:number, marca:string, color:string){
        this.modelo=modelo;
        this.marca=marca;
        this.color=color;
    }
 //Comienzo de getters
    getModelo():number{
        return this.modelo
    }

    getMarca():string{
        return this.marca
    }
    
    getColor():string{
        return this.color
    }
 //Comienzo de setters , void porque no retorna nada
    setModelo(modelo:number): void{
        this.modelo=modelo
    }

    setMarca(marca:string):void {
        this.marca=marca
    }

    setColor (color:string):void{
        this.color=color
    }
}