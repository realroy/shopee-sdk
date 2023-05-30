import v from "axios";
import { z as e } from "zod";
async function E(r, ...t) {
  let n;
  return typeof globalThis.crypto < "u" && (n = await L(r, ...t)), n = await q(r, ...t), n;
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
  ), _ = new Uint8Array(c);
  return Array.from(_).map((i) => i.toString(16).padStart(2, "0")).join("");
}
async function q(r, ...t) {
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
    params: _ = {}
  } = r, p = t.toString(), i = c.toString(), m = {};
  for (const b in _) {
    const g = _[b];
    Array.isArray(g) ? m[b] = [
      g[0],
      ...g.slice(1).map((O) => `&${b}=${O}`)
    ].join("") : g instanceof Date ? m[b] = S(g) : m[b] = `${g}`;
  }
  const f = S(), I = new URL(o, s), k = await E(
    n,
    p,
    o,
    f,
    a,
    i
  );
  return I.search = new URLSearchParams({
    ...m,
    partner_id: p,
    shop_id: i,
    ...!!a && { access_token: a },
    sign: k,
    timestamp: f
  }).toString(), I.toString().replace(new RegExp("%26", "g"), "&").replace(new RegExp("%3D", "g"), "=");
}
class y {
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
          config: { method: s, url: a, data: c, params: _ }
        } = t, p = n == null ? void 0 : n.status;
        throw this.logger.error({ status: p, message: o, method: s, url: a, data: c, params: _ }), t;
      }
    );
  }
  static getInstance() {
    return this.instance ?? (this.instance = new y());
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
const D = y.getInstance();
function d(r) {
  return async function(n) {
    const o = r.transformRequestParameter ?? ((f) => f), s = await r.requestParameterSchema.transform(o).safeParseAsync(n);
    if (!s.success)
      throw new Error(
        `parse request parameters error: ${s.error.message}`
      );
    const a = s.data, c = l.getInstance().value, _ = await j({
      ...c,
      path: r.path,
      params: a
    }), i = (await D.get(_)).data, m = await r.responseSchema.safeParseAsync(i);
    if (!m.success)
      throw new Error(`parse response error: ${m.error.message}`);
    return m.data;
  };
}
const x = y.getInstance();
function U(r) {
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
    }), _ = s.data, { data: p } = await x.post(c, {}, _), i = await r.responseSchema.safeParseAsync(p);
    if (!i.success)
      throw new Error(`parse response error: ${i.error.message}`);
    return i.data;
  };
}
const H = "/api/v2/order/get_order_list", C = "/api/v2/order/get_order_detail", N = [
  "UNPAID",
  "READY_TO_SHIP",
  "PROCESSED",
  "SHIPPED",
  "COMPLETED",
  "IN_CANCEL",
  "CANCELLED",
  "INVOICE_PENDING"
], K = [
  "buyer_user_id",
  "buyer_username",
  "estimated_shipping_fee",
  "recipient_address",
  "actual_shipping_fee",
  "goods_to_declare",
  "note",
  "note_update_time",
  "item_list",
  "pay_time",
  "dropshipper",
  "dropshipper_phone",
  "split_up",
  "buyer_cancel_reason",
  "cancel_by",
  "cancel_reason",
  "actual_shipping_fee_confirmed",
  "buyer_cpf_id",
  "fulfillment_flag",
  "pickup_done_time",
  "package_list",
  "shipping_carrier",
  "payment_method",
  "total_amount",
  "buyer_username",
  "invoice_data",
  "checkout_shipping_carrier",
  "reverse_shipping_fee",
  "order_chargeable_weight_gram",
  "edt",
  "prescription_images",
  "prescription_check_status"
], M = e.object({
  order_sn_list: e.array(e.string()),
  response_optional_fields: e.enum(K).optional()
}), $ = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  response: e.object({
    order_list: e.array(
      e.object({
        checkout_shipping_carrier: e.null(),
        reverse_shipping_fee: e.null(),
        actual_shipping_fee: e.null(),
        actual_shipping_fee_confirmed: e.boolean(),
        buyer_cancel_reason: e.string(),
        buyer_cpf_id: e.null(),
        buyer_user_id: e.number(),
        buyer_username: e.string(),
        cancel_by: e.string(),
        cancel_reason: e.string(),
        cod: e.boolean(),
        create_time: e.number(),
        currency: e.string(),
        days_to_ship: e.number(),
        dropshipper: e.string(),
        dropshipper_phone: e.string(),
        estimated_shipping_fee: e.number(),
        fulfillment_flag: e.string(),
        goods_to_declare: e.boolean(),
        invoice_data: e.null(),
        item_list: e.array(
          e.object({
            item_id: e.number(),
            item_name: e.string(),
            item_sku: e.string(),
            model_id: e.number(),
            model_name: e.string(),
            model_sku: e.string(),
            model_quantity_purchased: e.number(),
            model_original_price: e.number(),
            model_discounted_price: e.number(),
            wholesale: e.boolean(),
            weight: e.number(),
            add_on_deal: e.boolean(),
            main_item: e.boolean(),
            add_on_deal_id: e.number(),
            promotion_type: e.string(),
            promotion_id: e.number(),
            order_item_id: e.number(),
            promotion_group_id: e.number(),
            image_info: e.object({
              image_url: e.string()
            }),
            product_location_id: e.array(e.string())
          })
        ),
        message_to_seller: e.string(),
        note: e.string(),
        note_update_time: e.number(),
        order_sn: e.string(),
        order_status: e.string(),
        package_list: e.array(
          e.object({
            package_number: e.string(),
            logistics_status: e.string(),
            shipping_carrier: e.string(),
            item_list: e.array(
              e.object({
                item_id: e.number(),
                model_id: e.number(),
                model_quantity: e.number()
              })
            )
          })
        ),
        pay_time: e.number(),
        payment_method: e.string(),
        pickup_done_time: e.number(),
        recipient_address: e.object({
          name: e.string(),
          phone: e.string(),
          town: e.string(),
          district: e.string(),
          city: e.string(),
          state: e.string(),
          region: e.string(),
          zipcode: e.string(),
          full_address: e.string()
        }),
        region: e.string(),
        ship_by_date: e.number(),
        shipping_carrier: e.string(),
        split_up: e.boolean(),
        total_amount: e.number(),
        update_time: e.number()
      })
    )
  }),
  request_id: e.string()
}), B = d({
  path: C,
  requestParameterSchema: M,
  responseSchema: $
}), z = e.object({
  time_range_field: e.enum(["create_time", "update_time"]),
  time_from: e.date(),
  time_to: e.date(),
  page_size: e.number().min(1).max(100),
  cursor: e.string().optional(),
  order_status: e.enum(N).optional(),
  response_optional_fields: e.enum(["order_status"]).optional().default("order_status")
}), V = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  response: e.object({
    more: e.boolean(),
    next_cursor: e.string(),
    order_list: e.array(
      e.object({
        order_sn: e.string()
      })
    )
  }),
  request_id: e.string()
}), G = d({
  path: H,
  requestParameterSchema: z,
  responseSchema: V
}), F = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOrderDetail: B,
  getOrderList: G
}, Symbol.toStringTag, { value: "Module" })), Q = "/api/v2/product/get_item_base_info", W = "/api/v2/product/get_item_extra_info", J = "/api/v2/product/get_item_list", Y = "/api/v2/product/get_model_list", T = ["NORMAL", "DELETED", "UNLIST", "BANNED"], X = e.object({
  item_id_list: e.string(),
  need_tax_info: e.coerce.boolean().optional(),
  need_complaint_policy: e.coerce.boolean().optional()
}), Z = e.object({
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
        }).optional()
      })
    ).optional()
  })
}), ee = d({
  path: Q,
  requestParameterSchema: X,
  responseSchema: Z,
  transformRequestParameter(r) {
    return r.need_tax_info = !!r.need_tax_info, r.need_complaint_policy = !!r.need_complaint_policy, r;
  }
}), te = e.object({
  item_id_list: e.string()
}), re = e.object({
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
}), ne = d({
  path: W,
  requestParameterSchema: te,
  responseSchema: re
}), se = e.object({
  offset: e.number().int().min(0).optional(),
  page_size: e.number().int().positive().max(100).optional(),
  update_time_from: e.date().optional(),
  update_time_to: e.date().optional(),
  item_status: e.array(e.enum(T))
}), oe = e.object({
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
}), ae = d({
  path: J,
  requestParameterSchema: se,
  transformRequestParameter(r) {
    return r.update_time_from = r.update_time_from ?? /* @__PURE__ */ new Date("01/01/2022"), r.update_time_to = r.update_time_to ?? /* @__PURE__ */ new Date(), r;
  },
  responseSchema: oe
}), ie = e.object({
  item_id: e.string()
}), ce = e.object({
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
}), _e = d({
  path: Y,
  requestParameterSchema: ie,
  responseSchema: ce
}), pe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItemBaseInfo: ee,
  getItemExtraInfo: ne,
  getItemList: ae,
  getModelList: _e
}, Symbol.toStringTag, { value: "Module" })), me = "/api/v2/auth/token/get", w = e.object({
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
}), ue = U({
  path: me,
  requestParameterSchema: w,
  responseSchema: A,
  transformRequestParameter(r) {
    return r.partner_id = r.partner_id ?? l.getInstance().partnerId, r;
  }
}), le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAccessToken: ue,
  getAccessTokenRequestParametersSchema: w,
  getAccessTokenResponseSchema: A
}, Symbol.toStringTag, { value: "Module" })), R = "/api/v2/shop/auth_partner";
async function ge({
  redirectURL: r,
  redirectSign: t
}) {
  const { baseURL: n, partnerId: o, partnerKey: s } = l.getInstance();
  if (!s || !o)
    throw new Error("partnerKey is undefined");
  const a = new URL(R, n), c = S(/* @__PURE__ */ new Date()), _ = await E(
    s,
    o.toString(),
    R,
    c
  ), p = new URL(r);
  return p.searchParams.append("sign", t), a.search = new URLSearchParams({
    partner_id: o.toString(),
    redirect: p.toString(),
    timestamp: c,
    sign: _
  }).toString(), a.toString();
}
const de = e.object({
  code: e.string(),
  shop_id: e.string(),
  sign: e.string()
});
async function be(r) {
  const t = await de.safeParseAsync(r);
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
const he = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  authPartner: ge,
  verifyCallback: be
}, Symbol.toStringTag, { value: "Module" })), fe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  order: F,
  product: pe,
  publicShopee: le,
  shop: he
}, Symbol.toStringTag, { value: "Module" })), ye = e.object({
  partnerId: e.coerce.number().optional(),
  partnerKey: e.coerce.string().optional(),
  baseURL: e.coerce.string().url().optional(),
  accessToken: e.coerce.string().optional(),
  shopId: e.coerce.number().optional()
}), P = ye.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK_SHOP_ID
});
if (!P.success)
  throw new Error(P.error.message);
const h = P.data, u = l.getInstance();
class Ie {
  constructor(t) {
    u.accessToken = t.accessToken ?? h.accessToken, u.baseURL = t.baseURL ?? h.baseURL, u.partnerId = t.partnerId ?? h.partnerId, u.partnerKey = t.partnerKey ?? h.partnerKey, u.shopId = t.shopId ?? h.shopId;
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
    return fe;
  }
}
export {
  Q as API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH,
  W as API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH,
  J as API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  Y as API_V2_PRODUCT_GET_MODEL_LIST_PATH,
  me as API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH,
  R as API_V2_SHOP_AUTH_PARTNER,
  T as ITEM_STATUS,
  Ie as ShopeeSdk,
  E as generateHmac,
  j as signURL,
  S as toTimestamp
};
