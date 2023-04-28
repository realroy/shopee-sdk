import { ShopeeContext } from './libs'
import * as v2 from './v2'

const shopeeContext = ShopeeContext.getInstance()

export type ShopeeSdkArgs = Omit<typeof shopeeContext, 'value'>

export class ShopeeSdk {
  v2 = v2

  constructor(args: ShopeeSdkArgs) {
    shopeeContext.accessToken = args.accessToken
    shopeeContext.baseURL = args.baseURL
    shopeeContext.partnerId = args.partnerId
    shopeeContext.partnerKey = args.partnerKey
    shopeeContext.accessToken = args.accessToken
    shopeeContext.shopId = args.shopId
  }
  
  setPartnerId(partnerId: number) {
    shopeeContext.partnerId = partnerId
    
    return this
  }
  
  setBaseURL(baseURL: string) {
    shopeeContext.baseURL = baseURL
    
    return this
  }

  setPartnerKey(partnerKey: string) {
    shopeeContext.partnerKey = partnerKey
    
    return this  
  }
  
  setAccessToken(accessToken: string) {
    shopeeContext.accessToken = accessToken
    
    return this
  }
  
  setShopId(shopId: number) {
    shopeeContext.shopId = shopId
    
    return this
  }
}

export default ShopeeSdk