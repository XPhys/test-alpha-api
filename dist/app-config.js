"use strict";
/**
 * READ configuration from config.{ENV}.json file
 * and mapping into AppConfig Class
 * MODIFIED AppConfig properties according to what in config.{ENV}.json file
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class AppConfig {
    constructor(env) {
        AppConfig.value = JSON.parse(fs.readFileSync(`./config.${env.toLocaleLowerCase()}.json`, { encoding: 'utf-8' }));
    }
}
exports.AppConfig = AppConfig;
//# sourceMappingURL=app-config.js.map