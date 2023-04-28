export declare class HttpClient {
    private static instance;
    private readonly axios;
    private readonly logger;
    private constructor();
    static getInstance(): HttpClient;
    get(url: string, params?: object): Promise<import("axios").AxiosResponse<any, any>>;
    post(url: string, params?: object, body?: object): Promise<import("axios").AxiosResponse<any, any>>;
}
