import { Vehiculos } from "./Vehiculos";

export class Camiones extends Vehiculos{
    private puertas:number;

    constructor(patente:number, marca:string, modelo:number, color:string, puertas:number){
        super(patente,marca,modelo,color);
        this.puertas=puertas;
    }

    getPuertas():number{
        return this.puertas;
    }

    setPuertas(puertas:number){
        this.puertas=puertas;
    }

    modificarVehiculo(marca:string, modelo:number, color:string):void{
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setColor(color);
    }
}