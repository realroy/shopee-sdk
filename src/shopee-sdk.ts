import { setupServer } from "msw/node";

import { ShopeeContext } from "./libs";
import * as v2 from "./v2";
import * as v2MockHandlers from "./v2/v2.mock-handler";

import type { SetupServer } from "msw/node";

const shopeeContext = ShopeeContext.getInstance();

export type ShopeeSdkArgs = Omit<typeof shopeeContext, "value"> & {
  isMocked?: boolean;
};

export class ShopeeSdk {
  private server?: SetupServer;
  private isMocked: boolean;

  readonly v2: typeof v2;

  constructor(args: ShopeeSdkArgs) {
    shopeeContext.accessToken = args.accessToken;
    shopeeContext.baseURL = args.baseURL;
    shopeeContext.partnerId = args.partnerId;
    shopeeContext.partnerKey = args.partnerKey;
    shopeeContext.accessToken = args.accessToken;
    shopeeContext.shopId = args.shopId;
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
