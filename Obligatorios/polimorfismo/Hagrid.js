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
exports.Hagrid = void 0;
var Personajes_1 = require("./Personajes");
var Hagrid = /** @class */ (function (_super) {
    __extends(Hagrid, _super);
    function Hagrid(nombre, ataque, defensa, fuerzaBruta, escudoEnorme) {
        var _this = _super.call(this, nombre, ataque, defensa) || this;
        _this.fuerzaBruta = fuerzaBruta;
        _this.escudoEnorme = escudoEnorme;
        return _this;
    }
    Hagrid.prototype.atacar = function (enemigo) {
        var daño = Math.max(this.getAtaque() - enemigo.getDefensa());
        enemigo.recibirDaño(daño);
        console.log("".concat(this.getNombre, " ataca ").concat(enemigo.getNombre, " y cuasa ").concat(daño, " puntos de da\u00F1o"));
    };
    Hagrid.prototype.defender = function () {
        console.log("".concat(this.nombre, " se defiende de su enemigo"));
    };
    Hagrid.prototype.habilidades = function () {
        console.log("".concat(this.nombre, " usa su fuerza bruta desafiando a su rival"));
    };
    return Hagrid;
}(Personajes_1.Personajes));
exports.Hagrid = Hagrid;
