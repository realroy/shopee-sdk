import * as v2 from "./v2";
import { env } from "./env";
export type ShopeeSdkArgs = typeof env & {
    isMocked?: boolean;
};
export declare class ShopeeSdk {
    readonly v2: typeof v2;
    constructor(args: ShopeeSdkArgs);
    setPartnerId(partnerId: number): this;
    setBaseURL(baseURL: string): this;
    setPartnerKey(partnerKey: string): this;
    setAccessToken(accessToken: string): this;
    setShopId(shopId: number): this;
}
export default ShopeeSdk;
//# sourceMappingURL=shopee-sdk.d.ts.map