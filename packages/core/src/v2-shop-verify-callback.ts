import { z } from "zod";

export const callbackRequestQuerySchema = z.object({
  code: z.string(),
  shopId: z.string(),
  sign: z.string(),
});

export async function verifyCallback(requestQuery: unknown) {
  const parseCallbackRequestQuerySchema =
    await callbackRequestQuerySchema.safeParseAsync(requestQuery);

  if (!parseCallbackRequestQuerySchema.success) {
    throw new Error(
      `parse request parameters error: ${parseCallbackRequestQuerySchema.error.message}`
    );
  }

  const { code, shopId, sign } = parseCallbackRequestQuerySchema.data;

  return {
    code,
    shopId,
    sign,
  };
}
