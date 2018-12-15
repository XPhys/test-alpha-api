/**
 * READ configuration from config.{ENV}.json file
 * and mapping into AppConfig Class
 * MODIFIED AppConfig properties according to what in config.{ENV}.json file
 */

import * as fs from 'fs';

export class AppConfig {
    static value: {
        env: string;

        /** CREATE class and its props as required to directly mapping to configurationo file  */
        server: {
            name: string;
            port: string;
            // imageDomain: string;
            // imageUri: string;
            // imagePath: string;
            // imageUriSch: string;
            // imagePathSch: string;
            // atis: {
            //     imageUri: string;
            //     imagePath: string;
            //     logPath: string;
            //     shapePath: string;
            // }
        }
        // mongo: {
        //     connectionString: string;
        // },
        // notification: {
        //     url: string;
        // }
    };

    constructor(env: string) {
        AppConfig.value = JSON.parse(fs.readFileSync(`./config.${env.toLocaleLowerCase()}.json`, { encoding: 'utf-8' }));
    }
}