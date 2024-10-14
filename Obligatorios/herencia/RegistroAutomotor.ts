import { Autos } from "./autos";
import { Motos } from "./motos";
import { Camiones } from "./camiones";


export class RegistroAutomotor {
    private autos: Autos[] = [];
    private motos: Motos[] = [];
    private camiones: Camiones[] = [];

    darAltaAutos(autos: Autos): void {
        this.autos.push(autos);
    }

    darAltaMotos(motos: Motos): void {
        this.motos.push(motos);
    }

    darAltaCamiones(camiones: Camiones): void {
        this.camiones.push(camiones);
    }

    modificarAutos(patente: number, marca: string, modelo: number, color: string): void {
        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i].getPatente() === patente) {
                this.autos[i].modificarVehiculo(marca, modelo, color);
                console.log((`Auto con patente ${patente} modificado:(new ${marca}) (new ${modelo}) (new ${color})`));
                return;
            }

        }
        console.log("Auto no encontrado");

    }

    mostrarAutos(): Autos[] {
        if (this.autos.length == 0) {
            console.log("No hay auto disponible");
        }
        return this.autos;
    }


    modificarMotos(patente: number, marca: string, modelo: number, color: string): void {
        for (let i = 0; i < this.motos.length; i++) {
            if (this.motos[i].getPatente() === patente) {
                this.motos[i].modificarVehiculo(marca, modelo, color);
                console.log((`Moto con patente ${patente} modificado (new ${marca}) (new ${modelo}) (new ${color})`));
                return;
            }

        }
        console.log("Moto no encontrada");

    }

    mostrarMotos(): Motos[] {
        if (this.motos.length == 0) {
            console.log("No hay Moto disponible");
        }
        return this.motos;
    }

    modificarCamiones(patente: number, marca: string, modelo: number, color: string): void {
        for (let i = 0; i < this.camiones.length; i++) {
            if (this.camiones[i].getPatente() === patente) {
                this.camiones[i].modificarVehiculo(marca, modelo, color);
                console.log((`Camion con patente ${patente} modificado (new ${marca}) (new ${modelo}) (new ${color})`));
                return;
            }

        }
    }

    mostrarCamiones(): Camiones[]{
        if (this.camiones.length== 0){
            console.log("No hay camiones disponibles");
        }
        return this.camiones
    }
    
    darDeBajaAuto(patenteAuto: number): void {
        this.autos = this.autos.filter(auto => auto.getPatente() !== patenteAuto);
        console.log(`Auto con patente ${patenteAuto} eliminado.`);
    
    }

    darDeBajaMoto(patenteMoto: number): void{
        this.motos = this.motos.filter(moto => moto.getPatente() !== patenteMoto);
        console.log(`Moto con patente ${patenteMoto} eliminado.`)
    }
    
    darDeBajaCamion(patenteCamion: number): void{
        this.camiones = this.camiones.filter(camion => camion.getPatente() !== patenteCamion);
        console.log(`Moto con patente ${patenteCamion} eliminado.`)
    }




}




