"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HarryPotter_1 = require("./HarryPotter");
var Voldemort_1 = require("./Voldemort");
var Hagrid_1 = require("./Hagrid");
var voldemort = new Voldemort_1.Voldemort("Voldemort", 45, 45, "Adava Kevrada", "Escudo Oscuro");
var harryPotter = new HarryPotter_1.HarryPotter("Harry Potter", 50, 50, "Expelliarmus", "EscudoBrillante");
var hagrid = new Hagrid_1.Hagrid("Hagrid", 45, 48, "Fuerza Bruta", "Escudo Enorme");
console.log("Comienza el Combate");
voldemort.atacar(harryPotter);
harryPotter.defender();
hagrid.atacar(voldemort);
voldemort.defender();
