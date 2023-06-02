export const API_V2_LOGISTIC_GET_SHIPPING_PARAMETER =
  "/api/v2/logistic/get_shipping_parameter";
export const API_V2_LOGISTIC_SHIP_ORDER = "/api/v2/logistic/ship_order";
export const API_V2_LOGISTIC_UPDATE_SHIP_ORDER =
  "/api/v2/logistics/update_shipping_order";
export const API_V2_LOGISTIC_GET_TRACKING_NUMBER =
  "/api/v2/logistics/get_tracking_number";

export const API_V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS = {
  "plp_number": "plp_number",
  "first_mile_tracking_number": "first_mile_tracking_number",
  "last_mile_tracking_number": "last_mile_tracking_number",
} as const;
