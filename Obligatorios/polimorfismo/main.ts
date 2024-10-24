import { HarryPotter } from "./HarryPotter";
import { Voldemort } from "./Voldemort";
import { Hagrid } from "./Hagrid";
import { Personajes } from "./Personajes";

const voldemort: Personajes = new Voldemort("Voldemort", 45,48,"Adava Kevrada","Escudo Oscuro");
const harryPotter: Personajes = new HarryPotter ("Harry Potter", 50,50,"Expelliarmus","EscudoBrillante");
const hagrid: Personajes = new Hagrid ("Hagrid",35,40,"Fuerza Bruta","Escudo Enorme");

console.log("Comienza el Combate");

voldemort.atacar(harryPotter);
harryPotter.defender();
hagrid.atacar(voldemort);
voldemort.defender()




