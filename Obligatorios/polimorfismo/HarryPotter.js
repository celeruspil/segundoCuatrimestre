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
exports.HarryPotter = void 0;
var Personajes_1 = require("./Personajes");
var HarryPotter = /** @class */ (function (_super) {
    __extends(HarryPotter, _super);
    function HarryPotter(nombre, ataque, defensa, expelliarmus, escudoBrillante) {
        var _this = _super.call(this, nombre, ataque, defensa) || this;
        _this.expelliarmus = expelliarmus;
        _this.escudoBrillante = escudoBrillante;
        return _this;
    }
    HarryPotter.prototype.atacar = function (enemigo) {
        var daño = (Math.max(this.getAtaque() - enemigo.getDefensa()));
        enemigo.recibirDaño(daño);
        console.log("".concat(this.getNombre, " ataca ").concat(enemigo.getNombre, " y cuasa ").concat(daño, " puntos de da\u00F1o"));
    };
    HarryPotter.prototype.defender = function () {
        console.log("".concat(this.nombre, " se defiende de su enemigo"));
    };
    HarryPotter.prototype.habilidades = function () {
        console.log("".concat(this.nombre, " usa su Expelliarmus desafiando a su rival"));
    };
    HarryPotter.prototype.getExpelliarmus = function () {
        return this.expelliarmus;
    };
    HarryPotter.prototype.getEscudoBrillante = function () {
        return this.escudoBrillante;
    };
    return HarryPotter;
}(Personajes_1.Personajes));
exports.HarryPotter = HarryPotter;
