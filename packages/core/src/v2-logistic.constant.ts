import { createConstantsMap } from "./utils";

export const API_V2_LOGISTIC_GET_SHIPPING_PARAMETER =
  "/api/v2/logistics/get_shipping_parameter";
export const API_V2_LOGISTIC_SHIP_ORDER = "/api/v2/logistic/ship_order";
export const API_V2_LOGISTIC_UPDATE_SHIP_ORDER =
  "/api/v2/logistics/update_shipping_order";
export const API_V2_LOGISTIC_GET_TRACKING_NUMBER =
  "/api/v2/logistics/get_tracking_number";
export const API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_PARAMETER =
  "/api/v2/logistics/get_shipping_document_parameter";
export const API_V2_LOGISTIC_CREATE_SHIPPING_DOCUMENT =
  "/api/v2/logistics/create_shipping_document";
export const API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_RESULT =
  "/api/v2/logistics/get_shipping_document_result";
export const API_V2_LOGISTIC_DOWNLOAD_SHIPPING_DOCUMENT =
  "/api/v2/logistics/download_shipping_document";

export const V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS = [
  "plp_number",
  "first_mile_tracking_number",
  "last_mile_tracking_number",
] as const;

export const V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS_MAP =
  createConstantsMap(V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS);

export const V2_LOGISTIC_SHIPPING_DOCUMENT_TYPES = [
  "NORMAL_AIR_WAYBILL",
  "THERMAL_AIR_WAYBILL",
  "NORMAL_JOB_AIR_WAYBILL",
  "THERMAL_JOB_AIR_WAYBILL",
] as const;

export const V2_LOGISTIC_SHIPPING_STATUSES = [
  "READY",
  "FAILED",
  "PROCESSING",
] as const;
