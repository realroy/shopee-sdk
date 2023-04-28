import { ShopeeContext } from './libs';
import * as v2 from './v2';
declare const shopeeContext: ShopeeContext;
export type ShopeeSdkArgs = Omit<typeof shopeeContext, 'value'>;
export declare class ShopeeSdk {
    v2: typeof v2;
    constructor(args: ShopeeSdkArgs);
    setPartnerId(partnerId: number): this;
    setBaseURL(baseURL: string): this;
    setPartnerKey(partnerKey: string): this;
    setAccessToken(accessToken: string): this;
    setShopId(shopId: number): this;
}
export default ShopeeSdk;
