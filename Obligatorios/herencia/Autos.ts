import { Vehiculos } from "./Vehiculos";

export class Autos extends Vehiculos{
    private ruedas:number;

    constructor(patente:number, marca:string, modelo:number, color:string, ruedas:number){ 
    super(patente,marca, modelo, color);
    this.ruedas=ruedas;
}

getRuedas(): number {
    return this.ruedas;
}

setRuedas(ruedas:number):void{
    this.ruedas=ruedas;
}

modificarVehiculo(marca:string, modelo:number, color:string):void{
    this.setMarca(marca);
    this.setModelo(modelo);
    this.setColor(color);
}

}