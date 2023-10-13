import service, { AxiosRequestConfig } from "./request";
import { Response } from "./types";
export const request = {
    get: (options: AxiosRequestConfig) => {
        return service({
            method: 'GET',
            ...options
        })
    },
    post: (options: AxiosRequestConfig) => {
        return service({
            method: 'POST',
            ...options
        })
    },
    delete: (options: AxiosRequestConfig) => {
        return service({
            method: 'DELETE',
            ...options
        })
    },
    put: (options: AxiosRequestConfig) => {
        return service({
            method: 'PUT',
            ...options
        })
    }
}