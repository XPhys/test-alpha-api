"use strict";
/**
 * MAIN ENTRY OF API SERVER
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("errorhandler");
const winston_1 = require("winston");
const methodOverride = require("method-override");
const router_1 = require("./router");
// import { MongoInstance } from './models/mongo/INDEX';
const app_config_1 = require("./app-config");
// Get environment name
const env = process.env.NODE_ENV || 'development';
// Read configuration file
new app_config_1.AppConfig(env);
// Configure app logger
// https://www.digitalocean.com/community/tutorials/how-to-use-winston-to-log-node-js-applications
const logger = winston_1.createLogger({
    level: 'silly',
    format: winston_1.format.combine(winston_1.format.colorize({ all: false }), winston_1.format.label({ label: null }), winston_1.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston_1.format.align(), winston_1.format.simple(), winston_1.format.printf(info => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`)),
    transports: [
        new winston_1.transports.File({ filename: './log/error.log', level: 'error' }),
        new winston_1.transports.File({ filename: './log/combined.log' })
    ],
    exitOnError: false
});
if (env === 'production') {
    logger.add(new winston_1.transports.Console({ level: 'warn' }));
}
else {
    logger.add(new winston_1.transports.Console());
}
// Create app instance
const port = process.env.PORT || app_config_1.AppConfig.value.server.port || 9091;
const server = express();
exports.server = server;
/**
 * Initialize function
 */
function initialize() {
    return __awaiter(this, void 0, void 0, function* () {
        // Init basis middlewares
        server.use(cors());
        server.use(bodyParser.urlencoded({ extended: true }));
        server.use(bodyParser.json({ limit: '1mb' }));
        server.use(methodOverride());
        if (env === 'development' || env === 'staging') {
            server.use(morgan('dev'));
            server.use(errorHandler());
        }
        // Init route
        new router_1.ControllerRouter(env, logger, server);
        // Start server
        server.listen(port, () => {
            console.log('===============================================================');
            console.log(`Environment: ${env}`);
            console.log('===============================================================');
            console.log(`Server starts listening on port ${port}`);
            console.log('===============================================================');
        });
    });
}
// Initialize
(initialize());
//# sourceMappingURL=app.js.map