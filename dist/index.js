"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger(category) {
        this.category = category ? category : null;
    }
    Logger.prototype.log = function (level, message) {
        var parameters = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            parameters[_i - 2] = arguments[_i];
        }
        if (JSLOGGER) {
            JSLOGGER.apply(void 0, [this.category, level, message].concat(parameters));
        }
    };
    Logger.prototype.fatal = function (message) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        this.log.apply(this, [0, message].concat(parameters));
    };
    Logger.prototype.error = function (message) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        this.log.apply(this, [1, message].concat(parameters));
    };
    Logger.prototype.warn = function (message) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        this.log.apply(this, [2, message].concat(parameters));
    };
    Logger.prototype.info = function (message) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        this.log.apply(this, [3, message].concat(parameters));
    };
    Logger.prototype.debug = function (message) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        this.log.apply(this, [4, message].concat(parameters));
    };
    Logger.prototype.trace = function (message) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        this.log.apply(this, [5, message].concat(parameters));
    };
    return Logger;
}());
exports.getLogger = function (category) { return new Logger(category); };
