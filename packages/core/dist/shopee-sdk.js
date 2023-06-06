import xe from "axios";
import { z as e } from "zod";
function L(r) {
  return r.reduce((t, n) => (t[n] = n, t), {});
}
async function B(r, ...t) {
  let n;
  return typeof globalThis.crypto < "u" && (n = await ve(r, ...t)), n = await Ee(r, ...t), n;
}
async function ve(r, ...t) {
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
async function Ee(r, ...t) {
  const { createHmac: n } = await import("crypto"), o = n("sha256", r);
  return t.filter((a) => !!a).forEach((a) => o.update(a)), o.digest("hex");
}
function v(r) {
  const t = r ? r.getTime() : Date.now();
  return Math.round(t / 1e3).toString();
}
async function Z(r) {
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
    const h = i[d];
    Array.isArray(h) ? u[d] = [
      h[0],
      ...h.slice(1).map((Pe) => `&${d}=${Pe}`)
    ].join("") : h instanceof Date ? u[d] = v(h) : u[d] = `${h}`;
  }
  const b = v(), f = new URL(o, a), k = await B(
    n,
    g,
    o,
    b,
    s,
    c
  );
  return f.search = new URLSearchParams({
    ...u,
    partner_id: g,
    shop_id: c,
    ...!!s && { access_token: s },
    sign: k,
    timestamp: b
  }).toString(), f.toString().replace(new RegExp("%26", "g"), "&").replace(new RegExp("%3D", "g"), "=");
}
function E(r, t) {
  if (typeof r != "object" || Array.isArray(r) || r === null)
    return r;
  const n = {};
  for (const [o, a] of Object.entries(r))
    n[t(o)] = E(a, t);
  return n;
}
var R = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function je(r, t, n, o) {
  var a = -1, s = r == null ? 0 : r.length;
  for (o && s && (n = r[++a]); ++a < s; )
    n = t(n, r[a], a, r);
  return n;
}
var Oe = je;
function Ae(r) {
  return function(t) {
    return r == null ? void 0 : r[t];
  };
}
var Le = Ae, Ce = Le, ke = {
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
}, we = Ce(ke), $e = we, Ue = typeof R == "object" && R && R.Object === Object && R, De = Ue, Ne = De, qe = typeof self == "object" && self && self.Object === Object && self, Me = Ne || qe || Function("return this")(), Ge = Me, He = Ge, Fe = He.Symbol, C = Fe;
function ze(r, t) {
  for (var n = -1, o = r == null ? 0 : r.length, a = Array(o); ++n < o; )
    a[n] = t(r[n], n, r);
  return a;
}
var Ve = ze, Ke = Array.isArray, We = Ke, w = C, J = Object.prototype, Be = J.hasOwnProperty, Ze = J.toString, y = w ? w.toStringTag : void 0;
function Je(r) {
  var t = Be.call(r, y), n = r[y];
  try {
    r[y] = void 0;
    var o = !0;
  } catch {
  }
  var a = Ze.call(r);
  return o && (t ? r[y] = n : delete r[y]), a;
}
var Ye = Je, Qe = Object.prototype, Xe = Qe.toString;
function er(r) {
  return Xe.call(r);
}
var rr = er, $ = C, tr = Ye, nr = rr, or = "[object Null]", ar = "[object Undefined]", U = $ ? $.toStringTag : void 0;
function sr(r) {
  return r == null ? r === void 0 ? ar : or : U && U in Object(r) ? tr(r) : nr(r);
}
var ir = sr;
function cr(r) {
  return r != null && typeof r == "object";
}
var ur = cr, pr = ir, gr = ur, mr = "[object Symbol]";
function dr(r) {
  return typeof r == "symbol" || gr(r) && pr(r) == mr;
}
var lr = dr, D = C, _r = Ve, br = We, fr = lr, hr = 1 / 0, N = D ? D.prototype : void 0, q = N ? N.toString : void 0;
function Y(r) {
  if (typeof r == "string")
    return r;
  if (br(r))
    return _r(r, Y) + "";
  if (fr(r))
    return q ? q.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -hr ? "-0" : t;
}
var Sr = Y, yr = Sr;
function Ir(r) {
  return r == null ? "" : yr(r);
}
var T = Ir, Rr = $e, Tr = T, Pr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, xr = "\\u0300-\\u036f", vr = "\\ufe20-\\ufe2f", Er = "\\u20d0-\\u20ff", jr = xr + vr + Er, Or = "[" + jr + "]", Ar = RegExp(Or, "g");
function Lr(r) {
  return r = Tr(r), r && r.replace(Pr, Rr).replace(Ar, "");
}
var Cr = Lr, kr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function wr(r) {
  return r.match(kr) || [];
}
var $r = wr, Ur = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Dr(r) {
  return Ur.test(r);
}
var Nr = Dr, Q = "\\ud800-\\udfff", qr = "\\u0300-\\u036f", Mr = "\\ufe20-\\ufe2f", Gr = "\\u20d0-\\u20ff", Hr = qr + Mr + Gr, X = "\\u2700-\\u27bf", ee = "a-z\\xdf-\\xf6\\xf8-\\xff", Fr = "\\xac\\xb1\\xd7\\xf7", zr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Vr = "\\u2000-\\u206f", Kr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", re = "A-Z\\xc0-\\xd6\\xd8-\\xde", Wr = "\\ufe0e\\ufe0f", te = Fr + zr + Vr + Kr, ne = "['’]", M = "[" + te + "]", Br = "[" + Hr + "]", oe = "\\d+", Zr = "[" + X + "]", ae = "[" + ee + "]", se = "[^" + Q + te + oe + X + ee + re + "]", Jr = "\\ud83c[\\udffb-\\udfff]", Yr = "(?:" + Br + "|" + Jr + ")", Qr = "[^" + Q + "]", ie = "(?:\\ud83c[\\udde6-\\uddff]){2}", ce = "[\\ud800-\\udbff][\\udc00-\\udfff]", S = "[" + re + "]", Xr = "\\u200d", G = "(?:" + ae + "|" + se + ")", et = "(?:" + S + "|" + se + ")", H = "(?:" + ne + "(?:d|ll|m|re|s|t|ve))?", F = "(?:" + ne + "(?:D|LL|M|RE|S|T|VE))?", ue = Yr + "?", pe = "[" + Wr + "]?", rt = "(?:" + Xr + "(?:" + [Qr, ie, ce].join("|") + ")" + pe + ue + ")*", tt = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", nt = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ot = pe + ue + rt, at = "(?:" + [Zr, ie, ce].join("|") + ")" + ot, st = RegExp([
  S + "?" + ae + "+" + H + "(?=" + [M, S, "$"].join("|") + ")",
  et + "+" + F + "(?=" + [M, S + G, "$"].join("|") + ")",
  S + "?" + G + "+" + H,
  S + "+" + F,
  nt,
  tt,
  oe,
  at
].join("|"), "g");
function it(r) {
  return r.match(st) || [];
}
var ct = it, ut = $r, pt = Nr, gt = T, mt = ct;
function dt(r, t, n) {
  return r = gt(r), t = n ? void 0 : t, t === void 0 ? pt(r) ? mt(r) : ut(r) : r.match(t) || [];
}
var lt = dt, _t = Oe, bt = Cr, ft = lt, ht = "['’]", St = RegExp(ht, "g");
function yt(r) {
  return function(t) {
    return _t(ft(bt(t).replace(St, "")), r, "");
  };
}
var ge = yt, It = ge, Rt = It(function(r, t, n) {
  return r + (n ? "_" : "") + t.toLowerCase();
}), Tt = Rt;
function Pt(r, t, n) {
  var o = -1, a = r.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var s = Array(a); ++o < a; )
    s[o] = r[o + t];
  return s;
}
var xt = Pt, vt = xt;
function Et(r, t, n) {
  var o = r.length;
  return n = n === void 0 ? o : n, !t && n >= o ? r : vt(r, t, n);
}
var jt = Et, Ot = "\\ud800-\\udfff", At = "\\u0300-\\u036f", Lt = "\\ufe20-\\ufe2f", Ct = "\\u20d0-\\u20ff", kt = At + Lt + Ct, wt = "\\ufe0e\\ufe0f", $t = "\\u200d", Ut = RegExp("[" + $t + Ot + kt + wt + "]");
function Dt(r) {
  return Ut.test(r);
}
var me = Dt;
function Nt(r) {
  return r.split("");
}
var qt = Nt, de = "\\ud800-\\udfff", Mt = "\\u0300-\\u036f", Gt = "\\ufe20-\\ufe2f", Ht = "\\u20d0-\\u20ff", Ft = Mt + Gt + Ht, zt = "\\ufe0e\\ufe0f", Vt = "[" + de + "]", j = "[" + Ft + "]", O = "\\ud83c[\\udffb-\\udfff]", Kt = "(?:" + j + "|" + O + ")", le = "[^" + de + "]", _e = "(?:\\ud83c[\\udde6-\\uddff]){2}", be = "[\\ud800-\\udbff][\\udc00-\\udfff]", Wt = "\\u200d", fe = Kt + "?", he = "[" + zt + "]?", Bt = "(?:" + Wt + "(?:" + [le, _e, be].join("|") + ")" + he + fe + ")*", Zt = he + fe + Bt, Jt = "(?:" + [le + j + "?", j, _e, be, Vt].join("|") + ")", Yt = RegExp(O + "(?=" + O + ")|" + Jt + Zt, "g");
function Qt(r) {
  return r.match(Yt) || [];
}
var Xt = Qt, en = qt, rn = me, tn = Xt;
function nn(r) {
  return rn(r) ? tn(r) : en(r);
}
var on = nn, an = jt, sn = me, cn = on, un = T;
function pn(r) {
  return function(t) {
    t = un(t);
    var n = sn(t) ? cn(t) : void 0, o = n ? n[0] : t.charAt(0), a = n ? an(n, 1).join("") : t.slice(1);
    return o[r]() + a;
  };
}
var gn = pn, mn = gn, dn = mn("toUpperCase"), ln = dn, _n = T, bn = ln;
function fn(r) {
  return bn(_n(r).toLowerCase());
}
var hn = fn, Sn = hn, yn = ge, In = yn(function(r, t, n) {
  return t = t.toLowerCase(), r + (n ? Sn(t) : t);
}), Rn = In;
class P {
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
    return this.instance ?? (this.instance = new P());
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
const z = P.getInstance();
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
      (d) => Tt(d.toString())
    ) : s, i = _.getInstance(), g = i.value;
    z.setLogEnabled(i.isLogEnabled);
    const c = await Z({
      ...g,
      path: r.path,
      params: p
    }), u = await z.get(c), b = r.toCamelCase ? E(u.data, (d) => Rn(d.toString())) : u.data, f = await r.responseSchema.safeParseAsync(b);
    if (!f.success)
      throw new Error(`parse response error: ${f.error.message}`);
    return f.data;
  };
}
const V = P.getInstance();
function x(r) {
  return async function(n) {
    const o = r.transformRequestParameter ?? ((b) => b), a = await r.requestParameterSchema.transform(o).safeParseAsync(n);
    if (!a.success)
      throw new Error(
        `parse request parameters error: ${a.error.message}`
      );
    const s = _.getInstance(), p = s.value;
    V.setLogEnabled(s.isLogEnabled);
    const i = await Z({
      ...p,
      path: r.path,
      params: {}
    }), g = a.data, { data: c } = await V.post(i, {}, g), u = await r.responseSchema.safeParseAsync(c);
    if (!u.success)
      throw new Error(`parse response error: ${u.error.message}`);
    return u.data;
  };
}
const Tn = "/api/v2/logistic/get_shipping_parameter", Pn = "/api/v2/logistic/ship_order", xn = "/api/v2/logistics/update_shipping_order", vn = "/api/v2/logistics/get_tracking_number", En = "/api/v2/logistic/get_shipping_document_parameter", Se = [
  "plp_number",
  "first_mile_tracking_number",
  "last_mile_tracking_number"
], jo = L(Se), jn = e.object({
  orderList: e.array(
    e.object({
      orderSn: e.string(),
      packageNumber: e.number().optional()
    })
  ).max(50)
}), On = e.object({
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
}), An = x({
  path: En,
  requestParameterSchema: jn,
  responseSchema: On
}), K = e.object({
  orderSn: e.string(),
  packageNumber: e.number().optional(),
  responseOptionalFields: e.array(e.enum(Se)).optional()
}), Ln = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  response: e.object({}).optional(),
  requestId: e.string()
}), Cn = l({
  path: vn,
  requestParameterSchema: K,
  responseSchema: Ln,
  transformRequestParameterSchema: K.extend({
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
}), kn = e.object({
  orderSn: e.string(),
  packageNumber: e.number().optional()
}), wn = e.object({
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
}), $n = l({
  path: Tn,
  requestParameterSchema: kn,
  responseSchema: wn,
  toCamelCase: !0
}), Un = e.object({
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
}), Dn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  requestId: e.string()
}), Nn = x({
  path: Pn,
  requestParameterSchema: Un,
  responseSchema: Dn
}), qn = e.object({
  orderSn: e.string(),
  packageNumber: e.string().optional(),
  pickup: e.object({
    addressId: e.number(),
    pickupTimeId: e.string()
  })
}), Mn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  requestId: e.string()
}), Gn = x({
  path: xn,
  requestParameterSchema: qn,
  responseSchema: Mn
}), Hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getShippingDocumentParameter: An,
  getShippingParameter: $n,
  getTrackingNumber: Cn,
  shipOrder: Nn,
  updateShipOrder: Gn
}, Symbol.toStringTag, { value: "Module" })), Fn = "/api/v2/order/get_order_list", zn = "/api/v2/order/get_order_detail", ye = [
  "UNPAID",
  "READY_TO_SHIP",
  "PROCESSED",
  "SHIPPED",
  "COMPLETED",
  "IN_CANCEL",
  "CANCELLED",
  "INVOICE_PENDING"
], Oo = L(ye), Vn = [
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
], Ao = L(Vn), Kn = e.object({
  orderSnList: e.array(e.string()),
  responseOptionalFields: e.string().optional()
}), Wn = e.object({
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
}), Bn = l({
  path: zn,
  requestParameterSchema: Kn,
  responseSchema: Wn
}), Zn = e.object({
  timeRangeField: e.enum(["create_time", "update_time"]),
  timeFrom: e.date(),
  timeTo: e.date(),
  pageSize: e.number().min(1).max(100),
  cursor: e.string().optional(),
  orderStatus: e.enum(ye).optional(),
  responseOptionalFields: e.enum(["order_status"]).optional().default("order_status")
}), Jn = e.object({
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
}), Yn = l({
  path: Fn,
  requestParameterSchema: Zn,
  responseSchema: Jn,
  toCamelCase: !0
}), Qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOrderDetail: Bn,
  getOrderList: Yn
}, Symbol.toStringTag, { value: "Module" })), Xn = "/api/v2/product/get_item_base_info", eo = "/api/v2/product/get_item_extra_info", ro = "/api/v2/product/get_item_list", to = "/api/v2/product/get_model_list", Ie = ["NORMAL", "DELETED", "UNLIST", "BANNED"], no = e.object({
  item_id_list: e.string(),
  need_tax_info: e.coerce.boolean().optional(),
  need_complaint_policy: e.coerce.boolean().optional()
}), oo = e.object({
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
}), ao = l({
  path: Xn,
  requestParameterSchema: no,
  responseSchema: oo,
  transformRequestParameter(r) {
    return r.need_tax_info = !!r.need_tax_info, r.need_complaint_policy = !!r.need_complaint_policy, r;
  }
}), so = e.object({
  item_id_list: e.string()
}), io = e.object({
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
}), co = l({
  path: eo,
  requestParameterSchema: so,
  responseSchema: io
}), uo = e.object({
  offset: e.number().int().min(0).optional(),
  page_size: e.number().int().positive().max(100).optional(),
  update_time_from: e.date().optional(),
  update_time_to: e.date().optional(),
  item_status: e.array(e.enum(Ie))
}), po = e.object({
  error: e.string(),
  message: e.string().nullable().optional(),
  warning: e.string().nullable().optional(),
  request_id: e.string(),
  response: e.object({
    item: e.array(
      e.object({
        item_id: e.number().int(),
        item_status: e.enum(Ie),
        update_time: e.number().int()
      })
    ).optional()
  }).optional(),
  total_count: e.number().int().optional(),
  has_next_page: e.boolean().optional(),
  next_offset: e.number().int().optional()
}), go = l({
  path: ro,
  requestParameterSchema: uo,
  transformRequestParameter(r) {
    return r.update_time_from = r.update_time_from ?? /* @__PURE__ */ new Date("01/01/2022"), r.update_time_to = r.update_time_to ?? /* @__PURE__ */ new Date(), r;
  },
  responseSchema: po
}), mo = e.object({
  item_id: e.string()
}), lo = e.object({
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
}), _o = l({
  path: to,
  requestParameterSchema: mo,
  responseSchema: lo
}), bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItemBaseInfo: ao,
  getItemExtraInfo: co,
  getItemList: go,
  getModelList: _o
}, Symbol.toStringTag, { value: "Module" })), fo = "/api/v2/auth/token/get", Re = e.object({
  code: e.string(),
  partner_id: e.number().optional(),
  shop_id: e.number().optional(),
  main_account_id: e.number().optional()
}), Te = e.object({
  access_token: e.string(),
  error: e.string(),
  expires_in: e.number(),
  message: e.string(),
  refresh_token: e.string(),
  request_id: e.string(),
  shop_id_list: e.array(e.number())
}), ho = x({
  path: fo,
  requestParameterSchema: Re,
  responseSchema: Te,
  transformRequestParameter(r) {
    return r.partner_id = r.partner_id ?? _.getInstance().partnerId, r;
  }
}), So = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAccessToken: ho,
  getAccessTokenRequestParametersSchema: Re,
  getAccessTokenResponseSchema: Te
}, Symbol.toStringTag, { value: "Module" })), W = "/api/v2/shop/auth_partner";
async function yo({
  redirectURL: r,
  redirectSign: t
}) {
  const { baseURL: n, partnerId: o, partnerKey: a } = _.getInstance();
  if (!a || !o)
    throw new Error("partnerKey is undefined");
  const s = new URL(W, n), p = v(/* @__PURE__ */ new Date()), i = await B(
    a,
    o.toString(),
    W,
    p
  ), g = new URL(r);
  return g.searchParams.append("sign", t), s.search = new URLSearchParams({
    partner_id: o.toString(),
    redirect: g.toString(),
    timestamp: p,
    sign: i
  }).toString(), s.toString();
}
const Io = e.object({
  code: e.string(),
  shop_id: e.string(),
  sign: e.string()
});
async function Ro(r) {
  const t = await Io.safeParseAsync(r);
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
const To = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  authPartner: yo,
  verifyCallback: Ro
}, Symbol.toStringTag, { value: "Module" })), Po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  logistic: Hn,
  order: Qn,
  product: bo,
  publicShopee: So,
  shop: To
}, Symbol.toStringTag, { value: "Module" })), xo = e.object({
  partnerId: e.coerce.number().optional(),
  partnerKey: e.coerce.string().optional(),
  baseURL: e.coerce.string().url().optional(),
  accessToken: e.coerce.string().optional(),
  shopId: e.coerce.number().optional()
}), A = xo.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK_SHOP_ID
});
if (!A.success)
  throw new Error(A.error.message);
const I = A.data, m = _.getInstance();
class Lo {
  constructor(t) {
    m.accessToken = t.accessToken ?? I.accessToken, m.baseURL = t.baseURL ?? I.baseURL, m.partnerId = t.partnerId ?? I.partnerId, m.partnerKey = t.partnerKey ?? I.partnerKey, m.shopId = t.shopId ?? I.shopId, m.isLogEnabled = t.isLogEnabled ?? !1;
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
    return Po;
  }
}
export {
  En as API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_PARAMETER,
  Tn as API_V2_LOGISTIC_GET_SHIPPING_PARAMETER,
  vn as API_V2_LOGISTIC_GET_TRACKING_NUMBER,
  Pn as API_V2_LOGISTIC_SHIP_ORDER,
  xn as API_V2_LOGISTIC_UPDATE_SHIP_ORDER,
  zn as API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  Fn as API_V2_ORDER_GET_ORDER_LIST_PATH,
  Xn as API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH,
  eo as API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH,
  ro as API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  to as API_V2_PRODUCT_GET_MODEL_LIST_PATH,
  fo as API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH,
  W as API_V2_SHOP_AUTH_PARTNER,
  Ie as ITEM_STATUS,
  Lo as ShopeeSdk,
  Se as V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS,
  jo as V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS_MAP,
  Vn as V2_ORDER_RESPONSE_OPTIONAL_FIELDS,
  Ao as V2_ORDER_RESPONSE_OPTIONAL_FIELDS_MAP,
  ye as V2_ORDER_STATUS,
  Oo as V2_ORDER_STATUS_MAP,
  L as createConstantsMap,
  B as generateHmac,
  Z as signURL,
  v as toTimestamp,
  E as transformObjectKeys
};
