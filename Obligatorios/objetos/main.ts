import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";
import { RegistroAutomotor } from "./RegistroAutomotor";

const registro = new RegistroAutomotor();

//CREO AUTOS
const auto1 = new Auto(2015,"Golf", "Bordo Pasion");
const auto2 = new Auto (2024, "Ford Ka","Negro");

//CREO CAMIONES
const camion1= new Camion(2018, "Escania", "Rojo");
const camion2= new Camion (2020, "Mercedes benz", "Marron");

//CREO MOTOS

const moto1 = new Moto (2022, "Motomel s2", "Azul");
const moto2= new Moto (2023, "Tornado", "Verde");

//Agregue vehiculos
registro.setAgregarAuto(auto1);
registro.setAgregarAuto(auto2);
registro.setAgregarCamion(camion1);
registro.setAgregarCamion(camion2);
registro.setAgregarMoto(moto1);
registro.setAgregarMoto(moto2);

//Doy de baja vehiculos
registro.darDeBajaCamion(camion1);
registro.darDeBajaMoto(moto2);
//Modifico color del auto
auto2.getColorAuto("Blanco");


console.log(registro.getObtenerMoto());
console.log(registro.getObtenerCamion());
console.log(registro.getObctenerAutos());