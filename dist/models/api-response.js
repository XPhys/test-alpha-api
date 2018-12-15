"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiResponse {
    constructor(code, message, data) {
        if (code !== undefined || code !== null)
            this.code = code;
        if (message)
            this.message = message;
        if (data !== undefined || code !== null)
            this.data = data;
    }
    static Ok(res, data) {
        return res.status(200).json(new ApiResponse(1, 'OK', data));
    }
    static NotOk(res, message, data) {
        return res.status(200).json(new ApiResponse(0, message, data));
    }
    static BadRequest(res, message, err) {
        if (err)
            console.error(err);
        return res.status(400).json(new ApiResponse(0, message));
    }
    static InternalError(res, message, err) {
        if (err)
            console.error(err);
        return res.status(500).json(new ApiResponse(0, message));
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=api-response.js.map