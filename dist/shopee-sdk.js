var K = Object.defineProperty;
var q = (r, t, n) => t in r ? K(r, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[t] = n;
var a = (r, t, n) => (q(r, typeof t != "symbol" ? t + "" : t, n), n);
import B from "axios";
import { z as e } from "zod";
import { createHmac as N } from "crypto";
const I = class {
  constructor() {
    a(this, "axios");
    a(this, "logger", console);
    this.axios = B.create(), this.axios.interceptors.request.use(
      (t) => (this.logger.log(`${t.url}`), t.data && this.logger.info(`[Body]: ${JSON.stringify(t.data, null, 4)}`), t),
      (t) => (this.logger.error(t), t)
    ), this.axios.interceptors.response.use(
      (t) => (this.logger.log(`[Response]: ${JSON.stringify(t.data, null, 4)}`), t),
      (t) => {
        const {
          response: { status: n },
          message: s,
          config: { method: c, url: m, data: g, params: p }
        } = t;
        return this.logger.error({ status: n, message: s, method: c, url: m, data: g, params: p }), t;
      }
    );
  }
  static getInstance() {
    return this.instance ?? (this.instance = new I());
  }
  get(t, n) {
    return this.axios.get(t, { params: n });
  }
  post(t, n, s) {
    return this.axios.post(t, s, { params: n });
  }
};
let f = I;
a(f, "instance");
const M = e.object({
  partnerId: e.coerce.number().optional(),
  partnerKey: e.coerce.string().optional(),
  baseURL: e.coerce.string().url().optional(),
  accessToken: e.coerce.string().optional(),
  shopId: e.coerce.number().optional()
}), S = M.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK_SHOP_ID
});
if (!S.success)
  throw new Error(S.error.message);
const b = S.data, E = class {
  constructor() {
    a(this, "partnerId");
    a(this, "partnerKey");
    a(this, "baseURL");
    a(this, "accessToken");
    a(this, "shopId");
    this.partnerId = b.partnerId ?? 0, this.partnerKey = b.partnerKey ?? "", this.baseURL = b.baseURL ?? "", this.accessToken = b.accessToken ?? "", this.shopId = b.shopId ?? 0;
  }
  static getInstance() {
    return this.instance ?? (this.instance = new E());
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
let h = E;
a(h, "instance");
function H(r, ...t) {
  const n = N("sha256", r);
  return t.filter((s) => !!s).forEach((s) => n.update(s)), n.digest("hex");
}
function R(r) {
  const t = r ? r.getTime() : Date.now();
  return Math.round(t / 1e3).toString();
}
function $(r) {
  const {
    partner_id: t,
    partner_key: n,
    path: s,
    base_url: c,
    access_token: m,
    shop_id: g,
    params: p = {}
  } = r, u = t.toString(), i = {};
  for (const d in p) {
    const l = p[d];
    Array.isArray(l) ? i[d] = [
      l[0],
      ...l.slice(1).map((O) => `&${d}=${O}`)
    ].join("") : l instanceof Date ? i[d] = R(l) : i[d] = `${l}`;
  }
  const _ = R(), P = new URL(s, c), D = H(
    n,
    u,
    s,
    _,
    m,
    g.toString()
  );
  return P.search = new URLSearchParams({
    ...m && {
      access_token: m
    },
    ...i,
    sign: D,
    partner_id: u,
    timestamp: _
  }).toString(), P.toString().replace(new RegExp("%26", "g"), "&").replace(new RegExp("%3D", "g"), "=");
}
const T = f.getInstance();
function j(r) {
  return async function(n) {
    const s = r.transformRequestParameter ?? ((_) => _), c = await r.requestParameterSchema.transform(s).safeParseAsync(n);
    if (!c.success)
      throw new Error(c.error.message);
    const m = c.data, g = h.getInstance().value, p = $({
      ...g,
      path: r.path,
      params: m
    });
    let u;
    if (r.method === "POST") {
      const _ = await r.requestBodySchema.safeParseAsync(r.body);
      if (!_.success)
        throw new Error(_.error.message);
      u = (await T.post(p, {}, r.body)).data;
    } else
      u = (await T.get(p)).data;
    const i = await r.responseSchema.safeParseAsync(u);
    if (!i.success)
      throw new Error(i.error.message);
    return i.data;
  };
}
const k = "/api/v2/product/get_item_list", y = ["NORMAL", "DELETED", "UNLIST", "BANNED"], w = e.object({
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
}), z = j({
  method: "GET",
  path: k,
  requestParameterSchema: w,
  transformRequestParameter(r) {
    return r.update_time_from = r.update_time_from ?? /* @__PURE__ */ new Date("01/01/2022"), r.update_time_to = r.update_time_to ?? /* @__PURE__ */ new Date(), r;
  },
  responseSchema: L
}), x = "/api/v2/product/get_item_base_info", U = e.object({
  item_id_list: e.array(e.number().int()).min(1).max(50),
  need_tax_info: e.boolean().optional(),
  need_complaint_policy: e.boolean().optional()
}), G = e.object({
  value_id: e.number(),
  original_value_name: e.string(),
  value_unit: e.string()
}), V = e.object({
  attribute_id: e.number(),
  original_attribute_name: e.string(),
  is_mandatory: e.boolean(),
  attribute_value_list: e.array(G)
}), C = e.object({
  currency: e.string(),
  original_price: e.number(),
  current_price: e.number()
}), F = e.object({
  location_id: e.string(),
  stock: e.number()
}), J = e.object({
  logistic_id: e.number(),
  logistic_name: e.string(),
  enabled: e.boolean(),
  shipping_fee: e.number().optional(),
  is_free: e.boolean(),
  estimated_shipping_fee: e.number().optional()
}), Y = e.object({
  field_type: e.string(),
  text: e.string().optional(),
  image_info: e.object({
    image_id: e.string(),
    image_url: e.string()
  }).optional()
}), Q = e.object({
  item_id: e.number(),
  category_id: e.number(),
  item_name: e.string(),
  item_sku: e.string(),
  create_time: e.number(),
  update_time: e.number(),
  attribute_list: e.array(V),
  price_info: e.array(C),
  stock_info_v2: e.object({
    summary_info: e.object({
      total_reserved_stock: e.number(),
      total_available_stock: e.number()
    }),
    seller_stock: e.array(F)
  }),
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
  logistic_info: e.array(J),
  pre_order: e.object({
    is_pre_order: e.boolean(),
    days_to_ship: e.number()
  }),
  condition: e.string(),
  size_chart: e.string(),
  item_status: e.string(),
  has_model: e.boolean(),
  promotion_id: e.number(),
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
  }),
  description_type: e.string(),
  description_info: e.object({
    extended_description: e.object({
      field_list: e.array(Y)
    })
  })
}), A = e.object({
  error: e.string(),
  message: e.string(),
  warning: e.string(),
  request_id: e.string(),
  response: e.object({
    item_list: e.array(Q).optional()
  })
}), W = j({
  method: "GET",
  path: x,
  requestParameterSchema: U,
  responseSchema: A
}), X = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  API_V2_PRODUCT_GET_ITEM_BASE_INFO: x,
  API_V2_PRODUCT_GET_ITEM_LIST: k,
  ITEM_STATUS: y,
  getItemBaseInfo: W,
  getItemBaseInfoRequestParametersSchema: U,
  getItemBaseInfoResponseSchema: A,
  getItemList: z,
  getItemListRequestParametersSchema: w,
  getItemListResponseSchema: L,
  itemSchema: v
}, Symbol.toStringTag, { value: "Module" })), Z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  product: X
}, Symbol.toStringTag, { value: "Module" })), o = h.getInstance();
class se {
  constructor(t) {
    a(this, "v2", Z);
    o.accessToken = t.accessToken, o.baseURL = t.baseURL, o.partnerId = t.partnerId, o.partnerKey = t.partnerKey, o.accessToken = t.accessToken, o.shopId = t.shopId;
  }
  setPartnerId(t) {
    return o.partnerId = t, this;
  }
  setBaseURL(t) {
    return o.baseURL = t, this;
  }
  setPartnerKey(t) {
    return o.partnerKey = t, this;
  }
  setAccessToken(t) {
    return o.accessToken = t, this;
  }
  setShopId(t) {
    return o.shopId = t, this;
  }
}
export {
  se as ShopeeSdk
};
