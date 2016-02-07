/*!
 * Teo.JS base class implementation
 * @author Andrew Teologov <teologov.and@gmail.com>
 * @date 2/7/16
 */

"use strict";

const events = require("events");

class Base extends events.EventEmitter {
    constructor(config, callback) {
        // allow not strict order of arguments
        if (config instanceof Function) {
            var callback = config,
                config = {};
        }

        if (config instanceof Object) {
            var callback = (typeof callback === "function") ? callback : () => {};
        }

        if (config === void 0) {
            var config = {},
                callback = () => {};
        }

        super();

        this.applyConfig(config);
        this.callback = callback;
    }

    applyConfig(config) {
        this.config = config;
    }
}

module.exports = Base;