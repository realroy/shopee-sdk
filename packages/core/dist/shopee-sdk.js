import Le from "axios";
import { z as e } from "zod";
function v(r) {
  return r.reduce((t, n) => (t[n] = n, t), {});
}
async function J(r, ...t) {
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
  ), u = await crypto.subtle.sign(
    { name: "HMAC", hash: { name: "sha-256" } },
    s,
    a
  ), c = new Uint8Array(u);
  return Array.from(c).map((i) => i.toString(16).padStart(2, "0")).join("");
}
async function ve(r, ...t) {
  const { createHmac: n } = await import("crypto"), o = n("sha256", r);
  return t.filter((a) => !!a).forEach((a) => o.update(a)), o.digest("hex");
}
function R(r) {
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
    shop_id: u,
    params: c = {}
  } = r, p = t.toString(), i = u.toString(), g = {};
  for (const d in c) {
    const S = c[d];
    Array.isArray(S) ? g[d] = [
      S[0],
      ...S.slice(1).map((Ae) => `&${d}=${Ae}`)
    ].join("") : S instanceof Date ? g[d] = R(S) : g[d] = `${S}`;
  }
  const _ = R(), h = new URL(o, a), D = await J(
    n,
    p,
    o,
    _,
    s,
    i
  );
  return h.search = new URLSearchParams({
    ...g,
    partner_id: p,
    shop_id: i,
    ...!!s && { access_token: s },
    sign: D,
    timestamp: _
  }).toString(), h.toString().replace(new RegExp("%26", "g"), "&").replace(new RegExp("%3D", "g"), "=");
}
function E(r, t) {
  if (typeof r != "object" || r === null)
    return r;
  if (Array.isArray(r))
    return r.map(
      (a) => E(r[a], t)
    );
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
var Ne = De, we = Ne, $e = {
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
}, Ue = we($e), qe = Ue, Me = typeof P == "object" && P && P.Object === Object && P, Ge = Me, He = Ge, Fe = typeof self == "object" && self && self.Object === Object && self, Ve = He || Fe || Function("return this")(), ze = Ve, We = ze, Ke = We.Symbol, C = Ke;
function Be(r, t) {
  for (var n = -1, o = r == null ? 0 : r.length, a = Array(o); ++n < o; )
    a[n] = t(r[n], n, r);
  return a;
}
var Ze = Be, Ye = Array.isArray, Je = Ye, N = C, X = Object.prototype, Qe = X.hasOwnProperty, Xe = X.toString, y = N ? N.toStringTag : void 0;
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
var ar = or, w = C, sr = rr, ir = ar, cr = "[object Null]", ur = "[object Undefined]", $ = w ? w.toStringTag : void 0;
function pr(r) {
  return r == null ? r === void 0 ? ur : cr : $ && $ in Object(r) ? sr(r) : ir(r);
}
var gr = pr;
function mr(r) {
  return r != null && typeof r == "object";
}
var dr = mr, lr = gr, br = dr, fr = "[object Symbol]";
function _r(r) {
  return typeof r == "symbol" || br(r) && lr(r) == fr;
}
var hr = _r, U = C, Sr = Ze, Ir = Je, yr = hr, Tr = 1 / 0, q = U ? U.prototype : void 0, M = q ? q.toString : void 0;
function ee(r) {
  if (typeof r == "string")
    return r;
  if (Ir(r))
    return Sr(r, ee) + "";
  if (yr(r))
    return M ? M.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -Tr ? "-0" : t;
}
var Rr = ee, Pr = Rr;
function Er(r) {
  return r == null ? "" : Pr(r);
}
var O = Er, Or = qe, xr = O, Ar = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Lr = "\\u0300-\\u036f", jr = "\\ufe20-\\ufe2f", vr = "\\u20d0-\\u20ff", Cr = Lr + jr + vr, kr = "[" + Cr + "]", Dr = RegExp(kr, "g");
function Nr(r) {
  return r = xr(r), r && r.replace(Ar, Or).replace(Dr, "");
}
var wr = Nr, $r = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Ur(r) {
  return r.match($r) || [];
}
var qr = Ur, Mr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Gr(r) {
  return Mr.test(r);
}
var Hr = Gr, re = "\\ud800-\\udfff", Fr = "\\u0300-\\u036f", Vr = "\\ufe20-\\ufe2f", zr = "\\u20d0-\\u20ff", Wr = Fr + Vr + zr, te = "\\u2700-\\u27bf", ne = "a-z\\xdf-\\xf6\\xf8-\\xff", Kr = "\\xac\\xb1\\xd7\\xf7", Br = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Zr = "\\u2000-\\u206f", Yr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", oe = "A-Z\\xc0-\\xd6\\xd8-\\xde", Jr = "\\ufe0e\\ufe0f", ae = Kr + Br + Zr + Yr, se = "['’]", G = "[" + ae + "]", Qr = "[" + Wr + "]", ie = "\\d+", Xr = "[" + te + "]", ce = "[" + ne + "]", ue = "[^" + re + ae + ie + te + ne + oe + "]", et = "\\ud83c[\\udffb-\\udfff]", rt = "(?:" + Qr + "|" + et + ")", tt = "[^" + re + "]", pe = "(?:\\ud83c[\\udde6-\\uddff]){2}", ge = "[\\ud800-\\udbff][\\udc00-\\udfff]", I = "[" + oe + "]", nt = "\\u200d", H = "(?:" + ce + "|" + ue + ")", ot = "(?:" + I + "|" + ue + ")", F = "(?:" + se + "(?:d|ll|m|re|s|t|ve))?", V = "(?:" + se + "(?:D|LL|M|RE|S|T|VE))?", me = rt + "?", de = "[" + Jr + "]?", at = "(?:" + nt + "(?:" + [tt, pe, ge].join("|") + ")" + de + me + ")*", st = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", it = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ct = de + me + at, ut = "(?:" + [Xr, pe, ge].join("|") + ")" + ct, pt = RegExp([
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
var mt = gt, dt = qr, lt = Hr, bt = O, ft = mt;
function _t(r, t, n) {
  return r = bt(r), t = n ? void 0 : t, t === void 0 ? lt(r) ? ft(r) : dt(r) : r.match(t) || [];
}
var ht = _t, St = ke, It = wr, yt = ht, Tt = "['’]", Rt = RegExp(Tt, "g");
function Pt(r) {
  return function(t) {
    return St(yt(It(t).replace(Rt, "")), r, "");
  };
}
var le = Pt, Et = le, Ot = Et(function(r, t, n) {
  return r + (n ? "_" : "") + t.toLowerCase();
}), xt = Ot;
function At(r, t, n) {
  var o = -1, a = r.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var s = Array(a); ++o < a; )
    s[o] = r[o + t];
  return s;
}
var Lt = At, jt = Lt;
function vt(r, t, n) {
  var o = r.length;
  return n = n === void 0 ? o : n, !t && n >= o ? r : jt(r, t, n);
}
var Ct = vt, kt = "\\ud800-\\udfff", Dt = "\\u0300-\\u036f", Nt = "\\ufe20-\\ufe2f", wt = "\\u20d0-\\u20ff", $t = Dt + Nt + wt, Ut = "\\ufe0e\\ufe0f", qt = "\\u200d", Mt = RegExp("[" + qt + kt + $t + Ut + "]");
function Gt(r) {
  return Mt.test(r);
}
var be = Gt;
function Ht(r) {
  return r.split("");
}
var Ft = Ht, fe = "\\ud800-\\udfff", Vt = "\\u0300-\\u036f", zt = "\\ufe20-\\ufe2f", Wt = "\\u20d0-\\u20ff", Kt = Vt + zt + Wt, Bt = "\\ufe0e\\ufe0f", Zt = "[" + fe + "]", A = "[" + Kt + "]", L = "\\ud83c[\\udffb-\\udfff]", Yt = "(?:" + A + "|" + L + ")", _e = "[^" + fe + "]", he = "(?:\\ud83c[\\udde6-\\uddff]){2}", Se = "[\\ud800-\\udbff][\\udc00-\\udfff]", Jt = "\\u200d", Ie = Yt + "?", ye = "[" + Bt + "]?", Qt = "(?:" + Jt + "(?:" + [_e, he, Se].join("|") + ")" + ye + Ie + ")*", Xt = ye + Ie + Qt, en = "(?:" + [_e + A + "?", A, he, Se, Zt].join("|") + ")", rn = RegExp(L + "(?=" + L + ")|" + en + Xt, "g");
function tn(r) {
  return r.match(rn) || [];
}
var nn = tn, on = Ft, an = be, sn = nn;
function cn(r) {
  return an(r) ? sn(r) : on(r);
}
var un = cn, pn = Ct, gn = be, mn = un, dn = O;
function ln(r) {
  return function(t) {
    t = dn(t);
    var n = gn(t) ? mn(t) : void 0, o = n ? n[0] : t.charAt(0), a = n ? pn(n, 1).join("") : t.slice(1);
    return o[r]() + a;
  };
}
var bn = ln, fn = bn, _n = fn("toUpperCase"), hn = _n, Sn = O, In = hn;
function yn(r) {
  return In(Sn(r).toLowerCase());
}
var Tn = yn, Rn = Tn, Pn = le, En = Pn(function(r, t, n) {
  return t = t.toLowerCase(), r + (n ? Rn(t) : t);
}), On = En;
class x {
  constructor() {
    this.logger = console, this.logInterceptorIds = [], this.isLogEnabled = !1, this.axios = Le.create(), this.isLogEnabled && this.addLogInterceptor();
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
          config: { method: u, url: c, data: p, params: i }
        } = o, g = a == null ? void 0 : a.status;
        throw this.logger.error({ status: g, message: s, method: u, url: c, data: p, params: i }), o;
      }
    );
    this.logInterceptorIds = [t, n];
  }
  removeLogInterceptor() {
    this.logInterceptorIds.forEach(this.axios.interceptors.request.eject);
  }
  static getInstance() {
    return this.instance ?? (this.instance = new x());
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
class b {
  constructor() {
    this.isLogEnabled = !1;
  }
  static getInstance() {
    return this.instance ?? (this.instance = new b());
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
const z = x.getInstance();
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
    const s = await t(a.data), u = E(
      s,
      (d) => xt(d.toString())
    ), c = b.getInstance(), p = c.value;
    z.setLogEnabled(c.isLogEnabled);
    const i = await Q({
      ...p,
      path: r.path,
      params: u
    }), g = await z.get(i), _ = E(
      g.data,
      (d) => On(d.toString())
    ), h = await r.responseSchema.safeParseAsync(_);
    if (!h.success)
      throw new Error(`parse response error: ${h.error.message}`);
    return h.data;
  };
}
const W = x.getInstance();
function f(r) {
  return async function(n) {
    const o = r.transformRequestParameter ?? ((_) => _), a = await r.requestParameterSchema.transform(o).safeParseAsync(n);
    if (!a.success)
      throw new Error(
        `parse request parameters error: ${a.error.message}`
      );
    const s = b.getInstance(), u = s.value;
    W.setLogEnabled(s.isLogEnabled);
    const c = await Q({
      ...u,
      path: r.path,
      params: {}
    }), p = a.data, { data: i } = await W.post(c, {}, p);
    if (r.responseSchema === void 0)
      return i;
    const g = await r.responseSchema.safeParseAsync(i);
    if (!g.success)
      throw new Error(`parse response error: ${g.error.message}`);
    return g.data;
  };
}
const xn = "/api/v2/logistic/get_shipping_parameter", An = "/api/v2/logistic/ship_order", Ln = "/api/v2/logistics/update_shipping_order", jn = "/api/v2/logistics/get_tracking_number", vn = "/api/v2/logistic/get_shipping_document_parameter", Cn = "/api/v2/logistic/create_shipping_document", kn = "/api/v2/logistics/get_shipping_document_result", Dn = "/api/v2/logistics/download_shipping_document", Te = [
  "plp_number",
  "first_mile_tracking_number",
  "last_mile_tracking_number"
], Ho = v(Te), k = [
  "NORMAL_AIR_WAYBILL",
  "THERMAL_AIR_WAYBILL",
  "NORMAL_JOB_AIR_WAYBILL",
  "THERMAL_JOB_AIR_WAYBILL"
], Nn = ["READY", "FAILED", "PROCESSING"], wn = e.object({
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
}), Un = f({
  path: Cn,
  requestParameterSchema: wn,
  responseSchema: $n
}), qn = e.object({
  shippingDocumentType: e.enum(k).optional(),
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.string().optional()
    })
  ).max(50)
}), Mn = e.any(), Gn = f({
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
}), Vn = f({
  path: vn,
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
}), Wn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  warning: e.object({
    orderSn: e.string(),
    packageNumber: e.number().optional()
  }).optional(),
  response: e.object({
    orderSn: e.string(),
    packageNumber: e.string(),
    status: e.enum(Nn),
    failError: e.string(),
    failMessage: e.string()
  }).optional(),
  requestId: e.string()
}), Kn = f({
  path: kn,
  requestParameterSchema: zn,
  responseSchema: Wn
}), K = e.object({
  orderSn: e.string(),
  packageNumber: e.number().optional(),
  responseOptionalFields: e.array(e.enum(Te)).optional()
}), Bn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  response: e.object({}).optional(),
  requestId: e.string()
}), Zn = l({
  path: jn,
  requestParameterSchema: K,
  responseSchema: Bn,
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
  path: xn,
  requestParameterSchema: Yn,
  responseSchema: Jn
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
}), ro = f({
  path: An,
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
}), oo = f({
  path: Ln,
  requestParameterSchema: to,
  responseSchema: no
}), ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createShippingDocument: Un,
  downloadShippingDocument: Gn,
  getShippingDocumentParameter: Vn,
  getShippingDocumentResult: Kn,
  getShippingParameter: Qn,
  getTrackingNumber: Zn,
  shipOrder: ro,
  updateShipOrder: oo
}, Symbol.toStringTag, { value: "Module" })), so = "/api/v2/order/get_order_list", io = "/api/v2/order/get_order_detail", Re = [
  "UNPAID",
  "READY_TO_SHIP",
  "PROCESSED",
  "SHIPPED",
  "COMPLETED",
  "IN_CANCEL",
  "CANCELLED",
  "INVOICE_PENDING"
], Fo = v(Re), Pe = [
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
], Vo = v(Pe), B = e.object({
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
  orderStatus: e.enum(Re).optional(),
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
  responseSchema: go
}), lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOrderDetail: uo,
  getOrderList: mo
}, Symbol.toStringTag, { value: "Module" })), bo = "/api/v2/product/get_item_base_info", fo = "/api/v2/product/get_item_extra_info", _o = "/api/v2/product/get_item_list", ho = "/api/v2/product/get_model_list", Ee = ["NORMAL", "DELETED", "UNLIST", "BANNED"], So = e.object({
  itemIdList: e.string(),
  needTaxInfo: e.coerce.boolean().optional(),
  needComplaintPolicy: e.coerce.boolean().optional()
}), Io = e.object({
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
}), yo = l({
  path: bo,
  requestParameterSchema: So,
  responseSchema: Io,
  transformRequestParameter(r) {
    return r.needTaxInfo = !!r.needTaxInfo, r.needComplaintPolicy = !!r.needComplaintPolicy, r;
  }
}), To = e.object({
  itemIdList: e.string()
}), Ro = e.object({
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
}), Po = l({
  path: fo,
  requestParameterSchema: To,
  responseSchema: Ro
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
}), Oo = l({
  path: _o,
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
      updateTimeFrom: R(
        r.updateTimeFrom ?? /* @__PURE__ */ new Date("01/01/2022")
      ),
      updateTimeTo: R(r.updateTimeTo ?? /* @__PURE__ */ new Date())
    };
  },
  responseSchema: Eo
}), xo = e.object({
  item_id: e.string()
}), Ao = e.object({
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
}), Lo = l({
  path: ho,
  requestParameterSchema: xo,
  responseSchema: Ao
}), jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItemBaseInfo: yo,
  getItemExtraInfo: Po,
  getItemList: Oo,
  getModelList: Lo
}, Symbol.toStringTag, { value: "Module" })), vo = "/api/v2/auth/token/get", Oe = e.object({
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
}), Co = f({
  path: vo,
  requestParameterSchema: Oe,
  responseSchema: xe,
  transformRequestParameter(r) {
    return r.partner_id = r.partner_id ?? b.getInstance().partnerId, r;
  }
}), ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAccessToken: Co,
  getAccessTokenRequestParametersSchema: Oe,
  getAccessTokenResponseSchema: xe
}, Symbol.toStringTag, { value: "Module" })), Y = "/api/v2/shop/auth_partner";
async function Do({
  redirectURL: r,
  redirectSign: t
}) {
  const { baseURL: n, partnerId: o, partnerKey: a } = b.getInstance();
  if (!a || !o)
    throw new Error("partnerKey is undefined");
  const s = new URL(Y, n), u = R(/* @__PURE__ */ new Date()), c = await J(
    a,
    o.toString(),
    Y,
    u
  ), p = new URL(r);
  return p.searchParams.append("sign", t), s.search = new URLSearchParams({
    partner_id: o.toString(),
    redirect: p.toString(),
    timestamp: u,
    sign: c
  }).toString(), s.toString();
}
const No = e.object({
  code: e.string(),
  shop_id: e.string(),
  sign: e.string()
});
async function wo(r) {
  const t = await No.safeParseAsync(r);
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
  verifyCallback: wo
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
const T = j.data, m = b.getInstance();
class zo {
  constructor(t) {
    m.accessToken = t.accessToken ?? T.accessToken, m.baseURL = t.baseURL ?? T.baseURL, m.partnerId = t.partnerId ?? T.partnerId, m.partnerKey = t.partnerKey ?? T.partnerKey, m.shopId = t.shopId ?? T.shopId, m.isLogEnabled = t.isLogEnabled ?? !1;
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
  vn as API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_PARAMETER,
  kn as API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_RESULT,
  xn as API_V2_LOGISTIC_GET_SHIPPING_PARAMETER,
  jn as API_V2_LOGISTIC_GET_TRACKING_NUMBER,
  An as API_V2_LOGISTIC_SHIP_ORDER,
  Ln as API_V2_LOGISTIC_UPDATE_SHIP_ORDER,
  io as API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  so as API_V2_ORDER_GET_ORDER_LIST_PATH,
  bo as API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH,
  fo as API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH,
  _o as API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  ho as API_V2_PRODUCT_GET_MODEL_LIST_PATH,
  vo as API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH,
  Y as API_V2_SHOP_AUTH_PARTNER,
  Ee as ITEM_STATUS,
  zo as ShopeeSdk,
  Te as V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS,
  Ho as V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS_MAP,
  k as V2_LOGISTIC_SHIPPING_DOCUMENT_TYPES,
  Nn as V2_LOGISTIC_SHIPPING_STATUSES,
  Pe as V2_ORDER_DETAIL_RESPONSE_OPTIONAL_FIELDS,
  Vo as V2_ORDER_DETAIL_RESPONSE_OPTIONAL_FIELDS_MAP,
  Re as V2_ORDER_STATUS,
  Fo as V2_ORDER_STATUS_MAP,
  v as createConstantsMap,
  J as generateHmac,
  Q as signURL,
  R as toTimestamp,
  E as transformObjectKeys
};
