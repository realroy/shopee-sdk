export declare class ShopeeContext {
    private static instance;
    partnerId?: number;
    partnerKey?: string;
    baseURL?: string;
    accessToken?: string;
    shopId?: number;
    private constructor();
    static getInstance(): ShopeeContext;
    get value(): {
        partner_id: string | number;
        partner_key: string;
        base_url: string;
        access_token: string;
        shop_id: string | number;
    };
}
