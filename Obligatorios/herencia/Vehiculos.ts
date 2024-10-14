export class Vehiculos {
    private patente: number
    private marca: string;
    private modelo: number;
    private color: string;

    constructor(patente,marca, modelo, color){
        this.patente=patente;
        this.marca=marca;
        this.modelo=modelo;
        this.color=color;
    }
    getPatente():number{
        return this.patente;
    }

    getMarca():string{
        return this.marca;
    }

    getModelo():number{
        return this.modelo;
    }
    getColor():string{
        return this.color;
    }

    setPatente(patente:number):void{
        this.patente=patente
    }
    
    setMarca(marca:string):void{
        this.marca=marca;
    }

    setModelo(modelo:number):void{
        this.modelo=modelo;
    }

    setColor(color:string):void{
        this.color=color
    }
}