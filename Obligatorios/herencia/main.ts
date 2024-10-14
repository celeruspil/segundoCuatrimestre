import { Autos } from "./autos";
import { Motos } from "./motos";
import { Camiones } from "./camiones";
import { RegistroAutomotor} from "./registroAutomotor";

//Crear vehiculos

const auto1 = new Autos (78912,"Ford Ka",2024, "Blanco", 4);
const auto2 = new Autos (12987,"Gold Trend",2023,"Rojo",5);

const moto1= new Motos (1234, "Motomel",2021,"Azul", "original");
const moto2= new Motos (4568,"Tornado",2024,"Verde","original");

const camion1= new Camiones (78988, "Escania", 2020, "Blanco", 2);
const camion2=new Camiones (74196,"Mercedes Benz",2022, "Amarillo",2);


const registro= new RegistroAutomotor();
registro.darAltaAutos(auto1);
registro.darAltaAutos(auto2);

registro.darAltaMotos(moto1);
registro.darAltaMotos(moto2);

registro.darAltaCamiones(camion1);
registro.darAltaCamiones(camion2);


//Modifico vehiculos


console.log("Informacion de autos:", registro.mostrarAutos());
registro.modificarAutos(74532,"Renault Clio", 2024, "Negro");
console.log("Auto modificado:", registro.mostrarAutos());


console.log("Informacion de motos:", registro.mostrarMotos());
registro.modificarMotos(2487, "Honda titan", 2024, "Negra");
console.log(registro.mostrarMotos());


console.log("Informacion de Cammiones:", registro.mostrarCamiones());
registro.modificarCamiones(24872, "Mercedes Benz", 2024, "naranja");
console.log(registro.mostrarCamiones());




console.log("Auto sin dar de baja:", registro.mostrarAutos().map(auto => auto.getPatente()));
registro.darDeBajaAuto(12987);
console.log(registro.mostrarAutos());

console.log("Moto sin dar de baja:", registro.mostrarMotos().map(moto => moto.getPatente()));
registro.darDeBajaMoto(4568);
console.log(registro.mostrarMotos());

console.log("Camion sin dar de baja:", registro.mostrarCamiones().map(camion=> camion.getPatente()));
registro.darDeBajaCamion(78988);
console.log(registro.mostrarCamiones());











