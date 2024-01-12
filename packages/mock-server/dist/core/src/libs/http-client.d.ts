import type { ResponseType } from "axios";
export declare class HttpClient {
    private static instance;
    private readonly axios;
    private readonly logger;
    private isLogEnabled;
    private logInterceptorIds;
    private constructor();
    private addLogInterceptor;
    private removeLogInterceptor;
    static getInstance(): HttpClient;
    setLogEnabled(newValue: boolean): boolean;
    get(url: string, params?: object): Promise<import("axios").AxiosResponse<any, any>>;
    post(url: string, params?: object, body?: object, responseType?: ResponseType): Promise<import("axios").AxiosResponse<any, any>>;
}
//# sourceMappingURL=http-client.d.ts.map