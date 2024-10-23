"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personajes = void 0;
var Personajes = /** @class */ (function () {
    function Personajes(nombre, ataque, defensa) {
        this.nivel = 1;
        this.vida = 100;
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
    }
    Personajes.prototype.getNombre = function () {
        return this.nombre;
    };
    Personajes.prototype.getNivel = function () {
        return this.nivel;
    };
    Personajes.prototype.getVida = function () {
        return this.vida;
    };
    Personajes.prototype.getAtaque = function () {
        return this.ataque;
    };
    Personajes.prototype.getDefensa = function () {
        return this.defensa;
    };
    Personajes.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Personajes.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    Personajes.prototype.setVida = function (vidaReal) {
        this.vida = Math.max(vidaReal, 0);
    };
    Personajes.prototype.setAtaque = function (ataque) {
        this.ataque = ataque;
    };
    Personajes.prototype.setDefensa = function (defensa) {
        this.defensa = defensa;
    };
    Personajes.prototype.subirNivel = function () {
        this.nivel += 1;
        this.vida += 10;
        this.ataque += 5;
        this.defensa += 3;
    };
    Personajes.prototype.recibirDaño = function (daño) {
        var dañoReal = Math.max(daño - this.defensa, 0);
        this.vida = Math.max(this.vida - dañoReal, 0);
    };
    Personajes.prototype.estaVivo = function () {
        return this.vida > 0;
    };
    return Personajes;
}());
exports.Personajes = Personajes;
