import {Auto} from "./Auto";
import {Moto} from "./Moto";
import {Camion} from "./Camion";

export class RegistroAutomotor {
    private auto : Auto[];
    private moto : Moto[];
    private camion : Camion[];


    public constructor(){
        this.auto=[];
        this.moto=[];
        this.camion=[];

    }

    public setAgregarAuto(auto: Auto): void {
        this.auto.push(auto);
        console.log("Auto agregados");
    }
    public getObctenerAutos(): Auto[] {
        if (this.auto.length == 0) {
            console.log("no hay auto disponible");
        }

        return this.auto;
    }

    public darDeBajaAuto(auto: Auto): void {
        const index = this.auto.indexOf(auto);
        if (index !== -1) {
            this.auto.splice(index, 1);
            console.log("Auto dado de baja ");
        }
    }

    //---------------Camion-------------------------
    public setAgregarCamion(camion: Camion): void {
        this.camion.push(camion);
       console.log("vehiculos agregados");
    }

    public getObtenerCamion():Camion[] {
        if (this.camion.length == 0) {
            console.log("no hay auto disponible");
        }
        return this.camion;
    }

    public darDeBajaCamion(camion: Camion): void {
        const index = this.camion.indexOf(camion);
        if (index !== -1) {
            this.camion.splice(index, 1);
            console.log("camion dado de baja ");
        }
    }
    //--------------MOTO-----------------------
    public setAgregarMoto(motos: Moto): void {;
        this.moto.push(motos)
       console.log("Moto agregados");
    }
    public getObtenerMoto(): Moto[] {
        if (this.moto.length == 0) {
            console.log("no hay auto disponible");
        }
        return this.moto;
    }
    public darDeBajaMoto(motos: Moto): void {
        const index = this.moto.indexOf(motos);
        if (index !== -1) {
            this.moto.splice(index, 1);
            console.log("moto dado de baja");
        }
    }
}   
    
