import { z } from "zod";
import { getOrderListRequestParametersSchema, getOrderListResponseSchema } from "./v2-order-get-order-list";
import { getOrderDetailRequestParametersSchema, getOrderDetailResponseSchema } from "./v2-order-get-order-detail";
import { SELLER_CANCEL_REASONS } from "./v2-order.constant";
import { cancelOrderRequestParametersSchema, cancelOrderResponseSchema } from "./v2-order-cancel-order";
import { handleBuyerCancellationRequestParametersSchema, handleBuyerCancellationResponseSchema } from "./v2-order-handle-buyer-cancellation";
export type GetOrderListRequestParameters = z.infer<typeof getOrderListRequestParametersSchema>;
export type GetOrderListResponse = z.infer<typeof getOrderListResponseSchema>;
export type GetOrderDetailRequestParameters = z.infer<typeof getOrderDetailRequestParametersSchema>;
export type GetOrderDetailResponse = z.infer<typeof getOrderDetailResponseSchema>;
export type SellerCancelReason = (typeof SELLER_CANCEL_REASONS)[number];
export type CancelOrderRequestParameters = z.infer<typeof cancelOrderRequestParametersSchema>;
export type CancelOrderRespone = z.infer<typeof cancelOrderResponseSchema>;
export type HandleBuyerCancellationRequestParameters = z.infer<typeof handleBuyerCancellationRequestParametersSchema>;
export type HandleBuyerCancellationResponse = z.infer<typeof handleBuyerCancellationResponseSchema>;
//# sourceMappingURL=v2-order.type.d.ts.map