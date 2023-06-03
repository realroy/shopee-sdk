import xe from "axios";
import { z as e } from "zod";
function L(r) {
  return r.reduce((t, n) => (t[n] = n, t), {});
}
async function B(r, ...t) {
  let n;
  return typeof globalThis.crypto < "u" && (n = await ve(r, ...t)), n = await Pe(r, ...t), n;
}
async function ve(r, ...t) {
  const n = new TextEncoder(), a = n.encode(r);
  let o = new Uint8Array();
  t.forEach((c) => {
    c && (o = n.encode(c));
  });
  const i = await crypto.subtle.importKey(
    "raw",
    a,
    { name: "HMAC", hash: "SHA-256" },
    !1,
    ["sign"]
  ), u = await crypto.subtle.sign(
    { name: "HMAC", hash: { name: "sha-256" } },
    i,
    o
  ), p = new Uint8Array(u);
  return Array.from(p).map((c) => c.toString(16).padStart(2, "0")).join("");
}
async function Pe(r, ...t) {
  const { createHmac: n } = await import("crypto"), a = n("sha256", r);
  return t.filter((o) => !!o).forEach((o) => a.update(o)), a.digest("hex");
}
function E(r) {
  const t = r ? r.getTime() : Date.now();
  return Math.round(t / 1e3).toString();
}
async function Z(r) {
  const {
    partner_id: t,
    partner_key: n,
    path: a,
    base_url: o,
    access_token: i,
    shop_id: u,
    params: p = {}
  } = r, m = t.toString(), c = u.toString(), g = {};
  for (const y in p) {
    const h = p[y];
    Array.isArray(h) ? g[y] = [
      h[0],
      ...h.slice(1).map((Te) => `&${y}=${Te}`)
    ].join("") : h instanceof Date ? g[y] = E(h) : g[y] = `${h}`;
  }
  const d = E(), P = new URL(a, o), b = await B(
    n,
    m,
    a,
    d,
    i,
    c
  );
  return P.search = new URLSearchParams({
    ...g,
    partner_id: m,
    shop_id: c,
    ...!!i && { access_token: i },
    sign: b,
    timestamp: d
  }).toString(), P.toString().replace(new RegExp("%26", "g"), "&").replace(new RegExp("%3D", "g"), "=");
}
function j(r, t) {
  if (typeof r != "object" || Array.isArray(r) || r === null)
    return r;
  const n = {};
  for (const [a, o] of Object.entries(r))
    n[t(a)] = j(o, t);
  return n;
}
var T = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ee(r, t, n, a) {
  var o = -1, i = r == null ? 0 : r.length;
  for (a && i && (n = r[++o]); ++o < i; )
    n = t(n, r[o], o, r);
  return n;
}
var je = Ee;
function Oe(r) {
  return function(t) {
    return r == null ? void 0 : r[t];
  };
}
var Ae = Oe, $e = Ae, Le = {
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
}, ke = $e(Le), Ce = ke, we = typeof T == "object" && T && T.Object === Object && T, Ue = we, De = Ue, Ne = typeof self == "object" && self && self.Object === Object && self, qe = De || Ne || Function("return this")(), Me = qe, Ge = Me, He = Ge.Symbol, k = He;
function ze(r, t) {
  for (var n = -1, a = r == null ? 0 : r.length, o = Array(a); ++n < a; )
    o[n] = t(r[n], n, r);
  return o;
}
var Fe = ze, Ve = Array.isArray, Ke = Ve, w = k, J = Object.prototype, We = J.hasOwnProperty, Be = J.toString, I = w ? w.toStringTag : void 0;
function Ze(r) {
  var t = We.call(r, I), n = r[I];
  try {
    r[I] = void 0;
    var a = !0;
  } catch {
  }
  var o = Be.call(r);
  return a && (t ? r[I] = n : delete r[I]), o;
}
var Je = Ze, Ye = Object.prototype, Qe = Ye.toString;
function Xe(r) {
  return Qe.call(r);
}
var er = Xe, U = k, rr = Je, tr = er, nr = "[object Null]", ar = "[object Undefined]", D = U ? U.toStringTag : void 0;
function or(r) {
  return r == null ? r === void 0 ? ar : nr : D && D in Object(r) ? rr(r) : tr(r);
}
var sr = or;
function ir(r) {
  return r != null && typeof r == "object";
}
var cr = ir, ur = sr, pr = cr, mr = "[object Symbol]";
function gr(r) {
  return typeof r == "symbol" || pr(r) && ur(r) == mr;
}
var lr = gr, N = k, dr = Fe, _r = Ke, br = lr, fr = 1 / 0, q = N ? N.prototype : void 0, M = q ? q.toString : void 0;
function Y(r) {
  if (typeof r == "string")
    return r;
  if (_r(r))
    return dr(r, Y) + "";
  if (br(r))
    return M ? M.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -fr ? "-0" : t;
}
var hr = Y, Sr = hr;
function yr(r) {
  return r == null ? "" : Sr(r);
}
var x = yr, Ir = Ce, Rr = x, Tr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, xr = "\\u0300-\\u036f", vr = "\\ufe20-\\ufe2f", Pr = "\\u20d0-\\u20ff", Er = xr + vr + Pr, jr = "[" + Er + "]", Or = RegExp(jr, "g");
function Ar(r) {
  return r = Rr(r), r && r.replace(Tr, Ir).replace(Or, "");
}
var $r = Ar, Lr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function kr(r) {
  return r.match(Lr) || [];
}
var Cr = kr, wr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Ur(r) {
  return wr.test(r);
}
var Dr = Ur, Q = "\\ud800-\\udfff", Nr = "\\u0300-\\u036f", qr = "\\ufe20-\\ufe2f", Mr = "\\u20d0-\\u20ff", Gr = Nr + qr + Mr, X = "\\u2700-\\u27bf", ee = "a-z\\xdf-\\xf6\\xf8-\\xff", Hr = "\\xac\\xb1\\xd7\\xf7", zr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Fr = "\\u2000-\\u206f", Vr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", re = "A-Z\\xc0-\\xd6\\xd8-\\xde", Kr = "\\ufe0e\\ufe0f", te = Hr + zr + Fr + Vr, ne = "['’]", G = "[" + te + "]", Wr = "[" + Gr + "]", ae = "\\d+", Br = "[" + X + "]", oe = "[" + ee + "]", se = "[^" + Q + te + ae + X + ee + re + "]", Zr = "\\ud83c[\\udffb-\\udfff]", Jr = "(?:" + Wr + "|" + Zr + ")", Yr = "[^" + Q + "]", ie = "(?:\\ud83c[\\udde6-\\uddff]){2}", ce = "[\\ud800-\\udbff][\\udc00-\\udfff]", S = "[" + re + "]", Qr = "\\u200d", H = "(?:" + oe + "|" + se + ")", Xr = "(?:" + S + "|" + se + ")", z = "(?:" + ne + "(?:d|ll|m|re|s|t|ve))?", F = "(?:" + ne + "(?:D|LL|M|RE|S|T|VE))?", ue = Jr + "?", pe = "[" + Kr + "]?", et = "(?:" + Qr + "(?:" + [Yr, ie, ce].join("|") + ")" + pe + ue + ")*", rt = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", tt = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", nt = pe + ue + et, at = "(?:" + [Br, ie, ce].join("|") + ")" + nt, ot = RegExp([
  S + "?" + oe + "+" + z + "(?=" + [G, S, "$"].join("|") + ")",
  Xr + "+" + F + "(?=" + [G, S + H, "$"].join("|") + ")",
  S + "?" + H + "+" + z,
  S + "+" + F,
  tt,
  rt,
  ae,
  at
].join("|"), "g");
function st(r) {
  return r.match(ot) || [];
}
var it = st, ct = Cr, ut = Dr, pt = x, mt = it;
function gt(r, t, n) {
  return r = pt(r), t = n ? void 0 : t, t === void 0 ? ut(r) ? mt(r) : ct(r) : r.match(t) || [];
}
var lt = gt, dt = je, _t = $r, bt = lt, ft = "['’]", ht = RegExp(ft, "g");
function St(r) {
  return function(t) {
    return dt(bt(_t(t).replace(ht, "")), r, "");
  };
}
var me = St, yt = me, It = yt(function(r, t, n) {
  return r + (n ? "_" : "") + t.toLowerCase();
}), Rt = It;
function Tt(r, t, n) {
  var a = -1, o = r.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var i = Array(o); ++a < o; )
    i[a] = r[a + t];
  return i;
}
var xt = Tt, vt = xt;
function Pt(r, t, n) {
  var a = r.length;
  return n = n === void 0 ? a : n, !t && n >= a ? r : vt(r, t, n);
}
var Et = Pt, jt = "\\ud800-\\udfff", Ot = "\\u0300-\\u036f", At = "\\ufe20-\\ufe2f", $t = "\\u20d0-\\u20ff", Lt = Ot + At + $t, kt = "\\ufe0e\\ufe0f", Ct = "\\u200d", wt = RegExp("[" + Ct + jt + Lt + kt + "]");
function Ut(r) {
  return wt.test(r);
}
var ge = Ut;
function Dt(r) {
  return r.split("");
}
var Nt = Dt, le = "\\ud800-\\udfff", qt = "\\u0300-\\u036f", Mt = "\\ufe20-\\ufe2f", Gt = "\\u20d0-\\u20ff", Ht = qt + Mt + Gt, zt = "\\ufe0e\\ufe0f", Ft = "[" + le + "]", O = "[" + Ht + "]", A = "\\ud83c[\\udffb-\\udfff]", Vt = "(?:" + O + "|" + A + ")", de = "[^" + le + "]", _e = "(?:\\ud83c[\\udde6-\\uddff]){2}", be = "[\\ud800-\\udbff][\\udc00-\\udfff]", Kt = "\\u200d", fe = Vt + "?", he = "[" + zt + "]?", Wt = "(?:" + Kt + "(?:" + [de, _e, be].join("|") + ")" + he + fe + ")*", Bt = he + fe + Wt, Zt = "(?:" + [de + O + "?", O, _e, be, Ft].join("|") + ")", Jt = RegExp(A + "(?=" + A + ")|" + Zt + Bt, "g");
function Yt(r) {
  return r.match(Jt) || [];
}
var Qt = Yt, Xt = Nt, en = ge, rn = Qt;
function tn(r) {
  return en(r) ? rn(r) : Xt(r);
}
var nn = tn, an = Et, on = ge, sn = nn, cn = x;
function un(r) {
  return function(t) {
    t = cn(t);
    var n = on(t) ? sn(t) : void 0, a = n ? n[0] : t.charAt(0), o = n ? an(n, 1).join("") : t.slice(1);
    return a[r]() + o;
  };
}
var pn = un, mn = pn, gn = mn("toUpperCase"), ln = gn, dn = x, _n = ln;
function bn(r) {
  return _n(dn(r).toLowerCase());
}
var fn = bn, hn = fn, Sn = me, yn = Sn(function(r, t, n) {
  return t = t.toLowerCase(), r + (n ? hn(t) : t);
}), In = yn;
class v {
  constructor() {
    this.logger = console, this.logInterceptorIds = [], this.isLogEnabled = !1, this.axios = xe.create(), this.isLogEnabled && this.addLogInterceptor();
  }
  addLogInterceptor() {
    const t = this.axios.interceptors.request.use(
      (a) => (this.logger.log(`${a.url}`), a.data && this.logger.info(`[Body]: ${JSON.stringify(a.data, null, 4)}`), a),
      (a) => {
        throw this.logger.error(a), a;
      }
    ), n = this.axios.interceptors.response.use(
      (a) => (this.logger.log(`[Response]: ${JSON.stringify(a.data, null, 4)}`), a),
      (a) => {
        const {
          response: o,
          message: i,
          config: { method: u, url: p, data: m, params: c }
        } = a, g = o == null ? void 0 : o.status;
        throw this.logger.error({ status: g, message: i, method: u, url: p, data: m, params: c }), a;
      }
    );
    this.logInterceptorIds = [t, n];
  }
  removeLogInterceptor() {
    this.logInterceptorIds.forEach(this.axios.interceptors.request.eject);
  }
  static getInstance() {
    return this.instance ?? (this.instance = new v());
  }
  setLogEnabled(t) {
    return this.isLogEnabled = t, this.isLogEnabled ? this.addLogInterceptor() : this.removeLogInterceptor(), this.isLogEnabled;
  }
  get(t, n) {
    return this.axios.get(t, { params: n });
  }
  post(t, n, a) {
    return this.axios.post(t, a, { params: n });
  }
}
class f {
  constructor() {
    this.isLogEnabled = !1;
  }
  static getInstance() {
    return this.instance ?? (this.instance = new f());
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
const V = v.getInstance();
function _(r) {
  return async function(n) {
    const a = r.transformRequestParameter ?? ((b) => b), o = await r.requestParameterSchema.transform(a).safeParseAsync(n);
    if (!o.success)
      throw new Error(
        `parse request parameters error: ${o.error.message}`
      );
    const i = r.toCamelCase ? j(o.data, (b) => Rt(b.toString())) : o.data, u = f.getInstance(), p = u.value;
    V.setLogEnabled(u.isLogEnabled);
    const m = await Z({
      ...p,
      path: r.path,
      params: i
    }), c = await V.get(m), g = r.toCamelCase ? j(c.data, (b) => In(b.toString())) : c.data, d = await r.responseSchema.safeParseAsync(g);
    if (!d.success)
      throw new Error(`parse response error: ${d.error.message}`);
    return d.data;
  };
}
const K = v.getInstance();
function C(r) {
  return async function(n) {
    const a = r.transformRequestParameter ?? ((d) => d), o = await r.requestParameterSchema.transform(a).safeParseAsync(n);
    if (!o.success)
      throw new Error(
        `parse request parameters error: ${o.error.message}`
      );
    const i = f.getInstance(), u = i.value;
    K.setLogEnabled(i.isLogEnabled);
    const p = await Z({
      ...u,
      path: r.path,
      params: {}
    }), m = o.data, { data: c } = await K.post(p, {}, m), g = await r.responseSchema.safeParseAsync(c);
    if (!g.success)
      throw new Error(`parse response error: ${g.error.message}`);
    return g.data;
  };
}
const Rn = "/api/v2/logistic/get_shipping_parameter", Tn = "/api/v2/logistic/ship_order", xn = "/api/v2/logistics/update_shipping_order", vn = "/api/v2/logistics/get_tracking_number", Pn = [
  "plp_number",
  "first_mile_tracking_number",
  "last_mile_tracking_number"
], En = L(Pn), jn = e.object({
  orderSn: e.string(),
  packageNumber: e.number().optional()
}), On = e.object({
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
}), An = _({
  path: Rn,
  requestParameterSchema: jn,
  responseSchema: On,
  toCamelCase: !0
}), $n = e.object({
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
}), Ln = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  requestId: e.string()
}), kn = C({
  path: Tn,
  requestParameterSchema: $n,
  responseSchema: Ln
}), Cn = e.object({
  orderSn: e.string(),
  packageNumber: e.string().optional(),
  pickup: e.object({
    addressId: e.number(),
    pickupTimeId: e.string()
  })
}), wn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  requestId: e.string()
}), Un = C({
  path: xn,
  requestParameterSchema: Cn,
  responseSchema: wn
}), s = En, Dn = e.object({
  orderSn: e.string(),
  packageNumber: e.number().optional(),
  responseOptionalFields: e.enum([
    s.first_mile_tracking_number,
    s.last_mile_tracking_number,
    s.plp_number,
    `${s.first_mile_tracking_number},${s.last_mile_tracking_number}`,
    `${s.first_mile_tracking_number},${s.plp_number}`,
    `${s.last_mile_tracking_number},${s.first_mile_tracking_number}`,
    `${s.last_mile_tracking_number},${s.plp_number}`,
    `${s.plp_number},${s.first_mile_tracking_number}`,
    `${s.plp_number},${s.last_mile_tracking_number}`,
    `${s.first_mile_tracking_number},${s.last_mile_tracking_number},${s.plp_number}`,
    `${s.first_mile_tracking_number},${s.plp_number},${s.last_mile_tracking_number}`,
    `${s.last_mile_tracking_number},${s.first_mile_tracking_number},${s.plp_number}`,
    `${s.last_mile_tracking_number},${s.plp_number},${s.first_mile_tracking_number}`,
    `${s.plp_number},${s.first_mile_tracking_number},${s.last_mile_tracking_number}`,
    `${s.plp_number},${s.last_mile_tracking_number},${s.first_mile_tracking_number}`
  ]).optional()
}), Nn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  response: e.object({}).optional(),
  requestId: e.string()
}), qn = _({
  path: vn,
  requestParameterSchema: Dn,
  responseSchema: Nn,
  toCamelCase: !0
}), Mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getShippingParameter: An,
  getTrackingNumber: qn,
  shipOrder: kn,
  updateShipOrder: Un
}, Symbol.toStringTag, { value: "Module" })), Gn = "/api/v2/order/get_order_list", Hn = "/api/v2/order/get_order_detail", Se = [
  "UNPAID",
  "READY_TO_SHIP",
  "PROCESSED",
  "SHIPPED",
  "COMPLETED",
  "IN_CANCEL",
  "CANCELLED",
  "INVOICE_PENDING"
], va = L(Se), zn = [
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
], Pa = L(zn), Fn = e.object({
  orderSnList: e.array(e.string()),
  responseOptionalFields: e.string().optional()
}), Vn = e.object({
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
}), Kn = _({
  path: Hn,
  requestParameterSchema: Fn,
  responseSchema: Vn
}), Wn = e.object({
  timeRangeField: e.enum(["create_time", "update_time"]),
  timeFrom: e.date(),
  timeTo: e.date(),
  pageSize: e.number().min(1).max(100),
  cursor: e.string().optional(),
  orderStatus: e.enum(Se).optional(),
  responseOptionalFields: e.enum(["order_status"]).optional().default("order_status")
}), Bn = e.object({
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
}), Zn = _({
  path: Gn,
  requestParameterSchema: Wn,
  responseSchema: Bn,
  toCamelCase: !0
}), Jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOrderDetail: Kn,
  getOrderList: Zn
}, Symbol.toStringTag, { value: "Module" })), Yn = "/api/v2/product/get_item_base_info", Qn = "/api/v2/product/get_item_extra_info", Xn = "/api/v2/product/get_item_list", ea = "/api/v2/product/get_model_list", ye = ["NORMAL", "DELETED", "UNLIST", "BANNED"], ra = e.object({
  item_id_list: e.string(),
  need_tax_info: e.coerce.boolean().optional(),
  need_complaint_policy: e.coerce.boolean().optional()
}), ta = e.object({
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
}), na = _({
  path: Yn,
  requestParameterSchema: ra,
  responseSchema: ta,
  transformRequestParameter(r) {
    return r.need_tax_info = !!r.need_tax_info, r.need_complaint_policy = !!r.need_complaint_policy, r;
  }
}), aa = e.object({
  item_id_list: e.string()
}), oa = e.object({
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
}), sa = _({
  path: Qn,
  requestParameterSchema: aa,
  responseSchema: oa
}), ia = e.object({
  offset: e.number().int().min(0).optional(),
  page_size: e.number().int().positive().max(100).optional(),
  update_time_from: e.date().optional(),
  update_time_to: e.date().optional(),
  item_status: e.array(e.enum(ye))
}), ca = e.object({
  error: e.string(),
  message: e.string().nullable().optional(),
  warning: e.string().nullable().optional(),
  request_id: e.string(),
  response: e.object({
    item: e.array(
      e.object({
        item_id: e.number().int(),
        item_status: e.enum(ye),
        update_time: e.number().int()
      })
    ).optional()
  }).optional(),
  total_count: e.number().int().optional(),
  has_next_page: e.boolean().optional(),
  next_offset: e.number().int().optional()
}), ua = _({
  path: Xn,
  requestParameterSchema: ia,
  transformRequestParameter(r) {
    return r.update_time_from = r.update_time_from ?? /* @__PURE__ */ new Date("01/01/2022"), r.update_time_to = r.update_time_to ?? /* @__PURE__ */ new Date(), r;
  },
  responseSchema: ca
}), pa = e.object({
  item_id: e.string()
}), ma = e.object({
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
}), ga = _({
  path: ea,
  requestParameterSchema: pa,
  responseSchema: ma
}), la = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItemBaseInfo: na,
  getItemExtraInfo: sa,
  getItemList: ua,
  getModelList: ga
}, Symbol.toStringTag, { value: "Module" })), da = "/api/v2/auth/token/get", Ie = e.object({
  code: e.string(),
  partner_id: e.number().optional(),
  shop_id: e.number().optional(),
  main_account_id: e.number().optional()
}), Re = e.object({
  access_token: e.string(),
  error: e.string(),
  expires_in: e.number(),
  message: e.string(),
  refresh_token: e.string(),
  request_id: e.string(),
  shop_id_list: e.array(e.number())
}), _a = C({
  path: da,
  requestParameterSchema: Ie,
  responseSchema: Re,
  transformRequestParameter(r) {
    return r.partner_id = r.partner_id ?? f.getInstance().partnerId, r;
  }
}), ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAccessToken: _a,
  getAccessTokenRequestParametersSchema: Ie,
  getAccessTokenResponseSchema: Re
}, Symbol.toStringTag, { value: "Module" })), W = "/api/v2/shop/auth_partner";
async function fa({
  redirectURL: r,
  redirectSign: t
}) {
  const { baseURL: n, partnerId: a, partnerKey: o } = f.getInstance();
  if (!o || !a)
    throw new Error("partnerKey is undefined");
  const i = new URL(W, n), u = E(/* @__PURE__ */ new Date()), p = await B(
    o,
    a.toString(),
    W,
    u
  ), m = new URL(r);
  return m.searchParams.append("sign", t), i.search = new URLSearchParams({
    partner_id: a.toString(),
    redirect: m.toString(),
    timestamp: u,
    sign: p
  }).toString(), i.toString();
}
const ha = e.object({
  code: e.string(),
  shop_id: e.string(),
  sign: e.string()
});
async function Sa(r) {
  const t = await ha.safeParseAsync(r);
  if (!t.success)
    throw new Error(
      `parse request parameters error: ${t.error.message}`
    );
  const { code: n, shop_id: a, sign: o } = t.data;
  return {
    code: n,
    shopId: a,
    sign: o
  };
}
const ya = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  authPartner: fa,
  verifyCallback: Sa
}, Symbol.toStringTag, { value: "Module" })), Ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  logistic: Mn,
  order: Jn,
  product: la,
  publicShopee: ba,
  shop: ya
}, Symbol.toStringTag, { value: "Module" })), Ra = e.object({
  partnerId: e.coerce.number().optional(),
  partnerKey: e.coerce.string().optional(),
  baseURL: e.coerce.string().url().optional(),
  accessToken: e.coerce.string().optional(),
  shopId: e.coerce.number().optional()
}), $ = Ra.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK_SHOP_ID
});
if (!$.success)
  throw new Error($.error.message);
const R = $.data, l = f.getInstance();
class Ea {
  constructor(t) {
    l.accessToken = t.accessToken ?? R.accessToken, l.baseURL = t.baseURL ?? R.baseURL, l.partnerId = t.partnerId ?? R.partnerId, l.partnerKey = t.partnerKey ?? R.partnerKey, l.shopId = t.shopId ?? R.shopId, l.isLogEnabled = t.isLogEnabled ?? !1;
  }
  setPartnerId(t) {
    return l.partnerId = t, this;
  }
  setBaseURL(t) {
    return l.baseURL = t, this;
  }
  setPartnerKey(t) {
    return l.partnerKey = t, this;
  }
  setAccessToken(t) {
    return l.accessToken = t, this;
  }
  setShopId(t) {
    return l.shopId = t, this;
  }
  setIsLogEnabled(t) {
    return l.isLogEnabled = t, this;
  }
  get v2() {
    return Ia;
  }
}
export {
  Hn as API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  Gn as API_V2_ORDER_GET_ORDER_LIST_PATH,
  Yn as API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH,
  Qn as API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH,
  Xn as API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  ea as API_V2_PRODUCT_GET_MODEL_LIST_PATH,
  da as API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH,
  W as API_V2_SHOP_AUTH_PARTNER,
  ye as ITEM_STATUS,
  Ea as ShopeeSdk,
  zn as V2_ORDER_RESPONSE_OPTIONAL_FIELDS,
  Pa as V2_ORDER_RESPONSE_OPTIONAL_FIELDS_MAP,
  Se as V2_ORDER_STATUS,
  va as V2_ORDER_STATUS_MAP,
  L as createConstantsMap,
  B as generateHmac,
  Z as signURL,
  E as toTimestamp,
  j as transformObjectKeys
};
