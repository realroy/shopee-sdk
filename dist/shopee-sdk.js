var M = Object.defineProperty;
var $ = (r, t, n) => t in r ? M(r, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[t] = n;
var o = (r, t, n) => ($(r, typeof t != "symbol" ? t + "" : t, n), n);
import G from "axios";
import { z as e } from "zod";
import { createHmac as H } from "crypto";
const E = class {
  constructor() {
    o(this, "axios");
    o(this, "logger", console);
    this.axios = G.create(), this.axios.interceptors.request.use(
      (t) => (this.logger.log(`${t.url}`), t.data && this.logger.info(`[Body]: ${JSON.stringify(t.data, null, 4)}`), t),
      (t) => (this.logger.error(t), t)
    ), this.axios.interceptors.response.use(
      (t) => (this.logger.log(`[Response]: ${JSON.stringify(t.data, null, 4)}`), t),
      (t) => {
        const {
          response: { status: n },
          message: s,
          config: { method: c, url: p, data: g, params: m }
        } = t;
        return this.logger.error({ status: n, message: s, method: c, url: p, data: g, params: m }), t;
      }
    );
  }
  static getInstance() {
    return this.instance ?? (this.instance = new E());
  }
  get(t, n) {
    return this.axios.get(t, { params: n });
  }
  post(t, n, s) {
    return this.axios.post(t, s, { params: n });
  }
};
let f = E;
o(f, "instance");
const z = e.object({
  partnerId: e.coerce.number().optional(),
  partnerKey: e.coerce.string().optional(),
  baseURL: e.coerce.string().url().optional(),
  accessToken: e.coerce.string().optional(),
  shopId: e.coerce.number().optional()
}), S = z.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK_SHOP_ID
});
if (!S.success)
  throw new Error(S.error.message);
const b = S.data, P = class {
  constructor() {
    o(this, "partnerId");
    o(this, "partnerKey");
    o(this, "baseURL");
    o(this, "accessToken");
    o(this, "shopId");
    this.partnerId = b.partnerId ?? 0, this.partnerKey = b.partnerKey ?? "", this.baseURL = b.baseURL ?? "", this.accessToken = b.accessToken ?? "", this.shopId = b.shopId ?? 0;
  }
  static getInstance() {
    return this.instance ?? (this.instance = new P());
  }
  get value() {
    return {
      partner_id: this.partnerId,
      partner_key: this.partnerKey,
      base_url: this.baseURL,
      access_token: this.accessToken,
      shop_id: this.shopId
    };
  }
};
let h = P;
o(h, "instance");
function V(r, ...t) {
  const n = H("sha256", r);
  return t.filter((s) => !!s).forEach((s) => n.update(s)), n.digest("hex");
}
function j(r) {
  const t = r ? r.getTime() : Date.now();
  return Math.round(t / 1e3).toString();
}
function C(r) {
  const {
    partner_id: t,
    partner_key: n,
    path: s,
    base_url: c,
    access_token: p,
    shop_id: g,
    params: m = {}
  } = r, _ = t.toString(), u = g.toString(), i = {};
  for (const d in m) {
    const l = m[d];
    Array.isArray(l) ? i[d] = [
      l[0],
      ...l.slice(1).map((N) => `&${d}=${N}`)
    ].join("") : l instanceof Date ? i[d] = j(l) : i[d] = `${l}`;
  }
  const R = j(), T = new URL(s, c), B = V(
    n,
    _,
    s,
    R,
    p,
    u
  );
  return T.search = new URLSearchParams({
    ...i,
    partner_id: _,
    shop_id: u,
    access_token: p,
    sign: B,
    timestamp: R
  }).toString(), T.toString().replace(new RegExp("%26", "g"), "&").replace(new RegExp("%3D", "g"), "=");
}
const k = f.getInstance();
function I(r) {
  return async function(n) {
    const s = r.transformRequestParameter ?? ((i) => i), c = await r.requestParameterSchema.transform(s).safeParseAsync(n);
    if (!c.success)
      throw new Error(c.error.message);
    const p = c.data, g = h.getInstance().value, m = C({
      ...g,
      path: r.path,
      params: p
    });
    let _;
    if (r.method === "POST") {
      const i = await r.requestBodySchema.safeParseAsync(r.body);
      if (!i.success)
        throw new Error(i.error.message);
      _ = (await k.post(m, {}, r.body)).data;
    } else
      _ = (await k.get(m)).data;
    const u = await r.responseSchema.safeParseAsync(_);
    if (!u.success)
      throw new Error(u.error.message);
    return u.data;
  };
}
const w = "/api/v2/product/get_item_list", y = ["NORMAL", "DELETED", "UNLIST", "BANNED"], x = e.object({
  offset: e.number().int().min(0).optional(),
  page_size: e.number().int().positive().max(100).optional(),
  update_time_from: e.date().optional(),
  update_time_to: e.date().optional(),
  item_status: e.array(e.enum(y))
}), v = e.object({
  item_id: e.number().int(),
  item_status: e.enum(y),
  update_time: e.number().int()
}), L = e.object({
  error: e.string(),
  message: e.string().nullable().optional(),
  warning: e.string().nullable().optional(),
  request_id: e.string(),
  response: e.object({
    item: e.array(v.optional()).optional()
  }).optional(),
  total_count: e.number().int().optional(),
  has_next_page: e.boolean().optional(),
  next_offset: e.number().int().optional()
}), F = I({
  method: "GET",
  path: w,
  requestParameterSchema: x,
  transformRequestParameter(r) {
    return r.update_time_from = r.update_time_from ?? /* @__PURE__ */ new Date("01/01/2022"), r.update_time_to = r.update_time_to ?? /* @__PURE__ */ new Date(), r;
  },
  responseSchema: L
}), A = "/api/v2/product/get_item_base_info", O = e.object({
  item_id_list: e.string(),
  need_tax_info: e.coerce.boolean().optional(),
  need_complaint_policy: e.coerce.boolean().optional()
}), J = e.object({
  value_id: e.number(),
  original_value_name: e.string(),
  value_unit: e.string()
}), X = e.object({
  attribute_id: e.number(),
  original_attribute_name: e.string(),
  is_mandatory: e.boolean(),
  attribute_value_list: e.array(J)
}), Y = e.object({
  currency: e.string(),
  original_price: e.number(),
  current_price: e.number()
}), Q = e.object({
  location_id: e.string(),
  stock: e.number()
}), W = e.object({
  logistic_id: e.number(),
  logistic_name: e.string(),
  enabled: e.boolean(),
  shipping_fee: e.number().optional(),
  is_free: e.boolean(),
  estimated_shipping_fee: e.number().optional()
}), Z = e.object({
  field_type: e.string(),
  text: e.string().optional(),
  image_info: e.object({
    image_id: e.string(),
    image_url: e.string()
  }).optional()
}), ee = e.object({
  item_id: e.number(),
  category_id: e.number(),
  item_name: e.string(),
  item_sku: e.string(),
  create_time: e.number(),
  update_time: e.number(),
  attribute_list: e.array(X).optional(),
  price_info: e.array(Y).optional(),
  stock_info_v2: e.object({
    summary_info: e.object({
      total_reserved_stock: e.number(),
      total_available_stock: e.number()
    }),
    seller_stock: e.array(Q).optional()
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
  logistic_info: e.array(W),
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
      field_list: e.array(Z)
    })
  })
}), U = e.object({
  error: e.string(),
  message: e.string(),
  warning: e.string(),
  request_id: e.string(),
  response: e.object({
    item_list: e.array(ee).optional()
  })
}), te = I({
  method: "GET",
  path: A,
  requestParameterSchema: O,
  responseSchema: U,
  transformRequestParameter(r) {
    return r.need_tax_info = !!r.need_tax_info, r.need_complaint_policy = !!r.need_complaint_policy, r;
  }
}), q = "/api/v2/product/get_item_extra_info", D = e.object({
  item_id_list: e.string()
}), re = e.object({
  item_id: e.number(),
  sale: e.number(),
  views: e.number(),
  likes: e.number(),
  rating_star: e.number(),
  comment_count: e.number()
}), K = e.object({
  error: e.string(),
  message: e.string(),
  warning: e.string().optional(),
  request_id: e.string(),
  response: e.object({
    item_list: e.array(re).optional()
  }).optional()
}), ne = I({
  method: "GET",
  path: q,
  requestParameterSchema: D,
  responseSchema: K
}), se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  API_V2_PRODUCT_GET_ITEM_BASE_INFO: A,
  API_V2_PRODUCT_GET_ITEM_EXTRA_INFO: q,
  API_V2_PRODUCT_GET_ITEM_LIST: w,
  ITEM_STATUS: y,
  getItemBaseInfo: te,
  getItemBaseInfoRequestParametersSchema: O,
  getItemBaseInfoResponseSchema: U,
  getItemExtraInfo: ne,
  getItemExtraInfoRequestParametersSchema: D,
  getItemExtraInfoResponseSchema: K,
  getItemList: F,
  getItemListRequestParametersSchema: x,
  getItemListResponseSchema: L,
  itemSchema: v
}, Symbol.toStringTag, { value: "Module" })), oe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  product: se
}, Symbol.toStringTag, { value: "Module" })), a = h.getInstance();
class pe {
  constructor(t) {
    o(this, "v2", oe);
    a.accessToken = t.accessToken, a.baseURL = t.baseURL, a.partnerId = t.partnerId, a.partnerKey = t.partnerKey, a.accessToken = t.accessToken, a.shopId = t.shopId;
  }
  setPartnerId(t) {
    return a.partnerId = t, this;
  }
  setBaseURL(t) {
    return a.baseURL = t, this;
  }
  setPartnerKey(t) {
    return a.partnerKey = t, this;
  }
  setAccessToken(t) {
    return a.accessToken = t, this;
  }
  setShopId(t) {
    return a.shopId = t, this;
  }
}
export {
  pe as ShopeeSdk
};
