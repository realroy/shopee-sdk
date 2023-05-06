import * as v2 from "./v2";
import { env } from "./env";
export type ShopeeSdkArgs = typeof env;
export declare class ShopeeSdk {
    constructor(args: ShopeeSdkArgs);
    setPartnerId(partnerId: number): this;
    setBaseURL(baseURL: string): this;
    setPartnerKey(partnerKey: string): this;
    setAccessToken(accessToken: string): this;
    setShopId(shopId: number): this;
    get v2(): typeof v2;
}
export default ShopeeSdk;
//# sourceMappingURL=shopee-sdk.d.ts.map