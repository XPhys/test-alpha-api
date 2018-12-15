/**
 * MAIN ENTRY OF API SERVER
 */

import "reflect-metadata";
import * as stream from 'stream';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as errorHandler from 'errorhandler';
import * as bluebird from 'bluebird';
import * as path from 'path';
import { createLogger, format, transports, stream as winstonStream } from 'winston';
import methodOverride = require("method-override");
import { ControllerRouter } from './router';
// import { MongoInstance } from './models/mongo/INDEX';
import { AppConfig } from "./app-config";

// Get environment name
const env = process.env.NODE_ENV || 'development';

// Read configuration file
new AppConfig(env);

// Configure app logger
// https://www.digitalocean.com/community/tutorials/how-to-use-winston-to-log-node-js-applications
const logger = createLogger({
    level: 'silly',
    format: format.combine(
        format.colorize({ all: false }),
        format.label({ label: null }),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.align(),
        format.simple(),
        format.printf(info => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`)
    ),
    transports: [
        new transports.File({ filename: './log/error.log', level: 'error' }),
        new transports.File({ filename: './log/combined.log' })
    ],
    exitOnError: false
});
if (env === 'production') {
    logger.add(new transports.Console({ level: 'warn' }));
} else {
    logger.add(new transports.Console());
}

// Create app instance
const port = process.env.PORT || AppConfig.value.server.port || 9091;
const server = express();

/**
 * Initialize function
 */
async function initialize() {

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
    new ControllerRouter(env, logger, server);

    // Start server
    server.listen(port, () => {
        console.log('===============================================================');
        console.log(`Environment: ${env}`);
        console.log('===============================================================');
        console.log(`Server starts listening on port ${port}`);
        console.log('===============================================================');
    });
}

// Initialize
(initialize());

export { server }