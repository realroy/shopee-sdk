import Oe from "axios";
import { z as e } from "zod";
function L(r) {
  return r.reduce((t, n) => (t[n] = n, t), {});
}
async function Y(r, ...t) {
  let n;
  return typeof globalThis.crypto < "u" && (n = await je(r, ...t)), n = await ve(r, ...t), n;
}
async function je(r, ...t) {
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
  ), p = await crypto.subtle.sign(
    { name: "HMAC", hash: { name: "sha-256" } },
    s,
    a
  ), c = new Uint8Array(p);
  return Array.from(c).map((i) => i.toString(16).padStart(2, "0")).join("");
}
async function ve(r, ...t) {
  const { createHmac: n } = await import("crypto"), o = n("sha256", r);
  return t.filter((a) => !!a).forEach((a) => o.update(a)), o.digest("hex");
}
function x(r) {
  const t = r ? r.getTime() : Date.now();
  return Math.round(t / 1e3).toString();
}
async function J(r) {
  const {
    partner_id: t,
    partner_key: n,
    path: o,
    base_url: a,
    access_token: s,
    shop_id: p,
    params: c = {}
  } = r, g = t.toString(), i = p.toString(), u = {};
  for (const l in c) {
    const S = c[l];
    Array.isArray(S) ? u[l] = [
      S[0],
      ...S.slice(1).map((Ae) => `&${l}=${Ae}`)
    ].join("") : S instanceof Date ? u[l] = x(S) : u[l] = `${S}`;
  }
  const f = x(), h = new URL(o, a), D = await Y(
    n,
    g,
    o,
    f,
    s,
    i
  );
  return h.search = new URLSearchParams({
    ...u,
    partner_id: g,
    shop_id: i,
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
function Le(r, t, n, o) {
  var a = -1, s = r == null ? 0 : r.length;
  for (o && s && (n = r[++a]); ++a < s; )
    n = t(n, r[a], a, r);
  return n;
}
var Ce = Le;
function ke(r) {
  return function(t) {
    return r == null ? void 0 : r[t];
  };
}
var De = ke, we = De, Ne = {
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
}, $e = we(Ne), Ue = $e, qe = typeof T == "object" && T && T.Object === Object && T, Me = qe, Ge = Me, He = typeof self == "object" && self && self.Object === Object && self, Fe = Ge || He || Function("return this")(), Ve = Fe, ze = Ve, Ke = ze.Symbol, C = Ke;
function We(r, t) {
  for (var n = -1, o = r == null ? 0 : r.length, a = Array(o); ++n < o; )
    a[n] = t(r[n], n, r);
  return a;
}
var Be = We, Ze = Array.isArray, Ye = Ze, w = C, Q = Object.prototype, Je = Q.hasOwnProperty, Qe = Q.toString, I = w ? w.toStringTag : void 0;
function Xe(r) {
  var t = Je.call(r, I), n = r[I];
  try {
    r[I] = void 0;
    var o = !0;
  } catch {
  }
  var a = Qe.call(r);
  return o && (t ? r[I] = n : delete r[I]), a;
}
var er = Xe, rr = Object.prototype, tr = rr.toString;
function nr(r) {
  return tr.call(r);
}
var or = nr, N = C, ar = er, sr = or, ir = "[object Null]", cr = "[object Undefined]", $ = N ? N.toStringTag : void 0;
function ur(r) {
  return r == null ? r === void 0 ? cr : ir : $ && $ in Object(r) ? ar(r) : sr(r);
}
var pr = ur;
function gr(r) {
  return r != null && typeof r == "object";
}
var mr = gr, lr = pr, dr = mr, _r = "[object Symbol]";
function br(r) {
  return typeof r == "symbol" || dr(r) && lr(r) == _r;
}
var fr = br, U = C, hr = Be, Sr = Ye, yr = fr, Ir = 1 / 0, q = U ? U.prototype : void 0, M = q ? q.toString : void 0;
function X(r) {
  if (typeof r == "string")
    return r;
  if (Sr(r))
    return hr(r, X) + "";
  if (yr(r))
    return M ? M.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -Ir ? "-0" : t;
}
var Rr = X, Tr = Rr;
function Pr(r) {
  return r == null ? "" : Tr(r);
}
var P = Pr, Er = Ue, xr = P, Ar = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Or = "\\u0300-\\u036f", jr = "\\ufe20-\\ufe2f", vr = "\\u20d0-\\u20ff", Lr = Or + jr + vr, Cr = "[" + Lr + "]", kr = RegExp(Cr, "g");
function Dr(r) {
  return r = xr(r), r && r.replace(Ar, Er).replace(kr, "");
}
var wr = Dr, Nr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function $r(r) {
  return r.match(Nr) || [];
}
var Ur = $r, qr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Mr(r) {
  return qr.test(r);
}
var Gr = Mr, ee = "\\ud800-\\udfff", Hr = "\\u0300-\\u036f", Fr = "\\ufe20-\\ufe2f", Vr = "\\u20d0-\\u20ff", zr = Hr + Fr + Vr, re = "\\u2700-\\u27bf", te = "a-z\\xdf-\\xf6\\xf8-\\xff", Kr = "\\xac\\xb1\\xd7\\xf7", Wr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Br = "\\u2000-\\u206f", Zr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ne = "A-Z\\xc0-\\xd6\\xd8-\\xde", Yr = "\\ufe0e\\ufe0f", oe = Kr + Wr + Br + Zr, ae = "['’]", G = "[" + oe + "]", Jr = "[" + zr + "]", se = "\\d+", Qr = "[" + re + "]", ie = "[" + te + "]", ce = "[^" + ee + oe + se + re + te + ne + "]", Xr = "\\ud83c[\\udffb-\\udfff]", et = "(?:" + Jr + "|" + Xr + ")", rt = "[^" + ee + "]", ue = "(?:\\ud83c[\\udde6-\\uddff]){2}", pe = "[\\ud800-\\udbff][\\udc00-\\udfff]", y = "[" + ne + "]", tt = "\\u200d", H = "(?:" + ie + "|" + ce + ")", nt = "(?:" + y + "|" + ce + ")", F = "(?:" + ae + "(?:d|ll|m|re|s|t|ve))?", V = "(?:" + ae + "(?:D|LL|M|RE|S|T|VE))?", ge = et + "?", me = "[" + Yr + "]?", ot = "(?:" + tt + "(?:" + [rt, ue, pe].join("|") + ")" + me + ge + ")*", at = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", st = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", it = me + ge + ot, ct = "(?:" + [Qr, ue, pe].join("|") + ")" + it, ut = RegExp([
  y + "?" + ie + "+" + F + "(?=" + [G, y, "$"].join("|") + ")",
  nt + "+" + V + "(?=" + [G, y + H, "$"].join("|") + ")",
  y + "?" + H + "+" + F,
  y + "+" + V,
  st,
  at,
  se,
  ct
].join("|"), "g");
function pt(r) {
  return r.match(ut) || [];
}
var gt = pt, mt = Ur, lt = Gr, dt = P, _t = gt;
function bt(r, t, n) {
  return r = dt(r), t = n ? void 0 : t, t === void 0 ? lt(r) ? _t(r) : mt(r) : r.match(t) || [];
}
var ft = bt, ht = Ce, St = wr, yt = ft, It = "['’]", Rt = RegExp(It, "g");
function Tt(r) {
  return function(t) {
    return ht(yt(St(t).replace(Rt, "")), r, "");
  };
}
var le = Tt, Pt = le, Et = Pt(function(r, t, n) {
  return r + (n ? "_" : "") + t.toLowerCase();
}), xt = Et;
function At(r, t, n) {
  var o = -1, a = r.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var s = Array(a); ++o < a; )
    s[o] = r[o + t];
  return s;
}
var Ot = At, jt = Ot;
function vt(r, t, n) {
  var o = r.length;
  return n = n === void 0 ? o : n, !t && n >= o ? r : jt(r, t, n);
}
var Lt = vt, Ct = "\\ud800-\\udfff", kt = "\\u0300-\\u036f", Dt = "\\ufe20-\\ufe2f", wt = "\\u20d0-\\u20ff", Nt = kt + Dt + wt, $t = "\\ufe0e\\ufe0f", Ut = "\\u200d", qt = RegExp("[" + Ut + Ct + Nt + $t + "]");
function Mt(r) {
  return qt.test(r);
}
var de = Mt;
function Gt(r) {
  return r.split("");
}
var Ht = Gt, _e = "\\ud800-\\udfff", Ft = "\\u0300-\\u036f", Vt = "\\ufe20-\\ufe2f", zt = "\\u20d0-\\u20ff", Kt = Ft + Vt + zt, Wt = "\\ufe0e\\ufe0f", Bt = "[" + _e + "]", O = "[" + Kt + "]", j = "\\ud83c[\\udffb-\\udfff]", Zt = "(?:" + O + "|" + j + ")", be = "[^" + _e + "]", fe = "(?:\\ud83c[\\udde6-\\uddff]){2}", he = "[\\ud800-\\udbff][\\udc00-\\udfff]", Yt = "\\u200d", Se = Zt + "?", ye = "[" + Wt + "]?", Jt = "(?:" + Yt + "(?:" + [be, fe, he].join("|") + ")" + ye + Se + ")*", Qt = ye + Se + Jt, Xt = "(?:" + [be + O + "?", O, fe, he, Bt].join("|") + ")", en = RegExp(j + "(?=" + j + ")|" + Xt + Qt, "g");
function rn(r) {
  return r.match(en) || [];
}
var tn = rn, nn = Ht, on = de, an = tn;
function sn(r) {
  return on(r) ? an(r) : nn(r);
}
var cn = sn, un = Lt, pn = de, gn = cn, mn = P;
function ln(r) {
  return function(t) {
    t = mn(t);
    var n = pn(t) ? gn(t) : void 0, o = n ? n[0] : t.charAt(0), a = n ? un(n, 1).join("") : t.slice(1);
    return o[r]() + a;
  };
}
var dn = ln, _n = dn, bn = _n("toUpperCase"), fn = bn, hn = P, Sn = fn;
function yn(r) {
  return Sn(hn(r).toLowerCase());
}
var In = yn, Rn = In, Tn = le, Pn = Tn(function(r, t, n) {
  return t = t.toLowerCase(), r + (n ? Rn(t) : t);
}), En = Pn;
class E {
  constructor() {
    this.logger = console, this.logInterceptorIds = [], this.isLogEnabled = !1, this.axios = Oe.create(), this.isLogEnabled && this.addLogInterceptor();
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
          config: { method: p, url: c, data: g, params: i }
        } = o, u = a == null ? void 0 : a.status;
        throw this.logger.error({ status: u, message: s, method: p, url: c, data: g, params: i }), o;
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
function d(r) {
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
      (l) => xt(l.toString())
    ) : s, c = _.getInstance(), g = c.value;
    z.setLogEnabled(c.isLogEnabled);
    const i = await J({
      ...g,
      path: r.path,
      params: p
    }), u = await z.get(i), f = r.toCamelCase ? A(u.data, (l) => En(l.toString())) : u.data, h = await r.responseSchema.safeParseAsync(f);
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
    const c = await J({
      ...p,
      path: r.path,
      params: {}
    }), g = a.data, { data: i } = await K.post(c, {}, g);
    if (r.responseSchema === void 0)
      return i;
    const u = await r.responseSchema.safeParseAsync(i);
    if (!u.success)
      throw new Error(`parse response error: ${u.error.message}`);
    return u.data;
  };
}
const xn = "/api/v2/logistic/get_shipping_parameter", An = "/api/v2/logistic/ship_order", On = "/api/v2/logistics/update_shipping_order", jn = "/api/v2/logistics/get_tracking_number", vn = "/api/v2/logistic/get_shipping_document_parameter", Ln = "/api/v2/logistic/create_shipping_document", Cn = "/api/v2/logistics/get_shipping_document_result", kn = "/api/v2/logistics/download_shipping_document", Ie = [
  "plp_number",
  "first_mile_tracking_number",
  "last_mile_tracking_number"
], Ho = L(Ie), k = [
  "NORMAL_AIR_WAYBILL",
  "THERMAL_AIR_WAYBILL",
  "NORMAL_JOB_AIR_WAYBILL",
  "THERMAL_JOB_AIR_WAYBILL"
], Dn = ["READY", "FAILED", "PROCESSING"], wn = e.object({
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.string().optional(),
      trackingNumber: e.string().optional(),
      shippingDocumentType: e.enum(k).optional()
    })
  ).min(1).max(50)
}), Nn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  warning: e.object({
    orderSn: e.string(),
    packageNumber: e.string().optional()
  }).optional(),
  response: e.object({
    orderSn: e.string(),
    packageNumber: e.string().optional(),
    failError: e.string(),
    failMessage: e.string()
  }).optional(),
  requestId: e.string()
}), $n = b({
  path: Ln,
  requestParameterSchema: wn,
  responseSchema: Nn
}), Un = e.object({
  shippingDocumentType: e.enum(k).optional(),
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.string().optional()
    })
  ).max(50)
}), qn = e.any(), Mn = b({
  path: kn,
  requestParameterSchema: Un,
  responseSchema: qn
}), Gn = e.object({
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.number().optional()
    })
  ).min(1).max(50)
}), Hn = e.object({
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
}), Fn = b({
  path: vn,
  requestParameterSchema: Gn,
  responseSchema: Hn
}), Vn = e.object({
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.string().optional(),
      shippingDocumentType: e.enum(k).optional()
    })
  ).max(50)
}), zn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  warning: e.object({
    orderSn: e.string(),
    packageNumber: e.number().optional()
  }).optional(),
  response: e.object({
    orderSn: e.string(),
    packageNumber: e.string(),
    status: e.enum(Dn),
    failError: e.string(),
    failMessage: e.string()
  }).optional(),
  requestId: e.string()
}), Kn = b({
  path: Cn,
  requestParameterSchema: Vn,
  responseSchema: zn
}), W = e.object({
  orderSn: e.string(),
  packageNumber: e.number().optional(),
  responseOptionalFields: e.array(e.enum(Ie)).optional()
}), Wn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  response: e.object({}).optional(),
  requestId: e.string()
}), Bn = d({
  path: jn,
  requestParameterSchema: W,
  responseSchema: Wn,
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
}), Zn = e.object({
  orderSn: e.string(),
  packageNumber: e.string().optional()
}), Yn = e.object({
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
}), Jn = d({
  path: xn,
  requestParameterSchema: Zn,
  responseSchema: Yn,
  toCamelCase: !0
}), Qn = e.object({
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
}), Xn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  requestId: e.string()
}), eo = b({
  path: An,
  requestParameterSchema: Qn,
  responseSchema: Xn
}), ro = e.object({
  orderSn: e.string(),
  packageNumber: e.string().optional(),
  pickup: e.object({
    addressId: e.number(),
    pickupTimeId: e.string()
  })
}), to = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  requestId: e.string()
}), no = b({
  path: On,
  requestParameterSchema: ro,
  responseSchema: to
}), oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createShippingDocument: $n,
  downloadShippingDocument: Mn,
  getShippingDocumentParameter: Fn,
  getShippingDocumentResult: Kn,
  getShippingParameter: Jn,
  getTrackingNumber: Bn,
  shipOrder: eo,
  updateShipOrder: no
}, Symbol.toStringTag, { value: "Module" })), ao = "/api/v2/order/get_order_list", so = "/api/v2/order/get_order_detail", Re = [
  "UNPAID",
  "READY_TO_SHIP",
  "PROCESSED",
  "SHIPPED",
  "COMPLETED",
  "IN_CANCEL",
  "CANCELLED",
  "INVOICE_PENDING"
], Fo = L(Re), Te = [
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
], Vo = L(Te), B = e.object({
  orderSnList: e.array(e.string()),
  responseOptionalFields: e.array(e.enum(Te)).optional()
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
}), co = d({
  path: so,
  requestParameterSchema: B,
  transformRequestParameterSchema: B.extend(
    { responseOptionalFields: e.string().optional() }
  ),
  transformRequestParameter(r) {
    var t;
    return {
      ...r,
      responseOptionalFields: (t = r.responseOptionalFields) == null ? void 0 : t.join(",")
    };
  },
  responseSchema: io
}), uo = e.object({
  timeRangeField: e.enum(["create_time", "update_time"]),
  timeFrom: e.date(),
  timeTo: e.date(),
  pageSize: e.number().min(1).max(100),
  cursor: e.string().optional(),
  orderStatus: e.enum(Re).optional(),
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
}), go = d({
  path: ao,
  requestParameterSchema: uo,
  responseSchema: po,
  toCamelCase: !0
}), mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOrderDetail: co,
  getOrderList: go
}, Symbol.toStringTag, { value: "Module" })), lo = "/api/v2/product/get_item_base_info", _o = "/api/v2/product/get_item_extra_info", bo = "/api/v2/product/get_item_list", fo = "/api/v2/product/get_model_list", Pe = ["NORMAL", "DELETED", "UNLIST", "BANNED"], ho = e.object({
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
}), yo = d({
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
}), To = d({
  path: _o,
  requestParameterSchema: Io,
  responseSchema: Ro
}), Po = e.object({
  offset: e.number().int().min(0).optional(),
  page_size: e.number().int().positive().max(100).optional(),
  update_time_from: e.date().optional(),
  update_time_to: e.date().optional(),
  item_status: e.array(e.enum(Pe))
}), Eo = e.object({
  error: e.string(),
  message: e.string().nullable().optional(),
  warning: e.string().nullable().optional(),
  request_id: e.string(),
  response: e.object({
    item: e.array(
      e.object({
        item_id: e.number().int(),
        item_status: e.enum(Pe),
        update_time: e.number().int()
      })
    ).optional()
  }).optional(),
  total_count: e.number().int().optional(),
  has_next_page: e.boolean().optional(),
  next_offset: e.number().int().optional()
}), xo = d({
  path: bo,
  requestParameterSchema: Po,
  transformRequestParameter(r) {
    return r.update_time_from = r.update_time_from ?? /* @__PURE__ */ new Date("01/01/2022"), r.update_time_to = r.update_time_to ?? /* @__PURE__ */ new Date(), r;
  },
  responseSchema: Eo
}), Ao = e.object({
  item_id: e.string()
}), Oo = e.object({
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
}), jo = d({
  path: fo,
  requestParameterSchema: Ao,
  responseSchema: Oo
}), vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItemBaseInfo: yo,
  getItemExtraInfo: To,
  getItemList: xo,
  getModelList: jo
}, Symbol.toStringTag, { value: "Module" })), Lo = "/api/v2/auth/token/get", Ee = e.object({
  code: e.string(),
  partner_id: e.number().optional(),
  shop_id: e.number().optional(),
  main_account_id: e.number().optional()
}), xe = e.object({
  access_token: e.string(),
  error: e.string(),
  expires_in: e.number(),
  message: e.string(),
  refresh_token: e.string(),
  request_id: e.string(),
  shop_id_list: e.array(e.number())
}), Co = b({
  path: Lo,
  requestParameterSchema: Ee,
  responseSchema: xe,
  transformRequestParameter(r) {
    return r.partner_id = r.partner_id ?? _.getInstance().partnerId, r;
  }
}), ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAccessToken: Co,
  getAccessTokenRequestParametersSchema: Ee,
  getAccessTokenResponseSchema: xe
}, Symbol.toStringTag, { value: "Module" })), Z = "/api/v2/shop/auth_partner";
async function Do({
  redirectURL: r,
  redirectSign: t
}) {
  const { baseURL: n, partnerId: o, partnerKey: a } = _.getInstance();
  if (!a || !o)
    throw new Error("partnerKey is undefined");
  const s = new URL(Z, n), p = x(/* @__PURE__ */ new Date()), c = await Y(
    a,
    o.toString(),
    Z,
    p
  ), g = new URL(r);
  return g.searchParams.append("sign", t), s.search = new URLSearchParams({
    partner_id: o.toString(),
    redirect: g.toString(),
    timestamp: p,
    sign: c
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
  logistic: oo,
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
  Ln as API_V2_LOGISTIC_CREATE_SHIPPING_DOCUMENT,
  kn as API_V2_LOGISTIC_DOWNLOAD_SHIPPING_DOCUMENT,
  vn as API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_PARAMETER,
  Cn as API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_RESULT,
  xn as API_V2_LOGISTIC_GET_SHIPPING_PARAMETER,
  jn as API_V2_LOGISTIC_GET_TRACKING_NUMBER,
  An as API_V2_LOGISTIC_SHIP_ORDER,
  On as API_V2_LOGISTIC_UPDATE_SHIP_ORDER,
  so as API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  ao as API_V2_ORDER_GET_ORDER_LIST_PATH,
  lo as API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH,
  _o as API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH,
  bo as API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  fo as API_V2_PRODUCT_GET_MODEL_LIST_PATH,
  Lo as API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH,
  Z as API_V2_SHOP_AUTH_PARTNER,
  Pe as ITEM_STATUS,
  zo as ShopeeSdk,
  Ie as V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS,
  Ho as V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS_MAP,
  k as V2_LOGISTIC_SHIPPING_DOCUMENT_TYPES,
  Dn as V2_LOGISTIC_SHIPPING_STATUSES,
  Te as V2_ORDER_DETAIL_RESPONSE_OPTIONAL_FIELDS,
  Vo as V2_ORDER_DETAIL_RESPONSE_OPTIONAL_FIELDS_MAP,
  Re as V2_ORDER_STATUS,
  Fo as V2_ORDER_STATUS_MAP,
  L as createConstantsMap,
  Y as generateHmac,
  J as signURL,
  x as toTimestamp,
  A as transformObjectKeys
};
