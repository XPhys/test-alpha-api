import { Response } from 'express';

export class ApiResponse<T>{
    code: number;
    message: string;
    data: T;

    constructor(code?: number, message?: string, data?: T) {
        if (code !== undefined || code !== null) this.code = code;
        if (message) this.message = message;
        if (data !== undefined || code !== null) this.data = data;
    }

    static Ok<T>(res: Response, data?: T) {
        return res.status(200).json(new ApiResponse(1, 'OK', data));
    }

    static NotOk<T>(res: Response, message: string, data?: T) {
        return res.status(200).json(new ApiResponse(0, message, data));
    }

    static BadRequest(res: Response, message?: string, err?) {
        if (err) console.error(err);
        return res.status(400).json(new ApiResponse(0, message));
    }

    static InternalError(res: Response, message?: string, err?) {
        if (err) console.error(err);
        return res.status(500).json(new ApiResponse<any>(0, message));
    }
}