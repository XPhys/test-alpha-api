import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../models/index';

class TestController {

    constructor() { }

    /**
     * Example of test api
     */
    test = (req: Request, res: Response, next: NextFunction) => {
        return ApiResponse.Ok(res, 'Test is OK!');
    }

    /**
     * Example of async test api
     */
    testAsync = (req: Request, res: Response, next: NextFunction) => {
        return new Promise((resolve, reject) => {
            setInterval(() => {
                ApiResponse.Ok(res, 'Test is OK!');
                resolve();
            }, 2000);
        });
    }
}

export { TestController }