import ve from "axios";
import { z as e } from "zod";
function L(r) {
  return r.reduce((t, n) => (t[n] = n, t), {});
}
async function J(r, ...t) {
  let n;
  return typeof globalThis.crypto < "u" && (n = await je(r, ...t)), n = await Le(r, ...t), n;
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
async function Le(r, ...t) {
  const { createHmac: n } = await import("crypto"), o = n("sha256", r);
  return t.filter((a) => !!a).forEach((a) => o.update(a)), o.digest("hex");
}
function T(r) {
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
    shop_id: p,
    params: c = {}
  } = r, g = t.toString(), i = p.toString(), u = {};
  for (const d in c) {
    const S = c[d];
    Array.isArray(S) ? u[d] = [
      S[0],
      ...S.slice(1).map((Oe) => `&${d}=${Oe}`)
    ].join("") : S instanceof Date ? u[d] = T(S) : u[d] = `${S}`;
  }
  const f = T(), h = new URL(o, a), D = await J(
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
function E(r, t) {
  if (typeof r != "object" || r === null)
    return r;
  if (Array.isArray(r)) {
    const o = [];
    for (const a of r) {
      if (a === void 0)
        continue;
      const s = E(a, t);
      o.push(s);
    }
    return o;
  }
  const n = {};
  for (const [o, a] of Object.entries(r))
    o !== void 0 && (n[t(o)] = E(a, t));
  return n;
}
var P = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ce(r, t, n, o) {
  var a = -1, s = r == null ? 0 : r.length;
  for (o && s && (n = r[++a]); ++a < s; )
    n = t(n, r[a], a, r);
  return n;
}
var ke = Ce;
function De(r) {
  return function(t) {
    return r == null ? void 0 : r[t];
  };
}
var we = De, Ne = we, $e = {
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
}, Ue = Ne($e), qe = Ue, Me = typeof P == "object" && P && P.Object === Object && P, Ge = Me, He = Ge, Fe = typeof self == "object" && self && self.Object === Object && self, Ve = He || Fe || Function("return this")(), ze = Ve, Ke = ze, We = Ke.Symbol, C = We;
function Be(r, t) {
  for (var n = -1, o = r == null ? 0 : r.length, a = Array(o); ++n < o; )
    a[n] = t(r[n], n, r);
  return a;
}
var Ze = Be, Ye = Array.isArray, Je = Ye, w = C, X = Object.prototype, Qe = X.hasOwnProperty, Xe = X.toString, y = w ? w.toStringTag : void 0;
function er(r) {
  var t = Qe.call(r, y), n = r[y];
  try {
    r[y] = void 0;
    var o = !0;
  } catch {
  }
  var a = Xe.call(r);
  return o && (t ? r[y] = n : delete r[y]), a;
}
var rr = er, tr = Object.prototype, nr = tr.toString;
function or(r) {
  return nr.call(r);
}
var ar = or, N = C, sr = rr, ir = ar, cr = "[object Null]", ur = "[object Undefined]", $ = N ? N.toStringTag : void 0;
function pr(r) {
  return r == null ? r === void 0 ? ur : cr : $ && $ in Object(r) ? sr(r) : ir(r);
}
var gr = pr;
function mr(r) {
  return r != null && typeof r == "object";
}
var dr = mr, lr = gr, _r = dr, br = "[object Symbol]";
function fr(r) {
  return typeof r == "symbol" || _r(r) && lr(r) == br;
}
var hr = fr, U = C, Sr = Ze, Ir = Je, yr = hr, Rr = 1 / 0, q = U ? U.prototype : void 0, M = q ? q.toString : void 0;
function ee(r) {
  if (typeof r == "string")
    return r;
  if (Ir(r))
    return Sr(r, ee) + "";
  if (yr(r))
    return M ? M.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -Rr ? "-0" : t;
}
var Tr = ee, Pr = Tr;
function Er(r) {
  return r == null ? "" : Pr(r);
}
var x = Er, xr = qe, Ar = x, Or = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, vr = "\\u0300-\\u036f", jr = "\\ufe20-\\ufe2f", Lr = "\\u20d0-\\u20ff", Cr = vr + jr + Lr, kr = "[" + Cr + "]", Dr = RegExp(kr, "g");
function wr(r) {
  return r = Ar(r), r && r.replace(Or, xr).replace(Dr, "");
}
var Nr = wr, $r = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Ur(r) {
  return r.match($r) || [];
}
var qr = Ur, Mr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Gr(r) {
  return Mr.test(r);
}
var Hr = Gr, re = "\\ud800-\\udfff", Fr = "\\u0300-\\u036f", Vr = "\\ufe20-\\ufe2f", zr = "\\u20d0-\\u20ff", Kr = Fr + Vr + zr, te = "\\u2700-\\u27bf", ne = "a-z\\xdf-\\xf6\\xf8-\\xff", Wr = "\\xac\\xb1\\xd7\\xf7", Br = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Zr = "\\u2000-\\u206f", Yr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", oe = "A-Z\\xc0-\\xd6\\xd8-\\xde", Jr = "\\ufe0e\\ufe0f", ae = Wr + Br + Zr + Yr, se = "['’]", G = "[" + ae + "]", Qr = "[" + Kr + "]", ie = "\\d+", Xr = "[" + te + "]", ce = "[" + ne + "]", ue = "[^" + re + ae + ie + te + ne + oe + "]", et = "\\ud83c[\\udffb-\\udfff]", rt = "(?:" + Qr + "|" + et + ")", tt = "[^" + re + "]", pe = "(?:\\ud83c[\\udde6-\\uddff]){2}", ge = "[\\ud800-\\udbff][\\udc00-\\udfff]", I = "[" + oe + "]", nt = "\\u200d", H = "(?:" + ce + "|" + ue + ")", ot = "(?:" + I + "|" + ue + ")", F = "(?:" + se + "(?:d|ll|m|re|s|t|ve))?", V = "(?:" + se + "(?:D|LL|M|RE|S|T|VE))?", me = rt + "?", de = "[" + Jr + "]?", at = "(?:" + nt + "(?:" + [tt, pe, ge].join("|") + ")" + de + me + ")*", st = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", it = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ct = de + me + at, ut = "(?:" + [Xr, pe, ge].join("|") + ")" + ct, pt = RegExp([
  I + "?" + ce + "+" + F + "(?=" + [G, I, "$"].join("|") + ")",
  ot + "+" + V + "(?=" + [G, I + H, "$"].join("|") + ")",
  I + "?" + H + "+" + F,
  I + "+" + V,
  it,
  st,
  ie,
  ut
].join("|"), "g");
function gt(r) {
  return r.match(pt) || [];
}
var mt = gt, dt = qr, lt = Hr, _t = x, bt = mt;
function ft(r, t, n) {
  return r = _t(r), t = n ? void 0 : t, t === void 0 ? lt(r) ? bt(r) : dt(r) : r.match(t) || [];
}
var ht = ft, St = ke, It = Nr, yt = ht, Rt = "['’]", Tt = RegExp(Rt, "g");
function Pt(r) {
  return function(t) {
    return St(yt(It(t).replace(Tt, "")), r, "");
  };
}
var le = Pt, Et = le, xt = Et(function(r, t, n) {
  return r + (n ? "_" : "") + t.toLowerCase();
}), At = xt;
function Ot(r, t, n) {
  var o = -1, a = r.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var s = Array(a); ++o < a; )
    s[o] = r[o + t];
  return s;
}
var vt = Ot, jt = vt;
function Lt(r, t, n) {
  var o = r.length;
  return n = n === void 0 ? o : n, !t && n >= o ? r : jt(r, t, n);
}
var Ct = Lt, kt = "\\ud800-\\udfff", Dt = "\\u0300-\\u036f", wt = "\\ufe20-\\ufe2f", Nt = "\\u20d0-\\u20ff", $t = Dt + wt + Nt, Ut = "\\ufe0e\\ufe0f", qt = "\\u200d", Mt = RegExp("[" + qt + kt + $t + Ut + "]");
function Gt(r) {
  return Mt.test(r);
}
var _e = Gt;
function Ht(r) {
  return r.split("");
}
var Ft = Ht, be = "\\ud800-\\udfff", Vt = "\\u0300-\\u036f", zt = "\\ufe20-\\ufe2f", Kt = "\\u20d0-\\u20ff", Wt = Vt + zt + Kt, Bt = "\\ufe0e\\ufe0f", Zt = "[" + be + "]", O = "[" + Wt + "]", v = "\\ud83c[\\udffb-\\udfff]", Yt = "(?:" + O + "|" + v + ")", fe = "[^" + be + "]", he = "(?:\\ud83c[\\udde6-\\uddff]){2}", Se = "[\\ud800-\\udbff][\\udc00-\\udfff]", Jt = "\\u200d", Ie = Yt + "?", ye = "[" + Bt + "]?", Qt = "(?:" + Jt + "(?:" + [fe, he, Se].join("|") + ")" + ye + Ie + ")*", Xt = ye + Ie + Qt, en = "(?:" + [fe + O + "?", O, he, Se, Zt].join("|") + ")", rn = RegExp(v + "(?=" + v + ")|" + en + Xt, "g");
function tn(r) {
  return r.match(rn) || [];
}
var nn = tn, on = Ft, an = _e, sn = nn;
function cn(r) {
  return an(r) ? sn(r) : on(r);
}
var un = cn, pn = Ct, gn = _e, mn = un, dn = x;
function ln(r) {
  return function(t) {
    t = dn(t);
    var n = gn(t) ? mn(t) : void 0, o = n ? n[0] : t.charAt(0), a = n ? pn(n, 1).join("") : t.slice(1);
    return o[r]() + a;
  };
}
var _n = ln, bn = _n, fn = bn("toUpperCase"), hn = fn, Sn = x, In = hn;
function yn(r) {
  return In(Sn(r).toLowerCase());
}
var Rn = yn, Tn = Rn, Pn = le, En = Pn(function(r, t, n) {
  return t = t.toLowerCase(), r + (n ? Tn(t) : t);
}), xn = En;
class A {
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
    return this.instance ?? (this.instance = new A());
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
const z = A.getInstance();
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
    const s = await t(a.data), p = r.toCamelCase ? E(
      s,
      (d) => At(d.toString())
    ) : s, c = _.getInstance(), g = c.value;
    z.setLogEnabled(c.isLogEnabled);
    const i = await Q({
      ...g,
      path: r.path,
      params: p
    }), u = await z.get(i), f = r.toCamelCase ? E(u.data, (d) => xn(d.toString())) : u.data, h = await r.responseSchema.safeParseAsync(f);
    if (!h.success)
      throw new Error(`parse response error: ${h.error.message}`);
    return h.data;
  };
}
const K = A.getInstance();
function b(r) {
  return async function(n) {
    const o = r.transformRequestParameter ?? ((f) => f), a = await r.requestParameterSchema.transform(o).safeParseAsync(n);
    if (!a.success)
      throw new Error(
        `parse request parameters error: ${a.error.message}`
      );
    const s = _.getInstance(), p = s.value;
    K.setLogEnabled(s.isLogEnabled);
    const c = await Q({
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
const An = "/api/v2/logistic/get_shipping_parameter", On = "/api/v2/logistic/ship_order", vn = "/api/v2/logistics/update_shipping_order", jn = "/api/v2/logistics/get_tracking_number", Ln = "/api/v2/logistic/get_shipping_document_parameter", Cn = "/api/v2/logistic/create_shipping_document", kn = "/api/v2/logistics/get_shipping_document_result", Dn = "/api/v2/logistics/download_shipping_document", Re = [
  "plp_number",
  "first_mile_tracking_number",
  "last_mile_tracking_number"
], Ho = L(Re), k = [
  "NORMAL_AIR_WAYBILL",
  "THERMAL_AIR_WAYBILL",
  "NORMAL_JOB_AIR_WAYBILL",
  "THERMAL_JOB_AIR_WAYBILL"
], wn = ["READY", "FAILED", "PROCESSING"], Nn = e.object({
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.string().optional(),
      trackingNumber: e.string().optional(),
      shippingDocumentType: e.enum(k).optional()
    })
  ).min(1).max(50)
}), $n = e.object({
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
}), Un = b({
  path: Cn,
  requestParameterSchema: Nn,
  responseSchema: $n
}), qn = e.object({
  shippingDocumentType: e.enum(k).optional(),
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.string().optional()
    })
  ).max(50)
}), Mn = e.any(), Gn = b({
  path: Dn,
  requestParameterSchema: qn,
  responseSchema: Mn
}), Hn = e.object({
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.number().optional()
    })
  ).min(1).max(50)
}), Fn = e.object({
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
}), Vn = b({
  path: Ln,
  requestParameterSchema: Hn,
  responseSchema: Fn
}), zn = e.object({
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.string().optional(),
      shippingDocumentType: e.enum(k).optional()
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
}), Wn = b({
  path: kn,
  requestParameterSchema: zn,
  responseSchema: Kn
}), W = e.object({
  orderSn: e.string(),
  packageNumber: e.number().optional(),
  responseOptionalFields: e.array(e.enum(Re)).optional()
}), Bn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  response: e.object({}).optional(),
  requestId: e.string()
}), Zn = l({
  path: jn,
  requestParameterSchema: W,
  responseSchema: Bn,
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
}), Yn = e.object({
  orderSn: e.string(),
  packageNumber: e.string().optional()
}), Jn = e.object({
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
}), Qn = l({
  path: An,
  requestParameterSchema: Yn,
  responseSchema: Jn,
  toCamelCase: !0
}), Xn = e.object({
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
}), eo = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  requestId: e.string()
}), ro = b({
  path: On,
  requestParameterSchema: Xn,
  responseSchema: eo
}), to = e.object({
  orderSn: e.string(),
  packageNumber: e.string().optional(),
  pickup: e.object({
    addressId: e.number(),
    pickupTimeId: e.string()
  })
}), no = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  requestId: e.string()
}), oo = b({
  path: vn,
  requestParameterSchema: to,
  responseSchema: no
}), ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createShippingDocument: Un,
  downloadShippingDocument: Gn,
  getShippingDocumentParameter: Vn,
  getShippingDocumentResult: Wn,
  getShippingParameter: Qn,
  getTrackingNumber: Zn,
  shipOrder: ro,
  updateShipOrder: oo
}, Symbol.toStringTag, { value: "Module" })), so = "/api/v2/order/get_order_list", io = "/api/v2/order/get_order_detail", Te = [
  "UNPAID",
  "READY_TO_SHIP",
  "PROCESSED",
  "SHIPPED",
  "COMPLETED",
  "IN_CANCEL",
  "CANCELLED",
  "INVOICE_PENDING"
], Fo = L(Te), Pe = [
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
], Vo = L(Pe), B = e.object({
  orderSnList: e.array(e.string()),
  responseOptionalFields: e.array(e.enum(Pe)).optional()
}), co = e.object({
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
}), uo = l({
  path: io,
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
  responseSchema: co
}), po = e.object({
  timeRangeField: e.enum(["create_time", "update_time"]),
  timeFrom: e.date(),
  timeTo: e.date(),
  pageSize: e.number().min(1).max(100),
  cursor: e.string().optional(),
  orderStatus: e.enum(Te).optional(),
  responseOptionalFields: e.enum(["order_status"]).optional().default("order_status")
}), go = e.object({
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
}), mo = l({
  path: so,
  requestParameterSchema: po,
  responseSchema: go,
  toCamelCase: !0
}), lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOrderDetail: uo,
  getOrderList: mo
}, Symbol.toStringTag, { value: "Module" })), _o = "/api/v2/product/get_item_base_info", bo = "/api/v2/product/get_item_extra_info", fo = "/api/v2/product/get_item_list", ho = "/api/v2/product/get_model_list", Ee = ["NORMAL", "DELETED", "UNLIST", "BANNED"], So = e.object({
  item_id_list: e.string(),
  need_tax_info: e.coerce.boolean().optional(),
  need_complaint_policy: e.coerce.boolean().optional()
}), Io = e.object({
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
  path: _o,
  requestParameterSchema: So,
  responseSchema: Io,
  transformRequestParameter(r) {
    return r.need_tax_info = !!r.need_tax_info, r.need_complaint_policy = !!r.need_complaint_policy, r;
  }
}), Ro = e.object({
  item_id_list: e.string()
}), To = e.object({
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
}), Po = l({
  path: bo,
  requestParameterSchema: Ro,
  responseSchema: To
}), Z = e.object({
  offset: e.number().int().min(0).optional(),
  pageSize: e.number().int().positive().max(100).optional(),
  updateTimeFrom: e.date().optional(),
  updateTimeTo: e.date().optional(),
  itemStatus: e.array(e.enum(Ee))
}), Eo = e.object({
  error: e.string().optional(),
  message: e.string().nullable().optional(),
  warning: e.string().nullable().optional(),
  requestId: e.string(),
  response: e.object({
    item: e.array(
      e.object({
        itemId: e.number().int(),
        itemStatus: e.enum(Ee),
        updateTime: e.number().int().optional()
      })
    ).optional()
  }).optional(),
  totalCount: e.number().int().optional(),
  hasNextPage: e.boolean().optional(),
  nextOffset: e.number().int().optional()
}), xo = l({
  path: fo,
  requestParameterSchema: Z,
  transformRequestParameterSchema: Z.extend({
    // itemStatus: z.string(),
    updateTimeFrom: e.string(),
    updateTimeTo: e.string()
  }),
  transformRequestParameter(r) {
    return {
      ...r,
      // itemStatus: data.itemStatus.join(","),
      updateTimeFrom: T(
        r.updateTimeFrom ?? /* @__PURE__ */ new Date("01/01/2022")
      ),
      updateTimeTo: T(r.updateTimeTo ?? /* @__PURE__ */ new Date())
    };
  },
  toCamelCase: !0,
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
}), vo = l({
  path: ho,
  requestParameterSchema: Ao,
  responseSchema: Oo
}), jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItemBaseInfo: yo,
  getItemExtraInfo: Po,
  getItemList: xo,
  getModelList: vo
}, Symbol.toStringTag, { value: "Module" })), Lo = "/api/v2/auth/token/get", xe = e.object({
  code: e.string(),
  partner_id: e.number().optional(),
  shop_id: e.number().optional(),
  main_account_id: e.number().optional()
}), Ae = e.object({
  access_token: e.string(),
  error: e.string(),
  expires_in: e.number(),
  message: e.string(),
  refresh_token: e.string(),
  request_id: e.string(),
  shop_id_list: e.array(e.number())
}), Co = b({
  path: Lo,
  requestParameterSchema: xe,
  responseSchema: Ae,
  transformRequestParameter(r) {
    return r.partner_id = r.partner_id ?? _.getInstance().partnerId, r;
  }
}), ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAccessToken: Co,
  getAccessTokenRequestParametersSchema: xe,
  getAccessTokenResponseSchema: Ae
}, Symbol.toStringTag, { value: "Module" })), Y = "/api/v2/shop/auth_partner";
async function Do({
  redirectURL: r,
  redirectSign: t
}) {
  const { baseURL: n, partnerId: o, partnerKey: a } = _.getInstance();
  if (!a || !o)
    throw new Error("partnerKey is undefined");
  const s = new URL(Y, n), p = T(/* @__PURE__ */ new Date()), c = await J(
    a,
    o.toString(),
    Y,
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
  logistic: ao,
  order: lo,
  product: jo,
  publicShopee: ko,
  shop: $o
}, Symbol.toStringTag, { value: "Module" })), qo = e.object({
  partnerId: e.coerce.number().optional(),
  partnerKey: e.coerce.string().optional(),
  baseURL: e.coerce.string().url().optional(),
  accessToken: e.coerce.string().optional(),
  shopId: e.coerce.number().optional()
}), j = qo.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK_SHOP_ID
});
if (!j.success)
  throw new Error(j.error.message);
const R = j.data, m = _.getInstance();
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
  Cn as API_V2_LOGISTIC_CREATE_SHIPPING_DOCUMENT,
  Dn as API_V2_LOGISTIC_DOWNLOAD_SHIPPING_DOCUMENT,
  Ln as API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_PARAMETER,
  kn as API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_RESULT,
  An as API_V2_LOGISTIC_GET_SHIPPING_PARAMETER,
  jn as API_V2_LOGISTIC_GET_TRACKING_NUMBER,
  On as API_V2_LOGISTIC_SHIP_ORDER,
  vn as API_V2_LOGISTIC_UPDATE_SHIP_ORDER,
  io as API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  so as API_V2_ORDER_GET_ORDER_LIST_PATH,
  _o as API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH,
  bo as API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH,
  fo as API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  ho as API_V2_PRODUCT_GET_MODEL_LIST_PATH,
  Lo as API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH,
  Y as API_V2_SHOP_AUTH_PARTNER,
  Ee as ITEM_STATUS,
  zo as ShopeeSdk,
  Re as V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS,
  Ho as V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS_MAP,
  k as V2_LOGISTIC_SHIPPING_DOCUMENT_TYPES,
  wn as V2_LOGISTIC_SHIPPING_STATUSES,
  Pe as V2_ORDER_DETAIL_RESPONSE_OPTIONAL_FIELDS,
  Vo as V2_ORDER_DETAIL_RESPONSE_OPTIONAL_FIELDS_MAP,
  Te as V2_ORDER_STATUS,
  Fo as V2_ORDER_STATUS_MAP,
  L as createConstantsMap,
  J as generateHmac,
  Q as signURL,
  T as toTimestamp,
  E as transformObjectKeys
};
