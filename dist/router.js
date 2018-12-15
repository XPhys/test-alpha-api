"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_controller_1 = require("./controllers/test.controller");
/**
 * Construct route of controllers
 */
class ControllerRouter {
    constructor(env, logger, app) {
        this.env = env;
        this.logger = logger;
        this.app = app;
        this.injectMockDataToRequest = () => {
            /* To mocking some data [In 'development' mode] */
            /* [Example] mock user id (mongo) */
            // this.app.use((req, res, next) => {
            //     req['user_id'] = '5ab3b9dbdd184fd933d28f75';
            //     next();
            // });
        };
        /**
         * Inject dependencies to controller instance
         */
        this.injectDependencies = () => {
            this.logger.debug('inject dependencies');
            this.testCtrl = new test_controller_1.TestController();
        };
        /**
         * Map route to controller functions
         */
        this.initRoutes = () => {
            this.logger.debug('init routes');
            // admin controller
            // this.app.get('/healthcheck', adminCtrl.healthCheck);
            this.app.get('/test', (req, res) => res.send('OK'));
            this.app.get('/callback', (req, res) => {
                console.log(req.query);
                res.redirect(301, 'http://localhost:4200/#/login?token=1234');
            });
        };
        if (env === 'development') {
            this.injectMockDataToRequest();
        }
        // Dependency Injection
        this.injectDependencies();
        // Init api route
        this.initRoutes();
    }
}
exports.ControllerRouter = ControllerRouter;
//# sourceMappingURL=router.js.map