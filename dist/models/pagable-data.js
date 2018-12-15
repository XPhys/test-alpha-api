"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PagableData {
    constructor(totalItems, pageSize, data) {
        this.totalItems = totalItems;
        this.data = data;
        this.totalPages = Math.ceil(totalItems / pageSize);
    }
}
exports.PagableData = PagableData;
//# sourceMappingURL=pagable-data.js.map