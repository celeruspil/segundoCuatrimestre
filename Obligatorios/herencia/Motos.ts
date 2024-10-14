import { Vehiculos } from "./Vehiculos";

export class Motos extends Vehiculos{
    private escape: string

    constructor(patente:number,marca:string, modelo:number, color:string, escape: string){
        super(patente,marca,modelo,color);
        this.escape=escape;
    }

    getEscape():string{
        return this.escape;
    }

    setEscape(escape:string):void{
        this.escape=escape
    }

    modificarVehiculo(marca:string, modelo:number, color:string):void{
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setColor(color);
    }
}