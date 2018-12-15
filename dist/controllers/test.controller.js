"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../models/index");
class TestController {
    constructor() {
        /**
         * Example of test api
         */
        this.test = (req, res, next) => {
            return index_1.ApiResponse.Ok(res, 'Test is OK!');
        };
        /**
         * Example of async test api
         */
        this.testAsync = (req, res, next) => {
            return new Promise((resolve, reject) => {
                setInterval(() => {
                    index_1.ApiResponse.Ok(res, 'Test is OK!');
                    resolve();
                }, 2000);
            });
        };
    }
}
exports.TestController = TestController;
//# sourceMappingURL=test.controller.js.map