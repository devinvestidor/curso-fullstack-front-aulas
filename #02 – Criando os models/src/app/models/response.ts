import HttpStatusCode from './http-status-code';

export interface ResponseApp<T> {
    body: T;
    error: boolean;
    message: string;
    status: HttpStatusCode;
}
