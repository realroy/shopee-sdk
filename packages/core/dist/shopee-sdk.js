import q from "axios";
import { z as e } from "zod";
async function L(r, ...t) {
  let o;
  return typeof globalThis.crypto < "u" && (o = await D(r, ...t)), o = await x(r, ...t), o;
}
async function D(r, ...t) {
  const o = new TextEncoder(), n = o.encode(r);
  let s = new Uint8Array();
  t.forEach((p) => {
    p && (s = o.encode(p));
  });
  const a = await crypto.subtle.importKey(
    "raw",
    n,
    { name: "HMAC", hash: "SHA-256" },
    !1,
    ["sign"]
  ), i = await crypto.subtle.sign(
    { name: "HMAC", hash: { name: "sha-256" } },
    a,
    s
  ), c = new Uint8Array(i);
  return Array.from(c).map((p) => p.toString(16).padStart(2, "0")).join("");
}
async function x(r, ...t) {
  const { createHmac: o } = await import("crypto"), n = o("sha256", r);
  return t.filter((s) => !!s).forEach((s) => n.update(s)), n.digest("hex");
}
function I(r) {
  const t = r ? r.getTime() : Date.now();
  return Math.round(t / 1e3).toString();
}
async function T(r) {
  const {
    partner_id: t,
    partner_key: o,
    path: n,
    base_url: s,
    access_token: a,
    shop_id: i,
    params: c = {}
  } = r, _ = t.toString(), p = i.toString(), m = {};
  for (const h in c) {
    const d = c[h];
    Array.isArray(d) ? m[h] = [
      d[0],
      ...d.slice(1).map((v) => `&${h}=${v}`)
    ].join("") : d instanceof Date ? m[h] = I(d) : m[h] = `${d}`;
  }
  const l = I(), y = new URL(n, s), O = await L(
    o,
    _,
    n,
    l,
    a,
    p
  );
  return y.search = new URLSearchParams({
    ...m,
    partner_id: _,
    shop_id: p,
    ...!!a && { access_token: a },
    sign: O,
    timestamp: l
  }).toString(), y.toString().replace(new RegExp("%26", "g"), "&").replace(new RegExp("%3D", "g"), "=");
}
class S {
  constructor() {
    this.logger = console, this.logInterceptorIds = [], this.isLogEnabled = !1, this.axios = q.create(), this.isLogEnabled && this.addLogInterceptor();
  }
  addLogInterceptor() {
    const t = this.axios.interceptors.request.use(
      (n) => (this.logger.log(`${n.url}`), n.data && this.logger.info(`[Body]: ${JSON.stringify(n.data, null, 4)}`), n),
      (n) => {
        throw this.logger.error(n), n;
      }
    ), o = this.axios.interceptors.response.use(
      (n) => (this.logger.log(`[Response]: ${JSON.stringify(n.data, null, 4)}`), n),
      (n) => {
        const {
          response: s,
          message: a,
          config: { method: i, url: c, data: _, params: p }
        } = n, m = s == null ? void 0 : s.status;
        throw this.logger.error({ status: m, message: a, method: i, url: c, data: _, params: p }), n;
      }
    );
    this.logInterceptorIds = [t, o];
  }
  removeLogInterceptor() {
    this.logInterceptorIds.forEach(this.axios.interceptors.request.eject);
  }
  static getInstance() {
    return this.instance ?? (this.instance = new S());
  }
  setLogEnabled(t) {
    return this.isLogEnabled = t, this.isLogEnabled ? this.addLogInterceptor() : this.removeLogInterceptor(), this.isLogEnabled;
  }
  get(t, o) {
    return this.axios.get(t, { params: o });
  }
  post(t, o, n) {
    return this.axios.post(t, n, { params: o });
  }
}
class g {
  constructor() {
    this.isLogEnabled = !1;
  }
  static getInstance() {
    return this.instance ?? (this.instance = new g());
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
const P = S.getInstance();
function b(r) {
  return async function(o) {
    const n = r.transformRequestParameter ?? ((y) => y), s = await r.requestParameterSchema.transform(n).safeParseAsync(o);
    if (!s.success)
      throw new Error(
        `parse request parameters error: ${s.error.message}`
      );
    const a = s.data, i = g.getInstance(), c = i.value;
    P.setLogEnabled(i.isLogEnabled);
    const _ = await T({
      ...c,
      path: r.path,
      params: a
    }), m = (await P.get(_)).data, l = await r.responseSchema.safeParseAsync(m);
    if (!l.success)
      throw new Error(`parse response error: ${l.error.message}`);
    return l.data;
  };
}
const R = S.getInstance();
function U(r) {
  return async function(o) {
    const n = r.transformRequestParameter ?? ((l) => l), s = await r.requestParameterSchema.transform(n).safeParseAsync(o);
    if (!s.success)
      throw new Error(
        `parse request parameters error: ${s.error.message}`
      );
    const a = g.getInstance(), i = a.value;
    R.setLogEnabled(a.isLogEnabled);
    const c = await T({
      ...i,
      path: r.path,
      params: {}
    }), _ = s.data, { data: p } = await R.post(c, {}, _), m = await r.responseSchema.safeParseAsync(p);
    if (!m.success)
      throw new Error(`parse response error: ${m.error.message}`);
    return m.data;
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
  response_optional_fields: e.array(e.enum(K)).optional()
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
}), B = b({
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
}), G = b({
  path: H,
  requestParameterSchema: z,
  responseSchema: V
}), F = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOrderDetail: B,
  getOrderList: G
}, Symbol.toStringTag, { value: "Module" })), Q = "/api/v2/product/get_item_base_info", W = "/api/v2/product/get_item_extra_info", J = "/api/v2/product/get_item_list", Y = "/api/v2/product/get_model_list", w = ["NORMAL", "DELETED", "UNLIST", "BANNED"], X = e.object({
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
}), ee = b({
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
}), ne = b({
  path: W,
  requestParameterSchema: te,
  responseSchema: re
}), se = e.object({
  offset: e.number().int().min(0).optional(),
  page_size: e.number().int().positive().max(100).optional(),
  update_time_from: e.date().optional(),
  update_time_to: e.date().optional(),
  item_status: e.array(e.enum(w))
}), oe = e.object({
  error: e.string(),
  message: e.string().nullable().optional(),
  warning: e.string().nullable().optional(),
  request_id: e.string(),
  response: e.object({
    item: e.array(
      e.object({
        item_id: e.number().int(),
        item_status: e.enum(w),
        update_time: e.number().int()
      })
    ).optional()
  }).optional(),
  total_count: e.number().int().optional(),
  has_next_page: e.boolean().optional(),
  next_offset: e.number().int().optional()
}), ae = b({
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
}), _e = b({
  path: Y,
  requestParameterSchema: ie,
  responseSchema: ce
}), pe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItemBaseInfo: ee,
  getItemExtraInfo: ne,
  getItemList: ae,
  getModelList: _e
}, Symbol.toStringTag, { value: "Module" })), me = "/api/v2/auth/token/get", A = e.object({
  code: e.string(),
  partner_id: e.number().optional(),
  shop_id: e.number().optional(),
  main_account_id: e.number().optional()
}), k = e.object({
  access_token: e.string(),
  error: e.string(),
  expires_in: e.number(),
  message: e.string(),
  refresh_token: e.string(),
  request_id: e.string(),
  shop_id_list: e.array(e.number())
}), ue = U({
  path: me,
  requestParameterSchema: A,
  responseSchema: k,
  transformRequestParameter(r) {
    return r.partner_id = r.partner_id ?? g.getInstance().partnerId, r;
  }
}), le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAccessToken: ue,
  getAccessTokenRequestParametersSchema: A,
  getAccessTokenResponseSchema: k
}, Symbol.toStringTag, { value: "Module" })), j = "/api/v2/shop/auth_partner";
async function ge({
  redirectURL: r,
  redirectSign: t
}) {
  const { baseURL: o, partnerId: n, partnerKey: s } = g.getInstance();
  if (!s || !n)
    throw new Error("partnerKey is undefined");
  const a = new URL(j, o), i = I(/* @__PURE__ */ new Date()), c = await L(
    s,
    n.toString(),
    j,
    i
  ), _ = new URL(r);
  return _.searchParams.append("sign", t), a.search = new URLSearchParams({
    partner_id: n.toString(),
    redirect: _.toString(),
    timestamp: i,
    sign: c
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
  const { code: o, shop_id: n, sign: s } = t.data;
  return {
    code: o,
    shopId: n,
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
}), E = ye.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK_SHOP_ID
});
if (!E.success)
  throw new Error(E.error.message);
const f = E.data, u = g.getInstance();
class Ee {
  constructor(t) {
    u.accessToken = t.accessToken ?? f.accessToken, u.baseURL = t.baseURL ?? f.baseURL, u.partnerId = t.partnerId ?? f.partnerId, u.partnerKey = t.partnerKey ?? f.partnerKey, u.shopId = t.shopId ?? f.shopId, u.isLogEnabled = t.isLogEnabled ?? !1;
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
  setIsLogEnabled(t) {
    return u.isLogEnabled = t, this;
  }
  get v2() {
    return fe;
  }
}
export {
  C as API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  H as API_V2_ORDER_GET_ORDER_LIST_PATH,
  Q as API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH,
  W as API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH,
  J as API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  Y as API_V2_PRODUCT_GET_MODEL_LIST_PATH,
  me as API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH,
  j as API_V2_SHOP_AUTH_PARTNER,
  w as ITEM_STATUS,
  K as ORDER_RESPONSE_OPTIONAL_FIELDS,
  N as ORDER_STATUS,
  Ee as ShopeeSdk,
  L as generateHmac,
  T as signURL,
  I as toTimestamp
};
