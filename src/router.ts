import { Express } from 'express';
import { TestController } from './controllers/test.controller';
import winston = require('winston');

/**
 * Construct route of controllers
 */
class ControllerRouter {
    // PLACE Controller instance
    testCtrl: TestController;

    constructor(
        private env: string,
        private logger: winston.Logger,
        private app: Express) {

        if (env === 'development') {
            this.injectMockDataToRequest();
        }

        // Dependency Injection
        this.injectDependencies();

        // Init api route
        this.initRoutes();
    }

    injectMockDataToRequest = () => {
        /* To mocking some data [In 'development' mode] */

        /* [Example] mock user id (mongo) */
        // this.app.use((req, res, next) => {
        //     req['user_id'] = '5ab3b9dbdd184fd933d28f75';
        //     next();
        // });
    }

    /**
     * Inject dependencies to controller instance
     */
    injectDependencies = () => {
        this.logger.debug('inject dependencies');

        this.testCtrl = new TestController();
    }

    /**
     * Map route to controller functions
     */
    initRoutes = () => {
        this.logger.debug('init routes');

        // admin controller
        // this.app.get('/healthcheck', adminCtrl.healthCheck);
        this.app.get('/test', (req, res) => res.send('OK'));

        this.app.get('/callback', (req, res) => {
            console.log(req.query)
            res.redirect(301, 'http://localhost:4200/#/login?token=1234')
        });
    }
}

export { ControllerRouter }