import { z } from "zod";
import { logisticGetShippingParameterRequestParameterSchema, logisticGetShippingParameterResponseSchema } from "./v2-logistic.get-shipping-parameter";
export type LogisticGetShippingParameterRequestParameter = z.infer<typeof logisticGetShippingParameterRequestParameterSchema>;
export type LogisticGetShippingParameterResponse = z.infer<typeof logisticGetShippingParameterResponseSchema>;
//# sourceMappingURL=v2-logistic.type.d.ts.map