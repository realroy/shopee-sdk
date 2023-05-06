import { z as e } from "zod";
import U from "axios";
const x = "/api/v2/product/get_item_base_info", L = "/api/v2/product/get_item_extra_info", k = "/api/v2/product/get_item_list";
async function E(r, ...t) {
  let n;
  return typeof globalThis.crypto < "u" && (n = await v(r, ...t)), n = await q(r, ...t), n;
}
async function v(r, ...t) {
  const n = new TextEncoder(), o = n.encode(r);
  let s = new Uint8Array();
  t.forEach((m) => {
    m && (s = n.encode(m));
  });
  const i = await crypto.subtle.importKey(
    "raw",
    o,
    { name: "HMAC", hash: "SHA-256" },
    !1,
    ["sign"]
  ), p = await crypto.subtle.sign(
    { name: "HMAC", hash: { name: "sha-256" } },
    i,
    s
  ), c = new Uint8Array(p);
  return Array.from(c).map((m) => m.toString(16).padStart(2, "0")).join("");
}
async function q(r, ...t) {
  const { createHmac: n } = await import("crypto"), o = n("sha256", r);
  return t.filter((s) => !!s).forEach((s) => o.update(s)), o.digest("hex");
}
const O = e.object({
  partnerId: e.coerce.number().optional(),
  partnerKey: e.coerce.string().optional(),
  baseURL: e.coerce.string().url().optional(),
  accessToken: e.coerce.string().optional(),
  shopId: e.coerce.number().optional()
}), b = O.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK_SHOP_ID
});
if (!b.success)
  throw new Error(b.error.message);
const g = b.data;
function ie(r) {
  return new URL(r, g.baseURL).toString();
}
function f(r) {
  const t = r ? r.getTime() : Date.now();
  return Math.round(t / 1e3).toString();
}
async function D(r) {
  const {
    partner_id: t,
    partner_key: n,
    path: o,
    base_url: s,
    access_token: i,
    shop_id: p,
    params: c = {}
  } = r, a = t.toString(), m = p.toString(), u = {};
  for (const d in c) {
    const l = c[d];
    Array.isArray(l) ? u[d] = [
      l[0],
      ...l.slice(1).map((j) => `&${d}=${j}`)
    ].join("") : l instanceof Date ? u[d] = f(l) : u[d] = `${l}`;
  }
  const I = f(), P = new URL(o, s), A = await E(
    n,
    a,
    o,
    I,
    i,
    m
  );
  return P.search = new URLSearchParams({
    ...u,
    partner_id: a,
    shop_id: m,
    access_token: i,
    sign: A,
    timestamp: I
  }).toString(), P.toString().replace(new RegExp("%26", "g"), "&").replace(new RegExp("%3D", "g"), "=");
}
class S {
  constructor() {
    this.logger = console, this.axios = U.create(), this.axios.interceptors.request.use(
      (t) => (this.logger.log(`${t.url}`), t.data && this.logger.info(`[Body]: ${JSON.stringify(t.data, null, 4)}`), t),
      (t) => (this.logger.error(t), t)
    ), this.axios.interceptors.response.use(
      (t) => (this.logger.log(`[Response]: ${JSON.stringify(t.data, null, 4)}`), t),
      (t) => {
        const {
          response: n,
          message: o,
          config: { method: s, url: i, data: p, params: c }
        } = t, a = n == null ? void 0 : n.status;
        return this.logger.error({ status: a, message: o, method: s, url: i, data: p, params: c }), t;
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
class h {
  constructor() {
  }
  static getInstance() {
    return this.instance ?? (this.instance = new h());
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
const R = S.getInstance();
function y(r) {
  return async function(n) {
    const o = r.transformRequestParameter ?? ((u) => u), s = await r.requestParameterSchema.transform(o).safeParseAsync(n);
    if (!s.success)
      throw new Error(
        `parse request parameters error: ${s.error.message}`
      );
    const i = s.data, p = h.getInstance().value, c = await D({
      ...p,
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
      a = (await R.post(c, {}, r.body)).data;
    } else
      a = (await R.get(c)).data;
    const m = await r.responseSchema.safeParseAsync(a);
    if (!m.success)
      throw new Error(`parse response error: ${m.error.message}`);
    return m.data;
  };
}
const T = ["NORMAL", "DELETED", "UNLIST", "BANNED"], H = e.object({
  offset: e.number().int().min(0).optional(),
  page_size: e.number().int().positive().max(100).optional(),
  update_time_from: e.date().optional(),
  update_time_to: e.date().optional(),
  item_status: e.array(e.enum(T))
}), K = e.object({
  item_id: e.number().int(),
  item_status: e.enum(T),
  update_time: e.number().int()
}), B = e.object({
  error: e.string(),
  message: e.string().nullable().optional(),
  warning: e.string().nullable().optional(),
  request_id: e.string(),
  response: e.object({
    item: e.array(K.optional()).optional()
  }).optional(),
  total_count: e.number().int().optional(),
  has_next_page: e.boolean().optional(),
  next_offset: e.number().int().optional()
}), N = y({
  method: "GET",
  path: k,
  requestParameterSchema: H,
  transformRequestParameter(r) {
    return r.update_time_from = r.update_time_from ?? /* @__PURE__ */ new Date("01/01/2022"), r.update_time_to = r.update_time_to ?? /* @__PURE__ */ new Date(), r;
  },
  responseSchema: B
}), C = e.object({
  item_id_list: e.string(),
  need_tax_info: e.coerce.boolean().optional(),
  need_complaint_policy: e.coerce.boolean().optional()
}), M = e.object({
  value_id: e.number(),
  original_value_name: e.string(),
  value_unit: e.string()
}), $ = e.object({
  attribute_id: e.number(),
  original_attribute_name: e.string(),
  is_mandatory: e.boolean(),
  attribute_value_list: e.array(M)
}), G = e.object({
  currency: e.string(),
  original_price: e.number(),
  current_price: e.number()
}), z = e.object({
  location_id: e.string(),
  stock: e.number()
}), V = e.object({
  logistic_id: e.number(),
  logistic_name: e.string(),
  enabled: e.boolean(),
  shipping_fee: e.number().optional(),
  is_free: e.boolean(),
  estimated_shipping_fee: e.number().optional()
}), F = e.object({
  field_type: e.string(),
  text: e.string().optional(),
  image_info: e.object({
    image_id: e.string(),
    image_url: e.string()
  }).optional()
}), W = e.object({
  item_id: e.number(),
  category_id: e.number(),
  item_name: e.string(),
  item_sku: e.string(),
  create_time: e.number(),
  update_time: e.number(),
  attribute_list: e.array($).optional(),
  price_info: e.array(G).optional(),
  stock_info_v2: e.object({
    summary_info: e.object({
      total_reserved_stock: e.number(),
      total_available_stock: e.number()
    }),
    seller_stock: e.array(z).optional()
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
  logistic_info: e.array(V),
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
      field_list: e.array(F)
    })
  })
}), J = e.object({
  error: e.string(),
  message: e.string(),
  warning: e.string(),
  request_id: e.string(),
  response: e.object({
    item_list: e.array(W).optional()
  })
}), X = y({
  method: "GET",
  path: x,
  requestParameterSchema: C,
  responseSchema: J,
  transformRequestParameter(r) {
    return r.need_tax_info = !!r.need_tax_info, r.need_complaint_policy = !!r.need_complaint_policy, r;
  }
}), Y = e.object({
  item_id_list: e.string()
}), Q = e.object({
  item_id: e.number(),
  sale: e.number(),
  views: e.number(),
  likes: e.number(),
  rating_star: e.number(),
  comment_count: e.number()
}), Z = e.object({
  error: e.string(),
  message: e.string(),
  warning: e.string().optional(),
  request_id: e.string(),
  response: e.object({
    item_list: e.array(Q).optional()
  }).optional()
}), ee = y({
  method: "GET",
  path: L,
  requestParameterSchema: Y,
  responseSchema: Z
}), te = {
  getItemList: N,
  getItemBaseInfo: X,
  getItemExtraInfo: ee
}, w = "/api/v2/shop/auth_partner";
async function re({
  redirectURL: r,
  redirectSign: t
}) {
  const { baseURL: n, partnerId: o, partnerKey: s } = h.getInstance();
  if (!s || !o)
    throw new Error("partnerKey is undefined");
  const i = new URL(w, n), p = f(/* @__PURE__ */ new Date()), c = await E(
    s,
    o.toString(),
    w,
    p
  ), a = new URL(r);
  return a.searchParams.append("sign", t), i.search = new URLSearchParams({
    partner_id: o.toString(),
    redirect: a.toString(),
    timestamp: p,
    sign: c
  }).toString(), i.toString();
}
const ne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  authPartner: re
}, Symbol.toStringTag, { value: "Module" })), oe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  product: te,
  shop: ne
}, Symbol.toStringTag, { value: "Module" })), _ = h.getInstance();
class ce {
  constructor(t) {
    _.accessToken = t.accessToken ?? g.accessToken, _.baseURL = t.baseURL ?? g.baseURL, _.partnerId = t.partnerId ?? g.partnerId, _.partnerKey = t.partnerKey ?? g.partnerKey, _.shopId = t.shopId ?? g.shopId, this.v2 = oe;
  }
  setPartnerId(t) {
    return _.partnerId = t, this;
  }
  setBaseURL(t) {
    return _.baseURL = t, this;
  }
  setPartnerKey(t) {
    return _.partnerKey = t, this;
  }
  setAccessToken(t) {
    return _.accessToken = t, this;
  }
  setShopId(t) {
    return _.shopId = t, this;
  }
}
export {
  x as API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH,
  L as API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH,
  k as API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  ce as ShopeeSdk,
  E as generateHmac,
  q as generateHmacWithNodeCrypto,
  v as generateHmacWithWebCryptoAPI,
  ie as mockURL,
  D as signURL,
  f as toTimestamp
};
