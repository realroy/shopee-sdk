import { z } from "zod";

import {
  logisticGetShippingParameterRequestParameterSchema,
  logisticGetShippingParameterResponseSchema,
} from "./v2-logistic.get-shipping-parameter";
import {
  logisticShipOrderRequestParameterSchema,
  logisticShipOrderResponseSchema,
} from "./v2-logistic.ship-order";
import {
  logisticUpdateShipOrderRequestParameterSchema,
  logisticUpdateShipOrderResponseSchema,
} from "./v2-logistic.update-ship-order";

export type LogisticGetShippingParameterRequestParameter = z.infer<
  typeof logisticGetShippingParameterRequestParameterSchema
>;
export type LogisticGetShippingParameterResponse = z.infer<
  typeof logisticGetShippingParameterResponseSchema
>;

export type LogisticShipOrderRequestParameter = z.infer<
  typeof logisticShipOrderRequestParameterSchema
>;
export type LogisticShipOrderResponse = z.infer<
  typeof logisticShipOrderResponseSchema
>;

export type LogisticUpdateShipOrderRequestParameter = z.infer<
  typeof logisticUpdateShipOrderRequestParameterSchema
>;
export type LogisticUpdateShipOrderResponse = z.infer<
  typeof logisticUpdateShipOrderResponseSchema
>;
