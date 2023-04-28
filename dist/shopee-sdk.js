var U = Object.defineProperty;
var q = (t, r, n) => r in t ? U(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[r] = n;
var a = (t, r, n) => (q(t, typeof r != "symbol" ? r + "" : r, n), n);
import K from "axios";
import { z as e } from "zod";
import { createHmac as B } from "crypto";
const I = class {
  constructor() {
    a(this, "axios");
    a(this, "logger", console);
    this.axios = K.create(), this.axios.interceptors.request.use(
      (r) => (this.logger.log(`${r.url}`), r.data && this.logger.info(`[Body]: ${JSON.stringify(r.data, null, 4)}`), r),
      (r) => (this.logger.error(r), r)
    ), this.axios.interceptors.response.use(
      (r) => (this.logger.log(`[Response]: ${JSON.stringify(r.data, null, 4)}`), r),
      (r) => {
        const {
          response: { status: n },
          message: o,
          config: { method: i, url: p, data: u, params: c }
        } = r;
        return this.logger.error({ status: n, message: o, method: i, url: p, data: u, params: c }), r;
      }
    );
  }
  static getInstance() {
    return this.instance ?? (this.instance = new I());
  }
  get(r, n) {
    return this.axios.get(r, { params: n });
  }
  post(r, n, o) {
    return this.axios.post(r, o, { params: n });
  }
};
let f = I;
a(f, "instance");
const N = e.object({
  partnerId: e.coerce.number().optional(),
  partnerKey: e.coerce.string().optional(),
  baseURL: e.coerce.string().url().optional(),
  accessToken: e.coerce.string().optional(),
  shopId: e.coerce.number().optional()
}), S = N.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_APP_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_APP_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK1_APP_SHOP_ID
});
if (!S.success)
  throw new Error(S.error.message);
const d = S.data, E = class {
  constructor() {
    a(this, "partnerId");
    a(this, "partnerKey");
    a(this, "baseURL");
    a(this, "accessToken");
    a(this, "shopId");
    this.partnerId = d.partnerId ?? 0, this.partnerKey = d.partnerKey ?? "", this.baseURL = d.baseURL ?? "", this.accessToken = d.accessToken ?? "", this.shopId = d.shopId ?? 0;
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
function M(t, ...r) {
  const n = B("sha256", t);
  return r.filter((o) => !!o).forEach((o) => n.update(o)), n.digest("hex");
}
function P(t) {
  const r = t ? t.getTime() : Date.now();
  return Math.round(r / 1e3).toString();
}
function H(t) {
  const {
    partner_id: r,
    partner_key: n,
    path: o,
    base_url: i,
    access_token: p,
    params: u = {}
  } = t, c = r.toString(), s = {};
  for (const _ in u) {
    const g = u[_];
    Array.isArray(g) ? s[_] = [
      g[0],
      ...g.slice(1).map((O) => `&${_}=${O}`)
    ].join("") : g instanceof Date ? s[_] = P(g) : s[_] = `${g}`;
  }
  const l = P(), m = new URL(o, i), D = M(
    n,
    c,
    o,
    l,
    ...[s == null ? void 0 : s.access_token, s == null ? void 0 : s.shop_id].filter(
      (_) => typeof _ < "u"
    )
  );
  return m.search = new URLSearchParams({
    ...p && {
      access_token: p
    },
    ...s,
    sign: D,
    partner_id: c,
    timestamp: l
  }).toString(), m.toString().replace(new RegExp("%26", "g"), "&").replace(new RegExp("%3D", "g"), "=");
}
const R = f.getInstance();
function j(t) {
  return async function(n) {
    const o = t.transformRequestParameter ?? ((m) => m), i = await t.requestParameterSchema.transform(o).safeParseAsync(n);
    if (!i.success)
      throw new Error(i.error.message);
    const p = i.data, u = h.getInstance().value, c = H({
      ...u,
      path: t.path,
      params: p
    });
    let s;
    if (t.method === "POST") {
      const m = await t.requestBodySchema.safeParseAsync(t.body);
      if (!m.success)
        throw new Error(m.error.message);
      s = (await R.post(c, {}, t.body)).data;
    } else
      s = (await R.get(c)).data;
    const l = await t.responseSchema.safeParseAsync(s);
    if (!l.success)
      throw new Error(l.error.message);
    return l.data;
  };
}
const T = "/api/v2/product/get_item_list", y = ["NORMAL", "DELETED", "UNLIST", "BANNED"], w = e.object({
  offset: e.number().int().min(0).optional(),
  page_size: e.number().int().positive().max(100).optional(),
  update_time_from: e.date().optional(),
  update_time_to: e.date().optional(),
  item_status: e.array(e.enum(y))
}), k = e.object({
  item_id: e.number().int(),
  item_status: e.enum(y),
  update_time: e.number().int()
}), A = e.object({
  error: e.string(),
  message: e.string().nullable().optional(),
  warning: e.string().nullable().optional(),
  request_id: e.string(),
  response: e.object({
    item: e.array(k.optional()).optional()
  }).optional(),
  total_count: e.number().int().optional(),
  has_next_page: e.boolean().optional(),
  next_offset: e.number().int().optional()
}), $ = j({
  method: "GET",
  path: T,
  requestParameterSchema: w,
  transformRequestParameter(t) {
    return t.update_time_from = t.update_time_from ?? /* @__PURE__ */ new Date("01/01/2022"), t.update_time_to = t.update_time_to ?? /* @__PURE__ */ new Date(), t;
  },
  responseSchema: A
}), v = "/api/v2/product/get_item_base_info", x = e.object({
  item_id_list: e.array(e.number().int()).min(1).max(50),
  need_tax_info: e.boolean().optional(),
  need_complaint_policy: e.boolean().optional()
}), z = e.object({
  value_id: e.number(),
  original_value_name: e.string(),
  value_unit: e.string()
}), G = e.object({
  attribute_id: e.number(),
  original_attribute_name: e.string(),
  is_mandatory: e.boolean(),
  attribute_value_list: e.array(z)
}), V = e.object({
  currency: e.string(),
  original_price: e.number(),
  current_price: e.number()
}), C = e.object({
  location_id: e.string(),
  stock: e.number()
}), F = e.object({
  logistic_id: e.number(),
  logistic_name: e.string(),
  enabled: e.boolean(),
  shipping_fee: e.number().optional(),
  is_free: e.boolean(),
  estimated_shipping_fee: e.number().optional()
}), J = e.object({
  field_type: e.string(),
  text: e.string().optional(),
  image_info: e.object({
    image_id: e.string(),
    image_url: e.string()
  }).optional()
}), Y = e.object({
  item_id: e.number(),
  category_id: e.number(),
  item_name: e.string(),
  item_sku: e.string(),
  create_time: e.number(),
  update_time: e.number(),
  attribute_list: e.array(G),
  price_info: e.array(V),
  stock_info_v2: e.object({
    summary_info: e.object({
      total_reserved_stock: e.number(),
      total_available_stock: e.number()
    }),
    seller_stock: e.array(C)
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
  logistic_info: e.array(F),
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
      field_list: e.array(J)
    })
  })
}), L = e.object({
  error: e.string(),
  message: e.string(),
  warning: e.string(),
  request_id: e.string(),
  response: e.object({
    item_list: e.array(Y).optional()
  })
}), Q = j({
  method: "GET",
  path: v,
  requestParameterSchema: x,
  responseSchema: L
}), W = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  API_V2_PRODUCT_GET_ITEM_BASE_INFO: v,
  API_V2_PRODUCT_GET_ITEM_LIST: T,
  ITEM_STATUS: y,
  getItemBaseInfo: Q,
  getItemBaseInfoRequestParametersSchema: x,
  getItemBaseInfoResponseSchema: L,
  getItemList: $,
  getItemListRequestParametersSchema: w,
  getItemListResponseSchema: A,
  itemSchema: k
}, Symbol.toStringTag, { value: "Module" })), X = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  product: W
}, Symbol.toStringTag, { value: "Module" })), b = h.getInstance(), ne = {
  v2: X,
  setPartnerId(t) {
    return b.partnerId = t, this;
  },
  setBaseURL(t) {
    return b.baseURL = t, this;
  },
  setPartnerKey(t) {
    return b.partnerKey = t, this;
  },
  setAccessToken(t) {
    return b.accessToken = t, this;
  },
  setShopId(t) {
    return b.shopId = t, this;
  }
};
export {
  ne as ShopeeSdk
};
