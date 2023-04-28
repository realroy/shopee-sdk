import { ShopeeContext } from './libs'
import * as v2 from './v2'

const shopeeContext = ShopeeContext.getInstance()

export const ShopeeSdk = {
  v2,
  setAccessToken(accessToken: string) {
    shopeeContext.accessToken = accessToken
    
    return this
  },
  setShopId(shopId: number) {
    shopeeContext.shopId = shopId
    
    return this
  }
}

export default ShopeeSdk