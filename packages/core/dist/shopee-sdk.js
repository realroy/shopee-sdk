import ve from "axios";
import { z as e } from "zod";
function C(r) {
  return r.reduce((t, n) => (t[n] = n, t), {});
}
async function J(r, ...t) {
  let n;
  return typeof globalThis.crypto < "u" && (n = await Ce(r, ...t)), n = await ke(r, ...t), n;
}
async function Ce(r, ...t) {
  const n = new TextEncoder(), o = n.encode(r);
  let a = new Uint8Array();
  t.forEach((u) => {
    u && (a = n.encode(u));
  });
  const s = await crypto.subtle.importKey(
    "raw",
    o,
    { name: "HMAC", hash: "SHA-256" },
    !1,
    ["sign"]
  ), i = await crypto.subtle.sign(
    { name: "HMAC", hash: { name: "sha-256" } },
    s,
    a
  ), c = new Uint8Array(i);
  return Array.from(c).map((u) => u.toString(16).padStart(2, "0")).join("");
}
async function ke(r, ...t) {
  const { createHmac: n } = await import("crypto"), o = n("sha256", r);
  return t.filter((a) => !!a).forEach((a) => o.update(a)), o.digest("hex");
}
function E(r) {
  const t = r ? r.getTime() : Date.now();
  return Math.round(t / 1e3).toString();
}
async function Q(r) {
  const {
    partner_id: t,
    partner_key: n,
    path: o,
    base_url: a,
    access_token: s,
    shop_id: i,
    params: c = {}
  } = r, g = t.toString(), u = i.toString(), l = {};
  for (const p in c) {
    const I = c[p];
    Array.isArray(I) ? l[p] = [
      I[0],
      ...I.slice(1).map((je) => `&${p}=${je}`)
    ].join("") : I instanceof Date ? l[p] = E(I) : l[p] = `${I}`;
  }
  const f = E(), d = new URL(o, a), S = await J(
    n,
    g,
    o,
    f,
    s,
    u
  );
  return d.search = new URLSearchParams({
    ...l,
    partner_id: g,
    shop_id: u,
    ...!!s && { access_token: s },
    sign: S,
    timestamp: f
  }).toString(), d.toString().replace(new RegExp("%26", "g"), "&").replace(new RegExp("%3D", "g"), "=");
}
function T(r, t) {
  if (typeof r != "object" || r === null || r instanceof Date)
    return r;
  if (Array.isArray(r))
    return r.map(
      (a, s) => T(r[s], t)
    );
  const n = {};
  for (const [o, a] of Object.entries(r))
    o !== void 0 && (n[t(o)] = T(a, t));
  return n;
}
var O = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ne(r, t, n, o) {
  var a = -1, s = r == null ? 0 : r.length;
  for (o && s && (n = r[++a]); ++a < s; )
    n = t(n, r[a], a, r);
  return n;
}
var De = Ne;
function we(r) {
  return function(t) {
    return r == null ? void 0 : r[t];
  };
}
var $e = we, Ue = $e, qe = {
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
}, Me = Ue(qe), Ge = Me, He = typeof O == "object" && O && O.Object === Object && O, Fe = He, Ve = Fe, ze = typeof self == "object" && self && self.Object === Object && self, We = Ve || ze || Function("return this")(), Ke = We, Be = Ke, Ze = Be.Symbol, k = Ze;
function Ye(r, t) {
  for (var n = -1, o = r == null ? 0 : r.length, a = Array(o); ++n < o; )
    a[n] = t(r[n], n, r);
  return a;
}
var Je = Ye, Qe = Array.isArray, Xe = Qe, D = k, X = Object.prototype, er = X.hasOwnProperty, rr = X.toString, R = D ? D.toStringTag : void 0;
function tr(r) {
  var t = er.call(r, R), n = r[R];
  try {
    r[R] = void 0;
    var o = !0;
  } catch {
  }
  var a = rr.call(r);
  return o && (t ? r[R] = n : delete r[R]), a;
}
var nr = tr, or = Object.prototype, ar = or.toString;
function sr(r) {
  return ar.call(r);
}
var ir = sr, w = k, cr = nr, ur = ir, pr = "[object Null]", gr = "[object Undefined]", $ = w ? w.toStringTag : void 0;
function mr(r) {
  return r == null ? r === void 0 ? gr : pr : $ && $ in Object(r) ? cr(r) : ur(r);
}
var lr = mr;
function dr(r) {
  return r != null && typeof r == "object";
}
var br = dr, fr = lr, _r = br, hr = "[object Symbol]";
function Sr(r) {
  return typeof r == "symbol" || _r(r) && fr(r) == hr;
}
var Ir = Sr, U = k, yr = Je, Tr = Xe, Rr = Ir, Pr = 1 / 0, q = U ? U.prototype : void 0, M = q ? q.toString : void 0;
function ee(r) {
  if (typeof r == "string")
    return r;
  if (Tr(r))
    return yr(r, ee) + "";
  if (Rr(r))
    return M ? M.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -Pr ? "-0" : t;
}
var Er = ee, Or = Er;
function Ar(r) {
  return r == null ? "" : Or(r);
}
var A = Ar, Lr = Ge, xr = A, jr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, vr = "\\u0300-\\u036f", Cr = "\\ufe20-\\ufe2f", kr = "\\u20d0-\\u20ff", Nr = vr + Cr + kr, Dr = "[" + Nr + "]", wr = RegExp(Dr, "g");
function $r(r) {
  return r = xr(r), r && r.replace(jr, Lr).replace(wr, "");
}
var Ur = $r, qr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Mr(r) {
  return r.match(qr) || [];
}
var Gr = Mr, Hr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Fr(r) {
  return Hr.test(r);
}
var Vr = Fr, re = "\\ud800-\\udfff", zr = "\\u0300-\\u036f", Wr = "\\ufe20-\\ufe2f", Kr = "\\u20d0-\\u20ff", Br = zr + Wr + Kr, te = "\\u2700-\\u27bf", ne = "a-z\\xdf-\\xf6\\xf8-\\xff", Zr = "\\xac\\xb1\\xd7\\xf7", Yr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Jr = "\\u2000-\\u206f", Qr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", oe = "A-Z\\xc0-\\xd6\\xd8-\\xde", Xr = "\\ufe0e\\ufe0f", ae = Zr + Yr + Jr + Qr, se = "['’]", G = "[" + ae + "]", et = "[" + Br + "]", ie = "\\d+", rt = "[" + te + "]", ce = "[" + ne + "]", ue = "[^" + re + ae + ie + te + ne + oe + "]", tt = "\\ud83c[\\udffb-\\udfff]", nt = "(?:" + et + "|" + tt + ")", ot = "[^" + re + "]", pe = "(?:\\ud83c[\\udde6-\\uddff]){2}", ge = "[\\ud800-\\udbff][\\udc00-\\udfff]", y = "[" + oe + "]", at = "\\u200d", H = "(?:" + ce + "|" + ue + ")", st = "(?:" + y + "|" + ue + ")", F = "(?:" + se + "(?:d|ll|m|re|s|t|ve))?", V = "(?:" + se + "(?:D|LL|M|RE|S|T|VE))?", me = nt + "?", le = "[" + Xr + "]?", it = "(?:" + at + "(?:" + [ot, pe, ge].join("|") + ")" + le + me + ")*", ct = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ut = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", pt = le + me + it, gt = "(?:" + [rt, pe, ge].join("|") + ")" + pt, mt = RegExp([
  y + "?" + ce + "+" + F + "(?=" + [G, y, "$"].join("|") + ")",
  st + "+" + V + "(?=" + [G, y + H, "$"].join("|") + ")",
  y + "?" + H + "+" + F,
  y + "+" + V,
  ut,
  ct,
  ie,
  gt
].join("|"), "g");
function lt(r) {
  return r.match(mt) || [];
}
var dt = lt, bt = Gr, ft = Vr, _t = A, ht = dt;
function St(r, t, n) {
  return r = _t(r), t = n ? void 0 : t, t === void 0 ? ft(r) ? ht(r) : bt(r) : r.match(t) || [];
}
var It = St, yt = De, Tt = Ur, Rt = It, Pt = "['’]", Et = RegExp(Pt, "g");
function Ot(r) {
  return function(t) {
    return yt(Rt(Tt(t).replace(Et, "")), r, "");
  };
}
var de = Ot, At = de, Lt = At(function(r, t, n) {
  return r + (n ? "_" : "") + t.toLowerCase();
}), be = Lt;
function xt(r, t, n) {
  var o = -1, a = r.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var s = Array(a); ++o < a; )
    s[o] = r[o + t];
  return s;
}
var jt = xt, vt = jt;
function Ct(r, t, n) {
  var o = r.length;
  return n = n === void 0 ? o : n, !t && n >= o ? r : vt(r, t, n);
}
var kt = Ct, Nt = "\\ud800-\\udfff", Dt = "\\u0300-\\u036f", wt = "\\ufe20-\\ufe2f", $t = "\\u20d0-\\u20ff", Ut = Dt + wt + $t, qt = "\\ufe0e\\ufe0f", Mt = "\\u200d", Gt = RegExp("[" + Mt + Nt + Ut + qt + "]");
function Ht(r) {
  return Gt.test(r);
}
var fe = Ht;
function Ft(r) {
  return r.split("");
}
var Vt = Ft, _e = "\\ud800-\\udfff", zt = "\\u0300-\\u036f", Wt = "\\ufe20-\\ufe2f", Kt = "\\u20d0-\\u20ff", Bt = zt + Wt + Kt, Zt = "\\ufe0e\\ufe0f", Yt = "[" + _e + "]", x = "[" + Bt + "]", j = "\\ud83c[\\udffb-\\udfff]", Jt = "(?:" + x + "|" + j + ")", he = "[^" + _e + "]", Se = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ie = "[\\ud800-\\udbff][\\udc00-\\udfff]", Qt = "\\u200d", ye = Jt + "?", Te = "[" + Zt + "]?", Xt = "(?:" + Qt + "(?:" + [he, Se, Ie].join("|") + ")" + Te + ye + ")*", en = Te + ye + Xt, rn = "(?:" + [he + x + "?", x, Se, Ie, Yt].join("|") + ")", tn = RegExp(j + "(?=" + j + ")|" + rn + en, "g");
function nn(r) {
  return r.match(tn) || [];
}
var on = nn, an = Vt, sn = fe, cn = on;
function un(r) {
  return sn(r) ? cn(r) : an(r);
}
var pn = un, gn = kt, mn = fe, ln = pn, dn = A;
function bn(r) {
  return function(t) {
    t = dn(t);
    var n = mn(t) ? ln(t) : void 0, o = n ? n[0] : t.charAt(0), a = n ? gn(n, 1).join("") : t.slice(1);
    return o[r]() + a;
  };
}
var fn = bn, _n = fn, hn = _n("toUpperCase"), Sn = hn, In = A, yn = Sn;
function Tn(r) {
  return yn(In(r).toLowerCase());
}
var Rn = Tn, Pn = Rn, En = de, On = En(function(r, t, n) {
  return t = t.toLowerCase(), r + (n ? Pn(t) : t);
}), Re = On;
class L {
  constructor() {
    this.logger = console, this.logInterceptorIds = [], this.isLogEnabled = !1, this.axios = ve.create(), this.isLogEnabled && this.addLogInterceptor();
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
          config: { method: i, url: c, data: g, params: u }
        } = o, l = a == null ? void 0 : a.status;
        throw this.logger.error({ status: l, message: s, method: i, url: c, data: g, params: u }), o;
      }
    );
    this.logInterceptorIds = [
      t,
      n
    ];
  }
  removeLogInterceptor() {
    this.logInterceptorIds.forEach(this.axios.interceptors.request.eject);
  }
  static getInstance() {
    return this.instance ?? (this.instance = new L());
  }
  setLogEnabled(t) {
    return this.isLogEnabled = t, this.isLogEnabled ? this.addLogInterceptor() : this.removeLogInterceptor(), this.isLogEnabled;
  }
  get(t, n) {
    return this.axios.get(t, { params: n });
  }
  post(t, n, o, a) {
    return this.axios.post(t, o, {
      params: n,
      ...a && { responseType: a }
    });
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
const z = L.getInstance();
function An(r) {
  return async function(n) {
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
  };
}
function b(r) {
  const t = An(r);
  return async function(o) {
    const a = await r.requestParameterSchema.safeParseAsync(o);
    if (!a.success)
      throw new Error(
        `parse request parameters error: ${a.error.message}`
      );
    const s = await t(a.data), i = T(
      s,
      (p) => be(p.toString())
    ), c = _.getInstance(), g = c.value;
    z.setLogEnabled(c.isLogEnabled);
    const u = await Q({
      ...g,
      path: r.path,
      params: i
    }), l = await z.get(u), f = T(
      l.data,
      (p) => Re(p.toString())
    ), d = await r.responseSchema.safeParseAsync(f);
    if (!d.success)
      throw new Error(`parse response error: ${d.error.message}`);
    return d.data;
  };
}
const W = L.getInstance();
function h({
  responseType: r = "json",
  ...t
}) {
  function n(o) {
    return t.transformRequestParameter ? t.transformRequestParameter(o) : o;
  }
  return async function(a) {
    const s = n(a), i = await t.requestParameterSchema.safeParseAsync(
      s
    );
    if (!i.success)
      throw new Error(
        `parse request parameters error: ${i.error.message}`
      );
    const c = _.getInstance(), g = c.value;
    W.setLogEnabled(c.isLogEnabled);
    const u = await Q({
      ...g,
      path: t.path,
      params: {}
    }), l = T(
      i.data,
      (p) => be(p.toString())
    ), f = await W.post(u, {}, l, r);
    if (r !== "json" || t.responseSchema === void 0)
      return f.data;
    const d = T(
      f.data,
      (p) => Re(p.toString())
    ), S = await t.responseSchema.safeParseAsync(d);
    if (!S.success)
      throw new Error(`parse response error: ${S.error.message}`);
    return S.data;
  };
}
const Ln = "/api/v2/logistics/get_shipping_parameter", xn = "/api/v2/logistic/ship_order", jn = "/api/v2/logistics/update_shipping_order", vn = "/api/v2/logistics/get_tracking_number", Cn = "/api/v2/logistics/get_shipping_document_parameter", kn = "/api/v2/logistics/create_shipping_document", Nn = "/api/v2/logistics/get_shipping_document_result", Dn = "/api/v2/logistics/download_shipping_document", Pe = [
  "plp_number",
  "first_mile_tracking_number",
  "last_mile_tracking_number"
], Ho = C(Pe), N = [
  "NORMAL_AIR_WAYBILL",
  "THERMAL_AIR_WAYBILL",
  "NORMAL_JOB_AIR_WAYBILL",
  "THERMAL_JOB_AIR_WAYBILL"
], wn = [
  "READY",
  "FAILED",
  "PROCESSING"
], $n = e.object({
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.string().optional(),
      trackingNumber: e.string().optional(),
      shippingDocumentType: e.enum(N).optional()
    })
  ).min(1).max(50)
}), Un = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  warning: e.object({
    orderSn: e.string(),
    packageNumber: e.string().optional()
  }).optional(),
  response: e.array(
    e.object({
      orderSn: e.string().optional(),
      packageNumber: e.string().optional(),
      failError: e.string().optional().nullable(),
      failMessage: e.string().optional().nullable()
    })
  ).optional(),
  requestId: e.string()
}), qn = h({
  path: kn,
  requestParameterSchema: $n,
  responseSchema: Un
}), Mn = e.object({
  shippingDocumentType: e.enum(N).optional(),
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.string().optional()
    })
  ).max(50)
}), Gn = e.object({
  data: e.string()
}), Hn = h({
  path: Dn,
  requestParameterSchema: Mn,
  responseSchema: Gn,
  responseType: "stream"
}), Fn = e.object({
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.number().optional()
    })
  ).min(1).max(50)
}), Vn = e.object({
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
}), zn = h({
  path: Cn,
  requestParameterSchema: Fn,
  responseSchema: Vn
}), Wn = e.object({
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.string().optional(),
      shippingDocumentType: e.enum(N).optional()
    })
  ).max(50)
}), Kn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  warning: e.object({
    orderSn: e.string(),
    packageNumber: e.number().optional()
  }).optional(),
  response: e.object({
    orderSn: e.string(),
    packageNumber: e.string(),
    status: e.enum(wn),
    failError: e.string(),
    failMessage: e.string()
  }).optional(),
  requestId: e.string()
}), Bn = h({
  path: Nn,
  requestParameterSchema: Wn,
  responseSchema: Kn
}), K = e.object({
  orderSn: e.string(),
  packageNumber: e.string().optional(),
  responseOptionalFields: e.array(e.enum(Pe)).optional()
}), Zn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  response: e.object({
    firstMileTrackingNumber: e.string().nullable().optional(),
    hint: e.string().optional(),
    lastMileTrackingNumber: e.string().nullable().optional(),
    plpNumber: e.string().nullable().optional(),
    trackingNumber: e.string().nullable()
  }).optional(),
  requestId: e.string()
}), Yn = b({
  path: vn,
  requestParameterSchema: K,
  responseSchema: Zn,
  transformRequestParameterSchema: K.extend({
    responseOptionalFields: e.string().optional()
  }),
  transformRequestParameter(r) {
    var t;
    return {
      ...r,
      responseOptionalFields: (t = r.responseOptionalFields) == null ? void 0 : t.join(",")
    };
  }
}), Jn = e.object({
  orderSn: e.string(),
  packageNumber: e.string().optional()
}), Qn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  response: e.object({
    infoNeeded: e.object({
      dropoff: e.array(e.string()),
      pickup: e.array(e.string()),
      nonIntegrated: e.array(e.string()).nullable().optional()
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
      ).nullable().optional(),
      slugList: e.array(
        e.object({
          slug: e.string(),
          slugName: e.string()
        })
      ).nullable()
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
      ).optional().nullable()
    })
  }).optional(),
  requestId: e.string()
}), Xn = b({
  path: Ln,
  requestParameterSchema: Jn,
  responseSchema: Qn
}), eo = e.object({
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
}), ro = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  requestId: e.string()
}), to = h({
  path: xn,
  requestParameterSchema: eo,
  responseSchema: ro
}), no = e.object({
  orderSn: e.string(),
  packageNumber: e.string().optional(),
  pickup: e.object({
    addressId: e.number(),
    pickupTimeId: e.string()
  })
}), oo = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  requestId: e.string()
}), ao = h({
  path: jn,
  requestParameterSchema: no,
  responseSchema: oo
}), so = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createShippingDocument: qn,
  downloadShippingDocument: Hn,
  getShippingDocumentParameter: zn,
  getShippingDocumentResult: Bn,
  getShippingParameter: Xn,
  getTrackingNumber: Yn,
  shipOrder: to,
  updateShipOrder: ao
}, Symbol.toStringTag, { value: "Module" })), io = "/api/v2/order/get_order_list", co = "/api/v2/order/get_order_detail", Ee = [
  "UNPAID",
  "READY_TO_SHIP",
  "PROCESSED",
  "SHIPPED",
  "COMPLETED",
  "IN_CANCEL",
  "CANCELLED",
  "INVOICE_PENDING"
], Fo = C(Ee), Oe = [
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
], Vo = C(Oe), B = e.object({
  orderSnList: e.array(e.string()),
  responseOptionalFields: e.array(e.enum(Oe)).optional()
}), uo = e.object({
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
        prescriptionImages: e.array(e.string()).nullable(),
        prescriptionCheckStatus: e.number().nullable(),
        edtFrom: e.number().optional(),
        edtTo: e.number().optional(),
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
        payTime: e.number().nullable(),
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
}), po = b({
  path: co,
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
  responseSchema: uo
}), go = e.object({
  timeRangeField: e.enum(["create_time", "update_time"]),
  timeFrom: e.date(),
  timeTo: e.date(),
  pageSize: e.number().min(1).max(100),
  cursor: e.string().optional(),
  orderStatus: e.enum(Ee).optional(),
  responseOptionalFields: e.enum(["order_status"]).optional().default("order_status")
}), mo = e.object({
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
}), lo = b({
  path: io,
  requestParameterSchema: go,
  responseSchema: mo
}), bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOrderDetail: po,
  getOrderList: lo
}, Symbol.toStringTag, { value: "Module" })), fo = "/api/v2/product/get_item_base_info", _o = "/api/v2/product/get_item_extra_info", ho = "/api/v2/product/get_item_list", So = "/api/v2/product/get_model_list", Ae = ["NORMAL", "DELETED", "UNLIST", "BANNED"], Io = e.object({
  itemIdList: e.string(),
  needTaxInfo: e.coerce.boolean().optional(),
  needComplaintPolicy: e.coerce.boolean().optional()
}), yo = e.object({
  error: e.string(),
  message: e.string(),
  warning: e.string(),
  requestId: e.string(),
  response: e.object({
    itemList: e.array(
      e.object({
        itemId: e.number(),
        categoryId: e.number(),
        itemName: e.string(),
        itemSku: e.string(),
        createTime: e.number(),
        updateTime: e.number(),
        attributeList: e.array(
          e.object({
            attributeId: e.number(),
            originalAttributeName: e.string(),
            isMandatory: e.boolean(),
            attributeValueList: e.array(
              e.object({
                valueId: e.number(),
                originalValueName: e.string(),
                valueUnit: e.string()
              })
            )
          })
        ).optional(),
        priceInfo: e.array(
          e.object({
            currency: e.string(),
            originalPrice: e.number(),
            currentPrice: e.number()
          })
        ).optional(),
        stockInfoV2: e.object({
          summaryInfo: e.object({
            totalReservedStock: e.number(),
            totalAvailableStock: e.number()
          }),
          sellerStock: e.array(
            e.object({
              locationId: e.string(),
              stock: e.number()
            })
          ).optional()
        }).optional(),
        image: e.object({
          imageUrlList: e.array(e.string()),
          imageIdList: e.array(e.string())
        }),
        weight: e.string(),
        dimension: e.object({
          packageLength: e.number(),
          packageWidth: e.number(),
          packageHeight: e.number()
        }),
        logisticInfo: e.array(
          e.object({
            logisticId: e.number(),
            logisticName: e.string(),
            enabled: e.boolean(),
            shippingFee: e.number().optional(),
            isFree: e.boolean(),
            estimatedShippingFee: e.number().optional()
          })
        ).optional(),
        preOrder: e.object({
          isPreOrder: e.boolean(),
          daysToShip: e.number()
        }),
        condition: e.string(),
        sizeChart: e.string(),
        itemStatus: e.string(),
        hasModel: e.boolean(),
        promotionId: e.number().optional(),
        brand: e.object({
          brandId: e.number(),
          originalBrandName: e.string()
        }),
        taxInfo: e.object({
          ncm: e.number(),
          sameStateCfop: e.number(),
          diffStateCfop: e.number(),
          csosn: e.number(),
          origin: e.number()
        }).optional(),
        descriptionType: e.string(),
        descriptionInfo: e.object({
          extendedDescription: e.object({
            fieldList: e.array(
              e.object({
                fieldType: e.string(),
                text: e.string().optional(),
                imageInfo: e.object({
                  imageId: e.string(),
                  imageUrl: e.string()
                }).optional()
              })
            )
          }).optional()
        }).optional()
      })
    ).optional()
  })
}), To = b({
  path: fo,
  requestParameterSchema: Io,
  responseSchema: yo,
  transformRequestParameter(r) {
    return r.needTaxInfo = !!r.needTaxInfo, r.needComplaintPolicy = !!r.needComplaintPolicy, r;
  }
}), Ro = e.object({
  itemIdList: e.string()
}), Po = e.object({
  error: e.string(),
  message: e.string(),
  warning: e.string().optional(),
  requestId: e.string(),
  response: e.object({
    itemList: e.array(
      e.object({
        itemId: e.number(),
        sale: e.number(),
        views: e.number(),
        likes: e.number(),
        ratingStar: e.number(),
        commentCount: e.number()
      })
    ).optional()
  }).optional()
}), Eo = b({
  path: _o,
  requestParameterSchema: Ro,
  responseSchema: Po
}), Z = e.object({
  offset: e.number().int().min(0).optional(),
  pageSize: e.number().int().positive().max(100).optional(),
  updateTimeFrom: e.date().optional(),
  updateTimeTo: e.date().optional(),
  itemStatus: e.array(e.enum(Ae))
}), Oo = e.object({
  error: e.string().optional(),
  message: e.string().nullable().optional(),
  warning: e.string().nullable().optional(),
  requestId: e.string(),
  response: e.object({
    item: e.array(
      e.object({
        itemId: e.number().int(),
        itemStatus: e.enum(Ae),
        updateTime: e.number().int().optional()
      })
    ).optional()
  }).optional(),
  totalCount: e.number().int().optional(),
  hasNextPage: e.boolean().optional(),
  nextOffset: e.number().int().optional()
}), Ao = b({
  path: ho,
  requestParameterSchema: Z,
  transformRequestParameterSchema: Z.extend({
    updateTimeFrom: e.string(),
    updateTimeTo: e.string()
  }),
  transformRequestParameter(r) {
    return {
      ...r,
      updateTimeFrom: E(
        r.updateTimeFrom ?? /* @__PURE__ */ new Date("01/01/2022")
      ),
      updateTimeTo: E(r.updateTimeTo ?? /* @__PURE__ */ new Date())
    };
  },
  responseSchema: Oo
}), Lo = e.object({
  item_id: e.string()
}), xo = e.object({
  error: e.string(),
  message: e.string(),
  warning: e.string(),
  requestId: e.string(),
  // changed from request_id
  response: e.object({
    tierVariation: e.array(
      // changed from tier_variation
      e.object({
        name: e.string(),
        optionList: e.array(
          // changed from option_list
          e.object({
            option: e.string()
          })
        )
      })
    ),
    model: e.array(
      e.object({
        modelId: e.number(),
        // changed from model_id
        modelStatus: e.string(),
        // changed from model_status
        promotionId: e.number(),
        // changed from promotion_id
        tierIndex: e.array(e.number()),
        // changed from tier_index
        priceInfo: e.array(
          // changed from price_info
          e.object({
            currentPrice: e.number(),
            // changed from current_price
            originalPrice: e.number(),
            // changed from original_price
            inflatedPriceOfCurrentPrice: e.number(),
            // changed from inflated_price_of_current_price
            inflatedPriceOfOriginalPrice: e.number()
            // changed from inflated_price_of_original_price
          })
        ),
        modelSku: e.string(),
        // changed from model_sku
        preOrder: e.object({
          // changed from pre_order
          isPreOrder: e.boolean(),
          // changed from is_pre_order
          daysToShip: e.number()
          // changed from days_to_ship
        }),
        stockInfoV2: e.object({
          // changed from stock_info_v2
          summaryInfo: e.object({
            // changed from summary_info
            totalReservedStock: e.number(),
            // changed from total_reserved_stock
            totalAvailableStock: e.number()
            // changed from total_available_stock
          }),
          sellerStock: e.array(
            // changed from seller_stock
            e.object({
              locationId: e.string(),
              // changed from location_id
              stock: e.number()
            })
          )
        })
      })
    )
  })
}), jo = b({
  path: So,
  requestParameterSchema: Lo,
  responseSchema: xo
}), vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItemBaseInfo: To,
  getItemExtraInfo: Eo,
  getItemList: Ao,
  getModelList: jo
}, Symbol.toStringTag, { value: "Module" })), Co = "/api/v2/auth/token/get", Le = e.object({
  code: e.string(),
  partnerId: e.number().optional(),
  shopId: e.number().optional(),
  mainAccountId: e.number().optional()
}), xe = e.object({
  accessToken: e.string(),
  error: e.string(),
  expireIn: e.number(),
  message: e.string(),
  refreshToken: e.string(),
  requestId: e.string(),
  merchantIdList: e.array(e.number()).optional(),
  shopIdList: e.array(e.number()).optional()
}), ko = h({
  path: Co,
  requestParameterSchema: Le,
  responseSchema: xe,
  transformRequestParameter(r) {
    return {
      ...r,
      partnerId: _.getInstance().partnerId
    };
  }
}), Y = "/api/v2/shop/auth_partner";
async function No({
  redirectURL: r,
  redirectSign: t
}) {
  const { baseURL: n, partnerId: o, partnerKey: a } = _.getInstance();
  if (!a || !o)
    throw new Error("partnerKey is undefined");
  const s = new URL(Y, n), i = E(/* @__PURE__ */ new Date()), c = await J(
    a,
    o.toString(),
    Y,
    i
  ), g = new URL(r);
  return g.searchParams.append("sign", t), s.search = new URLSearchParams({
    partner_id: o.toString(),
    redirect: g.toString(),
    timestamp: i,
    sign: c
  }).toString(), s.toString();
}
const Do = e.object({
  code: e.string(),
  shop_id: e.string(),
  sign: e.string()
});
async function wo(r) {
  const t = await Do.safeParseAsync(r);
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
  authPartner: No,
  verifyCallback: wo
}, Symbol.toStringTag, { value: "Module" })), Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAccessToken: ko,
  getAccessTokenRequestParametersSchema: Le,
  getAccessTokenResponseSchema: xe,
  logistic: so,
  order: bo,
  product: vo,
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
const P = v.data, m = _.getInstance();
class zo {
  constructor(t = {}) {
    m.accessToken = t.accessToken ?? P.accessToken, m.baseURL = t.baseURL ?? P.baseURL, m.partnerId = t.partnerId ?? P.partnerId, m.partnerKey = t.partnerKey ?? P.partnerKey, m.shopId = t.shopId ?? P.shopId, m.isLogEnabled = t.isLogEnabled ?? !1;
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
  kn as API_V2_LOGISTIC_CREATE_SHIPPING_DOCUMENT,
  Dn as API_V2_LOGISTIC_DOWNLOAD_SHIPPING_DOCUMENT,
  Cn as API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_PARAMETER,
  Nn as API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_RESULT,
  Ln as API_V2_LOGISTIC_GET_SHIPPING_PARAMETER,
  vn as API_V2_LOGISTIC_GET_TRACKING_NUMBER,
  xn as API_V2_LOGISTIC_SHIP_ORDER,
  jn as API_V2_LOGISTIC_UPDATE_SHIP_ORDER,
  co as API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  io as API_V2_ORDER_GET_ORDER_LIST_PATH,
  fo as API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH,
  _o as API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH,
  ho as API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  So as API_V2_PRODUCT_GET_MODEL_LIST_PATH,
  Co as API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH,
  Y as API_V2_SHOP_AUTH_PARTNER,
  Ae as ITEM_STATUS,
  zo as ShopeeSdk,
  Pe as V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS,
  Ho as V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS_MAP,
  N as V2_LOGISTIC_SHIPPING_DOCUMENT_TYPES,
  wn as V2_LOGISTIC_SHIPPING_STATUSES,
  Oe as V2_ORDER_DETAIL_RESPONSE_OPTIONAL_FIELDS,
  Vo as V2_ORDER_DETAIL_RESPONSE_OPTIONAL_FIELDS_MAP,
  Ee as V2_ORDER_STATUS,
  Fo as V2_ORDER_STATUS_MAP,
  C as createConstantsMap,
  J as generateHmac,
  Q as signURL,
  E as toTimestamp,
  T as transformObjectKeys
};
