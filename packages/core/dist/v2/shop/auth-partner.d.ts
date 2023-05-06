export declare const API_V2_SHOP_AUTH_PARTNER = "/api/v2/shop/auth_partner";
export type AuthPartnerRequestParams = {
    redirectURL: string;
    redirectSign: string;
};
export declare function authPartner({ redirectURL, redirectSign, }: AuthPartnerRequestParams): Promise<string>;
//# sourceMappingURL=auth-partner.d.ts.map