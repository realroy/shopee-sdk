export class ShopeeContext {
  private static instance: ShopeeContext;

  partnerId?: number;
  partnerKey?: string;
  baseURL?: string;
  accessToken?: string;
  shopId?: number;

  private constructor() {}

  static getInstance() {
    return this.instance ?? (this.instance = new ShopeeContext());
  }

  get value() {
    return {
      partner_id: this.partnerId ?? "",
      partner_key: this.partnerKey ?? "",
      base_url: this.baseURL ?? "",
      access_token: this.accessToken ?? "",
      shop_id: this.shopId ?? "",
    };
  }
}
