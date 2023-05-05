import { setupServer, SetupServer } from "msw/node";

import { ShopeeContext } from "./libs";
import * as v2 from "./v2";
import * as v2MockHandlers from "./v2/v2.mock-handler";
import { env } from "./env";

const shopeeContext = ShopeeContext.getInstance();

export type ShopeeSdkArgs = typeof env & {
  isMocked?: boolean;
};

export class ShopeeSdk {
  private server?: SetupServer;
  private isMocked: boolean;

  readonly v2: typeof v2;

  constructor(args: ShopeeSdkArgs) {
    shopeeContext.accessToken = args.accessToken ?? env.accessToken;
    shopeeContext.baseURL = args.baseURL ?? env.baseURL;
    shopeeContext.partnerId = args.partnerId ?? env.partnerId;
    shopeeContext.partnerKey = args.partnerKey ?? env.partnerKey;
    shopeeContext.shopId = args.shopId ?? env.shopId;

    this.isMocked = args.isMocked ?? false;

    this.v2 = v2;

    this.resolveServer();
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

  setIsMocked(isMocked: boolean) {
    this.isMocked = isMocked;
    this.resolveServer();

    return this;
  }

  private resolveServer() {
    if (!this.isMocked) {
      this.server?.close?.();

      return;
    }

    if (this.server === undefined) {
      this.server = setupServer(...Object.values(v2MockHandlers));
    }

    this.server.listen();
  }
}

export default ShopeeSdk;
