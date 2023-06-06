import xe from "axios";
import { z as e } from "zod";
function L(r) {
  return r.reduce((t, n) => (t[n] = n, t), {});
}
async function Z(r, ...t) {
  let n;
  return typeof globalThis.crypto < "u" && (n = await Ae(r, ...t)), n = await je(r, ...t), n;
}
async function Ae(r, ...t) {
  const n = new TextEncoder(), o = n.encode(r);
  let a = new Uint8Array();
  t.forEach((c) => {
    c && (a = n.encode(c));
  });
  const s = await crypto.subtle.importKey(
    "raw",
    o,
    { name: "HMAC", hash: "SHA-256" },
    !1,
    ["sign"]
  ), p = await crypto.subtle.sign(
    { name: "HMAC", hash: { name: "sha-256" } },
    s,
    a
  ), i = new Uint8Array(p);
  return Array.from(i).map((c) => c.toString(16).padStart(2, "0")).join("");
}
async function je(r, ...t) {
  const { createHmac: n } = await import("crypto"), o = n("sha256", r);
  return t.filter((a) => !!a).forEach((a) => o.update(a)), o.digest("hex");
}
function x(r) {
  const t = r ? r.getTime() : Date.now();
  return Math.round(t / 1e3).toString();
}
async function Y(r) {
  const {
    partner_id: t,
    partner_key: n,
    path: o,
    base_url: a,
    access_token: s,
    shop_id: p,
    params: i = {}
  } = r, g = t.toString(), c = p.toString(), u = {};
  for (const d in i) {
    const S = i[d];
    Array.isArray(S) ? u[d] = [
      S[0],
      ...S.slice(1).map((Ee) => `&${d}=${Ee}`)
    ].join("") : S instanceof Date ? u[d] = x(S) : u[d] = `${S}`;
  }
  const f = x(), h = new URL(o, a), D = await Z(
    n,
    g,
    o,
    f,
    s,
    c
  );
  return h.search = new URLSearchParams({
    ...u,
    partner_id: g,
    shop_id: c,
    ...!!s && { access_token: s },
    sign: D,
    timestamp: f
  }).toString(), h.toString().replace(new RegExp("%26", "g"), "&").replace(new RegExp("%3D", "g"), "=");
}
function A(r, t) {
  if (typeof r != "object" || Array.isArray(r) || r === null)
    return r;
  const n = {};
  for (const [o, a] of Object.entries(r))
    n[t(o)] = A(a, t);
  return n;
}
var T = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Oe(r, t, n, o) {
  var a = -1, s = r == null ? 0 : r.length;
  for (o && s && (n = r[++a]); ++a < s; )
    n = t(n, r[a], a, r);
  return n;
}
var ve = Oe;
function Le(r) {
  return function(t) {
    return r == null ? void 0 : r[t];
  };
}
var Ce = Le, ke = Ce, De = {
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
}, we = ke(De), Ne = we, $e = typeof T == "object" && T && T.Object === Object && T, Ue = $e, qe = Ue, Me = typeof self == "object" && self && self.Object === Object && self, Ge = qe || Me || Function("return this")(), He = Ge, Ve = He, Fe = Ve.Symbol, C = Fe;
function ze(r, t) {
  for (var n = -1, o = r == null ? 0 : r.length, a = Array(o); ++n < o; )
    a[n] = t(r[n], n, r);
  return a;
}
var Ke = ze, We = Array.isArray, Be = We, w = C, J = Object.prototype, Ze = J.hasOwnProperty, Ye = J.toString, I = w ? w.toStringTag : void 0;
function Je(r) {
  var t = Ze.call(r, I), n = r[I];
  try {
    r[I] = void 0;
    var o = !0;
  } catch {
  }
  var a = Ye.call(r);
  return o && (t ? r[I] = n : delete r[I]), a;
}
var Qe = Je, Xe = Object.prototype, er = Xe.toString;
function rr(r) {
  return er.call(r);
}
var tr = rr, N = C, nr = Qe, or = tr, ar = "[object Null]", sr = "[object Undefined]", $ = N ? N.toStringTag : void 0;
function ir(r) {
  return r == null ? r === void 0 ? sr : ar : $ && $ in Object(r) ? nr(r) : or(r);
}
var cr = ir;
function ur(r) {
  return r != null && typeof r == "object";
}
var pr = ur, gr = cr, mr = pr, dr = "[object Symbol]";
function lr(r) {
  return typeof r == "symbol" || mr(r) && gr(r) == dr;
}
var _r = lr, U = C, br = Ke, fr = Be, hr = _r, Sr = 1 / 0, q = U ? U.prototype : void 0, M = q ? q.toString : void 0;
function Q(r) {
  if (typeof r == "string")
    return r;
  if (fr(r))
    return br(r, Q) + "";
  if (hr(r))
    return M ? M.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -Sr ? "-0" : t;
}
var yr = Q, Ir = yr;
function Rr(r) {
  return r == null ? "" : Ir(r);
}
var P = Rr, Tr = Ne, Pr = P, Er = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, xr = "\\u0300-\\u036f", Ar = "\\ufe20-\\ufe2f", jr = "\\u20d0-\\u20ff", Or = xr + Ar + jr, vr = "[" + Or + "]", Lr = RegExp(vr, "g");
function Cr(r) {
  return r = Pr(r), r && r.replace(Er, Tr).replace(Lr, "");
}
var kr = Cr, Dr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function wr(r) {
  return r.match(Dr) || [];
}
var Nr = wr, $r = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Ur(r) {
  return $r.test(r);
}
var qr = Ur, X = "\\ud800-\\udfff", Mr = "\\u0300-\\u036f", Gr = "\\ufe20-\\ufe2f", Hr = "\\u20d0-\\u20ff", Vr = Mr + Gr + Hr, ee = "\\u2700-\\u27bf", re = "a-z\\xdf-\\xf6\\xf8-\\xff", Fr = "\\xac\\xb1\\xd7\\xf7", zr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Kr = "\\u2000-\\u206f", Wr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", te = "A-Z\\xc0-\\xd6\\xd8-\\xde", Br = "\\ufe0e\\ufe0f", ne = Fr + zr + Kr + Wr, oe = "['’]", G = "[" + ne + "]", Zr = "[" + Vr + "]", ae = "\\d+", Yr = "[" + ee + "]", se = "[" + re + "]", ie = "[^" + X + ne + ae + ee + re + te + "]", Jr = "\\ud83c[\\udffb-\\udfff]", Qr = "(?:" + Zr + "|" + Jr + ")", Xr = "[^" + X + "]", ce = "(?:\\ud83c[\\udde6-\\uddff]){2}", ue = "[\\ud800-\\udbff][\\udc00-\\udfff]", y = "[" + te + "]", et = "\\u200d", H = "(?:" + se + "|" + ie + ")", rt = "(?:" + y + "|" + ie + ")", V = "(?:" + oe + "(?:d|ll|m|re|s|t|ve))?", F = "(?:" + oe + "(?:D|LL|M|RE|S|T|VE))?", pe = Qr + "?", ge = "[" + Br + "]?", tt = "(?:" + et + "(?:" + [Xr, ce, ue].join("|") + ")" + ge + pe + ")*", nt = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ot = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", at = ge + pe + tt, st = "(?:" + [Yr, ce, ue].join("|") + ")" + at, it = RegExp([
  y + "?" + se + "+" + V + "(?=" + [G, y, "$"].join("|") + ")",
  rt + "+" + F + "(?=" + [G, y + H, "$"].join("|") + ")",
  y + "?" + H + "+" + V,
  y + "+" + F,
  ot,
  nt,
  ae,
  st
].join("|"), "g");
function ct(r) {
  return r.match(it) || [];
}
var ut = ct, pt = Nr, gt = qr, mt = P, dt = ut;
function lt(r, t, n) {
  return r = mt(r), t = n ? void 0 : t, t === void 0 ? gt(r) ? dt(r) : pt(r) : r.match(t) || [];
}
var _t = lt, bt = ve, ft = kr, ht = _t, St = "['’]", yt = RegExp(St, "g");
function It(r) {
  return function(t) {
    return bt(ht(ft(t).replace(yt, "")), r, "");
  };
}
var me = It, Rt = me, Tt = Rt(function(r, t, n) {
  return r + (n ? "_" : "") + t.toLowerCase();
}), Pt = Tt;
function Et(r, t, n) {
  var o = -1, a = r.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var s = Array(a); ++o < a; )
    s[o] = r[o + t];
  return s;
}
var xt = Et, At = xt;
function jt(r, t, n) {
  var o = r.length;
  return n = n === void 0 ? o : n, !t && n >= o ? r : At(r, t, n);
}
var Ot = jt, vt = "\\ud800-\\udfff", Lt = "\\u0300-\\u036f", Ct = "\\ufe20-\\ufe2f", kt = "\\u20d0-\\u20ff", Dt = Lt + Ct + kt, wt = "\\ufe0e\\ufe0f", Nt = "\\u200d", $t = RegExp("[" + Nt + vt + Dt + wt + "]");
function Ut(r) {
  return $t.test(r);
}
var de = Ut;
function qt(r) {
  return r.split("");
}
var Mt = qt, le = "\\ud800-\\udfff", Gt = "\\u0300-\\u036f", Ht = "\\ufe20-\\ufe2f", Vt = "\\u20d0-\\u20ff", Ft = Gt + Ht + Vt, zt = "\\ufe0e\\ufe0f", Kt = "[" + le + "]", j = "[" + Ft + "]", O = "\\ud83c[\\udffb-\\udfff]", Wt = "(?:" + j + "|" + O + ")", _e = "[^" + le + "]", be = "(?:\\ud83c[\\udde6-\\uddff]){2}", fe = "[\\ud800-\\udbff][\\udc00-\\udfff]", Bt = "\\u200d", he = Wt + "?", Se = "[" + zt + "]?", Zt = "(?:" + Bt + "(?:" + [_e, be, fe].join("|") + ")" + Se + he + ")*", Yt = Se + he + Zt, Jt = "(?:" + [_e + j + "?", j, be, fe, Kt].join("|") + ")", Qt = RegExp(O + "(?=" + O + ")|" + Jt + Yt, "g");
function Xt(r) {
  return r.match(Qt) || [];
}
var en = Xt, rn = Mt, tn = de, nn = en;
function on(r) {
  return tn(r) ? nn(r) : rn(r);
}
var an = on, sn = Ot, cn = de, un = an, pn = P;
function gn(r) {
  return function(t) {
    t = pn(t);
    var n = cn(t) ? un(t) : void 0, o = n ? n[0] : t.charAt(0), a = n ? sn(n, 1).join("") : t.slice(1);
    return o[r]() + a;
  };
}
var mn = gn, dn = mn, ln = dn("toUpperCase"), _n = ln, bn = P, fn = _n;
function hn(r) {
  return fn(bn(r).toLowerCase());
}
var Sn = hn, yn = Sn, In = me, Rn = In(function(r, t, n) {
  return t = t.toLowerCase(), r + (n ? yn(t) : t);
}), Tn = Rn;
class E {
  constructor() {
    this.logger = console, this.logInterceptorIds = [], this.isLogEnabled = !1, this.axios = xe.create(), this.isLogEnabled && this.addLogInterceptor();
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
          config: { method: p, url: i, data: g, params: c }
        } = o, u = a == null ? void 0 : a.status;
        throw this.logger.error({ status: u, message: s, method: p, url: i, data: g, params: c }), o;
      }
    );
    this.logInterceptorIds = [t, n];
  }
  removeLogInterceptor() {
    this.logInterceptorIds.forEach(this.axios.interceptors.request.eject);
  }
  static getInstance() {
    return this.instance ?? (this.instance = new E());
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
class _ {
  constructor() {
    this.isLogEnabled = !1;
  }
  static getInstance() {
    return this.instance ?? (this.instance = new _());
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
const z = E.getInstance();
function l(r) {
  async function t(n) {
    if (!r.transformRequestParameter)
      return n;
    const o = r.transformRequestParameter(n);
    if (!r.transformRequestParameterSchema)
      return n;
    const a = await r.transformRequestParameterSchema.safeParseAsync(
      o
    );
    if (!a.success)
      throw new Error(
        `transform request parameters error: ${a.error.message}`
      );
    return a.data;
  }
  return async function(o) {
    const a = await r.requestParameterSchema.safeParseAsync(o);
    if (!a.success)
      throw new Error(
        `parse request parameters error: ${a.error.message}`
      );
    const s = await t(a.data), p = r.toCamelCase ? A(
      s,
      (d) => Pt(d.toString())
    ) : s, i = _.getInstance(), g = i.value;
    z.setLogEnabled(i.isLogEnabled);
    const c = await Y({
      ...g,
      path: r.path,
      params: p
    }), u = await z.get(c), f = r.toCamelCase ? A(u.data, (d) => Tn(d.toString())) : u.data, h = await r.responseSchema.safeParseAsync(f);
    if (!h.success)
      throw new Error(`parse response error: ${h.error.message}`);
    return h.data;
  };
}
const K = E.getInstance();
function b(r) {
  return async function(n) {
    const o = r.transformRequestParameter ?? ((f) => f), a = await r.requestParameterSchema.transform(o).safeParseAsync(n);
    if (!a.success)
      throw new Error(
        `parse request parameters error: ${a.error.message}`
      );
    const s = _.getInstance(), p = s.value;
    K.setLogEnabled(s.isLogEnabled);
    const i = await Y({
      ...p,
      path: r.path,
      params: {}
    }), g = a.data, { data: c } = await K.post(i, {}, g), u = await r.responseSchema.safeParseAsync(c);
    if (!u.success)
      throw new Error(`parse response error: ${u.error.message}`);
    return u.data;
  };
}
const Pn = "/api/v2/logistic/get_shipping_parameter", En = "/api/v2/logistic/ship_order", xn = "/api/v2/logistics/update_shipping_order", An = "/api/v2/logistics/get_tracking_number", jn = "/api/v2/logistic/get_shipping_document_parameter", On = "/api/v2/logistic/create_shipping_document", vn = "/api/v2/logistics/get_shipping_document_result", Ln = "/api/v2/logistics/download_shipping_document", ye = [
  "plp_number",
  "first_mile_tracking_number",
  "last_mile_tracking_number"
], Ho = L(ye), k = [
  "NORMAL_AIR_WAYBILL",
  "THERMAL_AIR_WAYBILL",
  "NORMAL_JOB_AIR_WAYBILL",
  "THERMAL_JOB_AIR_WAYBILL"
], Cn = ["READY", "FAILED", "PROCESSING"], kn = e.object({
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.string().optional(),
      trackingNumber: e.string().optional(),
      shippingDocumentType: e.enum(k).optional()
    })
  ).max(50)
}), Dn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  warning: e.object({
    orderSn: e.string(),
    packageNumber: e.number().optional()
  }).optional(),
  response: e.object({
    orderSn: e.string(),
    packageNumber: e.number().optional(),
    suggestShippingDocumentType: e.string(),
    selectableShippingDocumentType: e.array(e.string()),
    failError: e.string(),
    failMessage: e.string()
  }).optional(),
  requestId: e.string()
}), wn = b({
  path: On,
  requestParameterSchema: kn,
  responseSchema: Dn
}), Nn = e.object({
  shippingDocumentType: e.enum(k).optional(),
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.string().optional()
    })
  ).max(50)
}), $n = e.any(), Un = b({
  path: Ln,
  requestParameterSchema: Nn,
  responseSchema: $n
}), qn = e.object({
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.number().optional()
    })
  ).max(50)
}), Mn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  warning: e.object({
    orderSn: e.string(),
    packageNumber: e.number().optional()
  }).optional(),
  response: e.object({
    orderSn: e.string(),
    packageNumber: e.number().optional(),
    suggestShippingDocumentType: e.string(),
    selectableShippingDocumentType: e.array(e.string()),
    failError: e.string(),
    failMessage: e.string()
  }).optional(),
  requestId: e.string()
}), Gn = b({
  path: jn,
  requestParameterSchema: qn,
  responseSchema: Mn
}), Hn = e.object({
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.string().optional(),
      shippingDocumentType: e.enum(k).optional()
    })
  ).max(50)
}), Vn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  warning: e.object({
    orderSn: e.string(),
    packageNumber: e.number().optional()
  }).optional(),
  response: e.object({
    orderSn: e.string(),
    packageNumber: e.string(),
    status: e.enum(Cn),
    failError: e.string(),
    failMessage: e.string()
  }).optional(),
  requestId: e.string()
}), Fn = b({
  path: vn,
  requestParameterSchema: Hn,
  responseSchema: Vn
}), W = e.object({
  orderSn: e.string(),
  packageNumber: e.number().optional(),
  responseOptionalFields: e.array(e.enum(ye)).optional()
}), zn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  response: e.object({}).optional(),
  requestId: e.string()
}), Kn = l({
  path: An,
  requestParameterSchema: W,
  responseSchema: zn,
  transformRequestParameterSchema: W.extend({
    responseOptionalFields: e.string().optional()
  }),
  transformRequestParameter(r) {
    var t;
    return {
      ...r,
      responseOptionalFields: (t = r.responseOptionalFields) == null ? void 0 : t.join(",")
    };
  },
  toCamelCase: !0
}), Wn = e.object({
  orderSn: e.string(),
  packageNumber: e.number().optional()
}), Bn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
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
  }).optional(),
  requestId: e.string()
}), Zn = l({
  path: Pn,
  requestParameterSchema: Wn,
  responseSchema: Bn,
  toCamelCase: !0
}), Yn = e.object({
  orderSn: e.string(),
  packageNumber: e.string().optional(),
  pickup: e.object({
    addressId: e.number().optional(),
    pickupTimeId: e.string().optional(),
    trackingNumber: e.string().optional()
  }).optional(),
  dropoff: e.object({
    branchId: e.number().optional(),
    senderRealName: e.string().optional(),
    trackingNumber: e.string().optional(),
    slug: e.string().optional()
  }).optional(),
  nonIntegrated: e.object({
    trackingNumber: e.string().optional()
  }).optional()
}), Jn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  requestId: e.string()
}), Qn = b({
  path: En,
  requestParameterSchema: Yn,
  responseSchema: Jn
}), Xn = e.object({
  orderSn: e.string(),
  packageNumber: e.string().optional(),
  pickup: e.object({
    addressId: e.number(),
    pickupTimeId: e.string()
  })
}), eo = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  requestId: e.string()
}), ro = b({
  path: xn,
  requestParameterSchema: Xn,
  responseSchema: eo
}), to = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createShippingDocument: wn,
  downloadShippingDocument: Un,
  getShippingDocumentParameter: Gn,
  getShippingDocumentResult: Fn,
  getShippingParameter: Zn,
  getTrackingNumber: Kn,
  shipOrder: Qn,
  updateShipOrder: ro
}, Symbol.toStringTag, { value: "Module" })), no = "/api/v2/order/get_order_list", oo = "/api/v2/order/get_order_detail", Ie = [
  "UNPAID",
  "READY_TO_SHIP",
  "PROCESSED",
  "SHIPPED",
  "COMPLETED",
  "IN_CANCEL",
  "CANCELLED",
  "INVOICE_PENDING"
], Vo = L(Ie), ao = [
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
], Fo = L(ao), so = e.object({
  orderSnList: e.array(e.string()),
  responseOptionalFields: e.string().optional()
}), io = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  response: e.object({
    orderList: e.array(
      e.object({
        checkoutShippingCarrier: e.string().nullable(),
        reverseShippingFee: e.number().nullable(),
        actualShippingFee: e.number().nullable(),
        actualShippingFeeConfirmed: e.boolean(),
        buyerCancelReason: e.string(),
        buyerCpfId: e.string().nullable(),
        buyerUserId: e.number(),
        buyerUsername: e.string(),
        cancelBy: e.string(),
        cancelReason: e.string(),
        cod: e.boolean(),
        createTime: e.number(),
        currency: e.string(),
        daysToShip: e.number(),
        dropshipper: e.string(),
        dropshipperPhone: e.string(),
        estimatedShippingFee: e.number(),
        fulfillmentFlag: e.string(),
        goodsToDeclare: e.boolean(),
        invoiceData: e.object({
          number: e.string(),
          seriesNumber: e.string(),
          accessKey: e.string(),
          issueDate: e.number(),
          totalValue: e.number(),
          productsTotalValue: e.number(),
          taxCode: e.string()
        }).nullable(),
        itemList: e.array(
          e.object({
            itemId: e.number(),
            itemName: e.string(),
            itemSku: e.string(),
            modelId: e.number(),
            modelName: e.string(),
            modelSku: e.string(),
            modelQuantityPurchased: e.number(),
            modelOriginalPrice: e.number(),
            modelDiscountedPrice: e.number(),
            wholesale: e.boolean(),
            weight: e.number(),
            addOnDeal: e.boolean(),
            mainItem: e.boolean(),
            addOnDealId: e.number(),
            promotionType: e.string(),
            promotionId: e.number(),
            orderItemId: e.number(),
            promotionGroupId: e.number(),
            imageInfo: e.object({
              imageUrl: e.string()
            }),
            productLocationId: e.array(e.string())
          })
        ),
        prescriptionImages: e.array(e.string()),
        prescriptionCheckStatus: e.number(),
        edtFrom: e.number(),
        edtTo: e.number(),
        orderChargeableWeightGram: e.number(),
        messageToSeller: e.string(),
        note: e.string(),
        noteUpdateTime: e.number(),
        orderSn: e.string(),
        orderStatus: e.string(),
        packageList: e.array(
          e.object({
            packageNumber: e.string(),
            logisticsStatus: e.string(),
            shippingCarrier: e.string(),
            itemList: e.array(
              e.object({
                itemId: e.number(),
                modelId: e.number(),
                modelQuantity: e.number()
              })
            ),
            parcelChargeableWeightGram: e.number()
          })
        ),
        payTime: e.number(),
        paymentMethod: e.string(),
        pickupDoneTime: e.number(),
        recipientAddress: e.object({
          name: e.string(),
          phone: e.string(),
          town: e.string(),
          district: e.string(),
          city: e.string(),
          state: e.string(),
          region: e.string(),
          zipcode: e.string(),
          fullAddress: e.string()
        }),
        region: e.string(),
        shipByDate: e.number(),
        shippingCarrier: e.string(),
        splitUp: e.boolean(),
        totalAmount: e.number(),
        updateTime: e.number()
      })
    )
  }).optional(),
  requestId: e.string()
}), co = l({
  path: oo,
  requestParameterSchema: so,
  responseSchema: io
}), uo = e.object({
  timeRangeField: e.enum(["create_time", "update_time"]),
  timeFrom: e.date(),
  timeTo: e.date(),
  pageSize: e.number().min(1).max(100),
  cursor: e.string().optional(),
  orderStatus: e.enum(Ie).optional(),
  responseOptionalFields: e.enum(["order_status"]).optional().default("order_status")
}), po = e.object({
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
}), go = l({
  path: no,
  requestParameterSchema: uo,
  responseSchema: po,
  toCamelCase: !0
}), mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOrderDetail: co,
  getOrderList: go
}, Symbol.toStringTag, { value: "Module" })), lo = "/api/v2/product/get_item_base_info", _o = "/api/v2/product/get_item_extra_info", bo = "/api/v2/product/get_item_list", fo = "/api/v2/product/get_model_list", Re = ["NORMAL", "DELETED", "UNLIST", "BANNED"], ho = e.object({
  item_id_list: e.string(),
  need_tax_info: e.coerce.boolean().optional(),
  need_complaint_policy: e.coerce.boolean().optional()
}), So = e.object({
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
}), yo = l({
  path: lo,
  requestParameterSchema: ho,
  responseSchema: So,
  transformRequestParameter(r) {
    return r.need_tax_info = !!r.need_tax_info, r.need_complaint_policy = !!r.need_complaint_policy, r;
  }
}), Io = e.object({
  item_id_list: e.string()
}), Ro = e.object({
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
}), To = l({
  path: _o,
  requestParameterSchema: Io,
  responseSchema: Ro
}), Po = e.object({
  offset: e.number().int().min(0).optional(),
  page_size: e.number().int().positive().max(100).optional(),
  update_time_from: e.date().optional(),
  update_time_to: e.date().optional(),
  item_status: e.array(e.enum(Re))
}), Eo = e.object({
  error: e.string(),
  message: e.string().nullable().optional(),
  warning: e.string().nullable().optional(),
  request_id: e.string(),
  response: e.object({
    item: e.array(
      e.object({
        item_id: e.number().int(),
        item_status: e.enum(Re),
        update_time: e.number().int()
      })
    ).optional()
  }).optional(),
  total_count: e.number().int().optional(),
  has_next_page: e.boolean().optional(),
  next_offset: e.number().int().optional()
}), xo = l({
  path: bo,
  requestParameterSchema: Po,
  transformRequestParameter(r) {
    return r.update_time_from = r.update_time_from ?? /* @__PURE__ */ new Date("01/01/2022"), r.update_time_to = r.update_time_to ?? /* @__PURE__ */ new Date(), r;
  },
  responseSchema: Eo
}), Ao = e.object({
  item_id: e.string()
}), jo = e.object({
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
}), Oo = l({
  path: fo,
  requestParameterSchema: Ao,
  responseSchema: jo
}), vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItemBaseInfo: yo,
  getItemExtraInfo: To,
  getItemList: xo,
  getModelList: Oo
}, Symbol.toStringTag, { value: "Module" })), Lo = "/api/v2/auth/token/get", Te = e.object({
  code: e.string(),
  partner_id: e.number().optional(),
  shop_id: e.number().optional(),
  main_account_id: e.number().optional()
}), Pe = e.object({
  access_token: e.string(),
  error: e.string(),
  expires_in: e.number(),
  message: e.string(),
  refresh_token: e.string(),
  request_id: e.string(),
  shop_id_list: e.array(e.number())
}), Co = b({
  path: Lo,
  requestParameterSchema: Te,
  responseSchema: Pe,
  transformRequestParameter(r) {
    return r.partner_id = r.partner_id ?? _.getInstance().partnerId, r;
  }
}), ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAccessToken: Co,
  getAccessTokenRequestParametersSchema: Te,
  getAccessTokenResponseSchema: Pe
}, Symbol.toStringTag, { value: "Module" })), B = "/api/v2/shop/auth_partner";
async function Do({
  redirectURL: r,
  redirectSign: t
}) {
  const { baseURL: n, partnerId: o, partnerKey: a } = _.getInstance();
  if (!a || !o)
    throw new Error("partnerKey is undefined");
  const s = new URL(B, n), p = x(/* @__PURE__ */ new Date()), i = await Z(
    a,
    o.toString(),
    B,
    p
  ), g = new URL(r);
  return g.searchParams.append("sign", t), s.search = new URLSearchParams({
    partner_id: o.toString(),
    redirect: g.toString(),
    timestamp: p,
    sign: i
  }).toString(), s.toString();
}
const wo = e.object({
  code: e.string(),
  shop_id: e.string(),
  sign: e.string()
});
async function No(r) {
  const t = await wo.safeParseAsync(r);
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
const $o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  authPartner: Do,
  verifyCallback: No
}, Symbol.toStringTag, { value: "Module" })), Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  logistic: to,
  order: mo,
  product: vo,
  publicShopee: ko,
  shop: $o
}, Symbol.toStringTag, { value: "Module" })), qo = e.object({
  partnerId: e.coerce.number().optional(),
  partnerKey: e.coerce.string().optional(),
  baseURL: e.coerce.string().url().optional(),
  accessToken: e.coerce.string().optional(),
  shopId: e.coerce.number().optional()
}), v = qo.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK_SHOP_ID
});
if (!v.success)
  throw new Error(v.error.message);
const R = v.data, m = _.getInstance();
class zo {
  constructor(t) {
    m.accessToken = t.accessToken ?? R.accessToken, m.baseURL = t.baseURL ?? R.baseURL, m.partnerId = t.partnerId ?? R.partnerId, m.partnerKey = t.partnerKey ?? R.partnerKey, m.shopId = t.shopId ?? R.shopId, m.isLogEnabled = t.isLogEnabled ?? !1;
  }
  setPartnerId(t) {
    return m.partnerId = t, this;
  }
  setBaseURL(t) {
    return m.baseURL = t, this;
  }
  setPartnerKey(t) {
    return m.partnerKey = t, this;
  }
  setAccessToken(t) {
    return m.accessToken = t, this;
  }
  setShopId(t) {
    return m.shopId = t, this;
  }
  setIsLogEnabled(t) {
    return m.isLogEnabled = t, this;
  }
  get v2() {
    return Uo;
  }
}
export {
  On as API_V2_LOGISTIC_CREATE_SHIPPING_DOCUMENT,
  Ln as API_V2_LOGISTIC_DOWNLOAD_SHIPPING_DOCUMENT,
  jn as API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_PARAMETER,
  vn as API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_RESULT,
  Pn as API_V2_LOGISTIC_GET_SHIPPING_PARAMETER,
  An as API_V2_LOGISTIC_GET_TRACKING_NUMBER,
  En as API_V2_LOGISTIC_SHIP_ORDER,
  xn as API_V2_LOGISTIC_UPDATE_SHIP_ORDER,
  oo as API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  no as API_V2_ORDER_GET_ORDER_LIST_PATH,
  lo as API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH,
  _o as API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH,
  bo as API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  fo as API_V2_PRODUCT_GET_MODEL_LIST_PATH,
  Lo as API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH,
  B as API_V2_SHOP_AUTH_PARTNER,
  Re as ITEM_STATUS,
  zo as ShopeeSdk,
  ye as V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS,
  Ho as V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS_MAP,
  k as V2_LOGISTIC_SHIPPING_DOCUMENT_TYPES,
  Cn as V2_LOGISTIC_SHIPPING_STATUSES,
  ao as V2_ORDER_RESPONSE_OPTIONAL_FIELDS,
  Fo as V2_ORDER_RESPONSE_OPTIONAL_FIELDS_MAP,
  Ie as V2_ORDER_STATUS,
  Vo as V2_ORDER_STATUS_MAP,
  L as createConstantsMap,
  Z as generateHmac,
  Y as signURL,
  x as toTimestamp,
  A as transformObjectKeys
};
