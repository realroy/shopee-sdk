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
function E(r) {
  const t = r ? r.getTime() : Date.now();
  return Math.round(t / 1e3).toString();
}
async function V(r) {
  const {
    partner_id: t,
    partner_key: n,
    path: o,
    base_url: a,
    access_token: s,
    shop_id: c,
    params: u = {}
  } = r, _ = t.toString(), i = c.toString(), d = {};
  for (const y in u) {
    const f = u[y];
    Array.isArray(f) ? d[y] = [
      f[0],
      ...f.slice(1).map((ye) => `&${y}=${ye}`)
    ].join("") : f instanceof Date ? d[y] = E(f) : d[y] = `${f}`;
  }
  const g = E(), I = new URL(o, a), l = await W(
    n,
    _,
    o,
    g,
    s,
    i
  );
  return I.search = new URLSearchParams({
    ...d,
    partner_id: _,
    shop_id: i,
    ...!!s && { access_token: s },
    sign: l,
    timestamp: g
  }).toString(), I.toString().replace(new RegExp("%26", "g"), "&").replace(new RegExp("%3D", "g"), "=");
}
function T(r, t) {
  if (typeof r != "object" || Array.isArray(r) || r === null)
    return r;
  const n = {};
  for (const [o, a] of Object.entries(r))
    n[t(o)] = T(a, t);
  return n;
}
var v = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Re(r, t, n, o) {
  var a = -1, s = r == null ? 0 : r.length;
  for (o && s && (n = r[++a]); ++a < s; )
    n = t(n, r[a], a, r);
  return n;
}
var je = Re;
function Ie(r) {
  return function(t) {
    return r == null ? void 0 : r[t];
  };
}
var Ee = Ie, Te = Ee, Pe = {
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
}, Ae = Te(Pe), Oe = Ae, Le = typeof v == "object" && v && v.Object === Object && v, $e = Le, we = $e, Ce = typeof self == "object" && self && self.Object === Object && self, ke = we || Ce || Function("return this")(), Ue = ke, De = Ue, qe = De.Symbol, L = qe;
function Me(r, t) {
  for (var n = -1, o = r == null ? 0 : r.length, a = Array(o); ++n < o; )
    a[n] = t(r[n], n, r);
  return a;
}
var Ne = Me, He = Array.isArray, ze = He, $ = L, B = Object.prototype, Ge = B.hasOwnProperty, Ke = B.toString, S = $ ? $.toStringTag : void 0;
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
var Ve = We, Be = Object.prototype, Ze = Be.toString;
function Fe(r) {
  return Ze.call(r);
}
var Je = Fe, w = L, Ye = Ve, Qe = Je, Xe = "[object Null]", er = "[object Undefined]", C = w ? w.toStringTag : void 0;
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
var ur = cr, k = L, _r = Ne, dr = ze, pr = ur, gr = 1 / 0, U = k ? k.prototype : void 0, D = U ? U.toString : void 0;
function Z(r) {
  if (typeof r == "string")
    return r;
  if (dr(r))
    return _r(r, Z) + "";
  if (pr(r))
    return D ? D.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -gr ? "-0" : t;
}
var lr = Z, mr = lr;
function br(r) {
  return r == null ? "" : mr(r);
}
var R = br, fr = Oe, hr = R, yr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Sr = "\\u0300-\\u036f", xr = "\\ufe20-\\ufe2f", vr = "\\u20d0-\\u20ff", Rr = Sr + xr + vr, jr = "[" + Rr + "]", Ir = RegExp(jr, "g");
function Er(r) {
  return r = hr(r), r && r.replace(yr, fr).replace(Ir, "");
}
var Tr = Er, Pr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Ar(r) {
  return r.match(Pr) || [];
}
var Or = Ar, Lr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function $r(r) {
  return Lr.test(r);
}
var wr = $r, F = "\\ud800-\\udfff", Cr = "\\u0300-\\u036f", kr = "\\ufe20-\\ufe2f", Ur = "\\u20d0-\\u20ff", Dr = Cr + kr + Ur, J = "\\u2700-\\u27bf", Y = "a-z\\xdf-\\xf6\\xf8-\\xff", qr = "\\xac\\xb1\\xd7\\xf7", Mr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Nr = "\\u2000-\\u206f", Hr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Q = "A-Z\\xc0-\\xd6\\xd8-\\xde", zr = "\\ufe0e\\ufe0f", X = qr + Mr + Nr + Hr, ee = "['’]", q = "[" + X + "]", Gr = "[" + Dr + "]", re = "\\d+", Kr = "[" + J + "]", te = "[" + Y + "]", ne = "[^" + F + X + re + J + Y + Q + "]", Wr = "\\ud83c[\\udffb-\\udfff]", Vr = "(?:" + Gr + "|" + Wr + ")", Br = "[^" + F + "]", oe = "(?:\\ud83c[\\udde6-\\uddff]){2}", ae = "[\\ud800-\\udbff][\\udc00-\\udfff]", h = "[" + Q + "]", Zr = "\\u200d", M = "(?:" + te + "|" + ne + ")", Fr = "(?:" + h + "|" + ne + ")", N = "(?:" + ee + "(?:d|ll|m|re|s|t|ve))?", H = "(?:" + ee + "(?:D|LL|M|RE|S|T|VE))?", se = Vr + "?", ie = "[" + zr + "]?", Jr = "(?:" + Zr + "(?:" + [Br, oe, ae].join("|") + ")" + ie + se + ")*", Yr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Qr = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Xr = ie + se + Jr, et = "(?:" + [Kr, oe, ae].join("|") + ")" + Xr, rt = RegExp([
  h + "?" + te + "+" + N + "(?=" + [q, h, "$"].join("|") + ")",
  Fr + "+" + H + "(?=" + [q, h + M, "$"].join("|") + ")",
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
var nt = tt, ot = Or, at = wr, st = R, it = nt;
function ct(r, t, n) {
  return r = st(r), t = n ? void 0 : t, t === void 0 ? at(r) ? it(r) : ot(r) : r.match(t) || [];
}
var ut = ct, _t = je, dt = Tr, pt = ut, gt = "['’]", lt = RegExp(gt, "g");
function mt(r) {
  return function(t) {
    return _t(pt(dt(t).replace(lt, "")), r, "");
  };
}
var ce = mt, bt = ce, ft = bt(function(r, t, n) {
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
var Rt = vt, jt = "\\ud800-\\udfff", It = "\\u0300-\\u036f", Et = "\\ufe20-\\ufe2f", Tt = "\\u20d0-\\u20ff", Pt = It + Et + Tt, At = "\\ufe0e\\ufe0f", Ot = "\\u200d", Lt = RegExp("[" + Ot + jt + Pt + At + "]");
function $t(r) {
  return Lt.test(r);
}
var ue = $t;
function wt(r) {
  return r.split("");
}
var Ct = wt, _e = "\\ud800-\\udfff", kt = "\\u0300-\\u036f", Ut = "\\ufe20-\\ufe2f", Dt = "\\u20d0-\\u20ff", qt = kt + Ut + Dt, Mt = "\\ufe0e\\ufe0f", Nt = "[" + _e + "]", P = "[" + qt + "]", A = "\\ud83c[\\udffb-\\udfff]", Ht = "(?:" + P + "|" + A + ")", de = "[^" + _e + "]", pe = "(?:\\ud83c[\\udde6-\\uddff]){2}", ge = "[\\ud800-\\udbff][\\udc00-\\udfff]", zt = "\\u200d", le = Ht + "?", me = "[" + Mt + "]?", Gt = "(?:" + zt + "(?:" + [de, pe, ge].join("|") + ")" + me + le + ")*", Kt = me + le + Gt, Wt = "(?:" + [de + P + "?", P, pe, ge, Nt].join("|") + ")", Vt = RegExp(A + "(?=" + A + ")|" + Wt + Kt, "g");
function Bt(r) {
  return r.match(Vt) || [];
}
var Zt = Bt, Ft = Ct, Jt = ue, Yt = Zt;
function Qt(r) {
  return Jt(r) ? Yt(r) : Ft(r);
}
var Xt = Qt, en = Rt, rn = ue, tn = Xt, nn = R;
function on(r) {
  return function(t) {
    t = nn(t);
    var n = rn(t) ? tn(t) : void 0, o = n ? n[0] : t.charAt(0), a = n ? en(n, 1).join("") : t.slice(1);
    return o[r]() + a;
  };
}
var an = on, sn = an, cn = sn("toUpperCase"), un = cn, _n = R, dn = un;
function pn(r) {
  return dn(_n(r).toLowerCase());
}
var gn = pn, ln = gn, mn = ce, bn = mn(function(r, t, n) {
  return t = t.toLowerCase(), r + (n ? ln(t) : t);
}), fn = bn;
class j {
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
          config: { method: c, url: u, data: _, params: i }
        } = o, d = a == null ? void 0 : a.status;
        throw this.logger.error({ status: d, message: s, method: c, url: u, data: _, params: i }), o;
      }
    );
    this.logInterceptorIds = [t, n];
  }
  removeLogInterceptor() {
    this.logInterceptorIds.forEach(this.axios.interceptors.request.eject);
  }
  static getInstance() {
    return this.instance ?? (this.instance = new j());
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
class m {
  constructor() {
    this.isLogEnabled = !1;
  }
  static getInstance() {
    return this.instance ?? (this.instance = new m());
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
const z = j.getInstance();
function b(r) {
  return async function(n) {
    const o = r.transformRequestParameter ?? ((l) => l), a = await r.requestParameterSchema.transform(o).safeParseAsync(n);
    if (!a.success)
      throw new Error(
        `parse request parameters error: ${a.error.message}`
      );
    const s = r.toCamelCase ? T(a.data, (l) => ht(l.toString())) : a.data, c = m.getInstance(), u = c.value;
    z.setLogEnabled(c.isLogEnabled);
    const _ = await V({
      ...u,
      path: r.path,
      params: s
    }), i = await z.get(_), d = r.toCamelCase ? T(i.data, (l) => fn(l.toString())) : i.data, g = await r.responseSchema.safeParseAsync(d);
    if (!g.success)
      throw new Error(`parse response error: ${g.error.message}`);
    return g.data;
  };
}
const G = j.getInstance();
function hn(r) {
  return async function(n) {
    const o = r.transformRequestParameter ?? ((g) => g), a = await r.requestParameterSchema.transform(o).safeParseAsync(n);
    if (!a.success)
      throw new Error(
        `parse request parameters error: ${a.error.message}`
      );
    const s = m.getInstance(), c = s.value;
    G.setLogEnabled(s.isLogEnabled);
    const u = await V({
      ...c,
      path: r.path,
      params: {}
    }), _ = a.data, { data: i } = await G.post(u, {}, _), d = await r.responseSchema.safeParseAsync(i);
    if (!d.success)
      throw new Error(`parse response error: ${d.error.message}`);
    return d.data;
  };
}
const yn = "/api/v2/logistic/get-shipping-parameter", Sn = e.object({
  orderSn: e.string(),
  packageNumber: e.number().optional()
}), xn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  response: e.object({
    request_id: e.string(),
    error: e.string(),
    message: e.string(),
    response: e.object({
      info_needed: e.object({
        dropoff: e.array(e.string()),
        pickup: e.array(e.string()),
        non_integrated: e.array(e.string())
      }),
      dropoff: e.object({
        branch_list: e.array(
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
        slug_list: e.array(
          e.object({
            slug: e.string(),
            slug_name: e.string()
          })
        )
      }),
      pickup: e.object({
        address_list: e.array(
          e.object({
            address_id: e.number(),
            region: e.string(),
            state: e.string(),
            city: e.string(),
            district: e.string(),
            town: e.string(),
            address: e.string(),
            zipcode: e.string(),
            address_flag: e.array(e.string())
          })
        ),
        time_slot_list: e.array(
          e.object({
            date: e.number(),
            time_text: e.string(),
            pickup_time_id: e.string()
          })
        )
      })
    })
  }).optional(),
  request_id: e.string()
}), vn = b({
  path: yn,
  requestParameterSchema: Sn,
  responseSchema: xn,
  toCamelCase: !0
}), Rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getShippingParameter: vn
}, Symbol.toStringTag, { value: "Module" })), jn = "/api/v2/order/get_order_list", In = "/api/v2/order/get_order_detail", En = [
  "UNPAID",
  "READY_TO_SHIP",
  "PROCESSED",
  "SHIPPED",
  "COMPLETED",
  "IN_CANCEL",
  "CANCELLED",
  "INVOICE_PENDING"
], Tn = [
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
  response_optional_fields: e.array(e.enum(Tn)).optional()
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
}), On = b({
  path: In,
  requestParameterSchema: Pn,
  responseSchema: An
}), Ln = e.object({
  time_range_field: e.enum(["create_time", "update_time"]),
  time_from: e.date(),
  time_to: e.date(),
  page_size: e.number().min(1).max(100),
  cursor: e.string().optional(),
  order_status: e.enum(En).optional(),
  response_optional_fields: e.enum(["order_status"]).optional().default("order_status")
}), $n = e.object({
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
  }).optional(),
  request_id: e.string()
}), wn = b({
  path: jn,
  requestParameterSchema: Ln,
  responseSchema: $n
}), Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOrderDetail: On,
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
}), Vn = e.object({
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
}), Bn = b({
  path: Dn,
  requestParameterSchema: Wn,
  transformRequestParameter(r) {
    return r.update_time_from = r.update_time_from ?? /* @__PURE__ */ new Date("01/01/2022"), r.update_time_to = r.update_time_to ?? /* @__PURE__ */ new Date(), r;
  },
  responseSchema: Vn
}), Zn = e.object({
  item_id: e.string()
}), Fn = e.object({
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
  requestParameterSchema: Zn,
  responseSchema: Fn
}), Yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItemBaseInfo: Hn,
  getItemExtraInfo: Kn,
  getItemList: Bn,
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
    return r.partner_id = r.partner_id ?? m.getInstance().partnerId, r;
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
  const { baseURL: n, partnerId: o, partnerKey: a } = m.getInstance();
  if (!a || !o)
    throw new Error("partnerKey is undefined");
  const s = new URL(K, n), c = E(/* @__PURE__ */ new Date()), u = await W(
    a,
    o.toString(),
    K,
    c
  ), _ = new URL(r);
  return _.searchParams.append("sign", t), s.search = new URLSearchParams({
    partner_id: o.toString(),
    redirect: _.toString(),
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
}), O = so.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK_SHOP_ID
});
if (!O.success)
  throw new Error(O.error.message);
const x = O.data, p = m.getInstance();
class uo {
  constructor(t) {
    p.accessToken = t.accessToken ?? x.accessToken, p.baseURL = t.baseURL ?? x.baseURL, p.partnerId = t.partnerId ?? x.partnerId, p.partnerKey = t.partnerKey ?? x.partnerKey, p.shopId = t.shopId ?? x.shopId, p.isLogEnabled = t.isLogEnabled ?? !1;
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
  setIsLogEnabled(t) {
    return p.isLogEnabled = t, this;
  }
  get v2() {
    return ao;
  }
}
export {
  In as API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  jn as API_V2_ORDER_GET_ORDER_LIST_PATH,
  kn as API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH,
  Un as API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH,
  Dn as API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  qn as API_V2_PRODUCT_GET_MODEL_LIST_PATH,
  Qn as API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH,
  K as API_V2_SHOP_AUTH_PARTNER,
  be as ITEM_STATUS,
  Tn as ORDER_RESPONSE_OPTIONAL_FIELDS,
  En as ORDER_STATUS,
  uo as ShopeeSdk,
  W as generateHmac,
  V as signURL,
  E as toTimestamp,
  T as transformObjectKeys
};
