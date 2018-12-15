export class PagableData<T> {
    totalItems: number;
    totalPages: number;
    data: T;

    constructor(totalItems: number, pageSize: number, data: T) {
        this.totalItems = totalItems;
        this.data = data;
        this.totalPages = Math.ceil(totalItems / pageSize);
    }
}