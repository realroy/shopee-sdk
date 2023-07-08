import { createConstantsMap } from "./utils";

export const API_V2_ORDER_GET_ORDER_LIST_PATH = "/api/v2/order/get_order_list";

export const API_V2_ORDER_GET_ORDER_DETAIL_PATH =
  "/api/v2/order/get_order_detail";

export const API_V2_ORDER_CANCEL_ORDER_PATH = "/api/v2/order/cancel_order";
export const API_V2_ORDER_HANDLE_BUYER_CANCELLATION_PATH =
  "/api/v2/order/handle_buyer_cancellation";

export const V2_ORDER_STATUS = [
  "UNPAID",
  "READY_TO_SHIP",
  "RETRY_SHIP",
  "IN_CANCEL",
  "CANCELLED",
  "PROCESSED",
  "SHIPPED",
  "TO_RETURN",
  "TO_CONFIRM_RECEIVE",
  "COMPLETED",
] as const;

export const V2_ORDER_STATUS_MAP = createConstantsMap(V2_ORDER_STATUS);

export const V2_ORDER_DETAIL_RESPONSE_OPTIONAL_FIELDS = [
  "buyer_user_id",
  "buyer_username",
  "estimated_shipping_fee",
  "recipient_address",
  "actual_shipping_fee",
  "goods_to_declare",
  "note",
  "note_update_time",
  "item_list",
  "pay_time",
  "dropshipper",
  "dropshipper_phone",
  "split_up",
  "buyer_cancel_reason",
  "cancel_by",
  "cancel_reason",
  "actual_shipping_fee_confirmed",
  "buyer_cpf_id",
  "fulfillment_flag",
  "pickup_done_time",
  "package_list",
  "shipping_carrier",
  "payment_method",
  "total_amount",
  "buyer_username",
  "invoice_data",
  "checkout_shipping_carrier",
  "reverse_shipping_fee",
  "order_chargeable_weight_gram",
  "edt",
  "prescription_images",
  "prescription_check_status",
] as const;

export const V2_ORDER_DETAIL_RESPONSE_OPTIONAL_FIELDS_MAP = createConstantsMap(
  V2_ORDER_DETAIL_RESPONSE_OPTIONAL_FIELDS
);

export const SELLER_CANCEL_REASONS = [
  "OUT_OF_STOCK",
  "UNDELIVERABLE_AREA",
] as const;
