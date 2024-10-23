"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voldemort = void 0;
var Personajes_1 = require("./Personajes");
var Voldemort = /** @class */ (function (_super) {
    __extends(Voldemort, _super);
    function Voldemort(nombre, ataque, defensa, hechizo, escudoOscuro) {
        var _this = _super.call(this, nombre, ataque, defensa) || this;
        _this.hechizo = hechizo;
        _this.escudoOscuro = escudoOscuro;
        return _this;
    }
    Voldemort.prototype.atacar = function (enemigo) {
        var daño = Math.max(this.getAtaque() - enemigo.getDefensa());
        enemigo.recibirDaño(daño);
        console.log("".concat(this.getNombre, " ataca a ").concat(enemigo.getNombre, " y causa ").concat(daño, " puntos de da\u00F1o"));
    };
    Voldemort.prototype.defender = function () {
        console.log("".concat(this.nombre, " se defiende de su enemigo"));
    };
    Voldemort.prototype.habilidades = function () {
        console.log("".concat(this.nombre, " usa su hechizo Adava Kevrada"));
    };
    Voldemort.prototype.getHechizo = function () {
        return this.hechizo;
    };
    Voldemort.prototype.getEscudoOscuro = function () {
        return this.escudoOscuro;
    };
    return Voldemort;
}(Personajes_1.Personajes));
exports.Voldemort = Voldemort;
