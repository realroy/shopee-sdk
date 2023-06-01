import Se from "axios";
import { z as e } from "zod";
async function W(r, ...t) {
  let n;
  return typeof globalThis.crypto < "u" && (n = await xe(r, ...t)), n = await ve(r, ...t), n;
}
async function xe(r, ...t) {
  const n = new TextEncoder(), o = n.encode(r);
  let a = new Uint8Array();
  t.forEach((i) => {
    i && (a = n.encode(i));
  });
  const s = await crypto.subtle.importKey(
    "raw",
    o,
    { name: "HMAC", hash: "SHA-256" },
    !1,
    ["sign"]
  ), c = await crypto.subtle.sign(
    { name: "HMAC", hash: { name: "sha-256" } },
    s,
    a
  ), u = new Uint8Array(c);
  return Array.from(u).map((i) => i.toString(16).padStart(2, "0")).join("");
}
async function ve(r, ...t) {
  const { createHmac: n } = await import("crypto"), o = n("sha256", r);
  return t.filter((a) => !!a).forEach((a) => o.update(a)), o.digest("hex");
}
function T(r) {
  const t = r ? r.getTime() : Date.now();
  return Math.round(t / 1e3).toString();
}
async function F(r) {
  const {
    partner_id: t,
    partner_key: n,
    path: o,
    base_url: a,
    access_token: s,
    shop_id: c,
    params: u = {}
  } = r, d = t.toString(), i = c.toString(), p = {};
  for (const y in u) {
    const f = u[y];
    Array.isArray(f) ? p[y] = [
      f[0],
      ...f.slice(1).map((ye) => `&${y}=${ye}`)
    ].join("") : f instanceof Date ? p[y] = T(f) : p[y] = `${f}`;
  }
  const g = T(), j = new URL(o, a), m = await W(
    n,
    d,
    o,
    g,
    s,
    i
  );
  return j.search = new URLSearchParams({
    ...p,
    partner_id: d,
    shop_id: i,
    ...!!s && { access_token: s },
    sign: m,
    timestamp: g
  }).toString(), j.toString().replace(new RegExp("%26", "g"), "&").replace(new RegExp("%3D", "g"), "=");
}
function E(r, t) {
  if (typeof r != "object" || Array.isArray(r) || r === null)
    return r;
  const n = {};
  for (const [o, a] of Object.entries(r))
    n[t(o)] = E(a, t);
  return n;
}
var v = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Re(r, t, n, o) {
  var a = -1, s = r == null ? 0 : r.length;
  for (o && s && (n = r[++a]); ++a < s; )
    n = t(n, r[a], a, r);
  return n;
}
var Ie = Re;
function je(r) {
  return function(t) {
    return r == null ? void 0 : r[t];
  };
}
var Te = je, Ee = Te, Pe = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, Ae = Ee(Pe), Le = Ae, Oe = typeof v == "object" && v && v.Object === Object && v, $e = Oe, we = $e, Ce = typeof self == "object" && self && self.Object === Object && self, ke = we || Ce || Function("return this")(), Ue = ke, De = Ue, qe = De.Symbol, O = qe;
function Me(r, t) {
  for (var n = -1, o = r == null ? 0 : r.length, a = Array(o); ++n < o; )
    a[n] = t(r[n], n, r);
  return a;
}
var Ne = Me, He = Array.isArray, ze = He, $ = O, V = Object.prototype, Ge = V.hasOwnProperty, Ke = V.toString, S = $ ? $.toStringTag : void 0;
function We(r) {
  var t = Ge.call(r, S), n = r[S];
  try {
    r[S] = void 0;
    var o = !0;
  } catch {
  }
  var a = Ke.call(r);
  return o && (t ? r[S] = n : delete r[S]), a;
}
var Fe = We, Ve = Object.prototype, Be = Ve.toString;
function Ze(r) {
  return Be.call(r);
}
var Je = Ze, w = O, Ye = Fe, Qe = Je, Xe = "[object Null]", er = "[object Undefined]", C = w ? w.toStringTag : void 0;
function rr(r) {
  return r == null ? r === void 0 ? er : Xe : C && C in Object(r) ? Ye(r) : Qe(r);
}
var tr = rr;
function nr(r) {
  return r != null && typeof r == "object";
}
var or = nr, ar = tr, sr = or, ir = "[object Symbol]";
function cr(r) {
  return typeof r == "symbol" || sr(r) && ar(r) == ir;
}
var ur = cr, k = O, dr = Ne, pr = ze, _r = ur, gr = 1 / 0, U = k ? k.prototype : void 0, D = U ? U.toString : void 0;
function B(r) {
  if (typeof r == "string")
    return r;
  if (pr(r))
    return dr(r, B) + "";
  if (_r(r))
    return D ? D.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -gr ? "-0" : t;
}
var mr = B, lr = mr;
function br(r) {
  return r == null ? "" : lr(r);
}
var R = br, fr = Le, hr = R, yr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Sr = "\\u0300-\\u036f", xr = "\\ufe20-\\ufe2f", vr = "\\u20d0-\\u20ff", Rr = Sr + xr + vr, Ir = "[" + Rr + "]", jr = RegExp(Ir, "g");
function Tr(r) {
  return r = hr(r), r && r.replace(yr, fr).replace(jr, "");
}
var Er = Tr, Pr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Ar(r) {
  return r.match(Pr) || [];
}
var Lr = Ar, Or = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function $r(r) {
  return Or.test(r);
}
var wr = $r, Z = "\\ud800-\\udfff", Cr = "\\u0300-\\u036f", kr = "\\ufe20-\\ufe2f", Ur = "\\u20d0-\\u20ff", Dr = Cr + kr + Ur, J = "\\u2700-\\u27bf", Y = "a-z\\xdf-\\xf6\\xf8-\\xff", qr = "\\xac\\xb1\\xd7\\xf7", Mr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Nr = "\\u2000-\\u206f", Hr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Q = "A-Z\\xc0-\\xd6\\xd8-\\xde", zr = "\\ufe0e\\ufe0f", X = qr + Mr + Nr + Hr, ee = "['’]", q = "[" + X + "]", Gr = "[" + Dr + "]", re = "\\d+", Kr = "[" + J + "]", te = "[" + Y + "]", ne = "[^" + Z + X + re + J + Y + Q + "]", Wr = "\\ud83c[\\udffb-\\udfff]", Fr = "(?:" + Gr + "|" + Wr + ")", Vr = "[^" + Z + "]", oe = "(?:\\ud83c[\\udde6-\\uddff]){2}", ae = "[\\ud800-\\udbff][\\udc00-\\udfff]", h = "[" + Q + "]", Br = "\\u200d", M = "(?:" + te + "|" + ne + ")", Zr = "(?:" + h + "|" + ne + ")", N = "(?:" + ee + "(?:d|ll|m|re|s|t|ve))?", H = "(?:" + ee + "(?:D|LL|M|RE|S|T|VE))?", se = Fr + "?", ie = "[" + zr + "]?", Jr = "(?:" + Br + "(?:" + [Vr, oe, ae].join("|") + ")" + ie + se + ")*", Yr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Qr = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Xr = ie + se + Jr, et = "(?:" + [Kr, oe, ae].join("|") + ")" + Xr, rt = RegExp([
  h + "?" + te + "+" + N + "(?=" + [q, h, "$"].join("|") + ")",
  Zr + "+" + H + "(?=" + [q, h + M, "$"].join("|") + ")",
  h + "?" + M + "+" + N,
  h + "+" + H,
  Qr,
  Yr,
  re,
  et
].join("|"), "g");
function tt(r) {
  return r.match(rt) || [];
}
var nt = tt, ot = Lr, at = wr, st = R, it = nt;
function ct(r, t, n) {
  return r = st(r), t = n ? void 0 : t, t === void 0 ? at(r) ? it(r) : ot(r) : r.match(t) || [];
}
var ut = ct, dt = Ie, pt = Er, _t = ut, gt = "['’]", mt = RegExp(gt, "g");
function lt(r) {
  return function(t) {
    return dt(_t(pt(t).replace(mt, "")), r, "");
  };
}
var ce = lt, bt = ce, ft = bt(function(r, t, n) {
  return r + (n ? "_" : "") + t.toLowerCase();
}), ht = ft;
function yt(r, t, n) {
  var o = -1, a = r.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var s = Array(a); ++o < a; )
    s[o] = r[o + t];
  return s;
}
var St = yt, xt = St;
function vt(r, t, n) {
  var o = r.length;
  return n = n === void 0 ? o : n, !t && n >= o ? r : xt(r, t, n);
}
var Rt = vt, It = "\\ud800-\\udfff", jt = "\\u0300-\\u036f", Tt = "\\ufe20-\\ufe2f", Et = "\\u20d0-\\u20ff", Pt = jt + Tt + Et, At = "\\ufe0e\\ufe0f", Lt = "\\u200d", Ot = RegExp("[" + Lt + It + Pt + At + "]");
function $t(r) {
  return Ot.test(r);
}
var ue = $t;
function wt(r) {
  return r.split("");
}
var Ct = wt, de = "\\ud800-\\udfff", kt = "\\u0300-\\u036f", Ut = "\\ufe20-\\ufe2f", Dt = "\\u20d0-\\u20ff", qt = kt + Ut + Dt, Mt = "\\ufe0e\\ufe0f", Nt = "[" + de + "]", P = "[" + qt + "]", A = "\\ud83c[\\udffb-\\udfff]", Ht = "(?:" + P + "|" + A + ")", pe = "[^" + de + "]", _e = "(?:\\ud83c[\\udde6-\\uddff]){2}", ge = "[\\ud800-\\udbff][\\udc00-\\udfff]", zt = "\\u200d", me = Ht + "?", le = "[" + Mt + "]?", Gt = "(?:" + zt + "(?:" + [pe, _e, ge].join("|") + ")" + le + me + ")*", Kt = le + me + Gt, Wt = "(?:" + [pe + P + "?", P, _e, ge, Nt].join("|") + ")", Ft = RegExp(A + "(?=" + A + ")|" + Wt + Kt, "g");
function Vt(r) {
  return r.match(Ft) || [];
}
var Bt = Vt, Zt = Ct, Jt = ue, Yt = Bt;
function Qt(r) {
  return Jt(r) ? Yt(r) : Zt(r);
}
var Xt = Qt, en = Rt, rn = ue, tn = Xt, nn = R;
function on(r) {
  return function(t) {
    t = nn(t);
    var n = rn(t) ? tn(t) : void 0, o = n ? n[0] : t.charAt(0), a = n ? en(n, 1).join("") : t.slice(1);
    return o[r]() + a;
  };
}
var an = on, sn = an, cn = sn("toUpperCase"), un = cn, dn = R, pn = un;
function _n(r) {
  return pn(dn(r).toLowerCase());
}
var gn = _n, mn = gn, ln = ce, bn = ln(function(r, t, n) {
  return t = t.toLowerCase(), r + (n ? mn(t) : t);
}), fn = bn;
class I {
  constructor() {
    this.logger = console, this.logInterceptorIds = [], this.isLogEnabled = !1, this.axios = Se.create(), this.isLogEnabled && this.addLogInterceptor();
  }
  addLogInterceptor() {
    const t = this.axios.interceptors.request.use(
      (o) => (this.logger.log(`${o.url}`), o.data && this.logger.info(`[Body]: ${JSON.stringify(o.data, null, 4)}`), o),
      (o) => {
        throw this.logger.error(o), o;
      }
    ), n = this.axios.interceptors.response.use(
      (o) => (this.logger.log(`[Response]: ${JSON.stringify(o.data, null, 4)}`), o),
      (o) => {
        const {
          response: a,
          message: s,
          config: { method: c, url: u, data: d, params: i }
        } = o, p = a == null ? void 0 : a.status;
        throw this.logger.error({ status: p, message: s, method: c, url: u, data: d, params: i }), o;
      }
    );
    this.logInterceptorIds = [t, n];
  }
  removeLogInterceptor() {
    this.logInterceptorIds.forEach(this.axios.interceptors.request.eject);
  }
  static getInstance() {
    return this.instance ?? (this.instance = new I());
  }
  setLogEnabled(t) {
    return this.isLogEnabled = t, this.isLogEnabled ? this.addLogInterceptor() : this.removeLogInterceptor(), this.isLogEnabled;
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
    this.isLogEnabled = !1;
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
const z = I.getInstance();
function b(r) {
  return async function(n) {
    const o = r.transformRequestParameter ?? ((m) => m), a = await r.requestParameterSchema.transform(o).safeParseAsync(n);
    if (!a.success)
      throw new Error(
        `parse request parameters error: ${a.error.message}`
      );
    const s = r.toCamelCase ? E(a.data, (m) => ht(m.toString())) : a.data, c = l.getInstance(), u = c.value;
    z.setLogEnabled(c.isLogEnabled);
    const d = await F({
      ...u,
      path: r.path,
      params: s
    }), i = await z.get(d), p = r.toCamelCase ? E(i.data, (m) => fn(m.toString())) : i.data, g = await r.responseSchema.safeParseAsync(p);
    if (!g.success)
      throw new Error(`parse response error: ${g.error.message}`);
    return g.data;
  };
}
const G = I.getInstance();
function hn(r) {
  return async function(n) {
    const o = r.transformRequestParameter ?? ((g) => g), a = await r.requestParameterSchema.transform(o).safeParseAsync(n);
    if (!a.success)
      throw new Error(
        `parse request parameters error: ${a.error.message}`
      );
    const s = l.getInstance(), c = s.value;
    G.setLogEnabled(s.isLogEnabled);
    const u = await F({
      ...c,
      path: r.path,
      params: {}
    }), d = a.data, { data: i } = await G.post(u, {}, d), p = await r.responseSchema.safeParseAsync(i);
    if (!p.success)
      throw new Error(`parse response error: ${p.error.message}`);
    return p.data;
  };
}
const yn = "/api/v2/logistic/get-shipping-parameter", Sn = e.object({
  orderSn: e.string(),
  packageNumber: e.number().optional()
}), xn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  response: e.object({
    requestId: e.string(),
    error: e.string(),
    message: e.string(),
    response: e.object({
      infoNeeded: e.object({
        dropoff: e.array(e.string()),
        pickup: e.array(e.string()),
        nonIntegrated: e.array(e.string())
      }),
      dropoff: e.object({
        branchList: e.array(
          e.object({
            branch_id: e.number(),
            region: e.string(),
            state: e.string(),
            city: e.string(),
            address: e.string(),
            zipcode: e.string(),
            district: e.string(),
            town: e.string()
          })
        ),
        slugList: e.array(
          e.object({
            slug: e.string(),
            slugName: e.string()
          })
        )
      }),
      pickup: e.object({
        addressList: e.array(
          e.object({
            addressId: e.number(),
            region: e.string(),
            state: e.string(),
            city: e.string(),
            district: e.string(),
            town: e.string(),
            address: e.string(),
            zipcode: e.string(),
            addressFlag: e.array(e.string())
          })
        ),
        timeSlotList: e.array(
          e.object({
            date: e.number(),
            timeText: e.string(),
            pickupTimeId: e.string()
          })
        )
      })
    })
  }).optional(),
  requestId: e.string()
}), vn = b({
  path: yn,
  requestParameterSchema: Sn,
  responseSchema: xn,
  toCamelCase: !0
}), Rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getShippingParameter: vn
}, Symbol.toStringTag, { value: "Module" })), In = "/api/v2/order/get_order_list", jn = "/api/v2/order/get_order_detail", Tn = [
  "UNPAID",
  "READY_TO_SHIP",
  "PROCESSED",
  "SHIPPED",
  "COMPLETED",
  "IN_CANCEL",
  "CANCELLED",
  "INVOICE_PENDING"
], En = [
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
], Pn = e.object({
  order_sn_list: e.array(e.string()),
  response_optional_fields: e.array(e.enum(En)).optional()
}), An = e.object({
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
  }).optional(),
  request_id: e.string()
}), Ln = b({
  path: jn,
  requestParameterSchema: Pn,
  responseSchema: An
}), On = e.object({
  timeRangeField: e.enum(["create_time", "update_time"]),
  timeFrom: e.date(),
  timeTo: e.date(),
  pageSize: e.number().min(1).max(100),
  cursor: e.string().optional(),
  orderStatus: e.enum(Tn).optional(),
  responseOptionalFields: e.enum(["order_status"]).optional().default("order_status")
}), $n = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  response: e.object({
    more: e.boolean(),
    nextCursor: e.string(),
    orderList: e.array(
      e.object({
        orderSn: e.string()
      })
    )
  }).optional(),
  requestId: e.string()
}), wn = b({
  path: In,
  requestParameterSchema: On,
  responseSchema: $n,
  toCamelCase: !0
}), Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOrderDetail: Ln,
  getOrderList: wn
}, Symbol.toStringTag, { value: "Module" })), kn = "/api/v2/product/get_item_base_info", Un = "/api/v2/product/get_item_extra_info", Dn = "/api/v2/product/get_item_list", qn = "/api/v2/product/get_model_list", be = ["NORMAL", "DELETED", "UNLIST", "BANNED"], Mn = e.object({
  item_id_list: e.string(),
  need_tax_info: e.coerce.boolean().optional(),
  need_complaint_policy: e.coerce.boolean().optional()
}), Nn = e.object({
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
}), Hn = b({
  path: kn,
  requestParameterSchema: Mn,
  responseSchema: Nn,
  transformRequestParameter(r) {
    return r.need_tax_info = !!r.need_tax_info, r.need_complaint_policy = !!r.need_complaint_policy, r;
  }
}), zn = e.object({
  item_id_list: e.string()
}), Gn = e.object({
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
}), Kn = b({
  path: Un,
  requestParameterSchema: zn,
  responseSchema: Gn
}), Wn = e.object({
  offset: e.number().int().min(0).optional(),
  page_size: e.number().int().positive().max(100).optional(),
  update_time_from: e.date().optional(),
  update_time_to: e.date().optional(),
  item_status: e.array(e.enum(be))
}), Fn = e.object({
  error: e.string(),
  message: e.string().nullable().optional(),
  warning: e.string().nullable().optional(),
  request_id: e.string(),
  response: e.object({
    item: e.array(
      e.object({
        item_id: e.number().int(),
        item_status: e.enum(be),
        update_time: e.number().int()
      })
    ).optional()
  }).optional(),
  total_count: e.number().int().optional(),
  has_next_page: e.boolean().optional(),
  next_offset: e.number().int().optional()
}), Vn = b({
  path: Dn,
  requestParameterSchema: Wn,
  transformRequestParameter(r) {
    return r.update_time_from = r.update_time_from ?? /* @__PURE__ */ new Date("01/01/2022"), r.update_time_to = r.update_time_to ?? /* @__PURE__ */ new Date(), r;
  },
  responseSchema: Fn
}), Bn = e.object({
  item_id: e.string()
}), Zn = e.object({
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
}), Jn = b({
  path: qn,
  requestParameterSchema: Bn,
  responseSchema: Zn
}), Yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItemBaseInfo: Hn,
  getItemExtraInfo: Kn,
  getItemList: Vn,
  getModelList: Jn
}, Symbol.toStringTag, { value: "Module" })), Qn = "/api/v2/auth/token/get", fe = e.object({
  code: e.string(),
  partner_id: e.number().optional(),
  shop_id: e.number().optional(),
  main_account_id: e.number().optional()
}), he = e.object({
  access_token: e.string(),
  error: e.string(),
  expires_in: e.number(),
  message: e.string(),
  refresh_token: e.string(),
  request_id: e.string(),
  shop_id_list: e.array(e.number())
}), Xn = hn({
  path: Qn,
  requestParameterSchema: fe,
  responseSchema: he,
  transformRequestParameter(r) {
    return r.partner_id = r.partner_id ?? l.getInstance().partnerId, r;
  }
}), eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAccessToken: Xn,
  getAccessTokenRequestParametersSchema: fe,
  getAccessTokenResponseSchema: he
}, Symbol.toStringTag, { value: "Module" })), K = "/api/v2/shop/auth_partner";
async function ro({
  redirectURL: r,
  redirectSign: t
}) {
  const { baseURL: n, partnerId: o, partnerKey: a } = l.getInstance();
  if (!a || !o)
    throw new Error("partnerKey is undefined");
  const s = new URL(K, n), c = T(/* @__PURE__ */ new Date()), u = await W(
    a,
    o.toString(),
    K,
    c
  ), d = new URL(r);
  return d.searchParams.append("sign", t), s.search = new URLSearchParams({
    partner_id: o.toString(),
    redirect: d.toString(),
    timestamp: c,
    sign: u
  }).toString(), s.toString();
}
const to = e.object({
  code: e.string(),
  shop_id: e.string(),
  sign: e.string()
});
async function no(r) {
  const t = await to.safeParseAsync(r);
  if (!t.success)
    throw new Error(
      `parse request parameters error: ${t.error.message}`
    );
  const { code: n, shop_id: o, sign: a } = t.data;
  return {
    code: n,
    shopId: o,
    sign: a
  };
}
const oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  authPartner: ro,
  verifyCallback: no
}, Symbol.toStringTag, { value: "Module" })), ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  logistic: Rn,
  order: Cn,
  product: Yn,
  publicShopee: eo,
  shop: oo
}, Symbol.toStringTag, { value: "Module" })), so = e.object({
  partnerId: e.coerce.number().optional(),
  partnerKey: e.coerce.string().optional(),
  baseURL: e.coerce.string().url().optional(),
  accessToken: e.coerce.string().optional(),
  shopId: e.coerce.number().optional()
}), L = so.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK_SHOP_ID
});
if (!L.success)
  throw new Error(L.error.message);
const x = L.data, _ = l.getInstance();
class uo {
  constructor(t) {
    _.accessToken = t.accessToken ?? x.accessToken, _.baseURL = t.baseURL ?? x.baseURL, _.partnerId = t.partnerId ?? x.partnerId, _.partnerKey = t.partnerKey ?? x.partnerKey, _.shopId = t.shopId ?? x.shopId, _.isLogEnabled = t.isLogEnabled ?? !1;
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
  setIsLogEnabled(t) {
    return _.isLogEnabled = t, this;
  }
  get v2() {
    return ao;
  }
}
export {
  jn as API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  In as API_V2_ORDER_GET_ORDER_LIST_PATH,
  kn as API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH,
  Un as API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH,
  Dn as API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  qn as API_V2_PRODUCT_GET_MODEL_LIST_PATH,
  Qn as API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH,
  K as API_V2_SHOP_AUTH_PARTNER,
  be as ITEM_STATUS,
  En as ORDER_RESPONSE_OPTIONAL_FIELDS,
  Tn as ORDER_STATUS,
  uo as ShopeeSdk,
  W as generateHmac,
  F as signURL,
  T as toTimestamp,
  E as transformObjectKeys
};
