import { ShopeeContext } from "./libs";
import * as v2 from "./v2";
import { env } from "./env";

const shopeeContext = ShopeeContext.getInstance();

export type ShopeeSdkArgs = typeof env & { isLogEnabled: boolean }

export class ShopeeSdk {
  constructor(args: ShopeeSdkArgs) {
    shopeeContext.accessToken = args.accessToken ?? env.accessToken;
    shopeeContext.baseURL = args.baseURL ?? env.baseURL;
    shopeeContext.partnerId = args.partnerId ?? env.partnerId;
    shopeeContext.partnerKey = args.partnerKey ?? env.partnerKey;
    shopeeContext.shopId = args.shopId ?? env.shopId;
    shopeeContext.isLogEnabled = args.isLogEnabled ?? false
  }

  setPartnerId(partnerId: number) {
    shopeeContext.partnerId = partnerId;

    return this;
  }

  setBaseURL(baseURL: string) {
    shopeeContext.baseURL = baseURL;

    return this;
  }

  setPartnerKey(partnerKey: string) {
    shopeeContext.partnerKey = partnerKey;

    return this;
  }

  setAccessToken(accessToken: string) {
    shopeeContext.accessToken = accessToken;

    return this;
  }

  setShopId(shopId: number) {
    shopeeContext.shopId = shopId;

    return this;
  }

  setIsLogEnabled(isLogEnabled: boolean) {
    shopeeContext.isLogEnabled = isLogEnabled

    return this
  }

  get v2() {
    return v2
  }
}

export default ShopeeSdk;
