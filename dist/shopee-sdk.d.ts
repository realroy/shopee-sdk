import * as v2 from "./v2";
import { env } from "./env";
export type ShopeeSdkArgs = typeof env & {
    isMocked?: boolean;
};
export declare class ShopeeSdk {
    private server?;
    private isMocked;
    readonly v2: typeof v2;
    constructor(args: ShopeeSdkArgs);
    setPartnerId(partnerId: number): this;
    setBaseURL(baseURL: string): this;
    setPartnerKey(partnerKey: string): this;
    setAccessToken(accessToken: string): this;
    setShopId(shopId: number): this;
    setIsMocked(isMocked: boolean): this;
    private resolveServer;
}
export default ShopeeSdk;
