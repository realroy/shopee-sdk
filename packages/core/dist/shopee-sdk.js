import q from "axios";
import { z as e } from "zod";
async function w(r, ...t) {
  let n;
  return typeof globalThis.crypto < "u" && (n = await L(r, ...t)), n = await x(r, ...t), n;
}
async function L(r, ...t) {
  const n = new TextEncoder(), o = n.encode(r);
  let s = new Uint8Array();
  t.forEach((i) => {
    i && (s = n.encode(i));
  });
  const a = await crypto.subtle.importKey(
    "raw",
    o,
    { name: "HMAC", hash: "SHA-256" },
    !1,
    ["sign"]
  ), c = await crypto.subtle.sign(
    { name: "HMAC", hash: { name: "sha-256" } },
    a,
    s
  ), p = new Uint8Array(c);
  return Array.from(p).map((i) => i.toString(16).padStart(2, "0")).join("");
}
async function x(r, ...t) {
  const { createHmac: n } = await import("crypto"), o = n("sha256", r);
  return t.filter((s) => !!s).forEach((s) => o.update(s)), o.digest("hex");
}
function S(r) {
  const t = r ? r.getTime() : Date.now();
  return Math.round(t / 1e3).toString();
}
async function j(r) {
  const {
    partner_id: t,
    partner_key: n,
    path: o,
    base_url: s,
    access_token: a,
    shop_id: c,
    params: p = {}
  } = r, _ = t.toString(), i = c.toString(), m = {};
  for (const d in p) {
    const g = p[d];
    Array.isArray(g) ? m[d] = [
      g[0],
      ...g.slice(1).map((v) => `&${d}=${v}`)
    ].join("") : g instanceof Date ? m[d] = S(g) : m[d] = `${g}`;
  }
  const h = S(), I = new URL(o, s), k = await w(
    n,
    _,
    o,
    h,
    a,
    i
  );
  return I.search = new URLSearchParams({
    ...m,
    partner_id: _,
    shop_id: i,
    ...!!a && { access_token: a },
    sign: k,
    timestamp: h
  }).toString(), I.toString().replace(new RegExp("%26", "g"), "&").replace(new RegExp("%3D", "g"), "=");
}
class f {
  constructor() {
    this.logger = console, this.axios = q.create(), this.axios.interceptors.request.use(
      (t) => (this.logger.log(`${t.url}`), t.data && this.logger.info(`[Body]: ${JSON.stringify(t.data, null, 4)}`), t),
      (t) => (this.logger.error(t), t)
    ), this.axios.interceptors.response.use(
      (t) => (this.logger.log(`[Response]: ${JSON.stringify(t.data, null, 4)}`), t),
      (t) => {
        const {
          response: n,
          message: o,
          config: { method: s, url: a, data: c, params: p }
        } = t, _ = n == null ? void 0 : n.status;
        return this.logger.error({ status: _, message: o, method: s, url: a, data: c, params: p }), t;
      }
    );
  }
  static getInstance() {
    return this.instance ?? (this.instance = new f());
  }
  get(t, n) {
    return this.axios.get(t, { params: n });
  }
  post(t, n, o) {
    return this.axios.post(t, o, { params: n });
  }
}
class l {
  constructor() {
  }
  static getInstance() {
    return this.instance ?? (this.instance = new l());
  }
  get value() {
    return {
      partner_id: this.partnerId ?? "",
      partner_key: this.partnerKey ?? "",
      base_url: this.baseURL ?? "",
      access_token: this.accessToken ?? "",
      shop_id: this.shopId ?? ""
    };
  }
}
const U = f.getInstance();
function y(r) {
  return async function(n) {
    const o = r.transformRequestParameter ?? ((h) => h), s = await r.requestParameterSchema.transform(o).safeParseAsync(n);
    if (!s.success)
      throw new Error(
        `parse request parameters error: ${s.error.message}`
      );
    const a = s.data, c = l.getInstance().value, p = await j({
      ...c,
      path: r.path,
      params: a
    }), i = (await U.get(p)).data, m = await r.responseSchema.safeParseAsync(i);
    if (!m.success)
      throw new Error(`parse response error: ${m.error.message}`);
    return m.data;
  };
}
const O = f.getInstance();
function D(r) {
  return async function(n) {
    const o = r.transformRequestParameter ?? ((m) => m), s = await r.requestParameterSchema.transform(o).safeParseAsync(n);
    if (!s.success)
      throw new Error(
        `parse request parameters error: ${s.error.message}`
      );
    const a = l.getInstance().value, c = await j({
      ...a,
      path: r.path,
      params: {}
    }), p = s.data, { data: _ } = await O.post(c, {}, p), i = await r.responseSchema.safeParseAsync(_);
    if (!i.success)
      throw new Error(`parse response error: ${i.error.message}`);
    return i.data;
  };
}
const H = "/api/v2/product/get_item_base_info", K = "/api/v2/product/get_item_extra_info", C = "/api/v2/product/get_item_list", M = "/api/v2/product/get_model_list", E = ["NORMAL", "DELETED", "UNLIST", "BANNED"], N = e.object({
  item_id_list: e.string(),
  need_tax_info: e.coerce.boolean().optional(),
  need_complaint_policy: e.coerce.boolean().optional()
}), $ = e.object({
  error: e.string(),
  message: e.string(),
  warning: e.string(),
  request_id: e.string(),
  response: e.object({
    item_list: e.array(
      e.object({
        item_id: e.number(),
        category_id: e.number(),
        item_name: e.string(),
        item_sku: e.string(),
        create_time: e.number(),
        update_time: e.number(),
        attribute_list: e.array(
          e.object({
            attribute_id: e.number(),
            original_attribute_name: e.string(),
            is_mandatory: e.boolean(),
            attribute_value_list: e.array(
              e.object({
                value_id: e.number(),
                original_value_name: e.string(),
                value_unit: e.string()
              })
            )
          })
        ).optional(),
        price_info: e.array(
          e.object({
            currency: e.string(),
            original_price: e.number(),
            current_price: e.number()
          })
        ).optional(),
        stock_info_v2: e.object({
          summary_info: e.object({
            total_reserved_stock: e.number(),
            total_available_stock: e.number()
          }),
          seller_stock: e.array(
            e.object({
              location_id: e.string(),
              stock: e.number()
            })
          ).optional()
        }).optional(),
        image: e.object({
          image_url_list: e.array(e.string()),
          image_id_list: e.array(e.string())
        }),
        weight: e.string(),
        dimension: e.object({
          package_length: e.number(),
          package_width: e.number(),
          package_height: e.number()
        }),
        logistic_info: e.array(
          e.object({
            logistic_id: e.number(),
            logistic_name: e.string(),
            enabled: e.boolean(),
            shipping_fee: e.number().optional(),
            is_free: e.boolean(),
            estimated_shipping_fee: e.number().optional()
          })
        ).optional(),
        pre_order: e.object({
          is_pre_order: e.boolean(),
          days_to_ship: e.number()
        }),
        condition: e.string(),
        size_chart: e.string(),
        item_status: e.string(),
        has_model: e.boolean(),
        promotion_id: e.number().optional(),
        brand: e.object({
          brand_id: e.number(),
          original_brand_name: e.string()
        }),
        tax_info: e.object({
          ncm: e.number(),
          same_state_cfop: e.number(),
          diff_state_cfop: e.number(),
          csosn: e.number(),
          origin: e.number()
        }).optional(),
        description_type: e.string(),
        description_info: e.object({
          extended_description: e.object({
            field_list: e.array(
              e.object({
                field_type: e.string(),
                text: e.string().optional(),
                image_info: e.object({
                  image_id: e.string(),
                  image_url: e.string()
                }).optional()
              })
            )
          }).optional()
        })
      })
    ).optional()
  })
}), B = y({
  path: H,
  requestParameterSchema: N,
  responseSchema: $,
  transformRequestParameter(r) {
    return r.need_tax_info = !!r.need_tax_info, r.need_complaint_policy = !!r.need_complaint_policy, r;
  }
}), z = e.object({
  item_id_list: e.string()
}), V = e.object({
  error: e.string(),
  message: e.string(),
  warning: e.string().optional(),
  request_id: e.string(),
  response: e.object({
    item_list: e.array(
      e.object({
        item_id: e.number(),
        sale: e.number(),
        views: e.number(),
        likes: e.number(),
        rating_star: e.number(),
        comment_count: e.number()
      })
    ).optional()
  }).optional()
}), G = y({
  path: K,
  requestParameterSchema: z,
  responseSchema: V
}), Q = e.object({
  offset: e.number().int().min(0).optional(),
  page_size: e.number().int().positive().max(100).optional(),
  update_time_from: e.date().optional(),
  update_time_to: e.date().optional(),
  item_status: e.array(e.enum(E))
}), W = e.object({
  error: e.string(),
  message: e.string().nullable().optional(),
  warning: e.string().nullable().optional(),
  request_id: e.string(),
  response: e.object({
    item: e.array(
      e.object({
        item_id: e.number().int(),
        item_status: e.enum(E),
        update_time: e.number().int()
      })
    ).optional()
  }).optional(),
  total_count: e.number().int().optional(),
  has_next_page: e.boolean().optional(),
  next_offset: e.number().int().optional()
}), F = y({
  path: C,
  requestParameterSchema: Q,
  transformRequestParameter(r) {
    return r.update_time_from = r.update_time_from ?? /* @__PURE__ */ new Date("01/01/2022"), r.update_time_to = r.update_time_to ?? /* @__PURE__ */ new Date(), r;
  },
  responseSchema: W
}), J = e.object({
  item_id: e.string()
}), X = e.object({
  error: e.string(),
  message: e.string(),
  warning: e.string(),
  request_id: e.string(),
  response: e.object({
    tier_variation: e.array(
      e.object({
        name: e.string(),
        option_list: e.array(
          e.object({
            option: e.string()
          })
        )
      })
    ),
    model: e.array(
      e.object({
        model_id: e.number(),
        model_status: e.string(),
        promotion_id: e.number(),
        tier_index: e.array(e.number()),
        price_info: e.array(
          e.object({
            current_price: e.number(),
            original_price: e.number(),
            inflated_price_of_current_price: e.number(),
            inflated_price_of_original_price: e.number()
          })
        ),
        model_sku: e.string(),
        pre_order: e.object({
          is_pre_order: e.boolean(),
          days_to_ship: e.number()
        }),
        stock_info_v2: e.object({
          summary_info: e.object({
            total_reserved_stock: e.number(),
            total_available_stock: e.number()
          }),
          seller_stock: e.array(
            e.object({
              location_id: e.string(),
              stock: e.number()
            })
          )
        })
      })
    )
  })
}), Y = y({
  path: M,
  requestParameterSchema: J,
  responseSchema: X
}), Z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItemBaseInfo: B,
  getItemExtraInfo: G,
  getItemList: F,
  getModelList: Y
}, Symbol.toStringTag, { value: "Module" })), ee = "/api/v2/auth/token/get", T = e.object({
  code: e.string(),
  partner_id: e.number().optional(),
  shop_id: e.number().optional(),
  main_account_id: e.number().optional()
}), A = e.object({
  access_token: e.string(),
  error: e.string(),
  expires_in: e.number(),
  message: e.string(),
  refresh_token: e.string(),
  request_id: e.string(),
  shop_id_list: e.array(e.number())
}), te = D({
  path: ee,
  requestParameterSchema: T,
  responseSchema: A,
  transformRequestParameter(r) {
    return r.partner_id = r.partner_id ?? l.getInstance().partnerId, r;
  }
}), re = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAccessToken: te,
  getAccessTokenRequestParametersSchema: T,
  getAccessTokenResponseSchema: A
}, Symbol.toStringTag, { value: "Module" })), R = "/api/v2/shop/auth_partner";
async function ne({
  redirectURL: r,
  redirectSign: t
}) {
  const { baseURL: n, partnerId: o, partnerKey: s } = l.getInstance();
  if (!s || !o)
    throw new Error("partnerKey is undefined");
  const a = new URL(R, n), c = S(/* @__PURE__ */ new Date()), p = await w(
    s,
    o.toString(),
    R,
    c
  ), _ = new URL(r);
  return _.searchParams.append("sign", t), a.search = new URLSearchParams({
    partner_id: o.toString(),
    redirect: _.toString(),
    timestamp: c,
    sign: p
  }).toString(), a.toString();
}
const se = e.object({
  code: e.string(),
  shop_id: e.string(),
  sign: e.string()
});
async function oe(r) {
  const t = await se.safeParseAsync(r);
  if (!t.success)
    throw new Error(
      `parse request parameters error: ${t.error.message}`
    );
  const { code: n, shop_id: o, sign: s } = t.data;
  return {
    code: n,
    shopId: o,
    sign: s
  };
}
const ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  authPartner: ne,
  verifyCallback: oe
}, Symbol.toStringTag, { value: "Module" })), ie = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  product: Z,
  publicShopee: re,
  shop: ae
}, Symbol.toStringTag, { value: "Module" })), ce = e.object({
  partnerId: e.coerce.number().optional(),
  partnerKey: e.coerce.string().optional(),
  baseURL: e.coerce.string().url().optional(),
  accessToken: e.coerce.string().optional(),
  shopId: e.coerce.number().optional()
}), P = ce.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK_SHOP_ID
});
if (!P.success)
  throw new Error(P.error.message);
const b = P.data, u = l.getInstance();
class me {
  constructor(t) {
    u.accessToken = t.accessToken ?? b.accessToken, u.baseURL = t.baseURL ?? b.baseURL, u.partnerId = t.partnerId ?? b.partnerId, u.partnerKey = t.partnerKey ?? b.partnerKey, u.shopId = t.shopId ?? b.shopId;
  }
  setPartnerId(t) {
    return u.partnerId = t, this;
  }
  setBaseURL(t) {
    return u.baseURL = t, this;
  }
  setPartnerKey(t) {
    return u.partnerKey = t, this;
  }
  setAccessToken(t) {
    return u.accessToken = t, this;
  }
  setShopId(t) {
    return u.shopId = t, this;
  }
  get v2() {
    return ie;
  }
}
export {
  H as API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH,
  K as API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH,
  C as API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  M as API_V2_PRODUCT_GET_MODEL_LIST_PATH,
  ee as API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH,
  R as API_V2_SHOP_AUTH_PARTNER,
  E as ITEM_STATUS,
  me as ShopeeSdk,
  w as generateHmac,
  j as signURL,
  S as toTimestamp
};
