import Re from "axios";
import { z as e } from "zod";
async function W(r, ...t) {
  let n;
  return typeof globalThis.crypto < "u" && (n = await xe(r, ...t)), n = await ve(r, ...t), n;
}
async function xe(r, ...t) {
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
async function ve(r, ...t) {
  const { createHmac: n } = await import("crypto"), a = n("sha256", r);
  return t.filter((o) => !!o).forEach((o) => a.update(o)), a.digest("hex");
}
function j(r) {
  const t = r ? r.getTime() : Date.now();
  return Math.round(t / 1e3).toString();
}
async function B(r) {
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
      ...h.slice(1).map((Ie) => `&${y}=${Ie}`)
    ].join("") : h instanceof Date ? g[y] = j(h) : g[y] = `${h}`;
  }
  const d = j(), P = new URL(a, o), b = await W(
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
function E(r, t) {
  if (typeof r != "object" || Array.isArray(r) || r === null)
    return r;
  const n = {};
  for (const [a, o] of Object.entries(r))
    n[t(a)] = E(o, t);
  return n;
}
var x = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Te(r, t, n, a) {
  var o = -1, i = r == null ? 0 : r.length;
  for (a && i && (n = r[++o]); ++o < i; )
    n = t(n, r[o], o, r);
  return n;
}
var Pe = Te;
function je(r) {
  return function(t) {
    return r == null ? void 0 : r[t];
  };
}
var Ee = je, Ae = Ee, Oe = {
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
}, $e = Ae(Oe), ke = $e, Le = typeof x == "object" && x && x.Object === Object && x, Ce = Le, we = Ce, Ue = typeof self == "object" && self && self.Object === Object && self, De = we || Ue || Function("return this")(), Ne = De, qe = Ne, Me = qe.Symbol, k = Me;
function He(r, t) {
  for (var n = -1, a = r == null ? 0 : r.length, o = Array(a); ++n < a; )
    o[n] = t(r[n], n, r);
  return o;
}
var Ge = He, ze = Array.isArray, Fe = ze, C = k, Z = Object.prototype, Ke = Z.hasOwnProperty, Ve = Z.toString, I = C ? C.toStringTag : void 0;
function We(r) {
  var t = Ke.call(r, I), n = r[I];
  try {
    r[I] = void 0;
    var a = !0;
  } catch {
  }
  var o = Ve.call(r);
  return a && (t ? r[I] = n : delete r[I]), o;
}
var Be = We, Ze = Object.prototype, Je = Ze.toString;
function Ye(r) {
  return Je.call(r);
}
var Qe = Ye, w = k, Xe = Be, er = Qe, rr = "[object Null]", tr = "[object Undefined]", U = w ? w.toStringTag : void 0;
function nr(r) {
  return r == null ? r === void 0 ? tr : rr : U && U in Object(r) ? Xe(r) : er(r);
}
var ar = nr;
function or(r) {
  return r != null && typeof r == "object";
}
var sr = or, ir = ar, cr = sr, ur = "[object Symbol]";
function pr(r) {
  return typeof r == "symbol" || cr(r) && ir(r) == ur;
}
var mr = pr, D = k, gr = Ge, lr = Fe, dr = mr, _r = 1 / 0, N = D ? D.prototype : void 0, q = N ? N.toString : void 0;
function J(r) {
  if (typeof r == "string")
    return r;
  if (lr(r))
    return gr(r, J) + "";
  if (dr(r))
    return q ? q.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -_r ? "-0" : t;
}
var br = J, fr = br;
function hr(r) {
  return r == null ? "" : fr(r);
}
var v = hr, Sr = ke, yr = v, Ir = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Rr = "\\u0300-\\u036f", xr = "\\ufe20-\\ufe2f", vr = "\\u20d0-\\u20ff", Tr = Rr + xr + vr, Pr = "[" + Tr + "]", jr = RegExp(Pr, "g");
function Er(r) {
  return r = yr(r), r && r.replace(Ir, Sr).replace(jr, "");
}
var Ar = Er, Or = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function $r(r) {
  return r.match(Or) || [];
}
var kr = $r, Lr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Cr(r) {
  return Lr.test(r);
}
var wr = Cr, Y = "\\ud800-\\udfff", Ur = "\\u0300-\\u036f", Dr = "\\ufe20-\\ufe2f", Nr = "\\u20d0-\\u20ff", qr = Ur + Dr + Nr, Q = "\\u2700-\\u27bf", X = "a-z\\xdf-\\xf6\\xf8-\\xff", Mr = "\\xac\\xb1\\xd7\\xf7", Hr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Gr = "\\u2000-\\u206f", zr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ee = "A-Z\\xc0-\\xd6\\xd8-\\xde", Fr = "\\ufe0e\\ufe0f", re = Mr + Hr + Gr + zr, te = "['’]", M = "[" + re + "]", Kr = "[" + qr + "]", ne = "\\d+", Vr = "[" + Q + "]", ae = "[" + X + "]", oe = "[^" + Y + re + ne + Q + X + ee + "]", Wr = "\\ud83c[\\udffb-\\udfff]", Br = "(?:" + Kr + "|" + Wr + ")", Zr = "[^" + Y + "]", se = "(?:\\ud83c[\\udde6-\\uddff]){2}", ie = "[\\ud800-\\udbff][\\udc00-\\udfff]", S = "[" + ee + "]", Jr = "\\u200d", H = "(?:" + ae + "|" + oe + ")", Yr = "(?:" + S + "|" + oe + ")", G = "(?:" + te + "(?:d|ll|m|re|s|t|ve))?", z = "(?:" + te + "(?:D|LL|M|RE|S|T|VE))?", ce = Br + "?", ue = "[" + Fr + "]?", Qr = "(?:" + Jr + "(?:" + [Zr, se, ie].join("|") + ")" + ue + ce + ")*", Xr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", et = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rt = ue + ce + Qr, tt = "(?:" + [Vr, se, ie].join("|") + ")" + rt, nt = RegExp([
  S + "?" + ae + "+" + G + "(?=" + [M, S, "$"].join("|") + ")",
  Yr + "+" + z + "(?=" + [M, S + H, "$"].join("|") + ")",
  S + "?" + H + "+" + G,
  S + "+" + z,
  et,
  Xr,
  ne,
  tt
].join("|"), "g");
function at(r) {
  return r.match(nt) || [];
}
var ot = at, st = kr, it = wr, ct = v, ut = ot;
function pt(r, t, n) {
  return r = ct(r), t = n ? void 0 : t, t === void 0 ? it(r) ? ut(r) : st(r) : r.match(t) || [];
}
var mt = pt, gt = Pe, lt = Ar, dt = mt, _t = "['’]", bt = RegExp(_t, "g");
function ft(r) {
  return function(t) {
    return gt(dt(lt(t).replace(bt, "")), r, "");
  };
}
var pe = ft, ht = pe, St = ht(function(r, t, n) {
  return r + (n ? "_" : "") + t.toLowerCase();
}), yt = St;
function It(r, t, n) {
  var a = -1, o = r.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var i = Array(o); ++a < o; )
    i[a] = r[a + t];
  return i;
}
var Rt = It, xt = Rt;
function vt(r, t, n) {
  var a = r.length;
  return n = n === void 0 ? a : n, !t && n >= a ? r : xt(r, t, n);
}
var Tt = vt, Pt = "\\ud800-\\udfff", jt = "\\u0300-\\u036f", Et = "\\ufe20-\\ufe2f", At = "\\u20d0-\\u20ff", Ot = jt + Et + At, $t = "\\ufe0e\\ufe0f", kt = "\\u200d", Lt = RegExp("[" + kt + Pt + Ot + $t + "]");
function Ct(r) {
  return Lt.test(r);
}
var me = Ct;
function wt(r) {
  return r.split("");
}
var Ut = wt, ge = "\\ud800-\\udfff", Dt = "\\u0300-\\u036f", Nt = "\\ufe20-\\ufe2f", qt = "\\u20d0-\\u20ff", Mt = Dt + Nt + qt, Ht = "\\ufe0e\\ufe0f", Gt = "[" + ge + "]", A = "[" + Mt + "]", O = "\\ud83c[\\udffb-\\udfff]", zt = "(?:" + A + "|" + O + ")", le = "[^" + ge + "]", de = "(?:\\ud83c[\\udde6-\\uddff]){2}", _e = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ft = "\\u200d", be = zt + "?", fe = "[" + Ht + "]?", Kt = "(?:" + Ft + "(?:" + [le, de, _e].join("|") + ")" + fe + be + ")*", Vt = fe + be + Kt, Wt = "(?:" + [le + A + "?", A, de, _e, Gt].join("|") + ")", Bt = RegExp(O + "(?=" + O + ")|" + Wt + Vt, "g");
function Zt(r) {
  return r.match(Bt) || [];
}
var Jt = Zt, Yt = Ut, Qt = me, Xt = Jt;
function en(r) {
  return Qt(r) ? Xt(r) : Yt(r);
}
var rn = en, tn = Tt, nn = me, an = rn, on = v;
function sn(r) {
  return function(t) {
    t = on(t);
    var n = nn(t) ? an(t) : void 0, a = n ? n[0] : t.charAt(0), o = n ? tn(n, 1).join("") : t.slice(1);
    return a[r]() + o;
  };
}
var cn = sn, un = cn, pn = un("toUpperCase"), mn = pn, gn = v, ln = mn;
function dn(r) {
  return ln(gn(r).toLowerCase());
}
var _n = dn, bn = _n, fn = pe, hn = fn(function(r, t, n) {
  return t = t.toLowerCase(), r + (n ? bn(t) : t);
}), Sn = hn;
class T {
  constructor() {
    this.logger = console, this.logInterceptorIds = [], this.isLogEnabled = !1, this.axios = Re.create(), this.isLogEnabled && this.addLogInterceptor();
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
    return this.instance ?? (this.instance = new T());
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
const F = T.getInstance();
function _(r) {
  return async function(n) {
    const a = r.transformRequestParameter ?? ((b) => b), o = await r.requestParameterSchema.transform(a).safeParseAsync(n);
    if (!o.success)
      throw new Error(
        `parse request parameters error: ${o.error.message}`
      );
    const i = r.toCamelCase ? E(o.data, (b) => yt(b.toString())) : o.data, u = f.getInstance(), p = u.value;
    F.setLogEnabled(u.isLogEnabled);
    const m = await B({
      ...p,
      path: r.path,
      params: i
    }), c = await F.get(m), g = r.toCamelCase ? E(c.data, (b) => Sn(b.toString())) : c.data, d = await r.responseSchema.safeParseAsync(g);
    if (!d.success)
      throw new Error(`parse response error: ${d.error.message}`);
    return d.data;
  };
}
const K = T.getInstance();
function L(r) {
  return async function(n) {
    const a = r.transformRequestParameter ?? ((d) => d), o = await r.requestParameterSchema.transform(a).safeParseAsync(n);
    if (!o.success)
      throw new Error(
        `parse request parameters error: ${o.error.message}`
      );
    const i = f.getInstance(), u = i.value;
    K.setLogEnabled(i.isLogEnabled);
    const p = await B({
      ...u,
      path: r.path,
      params: {}
    }), m = o.data, { data: c } = await K.post(p, {}, m), g = await r.responseSchema.safeParseAsync(c);
    if (!g.success)
      throw new Error(`parse response error: ${g.error.message}`);
    return g.data;
  };
}
const yn = "/api/v2/logistic/get_shipping_parameter", In = "/api/v2/logistic/ship_order", Rn = "/api/v2/logistics/update_shipping_order", xn = "/api/v2/logistics/get_tracking_number", vn = {
  plp_number: "plp_number",
  first_mile_tracking_number: "first_mile_tracking_number",
  last_mile_tracking_number: "last_mile_tracking_number"
}, Tn = e.object({
  orderSn: e.string(),
  packageNumber: e.number().optional()
}), Pn = e.object({
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
}), jn = _({
  path: yn,
  requestParameterSchema: Tn,
  responseSchema: Pn,
  toCamelCase: !0
}), En = e.object({
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
}), An = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  requestId: e.string()
}), On = L({
  path: In,
  requestParameterSchema: En,
  responseSchema: An
}), $n = e.object({
  orderSn: e.string(),
  packageNumber: e.string().optional(),
  pickup: e.object({
    addressId: e.number(),
    pickupTimeId: e.string()
  })
}), kn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  requestId: e.string()
}), Ln = L({
  path: Rn,
  requestParameterSchema: $n,
  responseSchema: kn
}), s = vn, Cn = e.object({
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
}), wn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  response: e.object({}).optional(),
  requestId: e.string()
}), Un = _({
  path: xn,
  requestParameterSchema: Cn,
  responseSchema: wn,
  toCamelCase: !0
}), Dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getShippingParameter: jn,
  getTrackingNumber: Un,
  shipOrder: On,
  updateShipOrder: Ln
}, Symbol.toStringTag, { value: "Module" })), Nn = "/api/v2/order/get_order_list", qn = "/api/v2/order/get_order_detail", Mn = [
  "UNPAID",
  "READY_TO_SHIP",
  "PROCESSED",
  "SHIPPED",
  "COMPLETED",
  "IN_CANCEL",
  "CANCELLED",
  "INVOICE_PENDING"
], Hn = [
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
], Gn = e.object({
  orderSnList: e.array(e.string()),
  responseOptionalFields: e.enum(Hn).optional()
}), zn = e.object({
  error: e.string().optional(),
  message: e.string().optional(),
  response: e.object({
    orderList: e.array(
      e.object({
        checkoutShippingCarrier: e.null(),
        reverseShippingFee: e.null(),
        actualShippingFee: e.null(),
        actualShippingFeeConfirmed: e.boolean(),
        buyerCancelReason: e.string(),
        buyerCpfId: e.null(),
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
        estimatedShipping_fee: e.number(),
        fulfillmentFlag: e.string(),
        goodsToDeclare: e.boolean(),
        invoiceData: e.null(),
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
            )
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
}), Fn = _({
  path: qn,
  requestParameterSchema: Gn,
  responseSchema: zn
}), Kn = e.object({
  timeRangeField: e.enum(["create_time", "update_time"]),
  timeFrom: e.date(),
  timeTo: e.date(),
  pageSize: e.number().min(1).max(100),
  cursor: e.string().optional(),
  orderStatus: e.enum(Mn).optional(),
  responseOptionalFields: e.enum(["order_status"]).optional().default("order_status")
}), Vn = e.object({
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
}), Wn = _({
  path: Nn,
  requestParameterSchema: Kn,
  responseSchema: Vn,
  toCamelCase: !0
}), Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOrderDetail: Fn,
  getOrderList: Wn
}, Symbol.toStringTag, { value: "Module" })), Zn = "/api/v2/product/get_item_base_info", Jn = "/api/v2/product/get_item_extra_info", Yn = "/api/v2/product/get_item_list", Qn = "/api/v2/product/get_model_list", he = ["NORMAL", "DELETED", "UNLIST", "BANNED"], Xn = e.object({
  item_id_list: e.string(),
  need_tax_info: e.coerce.boolean().optional(),
  need_complaint_policy: e.coerce.boolean().optional()
}), ea = e.object({
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
}), ra = _({
  path: Zn,
  requestParameterSchema: Xn,
  responseSchema: ea,
  transformRequestParameter(r) {
    return r.need_tax_info = !!r.need_tax_info, r.need_complaint_policy = !!r.need_complaint_policy, r;
  }
}), ta = e.object({
  item_id_list: e.string()
}), na = e.object({
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
}), aa = _({
  path: Jn,
  requestParameterSchema: ta,
  responseSchema: na
}), oa = e.object({
  offset: e.number().int().min(0).optional(),
  page_size: e.number().int().positive().max(100).optional(),
  update_time_from: e.date().optional(),
  update_time_to: e.date().optional(),
  item_status: e.array(e.enum(he))
}), sa = e.object({
  error: e.string(),
  message: e.string().nullable().optional(),
  warning: e.string().nullable().optional(),
  request_id: e.string(),
  response: e.object({
    item: e.array(
      e.object({
        item_id: e.number().int(),
        item_status: e.enum(he),
        update_time: e.number().int()
      })
    ).optional()
  }).optional(),
  total_count: e.number().int().optional(),
  has_next_page: e.boolean().optional(),
  next_offset: e.number().int().optional()
}), ia = _({
  path: Yn,
  requestParameterSchema: oa,
  transformRequestParameter(r) {
    return r.update_time_from = r.update_time_from ?? /* @__PURE__ */ new Date("01/01/2022"), r.update_time_to = r.update_time_to ?? /* @__PURE__ */ new Date(), r;
  },
  responseSchema: sa
}), ca = e.object({
  item_id: e.string()
}), ua = e.object({
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
}), pa = _({
  path: Qn,
  requestParameterSchema: ca,
  responseSchema: ua
}), ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItemBaseInfo: ra,
  getItemExtraInfo: aa,
  getItemList: ia,
  getModelList: pa
}, Symbol.toStringTag, { value: "Module" })), ga = "/api/v2/auth/token/get", Se = e.object({
  code: e.string(),
  partner_id: e.number().optional(),
  shop_id: e.number().optional(),
  main_account_id: e.number().optional()
}), ye = e.object({
  access_token: e.string(),
  error: e.string(),
  expires_in: e.number(),
  message: e.string(),
  refresh_token: e.string(),
  request_id: e.string(),
  shop_id_list: e.array(e.number())
}), la = L({
  path: ga,
  requestParameterSchema: Se,
  responseSchema: ye,
  transformRequestParameter(r) {
    return r.partner_id = r.partner_id ?? f.getInstance().partnerId, r;
  }
}), da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAccessToken: la,
  getAccessTokenRequestParametersSchema: Se,
  getAccessTokenResponseSchema: ye
}, Symbol.toStringTag, { value: "Module" })), V = "/api/v2/shop/auth_partner";
async function _a({
  redirectURL: r,
  redirectSign: t
}) {
  const { baseURL: n, partnerId: a, partnerKey: o } = f.getInstance();
  if (!o || !a)
    throw new Error("partnerKey is undefined");
  const i = new URL(V, n), u = j(/* @__PURE__ */ new Date()), p = await W(
    o,
    a.toString(),
    V,
    u
  ), m = new URL(r);
  return m.searchParams.append("sign", t), i.search = new URLSearchParams({
    partner_id: a.toString(),
    redirect: m.toString(),
    timestamp: u,
    sign: p
  }).toString(), i.toString();
}
const ba = e.object({
  code: e.string(),
  shop_id: e.string(),
  sign: e.string()
});
async function fa(r) {
  const t = await ba.safeParseAsync(r);
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
const ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  authPartner: _a,
  verifyCallback: fa
}, Symbol.toStringTag, { value: "Module" })), Sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  logistic: Dn,
  order: Bn,
  product: ma,
  publicShopee: da,
  shop: ha
}, Symbol.toStringTag, { value: "Module" })), ya = e.object({
  partnerId: e.coerce.number().optional(),
  partnerKey: e.coerce.string().optional(),
  baseURL: e.coerce.string().url().optional(),
  accessToken: e.coerce.string().optional(),
  shopId: e.coerce.number().optional()
}), $ = ya.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK_SHOP_ID
});
if (!$.success)
  throw new Error($.error.message);
const R = $.data, l = f.getInstance();
class xa {
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
    return Sa;
  }
}
export {
  qn as API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  Nn as API_V2_ORDER_GET_ORDER_LIST_PATH,
  Zn as API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH,
  Jn as API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH,
  Yn as API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  Qn as API_V2_PRODUCT_GET_MODEL_LIST_PATH,
  ga as API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH,
  V as API_V2_SHOP_AUTH_PARTNER,
  he as ITEM_STATUS,
  Hn as ORDER_RESPONSE_OPTIONAL_FIELDS,
  Mn as ORDER_STATUS,
  xa as ShopeeSdk,
  W as generateHmac,
  B as signURL,
  j as toTimestamp,
  E as transformObjectKeys
};
