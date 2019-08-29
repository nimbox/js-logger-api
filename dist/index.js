"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    constructor(category) {
        this.category = category ? category : null;
    }
    log(level, message, ...params) {
        if (JSLOGGER) {
            JSLOGGER(this.category, level, message, ...params);
        }
    }
    fatal(message, ...params) {
        this.log(0, message, ...params);
    }
    error(message, ...params) {
        this.log(1, message, ...params);
    }
    warn(message, ...params) {
        this.log(2, message, ...params);
    }
    info(message, ...params) {
        this.log(3, message, ...params);
    }
    debug(message, ...params) {
        this.log(4, message, ...params);
    }
    trace(message, ...params) {
        this.log(5, message, ...params);
    }
    track(event, params) {
        if (JSTRACKER) {
            JSTRACKER(this.category, event, params);
        }
    }
}
exports.getLogger = (category) => new Logger(category);
