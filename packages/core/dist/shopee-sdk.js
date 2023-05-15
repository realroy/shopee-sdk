import v from "axios";
import { z as e } from "zod";
async function j(r, ...t) {
  let n;
  return typeof globalThis.crypto < "u" && (n = await k(r, ...t)), n = await L(r, ...t), n;
}
async function k(r, ...t) {
  const n = new TextEncoder(), o = n.encode(r);
  let s = new Uint8Array();
  t.forEach((_) => {
    _ && (s = n.encode(_));
  });
  const i = await crypto.subtle.importKey(
    "raw",
    o,
    { name: "HMAC", hash: "SHA-256" },
    !1,
    ["sign"]
  ), m = await crypto.subtle.sign(
    { name: "HMAC", hash: { name: "sha-256" } },
    i,
    s
  ), c = new Uint8Array(m);
  return Array.from(c).map((_) => _.toString(16).padStart(2, "0")).join("");
}
async function L(r, ...t) {
  const { createHmac: n } = await import("crypto"), o = n("sha256", r);
  return t.filter((s) => !!s).forEach((s) => o.update(s)), o.digest("hex");
}
function f(r) {
  const t = r ? r.getTime() : Date.now();
  return Math.round(t / 1e3).toString();
}
async function x(r) {
  const {
    partner_id: t,
    partner_key: n,
    path: o,
    base_url: s,
    access_token: i,
    shop_id: m,
    params: c = {}
  } = r, a = t.toString(), _ = m.toString(), u = {};
  for (const g in c) {
    const l = c[g];
    Array.isArray(l) ? u[g] = [
      l[0],
      ...l.slice(1).map((A) => `&${g}=${A}`)
    ].join("") : l instanceof Date ? u[g] = f(l) : u[g] = `${l}`;
  }
  const I = f(), P = new URL(o, s), w = await j(
    n,
    a,
    o,
    I,
    i,
    _
  );
  return P.search = new URLSearchParams({
    ...u,
    partner_id: a,
    shop_id: _,
    access_token: i,
    sign: w,
    timestamp: I
  }).toString(), P.toString().replace(new RegExp("%26", "g"), "&").replace(new RegExp("%3D", "g"), "=");
}
class S {
  constructor() {
    this.logger = console, this.axios = v.create(), this.axios.interceptors.request.use(
      (t) => (this.logger.log(`${t.url}`), t.data && this.logger.info(`[Body]: ${JSON.stringify(t.data, null, 4)}`), t),
      (t) => (this.logger.error(t), t)
    ), this.axios.interceptors.response.use(
      (t) => (this.logger.log(`[Response]: ${JSON.stringify(t.data, null, 4)}`), t),
      (t) => {
        const {
          response: n,
          message: o,
          config: { method: s, url: i, data: m, params: c }
        } = t, a = n == null ? void 0 : n.status;
        return this.logger.error({ status: a, message: o, method: s, url: i, data: m, params: c }), t;
      }
    );
  }
  static getInstance() {
    return this.instance ?? (this.instance = new S());
  }
  get(t, n) {
    return this.axios.get(t, { params: n });
  }
  post(t, n, o) {
    return this.axios.post(t, o, { params: n });
  }
}
class b {
  constructor() {
  }
  static getInstance() {
    return this.instance ?? (this.instance = new b());
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
const E = S.getInstance();
function h(r) {
  return async function(n) {
    const o = r.transformRequestParameter ?? ((u) => u), s = await r.requestParameterSchema.transform(o).safeParseAsync(n);
    if (!s.success)
      throw new Error(
        `parse request parameters error: ${s.error.message}`
      );
    const i = s.data, m = b.getInstance().value, c = await x({
      ...m,
      path: r.path,
      params: i
    });
    let a;
    if (r.method === "POST") {
      const u = await r.requestBodySchema.safeParseAsync(r.body);
      if (!u.success)
        throw new Error(
          `parse request body error: ${u.error.message}`
        );
      a = (await E.post(c, {}, r.body)).data;
    } else
      a = (await E.get(c)).data;
    const _ = await r.responseSchema.safeParseAsync(a);
    if (!_.success)
      throw new Error(`parse response error: ${_.error.message}`);
    return _.data;
  };
}
const U = "/api/v2/product/get_item_base_info", O = "/api/v2/product/get_item_extra_info", q = "/api/v2/product/get_item_list", D = "/api/v2/product/get_model_list", T = ["NORMAL", "DELETED", "UNLIST", "BANNED"], H = e.object({
  item_id_list: e.string(),
  need_tax_info: e.coerce.boolean().optional(),
  need_complaint_policy: e.coerce.boolean().optional()
}), K = e.object({
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
        ),
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
          })
        })
      })
    ).optional()
  })
}), M = h({
  method: "GET",
  path: U,
  requestParameterSchema: H,
  responseSchema: K,
  transformRequestParameter(r) {
    return r.need_tax_info = !!r.need_tax_info, r.need_complaint_policy = !!r.need_complaint_policy, r;
  }
}), N = e.object({
  item_id_list: e.string()
}), B = e.object({
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
}), C = h({
  method: "GET",
  path: O,
  requestParameterSchema: N,
  responseSchema: B
}), $ = e.object({
  offset: e.number().int().min(0).optional(),
  page_size: e.number().int().positive().max(100).optional(),
  update_time_from: e.date().optional(),
  update_time_to: e.date().optional(),
  item_status: e.array(e.enum(T))
}), G = e.object({
  error: e.string(),
  message: e.string().nullable().optional(),
  warning: e.string().nullable().optional(),
  request_id: e.string(),
  response: e.object({
    item: e.array(
      e.object({
        item_id: e.number().int(),
        item_status: e.enum(T),
        update_time: e.number().int()
      })
    ).optional()
  }).optional(),
  total_count: e.number().int().optional(),
  has_next_page: e.boolean().optional(),
  next_offset: e.number().int().optional()
}), z = h({
  method: "GET",
  path: q,
  requestParameterSchema: $,
  transformRequestParameter(r) {
    return r.update_time_from = r.update_time_from ?? /* @__PURE__ */ new Date("01/01/2022"), r.update_time_to = r.update_time_to ?? /* @__PURE__ */ new Date(), r;
  },
  responseSchema: G
}), V = e.object({
  item_id: e.string()
}), F = e.object({
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
}), W = h({
  method: "GET",
  path: D,
  requestParameterSchema: V,
  responseSchema: F
}), J = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItemBaseInfo: M,
  getItemExtraInfo: C,
  getItemList: z,
  getModelList: W
}, Symbol.toStringTag, { value: "Module" })), R = "/api/v2/shop/auth_partner";
async function X({
  redirectURL: r,
  redirectSign: t
}) {
  const { baseURL: n, partnerId: o, partnerKey: s } = b.getInstance();
  if (!s || !o)
    throw new Error("partnerKey is undefined");
  const i = new URL(R, n), m = f(/* @__PURE__ */ new Date()), c = await j(
    s,
    o.toString(),
    R,
    m
  ), a = new URL(r);
  return a.searchParams.append("sign", t), i.search = new URLSearchParams({
    partner_id: o.toString(),
    redirect: a.toString(),
    timestamp: m,
    sign: c
  }).toString(), i.toString();
}
const Y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  authPartner: X
}, Symbol.toStringTag, { value: "Module" })), Q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  product: J,
  shop: Y
}, Symbol.toStringTag, { value: "Module" })), Z = e.object({
  partnerId: e.coerce.number().optional(),
  partnerKey: e.coerce.string().optional(),
  baseURL: e.coerce.string().url().optional(),
  accessToken: e.coerce.string().optional(),
  shopId: e.coerce.number().optional()
}), y = Z.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK_SHOP_ID
});
if (!y.success)
  throw new Error(y.error.message);
const d = y.data, p = b.getInstance();
class re {
  constructor(t) {
    p.accessToken = t.accessToken ?? d.accessToken, p.baseURL = t.baseURL ?? d.baseURL, p.partnerId = t.partnerId ?? d.partnerId, p.partnerKey = t.partnerKey ?? d.partnerKey, p.shopId = t.shopId ?? d.shopId;
  }
  setPartnerId(t) {
    return p.partnerId = t, this;
  }
  setBaseURL(t) {
    return p.baseURL = t, this;
  }
  setPartnerKey(t) {
    return p.partnerKey = t, this;
  }
  setAccessToken(t) {
    return p.accessToken = t, this;
  }
  setShopId(t) {
    return p.shopId = t, this;
  }
  get v2() {
    return Q;
  }
}
export {
  U as API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH,
  O as API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH,
  q as API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  D as API_V2_PRODUCT_GET_MODEL_LIST_PATH,
  R as API_V2_SHOP_AUTH_PARTNER,
  T as ITEM_STATUS,
  re as ShopeeSdk,
  j as generateHmac,
  x as signURL,
  f as toTimestamp
};
