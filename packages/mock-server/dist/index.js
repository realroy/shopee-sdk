var dt = (u, e, a) => {
  if (!e.has(u))
    throw TypeError("Cannot " + a);
};
var br = (u, e, a) => (dt(u, e, "read from private field"), a ? a.call(u) : e.get(u)), mt = (u, e, a) => {
  if (e.has(u))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(u) : e.set(u, a);
}, Ft = (u, e, a, i) => (dt(u, e, "write to private field"), i ? i.call(u, a) : e.set(u, a), a);
import { setTimeout as MD } from "timers";
import ta from "http";
import y4 from "https";
import f4 from "stream";
import jD from "zlib";
import { toTimestamp as PD, API_V2_PRODUCT_GET_ITEM_LIST_PATH as TD, API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH as wD, API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH as ND } from "@shopee-sdk/core";
import { z as ae } from "zod";
var y = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sa(u) {
  if (u.__esModule)
    return u;
  var e = u.default;
  if (typeof e == "function") {
    var a = function i() {
      if (this instanceof i) {
        var r = [null];
        r.push.apply(r, arguments);
        var n = Function.bind.apply(e, r);
        return new n();
      }
      return e.apply(this, arguments);
    };
    a.prototype = e.prototype;
  } else
    a = {};
  return Object.defineProperty(a, "__esModule", { value: !0 }), Object.keys(u).forEach(function(i) {
    var r = Object.getOwnPropertyDescriptor(u, i);
    Object.defineProperty(a, i, r.get ? r : {
      enumerable: !0,
      get: function() {
        return u[i];
      }
    });
  }), a;
}
var Fn = {}, LD = {
  get exports() {
    return Fn;
  },
  set exports(u) {
    Fn = u;
  }
}, Ar, kt;
function KD() {
  return kt || (kt = 1, Ar = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  }), Ar;
}
var Br, pt;
function z4() {
  if (pt)
    return Br;
  pt = 1;
  const u = KD(), e = {};
  for (const r of Object.keys(u))
    e[u[r]] = r;
  const a = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    lch: { channels: 3, labels: "lch" },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] }
  };
  Br = a;
  for (const r of Object.keys(a)) {
    if (!("channels" in a[r]))
      throw new Error("missing channels property: " + r);
    if (!("labels" in a[r]))
      throw new Error("missing channel labels property: " + r);
    if (a[r].labels.length !== a[r].channels)
      throw new Error("channel and label counts mismatch: " + r);
    const { channels: n, labels: o } = a[r];
    delete a[r].channels, delete a[r].labels, Object.defineProperty(a[r], "channels", { value: n }), Object.defineProperty(a[r], "labels", { value: o });
  }
  a.rgb.hsl = function(r) {
    const n = r[0] / 255, o = r[1] / 255, t = r[2] / 255, s = Math.min(n, o, t), l = Math.max(n, o, t), E = l - s;
    let D, x;
    l === s ? D = 0 : n === l ? D = (o - t) / E : o === l ? D = 2 + (t - n) / E : t === l && (D = 4 + (n - o) / E), D = Math.min(D * 60, 360), D < 0 && (D += 360);
    const c = (s + l) / 2;
    return l === s ? x = 0 : c <= 0.5 ? x = E / (l + s) : x = E / (2 - l - s), [D, x * 100, c * 100];
  }, a.rgb.hsv = function(r) {
    let n, o, t, s, l;
    const E = r[0] / 255, D = r[1] / 255, x = r[2] / 255, c = Math.max(E, D, x), d = c - Math.min(E, D, x), F = function(k) {
      return (c - k) / 6 / d + 1 / 2;
    };
    return d === 0 ? (s = 0, l = 0) : (l = d / c, n = F(E), o = F(D), t = F(x), E === c ? s = t - o : D === c ? s = 1 / 3 + n - t : x === c && (s = 2 / 3 + o - n), s < 0 ? s += 1 : s > 1 && (s -= 1)), [
      s * 360,
      l * 100,
      c * 100
    ];
  }, a.rgb.hwb = function(r) {
    const n = r[0], o = r[1];
    let t = r[2];
    const s = a.rgb.hsl(r)[0], l = 1 / 255 * Math.min(n, Math.min(o, t));
    return t = 1 - 1 / 255 * Math.max(n, Math.max(o, t)), [s, l * 100, t * 100];
  }, a.rgb.cmyk = function(r) {
    const n = r[0] / 255, o = r[1] / 255, t = r[2] / 255, s = Math.min(1 - n, 1 - o, 1 - t), l = (1 - n - s) / (1 - s) || 0, E = (1 - o - s) / (1 - s) || 0, D = (1 - t - s) / (1 - s) || 0;
    return [l * 100, E * 100, D * 100, s * 100];
  };
  function i(r, n) {
    return (r[0] - n[0]) ** 2 + (r[1] - n[1]) ** 2 + (r[2] - n[2]) ** 2;
  }
  return a.rgb.keyword = function(r) {
    const n = e[r];
    if (n)
      return n;
    let o = 1 / 0, t;
    for (const s of Object.keys(u)) {
      const l = u[s], E = i(r, l);
      E < o && (o = E, t = s);
    }
    return t;
  }, a.keyword.rgb = function(r) {
    return u[r];
  }, a.rgb.xyz = function(r) {
    let n = r[0] / 255, o = r[1] / 255, t = r[2] / 255;
    n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92, o = o > 0.04045 ? ((o + 0.055) / 1.055) ** 2.4 : o / 12.92, t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92;
    const s = n * 0.4124 + o * 0.3576 + t * 0.1805, l = n * 0.2126 + o * 0.7152 + t * 0.0722, E = n * 0.0193 + o * 0.1192 + t * 0.9505;
    return [s * 100, l * 100, E * 100];
  }, a.rgb.lab = function(r) {
    const n = a.rgb.xyz(r);
    let o = n[0], t = n[1], s = n[2];
    o /= 95.047, t /= 100, s /= 108.883, o = o > 8856e-6 ? o ** (1 / 3) : 7.787 * o + 16 / 116, t = t > 8856e-6 ? t ** (1 / 3) : 7.787 * t + 16 / 116, s = s > 8856e-6 ? s ** (1 / 3) : 7.787 * s + 16 / 116;
    const l = 116 * t - 16, E = 500 * (o - t), D = 200 * (t - s);
    return [l, E, D];
  }, a.hsl.rgb = function(r) {
    const n = r[0] / 360, o = r[1] / 100, t = r[2] / 100;
    let s, l, E;
    if (o === 0)
      return E = t * 255, [E, E, E];
    t < 0.5 ? s = t * (1 + o) : s = t + o - t * o;
    const D = 2 * t - s, x = [0, 0, 0];
    for (let c = 0; c < 3; c++)
      l = n + 1 / 3 * -(c - 1), l < 0 && l++, l > 1 && l--, 6 * l < 1 ? E = D + (s - D) * 6 * l : 2 * l < 1 ? E = s : 3 * l < 2 ? E = D + (s - D) * (2 / 3 - l) * 6 : E = D, x[c] = E * 255;
    return x;
  }, a.hsl.hsv = function(r) {
    const n = r[0];
    let o = r[1] / 100, t = r[2] / 100, s = o;
    const l = Math.max(t, 0.01);
    t *= 2, o *= t <= 1 ? t : 2 - t, s *= l <= 1 ? l : 2 - l;
    const E = (t + o) / 2, D = t === 0 ? 2 * s / (l + s) : 2 * o / (t + o);
    return [n, D * 100, E * 100];
  }, a.hsv.rgb = function(r) {
    const n = r[0] / 60, o = r[1] / 100;
    let t = r[2] / 100;
    const s = Math.floor(n) % 6, l = n - Math.floor(n), E = 255 * t * (1 - o), D = 255 * t * (1 - o * l), x = 255 * t * (1 - o * (1 - l));
    switch (t *= 255, s) {
      case 0:
        return [t, x, E];
      case 1:
        return [D, t, E];
      case 2:
        return [E, t, x];
      case 3:
        return [E, D, t];
      case 4:
        return [x, E, t];
      case 5:
        return [t, E, D];
    }
  }, a.hsv.hsl = function(r) {
    const n = r[0], o = r[1] / 100, t = r[2] / 100, s = Math.max(t, 0.01);
    let l, E;
    E = (2 - o) * t;
    const D = (2 - o) * s;
    return l = o * s, l /= D <= 1 ? D : 2 - D, l = l || 0, E /= 2, [n, l * 100, E * 100];
  }, a.hwb.rgb = function(r) {
    const n = r[0] / 360;
    let o = r[1] / 100, t = r[2] / 100;
    const s = o + t;
    let l;
    s > 1 && (o /= s, t /= s);
    const E = Math.floor(6 * n), D = 1 - t;
    l = 6 * n - E, E & 1 && (l = 1 - l);
    const x = o + l * (D - o);
    let c, d, F;
    switch (E) {
      default:
      case 6:
      case 0:
        c = D, d = x, F = o;
        break;
      case 1:
        c = x, d = D, F = o;
        break;
      case 2:
        c = o, d = D, F = x;
        break;
      case 3:
        c = o, d = x, F = D;
        break;
      case 4:
        c = x, d = o, F = D;
        break;
      case 5:
        c = D, d = o, F = x;
        break;
    }
    return [c * 255, d * 255, F * 255];
  }, a.cmyk.rgb = function(r) {
    const n = r[0] / 100, o = r[1] / 100, t = r[2] / 100, s = r[3] / 100, l = 1 - Math.min(1, n * (1 - s) + s), E = 1 - Math.min(1, o * (1 - s) + s), D = 1 - Math.min(1, t * (1 - s) + s);
    return [l * 255, E * 255, D * 255];
  }, a.xyz.rgb = function(r) {
    const n = r[0] / 100, o = r[1] / 100, t = r[2] / 100;
    let s, l, E;
    return s = n * 3.2406 + o * -1.5372 + t * -0.4986, l = n * -0.9689 + o * 1.8758 + t * 0.0415, E = n * 0.0557 + o * -0.204 + t * 1.057, s = s > 31308e-7 ? 1.055 * s ** (1 / 2.4) - 0.055 : s * 12.92, l = l > 31308e-7 ? 1.055 * l ** (1 / 2.4) - 0.055 : l * 12.92, E = E > 31308e-7 ? 1.055 * E ** (1 / 2.4) - 0.055 : E * 12.92, s = Math.min(Math.max(0, s), 1), l = Math.min(Math.max(0, l), 1), E = Math.min(Math.max(0, E), 1), [s * 255, l * 255, E * 255];
  }, a.xyz.lab = function(r) {
    let n = r[0], o = r[1], t = r[2];
    n /= 95.047, o /= 100, t /= 108.883, n = n > 8856e-6 ? n ** (1 / 3) : 7.787 * n + 16 / 116, o = o > 8856e-6 ? o ** (1 / 3) : 7.787 * o + 16 / 116, t = t > 8856e-6 ? t ** (1 / 3) : 7.787 * t + 16 / 116;
    const s = 116 * o - 16, l = 500 * (n - o), E = 200 * (o - t);
    return [s, l, E];
  }, a.lab.xyz = function(r) {
    const n = r[0], o = r[1], t = r[2];
    let s, l, E;
    l = (n + 16) / 116, s = o / 500 + l, E = l - t / 200;
    const D = l ** 3, x = s ** 3, c = E ** 3;
    return l = D > 8856e-6 ? D : (l - 16 / 116) / 7.787, s = x > 8856e-6 ? x : (s - 16 / 116) / 7.787, E = c > 8856e-6 ? c : (E - 16 / 116) / 7.787, s *= 95.047, l *= 100, E *= 108.883, [s, l, E];
  }, a.lab.lch = function(r) {
    const n = r[0], o = r[1], t = r[2];
    let s;
    s = Math.atan2(t, o) * 360 / 2 / Math.PI, s < 0 && (s += 360);
    const E = Math.sqrt(o * o + t * t);
    return [n, E, s];
  }, a.lch.lab = function(r) {
    const n = r[0], o = r[1], s = r[2] / 360 * 2 * Math.PI, l = o * Math.cos(s), E = o * Math.sin(s);
    return [n, l, E];
  }, a.rgb.ansi16 = function(r, n = null) {
    const [o, t, s] = r;
    let l = n === null ? a.rgb.hsv(r)[2] : n;
    if (l = Math.round(l / 50), l === 0)
      return 30;
    let E = 30 + (Math.round(s / 255) << 2 | Math.round(t / 255) << 1 | Math.round(o / 255));
    return l === 2 && (E += 60), E;
  }, a.hsv.ansi16 = function(r) {
    return a.rgb.ansi16(a.hsv.rgb(r), r[2]);
  }, a.rgb.ansi256 = function(r) {
    const n = r[0], o = r[1], t = r[2];
    return n === o && o === t ? n < 8 ? 16 : n > 248 ? 231 : Math.round((n - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(n / 255 * 5) + 6 * Math.round(o / 255 * 5) + Math.round(t / 255 * 5);
  }, a.ansi16.rgb = function(r) {
    let n = r % 10;
    if (n === 0 || n === 7)
      return r > 50 && (n += 3.5), n = n / 10.5 * 255, [n, n, n];
    const o = (~~(r > 50) + 1) * 0.5, t = (n & 1) * o * 255, s = (n >> 1 & 1) * o * 255, l = (n >> 2 & 1) * o * 255;
    return [t, s, l];
  }, a.ansi256.rgb = function(r) {
    if (r >= 232) {
      const l = (r - 232) * 10 + 8;
      return [l, l, l];
    }
    r -= 16;
    let n;
    const o = Math.floor(r / 36) / 5 * 255, t = Math.floor((n = r % 36) / 6) / 5 * 255, s = n % 6 / 5 * 255;
    return [o, t, s];
  }, a.rgb.hex = function(r) {
    const o = (((Math.round(r[0]) & 255) << 16) + ((Math.round(r[1]) & 255) << 8) + (Math.round(r[2]) & 255)).toString(16).toUpperCase();
    return "000000".substring(o.length) + o;
  }, a.hex.rgb = function(r) {
    const n = r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!n)
      return [0, 0, 0];
    let o = n[0];
    n[0].length === 3 && (o = o.split("").map((D) => D + D).join(""));
    const t = parseInt(o, 16), s = t >> 16 & 255, l = t >> 8 & 255, E = t & 255;
    return [s, l, E];
  }, a.rgb.hcg = function(r) {
    const n = r[0] / 255, o = r[1] / 255, t = r[2] / 255, s = Math.max(Math.max(n, o), t), l = Math.min(Math.min(n, o), t), E = s - l;
    let D, x;
    return E < 1 ? D = l / (1 - E) : D = 0, E <= 0 ? x = 0 : s === n ? x = (o - t) / E % 6 : s === o ? x = 2 + (t - n) / E : x = 4 + (n - o) / E, x /= 6, x %= 1, [x * 360, E * 100, D * 100];
  }, a.hsl.hcg = function(r) {
    const n = r[1] / 100, o = r[2] / 100, t = o < 0.5 ? 2 * n * o : 2 * n * (1 - o);
    let s = 0;
    return t < 1 && (s = (o - 0.5 * t) / (1 - t)), [r[0], t * 100, s * 100];
  }, a.hsv.hcg = function(r) {
    const n = r[1] / 100, o = r[2] / 100, t = n * o;
    let s = 0;
    return t < 1 && (s = (o - t) / (1 - t)), [r[0], t * 100, s * 100];
  }, a.hcg.rgb = function(r) {
    const n = r[0] / 360, o = r[1] / 100, t = r[2] / 100;
    if (o === 0)
      return [t * 255, t * 255, t * 255];
    const s = [0, 0, 0], l = n % 1 * 6, E = l % 1, D = 1 - E;
    let x = 0;
    switch (Math.floor(l)) {
      case 0:
        s[0] = 1, s[1] = E, s[2] = 0;
        break;
      case 1:
        s[0] = D, s[1] = 1, s[2] = 0;
        break;
      case 2:
        s[0] = 0, s[1] = 1, s[2] = E;
        break;
      case 3:
        s[0] = 0, s[1] = D, s[2] = 1;
        break;
      case 4:
        s[0] = E, s[1] = 0, s[2] = 1;
        break;
      default:
        s[0] = 1, s[1] = 0, s[2] = D;
    }
    return x = (1 - o) * t, [
      (o * s[0] + x) * 255,
      (o * s[1] + x) * 255,
      (o * s[2] + x) * 255
    ];
  }, a.hcg.hsv = function(r) {
    const n = r[1] / 100, o = r[2] / 100, t = n + o * (1 - n);
    let s = 0;
    return t > 0 && (s = n / t), [r[0], s * 100, t * 100];
  }, a.hcg.hsl = function(r) {
    const n = r[1] / 100, t = r[2] / 100 * (1 - n) + 0.5 * n;
    let s = 0;
    return t > 0 && t < 0.5 ? s = n / (2 * t) : t >= 0.5 && t < 1 && (s = n / (2 * (1 - t))), [r[0], s * 100, t * 100];
  }, a.hcg.hwb = function(r) {
    const n = r[1] / 100, o = r[2] / 100, t = n + o * (1 - n);
    return [r[0], (t - n) * 100, (1 - t) * 100];
  }, a.hwb.hcg = function(r) {
    const n = r[1] / 100, t = 1 - r[2] / 100, s = t - n;
    let l = 0;
    return s < 1 && (l = (t - s) / (1 - s)), [r[0], s * 100, l * 100];
  }, a.apple.rgb = function(r) {
    return [r[0] / 65535 * 255, r[1] / 65535 * 255, r[2] / 65535 * 255];
  }, a.rgb.apple = function(r) {
    return [r[0] / 255 * 65535, r[1] / 255 * 65535, r[2] / 255 * 65535];
  }, a.gray.rgb = function(r) {
    return [r[0] / 100 * 255, r[0] / 100 * 255, r[0] / 100 * 255];
  }, a.gray.hsl = function(r) {
    return [0, 0, r[0]];
  }, a.gray.hsv = a.gray.hsl, a.gray.hwb = function(r) {
    return [0, 100, r[0]];
  }, a.gray.cmyk = function(r) {
    return [0, 0, 0, r[0]];
  }, a.gray.lab = function(r) {
    return [r[0], 0, 0];
  }, a.gray.hex = function(r) {
    const n = Math.round(r[0] / 100 * 255) & 255, t = ((n << 16) + (n << 8) + n).toString(16).toUpperCase();
    return "000000".substring(t.length) + t;
  }, a.rgb.gray = function(r) {
    return [(r[0] + r[1] + r[2]) / 3 / 255 * 100];
  }, Br;
}
var yr, ht;
function RD() {
  if (ht)
    return yr;
  ht = 1;
  const u = z4();
  function e() {
    const n = {}, o = Object.keys(u);
    for (let t = o.length, s = 0; s < t; s++)
      n[o[s]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null
      };
    return n;
  }
  function a(n) {
    const o = e(), t = [n];
    for (o[n].distance = 0; t.length; ) {
      const s = t.pop(), l = Object.keys(u[s]);
      for (let E = l.length, D = 0; D < E; D++) {
        const x = l[D], c = o[x];
        c.distance === -1 && (c.distance = o[s].distance + 1, c.parent = s, t.unshift(x));
      }
    }
    return o;
  }
  function i(n, o) {
    return function(t) {
      return o(n(t));
    };
  }
  function r(n, o) {
    const t = [o[n].parent, n];
    let s = u[o[n].parent][n], l = o[n].parent;
    for (; o[l].parent; )
      t.unshift(o[l].parent), s = i(u[o[l].parent][l], s), l = o[l].parent;
    return s.conversion = t, s;
  }
  return yr = function(n) {
    const o = a(n), t = {}, s = Object.keys(o);
    for (let l = s.length, E = 0; E < l; E++) {
      const D = s[E];
      o[D].parent !== null && (t[D] = r(D, o));
    }
    return t;
  }, yr;
}
var fr, gt;
function HD() {
  if (gt)
    return fr;
  gt = 1;
  const u = z4(), e = RD(), a = {}, i = Object.keys(u);
  function r(o) {
    const t = function(...s) {
      const l = s[0];
      return l == null ? l : (l.length > 1 && (s = l), o(s));
    };
    return "conversion" in o && (t.conversion = o.conversion), t;
  }
  function n(o) {
    const t = function(...s) {
      const l = s[0];
      if (l == null)
        return l;
      l.length > 1 && (s = l);
      const E = o(s);
      if (typeof E == "object")
        for (let D = E.length, x = 0; x < D; x++)
          E[x] = Math.round(E[x]);
      return E;
    };
    return "conversion" in o && (t.conversion = o.conversion), t;
  }
  return i.forEach((o) => {
    a[o] = {}, Object.defineProperty(a[o], "channels", { value: u[o].channels }), Object.defineProperty(a[o], "labels", { value: u[o].labels });
    const t = e(o);
    Object.keys(t).forEach((l) => {
      const E = t[l];
      a[o][l] = n(E), a[o][l].raw = r(E);
    });
  }), fr = a, fr;
}
(function(u) {
  const e = (E, D) => (...x) => `\x1B[${E(...x) + D}m`, a = (E, D) => (...x) => {
    const c = E(...x);
    return `\x1B[${38 + D};5;${c}m`;
  }, i = (E, D) => (...x) => {
    const c = E(...x);
    return `\x1B[${38 + D};2;${c[0]};${c[1]};${c[2]}m`;
  }, r = (E) => E, n = (E, D, x) => [E, D, x], o = (E, D, x) => {
    Object.defineProperty(E, D, {
      get: () => {
        const c = x();
        return Object.defineProperty(E, D, {
          value: c,
          enumerable: !0,
          configurable: !0
        }), c;
      },
      enumerable: !0,
      configurable: !0
    });
  };
  let t;
  const s = (E, D, x, c) => {
    t === void 0 && (t = HD());
    const d = c ? 10 : 0, F = {};
    for (const [k, g] of Object.entries(t)) {
      const M = k === "ansi16" ? "ansi" : k;
      k === D ? F[M] = E(x, d) : typeof g == "object" && (F[M] = E(g[D], d));
    }
    return F;
  };
  function l() {
    const E = /* @__PURE__ */ new Map(), D = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    D.color.gray = D.color.blackBright, D.bgColor.bgGray = D.bgColor.bgBlackBright, D.color.grey = D.color.blackBright, D.bgColor.bgGrey = D.bgColor.bgBlackBright;
    for (const [x, c] of Object.entries(D)) {
      for (const [d, F] of Object.entries(c))
        D[d] = {
          open: `\x1B[${F[0]}m`,
          close: `\x1B[${F[1]}m`
        }, c[d] = D[d], E.set(F[0], F[1]);
      Object.defineProperty(D, x, {
        value: c,
        enumerable: !1
      });
    }
    return Object.defineProperty(D, "codes", {
      value: E,
      enumerable: !1
    }), D.color.close = "\x1B[39m", D.bgColor.close = "\x1B[49m", o(D.color, "ansi", () => s(e, "ansi16", r, !1)), o(D.color, "ansi256", () => s(a, "ansi256", r, !1)), o(D.color, "ansi16m", () => s(i, "rgb", n, !1)), o(D.bgColor, "ansi", () => s(e, "ansi16", r, !0)), o(D.bgColor, "ansi256", () => s(a, "ansi256", r, !0)), o(D.bgColor, "ansi16m", () => s(i, "rgb", n, !0)), D;
  }
  Object.defineProperty(u, "exports", {
    enumerable: !0,
    get: l
  });
})(LD);
var _D = {
  stdout: !1,
  stderr: !1
};
const GD = (u, e, a) => {
  let i = u.indexOf(e);
  if (i === -1)
    return u;
  const r = e.length;
  let n = 0, o = "";
  do
    o += u.substr(n, i - n) + e + a, n = i + r, i = u.indexOf(e, n);
  while (i !== -1);
  return o += u.substr(n), o;
}, VD = (u, e, a, i) => {
  let r = 0, n = "";
  do {
    const o = u[i - 1] === "\r";
    n += u.substr(r, (o ? i - 1 : i) - r) + e + (o ? `\r
` : `
`) + a, r = i + 1, i = u.indexOf(`
`, r);
  } while (i !== -1);
  return n += u.substr(r), n;
};
var ID = {
  stringReplaceAll: GD,
  stringEncaseCRLFWithFirstIndex: VD
}, zr, Ct;
function OD() {
  if (Ct)
    return zr;
  Ct = 1;
  const u = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, e = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, a = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, i = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi, r = /* @__PURE__ */ new Map([
    ["n", `
`],
    ["r", "\r"],
    ["t", "	"],
    ["b", "\b"],
    ["f", "\f"],
    ["v", "\v"],
    ["0", "\0"],
    ["\\", "\\"],
    ["e", "\x1B"],
    ["a", "\x07"]
  ]);
  function n(l) {
    const E = l[0] === "u", D = l[1] === "{";
    return E && !D && l.length === 5 || l[0] === "x" && l.length === 3 ? String.fromCharCode(parseInt(l.slice(1), 16)) : E && D ? String.fromCodePoint(parseInt(l.slice(2, -1), 16)) : r.get(l) || l;
  }
  function o(l, E) {
    const D = [], x = E.trim().split(/\s*,\s*/g);
    let c;
    for (const d of x) {
      const F = Number(d);
      if (!Number.isNaN(F))
        D.push(F);
      else if (c = d.match(a))
        D.push(c[2].replace(i, (k, g, M) => g ? n(g) : M));
      else
        throw new Error(`Invalid Chalk template style argument: ${d} (in style '${l}')`);
    }
    return D;
  }
  function t(l) {
    e.lastIndex = 0;
    const E = [];
    let D;
    for (; (D = e.exec(l)) !== null; ) {
      const x = D[1];
      if (D[2]) {
        const c = o(x, D[2]);
        E.push([x].concat(c));
      } else
        E.push([x]);
    }
    return E;
  }
  function s(l, E) {
    const D = {};
    for (const c of E)
      for (const d of c.styles)
        D[d[0]] = c.inverse ? null : d.slice(1);
    let x = l;
    for (const [c, d] of Object.entries(D))
      if (Array.isArray(d)) {
        if (!(c in x))
          throw new Error(`Unknown Chalk style: ${c}`);
        x = d.length > 0 ? x[c](...d) : x[c];
      }
    return x;
  }
  return zr = (l, E) => {
    const D = [], x = [];
    let c = [];
    if (E.replace(u, (d, F, k, g, M, A) => {
      if (F)
        c.push(n(F));
      else if (g) {
        const v = c.join("");
        c = [], x.push(D.length === 0 ? v : s(l, D)(v)), D.push({ inverse: k, styles: t(g) });
      } else if (M) {
        if (D.length === 0)
          throw new Error("Found extraneous } in Chalk template literal");
        x.push(s(l, D)(c.join(""))), c = [], D.pop();
      } else
        c.push(A);
    }), x.push(c.join("")), D.length > 0) {
      const d = `Chalk template literal is missing ${D.length} closing bracket${D.length === 1 ? "" : "s"} (\`}\`)`;
      throw new Error(d);
    }
    return x.join("");
  }, zr;
}
const Ue = Fn, { stdout: kn, stderr: pn } = _D, {
  stringReplaceAll: JD,
  stringEncaseCRLFWithFirstIndex: $D
} = ID, { isArray: ti } = Array, S4 = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
], ye = /* @__PURE__ */ Object.create(null), qD = (u, e = {}) => {
  if (e.level && !(Number.isInteger(e.level) && e.level >= 0 && e.level <= 3))
    throw new Error("The `level` option should be an integer from 0 to 3");
  const a = kn ? kn.level : 0;
  u.level = e.level === void 0 ? a : e.level;
};
class WD {
  constructor(e) {
    return M4(e);
  }
}
const M4 = (u) => {
  const e = {};
  return qD(e, u), e.template = (...a) => P4(e.template, ...a), Object.setPrototypeOf(e, Si.prototype), Object.setPrototypeOf(e.template, e), e.template.constructor = () => {
    throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
  }, e.template.Instance = WD, e.template;
};
function Si(u) {
  return M4(u);
}
for (const [u, e] of Object.entries(Ue))
  ye[u] = {
    get() {
      const a = Mi(this, Kn(e.open, e.close, this._styler), this._isEmpty);
      return Object.defineProperty(this, u, { value: a }), a;
    }
  };
ye.visible = {
  get() {
    const u = Mi(this, this._styler, !0);
    return Object.defineProperty(this, "visible", { value: u }), u;
  }
};
const j4 = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
for (const u of j4)
  ye[u] = {
    get() {
      const { level: e } = this;
      return function(...a) {
        const i = Kn(Ue.color[S4[e]][u](...a), Ue.color.close, this._styler);
        return Mi(this, i, this._isEmpty);
      };
    }
  };
for (const u of j4) {
  const e = "bg" + u[0].toUpperCase() + u.slice(1);
  ye[e] = {
    get() {
      const { level: a } = this;
      return function(...i) {
        const r = Kn(Ue.bgColor[S4[a]][u](...i), Ue.bgColor.close, this._styler);
        return Mi(this, r, this._isEmpty);
      };
    }
  };
}
const UD = Object.defineProperties(() => {
}, {
  ...ye,
  level: {
    enumerable: !0,
    get() {
      return this._generator.level;
    },
    set(u) {
      this._generator.level = u;
    }
  }
}), Kn = (u, e, a) => {
  let i, r;
  return a === void 0 ? (i = u, r = e) : (i = a.openAll + u, r = e + a.closeAll), {
    open: u,
    close: e,
    openAll: i,
    closeAll: r,
    parent: a
  };
}, Mi = (u, e, a) => {
  const i = (...r) => ti(r[0]) && ti(r[0].raw) ? vt(i, P4(i, ...r)) : vt(i, r.length === 1 ? "" + r[0] : r.join(" "));
  return Object.setPrototypeOf(i, UD), i._generator = u, i._styler = e, i._isEmpty = a, i;
}, vt = (u, e) => {
  if (u.level <= 0 || !e)
    return u._isEmpty ? "" : e;
  let a = u._styler;
  if (a === void 0)
    return e;
  const { openAll: i, closeAll: r } = a;
  if (e.indexOf("\x1B") !== -1)
    for (; a !== void 0; )
      e = JD(e, a.close, a.open), a = a.parent;
  const n = e.indexOf(`
`);
  return n !== -1 && (e = $D(e, r, i, n)), i + e + r;
};
let Sr;
const P4 = (u, ...e) => {
  const [a] = e;
  if (!ti(a) || !ti(a.raw))
    return e.join(" ");
  const i = e.slice(1), r = [a.raw[0]];
  for (let n = 1; n < a.length; n++)
    r.push(
      String(i[n - 1]).replace(/[{}\\]/g, "\\$&"),
      String(a.raw[n])
    );
  return Sr === void 0 && (Sr = OD()), Sr(u, r.join(""));
};
Object.defineProperties(Si.prototype, ye);
const ji = Si();
ji.supportsColor = kn;
ji.stderr = Si({ level: pn ? pn.level : 0 });
ji.stderr.supportsColor = pn;
var ZD = ji, YD = /(%?)(%([sdjo]))/g;
function QD(u, e) {
  switch (e) {
    case "s":
      return u;
    case "d":
    case "i":
      return Number(u);
    case "j":
      return JSON.stringify(u);
    case "o": {
      if (typeof u == "string")
        return u;
      const a = JSON.stringify(u);
      return a === "{}" || a === "[]" || /^\[object .+?\]$/.test(a) ? u : a;
    }
  }
}
function Ze(u, ...e) {
  if (e.length === 0)
    return u;
  let a = 0, i = u.replace(
    YD,
    (r, n, o, t) => {
      const s = e[a], l = QD(s, t);
      return n ? r : (a++, l);
    }
  );
  return a < e.length && (i += ` ${e.slice(a).join(" ")}`), i = i.replace(/%{2,2}/g, "%"), i;
}
var XD = 2;
function u5(u) {
  if (!u.stack)
    return;
  const e = u.stack.split(`
`);
  e.splice(1, XD), u.stack = e.join(`
`);
}
var T4 = class extends Error {
  constructor(e, ...a) {
    super(e), this.message = e, this.name = "Invariant Violation", this.message = Ze(e, ...a), u5(this);
  }
}, M0 = (u, e, ...a) => {
  if (!u)
    throw new T4(e, ...a);
};
M0.as = (u, e, a, ...i) => {
  if (!e)
    throw u.prototype.name != null ? new u(Ze(a, i)) : u(Ze(a, i));
};
const e5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InvariantError: T4,
  format: Ze,
  invariant: M0
}, Symbol.toStringTag, { value: "Module" }));
var F0 = {}, Q0 = {};
Object.defineProperty(Q0, "__esModule", { value: !0 });
Q0.IS_PATCHED_MODULE = void 0;
Q0.IS_PATCHED_MODULE = Symbol("isPatchedModule");
var fe = {}, Zu = {}, a5 = {
  get exports() {
    return Zu;
  },
  set exports(u) {
    Zu = u;
  }
}, Mr, bt;
function i5() {
  if (bt)
    return Mr;
  bt = 1;
  var u = 1e3, e = u * 60, a = e * 60, i = a * 24, r = i * 7, n = i * 365.25;
  Mr = function(E, D) {
    D = D || {};
    var x = typeof E;
    if (x === "string" && E.length > 0)
      return o(E);
    if (x === "number" && isFinite(E))
      return D.long ? s(E) : t(E);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(E)
    );
  };
  function o(E) {
    if (E = String(E), !(E.length > 100)) {
      var D = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        E
      );
      if (D) {
        var x = parseFloat(D[1]), c = (D[2] || "ms").toLowerCase();
        switch (c) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return x * n;
          case "weeks":
          case "week":
          case "w":
            return x * r;
          case "days":
          case "day":
          case "d":
            return x * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return x * a;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return x * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return x * u;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return x;
          default:
            return;
        }
      }
    }
  }
  function t(E) {
    var D = Math.abs(E);
    return D >= i ? Math.round(E / i) + "d" : D >= a ? Math.round(E / a) + "h" : D >= e ? Math.round(E / e) + "m" : D >= u ? Math.round(E / u) + "s" : E + "ms";
  }
  function s(E) {
    var D = Math.abs(E);
    return D >= i ? l(E, D, i, "day") : D >= a ? l(E, D, a, "hour") : D >= e ? l(E, D, e, "minute") : D >= u ? l(E, D, u, "second") : E + " ms";
  }
  function l(E, D, x, c) {
    var d = D >= x * 1.5;
    return Math.round(E / x) + " " + c + (d ? "s" : "");
  }
  return Mr;
}
function r5(u) {
  a.debug = a, a.default = a, a.coerce = s, a.disable = n, a.enable = r, a.enabled = o, a.humanize = i5(), a.destroy = l, Object.keys(u).forEach((E) => {
    a[E] = u[E];
  }), a.names = [], a.skips = [], a.formatters = {};
  function e(E) {
    let D = 0;
    for (let x = 0; x < E.length; x++)
      D = (D << 5) - D + E.charCodeAt(x), D |= 0;
    return a.colors[Math.abs(D) % a.colors.length];
  }
  a.selectColor = e;
  function a(E) {
    let D, x = null, c, d;
    function F(...k) {
      if (!F.enabled)
        return;
      const g = F, M = Number(/* @__PURE__ */ new Date()), A = M - (D || M);
      g.diff = A, g.prev = D, g.curr = M, D = M, k[0] = a.coerce(k[0]), typeof k[0] != "string" && k.unshift("%O");
      let v = 0;
      k[0] = k[0].replace(/%([a-zA-Z%])/g, (R, O) => {
        if (R === "%%")
          return "%";
        v++;
        const V = a.formatters[O];
        if (typeof V == "function") {
          const b = k[v];
          R = V.call(g, b), k.splice(v, 1), v--;
        }
        return R;
      }), a.formatArgs.call(g, k), (g.log || a.log).apply(g, k);
    }
    return F.namespace = E, F.useColors = a.useColors(), F.color = a.selectColor(E), F.extend = i, F.destroy = a.destroy, Object.defineProperty(F, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => x !== null ? x : (c !== a.namespaces && (c = a.namespaces, d = a.enabled(E)), d),
      set: (k) => {
        x = k;
      }
    }), typeof a.init == "function" && a.init(F), F;
  }
  function i(E, D) {
    const x = a(this.namespace + (typeof D > "u" ? ":" : D) + E);
    return x.log = this.log, x;
  }
  function r(E) {
    a.save(E), a.namespaces = E, a.names = [], a.skips = [];
    let D;
    const x = (typeof E == "string" ? E : "").split(/[\s,]+/), c = x.length;
    for (D = 0; D < c; D++)
      x[D] && (E = x[D].replace(/\*/g, ".*?"), E[0] === "-" ? a.skips.push(new RegExp("^" + E.slice(1) + "$")) : a.names.push(new RegExp("^" + E + "$")));
  }
  function n() {
    const E = [
      ...a.names.map(t),
      ...a.skips.map(t).map((D) => "-" + D)
    ].join(",");
    return a.enable(""), E;
  }
  function o(E) {
    if (E[E.length - 1] === "*")
      return !0;
    let D, x;
    for (D = 0, x = a.skips.length; D < x; D++)
      if (a.skips[D].test(E))
        return !1;
    for (D = 0, x = a.names.length; D < x; D++)
      if (a.names[D].test(E))
        return !0;
    return !1;
  }
  function t(E) {
    return E.toString().substring(2, E.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function s(E) {
    return E instanceof Error ? E.stack || E.message : E;
  }
  function l() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return a.enable(a.load()), a;
}
var n5 = r5;
(function(u, e) {
  e.formatArgs = i, e.save = r, e.load = n, e.useColors = a, e.storage = o(), e.destroy = (() => {
    let s = !1;
    return () => {
      s || (s = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), e.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function a() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function i(s) {
    if (s[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + s[0] + (this.useColors ? "%c " : " ") + "+" + u.exports.humanize(this.diff), !this.useColors)
      return;
    const l = "color: " + this.color;
    s.splice(1, 0, l, "color: inherit");
    let E = 0, D = 0;
    s[0].replace(/%[a-zA-Z%]/g, (x) => {
      x !== "%%" && (E++, x === "%c" && (D = E));
    }), s.splice(D, 0, l);
  }
  e.log = console.debug || console.log || (() => {
  });
  function r(s) {
    try {
      s ? e.storage.setItem("debug", s) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function n() {
    let s;
    try {
      s = e.storage.getItem("debug");
    } catch {
    }
    return !s && typeof process < "u" && "env" in process && (s = process.env.DEBUG), s;
  }
  function o() {
    try {
      return localStorage;
    } catch {
    }
  }
  u.exports = n5(e);
  const { formatters: t } = u.exports;
  t.j = function(s) {
    try {
      return JSON.stringify(s);
    } catch (l) {
      return "[UnexpectedJSONParseError]: " + l.message;
    }
  };
})(a5, Zu);
var w4 = {}, N4 = {}, Pi = {}, si = {}, o5 = {
  get exports() {
    return si;
  },
  set exports(u) {
    si = u;
  }
}, ce = typeof Reflect == "object" ? Reflect : null, At = ce && typeof ce.apply == "function" ? ce.apply : function(e, a, i) {
  return Function.prototype.apply.call(e, a, i);
}, ei;
ce && typeof ce.ownKeys == "function" ? ei = ce.ownKeys : Object.getOwnPropertySymbols ? ei = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : ei = function(e) {
  return Object.getOwnPropertyNames(e);
};
function t5(u) {
  console && console.warn && console.warn(u);
}
var L4 = Number.isNaN || function(e) {
  return e !== e;
};
function ou() {
  ou.init.call(this);
}
o5.exports = ou;
si.once = D5;
ou.EventEmitter = ou;
ou.prototype._events = void 0;
ou.prototype._eventsCount = 0;
ou.prototype._maxListeners = void 0;
var Bt = 10;
function Ti(u) {
  if (typeof u != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof u);
}
Object.defineProperty(ou, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Bt;
  },
  set: function(u) {
    if (typeof u != "number" || u < 0 || L4(u))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + u + ".");
    Bt = u;
  }
});
ou.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
ou.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || L4(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function K4(u) {
  return u._maxListeners === void 0 ? ou.defaultMaxListeners : u._maxListeners;
}
ou.prototype.getMaxListeners = function() {
  return K4(this);
};
ou.prototype.emit = function(e) {
  for (var a = [], i = 1; i < arguments.length; i++)
    a.push(arguments[i]);
  var r = e === "error", n = this._events;
  if (n !== void 0)
    r = r && n.error === void 0;
  else if (!r)
    return !1;
  if (r) {
    var o;
    if (a.length > 0 && (o = a[0]), o instanceof Error)
      throw o;
    var t = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw t.context = o, t;
  }
  var s = n[e];
  if (s === void 0)
    return !1;
  if (typeof s == "function")
    At(s, this, a);
  else
    for (var l = s.length, E = V4(s, l), i = 0; i < l; ++i)
      At(E[i], this, a);
  return !0;
};
function R4(u, e, a, i) {
  var r, n, o;
  if (Ti(a), n = u._events, n === void 0 ? (n = u._events = /* @__PURE__ */ Object.create(null), u._eventsCount = 0) : (n.newListener !== void 0 && (u.emit(
    "newListener",
    e,
    a.listener ? a.listener : a
  ), n = u._events), o = n[e]), o === void 0)
    o = n[e] = a, ++u._eventsCount;
  else if (typeof o == "function" ? o = n[e] = i ? [a, o] : [o, a] : i ? o.unshift(a) : o.push(a), r = K4(u), r > 0 && o.length > r && !o.warned) {
    o.warned = !0;
    var t = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    t.name = "MaxListenersExceededWarning", t.emitter = u, t.type = e, t.count = o.length, t5(t);
  }
  return u;
}
ou.prototype.addListener = function(e, a) {
  return R4(this, e, a, !1);
};
ou.prototype.on = ou.prototype.addListener;
ou.prototype.prependListener = function(e, a) {
  return R4(this, e, a, !0);
};
function s5() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function H4(u, e, a) {
  var i = { fired: !1, wrapFn: void 0, target: u, type: e, listener: a }, r = s5.bind(i);
  return r.listener = a, i.wrapFn = r, r;
}
ou.prototype.once = function(e, a) {
  return Ti(a), this.on(e, H4(this, e, a)), this;
};
ou.prototype.prependOnceListener = function(e, a) {
  return Ti(a), this.prependListener(e, H4(this, e, a)), this;
};
ou.prototype.removeListener = function(e, a) {
  var i, r, n, o, t;
  if (Ti(a), r = this._events, r === void 0)
    return this;
  if (i = r[e], i === void 0)
    return this;
  if (i === a || i.listener === a)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, i.listener || a));
  else if (typeof i != "function") {
    for (n = -1, o = i.length - 1; o >= 0; o--)
      if (i[o] === a || i[o].listener === a) {
        t = i[o].listener, n = o;
        break;
      }
    if (n < 0)
      return this;
    n === 0 ? i.shift() : l5(i, n), i.length === 1 && (r[e] = i[0]), r.removeListener !== void 0 && this.emit("removeListener", e, t || a);
  }
  return this;
};
ou.prototype.off = ou.prototype.removeListener;
ou.prototype.removeAllListeners = function(e) {
  var a, i, r;
  if (i = this._events, i === void 0)
    return this;
  if (i.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete i[e]), this;
  if (arguments.length === 0) {
    var n = Object.keys(i), o;
    for (r = 0; r < n.length; ++r)
      o = n[r], o !== "removeListener" && this.removeAllListeners(o);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (a = i[e], typeof a == "function")
    this.removeListener(e, a);
  else if (a !== void 0)
    for (r = a.length - 1; r >= 0; r--)
      this.removeListener(e, a[r]);
  return this;
};
function _4(u, e, a) {
  var i = u._events;
  if (i === void 0)
    return [];
  var r = i[e];
  return r === void 0 ? [] : typeof r == "function" ? a ? [r.listener || r] : [r] : a ? E5(r) : V4(r, r.length);
}
ou.prototype.listeners = function(e) {
  return _4(this, e, !0);
};
ou.prototype.rawListeners = function(e) {
  return _4(this, e, !1);
};
ou.listenerCount = function(u, e) {
  return typeof u.listenerCount == "function" ? u.listenerCount(e) : G4.call(u, e);
};
ou.prototype.listenerCount = G4;
function G4(u) {
  var e = this._events;
  if (e !== void 0) {
    var a = e[u];
    if (typeof a == "function")
      return 1;
    if (a !== void 0)
      return a.length;
  }
  return 0;
}
ou.prototype.eventNames = function() {
  return this._eventsCount > 0 ? ei(this._events) : [];
};
function V4(u, e) {
  for (var a = new Array(e), i = 0; i < e; ++i)
    a[i] = u[i];
  return a;
}
function l5(u, e) {
  for (; e + 1 < u.length; e++)
    u[e] = u[e + 1];
  u.pop();
}
function E5(u) {
  for (var e = new Array(u.length), a = 0; a < e.length; ++a)
    e[a] = u[a].listener || u[a];
  return e;
}
function D5(u, e) {
  return new Promise(function(a, i) {
    function r(o) {
      u.removeListener(e, n), i(o);
    }
    function n() {
      typeof u.removeListener == "function" && u.removeListener("error", r), a([].slice.call(arguments));
    }
    I4(u, e, n, { once: !0 }), e !== "error" && x5(u, r, { once: !0 });
  });
}
function x5(u, e, a) {
  typeof u.on == "function" && I4(u, "error", e, a);
}
function I4(u, e, a, i) {
  if (typeof u.on == "function")
    i.once ? u.once(e, a) : u.on(e, a);
  else if (typeof u.addEventListener == "function")
    u.addEventListener(e, function r(n) {
      i.once && u.removeEventListener(e, r), a(n);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof u);
}
var c5 = y && y.__extends || function() {
  var u = function(e, a) {
    return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
      i.__proto__ = r;
    } || function(i, r) {
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
    }, u(e, a);
  };
  return function(e, a) {
    u(e, a);
    function i() {
      this.constructor = e;
    }
    e.prototype = a === null ? Object.create(a) : (i.prototype = a.prototype, new i());
  };
}(), d5 = y && y.__spreadArrays || function() {
  for (var u = 0, e = 0, a = arguments.length; e < a; e++)
    u += arguments[e].length;
  for (var i = Array(u), r = 0, e = 0; e < a; e++)
    for (var n = arguments[e], o = 0, t = n.length; o < t; o++, r++)
      i[r] = n[o];
  return i;
};
Pi.__esModule = !0;
Pi.StrictEventEmitter = void 0;
var m5 = si, F5 = (
  /** @class */
  function(u) {
    c5(e, u);
    function e() {
      return u.call(this) || this;
    }
    return e.prototype.on = function(a, i) {
      return u.prototype.on.call(this, a.toString(), i);
    }, e.prototype.once = function(a, i) {
      return u.prototype.once.call(this, a.toString(), i);
    }, e.prototype.off = function(a, i) {
      return u.prototype.off.call(this, a.toString(), i);
    }, e.prototype.emit = function(a) {
      for (var i = [], r = 1; r < arguments.length; r++)
        i[r - 1] = arguments[r];
      return u.prototype.emit.apply(this, d5([a.toString()], i));
    }, e.prototype.addListener = function(a, i) {
      return u.prototype.addListener.call(this, a.toString(), i);
    }, e.prototype.prependListener = function(a, i) {
      return u.prototype.prependListener.call(this, a.toString(), i);
    }, e.prototype.prependOnceListener = function(a, i) {
      return u.prototype.prependOnceListener.call(this, a.toString(), i);
    }, e.prototype.removeListener = function(a, i) {
      return u.prototype.removeListener.call(this, a.toString(), i);
    }, e.prototype.removeAllListeners = function(a) {
      return a ? u.prototype.removeAllListeners.call(this, a.toString()) : u.prototype.removeAllListeners.call(this);
    }, e.prototype.eventNames = function() {
      return u.prototype.eventNames.call(this);
    }, e.prototype.listeners = function(a) {
      return u.prototype.listeners.call(this, a.toString());
    }, e.prototype.rawListeners = function(a) {
      return u.prototype.rawListeners.call(this, a.toString());
    }, e.prototype.listenerCount = function(a) {
      return u.prototype.listenerCount.call(this, a.toString());
    }, e;
  }(m5.EventEmitter)
);
Pi.StrictEventEmitter = F5;
(function(u) {
  var e = y && y.__createBinding || (Object.create ? function(i, r, n, o) {
    o === void 0 && (o = n), Object.defineProperty(i, o, { enumerable: !0, get: function() {
      return r[n];
    } });
  } : function(i, r, n, o) {
    o === void 0 && (o = n), i[o] = r[n];
  }), a = y && y.__exportStar || function(i, r) {
    for (var n in i)
      n !== "default" && !Object.prototype.hasOwnProperty.call(r, n) && e(r, i, n);
  };
  u.__esModule = !0, a(Pi, u);
})(N4);
var q0 = {};
Object.defineProperty(q0, "__esModule", { value: !0 });
q0.nextTickAsync = q0.nextTick = void 0;
function k5(u) {
  setTimeout(u, 0);
}
q0.nextTick = k5;
function p5(u) {
  return new Promise(function(e) {
    setTimeout(function() {
      e(u());
    }, 0);
  });
}
q0.nextTickAsync = p5;
(function(u) {
  var e = y && y.__extends || function() {
    var D = function(x, c) {
      return D = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, F) {
        d.__proto__ = F;
      } || function(d, F) {
        for (var k in F)
          Object.prototype.hasOwnProperty.call(F, k) && (d[k] = F[k]);
      }, D(x, c);
    };
    return function(x, c) {
      if (typeof c != "function" && c !== null)
        throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
      D(x, c);
      function d() {
        this.constructor = x;
      }
      x.prototype = c === null ? Object.create(c) : (d.prototype = c.prototype, new d());
    };
  }(), a = y && y.__awaiter || function(D, x, c, d) {
    function F(k) {
      return k instanceof c ? k : new c(function(g) {
        g(k);
      });
    }
    return new (c || (c = Promise))(function(k, g) {
      function M(T) {
        try {
          v(d.next(T));
        } catch (R) {
          g(R);
        }
      }
      function A(T) {
        try {
          v(d.throw(T));
        } catch (R) {
          g(R);
        }
      }
      function v(T) {
        T.done ? k(T.value) : F(T.value).then(M, A);
      }
      v((d = d.apply(D, x || [])).next());
    });
  }, i = y && y.__generator || function(D, x) {
    var c = { label: 0, sent: function() {
      if (k[0] & 1)
        throw k[1];
      return k[1];
    }, trys: [], ops: [] }, d, F, k, g;
    return g = { next: M(0), throw: M(1), return: M(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function M(v) {
      return function(T) {
        return A([v, T]);
      };
    }
    function A(v) {
      if (d)
        throw new TypeError("Generator is already executing.");
      for (; c; )
        try {
          if (d = 1, F && (k = v[0] & 2 ? F.return : v[0] ? F.throw || ((k = F.return) && k.call(F), 0) : F.next) && !(k = k.call(F, v[1])).done)
            return k;
          switch (F = 0, k && (v = [v[0] & 2, k.value]), v[0]) {
            case 0:
            case 1:
              k = v;
              break;
            case 4:
              return c.label++, { value: v[1], done: !1 };
            case 5:
              c.label++, F = v[1], v = [0];
              continue;
            case 7:
              v = c.ops.pop(), c.trys.pop();
              continue;
            default:
              if (k = c.trys, !(k = k.length > 0 && k[k.length - 1]) && (v[0] === 6 || v[0] === 2)) {
                c = 0;
                continue;
              }
              if (v[0] === 3 && (!k || v[1] > k[0] && v[1] < k[3])) {
                c.label = v[1];
                break;
              }
              if (v[0] === 6 && c.label < k[1]) {
                c.label = k[1], k = v;
                break;
              }
              if (k && c.label < k[2]) {
                c.label = k[2], c.ops.push(v);
                break;
              }
              k[2] && c.ops.pop(), c.trys.pop();
              continue;
          }
          v = x.call(D, c);
        } catch (T) {
          v = [6, T], F = 0;
        } finally {
          d = k = 0;
        }
      if (v[0] & 5)
        throw v[1];
      return { value: v[0] ? v[1] : void 0, done: !0 };
    }
  }, r = y && y.__read || function(D, x) {
    var c = typeof Symbol == "function" && D[Symbol.iterator];
    if (!c)
      return D;
    var d = c.call(D), F, k = [], g;
    try {
      for (; (x === void 0 || x-- > 0) && !(F = d.next()).done; )
        k.push(F.value);
    } catch (M) {
      g = { error: M };
    } finally {
      try {
        F && !F.done && (c = d.return) && c.call(d);
      } finally {
        if (g)
          throw g.error;
      }
    }
    return k;
  }, n = y && y.__spreadArray || function(D, x) {
    for (var c = 0, d = x.length, F = D.length; c < d; c++, F++)
      D[F] = x[c];
    return D;
  };
  Object.defineProperty(u, "__esModule", { value: !0 }), u.AsyncEventEmitter = u.AsyncEventEmitterReadyState = void 0;
  var o = Zu, t = N4, s = q0, l;
  (function(D) {
    D.ACTIVE = "ACTIVE", D.DEACTIVATED = "DEACTIVATED";
  })(l = u.AsyncEventEmitterReadyState || (u.AsyncEventEmitterReadyState = {}));
  var E = (
    /** @class */
    function(D) {
      e(x, D);
      function x() {
        var c = D.call(this) || this;
        return c.log = o.debug("async-event-emitter"), c.queue = /* @__PURE__ */ new Map(), c.readyState = l.ACTIVE, c;
      }
      return x.prototype.on = function(c, d) {
        var F = this, k = this.log.extend("on");
        return k('adding "%s" listener...', c), this.readyState === l.DEACTIVATED ? (k("the emitter is destroyed, skipping!"), this) : D.prototype.on.call(this, c, function() {
          for (var g = [], M = 0; M < arguments.length; M++)
            g[M] = arguments[M];
          return a(F, void 0, void 0, function() {
            var A, v = this;
            return i(this, function(T) {
              return A = this.openListenerQueue(c), k('awaiting the "%s" listener...', c), A.push({
                args: g,
                done: new Promise(function(R, O) {
                  return a(v, void 0, void 0, function() {
                    var V;
                    return i(this, function(b) {
                      switch (b.label) {
                        case 0:
                          return b.trys.push([0, 2, , 3]), [4, d.apply(void 0, n([], r(g)))];
                        case 1:
                          return b.sent(), R(), k('"%s" listener has resolved!', c), [3, 3];
                        case 2:
                          return V = b.sent(), k('"%s" listener has rejected!', V), O(V), [3, 3];
                        case 3:
                          return [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                })
              }), [
                2
                /*return*/
              ];
            });
          });
        });
      }, x.prototype.emit = function(c) {
        for (var d = this, F = [], k = 1; k < arguments.length; k++)
          F[k - 1] = arguments[k];
        var g = this.log.extend("emit");
        return g('emitting "%s" event...', c), this.readyState === l.DEACTIVATED ? (g("the emitter is destroyed, skipping!"), !1) : (this.openListenerQueue(c), g('appending a one-time cleanup "%s" listener...', c), this.once(c, function() {
          s.nextTick(function() {
            d.queue.delete(c), g('cleaned up "%s" listeners queue!', c);
          });
        }), D.prototype.emit.apply(this, n([c], r(F))));
      }, x.prototype.untilIdle = function(c, d) {
        return d === void 0 && (d = function() {
          return !0;
        }), a(this, void 0, void 0, function() {
          var F, k = this;
          return i(this, function(g) {
            switch (g.label) {
              case 0:
                return F = this.queue.get(c) || [], [4, Promise.all(F.filter(d).map(function(M) {
                  var A = M.done;
                  return A;
                })).finally(function() {
                  k.queue.delete(c);
                })];
              case 1:
                return g.sent(), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, x.prototype.openListenerQueue = function(c) {
        var d = this.log.extend("openListenerQueue");
        d('opening "%s" listeners queue...', c);
        var F = this.queue.get(c);
        return F ? (d("returning an exising queue:", F), F) : (d("no queue found, creating one..."), this.queue.set(c, []), []);
      }, x.prototype.removeAllListeners = function(c) {
        var d = this.log.extend("removeAllListeners");
        return d("event:", c), c ? (this.queue.delete(c), d('cleared the "%s" listeners queue!', c, this.queue.get(c))) : (this.queue.clear(), d("cleared the listeners queue!", this.queue)), D.prototype.removeAllListeners.call(this, c);
      }, x.prototype.activate = function() {
        var c = this.log.extend("activate");
        this.readyState = l.ACTIVE, c("set state to:", this.readyState);
      }, x.prototype.deactivate = function() {
        var c = this.log.extend("deactivate");
        c("removing all listeners..."), this.removeAllListeners(), this.readyState = l.DEACTIVATED, c("set state to:", this.readyState);
      }, x;
    }(t.StrictEventEmitter)
  );
  u.AsyncEventEmitter = E;
})(w4);
(function(u) {
  var e = y && y.__values || function(E) {
    var D = typeof Symbol == "function" && Symbol.iterator, x = D && E[D], c = 0;
    if (x)
      return x.call(E);
    if (E && typeof E.length == "number")
      return {
        next: function() {
          return E && c >= E.length && (E = void 0), { value: E && E[c++], done: !E };
        }
      };
    throw new TypeError(D ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  Object.defineProperty(u, "__esModule", { value: !0 }), u.Interceptor = u.InterceptorReadyState = u.deleteGlobalSymbol = u.getGlobalSymbol = void 0;
  var a = Zu, i = w4, r = q0;
  function n(E) {
    return (
      // @ts-ignore https://github.com/Microsoft/TypeScript/issues/24587
      globalThis[E] || void 0
    );
  }
  u.getGlobalSymbol = n;
  function o(E, D) {
    globalThis[E] = D;
  }
  function t(E) {
    delete globalThis[E];
  }
  u.deleteGlobalSymbol = t;
  var s;
  (function(E) {
    E.IDLE = "IDLE", E.APPLYING = "APPLYING", E.APPLIED = "APPLIED", E.DISPOSING = "DISPOSING", E.DISPOSED = "DISPOSED";
  })(s = u.InterceptorReadyState || (u.InterceptorReadyState = {}));
  var l = (
    /** @class */
    function() {
      function E(D) {
        this.symbol = D, this.readyState = s.IDLE, this.emitter = new i.AsyncEventEmitter(), this.subscriptions = [], this.log = a.debug(D.description), this.emitter.setMaxListeners(0), this.log("constructing the interceptor...");
      }
      return E.prototype.checkEnvironment = function() {
        return !0;
      }, E.prototype.apply = function() {
        var D = this, x = this.log.extend("apply");
        if (x("applying the interceptor..."), this.readyState === s.APPLIED) {
          x("intercepted already applied!");
          return;
        }
        var c = this.checkEnvironment();
        if (!c) {
          x("the interceptor cannot be applied in this environment!");
          return;
        }
        this.readyState = s.APPLYING, this.emitter.activate(), x("activated the emiter!", this.emitter.readyState);
        var d = this.getInstance();
        if (d) {
          x("found a running instance, reusing..."), this.on = function(F, k) {
            x('proxying the "%s" listener', F), d.emitter.addListener(F, k), D.subscriptions.push(function() {
              d.emitter.removeListener(F, k), x('removed proxied "%s" listener!', F);
            });
          }, r.nextTick(function() {
            D.readyState = s.APPLIED;
          });
          return;
        }
        x("no running instance found, setting up a new instance..."), this.setup(), this.setInstance(), r.nextTick(function() {
          D.readyState = s.APPLIED;
        });
      }, E.prototype.setup = function() {
      }, E.prototype.on = function(D, x) {
        var c = this.log.extend("on");
        if (this.readyState === s.DISPOSING || this.readyState === s.DISPOSED) {
          c("cannot listen to events, already disposed!");
          return;
        }
        c('adding "%s" event listener:', D, x.name), this.emitter.on(D, x);
      }, E.prototype.dispose = function() {
        var D, x, c = this, d = this.log.extend("dispose");
        if (this.readyState === s.DISPOSED) {
          d("cannot dispose, already disposed!");
          return;
        }
        if (d("disposing the interceptor..."), this.readyState = s.DISPOSING, !this.getInstance()) {
          d("no interceptors running, skipping dispose...");
          return;
        }
        if (this.clearInstance(), d("global symbol deleted:", n(this.symbol)), this.subscriptions.length > 0) {
          d("disposing of %d subscriptions...", this.subscriptions.length);
          try {
            for (var F = e(this.subscriptions), k = F.next(); !k.done; k = F.next()) {
              var g = k.value;
              g();
            }
          } catch (M) {
            D = { error: M };
          } finally {
            try {
              k && !k.done && (x = F.return) && x.call(F);
            } finally {
              if (D)
                throw D.error;
            }
          }
          this.subscriptions = [], d("disposed of all subscriptions!", this.subscriptions.length);
        }
        this.emitter.deactivate(), d("destroyed the listener!"), r.nextTick(function() {
          c.readyState = s.DISPOSED;
        });
      }, E.prototype.getInstance = function() {
        var D, x = n(this.symbol);
        return this.log("retrieved global instance:", (D = x == null ? void 0 : x.constructor) === null || D === void 0 ? void 0 : D.name), x;
      }, E.prototype.setInstance = function() {
        o(this.symbol, this), this.log("set global instance!", this.symbol.description);
      }, E.prototype.clearInstance = function() {
        t(this.symbol), this.log("cleared global instance!", this.symbol.description);
      }, E;
    }()
  );
  u.Interceptor = l;
})(fe);
var wi = {}, h5 = y && y.__extends || function() {
  var u = function(e, a) {
    return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
      i.__proto__ = r;
    } || function(i, r) {
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
    }, u(e, a);
  };
  return function(e, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    u(e, a);
    function i() {
      this.constructor = e;
    }
    e.prototype = a === null ? Object.create(a) : (i.prototype = a.prototype, new i());
  };
}(), g5 = y && y.__values || function(u) {
  var e = typeof Symbol == "function" && Symbol.iterator, a = e && u[e], i = 0;
  if (a)
    return a.call(u);
  if (u && typeof u.length == "number")
    return {
      next: function() {
        return u && i >= u.length && (u = void 0), { value: u && u[i++], done: !u };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(wi, "__esModule", { value: !0 });
wi.BatchInterceptor = void 0;
var C5 = fe, v5 = (
  /** @class */
  function(u) {
    h5(e, u);
    function e(a) {
      var i = this;
      return e.symbol = Symbol(a.name), i = u.call(this, e.symbol) || this, i.interceptors = a.interceptors, i;
    }
    return e.prototype.setup = function() {
      var a, i, r = this.log.extend("setup");
      r("applying all %d interceptors...", this.interceptors.length);
      var n = function(E) {
        r('applying "%s" interceptor...', E.constructor.name), E.apply(), r("adding interceptor dispose subscription"), o.subscriptions.push(function() {
          return E.dispose();
        });
      }, o = this;
      try {
        for (var t = g5(this.interceptors), s = t.next(); !s.done; s = t.next()) {
          var l = s.value;
          n(l);
        }
      } catch (E) {
        a = { error: E };
      } finally {
        try {
          s && !s.done && (i = t.return) && i.call(t);
        } finally {
          if (a)
            throw a.error;
        }
      }
    }, e.prototype.on = function(a, i) {
      this.interceptors.forEach(function(r) {
        r.on(a, i);
      });
    }, e;
  }(C5.Interceptor)
);
wi.BatchInterceptor = v5;
var K0 = {}, Rn = Object.defineProperty, b5 = Object.getOwnPropertyDescriptor, A5 = Object.getOwnPropertyNames, B5 = Object.prototype.hasOwnProperty, y5 = (u, e) => {
  for (var a in e)
    Rn(u, a, { get: e[a], enumerable: !0 });
}, f5 = (u, e, a, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let r of A5(e))
      !B5.call(u, r) && r !== a && Rn(u, r, { get: () => e[r], enumerable: !(i = b5(e, r)) || i.enumerable });
  return u;
}, z5 = (u) => f5(Rn({}, "__esModule", { value: !0 }), u), O4 = {};
y5(O4, {
  Headers: () => Ea,
  flattenHeadersList: () => K5,
  flattenHeadersObject: () => R5,
  headersToList: () => J4,
  headersToObject: () => T5,
  headersToString: () => j5,
  listToHeaders: () => N5,
  objectToHeaders: () => L5,
  reduceHeadersObject: () => Hn,
  stringToHeaders: () => w5
});
var la = z5(O4), S5 = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
function Le(u) {
  if (typeof u != "string" && (u = String(u)), S5.test(u) || u.trim() === "")
    throw new TypeError("Invalid character in header field name");
  return u.toLowerCase();
}
function M5(u) {
  return typeof u != "string" && (u = String(u)), u;
}
var $u = Symbol("normalizedHeaders"), Ha = Symbol("rawHeaderNames"), yt, ft, Ea = class {
  constructor(e) {
    this[yt] = {}, this[ft] = /* @__PURE__ */ new Map(), ["Headers", "HeadersPolyfill"].includes(e == null ? void 0 : e.constructor.name) || e instanceof Ea ? e.forEach((i, r) => {
      this.append(r, i);
    }, this) : Array.isArray(e) ? e.forEach(([a, i]) => {
      this.append(a, Array.isArray(i) ? i.join(", ") : i);
    }) : e && Object.getOwnPropertyNames(e).forEach((a) => {
      const i = e[a];
      this.append(a, Array.isArray(i) ? i.join(", ") : i);
    });
  }
  [(yt = $u, ft = Ha, Symbol.iterator)]() {
    return this.entries();
  }
  *keys() {
    for (const e of Object.keys(this[$u]))
      yield e;
  }
  *values() {
    for (const e of Object.values(this[$u]))
      yield e;
  }
  *entries() {
    for (const e of Object.keys(this[$u]))
      yield [e, this.get(e)];
  }
  get(e) {
    return this[$u][Le(e)] || null;
  }
  set(e, a) {
    const i = Le(e);
    this[$u][i] = M5(a), this[Ha].set(i, e);
  }
  append(e, a) {
    const i = Le(e);
    let r = this.has(i) ? `${this.get(i)}, ${a}` : a;
    this.set(e, r);
  }
  delete(e) {
    if (!this.has(e))
      return;
    const a = Le(e);
    delete this[$u][a], this[Ha].delete(a);
  }
  all() {
    return this[$u];
  }
  raw() {
    const e = {};
    for (const [a, i] of this.entries())
      e[this[Ha].get(a)] = i;
    return e;
  }
  has(e) {
    return this[$u].hasOwnProperty(Le(e));
  }
  forEach(e, a) {
    for (const i in this[$u])
      this[$u].hasOwnProperty(i) && e.call(a, this[$u][i], i, this);
  }
};
function J4(u) {
  const e = [];
  return u.forEach((a, i) => {
    const r = a.includes(",") ? a.split(",").map((n) => n.trim()) : a;
    e.push([i, r]);
  }), e;
}
function j5(u) {
  return J4(u).map(([i, r]) => {
    const n = [].concat(r);
    return `${i}: ${n.join(", ")}`;
  }).join(`\r
`);
}
var P5 = ["user-agent"];
function T5(u) {
  const e = {};
  return u.forEach((a, i) => {
    const r = !P5.includes(i.toLowerCase()) && a.includes(",");
    e[i] = r ? a.split(",").map((n) => n.trim()) : a;
  }), e;
}
function w5(u) {
  return u.trim().split(/[\r\n]+/).reduce((a, i) => {
    if (i.trim() === "")
      return a;
    const r = i.split(": "), n = r.shift(), o = r.join(": ");
    return a.append(n, o), a;
  }, new Ea());
}
function N5(u) {
  const e = new Ea();
  return u.forEach(([a, i]) => {
    [].concat(i).forEach((n) => {
      e.append(a, n);
    });
  }), e;
}
function Hn(u, e, a) {
  return Object.keys(u).reduce((i, r) => e(i, r, u[r]), a);
}
function L5(u) {
  return Hn(
    u,
    (e, a, i) => ([].concat(i).filter(Boolean).forEach((n) => {
      e.append(a, n);
    }), e),
    new Ea()
  );
}
function K5(u) {
  return u.map(([e, a]) => [e, [].concat(a).join(", ")]);
}
function R5(u) {
  return Hn(
    u,
    (e, a, i) => (e[a] = [].concat(i).join(", "), e),
    {}
  );
}
var _n = Object.defineProperty, H5 = Object.getOwnPropertyDescriptor, _5 = Object.getOwnPropertyNames, G5 = Object.prototype.hasOwnProperty, V5 = (u, e) => {
  for (var a in e)
    _n(u, a, { get: e[a], enumerable: !0 });
}, I5 = (u, e, a, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let r of _5(e))
      !G5.call(u, r) && r !== a && _n(u, r, { get: () => e[r], enumerable: !(i = H5(e, r)) || i.enumerable });
  return u;
}, O5 = (u) => I5(_n({}, "__esModule", { value: !0 }), u), $4 = {};
V5($4, {
  InvariantError: () => q4,
  format: () => li,
  invariant: () => W4
});
var Da = O5($4), J5 = /(%?)(%([sdjo]))/g;
function $5(u, e) {
  switch (e) {
    case "s":
      return u;
    case "d":
    case "i":
      return Number(u);
    case "j":
      return JSON.stringify(u);
    case "o": {
      if (typeof u == "string")
        return u;
      const a = JSON.stringify(u);
      return a === "{}" || a === "[]" || /^\[object .+?\]$/.test(a) ? u : a;
    }
  }
}
function li(u, ...e) {
  if (e.length === 0)
    return u;
  let a = 0, i = u.replace(
    J5,
    (r, n, o, t) => {
      const s = e[a], l = $5(s, t);
      return n ? r : (a++, l);
    }
  );
  return a < e.length && (i += ` ${e.slice(a).join(" ")}`), i = i.replace(/%{2,2}/g, "%"), i;
}
var q5 = 2;
function W5(u) {
  if (!u.stack)
    return;
  const e = u.stack.split(`
`);
  e.splice(1, q5), u.stack = e.join(`
`);
}
var q4 = class extends Error {
  constructor(u, ...e) {
    super(u), this.message = u, this.name = "Invariant Violation", this.message = li(u, ...e), W5(this);
  }
}, W4 = (u, e, ...a) => {
  if (!u)
    throw new q4(e, ...a);
};
W4.as = (u, e, a, ...i) => {
  if (!e)
    throw u.prototype.name != null ? new u(li(a, i)) : u(li(a, i));
};
var Uu = {}, Gn = {}, jr = {}, Pr = {}, Tr, zt;
function U4() {
  return zt || (zt = 1, Tr = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, a = Symbol("test"), i = Object(a);
    if (typeof a == "string" || Object.prototype.toString.call(a) !== "[object Symbol]" || Object.prototype.toString.call(i) !== "[object Symbol]")
      return !1;
    var r = 42;
    e[a] = r;
    for (a in e)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
      return !1;
    var n = Object.getOwnPropertySymbols(e);
    if (n.length !== 1 || n[0] !== a || !Object.prototype.propertyIsEnumerable.call(e, a))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var o = Object.getOwnPropertyDescriptor(e, a);
      if (o.value !== r || o.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Tr;
}
var wr, St;
function Ni() {
  if (St)
    return wr;
  St = 1;
  var u = U4();
  return wr = function() {
    return u() && !!Symbol.toStringTag;
  }, wr;
}
var Nr, Mt;
function U5() {
  if (Mt)
    return Nr;
  Mt = 1;
  var u = typeof Symbol < "u" && Symbol, e = U4();
  return Nr = function() {
    return typeof u != "function" || typeof Symbol != "function" || typeof u("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : e();
  }, Nr;
}
var Lr, jt;
function Z5() {
  if (jt)
    return Lr;
  jt = 1;
  var u = "Function.prototype.bind called on incompatible ", e = Array.prototype.slice, a = Object.prototype.toString, i = "[object Function]";
  return Lr = function(n) {
    var o = this;
    if (typeof o != "function" || a.call(o) !== i)
      throw new TypeError(u + o);
    for (var t = e.call(arguments, 1), s, l = function() {
      if (this instanceof s) {
        var d = o.apply(
          this,
          t.concat(e.call(arguments))
        );
        return Object(d) === d ? d : this;
      } else
        return o.apply(
          n,
          t.concat(e.call(arguments))
        );
    }, E = Math.max(0, o.length - t.length), D = [], x = 0; x < E; x++)
      D.push("$" + x);
    if (s = Function("binder", "return function (" + D.join(",") + "){ return binder.apply(this,arguments); }")(l), o.prototype) {
      var c = function() {
      };
      c.prototype = o.prototype, s.prototype = new c(), c.prototype = null;
    }
    return s;
  }, Lr;
}
var Kr, Pt;
function Vn() {
  if (Pt)
    return Kr;
  Pt = 1;
  var u = Z5();
  return Kr = Function.prototype.bind || u, Kr;
}
var Rr, Tt;
function Y5() {
  if (Tt)
    return Rr;
  Tt = 1;
  var u = Vn();
  return Rr = u.call(Function.call, Object.prototype.hasOwnProperty), Rr;
}
var Hr, wt;
function In() {
  if (wt)
    return Hr;
  wt = 1;
  var u, e = SyntaxError, a = Function, i = TypeError, r = function(H) {
    try {
      return a('"use strict"; return (' + H + ").constructor;")();
    } catch {
    }
  }, n = Object.getOwnPropertyDescriptor;
  if (n)
    try {
      n({}, "");
    } catch {
      n = null;
    }
  var o = function() {
    throw new i();
  }, t = n ? function() {
    try {
      return arguments.callee, o;
    } catch {
      try {
        return n(arguments, "callee").get;
      } catch {
        return o;
      }
    }
  }() : o, s = U5()(), l = Object.getPrototypeOf || function(H) {
    return H.__proto__;
  }, E = {}, D = typeof Uint8Array > "u" ? u : l(Uint8Array), x = {
    "%AggregateError%": typeof AggregateError > "u" ? u : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? u : ArrayBuffer,
    "%ArrayIteratorPrototype%": s ? l([][Symbol.iterator]()) : u,
    "%AsyncFromSyncIteratorPrototype%": u,
    "%AsyncFunction%": E,
    "%AsyncGenerator%": E,
    "%AsyncGeneratorFunction%": E,
    "%AsyncIteratorPrototype%": E,
    "%Atomics%": typeof Atomics > "u" ? u : Atomics,
    "%BigInt%": typeof BigInt > "u" ? u : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? u : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? u : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? u : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array > "u" ? u : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? u : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? u : FinalizationRegistry,
    "%Function%": a,
    "%GeneratorFunction%": E,
    "%Int8Array%": typeof Int8Array > "u" ? u : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? u : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? u : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": s ? l(l([][Symbol.iterator]())) : u,
    "%JSON%": typeof JSON == "object" ? JSON : u,
    "%Map%": typeof Map > "u" ? u : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !s ? u : l((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? u : Promise,
    "%Proxy%": typeof Proxy > "u" ? u : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect > "u" ? u : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? u : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !s ? u : l((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? u : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": s ? l(""[Symbol.iterator]()) : u,
    "%Symbol%": s ? Symbol : u,
    "%SyntaxError%": e,
    "%ThrowTypeError%": t,
    "%TypedArray%": D,
    "%TypeError%": i,
    "%Uint8Array%": typeof Uint8Array > "u" ? u : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? u : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? u : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? u : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap > "u" ? u : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? u : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? u : WeakSet
  };
  try {
    null.error;
  } catch (H) {
    var c = l(l(H));
    x["%Error.prototype%"] = c;
  }
  var d = function H(J) {
    var ru;
    if (J === "%AsyncFunction%")
      ru = r("async function () {}");
    else if (J === "%GeneratorFunction%")
      ru = r("function* () {}");
    else if (J === "%AsyncGeneratorFunction%")
      ru = r("async function* () {}");
    else if (J === "%AsyncGenerator%") {
      var Y = H("%AsyncGeneratorFunction%");
      Y && (ru = Y.prototype);
    } else if (J === "%AsyncIteratorPrototype%") {
      var eu = H("%AsyncGenerator%");
      eu && (ru = l(eu.prototype));
    }
    return x[J] = ru, ru;
  }, F = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, k = Vn(), g = Y5(), M = k.call(Function.call, Array.prototype.concat), A = k.call(Function.apply, Array.prototype.splice), v = k.call(Function.call, String.prototype.replace), T = k.call(Function.call, String.prototype.slice), R = k.call(Function.call, RegExp.prototype.exec), O = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, V = /\\(\\)?/g, b = function(J) {
    var ru = T(J, 0, 1), Y = T(J, -1);
    if (ru === "%" && Y !== "%")
      throw new e("invalid intrinsic syntax, expected closing `%`");
    if (Y === "%" && ru !== "%")
      throw new e("invalid intrinsic syntax, expected opening `%`");
    var eu = [];
    return v(J, O, function($, tu, su, gu) {
      eu[eu.length] = su ? v(gu, V, "$1") : tu || $;
    }), eu;
  }, P = function(J, ru) {
    var Y = J, eu;
    if (g(F, Y) && (eu = F[Y], Y = "%" + eu[0] + "%"), g(x, Y)) {
      var $ = x[Y];
      if ($ === E && ($ = d(Y)), typeof $ > "u" && !ru)
        throw new i("intrinsic " + J + " exists, but is not available. Please file an issue!");
      return {
        alias: eu,
        name: Y,
        value: $
      };
    }
    throw new e("intrinsic " + J + " does not exist!");
  };
  return Hr = function(J, ru) {
    if (typeof J != "string" || J.length === 0)
      throw new i("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof ru != "boolean")
      throw new i('"allowMissing" argument must be a boolean');
    if (R(/^%?[^%]*%?$/, J) === null)
      throw new e("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var Y = b(J), eu = Y.length > 0 ? Y[0] : "", $ = P("%" + eu + "%", ru), tu = $.name, su = $.value, gu = !1, Ru = $.alias;
    Ru && (eu = Ru[0], A(Y, M([0, 1], Ru)));
    for (var u0 = 1, m = !0; u0 < Y.length; u0 += 1) {
      var h = Y[u0], C = T(h, 0, 1), S = T(h, -1);
      if ((C === '"' || C === "'" || C === "`" || S === '"' || S === "'" || S === "`") && C !== S)
        throw new e("property names with quotes must have matching quotes");
      if ((h === "constructor" || !m) && (gu = !0), eu += "." + h, tu = "%" + eu + "%", g(x, tu))
        su = x[tu];
      else if (su != null) {
        if (!(h in su)) {
          if (!ru)
            throw new i("base intrinsic for " + J + " exists, but the property is not available.");
          return;
        }
        if (n && u0 + 1 >= Y.length) {
          var N = n(su, h);
          m = !!N, m && "get" in N && !("originalValue" in N.get) ? su = N.get : su = su[h];
        } else
          m = g(su, h), su = su[h];
        m && !gu && (x[tu] = su);
      }
    }
    return su;
  }, Hr;
}
var Ei = {}, Q5 = {
  get exports() {
    return Ei;
  },
  set exports(u) {
    Ei = u;
  }
}, Nt;
function X5() {
  return Nt || (Nt = 1, function(u) {
    var e = Vn(), a = In(), i = a("%Function.prototype.apply%"), r = a("%Function.prototype.call%"), n = a("%Reflect.apply%", !0) || e.call(r, i), o = a("%Object.getOwnPropertyDescriptor%", !0), t = a("%Object.defineProperty%", !0), s = a("%Math.max%");
    if (t)
      try {
        t({}, "a", { value: 1 });
      } catch {
        t = null;
      }
    u.exports = function(D) {
      var x = n(e, r, arguments);
      if (o && t) {
        var c = o(x, "length");
        c.configurable && t(
          x,
          "length",
          { value: 1 + s(0, D.length - (arguments.length - 1)) }
        );
      }
      return x;
    };
    var l = function() {
      return n(e, i, arguments);
    };
    t ? t(u.exports, "apply", { value: l }) : u.exports.apply = l;
  }(Q5)), Ei;
}
var _r, Lt;
function On() {
  if (Lt)
    return _r;
  Lt = 1;
  var u = In(), e = X5(), a = e(u("String.prototype.indexOf"));
  return _r = function(r, n) {
    var o = u(r, !!n);
    return typeof o == "function" && a(r, ".prototype.") > -1 ? e(o) : o;
  }, _r;
}
var Gr, Kt;
function ux() {
  if (Kt)
    return Gr;
  Kt = 1;
  var u = Ni()(), e = On(), a = e("Object.prototype.toString"), i = function(t) {
    return u && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : a(t) === "[object Arguments]";
  }, r = function(t) {
    return i(t) ? !0 : t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && a(t) !== "[object Array]" && a(t.callee) === "[object Function]";
  }, n = function() {
    return i(arguments);
  }();
  return i.isLegacyArguments = r, Gr = n ? i : r, Gr;
}
var Vr, Rt;
function ex() {
  if (Rt)
    return Vr;
  Rt = 1;
  var u = Object.prototype.toString, e = Function.prototype.toString, a = /^\s*(?:function)?\*/, i = Ni()(), r = Object.getPrototypeOf, n = function() {
    if (!i)
      return !1;
    try {
      return Function("return function*() {}")();
    } catch {
    }
  }, o;
  return Vr = function(s) {
    if (typeof s != "function")
      return !1;
    if (a.test(e.call(s)))
      return !0;
    if (!i) {
      var l = u.call(s);
      return l === "[object GeneratorFunction]";
    }
    if (!r)
      return !1;
    if (typeof o > "u") {
      var E = n();
      o = E ? r(E) : !1;
    }
    return r(s) === o;
  }, Vr;
}
var Ir, Ht;
function ax() {
  if (Ht)
    return Ir;
  Ht = 1;
  var u = Function.prototype.toString, e = typeof Reflect == "object" && Reflect !== null && Reflect.apply, a, i;
  if (typeof e == "function" && typeof Object.defineProperty == "function")
    try {
      a = Object.defineProperty({}, "length", {
        get: function() {
          throw i;
        }
      }), i = {}, e(function() {
        throw 42;
      }, null, a);
    } catch (M) {
      M !== i && (e = null);
    }
  else
    e = null;
  var r = /^\s*class\b/, n = function(A) {
    try {
      var v = u.call(A);
      return r.test(v);
    } catch {
      return !1;
    }
  }, o = function(A) {
    try {
      return n(A) ? !1 : (u.call(A), !0);
    } catch {
      return !1;
    }
  }, t = Object.prototype.toString, s = "[object Object]", l = "[object Function]", E = "[object GeneratorFunction]", D = "[object HTMLAllCollection]", x = "[object HTML document.all class]", c = "[object HTMLCollection]", d = typeof Symbol == "function" && !!Symbol.toStringTag, F = !(0 in [,]), k = function() {
    return !1;
  };
  if (typeof document == "object") {
    var g = document.all;
    t.call(g) === t.call(document.all) && (k = function(A) {
      if ((F || !A) && (typeof A > "u" || typeof A == "object"))
        try {
          var v = t.call(A);
          return (v === D || v === x || v === c || v === s) && A("") == null;
        } catch {
        }
      return !1;
    });
  }
  return Ir = e ? function(A) {
    if (k(A))
      return !0;
    if (!A || typeof A != "function" && typeof A != "object")
      return !1;
    try {
      e(A, null, a);
    } catch (v) {
      if (v !== i)
        return !1;
    }
    return !n(A) && o(A);
  } : function(A) {
    if (k(A))
      return !0;
    if (!A || typeof A != "function" && typeof A != "object")
      return !1;
    if (d)
      return o(A);
    if (n(A))
      return !1;
    var v = t.call(A);
    return v !== l && v !== E && !/^\[object HTML/.test(v) ? !1 : o(A);
  }, Ir;
}
var Or, _t;
function Z4() {
  if (_t)
    return Or;
  _t = 1;
  var u = ax(), e = Object.prototype.toString, a = Object.prototype.hasOwnProperty, i = function(s, l, E) {
    for (var D = 0, x = s.length; D < x; D++)
      a.call(s, D) && (E == null ? l(s[D], D, s) : l.call(E, s[D], D, s));
  }, r = function(s, l, E) {
    for (var D = 0, x = s.length; D < x; D++)
      E == null ? l(s.charAt(D), D, s) : l.call(E, s.charAt(D), D, s);
  }, n = function(s, l, E) {
    for (var D in s)
      a.call(s, D) && (E == null ? l(s[D], D, s) : l.call(E, s[D], D, s));
  }, o = function(s, l, E) {
    if (!u(l))
      throw new TypeError("iterator must be a function");
    var D;
    arguments.length >= 3 && (D = E), e.call(s) === "[object Array]" ? i(s, l, D) : typeof s == "string" ? r(s, l, D) : n(s, l, D);
  };
  return Or = o, Or;
}
var Jr, Gt;
function Y4() {
  if (Gt)
    return Jr;
  Gt = 1;
  var u = [
    "BigInt64Array",
    "BigUint64Array",
    "Float32Array",
    "Float64Array",
    "Int16Array",
    "Int32Array",
    "Int8Array",
    "Uint16Array",
    "Uint32Array",
    "Uint8Array",
    "Uint8ClampedArray"
  ], e = typeof globalThis > "u" ? y : globalThis;
  return Jr = function() {
    for (var i = [], r = 0; r < u.length; r++)
      typeof e[u[r]] == "function" && (i[i.length] = u[r]);
    return i;
  }, Jr;
}
var $r, Vt;
function Q4() {
  if (Vt)
    return $r;
  Vt = 1;
  var u = In(), e = u("%Object.getOwnPropertyDescriptor%", !0);
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return $r = e, $r;
}
var qr, It;
function X4() {
  if (It)
    return qr;
  It = 1;
  var u = Z4(), e = Y4(), a = On(), i = a("Object.prototype.toString"), r = Ni()(), n = Q4(), o = typeof globalThis > "u" ? y : globalThis, t = e(), s = a("Array.prototype.indexOf", !0) || function(d, F) {
    for (var k = 0; k < d.length; k += 1)
      if (d[k] === F)
        return k;
    return -1;
  }, l = a("String.prototype.slice"), E = {}, D = Object.getPrototypeOf;
  r && n && D && u(t, function(c) {
    var d = new o[c]();
    if (Symbol.toStringTag in d) {
      var F = D(d), k = n(F, Symbol.toStringTag);
      if (!k) {
        var g = D(F);
        k = n(g, Symbol.toStringTag);
      }
      E[c] = k.get;
    }
  });
  var x = function(d) {
    var F = !1;
    return u(E, function(k, g) {
      if (!F)
        try {
          F = k.call(d) === g;
        } catch {
        }
    }), F;
  };
  return qr = function(d) {
    if (!d || typeof d != "object")
      return !1;
    if (!r || !(Symbol.toStringTag in d)) {
      var F = l(i(d), 8, -1);
      return s(t, F) > -1;
    }
    return n ? x(d) : !1;
  }, qr;
}
var Wr, Ot;
function ix() {
  if (Ot)
    return Wr;
  Ot = 1;
  var u = Z4(), e = Y4(), a = On(), i = Q4(), r = a("Object.prototype.toString"), n = Ni()(), o = typeof globalThis > "u" ? y : globalThis, t = e(), s = a("String.prototype.slice"), l = {}, E = Object.getPrototypeOf;
  n && i && E && u(t, function(c) {
    if (typeof o[c] == "function") {
      var d = new o[c]();
      if (Symbol.toStringTag in d) {
        var F = E(d), k = i(F, Symbol.toStringTag);
        if (!k) {
          var g = E(F);
          k = i(g, Symbol.toStringTag);
        }
        l[c] = k.get;
      }
    }
  });
  var D = function(d) {
    var F = !1;
    return u(l, function(k, g) {
      if (!F)
        try {
          var M = k.call(d);
          M === g && (F = M);
        } catch {
        }
    }), F;
  }, x = X4();
  return Wr = function(d) {
    return x(d) ? !n || !(Symbol.toStringTag in d) ? s(r(d), 8, -1) : D(d) : !1;
  }, Wr;
}
var Jt;
function rx() {
  return Jt || (Jt = 1, function(u) {
    var e = ux(), a = ex(), i = ix(), r = X4();
    function n(j) {
      return j.call.bind(j);
    }
    var o = typeof BigInt < "u", t = typeof Symbol < "u", s = n(Object.prototype.toString), l = n(Number.prototype.valueOf), E = n(String.prototype.valueOf), D = n(Boolean.prototype.valueOf);
    if (o)
      var x = n(BigInt.prototype.valueOf);
    if (t)
      var c = n(Symbol.prototype.valueOf);
    function d(j, SD) {
      if (typeof j != "object")
        return !1;
      try {
        return SD(j), !0;
      } catch {
        return !1;
      }
    }
    u.isArgumentsObject = e, u.isGeneratorFunction = a, u.isTypedArray = r;
    function F(j) {
      return typeof Promise < "u" && j instanceof Promise || j !== null && typeof j == "object" && typeof j.then == "function" && typeof j.catch == "function";
    }
    u.isPromise = F;
    function k(j) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(j) : r(j) || h(j);
    }
    u.isArrayBufferView = k;
    function g(j) {
      return i(j) === "Uint8Array";
    }
    u.isUint8Array = g;
    function M(j) {
      return i(j) === "Uint8ClampedArray";
    }
    u.isUint8ClampedArray = M;
    function A(j) {
      return i(j) === "Uint16Array";
    }
    u.isUint16Array = A;
    function v(j) {
      return i(j) === "Uint32Array";
    }
    u.isUint32Array = v;
    function T(j) {
      return i(j) === "Int8Array";
    }
    u.isInt8Array = T;
    function R(j) {
      return i(j) === "Int16Array";
    }
    u.isInt16Array = R;
    function O(j) {
      return i(j) === "Int32Array";
    }
    u.isInt32Array = O;
    function V(j) {
      return i(j) === "Float32Array";
    }
    u.isFloat32Array = V;
    function b(j) {
      return i(j) === "Float64Array";
    }
    u.isFloat64Array = b;
    function P(j) {
      return i(j) === "BigInt64Array";
    }
    u.isBigInt64Array = P;
    function H(j) {
      return i(j) === "BigUint64Array";
    }
    u.isBigUint64Array = H;
    function J(j) {
      return s(j) === "[object Map]";
    }
    J.working = typeof Map < "u" && J(/* @__PURE__ */ new Map());
    function ru(j) {
      return typeof Map > "u" ? !1 : J.working ? J(j) : j instanceof Map;
    }
    u.isMap = ru;
    function Y(j) {
      return s(j) === "[object Set]";
    }
    Y.working = typeof Set < "u" && Y(/* @__PURE__ */ new Set());
    function eu(j) {
      return typeof Set > "u" ? !1 : Y.working ? Y(j) : j instanceof Set;
    }
    u.isSet = eu;
    function $(j) {
      return s(j) === "[object WeakMap]";
    }
    $.working = typeof WeakMap < "u" && $(/* @__PURE__ */ new WeakMap());
    function tu(j) {
      return typeof WeakMap > "u" ? !1 : $.working ? $(j) : j instanceof WeakMap;
    }
    u.isWeakMap = tu;
    function su(j) {
      return s(j) === "[object WeakSet]";
    }
    su.working = typeof WeakSet < "u" && su(/* @__PURE__ */ new WeakSet());
    function gu(j) {
      return su(j);
    }
    u.isWeakSet = gu;
    function Ru(j) {
      return s(j) === "[object ArrayBuffer]";
    }
    Ru.working = typeof ArrayBuffer < "u" && Ru(new ArrayBuffer());
    function u0(j) {
      return typeof ArrayBuffer > "u" ? !1 : Ru.working ? Ru(j) : j instanceof ArrayBuffer;
    }
    u.isArrayBuffer = u0;
    function m(j) {
      return s(j) === "[object DataView]";
    }
    m.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && m(new DataView(new ArrayBuffer(1), 0, 1));
    function h(j) {
      return typeof DataView > "u" ? !1 : m.working ? m(j) : j instanceof DataView;
    }
    u.isDataView = h;
    var C = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
    function S(j) {
      return s(j) === "[object SharedArrayBuffer]";
    }
    function N(j) {
      return typeof C > "u" ? !1 : (typeof S.working > "u" && (S.working = S(new C())), S.working ? S(j) : j instanceof C);
    }
    u.isSharedArrayBuffer = N;
    function _(j) {
      return s(j) === "[object AsyncFunction]";
    }
    u.isAsyncFunction = _;
    function L(j) {
      return s(j) === "[object Map Iterator]";
    }
    u.isMapIterator = L;
    function q(j) {
      return s(j) === "[object Set Iterator]";
    }
    u.isSetIterator = q;
    function X(j) {
      return s(j) === "[object Generator]";
    }
    u.isGeneratorObject = X;
    function Bu(j) {
      return s(j) === "[object WebAssembly.Module]";
    }
    u.isWebAssemblyCompiledModule = Bu;
    function Cu(j) {
      return d(j, l);
    }
    u.isNumberObject = Cu;
    function Ka(j) {
      return d(j, E);
    }
    u.isStringObject = Ka;
    function ee(j) {
      return d(j, D);
    }
    u.isBooleanObject = ee;
    function Ra(j) {
      return o && d(j, x);
    }
    u.isBigIntObject = Ra;
    function ct(j) {
      return t && d(j, c);
    }
    u.isSymbolObject = ct;
    function fD(j) {
      return Cu(j) || Ka(j) || ee(j) || Ra(j) || ct(j);
    }
    u.isBoxedPrimitive = fD;
    function zD(j) {
      return typeof Uint8Array < "u" && (u0(j) || N(j));
    }
    u.isAnyArrayBuffer = zD, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(j) {
      Object.defineProperty(u, j, {
        enumerable: !1,
        value: function() {
          throw new Error(j + " is not supported in userland");
        }
      });
    });
  }(Pr)), Pr;
}
var Ur, $t;
function nx() {
  return $t || ($t = 1, Ur = function(e) {
    return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
  }), Ur;
}
var Di = {}, qt = {
  get exports() {
    return Di;
  },
  set exports(u) {
    Di = u;
  }
}, Wt;
function ox() {
  return Wt || (Wt = 1, typeof Object.create == "function" ? qt.exports = function(e, a) {
    a && (e.super_ = a, e.prototype = Object.create(a.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : qt.exports = function(e, a) {
    if (a) {
      e.super_ = a;
      var i = function() {
      };
      i.prototype = a.prototype, e.prototype = new i(), e.prototype.constructor = e;
    }
  }), Di;
}
var Ut;
function us() {
  return Ut || (Ut = 1, function(u) {
    var e = Object.getOwnPropertyDescriptors || function(h) {
      for (var C = Object.keys(h), S = {}, N = 0; N < C.length; N++)
        S[C[N]] = Object.getOwnPropertyDescriptor(h, C[N]);
      return S;
    }, a = /%[sdj%]/g;
    u.format = function(m) {
      if (!T(m)) {
        for (var h = [], C = 0; C < arguments.length; C++)
          h.push(o(arguments[C]));
        return h.join(" ");
      }
      for (var C = 1, S = arguments, N = S.length, _ = String(m).replace(a, function(q) {
        if (q === "%%")
          return "%";
        if (C >= N)
          return q;
        switch (q) {
          case "%s":
            return String(S[C++]);
          case "%d":
            return Number(S[C++]);
          case "%j":
            try {
              return JSON.stringify(S[C++]);
            } catch {
              return "[Circular]";
            }
          default:
            return q;
        }
      }), L = S[C]; C < N; L = S[++C])
        M(L) || !b(L) ? _ += " " + L : _ += " " + o(L);
      return _;
    }, u.deprecate = function(m, h) {
      if (typeof process < "u" && process.noDeprecation === !0)
        return m;
      if (typeof process > "u")
        return function() {
          return u.deprecate(m, h).apply(this, arguments);
        };
      var C = !1;
      function S() {
        if (!C) {
          if (process.throwDeprecation)
            throw new Error(h);
          process.traceDeprecation ? console.trace(h) : console.error(h), C = !0;
        }
        return m.apply(this, arguments);
      }
      return S;
    };
    var i = {}, r = /^$/;
    if (process.env.NODE_DEBUG) {
      var n = process.env.NODE_DEBUG;
      n = n.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), r = new RegExp("^" + n + "$", "i");
    }
    u.debuglog = function(m) {
      if (m = m.toUpperCase(), !i[m])
        if (r.test(m)) {
          var h = process.pid;
          i[m] = function() {
            var C = u.format.apply(u, arguments);
            console.error("%s %d: %s", m, h, C);
          };
        } else
          i[m] = function() {
          };
      return i[m];
    };
    function o(m, h) {
      var C = {
        seen: [],
        stylize: s
      };
      return arguments.length >= 3 && (C.depth = arguments[2]), arguments.length >= 4 && (C.colors = arguments[3]), g(h) ? C.showHidden = h : h && u._extend(C, h), O(C.showHidden) && (C.showHidden = !1), O(C.depth) && (C.depth = 2), O(C.colors) && (C.colors = !1), O(C.customInspect) && (C.customInspect = !0), C.colors && (C.stylize = t), E(C, m, C.depth);
    }
    u.inspect = o, o.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    }, o.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      // "name": intentionally not styling
      regexp: "red"
    };
    function t(m, h) {
      var C = o.styles[h];
      return C ? "\x1B[" + o.colors[C][0] + "m" + m + "\x1B[" + o.colors[C][1] + "m" : m;
    }
    function s(m, h) {
      return m;
    }
    function l(m) {
      var h = {};
      return m.forEach(function(C, S) {
        h[C] = !0;
      }), h;
    }
    function E(m, h, C) {
      if (m.customInspect && h && J(h.inspect) && // Filter out the util module, it's inspect function is special
      h.inspect !== u.inspect && // Also filter out any prototype objects using the circular check.
      !(h.constructor && h.constructor.prototype === h)) {
        var S = h.inspect(C, m);
        return T(S) || (S = E(m, S, C)), S;
      }
      var N = D(m, h);
      if (N)
        return N;
      var _ = Object.keys(h), L = l(_);
      if (m.showHidden && (_ = Object.getOwnPropertyNames(h)), H(h) && (_.indexOf("message") >= 0 || _.indexOf("description") >= 0))
        return x(h);
      if (_.length === 0) {
        if (J(h)) {
          var q = h.name ? ": " + h.name : "";
          return m.stylize("[Function" + q + "]", "special");
        }
        if (V(h))
          return m.stylize(RegExp.prototype.toString.call(h), "regexp");
        if (P(h))
          return m.stylize(Date.prototype.toString.call(h), "date");
        if (H(h))
          return x(h);
      }
      var X = "", Bu = !1, Cu = ["{", "}"];
      if (k(h) && (Bu = !0, Cu = ["[", "]"]), J(h)) {
        var Ka = h.name ? ": " + h.name : "";
        X = " [Function" + Ka + "]";
      }
      if (V(h) && (X = " " + RegExp.prototype.toString.call(h)), P(h) && (X = " " + Date.prototype.toUTCString.call(h)), H(h) && (X = " " + x(h)), _.length === 0 && (!Bu || h.length == 0))
        return Cu[0] + X + Cu[1];
      if (C < 0)
        return V(h) ? m.stylize(RegExp.prototype.toString.call(h), "regexp") : m.stylize("[Object]", "special");
      m.seen.push(h);
      var ee;
      return Bu ? ee = c(m, h, C, L, _) : ee = _.map(function(Ra) {
        return d(m, h, C, L, Ra, Bu);
      }), m.seen.pop(), F(ee, X, Cu);
    }
    function D(m, h) {
      if (O(h))
        return m.stylize("undefined", "undefined");
      if (T(h)) {
        var C = "'" + JSON.stringify(h).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return m.stylize(C, "string");
      }
      if (v(h))
        return m.stylize("" + h, "number");
      if (g(h))
        return m.stylize("" + h, "boolean");
      if (M(h))
        return m.stylize("null", "null");
    }
    function x(m) {
      return "[" + Error.prototype.toString.call(m) + "]";
    }
    function c(m, h, C, S, N) {
      for (var _ = [], L = 0, q = h.length; L < q; ++L)
        su(h, String(L)) ? _.push(d(
          m,
          h,
          C,
          S,
          String(L),
          !0
        )) : _.push("");
      return N.forEach(function(X) {
        X.match(/^\d+$/) || _.push(d(
          m,
          h,
          C,
          S,
          X,
          !0
        ));
      }), _;
    }
    function d(m, h, C, S, N, _) {
      var L, q, X;
      if (X = Object.getOwnPropertyDescriptor(h, N) || { value: h[N] }, X.get ? X.set ? q = m.stylize("[Getter/Setter]", "special") : q = m.stylize("[Getter]", "special") : X.set && (q = m.stylize("[Setter]", "special")), su(S, N) || (L = "[" + N + "]"), q || (m.seen.indexOf(X.value) < 0 ? (M(C) ? q = E(m, X.value, null) : q = E(m, X.value, C - 1), q.indexOf(`
`) > -1 && (_ ? q = q.split(`
`).map(function(Bu) {
        return "  " + Bu;
      }).join(`
`).slice(2) : q = `
` + q.split(`
`).map(function(Bu) {
        return "   " + Bu;
      }).join(`
`))) : q = m.stylize("[Circular]", "special")), O(L)) {
        if (_ && N.match(/^\d+$/))
          return q;
        L = JSON.stringify("" + N), L.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (L = L.slice(1, -1), L = m.stylize(L, "name")) : (L = L.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), L = m.stylize(L, "string"));
      }
      return L + ": " + q;
    }
    function F(m, h, C) {
      var S = m.reduce(function(N, _) {
        return _.indexOf(`
`) >= 0, N + _.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return S > 60 ? C[0] + (h === "" ? "" : h + `
 `) + " " + m.join(`,
  `) + " " + C[1] : C[0] + h + " " + m.join(", ") + " " + C[1];
    }
    u.types = rx();
    function k(m) {
      return Array.isArray(m);
    }
    u.isArray = k;
    function g(m) {
      return typeof m == "boolean";
    }
    u.isBoolean = g;
    function M(m) {
      return m === null;
    }
    u.isNull = M;
    function A(m) {
      return m == null;
    }
    u.isNullOrUndefined = A;
    function v(m) {
      return typeof m == "number";
    }
    u.isNumber = v;
    function T(m) {
      return typeof m == "string";
    }
    u.isString = T;
    function R(m) {
      return typeof m == "symbol";
    }
    u.isSymbol = R;
    function O(m) {
      return m === void 0;
    }
    u.isUndefined = O;
    function V(m) {
      return b(m) && Y(m) === "[object RegExp]";
    }
    u.isRegExp = V, u.types.isRegExp = V;
    function b(m) {
      return typeof m == "object" && m !== null;
    }
    u.isObject = b;
    function P(m) {
      return b(m) && Y(m) === "[object Date]";
    }
    u.isDate = P, u.types.isDate = P;
    function H(m) {
      return b(m) && (Y(m) === "[object Error]" || m instanceof Error);
    }
    u.isError = H, u.types.isNativeError = H;
    function J(m) {
      return typeof m == "function";
    }
    u.isFunction = J;
    function ru(m) {
      return m === null || typeof m == "boolean" || typeof m == "number" || typeof m == "string" || typeof m == "symbol" || // ES6 symbol
      typeof m > "u";
    }
    u.isPrimitive = ru, u.isBuffer = nx();
    function Y(m) {
      return Object.prototype.toString.call(m);
    }
    function eu(m) {
      return m < 10 ? "0" + m.toString(10) : m.toString(10);
    }
    var $ = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function tu() {
      var m = /* @__PURE__ */ new Date(), h = [
        eu(m.getHours()),
        eu(m.getMinutes()),
        eu(m.getSeconds())
      ].join(":");
      return [m.getDate(), $[m.getMonth()], h].join(" ");
    }
    u.log = function() {
      console.log("%s - %s", tu(), u.format.apply(u, arguments));
    }, u.inherits = ox(), u._extend = function(m, h) {
      if (!h || !b(h))
        return m;
      for (var C = Object.keys(h), S = C.length; S--; )
        m[C[S]] = h[C[S]];
      return m;
    };
    function su(m, h) {
      return Object.prototype.hasOwnProperty.call(m, h);
    }
    var gu = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
    u.promisify = function(h) {
      if (typeof h != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (gu && h[gu]) {
        var C = h[gu];
        if (typeof C != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(C, gu, {
          value: C,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), C;
      }
      function C() {
        for (var S, N, _ = new Promise(function(X, Bu) {
          S = X, N = Bu;
        }), L = [], q = 0; q < arguments.length; q++)
          L.push(arguments[q]);
        L.push(function(X, Bu) {
          X ? N(X) : S(Bu);
        });
        try {
          h.apply(this, L);
        } catch (X) {
          N(X);
        }
        return _;
      }
      return Object.setPrototypeOf(C, Object.getPrototypeOf(h)), gu && Object.defineProperty(C, gu, {
        value: C,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Object.defineProperties(
        C,
        e(h)
      );
    }, u.promisify.custom = gu;
    function Ru(m, h) {
      if (!m) {
        var C = new Error("Promise was rejected with a falsy value");
        C.reason = m, m = C;
      }
      return h(m);
    }
    function u0(m) {
      if (typeof m != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function h() {
        for (var C = [], S = 0; S < arguments.length; S++)
          C.push(arguments[S]);
        var N = C.pop();
        if (typeof N != "function")
          throw new TypeError("The last argument must be of type Function");
        var _ = this, L = function() {
          return N.apply(_, arguments);
        };
        m.apply(this, C).then(
          function(q) {
            process.nextTick(L.bind(null, null, q));
          },
          function(q) {
            process.nextTick(Ru.bind(null, q, L));
          }
        );
      }
      return Object.setPrototypeOf(h, Object.getPrototypeOf(m)), Object.defineProperties(
        h,
        e(m)
      ), h;
    }
    u.callbackify = u0;
  }(jr)), jr;
}
Gn.TextEncoder = typeof TextEncoder < "u" ? TextEncoder : us().TextEncoder;
Gn.TextDecoder = typeof TextDecoder < "u" ? TextDecoder : us().TextDecoder;
Object.defineProperty(Uu, "__esModule", { value: !0 });
Uu.getArrayBuffer = as = Uu.decodeBuffer = Uu.encodeBuffer = void 0;
var es = Gn;
function tx(u) {
  var e = new es.TextEncoder(), a = e.encode(u);
  return is(a);
}
Uu.encodeBuffer = tx;
function sx(u, e) {
  var a = new es.TextDecoder(e);
  return a.decode(u);
}
var as = Uu.decodeBuffer = sx;
function is(u) {
  return u.buffer.slice(u.byteOffset, u.byteOffset + u.byteLength);
}
Uu.getArrayBuffer = is;
var Li = {};
Object.defineProperty(Li, "__esModule", { value: !0 });
Li.uuidv4 = void 0;
function lx() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(u) {
    var e = Math.random() * 16 | 0, a = u == "x" ? e : e & 3 | 8;
    return a.toString(16);
  });
}
Li.uuidv4 = lx;
var Zr = y && y.__awaiter || function(u, e, a, i) {
  function r(n) {
    return n instanceof a ? n : new a(function(o) {
      o(n);
    });
  }
  return new (a || (a = Promise))(function(n, o) {
    function t(E) {
      try {
        l(i.next(E));
      } catch (D) {
        o(D);
      }
    }
    function s(E) {
      try {
        l(i.throw(E));
      } catch (D) {
        o(D);
      }
    }
    function l(E) {
      E.done ? n(E.value) : r(E.value).then(t, s);
    }
    l((i = i.apply(u, e || [])).next());
  });
}, Yr = y && y.__generator || function(u, e) {
  var a = { label: 0, sent: function() {
    if (n[0] & 1)
      throw n[1];
    return n[1];
  }, trys: [], ops: [] }, i, r, n, o;
  return o = { next: t(0), throw: t(1), return: t(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function t(l) {
    return function(E) {
      return s([l, E]);
    };
  }
  function s(l) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; a; )
      try {
        if (i = 1, r && (n = l[0] & 2 ? r.return : l[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, l[1])).done)
          return n;
        switch (r = 0, n && (l = [l[0] & 2, n.value]), l[0]) {
          case 0:
          case 1:
            n = l;
            break;
          case 4:
            return a.label++, { value: l[1], done: !1 };
          case 5:
            a.label++, r = l[1], l = [0];
            continue;
          case 7:
            l = a.ops.pop(), a.trys.pop();
            continue;
          default:
            if (n = a.trys, !(n = n.length > 0 && n[n.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              a = 0;
              continue;
            }
            if (l[0] === 3 && (!n || l[1] > n[0] && l[1] < n[3])) {
              a.label = l[1];
              break;
            }
            if (l[0] === 6 && a.label < n[1]) {
              a.label = n[1], n = l;
              break;
            }
            if (n && a.label < n[2]) {
              a.label = n[2], a.ops.push(l);
              break;
            }
            n[2] && a.ops.pop(), a.trys.pop();
            continue;
        }
        l = e.call(u, a);
      } catch (E) {
        l = [6, E], r = 0;
      } finally {
        i = n = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
};
Object.defineProperty(K0, "__esModule", { value: !0 });
K0.IsomorphicRequest = void 0;
var Ex = la, Qr = Da, Zt = Uu, Dx = Li, xx = (
  /** @class */
  function() {
    function u(e, a) {
      a === void 0 && (a = {});
      var i = new ArrayBuffer(0);
      if (this._bodyUsed = !1, e instanceof u) {
        this.id = e.id, this.url = e.url, this.method = e.method, this.headers = e.headers, this.credentials = e.credentials, this._body = e._body || i;
        return;
      }
      this.id = Dx.uuidv4(), this.url = e, this.method = a.method || "GET", this.headers = new Ex.Headers(a.headers), this.credentials = a.credentials || "same-origin", this._body = a.body || i;
    }
    return Object.defineProperty(u.prototype, "bodyUsed", {
      get: function() {
        return this._bodyUsed;
      },
      enumerable: !1,
      configurable: !0
    }), u.prototype.text = function() {
      return Zr(this, void 0, void 0, function() {
        return Yr(this, function(e) {
          return Qr.invariant(!this.bodyUsed, 'Failed to execute "text" on "IsomorphicRequest": body buffer already read'), this._bodyUsed = !0, [2, Zt.decodeBuffer(this._body)];
        });
      });
    }, u.prototype.json = function() {
      return Zr(this, void 0, void 0, function() {
        var e;
        return Yr(this, function(a) {
          return Qr.invariant(!this.bodyUsed, 'Failed to execute "json" on "IsomorphicRequest": body buffer already read'), this._bodyUsed = !0, e = Zt.decodeBuffer(this._body), [2, JSON.parse(e)];
        });
      });
    }, u.prototype.arrayBuffer = function() {
      return Zr(this, void 0, void 0, function() {
        return Yr(this, function(e) {
          return Qr.invariant(!this.bodyUsed, 'Failed to execute "arrayBuffer" on "IsomorphicRequest": body buffer already read'), this._bodyUsed = !0, [2, this._body];
        });
      });
    }, u.prototype.clone = function() {
      return new u(this);
    }, u;
  }()
);
K0.IsomorphicRequest = xx;
var X0 = {}, Ki = {}, cx = y && y.__awaiter || function(u, e, a, i) {
  function r(n) {
    return n instanceof a ? n : new a(function(o) {
      o(n);
    });
  }
  return new (a || (a = Promise))(function(n, o) {
    function t(E) {
      try {
        l(i.next(E));
      } catch (D) {
        o(D);
      }
    }
    function s(E) {
      try {
        l(i.throw(E));
      } catch (D) {
        o(D);
      }
    }
    function l(E) {
      E.done ? n(E.value) : r(E.value).then(t, s);
    }
    l((i = i.apply(u, e || [])).next());
  });
}, dx = y && y.__generator || function(u, e) {
  var a = { label: 0, sent: function() {
    if (n[0] & 1)
      throw n[1];
    return n[1];
  }, trys: [], ops: [] }, i, r, n, o;
  return o = { next: t(0), throw: t(1), return: t(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function t(l) {
    return function(E) {
      return s([l, E]);
    };
  }
  function s(l) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; a; )
      try {
        if (i = 1, r && (n = l[0] & 2 ? r.return : l[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, l[1])).done)
          return n;
        switch (r = 0, n && (l = [l[0] & 2, n.value]), l[0]) {
          case 0:
          case 1:
            n = l;
            break;
          case 4:
            return a.label++, { value: l[1], done: !1 };
          case 5:
            a.label++, r = l[1], l = [0];
            continue;
          case 7:
            l = a.ops.pop(), a.trys.pop();
            continue;
          default:
            if (n = a.trys, !(n = n.length > 0 && n[n.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              a = 0;
              continue;
            }
            if (l[0] === 3 && (!n || l[1] > n[0] && l[1] < n[3])) {
              a.label = l[1];
              break;
            }
            if (l[0] === 6 && a.label < n[1]) {
              a.label = n[1], n = l;
              break;
            }
            if (n && a.label < n[2]) {
              a.label = n[2], a.ops.push(l);
              break;
            }
            n[2] && a.ops.pop(), a.trys.pop();
            continue;
        }
        l = e.call(u, a);
      } catch (E) {
        l = [6, E], r = 0;
      } finally {
        i = n = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
};
Object.defineProperty(Ki, "__esModule", { value: !0 });
Ki.createLazyCallback = void 0;
function mx(u) {
  var e = this;
  u === void 0 && (u = {});
  var a = 0, i, r, n = new Promise(function(t) {
    r = t;
  }).finally(function() {
    clearTimeout(i);
  }), o = function() {
    for (var t, s = [], l = 0; l < arguments.length; l++)
      s[l] = arguments[l];
    u.maxCalls && a >= u.maxCalls && ((t = u.maxCallsCallback) === null || t === void 0 || t.call(u)), r(s), a++;
  };
  return o.invoked = function() {
    return cx(e, void 0, void 0, function() {
      return dx(this, function(t) {
        return i = setTimeout(function() {
          r([]);
        }, 0), [2, n];
      });
    });
  }, o;
}
Ki.createLazyCallback = mx;
var Fx = y && y.__extends || function() {
  var u = function(e, a) {
    return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
      i.__proto__ = r;
    } || function(i, r) {
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
    }, u(e, a);
  };
  return function(e, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    u(e, a);
    function i() {
      this.constructor = e;
    }
    e.prototype = a === null ? Object.create(a) : (i.prototype = a.prototype, new i());
  };
}();
Object.defineProperty(X0, "__esModule", { value: !0 });
X0.InteractiveIsomorphicRequest = void 0;
var kx = Da, px = K0, hx = Ki, gx = (
  /** @class */
  function(u) {
    Fx(e, u);
    function e(a) {
      var i = u.call(this, a) || this;
      return i.respondWith = hx.createLazyCallback({
        maxCalls: 1,
        maxCallsCallback: function() {
          kx.invariant(!1, 'Failed to respond to "%s %s" request: the "request" event has already been responded to.', i.method, i.url.href);
        }
      }), i;
    }
    return e;
  }(px.IsomorphicRequest)
);
X0.InteractiveIsomorphicRequest = gx;
var xa = {};
Object.defineProperty(xa, "__esModule", { value: !0 });
var rs = xa.getCleanUrl = void 0;
function Cx(u, e) {
  return e === void 0 && (e = !0), [e && u.origin, u.pathname].filter(Boolean).join("");
}
rs = xa.getCleanUrl = Cx;
(function(u) {
  var e = y && y.__createBinding || (Object.create ? function(n, o, t, s) {
    s === void 0 && (s = t), Object.defineProperty(n, s, { enumerable: !0, get: function() {
      return o[t];
    } });
  } : function(n, o, t, s) {
    s === void 0 && (s = t), n[s] = o[t];
  }), a = y && y.__exportStar || function(n, o) {
    for (var t in n)
      t !== "default" && !Object.prototype.hasOwnProperty.call(o, t) && e(o, n, t);
  };
  Object.defineProperty(u, "__esModule", { value: !0 }), u.decodeBuffer = u.encodeBuffer = u.getCleanUrl = void 0, a(Q0, u), a(fe, u), a(wi, u), a(K0, u), a(X0, u);
  var i = xa;
  Object.defineProperty(u, "getCleanUrl", { enumerable: !0, get: function() {
    return i.getCleanUrl;
  } });
  var r = Uu;
  Object.defineProperty(u, "encodeBuffer", { enumerable: !0, get: function() {
    return r.encodeBuffer;
  } }), Object.defineProperty(u, "decodeBuffer", { enumerable: !0, get: function() {
    return r.decodeBuffer;
  } });
})(F0);
var xi = {}, Ri = {}, ca = {};
Object.defineProperty(ca, "__esModule", { value: !0 });
ca.MemoryLeakError = void 0;
class vx extends Error {
  constructor(e, a, i) {
    super(`Possible EventEmitter memory leak detected. ${i} ${a.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`), this.emitter = e, this.type = a, this.count = i, this.name = "MaxListenersExceededWarning";
  }
}
ca.MemoryLeakError = vx;
Object.defineProperty(Ri, "__esModule", { value: !0 });
Ri.Emitter = void 0;
const bx = ca;
class Hi {
  constructor() {
    this.events = /* @__PURE__ */ new Map(), this.maxListeners = Hi.defaultMaxListeners, this.hasWarnedAboutPotentialMemoryLeak = !1;
  }
  static listenerCount(e, a) {
    return e.listenerCount(a);
  }
  _emitInternalEvent(e, a, i) {
    this.emit(
      e,
      a,
      i
    );
  }
  _getListeners(e) {
    return this.events.get(e) || [];
  }
  _removeListener(e, a) {
    const i = e.indexOf(a);
    return i > -1 && e.splice(i, 1), [];
  }
  _wrapOnceListener(e, a) {
    const i = (...r) => {
      this.removeListener(e, i), a.apply(this, r);
    };
    return i;
  }
  setMaxListeners(e) {
    return this.maxListeners = e, this;
  }
  /**
   * Returns the current max listener value for the `Emitter` which is
   * either set by `emitter.setMaxListeners(n)` or defaults to
   * `Emitter.defaultMaxListeners`.
   */
  getMaxListeners() {
    return this.maxListeners;
  }
  /**
   * Returns an array listing the events for which the emitter has registered listeners.
   * The values in the array will be strings or Symbols.
   */
  eventNames() {
    return Array.from(this.events.keys());
  }
  /**
   * Synchronously calls each of the listeners registered for the event named `eventName`,
   * in the order they were registered, passing the supplied arguments to each.
   * Returns `true` if the event has listeners, `false` otherwise.
   *
   * @example
   * const emitter = new Emitter<{ hello: [string] }>()
   * emitter.emit('hello', 'John')
   */
  emit(e, ...a) {
    const i = this._getListeners(e);
    return i.forEach((r) => {
      r.apply(this, a);
    }), i.length > 0;
  }
  addListener(e, a) {
    this._emitInternalEvent("newListener", e, a);
    const i = this._getListeners(e).concat(a);
    if (this.events.set(e, i), this.maxListeners > 0 && this.listenerCount(e) > this.maxListeners && !this.hasWarnedAboutPotentialMemoryLeak) {
      this.hasWarnedAboutPotentialMemoryLeak = !0;
      const r = new bx.MemoryLeakError(this, e, this.listenerCount(e));
      console.warn(r);
    }
    return this;
  }
  on(e, a) {
    return this.addListener(e, a);
  }
  once(e, a) {
    return this.addListener(e, this._wrapOnceListener(e, a));
  }
  prependListener(e, a) {
    const i = this._getListeners(e);
    if (i.length > 0) {
      const r = [a].concat(i);
      this.events.set(e, r);
    } else
      this.events.set(e, i.concat(a));
    return this;
  }
  prependOnceListener(e, a) {
    return this.prependListener(e, this._wrapOnceListener(e, a));
  }
  removeListener(e, a) {
    const i = this._getListeners(e);
    return i.length > 0 && (this._removeListener(i, a), this.events.set(e, i), this._emitInternalEvent("removeListener", e, a)), this;
  }
  /**
   * Alias for `emitter.removeListener()`.
   *
   * @example
   * emitter.off('hello', listener)
   */
  off(e, a) {
    return this.removeListener(e, a);
  }
  removeAllListeners(e) {
    return e ? this.events.delete(e) : this.events.clear(), this;
  }
  /**
   * Returns a copy of the array of listeners for the event named `eventName`.
   */
  listeners(e) {
    return Array.from(this._getListeners(e));
  }
  /**
   * Returns the number of listeners listening to the event named `eventName`.
   */
  listenerCount(e) {
    return this._getListeners(e).length;
  }
  rawListeners(e) {
    return this.listeners(e);
  }
}
Ri.Emitter = Hi;
Hi.defaultMaxListeners = 10;
(function(u) {
  var e = y && y.__createBinding || (Object.create ? function(i, r, n, o) {
    o === void 0 && (o = n);
    var t = Object.getOwnPropertyDescriptor(r, n);
    (!t || ("get" in t ? !r.__esModule : t.writable || t.configurable)) && (t = { enumerable: !0, get: function() {
      return r[n];
    } }), Object.defineProperty(i, o, t);
  } : function(i, r, n, o) {
    o === void 0 && (o = n), i[o] = r[n];
  }), a = y && y.__exportStar || function(i, r) {
    for (var n in i)
      n !== "default" && !Object.prototype.hasOwnProperty.call(r, n) && e(r, i, n);
  };
  Object.defineProperty(u, "__esModule", { value: !0 }), a(Ri, u), a(ca, u);
})(xi);
var da = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var ns = da.parse = fx, Ax = da.serialize = zx, Bx = decodeURIComponent, yx = encodeURIComponent, _a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function fx(u, e) {
  if (typeof u != "string")
    throw new TypeError("argument str must be a string");
  for (var a = {}, i = e || {}, r = u.split(";"), n = i.decode || Bx, o = 0; o < r.length; o++) {
    var t = r[o], s = t.indexOf("=");
    if (!(s < 0)) {
      var l = t.substring(0, s).trim();
      if (a[l] == null) {
        var E = t.substring(s + 1, t.length).trim();
        E[0] === '"' && (E = E.slice(1, -1)), a[l] = Sx(E, n);
      }
    }
  }
  return a;
}
function zx(u, e, a) {
  var i = a || {}, r = i.encode || yx;
  if (typeof r != "function")
    throw new TypeError("option encode is invalid");
  if (!_a.test(u))
    throw new TypeError("argument name is invalid");
  var n = r(e);
  if (n && !_a.test(n))
    throw new TypeError("argument val is invalid");
  var o = u + "=" + n;
  if (i.maxAge != null) {
    var t = i.maxAge - 0;
    if (isNaN(t) || !isFinite(t))
      throw new TypeError("option maxAge is invalid");
    o += "; Max-Age=" + Math.floor(t);
  }
  if (i.domain) {
    if (!_a.test(i.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=" + i.domain;
  }
  if (i.path) {
    if (!_a.test(i.path))
      throw new TypeError("option path is invalid");
    o += "; Path=" + i.path;
  }
  if (i.expires) {
    if (typeof i.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    o += "; Expires=" + i.expires.toUTCString();
  }
  if (i.httpOnly && (o += "; HttpOnly"), i.secure && (o += "; Secure"), i.sameSite) {
    var s = typeof i.sameSite == "string" ? i.sameSite.toLowerCase() : i.sameSite;
    switch (s) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return o;
}
function Sx(u, e) {
  try {
    return e(u);
  } catch {
    return u;
  }
}
var W0 = {}, os = {}, Fe = {}, Mx = {
  get exports() {
    return Fe;
  },
  set exports(u) {
    Fe = u;
  }
}, Ee = {
  decodeValues: !0,
  map: !1,
  silent: !1
};
function hn(u) {
  return typeof u == "string" && !!u.trim();
}
function gn(u, e) {
  var a = u.split(";").filter(hn), i = a.shift(), r = jx(i), n = r.name, o = r.value;
  e = e ? Object.assign({}, Ee, e) : Ee;
  try {
    o = e.decodeValues ? decodeURIComponent(o) : o;
  } catch (s) {
    console.error(
      "set-cookie-parser encountered an error while decoding a cookie with value '" + o + "'. Set options.decodeValues to false to disable this feature.",
      s
    );
  }
  var t = {
    name: n,
    value: o
  };
  return a.forEach(function(s) {
    var l = s.split("="), E = l.shift().trimLeft().toLowerCase(), D = l.join("=");
    E === "expires" ? t.expires = new Date(D) : E === "max-age" ? t.maxAge = parseInt(D, 10) : E === "secure" ? t.secure = !0 : E === "httponly" ? t.httpOnly = !0 : E === "samesite" ? t.sameSite = D : t[E] = D;
  }), t;
}
function jx(u) {
  var e = "", a = "", i = u.split("=");
  return i.length > 1 ? (e = i.shift(), a = i.join("=")) : a = u, { name: e, value: a };
}
function ts(u, e) {
  if (e = e ? Object.assign({}, Ee, e) : Ee, !u)
    return e.map ? {} : [];
  if (u.headers)
    if (typeof u.headers.getSetCookie == "function")
      u = u.headers.getSetCookie();
    else if (u.headers["set-cookie"])
      u = u.headers["set-cookie"];
    else {
      var a = u.headers[Object.keys(u.headers).find(function(r) {
        return r.toLowerCase() === "set-cookie";
      })];
      !a && u.headers.cookie && !e.silent && console.warn(
        "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
      ), u = a;
    }
  if (Array.isArray(u) || (u = [u]), e = e ? Object.assign({}, Ee, e) : Ee, e.map) {
    var i = {};
    return u.filter(hn).reduce(function(r, n) {
      var o = gn(n, e);
      return r[o.name] = o, r;
    }, i);
  } else
    return u.filter(hn).map(function(r) {
      return gn(r, e);
    });
}
function Px(u) {
  if (Array.isArray(u))
    return u;
  if (typeof u != "string")
    return [];
  var e = [], a = 0, i, r, n, o, t;
  function s() {
    for (; a < u.length && /\s/.test(u.charAt(a)); )
      a += 1;
    return a < u.length;
  }
  function l() {
    return r = u.charAt(a), r !== "=" && r !== ";" && r !== ",";
  }
  for (; a < u.length; ) {
    for (i = a, t = !1; s(); )
      if (r = u.charAt(a), r === ",") {
        for (n = a, a += 1, s(), o = a; a < u.length && l(); )
          a += 1;
        a < u.length && u.charAt(a) === "=" ? (t = !0, a = o, e.push(u.substring(i, n)), i = a) : a = n + 1;
      } else
        a += 1;
    (!t || a >= u.length) && e.push(u.substring(i, u.length));
  }
  return e;
}
Mx.exports = ts;
Fe.parse = ts;
Fe.parseString = gn;
Fe.splitCookiesString = Px;
(function(u) {
  var e = y && y.__rest || function(n, o) {
    var t = {};
    for (var s in n)
      Object.prototype.hasOwnProperty.call(n, s) && o.indexOf(s) < 0 && (t[s] = n[s]);
    if (n != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, s = Object.getOwnPropertySymbols(n); l < s.length; l++)
        o.indexOf(s[l]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[l]) && (t[s[l]] = n[s[l]]);
    return t;
  };
  Object.defineProperty(u, "__esModule", { value: !0 }), u.store = u.PERSISTENCY_KEY = void 0;
  const a = Fe;
  u.PERSISTENCY_KEY = "MSW_COOKIE_STORE";
  function i() {
    try {
      if (localStorage == null)
        return !1;
      const n = u.PERSISTENCY_KEY + "_test";
      return localStorage.setItem(n, "test"), localStorage.getItem(n), localStorage.removeItem(n), !0;
    } catch {
      return !1;
    }
  }
  class r {
    constructor() {
      this.store = /* @__PURE__ */ new Map();
    }
    /**
     * Sets the given request cookies into the store.
     * Respects the `request.credentials` policy.
     */
    add(o, t) {
      if (o.credentials === "omit")
        return;
      const s = new URL(o.url), l = t.headers.get("set-cookie");
      if (!l)
        return;
      const E = Date.now(), D = a.parse(l).map((c) => {
        var { maxAge: d } = c, F = e(c, ["maxAge"]);
        return Object.assign(Object.assign({}, F), { expires: d === void 0 ? F.expires : new Date(E + d * 1e3), maxAge: d });
      }), x = this.store.get(s.origin) || /* @__PURE__ */ new Map();
      D.forEach((c) => {
        this.store.set(s.origin, x.set(c.name, c));
      });
    }
    /**
     * Returns cookies relevant to the given request
     * and its `request.credentials` policy.
     */
    get(o) {
      this.deleteExpiredCookies();
      const t = new URL(o.url), s = this.store.get(t.origin) || /* @__PURE__ */ new Map();
      switch (o.credentials) {
        case "include":
          return typeof document > "u" || a.parse(document.cookie).forEach((E) => {
            s.set(E.name, E);
          }), s;
        case "same-origin":
          return s;
        default:
          return /* @__PURE__ */ new Map();
      }
    }
    /**
     * Returns a collection of all stored cookies.
     */
    getAll() {
      return this.deleteExpiredCookies(), this.store;
    }
    /**
     * Deletes all cookies associated with the given request.
     */
    deleteAll(o) {
      const t = new URL(o.url);
      this.store.delete(t.origin);
    }
    /**
     * Clears the entire cookie store.
     */
    clear() {
      this.store.clear();
    }
    /**
     * Hydrates the virtual cookie store from the `localStorage` if defined.
     */
    hydrate() {
      if (!i())
        return;
      const o = localStorage.getItem(u.PERSISTENCY_KEY);
      if (o)
        try {
          JSON.parse(o).forEach(([s, l]) => {
            this.store.set(s, new Map(l.map((E) => {
              var [D, x] = E, { expires: c } = x, d = e(x, ["expires"]);
              return [
                D,
                c === void 0 ? d : Object.assign(Object.assign({}, d), { expires: new Date(c) })
              ];
            })));
          });
        } catch (t) {
          console.warn(`
[virtual-cookie] Failed to parse a stored cookie from the localStorage (key "${u.PERSISTENCY_KEY}").

Stored value:
${localStorage.getItem(u.PERSISTENCY_KEY)}

Thrown exception:
${t}

Invalid value has been removed from localStorage to prevent subsequent failed parsing attempts.`), localStorage.removeItem(u.PERSISTENCY_KEY);
        }
    }
    /**
     * Persists the current virtual cookies into the `localStorage` if defined,
     * so they are available on the next page load.
     */
    persist() {
      if (!i())
        return;
      const o = Array.from(this.store.entries()).map(([t, s]) => [t, Array.from(s.entries())]);
      localStorage.setItem(u.PERSISTENCY_KEY, JSON.stringify(o));
    }
    deleteExpiredCookies() {
      const o = Date.now();
      this.store.forEach((t, s) => {
        t.forEach(({ expires: l, name: E }) => {
          l !== void 0 && l.getTime() <= o && t.delete(E);
        }), t.size === 0 && this.store.delete(s);
      });
    }
  }
  u.store = new r();
})(os);
(function(u) {
  var e = y && y.__createBinding || (Object.create ? function(i, r, n, o) {
    o === void 0 && (o = n), Object.defineProperty(i, o, { enumerable: !0, get: function() {
      return r[n];
    } });
  } : function(i, r, n, o) {
    o === void 0 && (o = n), i[o] = r[n];
  }), a = y && y.__exportStar || function(i, r) {
    for (var n in i)
      n !== "default" && !Object.prototype.hasOwnProperty.call(r, n) && e(r, i, n);
  };
  Object.defineProperty(u, "__esModule", { value: !0 }), a(os, u);
})(W0);
var Tx = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
function Ke(u) {
  if (typeof u != "string" && (u = String(u)), Tx.test(u) || u.trim() === "")
    throw new TypeError("Invalid character in header field name");
  return u.toLowerCase();
}
function wx(u) {
  return typeof u != "string" && (u = String(u)), u;
}
var qu = Symbol("normalizedHeaders"), Ga = Symbol("rawHeaderNames"), Yt, Qt, R0 = class {
  constructor(u) {
    this[Yt] = {}, this[Qt] = /* @__PURE__ */ new Map(), ["Headers", "HeadersPolyfill"].includes(u == null ? void 0 : u.constructor.name) || u instanceof R0 ? u.forEach((a, i) => {
      this.append(i, a);
    }, this) : Array.isArray(u) ? u.forEach(([e, a]) => {
      this.append(e, Array.isArray(a) ? a.join(", ") : a);
    }) : u && Object.getOwnPropertyNames(u).forEach((e) => {
      const a = u[e];
      this.append(e, Array.isArray(a) ? a.join(", ") : a);
    });
  }
  [(Yt = qu, Qt = Ga, Symbol.iterator)]() {
    return this.entries();
  }
  *keys() {
    for (const u of Object.keys(this[qu]))
      yield u;
  }
  *values() {
    for (const u of Object.values(this[qu]))
      yield u;
  }
  *entries() {
    for (const u of Object.keys(this[qu]))
      yield [u, this.get(u)];
  }
  get(u) {
    return this[qu][Ke(u)] || null;
  }
  set(u, e) {
    const a = Ke(u);
    this[qu][a] = wx(e), this[Ga].set(a, u);
  }
  append(u, e) {
    const a = Ke(u);
    let i = this.has(a) ? `${this.get(a)}, ${e}` : e;
    this.set(u, i);
  }
  delete(u) {
    if (!this.has(u))
      return;
    const e = Ke(u);
    delete this[qu][e], this[Ga].delete(e);
  }
  all() {
    return this[qu];
  }
  raw() {
    const u = {};
    for (const [e, a] of this.entries())
      u[this[Ga].get(e)] = a;
    return u;
  }
  has(u) {
    return this[qu].hasOwnProperty(Ke(u));
  }
  forEach(u, e) {
    for (const a in this[qu])
      this[qu].hasOwnProperty(a) && u.call(e, this[qu][a], a, this);
  }
};
function ss(u) {
  const e = [];
  return u.forEach((a, i) => {
    const r = a.includes(",") ? a.split(",").map((n) => n.trim()) : a;
    e.push([i, r]);
  }), e;
}
function Nx(u) {
  return ss(u).map(([i, r]) => {
    const n = [].concat(r);
    return `${i}: ${n.join(", ")}`;
  }).join(`\r
`);
}
var Lx = ["user-agent"];
function Kx(u) {
  const e = {};
  return u.forEach((a, i) => {
    const r = !Lx.includes(i.toLowerCase()) && a.includes(",");
    e[i] = r ? a.split(",").map((n) => n.trim()) : a;
  }), e;
}
function ls(u) {
  return u.trim().split(/[\r\n]+/).reduce((a, i) => {
    if (i.trim() === "")
      return a;
    const r = i.split(": "), n = r.shift(), o = r.join(": ");
    return a.append(n, o), a;
  }, new R0());
}
function Rx(u) {
  const e = new R0();
  return u.forEach(([a, i]) => {
    [].concat(i).forEach((n) => {
      e.append(a, n);
    });
  }), e;
}
function Jn(u, e, a) {
  return Object.keys(u).reduce((i, r) => e(i, r, u[r]), a);
}
function $n(u) {
  return Jn(
    u,
    (e, a, i) => ([].concat(i).filter(Boolean).forEach((n) => {
      e.append(a, n);
    }), e),
    new R0()
  );
}
function Hx(u) {
  return u.map(([e, a]) => [e, [].concat(a).join(", ")]);
}
function _x(u) {
  return Jn(
    u,
    (e, a, i) => (e[a] = [].concat(i).join(", "), e),
    {}
  );
}
const Gx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Headers: R0,
  flattenHeadersList: Hx,
  flattenHeadersObject: _x,
  headersToList: ss,
  headersToObject: Kx,
  headersToString: Nx,
  listToHeaders: Rx,
  objectToHeaders: $n,
  reduceHeadersObject: Jn,
  stringToHeaders: ls
}, Symbol.toStringTag, { value: "Module" }));
var b0 = {}, qn = {};
Object.defineProperty(qn, "__esModule", { value: !0 });
qn.until = async (u) => {
  try {
    return [null, await u().catch((a) => {
      throw a;
    })];
  } catch (e) {
    return [e, null];
  }
};
Object.defineProperty(b0, "__esModule", { value: !0 });
var Vx = qn, Ix = b0.until = Vx.until, Wn = function() {
  function u(e, a, i, r, n) {
    return e < a || i < a ? e > i ? i + 1 : e + 1 : r === n ? a : a + 1;
  }
  return function(e, a) {
    if (e === a)
      return 0;
    if (e.length > a.length) {
      var i = e;
      e = a, a = i;
    }
    for (var r = e.length, n = a.length; r > 0 && e.charCodeAt(r - 1) === a.charCodeAt(n - 1); )
      r--, n--;
    for (var o = 0; o < r && e.charCodeAt(o) === a.charCodeAt(o); )
      o++;
    if (r -= o, n -= o, r === 0 || n < 3)
      return n;
    var t = 0, s, l, E, D, x, c, d, F, k, g, M, A, v = [];
    for (s = 0; s < r; s++)
      v.push(s + 1), v.push(e.charCodeAt(o + s));
    for (var T = v.length - 1; t < n - 3; )
      for (k = a.charCodeAt(o + (l = t)), g = a.charCodeAt(o + (E = t + 1)), M = a.charCodeAt(o + (D = t + 2)), A = a.charCodeAt(o + (x = t + 3)), c = t += 4, s = 0; s < T; s += 2)
        d = v[s], F = v[s + 1], l = u(d, l, E, k, F), E = u(l, E, D, g, F), D = u(E, D, x, M, F), c = u(D, x, c, A, F), v[s] = c, x = D, D = E, E = l, l = d;
    for (; t < n; )
      for (k = a.charCodeAt(o + (l = t)), c = ++t, s = 0; s < T; s += 2)
        d = v[s], v[s] = c = u(d, l, c, k, v[s + 1]), l = d;
    return c;
  };
}();
const Ox = "16.6.0", Jx = Object.freeze({
  major: 16,
  minor: 6,
  patch: 0,
  preReleaseTag: null
});
function U(u, e) {
  if (!!!u)
    throw new Error(e);
}
function Vu(u) {
  return typeof (u == null ? void 0 : u.then) == "function";
}
function Iu(u) {
  return typeof u == "object" && u !== null;
}
function ku(u, e) {
  if (!!!u)
    throw new Error(
      e ?? "Unexpected invariant triggered."
    );
}
const $x = /\r\n|[\n\r]/g;
function ci(u, e) {
  let a = 0, i = 1;
  for (const r of u.body.matchAll($x)) {
    if (typeof r.index == "number" || ku(!1), r.index >= e)
      break;
    a = r.index + r[0].length, i += 1;
  }
  return {
    line: i,
    column: e + 1 - a
  };
}
function Es(u) {
  return Un(
    u.source,
    ci(u.source, u.start)
  );
}
function Un(u, e) {
  const a = u.locationOffset.column - 1, i = "".padStart(a) + u.body, r = e.line - 1, n = u.locationOffset.line - 1, o = e.line + n, t = e.line === 1 ? a : 0, s = e.column + t, l = `${u.name}:${o}:${s}
`, E = i.split(/\r\n|[\n\r]/g), D = E[r];
  if (D.length > 120) {
    const x = Math.floor(s / 80), c = s % 80, d = [];
    for (let F = 0; F < D.length; F += 80)
      d.push(D.slice(F, F + 80));
    return l + Xt([
      [`${o} |`, d[0]],
      ...d.slice(1, x + 1).map((F) => ["|", F]),
      ["|", "^".padStart(c)],
      ["|", d[x + 1]]
    ]);
  }
  return l + Xt([
    // Lines specified like this: ["prefix", "string"],
    [`${o - 1} |`, E[r - 1]],
    [`${o} |`, D],
    ["|", "^".padStart(s)],
    [`${o + 1} |`, E[r + 1]]
  ]);
}
function Xt(u) {
  const e = u.filter(([i, r]) => r !== void 0), a = Math.max(...e.map(([i]) => i.length));
  return e.map(([i, r]) => i.padStart(a) + (r ? " " + r : "")).join(`
`);
}
function qx(u) {
  const e = u[0];
  return e == null || "kind" in e || "length" in e ? {
    nodes: e,
    source: u[1],
    positions: u[2],
    path: u[3],
    originalError: u[4],
    extensions: u[5]
  } : e;
}
class B extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  /**
   * The original error thrown from a field resolver during execution.
   */
  /**
   * Extension fields to add to the formatted error.
   */
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(e, ...a) {
    var i, r, n;
    const { nodes: o, source: t, positions: s, path: l, originalError: E, extensions: D } = qx(a);
    super(e), this.name = "GraphQLError", this.path = l ?? void 0, this.originalError = E ?? void 0, this.nodes = u1(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const x = u1(
      (i = this.nodes) === null || i === void 0 ? void 0 : i.map((d) => d.loc).filter((d) => d != null)
    );
    this.source = t ?? (x == null || (r = x[0]) === null || r === void 0 ? void 0 : r.source), this.positions = s ?? (x == null ? void 0 : x.map((d) => d.start)), this.locations = s && t ? s.map((d) => ci(t, d)) : x == null ? void 0 : x.map((d) => ci(d.source, d.start));
    const c = Iu(
      E == null ? void 0 : E.extensions
    ) ? E == null ? void 0 : E.extensions : void 0;
    this.extensions = (n = D ?? c) !== null && n !== void 0 ? n : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
      message: {
        writable: !0,
        enumerable: !0
      },
      name: {
        enumerable: !1
      },
      nodes: {
        enumerable: !1
      },
      source: {
        enumerable: !1
      },
      positions: {
        enumerable: !1
      },
      originalError: {
        enumerable: !1
      }
    }), E != null && E.stack ? Object.defineProperty(this, "stack", {
      value: E.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, B) : Object.defineProperty(this, "stack", {
      value: Error().stack,
      writable: !0,
      configurable: !0
    });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let e = this.message;
    if (this.nodes)
      for (const a of this.nodes)
        a.loc && (e += `

` + Es(a.loc));
    else if (this.source && this.locations)
      for (const a of this.locations)
        e += `

` + Un(this.source, a);
    return e;
  }
  toJSON() {
    const e = {
      message: this.message
    };
    return this.locations != null && (e.locations = this.locations), this.path != null && (e.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e;
  }
}
function u1(u) {
  return u === void 0 || u.length === 0 ? void 0 : u;
}
function Wx(u) {
  return u.toString();
}
function Ux(u) {
  return u.toJSON();
}
function vu(u, e, a) {
  return new B(`Syntax Error: ${a}`, {
    source: u,
    positions: [e]
  });
}
class Ds {
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The Token at which this Node begins.
   */
  /**
   * The Token at which this Node ends.
   */
  /**
   * The Source document the AST represents.
   */
  constructor(e, a, i) {
    this.start = e.start, this.end = a.end, this.startToken = e, this.endToken = a, this.source = i;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
}
class Zn {
  /**
   * The kind of Token.
   */
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The 1-indexed line number on which this Token appears.
   */
  /**
   * The 1-indexed column number at which this Token begins.
   */
  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(e, a, i, r, n, o) {
    this.kind = e, this.start = a, this.end = i, this.line = r, this.column = n, this.value = o, this.prev = null, this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
}
const xs = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
}, Zx = new Set(Object.keys(xs));
function Cn(u) {
  const e = u == null ? void 0 : u.kind;
  return typeof e == "string" && Zx.has(e);
}
var bu;
(function(u) {
  u.QUERY = "query", u.MUTATION = "mutation", u.SUBSCRIPTION = "subscription";
})(bu || (bu = {}));
var K;
(function(u) {
  u.QUERY = "QUERY", u.MUTATION = "MUTATION", u.SUBSCRIPTION = "SUBSCRIPTION", u.FIELD = "FIELD", u.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", u.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", u.INLINE_FRAGMENT = "INLINE_FRAGMENT", u.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", u.SCHEMA = "SCHEMA", u.SCALAR = "SCALAR", u.OBJECT = "OBJECT", u.FIELD_DEFINITION = "FIELD_DEFINITION", u.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", u.INTERFACE = "INTERFACE", u.UNION = "UNION", u.ENUM = "ENUM", u.ENUM_VALUE = "ENUM_VALUE", u.INPUT_OBJECT = "INPUT_OBJECT", u.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(K || (K = {}));
var p;
(function(u) {
  u.NAME = "Name", u.DOCUMENT = "Document", u.OPERATION_DEFINITION = "OperationDefinition", u.VARIABLE_DEFINITION = "VariableDefinition", u.SELECTION_SET = "SelectionSet", u.FIELD = "Field", u.ARGUMENT = "Argument", u.FRAGMENT_SPREAD = "FragmentSpread", u.INLINE_FRAGMENT = "InlineFragment", u.FRAGMENT_DEFINITION = "FragmentDefinition", u.VARIABLE = "Variable", u.INT = "IntValue", u.FLOAT = "FloatValue", u.STRING = "StringValue", u.BOOLEAN = "BooleanValue", u.NULL = "NullValue", u.ENUM = "EnumValue", u.LIST = "ListValue", u.OBJECT = "ObjectValue", u.OBJECT_FIELD = "ObjectField", u.DIRECTIVE = "Directive", u.NAMED_TYPE = "NamedType", u.LIST_TYPE = "ListType", u.NON_NULL_TYPE = "NonNullType", u.SCHEMA_DEFINITION = "SchemaDefinition", u.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", u.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", u.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", u.FIELD_DEFINITION = "FieldDefinition", u.INPUT_VALUE_DEFINITION = "InputValueDefinition", u.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", u.UNION_TYPE_DEFINITION = "UnionTypeDefinition", u.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", u.ENUM_VALUE_DEFINITION = "EnumValueDefinition", u.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", u.DIRECTIVE_DEFINITION = "DirectiveDefinition", u.SCHEMA_EXTENSION = "SchemaExtension", u.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", u.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", u.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", u.UNION_TYPE_EXTENSION = "UnionTypeExtension", u.ENUM_TYPE_EXTENSION = "EnumTypeExtension", u.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(p || (p = {}));
function vn(u) {
  return u === 9 || u === 32;
}
function Ye(u) {
  return u >= 48 && u <= 57;
}
function cs(u) {
  return u >= 97 && u <= 122 || // A-Z
  u >= 65 && u <= 90;
}
function Yn(u) {
  return cs(u) || u === 95;
}
function ds(u) {
  return cs(u) || Ye(u) || u === 95;
}
function Yx(u) {
  var e;
  let a = Number.MAX_SAFE_INTEGER, i = null, r = -1;
  for (let o = 0; o < u.length; ++o) {
    var n;
    const t = u[o], s = Qx(t);
    s !== t.length && (i = (n = i) !== null && n !== void 0 ? n : o, r = o, o !== 0 && s < a && (a = s));
  }
  return u.map((o, t) => t === 0 ? o : o.slice(a)).slice(
    (e = i) !== null && e !== void 0 ? e : 0,
    r + 1
  );
}
function Qx(u) {
  let e = 0;
  for (; e < u.length && vn(u.charCodeAt(e)); )
    ++e;
  return e;
}
function Xx(u) {
  if (u === "")
    return !0;
  let e = !0, a = !1, i = !0, r = !1;
  for (let n = 0; n < u.length; ++n)
    switch (u.codePointAt(n)) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 11:
      case 12:
      case 14:
      case 15:
        return !1;
      case 13:
        return !1;
      case 10:
        if (e && !r)
          return !1;
        r = !0, e = !0, a = !1;
        break;
      case 9:
      case 32:
        a || (a = e);
        break;
      default:
        i && (i = a), e = !1;
    }
  return !(e || i && r);
}
function ms(u, e) {
  const a = u.replace(/"""/g, '\\"""'), i = a.split(/\r\n|[\n\r]/g), r = i.length === 1, n = i.length > 1 && i.slice(1).every((c) => c.length === 0 || vn(c.charCodeAt(0))), o = a.endsWith('\\"""'), t = u.endsWith('"') && !o, s = u.endsWith("\\"), l = t || s, E = !(e != null && e.minimize) && // add leading and trailing new lines only if it improves readability
  (!r || u.length > 70 || l || n || o);
  let D = "";
  const x = r && vn(u.charCodeAt(0));
  return (E && !x || n) && (D += `
`), D += a, (E || l) && (D += `
`), '"""' + D + '"""';
}
var f;
(function(u) {
  u.SOF = "<SOF>", u.EOF = "<EOF>", u.BANG = "!", u.DOLLAR = "$", u.AMP = "&", u.PAREN_L = "(", u.PAREN_R = ")", u.SPREAD = "...", u.COLON = ":", u.EQUALS = "=", u.AT = "@", u.BRACKET_L = "[", u.BRACKET_R = "]", u.BRACE_L = "{", u.PIPE = "|", u.BRACE_R = "}", u.NAME = "Name", u.INT = "Int", u.FLOAT = "Float", u.STRING = "String", u.BLOCK_STRING = "BlockString", u.COMMENT = "Comment";
})(f || (f = {}));
class Qn {
  /**
   * The previously focused non-ignored token.
   */
  /**
   * The currently focused non-ignored token.
   */
  /**
   * The (1-indexed) line containing the current token.
   */
  /**
   * The character offset at which the current line begins.
   */
  constructor(e) {
    const a = new Zn(f.SOF, 0, 0, 0, 0);
    this.source = e, this.lastToken = a, this.token = a, this.line = 1, this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance() {
    return this.lastToken = this.token, this.token = this.lookahead();
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  lookahead() {
    let e = this.token;
    if (e.kind !== f.EOF)
      do
        if (e.next)
          e = e.next;
        else {
          const a = uc(this, e.end);
          e.next = a, a.prev = e, e = a;
        }
      while (e.kind === f.COMMENT);
    return e;
  }
}
function Fs(u) {
  return u === f.BANG || u === f.DOLLAR || u === f.AMP || u === f.PAREN_L || u === f.PAREN_R || u === f.SPREAD || u === f.COLON || u === f.EQUALS || u === f.AT || u === f.BRACKET_L || u === f.BRACKET_R || u === f.BRACE_L || u === f.PIPE || u === f.BRACE_R;
}
function ze(u) {
  return u >= 0 && u <= 55295 || u >= 57344 && u <= 1114111;
}
function _i(u, e) {
  return ks(u.charCodeAt(e)) && ps(u.charCodeAt(e + 1));
}
function ks(u) {
  return u >= 55296 && u <= 56319;
}
function ps(u) {
  return u >= 56320 && u <= 57343;
}
function U0(u, e) {
  const a = u.source.body.codePointAt(e);
  if (a === void 0)
    return f.EOF;
  if (a >= 32 && a <= 126) {
    const i = String.fromCodePoint(a);
    return i === '"' ? `'"'` : `"${i}"`;
  }
  return "U+" + a.toString(16).toUpperCase().padStart(4, "0");
}
function pu(u, e, a, i, r) {
  const n = u.line, o = 1 + a - u.lineStart;
  return new Zn(e, a, i, n, o, r);
}
function uc(u, e) {
  const a = u.source.body, i = a.length;
  let r = e;
  for (; r < i; ) {
    const n = a.charCodeAt(r);
    switch (n) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++r;
        continue;
      case 10:
        ++r, ++u.line, u.lineStart = r;
        continue;
      case 13:
        a.charCodeAt(r + 1) === 10 ? r += 2 : ++r, ++u.line, u.lineStart = r;
        continue;
      case 35:
        return ec(u, r);
      case 33:
        return pu(u, f.BANG, r, r + 1);
      case 36:
        return pu(u, f.DOLLAR, r, r + 1);
      case 38:
        return pu(u, f.AMP, r, r + 1);
      case 40:
        return pu(u, f.PAREN_L, r, r + 1);
      case 41:
        return pu(u, f.PAREN_R, r, r + 1);
      case 46:
        if (a.charCodeAt(r + 1) === 46 && a.charCodeAt(r + 2) === 46)
          return pu(u, f.SPREAD, r, r + 3);
        break;
      case 58:
        return pu(u, f.COLON, r, r + 1);
      case 61:
        return pu(u, f.EQUALS, r, r + 1);
      case 64:
        return pu(u, f.AT, r, r + 1);
      case 91:
        return pu(u, f.BRACKET_L, r, r + 1);
      case 93:
        return pu(u, f.BRACKET_R, r, r + 1);
      case 123:
        return pu(u, f.BRACE_L, r, r + 1);
      case 124:
        return pu(u, f.PIPE, r, r + 1);
      case 125:
        return pu(u, f.BRACE_R, r, r + 1);
      case 34:
        return a.charCodeAt(r + 1) === 34 && a.charCodeAt(r + 2) === 34 ? tc(u, r) : ic(u, r);
    }
    if (Ye(n) || n === 45)
      return ac(u, r, n);
    if (Yn(n))
      return sc(u, r);
    throw vu(
      u.source,
      r,
      n === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : ze(n) || _i(a, r) ? `Unexpected character: ${U0(u, r)}.` : `Invalid character: ${U0(u, r)}.`
    );
  }
  return pu(u, f.EOF, i, i);
}
function ec(u, e) {
  const a = u.source.body, i = a.length;
  let r = e + 1;
  for (; r < i; ) {
    const n = a.charCodeAt(r);
    if (n === 10 || n === 13)
      break;
    if (ze(n))
      ++r;
    else if (_i(a, r))
      r += 2;
    else
      break;
  }
  return pu(
    u,
    f.COMMENT,
    e,
    r,
    a.slice(e + 1, r)
  );
}
function ac(u, e, a) {
  const i = u.source.body;
  let r = e, n = a, o = !1;
  if (n === 45 && (n = i.charCodeAt(++r)), n === 48) {
    if (n = i.charCodeAt(++r), Ye(n))
      throw vu(
        u.source,
        r,
        `Invalid number, unexpected digit after 0: ${U0(
          u,
          r
        )}.`
      );
  } else
    r = Xr(u, r, n), n = i.charCodeAt(r);
  if (n === 46 && (o = !0, n = i.charCodeAt(++r), r = Xr(u, r, n), n = i.charCodeAt(r)), (n === 69 || n === 101) && (o = !0, n = i.charCodeAt(++r), (n === 43 || n === 45) && (n = i.charCodeAt(++r)), r = Xr(u, r, n), n = i.charCodeAt(r)), n === 46 || Yn(n))
    throw vu(
      u.source,
      r,
      `Invalid number, expected digit but got: ${U0(
        u,
        r
      )}.`
    );
  return pu(
    u,
    o ? f.FLOAT : f.INT,
    e,
    r,
    i.slice(e, r)
  );
}
function Xr(u, e, a) {
  if (!Ye(a))
    throw vu(
      u.source,
      e,
      `Invalid number, expected digit but got: ${U0(
        u,
        e
      )}.`
    );
  const i = u.source.body;
  let r = e + 1;
  for (; Ye(i.charCodeAt(r)); )
    ++r;
  return r;
}
function ic(u, e) {
  const a = u.source.body, i = a.length;
  let r = e + 1, n = r, o = "";
  for (; r < i; ) {
    const t = a.charCodeAt(r);
    if (t === 34)
      return o += a.slice(n, r), pu(u, f.STRING, e, r + 1, o);
    if (t === 92) {
      o += a.slice(n, r);
      const s = a.charCodeAt(r + 1) === 117 ? a.charCodeAt(r + 2) === 123 ? rc(u, r) : nc(u, r) : oc(u, r);
      o += s.value, r += s.size, n = r;
      continue;
    }
    if (t === 10 || t === 13)
      break;
    if (ze(t))
      ++r;
    else if (_i(a, r))
      r += 2;
    else
      throw vu(
        u.source,
        r,
        `Invalid character within String: ${U0(
          u,
          r
        )}.`
      );
  }
  throw vu(u.source, r, "Unterminated string.");
}
function rc(u, e) {
  const a = u.source.body;
  let i = 0, r = 3;
  for (; r < 12; ) {
    const n = a.charCodeAt(e + r++);
    if (n === 125) {
      if (r < 5 || !ze(i))
        break;
      return {
        value: String.fromCodePoint(i),
        size: r
      };
    }
    if (i = i << 4 | Ve(n), i < 0)
      break;
  }
  throw vu(
    u.source,
    e,
    `Invalid Unicode escape sequence: "${a.slice(
      e,
      e + r
    )}".`
  );
}
function nc(u, e) {
  const a = u.source.body, i = e1(a, e + 2);
  if (ze(i))
    return {
      value: String.fromCodePoint(i),
      size: 6
    };
  if (ks(i) && a.charCodeAt(e + 6) === 92 && a.charCodeAt(e + 7) === 117) {
    const r = e1(a, e + 8);
    if (ps(r))
      return {
        value: String.fromCodePoint(i, r),
        size: 12
      };
  }
  throw vu(
    u.source,
    e,
    `Invalid Unicode escape sequence: "${a.slice(e, e + 6)}".`
  );
}
function e1(u, e) {
  return Ve(u.charCodeAt(e)) << 12 | Ve(u.charCodeAt(e + 1)) << 8 | Ve(u.charCodeAt(e + 2)) << 4 | Ve(u.charCodeAt(e + 3));
}
function Ve(u) {
  return u >= 48 && u <= 57 ? u - 48 : u >= 65 && u <= 70 ? u - 55 : u >= 97 && u <= 102 ? u - 87 : -1;
}
function oc(u, e) {
  const a = u.source.body;
  switch (a.charCodeAt(e + 1)) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: `
`,
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw vu(
    u.source,
    e,
    `Invalid character escape sequence: "${a.slice(
      e,
      e + 2
    )}".`
  );
}
function tc(u, e) {
  const a = u.source.body, i = a.length;
  let r = u.lineStart, n = e + 3, o = n, t = "";
  const s = [];
  for (; n < i; ) {
    const l = a.charCodeAt(n);
    if (l === 34 && a.charCodeAt(n + 1) === 34 && a.charCodeAt(n + 2) === 34) {
      t += a.slice(o, n), s.push(t);
      const E = pu(
        u,
        f.BLOCK_STRING,
        e,
        n + 3,
        // Return a string of the lines joined with U+000A.
        Yx(s).join(`
`)
      );
      return u.line += s.length - 1, u.lineStart = r, E;
    }
    if (l === 92 && a.charCodeAt(n + 1) === 34 && a.charCodeAt(n + 2) === 34 && a.charCodeAt(n + 3) === 34) {
      t += a.slice(o, n), o = n + 1, n += 4;
      continue;
    }
    if (l === 10 || l === 13) {
      t += a.slice(o, n), s.push(t), l === 13 && a.charCodeAt(n + 1) === 10 ? n += 2 : ++n, t = "", o = n, r = n;
      continue;
    }
    if (ze(l))
      ++n;
    else if (_i(a, n))
      n += 2;
    else
      throw vu(
        u.source,
        n,
        `Invalid character within String: ${U0(
          u,
          n
        )}.`
      );
  }
  throw vu(u.source, n, "Unterminated string.");
}
function sc(u, e) {
  const a = u.source.body, i = a.length;
  let r = e + 1;
  for (; r < i; ) {
    const n = a.charCodeAt(r);
    if (ds(n))
      ++r;
    else
      break;
  }
  return pu(
    u,
    f.NAME,
    e,
    r,
    a.slice(e, r)
  );
}
const lc = 10, hs = 2;
function z(u) {
  return Gi(u, []);
}
function Gi(u, e) {
  switch (typeof u) {
    case "string":
      return JSON.stringify(u);
    case "function":
      return u.name ? `[function ${u.name}]` : "[function]";
    case "object":
      return Ec(u, e);
    default:
      return String(u);
  }
}
function Ec(u, e) {
  if (u === null)
    return "null";
  if (e.includes(u))
    return "[Circular]";
  const a = [...e, u];
  if (Dc(u)) {
    const i = u.toJSON();
    if (i !== u)
      return typeof i == "string" ? i : Gi(i, a);
  } else if (Array.isArray(u))
    return cc(u, a);
  return xc(u, a);
}
function Dc(u) {
  return typeof u.toJSON == "function";
}
function xc(u, e) {
  const a = Object.entries(u);
  return a.length === 0 ? "{}" : e.length > hs ? "[" + dc(u) + "]" : "{ " + a.map(
    ([r, n]) => r + ": " + Gi(n, e)
  ).join(", ") + " }";
}
function cc(u, e) {
  if (u.length === 0)
    return "[]";
  if (e.length > hs)
    return "[Array]";
  const a = Math.min(lc, u.length), i = u.length - a, r = [];
  for (let n = 0; n < a; ++n)
    r.push(Gi(u[n], e));
  return i === 1 ? r.push("... 1 more item") : i > 1 && r.push(`... ${i} more items`), "[" + r.join(", ") + "]";
}
function dc(u) {
  const e = Object.prototype.toString.call(u).replace(/^\[object /, "").replace(/]$/, "");
  if (e === "Object" && typeof u.constructor == "function") {
    const a = u.constructor.name;
    if (typeof a == "string" && a !== "")
      return a;
  }
  return e;
}
const n0 = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === "production" ? function(e, a) {
    return e instanceof a;
  } : function(e, a) {
    if (e instanceof a)
      return !0;
    if (typeof e == "object" && e !== null) {
      var i;
      const r = a.prototype[Symbol.toStringTag], n = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in e ? e[Symbol.toStringTag] : (i = e.constructor) === null || i === void 0 ? void 0 : i.name
      );
      if (r === n) {
        const o = z(e);
        throw new Error(`Cannot use ${r} "${o}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return !1;
  }
);
class Vi {
  constructor(e, a = "GraphQL request", i = {
    line: 1,
    column: 1
  }) {
    typeof e == "string" || U(!1, `Body must be a string. Received: ${z(e)}.`), this.body = e, this.name = a, this.locationOffset = i, this.locationOffset.line > 0 || U(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || U(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function gs(u) {
  return n0(u, Vi);
}
function ma(u, e) {
  return new Ii(u, e).parseDocument();
}
function Cs(u, e) {
  const a = new Ii(u, e);
  a.expectToken(f.SOF);
  const i = a.parseValueLiteral(!1);
  return a.expectToken(f.EOF), i;
}
function mc(u, e) {
  const a = new Ii(u, e);
  a.expectToken(f.SOF);
  const i = a.parseConstValueLiteral();
  return a.expectToken(f.EOF), i;
}
function Fc(u, e) {
  const a = new Ii(u, e);
  a.expectToken(f.SOF);
  const i = a.parseTypeReference();
  return a.expectToken(f.EOF), i;
}
class Ii {
  constructor(e, a = {}) {
    const i = gs(e) ? e : new Vi(e);
    this._lexer = new Qn(i), this._options = a, this._tokenCounter = 0;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const e = this.expectToken(f.NAME);
    return this.node(e, {
      kind: p.NAME,
      value: e.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: p.DOCUMENT,
      definitions: this.many(
        f.SOF,
        this.parseDefinition,
        f.EOF
      )
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  parseDefinition() {
    if (this.peek(f.BRACE_L))
      return this.parseOperationDefinition();
    const e = this.peekDescription(), a = e ? this._lexer.lookahead() : this._lexer.token;
    if (a.kind === f.NAME) {
      switch (a.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (e)
        throw vu(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      switch (a.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(a);
  }
  // Implements the parsing rules in the Operations section.
  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  parseOperationDefinition() {
    const e = this._lexer.token;
    if (this.peek(f.BRACE_L))
      return this.node(e, {
        kind: p.OPERATION_DEFINITION,
        operation: bu.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    const a = this.parseOperationType();
    let i;
    return this.peek(f.NAME) && (i = this.parseName()), this.node(e, {
      kind: p.OPERATION_DEFINITION,
      operation: a,
      name: i,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType() {
    const e = this.expectToken(f.NAME);
    switch (e.value) {
      case "query":
        return bu.QUERY;
      case "mutation":
        return bu.MUTATION;
      case "subscription":
        return bu.SUBSCRIPTION;
    }
    throw this.unexpected(e);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      f.PAREN_L,
      this.parseVariableDefinition,
      f.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: p.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(f.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(f.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const e = this._lexer.token;
    return this.expectToken(f.DOLLAR), this.node(e, {
      kind: p.VARIABLE,
      name: this.parseName()
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: p.SELECTION_SET,
      selections: this.many(
        f.BRACE_L,
        this.parseSelection,
        f.BRACE_R
      )
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  parseSelection() {
    return this.peek(f.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const e = this._lexer.token, a = this.parseName();
    let i, r;
    return this.expectOptionalToken(f.COLON) ? (i = a, r = this.parseName()) : r = a, this.node(e, {
      kind: p.FIELD,
      alias: i,
      name: r,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek(f.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(e) {
    const a = e ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(f.PAREN_L, a, f.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(e = !1) {
    const a = this._lexer.token, i = this.parseName();
    return this.expectToken(f.COLON), this.node(a, {
      kind: p.ARGUMENT,
      name: i,
      value: this.parseValueLiteral(e)
    });
  }
  parseConstArgument() {
    return this.parseArgument(!0);
  }
  // Implements the parsing rules in the Fragments section.
  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  parseFragment() {
    const e = this._lexer.token;
    this.expectToken(f.SPREAD);
    const a = this.expectOptionalKeyword("on");
    return !a && this.peek(f.NAME) ? this.node(e, {
      kind: p.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1)
    }) : this.node(e, {
      kind: p.INLINE_FRAGMENT,
      typeCondition: a ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  parseFragmentDefinition() {
    const e = this._lexer.token;
    return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(e, {
      kind: p.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      variableDefinitions: this.parseVariableDefinitions(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    }) : this.node(e, {
      kind: p.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentName : Name but not `on`
   */
  parseFragmentName() {
    if (this._lexer.token.value === "on")
      throw this.unexpected();
    return this.parseName();
  }
  // Implements the parsing rules in the Values section.
  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseValueLiteral(e) {
    const a = this._lexer.token;
    switch (a.kind) {
      case f.BRACKET_L:
        return this.parseList(e);
      case f.BRACE_L:
        return this.parseObject(e);
      case f.INT:
        return this.advanceLexer(), this.node(a, {
          kind: p.INT,
          value: a.value
        });
      case f.FLOAT:
        return this.advanceLexer(), this.node(a, {
          kind: p.FLOAT,
          value: a.value
        });
      case f.STRING:
      case f.BLOCK_STRING:
        return this.parseStringLiteral();
      case f.NAME:
        switch (this.advanceLexer(), a.value) {
          case "true":
            return this.node(a, {
              kind: p.BOOLEAN,
              value: !0
            });
          case "false":
            return this.node(a, {
              kind: p.BOOLEAN,
              value: !1
            });
          case "null":
            return this.node(a, {
              kind: p.NULL
            });
          default:
            return this.node(a, {
              kind: p.ENUM,
              value: a.value
            });
        }
      case f.DOLLAR:
        if (e)
          if (this.expectToken(f.DOLLAR), this._lexer.token.kind === f.NAME) {
            const i = this._lexer.token.value;
            throw vu(
              this._lexer.source,
              a.start,
              `Unexpected variable "$${i}" in constant value.`
            );
          } else
            throw this.unexpected(a);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0);
  }
  parseStringLiteral() {
    const e = this._lexer.token;
    return this.advanceLexer(), this.node(e, {
      kind: p.STRING,
      value: e.value,
      block: e.kind === f.BLOCK_STRING
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  parseList(e) {
    const a = () => this.parseValueLiteral(e);
    return this.node(this._lexer.token, {
      kind: p.LIST,
      values: this.any(f.BRACKET_L, a, f.BRACKET_R)
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */
  parseObject(e) {
    const a = () => this.parseObjectField(e);
    return this.node(this._lexer.token, {
      kind: p.OBJECT,
      fields: this.any(f.BRACE_L, a, f.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(e) {
    const a = this._lexer.token, i = this.parseName();
    return this.expectToken(f.COLON), this.node(a, {
      kind: p.OBJECT_FIELD,
      name: i,
      value: this.parseValueLiteral(e)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(e) {
    const a = [];
    for (; this.peek(f.AT); )
      a.push(this.parseDirective(e));
    return a;
  }
  parseConstDirectives() {
    return this.parseDirectives(!0);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */
  parseDirective(e) {
    const a = this._lexer.token;
    return this.expectToken(f.AT), this.node(a, {
      kind: p.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(e)
    });
  }
  // Implements the parsing rules in the Types section.
  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  parseTypeReference() {
    const e = this._lexer.token;
    let a;
    if (this.expectOptionalToken(f.BRACKET_L)) {
      const i = this.parseTypeReference();
      this.expectToken(f.BRACKET_R), a = this.node(e, {
        kind: p.LIST_TYPE,
        type: i
      });
    } else
      a = this.parseNamedType();
    return this.expectOptionalToken(f.BANG) ? this.node(e, {
      kind: p.NON_NULL_TYPE,
      type: a
    }) : a;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: p.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(f.STRING) || this.peek(f.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  parseDescription() {
    if (this.peekDescription())
      return this.parseStringLiteral();
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */
  parseSchemaDefinition() {
    const e = this._lexer.token, a = this.parseDescription();
    this.expectKeyword("schema");
    const i = this.parseConstDirectives(), r = this.many(
      f.BRACE_L,
      this.parseOperationTypeDefinition,
      f.BRACE_R
    );
    return this.node(e, {
      kind: p.SCHEMA_DEFINITION,
      description: a,
      directives: i,
      operationTypes: r
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const e = this._lexer.token, a = this.parseOperationType();
    this.expectToken(f.COLON);
    const i = this.parseNamedType();
    return this.node(e, {
      kind: p.OPERATION_TYPE_DEFINITION,
      operation: a,
      type: i
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const e = this._lexer.token, a = this.parseDescription();
    this.expectKeyword("scalar");
    const i = this.parseName(), r = this.parseConstDirectives();
    return this.node(e, {
      kind: p.SCALAR_TYPE_DEFINITION,
      description: a,
      name: i,
      directives: r
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition() {
    const e = this._lexer.token, a = this.parseDescription();
    this.expectKeyword("type");
    const i = this.parseName(), r = this.parseImplementsInterfaces(), n = this.parseConstDirectives(), o = this.parseFieldsDefinition();
    return this.node(e, {
      kind: p.OBJECT_TYPE_DEFINITION,
      description: a,
      name: i,
      interfaces: r,
      directives: n,
      fields: o
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(f.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      f.BRACE_L,
      this.parseFieldDefinition,
      f.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const e = this._lexer.token, a = this.parseDescription(), i = this.parseName(), r = this.parseArgumentDefs();
    this.expectToken(f.COLON);
    const n = this.parseTypeReference(), o = this.parseConstDirectives();
    return this.node(e, {
      kind: p.FIELD_DEFINITION,
      description: a,
      name: i,
      arguments: r,
      type: n,
      directives: o
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  parseArgumentDefs() {
    return this.optionalMany(
      f.PAREN_L,
      this.parseInputValueDef,
      f.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const e = this._lexer.token, a = this.parseDescription(), i = this.parseName();
    this.expectToken(f.COLON);
    const r = this.parseTypeReference();
    let n;
    this.expectOptionalToken(f.EQUALS) && (n = this.parseConstValueLiteral());
    const o = this.parseConstDirectives();
    return this.node(e, {
      kind: p.INPUT_VALUE_DEFINITION,
      description: a,
      name: i,
      type: r,
      defaultValue: n,
      directives: o
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition() {
    const e = this._lexer.token, a = this.parseDescription();
    this.expectKeyword("interface");
    const i = this.parseName(), r = this.parseImplementsInterfaces(), n = this.parseConstDirectives(), o = this.parseFieldsDefinition();
    return this.node(e, {
      kind: p.INTERFACE_TYPE_DEFINITION,
      description: a,
      name: i,
      interfaces: r,
      directives: n,
      fields: o
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  parseUnionTypeDefinition() {
    const e = this._lexer.token, a = this.parseDescription();
    this.expectKeyword("union");
    const i = this.parseName(), r = this.parseConstDirectives(), n = this.parseUnionMemberTypes();
    return this.node(e, {
      kind: p.UNION_TYPE_DEFINITION,
      description: a,
      name: i,
      directives: r,
      types: n
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  parseUnionMemberTypes() {
    return this.expectOptionalToken(f.EQUALS) ? this.delimitedMany(f.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition() {
    const e = this._lexer.token, a = this.parseDescription();
    this.expectKeyword("enum");
    const i = this.parseName(), r = this.parseConstDirectives(), n = this.parseEnumValuesDefinition();
    return this.node(e, {
      kind: p.ENUM_TYPE_DEFINITION,
      description: a,
      name: i,
      directives: r,
      values: n
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */
  parseEnumValuesDefinition() {
    return this.optionalMany(
      f.BRACE_L,
      this.parseEnumValueDefinition,
      f.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const e = this._lexer.token, a = this.parseDescription(), i = this.parseEnumValueName(), r = this.parseConstDirectives();
    return this.node(e, {
      kind: p.ENUM_VALUE_DEFINITION,
      description: a,
      name: i,
      directives: r
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
      throw vu(
        this._lexer.source,
        this._lexer.token.start,
        `${Va(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  parseInputObjectTypeDefinition() {
    const e = this._lexer.token, a = this.parseDescription();
    this.expectKeyword("input");
    const i = this.parseName(), r = this.parseConstDirectives(), n = this.parseInputFieldsDefinition();
    return this.node(e, {
      kind: p.INPUT_OBJECT_TYPE_DEFINITION,
      description: a,
      name: i,
      directives: r,
      fields: n
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */
  parseInputFieldsDefinition() {
    return this.optionalMany(
      f.BRACE_L,
      this.parseInputValueDef,
      f.BRACE_R
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  parseTypeSystemExtension() {
    const e = this._lexer.lookahead();
    if (e.kind === f.NAME)
      switch (e.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(e);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */
  parseSchemaExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    const a = this.parseConstDirectives(), i = this.optionalMany(
      f.BRACE_L,
      this.parseOperationTypeDefinition,
      f.BRACE_R
    );
    if (a.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: p.SCHEMA_EXTENSION,
      directives: a,
      operationTypes: i
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const a = this.parseName(), i = this.parseConstDirectives();
    if (i.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: p.SCALAR_TYPE_EXTENSION,
      name: a,
      directives: i
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  parseObjectTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    const a = this.parseName(), i = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), n = this.parseFieldsDefinition();
    if (i.length === 0 && r.length === 0 && n.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: p.OBJECT_TYPE_EXTENSION,
      name: a,
      interfaces: i,
      directives: r,
      fields: n
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  parseInterfaceTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    const a = this.parseName(), i = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), n = this.parseFieldsDefinition();
    if (i.length === 0 && r.length === 0 && n.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: p.INTERFACE_TYPE_EXTENSION,
      name: a,
      interfaces: i,
      directives: r,
      fields: n
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  parseUnionTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    const a = this.parseName(), i = this.parseConstDirectives(), r = this.parseUnionMemberTypes();
    if (i.length === 0 && r.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: p.UNION_TYPE_EXTENSION,
      name: a,
      directives: i,
      types: r
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  parseEnumTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    const a = this.parseName(), i = this.parseConstDirectives(), r = this.parseEnumValuesDefinition();
    if (i.length === 0 && r.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: p.ENUM_TYPE_EXTENSION,
      name: a,
      directives: i,
      values: r
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  parseInputObjectTypeExtension() {
    const e = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    const a = this.parseName(), i = this.parseConstDirectives(), r = this.parseInputFieldsDefinition();
    if (i.length === 0 && r.length === 0)
      throw this.unexpected();
    return this.node(e, {
      kind: p.INPUT_OBJECT_TYPE_EXTENSION,
      name: a,
      directives: i,
      fields: r
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */
  parseDirectiveDefinition() {
    const e = this._lexer.token, a = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(f.AT);
    const i = this.parseName(), r = this.parseArgumentDefs(), n = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const o = this.parseDirectiveLocations();
    return this.node(e, {
      kind: p.DIRECTIVE_DEFINITION,
      description: a,
      name: i,
      arguments: r,
      repeatable: n,
      locations: o
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  parseDirectiveLocations() {
    return this.delimitedMany(f.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  parseDirectiveLocation() {
    const e = this._lexer.token, a = this.parseName();
    if (Object.prototype.hasOwnProperty.call(K, a.value))
      return a;
    throw this.unexpected(e);
  }
  // Core parsing utility functions
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node(e, a) {
    return this._options.noLocation !== !0 && (a.loc = new Ds(
      e,
      this._lexer.lastToken,
      this._lexer.source
    )), a;
  }
  /**
   * Determines if the next token is of a given kind
   */
  peek(e) {
    return this._lexer.token.kind === e;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectToken(e) {
    const a = this._lexer.token;
    if (a.kind === e)
      return this.advanceLexer(), a;
    throw vu(
      this._lexer.source,
      a.start,
      `Expected ${vs(e)}, found ${Va(a)}.`
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalToken(e) {
    return this._lexer.token.kind === e ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectKeyword(e) {
    const a = this._lexer.token;
    if (a.kind === f.NAME && a.value === e)
      this.advanceLexer();
    else
      throw vu(
        this._lexer.source,
        a.start,
        `Expected "${e}", found ${Va(a)}.`
      );
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(e) {
    const a = this._lexer.token;
    return a.kind === f.NAME && a.value === e ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(e) {
    const a = e ?? this._lexer.token;
    return vu(
      this._lexer.source,
      a.start,
      `Unexpected ${Va(a)}.`
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(e, a, i) {
    this.expectToken(e);
    const r = [];
    for (; !this.expectOptionalToken(i); )
      r.push(a.call(this));
    return r;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(e, a, i) {
    if (this.expectOptionalToken(e)) {
      const r = [];
      do
        r.push(a.call(this));
      while (!this.expectOptionalToken(i));
      return r;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(e, a, i) {
    this.expectToken(e);
    const r = [];
    do
      r.push(a.call(this));
    while (!this.expectOptionalToken(i));
    return r;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(e, a) {
    this.expectOptionalToken(e);
    const i = [];
    do
      i.push(a.call(this));
    while (this.expectOptionalToken(e));
    return i;
  }
  advanceLexer() {
    const { maxTokens: e } = this._options, a = this._lexer.advance();
    if (e !== void 0 && a.kind !== f.EOF && (++this._tokenCounter, this._tokenCounter > e))
      throw vu(
        this._lexer.source,
        a.start,
        `Document contains more that ${e} tokens. Parsing aborted.`
      );
  }
}
function Va(u) {
  const e = u.value;
  return vs(u.kind) + (e != null ? ` "${e}"` : "");
}
function vs(u) {
  return Fs(u) ? `"${u}"` : u;
}
const kc = 5;
function p0(u, e) {
  const [a, i] = e ? [u, e] : [void 0, u];
  let r = " Did you mean ";
  a && (r += a + " ");
  const n = i.map((s) => `"${s}"`);
  switch (n.length) {
    case 0:
      return "";
    case 1:
      return r + n[0] + "?";
    case 2:
      return r + n[0] + " or " + n[1] + "?";
  }
  const o = n.slice(0, kc), t = o.pop();
  return r + o.join(", ") + ", or " + t + "?";
}
function a1(u) {
  return u;
}
function h0(u, e) {
  const a = /* @__PURE__ */ Object.create(null);
  for (const i of u)
    a[e(i)] = i;
  return a;
}
function j0(u, e, a) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const r of u)
    i[e(r)] = a(r);
  return i;
}
function m0(u, e) {
  const a = /* @__PURE__ */ Object.create(null);
  for (const i of Object.keys(u))
    a[i] = e(u[i], i);
  return a;
}
function Fa(u, e) {
  let a = 0, i = 0;
  for (; a < u.length && i < e.length; ) {
    let r = u.charCodeAt(a), n = e.charCodeAt(i);
    if (Ia(r) && Ia(n)) {
      let o = 0;
      do
        ++a, o = o * 10 + r - bn, r = u.charCodeAt(a);
      while (Ia(r) && o > 0);
      let t = 0;
      do
        ++i, t = t * 10 + n - bn, n = e.charCodeAt(i);
      while (Ia(n) && t > 0);
      if (o < t)
        return -1;
      if (o > t)
        return 1;
    } else {
      if (r < n)
        return -1;
      if (r > n)
        return 1;
      ++a, ++i;
    }
  }
  return u.length - e.length;
}
const bn = 48, pc = 57;
function Ia(u) {
  return !isNaN(u) && bn <= u && u <= pc;
}
function H0(u, e) {
  const a = /* @__PURE__ */ Object.create(null), i = new hc(u), r = Math.floor(u.length * 0.4) + 1;
  for (const n of e) {
    const o = i.measure(n, r);
    o !== void 0 && (a[n] = o);
  }
  return Object.keys(a).sort((n, o) => {
    const t = a[n] - a[o];
    return t !== 0 ? t : Fa(n, o);
  });
}
class hc {
  constructor(e) {
    this._input = e, this._inputLowerCase = e.toLowerCase(), this._inputArray = i1(this._inputLowerCase), this._rows = [
      new Array(e.length + 1).fill(0),
      new Array(e.length + 1).fill(0),
      new Array(e.length + 1).fill(0)
    ];
  }
  measure(e, a) {
    if (this._input === e)
      return 0;
    const i = e.toLowerCase();
    if (this._inputLowerCase === i)
      return 1;
    let r = i1(i), n = this._inputArray;
    if (r.length < n.length) {
      const E = r;
      r = n, n = E;
    }
    const o = r.length, t = n.length;
    if (o - t > a)
      return;
    const s = this._rows;
    for (let E = 0; E <= t; E++)
      s[0][E] = E;
    for (let E = 1; E <= o; E++) {
      const D = s[(E - 1) % 3], x = s[E % 3];
      let c = x[0] = E;
      for (let d = 1; d <= t; d++) {
        const F = r[E - 1] === n[d - 1] ? 0 : 1;
        let k = Math.min(
          D[d] + 1,
          // delete
          x[d - 1] + 1,
          // insert
          D[d - 1] + F
          // substitute
        );
        if (E > 1 && d > 1 && r[E - 1] === n[d - 2] && r[E - 2] === n[d - 1]) {
          const g = s[(E - 2) % 3][d - 2];
          k = Math.min(k, g + 1);
        }
        k < c && (c = k), x[d] = k;
      }
      if (c > a)
        return;
    }
    const l = s[o % 3][t];
    return l <= a ? l : void 0;
  }
}
function i1(u) {
  const e = u.length, a = new Array(e);
  for (let i = 0; i < e; ++i)
    a[i] = u.charCodeAt(i);
  return a;
}
function Xu(u) {
  if (u == null)
    return /* @__PURE__ */ Object.create(null);
  if (Object.getPrototypeOf(u) === null)
    return u;
  const e = /* @__PURE__ */ Object.create(null);
  for (const [a, i] of Object.entries(u))
    e[a] = i;
  return e;
}
function gc(u) {
  return `"${u.replace(Cc, vc)}"`;
}
const Cc = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function vc(u) {
  return bc[u.charCodeAt(0)];
}
const bc = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // 5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
], De = Object.freeze({});
function Se(u, e, a = xs) {
  const i = /* @__PURE__ */ new Map();
  for (const g of Object.values(p))
    i.set(g, ke(e, g));
  let r, n = Array.isArray(u), o = [u], t = -1, s = [], l = u, E, D;
  const x = [], c = [];
  do {
    t++;
    const g = t === o.length, M = g && s.length !== 0;
    if (g) {
      if (E = c.length === 0 ? void 0 : x[x.length - 1], l = D, D = c.pop(), M)
        if (n) {
          l = l.slice();
          let v = 0;
          for (const [T, R] of s) {
            const O = T - v;
            R === null ? (l.splice(O, 1), v++) : l[O] = R;
          }
        } else {
          l = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(l)
          );
          for (const [v, T] of s)
            l[v] = T;
        }
      t = r.index, o = r.keys, s = r.edits, n = r.inArray, r = r.prev;
    } else if (D) {
      if (E = n ? t : o[t], l = D[E], l == null)
        continue;
      x.push(E);
    }
    let A;
    if (!Array.isArray(l)) {
      var d, F;
      Cn(l) || U(!1, `Invalid AST Node: ${z(l)}.`);
      const v = g ? (d = i.get(l.kind)) === null || d === void 0 ? void 0 : d.leave : (F = i.get(l.kind)) === null || F === void 0 ? void 0 : F.enter;
      if (A = v == null ? void 0 : v.call(e, l, E, D, x, c), A === De)
        break;
      if (A === !1) {
        if (!g) {
          x.pop();
          continue;
        }
      } else if (A !== void 0 && (s.push([E, A]), !g))
        if (Cn(A))
          l = A;
        else {
          x.pop();
          continue;
        }
    }
    if (A === void 0 && M && s.push([E, l]), g)
      x.pop();
    else {
      var k;
      r = {
        inArray: n,
        index: t,
        keys: o,
        edits: s,
        prev: r
      }, n = Array.isArray(l), o = n ? l : (k = a[l.kind]) !== null && k !== void 0 ? k : [], t = -1, s = [], D && c.push(D), D = l;
    }
  } while (r !== void 0);
  return s.length !== 0 ? s[s.length - 1][1] : u;
}
function Xn(u) {
  const e = new Array(u.length).fill(null), a = /* @__PURE__ */ Object.create(null);
  for (const i of Object.values(p)) {
    let r = !1;
    const n = new Array(u.length).fill(void 0), o = new Array(u.length).fill(void 0);
    for (let s = 0; s < u.length; ++s) {
      const { enter: l, leave: E } = ke(u[s], i);
      r || (r = l != null || E != null), n[s] = l, o[s] = E;
    }
    if (!r)
      continue;
    const t = {
      enter(...s) {
        const l = s[0];
        for (let D = 0; D < u.length; D++)
          if (e[D] === null) {
            var E;
            const x = (E = n[D]) === null || E === void 0 ? void 0 : E.apply(u[D], s);
            if (x === !1)
              e[D] = l;
            else if (x === De)
              e[D] = De;
            else if (x !== void 0)
              return x;
          }
      },
      leave(...s) {
        const l = s[0];
        for (let D = 0; D < u.length; D++)
          if (e[D] === null) {
            var E;
            const x = (E = o[D]) === null || E === void 0 ? void 0 : E.apply(u[D], s);
            if (x === De)
              e[D] = De;
            else if (x !== void 0 && x !== !1)
              return x;
          } else
            e[D] === l && (e[D] = null);
      }
    };
    a[i] = t;
  }
  return a;
}
function ke(u, e) {
  const a = u[e];
  return typeof a == "object" ? a : typeof a == "function" ? {
    enter: a,
    leave: void 0
  } : {
    enter: u.enter,
    leave: u.leave
  };
}
function Ac(u, e, a) {
  const { enter: i, leave: r } = ke(u, e);
  return a ? r : i;
}
function Eu(u) {
  return Se(u, yc);
}
const Bc = 80, yc = {
  Name: {
    leave: (u) => u.value
  },
  Variable: {
    leave: (u) => "$" + u.name
  },
  // Document
  Document: {
    leave: (u) => w(u.definitions, `

`)
  },
  OperationDefinition: {
    leave(u) {
      const e = Z("(", w(u.variableDefinitions, ", "), ")"), a = w(
        [
          u.operation,
          w([u.name, e]),
          w(u.directives, " ")
        ],
        " "
      );
      return (a === "query" ? "" : a + " ") + u.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: u, type: e, defaultValue: a, directives: i }) => u + ": " + e + Z(" = ", a) + Z(" ", w(i, " "))
  },
  SelectionSet: {
    leave: ({ selections: u }) => e0(u)
  },
  Field: {
    leave({ alias: u, name: e, arguments: a, directives: i, selectionSet: r }) {
      const n = Z("", u, ": ") + e;
      let o = n + Z("(", w(a, ", "), ")");
      return o.length > Bc && (o = n + Z(`(
`, ai(w(a, `
`)), `
)`)), w([o, w(i, " "), r], " ");
    }
  },
  Argument: {
    leave: ({ name: u, value: e }) => u + ": " + e
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: u, directives: e }) => "..." + u + Z(" ", w(e, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: u, directives: e, selectionSet: a }) => w(
      [
        "...",
        Z("on ", u),
        w(e, " "),
        a
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: u, typeCondition: e, variableDefinitions: a, directives: i, selectionSet: r }) => (
      // or removed in the future.
      `fragment ${u}${Z("(", w(a, ", "), ")")} on ${e} ${Z("", w(i, " "), " ")}` + r
    )
  },
  // Value
  IntValue: {
    leave: ({ value: u }) => u
  },
  FloatValue: {
    leave: ({ value: u }) => u
  },
  StringValue: {
    leave: ({ value: u, block: e }) => e ? ms(u) : gc(u)
  },
  BooleanValue: {
    leave: ({ value: u }) => u ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value: u }) => u
  },
  ListValue: {
    leave: ({ values: u }) => "[" + w(u, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: u }) => "{" + w(u, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: u, value: e }) => u + ": " + e
  },
  // Directive
  Directive: {
    leave: ({ name: u, arguments: e }) => "@" + u + Z("(", w(e, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name: u }) => u
  },
  ListType: {
    leave: ({ type: u }) => "[" + u + "]"
  },
  NonNullType: {
    leave: ({ type: u }) => u + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description: u, directives: e, operationTypes: a }) => Z("", u, `
`) + w(["schema", w(e, " "), e0(a)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: u, type: e }) => u + ": " + e
  },
  ScalarTypeDefinition: {
    leave: ({ description: u, name: e, directives: a }) => Z("", u, `
`) + w(["scalar", e, w(a, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: u, name: e, interfaces: a, directives: i, fields: r }) => Z("", u, `
`) + w(
      [
        "type",
        e,
        Z("implements ", w(a, " & ")),
        w(i, " "),
        e0(r)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: u, name: e, arguments: a, type: i, directives: r }) => Z("", u, `
`) + e + (r1(a) ? Z(`(
`, ai(w(a, `
`)), `
)`) : Z("(", w(a, ", "), ")")) + ": " + i + Z(" ", w(r, " "))
  },
  InputValueDefinition: {
    leave: ({ description: u, name: e, type: a, defaultValue: i, directives: r }) => Z("", u, `
`) + w(
      [e + ": " + a, Z("= ", i), w(r, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: u, name: e, interfaces: a, directives: i, fields: r }) => Z("", u, `
`) + w(
      [
        "interface",
        e,
        Z("implements ", w(a, " & ")),
        w(i, " "),
        e0(r)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: u, name: e, directives: a, types: i }) => Z("", u, `
`) + w(
      ["union", e, w(a, " "), Z("= ", w(i, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: u, name: e, directives: a, values: i }) => Z("", u, `
`) + w(["enum", e, w(a, " "), e0(i)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: u, name: e, directives: a }) => Z("", u, `
`) + w([e, w(a, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: u, name: e, directives: a, fields: i }) => Z("", u, `
`) + w(["input", e, w(a, " "), e0(i)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: u, name: e, arguments: a, repeatable: i, locations: r }) => Z("", u, `
`) + "directive @" + e + (r1(a) ? Z(`(
`, ai(w(a, `
`)), `
)`) : Z("(", w(a, ", "), ")")) + (i ? " repeatable" : "") + " on " + w(r, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: u, operationTypes: e }) => w(
      ["extend schema", w(u, " "), e0(e)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: u, directives: e }) => w(["extend scalar", u, w(e, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: u, interfaces: e, directives: a, fields: i }) => w(
      [
        "extend type",
        u,
        Z("implements ", w(e, " & ")),
        w(a, " "),
        e0(i)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: u, interfaces: e, directives: a, fields: i }) => w(
      [
        "extend interface",
        u,
        Z("implements ", w(e, " & ")),
        w(a, " "),
        e0(i)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: u, directives: e, types: a }) => w(
      [
        "extend union",
        u,
        w(e, " "),
        Z("= ", w(a, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: u, directives: e, values: a }) => w(["extend enum", u, w(e, " "), e0(a)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: u, directives: e, fields: a }) => w(["extend input", u, w(e, " "), e0(a)], " ")
  }
};
function w(u, e = "") {
  var a;
  return (a = u == null ? void 0 : u.filter((i) => i).join(e)) !== null && a !== void 0 ? a : "";
}
function e0(u) {
  return Z(`{
`, ai(w(u, `
`)), `
}`);
}
function Z(u, e, a = "") {
  return e != null && e !== "" ? u + e + a : "";
}
function ai(u) {
  return Z("  ", u.replace(/\n/g, `
  `));
}
function r1(u) {
  var e;
  return (e = u == null ? void 0 : u.some((a) => a.includes(`
`))) !== null && e !== void 0 ? e : !1;
}
function di(u, e) {
  switch (u.kind) {
    case p.NULL:
      return null;
    case p.INT:
      return parseInt(u.value, 10);
    case p.FLOAT:
      return parseFloat(u.value);
    case p.STRING:
    case p.ENUM:
    case p.BOOLEAN:
      return u.value;
    case p.LIST:
      return u.values.map(
        (a) => di(a, e)
      );
    case p.OBJECT:
      return j0(
        u.fields,
        (a) => a.name.value,
        (a) => di(a.value, e)
      );
    case p.VARIABLE:
      return e == null ? void 0 : e[u.name.value];
  }
}
function Ou(u) {
  if (u != null || U(!1, "Must provide name."), typeof u == "string" || U(!1, "Expected name to be a string."), u.length === 0)
    throw new B("Expected name to be a non-empty string.");
  for (let e = 1; e < u.length; ++e)
    if (!ds(u.charCodeAt(e)))
      throw new B(
        `Names must only contain [_a-zA-Z0-9] but "${u}" does not.`
      );
  if (!Yn(u.charCodeAt(0)))
    throw new B(
      `Names must start with [_a-zA-Z] but "${u}" does not.`
    );
  return u;
}
function bs(u) {
  if (u === "true" || u === "false" || u === "null")
    throw new B(`Enum values cannot be named: ${u}`);
  return Ou(u);
}
function ka(u) {
  return Ju(u) || Q(u) || uu(u) || Au(u) || hu(u) || xu(u) || Du(u) || I(u);
}
function fc(u) {
  if (!ka(u))
    throw new Error(`Expected ${z(u)} to be a GraphQL type.`);
  return u;
}
function Ju(u) {
  return n0(u, x0);
}
function zc(u) {
  if (!Ju(u))
    throw new Error(`Expected ${z(u)} to be a GraphQL Scalar type.`);
  return u;
}
function Q(u) {
  return n0(u, Yu);
}
function As(u) {
  if (!Q(u))
    throw new Error(`Expected ${z(u)} to be a GraphQL Object type.`);
  return u;
}
function uu(u) {
  return n0(u, pe);
}
function Bs(u) {
  if (!uu(u))
    throw new Error(
      `Expected ${z(u)} to be a GraphQL Interface type.`
    );
  return u;
}
function Au(u) {
  return n0(u, he);
}
function Sc(u) {
  if (!Au(u))
    throw new Error(`Expected ${z(u)} to be a GraphQL Union type.`);
  return u;
}
function hu(u) {
  return n0(u, L0);
}
function Mc(u) {
  if (!hu(u))
    throw new Error(`Expected ${z(u)} to be a GraphQL Enum type.`);
  return u;
}
function xu(u) {
  return n0(u, ge);
}
function jc(u) {
  if (!xu(u))
    throw new Error(
      `Expected ${z(u)} to be a GraphQL Input Object type.`
    );
  return u;
}
function Du(u) {
  return n0(u, zu);
}
function Pc(u) {
  if (!Du(u))
    throw new Error(`Expected ${z(u)} to be a GraphQL List type.`);
  return u;
}
function I(u) {
  return n0(u, W);
}
function Tc(u) {
  if (!I(u))
    throw new Error(`Expected ${z(u)} to be a GraphQL Non-Null type.`);
  return u;
}
function wu(u) {
  return Ju(u) || hu(u) || xu(u) || pa(u) && wu(u.ofType);
}
function wc(u) {
  if (!wu(u))
    throw new Error(`Expected ${z(u)} to be a GraphQL input type.`);
  return u;
}
function T0(u) {
  return Ju(u) || Q(u) || uu(u) || Au(u) || hu(u) || pa(u) && T0(u.ofType);
}
function Nc(u) {
  if (!T0(u))
    throw new Error(`Expected ${z(u)} to be a GraphQL output type.`);
  return u;
}
function E0(u) {
  return Ju(u) || hu(u);
}
function Lc(u) {
  if (!E0(u))
    throw new Error(`Expected ${z(u)} to be a GraphQL leaf type.`);
  return u;
}
function D0(u) {
  return Q(u) || uu(u) || Au(u);
}
function Kc(u) {
  if (!D0(u))
    throw new Error(
      `Expected ${z(u)} to be a GraphQL composite type.`
    );
  return u;
}
function t0(u) {
  return uu(u) || Au(u);
}
function Rc(u) {
  if (!t0(u))
    throw new Error(`Expected ${z(u)} to be a GraphQL abstract type.`);
  return u;
}
class zu {
  constructor(e) {
    ka(e) || U(!1, `Expected ${z(e)} to be a GraphQL type.`), this.ofType = e;
  }
  get [Symbol.toStringTag]() {
    return "GraphQLList";
  }
  toString() {
    return "[" + String(this.ofType) + "]";
  }
  toJSON() {
    return this.toString();
  }
}
class W {
  constructor(e) {
    uo(e) || U(
      !1,
      `Expected ${z(e)} to be a GraphQL nullable type.`
    ), this.ofType = e;
  }
  get [Symbol.toStringTag]() {
    return "GraphQLNonNull";
  }
  toString() {
    return String(this.ofType) + "!";
  }
  toJSON() {
    return this.toString();
  }
}
function pa(u) {
  return Du(u) || I(u);
}
function Hc(u) {
  if (!pa(u))
    throw new Error(`Expected ${z(u)} to be a GraphQL wrapping type.`);
  return u;
}
function uo(u) {
  return ka(u) && !I(u);
}
function ys(u) {
  if (!uo(u))
    throw new Error(`Expected ${z(u)} to be a GraphQL nullable type.`);
  return u;
}
function eo(u) {
  if (u)
    return I(u) ? u.ofType : u;
}
function ha(u) {
  return Ju(u) || Q(u) || uu(u) || Au(u) || hu(u) || xu(u);
}
function _c(u) {
  if (!ha(u))
    throw new Error(`Expected ${z(u)} to be a GraphQL named type.`);
  return u;
}
function ju(u) {
  if (u) {
    let e = u;
    for (; pa(e); )
      e = e.ofType;
    return e;
  }
}
function ao(u) {
  return typeof u == "function" ? u() : u;
}
function io(u) {
  return typeof u == "function" ? u() : u;
}
class x0 {
  constructor(e) {
    var a, i, r, n;
    const o = (a = e.parseValue) !== null && a !== void 0 ? a : a1;
    this.name = Ou(e.name), this.description = e.description, this.specifiedByURL = e.specifiedByURL, this.serialize = (i = e.serialize) !== null && i !== void 0 ? i : a1, this.parseValue = o, this.parseLiteral = (r = e.parseLiteral) !== null && r !== void 0 ? r : (t, s) => o(di(t, s)), this.extensions = Xu(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (n = e.extensionASTNodes) !== null && n !== void 0 ? n : [], e.specifiedByURL == null || typeof e.specifiedByURL == "string" || U(
      !1,
      `${this.name} must provide "specifiedByURL" as a string, but got: ${z(e.specifiedByURL)}.`
    ), e.serialize == null || typeof e.serialize == "function" || U(
      !1,
      `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`
    ), e.parseLiteral && (typeof e.parseValue == "function" && typeof e.parseLiteral == "function" || U(
      !1,
      `${this.name} must provide both "parseValue" and "parseLiteral" functions.`
    ));
  }
  get [Symbol.toStringTag]() {
    return "GraphQLScalarType";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      specifiedByURL: this.specifiedByURL,
      serialize: this.serialize,
      parseValue: this.parseValue,
      parseLiteral: this.parseLiteral,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
class Yu {
  constructor(e) {
    var a;
    this.name = Ou(e.name), this.description = e.description, this.isTypeOf = e.isTypeOf, this.extensions = Xu(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (a = e.extensionASTNodes) !== null && a !== void 0 ? a : [], this._fields = () => zs(e), this._interfaces = () => fs(e), e.isTypeOf == null || typeof e.isTypeOf == "function" || U(
      !1,
      `${this.name} must provide "isTypeOf" as a function, but got: ${z(e.isTypeOf)}.`
    );
  }
  get [Symbol.toStringTag]() {
    return "GraphQLObjectType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  getInterfaces() {
    return typeof this._interfaces == "function" && (this._interfaces = this._interfaces()), this._interfaces;
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      interfaces: this.getInterfaces(),
      fields: Ms(this.getFields()),
      isTypeOf: this.isTypeOf,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
function fs(u) {
  var e;
  const a = ao(
    (e = u.interfaces) !== null && e !== void 0 ? e : []
  );
  return Array.isArray(a) || U(
    !1,
    `${u.name} interfaces must be an Array or a function which returns an Array.`
  ), a;
}
function zs(u) {
  const e = io(u.fields);
  return de(e) || U(
    !1,
    `${u.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), m0(e, (a, i) => {
    var r;
    de(a) || U(
      !1,
      `${u.name}.${i} field config must be an object.`
    ), a.resolve == null || typeof a.resolve == "function" || U(
      !1,
      `${u.name}.${i} field resolver must be a function if provided, but got: ${z(a.resolve)}.`
    );
    const n = (r = a.args) !== null && r !== void 0 ? r : {};
    return de(n) || U(
      !1,
      `${u.name}.${i} args must be an object with argument names as keys.`
    ), {
      name: Ou(i),
      description: a.description,
      type: a.type,
      args: Ss(n),
      resolve: a.resolve,
      subscribe: a.subscribe,
      deprecationReason: a.deprecationReason,
      extensions: Xu(a.extensions),
      astNode: a.astNode
    };
  });
}
function Ss(u) {
  return Object.entries(u).map(([e, a]) => ({
    name: Ou(e),
    description: a.description,
    type: a.type,
    defaultValue: a.defaultValue,
    deprecationReason: a.deprecationReason,
    extensions: Xu(a.extensions),
    astNode: a.astNode
  }));
}
function de(u) {
  return Iu(u) && !Array.isArray(u);
}
function Ms(u) {
  return m0(u, (e) => ({
    description: e.description,
    type: e.type,
    args: js(e.args),
    resolve: e.resolve,
    subscribe: e.subscribe,
    deprecationReason: e.deprecationReason,
    extensions: e.extensions,
    astNode: e.astNode
  }));
}
function js(u) {
  return j0(
    u,
    (e) => e.name,
    (e) => ({
      description: e.description,
      type: e.type,
      defaultValue: e.defaultValue,
      deprecationReason: e.deprecationReason,
      extensions: e.extensions,
      astNode: e.astNode
    })
  );
}
function _0(u) {
  return I(u.type) && u.defaultValue === void 0;
}
class pe {
  constructor(e) {
    var a;
    this.name = Ou(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = Xu(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (a = e.extensionASTNodes) !== null && a !== void 0 ? a : [], this._fields = zs.bind(void 0, e), this._interfaces = fs.bind(void 0, e), e.resolveType == null || typeof e.resolveType == "function" || U(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${z(e.resolveType)}.`
    );
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInterfaceType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  getInterfaces() {
    return typeof this._interfaces == "function" && (this._interfaces = this._interfaces()), this._interfaces;
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      interfaces: this.getInterfaces(),
      fields: Ms(this.getFields()),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
class he {
  constructor(e) {
    var a;
    this.name = Ou(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = Xu(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (a = e.extensionASTNodes) !== null && a !== void 0 ? a : [], this._types = Gc.bind(void 0, e), e.resolveType == null || typeof e.resolveType == "function" || U(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${z(e.resolveType)}.`
    );
  }
  get [Symbol.toStringTag]() {
    return "GraphQLUnionType";
  }
  getTypes() {
    return typeof this._types == "function" && (this._types = this._types()), this._types;
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      types: this.getTypes(),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
function Gc(u) {
  const e = ao(u.types);
  return Array.isArray(e) || U(
    !1,
    `Must provide Array of types or a function which returns such an array for Union ${u.name}.`
  ), e;
}
class L0 {
  /* <T> */
  constructor(e) {
    var a;
    this.name = Ou(e.name), this.description = e.description, this.extensions = Xu(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (a = e.extensionASTNodes) !== null && a !== void 0 ? a : [], this._values = Vc(this.name, e.values), this._valueLookup = new Map(
      this._values.map((i) => [i.value, i])
    ), this._nameLookup = h0(this._values, (i) => i.name);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLEnumType";
  }
  getValues() {
    return this._values;
  }
  getValue(e) {
    return this._nameLookup[e];
  }
  serialize(e) {
    const a = this._valueLookup.get(e);
    if (a === void 0)
      throw new B(
        `Enum "${this.name}" cannot represent value: ${z(e)}`
      );
    return a.name;
  }
  parseValue(e) {
    if (typeof e != "string") {
      const i = z(e);
      throw new B(
        `Enum "${this.name}" cannot represent non-string value: ${i}.` + Oa(this, i)
      );
    }
    const a = this.getValue(e);
    if (a == null)
      throw new B(
        `Value "${e}" does not exist in "${this.name}" enum.` + Oa(this, e)
      );
    return a.value;
  }
  parseLiteral(e, a) {
    if (e.kind !== p.ENUM) {
      const r = Eu(e);
      throw new B(
        `Enum "${this.name}" cannot represent non-enum value: ${r}.` + Oa(this, r),
        {
          nodes: e
        }
      );
    }
    const i = this.getValue(e.value);
    if (i == null) {
      const r = Eu(e);
      throw new B(
        `Value "${r}" does not exist in "${this.name}" enum.` + Oa(this, r),
        {
          nodes: e
        }
      );
    }
    return i.value;
  }
  toConfig() {
    const e = j0(
      this.getValues(),
      (a) => a.name,
      (a) => ({
        description: a.description,
        value: a.value,
        deprecationReason: a.deprecationReason,
        extensions: a.extensions,
        astNode: a.astNode
      })
    );
    return {
      name: this.name,
      description: this.description,
      values: e,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
function Oa(u, e) {
  const a = u.getValues().map((r) => r.name), i = H0(e, a);
  return p0("the enum value", i);
}
function Vc(u, e) {
  return de(e) || U(
    !1,
    `${u} values must be an object with value names as keys.`
  ), Object.entries(e).map(([a, i]) => (de(i) || U(
    !1,
    `${u}.${a} must refer to an object with a "value" key representing an internal value but got: ${z(i)}.`
  ), {
    name: bs(a),
    description: i.description,
    value: i.value !== void 0 ? i.value : a,
    deprecationReason: i.deprecationReason,
    extensions: Xu(i.extensions),
    astNode: i.astNode
  }));
}
class ge {
  constructor(e) {
    var a;
    this.name = Ou(e.name), this.description = e.description, this.extensions = Xu(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (a = e.extensionASTNodes) !== null && a !== void 0 ? a : [], this._fields = Ic.bind(void 0, e);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInputObjectType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  toConfig() {
    const e = m0(this.getFields(), (a) => ({
      description: a.description,
      type: a.type,
      defaultValue: a.defaultValue,
      deprecationReason: a.deprecationReason,
      extensions: a.extensions,
      astNode: a.astNode
    }));
    return {
      name: this.name,
      description: this.description,
      fields: e,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
}
function Ic(u) {
  const e = io(u.fields);
  return de(e) || U(
    !1,
    `${u.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), m0(e, (a, i) => (!("resolve" in a) || U(
    !1,
    `${u.name}.${i} field has a resolve property, but Input Types cannot define resolvers.`
  ), {
    name: Ou(i),
    description: a.description,
    type: a.type,
    defaultValue: a.defaultValue,
    deprecationReason: a.deprecationReason,
    extensions: Xu(a.extensions),
    astNode: a.astNode
  }));
}
function Oi(u) {
  return I(u.type) && u.defaultValue === void 0;
}
function mi(u, e) {
  return u === e ? !0 : I(u) && I(e) || Du(u) && Du(e) ? mi(u.ofType, e.ofType) : !1;
}
function $0(u, e, a) {
  return e === a ? !0 : I(a) ? I(e) ? $0(u, e.ofType, a.ofType) : !1 : I(e) ? $0(u, e.ofType, a) : Du(a) ? Du(e) ? $0(u, e.ofType, a.ofType) : !1 : Du(e) ? !1 : t0(a) && (uu(e) || Q(e)) && u.isSubType(a, e);
}
function An(u, e, a) {
  return e === a ? !0 : t0(e) ? t0(a) ? u.getPossibleTypes(e).some((i) => u.isSubType(a, i)) : u.isSubType(e, a) : t0(a) ? u.isSubType(a, e) : !1;
}
const ii = 2147483647, ri = -2147483648, Ps = new x0({
  name: "Int",
  description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
  serialize(u) {
    const e = Ca(u);
    if (typeof e == "boolean")
      return e ? 1 : 0;
    let a = e;
    if (typeof e == "string" && e !== "" && (a = Number(e)), typeof a != "number" || !Number.isInteger(a))
      throw new B(
        `Int cannot represent non-integer value: ${z(e)}`
      );
    if (a > ii || a < ri)
      throw new B(
        "Int cannot represent non 32-bit signed integer value: " + z(e)
      );
    return a;
  },
  parseValue(u) {
    if (typeof u != "number" || !Number.isInteger(u))
      throw new B(
        `Int cannot represent non-integer value: ${z(u)}`
      );
    if (u > ii || u < ri)
      throw new B(
        `Int cannot represent non 32-bit signed integer value: ${u}`
      );
    return u;
  },
  parseLiteral(u) {
    if (u.kind !== p.INT)
      throw new B(
        `Int cannot represent non-integer value: ${Eu(u)}`,
        {
          nodes: u
        }
      );
    const e = parseInt(u.value, 10);
    if (e > ii || e < ri)
      throw new B(
        `Int cannot represent non 32-bit signed integer value: ${u.value}`,
        {
          nodes: u
        }
      );
    return e;
  }
}), Ts = new x0({
  name: "Float",
  description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
  serialize(u) {
    const e = Ca(u);
    if (typeof e == "boolean")
      return e ? 1 : 0;
    let a = e;
    if (typeof e == "string" && e !== "" && (a = Number(e)), typeof a != "number" || !Number.isFinite(a))
      throw new B(
        `Float cannot represent non numeric value: ${z(e)}`
      );
    return a;
  },
  parseValue(u) {
    if (typeof u != "number" || !Number.isFinite(u))
      throw new B(
        `Float cannot represent non numeric value: ${z(u)}`
      );
    return u;
  },
  parseLiteral(u) {
    if (u.kind !== p.FLOAT && u.kind !== p.INT)
      throw new B(
        `Float cannot represent non numeric value: ${Eu(u)}`,
        u
      );
    return parseFloat(u.value);
  }
}), mu = new x0({
  name: "String",
  description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
  serialize(u) {
    const e = Ca(u);
    if (typeof e == "string")
      return e;
    if (typeof e == "boolean")
      return e ? "true" : "false";
    if (typeof e == "number" && Number.isFinite(e))
      return e.toString();
    throw new B(
      `String cannot represent value: ${z(u)}`
    );
  },
  parseValue(u) {
    if (typeof u != "string")
      throw new B(
        `String cannot represent a non string value: ${z(u)}`
      );
    return u;
  },
  parseLiteral(u) {
    if (u.kind !== p.STRING)
      throw new B(
        `String cannot represent a non string value: ${Eu(u)}`,
        {
          nodes: u
        }
      );
    return u.value;
  }
}), Gu = new x0({
  name: "Boolean",
  description: "The `Boolean` scalar type represents `true` or `false`.",
  serialize(u) {
    const e = Ca(u);
    if (typeof e == "boolean")
      return e;
    if (Number.isFinite(e))
      return e !== 0;
    throw new B(
      `Boolean cannot represent a non boolean value: ${z(e)}`
    );
  },
  parseValue(u) {
    if (typeof u != "boolean")
      throw new B(
        `Boolean cannot represent a non boolean value: ${z(u)}`
      );
    return u;
  },
  parseLiteral(u) {
    if (u.kind !== p.BOOLEAN)
      throw new B(
        `Boolean cannot represent a non boolean value: ${Eu(u)}`,
        {
          nodes: u
        }
      );
    return u.value;
  }
}), ro = new x0({
  name: "ID",
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize(u) {
    const e = Ca(u);
    if (typeof e == "string")
      return e;
    if (Number.isInteger(e))
      return String(e);
    throw new B(
      `ID cannot represent value: ${z(u)}`
    );
  },
  parseValue(u) {
    if (typeof u == "string")
      return u;
    if (typeof u == "number" && Number.isInteger(u))
      return u.toString();
    throw new B(`ID cannot represent value: ${z(u)}`);
  },
  parseLiteral(u) {
    if (u.kind !== p.STRING && u.kind !== p.INT)
      throw new B(
        "ID cannot represent a non-string and non-integer value: " + Eu(u),
        {
          nodes: u
        }
      );
    return u.value;
  }
}), ga = Object.freeze([
  mu,
  Ps,
  Ts,
  Gu,
  ro
]);
function Ji(u) {
  return ga.some(({ name: e }) => u.name === e);
}
function Ca(u) {
  if (Iu(u)) {
    if (typeof u.valueOf == "function") {
      const e = u.valueOf();
      if (!Iu(e))
        return e;
    }
    if (typeof u.toJSON == "function")
      return u.toJSON();
  }
  return u;
}
function $i(u) {
  return n0(u, c0);
}
function Oc(u) {
  if (!$i(u))
    throw new Error(
      `Expected ${z(u)} to be a GraphQL directive.`
    );
  return u;
}
class c0 {
  constructor(e) {
    var a, i;
    this.name = Ou(e.name), this.description = e.description, this.locations = e.locations, this.isRepeatable = (a = e.isRepeatable) !== null && a !== void 0 ? a : !1, this.extensions = Xu(e.extensions), this.astNode = e.astNode, Array.isArray(e.locations) || U(!1, `@${e.name} locations must be an Array.`);
    const r = (i = e.args) !== null && i !== void 0 ? i : {};
    Iu(r) && !Array.isArray(r) || U(
      !1,
      `@${e.name} args must be an object with argument names as keys.`
    ), this.args = Ss(r);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLDirective";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: js(this.args),
      isRepeatable: this.isRepeatable,
      extensions: this.extensions,
      astNode: this.astNode
    };
  }
  toString() {
    return "@" + this.name;
  }
  toJSON() {
    return this.toString();
  }
}
const no = new c0({
  name: "include",
  description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
  locations: [
    K.FIELD,
    K.FRAGMENT_SPREAD,
    K.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new W(Gu),
      description: "Included when true."
    }
  }
}), oo = new c0({
  name: "skip",
  description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
  locations: [
    K.FIELD,
    K.FRAGMENT_SPREAD,
    K.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new W(Gu),
      description: "Skipped when true."
    }
  }
}), to = "No longer supported", qi = new c0({
  name: "deprecated",
  description: "Marks an element of a GraphQL schema as no longer supported.",
  locations: [
    K.FIELD_DEFINITION,
    K.ARGUMENT_DEFINITION,
    K.INPUT_FIELD_DEFINITION,
    K.ENUM_VALUE
  ],
  args: {
    reason: {
      type: mu,
      description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
      defaultValue: to
    }
  }
}), so = new c0({
  name: "specifiedBy",
  description: "Exposes a URL that specifies the behavior of this scalar.",
  locations: [K.SCALAR],
  args: {
    url: {
      type: new W(mu),
      description: "The URL that specifies the behavior of this scalar."
    }
  }
}), G0 = Object.freeze([
  no,
  oo,
  qi,
  so
]);
function lo(u) {
  return G0.some(({ name: e }) => e === u.name);
}
function Eo(u) {
  return typeof u == "object" && typeof (u == null ? void 0 : u[Symbol.iterator]) == "function";
}
function P0(u, e) {
  if (I(e)) {
    const a = P0(u, e.ofType);
    return (a == null ? void 0 : a.kind) === p.NULL ? null : a;
  }
  if (u === null)
    return {
      kind: p.NULL
    };
  if (u === void 0)
    return null;
  if (Du(e)) {
    const a = e.ofType;
    if (Eo(u)) {
      const i = [];
      for (const r of u) {
        const n = P0(r, a);
        n != null && i.push(n);
      }
      return {
        kind: p.LIST,
        values: i
      };
    }
    return P0(u, a);
  }
  if (xu(e)) {
    if (!Iu(u))
      return null;
    const a = [];
    for (const i of Object.values(e.getFields())) {
      const r = P0(u[i.name], i.type);
      r && a.push({
        kind: p.OBJECT_FIELD,
        name: {
          kind: p.NAME,
          value: i.name
        },
        value: r
      });
    }
    return {
      kind: p.OBJECT,
      fields: a
    };
  }
  if (E0(e)) {
    const a = e.serialize(u);
    if (a == null)
      return null;
    if (typeof a == "boolean")
      return {
        kind: p.BOOLEAN,
        value: a
      };
    if (typeof a == "number" && Number.isFinite(a)) {
      const i = String(a);
      return n1.test(i) ? {
        kind: p.INT,
        value: i
      } : {
        kind: p.FLOAT,
        value: i
      };
    }
    if (typeof a == "string")
      return hu(e) ? {
        kind: p.ENUM,
        value: a
      } : e === ro && n1.test(a) ? {
        kind: p.INT,
        value: a
      } : {
        kind: p.STRING,
        value: a
      };
    throw new TypeError(`Cannot convert value to AST: ${z(a)}.`);
  }
  ku(!1, "Unexpected input type: " + z(e));
}
const n1 = /^-?(?:0|[1-9][0-9]*)$/, Wi = new Yu({
  name: "__Schema",
  description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
  fields: () => ({
    description: {
      type: mu,
      resolve: (u) => u.description
    },
    types: {
      description: "A list of all types supported by this server.",
      type: new W(new zu(new W(Wu))),
      resolve(u) {
        return Object.values(u.getTypeMap());
      }
    },
    queryType: {
      description: "The type that query operations will be rooted at.",
      type: new W(Wu),
      resolve: (u) => u.getQueryType()
    },
    mutationType: {
      description: "If this server supports mutation, the type that mutation operations will be rooted at.",
      type: Wu,
      resolve: (u) => u.getMutationType()
    },
    subscriptionType: {
      description: "If this server support subscription, the type that subscription operations will be rooted at.",
      type: Wu,
      resolve: (u) => u.getSubscriptionType()
    },
    directives: {
      description: "A list of all directives supported by this server.",
      type: new W(
        new zu(new W(Do))
      ),
      resolve: (u) => u.getDirectives()
    }
  })
}), Do = new Yu({
  name: "__Directive",
  description: `A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,
  fields: () => ({
    name: {
      type: new W(mu),
      resolve: (u) => u.name
    },
    description: {
      type: mu,
      resolve: (u) => u.description
    },
    isRepeatable: {
      type: new W(Gu),
      resolve: (u) => u.isRepeatable
    },
    locations: {
      type: new W(
        new zu(new W(xo))
      ),
      resolve: (u) => u.locations
    },
    args: {
      type: new W(
        new zu(new W(va))
      ),
      args: {
        includeDeprecated: {
          type: Gu,
          defaultValue: !1
        }
      },
      resolve(u, { includeDeprecated: e }) {
        return e ? u.args : u.args.filter((a) => a.deprecationReason == null);
      }
    }
  })
}), xo = new L0({
  name: "__DirectiveLocation",
  description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
  values: {
    QUERY: {
      value: K.QUERY,
      description: "Location adjacent to a query operation."
    },
    MUTATION: {
      value: K.MUTATION,
      description: "Location adjacent to a mutation operation."
    },
    SUBSCRIPTION: {
      value: K.SUBSCRIPTION,
      description: "Location adjacent to a subscription operation."
    },
    FIELD: {
      value: K.FIELD,
      description: "Location adjacent to a field."
    },
    FRAGMENT_DEFINITION: {
      value: K.FRAGMENT_DEFINITION,
      description: "Location adjacent to a fragment definition."
    },
    FRAGMENT_SPREAD: {
      value: K.FRAGMENT_SPREAD,
      description: "Location adjacent to a fragment spread."
    },
    INLINE_FRAGMENT: {
      value: K.INLINE_FRAGMENT,
      description: "Location adjacent to an inline fragment."
    },
    VARIABLE_DEFINITION: {
      value: K.VARIABLE_DEFINITION,
      description: "Location adjacent to a variable definition."
    },
    SCHEMA: {
      value: K.SCHEMA,
      description: "Location adjacent to a schema definition."
    },
    SCALAR: {
      value: K.SCALAR,
      description: "Location adjacent to a scalar definition."
    },
    OBJECT: {
      value: K.OBJECT,
      description: "Location adjacent to an object type definition."
    },
    FIELD_DEFINITION: {
      value: K.FIELD_DEFINITION,
      description: "Location adjacent to a field definition."
    },
    ARGUMENT_DEFINITION: {
      value: K.ARGUMENT_DEFINITION,
      description: "Location adjacent to an argument definition."
    },
    INTERFACE: {
      value: K.INTERFACE,
      description: "Location adjacent to an interface definition."
    },
    UNION: {
      value: K.UNION,
      description: "Location adjacent to a union definition."
    },
    ENUM: {
      value: K.ENUM,
      description: "Location adjacent to an enum definition."
    },
    ENUM_VALUE: {
      value: K.ENUM_VALUE,
      description: "Location adjacent to an enum value definition."
    },
    INPUT_OBJECT: {
      value: K.INPUT_OBJECT,
      description: "Location adjacent to an input object type definition."
    },
    INPUT_FIELD_DEFINITION: {
      value: K.INPUT_FIELD_DEFINITION,
      description: "Location adjacent to an input object field definition."
    }
  }
}), Wu = new Yu({
  name: "__Type",
  description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
  fields: () => ({
    kind: {
      type: new W(Fo),
      resolve(u) {
        if (Ju(u))
          return nu.SCALAR;
        if (Q(u))
          return nu.OBJECT;
        if (uu(u))
          return nu.INTERFACE;
        if (Au(u))
          return nu.UNION;
        if (hu(u))
          return nu.ENUM;
        if (xu(u))
          return nu.INPUT_OBJECT;
        if (Du(u))
          return nu.LIST;
        if (I(u))
          return nu.NON_NULL;
        ku(!1, `Unexpected type: "${z(u)}".`);
      }
    },
    name: {
      type: mu,
      resolve: (u) => "name" in u ? u.name : void 0
    },
    description: {
      type: mu,
      resolve: (u) => (
        /* c8 ignore next */
        "description" in u ? u.description : void 0
      )
    },
    specifiedByURL: {
      type: mu,
      resolve: (u) => "specifiedByURL" in u ? u.specifiedByURL : void 0
    },
    fields: {
      type: new zu(new W(co)),
      args: {
        includeDeprecated: {
          type: Gu,
          defaultValue: !1
        }
      },
      resolve(u, { includeDeprecated: e }) {
        if (Q(u) || uu(u)) {
          const a = Object.values(u.getFields());
          return e ? a : a.filter((i) => i.deprecationReason == null);
        }
      }
    },
    interfaces: {
      type: new zu(new W(Wu)),
      resolve(u) {
        if (Q(u) || uu(u))
          return u.getInterfaces();
      }
    },
    possibleTypes: {
      type: new zu(new W(Wu)),
      resolve(u, e, a, { schema: i }) {
        if (t0(u))
          return i.getPossibleTypes(u);
      }
    },
    enumValues: {
      type: new zu(new W(mo)),
      args: {
        includeDeprecated: {
          type: Gu,
          defaultValue: !1
        }
      },
      resolve(u, { includeDeprecated: e }) {
        if (hu(u)) {
          const a = u.getValues();
          return e ? a : a.filter((i) => i.deprecationReason == null);
        }
      }
    },
    inputFields: {
      type: new zu(new W(va)),
      args: {
        includeDeprecated: {
          type: Gu,
          defaultValue: !1
        }
      },
      resolve(u, { includeDeprecated: e }) {
        if (xu(u)) {
          const a = Object.values(u.getFields());
          return e ? a : a.filter((i) => i.deprecationReason == null);
        }
      }
    },
    ofType: {
      type: Wu,
      resolve: (u) => "ofType" in u ? u.ofType : void 0
    }
  })
}), co = new Yu({
  name: "__Field",
  description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
  fields: () => ({
    name: {
      type: new W(mu),
      resolve: (u) => u.name
    },
    description: {
      type: mu,
      resolve: (u) => u.description
    },
    args: {
      type: new W(
        new zu(new W(va))
      ),
      args: {
        includeDeprecated: {
          type: Gu,
          defaultValue: !1
        }
      },
      resolve(u, { includeDeprecated: e }) {
        return e ? u.args : u.args.filter((a) => a.deprecationReason == null);
      }
    },
    type: {
      type: new W(Wu),
      resolve: (u) => u.type
    },
    isDeprecated: {
      type: new W(Gu),
      resolve: (u) => u.deprecationReason != null
    },
    deprecationReason: {
      type: mu,
      resolve: (u) => u.deprecationReason
    }
  })
}), va = new Yu({
  name: "__InputValue",
  description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
  fields: () => ({
    name: {
      type: new W(mu),
      resolve: (u) => u.name
    },
    description: {
      type: mu,
      resolve: (u) => u.description
    },
    type: {
      type: new W(Wu),
      resolve: (u) => u.type
    },
    defaultValue: {
      type: mu,
      description: "A GraphQL-formatted string representing the default value for this input value.",
      resolve(u) {
        const { type: e, defaultValue: a } = u, i = P0(a, e);
        return i ? Eu(i) : null;
      }
    },
    isDeprecated: {
      type: new W(Gu),
      resolve: (u) => u.deprecationReason != null
    },
    deprecationReason: {
      type: mu,
      resolve: (u) => u.deprecationReason
    }
  })
}), mo = new Yu({
  name: "__EnumValue",
  description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
  fields: () => ({
    name: {
      type: new W(mu),
      resolve: (u) => u.name
    },
    description: {
      type: mu,
      resolve: (u) => u.description
    },
    isDeprecated: {
      type: new W(Gu),
      resolve: (u) => u.deprecationReason != null
    },
    deprecationReason: {
      type: mu,
      resolve: (u) => u.deprecationReason
    }
  })
});
var nu;
(function(u) {
  u.SCALAR = "SCALAR", u.OBJECT = "OBJECT", u.INTERFACE = "INTERFACE", u.UNION = "UNION", u.ENUM = "ENUM", u.INPUT_OBJECT = "INPUT_OBJECT", u.LIST = "LIST", u.NON_NULL = "NON_NULL";
})(nu || (nu = {}));
const Fo = new L0({
  name: "__TypeKind",
  description: "An enum describing what kind of type a given `__Type` is.",
  values: {
    SCALAR: {
      value: nu.SCALAR,
      description: "Indicates this type is a scalar."
    },
    OBJECT: {
      value: nu.OBJECT,
      description: "Indicates this type is an object. `fields` and `interfaces` are valid fields."
    },
    INTERFACE: {
      value: nu.INTERFACE,
      description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
    },
    UNION: {
      value: nu.UNION,
      description: "Indicates this type is a union. `possibleTypes` is a valid field."
    },
    ENUM: {
      value: nu.ENUM,
      description: "Indicates this type is an enum. `enumValues` is a valid field."
    },
    INPUT_OBJECT: {
      value: nu.INPUT_OBJECT,
      description: "Indicates this type is an input object. `inputFields` is a valid field."
    },
    LIST: {
      value: nu.LIST,
      description: "Indicates this type is a list. `ofType` is a valid field."
    },
    NON_NULL: {
      value: nu.NON_NULL,
      description: "Indicates this type is a non-null. `ofType` is a valid field."
    }
  }
}), Qe = {
  name: "__schema",
  type: new W(Wi),
  description: "Access the current type schema of this server.",
  args: [],
  resolve: (u, e, a, { schema: i }) => i,
  deprecationReason: void 0,
  extensions: /* @__PURE__ */ Object.create(null),
  astNode: void 0
}, Xe = {
  name: "__type",
  type: Wu,
  description: "Request the type information of a single type.",
  args: [
    {
      name: "name",
      description: void 0,
      type: new W(mu),
      defaultValue: void 0,
      deprecationReason: void 0,
      extensions: /* @__PURE__ */ Object.create(null),
      astNode: void 0
    }
  ],
  resolve: (u, { name: e }, a, { schema: i }) => i.getType(e),
  deprecationReason: void 0,
  extensions: /* @__PURE__ */ Object.create(null),
  astNode: void 0
}, ua = {
  name: "__typename",
  type: new W(mu),
  description: "The name of the current Object type at runtime.",
  args: [],
  resolve: (u, e, a, { parentType: i }) => i.name,
  deprecationReason: void 0,
  extensions: /* @__PURE__ */ Object.create(null),
  astNode: void 0
}, ba = Object.freeze([
  Wi,
  Do,
  xo,
  Wu,
  co,
  va,
  mo,
  Fo
]);
function ue(u) {
  return ba.some(({ name: e }) => u.name === e);
}
function ws(u) {
  return n0(u, Me);
}
function ko(u) {
  if (!ws(u))
    throw new Error(`Expected ${z(u)} to be a GraphQL schema.`);
  return u;
}
class Me {
  // Used as a cache for validateSchema().
  constructor(e) {
    var a, i;
    this.__validationErrors = e.assumeValid === !0 ? [] : void 0, Iu(e) || U(!1, "Must provide configuration object."), !e.types || Array.isArray(e.types) || U(
      !1,
      `"types" must be Array if provided but got: ${z(e.types)}.`
    ), !e.directives || Array.isArray(e.directives) || U(
      !1,
      `"directives" must be Array if provided but got: ${z(e.directives)}.`
    ), this.description = e.description, this.extensions = Xu(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (a = e.extensionASTNodes) !== null && a !== void 0 ? a : [], this._queryType = e.query, this._mutationType = e.mutation, this._subscriptionType = e.subscription, this._directives = (i = e.directives) !== null && i !== void 0 ? i : G0;
    const r = new Set(e.types);
    if (e.types != null)
      for (const n of e.types)
        r.delete(n), a0(n, r);
    this._queryType != null && a0(this._queryType, r), this._mutationType != null && a0(this._mutationType, r), this._subscriptionType != null && a0(this._subscriptionType, r);
    for (const n of this._directives)
      if ($i(n))
        for (const o of n.args)
          a0(o.type, r);
    a0(Wi, r), this._typeMap = /* @__PURE__ */ Object.create(null), this._subTypeMap = /* @__PURE__ */ Object.create(null), this._implementationsMap = /* @__PURE__ */ Object.create(null);
    for (const n of r) {
      if (n == null)
        continue;
      const o = n.name;
      if (o || U(
        !1,
        "One of the provided types for building the Schema is missing a name."
      ), this._typeMap[o] !== void 0)
        throw new Error(
          `Schema must contain uniquely named types but contains multiple types named "${o}".`
        );
      if (this._typeMap[o] = n, uu(n)) {
        for (const t of n.getInterfaces())
          if (uu(t)) {
            let s = this._implementationsMap[t.name];
            s === void 0 && (s = this._implementationsMap[t.name] = {
              objects: [],
              interfaces: []
            }), s.interfaces.push(n);
          }
      } else if (Q(n)) {
        for (const t of n.getInterfaces())
          if (uu(t)) {
            let s = this._implementationsMap[t.name];
            s === void 0 && (s = this._implementationsMap[t.name] = {
              objects: [],
              interfaces: []
            }), s.objects.push(n);
          }
      }
    }
  }
  get [Symbol.toStringTag]() {
    return "GraphQLSchema";
  }
  getQueryType() {
    return this._queryType;
  }
  getMutationType() {
    return this._mutationType;
  }
  getSubscriptionType() {
    return this._subscriptionType;
  }
  getRootType(e) {
    switch (e) {
      case bu.QUERY:
        return this.getQueryType();
      case bu.MUTATION:
        return this.getMutationType();
      case bu.SUBSCRIPTION:
        return this.getSubscriptionType();
    }
  }
  getTypeMap() {
    return this._typeMap;
  }
  getType(e) {
    return this.getTypeMap()[e];
  }
  getPossibleTypes(e) {
    return Au(e) ? e.getTypes() : this.getImplementations(e).objects;
  }
  getImplementations(e) {
    const a = this._implementationsMap[e.name];
    return a ?? {
      objects: [],
      interfaces: []
    };
  }
  isSubType(e, a) {
    let i = this._subTypeMap[e.name];
    if (i === void 0) {
      if (i = /* @__PURE__ */ Object.create(null), Au(e))
        for (const r of e.getTypes())
          i[r.name] = !0;
      else {
        const r = this.getImplementations(e);
        for (const n of r.objects)
          i[n.name] = !0;
        for (const n of r.interfaces)
          i[n.name] = !0;
      }
      this._subTypeMap[e.name] = i;
    }
    return i[a.name] !== void 0;
  }
  getDirectives() {
    return this._directives;
  }
  getDirective(e) {
    return this.getDirectives().find((a) => a.name === e);
  }
  toConfig() {
    return {
      description: this.description,
      query: this.getQueryType(),
      mutation: this.getMutationType(),
      subscription: this.getSubscriptionType(),
      types: Object.values(this.getTypeMap()),
      directives: this.getDirectives(),
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes,
      assumeValid: this.__validationErrors !== void 0
    };
  }
}
function a0(u, e) {
  const a = ju(u);
  if (!e.has(a)) {
    if (e.add(a), Au(a))
      for (const i of a.getTypes())
        a0(i, e);
    else if (Q(a) || uu(a)) {
      for (const i of a.getInterfaces())
        a0(i, e);
      for (const i of Object.values(a.getFields())) {
        a0(i.type, e);
        for (const r of i.args)
          a0(r.type, e);
      }
    } else if (xu(a))
      for (const i of Object.values(a.getFields()))
        a0(i.type, e);
  }
  return e;
}
function po(u) {
  if (ko(u), u.__validationErrors)
    return u.__validationErrors;
  const e = new Jc(u);
  $c(e), qc(e), Wc(e);
  const a = e.getErrors();
  return u.__validationErrors = a, a;
}
function ho(u) {
  const e = po(u);
  if (e.length !== 0)
    throw new Error(e.map((a) => a.message).join(`

`));
}
class Jc {
  constructor(e) {
    this._errors = [], this.schema = e;
  }
  reportError(e, a) {
    const i = Array.isArray(a) ? a.filter(Boolean) : a;
    this._errors.push(
      new B(e, {
        nodes: i
      })
    );
  }
  getErrors() {
    return this._errors;
  }
}
function $c(u) {
  const e = u.schema, a = e.getQueryType();
  if (!a)
    u.reportError("Query root type must be provided.", e.astNode);
  else if (!Q(a)) {
    var i;
    u.reportError(
      `Query root type must be Object type, it cannot be ${z(
        a
      )}.`,
      (i = un(
        e,
        bu.QUERY
      )) !== null && i !== void 0 ? i : a.astNode
    );
  }
  const r = e.getMutationType();
  if (r && !Q(r)) {
    var n;
    u.reportError(
      `Mutation root type must be Object type if provided, it cannot be ${z(r)}.`,
      (n = un(
        e,
        bu.MUTATION
      )) !== null && n !== void 0 ? n : r.astNode
    );
  }
  const o = e.getSubscriptionType();
  if (o && !Q(o)) {
    var t;
    u.reportError(
      `Subscription root type must be Object type if provided, it cannot be ${z(o)}.`,
      (t = un(
        e,
        bu.SUBSCRIPTION
      )) !== null && t !== void 0 ? t : o.astNode
    );
  }
}
function un(u, e) {
  var a;
  return (a = [u.astNode, ...u.extensionASTNodes].flatMap(
    // FIXME: https://github.com/graphql/graphql-js/issues/2203
    (i) => {
      var r;
      return (
        /* c8 ignore next */
        (r = i == null ? void 0 : i.operationTypes) !== null && r !== void 0 ? r : []
      );
    }
  ).find((i) => i.operation === e)) === null || a === void 0 ? void 0 : a.type;
}
function qc(u) {
  for (const a of u.schema.getDirectives()) {
    if (!$i(a)) {
      u.reportError(
        `Expected directive but got: ${z(a)}.`,
        a == null ? void 0 : a.astNode
      );
      continue;
    }
    Z0(u, a);
    for (const i of a.args)
      if (Z0(u, i), wu(i.type) || u.reportError(
        `The type of @${a.name}(${i.name}:) must be Input Type but got: ${z(i.type)}.`,
        i.astNode
      ), _0(i) && i.deprecationReason != null) {
        var e;
        u.reportError(
          `Required argument @${a.name}(${i.name}:) cannot be deprecated.`,
          [
            go(i.astNode),
            (e = i.astNode) === null || e === void 0 ? void 0 : e.type
          ]
        );
      }
  }
}
function Z0(u, e) {
  e.name.startsWith("__") && u.reportError(
    `Name "${e.name}" must not begin with "__", which is reserved by GraphQL introspection.`,
    e.astNode
  );
}
function Wc(u) {
  const e = ud(u), a = u.schema.getTypeMap();
  for (const i of Object.values(a)) {
    if (!ha(i)) {
      u.reportError(
        `Expected GraphQL named type but got: ${z(i)}.`,
        i.astNode
      );
      continue;
    }
    ue(i) || Z0(u, i), Q(i) || uu(i) ? (o1(u, i), t1(u, i)) : Au(i) ? Yc(u, i) : hu(i) ? Qc(u, i) : xu(i) && (Xc(u, i), e(i));
  }
}
function o1(u, e) {
  const a = Object.values(e.getFields());
  a.length === 0 && u.reportError(`Type ${e.name} must define one or more fields.`, [
    e.astNode,
    ...e.extensionASTNodes
  ]);
  for (const o of a) {
    if (Z0(u, o), !T0(o.type)) {
      var i;
      u.reportError(
        `The type of ${e.name}.${o.name} must be Output Type but got: ${z(o.type)}.`,
        (i = o.astNode) === null || i === void 0 ? void 0 : i.type
      );
    }
    for (const t of o.args) {
      const s = t.name;
      if (Z0(u, t), !wu(t.type)) {
        var r;
        u.reportError(
          `The type of ${e.name}.${o.name}(${s}:) must be Input Type but got: ${z(t.type)}.`,
          (r = t.astNode) === null || r === void 0 ? void 0 : r.type
        );
      }
      if (_0(t) && t.deprecationReason != null) {
        var n;
        u.reportError(
          `Required argument ${e.name}.${o.name}(${s}:) cannot be deprecated.`,
          [
            go(t.astNode),
            (n = t.astNode) === null || n === void 0 ? void 0 : n.type
          ]
        );
      }
    }
  }
}
function t1(u, e) {
  const a = /* @__PURE__ */ Object.create(null);
  for (const i of e.getInterfaces()) {
    if (!uu(i)) {
      u.reportError(
        `Type ${z(e)} must only implement Interface types, it cannot implement ${z(i)}.`,
        Je(e, i)
      );
      continue;
    }
    if (e === i) {
      u.reportError(
        `Type ${e.name} cannot implement itself because it would create a circular reference.`,
        Je(e, i)
      );
      continue;
    }
    if (a[i.name]) {
      u.reportError(
        `Type ${e.name} can only implement ${i.name} once.`,
        Je(e, i)
      );
      continue;
    }
    a[i.name] = !0, Zc(u, e, i), Uc(u, e, i);
  }
}
function Uc(u, e, a) {
  const i = e.getFields();
  for (const s of Object.values(a.getFields())) {
    const l = s.name, E = i[l];
    if (!E) {
      u.reportError(
        `Interface field ${a.name}.${l} expected but ${e.name} does not provide it.`,
        [s.astNode, e.astNode, ...e.extensionASTNodes]
      );
      continue;
    }
    if (!$0(u.schema, E.type, s.type)) {
      var r, n;
      u.reportError(
        `Interface field ${a.name}.${l} expects type ${z(s.type)} but ${e.name}.${l} is type ${z(E.type)}.`,
        [
          (r = s.astNode) === null || r === void 0 ? void 0 : r.type,
          (n = E.astNode) === null || n === void 0 ? void 0 : n.type
        ]
      );
    }
    for (const D of s.args) {
      const x = D.name, c = E.args.find((d) => d.name === x);
      if (!c) {
        u.reportError(
          `Interface field argument ${a.name}.${l}(${x}:) expected but ${e.name}.${l} does not provide it.`,
          [D.astNode, E.astNode]
        );
        continue;
      }
      if (!mi(D.type, c.type)) {
        var o, t;
        u.reportError(
          `Interface field argument ${a.name}.${l}(${x}:) expects type ${z(D.type)} but ${e.name}.${l}(${x}:) is type ${z(c.type)}.`,
          [
            (o = D.astNode) === null || o === void 0 ? void 0 : o.type,
            (t = c.astNode) === null || t === void 0 ? void 0 : t.type
          ]
        );
      }
    }
    for (const D of E.args) {
      const x = D.name;
      !s.args.find((d) => d.name === x) && _0(D) && u.reportError(
        `Object field ${e.name}.${l} includes required argument ${x} that is missing from the Interface field ${a.name}.${l}.`,
        [D.astNode, s.astNode]
      );
    }
  }
}
function Zc(u, e, a) {
  const i = e.getInterfaces();
  for (const r of a.getInterfaces())
    i.includes(r) || u.reportError(
      r === e ? `Type ${e.name} cannot implement ${a.name} because it would create a circular reference.` : `Type ${e.name} must implement ${r.name} because it is implemented by ${a.name}.`,
      [
        ...Je(a, r),
        ...Je(e, a)
      ]
    );
}
function Yc(u, e) {
  const a = e.getTypes();
  a.length === 0 && u.reportError(
    `Union type ${e.name} must define one or more member types.`,
    [e.astNode, ...e.extensionASTNodes]
  );
  const i = /* @__PURE__ */ Object.create(null);
  for (const r of a) {
    if (i[r.name]) {
      u.reportError(
        `Union type ${e.name} can only include type ${r.name} once.`,
        s1(e, r.name)
      );
      continue;
    }
    i[r.name] = !0, Q(r) || u.reportError(
      `Union type ${e.name} can only include Object types, it cannot include ${z(r)}.`,
      s1(e, String(r))
    );
  }
}
function Qc(u, e) {
  const a = e.getValues();
  a.length === 0 && u.reportError(
    `Enum type ${e.name} must define one or more values.`,
    [e.astNode, ...e.extensionASTNodes]
  );
  for (const i of a)
    Z0(u, i);
}
function Xc(u, e) {
  const a = Object.values(e.getFields());
  a.length === 0 && u.reportError(
    `Input Object type ${e.name} must define one or more fields.`,
    [e.astNode, ...e.extensionASTNodes]
  );
  for (const n of a) {
    if (Z0(u, n), !wu(n.type)) {
      var i;
      u.reportError(
        `The type of ${e.name}.${n.name} must be Input Type but got: ${z(n.type)}.`,
        (i = n.astNode) === null || i === void 0 ? void 0 : i.type
      );
    }
    if (Oi(n) && n.deprecationReason != null) {
      var r;
      u.reportError(
        `Required input field ${e.name}.${n.name} cannot be deprecated.`,
        [
          go(n.astNode),
          (r = n.astNode) === null || r === void 0 ? void 0 : r.type
        ]
      );
    }
  }
}
function ud(u) {
  const e = /* @__PURE__ */ Object.create(null), a = [], i = /* @__PURE__ */ Object.create(null);
  return r;
  function r(n) {
    if (e[n.name])
      return;
    e[n.name] = !0, i[n.name] = a.length;
    const o = Object.values(n.getFields());
    for (const t of o)
      if (I(t.type) && xu(t.type.ofType)) {
        const s = t.type.ofType, l = i[s.name];
        if (a.push(t), l === void 0)
          r(s);
        else {
          const E = a.slice(l), D = E.map((x) => x.name).join(".");
          u.reportError(
            `Cannot reference Input Object "${s.name}" within itself through a series of non-null fields: "${D}".`,
            E.map((x) => x.astNode)
          );
        }
        a.pop();
      }
    i[n.name] = void 0;
  }
}
function Je(u, e) {
  const { astNode: a, extensionASTNodes: i } = u;
  return (a != null ? [a, ...i] : i).flatMap((n) => {
    var o;
    return (
      /* c8 ignore next */
      (o = n.interfaces) !== null && o !== void 0 ? o : []
    );
  }).filter((n) => n.name.value === e.name);
}
function s1(u, e) {
  const { astNode: a, extensionASTNodes: i } = u;
  return (a != null ? [a, ...i] : i).flatMap((n) => {
    var o;
    return (
      /* c8 ignore next */
      (o = n.types) !== null && o !== void 0 ? o : []
    );
  }).filter((n) => n.name.value === e);
}
function go(u) {
  var e;
  return u == null || (e = u.directives) === null || e === void 0 ? void 0 : e.find(
    (a) => a.name.value === qi.name
  );
}
function Nu(u, e) {
  switch (e.kind) {
    case p.LIST_TYPE: {
      const a = Nu(u, e.type);
      return a && new zu(a);
    }
    case p.NON_NULL_TYPE: {
      const a = Nu(u, e.type);
      return a && new W(a);
    }
    case p.NAMED_TYPE:
      return u.getType(e.name.value);
  }
}
class Co {
  constructor(e, a, i) {
    this._schema = e, this._typeStack = [], this._parentTypeStack = [], this._inputTypeStack = [], this._fieldDefStack = [], this._defaultValueStack = [], this._directive = null, this._argument = null, this._enumValue = null, this._getFieldDef = i ?? ed, a && (wu(a) && this._inputTypeStack.push(a), D0(a) && this._parentTypeStack.push(a), T0(a) && this._typeStack.push(a));
  }
  get [Symbol.toStringTag]() {
    return "TypeInfo";
  }
  getType() {
    if (this._typeStack.length > 0)
      return this._typeStack[this._typeStack.length - 1];
  }
  getParentType() {
    if (this._parentTypeStack.length > 0)
      return this._parentTypeStack[this._parentTypeStack.length - 1];
  }
  getInputType() {
    if (this._inputTypeStack.length > 0)
      return this._inputTypeStack[this._inputTypeStack.length - 1];
  }
  getParentInputType() {
    if (this._inputTypeStack.length > 1)
      return this._inputTypeStack[this._inputTypeStack.length - 2];
  }
  getFieldDef() {
    if (this._fieldDefStack.length > 0)
      return this._fieldDefStack[this._fieldDefStack.length - 1];
  }
  getDefaultValue() {
    if (this._defaultValueStack.length > 0)
      return this._defaultValueStack[this._defaultValueStack.length - 1];
  }
  getDirective() {
    return this._directive;
  }
  getArgument() {
    return this._argument;
  }
  getEnumValue() {
    return this._enumValue;
  }
  enter(e) {
    const a = this._schema;
    switch (e.kind) {
      case p.SELECTION_SET: {
        const r = ju(this.getType());
        this._parentTypeStack.push(
          D0(r) ? r : void 0
        );
        break;
      }
      case p.FIELD: {
        const r = this.getParentType();
        let n, o;
        r && (n = this._getFieldDef(a, r, e), n && (o = n.type)), this._fieldDefStack.push(n), this._typeStack.push(T0(o) ? o : void 0);
        break;
      }
      case p.DIRECTIVE:
        this._directive = a.getDirective(e.name.value);
        break;
      case p.OPERATION_DEFINITION: {
        const r = a.getRootType(e.operation);
        this._typeStack.push(Q(r) ? r : void 0);
        break;
      }
      case p.INLINE_FRAGMENT:
      case p.FRAGMENT_DEFINITION: {
        const r = e.typeCondition, n = r ? Nu(a, r) : ju(this.getType());
        this._typeStack.push(T0(n) ? n : void 0);
        break;
      }
      case p.VARIABLE_DEFINITION: {
        const r = Nu(a, e.type);
        this._inputTypeStack.push(
          wu(r) ? r : void 0
        );
        break;
      }
      case p.ARGUMENT: {
        var i;
        let r, n;
        const o = (i = this.getDirective()) !== null && i !== void 0 ? i : this.getFieldDef();
        o && (r = o.args.find(
          (t) => t.name === e.name.value
        ), r && (n = r.type)), this._argument = r, this._defaultValueStack.push(r ? r.defaultValue : void 0), this._inputTypeStack.push(wu(n) ? n : void 0);
        break;
      }
      case p.LIST: {
        const r = eo(this.getInputType()), n = Du(r) ? r.ofType : r;
        this._defaultValueStack.push(void 0), this._inputTypeStack.push(wu(n) ? n : void 0);
        break;
      }
      case p.OBJECT_FIELD: {
        const r = ju(this.getInputType());
        let n, o;
        xu(r) && (o = r.getFields()[e.name.value], o && (n = o.type)), this._defaultValueStack.push(
          o ? o.defaultValue : void 0
        ), this._inputTypeStack.push(
          wu(n) ? n : void 0
        );
        break;
      }
      case p.ENUM: {
        const r = ju(this.getInputType());
        let n;
        hu(r) && (n = r.getValue(e.value)), this._enumValue = n;
        break;
      }
    }
  }
  leave(e) {
    switch (e.kind) {
      case p.SELECTION_SET:
        this._parentTypeStack.pop();
        break;
      case p.FIELD:
        this._fieldDefStack.pop(), this._typeStack.pop();
        break;
      case p.DIRECTIVE:
        this._directive = null;
        break;
      case p.OPERATION_DEFINITION:
      case p.INLINE_FRAGMENT:
      case p.FRAGMENT_DEFINITION:
        this._typeStack.pop();
        break;
      case p.VARIABLE_DEFINITION:
        this._inputTypeStack.pop();
        break;
      case p.ARGUMENT:
        this._argument = null, this._defaultValueStack.pop(), this._inputTypeStack.pop();
        break;
      case p.LIST:
      case p.OBJECT_FIELD:
        this._defaultValueStack.pop(), this._inputTypeStack.pop();
        break;
      case p.ENUM:
        this._enumValue = null;
        break;
    }
  }
}
function ed(u, e, a) {
  const i = a.name.value;
  if (i === Qe.name && u.getQueryType() === e)
    return Qe;
  if (i === Xe.name && u.getQueryType() === e)
    return Xe;
  if (i === ua.name && D0(e))
    return ua;
  if (Q(e) || uu(e))
    return e.getFields()[i];
}
function vo(u, e) {
  return {
    enter(...a) {
      const i = a[0];
      u.enter(i);
      const r = ke(e, i.kind).enter;
      if (r) {
        const n = r.apply(e, a);
        return n !== void 0 && (u.leave(i), Cn(n) && u.enter(n)), n;
      }
    },
    leave(...a) {
      const i = a[0], r = ke(e, i.kind).leave;
      let n;
      return r && (n = r.apply(e, a)), u.leave(i), n;
    }
  };
}
function ad(u) {
  return bo(u) || Ao(u) || Bo(u);
}
function bo(u) {
  return u.kind === p.OPERATION_DEFINITION || u.kind === p.FRAGMENT_DEFINITION;
}
function id(u) {
  return u.kind === p.FIELD || u.kind === p.FRAGMENT_SPREAD || u.kind === p.INLINE_FRAGMENT;
}
function Ns(u) {
  return u.kind === p.VARIABLE || u.kind === p.INT || u.kind === p.FLOAT || u.kind === p.STRING || u.kind === p.BOOLEAN || u.kind === p.NULL || u.kind === p.ENUM || u.kind === p.LIST || u.kind === p.OBJECT;
}
function Bn(u) {
  return Ns(u) && (u.kind === p.LIST ? u.values.some(Bn) : u.kind === p.OBJECT ? u.fields.some((e) => Bn(e.value)) : u.kind !== p.VARIABLE);
}
function rd(u) {
  return u.kind === p.NAMED_TYPE || u.kind === p.LIST_TYPE || u.kind === p.NON_NULL_TYPE;
}
function Ao(u) {
  return u.kind === p.SCHEMA_DEFINITION || je(u) || u.kind === p.DIRECTIVE_DEFINITION;
}
function je(u) {
  return u.kind === p.SCALAR_TYPE_DEFINITION || u.kind === p.OBJECT_TYPE_DEFINITION || u.kind === p.INTERFACE_TYPE_DEFINITION || u.kind === p.UNION_TYPE_DEFINITION || u.kind === p.ENUM_TYPE_DEFINITION || u.kind === p.INPUT_OBJECT_TYPE_DEFINITION;
}
function Bo(u) {
  return u.kind === p.SCHEMA_EXTENSION || Ui(u);
}
function Ui(u) {
  return u.kind === p.SCALAR_TYPE_EXTENSION || u.kind === p.OBJECT_TYPE_EXTENSION || u.kind === p.INTERFACE_TYPE_EXTENSION || u.kind === p.UNION_TYPE_EXTENSION || u.kind === p.ENUM_TYPE_EXTENSION || u.kind === p.INPUT_OBJECT_TYPE_EXTENSION;
}
function Ls(u) {
  return {
    Document(e) {
      for (const a of e.definitions)
        if (!bo(a)) {
          const i = a.kind === p.SCHEMA_DEFINITION || a.kind === p.SCHEMA_EXTENSION ? "schema" : '"' + a.name.value + '"';
          u.reportError(
            new B(`The ${i} definition is not executable.`, {
              nodes: a
            })
          );
        }
      return !1;
    }
  };
}
function Ks(u) {
  return {
    Field(e) {
      const a = u.getParentType();
      if (a && !u.getFieldDef()) {
        const r = u.getSchema(), n = e.name.value;
        let o = p0(
          "to use an inline fragment on",
          nd(r, a, n)
        );
        o === "" && (o = p0(od(a, n))), u.reportError(
          new B(
            `Cannot query field "${n}" on type "${a.name}".` + o,
            {
              nodes: e
            }
          )
        );
      }
    }
  };
}
function nd(u, e, a) {
  if (!t0(e))
    return [];
  const i = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ Object.create(null);
  for (const o of u.getPossibleTypes(e))
    if (o.getFields()[a]) {
      i.add(o), r[o.name] = 1;
      for (const t of o.getInterfaces()) {
        var n;
        t.getFields()[a] && (i.add(t), r[t.name] = ((n = r[t.name]) !== null && n !== void 0 ? n : 0) + 1);
      }
    }
  return [...i].sort((o, t) => {
    const s = r[t.name] - r[o.name];
    return s !== 0 ? s : uu(o) && u.isSubType(o, t) ? -1 : uu(t) && u.isSubType(t, o) ? 1 : Fa(o.name, t.name);
  }).map((o) => o.name);
}
function od(u, e) {
  if (Q(u) || uu(u)) {
    const a = Object.keys(u.getFields());
    return H0(e, a);
  }
  return [];
}
function Rs(u) {
  return {
    InlineFragment(e) {
      const a = e.typeCondition;
      if (a) {
        const i = Nu(u.getSchema(), a);
        if (i && !D0(i)) {
          const r = Eu(a);
          u.reportError(
            new B(
              `Fragment cannot condition on non composite type "${r}".`,
              {
                nodes: a
              }
            )
          );
        }
      }
    },
    FragmentDefinition(e) {
      const a = Nu(u.getSchema(), e.typeCondition);
      if (a && !D0(a)) {
        const i = Eu(e.typeCondition);
        u.reportError(
          new B(
            `Fragment "${e.name.value}" cannot condition on non composite type "${i}".`,
            {
              nodes: e.typeCondition
            }
          )
        );
      }
    }
  };
}
function Hs(u) {
  return {
    // eslint-disable-next-line new-cap
    ..._s(u),
    Argument(e) {
      const a = u.getArgument(), i = u.getFieldDef(), r = u.getParentType();
      if (!a && i && r) {
        const n = e.name.value, o = i.args.map((s) => s.name), t = H0(n, o);
        u.reportError(
          new B(
            `Unknown argument "${n}" on field "${r.name}.${i.name}".` + p0(t),
            {
              nodes: e
            }
          )
        );
      }
    }
  };
}
function _s(u) {
  const e = /* @__PURE__ */ Object.create(null), a = u.getSchema(), i = a ? a.getDirectives() : G0;
  for (const o of i)
    e[o.name] = o.args.map((t) => t.name);
  const r = u.getDocument().definitions;
  for (const o of r)
    if (o.kind === p.DIRECTIVE_DEFINITION) {
      var n;
      const t = (n = o.arguments) !== null && n !== void 0 ? n : [];
      e[o.name.value] = t.map((s) => s.name.value);
    }
  return {
    Directive(o) {
      const t = o.name.value, s = e[t];
      if (o.arguments && s)
        for (const l of o.arguments) {
          const E = l.name.value;
          if (!s.includes(E)) {
            const D = H0(E, s);
            u.reportError(
              new B(
                `Unknown argument "${E}" on directive "@${t}".` + p0(D),
                {
                  nodes: l
                }
              )
            );
          }
        }
      return !1;
    }
  };
}
function yo(u) {
  const e = /* @__PURE__ */ Object.create(null), a = u.getSchema(), i = a ? a.getDirectives() : G0;
  for (const n of i)
    e[n.name] = n.locations;
  const r = u.getDocument().definitions;
  for (const n of r)
    n.kind === p.DIRECTIVE_DEFINITION && (e[n.name.value] = n.locations.map((o) => o.value));
  return {
    Directive(n, o, t, s, l) {
      const E = n.name.value, D = e[E];
      if (!D) {
        u.reportError(
          new B(`Unknown directive "@${E}".`, {
            nodes: n
          })
        );
        return;
      }
      const x = td(l);
      x && !D.includes(x) && u.reportError(
        new B(
          `Directive "@${E}" may not be used on ${x}.`,
          {
            nodes: n
          }
        )
      );
    }
  };
}
function td(u) {
  const e = u[u.length - 1];
  switch ("kind" in e || ku(!1), e.kind) {
    case p.OPERATION_DEFINITION:
      return sd(e.operation);
    case p.FIELD:
      return K.FIELD;
    case p.FRAGMENT_SPREAD:
      return K.FRAGMENT_SPREAD;
    case p.INLINE_FRAGMENT:
      return K.INLINE_FRAGMENT;
    case p.FRAGMENT_DEFINITION:
      return K.FRAGMENT_DEFINITION;
    case p.VARIABLE_DEFINITION:
      return K.VARIABLE_DEFINITION;
    case p.SCHEMA_DEFINITION:
    case p.SCHEMA_EXTENSION:
      return K.SCHEMA;
    case p.SCALAR_TYPE_DEFINITION:
    case p.SCALAR_TYPE_EXTENSION:
      return K.SCALAR;
    case p.OBJECT_TYPE_DEFINITION:
    case p.OBJECT_TYPE_EXTENSION:
      return K.OBJECT;
    case p.FIELD_DEFINITION:
      return K.FIELD_DEFINITION;
    case p.INTERFACE_TYPE_DEFINITION:
    case p.INTERFACE_TYPE_EXTENSION:
      return K.INTERFACE;
    case p.UNION_TYPE_DEFINITION:
    case p.UNION_TYPE_EXTENSION:
      return K.UNION;
    case p.ENUM_TYPE_DEFINITION:
    case p.ENUM_TYPE_EXTENSION:
      return K.ENUM;
    case p.ENUM_VALUE_DEFINITION:
      return K.ENUM_VALUE;
    case p.INPUT_OBJECT_TYPE_DEFINITION:
    case p.INPUT_OBJECT_TYPE_EXTENSION:
      return K.INPUT_OBJECT;
    case p.INPUT_VALUE_DEFINITION: {
      const a = u[u.length - 3];
      return "kind" in a || ku(!1), a.kind === p.INPUT_OBJECT_TYPE_DEFINITION ? K.INPUT_FIELD_DEFINITION : K.ARGUMENT_DEFINITION;
    }
    default:
      ku(!1, "Unexpected kind: " + z(e.kind));
  }
}
function sd(u) {
  switch (u) {
    case bu.QUERY:
      return K.QUERY;
    case bu.MUTATION:
      return K.MUTATION;
    case bu.SUBSCRIPTION:
      return K.SUBSCRIPTION;
  }
}
function Gs(u) {
  return {
    FragmentSpread(e) {
      const a = e.name.value;
      u.getFragment(a) || u.reportError(
        new B(`Unknown fragment "${a}".`, {
          nodes: e.name
        })
      );
    }
  };
}
function fo(u) {
  const e = u.getSchema(), a = e ? e.getTypeMap() : /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  for (const n of u.getDocument().definitions)
    je(n) && (i[n.name.value] = !0);
  const r = [
    ...Object.keys(a),
    ...Object.keys(i)
  ];
  return {
    NamedType(n, o, t, s, l) {
      const E = n.name.value;
      if (!a[E] && !i[E]) {
        var D;
        const x = (D = l[2]) !== null && D !== void 0 ? D : t, c = x != null && ld(x);
        if (c && l1.includes(E))
          return;
        const d = H0(
          E,
          c ? l1.concat(r) : r
        );
        u.reportError(
          new B(
            `Unknown type "${E}".` + p0(d),
            {
              nodes: n
            }
          )
        );
      }
    }
  };
}
const l1 = [...ga, ...ba].map(
  (u) => u.name
);
function ld(u) {
  return "kind" in u && (Ao(u) || Bo(u));
}
function Vs(u) {
  let e = 0;
  return {
    Document(a) {
      e = a.definitions.filter(
        (i) => i.kind === p.OPERATION_DEFINITION
      ).length;
    },
    OperationDefinition(a) {
      !a.name && e > 1 && u.reportError(
        new B(
          "This anonymous operation must be the only defined operation.",
          {
            nodes: a
          }
        )
      );
    }
  };
}
function Is(u) {
  var e, a, i;
  const r = u.getSchema(), n = (e = (a = (i = r == null ? void 0 : r.astNode) !== null && i !== void 0 ? i : r == null ? void 0 : r.getQueryType()) !== null && a !== void 0 ? a : r == null ? void 0 : r.getMutationType()) !== null && e !== void 0 ? e : r == null ? void 0 : r.getSubscriptionType();
  let o = 0;
  return {
    SchemaDefinition(t) {
      if (n) {
        u.reportError(
          new B(
            "Cannot define a new schema within a schema extension.",
            {
              nodes: t
            }
          )
        );
        return;
      }
      o > 0 && u.reportError(
        new B("Must provide only one schema definition.", {
          nodes: t
        })
      ), ++o;
    }
  };
}
function Os(u) {
  const e = /* @__PURE__ */ Object.create(null), a = [], i = /* @__PURE__ */ Object.create(null);
  return {
    OperationDefinition: () => !1,
    FragmentDefinition(n) {
      return r(n), !1;
    }
  };
  function r(n) {
    if (e[n.name.value])
      return;
    const o = n.name.value;
    e[o] = !0;
    const t = u.getFragmentSpreads(n.selectionSet);
    if (t.length !== 0) {
      i[o] = a.length;
      for (const s of t) {
        const l = s.name.value, E = i[l];
        if (a.push(s), E === void 0) {
          const D = u.getFragment(l);
          D && r(D);
        } else {
          const D = a.slice(E), x = D.slice(0, -1).map((c) => '"' + c.name.value + '"').join(", ");
          u.reportError(
            new B(
              `Cannot spread fragment "${l}" within itself` + (x !== "" ? ` via ${x}.` : "."),
              {
                nodes: D
              }
            )
          );
        }
        a.pop();
      }
      i[o] = void 0;
    }
  }
}
function Js(u) {
  let e = /* @__PURE__ */ Object.create(null);
  return {
    OperationDefinition: {
      enter() {
        e = /* @__PURE__ */ Object.create(null);
      },
      leave(a) {
        const i = u.getRecursiveVariableUsages(a);
        for (const { node: r } of i) {
          const n = r.name.value;
          e[n] !== !0 && u.reportError(
            new B(
              a.name ? `Variable "$${n}" is not defined by operation "${a.name.value}".` : `Variable "$${n}" is not defined.`,
              {
                nodes: [r, a]
              }
            )
          );
        }
      }
    },
    VariableDefinition(a) {
      e[a.variable.name.value] = !0;
    }
  };
}
function $s(u) {
  const e = [], a = [];
  return {
    OperationDefinition(i) {
      return e.push(i), !1;
    },
    FragmentDefinition(i) {
      return a.push(i), !1;
    },
    Document: {
      leave() {
        const i = /* @__PURE__ */ Object.create(null);
        for (const r of e)
          for (const n of u.getRecursivelyReferencedFragments(
            r
          ))
            i[n.name.value] = !0;
        for (const r of a) {
          const n = r.name.value;
          i[n] !== !0 && u.reportError(
            new B(`Fragment "${n}" is never used.`, {
              nodes: r
            })
          );
        }
      }
    }
  };
}
function qs(u) {
  let e = [];
  return {
    OperationDefinition: {
      enter() {
        e = [];
      },
      leave(a) {
        const i = /* @__PURE__ */ Object.create(null), r = u.getRecursiveVariableUsages(a);
        for (const { node: n } of r)
          i[n.name.value] = !0;
        for (const n of e) {
          const o = n.variable.name.value;
          i[o] !== !0 && u.reportError(
            new B(
              a.name ? `Variable "$${o}" is never used in operation "${a.name.value}".` : `Variable "$${o}" is never used.`,
              {
                nodes: n
              }
            )
          );
        }
      }
    },
    VariableDefinition(a) {
      e.push(a);
    }
  };
}
function Zi(u) {
  switch (u.kind) {
    case p.OBJECT:
      return { ...u, fields: Ed(u.fields) };
    case p.LIST:
      return { ...u, values: u.values.map(Zi) };
    case p.INT:
    case p.FLOAT:
    case p.STRING:
    case p.BOOLEAN:
    case p.NULL:
    case p.ENUM:
    case p.VARIABLE:
      return u;
  }
}
function Ed(u) {
  return u.map((e) => ({
    ...e,
    value: Zi(e.value)
  })).sort(
    (e, a) => Fa(e.name.value, a.name.value)
  );
}
function Ws(u) {
  return Array.isArray(u) ? u.map(
    ([e, a]) => `subfields "${e}" conflict because ` + Ws(a)
  ).join(" and ") : u;
}
function Us(u) {
  const e = new md(), a = /* @__PURE__ */ new Map();
  return {
    SelectionSet(i) {
      const r = Dd(
        u,
        a,
        e,
        u.getParentType(),
        i
      );
      for (const [[n, o], t, s] of r) {
        const l = Ws(o);
        u.reportError(
          new B(
            `Fields "${n}" conflict because ${l}. Use different aliases on the fields to fetch both if this was intentional.`,
            {
              nodes: t.concat(s)
            }
          )
        );
      }
    }
  };
}
function Dd(u, e, a, i, r) {
  const n = [], [o, t] = pi(
    u,
    e,
    i,
    r
  );
  if (cd(
    u,
    n,
    e,
    a,
    o
  ), t.length !== 0)
    for (let s = 0; s < t.length; s++) {
      Fi(
        u,
        n,
        e,
        a,
        !1,
        o,
        t[s]
      );
      for (let l = s + 1; l < t.length; l++)
        ki(
          u,
          n,
          e,
          a,
          !1,
          t[s],
          t[l]
        );
    }
  return n;
}
function Fi(u, e, a, i, r, n, o) {
  const t = u.getFragment(o);
  if (!t)
    return;
  const [s, l] = fn(
    u,
    a,
    t
  );
  if (n !== s) {
    zo(
      u,
      e,
      a,
      i,
      r,
      n,
      s
    );
    for (const E of l)
      i.has(
        E,
        o,
        r
      ) || (i.add(
        E,
        o,
        r
      ), Fi(
        u,
        e,
        a,
        i,
        r,
        n,
        E
      ));
  }
}
function ki(u, e, a, i, r, n, o) {
  if (n === o || i.has(
    n,
    o,
    r
  ))
    return;
  i.add(n, o, r);
  const t = u.getFragment(n), s = u.getFragment(o);
  if (!t || !s)
    return;
  const [l, E] = fn(
    u,
    a,
    t
  ), [D, x] = fn(
    u,
    a,
    s
  );
  zo(
    u,
    e,
    a,
    i,
    r,
    l,
    D
  );
  for (const c of x)
    ki(
      u,
      e,
      a,
      i,
      r,
      n,
      c
    );
  for (const c of E)
    ki(
      u,
      e,
      a,
      i,
      r,
      c,
      o
    );
}
function xd(u, e, a, i, r, n, o, t) {
  const s = [], [l, E] = pi(
    u,
    e,
    r,
    n
  ), [D, x] = pi(
    u,
    e,
    o,
    t
  );
  zo(
    u,
    s,
    e,
    a,
    i,
    l,
    D
  );
  for (const c of x)
    Fi(
      u,
      s,
      e,
      a,
      i,
      l,
      c
    );
  for (const c of E)
    Fi(
      u,
      s,
      e,
      a,
      i,
      D,
      c
    );
  for (const c of E)
    for (const d of x)
      ki(
        u,
        s,
        e,
        a,
        i,
        c,
        d
      );
  return s;
}
function cd(u, e, a, i, r) {
  for (const [n, o] of Object.entries(r))
    if (o.length > 1)
      for (let t = 0; t < o.length; t++)
        for (let s = t + 1; s < o.length; s++) {
          const l = Zs(
            u,
            a,
            i,
            !1,
            // within one collection is never mutually exclusive
            n,
            o[t],
            o[s]
          );
          l && e.push(l);
        }
}
function zo(u, e, a, i, r, n, o) {
  for (const [t, s] of Object.entries(n)) {
    const l = o[t];
    if (l)
      for (const E of s)
        for (const D of l) {
          const x = Zs(
            u,
            a,
            i,
            r,
            t,
            E,
            D
          );
          x && e.push(x);
        }
  }
}
function Zs(u, e, a, i, r, n, o) {
  const [t, s, l] = n, [E, D, x] = o, c = i || t !== E && Q(t) && Q(E);
  if (!c) {
    const M = s.name.value, A = D.name.value;
    if (M !== A)
      return [
        [r, `"${M}" and "${A}" are different fields`],
        [s],
        [D]
      ];
    if (E1(s) !== E1(D))
      return [
        [r, "they have differing arguments"],
        [s],
        [D]
      ];
  }
  const d = l == null ? void 0 : l.type, F = x == null ? void 0 : x.type;
  if (d && F && yn(d, F))
    return [
      [
        r,
        `they return conflicting types "${z(d)}" and "${z(
          F
        )}"`
      ],
      [s],
      [D]
    ];
  const k = s.selectionSet, g = D.selectionSet;
  if (k && g) {
    const M = xd(
      u,
      e,
      a,
      c,
      ju(d),
      k,
      ju(F),
      g
    );
    return dd(M, r, s, D);
  }
}
function E1(u) {
  var e;
  const a = (
    /* c8 ignore next */
    (e = u.arguments) !== null && e !== void 0 ? e : []
  ), i = {
    kind: p.OBJECT,
    fields: a.map((r) => ({
      kind: p.OBJECT_FIELD,
      name: r.name,
      value: r.value
    }))
  };
  return Eu(Zi(i));
}
function yn(u, e) {
  return Du(u) ? Du(e) ? yn(u.ofType, e.ofType) : !0 : Du(e) ? !0 : I(u) ? I(e) ? yn(u.ofType, e.ofType) : !0 : I(e) ? !0 : E0(u) || E0(e) ? u !== e : !1;
}
function pi(u, e, a, i) {
  const r = e.get(i);
  if (r)
    return r;
  const n = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  Ys(
    u,
    a,
    i,
    n,
    o
  );
  const t = [n, Object.keys(o)];
  return e.set(i, t), t;
}
function fn(u, e, a) {
  const i = e.get(a.selectionSet);
  if (i)
    return i;
  const r = Nu(u.getSchema(), a.typeCondition);
  return pi(
    u,
    e,
    r,
    a.selectionSet
  );
}
function Ys(u, e, a, i, r) {
  for (const n of a.selections)
    switch (n.kind) {
      case p.FIELD: {
        const o = n.name.value;
        let t;
        (Q(e) || uu(e)) && (t = e.getFields()[o]);
        const s = n.alias ? n.alias.value : o;
        i[s] || (i[s] = []), i[s].push([e, n, t]);
        break;
      }
      case p.FRAGMENT_SPREAD:
        r[n.name.value] = !0;
        break;
      case p.INLINE_FRAGMENT: {
        const o = n.typeCondition, t = o ? Nu(u.getSchema(), o) : e;
        Ys(
          u,
          t,
          n.selectionSet,
          i,
          r
        );
        break;
      }
    }
}
function dd(u, e, a, i) {
  if (u.length > 0)
    return [
      [e, u.map(([r]) => r)],
      [a, ...u.map(([, r]) => r).flat()],
      [i, ...u.map(([, , r]) => r).flat()]
    ];
}
class md {
  constructor() {
    this._data = /* @__PURE__ */ new Map();
  }
  has(e, a, i) {
    var r;
    const [n, o] = e < a ? [e, a] : [a, e], t = (r = this._data.get(n)) === null || r === void 0 ? void 0 : r.get(o);
    return t === void 0 ? !1 : i ? !0 : i === t;
  }
  add(e, a, i) {
    const [r, n] = e < a ? [e, a] : [a, e], o = this._data.get(r);
    o === void 0 ? this._data.set(r, /* @__PURE__ */ new Map([[n, i]])) : o.set(n, i);
  }
}
function Qs(u) {
  return {
    InlineFragment(e) {
      const a = u.getType(), i = u.getParentType();
      if (D0(a) && D0(i) && !An(u.getSchema(), a, i)) {
        const r = z(i), n = z(a);
        u.reportError(
          new B(
            `Fragment cannot be spread here as objects of type "${r}" can never be of type "${n}".`,
            {
              nodes: e
            }
          )
        );
      }
    },
    FragmentSpread(e) {
      const a = e.name.value, i = Fd(u, a), r = u.getParentType();
      if (i && r && !An(u.getSchema(), i, r)) {
        const n = z(r), o = z(i);
        u.reportError(
          new B(
            `Fragment "${a}" cannot be spread here as objects of type "${n}" can never be of type "${o}".`,
            {
              nodes: e
            }
          )
        );
      }
    }
  };
}
function Fd(u, e) {
  const a = u.getFragment(e);
  if (a) {
    const i = Nu(u.getSchema(), a.typeCondition);
    if (D0(i))
      return i;
  }
}
function Xs(u) {
  const e = u.getSchema(), a = /* @__PURE__ */ Object.create(null);
  for (const r of u.getDocument().definitions)
    je(r) && (a[r.name.value] = r);
  return {
    ScalarTypeExtension: i,
    ObjectTypeExtension: i,
    InterfaceTypeExtension: i,
    UnionTypeExtension: i,
    EnumTypeExtension: i,
    InputObjectTypeExtension: i
  };
  function i(r) {
    const n = r.name.value, o = a[n], t = e == null ? void 0 : e.getType(n);
    let s;
    if (o ? s = kd[o.kind] : t && (s = pd(t)), s) {
      if (s !== r.kind) {
        const l = hd(r.kind);
        u.reportError(
          new B(`Cannot extend non-${l} type "${n}".`, {
            nodes: o ? [o, r] : r
          })
        );
      }
    } else {
      const l = Object.keys({
        ...a,
        ...e == null ? void 0 : e.getTypeMap()
      }), E = H0(n, l);
      u.reportError(
        new B(
          `Cannot extend type "${n}" because it is not defined.` + p0(E),
          {
            nodes: r.name
          }
        )
      );
    }
  }
}
const kd = {
  [p.SCALAR_TYPE_DEFINITION]: p.SCALAR_TYPE_EXTENSION,
  [p.OBJECT_TYPE_DEFINITION]: p.OBJECT_TYPE_EXTENSION,
  [p.INTERFACE_TYPE_DEFINITION]: p.INTERFACE_TYPE_EXTENSION,
  [p.UNION_TYPE_DEFINITION]: p.UNION_TYPE_EXTENSION,
  [p.ENUM_TYPE_DEFINITION]: p.ENUM_TYPE_EXTENSION,
  [p.INPUT_OBJECT_TYPE_DEFINITION]: p.INPUT_OBJECT_TYPE_EXTENSION
};
function pd(u) {
  if (Ju(u))
    return p.SCALAR_TYPE_EXTENSION;
  if (Q(u))
    return p.OBJECT_TYPE_EXTENSION;
  if (uu(u))
    return p.INTERFACE_TYPE_EXTENSION;
  if (Au(u))
    return p.UNION_TYPE_EXTENSION;
  if (hu(u))
    return p.ENUM_TYPE_EXTENSION;
  if (xu(u))
    return p.INPUT_OBJECT_TYPE_EXTENSION;
  ku(!1, "Unexpected type: " + z(u));
}
function hd(u) {
  switch (u) {
    case p.SCALAR_TYPE_EXTENSION:
      return "scalar";
    case p.OBJECT_TYPE_EXTENSION:
      return "object";
    case p.INTERFACE_TYPE_EXTENSION:
      return "interface";
    case p.UNION_TYPE_EXTENSION:
      return "union";
    case p.ENUM_TYPE_EXTENSION:
      return "enum";
    case p.INPUT_OBJECT_TYPE_EXTENSION:
      return "input object";
    default:
      ku(!1, "Unexpected kind: " + z(u));
  }
}
function ul(u) {
  return {
    // eslint-disable-next-line new-cap
    ...el(u),
    Field: {
      // Validate on leave to allow for deeper errors to appear first.
      leave(e) {
        var a;
        const i = u.getFieldDef();
        if (!i)
          return !1;
        const r = new Set(
          // FIXME: https://github.com/graphql/graphql-js/issues/2203
          /* c8 ignore next */
          (a = e.arguments) === null || a === void 0 ? void 0 : a.map((n) => n.name.value)
        );
        for (const n of i.args)
          if (!r.has(n.name) && _0(n)) {
            const o = z(n.type);
            u.reportError(
              new B(
                `Field "${i.name}" argument "${n.name}" of type "${o}" is required, but it was not provided.`,
                {
                  nodes: e
                }
              )
            );
          }
      }
    }
  };
}
function el(u) {
  var e;
  const a = /* @__PURE__ */ Object.create(null), i = u.getSchema(), r = (e = i == null ? void 0 : i.getDirectives()) !== null && e !== void 0 ? e : G0;
  for (const t of r)
    a[t.name] = h0(
      t.args.filter(_0),
      (s) => s.name
    );
  const n = u.getDocument().definitions;
  for (const t of n)
    if (t.kind === p.DIRECTIVE_DEFINITION) {
      var o;
      const s = (o = t.arguments) !== null && o !== void 0 ? o : [];
      a[t.name.value] = h0(
        s.filter(gd),
        (l) => l.name.value
      );
    }
  return {
    Directive: {
      // Validate on leave to allow for deeper errors to appear first.
      leave(t) {
        const s = t.name.value, l = a[s];
        if (l) {
          var E;
          const D = (E = t.arguments) !== null && E !== void 0 ? E : [], x = new Set(D.map((c) => c.name.value));
          for (const [c, d] of Object.entries(l))
            if (!x.has(c)) {
              const F = ka(d.type) ? z(d.type) : Eu(d.type);
              u.reportError(
                new B(
                  `Directive "@${s}" argument "${c}" of type "${F}" is required, but it was not provided.`,
                  {
                    nodes: t
                  }
                )
              );
            }
        }
      }
    }
  };
}
function gd(u) {
  return u.type.kind === p.NON_NULL_TYPE && u.defaultValue == null;
}
function al(u) {
  return {
    Field(e) {
      const a = u.getType(), i = e.selectionSet;
      if (a) {
        if (E0(ju(a))) {
          if (i) {
            const r = e.name.value, n = z(a);
            u.reportError(
              new B(
                `Field "${r}" must not have a selection since type "${n}" has no subfields.`,
                {
                  nodes: i
                }
              )
            );
          }
        } else if (!i) {
          const r = e.name.value, n = z(a);
          u.reportError(
            new B(
              `Field "${r}" of type "${n}" must have a selection of subfields. Did you mean "${r} { ... }"?`,
              {
                nodes: e
              }
            )
          );
        }
      }
    }
  };
}
function il(u) {
  return u.map(
    (e) => typeof e == "number" ? "[" + e.toString() + "]" : "." + e
  ).join("");
}
function Ce(u, e, a) {
  return {
    prev: u,
    key: e,
    typename: a
  };
}
function _u(u) {
  const e = [];
  let a = u;
  for (; a; )
    e.push(a.key), a = a.prev;
  return e.reverse();
}
function rl(u, e, a = Cd) {
  return Ie(u, e, a, void 0);
}
function Cd(u, e, a) {
  let i = "Invalid value " + z(e);
  throw u.length > 0 && (i += ` at "value${il(u)}"`), a.message = i + ": " + a.message, a;
}
function Ie(u, e, a, i) {
  if (I(e)) {
    if (u != null)
      return Ie(u, e.ofType, a, i);
    a(
      _u(i),
      u,
      new B(
        `Expected non-nullable type "${z(e)}" not to be null.`
      )
    );
    return;
  }
  if (u == null)
    return null;
  if (Du(e)) {
    const r = e.ofType;
    return Eo(u) ? Array.from(u, (n, o) => {
      const t = Ce(i, o, void 0);
      return Ie(n, r, a, t);
    }) : [Ie(u, r, a, i)];
  }
  if (xu(e)) {
    if (!Iu(u)) {
      a(
        _u(i),
        u,
        new B(`Expected type "${e.name}" to be an object.`)
      );
      return;
    }
    const r = {}, n = e.getFields();
    for (const o of Object.values(n)) {
      const t = u[o.name];
      if (t === void 0) {
        if (o.defaultValue !== void 0)
          r[o.name] = o.defaultValue;
        else if (I(o.type)) {
          const s = z(o.type);
          a(
            _u(i),
            u,
            new B(
              `Field "${o.name}" of required type "${s}" was not provided.`
            )
          );
        }
        continue;
      }
      r[o.name] = Ie(
        t,
        o.type,
        a,
        Ce(i, o.name, e.name)
      );
    }
    for (const o of Object.keys(u))
      if (!n[o]) {
        const t = H0(
          o,
          Object.keys(e.getFields())
        );
        a(
          _u(i),
          u,
          new B(
            `Field "${o}" is not defined by type "${e.name}".` + p0(t)
          )
        );
      }
    return r;
  }
  if (E0(e)) {
    let r;
    try {
      r = e.parseValue(u);
    } catch (n) {
      n instanceof B ? a(_u(i), u, n) : a(
        _u(i),
        u,
        new B(`Expected type "${e.name}". ` + n.message, {
          originalError: n
        })
      );
      return;
    }
    return r === void 0 && a(
      _u(i),
      u,
      new B(`Expected type "${e.name}".`)
    ), r;
  }
  ku(!1, "Unexpected input type: " + z(e));
}
function o0(u, e, a) {
  if (u) {
    if (u.kind === p.VARIABLE) {
      const i = u.name.value;
      if (a == null || a[i] === void 0)
        return;
      const r = a[i];
      return r === null && I(e) ? void 0 : r;
    }
    if (I(e))
      return u.kind === p.NULL ? void 0 : o0(u, e.ofType, a);
    if (u.kind === p.NULL)
      return null;
    if (Du(e)) {
      const i = e.ofType;
      if (u.kind === p.LIST) {
        const n = [];
        for (const o of u.values)
          if (D1(o, a)) {
            if (I(i))
              return;
            n.push(null);
          } else {
            const t = o0(o, i, a);
            if (t === void 0)
              return;
            n.push(t);
          }
        return n;
      }
      const r = o0(u, i, a);
      return r === void 0 ? void 0 : [r];
    }
    if (xu(e)) {
      if (u.kind !== p.OBJECT)
        return;
      const i = /* @__PURE__ */ Object.create(null), r = h0(u.fields, (n) => n.name.value);
      for (const n of Object.values(e.getFields())) {
        const o = r[n.name];
        if (!o || D1(o.value, a)) {
          if (n.defaultValue !== void 0)
            i[n.name] = n.defaultValue;
          else if (I(n.type))
            return;
          continue;
        }
        const t = o0(o.value, n.type, a);
        if (t === void 0)
          return;
        i[n.name] = t;
      }
      return i;
    }
    if (E0(e)) {
      let i;
      try {
        i = e.parseLiteral(u, a);
      } catch {
        return;
      }
      return i === void 0 ? void 0 : i;
    }
    ku(!1, "Unexpected input type: " + z(e));
  }
}
function D1(u, e) {
  return u.kind === p.VARIABLE && (e == null || e[u.name.value] === void 0);
}
function nl(u, e, a, i) {
  const r = [], n = i == null ? void 0 : i.maxErrors;
  try {
    const o = vd(
      u,
      e,
      a,
      (t) => {
        if (n != null && r.length >= n)
          throw new B(
            "Too many errors processing variables, error limit reached. Execution aborted."
          );
        r.push(t);
      }
    );
    if (r.length === 0)
      return {
        coerced: o
      };
  } catch (o) {
    r.push(o);
  }
  return {
    errors: r
  };
}
function vd(u, e, a, i) {
  const r = {};
  for (const n of e) {
    const o = n.variable.name.value, t = Nu(u, n.type);
    if (!wu(t)) {
      const l = Eu(n.type);
      i(
        new B(
          `Variable "$${o}" expected value of type "${l}" which cannot be used as an input type.`,
          {
            nodes: n.type
          }
        )
      );
      continue;
    }
    if (!ol(a, o)) {
      if (n.defaultValue)
        r[o] = o0(n.defaultValue, t);
      else if (I(t)) {
        const l = z(t);
        i(
          new B(
            `Variable "$${o}" of required type "${l}" was not provided.`,
            {
              nodes: n
            }
          )
        );
      }
      continue;
    }
    const s = a[o];
    if (s === null && I(t)) {
      const l = z(t);
      i(
        new B(
          `Variable "$${o}" of non-null type "${l}" must not be null.`,
          {
            nodes: n
          }
        )
      );
      continue;
    }
    r[o] = rl(
      s,
      t,
      (l, E, D) => {
        let x = `Variable "$${o}" got invalid value ` + z(E);
        l.length > 0 && (x += ` at "${o}${il(l)}"`), i(
          new B(x + "; " + D.message, {
            nodes: n,
            originalError: D.originalError
          })
        );
      }
    );
  }
  return r;
}
function Yi(u, e, a) {
  var i;
  const r = {}, n = (i = e.arguments) !== null && i !== void 0 ? i : [], o = h0(n, (t) => t.name.value);
  for (const t of u.args) {
    const s = t.name, l = t.type, E = o[s];
    if (!E) {
      if (t.defaultValue !== void 0)
        r[s] = t.defaultValue;
      else if (I(l))
        throw new B(
          `Argument "${s}" of required type "${z(l)}" was not provided.`,
          {
            nodes: e
          }
        );
      continue;
    }
    const D = E.value;
    let x = D.kind === p.NULL;
    if (D.kind === p.VARIABLE) {
      const d = D.name.value;
      if (a == null || !ol(a, d)) {
        if (t.defaultValue !== void 0)
          r[s] = t.defaultValue;
        else if (I(l))
          throw new B(
            `Argument "${s}" of required type "${z(l)}" was provided the variable "$${d}" which was not provided a runtime value.`,
            {
              nodes: D
            }
          );
        continue;
      }
      x = a[d] == null;
    }
    if (x && I(l))
      throw new B(
        `Argument "${s}" of non-null type "${z(l)}" must not be null.`,
        {
          nodes: D
        }
      );
    const c = o0(D, l, a);
    if (c === void 0)
      throw new B(
        `Argument "${s}" has invalid value ${Eu(D)}.`,
        {
          nodes: D
        }
      );
    r[s] = c;
  }
  return r;
}
function ea(u, e, a) {
  var i;
  const r = (i = e.directives) === null || i === void 0 ? void 0 : i.find(
    (n) => n.name.value === u.name
  );
  if (r)
    return Yi(u, r, a);
}
function ol(u, e) {
  return Object.prototype.hasOwnProperty.call(u, e);
}
function So(u, e, a, i, r) {
  const n = /* @__PURE__ */ new Map();
  return hi(
    u,
    e,
    a,
    i,
    r,
    n,
    /* @__PURE__ */ new Set()
  ), n;
}
function bd(u, e, a, i, r) {
  const n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
  for (const t of r)
    t.selectionSet && hi(
      u,
      e,
      a,
      i,
      t.selectionSet,
      n,
      o
    );
  return n;
}
function hi(u, e, a, i, r, n, o) {
  for (const t of r.selections)
    switch (t.kind) {
      case p.FIELD: {
        if (!en(a, t))
          continue;
        const s = Ad(t), l = n.get(s);
        l !== void 0 ? l.push(t) : n.set(s, [t]);
        break;
      }
      case p.INLINE_FRAGMENT: {
        if (!en(a, t) || !x1(u, t, i))
          continue;
        hi(
          u,
          e,
          a,
          i,
          t.selectionSet,
          n,
          o
        );
        break;
      }
      case p.FRAGMENT_SPREAD: {
        const s = t.name.value;
        if (o.has(s) || !en(a, t))
          continue;
        o.add(s);
        const l = e[s];
        if (!l || !x1(u, l, i))
          continue;
        hi(
          u,
          e,
          a,
          i,
          l.selectionSet,
          n,
          o
        );
        break;
      }
    }
}
function en(u, e) {
  const a = ea(oo, e, u);
  if ((a == null ? void 0 : a.if) === !0)
    return !1;
  const i = ea(
    no,
    e,
    u
  );
  return (i == null ? void 0 : i.if) !== !1;
}
function x1(u, e, a) {
  const i = e.typeCondition;
  if (!i)
    return !0;
  const r = Nu(u, i);
  return r === a ? !0 : t0(r) ? u.isSubType(r, a) : !1;
}
function Ad(u) {
  return u.alias ? u.alias.value : u.name.value;
}
function tl(u) {
  return {
    OperationDefinition(e) {
      if (e.operation === "subscription") {
        const a = u.getSchema(), i = a.getSubscriptionType();
        if (i) {
          const r = e.name ? e.name.value : null, n = /* @__PURE__ */ Object.create(null), o = u.getDocument(), t = /* @__PURE__ */ Object.create(null);
          for (const l of o.definitions)
            l.kind === p.FRAGMENT_DEFINITION && (t[l.name.value] = l);
          const s = So(
            a,
            t,
            n,
            i,
            e.selectionSet
          );
          if (s.size > 1) {
            const D = [...s.values()].slice(1).flat();
            u.reportError(
              new B(
                r != null ? `Subscription "${r}" must select only one top level field.` : "Anonymous Subscription must select only one top level field.",
                {
                  nodes: D
                }
              )
            );
          }
          for (const l of s.values())
            l[0].name.value.startsWith("__") && u.reportError(
              new B(
                r != null ? `Subscription "${r}" must not select an introspection top level field.` : "Anonymous Subscription must not select an introspection top level field.",
                {
                  nodes: l
                }
              )
            );
        }
      }
    }
  };
}
function Mo(u, e) {
  const a = /* @__PURE__ */ new Map();
  for (const i of u) {
    const r = e(i), n = a.get(r);
    n === void 0 ? a.set(r, [i]) : n.push(i);
  }
  return a;
}
function sl(u) {
  return {
    DirectiveDefinition(i) {
      var r;
      const n = (r = i.arguments) !== null && r !== void 0 ? r : [];
      return a(`@${i.name.value}`, n);
    },
    InterfaceTypeDefinition: e,
    InterfaceTypeExtension: e,
    ObjectTypeDefinition: e,
    ObjectTypeExtension: e
  };
  function e(i) {
    var r;
    const n = i.name.value, o = (r = i.fields) !== null && r !== void 0 ? r : [];
    for (const s of o) {
      var t;
      const l = s.name.value, E = (t = s.arguments) !== null && t !== void 0 ? t : [];
      a(`${n}.${l}`, E);
    }
    return !1;
  }
  function a(i, r) {
    const n = Mo(r, (o) => o.name.value);
    for (const [o, t] of n)
      t.length > 1 && u.reportError(
        new B(
          `Argument "${i}(${o}:)" can only be defined once.`,
          {
            nodes: t.map((s) => s.name)
          }
        )
      );
    return !1;
  }
}
function jo(u) {
  return {
    Field: e,
    Directive: e
  };
  function e(a) {
    var i;
    const r = (i = a.arguments) !== null && i !== void 0 ? i : [], n = Mo(r, (o) => o.name.value);
    for (const [o, t] of n)
      t.length > 1 && u.reportError(
        new B(
          `There can be only one argument named "${o}".`,
          {
            nodes: t.map((s) => s.name)
          }
        )
      );
  }
}
function ll(u) {
  const e = /* @__PURE__ */ Object.create(null), a = u.getSchema();
  return {
    DirectiveDefinition(i) {
      const r = i.name.value;
      if (a != null && a.getDirective(r)) {
        u.reportError(
          new B(
            `Directive "@${r}" already exists in the schema. It cannot be redefined.`,
            {
              nodes: i.name
            }
          )
        );
        return;
      }
      return e[r] ? u.reportError(
        new B(
          `There can be only one directive named "@${r}".`,
          {
            nodes: [e[r], i.name]
          }
        )
      ) : e[r] = i.name, !1;
    }
  };
}
function Po(u) {
  const e = /* @__PURE__ */ Object.create(null), a = u.getSchema(), i = a ? a.getDirectives() : G0;
  for (const t of i)
    e[t.name] = !t.isRepeatable;
  const r = u.getDocument().definitions;
  for (const t of r)
    t.kind === p.DIRECTIVE_DEFINITION && (e[t.name.value] = !t.repeatable);
  const n = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  return {
    // Many different AST nodes may contain directives. Rather than listing
    // them all, just listen for entering any node, and check to see if it
    // defines any directives.
    enter(t) {
      if (!("directives" in t) || !t.directives)
        return;
      let s;
      if (t.kind === p.SCHEMA_DEFINITION || t.kind === p.SCHEMA_EXTENSION)
        s = n;
      else if (je(t) || Ui(t)) {
        const l = t.name.value;
        s = o[l], s === void 0 && (o[l] = s = /* @__PURE__ */ Object.create(null));
      } else
        s = /* @__PURE__ */ Object.create(null);
      for (const l of t.directives) {
        const E = l.name.value;
        e[E] && (s[E] ? u.reportError(
          new B(
            `The directive "@${E}" can only be used once at this location.`,
            {
              nodes: [s[E], l]
            }
          )
        ) : s[E] = l);
      }
    }
  };
}
function El(u) {
  const e = u.getSchema(), a = e ? e.getTypeMap() : /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  return {
    EnumTypeDefinition: r,
    EnumTypeExtension: r
  };
  function r(n) {
    var o;
    const t = n.name.value;
    i[t] || (i[t] = /* @__PURE__ */ Object.create(null));
    const s = (o = n.values) !== null && o !== void 0 ? o : [], l = i[t];
    for (const E of s) {
      const D = E.name.value, x = a[t];
      hu(x) && x.getValue(D) ? u.reportError(
        new B(
          `Enum value "${t}.${D}" already exists in the schema. It cannot also be defined in this type extension.`,
          {
            nodes: E.name
          }
        )
      ) : l[D] ? u.reportError(
        new B(
          `Enum value "${t}.${D}" can only be defined once.`,
          {
            nodes: [l[D], E.name]
          }
        )
      ) : l[D] = E.name;
    }
    return !1;
  }
}
function Dl(u) {
  const e = u.getSchema(), a = e ? e.getTypeMap() : /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  return {
    InputObjectTypeDefinition: r,
    InputObjectTypeExtension: r,
    InterfaceTypeDefinition: r,
    InterfaceTypeExtension: r,
    ObjectTypeDefinition: r,
    ObjectTypeExtension: r
  };
  function r(n) {
    var o;
    const t = n.name.value;
    i[t] || (i[t] = /* @__PURE__ */ Object.create(null));
    const s = (o = n.fields) !== null && o !== void 0 ? o : [], l = i[t];
    for (const E of s) {
      const D = E.name.value;
      Bd(a[t], D) ? u.reportError(
        new B(
          `Field "${t}.${D}" already exists in the schema. It cannot also be defined in this type extension.`,
          {
            nodes: E.name
          }
        )
      ) : l[D] ? u.reportError(
        new B(
          `Field "${t}.${D}" can only be defined once.`,
          {
            nodes: [l[D], E.name]
          }
        )
      ) : l[D] = E.name;
    }
    return !1;
  }
}
function Bd(u, e) {
  return Q(u) || uu(u) || xu(u) ? u.getFields()[e] != null : !1;
}
function xl(u) {
  const e = /* @__PURE__ */ Object.create(null);
  return {
    OperationDefinition: () => !1,
    FragmentDefinition(a) {
      const i = a.name.value;
      return e[i] ? u.reportError(
        new B(
          `There can be only one fragment named "${i}".`,
          {
            nodes: [e[i], a.name]
          }
        )
      ) : e[i] = a.name, !1;
    }
  };
}
function To(u) {
  const e = [];
  let a = /* @__PURE__ */ Object.create(null);
  return {
    ObjectValue: {
      enter() {
        e.push(a), a = /* @__PURE__ */ Object.create(null);
      },
      leave() {
        const i = e.pop();
        i || ku(!1), a = i;
      }
    },
    ObjectField(i) {
      const r = i.name.value;
      a[r] ? u.reportError(
        new B(
          `There can be only one input field named "${r}".`,
          {
            nodes: [a[r], i.name]
          }
        )
      ) : a[r] = i.name;
    }
  };
}
function cl(u) {
  const e = /* @__PURE__ */ Object.create(null);
  return {
    OperationDefinition(a) {
      const i = a.name;
      return i && (e[i.value] ? u.reportError(
        new B(
          `There can be only one operation named "${i.value}".`,
          {
            nodes: [
              e[i.value],
              i
            ]
          }
        )
      ) : e[i.value] = i), !1;
    },
    FragmentDefinition: () => !1
  };
}
function dl(u) {
  const e = u.getSchema(), a = /* @__PURE__ */ Object.create(null), i = e ? {
    query: e.getQueryType(),
    mutation: e.getMutationType(),
    subscription: e.getSubscriptionType()
  } : {};
  return {
    SchemaDefinition: r,
    SchemaExtension: r
  };
  function r(n) {
    var o;
    const t = (o = n.operationTypes) !== null && o !== void 0 ? o : [];
    for (const s of t) {
      const l = s.operation, E = a[l];
      i[l] ? u.reportError(
        new B(
          `Type for ${l} already defined in the schema. It cannot be redefined.`,
          {
            nodes: s
          }
        )
      ) : E ? u.reportError(
        new B(
          `There can be only one ${l} type in schema.`,
          {
            nodes: [E, s]
          }
        )
      ) : a[l] = s;
    }
    return !1;
  }
}
function ml(u) {
  const e = /* @__PURE__ */ Object.create(null), a = u.getSchema();
  return {
    ScalarTypeDefinition: i,
    ObjectTypeDefinition: i,
    InterfaceTypeDefinition: i,
    UnionTypeDefinition: i,
    EnumTypeDefinition: i,
    InputObjectTypeDefinition: i
  };
  function i(r) {
    const n = r.name.value;
    if (a != null && a.getType(n)) {
      u.reportError(
        new B(
          `Type "${n}" already exists in the schema. It cannot also be defined in this type definition.`,
          {
            nodes: r.name
          }
        )
      );
      return;
    }
    return e[n] ? u.reportError(
      new B(`There can be only one type named "${n}".`, {
        nodes: [e[n], r.name]
      })
    ) : e[n] = r.name, !1;
  }
}
function Fl(u) {
  return {
    OperationDefinition(e) {
      var a;
      const i = (a = e.variableDefinitions) !== null && a !== void 0 ? a : [], r = Mo(
        i,
        (n) => n.variable.name.value
      );
      for (const [n, o] of r)
        o.length > 1 && u.reportError(
          new B(
            `There can be only one variable named "$${n}".`,
            {
              nodes: o.map((t) => t.variable.name)
            }
          )
        );
    }
  };
}
function kl(u) {
  return {
    ListValue(e) {
      const a = eo(u.getParentInputType());
      if (!Du(a))
        return I0(u, e), !1;
    },
    ObjectValue(e) {
      const a = ju(u.getInputType());
      if (!xu(a))
        return I0(u, e), !1;
      const i = h0(e.fields, (r) => r.name.value);
      for (const r of Object.values(a.getFields()))
        if (!i[r.name] && Oi(r)) {
          const o = z(r.type);
          u.reportError(
            new B(
              `Field "${a.name}.${r.name}" of required type "${o}" was not provided.`,
              {
                nodes: e
              }
            )
          );
        }
    },
    ObjectField(e) {
      const a = ju(u.getParentInputType());
      if (!u.getInputType() && xu(a)) {
        const r = H0(
          e.name.value,
          Object.keys(a.getFields())
        );
        u.reportError(
          new B(
            `Field "${e.name.value}" is not defined by type "${a.name}".` + p0(r),
            {
              nodes: e
            }
          )
        );
      }
    },
    NullValue(e) {
      const a = u.getInputType();
      I(a) && u.reportError(
        new B(
          `Expected value of type "${z(a)}", found ${Eu(e)}.`,
          {
            nodes: e
          }
        )
      );
    },
    EnumValue: (e) => I0(u, e),
    IntValue: (e) => I0(u, e),
    FloatValue: (e) => I0(u, e),
    StringValue: (e) => I0(u, e),
    BooleanValue: (e) => I0(u, e)
  };
}
function I0(u, e) {
  const a = u.getInputType();
  if (!a)
    return;
  const i = ju(a);
  if (!E0(i)) {
    const r = z(a);
    u.reportError(
      new B(
        `Expected value of type "${r}", found ${Eu(e)}.`,
        {
          nodes: e
        }
      )
    );
    return;
  }
  try {
    if (i.parseLiteral(
      e,
      void 0
      /* variables */
    ) === void 0) {
      const n = z(a);
      u.reportError(
        new B(
          `Expected value of type "${n}", found ${Eu(e)}.`,
          {
            nodes: e
          }
        )
      );
    }
  } catch (r) {
    const n = z(a);
    r instanceof B ? u.reportError(r) : u.reportError(
      new B(
        `Expected value of type "${n}", found ${Eu(e)}; ` + r.message,
        {
          nodes: e,
          originalError: r
        }
      )
    );
  }
}
function pl(u) {
  return {
    VariableDefinition(e) {
      const a = Nu(u.getSchema(), e.type);
      if (a !== void 0 && !wu(a)) {
        const i = e.variable.name.value, r = Eu(e.type);
        u.reportError(
          new B(
            `Variable "$${i}" cannot be non-input type "${r}".`,
            {
              nodes: e.type
            }
          )
        );
      }
    }
  };
}
function hl(u) {
  let e = /* @__PURE__ */ Object.create(null);
  return {
    OperationDefinition: {
      enter() {
        e = /* @__PURE__ */ Object.create(null);
      },
      leave(a) {
        const i = u.getRecursiveVariableUsages(a);
        for (const { node: r, type: n, defaultValue: o } of i) {
          const t = r.name.value, s = e[t];
          if (s && n) {
            const l = u.getSchema(), E = Nu(l, s.type);
            if (E && !yd(
              l,
              E,
              s.defaultValue,
              n,
              o
            )) {
              const D = z(E), x = z(n);
              u.reportError(
                new B(
                  `Variable "$${t}" of type "${D}" used in position expecting type "${x}".`,
                  {
                    nodes: [s, r]
                  }
                )
              );
            }
          }
        }
      }
    },
    VariableDefinition(a) {
      e[a.variable.name.value] = a;
    }
  };
}
function yd(u, e, a, i, r) {
  if (I(i) && !I(e)) {
    if (!(a != null && a.kind !== p.NULL) && !(r !== void 0))
      return !1;
    const t = i.ofType;
    return $0(u, e, t);
  }
  return $0(u, e, i);
}
const gl = Object.freeze([
  Ls,
  cl,
  Vs,
  tl,
  fo,
  Rs,
  pl,
  al,
  Ks,
  xl,
  Gs,
  $s,
  Qs,
  Os,
  Fl,
  Js,
  qs,
  yo,
  Po,
  Hs,
  jo,
  kl,
  ul,
  hl,
  Us,
  To
]), fd = Object.freeze([
  Is,
  dl,
  ml,
  El,
  Dl,
  sl,
  ll,
  fo,
  yo,
  Po,
  Xs,
  _s,
  jo,
  To,
  el
]);
class Cl {
  constructor(e, a) {
    this._ast = e, this._fragments = void 0, this._fragmentSpreads = /* @__PURE__ */ new Map(), this._recursivelyReferencedFragments = /* @__PURE__ */ new Map(), this._onError = a;
  }
  get [Symbol.toStringTag]() {
    return "ASTValidationContext";
  }
  reportError(e) {
    this._onError(e);
  }
  getDocument() {
    return this._ast;
  }
  getFragment(e) {
    let a;
    if (this._fragments)
      a = this._fragments;
    else {
      a = /* @__PURE__ */ Object.create(null);
      for (const i of this.getDocument().definitions)
        i.kind === p.FRAGMENT_DEFINITION && (a[i.name.value] = i);
      this._fragments = a;
    }
    return a[e];
  }
  getFragmentSpreads(e) {
    let a = this._fragmentSpreads.get(e);
    if (!a) {
      a = [];
      const i = [e];
      let r;
      for (; r = i.pop(); )
        for (const n of r.selections)
          n.kind === p.FRAGMENT_SPREAD ? a.push(n) : n.selectionSet && i.push(n.selectionSet);
      this._fragmentSpreads.set(e, a);
    }
    return a;
  }
  getRecursivelyReferencedFragments(e) {
    let a = this._recursivelyReferencedFragments.get(e);
    if (!a) {
      a = [];
      const i = /* @__PURE__ */ Object.create(null), r = [e.selectionSet];
      let n;
      for (; n = r.pop(); )
        for (const o of this.getFragmentSpreads(n)) {
          const t = o.name.value;
          if (i[t] !== !0) {
            i[t] = !0;
            const s = this.getFragment(t);
            s && (a.push(s), r.push(s.selectionSet));
          }
        }
      this._recursivelyReferencedFragments.set(e, a);
    }
    return a;
  }
}
class zd extends Cl {
  constructor(e, a, i) {
    super(e, i), this._schema = a;
  }
  get [Symbol.toStringTag]() {
    return "SDLValidationContext";
  }
  getSchema() {
    return this._schema;
  }
}
class vl extends Cl {
  constructor(e, a, i, r) {
    super(a, r), this._schema = e, this._typeInfo = i, this._variableUsages = /* @__PURE__ */ new Map(), this._recursiveVariableUsages = /* @__PURE__ */ new Map();
  }
  get [Symbol.toStringTag]() {
    return "ValidationContext";
  }
  getSchema() {
    return this._schema;
  }
  getVariableUsages(e) {
    let a = this._variableUsages.get(e);
    if (!a) {
      const i = [], r = new Co(this._schema);
      Se(
        e,
        vo(r, {
          VariableDefinition: () => !1,
          Variable(n) {
            i.push({
              node: n,
              type: r.getInputType(),
              defaultValue: r.getDefaultValue()
            });
          }
        })
      ), a = i, this._variableUsages.set(e, a);
    }
    return a;
  }
  getRecursiveVariableUsages(e) {
    let a = this._recursiveVariableUsages.get(e);
    if (!a) {
      a = this.getVariableUsages(e);
      for (const i of this.getRecursivelyReferencedFragments(e))
        a = a.concat(this.getVariableUsages(i));
      this._recursiveVariableUsages.set(e, a);
    }
    return a;
  }
  getType() {
    return this._typeInfo.getType();
  }
  getParentType() {
    return this._typeInfo.getParentType();
  }
  getInputType() {
    return this._typeInfo.getInputType();
  }
  getParentInputType() {
    return this._typeInfo.getParentInputType();
  }
  getFieldDef() {
    return this._typeInfo.getFieldDef();
  }
  getDirective() {
    return this._typeInfo.getDirective();
  }
  getArgument() {
    return this._typeInfo.getArgument();
  }
  getEnumValue() {
    return this._typeInfo.getEnumValue();
  }
}
function bl(u, e, a = gl, i, r = new Co(u)) {
  var n;
  const o = (n = i == null ? void 0 : i.maxErrors) !== null && n !== void 0 ? n : 100;
  e || U(!1, "Must provide document."), ho(u);
  const t = Object.freeze({}), s = [], l = new vl(
    u,
    e,
    r,
    (D) => {
      if (s.length >= o)
        throw s.push(
          new B(
            "Too many validation errors, error limit reached. Validation aborted."
          )
        ), t;
      s.push(D);
    }
  ), E = Xn(a.map((D) => D(l)));
  try {
    Se(e, vo(r, E));
  } catch (D) {
    if (D !== t)
      throw D;
  }
  return s;
}
function Al(u, e, a = fd) {
  const i = [], r = new zd(
    u,
    e,
    (o) => {
      i.push(o);
    }
  ), n = a.map((o) => o(r));
  return Se(u, Xn(n)), i;
}
function Sd(u) {
  const e = Al(u);
  if (e.length !== 0)
    throw new Error(e.map((a) => a.message).join(`

`));
}
function Md(u, e) {
  const a = Al(u, e);
  if (a.length !== 0)
    throw new Error(a.map((i) => i.message).join(`

`));
}
function jd(u) {
  let e;
  return function(i, r, n) {
    e === void 0 && (e = /* @__PURE__ */ new WeakMap());
    let o = e.get(i);
    o === void 0 && (o = /* @__PURE__ */ new WeakMap(), e.set(i, o));
    let t = o.get(r);
    t === void 0 && (t = /* @__PURE__ */ new WeakMap(), o.set(r, t));
    let s = t.get(n);
    return s === void 0 && (s = u(i, r, n), t.set(n, s)), s;
  };
}
function Pd(u) {
  return Promise.all(Object.values(u)).then((e) => {
    const a = /* @__PURE__ */ Object.create(null);
    for (const [i, r] of Object.keys(u).entries())
      a[r] = e[i];
    return a;
  });
}
function Td(u, e, a) {
  let i = a;
  for (const r of u)
    i = Vu(i) ? i.then((n) => e(n, r)) : e(i, r);
  return i;
}
function wd(u) {
  return u instanceof Error ? u : new Nd(u);
}
class Nd extends Error {
  constructor(e) {
    super("Unexpected error value: " + z(e)), this.name = "NonErrorThrown", this.thrownValue = e;
  }
}
function ve(u, e, a) {
  var i;
  const r = wd(u);
  return Ld(r) ? r : new B(r.message, {
    nodes: (i = r.nodes) !== null && i !== void 0 ? i : e,
    source: r.source,
    positions: r.positions,
    path: a,
    originalError: r
  });
}
function Ld(u) {
  return Array.isArray(u.path);
}
const Kd = jd(
  (u, e, a) => bd(
    u.schema,
    u.fragments,
    u.variableValues,
    e,
    a
  )
);
function Qi(u) {
  arguments.length < 2 || U(
    !1,
    "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead."
  );
  const { schema: e, document: a, variableValues: i, rootValue: r } = u;
  yl(e, a, i);
  const n = fl(u);
  if (!("schema" in n))
    return {
      errors: n
    };
  try {
    const { operation: o } = n, t = Rd(n, o, r);
    return Vu(t) ? t.then(
      (s) => Ja(s, n.errors),
      (s) => (n.errors.push(s), Ja(null, n.errors))
    ) : Ja(t, n.errors);
  } catch (o) {
    return n.errors.push(o), Ja(null, n.errors);
  }
}
function Bl(u) {
  const e = Qi(u);
  if (Vu(e))
    throw new Error("GraphQL execution failed to complete synchronously.");
  return e;
}
function Ja(u, e) {
  return e.length === 0 ? {
    data: u
  } : {
    errors: e,
    data: u
  };
}
function yl(u, e, a) {
  e || U(!1, "Must provide document."), ho(u), a == null || Iu(a) || U(
    !1,
    "Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided."
  );
}
function fl(u) {
  var e, a;
  const {
    schema: i,
    document: r,
    rootValue: n,
    contextValue: o,
    variableValues: t,
    operationName: s,
    fieldResolver: l,
    typeResolver: E,
    subscribeFieldResolver: D
  } = u;
  let x;
  const c = /* @__PURE__ */ Object.create(null);
  for (const k of r.definitions)
    switch (k.kind) {
      case p.OPERATION_DEFINITION:
        if (s == null) {
          if (x !== void 0)
            return [
              new B(
                "Must provide operation name if query contains multiple operations."
              )
            ];
          x = k;
        } else
          ((e = k.name) === null || e === void 0 ? void 0 : e.value) === s && (x = k);
        break;
      case p.FRAGMENT_DEFINITION:
        c[k.name.value] = k;
        break;
    }
  if (!x)
    return s != null ? [new B(`Unknown operation named "${s}".`)] : [new B("Must provide an operation.")];
  const d = (a = x.variableDefinitions) !== null && a !== void 0 ? a : [], F = nl(
    i,
    d,
    t ?? {},
    {
      maxErrors: 50
    }
  );
  return F.errors ? F.errors : {
    schema: i,
    fragments: c,
    rootValue: n,
    contextValue: o,
    operation: x,
    variableValues: F.coerced,
    fieldResolver: l ?? Sn,
    typeResolver: E ?? Ml,
    subscribeFieldResolver: D ?? Sn,
    errors: []
  };
}
function Rd(u, e, a) {
  const i = u.schema.getRootType(e.operation);
  if (i == null)
    throw new B(
      `Schema is not configured to execute ${e.operation} operation.`,
      {
        nodes: e
      }
    );
  const r = So(
    u.schema,
    u.fragments,
    u.variableValues,
    i,
    e.selectionSet
  ), n = void 0;
  switch (e.operation) {
    case bu.QUERY:
      return gi(u, i, a, n, r);
    case bu.MUTATION:
      return Hd(
        u,
        i,
        a,
        n,
        r
      );
    case bu.SUBSCRIPTION:
      return gi(u, i, a, n, r);
  }
}
function Hd(u, e, a, i, r) {
  return Td(
    r.entries(),
    (n, [o, t]) => {
      const s = Ce(i, o, e.name), l = zl(
        u,
        e,
        a,
        t,
        s
      );
      return l === void 0 ? n : Vu(l) ? l.then((E) => (n[o] = E, n)) : (n[o] = l, n);
    },
    /* @__PURE__ */ Object.create(null)
  );
}
function gi(u, e, a, i, r) {
  const n = /* @__PURE__ */ Object.create(null);
  let o = !1;
  for (const [t, s] of r.entries()) {
    const l = Ce(i, t, e.name), E = zl(
      u,
      e,
      a,
      s,
      l
    );
    E !== void 0 && (n[t] = E, Vu(E) && (o = !0));
  }
  return o ? Pd(n) : n;
}
function zl(u, e, a, i, r) {
  var n;
  const o = jl(u.schema, e, i[0]);
  if (!o)
    return;
  const t = o.type, s = (n = o.resolve) !== null && n !== void 0 ? n : u.fieldResolver, l = Sl(
    u,
    o,
    i,
    e,
    r
  );
  try {
    const E = Yi(
      o,
      i[0],
      u.variableValues
    ), D = u.contextValue, x = s(a, E, D, l);
    let c;
    return Vu(x) ? c = x.then(
      (d) => aa(u, t, i, l, r, d)
    ) : c = aa(
      u,
      t,
      i,
      l,
      r,
      x
    ), Vu(c) ? c.then(void 0, (d) => {
      const F = ve(d, i, _u(r));
      return Ci(F, t, u);
    }) : c;
  } catch (E) {
    const D = ve(E, i, _u(r));
    return Ci(D, t, u);
  }
}
function Sl(u, e, a, i, r) {
  return {
    fieldName: e.name,
    fieldNodes: a,
    returnType: e.type,
    parentType: i,
    path: r,
    schema: u.schema,
    fragments: u.fragments,
    rootValue: u.rootValue,
    operation: u.operation,
    variableValues: u.variableValues
  };
}
function Ci(u, e, a) {
  if (I(e))
    throw u;
  return a.errors.push(u), null;
}
function aa(u, e, a, i, r, n) {
  if (n instanceof Error)
    throw n;
  if (I(e)) {
    const o = aa(
      u,
      e.ofType,
      a,
      i,
      r,
      n
    );
    if (o === null)
      throw new Error(
        `Cannot return null for non-nullable field ${i.parentType.name}.${i.fieldName}.`
      );
    return o;
  }
  if (n == null)
    return null;
  if (Du(e))
    return _d(
      u,
      e,
      a,
      i,
      r,
      n
    );
  if (E0(e))
    return Gd(e, n);
  if (t0(e))
    return Vd(
      u,
      e,
      a,
      i,
      r,
      n
    );
  if (Q(e))
    return zn(
      u,
      e,
      a,
      i,
      r,
      n
    );
  ku(
    !1,
    "Cannot complete value of unexpected output type: " + z(e)
  );
}
function _d(u, e, a, i, r, n) {
  if (!Eo(n))
    throw new B(
      `Expected Iterable, but did not find one for field "${i.parentType.name}.${i.fieldName}".`
    );
  const o = e.ofType;
  let t = !1;
  const s = Array.from(n, (l, E) => {
    const D = Ce(r, E, void 0);
    try {
      let x;
      return Vu(l) ? x = l.then(
        (c) => aa(
          u,
          o,
          a,
          i,
          D,
          c
        )
      ) : x = aa(
        u,
        o,
        a,
        i,
        D,
        l
      ), Vu(x) ? (t = !0, x.then(void 0, (c) => {
        const d = ve(
          c,
          a,
          _u(D)
        );
        return Ci(d, o, u);
      })) : x;
    } catch (x) {
      const c = ve(x, a, _u(D));
      return Ci(c, o, u);
    }
  });
  return t ? Promise.all(s) : s;
}
function Gd(u, e) {
  const a = u.serialize(e);
  if (a == null)
    throw new Error(
      `Expected \`${z(u)}.serialize(${z(e)})\` to return non-nullable value, returned: ${z(a)}`
    );
  return a;
}
function Vd(u, e, a, i, r, n) {
  var o;
  const t = (o = e.resolveType) !== null && o !== void 0 ? o : u.typeResolver, s = u.contextValue, l = t(n, s, i, e);
  return Vu(l) ? l.then(
    (E) => zn(
      u,
      c1(
        E,
        u,
        e,
        a,
        i,
        n
      ),
      a,
      i,
      r,
      n
    )
  ) : zn(
    u,
    c1(
      l,
      u,
      e,
      a,
      i,
      n
    ),
    a,
    i,
    r,
    n
  );
}
function c1(u, e, a, i, r, n) {
  if (u == null)
    throw new B(
      `Abstract type "${a.name}" must resolve to an Object type at runtime for field "${r.parentType.name}.${r.fieldName}". Either the "${a.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`,
      i
    );
  if (Q(u))
    throw new B(
      "Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead."
    );
  if (typeof u != "string")
    throw new B(
      `Abstract type "${a.name}" must resolve to an Object type at runtime for field "${r.parentType.name}.${r.fieldName}" with value ${z(n)}, received "${z(u)}".`
    );
  const o = e.schema.getType(u);
  if (o == null)
    throw new B(
      `Abstract type "${a.name}" was resolved to a type "${u}" that does not exist inside the schema.`,
      {
        nodes: i
      }
    );
  if (!Q(o))
    throw new B(
      `Abstract type "${a.name}" was resolved to a non-object type "${u}".`,
      {
        nodes: i
      }
    );
  if (!e.schema.isSubType(a, o))
    throw new B(
      `Runtime Object type "${o.name}" is not a possible type for "${a.name}".`,
      {
        nodes: i
      }
    );
  return o;
}
function zn(u, e, a, i, r, n) {
  const o = Kd(u, e, a);
  if (e.isTypeOf) {
    const t = e.isTypeOf(n, u.contextValue, i);
    if (Vu(t))
      return t.then((s) => {
        if (!s)
          throw d1(e, n, a);
        return gi(
          u,
          e,
          n,
          r,
          o
        );
      });
    if (!t)
      throw d1(e, n, a);
  }
  return gi(u, e, n, r, o);
}
function d1(u, e, a) {
  return new B(
    `Expected value of type "${u.name}" but got: ${z(e)}.`,
    {
      nodes: a
    }
  );
}
const Ml = function(u, e, a, i) {
  if (Iu(u) && typeof u.__typename == "string")
    return u.__typename;
  const r = a.schema.getPossibleTypes(i), n = [];
  for (let o = 0; o < r.length; o++) {
    const t = r[o];
    if (t.isTypeOf) {
      const s = t.isTypeOf(u, e, a);
      if (Vu(s))
        n[o] = s;
      else if (s)
        return t.name;
    }
  }
  if (n.length)
    return Promise.all(n).then((o) => {
      for (let t = 0; t < o.length; t++)
        if (o[t])
          return r[t].name;
    });
}, Sn = function(u, e, a, i) {
  if (Iu(u) || typeof u == "function") {
    const r = u[i.fieldName];
    return typeof r == "function" ? u[i.fieldName](e, a, i) : r;
  }
};
function jl(u, e, a) {
  const i = a.name.value;
  return i === Qe.name && u.getQueryType() === e ? Qe : i === Xe.name && u.getQueryType() === e ? Xe : i === ua.name ? ua : e.getFields()[i];
}
function Id(u) {
  return new Promise((e) => e(Pl(u)));
}
function Od(u) {
  const e = Pl(u);
  if (Vu(e))
    throw new Error("GraphQL execution failed to complete synchronously.");
  return e;
}
function Pl(u) {
  arguments.length < 2 || U(
    !1,
    "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead."
  );
  const {
    schema: e,
    source: a,
    rootValue: i,
    contextValue: r,
    variableValues: n,
    operationName: o,
    fieldResolver: t,
    typeResolver: s
  } = u, l = po(e);
  if (l.length > 0)
    return {
      errors: l
    };
  let E;
  try {
    E = ma(a);
  } catch (x) {
    return {
      errors: [x]
    };
  }
  const D = bl(e, E);
  return D.length > 0 ? {
    errors: D
  } : Qi({
    schema: e,
    document: E,
    rootValue: i,
    contextValue: r,
    variableValues: n,
    operationName: o,
    fieldResolver: t,
    typeResolver: s
  });
}
function Tl(u) {
  return typeof (u == null ? void 0 : u[Symbol.asyncIterator]) == "function";
}
function Jd(u, e) {
  const a = u[Symbol.asyncIterator]();
  async function i(r) {
    if (r.done)
      return r;
    try {
      return {
        value: await e(r.value),
        done: !1
      };
    } catch (n) {
      if (typeof a.return == "function")
        try {
          await a.return();
        } catch {
        }
      throw n;
    }
  }
  return {
    async next() {
      return i(await a.next());
    },
    async return() {
      return typeof a.return == "function" ? i(await a.return()) : {
        value: void 0,
        done: !0
      };
    },
    async throw(r) {
      if (typeof a.throw == "function")
        return i(await a.throw(r));
      throw r;
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}
async function $d(u) {
  arguments.length < 2 || U(
    !1,
    "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead."
  );
  const e = await wl(u);
  return Tl(e) ? Jd(e, (i) => Qi({ ...u, rootValue: i })) : e;
}
function qd(u) {
  const e = u[0];
  return e && "document" in e ? e : {
    schema: e,
    // FIXME: when underlying TS bug fixed, see https://github.com/microsoft/TypeScript/issues/31613
    document: u[1],
    rootValue: u[2],
    contextValue: u[3],
    variableValues: u[4],
    operationName: u[5],
    subscribeFieldResolver: u[6]
  };
}
async function wl(...u) {
  const e = qd(u), { schema: a, document: i, variableValues: r } = e;
  yl(a, i, r);
  const n = fl(e);
  if (!("schema" in n))
    return {
      errors: n
    };
  try {
    const o = await Wd(n);
    if (!Tl(o))
      throw new Error(
        `Subscription field must return Async Iterable. Received: ${z(o)}.`
      );
    return o;
  } catch (o) {
    if (o instanceof B)
      return {
        errors: [o]
      };
    throw o;
  }
}
async function Wd(u) {
  const { schema: e, fragments: a, operation: i, variableValues: r, rootValue: n } = u, o = e.getSubscriptionType();
  if (o == null)
    throw new B(
      "Schema is not configured to execute subscription operation.",
      {
        nodes: i
      }
    );
  const t = So(
    e,
    a,
    r,
    o,
    i.selectionSet
  ), [s, l] = [...t.entries()][0], E = jl(e, o, l[0]);
  if (!E) {
    const d = l[0].name.value;
    throw new B(
      `The subscription field "${d}" is not defined.`,
      {
        nodes: l
      }
    );
  }
  const D = Ce(void 0, s, o.name), x = Sl(
    u,
    E,
    l,
    o,
    D
  );
  try {
    var c;
    const d = Yi(E, l[0], r), F = u.contextValue, g = await ((c = E.subscribe) !== null && c !== void 0 ? c : u.subscribeFieldResolver)(n, d, F, x);
    if (g instanceof Error)
      throw g;
    return g;
  } catch (d) {
    throw ve(d, l, _u(D));
  }
}
function Ud(u) {
  return {
    Field(e) {
      const a = u.getFieldDef(), i = a == null ? void 0 : a.deprecationReason;
      if (a && i != null) {
        const r = u.getParentType();
        r != null || ku(!1), u.reportError(
          new B(
            `The field ${r.name}.${a.name} is deprecated. ${i}`,
            {
              nodes: e
            }
          )
        );
      }
    },
    Argument(e) {
      const a = u.getArgument(), i = a == null ? void 0 : a.deprecationReason;
      if (a && i != null) {
        const r = u.getDirective();
        if (r != null)
          u.reportError(
            new B(
              `Directive "@${r.name}" argument "${a.name}" is deprecated. ${i}`,
              {
                nodes: e
              }
            )
          );
        else {
          const n = u.getParentType(), o = u.getFieldDef();
          n != null && o != null || ku(!1), u.reportError(
            new B(
              `Field "${n.name}.${o.name}" argument "${a.name}" is deprecated. ${i}`,
              {
                nodes: e
              }
            )
          );
        }
      }
    },
    ObjectField(e) {
      const a = ju(u.getParentInputType());
      if (xu(a)) {
        const i = a.getFields()[e.name.value], r = i == null ? void 0 : i.deprecationReason;
        r != null && u.reportError(
          new B(
            `The input field ${a.name}.${i.name} is deprecated. ${r}`,
            {
              nodes: e
            }
          )
        );
      }
    },
    EnumValue(e) {
      const a = u.getEnumValue(), i = a == null ? void 0 : a.deprecationReason;
      if (a && i != null) {
        const r = ju(u.getInputType());
        r != null || ku(!1), u.reportError(
          new B(
            `The enum value "${r.name}.${a.name}" is deprecated. ${i}`,
            {
              nodes: e
            }
          )
        );
      }
    }
  };
}
function Zd(u) {
  return {
    Field(e) {
      const a = ju(u.getType());
      a && ue(a) && u.reportError(
        new B(
          `GraphQL introspection has been disabled, but the requested query contained the field "${e.name.value}".`,
          {
            nodes: e
          }
        )
      );
    }
  };
}
function Nl(u) {
  const e = {
    descriptions: !0,
    specifiedByUrl: !1,
    directiveIsRepeatable: !1,
    schemaDescription: !1,
    inputValueDeprecation: !1,
    ...u
  }, a = e.descriptions ? "description" : "", i = e.specifiedByUrl ? "specifiedByURL" : "", r = e.directiveIsRepeatable ? "isRepeatable" : "", n = e.schemaDescription ? a : "";
  function o(t) {
    return e.inputValueDeprecation ? t : "";
  }
  return `
    query IntrospectionQuery {
      __schema {
        ${n}
        queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
          ...FullType
        }
        directives {
          name
          ${a}
          ${r}
          locations
          args${o("(includeDeprecated: true)")} {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      ${a}
      ${i}
      fields(includeDeprecated: true) {
        name
        ${a}
        args${o("(includeDeprecated: true)")} {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields${o("(includeDeprecated: true)")} {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        ${a}
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      ${a}
      type { ...TypeRef }
      defaultValue
      ${o("isDeprecated")}
      ${o("deprecationReason")}
    }

    fragment TypeRef on __Type {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
}
function Yd(u, e) {
  let a = null;
  for (const r of u.definitions)
    if (r.kind === p.OPERATION_DEFINITION) {
      var i;
      if (e == null) {
        if (a)
          return null;
        a = r;
      } else if (((i = r.name) === null || i === void 0 ? void 0 : i.value) === e)
        return r;
    }
  return a;
}
function Qd(u, e) {
  if (e.operation === "query") {
    const a = u.getQueryType();
    if (!a)
      throw new B(
        "Schema does not define the required query root type.",
        {
          nodes: e
        }
      );
    return a;
  }
  if (e.operation === "mutation") {
    const a = u.getMutationType();
    if (!a)
      throw new B("Schema is not configured for mutations.", {
        nodes: e
      });
    return a;
  }
  if (e.operation === "subscription") {
    const a = u.getSubscriptionType();
    if (!a)
      throw new B("Schema is not configured for subscriptions.", {
        nodes: e
      });
    return a;
  }
  throw new B(
    "Can only have query, mutation and subscription operations.",
    {
      nodes: e
    }
  );
}
function Xd(u, e) {
  const a = {
    specifiedByUrl: !0,
    directiveIsRepeatable: !0,
    schemaDescription: !0,
    inputValueDeprecation: !0,
    ...e
  }, i = ma(Nl(a)), r = Bl({
    schema: u,
    document: i
  });
  return !r.errors && r.data || ku(!1), r.data;
}
function u6(u, e) {
  Iu(u) && Iu(u.__schema) || U(
    !1,
    `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${z(
      u
    )}.`
  );
  const a = u.__schema, i = j0(
    a.types,
    (b) => b.name,
    (b) => x(b)
  );
  for (const b of [...ga, ...ba])
    i[b.name] && (i[b.name] = b);
  const r = a.queryType ? E(a.queryType) : null, n = a.mutationType ? E(a.mutationType) : null, o = a.subscriptionType ? E(a.subscriptionType) : null, t = a.directives ? a.directives.map(V) : [];
  return new Me({
    description: a.description,
    query: r,
    mutation: n,
    subscription: o,
    types: Object.values(i),
    directives: t,
    assumeValid: e == null ? void 0 : e.assumeValid
  });
  function s(b) {
    if (b.kind === nu.LIST) {
      const P = b.ofType;
      if (!P)
        throw new Error("Decorated type deeper than introspection query.");
      return new zu(s(P));
    }
    if (b.kind === nu.NON_NULL) {
      const P = b.ofType;
      if (!P)
        throw new Error("Decorated type deeper than introspection query.");
      const H = s(P);
      return new W(ys(H));
    }
    return l(b);
  }
  function l(b) {
    const P = b.name;
    if (!P)
      throw new Error(`Unknown type reference: ${z(b)}.`);
    const H = i[P];
    if (!H)
      throw new Error(
        `Invalid or incomplete schema, unknown type: ${P}. Ensure that a full introspection query is used in order to build a client schema.`
      );
    return H;
  }
  function E(b) {
    return As(l(b));
  }
  function D(b) {
    return Bs(l(b));
  }
  function x(b) {
    if (b != null && b.name != null && b.kind != null)
      switch (b.kind) {
        case nu.SCALAR:
          return c(b);
        case nu.OBJECT:
          return F(b);
        case nu.INTERFACE:
          return k(b);
        case nu.UNION:
          return g(b);
        case nu.ENUM:
          return M(b);
        case nu.INPUT_OBJECT:
          return A(b);
      }
    const P = z(b);
    throw new Error(
      `Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${P}.`
    );
  }
  function c(b) {
    return new x0({
      name: b.name,
      description: b.description,
      specifiedByURL: b.specifiedByURL
    });
  }
  function d(b) {
    if (b.interfaces === null && b.kind === nu.INTERFACE)
      return [];
    if (!b.interfaces) {
      const P = z(b);
      throw new Error(
        `Introspection result missing interfaces: ${P}.`
      );
    }
    return b.interfaces.map(D);
  }
  function F(b) {
    return new Yu({
      name: b.name,
      description: b.description,
      interfaces: () => d(b),
      fields: () => v(b)
    });
  }
  function k(b) {
    return new pe({
      name: b.name,
      description: b.description,
      interfaces: () => d(b),
      fields: () => v(b)
    });
  }
  function g(b) {
    if (!b.possibleTypes) {
      const P = z(b);
      throw new Error(
        `Introspection result missing possibleTypes: ${P}.`
      );
    }
    return new he({
      name: b.name,
      description: b.description,
      types: () => b.possibleTypes.map(E)
    });
  }
  function M(b) {
    if (!b.enumValues) {
      const P = z(b);
      throw new Error(
        `Introspection result missing enumValues: ${P}.`
      );
    }
    return new L0({
      name: b.name,
      description: b.description,
      values: j0(
        b.enumValues,
        (P) => P.name,
        (P) => ({
          description: P.description,
          deprecationReason: P.deprecationReason
        })
      )
    });
  }
  function A(b) {
    if (!b.inputFields) {
      const P = z(b);
      throw new Error(
        `Introspection result missing inputFields: ${P}.`
      );
    }
    return new ge({
      name: b.name,
      description: b.description,
      fields: () => R(b.inputFields)
    });
  }
  function v(b) {
    if (!b.fields)
      throw new Error(
        `Introspection result missing fields: ${z(b)}.`
      );
    return j0(
      b.fields,
      (P) => P.name,
      T
    );
  }
  function T(b) {
    const P = s(b.type);
    if (!T0(P)) {
      const H = z(P);
      throw new Error(
        `Introspection must provide output type for fields, but received: ${H}.`
      );
    }
    if (!b.args) {
      const H = z(b);
      throw new Error(
        `Introspection result missing field args: ${H}.`
      );
    }
    return {
      description: b.description,
      deprecationReason: b.deprecationReason,
      type: P,
      args: R(b.args)
    };
  }
  function R(b) {
    return j0(
      b,
      (P) => P.name,
      O
    );
  }
  function O(b) {
    const P = s(b.type);
    if (!wu(P)) {
      const J = z(P);
      throw new Error(
        `Introspection must provide input type for arguments, but received: ${J}.`
      );
    }
    const H = b.defaultValue != null ? o0(Cs(b.defaultValue), P) : void 0;
    return {
      description: b.description,
      type: P,
      defaultValue: H,
      deprecationReason: b.deprecationReason
    };
  }
  function V(b) {
    if (!b.args) {
      const P = z(b);
      throw new Error(
        `Introspection result missing directive args: ${P}.`
      );
    }
    if (!b.locations) {
      const P = z(b);
      throw new Error(
        `Introspection result missing directive locations: ${P}.`
      );
    }
    return new c0({
      name: b.name,
      description: b.description,
      isRepeatable: b.isRepeatable,
      locations: b.locations.slice(),
      args: R(b.args)
    });
  }
}
function e6(u, e, a) {
  ko(u), e != null && e.kind === p.DOCUMENT || U(!1, "Must provide valid Document AST."), (a == null ? void 0 : a.assumeValid) !== !0 && (a == null ? void 0 : a.assumeValidSDL) !== !0 && Md(e, u);
  const i = u.toConfig(), r = Ll(i, e, a);
  return i === r ? u : new Me(r);
}
function Ll(u, e, a) {
  var i, r, n, o;
  const t = [], s = /* @__PURE__ */ Object.create(null), l = [];
  let E;
  const D = [];
  for (const m of e.definitions)
    if (m.kind === p.SCHEMA_DEFINITION)
      E = m;
    else if (m.kind === p.SCHEMA_EXTENSION)
      D.push(m);
    else if (je(m))
      t.push(m);
    else if (Ui(m)) {
      const h = m.name.value, C = s[h];
      s[h] = C ? C.concat([m]) : [m];
    } else
      m.kind === p.DIRECTIVE_DEFINITION && l.push(m);
  if (Object.keys(s).length === 0 && t.length === 0 && l.length === 0 && D.length === 0 && E == null)
    return u;
  const x = /* @__PURE__ */ Object.create(null);
  for (const m of u.types)
    x[m.name] = M(m);
  for (const m of t) {
    var c;
    const h = m.name.value;
    x[h] = (c = m1[h]) !== null && c !== void 0 ? c : u0(m);
  }
  const d = {
    // Get the extended root operation types.
    query: u.query && k(u.query),
    mutation: u.mutation && k(u.mutation),
    subscription: u.subscription && k(u.subscription),
    // Then, incorporate schema definition and all schema extensions.
    ...E && H([E]),
    ...H(D)
  };
  return {
    description: (i = E) === null || i === void 0 || (r = i.description) === null || r === void 0 ? void 0 : r.value,
    ...d,
    types: Object.values(x),
    directives: [
      ...u.directives.map(g),
      ...l.map(Y)
    ],
    extensions: /* @__PURE__ */ Object.create(null),
    astNode: (n = E) !== null && n !== void 0 ? n : u.astNode,
    extensionASTNodes: u.extensionASTNodes.concat(D),
    assumeValid: (o = a == null ? void 0 : a.assumeValid) !== null && o !== void 0 ? o : !1
  };
  function F(m) {
    return Du(m) ? new zu(F(m.ofType)) : I(m) ? new W(F(m.ofType)) : k(m);
  }
  function k(m) {
    return x[m.name];
  }
  function g(m) {
    const h = m.toConfig();
    return new c0({
      ...h,
      args: m0(h.args, P)
    });
  }
  function M(m) {
    if (ue(m) || Ji(m))
      return m;
    if (Ju(m))
      return T(m);
    if (Q(m))
      return R(m);
    if (uu(m))
      return O(m);
    if (Au(m))
      return V(m);
    if (hu(m))
      return v(m);
    if (xu(m))
      return A(m);
    ku(!1, "Unexpected type: " + z(m));
  }
  function A(m) {
    var h;
    const C = m.toConfig(), S = (h = s[C.name]) !== null && h !== void 0 ? h : [];
    return new ge({
      ...C,
      fields: () => ({
        ...m0(C.fields, (N) => ({
          ...N,
          type: F(N.type)
        })),
        ...tu(S)
      }),
      extensionASTNodes: C.extensionASTNodes.concat(S)
    });
  }
  function v(m) {
    var h;
    const C = m.toConfig(), S = (h = s[m.name]) !== null && h !== void 0 ? h : [];
    return new L0({
      ...C,
      values: { ...C.values, ...su(S) },
      extensionASTNodes: C.extensionASTNodes.concat(S)
    });
  }
  function T(m) {
    var h;
    const C = m.toConfig(), S = (h = s[C.name]) !== null && h !== void 0 ? h : [];
    let N = C.specifiedByURL;
    for (const L of S) {
      var _;
      N = (_ = F1(L)) !== null && _ !== void 0 ? _ : N;
    }
    return new x0({
      ...C,
      specifiedByURL: N,
      extensionASTNodes: C.extensionASTNodes.concat(S)
    });
  }
  function R(m) {
    var h;
    const C = m.toConfig(), S = (h = s[C.name]) !== null && h !== void 0 ? h : [];
    return new Yu({
      ...C,
      interfaces: () => [
        ...m.getInterfaces().map(k),
        ...gu(S)
      ],
      fields: () => ({
        ...m0(C.fields, b),
        ...eu(S)
      }),
      extensionASTNodes: C.extensionASTNodes.concat(S)
    });
  }
  function O(m) {
    var h;
    const C = m.toConfig(), S = (h = s[C.name]) !== null && h !== void 0 ? h : [];
    return new pe({
      ...C,
      interfaces: () => [
        ...m.getInterfaces().map(k),
        ...gu(S)
      ],
      fields: () => ({
        ...m0(C.fields, b),
        ...eu(S)
      }),
      extensionASTNodes: C.extensionASTNodes.concat(S)
    });
  }
  function V(m) {
    var h;
    const C = m.toConfig(), S = (h = s[C.name]) !== null && h !== void 0 ? h : [];
    return new he({
      ...C,
      types: () => [
        ...m.getTypes().map(k),
        ...Ru(S)
      ],
      extensionASTNodes: C.extensionASTNodes.concat(S)
    });
  }
  function b(m) {
    return {
      ...m,
      type: F(m.type),
      args: m.args && m0(m.args, P)
    };
  }
  function P(m) {
    return { ...m, type: F(m.type) };
  }
  function H(m) {
    const h = {};
    for (const S of m) {
      var C;
      const N = (
        /* c8 ignore next */
        (C = S.operationTypes) !== null && C !== void 0 ? C : []
      );
      for (const _ of N)
        h[_.operation] = J(_.type);
    }
    return h;
  }
  function J(m) {
    var h;
    const C = m.name.value, S = (h = m1[C]) !== null && h !== void 0 ? h : x[C];
    if (S === void 0)
      throw new Error(`Unknown type: "${C}".`);
    return S;
  }
  function ru(m) {
    return m.kind === p.LIST_TYPE ? new zu(ru(m.type)) : m.kind === p.NON_NULL_TYPE ? new W(ru(m.type)) : J(m);
  }
  function Y(m) {
    var h;
    return new c0({
      name: m.name.value,
      description: (h = m.description) === null || h === void 0 ? void 0 : h.value,
      // @ts-expect-error
      locations: m.locations.map(({ value: C }) => C),
      isRepeatable: m.repeatable,
      args: $(m.arguments),
      astNode: m
    });
  }
  function eu(m) {
    const h = /* @__PURE__ */ Object.create(null);
    for (const N of m) {
      var C;
      const _ = (
        /* c8 ignore next */
        (C = N.fields) !== null && C !== void 0 ? C : []
      );
      for (const L of _) {
        var S;
        h[L.name.value] = {
          // Note: While this could make assertions to get the correctly typed
          // value, that would throw immediately while type system validation
          // with validateSchema() will produce more actionable results.
          type: ru(L.type),
          description: (S = L.description) === null || S === void 0 ? void 0 : S.value,
          args: $(L.arguments),
          deprecationReason: $a(L),
          astNode: L
        };
      }
    }
    return h;
  }
  function $(m) {
    const h = (
      /* c8 ignore next */
      m ?? []
    ), C = /* @__PURE__ */ Object.create(null);
    for (const N of h) {
      var S;
      const _ = ru(N.type);
      C[N.name.value] = {
        type: _,
        description: (S = N.description) === null || S === void 0 ? void 0 : S.value,
        defaultValue: o0(N.defaultValue, _),
        deprecationReason: $a(N),
        astNode: N
      };
    }
    return C;
  }
  function tu(m) {
    const h = /* @__PURE__ */ Object.create(null);
    for (const N of m) {
      var C;
      const _ = (
        /* c8 ignore next */
        (C = N.fields) !== null && C !== void 0 ? C : []
      );
      for (const L of _) {
        var S;
        const q = ru(L.type);
        h[L.name.value] = {
          type: q,
          description: (S = L.description) === null || S === void 0 ? void 0 : S.value,
          defaultValue: o0(L.defaultValue, q),
          deprecationReason: $a(L),
          astNode: L
        };
      }
    }
    return h;
  }
  function su(m) {
    const h = /* @__PURE__ */ Object.create(null);
    for (const N of m) {
      var C;
      const _ = (
        /* c8 ignore next */
        (C = N.values) !== null && C !== void 0 ? C : []
      );
      for (const L of _) {
        var S;
        h[L.name.value] = {
          description: (S = L.description) === null || S === void 0 ? void 0 : S.value,
          deprecationReason: $a(L),
          astNode: L
        };
      }
    }
    return h;
  }
  function gu(m) {
    return m.flatMap(
      // FIXME: https://github.com/graphql/graphql-js/issues/2203
      (h) => {
        var C, S;
        return (
          /* c8 ignore next */
          (C = (S = h.interfaces) === null || S === void 0 ? void 0 : S.map(J)) !== null && C !== void 0 ? C : []
        );
      }
    );
  }
  function Ru(m) {
    return m.flatMap(
      // FIXME: https://github.com/graphql/graphql-js/issues/2203
      (h) => {
        var C, S;
        return (
          /* c8 ignore next */
          (C = (S = h.types) === null || S === void 0 ? void 0 : S.map(J)) !== null && C !== void 0 ? C : []
        );
      }
    );
  }
  function u0(m) {
    var h;
    const C = m.name.value, S = (h = s[C]) !== null && h !== void 0 ? h : [];
    switch (m.kind) {
      case p.OBJECT_TYPE_DEFINITION: {
        var N;
        const Cu = [m, ...S];
        return new Yu({
          name: C,
          description: (N = m.description) === null || N === void 0 ? void 0 : N.value,
          interfaces: () => gu(Cu),
          fields: () => eu(Cu),
          astNode: m,
          extensionASTNodes: S
        });
      }
      case p.INTERFACE_TYPE_DEFINITION: {
        var _;
        const Cu = [m, ...S];
        return new pe({
          name: C,
          description: (_ = m.description) === null || _ === void 0 ? void 0 : _.value,
          interfaces: () => gu(Cu),
          fields: () => eu(Cu),
          astNode: m,
          extensionASTNodes: S
        });
      }
      case p.ENUM_TYPE_DEFINITION: {
        var L;
        const Cu = [m, ...S];
        return new L0({
          name: C,
          description: (L = m.description) === null || L === void 0 ? void 0 : L.value,
          values: su(Cu),
          astNode: m,
          extensionASTNodes: S
        });
      }
      case p.UNION_TYPE_DEFINITION: {
        var q;
        const Cu = [m, ...S];
        return new he({
          name: C,
          description: (q = m.description) === null || q === void 0 ? void 0 : q.value,
          types: () => Ru(Cu),
          astNode: m,
          extensionASTNodes: S
        });
      }
      case p.SCALAR_TYPE_DEFINITION: {
        var X;
        return new x0({
          name: C,
          description: (X = m.description) === null || X === void 0 ? void 0 : X.value,
          specifiedByURL: F1(m),
          astNode: m,
          extensionASTNodes: S
        });
      }
      case p.INPUT_OBJECT_TYPE_DEFINITION: {
        var Bu;
        const Cu = [m, ...S];
        return new ge({
          name: C,
          description: (Bu = m.description) === null || Bu === void 0 ? void 0 : Bu.value,
          fields: () => tu(Cu),
          astNode: m,
          extensionASTNodes: S
        });
      }
    }
  }
}
const m1 = h0(
  [...ga, ...ba],
  (u) => u.name
);
function $a(u) {
  const e = ea(qi, u);
  return e == null ? void 0 : e.reason;
}
function F1(u) {
  const e = ea(so, u);
  return e == null ? void 0 : e.url;
}
function Kl(u, e) {
  u != null && u.kind === p.DOCUMENT || U(!1, "Must provide valid Document AST."), (e == null ? void 0 : e.assumeValid) !== !0 && (e == null ? void 0 : e.assumeValidSDL) !== !0 && Sd(u);
  const i = Ll({
    description: void 0,
    types: [],
    directives: [],
    extensions: /* @__PURE__ */ Object.create(null),
    extensionASTNodes: [],
    assumeValid: !1
  }, u, e);
  if (i.astNode == null)
    for (const n of i.types)
      switch (n.name) {
        case "Query":
          i.query = n;
          break;
        case "Mutation":
          i.mutation = n;
          break;
        case "Subscription":
          i.subscription = n;
          break;
      }
  const r = [
    ...i.directives,
    // If specified directives were not explicitly declared, add them.
    ...G0.filter(
      (n) => i.directives.every(
        (o) => o.name !== n.name
      )
    )
  ];
  return new Me({ ...i, directives: r });
}
function a6(u, e) {
  const a = ma(u, {
    noLocation: e == null ? void 0 : e.noLocation,
    allowLegacyFragmentVariables: e == null ? void 0 : e.allowLegacyFragmentVariables
  });
  return Kl(a, {
    assumeValidSDL: e == null ? void 0 : e.assumeValidSDL,
    assumeValid: e == null ? void 0 : e.assumeValid
  });
}
function i6(u) {
  const e = u.toConfig(), a = j0(
    an(e.types),
    (x) => x.name,
    D
  );
  return new Me({
    ...e,
    types: Object.values(a),
    directives: an(e.directives).map(o),
    query: n(e.query),
    mutation: n(e.mutation),
    subscription: n(e.subscription)
  });
  function i(x) {
    return Du(x) ? new zu(i(x.ofType)) : I(x) ? new W(i(x.ofType)) : r(x);
  }
  function r(x) {
    return a[x.name];
  }
  function n(x) {
    return x && r(x);
  }
  function o(x) {
    const c = x.toConfig();
    return new c0({
      ...c,
      locations: Rl(c.locations, (d) => d),
      args: t(c.args)
    });
  }
  function t(x) {
    return qa(x, (c) => ({ ...c, type: i(c.type) }));
  }
  function s(x) {
    return qa(x, (c) => ({
      ...c,
      type: i(c.type),
      args: c.args && t(c.args)
    }));
  }
  function l(x) {
    return qa(x, (c) => ({
      ...c,
      type: i(c.type)
    }));
  }
  function E(x) {
    return an(x).map(r);
  }
  function D(x) {
    if (Ju(x) || ue(x))
      return x;
    if (Q(x)) {
      const c = x.toConfig();
      return new Yu({
        ...c,
        interfaces: () => E(c.interfaces),
        fields: () => s(c.fields)
      });
    }
    if (uu(x)) {
      const c = x.toConfig();
      return new pe({
        ...c,
        interfaces: () => E(c.interfaces),
        fields: () => s(c.fields)
      });
    }
    if (Au(x)) {
      const c = x.toConfig();
      return new he({
        ...c,
        types: () => E(c.types)
      });
    }
    if (hu(x)) {
      const c = x.toConfig();
      return new L0({
        ...c,
        values: qa(c.values, (d) => d)
      });
    }
    if (xu(x)) {
      const c = x.toConfig();
      return new ge({
        ...c,
        fields: () => l(c.fields)
      });
    }
    ku(!1, "Unexpected type: " + z(x));
  }
}
function qa(u, e) {
  const a = /* @__PURE__ */ Object.create(null);
  for (const i of Object.keys(u).sort(Fa))
    a[i] = e(u[i]);
  return a;
}
function an(u) {
  return Rl(u, (e) => e.name);
}
function Rl(u, e) {
  return u.slice().sort((a, i) => {
    const r = e(a), n = e(i);
    return Fa(r, n);
  });
}
function r6(u) {
  return Hl(
    u,
    (e) => !lo(e),
    o6
  );
}
function n6(u) {
  return Hl(u, lo, ue);
}
function o6(u) {
  return !Ji(u) && !ue(u);
}
function Hl(u, e, a) {
  const i = u.getDirectives().filter(e), r = Object.values(u.getTypeMap()).filter(a);
  return [
    t6(u),
    ...i.map((n) => m6(n)),
    ...r.map((n) => _l(n))
  ].filter(Boolean).join(`

`);
}
function t6(u) {
  if (u.description == null && s6(u))
    return;
  const e = [], a = u.getQueryType();
  a && e.push(`  query: ${a.name}`);
  const i = u.getMutationType();
  i && e.push(`  mutation: ${i.name}`);
  const r = u.getSubscriptionType();
  return r && e.push(`  subscription: ${r.name}`), Qu(u) + `schema {
${e.join(`
`)}
}`;
}
function s6(u) {
  const e = u.getQueryType();
  if (e && e.name !== "Query")
    return !1;
  const a = u.getMutationType();
  if (a && a.name !== "Mutation")
    return !1;
  const i = u.getSubscriptionType();
  return !(i && i.name !== "Subscription");
}
function _l(u) {
  if (Ju(u))
    return l6(u);
  if (Q(u))
    return E6(u);
  if (uu(u))
    return D6(u);
  if (Au(u))
    return x6(u);
  if (hu(u))
    return c6(u);
  if (xu(u))
    return d6(u);
  ku(!1, "Unexpected type: " + z(u));
}
function l6(u) {
  return Qu(u) + `scalar ${u.name}` + F6(u);
}
function Gl(u) {
  const e = u.getInterfaces();
  return e.length ? " implements " + e.map((a) => a.name).join(" & ") : "";
}
function E6(u) {
  return Qu(u) + `type ${u.name}` + Gl(u) + Vl(u);
}
function D6(u) {
  return Qu(u) + `interface ${u.name}` + Gl(u) + Vl(u);
}
function x6(u) {
  const e = u.getTypes(), a = e.length ? " = " + e.join(" | ") : "";
  return Qu(u) + "union " + u.name + a;
}
function c6(u) {
  const e = u.getValues().map(
    (a, i) => Qu(a, "  ", !i) + "  " + a.name + No(a.deprecationReason)
  );
  return Qu(u) + `enum ${u.name}` + wo(e);
}
function d6(u) {
  const e = Object.values(u.getFields()).map(
    (a, i) => Qu(a, "  ", !i) + "  " + Mn(a)
  );
  return Qu(u) + `input ${u.name}` + wo(e);
}
function Vl(u) {
  const e = Object.values(u.getFields()).map(
    (a, i) => Qu(a, "  ", !i) + "  " + a.name + Il(a.args, "  ") + ": " + String(a.type) + No(a.deprecationReason)
  );
  return wo(e);
}
function wo(u) {
  return u.length !== 0 ? ` {
` + u.join(`
`) + `
}` : "";
}
function Il(u, e = "") {
  return u.length === 0 ? "" : u.every((a) => !a.description) ? "(" + u.map(Mn).join(", ") + ")" : `(
` + u.map(
    (a, i) => Qu(a, "  " + e, !i) + "  " + e + Mn(a)
  ).join(`
`) + `
` + e + ")";
}
function Mn(u) {
  const e = P0(u.defaultValue, u.type);
  let a = u.name + ": " + String(u.type);
  return e && (a += ` = ${Eu(e)}`), a + No(u.deprecationReason);
}
function m6(u) {
  return Qu(u) + "directive @" + u.name + Il(u.args) + (u.isRepeatable ? " repeatable" : "") + " on " + u.locations.join(" | ");
}
function No(u) {
  return u == null ? "" : u !== to ? ` @deprecated(reason: ${Eu({
    kind: p.STRING,
    value: u
  })})` : " @deprecated";
}
function F6(u) {
  return u.specifiedByURL == null ? "" : ` @specifiedBy(url: ${Eu({
    kind: p.STRING,
    value: u.specifiedByURL
  })})`;
}
function Qu(u, e = "", a = !0) {
  const { description: i } = u;
  if (i == null)
    return "";
  const r = Eu({
    kind: p.STRING,
    value: i,
    block: Xx(i)
  });
  return (e && !a ? `
` + e : e) + r.replace(/\n/g, `
` + e) + `
`;
}
function k6(u) {
  const e = [];
  for (const a of u)
    e.push(...a.definitions);
  return {
    kind: p.DOCUMENT,
    definitions: e
  };
}
function p6(u) {
  const e = [], a = /* @__PURE__ */ Object.create(null);
  for (const r of u.definitions)
    switch (r.kind) {
      case p.OPERATION_DEFINITION:
        e.push(r);
        break;
      case p.FRAGMENT_DEFINITION:
        a[r.name.value] = k1(
          r.selectionSet
        );
        break;
    }
  const i = /* @__PURE__ */ Object.create(null);
  for (const r of e) {
    const n = /* @__PURE__ */ new Set();
    for (const t of k1(r.selectionSet))
      Ol(n, a, t);
    const o = r.name ? r.name.value : "";
    i[o] = {
      kind: p.DOCUMENT,
      definitions: u.definitions.filter(
        (t) => t === r || t.kind === p.FRAGMENT_DEFINITION && n.has(t.name.value)
      )
    };
  }
  return i;
}
function Ol(u, e, a) {
  if (!u.has(a)) {
    u.add(a);
    const i = e[a];
    if (i !== void 0)
      for (const r of i)
        Ol(u, e, r);
  }
}
function k1(u) {
  const e = [];
  return Se(u, {
    FragmentSpread(a) {
      e.push(a.name.value);
    }
  }), e;
}
function h6(u) {
  const e = gs(u) ? u : new Vi(u), a = e.body, i = new Qn(e);
  let r = "", n = !1;
  for (; i.advance().kind !== f.EOF; ) {
    const o = i.token, t = o.kind, s = !Fs(o.kind);
    n && (s || o.kind === f.SPREAD) && (r += " ");
    const l = a.slice(o.start, o.end);
    t === f.BLOCK_STRING ? r += ms(o.value, {
      minimize: !0
    }) : r += l, n = s;
  }
  return r;
}
function g6(u) {
  const e = Jl(u);
  if (e)
    throw e;
  return u;
}
function Jl(u) {
  if (typeof u == "string" || U(!1, "Expected name to be a string."), u.startsWith("__"))
    return new B(
      `Name "${u}" must not begin with "__", which is reserved by GraphQL introspection.`
    );
  try {
    Ou(u);
  } catch (e) {
    return e;
  }
}
var du;
(function(u) {
  u.TYPE_REMOVED = "TYPE_REMOVED", u.TYPE_CHANGED_KIND = "TYPE_CHANGED_KIND", u.TYPE_REMOVED_FROM_UNION = "TYPE_REMOVED_FROM_UNION", u.VALUE_REMOVED_FROM_ENUM = "VALUE_REMOVED_FROM_ENUM", u.REQUIRED_INPUT_FIELD_ADDED = "REQUIRED_INPUT_FIELD_ADDED", u.IMPLEMENTED_INTERFACE_REMOVED = "IMPLEMENTED_INTERFACE_REMOVED", u.FIELD_REMOVED = "FIELD_REMOVED", u.FIELD_CHANGED_KIND = "FIELD_CHANGED_KIND", u.REQUIRED_ARG_ADDED = "REQUIRED_ARG_ADDED", u.ARG_REMOVED = "ARG_REMOVED", u.ARG_CHANGED_KIND = "ARG_CHANGED_KIND", u.DIRECTIVE_REMOVED = "DIRECTIVE_REMOVED", u.DIRECTIVE_ARG_REMOVED = "DIRECTIVE_ARG_REMOVED", u.REQUIRED_DIRECTIVE_ARG_ADDED = "REQUIRED_DIRECTIVE_ARG_ADDED", u.DIRECTIVE_REPEATABLE_REMOVED = "DIRECTIVE_REPEATABLE_REMOVED", u.DIRECTIVE_LOCATION_REMOVED = "DIRECTIVE_LOCATION_REMOVED";
})(du || (du = {}));
var i0;
(function(u) {
  u.VALUE_ADDED_TO_ENUM = "VALUE_ADDED_TO_ENUM", u.TYPE_ADDED_TO_UNION = "TYPE_ADDED_TO_UNION", u.OPTIONAL_INPUT_FIELD_ADDED = "OPTIONAL_INPUT_FIELD_ADDED", u.OPTIONAL_ARG_ADDED = "OPTIONAL_ARG_ADDED", u.IMPLEMENTED_INTERFACE_ADDED = "IMPLEMENTED_INTERFACE_ADDED", u.ARG_DEFAULT_VALUE_CHANGE = "ARG_DEFAULT_VALUE_CHANGE";
})(i0 || (i0 = {}));
function C6(u, e) {
  return $l(u, e).filter(
    (a) => a.type in du
  );
}
function v6(u, e) {
  return $l(u, e).filter(
    (a) => a.type in i0
  );
}
function $l(u, e) {
  return [
    ...A6(u, e),
    ...b6(u, e)
  ];
}
function b6(u, e) {
  const a = [], i = g0(
    u.getDirectives(),
    e.getDirectives()
  );
  for (const r of i.removed)
    a.push({
      type: du.DIRECTIVE_REMOVED,
      description: `${r.name} was removed.`
    });
  for (const [r, n] of i.persisted) {
    const o = g0(r.args, n.args);
    for (const t of o.added)
      _0(t) && a.push({
        type: du.REQUIRED_DIRECTIVE_ARG_ADDED,
        description: `A required arg ${t.name} on directive ${r.name} was added.`
      });
    for (const t of o.removed)
      a.push({
        type: du.DIRECTIVE_ARG_REMOVED,
        description: `${t.name} was removed from ${r.name}.`
      });
    r.isRepeatable && !n.isRepeatable && a.push({
      type: du.DIRECTIVE_REPEATABLE_REMOVED,
      description: `Repeatable flag was removed from ${r.name}.`
    });
    for (const t of r.locations)
      n.locations.includes(t) || a.push({
        type: du.DIRECTIVE_LOCATION_REMOVED,
        description: `${t} was removed from ${r.name}.`
      });
  }
  return a;
}
function A6(u, e) {
  const a = [], i = g0(
    Object.values(u.getTypeMap()),
    Object.values(e.getTypeMap())
  );
  for (const r of i.removed)
    a.push({
      type: du.TYPE_REMOVED,
      description: Ji(r) ? `Standard scalar ${r.name} was removed because it is not referenced anymore.` : `${r.name} was removed.`
    });
  for (const [r, n] of i.persisted)
    hu(r) && hu(n) ? a.push(...f6(r, n)) : Au(r) && Au(n) ? a.push(...y6(r, n)) : xu(r) && xu(n) ? a.push(...B6(r, n)) : Q(r) && Q(n) ? a.push(
      ...h1(r, n),
      ...p1(r, n)
    ) : uu(r) && uu(n) ? a.push(
      ...h1(r, n),
      ...p1(r, n)
    ) : r.constructor !== n.constructor && a.push({
      type: du.TYPE_CHANGED_KIND,
      description: `${r.name} changed from ${g1(r)} to ${g1(n)}.`
    });
  return a;
}
function B6(u, e) {
  const a = [], i = g0(
    Object.values(u.getFields()),
    Object.values(e.getFields())
  );
  for (const r of i.added)
    Oi(r) ? a.push({
      type: du.REQUIRED_INPUT_FIELD_ADDED,
      description: `A required field ${r.name} on input type ${u.name} was added.`
    }) : a.push({
      type: i0.OPTIONAL_INPUT_FIELD_ADDED,
      description: `An optional field ${r.name} on input type ${u.name} was added.`
    });
  for (const r of i.removed)
    a.push({
      type: du.FIELD_REMOVED,
      description: `${u.name}.${r.name} was removed.`
    });
  for (const [r, n] of i.persisted)
    $e(
      r.type,
      n.type
    ) || a.push({
      type: du.FIELD_CHANGED_KIND,
      description: `${u.name}.${r.name} changed type from ${String(r.type)} to ${String(n.type)}.`
    });
  return a;
}
function y6(u, e) {
  const a = [], i = g0(u.getTypes(), e.getTypes());
  for (const r of i.added)
    a.push({
      type: i0.TYPE_ADDED_TO_UNION,
      description: `${r.name} was added to union type ${u.name}.`
    });
  for (const r of i.removed)
    a.push({
      type: du.TYPE_REMOVED_FROM_UNION,
      description: `${r.name} was removed from union type ${u.name}.`
    });
  return a;
}
function f6(u, e) {
  const a = [], i = g0(u.getValues(), e.getValues());
  for (const r of i.added)
    a.push({
      type: i0.VALUE_ADDED_TO_ENUM,
      description: `${r.name} was added to enum type ${u.name}.`
    });
  for (const r of i.removed)
    a.push({
      type: du.VALUE_REMOVED_FROM_ENUM,
      description: `${r.name} was removed from enum type ${u.name}.`
    });
  return a;
}
function p1(u, e) {
  const a = [], i = g0(u.getInterfaces(), e.getInterfaces());
  for (const r of i.added)
    a.push({
      type: i0.IMPLEMENTED_INTERFACE_ADDED,
      description: `${r.name} added to interfaces implemented by ${u.name}.`
    });
  for (const r of i.removed)
    a.push({
      type: du.IMPLEMENTED_INTERFACE_REMOVED,
      description: `${u.name} no longer implements interface ${r.name}.`
    });
  return a;
}
function h1(u, e) {
  const a = [], i = g0(
    Object.values(u.getFields()),
    Object.values(e.getFields())
  );
  for (const r of i.removed)
    a.push({
      type: du.FIELD_REMOVED,
      description: `${u.name}.${r.name} was removed.`
    });
  for (const [r, n] of i.persisted)
    a.push(...z6(u, r, n)), Oe(
      r.type,
      n.type
    ) || a.push({
      type: du.FIELD_CHANGED_KIND,
      description: `${u.name}.${r.name} changed type from ${String(r.type)} to ${String(n.type)}.`
    });
  return a;
}
function z6(u, e, a) {
  const i = [], r = g0(e.args, a.args);
  for (const n of r.removed)
    i.push({
      type: du.ARG_REMOVED,
      description: `${u.name}.${e.name} arg ${n.name} was removed.`
    });
  for (const [n, o] of r.persisted)
    if (!$e(
      n.type,
      o.type
    ))
      i.push({
        type: du.ARG_CHANGED_KIND,
        description: `${u.name}.${e.name} arg ${n.name} has changed type from ${String(n.type)} to ${String(o.type)}.`
      });
    else if (n.defaultValue !== void 0)
      if (o.defaultValue === void 0)
        i.push({
          type: i0.ARG_DEFAULT_VALUE_CHANGE,
          description: `${u.name}.${e.name} arg ${n.name} defaultValue was removed.`
        });
      else {
        const s = C1(n.defaultValue, n.type), l = C1(o.defaultValue, o.type);
        s !== l && i.push({
          type: i0.ARG_DEFAULT_VALUE_CHANGE,
          description: `${u.name}.${e.name} arg ${n.name} has changed defaultValue from ${s} to ${l}.`
        });
      }
  for (const n of r.added)
    _0(n) ? i.push({
      type: du.REQUIRED_ARG_ADDED,
      description: `A required arg ${n.name} on ${u.name}.${e.name} was added.`
    }) : i.push({
      type: i0.OPTIONAL_ARG_ADDED,
      description: `An optional arg ${n.name} on ${u.name}.${e.name} was added.`
    });
  return i;
}
function Oe(u, e) {
  return Du(u) ? (
    // if they're both lists, make sure the underlying types are compatible
    Du(e) && Oe(
      u.ofType,
      e.ofType
    ) || // moving from nullable to non-null of the same underlying type is safe
    I(e) && Oe(u, e.ofType)
  ) : I(u) ? I(e) && Oe(u.ofType, e.ofType) : (
    // if they're both named types, see if their names are equivalent
    ha(e) && u.name === e.name || // moving from nullable to non-null of the same underlying type is safe
    I(e) && Oe(u, e.ofType)
  );
}
function $e(u, e) {
  return Du(u) ? Du(e) && $e(u.ofType, e.ofType) : I(u) ? (
    // if they're both non-null, make sure the underlying types are
    // compatible
    I(e) && $e(
      u.ofType,
      e.ofType
    ) || // moving from non-null to nullable of the same underlying type is safe
    !I(e) && $e(u.ofType, e)
  ) : ha(e) && u.name === e.name;
}
function g1(u) {
  if (Ju(u))
    return "a Scalar type";
  if (Q(u))
    return "an Object type";
  if (uu(u))
    return "an Interface type";
  if (Au(u))
    return "a Union type";
  if (hu(u))
    return "an Enum type";
  if (xu(u))
    return "an Input type";
  ku(!1, "Unexpected type: " + z(u));
}
function C1(u, e) {
  const a = P0(u, e);
  return a != null || ku(!1), Eu(Zi(a));
}
function g0(u, e) {
  const a = [], i = [], r = [], n = h0(u, ({ name: t }) => t), o = h0(e, ({ name: t }) => t);
  for (const t of u) {
    const s = o[t.name];
    s === void 0 ? i.push(t) : r.push([t, s]);
  }
  for (const t of e)
    n[t.name] === void 0 && a.push(t);
  return {
    added: a,
    persisted: r,
    removed: i
  };
}
const S6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BREAK: De,
  get BreakingChangeType() {
    return du;
  },
  DEFAULT_DEPRECATION_REASON: to,
  get DangerousChangeType() {
    return i0;
  },
  get DirectiveLocation() {
    return K;
  },
  ExecutableDefinitionsRule: Ls,
  FieldsOnCorrectTypeRule: Ks,
  FragmentsOnCompositeTypesRule: Rs,
  GRAPHQL_MAX_INT: ii,
  GRAPHQL_MIN_INT: ri,
  GraphQLBoolean: Gu,
  GraphQLDeprecatedDirective: qi,
  GraphQLDirective: c0,
  GraphQLEnumType: L0,
  GraphQLError: B,
  GraphQLFloat: Ts,
  GraphQLID: ro,
  GraphQLIncludeDirective: no,
  GraphQLInputObjectType: ge,
  GraphQLInt: Ps,
  GraphQLInterfaceType: pe,
  GraphQLList: zu,
  GraphQLNonNull: W,
  GraphQLObjectType: Yu,
  GraphQLScalarType: x0,
  GraphQLSchema: Me,
  GraphQLSkipDirective: oo,
  GraphQLSpecifiedByDirective: so,
  GraphQLString: mu,
  GraphQLUnionType: he,
  get Kind() {
    return p;
  },
  KnownArgumentNamesRule: Hs,
  KnownDirectivesRule: yo,
  KnownFragmentNamesRule: Gs,
  KnownTypeNamesRule: fo,
  Lexer: Qn,
  Location: Ds,
  LoneAnonymousOperationRule: Vs,
  LoneSchemaDefinitionRule: Is,
  NoDeprecatedCustomRule: Ud,
  NoFragmentCyclesRule: Os,
  NoSchemaIntrospectionCustomRule: Zd,
  NoUndefinedVariablesRule: Js,
  NoUnusedFragmentsRule: $s,
  NoUnusedVariablesRule: qs,
  get OperationTypeNode() {
    return bu;
  },
  OverlappingFieldsCanBeMergedRule: Us,
  PossibleFragmentSpreadsRule: Qs,
  PossibleTypeExtensionsRule: Xs,
  ProvidedRequiredArgumentsRule: ul,
  ScalarLeafsRule: al,
  SchemaMetaFieldDef: Qe,
  SingleFieldSubscriptionsRule: tl,
  Source: Vi,
  Token: Zn,
  get TokenKind() {
    return f;
  },
  TypeInfo: Co,
  get TypeKind() {
    return nu;
  },
  TypeMetaFieldDef: Xe,
  TypeNameMetaFieldDef: ua,
  UniqueArgumentDefinitionNamesRule: sl,
  UniqueArgumentNamesRule: jo,
  UniqueDirectiveNamesRule: ll,
  UniqueDirectivesPerLocationRule: Po,
  UniqueEnumValueNamesRule: El,
  UniqueFieldDefinitionNamesRule: Dl,
  UniqueFragmentNamesRule: xl,
  UniqueInputFieldNamesRule: To,
  UniqueOperationNamesRule: cl,
  UniqueOperationTypesRule: dl,
  UniqueTypeNamesRule: ml,
  UniqueVariableNamesRule: Fl,
  ValidationContext: vl,
  ValuesOfCorrectTypeRule: kl,
  VariablesAreInputTypesRule: pl,
  VariablesInAllowedPositionRule: hl,
  __Directive: Do,
  __DirectiveLocation: xo,
  __EnumValue: mo,
  __Field: co,
  __InputValue: va,
  __Schema: Wi,
  __Type: Wu,
  __TypeKind: Fo,
  assertAbstractType: Rc,
  assertCompositeType: Kc,
  assertDirective: Oc,
  assertEnumType: Mc,
  assertEnumValueName: bs,
  assertInputObjectType: jc,
  assertInputType: wc,
  assertInterfaceType: Bs,
  assertLeafType: Lc,
  assertListType: Pc,
  assertName: Ou,
  assertNamedType: _c,
  assertNonNullType: Tc,
  assertNullableType: ys,
  assertObjectType: As,
  assertOutputType: Nc,
  assertScalarType: zc,
  assertSchema: ko,
  assertType: fc,
  assertUnionType: Sc,
  assertValidName: g6,
  assertValidSchema: ho,
  assertWrappingType: Hc,
  astFromValue: P0,
  buildASTSchema: Kl,
  buildClientSchema: u6,
  buildSchema: a6,
  coerceInputValue: rl,
  concatAST: k6,
  createSourceEventStream: wl,
  defaultFieldResolver: Sn,
  defaultTypeResolver: Ml,
  doTypesOverlap: An,
  execute: Qi,
  executeSync: Bl,
  extendSchema: e6,
  findBreakingChanges: C6,
  findDangerousChanges: v6,
  formatError: Ux,
  getArgumentValues: Yi,
  getDirectiveValues: ea,
  getEnterLeaveForKind: ke,
  getIntrospectionQuery: Nl,
  getLocation: ci,
  getNamedType: ju,
  getNullableType: eo,
  getOperationAST: Yd,
  getOperationRootType: Qd,
  getVariableValues: nl,
  getVisitFn: Ac,
  graphql: Id,
  graphqlSync: Od,
  introspectionFromSchema: Xd,
  introspectionTypes: ba,
  isAbstractType: t0,
  isCompositeType: D0,
  isConstValueNode: Bn,
  isDefinitionNode: ad,
  isDirective: $i,
  isEnumType: hu,
  isEqualType: mi,
  isExecutableDefinitionNode: bo,
  isInputObjectType: xu,
  isInputType: wu,
  isInterfaceType: uu,
  isIntrospectionType: ue,
  isLeafType: E0,
  isListType: Du,
  isNamedType: ha,
  isNonNullType: I,
  isNullableType: uo,
  isObjectType: Q,
  isOutputType: T0,
  isRequiredArgument: _0,
  isRequiredInputField: Oi,
  isScalarType: Ju,
  isSchema: ws,
  isSelectionNode: id,
  isSpecifiedDirective: lo,
  isSpecifiedScalarType: Ji,
  isType: ka,
  isTypeDefinitionNode: je,
  isTypeExtensionNode: Ui,
  isTypeNode: rd,
  isTypeSubTypeOf: $0,
  isTypeSystemDefinitionNode: Ao,
  isTypeSystemExtensionNode: Bo,
  isUnionType: Au,
  isValidNameError: Jl,
  isValueNode: Ns,
  isWrappingType: pa,
  lexicographicSortSchema: i6,
  locatedError: ve,
  parse: ma,
  parseConstValue: mc,
  parseType: Fc,
  parseValue: Cs,
  print: Eu,
  printError: Wx,
  printIntrospectionSchema: n6,
  printLocation: Es,
  printSchema: r6,
  printSourceLocation: Un,
  printType: _l,
  resolveObjMapThunk: io,
  resolveReadonlyArrayThunk: ao,
  responsePathAsArray: _u,
  separateOperations: p6,
  specifiedDirectives: G0,
  specifiedRules: gl,
  specifiedScalarTypes: ga,
  stripIgnoredCharacters: h6,
  subscribe: $d,
  syntaxError: vu,
  typeFromAST: Nu,
  validate: bl,
  validateSchema: po,
  valueFromAST: o0,
  valueFromASTUntyped: di,
  version: Ox,
  versionInfo: Jx,
  visit: Se,
  visitInParallel: Xn,
  visitWithTypeInfo: vo
}, Symbol.toStringTag, { value: "Module" }));
function Lo() {
  if (typeof navigator < "u" && navigator.product === "ReactNative")
    return !0;
  if (typeof process < "u") {
    const u = process.type;
    return u === "renderer" || u === "worker" ? !1 : !!(process.versions && process.versions.node);
  }
  return !1;
}
const M6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isNodeProcess: Lo
}, Symbol.toStringTag, { value: "Module" }));
function j6(u) {
  for (var e = [], a = 0; a < u.length; ) {
    var i = u[a];
    if (i === "*" || i === "+" || i === "?") {
      e.push({ type: "MODIFIER", index: a, value: u[a++] });
      continue;
    }
    if (i === "\\") {
      e.push({ type: "ESCAPED_CHAR", index: a++, value: u[a++] });
      continue;
    }
    if (i === "{") {
      e.push({ type: "OPEN", index: a, value: u[a++] });
      continue;
    }
    if (i === "}") {
      e.push({ type: "CLOSE", index: a, value: u[a++] });
      continue;
    }
    if (i === ":") {
      for (var r = "", n = a + 1; n < u.length; ) {
        var o = u.charCodeAt(n);
        if (
          // `0-9`
          o >= 48 && o <= 57 || // `A-Z`
          o >= 65 && o <= 90 || // `a-z`
          o >= 97 && o <= 122 || // `_`
          o === 95
        ) {
          r += u[n++];
          continue;
        }
        break;
      }
      if (!r)
        throw new TypeError("Missing parameter name at ".concat(a));
      e.push({ type: "NAME", index: a, value: r }), a = n;
      continue;
    }
    if (i === "(") {
      var t = 1, s = "", n = a + 1;
      if (u[n] === "?")
        throw new TypeError('Pattern cannot start with "?" at '.concat(n));
      for (; n < u.length; ) {
        if (u[n] === "\\") {
          s += u[n++] + u[n++];
          continue;
        }
        if (u[n] === ")") {
          if (t--, t === 0) {
            n++;
            break;
          }
        } else if (u[n] === "(" && (t++, u[n + 1] !== "?"))
          throw new TypeError("Capturing groups are not allowed at ".concat(n));
        s += u[n++];
      }
      if (t)
        throw new TypeError("Unbalanced pattern at ".concat(a));
      if (!s)
        throw new TypeError("Missing pattern at ".concat(a));
      e.push({ type: "PATTERN", index: a, value: s }), a = n;
      continue;
    }
    e.push({ type: "CHAR", index: a, value: u[a++] });
  }
  return e.push({ type: "END", index: a, value: "" }), e;
}
function Ko(u, e) {
  e === void 0 && (e = {});
  for (var a = j6(u), i = e.prefixes, r = i === void 0 ? "./" : i, n = "[^".concat(se(e.delimiter || "/#?"), "]+?"), o = [], t = 0, s = 0, l = "", E = function(R) {
    if (s < a.length && a[s].type === R)
      return a[s++].value;
  }, D = function(R) {
    var O = E(R);
    if (O !== void 0)
      return O;
    var V = a[s], b = V.type, P = V.index;
    throw new TypeError("Unexpected ".concat(b, " at ").concat(P, ", expected ").concat(R));
  }, x = function() {
    for (var R = "", O; O = E("CHAR") || E("ESCAPED_CHAR"); )
      R += O;
    return R;
  }; s < a.length; ) {
    var c = E("CHAR"), d = E("NAME"), F = E("PATTERN");
    if (d || F) {
      var k = c || "";
      r.indexOf(k) === -1 && (l += k, k = ""), l && (o.push(l), l = ""), o.push({
        name: d || t++,
        prefix: k,
        suffix: "",
        pattern: F || n,
        modifier: E("MODIFIER") || ""
      });
      continue;
    }
    var g = c || E("ESCAPED_CHAR");
    if (g) {
      l += g;
      continue;
    }
    l && (o.push(l), l = "");
    var M = E("OPEN");
    if (M) {
      var k = x(), A = E("NAME") || "", v = E("PATTERN") || "", T = x();
      D("CLOSE"), o.push({
        name: A || (v ? t++ : ""),
        pattern: A && !v ? n : v,
        prefix: k,
        suffix: T,
        modifier: E("MODIFIER") || ""
      });
      continue;
    }
    D("END");
  }
  return o;
}
function P6(u, e) {
  return ql(Ko(u, e), e);
}
function ql(u, e) {
  e === void 0 && (e = {});
  var a = Ro(e), i = e.encode, r = i === void 0 ? function(s) {
    return s;
  } : i, n = e.validate, o = n === void 0 ? !0 : n, t = u.map(function(s) {
    if (typeof s == "object")
      return new RegExp("^(?:".concat(s.pattern, ")$"), a);
  });
  return function(s) {
    for (var l = "", E = 0; E < u.length; E++) {
      var D = u[E];
      if (typeof D == "string") {
        l += D;
        continue;
      }
      var x = s ? s[D.name] : void 0, c = D.modifier === "?" || D.modifier === "*", d = D.modifier === "*" || D.modifier === "+";
      if (Array.isArray(x)) {
        if (!d)
          throw new TypeError('Expected "'.concat(D.name, '" to not repeat, but got an array'));
        if (x.length === 0) {
          if (c)
            continue;
          throw new TypeError('Expected "'.concat(D.name, '" to not be empty'));
        }
        for (var F = 0; F < x.length; F++) {
          var k = r(x[F], D);
          if (o && !t[E].test(k))
            throw new TypeError('Expected all "'.concat(D.name, '" to match "').concat(D.pattern, '", but got "').concat(k, '"'));
          l += D.prefix + k + D.suffix;
        }
        continue;
      }
      if (typeof x == "string" || typeof x == "number") {
        var k = r(String(x), D);
        if (o && !t[E].test(k))
          throw new TypeError('Expected "'.concat(D.name, '" to match "').concat(D.pattern, '", but got "').concat(k, '"'));
        l += D.prefix + k + D.suffix;
        continue;
      }
      if (!c) {
        var g = d ? "an array" : "a string";
        throw new TypeError('Expected "'.concat(D.name, '" to be ').concat(g));
      }
    }
    return l;
  };
}
function Wl(u, e) {
  var a = [], i = Ho(u, a, e);
  return Ul(i, a, e);
}
function Ul(u, e, a) {
  a === void 0 && (a = {});
  var i = a.decode, r = i === void 0 ? function(n) {
    return n;
  } : i;
  return function(n) {
    var o = u.exec(n);
    if (!o)
      return !1;
    for (var t = o[0], s = o.index, l = /* @__PURE__ */ Object.create(null), E = function(x) {
      if (o[x] === void 0)
        return "continue";
      var c = e[x - 1];
      c.modifier === "*" || c.modifier === "+" ? l[c.name] = o[x].split(c.prefix + c.suffix).map(function(d) {
        return r(d, c);
      }) : l[c.name] = r(o[x], c);
    }, D = 1; D < o.length; D++)
      E(D);
    return { path: t, index: s, params: l };
  };
}
function se(u) {
  return u.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function Ro(u) {
  return u && u.sensitive ? "" : "i";
}
function T6(u, e) {
  if (!e)
    return u;
  for (var a = /\((?:\?<(.*?)>)?(?!\?)/g, i = 0, r = a.exec(u.source); r; )
    e.push({
      // Use parenthesized substring match if available, index otherwise
      name: r[1] || i++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    }), r = a.exec(u.source);
  return u;
}
function w6(u, e, a) {
  var i = u.map(function(r) {
    return Ho(r, e, a).source;
  });
  return new RegExp("(?:".concat(i.join("|"), ")"), Ro(a));
}
function N6(u, e, a) {
  return Zl(Ko(u, a), e, a);
}
function Zl(u, e, a) {
  a === void 0 && (a = {});
  for (var i = a.strict, r = i === void 0 ? !1 : i, n = a.start, o = n === void 0 ? !0 : n, t = a.end, s = t === void 0 ? !0 : t, l = a.encode, E = l === void 0 ? function(P) {
    return P;
  } : l, D = a.delimiter, x = D === void 0 ? "/#?" : D, c = a.endsWith, d = c === void 0 ? "" : c, F = "[".concat(se(d), "]|$"), k = "[".concat(se(x), "]"), g = o ? "^" : "", M = 0, A = u; M < A.length; M++) {
    var v = A[M];
    if (typeof v == "string")
      g += se(E(v));
    else {
      var T = se(E(v.prefix)), R = se(E(v.suffix));
      if (v.pattern)
        if (e && e.push(v), T || R)
          if (v.modifier === "+" || v.modifier === "*") {
            var O = v.modifier === "*" ? "?" : "";
            g += "(?:".concat(T, "((?:").concat(v.pattern, ")(?:").concat(R).concat(T, "(?:").concat(v.pattern, "))*)").concat(R, ")").concat(O);
          } else
            g += "(?:".concat(T, "(").concat(v.pattern, ")").concat(R, ")").concat(v.modifier);
        else
          v.modifier === "+" || v.modifier === "*" ? g += "((?:".concat(v.pattern, ")").concat(v.modifier, ")") : g += "(".concat(v.pattern, ")").concat(v.modifier);
      else
        g += "(?:".concat(T).concat(R, ")").concat(v.modifier);
    }
  }
  if (s)
    r || (g += "".concat(k, "?")), g += a.endsWith ? "(?=".concat(F, ")") : "$";
  else {
    var V = u[u.length - 1], b = typeof V == "string" ? k.indexOf(V[V.length - 1]) > -1 : V === void 0;
    r || (g += "(?:".concat(k, "(?=").concat(F, "))?")), b || (g += "(?=".concat(k, "|").concat(F, ")"));
  }
  return new RegExp(g, Ro(a));
}
function Ho(u, e, a) {
  return u instanceof RegExp ? T6(u, e) : Array.isArray(u) ? w6(u, e, a) : N6(u, e, a);
}
const L6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compile: P6,
  match: Wl,
  parse: Ko,
  pathToRegexp: Ho,
  regexpToFunction: Ul,
  tokensToFunction: ql,
  tokensToRegexp: Zl
}, Symbol.toStringTag, { value: "Module" }));
var _o = {}, Xi = {}, Aa = {}, ur = {};
Object.defineProperty(ur, "__esModule", { value: !0 });
ur.concatChunkToBuffer = void 0;
function K6(u, e) {
  return Buffer.isBuffer(u) || (u = Buffer.from(u)), e.concat(u);
}
ur.concatChunkToBuffer = K6;
var er = {};
Object.defineProperty(er, "__esModule", { value: !0 });
er.normalizeClientRequestEndArgs = void 0;
var v1 = Zu("http normalizeClientRequestEndArgs");
function R6() {
  for (var u = [], e = 0; e < arguments.length; e++)
    u[e] = arguments[e];
  v1("arguments", u);
  var a = new Array(3).fill(null).map(function(i, r) {
    return u[r] || i;
  });
  return a.sort(function(i, r) {
    return typeof i == "function" ? 1 : typeof r == "function" ? -1 : typeof i == "string" && typeof r == "string" ? a.indexOf(i) - a.indexOf(r) : 0;
  }), v1("normalized args", a), a;
}
er.normalizeClientRequestEndArgs = R6;
var Pe = {};
Object.defineProperty(Pe, "__esModule", { value: !0 });
Pe.toIsoResponse = void 0;
var H6 = la;
function _6(u) {
  var e;
  return {
    status: (e = u.status) !== null && e !== void 0 ? e : 200,
    statusText: u.statusText || "OK",
    headers: H6.objectToHeaders(u.headers || {}),
    body: u.body
  };
}
Pe.toIsoResponse = _6;
var ar = {}, G6 = y && y.__createBinding || (Object.create ? function(u, e, a, i) {
  i === void 0 && (i = a), Object.defineProperty(u, i, { enumerable: !0, get: function() {
    return e[a];
  } });
} : function(u, e, a, i) {
  i === void 0 && (i = a), u[i] = e[a];
}), V6 = y && y.__setModuleDefault || (Object.create ? function(u, e) {
  Object.defineProperty(u, "default", { enumerable: !0, value: e });
} : function(u, e) {
  u.default = e;
}), I6 = y && y.__importStar || function(u) {
  if (u && u.__esModule)
    return u;
  var e = {};
  if (u != null)
    for (var a in u)
      a !== "default" && Object.prototype.hasOwnProperty.call(u, a) && G6(e, u, a);
  return V6(e, u), e;
};
Object.defineProperty(ar, "__esModule", { value: !0 });
ar.getIncomingMessageBody = void 0;
var O6 = Zu, J6 = f4, $6 = I6(jD), Re = O6.debug("http getIncomingMessageBody");
function q6(u) {
  return new Promise(function(e, a) {
    Re("cloning the original response...");
    var i = u.pipe(new J6.PassThrough()), r = u.headers["content-encoding"] === "gzip" ? i.pipe($6.createGunzip()) : i, n = u.readableEncoding || "utf8";
    r.setEncoding(n), Re("using encoding:", n);
    var o = "";
    r.on("data", function(t) {
      Re("response body read:", t), o += t;
    }), r.once("end", function() {
      Re("response body end"), e(o);
    }), r.once("error", function(t) {
      Re("error while reading response body:", t), a(t);
    });
  });
}
ar.getIncomingMessageBody = q6;
var ir = {};
Object.defineProperty(ir, "__esModule", { value: !0 });
ir.bodyBufferToString = void 0;
function W6(u) {
  var e = u.toString("utf8"), a = Buffer.from(e), i = a.equals(u);
  return i ? e : u.toString("hex");
}
ir.bodyBufferToString = W6;
var rr = {};
Object.defineProperty(rr, "__esModule", { value: !0 });
rr.normalizeClientRequestWriteArgs = void 0;
var U6 = Zu, b1 = U6.debug("http normalizeWriteArgs");
function Z6(u) {
  b1("normalizing ClientRequest.write arguments...", u);
  var e = u[0], a = typeof u[1] == "string" ? u[1] : void 0, i = typeof u[1] == "function" ? u[1] : u[2], r = [
    e,
    a,
    i
  ];
  return b1("successfully normalized ClientRequest.write arguments:", r), r;
}
rr.normalizeClientRequestWriteArgs = Z6;
var Yl = {};
(function(u) {
  var e = y && y.__read || function(l, E) {
    var D = typeof Symbol == "function" && l[Symbol.iterator];
    if (!D)
      return l;
    var x = D.call(l), c, d = [], F;
    try {
      for (; (E === void 0 || E-- > 0) && !(c = x.next()).done; )
        d.push(c.value);
    } catch (k) {
      F = { error: k };
    } finally {
      try {
        c && !c.done && (D = x.return) && D.call(x);
      } finally {
        if (F)
          throw F.error;
      }
    }
    return d;
  }, a = y && y.__spreadArray || function(l, E) {
    for (var D = 0, x = E.length, c = l.length; D < x; D++, c++)
      l[c] = E[D];
    return l;
  }, i = y && y.__values || function(l) {
    var E = typeof Symbol == "function" && Symbol.iterator, D = E && l[E], x = 0;
    if (D)
      return D.call(l);
    if (l && typeof l.length == "number")
      return {
        next: function() {
          return l && x >= l.length && (l = void 0), { value: l && l[x++], done: !l };
        }
      };
    throw new TypeError(E ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  Object.defineProperty(u, "__esModule", { value: !0 }), u.cloneIncomingMessage = u.IS_CLONE = void 0;
  var r = ta, n = f4;
  u.IS_CLONE = Symbol("isClone");
  function o(l) {
    var E = l.pipe(new n.PassThrough());
    s(l, E);
    var D = Object.create(r.IncomingMessage.prototype);
    return t(E).forEach(function(x) {
      s(x, D);
    }), Object.setPrototypeOf(E, D), Object.defineProperty(E, u.IS_CLONE, {
      enumerable: !0,
      value: !0
    }), E;
  }
  u.cloneIncomingMessage = o;
  function t(l) {
    for (var E = [], D = l; D = Object.getPrototypeOf(D); )
      E.push(D);
    return E;
  }
  function s(l, E) {
    var D, x, c = a(a([], e(Object.getOwnPropertyNames(l))), e(Object.getOwnPropertySymbols(l)));
    try {
      for (var d = i(c), F = d.next(); !F.done; F = d.next()) {
        var k = F.value;
        if (!E.hasOwnProperty(k)) {
          var g = Object.getOwnPropertyDescriptor(l, k);
          g && Object.defineProperty(E, k, g);
        }
      }
    } catch (M) {
      D = { error: M };
    } finally {
      try {
        F && !F.done && (x = d.return) && x.call(d);
      } finally {
        if (D)
          throw D.error;
      }
    }
  }
})(Yl);
var Y6 = y && y.__extends || function() {
  var u = function(e, a) {
    return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
      i.__proto__ = r;
    } || function(i, r) {
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
    }, u(e, a);
  };
  return function(e, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    u(e, a);
    function i() {
      this.constructor = e;
    }
    e.prototype = a === null ? Object.create(a) : (i.prototype = a.prototype, new i());
  };
}(), A1 = y && y.__awaiter || function(u, e, a, i) {
  function r(n) {
    return n instanceof a ? n : new a(function(o) {
      o(n);
    });
  }
  return new (a || (a = Promise))(function(n, o) {
    function t(E) {
      try {
        l(i.next(E));
      } catch (D) {
        o(D);
      }
    }
    function s(E) {
      try {
        l(i.throw(E));
      } catch (D) {
        o(D);
      }
    }
    function l(E) {
      E.done ? n(E.value) : r(E.value).then(t, s);
    }
    l((i = i.apply(u, e || [])).next());
  });
}, B1 = y && y.__generator || function(u, e) {
  var a = { label: 0, sent: function() {
    if (n[0] & 1)
      throw n[1];
    return n[1];
  }, trys: [], ops: [] }, i, r, n, o;
  return o = { next: t(0), throw: t(1), return: t(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function t(l) {
    return function(E) {
      return s([l, E]);
    };
  }
  function s(l) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; a; )
      try {
        if (i = 1, r && (n = l[0] & 2 ? r.return : l[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, l[1])).done)
          return n;
        switch (r = 0, n && (l = [l[0] & 2, n.value]), l[0]) {
          case 0:
          case 1:
            n = l;
            break;
          case 4:
            return a.label++, { value: l[1], done: !1 };
          case 5:
            a.label++, r = l[1], l = [0];
            continue;
          case 7:
            l = a.ops.pop(), a.trys.pop();
            continue;
          default:
            if (n = a.trys, !(n = n.length > 0 && n[n.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              a = 0;
              continue;
            }
            if (l[0] === 3 && (!n || l[1] > n[0] && l[1] < n[3])) {
              a.label = l[1];
              break;
            }
            if (l[0] === 6 && a.label < n[1]) {
              a.label = n[1], n = l;
              break;
            }
            if (n && a.label < n[2]) {
              a.label = n[2], a.ops.push(l);
              break;
            }
            n[2] && a.ops.pop(), a.trys.pop();
            continue;
        }
        l = e.call(u, a);
      } catch (E) {
        l = [6, E], r = 0;
      } finally {
        i = n = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}, Pu = y && y.__read || function(u, e) {
  var a = typeof Symbol == "function" && u[Symbol.iterator];
  if (!a)
    return u;
  var i = a.call(u), r, n = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; )
      n.push(r.value);
  } catch (t) {
    o = { error: t };
  } finally {
    try {
      r && !r.done && (a = i.return) && a.call(i);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return n;
}, ie = y && y.__spreadArray || function(u, e) {
  for (var a = 0, i = e.length, r = u.length; a < i; a++, r++)
    u[r] = e[a];
  return u;
}, rn = y && y.__values || function(u) {
  var e = typeof Symbol == "function" && Symbol.iterator, a = e && u[e], i = 0;
  if (a)
    return a.call(u);
  if (u && typeof u.length == "number")
    return {
      next: function() {
        return u && i >= u.length && (u = void 0), { value: u && u[i++], done: !u };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(Aa, "__esModule", { value: !0 });
Aa.NodeClientRequest = void 0;
var y1 = ta, Q6 = b0, f1 = la, z1 = ur, X6 = er, um = Pe, em = ar, am = ir, im = rr, S1 = Yl, rm = K0, nm = X0, om = Uu, tm = (
  /** @class */
  function(u) {
    Y6(e, u);
    function e(a, i) {
      var r = Pu(a, 3), n = r[0], o = r[1], t = r[2], s = u.call(this, o, t) || this;
      return s.chunks = [], s.responseSource = "mock", s.requestBody = [], s.log = i.log.extend("request " + o.method + " " + n.href), s.log("constructing ClientRequest using options:", {
        url: n,
        requestOptions: o,
        callback: t
      }), s.url = n, s.options = o, s.emitter = i.emitter, s.response = new y1.IncomingMessage(s.socket), s;
    }
    return e.prototype.write = function() {
      for (var a = [], i = 0; i < arguments.length; i++)
        a[i] = arguments[i];
      var r = Pu(im.normalizeClientRequestWriteArgs(a), 3), n = r[0], o = r[1], t = r[2];
      return this.log("write:", { chunk: n, encoding: o, callback: t }), this.chunks.push({ chunk: n, encoding: o }), this.requestBody = z1.concatChunkToBuffer(n, this.requestBody), this.log("chunk successfully stored!", this.requestBody), !n || n.length === 0 ? this.log("written chunk is empty, skipping callback...") : t == null || t(), !0;
    }, e.prototype.end = function() {
      for (var a = this, i = [], r = 0; r < arguments.length; r++)
        i[r] = arguments[r];
      this.log("end", i);
      var n = Pu(X6.normalizeClientRequestEndArgs.apply(void 0, ie([], Pu(i))), 3), o = n[0], t = n[1], s = n[2];
      this.log("normalized arguments:", { chunk: o, encoding: t, callback: s });
      var l = this.getRequestBody(o), E = this.toIsomorphicRequest(l), D = new nm.InteractiveIsomorphicRequest(E);
      return this.log('emitting the "request" event for %d listener(s)...', this.emitter.listenerCount("request")), this.emitter.emit("request", D), Q6.until(function() {
        return A1(a, void 0, void 0, function() {
          var x, c;
          return B1(this, function(d) {
            switch (d.label) {
              case 0:
                return [4, this.emitter.untilIdle("request", function(F) {
                  var k = Pu(F.args, 1), g = k[0];
                  return g.id === D.id;
                })];
              case 1:
                return d.sent(), [4, D.respondWith.invoked()];
              case 2:
                return x = Pu.apply(void 0, [d.sent(), 1]), c = x[0], this.log("event.respondWith called with:", c), [2, c];
            }
          });
        });
      }).then(function(x) {
        var c, d, F = Pu(x, 2), k = F[0], g = F[1];
        if (a.log("the listeners promise awaited!"), k)
          return a.log("encountered resolver exception, aborting request...", k), a.emit("error", k), a.terminate(), a;
        if (g) {
          a.log("received mocked response:", g), a.responseSource = "mock";
          var M = um.toIsoResponse(g);
          return a.respondWith(g), a.log(M.status, M.statusText, M.body, "(MOCKED)"), s == null || s(), a.log('emitting the custom "response" event...'), a.emitter.emit("response", E, M), a;
        }
        if (a.log("no mocked response received!"), a.responseSource = "bypass", a.capturedError)
          return a.emit("error", a.capturedError), a;
        a.log("writing request chunks...", a.chunks);
        try {
          for (var A = rn(a.chunks), v = A.next(); !v.done; v = A.next()) {
            var T = v.value, R = T.chunk, O = T.encoding;
            O ? u.prototype.write.call(a, R, O) : u.prototype.write.call(a, R);
          }
        } catch (V) {
          c = { error: V };
        } finally {
          try {
            v && !v.done && (d = A.return) && d.call(A);
          } finally {
            if (c)
              throw c.error;
          }
        }
        return a.once("error", function(V) {
          a.log("original request error:", V);
        }), a.once("abort", function() {
          a.log("original request aborted!");
        }), a.once("response-internal", function(V) {
          return A1(a, void 0, void 0, function() {
            var b;
            return B1(this, function(P) {
              switch (P.label) {
                case 0:
                  return [4, em.getIncomingMessageBody(V)];
                case 1:
                  return b = P.sent(), this.log(V.statusCode, V.statusMessage, b), this.log("original response headers:", V.headers), this.log('emitting the custom "response" event...'), this.emitter.emit("response", E, {
                    status: V.statusCode || 200,
                    statusText: V.statusMessage || "OK",
                    headers: f1.objectToHeaders(V.headers),
                    body: b
                  }), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }), a.log("performing original request..."), u.prototype.end.apply(a, ie([], Pu([
          o,
          t,
          function() {
            a.log("original request end!"), s == null || s();
          }
        ].filter(Boolean))));
      }), this;
    }, e.prototype.emit = function(a) {
      for (var i = [], r = 1; r < arguments.length; r++)
        i[r - 1] = arguments[r];
      if (this.log("event:%s", a), a === "response") {
        this.log('found "response" event, cloning the response...');
        try {
          var n = i[0], o = S1.cloneIncomingMessage(n), t = S1.cloneIncomingMessage(n);
          return this.emit("response-internal", t), this.log('response successfully cloned, emitting "response" event...'), u.prototype.emit.apply(this, ie([a, o], Pu(i.slice(1))));
        } catch (E) {
          return this.log("error when cloning response:", E), u.prototype.emit.apply(this, ie([a], Pu(i)));
        }
      }
      if (a === "error") {
        var s = i[0], l = s.code || "";
        if (this.log(`error:
`, s), this.responseSource === "mock" && e.suppressErrorCodes.includes(l))
          return this.capturedError || (this.capturedError = s, this.log("captured the first error:", this.capturedError)), !1;
      }
      return u.prototype.emit.apply(this, ie([a], Pu(i)));
    }, e.prototype.respondWith = function(a) {
      var i, r, n;
      this.log("responding with a mocked response...", a);
      var o = a.status, t = a.statusText, s = a.headers, l = a.body;
      if (this.response.statusCode = o, this.response.statusMessage = t, s) {
        this.response.headers = {};
        try {
          for (var E = rn(Object.entries(s)), D = E.next(); !D.done; D = E.next()) {
            var x = Pu(D.value, 2), c = x[0], d = x[1];
            (n = this.response.rawHeaders).push.apply(n, ie([c], Pu(Array.isArray(d) ? d : [d])));
            var F = c.toLowerCase(), k = this.response.headers[F];
            this.response.headers[F] = k ? Array.prototype.concat([], k, d) : d;
          }
        } catch (g) {
          i = { error: g };
        } finally {
          try {
            D && !D.done && (r = E.return) && r.call(E);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
      this.log("mocked response headers ready:", s), l && this.response.push(Buffer.from(l)), this.response.push(null), this.response.complete = !0, this.res = this.response, this.finished = !0, Object.defineProperty(this, "writableEnded", {
        value: !0
      }), this.emit("finish"), this.emit("response", this.response), this.terminate();
    }, e.prototype.terminate = function() {
      var a;
      (a = this.agent) === null || a === void 0 || a.destroy();
    }, e.prototype.getRequestBody = function(a) {
      var i = am.bodyBufferToString(Buffer.concat(this.requestBody));
      this.log("written request body:", i), a && (this.requestBody = z1.concatChunkToBuffer(a, this.requestBody));
      var r = Buffer.concat(this.requestBody);
      return this.log("resolved request body:", r), om.getArrayBuffer(r);
    }, e.prototype.toIsomorphicRequest = function(a) {
      var i, r;
      this.log("creating isomorphic request object...");
      var n = this.getHeaders();
      this.log("request outgoing headers:", n);
      var o = new f1.Headers();
      try {
        for (var t = rn(Object.entries(n)), s = t.next(); !s.done; s = t.next()) {
          var l = Pu(s.value, 2), E = l[0], D = l[1];
          D && o.set(E.toLowerCase(), D.toString());
        }
      } catch (c) {
        i = { error: c };
      } finally {
        try {
          s && !s.done && (r = t.return) && r.call(t);
        } finally {
          if (i)
            throw i.error;
        }
      }
      var x = new rm.IsomorphicRequest(this.url, {
        body: a,
        method: this.options.method || "GET",
        credentials: "same-origin",
        headers: o
      });
      return this.log("successfully created isomorphic request!", x), x;
    }, e.suppressErrorCodes = [
      "ENOTFOUND",
      "ECONNREFUSED",
      "ECONNRESET",
      "EAI_AGAIN"
    ], e;
  }(y1.ClientRequest)
);
Aa.NodeClientRequest = tm;
var Ba = {}, nr = {};
Object.defineProperty(nr, "__esModule", { value: !0 });
nr.getRequestOptionsByUrl = void 0;
function sm(u) {
  var e = {
    method: "GET",
    protocol: u.protocol,
    hostname: typeof u.hostname == "string" && u.hostname.startsWith("[") ? u.hostname.slice(1, -1) : u.hostname,
    host: u.host,
    path: "" + u.pathname + (u.search || "")
  };
  return u.port && (e.port = Number(u.port)), (u.username || u.password) && (e.auth = u.username + ":" + u.password), e;
}
nr.getRequestOptionsByUrl = sm;
var Ql = {};
(function(u) {
  var e = y && y.__read || function(d, F) {
    var k = typeof Symbol == "function" && d[Symbol.iterator];
    if (!k)
      return d;
    var g = k.call(d), M, A = [], v;
    try {
      for (; (F === void 0 || F-- > 0) && !(M = g.next()).done; )
        A.push(M.value);
    } catch (T) {
      v = { error: T };
    } finally {
      try {
        M && !M.done && (k = g.return) && k.call(g);
      } finally {
        if (v)
          throw v.error;
      }
    }
    return A;
  };
  Object.defineProperty(u, "__esModule", { value: !0 }), u.getUrlByRequestOptions = u.DEFAULT_PATH = void 0;
  var a = ta, i = Zu("utils getUrlByRequestOptions");
  u.DEFAULT_PATH = "/";
  var r = "http:", n = "localhost", o = 80, t = 443;
  function s(d) {
    return d.agent instanceof a.Agent ? d.agent : void 0;
  }
  function l(d) {
    var F, k;
    if (d.protocol)
      return d.protocol;
    var g = s(d), M = (F = g) === null || F === void 0 ? void 0 : F.protocol;
    if (M)
      return M;
    var A = E(d), v = d.cert || A === t;
    return v ? "https:" : ((k = d.uri) === null || k === void 0 ? void 0 : k.protocol) || r;
  }
  function E(d) {
    var F, k, g = s(d), M = ((F = g) === null || F === void 0 ? void 0 : F.options.port) || ((k = g) === null || k === void 0 ? void 0 : k.defaultPort), A = d.port;
    if (A || M) {
      var v = A || M || o;
      return Number(v);
    }
  }
  function D(d) {
    return d.hostname || d.host || n;
  }
  function x(d) {
    if (d.auth) {
      var F = e(d.auth.split(":"), 2), k = F[0], g = F[1];
      return { username: k, password: g };
    }
  }
  function c(d) {
    i("request options", d);
    var F = l(d), k = D(d), g = E(d), M = d.path || u.DEFAULT_PATH, A = x(d);
    i("protocol", F), i("host", k), i("port", g), i("path", M);
    var v = F + "//" + k;
    i("base URL:", v);
    var T = d.uri ? new URL(d.uri.href) : new URL(M, v);
    return g && (i("detected explicit port", g), T.port = g.toString()), A && (i("resolved auth", A), T.username = A.username, T.password = A.password), i("created URL:", T), T;
  }
  u.getUrlByRequestOptions = c;
})(Ql);
var or = {}, lm = y && y.__read || function(u, e) {
  var a = typeof Symbol == "function" && u[Symbol.iterator];
  if (!a)
    return u;
  var i = a.call(u), r, n = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; )
      n.push(r.value);
  } catch (t) {
    o = { error: t };
  } finally {
    try {
      r && !r.done && (a = i.return) && a.call(i);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return n;
};
Object.defineProperty(or, "__esModule", { value: !0 });
or.cloneObject = void 0;
var qe = Zu("cloneObject");
function M1(u) {
  var e;
  return qe("is plain object?", u), u == null || !(!((e = u.constructor) === null || e === void 0) && e.name) ? (qe("given object is undefined, not a plain object..."), !1) : (qe("checking the object constructor:", u.constructor.name), u.constructor.name === "Object");
}
function Xl(u) {
  qe("cloning object:", u);
  var e = Object.entries(u).reduce(function(a, i) {
    var r = lm(i, 2), n = r[0], o = r[1];
    return qe("analyzing key-value pair:", n, o), a[n] = M1(o) ? Xl(o) : o, a;
  }, {});
  return M1(u) ? e : Object.assign(Object.getPrototypeOf(u), e);
}
or.cloneObject = Xl;
var tr = {};
Object.defineProperty(tr, "__esModule", { value: !0 });
tr.isObject = void 0;
function Em(u) {
  return Object.prototype.toString.call(u) === "[object Object]";
}
tr.isObject = Em;
var ia = y && y.__assign || function() {
  return ia = Object.assign || function(u) {
    for (var e, a = 1, i = arguments.length; a < i; a++) {
      e = arguments[a];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (u[r] = e[r]);
    }
    return u;
  }, ia.apply(this, arguments);
}, Dm = y && y.__read || function(u, e) {
  var a = typeof Symbol == "function" && u[Symbol.iterator];
  if (!a)
    return u;
  var i = a.call(u), r, n = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; )
      n.push(r.value);
  } catch (t) {
    o = { error: t };
  } finally {
    try {
      r && !r.done && (a = i.return) && a.call(i);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return n;
};
Object.defineProperty(Ba, "__esModule", { value: !0 });
Ba.normalizeClientRequestArgs = void 0;
var xm = Zu, j1 = ta, P1 = y4, jn = nr, cm = Ql, dm = or, T1 = tr, lu = xm.debug("http normalizeClientRequestArgs");
function w1(u, e) {
  if (typeof u[1] > "u" || typeof u[1] == "function")
    return lu("request options not provided, deriving from the url", e), jn.getRequestOptionsByUrl(e);
  if (u[1]) {
    lu("has custom RequestOptions!", u[1]);
    var a = jn.getRequestOptionsByUrl(e);
    lu("derived RequestOptions from the URL:", a), lu("cloning RequestOptions...");
    var i = dm.cloneObject(u[1]);
    return lu("successfully cloned RequestOptions!", i), ia(ia({}, a), i);
  }
  return lu("using an empty object as request options"), {};
}
function nn(u) {
  return typeof u[1] == "function" ? u[1] : u[2];
}
function le(u) {
  for (var e = [], a = 1; a < arguments.length; a++)
    e[a - 1] = arguments[a];
  var i, r, n;
  if (lu("arguments", e), lu("using default protocol:", u), typeof e[0] == "string") {
    lu("first argument is a location string:", e[0]), i = new URL(e[0]), lu("created a url:", i);
    var o = jn.getRequestOptionsByUrl(i);
    lu("request options from url:", o), r = w1(e, i), lu("resolved request options:", r), n = nn(e);
  } else if (e[0] instanceof URL)
    i = e[0], lu("first argument is a URL:", i), r = w1(e, i), lu("derived request options:", r), n = nn(e);
  else if ("hash" in e[0] && !("method" in e[0])) {
    var t = Dm(e, 1), s = t[0];
    if (lu("first argument is a legacy URL:", s), s.hostname === null)
      return lu("given legacy URL is relative (no hostname)"), T1.isObject(e[1]) ? le(u, ia({ path: s.path }, e[1]), e[2]) : le(u, { path: s.path }, e[1]);
    lu("given legacy url is absolute");
    var l = new URL(s.href);
    return e[1] === void 0 ? le(u, l) : typeof e[1] == "function" ? le(u, l, e[1]) : le(u, l, e[1], e[2]);
  } else if (T1.isObject(e[0]))
    r = e[0], lu("first argument is RequestOptions:", r), r.protocol = r.protocol || u, lu("normalized request options:", r), i = cm.getUrlByRequestOptions(r), lu("created a URL from RequestOptions:", i.href), n = nn(e);
  else
    throw new Error("Failed to construct ClientRequest with these parameters: " + e);
  if (r.protocol = r.protocol || i.protocol, r.method = r.method || "GET", typeof r.agent > "u") {
    var E = r.protocol === "https:" ? new P1.Agent({
      rejectUnauthorized: r.rejectUnauthorized
    }) : new j1.Agent();
    r.agent = E, lu("resolved fallback agent:", E);
  }
  return r._defaultAgent || (lu('has no default agent, setting the default agent for "%s"', r.protocol), r._defaultAgent = r.protocol === "https:" ? P1.globalAgent : j1.globalAgent), lu("successfully resolved url:", i.href), lu("successfully resolved options:", r), lu("successfully resolved callback:", n), [i, r, n];
}
Ba.normalizeClientRequestArgs = le;
var mm = y && y.__read || function(u, e) {
  var a = typeof Symbol == "function" && u[Symbol.iterator];
  if (!a)
    return u;
  var i = a.call(u), r, n = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; )
      n.push(r.value);
  } catch (t) {
    o = { error: t };
  } finally {
    try {
      r && !r.done && (a = i.return) && a.call(i);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return n;
}, Fm = y && y.__spreadArray || function(u, e) {
  for (var a = 0, i = e.length, r = u.length; a < i; a++, r++)
    u[r] = e[a];
  return u;
};
Object.defineProperty(Xi, "__esModule", { value: !0 });
Xi.get = void 0;
var km = Aa, pm = Ba;
function hm(u, e) {
  return function() {
    for (var a = [], i = 0; i < arguments.length; i++)
      a[i] = arguments[i];
    var r = pm.normalizeClientRequestArgs.apply(void 0, Fm([u + ":"], mm(a))), n = new km.NodeClientRequest(r, e);
    return n.end(), n;
  };
}
Xi.get = hm;
var sr = {}, gm = y && y.__read || function(u, e) {
  var a = typeof Symbol == "function" && u[Symbol.iterator];
  if (!a)
    return u;
  var i = a.call(u), r, n = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; )
      n.push(r.value);
  } catch (t) {
    o = { error: t };
  } finally {
    try {
      r && !r.done && (a = i.return) && a.call(i);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return n;
}, Cm = y && y.__spreadArray || function(u, e) {
  for (var a = 0, i = e.length, r = u.length; a < i; a++, r++)
    u[r] = e[a];
  return u;
};
Object.defineProperty(sr, "__esModule", { value: !0 });
sr.request = void 0;
var vm = Zu, bm = Aa, Am = Ba, Bm = vm.debug("http request");
function ym(u, e) {
  return function() {
    for (var a = [], i = 0; i < arguments.length; i++)
      a[i] = arguments[i];
    Bm('request call (protocol "%s"):', u, a);
    var r = Am.normalizeClientRequestArgs.apply(void 0, Cm([u + ":"], gm(a)));
    return new bm.NodeClientRequest(r, e);
  };
}
sr.request = ym;
var fm = y && y.__extends || function() {
  var u = function(e, a) {
    return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
      i.__proto__ = r;
    } || function(i, r) {
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
    }, u(e, a);
  };
  return function(e, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    u(e, a);
    function i() {
      this.constructor = e;
    }
    e.prototype = a === null ? Object.create(a) : (i.prototype = a.prototype, new i());
  };
}(), zm = y && y.__values || function(u) {
  var e = typeof Symbol == "function" && Symbol.iterator, a = e && u[e], i = 0;
  if (a)
    return a.call(u);
  if (u && typeof u.length == "number")
    return {
      next: function() {
        return u && i >= u.length && (u = void 0), { value: u && u[i++], done: !u };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Sm = y && y.__read || function(u, e) {
  var a = typeof Symbol == "function" && u[Symbol.iterator];
  if (!a)
    return u;
  var i = a.call(u), r, n = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; )
      n.push(r.value);
  } catch (t) {
    o = { error: t };
  } finally {
    try {
      r && !r.done && (a = i.return) && a.call(i);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return n;
}, u3 = y && y.__importDefault || function(u) {
  return u && u.__esModule ? u : { default: u };
};
Object.defineProperty(_o, "__esModule", { value: !0 });
var e3 = _o.ClientRequestInterceptor = void 0, Mm = u3(ta), jm = u3(y4), Pm = Da, on = Q0, Tm = fe, wm = Xi, Nm = sr, Lm = (
  /** @class */
  function(u) {
    fm(e, u);
    function e() {
      var a = u.call(this, e.symbol) || this;
      return a.modules = /* @__PURE__ */ new Map(), a.modules.set("http", Mm.default), a.modules.set("https", jm.default), a;
    }
    return e.prototype.setup = function() {
      var a, i, r = this.log.extend("setup"), n = function(x, c) {
        var d = c.request, F = c.get;
        Pm.invariant(!c[on.IS_PATCHED_MODULE], 'Failed to patch the "%s" module: already patched.', x), o.subscriptions.push(function() {
          Object.defineProperty(c, on.IS_PATCHED_MODULE, {
            value: void 0
          }), c.request = d, c.get = F, r('native "%s" module restored!', x);
        });
        var k = {
          emitter: o.emitter,
          log: o.log
        };
        c.request = // Force a line break.
        Nm.request(x, k), c.get = // Force a line break.
        wm.get(x, k), Object.defineProperty(c, on.IS_PATCHED_MODULE, {
          configurable: !0,
          enumerable: !0,
          value: !0
        }), r('native "%s" module patched!', x);
      }, o = this;
      try {
        for (var t = zm(this.modules), s = t.next(); !s.done; s = t.next()) {
          var l = Sm(s.value, 2), E = l[0], D = l[1];
          n(E, D);
        }
      } catch (x) {
        a = { error: x };
      } finally {
        try {
          s && !s.done && (i = t.return) && i.call(t);
        } finally {
          if (a)
            throw a.error;
        }
      }
    }, e.symbol = Symbol("http"), e;
  }(Tm.Interceptor)
);
e3 = _o.ClientRequestInterceptor = Lm;
var lr = {}, Er = {}, Dr = {}, A0 = {}, B0 = {};
function Km(u, e, a) {
  if (a === void 0 && (a = Array.prototype), u && typeof a.find == "function")
    return a.find.call(u, e);
  for (var i = 0; i < u.length; i++)
    if (Object.prototype.hasOwnProperty.call(u, i)) {
      var r = u[i];
      if (e.call(void 0, r, i, u))
        return r;
    }
}
function Go(u, e) {
  return e === void 0 && (e = Object), e && typeof e.freeze == "function" ? e.freeze(u) : u;
}
function Rm(u, e) {
  if (u === null || typeof u != "object")
    throw new TypeError("target is not an object");
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && (u[a] = e[a]);
  return u;
}
var a3 = Go({
  /**
   * `text/html`, the only mime type that triggers treating an XML document as HTML.
   *
   * @see DOMParser.SupportedType.isHTML
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
   */
  HTML: "text/html",
  /**
   * Helper method to check a mime type if it indicates an HTML document
   *
   * @param {string} [value]
   * @returns {boolean}
   *
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
  isHTML: function(u) {
    return u === a3.HTML;
  },
  /**
   * `application/xml`, the standard mime type for XML documents.
   *
   * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
   * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_APPLICATION: "application/xml",
  /**
   * `text/html`, an alias for `application/xml`.
   *
   * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
   * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_TEXT: "text/xml",
  /**
   * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
   * but is parsed as an XML document.
   *
   * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
   * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
   */
  XML_XHTML_APPLICATION: "application/xhtml+xml",
  /**
   * `image/svg+xml`,
   *
   * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
   * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
   * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
   */
  XML_SVG_IMAGE: "image/svg+xml"
}), i3 = Go({
  /**
   * The XHTML namespace.
   *
   * @see http://www.w3.org/1999/xhtml
   */
  HTML: "http://www.w3.org/1999/xhtml",
  /**
   * Checks if `uri` equals `NAMESPACE.HTML`.
   *
   * @param {string} [uri]
   *
   * @see NAMESPACE.HTML
   */
  isHTML: function(u) {
    return u === i3.HTML;
  },
  /**
   * The SVG namespace.
   *
   * @see http://www.w3.org/2000/svg
   */
  SVG: "http://www.w3.org/2000/svg",
  /**
   * The `xml:` namespace.
   *
   * @see http://www.w3.org/XML/1998/namespace
   */
  XML: "http://www.w3.org/XML/1998/namespace",
  /**
   * The `xmlns:` namespace
   *
   * @see https://www.w3.org/2000/xmlns/
   */
  XMLNS: "http://www.w3.org/2000/xmlns/"
});
B0.assign = Rm;
B0.find = Km;
B0.freeze = Go;
B0.MIME_TYPE = a3;
B0.NAMESPACE = i3;
var r3 = B0, s0 = r3.find, ra = r3.NAMESPACE;
function Hm(u) {
  return u !== "";
}
function _m(u) {
  return u ? u.split(/[\t\n\f\r ]+/).filter(Hm) : [];
}
function Gm(u, e) {
  return u.hasOwnProperty(e) || (u[e] = !0), u;
}
function N1(u) {
  if (!u)
    return [];
  var e = _m(u);
  return Object.keys(e.reduce(Gm, {}));
}
function Vm(u) {
  return function(e) {
    return u && u.indexOf(e) !== -1;
  };
}
function ya(u, e) {
  for (var a in u)
    Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
}
function Lu(u, e) {
  var a = u.prototype;
  if (!(a instanceof e)) {
    let i = function() {
    };
    i.prototype = e.prototype, i = new i(), ya(a, i), u.prototype = a = i;
  }
  a.constructor != u && (typeof u != "function" && console.error("unknown Class:" + u), a.constructor = u);
}
var Ku = {}, r0 = Ku.ELEMENT_NODE = 1, be = Ku.ATTRIBUTE_NODE = 2, vi = Ku.TEXT_NODE = 3, n3 = Ku.CDATA_SECTION_NODE = 4, o3 = Ku.ENTITY_REFERENCE_NODE = 5, Im = Ku.ENTITY_NODE = 6, t3 = Ku.PROCESSING_INSTRUCTION_NODE = 7, s3 = Ku.COMMENT_NODE = 8, l3 = Ku.DOCUMENT_NODE = 9, E3 = Ku.DOCUMENT_TYPE_NODE = 10, C0 = Ku.DOCUMENT_FRAGMENT_NODE = 11, Om = Ku.NOTATION_NODE = 12, Mu = {}, fu = {};
Mu.INDEX_SIZE_ERR = (fu[1] = "Index size error", 1);
Mu.DOMSTRING_SIZE_ERR = (fu[2] = "DOMString size error", 2);
var Tu = Mu.HIERARCHY_REQUEST_ERR = (fu[3] = "Hierarchy request error", 3);
Mu.WRONG_DOCUMENT_ERR = (fu[4] = "Wrong document", 4);
Mu.INVALID_CHARACTER_ERR = (fu[5] = "Invalid character", 5);
Mu.NO_DATA_ALLOWED_ERR = (fu[6] = "No data allowed", 6);
Mu.NO_MODIFICATION_ALLOWED_ERR = (fu[7] = "No modification allowed", 7);
var D3 = Mu.NOT_FOUND_ERR = (fu[8] = "Not found", 8);
Mu.NOT_SUPPORTED_ERR = (fu[9] = "Not supported", 9);
var L1 = Mu.INUSE_ATTRIBUTE_ERR = (fu[10] = "Attribute in use", 10);
Mu.INVALID_STATE_ERR = (fu[11] = "Invalid state", 11);
Mu.SYNTAX_ERR = (fu[12] = "Syntax error", 12);
Mu.INVALID_MODIFICATION_ERR = (fu[13] = "Invalid modification", 13);
Mu.NAMESPACE_ERR = (fu[14] = "Invalid namespace", 14);
Mu.INVALID_ACCESS_ERR = (fu[15] = "Invalid access", 15);
function Fu(u, e) {
  if (e instanceof Error)
    var a = e;
  else
    a = this, Error.call(this, fu[u]), this.message = fu[u], Error.captureStackTrace && Error.captureStackTrace(this, Fu);
  return a.code = u, e && (this.message = this.message + ": " + e), a;
}
Fu.prototype = Error.prototype;
ya(Mu, Fu);
function k0() {
}
k0.prototype = {
  /**
   * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
   * @standard level1
   */
  length: 0,
  /**
   * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
   * @standard level1
   * @param index  unsigned long
   *   Index into the collection.
   * @return Node
   * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
   */
  item: function(u) {
    return this[u] || null;
  },
  toString: function(u, e) {
    for (var a = [], i = 0; i < this.length; i++)
      xe(this[i], a, u, e);
    return a.join("");
  },
  /**
   * @private
   * @param {function (Node):boolean} predicate
   * @returns {Node[]}
   */
  filter: function(u) {
    return Array.prototype.filter.call(this, u);
  },
  /**
   * @private
   * @param {Node} item
   * @returns {number}
   */
  indexOf: function(u) {
    return Array.prototype.indexOf.call(this, u);
  }
};
function Ae(u, e) {
  this._node = u, this._refresh = e, Vo(this);
}
function Vo(u) {
  var e = u._node._inc || u._node.ownerDocument._inc;
  if (u._inc != e) {
    var a = u._refresh(u._node);
    b3(u, "length", a.length), ya(a, u), u._inc = e;
  }
}
Ae.prototype.item = function(u) {
  return Vo(this), this[u];
};
Lu(Ae, k0);
function bi() {
}
function x3(u, e) {
  for (var a = u.length; a--; )
    if (u[a] === e)
      return a;
}
function K1(u, e, a, i) {
  if (i ? e[x3(e, i)] = a : e[e.length++] = a, u) {
    a.ownerElement = u;
    var r = u.ownerDocument;
    r && (i && m3(r, u, i), Jm(r, u, a));
  }
}
function R1(u, e, a) {
  var i = x3(e, a);
  if (i >= 0) {
    for (var r = e.length - 1; i < r; )
      e[i] = e[++i];
    if (e.length = r, u) {
      var n = u.ownerDocument;
      n && (m3(n, u, a), a.ownerElement = null);
    }
  } else
    throw new Fu(D3, new Error(u.tagName + "@" + a));
}
bi.prototype = {
  length: 0,
  item: k0.prototype.item,
  getNamedItem: function(u) {
    for (var e = this.length; e--; ) {
      var a = this[e];
      if (a.nodeName == u)
        return a;
    }
  },
  setNamedItem: function(u) {
    var e = u.ownerElement;
    if (e && e != this._ownerElement)
      throw new Fu(L1);
    var a = this.getNamedItem(u.nodeName);
    return K1(this._ownerElement, this, u, a), a;
  },
  /* returns Node */
  setNamedItemNS: function(u) {
    var e = u.ownerElement, a;
    if (e && e != this._ownerElement)
      throw new Fu(L1);
    return a = this.getNamedItemNS(u.namespaceURI, u.localName), K1(this._ownerElement, this, u, a), a;
  },
  /* returns Node */
  removeNamedItem: function(u) {
    var e = this.getNamedItem(u);
    return R1(this._ownerElement, this, e), e;
  },
  // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
  //for level2
  removeNamedItemNS: function(u, e) {
    var a = this.getNamedItemNS(u, e);
    return R1(this._ownerElement, this, a), a;
  },
  getNamedItemNS: function(u, e) {
    for (var a = this.length; a--; ) {
      var i = this[a];
      if (i.localName == e && i.namespaceURI == u)
        return i;
    }
    return null;
  }
};
function c3() {
}
c3.prototype = {
  /**
   * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
   * The different implementations fairly diverged in what kind of features were reported.
   * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
   *
   * @deprecated It is deprecated and modern browsers return true in all cases.
   *
   * @param {string} feature
   * @param {string} [version]
   * @returns {boolean} always true
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
   * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
   */
  hasFeature: function(u, e) {
    return !0;
  },
  /**
   * Creates an XML Document object of the specified type with its document element.
   *
   * __It behaves slightly different from the description in the living standard__:
   * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
   * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string|null} namespaceURI
   * @param {string} qualifiedName
   * @param {DocumentType=null} doctype
   * @returns {Document}
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocument: function(u, e, a) {
    var i = new fa();
    if (i.implementation = this, i.childNodes = new k0(), i.doctype = a || null, a && i.appendChild(a), e) {
      var r = i.createElementNS(u, e);
      i.appendChild(r);
    }
    return i;
  },
  /**
   * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
   *
   * __This behavior is slightly different from the in the specs__:
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string} qualifiedName
   * @param {string} [publicId]
   * @param {string} [systemId]
   * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
   * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocumentType: function(u, e, a) {
    var i = new xr();
    return i.name = u, i.nodeName = u, i.publicId = e || "", i.systemId = a || "", i;
  }
};
function iu() {
}
iu.prototype = {
  firstChild: null,
  lastChild: null,
  previousSibling: null,
  nextSibling: null,
  attributes: null,
  parentNode: null,
  childNodes: null,
  ownerDocument: null,
  nodeValue: null,
  namespaceURI: null,
  prefix: null,
  localName: null,
  // Modified in DOM Level 2:
  insertBefore: function(u, e) {
    return Ai(this, u, e);
  },
  replaceChild: function(u, e) {
    Ai(this, u, e, k3), e && this.removeChild(e);
  },
  removeChild: function(u) {
    return F3(this, u);
  },
  appendChild: function(u) {
    return this.insertBefore(u, null);
  },
  hasChildNodes: function() {
    return this.firstChild != null;
  },
  cloneNode: function(u) {
    return Pn(this.ownerDocument || this, this, u);
  },
  // Modified in DOM Level 2:
  normalize: function() {
    for (var u = this.firstChild; u; ) {
      var e = u.nextSibling;
      e && e.nodeType == vi && u.nodeType == vi ? (this.removeChild(e), u.appendData(e.data)) : (u.normalize(), u = e);
    }
  },
  // Introduced in DOM Level 2:
  isSupported: function(u, e) {
    return this.ownerDocument.implementation.hasFeature(u, e);
  },
  // Introduced in DOM Level 2:
  hasAttributes: function() {
    return this.attributes.length > 0;
  },
  /**
   * Look up the prefix associated to the given namespace URI, starting from this node.
   * **The default namespace declarations are ignored by this method.**
   * See Namespace Prefix Lookup for details on the algorithm used by this method.
   *
   * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
   *
   * @param {string | null} namespaceURI
   * @returns {string | null}
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
   * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
   * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
   * @see https://github.com/xmldom/xmldom/issues/322
   */
  lookupPrefix: function(u) {
    for (var e = this; e; ) {
      var a = e._nsMap;
      if (a) {
        for (var i in a)
          if (Object.prototype.hasOwnProperty.call(a, i) && a[i] === u)
            return i;
      }
      e = e.nodeType == be ? e.ownerDocument : e.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  lookupNamespaceURI: function(u) {
    for (var e = this; e; ) {
      var a = e._nsMap;
      if (a && Object.prototype.hasOwnProperty.call(a, u))
        return a[u];
      e = e.nodeType == be ? e.ownerDocument : e.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  isDefaultNamespace: function(u) {
    var e = this.lookupPrefix(u);
    return e == null;
  }
};
function d3(u) {
  return u == "<" && "&lt;" || u == ">" && "&gt;" || u == "&" && "&amp;" || u == '"' && "&quot;" || "&#" + u.charCodeAt() + ";";
}
ya(Ku, iu);
ya(Ku, iu.prototype);
function na(u, e) {
  if (e(u))
    return !0;
  if (u = u.firstChild)
    do
      if (na(u, e))
        return !0;
    while (u = u.nextSibling);
}
function fa() {
  this.ownerDocument = this;
}
function Jm(u, e, a) {
  u && u._inc++;
  var i = a.namespaceURI;
  i === ra.XMLNS && (e._nsMap[a.prefix ? a.localName : ""] = a.value);
}
function m3(u, e, a, i) {
  u && u._inc++;
  var r = a.namespaceURI;
  r === ra.XMLNS && delete e._nsMap[a.prefix ? a.localName : ""];
}
function Io(u, e, a) {
  if (u && u._inc) {
    u._inc++;
    var i = e.childNodes;
    if (a)
      i[i.length++] = a;
    else {
      for (var r = e.firstChild, n = 0; r; )
        i[n++] = r, r = r.nextSibling;
      i.length = n, delete i[i.length];
    }
  }
}
function F3(u, e) {
  var a = e.previousSibling, i = e.nextSibling;
  return a ? a.nextSibling = i : u.firstChild = i, i ? i.previousSibling = a : u.lastChild = a, e.parentNode = null, e.previousSibling = null, e.nextSibling = null, Io(u.ownerDocument, u), e;
}
function $m(u) {
  return u && (u.nodeType === iu.DOCUMENT_NODE || u.nodeType === iu.DOCUMENT_FRAGMENT_NODE || u.nodeType === iu.ELEMENT_NODE);
}
function qm(u) {
  return u && (l0(u) || Oo(u) || v0(u) || u.nodeType === iu.DOCUMENT_FRAGMENT_NODE || u.nodeType === iu.COMMENT_NODE || u.nodeType === iu.PROCESSING_INSTRUCTION_NODE);
}
function v0(u) {
  return u && u.nodeType === iu.DOCUMENT_TYPE_NODE;
}
function l0(u) {
  return u && u.nodeType === iu.ELEMENT_NODE;
}
function Oo(u) {
  return u && u.nodeType === iu.TEXT_NODE;
}
function H1(u, e) {
  var a = u.childNodes || [];
  if (s0(a, l0) || v0(e))
    return !1;
  var i = s0(a, v0);
  return !(e && i && a.indexOf(i) > a.indexOf(e));
}
function _1(u, e) {
  var a = u.childNodes || [];
  function i(n) {
    return l0(n) && n !== e;
  }
  if (s0(a, i))
    return !1;
  var r = s0(a, v0);
  return !(e && r && a.indexOf(r) > a.indexOf(e));
}
function Wm(u, e, a) {
  if (!$m(u))
    throw new Fu(Tu, "Unexpected parent node type " + u.nodeType);
  if (a && a.parentNode !== u)
    throw new Fu(D3, "child not in parent");
  if (
    // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
    !qm(e) || // 5. If either `node` is a Text node and `parent` is a document,
    // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
    // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
    // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
    v0(e) && u.nodeType !== iu.DOCUMENT_NODE
  )
    throw new Fu(
      Tu,
      "Unexpected node type " + e.nodeType + " for parent node type " + u.nodeType
    );
}
function Um(u, e, a) {
  var i = u.childNodes || [], r = e.childNodes || [];
  if (e.nodeType === iu.DOCUMENT_FRAGMENT_NODE) {
    var n = r.filter(l0);
    if (n.length > 1 || s0(r, Oo))
      throw new Fu(Tu, "More than one element or text in fragment");
    if (n.length === 1 && !H1(u, a))
      throw new Fu(Tu, "Element in fragment can not be inserted before doctype");
  }
  if (l0(e) && !H1(u, a))
    throw new Fu(Tu, "Only one element can be added and only after doctype");
  if (v0(e)) {
    if (s0(i, v0))
      throw new Fu(Tu, "Only one doctype is allowed");
    var o = s0(i, l0);
    if (a && i.indexOf(o) < i.indexOf(a))
      throw new Fu(Tu, "Doctype can only be inserted before an element");
    if (!a && o)
      throw new Fu(Tu, "Doctype can not be appended since element is present");
  }
}
function k3(u, e, a) {
  var i = u.childNodes || [], r = e.childNodes || [];
  if (e.nodeType === iu.DOCUMENT_FRAGMENT_NODE) {
    var n = r.filter(l0);
    if (n.length > 1 || s0(r, Oo))
      throw new Fu(Tu, "More than one element or text in fragment");
    if (n.length === 1 && !_1(u, a))
      throw new Fu(Tu, "Element in fragment can not be inserted before doctype");
  }
  if (l0(e) && !_1(u, a))
    throw new Fu(Tu, "Only one element can be added and only after doctype");
  if (v0(e)) {
    if (s0(i, function(s) {
      return v0(s) && s !== a;
    }))
      throw new Fu(Tu, "Only one doctype is allowed");
    var o = s0(i, l0);
    if (a && i.indexOf(o) < i.indexOf(a))
      throw new Fu(Tu, "Doctype can only be inserted before an element");
  }
}
function Ai(u, e, a, i) {
  Wm(u, e, a), u.nodeType === iu.DOCUMENT_NODE && (i || Um)(u, e, a);
  var r = e.parentNode;
  if (r && r.removeChild(e), e.nodeType === C0) {
    var n = e.firstChild;
    if (n == null)
      return e;
    var o = e.lastChild;
  } else
    n = o = e;
  var t = a ? a.previousSibling : u.lastChild;
  n.previousSibling = t, o.nextSibling = a, t ? t.nextSibling = n : u.firstChild = n, a == null ? u.lastChild = o : a.previousSibling = o;
  do
    n.parentNode = u;
  while (n !== o && (n = n.nextSibling));
  return Io(u.ownerDocument || u, u), e.nodeType == C0 && (e.firstChild = e.lastChild = null), e;
}
function Zm(u, e) {
  return e.parentNode && e.parentNode.removeChild(e), e.parentNode = u, e.previousSibling = u.lastChild, e.nextSibling = null, e.previousSibling ? e.previousSibling.nextSibling = e : u.firstChild = e, u.lastChild = e, Io(u.ownerDocument, u, e), e;
}
fa.prototype = {
  //implementation : null,
  nodeName: "#document",
  nodeType: l3,
  /**
   * The DocumentType node of the document.
   *
   * @readonly
   * @type DocumentType
   */
  doctype: null,
  documentElement: null,
  _inc: 1,
  insertBefore: function(u, e) {
    if (u.nodeType == C0) {
      for (var a = u.firstChild; a; ) {
        var i = a.nextSibling;
        this.insertBefore(a, e), a = i;
      }
      return u;
    }
    return Ai(this, u, e), u.ownerDocument = this, this.documentElement === null && u.nodeType === r0 && (this.documentElement = u), u;
  },
  removeChild: function(u) {
    return this.documentElement == u && (this.documentElement = null), F3(this, u);
  },
  replaceChild: function(u, e) {
    Ai(this, u, e, k3), u.ownerDocument = this, e && this.removeChild(e), l0(u) && (this.documentElement = u);
  },
  // Introduced in DOM Level 2:
  importNode: function(u, e) {
    return v3(this, u, e);
  },
  // Introduced in DOM Level 2:
  getElementById: function(u) {
    var e = null;
    return na(this.documentElement, function(a) {
      if (a.nodeType == r0 && a.getAttribute("id") == u)
        return e = a, !0;
    }), e;
  },
  /**
   * The `getElementsByClassName` method of `Document` interface returns an array-like object
   * of all child elements which have **all** of the given class name(s).
   *
   * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
   *
   *
   * Warning: This is a live LiveNodeList.
   * Changes in the DOM will reflect in the array as the changes occur.
   * If an element selected by this array no longer qualifies for the selector,
   * it will automatically be removed. Be aware of this for iteration purposes.
   *
   * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
   * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
   */
  getElementsByClassName: function(u) {
    var e = N1(u);
    return new Ae(this, function(a) {
      var i = [];
      return e.length > 0 && na(a.documentElement, function(r) {
        if (r !== a && r.nodeType === r0) {
          var n = r.getAttribute("class");
          if (n) {
            var o = u === n;
            if (!o) {
              var t = N1(n);
              o = e.every(Vm(t));
            }
            o && i.push(r);
          }
        }
      }), i;
    });
  },
  //document factory method:
  createElement: function(u) {
    var e = new Y0();
    e.ownerDocument = this, e.nodeName = u, e.tagName = u, e.localName = u, e.childNodes = new k0();
    var a = e.attributes = new bi();
    return a._ownerElement = e, e;
  },
  createDocumentFragment: function() {
    var u = new cr();
    return u.ownerDocument = this, u.childNodes = new k0(), u;
  },
  createTextNode: function(u) {
    var e = new Jo();
    return e.ownerDocument = this, e.appendData(u), e;
  },
  createComment: function(u) {
    var e = new $o();
    return e.ownerDocument = this, e.appendData(u), e;
  },
  createCDATASection: function(u) {
    var e = new qo();
    return e.ownerDocument = this, e.appendData(u), e;
  },
  createProcessingInstruction: function(u, e) {
    var a = new Uo();
    return a.ownerDocument = this, a.tagName = a.target = u, a.nodeValue = a.data = e, a;
  },
  createAttribute: function(u) {
    var e = new Bi();
    return e.ownerDocument = this, e.name = u, e.nodeName = u, e.localName = u, e.specified = !0, e;
  },
  createEntityReference: function(u) {
    var e = new Wo();
    return e.ownerDocument = this, e.nodeName = u, e;
  },
  // Introduced in DOM Level 2:
  createElementNS: function(u, e) {
    var a = new Y0(), i = e.split(":"), r = a.attributes = new bi();
    return a.childNodes = new k0(), a.ownerDocument = this, a.nodeName = e, a.tagName = e, a.namespaceURI = u, i.length == 2 ? (a.prefix = i[0], a.localName = i[1]) : a.localName = e, r._ownerElement = a, a;
  },
  // Introduced in DOM Level 2:
  createAttributeNS: function(u, e) {
    var a = new Bi(), i = e.split(":");
    return a.ownerDocument = this, a.nodeName = e, a.name = e, a.namespaceURI = u, a.specified = !0, i.length == 2 ? (a.prefix = i[0], a.localName = i[1]) : a.localName = e, a;
  }
};
Lu(fa, iu);
function Y0() {
  this._nsMap = {};
}
Y0.prototype = {
  nodeType: r0,
  hasAttribute: function(u) {
    return this.getAttributeNode(u) != null;
  },
  getAttribute: function(u) {
    var e = this.getAttributeNode(u);
    return e && e.value || "";
  },
  getAttributeNode: function(u) {
    return this.attributes.getNamedItem(u);
  },
  setAttribute: function(u, e) {
    var a = this.ownerDocument.createAttribute(u);
    a.value = a.nodeValue = "" + e, this.setAttributeNode(a);
  },
  removeAttribute: function(u) {
    var e = this.getAttributeNode(u);
    e && this.removeAttributeNode(e);
  },
  //four real opeartion method
  appendChild: function(u) {
    return u.nodeType === C0 ? this.insertBefore(u, null) : Zm(this, u);
  },
  setAttributeNode: function(u) {
    return this.attributes.setNamedItem(u);
  },
  setAttributeNodeNS: function(u) {
    return this.attributes.setNamedItemNS(u);
  },
  removeAttributeNode: function(u) {
    return this.attributes.removeNamedItem(u.nodeName);
  },
  //get real attribute name,and remove it by removeAttributeNode
  removeAttributeNS: function(u, e) {
    var a = this.getAttributeNodeNS(u, e);
    a && this.removeAttributeNode(a);
  },
  hasAttributeNS: function(u, e) {
    return this.getAttributeNodeNS(u, e) != null;
  },
  getAttributeNS: function(u, e) {
    var a = this.getAttributeNodeNS(u, e);
    return a && a.value || "";
  },
  setAttributeNS: function(u, e, a) {
    var i = this.ownerDocument.createAttributeNS(u, e);
    i.value = i.nodeValue = "" + a, this.setAttributeNode(i);
  },
  getAttributeNodeNS: function(u, e) {
    return this.attributes.getNamedItemNS(u, e);
  },
  getElementsByTagName: function(u) {
    return new Ae(this, function(e) {
      var a = [];
      return na(e, function(i) {
        i !== e && i.nodeType == r0 && (u === "*" || i.tagName == u) && a.push(i);
      }), a;
    });
  },
  getElementsByTagNameNS: function(u, e) {
    return new Ae(this, function(a) {
      var i = [];
      return na(a, function(r) {
        r !== a && r.nodeType === r0 && (u === "*" || r.namespaceURI === u) && (e === "*" || r.localName == e) && i.push(r);
      }), i;
    });
  }
};
fa.prototype.getElementsByTagName = Y0.prototype.getElementsByTagName;
fa.prototype.getElementsByTagNameNS = Y0.prototype.getElementsByTagNameNS;
Lu(Y0, iu);
function Bi() {
}
Bi.prototype.nodeType = be;
Lu(Bi, iu);
function za() {
}
za.prototype = {
  data: "",
  substringData: function(u, e) {
    return this.data.substring(u, u + e);
  },
  appendData: function(u) {
    u = this.data + u, this.nodeValue = this.data = u, this.length = u.length;
  },
  insertData: function(u, e) {
    this.replaceData(u, 0, e);
  },
  appendChild: function(u) {
    throw new Error(fu[Tu]);
  },
  deleteData: function(u, e) {
    this.replaceData(u, e, "");
  },
  replaceData: function(u, e, a) {
    var i = this.data.substring(0, u), r = this.data.substring(u + e);
    a = i + a + r, this.nodeValue = this.data = a, this.length = a.length;
  }
};
Lu(za, iu);
function Jo() {
}
Jo.prototype = {
  nodeName: "#text",
  nodeType: vi,
  splitText: function(u) {
    var e = this.data, a = e.substring(u);
    e = e.substring(0, u), this.data = this.nodeValue = e, this.length = e.length;
    var i = this.ownerDocument.createTextNode(a);
    return this.parentNode && this.parentNode.insertBefore(i, this.nextSibling), i;
  }
};
Lu(Jo, za);
function $o() {
}
$o.prototype = {
  nodeName: "#comment",
  nodeType: s3
};
Lu($o, za);
function qo() {
}
qo.prototype = {
  nodeName: "#cdata-section",
  nodeType: n3
};
Lu(qo, za);
function xr() {
}
xr.prototype.nodeType = E3;
Lu(xr, iu);
function p3() {
}
p3.prototype.nodeType = Om;
Lu(p3, iu);
function h3() {
}
h3.prototype.nodeType = Im;
Lu(h3, iu);
function Wo() {
}
Wo.prototype.nodeType = o3;
Lu(Wo, iu);
function cr() {
}
cr.prototype.nodeName = "#document-fragment";
cr.prototype.nodeType = C0;
Lu(cr, iu);
function Uo() {
}
Uo.prototype.nodeType = t3;
Lu(Uo, iu);
function g3() {
}
g3.prototype.serializeToString = function(u, e, a) {
  return C3.call(u, e, a);
};
iu.prototype.toString = C3;
function C3(u, e) {
  var a = [], i = this.nodeType == 9 && this.documentElement || this, r = i.prefix, n = i.namespaceURI;
  if (n && r == null) {
    var r = i.lookupPrefix(n);
    if (r == null)
      var o = [
        { namespace: n, prefix: null }
        //{namespace:uri,prefix:''}
      ];
  }
  return xe(this, a, u, e, o), a.join("");
}
function G1(u, e, a) {
  var i = u.prefix || "", r = u.namespaceURI;
  if (!r || i === "xml" && r === ra.XML || r === ra.XMLNS)
    return !1;
  for (var n = a.length; n--; ) {
    var o = a[n];
    if (o.prefix === i)
      return o.namespace !== r;
  }
  return !0;
}
function tn(u, e, a) {
  u.push(" ", e, '="', a.replace(/[<>&"\t\n\r]/g, d3), '"');
}
function xe(u, e, a, i, r) {
  if (r || (r = []), i)
    if (u = i(u), u) {
      if (typeof u == "string") {
        e.push(u);
        return;
      }
    } else
      return;
  switch (u.nodeType) {
    case r0:
      var n = u.attributes, o = n.length, g = u.firstChild, t = u.tagName;
      a = ra.isHTML(u.namespaceURI) || a;
      var s = t;
      if (!a && !u.prefix && u.namespaceURI) {
        for (var l, E = 0; E < n.length; E++)
          if (n.item(E).name === "xmlns") {
            l = n.item(E).value;
            break;
          }
        if (!l)
          for (var D = r.length - 1; D >= 0; D--) {
            var x = r[D];
            if (x.prefix === "" && x.namespace === u.namespaceURI) {
              l = x.namespace;
              break;
            }
          }
        if (l !== u.namespaceURI)
          for (var D = r.length - 1; D >= 0; D--) {
            var x = r[D];
            if (x.namespace === u.namespaceURI) {
              x.prefix && (s = x.prefix + ":" + t);
              break;
            }
          }
      }
      e.push("<", s);
      for (var c = 0; c < o; c++) {
        var d = n.item(c);
        d.prefix == "xmlns" ? r.push({ prefix: d.localName, namespace: d.value }) : d.nodeName == "xmlns" && r.push({ prefix: "", namespace: d.value });
      }
      for (var c = 0; c < o; c++) {
        var d = n.item(c);
        if (G1(d, a, r)) {
          var F = d.prefix || "", k = d.namespaceURI;
          tn(e, F ? "xmlns:" + F : "xmlns", k), r.push({ prefix: F, namespace: k });
        }
        xe(d, e, a, i, r);
      }
      if (t === s && G1(u, a, r)) {
        var F = u.prefix || "", k = u.namespaceURI;
        tn(e, F ? "xmlns:" + F : "xmlns", k), r.push({ prefix: F, namespace: k });
      }
      if (g || a && !/^(?:meta|link|img|br|hr|input)$/i.test(t)) {
        if (e.push(">"), a && /^script$/i.test(t))
          for (; g; )
            g.data ? e.push(g.data) : xe(g, e, a, i, r.slice()), g = g.nextSibling;
        else
          for (; g; )
            xe(g, e, a, i, r.slice()), g = g.nextSibling;
        e.push("</", s, ">");
      } else
        e.push("/>");
      return;
    case l3:
    case C0:
      for (var g = u.firstChild; g; )
        xe(g, e, a, i, r.slice()), g = g.nextSibling;
      return;
    case be:
      return tn(e, u.name, u.value);
    case vi:
      return e.push(
        u.data.replace(/[<&>]/g, d3)
      );
    case n3:
      return e.push("<![CDATA[", u.data, "]]>");
    case s3:
      return e.push("<!--", u.data, "-->");
    case E3:
      var M = u.publicId, A = u.systemId;
      if (e.push("<!DOCTYPE ", u.name), M)
        e.push(" PUBLIC ", M), A && A != "." && e.push(" ", A), e.push(">");
      else if (A && A != ".")
        e.push(" SYSTEM ", A, ">");
      else {
        var v = u.internalSubset;
        v && e.push(" [", v, "]"), e.push(">");
      }
      return;
    case t3:
      return e.push("<?", u.target, " ", u.data, "?>");
    case o3:
      return e.push("&", u.nodeName, ";");
    default:
      e.push("??", u.nodeName);
  }
}
function v3(u, e, a) {
  var i;
  switch (e.nodeType) {
    case r0:
      i = e.cloneNode(!1), i.ownerDocument = u;
    case C0:
      break;
    case be:
      a = !0;
      break;
  }
  if (i || (i = e.cloneNode(!1)), i.ownerDocument = u, i.parentNode = null, a)
    for (var r = e.firstChild; r; )
      i.appendChild(v3(u, r, a)), r = r.nextSibling;
  return i;
}
function Pn(u, e, a) {
  var i = new e.constructor();
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      var n = e[r];
      typeof n != "object" && n != i[r] && (i[r] = n);
    }
  switch (e.childNodes && (i.childNodes = new k0()), i.ownerDocument = u, i.nodeType) {
    case r0:
      var o = e.attributes, t = i.attributes = new bi(), s = o.length;
      t._ownerElement = i;
      for (var l = 0; l < s; l++)
        i.setAttributeNode(Pn(u, o.item(l), !0));
      break;
    case be:
      a = !0;
  }
  if (a)
    for (var E = e.firstChild; E; )
      i.appendChild(Pn(u, E, a)), E = E.nextSibling;
  return i;
}
function b3(u, e, a) {
  u[e] = a;
}
try {
  if (Object.defineProperty) {
    let u = function(e) {
      switch (e.nodeType) {
        case r0:
        case C0:
          var a = [];
          for (e = e.firstChild; e; )
            e.nodeType !== 7 && e.nodeType !== 8 && a.push(u(e)), e = e.nextSibling;
          return a.join("");
        default:
          return e.nodeValue;
      }
    };
    Object.defineProperty(Ae.prototype, "length", {
      get: function() {
        return Vo(this), this.$$length;
      }
    }), Object.defineProperty(iu.prototype, "textContent", {
      get: function() {
        return u(this);
      },
      set: function(e) {
        switch (this.nodeType) {
          case r0:
          case C0:
            for (; this.firstChild; )
              this.removeChild(this.firstChild);
            (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
            break;
          default:
            this.data = e, this.value = e, this.nodeValue = e;
        }
      }
    }), b3 = function(e, a, i) {
      e["$$" + a] = i;
    };
  }
} catch {
}
A0.DocumentType = xr;
A0.DOMException = Fu;
A0.DOMImplementation = c3;
A0.Element = Y0;
A0.Node = iu;
A0.NodeList = k0;
A0.XMLSerializer = g3;
var dr = {}, A3 = {};
(function(u) {
  var e = B0.freeze;
  u.XML_ENTITIES = e({ amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' }), u.HTML_ENTITIES = e({
    lt: "<",
    gt: ">",
    amp: "&",
    quot: '"',
    apos: "'",
    Agrave: "À",
    Aacute: "Á",
    Acirc: "Â",
    Atilde: "Ã",
    Auml: "Ä",
    Aring: "Å",
    AElig: "Æ",
    Ccedil: "Ç",
    Egrave: "È",
    Eacute: "É",
    Ecirc: "Ê",
    Euml: "Ë",
    Igrave: "Ì",
    Iacute: "Í",
    Icirc: "Î",
    Iuml: "Ï",
    ETH: "Ð",
    Ntilde: "Ñ",
    Ograve: "Ò",
    Oacute: "Ó",
    Ocirc: "Ô",
    Otilde: "Õ",
    Ouml: "Ö",
    Oslash: "Ø",
    Ugrave: "Ù",
    Uacute: "Ú",
    Ucirc: "Û",
    Uuml: "Ü",
    Yacute: "Ý",
    THORN: "Þ",
    szlig: "ß",
    agrave: "à",
    aacute: "á",
    acirc: "â",
    atilde: "ã",
    auml: "ä",
    aring: "å",
    aelig: "æ",
    ccedil: "ç",
    egrave: "è",
    eacute: "é",
    ecirc: "ê",
    euml: "ë",
    igrave: "ì",
    iacute: "í",
    icirc: "î",
    iuml: "ï",
    eth: "ð",
    ntilde: "ñ",
    ograve: "ò",
    oacute: "ó",
    ocirc: "ô",
    otilde: "õ",
    ouml: "ö",
    oslash: "ø",
    ugrave: "ù",
    uacute: "ú",
    ucirc: "û",
    uuml: "ü",
    yacute: "ý",
    thorn: "þ",
    yuml: "ÿ",
    nbsp: " ",
    iexcl: "¡",
    cent: "¢",
    pound: "£",
    curren: "¤",
    yen: "¥",
    brvbar: "¦",
    sect: "§",
    uml: "¨",
    copy: "©",
    ordf: "ª",
    laquo: "«",
    not: "¬",
    shy: "­­",
    reg: "®",
    macr: "¯",
    deg: "°",
    plusmn: "±",
    sup2: "²",
    sup3: "³",
    acute: "´",
    micro: "µ",
    para: "¶",
    middot: "·",
    cedil: "¸",
    sup1: "¹",
    ordm: "º",
    raquo: "»",
    frac14: "¼",
    frac12: "½",
    frac34: "¾",
    iquest: "¿",
    times: "×",
    divide: "÷",
    forall: "∀",
    part: "∂",
    exist: "∃",
    empty: "∅",
    nabla: "∇",
    isin: "∈",
    notin: "∉",
    ni: "∋",
    prod: "∏",
    sum: "∑",
    minus: "−",
    lowast: "∗",
    radic: "√",
    prop: "∝",
    infin: "∞",
    ang: "∠",
    and: "∧",
    or: "∨",
    cap: "∩",
    cup: "∪",
    int: "∫",
    there4: "∴",
    sim: "∼",
    cong: "≅",
    asymp: "≈",
    ne: "≠",
    equiv: "≡",
    le: "≤",
    ge: "≥",
    sub: "⊂",
    sup: "⊃",
    nsub: "⊄",
    sube: "⊆",
    supe: "⊇",
    oplus: "⊕",
    otimes: "⊗",
    perp: "⊥",
    sdot: "⋅",
    Alpha: "Α",
    Beta: "Β",
    Gamma: "Γ",
    Delta: "Δ",
    Epsilon: "Ε",
    Zeta: "Ζ",
    Eta: "Η",
    Theta: "Θ",
    Iota: "Ι",
    Kappa: "Κ",
    Lambda: "Λ",
    Mu: "Μ",
    Nu: "Ν",
    Xi: "Ξ",
    Omicron: "Ο",
    Pi: "Π",
    Rho: "Ρ",
    Sigma: "Σ",
    Tau: "Τ",
    Upsilon: "Υ",
    Phi: "Φ",
    Chi: "Χ",
    Psi: "Ψ",
    Omega: "Ω",
    alpha: "α",
    beta: "β",
    gamma: "γ",
    delta: "δ",
    epsilon: "ε",
    zeta: "ζ",
    eta: "η",
    theta: "θ",
    iota: "ι",
    kappa: "κ",
    lambda: "λ",
    mu: "μ",
    nu: "ν",
    xi: "ξ",
    omicron: "ο",
    pi: "π",
    rho: "ρ",
    sigmaf: "ς",
    sigma: "σ",
    tau: "τ",
    upsilon: "υ",
    phi: "φ",
    chi: "χ",
    psi: "ψ",
    omega: "ω",
    thetasym: "ϑ",
    upsih: "ϒ",
    piv: "ϖ",
    OElig: "Œ",
    oelig: "œ",
    Scaron: "Š",
    scaron: "š",
    Yuml: "Ÿ",
    fnof: "ƒ",
    circ: "ˆ",
    tilde: "˜",
    ensp: " ",
    emsp: " ",
    thinsp: " ",
    zwnj: "‌",
    zwj: "‍",
    lrm: "‎",
    rlm: "‏",
    ndash: "–",
    mdash: "—",
    lsquo: "‘",
    rsquo: "’",
    sbquo: "‚",
    ldquo: "“",
    rdquo: "”",
    bdquo: "„",
    dagger: "†",
    Dagger: "‡",
    bull: "•",
    hellip: "…",
    permil: "‰",
    prime: "′",
    Prime: "″",
    lsaquo: "‹",
    rsaquo: "›",
    oline: "‾",
    euro: "€",
    trade: "™",
    larr: "←",
    uarr: "↑",
    rarr: "→",
    darr: "↓",
    harr: "↔",
    crarr: "↵",
    lceil: "⌈",
    rceil: "⌉",
    lfloor: "⌊",
    rfloor: "⌋",
    loz: "◊",
    spades: "♠",
    clubs: "♣",
    hearts: "♥",
    diams: "♦"
  }), u.entityMap = u.HTML_ENTITIES;
})(A3);
var Zo = {}, oa = B0.NAMESPACE, Tn = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, V1 = new RegExp("[\\-\\.0-9" + Tn.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), I1 = new RegExp("^" + Tn.source + V1.source + "*(?::" + Tn.source + V1.source + "*)?$"), He = 0, y0 = 1, re = 2, _e = 3, ne = 4, oe = 5, Ge = 6, Wa = 7;
function Be(u, e) {
  this.message = u, this.locator = e, Error.captureStackTrace && Error.captureStackTrace(this, Be);
}
Be.prototype = new Error();
Be.prototype.name = Be.name;
function B3() {
}
B3.prototype = {
  parse: function(u, e, a) {
    var i = this.domBuilder;
    i.startDocument(), y3(e, e = {}), Ym(
      u,
      e,
      a,
      i,
      this.errorHandler
    ), i.endDocument();
  }
};
function Ym(u, e, a, i, r) {
  function n($) {
    if ($ > 65535) {
      $ -= 65536;
      var tu = 55296 + ($ >> 10), su = 56320 + ($ & 1023);
      return String.fromCharCode(tu, su);
    } else
      return String.fromCharCode($);
  }
  function o($) {
    var tu = $.slice(1, -1);
    return Object.hasOwnProperty.call(a, tu) ? a[tu] : tu.charAt(0) === "#" ? n(parseInt(tu.substr(1).replace("x", "0x"))) : (r.error("entity not found:" + $), $);
  }
  function t($) {
    if ($ > F) {
      var tu = u.substring(F, $).replace(/&#?\w+;/g, o);
      x && s(F), i.characters(tu, 0, $ - F), F = $;
    }
  }
  function s($, tu) {
    for (; $ >= E && (tu = D.exec(u)); )
      l = tu.index, E = l + tu[0].length, x.lineNumber++;
    x.columnNumber = $ - l + 1;
  }
  for (var l = 0, E = 0, D = /.*(?:\r\n?|\n)|.*$/g, x = i.locator, c = [{ currentNSMap: e }], d = {}, F = 0; ; ) {
    try {
      var k = u.indexOf("<", F);
      if (k < 0) {
        if (!u.substr(F).match(/^\s*$/)) {
          var g = i.doc, M = g.createTextNode(u.substr(F));
          g.appendChild(M), i.currentElement = M;
        }
        return;
      }
      switch (k > F && t(k), u.charAt(k + 1)) {
        case "/":
          var H = u.indexOf(">", k + 3), A = u.substring(k + 2, H).replace(/[ \t\n\r]+$/g, ""), v = c.pop();
          H < 0 ? (A = u.substring(k + 2).replace(/[\s<].*/, ""), r.error("end tag name: " + A + " is not complete:" + v.tagName), H = k + 1 + A.length) : A.match(/\s</) && (A = A.replace(/[\s<].*/, ""), r.error("end tag name: " + A + " maybe not complete"), H = k + 1 + A.length);
          var T = v.localNSMap, R = v.tagName == A, O = R || v.tagName && v.tagName.toLowerCase() == A.toLowerCase();
          if (O) {
            if (i.endElement(v.uri, v.localName, A), T)
              for (var V in T)
                Object.prototype.hasOwnProperty.call(T, V) && i.endPrefixMapping(V);
            R || r.fatalError("end tag name: " + A + " is not match the current start tagName:" + v.tagName);
          } else
            c.push(v);
          H++;
          break;
        case "?":
          x && s(k), H = aF(u, k, i);
          break;
        case "!":
          x && s(k), H = eF(u, k, i, r);
          break;
        default:
          x && s(k);
          var b = new f3(), P = c[c.length - 1].currentNSMap, H = Qm(u, k, b, P, o, r), J = b.length;
          if (!b.closed && uF(u, H, b.tagName, d) && (b.closed = !0, a.nbsp || r.warning("unclosed xml attribute")), x && J) {
            for (var ru = O1(x, {}), Y = 0; Y < J; Y++) {
              var eu = b[Y];
              s(eu.offset), eu.locator = O1(x, {});
            }
            i.locator = ru, J1(b, i, P) && c.push(b), i.locator = x;
          } else
            J1(b, i, P) && c.push(b);
          oa.isHTML(b.uri) && !b.closed ? H = Xm(u, H, b.tagName, o, i) : H++;
      }
    } catch ($) {
      if ($ instanceof Be)
        throw $;
      r.error("element parse error: " + $), H = -1;
    }
    H > F ? F = H : t(Math.max(k, F) + 1);
  }
}
function O1(u, e) {
  return e.lineNumber = u.lineNumber, e.columnNumber = u.columnNumber, e;
}
function Qm(u, e, a, i, r, n) {
  function o(x, c, d) {
    a.attributeNames.hasOwnProperty(x) && n.fatalError("Attribute " + x + " redefined"), a.addValue(
      x,
      // @see https://www.w3.org/TR/xml/#AVNormalize
      // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
      // - recursive replacement of (DTD) entity references
      // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
      c.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, r),
      d
    );
  }
  for (var t, s, l = ++e, E = He; ; ) {
    var D = u.charAt(l);
    switch (D) {
      case "=":
        if (E === y0)
          t = u.slice(e, l), E = _e;
        else if (E === re)
          E = _e;
        else
          throw new Error("attribute equal must after attrName");
        break;
      case "'":
      case '"':
        if (E === _e || E === y0)
          if (E === y0 && (n.warning('attribute value must after "="'), t = u.slice(e, l)), e = l + 1, l = u.indexOf(D, e), l > 0)
            s = u.slice(e, l), o(t, s, e - 1), E = oe;
          else
            throw new Error("attribute value no end '" + D + "' match");
        else if (E == ne)
          s = u.slice(e, l), o(t, s, e), n.warning('attribute "' + t + '" missed start quot(' + D + ")!!"), e = l + 1, E = oe;
        else
          throw new Error('attribute value must after "="');
        break;
      case "/":
        switch (E) {
          case He:
            a.setTagName(u.slice(e, l));
          case oe:
          case Ge:
          case Wa:
            E = Wa, a.closed = !0;
          case ne:
          case y0:
            break;
          case re:
            a.closed = !0;
            break;
          default:
            throw new Error("attribute invalid close char('/')");
        }
        break;
      case "":
        return n.error("unexpected end of input"), E == He && a.setTagName(u.slice(e, l)), l;
      case ">":
        switch (E) {
          case He:
            a.setTagName(u.slice(e, l));
          case oe:
          case Ge:
          case Wa:
            break;
          case ne:
          case y0:
            s = u.slice(e, l), s.slice(-1) === "/" && (a.closed = !0, s = s.slice(0, -1));
          case re:
            E === re && (s = t), E == ne ? (n.warning('attribute "' + s + '" missed quot(")!'), o(t, s, e)) : ((!oa.isHTML(i[""]) || !s.match(/^(?:disabled|checked|selected)$/i)) && n.warning('attribute "' + s + '" missed value!! "' + s + '" instead!!'), o(s, s, e));
            break;
          case _e:
            throw new Error("attribute value missed!!");
        }
        return l;
      case "":
        D = " ";
      default:
        if (D <= " ")
          switch (E) {
            case He:
              a.setTagName(u.slice(e, l)), E = Ge;
              break;
            case y0:
              t = u.slice(e, l), E = re;
              break;
            case ne:
              var s = u.slice(e, l);
              n.warning('attribute "' + s + '" missed quot(")!!'), o(t, s, e);
            case oe:
              E = Ge;
              break;
          }
        else
          switch (E) {
            case re:
              a.tagName, (!oa.isHTML(i[""]) || !t.match(/^(?:disabled|checked|selected)$/i)) && n.warning('attribute "' + t + '" missed value!! "' + t + '" instead2!!'), o(t, t, e), e = l, E = y0;
              break;
            case oe:
              n.warning('attribute space is required"' + t + '"!!');
            case Ge:
              E = y0, e = l;
              break;
            case _e:
              E = ne, e = l;
              break;
            case Wa:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
    }
    l++;
  }
}
function J1(u, e, a) {
  for (var i = u.tagName, r = null, D = u.length; D--; ) {
    var n = u[D], o = n.qName, t = n.value, x = o.indexOf(":");
    if (x > 0)
      var s = n.prefix = o.slice(0, x), l = o.slice(x + 1), E = s === "xmlns" && l;
    else
      l = o, s = null, E = o === "xmlns" && "";
    n.localName = l, E !== !1 && (r == null && (r = {}, y3(a, a = {})), a[E] = r[E] = t, n.uri = oa.XMLNS, e.startPrefixMapping(E, t));
  }
  for (var D = u.length; D--; ) {
    n = u[D];
    var s = n.prefix;
    s && (s === "xml" && (n.uri = oa.XML), s !== "xmlns" && (n.uri = a[s || ""]));
  }
  var x = i.indexOf(":");
  x > 0 ? (s = u.prefix = i.slice(0, x), l = u.localName = i.slice(x + 1)) : (s = null, l = u.localName = i);
  var c = u.uri = a[s || ""];
  if (e.startElement(c, l, i, u), u.closed) {
    if (e.endElement(c, l, i), r)
      for (s in r)
        Object.prototype.hasOwnProperty.call(r, s) && e.endPrefixMapping(s);
  } else
    return u.currentNSMap = a, u.localNSMap = r, !0;
}
function Xm(u, e, a, i, r) {
  if (/^(?:script|textarea)$/i.test(a)) {
    var n = u.indexOf("</" + a + ">", e), o = u.substring(e + 1, n);
    if (/[&<]/.test(o))
      return /^script$/i.test(a) ? (r.characters(o, 0, o.length), n) : (o = o.replace(/&#?\w+;/g, i), r.characters(o, 0, o.length), n);
  }
  return e + 1;
}
function uF(u, e, a, i) {
  var r = i[a];
  return r == null && (r = u.lastIndexOf("</" + a + ">"), r < e && (r = u.lastIndexOf("</" + a)), i[a] = r), r < e;
}
function y3(u, e) {
  for (var a in u)
    Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
}
function eF(u, e, a, i) {
  var r = u.charAt(e + 2);
  switch (r) {
    case "-":
      if (u.charAt(e + 3) === "-") {
        var n = u.indexOf("-->", e + 4);
        return n > e ? (a.comment(u, e + 4, n - e - 4), n + 3) : (i.error("Unclosed comment"), -1);
      } else
        return -1;
    default:
      if (u.substr(e + 3, 6) == "CDATA[") {
        var n = u.indexOf("]]>", e + 9);
        return a.startCDATA(), a.characters(u, e + 9, n - e - 9), a.endCDATA(), n + 3;
      }
      var o = iF(u, e), t = o.length;
      if (t > 1 && /!doctype/i.test(o[0][0])) {
        var s = o[1][0], l = !1, E = !1;
        t > 3 && (/^public$/i.test(o[2][0]) ? (l = o[3][0], E = t > 4 && o[4][0]) : /^system$/i.test(o[2][0]) && (E = o[3][0]));
        var D = o[t - 1];
        return a.startDTD(s, l, E), a.endDTD(), D.index + D[0].length;
      }
  }
  return -1;
}
function aF(u, e, a) {
  var i = u.indexOf("?>", e);
  if (i) {
    var r = u.substring(e, i).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
    return r ? (r[0].length, a.processingInstruction(r[1], r[2]), i + 2) : -1;
  }
  return -1;
}
function f3() {
  this.attributeNames = {};
}
f3.prototype = {
  setTagName: function(u) {
    if (!I1.test(u))
      throw new Error("invalid tagName:" + u);
    this.tagName = u;
  },
  addValue: function(u, e, a) {
    if (!I1.test(u))
      throw new Error("invalid attribute:" + u);
    this.attributeNames[u] = this.length, this[this.length++] = { qName: u, value: e, offset: a };
  },
  length: 0,
  getLocalName: function(u) {
    return this[u].localName;
  },
  getLocator: function(u) {
    return this[u].locator;
  },
  getQName: function(u) {
    return this[u].qName;
  },
  getURI: function(u) {
    return this[u].uri;
  },
  getValue: function(u) {
    return this[u].value;
  }
  //	,getIndex:function(uri, localName)){
  //		if(localName){
  //
  //		}else{
  //			var qName = uri
  //		}
  //	},
  //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
  //	getType:function(uri,localName){}
  //	getType:function(i){},
};
function iF(u, e) {
  var a, i = [], r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  for (r.lastIndex = e, r.exec(u); a = r.exec(u); )
    if (i.push(a), a[1])
      return i;
}
Zo.XMLReader = B3;
Zo.ParseError = Be;
var rF = B0, nF = A0, $1 = A3, z3 = Zo, oF = nF.DOMImplementation, q1 = rF.NAMESPACE, tF = z3.ParseError, sF = z3.XMLReader;
function S3(u) {
  return u.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028]/g, `
`);
}
function M3(u) {
  this.options = u || { locator: {} };
}
M3.prototype.parseFromString = function(u, e) {
  var a = this.options, i = new sF(), r = a.domBuilder || new Sa(), n = a.errorHandler, o = a.locator, t = a.xmlns || {}, s = /\/x?html?$/.test(e), l = s ? $1.HTML_ENTITIES : $1.XML_ENTITIES;
  o && r.setDocumentLocator(o), i.errorHandler = lF(n, r, o), i.domBuilder = a.domBuilder || r, s && (t[""] = q1.HTML), t.xml = t.xml || q1.XML;
  var E = a.normalizeLineEndings || S3;
  return u && typeof u == "string" ? i.parse(
    E(u),
    t,
    l
  ) : i.errorHandler.error("invalid doc source"), r.doc;
};
function lF(u, e, a) {
  if (!u) {
    if (e instanceof Sa)
      return e;
    u = e;
  }
  var i = {}, r = u instanceof Function;
  a = a || {};
  function n(o) {
    var t = u[o];
    !t && r && (t = u.length == 2 ? function(s) {
      u(o, s);
    } : u), i[o] = t && function(s) {
      t("[xmldom " + o + "]	" + s + wn(a));
    } || function() {
    };
  }
  return n("warning"), n("error"), n("fatalError"), i;
}
function Sa() {
  this.cdata = !1;
}
function te(u, e) {
  e.lineNumber = u.lineNumber, e.columnNumber = u.columnNumber;
}
Sa.prototype = {
  startDocument: function() {
    this.doc = new oF().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
  },
  startElement: function(u, e, a, i) {
    var r = this.doc, n = r.createElementNS(u, a || e), o = i.length;
    Ua(this, n), this.currentElement = n, this.locator && te(this.locator, n);
    for (var t = 0; t < o; t++) {
      var u = i.getURI(t), s = i.getValue(t), a = i.getQName(t), l = r.createAttributeNS(u, a);
      this.locator && te(i.getLocator(t), l), l.value = l.nodeValue = s, n.setAttributeNode(l);
    }
  },
  endElement: function(u, e, a) {
    var i = this.currentElement;
    i.tagName, this.currentElement = i.parentNode;
  },
  startPrefixMapping: function(u, e) {
  },
  endPrefixMapping: function(u) {
  },
  processingInstruction: function(u, e) {
    var a = this.doc.createProcessingInstruction(u, e);
    this.locator && te(this.locator, a), Ua(this, a);
  },
  ignorableWhitespace: function(u, e, a) {
  },
  characters: function(u, e, a) {
    if (u = W1.apply(this, arguments), u) {
      if (this.cdata)
        var i = this.doc.createCDATASection(u);
      else
        var i = this.doc.createTextNode(u);
      this.currentElement ? this.currentElement.appendChild(i) : /^\s*$/.test(u) && this.doc.appendChild(i), this.locator && te(this.locator, i);
    }
  },
  skippedEntity: function(u) {
  },
  endDocument: function() {
    this.doc.normalize();
  },
  setDocumentLocator: function(u) {
    (this.locator = u) && (u.lineNumber = 0);
  },
  //LexicalHandler
  comment: function(u, e, a) {
    u = W1.apply(this, arguments);
    var i = this.doc.createComment(u);
    this.locator && te(this.locator, i), Ua(this, i);
  },
  startCDATA: function() {
    this.cdata = !0;
  },
  endCDATA: function() {
    this.cdata = !1;
  },
  startDTD: function(u, e, a) {
    var i = this.doc.implementation;
    if (i && i.createDocumentType) {
      var r = i.createDocumentType(u, e, a);
      this.locator && te(this.locator, r), Ua(this, r), this.doc.doctype = r;
    }
  },
  /**
   * @see org.xml.sax.ErrorHandler
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
   */
  warning: function(u) {
    console.warn("[xmldom warning]	" + u, wn(this.locator));
  },
  error: function(u) {
    console.error("[xmldom error]	" + u, wn(this.locator));
  },
  fatalError: function(u) {
    throw new tF(u, this.locator);
  }
};
function wn(u) {
  if (u)
    return `
@` + (u.systemId || "") + "#[line:" + u.lineNumber + ",col:" + u.columnNumber + "]";
}
function W1(u, e, a) {
  return typeof u == "string" ? u.substr(e, a) : u.length >= e + a || e ? new java.lang.String(u, e, a) + "" : u;
}
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(u) {
  Sa.prototype[u] = function() {
    return null;
  };
});
function Ua(u, e) {
  u.currentElement ? u.currentElement.appendChild(e) : u.doc.appendChild(e);
}
dr.__DOMHandler = Sa;
dr.normalizeLineEndings = S3;
dr.DOMParser = M3;
var j3 = A0;
Dr.DOMImplementation = j3.DOMImplementation;
Dr.XMLSerializer = j3.XMLSerializer;
Dr.DOMParser = dr.DOMParser;
var mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.parseJson = void 0;
function EF(u) {
  try {
    var e = JSON.parse(u);
    return e;
  } catch {
    return null;
  }
}
mr.parseJson = EF;
var Fr = {};
Object.defineProperty(Fr, "__esModule", { value: !0 });
Fr.bufferFrom = void 0;
function DF(u) {
  var e = encodeURIComponent(u), a = e.replace(/%([0-9A-F]{2})/g, function(r, n) {
    return String.fromCharCode("0x" + n);
  }), i = new Uint8Array(a.length);
  return Array.prototype.forEach.call(a, function(r, n) {
    i[n] = r.charCodeAt(0);
  }), i;
}
Fr.bufferFrom = DF;
var kr = {}, Ma = {};
Object.defineProperty(Ma, "__esModule", { value: !0 });
Ma.EventPolyfill = void 0;
var xF = (
  /** @class */
  function() {
    function u(e, a) {
      this.AT_TARGET = 0, this.BUBBLING_PHASE = 0, this.CAPTURING_PHASE = 0, this.NONE = 0, this.type = "", this.srcElement = null, this.currentTarget = null, this.eventPhase = 0, this.isTrusted = !0, this.composed = !1, this.cancelable = !0, this.defaultPrevented = !1, this.bubbles = !0, this.lengthComputable = !0, this.loaded = 0, this.total = 0, this.cancelBubble = !1, this.returnValue = !0, this.type = e, this.target = (a == null ? void 0 : a.target) || null, this.currentTarget = (a == null ? void 0 : a.currentTarget) || null, this.timeStamp = Date.now();
    }
    return u.prototype.composedPath = function() {
      return [];
    }, u.prototype.initEvent = function(e, a, i) {
      this.type = e, this.bubbles = !!a, this.cancelable = !!i;
    }, u.prototype.preventDefault = function() {
      this.defaultPrevented = !0;
    }, u.prototype.stopPropagation = function() {
    }, u.prototype.stopImmediatePropagation = function() {
    }, u;
  }()
);
Ma.EventPolyfill = xF;
var pr = {}, cF = y && y.__extends || function() {
  var u = function(e, a) {
    return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
      i.__proto__ = r;
    } || function(i, r) {
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
    }, u(e, a);
  };
  return function(e, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    u(e, a);
    function i() {
      this.constructor = e;
    }
    e.prototype = a === null ? Object.create(a) : (i.prototype = a.prototype, new i());
  };
}();
Object.defineProperty(pr, "__esModule", { value: !0 });
pr.ProgressEventPolyfill = void 0;
var dF = Ma, mF = (
  /** @class */
  function(u) {
    cF(e, u);
    function e(a, i) {
      var r = u.call(this, a) || this;
      return r.lengthComputable = (i == null ? void 0 : i.lengthComputable) || !1, r.composed = (i == null ? void 0 : i.composed) || !1, r.loaded = (i == null ? void 0 : i.loaded) || 0, r.total = (i == null ? void 0 : i.total) || 0, r;
    }
    return e;
  }(dF.EventPolyfill)
);
pr.ProgressEventPolyfill = mF;
Object.defineProperty(kr, "__esModule", { value: !0 });
kr.createEvent = void 0;
var FF = Ma, kF = pr, pF = typeof ProgressEvent < "u";
function hF(u, e, a) {
  var i = [
    "error",
    "progress",
    "loadstart",
    "loadend",
    "load",
    "timeout",
    "abort"
  ], r = pF ? ProgressEvent : kF.ProgressEventPolyfill, n = i.includes(e) ? new r(e, {
    lengthComputable: !0,
    loaded: (a == null ? void 0 : a.loaded) || 0,
    total: (a == null ? void 0 : a.total) || 0
  }) : new FF.EventPolyfill(e, {
    target: u,
    currentTarget: u
  });
  return n;
}
kr.createEvent = hF;
var U1 = y && y.__awaiter || function(u, e, a, i) {
  function r(n) {
    return n instanceof a ? n : new a(function(o) {
      o(n);
    });
  }
  return new (a || (a = Promise))(function(n, o) {
    function t(E) {
      try {
        l(i.next(E));
      } catch (D) {
        o(D);
      }
    }
    function s(E) {
      try {
        l(i.throw(E));
      } catch (D) {
        o(D);
      }
    }
    function l(E) {
      E.done ? n(E.value) : r(E.value).then(t, s);
    }
    l((i = i.apply(u, e || [])).next());
  });
}, Z1 = y && y.__generator || function(u, e) {
  var a = { label: 0, sent: function() {
    if (n[0] & 1)
      throw n[1];
    return n[1];
  }, trys: [], ops: [] }, i, r, n, o;
  return o = { next: t(0), throw: t(1), return: t(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function t(l) {
    return function(E) {
      return s([l, E]);
    };
  }
  function s(l) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; a; )
      try {
        if (i = 1, r && (n = l[0] & 2 ? r.return : l[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, l[1])).done)
          return n;
        switch (r = 0, n && (l = [l[0] & 2, n.value]), l[0]) {
          case 0:
          case 1:
            n = l;
            break;
          case 4:
            return a.label++, { value: l[1], done: !1 };
          case 5:
            a.label++, r = l[1], l = [0];
            continue;
          case 7:
            l = a.ops.pop(), a.trys.pop();
            continue;
          default:
            if (n = a.trys, !(n = n.length > 0 && n[n.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              a = 0;
              continue;
            }
            if (l[0] === 3 && (!n || l[1] > n[0] && l[1] < n[3])) {
              a.label = l[1];
              break;
            }
            if (l[0] === 6 && a.label < n[1]) {
              a.label = n[1], n = l;
              break;
            }
            if (n && a.label < n[2]) {
              a.label = n[2], a.ops.push(l);
              break;
            }
            n[2] && a.ops.pop(), a.trys.pop();
            continue;
        }
        l = e.call(u, a);
      } catch (E) {
        l = [6, E], r = 0;
      } finally {
        i = n = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}, Y1 = y && y.__values || function(u) {
  var e = typeof Symbol == "function" && Symbol.iterator, a = e && u[e], i = 0;
  if (a)
    return a.call(u);
  if (u && typeof u.length == "number")
    return {
      next: function() {
        return u && i >= u.length && (u = void 0), { value: u && u[i++], done: !u };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Za = y && y.__read || function(u, e) {
  var a = typeof Symbol == "function" && u[Symbol.iterator];
  if (!a)
    return u;
  var i = a.call(u), r, n = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; )
      n.push(r.value);
  } catch (t) {
    o = { error: t };
  } finally {
    try {
      r && !r.done && (a = i.return) && a.call(i);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return n;
};
Object.defineProperty(Er, "__esModule", { value: !0 });
Er.createXMLHttpRequestOverride = void 0;
var gF = b0, f0 = la, CF = Dr, vF = mr, bF = Pe, Q1 = Fr, X1 = kr, AF = K0, BF = Uu, yF = X0, fF = function(u) {
  var e, a = u.XMLHttpRequest, i = u.emitter, r = u.log;
  return e = /** @class */
  function() {
    function n() {
      this._events = [], this.log = r, this.UNSENT = 0, this.OPENED = 1, this.HEADERS_RECEIVED = 2, this.LOADING = 3, this.DONE = 4, this.onreadystatechange = null, this.onabort = null, this.onerror = null, this.onload = null, this.onloadend = null, this.onloadstart = null, this.onprogress = null, this.ontimeout = null, this.url = "", this.method = "GET", this.readyState = this.UNSENT, this.withCredentials = !1, this.status = 200, this.statusText = "OK", this.response = "", this.responseType = "text", this.responseText = "", this.responseXML = null, this.responseURL = "", this.upload = {}, this.timeout = 0, this._requestHeaders = new f0.Headers(), this._responseHeaders = new f0.Headers();
    }
    return n.prototype.setReadyState = function(o) {
      o !== this.readyState && (this.log("readyState change %d -> %d", this.readyState, o), this.readyState = o, o !== this.UNSENT && (this.log("triggering readystate change..."), this.trigger("readystatechange")));
    }, n.prototype.trigger = function(o, t) {
      var s, l;
      this.log('trigger "%s" (%d)', o, this.readyState), this.log('resolve listener for event "%s"', o);
      var E = this["on" + o];
      E == null || E.call(this, X1.createEvent(this, o, t));
      try {
        for (var D = Y1(this._events), x = D.next(); !x.done; x = D.next()) {
          var c = x.value;
          c.name === o && (r('calling mock event listener "%s" (%d)', o, this.readyState), c.listener.call(this, X1.createEvent(this, o, t)));
        }
      } catch (d) {
        s = { error: d };
      } finally {
        try {
          x && !x.done && (l = D.return) && l.call(D);
        } finally {
          if (s)
            throw s.error;
        }
      }
      return this;
    }, n.prototype.reset = function() {
      this.log("reset"), this.setReadyState(this.UNSENT), this.status = 200, this.statusText = "OK", this.response = null, this.responseText = null, this.responseXML = null, this._requestHeaders = new f0.Headers(), this._responseHeaders = new f0.Headers();
    }, n.prototype.open = function(o, t, s, l, E) {
      return s === void 0 && (s = !0), U1(this, void 0, void 0, function() {
        return Z1(this, function(D) {
          return this.log = this.log.extend("request " + o + " " + t), this.log("open", { method: o, url: t, async: s, user: l, password: E }), this.reset(), this.setReadyState(this.OPENED), typeof t > "u" ? (this.url = o, this.method = "GET") : (this.url = t, this.method = o, this.async = s, this.user = l, this.password = E), [
            2
            /*return*/
          ];
        });
      });
    }, n.prototype.send = function(o) {
      var t = this;
      this.log("send %s %s", this.method, this.url);
      var s;
      typeof o == "string" ? s = BF.encodeBuffer(o) : s = o || new ArrayBuffer(0);
      var l;
      try {
        l = new URL(this.url);
      } catch {
        l = new URL(this.url, window.location.href);
      }
      this.log("request headers", this._requestHeaders);
      var E = new AF.IsomorphicRequest(l, {
        body: s,
        method: this.method,
        headers: this._requestHeaders,
        credentials: this.withCredentials ? "include" : "omit"
      }), D = new yF.InteractiveIsomorphicRequest(E);
      this.log('emitting the "request" event for %d listener(s)...', i.listenerCount("request")), i.emit("request", D), this.log("awaiting mocked response..."), Promise.resolve(gF.until(function() {
        return U1(t, void 0, void 0, function() {
          var x, c;
          return Z1(this, function(d) {
            switch (d.label) {
              case 0:
                return [4, i.untilIdle("request", function(F) {
                  var k = Za(F.args, 1), g = k[0];
                  return g.id === D.id;
                })];
              case 1:
                return d.sent(), this.log("all request listeners have been resolved!"), [4, D.respondWith.invoked()];
              case 2:
                return x = Za.apply(void 0, [d.sent(), 1]), c = x[0], this.log("event.respondWith called with:", c), [2, c];
            }
          });
        });
      })).then(function(x) {
        var c, d, F = Za(x, 2), k = F[0], g = F[1];
        if (k) {
          t.log("middleware function threw an exception!", k), t.trigger("error"), t.abort();
          return;
        }
        if (g) {
          if (t.log("received mocked response", g), t.trigger("loadstart"), t.status = (c = g.status) !== null && c !== void 0 ? c : 200, t.statusText = g.statusText || "OK", t._responseHeaders = g.headers ? f0.objectToHeaders(g.headers) : new f0.Headers(), t.log("set response status", t.status, t.statusText), t.log("set response headers", t._responseHeaders), t.setReadyState(t.HEADERS_RECEIVED), t.log("response type", t.responseType), t.response = t.getResponseBody(g.body), t.responseURL = t.url, t.responseText = g.body || "", t.responseXML = t.getResponseXML(), t.log("set response body", t.response), g.body && t.response) {
            t.setReadyState(t.LOADING);
            var M = Q1.bufferFrom(g.body);
            t.trigger("progress", {
              loaded: M.length,
              total: M.length
            });
          }
          t.setReadyState(t.DONE), t.trigger("load"), t.trigger("loadend"), i.emit("response", E, bF.toIsoResponse(g));
        } else {
          t.log("no mocked response received!");
          var A = new a();
          t.log("opening an original request %s %s", t.method, t.url), A.open(t.method, t.url, (d = t.async) !== null && d !== void 0 ? d : !0, t.user, t.password), A.addEventListener("load", function() {
            t.log('original "onload"'), t.status = A.status, t.statusText = A.statusText, t.responseURL = A.responseURL, t.responseType = A.responseType, t.response = A.response, t.responseText = A.responseText, t.responseXML = A.responseXML, t.log("set mock request readyState to DONE"), t.setReadyState(t.DONE), t.log("received original response", t.status, t.statusText), t.log("original response body:", t.response);
            var v = A.getAllResponseHeaders();
            t.log(`original response headers:
`, v), t._responseHeaders = f0.stringToHeaders(v), t.log("original response headers (normalized)", t._responseHeaders), t.log("original response finished"), i.emit("response", E, {
              status: A.status,
              statusText: A.statusText,
              headers: t._responseHeaders,
              body: A.response
            });
          }), t.propagateCallbacks(A), t.propagateListeners(A), t.propagateHeaders(A, t._requestHeaders), t.async && (A.timeout = t.timeout), t.log("send", o), A.send(o);
        }
      });
    }, n.prototype.abort = function() {
      this.log("abort"), this.readyState > this.UNSENT && this.readyState < this.DONE && (this.setReadyState(this.UNSENT), this.trigger("abort"));
    }, n.prototype.dispatchEvent = function() {
      return !1;
    }, n.prototype.setRequestHeader = function(o, t) {
      this.log('set request header "%s" to "%s"', o, t), this._requestHeaders.append(o, t);
    }, n.prototype.getResponseHeader = function(o) {
      if (this.log('get response header "%s"', o), this.readyState < this.HEADERS_RECEIVED)
        return this.log("cannot return a header: headers not received (state: %s)", this.readyState), null;
      var t = this._responseHeaders.get(o);
      return this.log('resolved response header "%s" to "%s"', o, t, this._responseHeaders), t;
    }, n.prototype.getAllResponseHeaders = function() {
      return this.log("get all response headers"), this.readyState < this.HEADERS_RECEIVED ? (this.log("cannot return headers: headers not received (state: %s)", this.readyState), "") : f0.headersToString(this._responseHeaders);
    }, n.prototype.addEventListener = function(o, t) {
      this.log("addEventListener", o, t), this._events.push({
        name: o,
        listener: t
      });
    }, n.prototype.removeEventListener = function(o, t) {
      this.log("removeEventListener", o, t), this._events = this._events.filter(function(s) {
        return s.name !== o && s.listener !== t;
      });
    }, n.prototype.overrideMimeType = function() {
    }, n.prototype.getResponseBody = function(o) {
      var t = o ?? "";
      switch (this.log("coerced response body to", t), this.responseType) {
        case "json":
          return this.log("resolving response body as JSON"), vF.parseJson(t);
        case "blob": {
          var s = this.getResponseHeader("content-type") || "text/plain";
          return this.log("resolving response body as Blob", { type: s }), new Blob([t], {
            type: s
          });
        }
        case "arraybuffer": {
          this.log("resolving response body as ArrayBuffer");
          var l = Q1.bufferFrom(t);
          return l;
        }
        default:
          return t;
      }
    }, n.prototype.getResponseXML = function() {
      var o = this.getResponseHeader("Content-Type");
      return o === "application/xml" || o === "text/xml" ? new CF.DOMParser().parseFromString(this.responseText, o) : null;
    }, n.prototype.propagateCallbacks = function(o) {
      var t, s;
      this.log("propagating request callbacks to the original request");
      var l = [
        "abort",
        "onerror",
        "ontimeout",
        "onload",
        "onloadstart",
        "onloadend",
        "onprogress",
        "onreadystatechange"
      ];
      try {
        for (var E = Y1(l), D = E.next(); !D.done; D = E.next()) {
          var x = D.value, c = this[x];
          c && (o[x] = this[x], this.log('propagated the "%s" callback', x, c));
        }
      } catch (d) {
        t = { error: d };
      } finally {
        try {
          D && !D.done && (s = E.return) && s.call(E);
        } finally {
          if (t)
            throw t.error;
        }
      }
      o.onabort = this.abort, o.onerror = this.onerror, o.ontimeout = this.ontimeout, o.onload = this.onload, o.onloadstart = this.onloadstart, o.onloadend = this.onloadend, o.onprogress = this.onprogress, o.onreadystatechange = this.onreadystatechange;
    }, n.prototype.propagateListeners = function(o) {
      this.log("propagating request listeners (%d) to the original request", this._events.length, this._events), this._events.forEach(function(t) {
        var s = t.name, l = t.listener;
        o.addEventListener(s, l);
      });
    }, n.prototype.propagateHeaders = function(o, t) {
      var s = this;
      this.log("propagating request headers to the original request", t), Object.entries(t.raw()).forEach(function(l) {
        var E = Za(l, 2), D = E[0], x = E[1];
        s.log('setting "%s" (%s) header on the original request', D, x), o.setRequestHeader(D, x);
      });
    }, n;
  }(), /* Request state */
  e.UNSENT = 0, e.OPENED = 1, e.HEADERS_RECEIVED = 2, e.LOADING = 3, e.DONE = 4, e;
};
Er.createXMLHttpRequestOverride = fF;
var zF = y && y.__extends || function() {
  var u = function(e, a) {
    return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
      i.__proto__ = r;
    } || function(i, r) {
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
    }, u(e, a);
  };
  return function(e, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    u(e, a);
    function i() {
      this.constructor = e;
    }
    e.prototype = a === null ? Object.create(a) : (i.prototype = a.prototype, new i());
  };
}();
Object.defineProperty(lr, "__esModule", { value: !0 });
var P3 = lr.XMLHttpRequestInterceptor = void 0, SF = Da, sn = Q0, MF = fe, jF = Er, PF = (
  /** @class */
  function(u) {
    zF(e, u);
    function e() {
      return u.call(this, e.symbol) || this;
    }
    return e.prototype.checkEnvironment = function() {
      return typeof window < "u" && typeof window.XMLHttpRequest < "u";
    }, e.prototype.setup = function() {
      var a = this.log.extend("setup");
      a('patching "XMLHttpRequest" module...');
      var i = window.XMLHttpRequest;
      SF.invariant(!i[sn.IS_PATCHED_MODULE], 'Failed to patch the "XMLHttpRequest" module: already patched.'), window.XMLHttpRequest = jF.createXMLHttpRequestOverride({
        XMLHttpRequest: i,
        emitter: this.emitter,
        log: this.log
      }), a('native "XMLHttpRequest" module patched!', window.XMLHttpRequest.name), Object.defineProperty(window.XMLHttpRequest, sn.IS_PATCHED_MODULE, {
        enumerable: !0,
        configurable: !0,
        value: !0
      }), this.subscriptions.push(function() {
        Object.defineProperty(window.XMLHttpRequest, sn.IS_PATCHED_MODULE, {
          value: void 0
        }), window.XMLHttpRequest = i, a('native "XMLHttpRequest" module restored!', window.XMLHttpRequest.name);
      });
    }, e.symbol = Symbol("xhr"), e;
  }(MF.Interceptor)
);
P3 = lr.XMLHttpRequestInterceptor = PF;
var hr = {}, TF = y && y.__extends || function() {
  var u = function(e, a) {
    return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
      i.__proto__ = r;
    } || function(i, r) {
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
    }, u(e, a);
  };
  return function(e, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    u(e, a);
    function i() {
      this.constructor = e;
    }
    e.prototype = a === null ? Object.create(a) : (i.prototype = a.prototype, new i());
  };
}(), yi = y && y.__assign || function() {
  return yi = Object.assign || function(u) {
    for (var e, a = 1, i = arguments.length; a < i; a++) {
      e = arguments[a];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (u[r] = e[r]);
    }
    return u;
  }, yi.apply(this, arguments);
}, ni = y && y.__awaiter || function(u, e, a, i) {
  function r(n) {
    return n instanceof a ? n : new a(function(o) {
      o(n);
    });
  }
  return new (a || (a = Promise))(function(n, o) {
    function t(E) {
      try {
        l(i.next(E));
      } catch (D) {
        o(D);
      }
    }
    function s(E) {
      try {
        l(i.throw(E));
      } catch (D) {
        o(D);
      }
    }
    function l(E) {
      E.done ? n(E.value) : r(E.value).then(t, s);
    }
    l((i = i.apply(u, e || [])).next());
  });
}, oi = y && y.__generator || function(u, e) {
  var a = { label: 0, sent: function() {
    if (n[0] & 1)
      throw n[1];
    return n[1];
  }, trys: [], ops: [] }, i, r, n, o;
  return o = { next: t(0), throw: t(1), return: t(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function t(l) {
    return function(E) {
      return s([l, E]);
    };
  }
  function s(l) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; a; )
      try {
        if (i = 1, r && (n = l[0] & 2 ? r.return : l[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, l[1])).done)
          return n;
        switch (r = 0, n && (l = [l[0] & 2, n.value]), l[0]) {
          case 0:
          case 1:
            n = l;
            break;
          case 4:
            return a.label++, { value: l[1], done: !1 };
          case 5:
            a.label++, r = l[1], l = [0];
            continue;
          case 7:
            l = a.ops.pop(), a.trys.pop();
            continue;
          default:
            if (n = a.trys, !(n = n.length > 0 && n[n.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              a = 0;
              continue;
            }
            if (l[0] === 3 && (!n || l[1] > n[0] && l[1] < n[3])) {
              a.label = l[1];
              break;
            }
            if (l[0] === 6 && a.label < n[1]) {
              a.label = n[1], n = l;
              break;
            }
            if (n && a.label < n[2]) {
              a.label = n[2], a.ops.push(l);
              break;
            }
            n[2] && a.ops.pop(), a.trys.pop();
            continue;
        }
        l = e.call(u, a);
      } catch (E) {
        l = [6, E], r = 0;
      } finally {
        i = n = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}, ln = y && y.__read || function(u, e) {
  var a = typeof Symbol == "function" && u[Symbol.iterator];
  if (!a)
    return u;
  var i = a.call(u), r, n = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; )
      n.push(r.value);
  } catch (t) {
    o = { error: t };
  } finally {
    try {
      r && !r.done && (a = i.return) && a.call(i);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return n;
};
Object.defineProperty(hr, "__esModule", { value: !0 });
var T3 = hr.FetchInterceptor = void 0, fi = la, wF = Da, NF = b0, LF = K0, En = Q0, KF = fe, RF = Pe, HF = X0, _F = (
  /** @class */
  function(u) {
    TF(e, u);
    function e() {
      return u.call(this, e.symbol) || this;
    }
    return e.prototype.checkEnvironment = function() {
      return typeof globalThis < "u" && typeof globalThis.fetch < "u";
    }, e.prototype.setup = function() {
      var a = this, i = globalThis.fetch;
      wF.invariant(!i[En.IS_PATCHED_MODULE], 'Failed to patch the "fetch" module: already patched.'), globalThis.fetch = function(r, n) {
        return ni(a, void 0, void 0, function() {
          var o, t, s, l, E, D, x, c, d, F, k, g, M, A = this;
          return oi(this, function(v) {
            switch (v.label) {
              case 0:
                return o = new Request(r, n), t = typeof r == "string" ? r : r.url, s = o.method, this.log("[%s] %s", s, t), [4, o.clone().arrayBuffer()];
              case 1:
                return l = v.sent(), E = new URL(t, typeof location < "u" ? location.origin : void 0), D = new LF.IsomorphicRequest(E, {
                  body: l,
                  method: s,
                  headers: new fi.Headers(o.headers),
                  credentials: o.credentials
                }), x = new HF.InteractiveIsomorphicRequest(D), this.log("isomorphic request", x), this.log('emitting the "request" event for %d listener(s)...', this.emitter.listenerCount("request")), this.emitter.emit("request", x), this.log("awaiting for the mocked response..."), [4, NF.until(function() {
                  return ni(A, void 0, void 0, function() {
                    var T, R;
                    return oi(this, function(O) {
                      switch (O.label) {
                        case 0:
                          return [4, this.emitter.untilIdle("request", function(V) {
                            var b = ln(V.args, 1), P = b[0];
                            return P.id === x.id;
                          })];
                        case 1:
                          return O.sent(), this.log("all request listeners have been resolved!"), [4, x.respondWith.invoked()];
                        case 2:
                          return T = ln.apply(void 0, [O.sent(), 1]), R = T[0], this.log("event.respondWith called with:", R), [2, R];
                      }
                    });
                  });
                })];
              case 2:
                return c = ln.apply(void 0, [v.sent(), 2]), d = c[0], F = c[1], d ? (console.error(o.method + " " + o.url + " net::ERR_FAILED"), k = Object.assign(new TypeError("Failed to fetch"), {
                  cause: d
                }), [2, Promise.reject(k)]) : F ? (this.log("received mocked response:", F), g = RF.toIsoResponse(F), this.log("derived isomorphic response:", g), this.emitter.emit("response", x, g), M = new Response(F.body, yi(yi({}, g), {
                  // `Response.headers` cannot be instantiated with the `Headers` polyfill.
                  // Apparently, it halts if the `Headers` class contains unknown properties
                  // (i.e. the internal `Headers.map`).
                  headers: fi.flattenHeadersObject(F.headers || {})
                })), Object.defineProperty(M, "url", {
                  writable: !1,
                  enumerable: !0,
                  configurable: !1,
                  value: x.url.href
                }), [2, M]) : (this.log("no mocked response received!"), [2, i(o).then(function(T) {
                  return ni(A, void 0, void 0, function() {
                    var R, O, V, b;
                    return oi(this, function(P) {
                      switch (P.label) {
                        case 0:
                          return R = T.clone(), this.log("original fetch performed", R), V = (O = this.emitter).emit, b = [
                            "response",
                            x
                          ], [4, GF(R)];
                        case 1:
                          return V.apply(O, b.concat([P.sent()])), [2, T];
                      }
                    });
                  });
                })]);
            }
          });
        });
      }, Object.defineProperty(globalThis.fetch, En.IS_PATCHED_MODULE, {
        enumerable: !0,
        configurable: !0,
        value: !0
      }), this.subscriptions.push(function() {
        Object.defineProperty(globalThis.fetch, En.IS_PATCHED_MODULE, {
          value: void 0
        }), globalThis.fetch = i, a.log('restored native "globalThis.fetch"!', globalThis.fetch.name);
      });
    }, e.symbol = Symbol("fetch"), e;
  }(KF.Interceptor)
);
T3 = hr.FetchInterceptor = _F;
function GF(u) {
  return ni(this, void 0, void 0, function() {
    var e;
    return oi(this, function(a) {
      switch (a.label) {
        case 0:
          return e = {
            status: u.status,
            statusText: u.statusText,
            headers: fi.objectToHeaders(fi.headersToObject(u.headers))
          }, [4, u.text()];
        case 1:
          return [2, (e.body = a.sent(), e)];
      }
    });
  });
}
var VF = Object.create, w3 = Object.defineProperty, IF = Object.getOwnPropertyDescriptor, OF = Object.getOwnPropertyNames, JF = Object.getPrototypeOf, $F = Object.prototype.hasOwnProperty, qF = /* @__PURE__ */ ((u) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(u, {
  get: (e, a) => (typeof require < "u" ? require : e)[a]
}) : u)(function(u) {
  if (typeof require < "u")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + u + '" is not supported');
}), WF = (u, e, a, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let r of OF(e))
      !$F.call(u, r) && r !== a && w3(u, r, { get: () => e[r], enumerable: !(i = IF(e, r)) || i.enumerable });
  return u;
}, UF = (u, e, a) => (a = u != null ? VF(JF(u)) : {}, WF(
  e || !u || !u.__esModule ? w3(a, "default", { value: u, enumerable: !0 }) : a,
  u
)), ZF = MD, YF = "[MSW]";
function Yo(u, ...e) {
  const a = Ze(u, ...e);
  return `${YF} ${a}`;
}
function QF(u, ...e) {
  console.warn(Yo(u, ...e));
}
function XF(u, ...e) {
  console.error(Yo(u, ...e));
}
var Su = {
  formatMessage: Yo,
  warn: QF,
  error: XF
};
function uk(u, e) {
  const a = u.emit;
  a._isPiped || (u.emit = function(i, ...r) {
    return e.emit(i, ...r), a.call(this, i, ...r);
  }, u.emit._isPiped = !0);
}
function u4(u) {
  const e = [...u];
  return Object.freeze(e), e;
}
var ek = class {
  constructor(...e) {
    this.validateHandlers(...e), this.initialHandlers = u4(e), this.currentHandlers = [...e], this.emitter = new xi.Emitter(), this.publicEmitter = new xi.Emitter(), uk(this.emitter, this.publicEmitter), this.events = this.createLifeCycleEvents();
  }
  validateHandlers(...e) {
    for (const a of e)
      M0(
        !Array.isArray(a),
        Su.formatMessage(
          'Failed to construct "%s" given an Array of request handlers. Make sure you spread the request handlers when calling the respective setup function.'
        ),
        this.constructor.name
      );
  }
  dispose() {
    this.emitter.removeAllListeners(), this.publicEmitter.removeAllListeners();
  }
  use(...e) {
    this.currentHandlers.unshift(...e);
  }
  restoreHandlers() {
    this.currentHandlers.forEach((e) => {
      e.markAsSkipped(!1);
    });
  }
  resetHandlers(...e) {
    this.currentHandlers = e.length > 0 ? [...e] : [...this.initialHandlers];
  }
  listHandlers() {
    return u4(this.currentHandlers);
  }
  createLifeCycleEvents() {
    return {
      on: (...e) => this.publicEmitter.on(...e),
      removeListener: (...e) => this.publicEmitter.removeListener(...e),
      removeAllListeners: (...e) => this.publicEmitter.removeAllListeners(...e)
    };
  }
};
function e4(u) {
  return u != null && typeof u == "object" && !Array.isArray(u);
}
function Te(u, e) {
  return Object.entries(e).reduce((a, [i, r]) => {
    const n = a[i];
    return Array.isArray(n) && Array.isArray(r) ? (a[i] = n.concat(r), a) : e4(n) && e4(r) ? (a[i] = Te(n, r), a) : (a[i] = r, a);
  }, Object.assign({}, u));
}
function a4() {
  return ns(document.cookie);
}
function ak(u) {
  if (typeof document > "u" || typeof location > "u")
    return {};
  switch (u.credentials) {
    case "same-origin":
      return location.origin === u.url.origin ? a4() : {};
    case "include":
      return a4();
    default:
      return {};
  }
}
function w0(u) {
  try {
    return JSON.parse(u);
  } catch {
    return;
  }
}
function ik(u) {
  var e, a;
  const i = ls(u), r = i.get("content-type") || "text/plain", n = i.get("content-disposition");
  if (!n)
    throw new Error('"Content-Disposition" header is required.');
  const o = n.split(";").reduce((l, E) => {
    const [D, ...x] = E.trim().split("=");
    return l[D] = x.join("="), l;
  }, {}), t = (e = o.name) == null ? void 0 : e.slice(1, -1), s = (a = o.filename) == null ? void 0 : a.slice(1, -1);
  return {
    name: t,
    filename: s,
    contentType: r
  };
}
function rk(u, e) {
  const a = e == null ? void 0 : e.get("content-type");
  if (!a)
    return;
  const [, ...i] = a.split(/; */), r = i.filter((s) => s.startsWith("boundary=")).map((s) => s.replace(/^boundary=/, ""))[0];
  if (!r)
    return;
  const n = new RegExp(`--+${r}`), o = u.split(n).filter((s) => s.startsWith(`\r
`) && s.endsWith(`\r
`)).map((s) => s.trimStart().replace(/\r\n$/, ""));
  if (!o.length)
    return;
  const t = {};
  try {
    for (const s of o) {
      const [l, ...E] = s.split(`\r
\r
`), D = E.join(`\r
\r
`), { contentType: x, filename: c, name: d } = ik(l), F = c === void 0 ? D : new File([D], c, { type: x }), k = t[d];
      k === void 0 ? t[d] = F : Array.isArray(k) ? t[d] = [...k, F] : t[d] = [k, F];
    }
    return t;
  } catch {
    return;
  }
}
function N3(u, e) {
  var a;
  if (!u)
    return u;
  const i = ((a = e == null ? void 0 : e.get("content-type")) == null ? void 0 : a.toLowerCase()) || "";
  return i.startsWith("multipart/form-data") && typeof u != "object" ? rk(u.toString(), e) || u : i.includes("json") && typeof u != "object" && w0(u.toString()) || u;
}
function Qo(u, e) {
  return u.toLowerCase() === e.toLowerCase();
}
var Xo = class extends F0.IsomorphicRequest {
  constructor(e, a = {}) {
    super(e, a), a.id && (this.id = a.id), this.cache = a.cache || "default", this.destination = a.destination || "", this.integrity = a.integrity || "", this.keepalive = a.keepalive || !1, this.mode = a.mode || "cors", this.priority = a.priority || "auto", this.redirect = a.redirect || "follow", this.referrer = a.referrer || "", this.referrerPolicy = a.referrerPolicy || "no-referrer", this.cookies = a.cookies || this.getCookies();
  }
  get body() {
    const e = as(this._body), a = N3(e, this.headers);
    if (!(Qo(this.method, "GET") && a === ""))
      return a;
  }
  passthrough() {
    return {
      status: 101,
      statusText: "Continue",
      headers: new R0(),
      body: null,
      passthrough: !0,
      once: !1
    };
  }
  getCookies() {
    var e;
    const a = this.headers.get("cookie"), i = a ? ns(a) : {};
    W0.store.hydrate();
    const r = Array.from(
      (e = W0.store.get({ ...this, url: this.url.href })) == null ? void 0 : e.entries()
    ).reduce((t, [s, { value: l }]) => Object.assign(t, { [s.trim()]: l }), {}), o = {
      ...ak(this),
      ...r
    };
    for (const [t, s] of Object.entries(o))
      this.headers.append("cookie", `${t}=${s}`);
    return {
      ...o,
      ...i
    };
  }
}, nk = async (u, e, a) => {
  const i = e.filter((n) => n.test(u, a));
  if (i.length === 0)
    return {
      handler: void 0,
      response: void 0
    };
  const r = await i.reduce(async (n, o) => {
    const t = await n;
    if (t != null && t.response)
      return n;
    const s = await o.run(u, a);
    return s === null || s.handler.shouldSkip ? null : s.response ? (s.response.once && o.markAsSkipped(!0), s) : {
      request: s.request,
      handler: s.handler,
      response: void 0,
      parsedResult: s.parsedResult
    };
  }, Promise.resolve(null));
  return r ? {
    handler: r.handler,
    publicRequest: r.request,
    parsedRequest: r.parsedResult,
    response: r.response
  } : {
    handler: void 0,
    response: void 0
  };
}, ja = (u) => u.referrer.startsWith(u.url.origin) ? u.url.pathname : new URL(
  u.url.pathname,
  `${u.url.protocol}//${u.url.host}`
).href;
function L3(u) {
  var e;
  const a = u.definitions.find((i) => i.kind === "OperationDefinition");
  return {
    operationType: a == null ? void 0 : a.operation,
    operationName: (e = a == null ? void 0 : a.name) == null ? void 0 : e.value
  };
}
function ok(u) {
  try {
    const e = ma(u);
    return L3(e);
  } catch (e) {
    return e;
  }
}
function tk(u, e, a) {
  const i = { variables: u };
  for (const [r, n] of Object.entries(e)) {
    if (!(r in a))
      throw new Error(`Given files do not have a key '${r}' .`);
    for (const o of n) {
      const [t, ...s] = o.split(".").reverse(), l = s.reverse();
      let E = i;
      for (const D of l) {
        if (!(D in E))
          throw new Error(`Property '${l}' is not in operations.`);
        E = E[D];
      }
      E[t] = a[r];
    }
  }
  return i.variables;
}
function sk(u) {
  var e, a;
  switch (u.method) {
    case "GET": {
      const i = u.url.searchParams.get("query"), r = u.url.searchParams.get("variables") || "";
      return {
        query: i,
        variables: w0(r)
      };
    }
    case "POST": {
      if ((e = u.body) != null && e.query) {
        const { query: i, variables: r } = u.body;
        return {
          query: i,
          variables: r
        };
      }
      if ((a = u.body) != null && a.operations) {
        const { operations: i, map: r, ...n } = u.body, o = w0(
          i
        ) || {};
        if (!o.query)
          return null;
        const t = w0(r || "") || {}, s = o.variables ? tk(
          o.variables,
          t,
          n
        ) : {};
        return {
          query: o.query,
          variables: s
        };
      }
    }
    default:
      return null;
  }
}
function K3(u) {
  const e = sk(u);
  if (!e || !e.query)
    return;
  const { query: a, variables: i } = e, r = ok(a);
  if (r instanceof Error) {
    const n = ja(u);
    throw new Error(
      Su.formatMessage(
        `Failed to intercept a GraphQL request to "%s %s": cannot parse query. See the error message from the parser below.

%s`,
        u.method,
        n,
        r.message
      )
    );
  }
  return {
    operationType: r.operationType,
    operationName: r.operationName,
    variables: i
  };
}
var lk = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  103: "Early Hints",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a Teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Too Early",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  509: "Bandwidth Limit Exceeded",
  510: "Not Extended",
  511: "Network Authentication Required"
}, Ek = (u, e) => (a) => (a.status = u, a.statusText = e || lk[String(u)], a);
function Dk(...u) {
  return (e) => {
    const [a, i] = u;
    return typeof a == "string" ? e.headers.append(a, i) : $n(a).forEach((n, o) => {
      e.headers.append(o, n);
    }), e;
  };
}
var R3 = (u, e, a) => (i) => {
  const r = Ax(u, e, a);
  return i.headers.append("Set-Cookie", r), typeof document < "u" && (document.cookie = r), i;
}, xk = (u) => (e) => (e.body = u, e), Pa = (u) => (e) => (e.headers.set("Content-Type", "application/json"), e.body = JSON.stringify(u), e), ck = (u) => (e) => {
  const a = w0(e.body) || {}, i = Te(a, { data: u });
  return Pa(i)(e);
}, dk = (u) => (e) => {
  const a = w0(e.body) || {}, i = Te(a, { extensions: u });
  return Pa(i)(e);
}, Dn = 2147483647, i4 = 100, mk = 400, Fk = 5, r4 = () => Lo() ? Fk : Math.floor(
  Math.random() * (mk - i4) + i4
), kk = (u) => (e) => {
  let a;
  if (typeof u == "string")
    switch (u) {
      case "infinite": {
        a = Dn;
        break;
      }
      case "real": {
        a = r4();
        break;
      }
      default:
        throw new Error(
          `Failed to delay a response: unknown delay mode "${u}". Please make sure you provide one of the supported modes ("real", "infinite") or a number to "ctx.delay".`
        );
    }
  else if (typeof u > "u")
    a = r4();
  else {
    if (u > Dn)
      throw new Error(
        `Failed to delay a response: provided delay duration (${u}) exceeds the maximum allowed duration for "setTimeout" (${Dn}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`
      );
    a = u;
  }
  return e.delay = a, e;
}, pk = (u) => (e) => {
  if (u == null)
    return e;
  const a = w0(e.body) || {}, i = Te(a, { errors: u });
  return Pa(i)(e);
}, n4 = Lo() ? (u, e) => Promise.resolve().then(() => UF(qF("node-fetch"))).then(
  ({ default: a }) => a(u, e)
) : globalThis.fetch, o4 = (u) => {
  const e = new R0(u.headers);
  return e.set("x-msw-bypass", "true"), {
    ...u,
    headers: e.all()
  };
}, hk = (u) => {
  const { body: e, method: a } = u, i = {
    ...u,
    body: void 0
  };
  return ["GET", "HEAD"].includes(a) || (typeof e == "object" || typeof e == "number" || typeof e == "boolean" ? i.body = JSON.stringify(e) : i.body = e), i;
}, gk = (u, e = {}) => {
  if (typeof u == "string")
    return n4(u, o4(e));
  const a = hk(u), i = o4(a);
  return n4(u.url.href, i);
}, Ck = (u) => (e) => (e.headers.set("Content-Type", "text/plain"), e.body = u, e), vk = (u) => (e) => (e.headers.set("Content-Type", "text/xml"), e.body = u, e);
function H3(u) {
  return u < 300 ? "#69AB32" : u < 400 ? "#F0BB4B" : "#E95F5D";
}
function _3() {
  const u = /* @__PURE__ */ new Date();
  return [u.getHours(), u.getMinutes(), u.getSeconds()].map(String).map((e) => e.slice(0, 2)).map((e) => e.padStart(2, "0")).join(":");
}
function G3(u) {
  return {
    ...u,
    body: u.body,
    headers: u.headers.all()
  };
}
function V3(u) {
  const e = $n(u.headers);
  return {
    ...u,
    body: N3(u.body, e)
  };
}
var bk = /[\?|#].*$/g;
function Ak(u) {
  return new URL(`/${u}`, "http://localhost").searchParams;
}
function I3(u) {
  return u.replace(bk, "");
}
function Bk(u) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u);
}
function yk(u, e) {
  if (Bk(u) || u.startsWith("*"))
    return u;
  const a = e || typeof document < "u" && document.baseURI;
  return a ? decodeURI(new URL(encodeURI(u), a).href) : u;
}
function fk(u, e) {
  if (u instanceof RegExp)
    return u;
  const a = yk(u, e);
  return I3(a);
}
function zk(u) {
  return u.replace(
    /([:a-zA-Z_-]*)(\*{1,2})+/g,
    (e, a, i) => {
      const r = "(.*)";
      return a ? a.startsWith(":") ? `${a}${i}` : `${a}${r}` : r;
    }
  ).replace(/([^\/])(:)(?=\d+)/, "$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/, "$1\\$2");
}
function O3(u, e, a) {
  const i = fk(e, a), r = typeof i == "string" ? zk(i) : i, n = rs(u), o = Wl(r, { decode: decodeURIComponent })(n), t = o && o.params || {};
  return {
    matches: o !== !1,
    params: t
  };
}
function Sk(...u) {
  return (...e) => u.reduceRight((a, i) => a instanceof Promise ? Promise.resolve(a).then(i) : i(a), e[0]);
}
var Mk = class extends Error {
  constructor(e) {
    super(e), this.name = "NetworkError";
  }
}, jk = {
  status: 200,
  statusText: "OK",
  body: null,
  delay: 0,
  once: !1,
  passthrough: !1
}, Pk = [];
function t4(u, e = Pk) {
  return async (...a) => {
    const i = Object.assign(
      {},
      jk,
      {
        headers: new R0({
          "x-powered-by": "msw"
        })
      },
      u
    ), r = [
      ...e,
      ...a
    ].filter(Boolean);
    return r.length > 0 ? Sk(...r)(i) : i;
  };
}
var Tk = Object.assign(t4(), {
  once: t4({ once: !0 }),
  networkError(u) {
    throw new Mk(u);
  }
}), wk = /[\/\\]msw[\/\\]src[\/\\](.+)/, Nk = /(node_modules)?[\/\\]lib[\/\\](umd|esm|iief|cjs)[\/\\]|^[^\/\\]*$/;
function Lk(u) {
  const e = u.stack;
  if (!e)
    return;
  const i = e.split(`
`).slice(1).find((n) => !(wk.test(n) || Nk.test(n)));
  return i ? i.replace(/\s*at [^()]*\(([^)]+)\)/, "$1").replace(/^@/, "") : void 0;
}
function Kk(u) {
  return u ? typeof u[Symbol.iterator] == "function" : !1;
}
var ut = {
  status: Ek,
  set: Dk,
  delay: kk,
  fetch: gk
}, J3 = class {
  constructor(e) {
    this.shouldSkip = !1, this.ctx = e.ctx || ut, this.resolver = e.resolver;
    const a = Lk(new Error());
    this.info = {
      ...e.info,
      callFrame: a
    };
  }
  parse(e, a) {
    return null;
  }
  test(e, a) {
    return this.predicate(
      e,
      this.parse(e, a),
      a
    );
  }
  getPublicRequest(e, a) {
    return e;
  }
  markAsSkipped(e = !0) {
    this.shouldSkip = e;
  }
  async run(e, a) {
    if (this.shouldSkip)
      return null;
    const i = this.parse(e, a);
    if (!this.predicate(
      e,
      i,
      a
    ))
      return null;
    const n = this.getPublicRequest(e, i), t = await this.wrapResolver(this.resolver)(
      n,
      Tk,
      this.ctx
    );
    return this.createExecutionResult(
      i,
      n,
      t
    );
  }
  wrapResolver(e) {
    return async (a, i, r) => {
      const n = this.resolverGenerator || await e(a, i, r);
      if (Kk(n)) {
        const { value: o, done: t } = n[Symbol.iterator]().next(), s = await o;
        return !s && t ? this.resolverGeneratorResult : (this.resolverGenerator || (this.resolverGenerator = n), this.resolverGeneratorResult = s, s);
      }
      return n;
    };
  }
  createExecutionResult(e, a, i) {
    return {
      handler: this,
      parsedResult: e || null,
      request: a,
      response: i || null
    };
  }
}, Rk = {
  ...ut,
  cookie: R3,
  body: xk,
  text: Ck,
  json: Pa,
  xml: vk
}, Hk = class extends Xo {
  constructor(e, a) {
    super(e.url, {
      ...e,
      body: e._body
    }), this.params = a, this.id = e.id;
  }
}, _k = class extends J3 {
  constructor(e, a, i) {
    super({
      info: {
        header: `${e} ${a}`,
        path: a,
        method: e
      },
      ctx: Rk,
      resolver: i
    }), this.checkRedundantQueryParameters();
  }
  checkRedundantQueryParameters() {
    const { method: e, path: a } = this.info;
    if (a instanceof RegExp || I3(a) === a)
      return;
    Ak(a).forEach((n, o) => {
    }), Su.warn(
      `Found a redundant usage of query parameters in the request handler URL for "${e} ${a}". Please match against a path instead and access query parameters in the response resolver function using "req.url.searchParams".`
    );
  }
  parse(e, a) {
    return O3(
      e.url,
      this.info.path,
      a == null ? void 0 : a.baseUrl
    );
  }
  getPublicRequest(e, a) {
    return new Hk(e, a.params || {});
  }
  predicate(e, a) {
    return (this.info.method instanceof RegExp ? this.info.method.test(e.method) : Qo(this.info.method, e.method)) && a.matches;
  }
  log(e, a) {
    const i = ja(e), r = G3(e), n = V3(a), o = H3(a.status);
    console.groupCollapsed(
      Su.formatMessage("%s %s %s (%c%s%c)"),
      _3(),
      e.method,
      i,
      `color:${o}`,
      `${a.status} ${a.statusText}`,
      "color:inherit"
    ), console.log("Request", r), console.log("Handler:", this), console.log("Response", n), console.groupEnd();
  }
}, Gk = (u, e) => (a) => {
  Vk(u);
  const i = w0(a.body) || {}, r = Te(i, { [u]: e });
  return Pa(r)(a);
};
function Vk(u) {
  M0(
    u.trim() !== "",
    Su.formatMessage(
      "Failed to set a custom field on a GraphQL response: field name cannot be empty."
    )
  ), M0(
    u !== "data",
    Su.formatMessage(
      'Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.data()" instead?',
      u
    )
  ), M0(
    u !== "errors",
    Su.formatMessage(
      'Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.errors()" instead?',
      u
    )
  ), M0(
    u !== "extensions",
    Su.formatMessage(
      'Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.extensions()" instead?',
      u
    )
  );
}
function $3(u, e) {
  try {
    return u();
  } catch (a) {
    e == null || e(a);
  }
}
var Ik = {
  ...ut,
  data: ck,
  extensions: dk,
  errors: pk,
  cookie: R3,
  field: Gk
};
function Ok(u) {
  return u == null ? !1 : typeof u == "object" && "kind" in u && "definitions" in u;
}
var Jk = class extends Xo {
  constructor(e, a, i) {
    super(e.url, {
      ...e,
      body: e._body
    }), this.variables = a, this.operationName = i;
  }
}, $k = class extends J3 {
  constructor(e, a, i, r) {
    let n = a;
    if (Ok(a)) {
      const t = L3(a);
      if (t.operationType !== e)
        throw new Error(
          `Failed to create a GraphQL handler: provided a DocumentNode with a mismatched operation type (expected "${e}", but got "${t.operationType}").`
        );
      if (!t.operationName)
        throw new Error(
          "Failed to create a GraphQL handler: provided a DocumentNode with no operation name."
        );
      n = t.operationName;
    }
    const o = e === "all" ? `${e} (origin: ${i.toString()})` : `${e} ${n} (origin: ${i.toString()})`;
    super({
      info: {
        header: o,
        operationType: e,
        operationName: n
      },
      ctx: Ik,
      resolver: r
    }), this.endpoint = i;
  }
  parse(e) {
    return $3(
      () => K3(e),
      (a) => console.error(a.message)
    );
  }
  getPublicRequest(e, a) {
    var i, r;
    return new Jk(
      e,
      (i = a == null ? void 0 : a.variables) != null ? i : {},
      (r = a == null ? void 0 : a.operationName) != null ? r : ""
    );
  }
  predicate(e, a) {
    if (!a)
      return !1;
    if (!a.operationName && this.info.operationType !== "all") {
      const o = ja(e);
      return Su.warn(`Failed to intercept a GraphQL request at "${e.method} ${o}": anonymous GraphQL operations are not supported.

Consider naming this operation or using "graphql.operation()" request handler to intercept GraphQL requests regardless of their operation name/type. Read more: https://mswjs.io/docs/api/graphql/operation      `), !1;
    }
    const i = O3(e.url, this.endpoint), r = this.info.operationType === "all" || a.operationType === this.info.operationType, n = this.info.operationName instanceof RegExp ? this.info.operationName.test(a.operationName || "") : a.operationName === this.info.operationName;
    return i.matches && r && n;
  }
  log(e, a, i) {
    const r = G3(e), n = V3(a), o = H3(a.status), t = i != null && i.operationName ? `${i == null ? void 0 : i.operationType} ${i == null ? void 0 : i.operationName}` : `anonymous ${i == null ? void 0 : i.operationType}`;
    console.groupCollapsed(
      Su.formatMessage("%s %s (%c%s%c)"),
      _3(),
      `${t}`,
      `color:${o}`,
      `${a.status} ${a.statusText}`,
      "color:inherit"
    ), console.log("Request:", r), console.log("Handler:", this), console.log("Response:", n), console.groupEnd();
  }
}, qk = 3, Wk = 4, q3 = 0.5;
function Uk(u) {
  return u.reduce(
    (e, a) => (a instanceof _k && e.rest.push(a), a instanceof $k && e.graphql.push(a), e),
    {
      rest: [],
      graphql: []
    }
  );
}
function Zk() {
  return (u, e) => {
    const { path: a, method: i } = e.info;
    if (a instanceof RegExp || i instanceof RegExp)
      return 1 / 0;
    const n = Qo(u.method, i) ? q3 : 0, o = ja(u);
    return Wn(o, a) - n;
  };
}
function Yk(u) {
  return (e, a) => {
    if (typeof u.operationName > "u")
      return 1 / 0;
    const { operationType: i, operationName: r } = a.info;
    if (typeof r != "string")
      return 1 / 0;
    const o = u.operationType === i ? q3 : 0;
    return Wn(u.operationName, r) - o;
  };
}
function Qk(u, e, a) {
  return e.reduce((r, n) => {
    const o = a(u, n);
    return r.concat([[o, n]]);
  }, []).sort(([r], [n]) => r - n).filter(([r]) => r <= qk).slice(0, Wk).map(([, r]) => r);
}
function Xk(u) {
  return u.length > 1 ? `Did you mean to request one of the following resources instead?

${u.map((e) => `  • ${e.info.header}`).join(`
`)}` : `Did you mean to request "${u[0].info.header}" instead?`;
}
function up(u, e, a = "warn") {
  const i = $3(() => K3(u));
  function r() {
    const t = Uk(e), s = i ? t.graphql : t.rest, l = Qk(
      u,
      s,
      i ? Yk(i) : Zk()
    );
    return l.length > 0 ? Xk(l) : "";
  }
  function n() {
    const t = ja(u), s = i ? `${i.operationType} ${i.operationName} (${u.method} ${t})` : `${u.method} ${t}`, l = r();
    return [
      "captured a request without a matching request handler:",
      `  • ${s}`,
      l,
      `If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks`
    ].filter(Boolean).join(`

`);
  }
  function o(t) {
    const s = n();
    switch (t) {
      case "error":
        throw Su.error("Error: %s", s), new Error(
          Su.formatMessage(
            'Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'
          )
        );
      case "warn": {
        Su.warn("Warning: %s", s);
        break;
      }
      case "bypass":
        break;
      default:
        throw new Error(
          Su.formatMessage(
            'Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',
            t
          )
        );
    }
  }
  if (typeof a == "function") {
    a(u, {
      warning: o.bind(null, "warn"),
      error: o.bind(null, "error")
    });
    return;
  }
  o(a);
}
function ep(u, e) {
  W0.store.add({ ...u, url: u.url.toString() }, e), W0.store.persist();
}
async function ap(u, e, a, i, r) {
  var n, o, t, s, l, E;
  if (i.emit("request:start", u), u.headers.get("x-msw-bypass") === "true") {
    i.emit("request:end", u), (n = r == null ? void 0 : r.onPassthroughResponse) == null || n.call(r, u);
    return;
  }
  const [D, x] = await Ix(() => nk(
    u,
    e,
    r == null ? void 0 : r.resolutionContext
  ));
  if (D)
    throw i.emit("unhandledException", D, u), D;
  const { handler: c, response: d } = x;
  if (!c) {
    up(u, e, a.onUnhandledRequest), i.emit("request:unhandled", u), i.emit("request:end", u), (o = r == null ? void 0 : r.onPassthroughResponse) == null || o.call(r, u);
    return;
  }
  if (!d) {
    Su.warn(
      `Expected response resolver to return a mocked response Object, but got %s. The original response is going to be used instead.

  • %s
    %s`,
      d,
      c.info.header,
      c.info.callFrame
    ), i.emit("request:end", u), (t = r == null ? void 0 : r.onPassthroughResponse) == null || t.call(r, u);
    return;
  }
  if (d.passthrough) {
    i.emit("request:end", u), (s = r == null ? void 0 : r.onPassthroughResponse) == null || s.call(r, u);
    return;
  }
  ep(u, d), i.emit("request:match", u);
  const F = x, k = ((l = r == null ? void 0 : r.transformResponse) == null ? void 0 : l.call(r, d)) || d;
  return (E = r == null ? void 0 : r.onMockedResponse) == null || E.call(
    r,
    k,
    F
  ), i.emit("request:end", u), k;
}
var { bold: ip } = ZD, rp = {
  onUnhandledRequest: "warn"
}, np = class extends ek {
  constructor(u, ...e) {
    super(...e), this.interceptor = new F0.BatchInterceptor({
      name: "setup-server",
      interceptors: u.map((a) => new a())
    }), this.resolvedOptions = {}, this.init();
  }
  init() {
    this.interceptor.on("request", async (u) => {
      const e = new Xo(u.url, {
        ...u,
        body: await u.arrayBuffer()
      }), a = await ap(
        e,
        this.currentHandlers,
        this.resolvedOptions,
        this.emitter,
        {
          transformResponse(i) {
            return {
              status: i.status,
              statusText: i.statusText,
              headers: i.headers.all(),
              body: i.body,
              delay: i.delay
            };
          }
        }
      );
      a && (a.delay && await new Promise((i) => {
        ZF(i, a.delay);
      }), u.respondWith(a));
    }), this.interceptor.on("response", (u, e) => {
      u.id && (e.headers.get("x-powered-by") === "msw" ? this.emitter.emit("response:mocked", e, u.id) : this.emitter.emit("response:bypass", e, u.id));
    });
  }
  listen(u = {}) {
    this.resolvedOptions = Te(
      rp,
      u
    ), this.interceptor.apply(), M0(
      [F0.InterceptorReadyState.APPLYING, F0.InterceptorReadyState.APPLIED].includes(
        this.interceptor.readyState
      ),
      Su.formatMessage(
        'Failed to start "setupServer": the interceptor failed to apply. This is likely an issue with the library and you should report it at "%s".'
      ),
      "https://github.com/mswjs/msw/issues/new/choose"
    );
  }
  printHandlers() {
    this.listHandlers().forEach((e) => {
      const { header: a, callFrame: i } = e.info, r = e.info.hasOwnProperty("operationType") ? "[graphql]" : "[rest]";
      console.log(`${ip(`${r} ${a}`)}
  Declaration: ${i}
`);
    });
  }
  close() {
    super.dispose(), this.interceptor.dispose();
  }
}, op = (...u) => new np(
  [e3, P3, T3],
  ...u
);
const V0 = /* @__PURE__ */ sa(Gx), et = /* @__PURE__ */ sa(M6);
var We = {}, tp = {
  get exports() {
    return We;
  },
  set exports(u) {
    We = u;
  }
}, s4;
function sp() {
  return s4 || (s4 = 1, function(u, e) {
    var a = function() {
      if (typeof self < "u")
        return self;
      if (typeof window < "u")
        return window;
      if (typeof y < "u")
        return y;
      throw new Error("unable to locate global object");
    }, i = a();
    u.exports = e = i.fetch, i.fetch && (e.default = i.fetch.bind(i)), e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response;
  }(tp, We)), We;
}
const Ta = /* @__PURE__ */ sa(e5), lp = /* @__PURE__ */ sa(S6), Ep = /* @__PURE__ */ sa(L6);
var Dp = Object.create, gr = Object.defineProperty, xp = Object.getOwnPropertyDescriptor, cp = Object.getOwnPropertyNames, dp = Object.getPrototypeOf, mp = Object.prototype.hasOwnProperty, W3 = (u, e) => {
  for (var a in e)
    gr(u, a, { get: e[a], enumerable: !0 });
}, U3 = (u, e, a, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let r of cp(e))
      !mp.call(u, r) && r !== a && gr(u, r, { get: () => e[r], enumerable: !(i = xp(e, r)) || i.enumerable });
  return u;
}, wa = (u, e, a) => (a = u != null ? Dp(dp(u)) : {}, U3(
  e || !u || !u.__esModule ? gr(a, "default", { value: u, enumerable: !0 }) : a,
  u
)), Fp = (u) => U3(gr({}, "__esModule", { value: !0 }), u), Z3 = {};
W3(Z3, {
  GraphQLHandler: () => vr,
  MockedRequest: () => Na,
  RESTMethods: () => CE,
  RequestHandler: () => st,
  RestHandler: () => lt,
  SetupApi: () => zE,
  SetupWorkerApi: () => SE,
  cleanUrl: () => ot,
  compose: () => pE,
  context: () => Y3,
  createResponseComposition: () => Nn,
  defaultContext: () => Cr,
  defaultResponse: () => hE,
  graphql: () => ag,
  graphqlContext: () => AE,
  handleRequest: () => Et,
  matchRequestUrl: () => tt,
  response: () => gE,
  rest: () => Xh,
  restContext: () => vE,
  setupWorker: () => Qh
});
var at = Fp(Z3), Y3 = {};
W3(Y3, {
  body: () => uE,
  cookie: () => it,
  data: () => eE,
  delay: () => iE,
  errors: () => rE,
  extensions: () => aE,
  fetch: () => nE,
  json: () => Ne,
  set: () => X3,
  status: () => Q3,
  text: () => oE,
  xml: () => tE
});
var kp = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  103: "Early Hints",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a Teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Too Early",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  509: "Bandwidth Limit Exceeded",
  510: "Not Extended",
  511: "Network Authentication Required"
}, Q3 = (u, e) => (a) => (a.status = u, a.statusText = e || kp[String(u)], a), pp = V0;
function X3(...u) {
  return (e) => {
    const [a, i] = u;
    return typeof a == "string" ? e.headers.append(a, i) : (0, pp.objectToHeaders)(a).forEach((n, o) => {
      e.headers.append(o, n);
    }), e;
  };
}
var hp = wa(da), it = (u, e, a) => (i) => {
  const r = hp.serialize(u, e, a);
  return i.headers.append("Set-Cookie", r), typeof document < "u" && (document.cookie = r), i;
}, uE = (u) => (e) => (e.body = u, e);
function N0(u) {
  try {
    return JSON.parse(u);
  } catch {
    return;
  }
}
function l4(u) {
  return u != null && typeof u == "object" && !Array.isArray(u);
}
function we(u, e) {
  return Object.entries(e).reduce((a, [i, r]) => {
    const n = a[i];
    return Array.isArray(n) && Array.isArray(r) ? (a[i] = n.concat(r), a) : l4(n) && l4(r) ? (a[i] = we(n, r), a) : (a[i] = r, a);
  }, Object.assign({}, u));
}
var Ne = (u) => (e) => (e.headers.set("Content-Type", "application/json"), e.body = JSON.stringify(u), e), eE = (u) => (e) => {
  const a = N0(e.body) || {}, i = we(a, { data: u });
  return Ne(i)(e);
}, aE = (u) => (e) => {
  const a = N0(e.body) || {}, i = we(a, { extensions: u });
  return Ne(i)(e);
}, gp = et, xn = 2147483647, E4 = 100, Cp = 400, vp = 5, D4 = () => (0, gp.isNodeProcess)() ? vp : Math.floor(
  Math.random() * (Cp - E4) + E4
), iE = (u) => (e) => {
  let a;
  if (typeof u == "string")
    switch (u) {
      case "infinite": {
        a = xn;
        break;
      }
      case "real": {
        a = D4();
        break;
      }
      default:
        throw new Error(
          `Failed to delay a response: unknown delay mode "${u}". Please make sure you provide one of the supported modes ("real", "infinite") or a number to "ctx.delay".`
        );
    }
  else if (typeof u > "u")
    a = D4();
  else {
    if (u > xn)
      throw new Error(
        `Failed to delay a response: provided delay duration (${u}) exceeds the maximum allowed duration for "setTimeout" (${xn}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`
      );
    a = u;
  }
  return e.delay = a, e;
}, rE = (u) => (e) => {
  if (u == null)
    return e;
  const a = N0(e.body) || {}, i = we(a, { errors: u });
  return Ne(i)(e);
}, bp = et, Ap = V0, x4 = (0, bp.isNodeProcess)() ? (u, e) => Promise.resolve().then(() => wa(sp())).then(
  ({ default: a }) => a(u, e)
) : globalThis.fetch, c4 = (u) => {
  const e = new Ap.Headers(u.headers);
  return e.set("x-msw-bypass", "true"), {
    ...u,
    headers: e.all()
  };
}, Bp = (u) => {
  const { body: e, method: a } = u, i = {
    ...u,
    body: void 0
  };
  return ["GET", "HEAD"].includes(a) || (typeof e == "object" || typeof e == "number" || typeof e == "boolean" ? i.body = JSON.stringify(e) : i.body = e), i;
}, nE = (u, e = {}) => {
  if (typeof u == "string")
    return x4(u, c4(e));
  const a = Bp(u), i = c4(a);
  return x4(u.url.href, i);
}, oE = (u) => (e) => (e.headers.set("Content-Type", "text/plain"), e.body = u, e), tE = (u) => (e) => (e.headers.set("Content-Type", "text/xml"), e.body = u, e), yp = Ta, fp = Ta, zp = "[MSW]";
function rt(u, ...e) {
  const a = (0, fp.format)(u, ...e);
  return `${zp} ${a}`;
}
function Sp(u, ...e) {
  console.warn(rt(u, ...e));
}
function Mp(u, ...e) {
  console.error(rt(u, ...e));
}
var au = {
  formatMessage: rt,
  warn: Sp,
  error: Mp
};
function jp() {
  (0, yp.invariant)(
    typeof URL < "u",
    au.formatMessage(
      `Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`
    )
  );
}
var Pp = Ta, Tp = et, wp = b0, Np = b0;
function cn(u, e, a) {
  return [
    u.active,
    u.installing,
    u.waiting
  ].filter((o) => o != null).find((o) => a(o.scriptURL, e)) || null;
}
function Lp(u) {
  return new URL(u, location.href).href;
}
var Kp = async (u, e = {}, a) => {
  const i = Lp(u), r = await navigator.serviceWorker.getRegistrations().then(
    (s) => s.filter(
      (l) => cn(l, i, a)
    )
  );
  !navigator.serviceWorker.controller && r.length > 0 && location.reload();
  const [n] = r;
  if (n)
    return n.update().then(() => [
      cn(
        n,
        i,
        a
      ),
      n
    ]);
  const [o, t] = await (0, Np.until)(
    async () => {
      const s = await navigator.serviceWorker.register(u, e);
      return [
        cn(s, i, a),
        s
      ];
    }
  );
  if (o) {
    if (o.message.includes("(404)")) {
      const l = new URL((e == null ? void 0 : e.scope) || "/", location.href);
      throw new Error(
        au.formatMessage(`Failed to register a Service Worker for scope ('${l.href}') with script ('${i}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`)
      );
    }
    throw new Error(
      au.formatMessage(
        `Failed to register the Service Worker:

%s`,
        o.message
      )
    );
  }
  return t;
};
function sE(u = {}) {
  if (u.quiet)
    return;
  const e = u.message || "Mocking enabled.";
  console.groupCollapsed(
    `%c${au.formatMessage(e)}`,
    "color:orangered;font-weight:bold;"
  ), console.log(
    "%cDocumentation: %chttps://mswjs.io/docs",
    "font-weight:bold",
    "font-weight:normal"
  ), console.log("Found an issue? https://github.com/mswjs/msw/issues"), u.workerUrl && console.log("Worker script URL:", u.workerUrl), u.workerScope && console.log("Worker scope:", u.workerScope), console.groupEnd();
}
async function Rp(u, e) {
  var a, i;
  if (u.workerChannel.send("MOCK_ACTIVATE"), await u.events.once("MOCKING_ENABLED"), u.isMockingEnabled) {
    au.warn(
      'Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.'
    );
    return;
  }
  u.isMockingEnabled = !0, sE({
    quiet: e.quiet,
    workerScope: (a = u.registration) == null ? void 0 : a.scope,
    workerUrl: (i = u.worker) == null ? void 0 : i.scriptURL
  });
}
var Hp = class {
  constructor(u) {
    this.port = u;
  }
  postMessage(u, ...e) {
    const [a, i] = e;
    this.port.postMessage({ type: u, data: a }, { transfer: i });
  }
}, lE = class extends Error {
  constructor(u) {
    super(u), this.name = "NetworkError";
  }
}, _p = F0, Gp = V0, Vp = wa(da), d4 = W0, Ip = F0, Op = Uu, Jp = V0, $p = wa(da);
function m4() {
  return $p.parse(document.cookie);
}
function qp(u) {
  if (typeof document > "u" || typeof location > "u")
    return {};
  switch (u.credentials) {
    case "same-origin":
      return location.origin === u.url.origin ? m4() : {};
    case "include":
      return m4();
    default:
      return {};
  }
}
var Wp = V0;
function Up(u) {
  var e, a;
  const i = (0, Wp.stringToHeaders)(u), r = i.get("content-type") || "text/plain", n = i.get("content-disposition");
  if (!n)
    throw new Error('"Content-Disposition" header is required.');
  const o = n.split(";").reduce((l, E) => {
    const [D, ...x] = E.trim().split("=");
    return l[D] = x.join("="), l;
  }, {}), t = (e = o.name) == null ? void 0 : e.slice(1, -1), s = (a = o.filename) == null ? void 0 : a.slice(1, -1);
  return {
    name: t,
    filename: s,
    contentType: r
  };
}
function Zp(u, e) {
  const a = e == null ? void 0 : e.get("content-type");
  if (!a)
    return;
  const [, ...i] = a.split(/; */), r = i.filter((s) => s.startsWith("boundary=")).map((s) => s.replace(/^boundary=/, ""))[0];
  if (!r)
    return;
  const n = new RegExp(`--+${r}`), o = u.split(n).filter((s) => s.startsWith(`\r
`) && s.endsWith(`\r
`)).map((s) => s.trimStart().replace(/\r\n$/, ""));
  if (!o.length)
    return;
  const t = {};
  try {
    for (const s of o) {
      const [l, ...E] = s.split(`\r
\r
`), D = E.join(`\r
\r
`), { contentType: x, filename: c, name: d } = Up(l), F = c === void 0 ? D : new File([D], c, { type: x }), k = t[d];
      k === void 0 ? t[d] = F : Array.isArray(k) ? t[d] = [...k, F] : t[d] = [k, F];
    }
    return t;
  } catch {
    return;
  }
}
function EE(u, e) {
  var a;
  if (!u)
    return u;
  const i = ((a = e == null ? void 0 : e.get("content-type")) == null ? void 0 : a.toLowerCase()) || "";
  return i.startsWith("multipart/form-data") && typeof u != "object" ? Zp(u.toString(), e) || u : i.includes("json") && typeof u != "object" && N0(u.toString()) || u;
}
function nt(u, e) {
  return u.toLowerCase() === e.toLowerCase();
}
var Na = class extends Ip.IsomorphicRequest {
  constructor(u, e = {}) {
    super(u, e), e.id && (this.id = e.id), this.cache = e.cache || "default", this.destination = e.destination || "", this.integrity = e.integrity || "", this.keepalive = e.keepalive || !1, this.mode = e.mode || "cors", this.priority = e.priority || "auto", this.redirect = e.redirect || "follow", this.referrer = e.referrer || "", this.referrerPolicy = e.referrerPolicy || "no-referrer", this.cookies = e.cookies || this.getCookies();
  }
  get body() {
    const u = (0, Op.decodeBuffer)(this._body), e = EE(u, this.headers);
    if (!(nt(this.method, "GET") && e === ""))
      return e;
  }
  passthrough() {
    return {
      status: 101,
      statusText: "Continue",
      headers: new Jp.Headers(),
      body: null,
      passthrough: !0,
      once: !1
    };
  }
  getCookies() {
    var u;
    const e = this.headers.get("cookie"), a = e ? Vp.parse(e) : {};
    d4.store.hydrate();
    const i = Array.from(
      (u = d4.store.get({ ...this, url: this.url.href })) == null ? void 0 : u.entries()
    ).reduce((o, [t, { value: s }]) => Object.assign(o, { [t.trim()]: s }), {}), n = {
      ...qp(this),
      ...i
    };
    for (const [o, t] of Object.entries(n))
      this.headers.append("cookie", `${o}=${t}`);
    return {
      ...n,
      ...a
    };
  }
};
function Yp(u) {
  const e = new URL(u.url), a = new Gp.Headers(u.headers);
  return new Na(e, {
    ...u,
    body: (0, _p.encodeBuffer)(u.body || ""),
    headers: a
  });
}
var Qp = b0, Xp = async (u, e, a) => {
  const i = e.filter((n) => n.test(u, a));
  if (i.length === 0)
    return {
      handler: void 0,
      response: void 0
    };
  const r = await i.reduce(async (n, o) => {
    const t = await n;
    if (t != null && t.response)
      return n;
    const s = await o.run(u, a);
    return s === null || s.handler.shouldSkip ? null : s.response ? (s.response.once && o.markAsSkipped(!0), s) : {
      request: s.request,
      handler: s.handler,
      response: void 0,
      parsedResult: s.parsedResult
    };
  }, Promise.resolve(null));
  return r ? {
    handler: r.handler,
    publicRequest: r.request,
    parsedRequest: r.parsedResult,
    response: r.response
  } : {
    handler: void 0,
    response: void 0
  };
}, DE = wa(Wn), uh = lp, La = (u) => u.referrer.startsWith(u.url.origin) ? u.url.pathname : new URL(
  u.url.pathname,
  `${u.url.protocol}//${u.url.host}`
).href;
function xE(u) {
  var e;
  const a = u.definitions.find((i) => i.kind === "OperationDefinition");
  return {
    operationType: a == null ? void 0 : a.operation,
    operationName: (e = a == null ? void 0 : a.name) == null ? void 0 : e.value
  };
}
function eh(u) {
  try {
    const e = (0, uh.parse)(u);
    return xE(e);
  } catch (e) {
    return e;
  }
}
function ah(u, e, a) {
  const i = { variables: u };
  for (const [r, n] of Object.entries(e)) {
    if (!(r in a))
      throw new Error(`Given files do not have a key '${r}' .`);
    for (const o of n) {
      const [t, ...s] = o.split(".").reverse(), l = s.reverse();
      let E = i;
      for (const D of l) {
        if (!(D in E))
          throw new Error(`Property '${l}' is not in operations.`);
        E = E[D];
      }
      E[t] = a[r];
    }
  }
  return i.variables;
}
function ih(u) {
  var e, a;
  switch (u.method) {
    case "GET": {
      const i = u.url.searchParams.get("query"), r = u.url.searchParams.get("variables") || "";
      return {
        query: i,
        variables: N0(r)
      };
    }
    case "POST": {
      if ((e = u.body) != null && e.query) {
        const { query: i, variables: r } = u.body;
        return {
          query: i,
          variables: r
        };
      }
      if ((a = u.body) != null && a.operations) {
        const { operations: i, map: r, ...n } = u.body, o = N0(
          i
        ) || {};
        if (!o.query)
          return null;
        const t = N0(r || "") || {}, s = o.variables ? ah(
          o.variables,
          t,
          n
        ) : {};
        return {
          query: o.query,
          variables: s
        };
      }
    }
    default:
      return null;
  }
}
function cE(u) {
  const e = ih(u);
  if (!e || !e.query)
    return;
  const { query: a, variables: i } = e, r = eh(a);
  if (r instanceof Error) {
    const n = La(u);
    throw new Error(
      au.formatMessage(
        `Failed to intercept a GraphQL request to "%s %s": cannot parse query. See the error message from the parser below.

%s`,
        u.method,
        n,
        r.message
      )
    );
  }
  return {
    operationType: r.operationType,
    operationName: r.operationName,
    variables: i
  };
}
function dE(u) {
  return u < 300 ? "#69AB32" : u < 400 ? "#F0BB4B" : "#E95F5D";
}
function mE() {
  const u = /* @__PURE__ */ new Date();
  return [u.getHours(), u.getMinutes(), u.getSeconds()].map(String).map((e) => e.slice(0, 2)).map((e) => e.padStart(2, "0")).join(":");
}
function FE(u) {
  return {
    ...u,
    body: u.body,
    headers: u.headers.all()
  };
}
var rh = V0;
function kE(u) {
  const e = (0, rh.objectToHeaders)(u.headers);
  return {
    ...u,
    body: EE(u.body, e)
  };
}
var nh = Ep, oh = xa, th = /[\?|#].*$/g;
function sh(u) {
  return new URL(`/${u}`, "http://localhost").searchParams;
}
function ot(u) {
  return u.replace(th, "");
}
function lh(u) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u);
}
function Eh(u, e) {
  if (lh(u) || u.startsWith("*"))
    return u;
  const a = e || typeof document < "u" && document.baseURI;
  return a ? decodeURI(new URL(encodeURI(u), a).href) : u;
}
function Dh(u, e) {
  if (u instanceof RegExp)
    return u;
  const a = Eh(u, e);
  return ot(a);
}
function xh(u) {
  return u.replace(
    /([:a-zA-Z_-]*)(\*{1,2})+/g,
    (e, a, i) => {
      const r = "(.*)";
      return a ? a.startsWith(":") ? `${a}${i}` : `${a}${r}` : r;
    }
  ).replace(/([^\/])(:)(?=\d+)/, "$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/, "$1\\$2");
}
function tt(u, e, a) {
  const i = Dh(e, a), r = typeof i == "string" ? xh(i) : i, n = (0, oh.getCleanUrl)(u), o = (0, nh.match)(r, { decode: decodeURIComponent })(n), t = o && o.params || {};
  return {
    matches: o !== !1,
    params: t
  };
}
var ch = V0;
function pE(...u) {
  return (...e) => u.reduceRight((a, i) => a instanceof Promise ? Promise.resolve(a).then(i) : i(a), e[0]);
}
var hE = {
  status: 200,
  statusText: "OK",
  body: null,
  delay: 0,
  once: !1,
  passthrough: !1
}, dh = [];
function Nn(u, e = dh) {
  return async (...a) => {
    const i = Object.assign(
      {},
      hE,
      {
        headers: new ch.Headers({
          "x-powered-by": "msw"
        })
      },
      u
    ), r = [
      ...e,
      ...a
    ].filter(Boolean);
    return r.length > 0 ? pE(...r)(i) : i;
  };
}
var gE = Object.assign(Nn(), {
  once: Nn({ once: !0 }),
  networkError(u) {
    throw new lE(u);
  }
}), mh = /[\/\\]msw[\/\\]src[\/\\](.+)/, Fh = /(node_modules)?[\/\\]lib[\/\\](umd|esm|iief|cjs)[\/\\]|^[^\/\\]*$/;
function kh(u) {
  const e = u.stack;
  if (!e)
    return;
  const i = e.split(`
`).slice(1).find((n) => !(mh.test(n) || Fh.test(n)));
  return i ? i.replace(/\s*at [^()]*\(([^)]+)\)/, "$1").replace(/^@/, "") : void 0;
}
function ph(u) {
  return u ? typeof u[Symbol.iterator] == "function" : !1;
}
var Cr = {
  status: Q3,
  set: X3,
  delay: iE,
  fetch: nE
}, st = class {
  constructor(u) {
    this.shouldSkip = !1, this.ctx = u.ctx || Cr, this.resolver = u.resolver;
    const e = kh(new Error());
    this.info = {
      ...u.info,
      callFrame: e
    };
  }
  parse(u, e) {
    return null;
  }
  test(u, e) {
    return this.predicate(
      u,
      this.parse(u, e),
      e
    );
  }
  getPublicRequest(u, e) {
    return u;
  }
  markAsSkipped(u = !0) {
    this.shouldSkip = u;
  }
  async run(u, e) {
    if (this.shouldSkip)
      return null;
    const a = this.parse(u, e);
    if (!this.predicate(
      u,
      a,
      e
    ))
      return null;
    const r = this.getPublicRequest(u, a), o = await this.wrapResolver(this.resolver)(
      r,
      gE,
      this.ctx
    );
    return this.createExecutionResult(
      a,
      r,
      o
    );
  }
  wrapResolver(u) {
    return async (e, a, i) => {
      const r = this.resolverGenerator || await u(e, a, i);
      if (ph(r)) {
        const { value: n, done: o } = r[Symbol.iterator]().next(), t = await n;
        return !t && o ? this.resolverGeneratorResult : (this.resolverGenerator || (this.resolverGenerator = r), this.resolverGeneratorResult = t, t);
      }
      return r;
    };
  }
  createExecutionResult(u, e, a) {
    return {
      handler: this,
      parsedResult: u || null,
      request: e,
      response: a || null
    };
  }
}, CE = /* @__PURE__ */ ((u) => (u.HEAD = "HEAD", u.GET = "GET", u.POST = "POST", u.PUT = "PUT", u.PATCH = "PATCH", u.OPTIONS = "OPTIONS", u.DELETE = "DELETE", u))(CE || {}), vE = {
  ...Cr,
  cookie: it,
  body: uE,
  text: oE,
  json: Ne,
  xml: tE
}, hh = class extends Na {
  constructor(u, e) {
    super(u.url, {
      ...u,
      body: u._body
    }), this.params = e, this.id = u.id;
  }
}, lt = class extends st {
  constructor(u, e, a) {
    super({
      info: {
        header: `${u} ${e}`,
        path: e,
        method: u
      },
      ctx: vE,
      resolver: a
    }), this.checkRedundantQueryParameters();
  }
  checkRedundantQueryParameters() {
    const { method: u, path: e } = this.info;
    if (e instanceof RegExp || ot(e) === e)
      return;
    sh(e).forEach((r, n) => {
    }), au.warn(
      `Found a redundant usage of query parameters in the request handler URL for "${u} ${e}". Please match against a path instead and access query parameters in the response resolver function using "req.url.searchParams".`
    );
  }
  parse(u, e) {
    return tt(
      u.url,
      this.info.path,
      e == null ? void 0 : e.baseUrl
    );
  }
  getPublicRequest(u, e) {
    return new hh(u, e.params || {});
  }
  predicate(u, e) {
    return (this.info.method instanceof RegExp ? this.info.method.test(u.method) : nt(this.info.method, u.method)) && e.matches;
  }
  log(u, e) {
    const a = La(u), i = FE(u), r = kE(e), n = dE(e.status);
    console.groupCollapsed(
      au.formatMessage("%s %s %s (%c%s%c)"),
      mE(),
      u.method,
      a,
      `color:${n}`,
      `${e.status} ${e.statusText}`,
      "color:inherit"
    ), console.log("Request", i), console.log("Handler:", this), console.log("Response", r), console.groupEnd();
  }
}, Ya = Ta, gh = (u, e) => (a) => {
  Ch(u);
  const i = N0(a.body) || {}, r = we(i, { [u]: e });
  return Ne(r)(a);
};
function Ch(u) {
  (0, Ya.invariant)(
    u.trim() !== "",
    au.formatMessage(
      "Failed to set a custom field on a GraphQL response: field name cannot be empty."
    )
  ), (0, Ya.invariant)(
    u !== "data",
    au.formatMessage(
      'Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.data()" instead?',
      u
    )
  ), (0, Ya.invariant)(
    u !== "errors",
    au.formatMessage(
      'Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.errors()" instead?',
      u
    )
  ), (0, Ya.invariant)(
    u !== "extensions",
    au.formatMessage(
      'Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.extensions()" instead?',
      u
    )
  );
}
function bE(u, e) {
  try {
    return u();
  } catch (a) {
    e == null || e(a);
  }
}
var AE = {
  ...Cr,
  data: eE,
  extensions: aE,
  errors: rE,
  cookie: it,
  field: gh
};
function vh(u) {
  return u == null ? !1 : typeof u == "object" && "kind" in u && "definitions" in u;
}
var bh = class extends Na {
  constructor(u, e, a) {
    super(u.url, {
      ...u,
      body: u._body
    }), this.variables = e, this.operationName = a;
  }
}, vr = class extends st {
  constructor(u, e, a, i) {
    let r = e;
    if (vh(e)) {
      const o = xE(e);
      if (o.operationType !== u)
        throw new Error(
          `Failed to create a GraphQL handler: provided a DocumentNode with a mismatched operation type (expected "${u}", but got "${o.operationType}").`
        );
      if (!o.operationName)
        throw new Error(
          "Failed to create a GraphQL handler: provided a DocumentNode with no operation name."
        );
      r = o.operationName;
    }
    const n = u === "all" ? `${u} (origin: ${a.toString()})` : `${u} ${r} (origin: ${a.toString()})`;
    super({
      info: {
        header: n,
        operationType: u,
        operationName: r
      },
      ctx: AE,
      resolver: i
    }), this.endpoint = a;
  }
  parse(u) {
    return bE(
      () => cE(u),
      (e) => console.error(e.message)
    );
  }
  getPublicRequest(u, e) {
    var a, i;
    return new bh(
      u,
      (a = e == null ? void 0 : e.variables) != null ? a : {},
      (i = e == null ? void 0 : e.operationName) != null ? i : ""
    );
  }
  predicate(u, e) {
    if (!e)
      return !1;
    if (!e.operationName && this.info.operationType !== "all") {
      const n = La(u);
      return au.warn(`Failed to intercept a GraphQL request at "${u.method} ${n}": anonymous GraphQL operations are not supported.

Consider naming this operation or using "graphql.operation()" request handler to intercept GraphQL requests regardless of their operation name/type. Read more: https://mswjs.io/docs/api/graphql/operation      `), !1;
    }
    const a = tt(u.url, this.endpoint), i = this.info.operationType === "all" || e.operationType === this.info.operationType, r = this.info.operationName instanceof RegExp ? this.info.operationName.test(e.operationName || "") : e.operationName === this.info.operationName;
    return a.matches && i && r;
  }
  log(u, e, a) {
    const i = FE(u), r = kE(e), n = dE(e.status), o = a != null && a.operationName ? `${a == null ? void 0 : a.operationType} ${a == null ? void 0 : a.operationName}` : `anonymous ${a == null ? void 0 : a.operationType}`;
    console.groupCollapsed(
      au.formatMessage("%s %s (%c%s%c)"),
      mE(),
      `${o}`,
      `color:${n}`,
      `${e.status} ${e.statusText}`,
      "color:inherit"
    ), console.log("Request:", i), console.log("Handler:", this), console.log("Response:", r), console.groupEnd();
  }
}, Ah = 3, Bh = 4, BE = 0.5;
function yh(u) {
  return u.reduce(
    (e, a) => (a instanceof lt && e.rest.push(a), a instanceof vr && e.graphql.push(a), e),
    {
      rest: [],
      graphql: []
    }
  );
}
function fh() {
  return (u, e) => {
    const { path: a, method: i } = e.info;
    if (a instanceof RegExp || i instanceof RegExp)
      return 1 / 0;
    const n = nt(u.method, i) ? BE : 0, o = La(u);
    return (0, DE.default)(o, a) - n;
  };
}
function zh(u) {
  return (e, a) => {
    if (typeof u.operationName > "u")
      return 1 / 0;
    const { operationType: i, operationName: r } = a.info;
    if (typeof r != "string")
      return 1 / 0;
    const o = u.operationType === i ? BE : 0;
    return (0, DE.default)(u.operationName, r) - o;
  };
}
function Sh(u, e, a) {
  return e.reduce((r, n) => {
    const o = a(u, n);
    return r.concat([[o, n]]);
  }, []).sort(([r], [n]) => r - n).filter(([r]) => r <= Ah).slice(0, Bh).map(([, r]) => r);
}
function Mh(u) {
  return u.length > 1 ? `Did you mean to request one of the following resources instead?

${u.map((e) => `  • ${e.info.header}`).join(`
`)}` : `Did you mean to request "${u[0].info.header}" instead?`;
}
function jh(u, e, a = "warn") {
  const i = bE(() => cE(u));
  function r() {
    const t = yh(e), s = i ? t.graphql : t.rest, l = Sh(
      u,
      s,
      i ? zh(i) : fh()
    );
    return l.length > 0 ? Mh(l) : "";
  }
  function n() {
    const t = La(u), s = i ? `${i.operationType} ${i.operationName} (${u.method} ${t})` : `${u.method} ${t}`, l = r();
    return [
      "captured a request without a matching request handler:",
      `  • ${s}`,
      l,
      `If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks`
    ].filter(Boolean).join(`

`);
  }
  function o(t) {
    const s = n();
    switch (t) {
      case "error":
        throw au.error("Error: %s", s), new Error(
          au.formatMessage(
            'Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'
          )
        );
      case "warn": {
        au.warn("Warning: %s", s);
        break;
      }
      case "bypass":
        break;
      default:
        throw new Error(
          au.formatMessage(
            'Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',
            t
          )
        );
    }
  }
  if (typeof a == "function") {
    a(u, {
      warning: o.bind(null, "warn"),
      error: o.bind(null, "error")
    });
    return;
  }
  o(a);
}
var F4 = W0;
function Ph(u, e) {
  F4.store.add({ ...u, url: u.url.toString() }, e), F4.store.persist();
}
async function Et(u, e, a, i, r) {
  var n, o, t, s, l, E;
  if (i.emit("request:start", u), u.headers.get("x-msw-bypass") === "true") {
    i.emit("request:end", u), (n = r == null ? void 0 : r.onPassthroughResponse) == null || n.call(r, u);
    return;
  }
  const [D, x] = await (0, Qp.until)(() => Xp(
    u,
    e,
    r == null ? void 0 : r.resolutionContext
  ));
  if (D)
    throw i.emit("unhandledException", D, u), D;
  const { handler: c, response: d } = x;
  if (!c) {
    jh(u, e, a.onUnhandledRequest), i.emit("request:unhandled", u), i.emit("request:end", u), (o = r == null ? void 0 : r.onPassthroughResponse) == null || o.call(r, u);
    return;
  }
  if (!d) {
    au.warn(
      `Expected response resolver to return a mocked response Object, but got %s. The original response is going to be used instead.

  • %s
    %s`,
      d,
      c.info.header,
      c.info.callFrame
    ), i.emit("request:end", u), (t = r == null ? void 0 : r.onPassthroughResponse) == null || t.call(r, u);
    return;
  }
  if (d.passthrough) {
    i.emit("request:end", u), (s = r == null ? void 0 : r.onPassthroughResponse) == null || s.call(r, u);
    return;
  }
  Ph(u, d), i.emit("request:match", u);
  const F = x, k = ((l = r == null ? void 0 : r.transformResponse) == null ? void 0 : l.call(r, d)) || d;
  return (E = r == null ? void 0 : r.onMockedResponse) == null || E.call(
    r,
    k,
    F
  ), i.emit("request:end", u), k;
}
var k4 = V0;
function yE(u) {
  return {
    status: u.status,
    statusText: u.statusText,
    headers: (0, k4.flattenHeadersObject)((0, k4.headersToObject)(u.headers)),
    body: u.body
  };
}
var Th = (u, e) => async (a, i) => {
  var r;
  const n = new Hp(a.ports[0]), o = Yp(i.payload);
  try {
    await Et(
      o,
      u.requestHandlers,
      e,
      u.emitter,
      {
        transformResponse: wh,
        onPassthroughResponse() {
          n.postMessage("NOT_FOUND");
        },
        async onMockedResponse(t, { handler: s, publicRequest: l, parsedRequest: E }) {
          if (t.body instanceof ReadableStream)
            throw new Error(
              au.formatMessage(
                'Failed to construct a mocked response with a "ReadableStream" body: mocked streams are not supported. Follow https://github.com/mswjs/msw/issues/1336 for more details.'
              )
            );
          const x = await new Response(t.body, t).arrayBuffer(), c = t.body == null ? null : x;
          n.postMessage(
            "MOCK_RESPONSE",
            {
              ...t,
              body: c
            },
            [x]
          ), e.quiet || u.emitter.once("response:mocked", (d) => {
            s.log(
              l,
              yE(d),
              E
            );
          });
        }
      }
    );
  } catch (t) {
    if (t instanceof lE) {
      n.postMessage("NETWORK_ERROR", {
        name: t.name,
        message: t.message
      });
      return;
    }
    t instanceof Error && (au.error(
      `Uncaught exception in the request handler for "%s %s":

%s

This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/recipes/mocking-error-responses`,
      o.method,
      o.url,
      (r = t.stack) != null ? r : t
    ), n.postMessage("MOCK_RESPONSE", {
      status: 500,
      statusText: "Request Handler Error",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: t.name,
        message: t.message,
        stack: t.stack
      })
    }));
  }
};
function wh(u) {
  return {
    status: u.status,
    statusText: u.statusText,
    headers: u.headers.all(),
    body: u.body,
    delay: u.delay
  };
}
async function Nh(u, e) {
  u.workerChannel.send("INTEGRITY_CHECK_REQUEST");
  const { payload: a } = await u.events.once(
    "INTEGRITY_CHECK_RESPONSE"
  );
  if (a !== "3d6b9f06410d179a7f7404d4bf4c3c70")
    throw new Error(
      `Currently active Service Worker (${a}) is behind the latest published one (3d6b9f06410d179a7f7404d4bf4c3c70).`
    );
  return e;
}
var p4 = b0;
function Lh(u) {
  const e = window.XMLHttpRequest.prototype.send;
  window.XMLHttpRequest.prototype.send = function(...i) {
    (0, p4.until)(() => u).then(() => {
      window.XMLHttpRequest.prototype.send = e, this.send(...i);
    });
  };
  const a = window.fetch;
  window.fetch = async (...i) => (await (0, p4.until)(() => u), window.fetch = a, window.fetch(...i));
}
function Kh(u) {
  return (e, a) => {
    var i;
    const { payload: r } = a;
    if ((i = r.type) != null && i.includes("opaque"))
      return;
    const n = new Response(r.body || null, r);
    n.headers.get("x-powered-by") === "msw" ? u.emitter.emit("response:mocked", n, r.requestId) : u.emitter.emit("response:bypass", n, r.requestId);
  };
}
function Rh(u, e) {
  !(e != null && e.quiet) && !location.href.startsWith(u.scope) && au.warn(
    `Cannot intercept requests on this page because it's outside of the worker's scope ("${u.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`
  );
}
var Hh = (u) => function(a, i) {
  const n = (async () => {
    u.events.removeAllListeners(), u.workerChannel.on(
      "REQUEST",
      Th(u, a)
    ), u.workerChannel.on("RESPONSE", Kh(u));
    const o = await Kp(
      a.serviceWorker.url,
      a.serviceWorker.options,
      a.findWorker
    ), [t, s] = o;
    if (!t) {
      const E = i != null && i.findWorker ? au.formatMessage(
        `Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`,
        a.serviceWorker.url
      ) : au.formatMessage(
        `Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`,
        a.serviceWorker.url,
        location.host
      );
      throw new Error(E);
    }
    u.worker = t, u.registration = s, u.events.addListener(window, "beforeunload", () => {
      t.state !== "redundant" && u.workerChannel.send("CLIENT_CLOSED"), window.clearInterval(u.keepAliveInterval);
    });
    const [l] = await (0, wp.until)(
      () => Nh(u, t)
    );
    return l && au.error(`Detected outdated Service Worker: ${l.message}

The mocking is still enabled, but it's highly recommended that you update your Service Worker by running:

$ npx msw init <PUBLIC_DIR>

This is necessary to ensure that the Service Worker is in sync with the library to guarantee its stability.
If this message still persists after updating, please report an issue: https://github.com/open-draft/msw/issues      `), u.keepAliveInterval = window.setInterval(
      () => u.workerChannel.send("KEEPALIVE_REQUEST"),
      5e3
    ), Rh(s, u.startOptions), s;
  })().then(
    async (o) => {
      const t = o.installing || o.waiting;
      return t && await new Promise((s) => {
        t.addEventListener("statechange", () => {
          if (t.state === "activated")
            return s();
        });
      }), await Rp(u, a).catch((s) => {
        throw new Error(`Failed to enable mocking: ${s == null ? void 0 : s.message}`);
      }), o;
    }
  );
  return a.waitUntilReady && Lh(n), n;
};
function fE(u = {}) {
  u.quiet || console.log(
    `%c${au.formatMessage("Mocking disabled.")}`,
    "color:orangered;font-weight:bold;"
  );
}
var _h = (u) => function() {
  var a;
  if (!u.isMockingEnabled) {
    au.warn(
      'Found a redundant "worker.stop()" call. Note that stopping the worker while mocking already stopped has no effect. Consider removing this "worker.stop()" call.'
    );
    return;
  }
  u.workerChannel.send("MOCK_DEACTIVATE"), u.isMockingEnabled = !1, window.clearInterval(u.keepAliveInterval), fE({ quiet: (a = u.startOptions) == null ? void 0 : a.quiet });
}, Gh = {
  serviceWorker: {
    url: "/mockServiceWorker.js",
    options: null
  },
  quiet: !1,
  waitUntilReady: !0,
  onUnhandledRequest: "warn",
  findWorker(u, e) {
    return u === e;
  }
}, Vh = F0, Ih = hr, Oh = lr, Jh = F0, dn = () => {
  throw new Error("Not implemented");
};
function $h(u) {
  return {
    ...u,
    ok: u.status >= 200 && u.status < 300,
    url: "",
    type: "default",
    status: u.status,
    statusText: u.statusText,
    headers: u.headers,
    body: new ReadableStream(),
    redirected: u.headers.get("Location") != null,
    async text() {
      return u.body || "";
    },
    async json() {
      return JSON.parse(u.body || "");
    },
    async arrayBuffer() {
      return (0, Jh.encodeBuffer)(u.body || "");
    },
    bodyUsed: !1,
    formData: dn,
    blob: dn,
    clone: dn
  };
}
function qh(u, e) {
  const a = new Vh.BatchInterceptor({
    name: "fallback",
    interceptors: [new Ih.FetchInterceptor(), new Oh.XMLHttpRequestInterceptor()]
  });
  return a.on("request", async (i) => {
    const r = new Na(i.url, {
      ...i,
      body: await i.arrayBuffer()
    }), n = await Et(
      r,
      u.requestHandlers,
      e,
      u.emitter,
      {
        transformResponse(o) {
          return {
            status: o.status,
            statusText: o.statusText,
            headers: o.headers.all(),
            body: o.body,
            delay: o.delay
          };
        },
        onMockedResponse(o, { handler: t, publicRequest: s, parsedRequest: l }) {
          e.quiet || u.emitter.once("response:mocked", (E) => {
            t.log(
              s,
              yE(E),
              l
            );
          });
        }
      }
    );
    n && i.respondWith(n);
  }), a.on("response", (i, r) => {
    if (!i.id)
      return;
    const n = $h(r);
    r.headers.get("x-powered-by") === "msw" ? u.emitter.emit("response:mocked", n, i.id) : u.emitter.emit("response:bypass", n, i.id);
  }), a.apply(), a;
}
function Wh(u) {
  return async function(a) {
    u.fallbackInterceptor = qh(
      u,
      a
    ), sE({
      message: "Mocking enabled (fallback mode).",
      quiet: a.quiet
    });
  };
}
function Uh(u) {
  return function() {
    var a, i;
    (a = u.fallbackInterceptor) == null || a.dispose(), fE({ quiet: (i = u.startOptions) == null ? void 0 : i.quiet });
  };
}
var Zh = Ta, h4 = xi;
function Yh(u, e) {
  const a = u.emit;
  a._isPiped || (u.emit = function(i, ...r) {
    return e.emit(i, ...r), a.call(this, i, ...r);
  }, u.emit._isPiped = !0);
}
function g4(u) {
  const e = [...u];
  return Object.freeze(e), e;
}
var zE = class {
  constructor(...u) {
    this.validateHandlers(...u), this.initialHandlers = g4(u), this.currentHandlers = [...u], this.emitter = new h4.Emitter(), this.publicEmitter = new h4.Emitter(), Yh(this.emitter, this.publicEmitter), this.events = this.createLifeCycleEvents();
  }
  validateHandlers(...u) {
    for (const e of u)
      (0, Zh.invariant)(
        !Array.isArray(e),
        au.formatMessage(
          'Failed to construct "%s" given an Array of request handlers. Make sure you spread the request handlers when calling the respective setup function.'
        ),
        this.constructor.name
      );
  }
  dispose() {
    this.emitter.removeAllListeners(), this.publicEmitter.removeAllListeners();
  }
  use(...u) {
    this.currentHandlers.unshift(...u);
  }
  restoreHandlers() {
    this.currentHandlers.forEach((u) => {
      u.markAsSkipped(!1);
    });
  }
  resetHandlers(...u) {
    this.currentHandlers = u.length > 0 ? [...u] : [...this.initialHandlers];
  }
  listHandlers() {
    return g4(this.currentHandlers);
  }
  createLifeCycleEvents() {
    return {
      on: (...u) => this.publicEmitter.on(...u),
      removeListener: (...u) => this.publicEmitter.removeListener(...u),
      removeAllListeners: (...u) => this.publicEmitter.removeAllListeners(...u)
    };
  }
}, SE = class extends zE {
  constructor(...u) {
    super(...u), this.startHandler = null, this.stopHandler = null, (0, Pp.invariant)(
      !(0, Tp.isNodeProcess)(),
      au.formatMessage(
        "Failed to execute `setupWorker` in a non-browser environment. Consider using `setupServer` for Node.js environment instead."
      )
    ), this.listeners = [], this.context = this.createWorkerContext();
  }
  createWorkerContext() {
    const u = {
      isMockingEnabled: !1,
      startOptions: null,
      worker: null,
      registration: null,
      requestHandlers: this.currentHandlers,
      emitter: this.emitter,
      workerChannel: {
        on: (e, a) => {
          this.context.events.addListener(
            navigator.serviceWorker,
            "message",
            (i) => {
              if (i.source !== this.context.worker)
                return;
              const r = i.data;
              r && r.type === e && a(i, r);
            }
          );
        },
        send: (e) => {
          var a;
          (a = this.context.worker) == null || a.postMessage(e);
        }
      },
      events: {
        addListener: (e, a, i) => (e.addEventListener(a, i), this.listeners.push({ eventType: a, target: e, callback: i }), () => {
          e.removeEventListener(a, i);
        }),
        removeAllListeners: () => {
          for (const { target: e, eventType: a, callback: i } of this.listeners)
            e.removeEventListener(a, i);
          this.listeners = [];
        },
        once: (e) => {
          const a = [];
          return new Promise((i, r) => {
            const n = (o) => {
              try {
                const t = o.data;
                t.type === e && i(t);
              } catch (t) {
                r(t);
              }
            };
            a.push(
              this.context.events.addListener(
                navigator.serviceWorker,
                "message",
                n
              ),
              this.context.events.addListener(
                navigator.serviceWorker,
                "messageerror",
                r
              )
            );
          }).finally(() => {
            a.forEach((i) => i());
          });
        }
      },
      useFallbackMode: !("serviceWorker" in navigator) || location.protocol === "file:"
    };
    return Object.defineProperties(u, {
      requestHandlers: {
        get: () => this.currentHandlers
      }
    }), this.startHandler = u.useFallbackMode ? Wh(u) : Hh(u), this.stopHandler = u.useFallbackMode ? Uh(u) : _h(u), u;
  }
  async start(u = {}) {
    return this.context.startOptions = we(
      Gh,
      u
    ), await this.startHandler(this.context.startOptions, u);
  }
  printHandlers() {
    this.listHandlers().forEach((e) => {
      const { header: a, callFrame: i } = e.info, r = e.info.hasOwnProperty("operationType") ? "[graphql]" : "[rest]";
      console.groupCollapsed(`${r} ${a}`), i && console.log(`Declaration: ${i}`), console.log("Handler:", e), console.groupEnd();
    });
  }
  stop() {
    super.dispose(), this.context.events.removeAllListeners(), this.context.emitter.removeAllListeners(), this.stopHandler();
  }
};
function Qh(...u) {
  return new SE(...u);
}
function z0(u) {
  return (e, a) => new lt(u, e, a);
}
var Xh = {
  all: z0(/.+/),
  head: z0(
    "HEAD"
    /* HEAD */
  ),
  get: z0(
    "GET"
    /* GET */
  ),
  post: z0(
    "POST"
    /* POST */
  ),
  put: z0(
    "PUT"
    /* PUT */
  ),
  delete: z0(
    "DELETE"
    /* DELETE */
  ),
  patch: z0(
    "PATCH"
    /* PATCH */
  ),
  options: z0(
    "OPTIONS"
    /* OPTIONS */
  )
};
function zi(u, e) {
  return (a, i) => new vr(
    u,
    a,
    e,
    i
  );
}
function ME(u) {
  return (e) => new vr(
    "all",
    new RegExp(".*"),
    u,
    e
  );
}
var ug = {
  operation: ME("*"),
  query: zi("query", "*"),
  mutation: zi("mutation", "*")
};
function eg(u) {
  return {
    operation: ME(u),
    query: zi("query", u),
    mutation: zi("mutation", u)
  };
}
var ag = {
  ...ug,
  link: eg
};
jp();
};
function cu(u) {
  let e = `[@faker-js/faker]: ${u.deprecated} is deprecated`;
  u.since && (e += ` since v${u.since}`), u.until && (e += ` and will be removed in v${u.until}`), u.proposed && (e += `. Please use ${u.proposed} instead`), console.warn(`${e}.`);
}
var Dru = ((u) => (u.female = "female", u.male = "male", u))(Dru || {}), YE = ((u) => (u.Female = "female", u.Male = "male", u))(YE || {});
function Qa(u, e, { generic: a, female: i, male: r } = {}) {
  let n;
  switch (e) {
    case "female":
      n = i;
      break;
    case "male":
      n = r;
      break;
    default:
      n = a;
      break;
  }
  return n == null && (i != null && r != null ? n = u.helpers.arrayElement([i, r]) : n = a), u.helpers.arrayElement(n);
}
var QE = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(QE.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  firstName(u) {
    let { first_name: e, female_first_name: a, male_first_name: i } = this.faker.definitions.name;
    return Qa(this.faker, u, { generic: e, female: a, male: i });
  }
  lastName(u) {
    let { last_name: e, female_last_name: a, male_last_name: i } = this.faker.definitions.name;
    return Qa(this.faker, u, { generic: e, female: a, male: i });
  }
  middleName(u) {
    let { middle_name: e, female_middle_name: a, male_middle_name: i } = this.faker.definitions.name;
    return Qa(this.faker, u, { generic: e, female: a, male: i });
  }
  findName(u, e, a) {
    return cu({ deprecated: "faker.name.findName()", proposed: "faker.name.fullName()", since: "7.4", until: "8.0" }), this.fullName({ firstName: u, lastName: e, sex: a });
  }
  fullName(u = {}) {
    let { gender: e, sex: a = e || this.faker.helpers.arrayElement(["female", "male"]), firstName: i = this.firstName(a), lastName: r = this.lastName(a) } = u;
    e && cu({ deprecated: "faker.name.fullName({ gender: '...' })", proposed: "faker.name.fullName({ sex: '...' })", since: "7.4", until: "8.0" });
    let n = [], o = this.faker.helpers.maybe(() => this.prefix(a), { probability: 0.125 });
    o && n.push(o), n.push(i), n.push(r);
    let t = this.faker.helpers.maybe(() => this.suffix(), { probability: 0.125 });
    return t && n.push(t), n.join(" ");
  }
  gender(u) {
    return u ? (cu({ deprecated: "faker.name.gender(true)", proposed: "faker.name.sex()", since: "7.5", until: "8.0" }), this.faker.name.sex()) : this.faker.helpers.arrayElement(this.faker.definitions.name.gender);
  }
  sex() {
    return this.faker.helpers.arrayElement(this.faker.definitions.name.sex);
  }
  sexType() {
    return this.faker.helpers.objectValue(YE);
  }
  prefix(u) {
    let { prefix: e, female_prefix: a, male_prefix: i } = this.faker.definitions.name;
    return Qa(this.faker, u, { generic: e, female: a, male: i });
  }
  suffix() {
    return this.faker.helpers.arrayElement(this.faker.definitions.name.suffix);
  }
  jobTitle() {
    return `${this.jobDescriptor()} ${this.jobArea()} ${this.jobType()}`;
  }
  jobDescriptor() {
    return this.faker.helpers.arrayElement(this.faker.definitions.name.title.descriptor);
  }
  jobArea() {
    return this.faker.helpers.arrayElement(this.faker.definitions.name.title.level);
  }
  jobType() {
    return this.faker.helpers.arrayElement(this.faker.definitions.name.title.job);
  }
}, XE = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(XE.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  zipCode(u) {
    if (u == null) {
      let e = this.faker.definitions.address.postcode;
      typeof e == "string" ? u = e : u = this.faker.helpers.arrayElement(e);
    }
    return this.faker.helpers.replaceSymbols(u);
  }
  zipCodeByState(u) {
    var e;
    let a = (e = this.faker.definitions.address.postcode_by_state) == null ? void 0 : e[u];
    return a ? String(this.faker.datatype.number(a)) : this.zipCode();
  }
  city(u) {
    u != null && cu({ deprecated: "faker.address.city(format)", proposed: "faker.address.city() or faker.helpers.fake(format)", since: "7.0", until: "8.0" });
    let e = this.faker.definitions.address.city;
    return typeof u != "number" && (u = this.faker.datatype.number(e.length - 1)), this.faker.helpers.fake(e[u]);
  }
  cityPrefix() {
    return cu({ deprecated: "faker.address.cityPrefix()", proposed: "faker.address.city() or faker.fake('{{address.city_prefix}}')", since: "7.2", until: "8.0" }), this.faker.helpers.arrayElement(this.faker.definitions.address.city_prefix);
  }
  citySuffix() {
    return cu({ deprecated: "faker.address.citySuffix()", proposed: "faker.address.city() or faker.helpers.fake('{{address.city_suffix}}')", since: "7.2", until: "8.0" }), this.faker.helpers.arrayElement(this.faker.definitions.address.city_suffix);
  }
  cityName() {
    return this.faker.helpers.arrayElement(this.faker.definitions.address.city_name);
  }
  buildingNumber() {
    let u = this.faker.helpers.arrayElement(this.faker.definitions.address.building_number);
    return this.faker.helpers.replaceSymbolWithNumber(u);
  }
  street() {
    let u = this.faker.helpers.arrayElement(this.faker.definitions.address.street);
    return this.faker.helpers.fake(u);
  }
  streetName() {
    return this.faker.definitions.address.street_name == null ? (cu({ deprecated: "faker.address.streetName() without address.street_name definitions", proposed: "faker.address.street() or provide address.street_name definitions", since: "7.0", until: "8.0" }), this.street()) : this.faker.helpers.arrayElement(this.faker.definitions.address.street_name);
  }
  streetAddress(u = !1) {
    let e = this.faker.definitions.address.street_address[u ? "full" : "normal"];
    return this.faker.helpers.fake(e);
  }
  streetSuffix() {
    return cu({ deprecated: "faker.address.streetSuffix()", proposed: "faker.address.street()", since: "7.4", until: "8.0" }), this.faker.helpers.arrayElement(this.faker.definitions.address.street_suffix);
  }
  streetPrefix() {
    return cu({ deprecated: "faker.address.streetPrefix()", proposed: "faker.address.street()", since: "7.4", until: "8.0" }), this.faker.helpers.arrayElement(this.faker.definitions.address.street_prefix);
  }
  secondaryAddress() {
    return this.faker.helpers.replaceSymbolWithNumber(this.faker.helpers.arrayElement(this.faker.definitions.address.secondary_address));
  }
  county() {
    return this.faker.helpers.arrayElement(this.faker.definitions.address.county);
  }
  country() {
    return this.faker.helpers.arrayElement(this.faker.definitions.address.country);
  }
  countryCode(u = "alpha-2") {
    let e = u === "alpha-3" ? "country_code_alpha_3" : "country_code";
    return this.faker.helpers.arrayElement(this.faker.definitions.address[e]);
  }
  state() {
    return this.faker.helpers.arrayElement(this.faker.definitions.address.state);
  }
  stateAbbr() {
    return this.faker.helpers.arrayElement(this.faker.definitions.address.state_abbr);
  }
  latitude(u = 90, e = -90, a = 4) {
    return this.faker.datatype.number({ min: e, max: u, precision: parseFloat(`${0 .toPrecision(a)}1`) }).toFixed(a);
  }
  longitude(u = 180, e = -180, a = 4) {
    return this.faker.datatype.number({ max: u, min: e, precision: parseFloat(`${0 .toPrecision(a)}1`) }).toFixed(a);
  }
  direction(u = !1) {
    return u ? this.faker.helpers.arrayElement(this.faker.definitions.address.direction_abbr) : this.faker.helpers.arrayElement(this.faker.definitions.address.direction);
  }
  cardinalDirection(u = !1) {
    return u ? this.faker.helpers.arrayElement(this.faker.definitions.address.direction_abbr.slice(0, 4)) : this.faker.helpers.arrayElement(this.faker.definitions.address.direction.slice(0, 4));
  }
  ordinalDirection(u = !1) {
    return u ? this.faker.helpers.arrayElement(this.faker.definitions.address.direction_abbr.slice(4, 8)) : this.faker.helpers.arrayElement(this.faker.definitions.address.direction.slice(4, 8));
  }
  nearbyGPSCoordinate(u, e = 10, a = !1) {
    if (u === void 0)
      return [this.latitude(), this.longitude()];
    let i = this.faker.datatype.float({ min: 0, max: 2 * Math.PI, precision: 1e-5 }), r = a ? e : e * 1.60934, n = 0.995, o = this.faker.datatype.float({ min: 0, max: r, precision: 1e-3 }) * n, t = 4e4 / 360, s = o / t, l = [u[0] + Math.sin(i) * s, u[1] + Math.cos(i) * s];
    return l[0] = l[0] % 180, (l[0] < -90 || l[0] > 90) && (l[0] = Math.sign(l[0]) * 180 - l[0], l[1] += 180), l[1] = (l[1] % 360 + 540) % 360 - 180, [l[0].toFixed(4), l[1].toFixed(4)];
  }
  timeZone() {
    return this.faker.helpers.arrayElement(this.faker.definitions.address.time_zone);
  }
}, uD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(uD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  dog() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.dog);
  }
  cat() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.cat);
  }
  snake() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.snake);
  }
  bear() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.bear);
  }
  lion() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.lion);
  }
  cetacean() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.cetacean);
  }
  horse() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.horse);
  }
  bird() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.bird);
  }
  cow() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.cow);
  }
  fish() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.fish);
  }
  crocodilia() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.crocodilia);
  }
  insect() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.insect);
  }
  rabbit() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.rabbit);
  }
  rodent() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.rodent);
  }
  type() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.type);
  }
}, xru = ["sRGB", "display-p3", "rec2020", "a98-rgb", "prophoto-rgb", "rec2020"], cru = ["rgb", "rgba", "hsl", "hsla", "hwb", "cmyk", "lab", "lch", "color"];
function dru(u, e) {
  switch (e == null ? void 0 : e.casing) {
    case "upper":
      u = u.toUpperCase();
      break;
    case "lower":
      u = u.toLowerCase();
      break;
  }
  return e != null && e.prefix && (u = e.prefix + u), u;
}
function eD(u) {
  return u.map((e) => {
    if (e % 1 !== 0) {
      let a = new ArrayBuffer(4);
      new DataView(a).setFloat32(0, e);
      let i = new Uint8Array(a);
      return eD(Array.from(i)).split(" ").join("");
    }
    return (e >>> 0).toString(2).padStart(8, "0");
  }).join(" ");
}
function mru(u, e = "rgb", a = "sRGB") {
  let i = (r) => Math.round(r * 100);
  switch (e) {
    case "rgba":
      return `rgba(${u[0]}, ${u[1]}, ${u[2]}, ${u[3]})`;
    case "color":
      return `color(${a} ${u[0]} ${u[1]} ${u[2]})`;
    case "cmyk":
      return `cmyk(${i(u[0])}%, ${i(u[1])}%, ${i(u[2])}%, ${i(u[3])}%)`;
    case "hsl":
      return `hsl(${u[0]}deg ${i(u[1])}% ${i(u[2])}%)`;
    case "hsla":
      return `hsl(${u[0]}deg ${i(u[1])}% ${i(u[2])}% / ${i(u[3])})`;
    case "hwb":
      return `hwb(${u[0]} ${i(u[1])}% ${i(u[2])}%)`;
    case "lab":
      return `lab(${i(u[0])}% ${u[1]} ${u[2]})`;
    case "lch":
      return `lch(${i(u[0])}% ${u[1]} ${u[2]})`;
    case "rgb":
    default:
      return `rgb(${u[0]}, ${u[1]}, ${u[2]})`;
  }
}
function O0(u, e, a = "rgb", i = "sRGB") {
  switch (e) {
    case "css":
      return mru(u, a, i);
    case "binary":
      return eD(u);
    default:
      return u;
  }
}
var aD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(aD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  human() {
    return this.faker.helpers.arrayElement(this.faker.definitions.color.human);
  }
  space() {
    return this.faker.helpers.arrayElement(this.faker.definitions.color.space);
  }
  cssSupportedFunction() {
    return this.faker.helpers.arrayElement(cru);
  }
  cssSupportedSpace() {
    return this.faker.helpers.arrayElement(xru);
  }
  rgb(u) {
    let { format: e = "hex", includeAlpha: a = !1, prefix: i = "#", casing: r = "lower" } = u || {};
    u = { format: e, includeAlpha: a, prefix: i, casing: r };
    let n, o = "rgb";
    return e === "hex" ? (n = this.faker.datatype.hexadecimal({ length: a ? 8 : 6, prefix: "" }), n = dru(n, u), n) : (n = Array.from({ length: 3 }).map(() => this.faker.datatype.number({ min: 0, max: 255 })), a && (n.push(this.faker.datatype.float({ min: 0, max: 1, precision: 0.01 })), o = "rgba"), O0(n, e, o));
  }
  cmyk(u) {
    let e = Array.from({ length: 4 }).map(() => this.faker.datatype.float({ min: 0, max: 1, precision: 0.01 }));
    return O0(e, (u == null ? void 0 : u.format) || "decimal", "cmyk");
  }
  hsl(u) {
    let e = [this.faker.datatype.number({ min: 0, max: 360 })];
    for (let a = 0; a < (u != null && u.includeAlpha ? 3 : 2); a++)
      e.push(this.faker.datatype.float({ min: 0, max: 1, precision: 0.01 }));
    return O0(e, (u == null ? void 0 : u.format) || "decimal", u != null && u.includeAlpha ? "hsla" : "hsl");
  }
  hwb(u) {
    let e = [this.faker.datatype.number({ min: 0, max: 360 })];
    for (let a = 0; a < 2; a++)
      e.push(this.faker.datatype.float({ min: 0, max: 1, precision: 0.01 }));
    return O0(e, (u == null ? void 0 : u.format) || "decimal", "hwb");
  }
  lab(u) {
    let e = [this.faker.datatype.float({ min: 0, max: 1, precision: 1e-6 })];
    for (let a = 0; a < 2; a++)
      e.push(this.faker.datatype.float({ min: -100, max: 100, precision: 1e-4 }));
    return O0(e, (u == null ? void 0 : u.format) || "decimal", "lab");
  }
  lch(u) {
    let e = [this.faker.datatype.float({ min: 0, max: 1, precision: 1e-6 })];
    for (let a = 0; a < 2; a++)
      e.push(this.faker.datatype.number({ min: 0, max: 230, precision: 0.1 }));
    return O0(e, (u == null ? void 0 : u.format) || "decimal", "lch");
  }
  colorByCSSColorSpace(u) {
    (u == null ? void 0 : u.format) === "css" && !(u != null && u.space) && (u = { ...u, space: "sRGB" });
    let e = Array.from({ length: 3 }).map(() => this.faker.datatype.float({ min: 0, max: 1, precision: 1e-4 }));
    return O0(e, (u == null ? void 0 : u.format) || "decimal", "color", u == null ? void 0 : u.space);
  }
}, iD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(iD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  color() {
    return cu({ deprecated: "faker.commerce.color()", proposed: "faker.color.human()", since: "7.0", until: "8.0" }), this.faker.color.human();
  }
  department() {
    return this.faker.helpers.arrayElement(this.faker.definitions.commerce.department);
  }
  productName() {
    return `${this.productAdjective()} ${this.productMaterial()} ${this.product()}`;
  }
  price(u = 1, e = 1e3, a = 2, i = "") {
    if (u < 0 || e < 0)
      return `${i}0`;
    let r = this.faker.datatype.number({ max: e, min: u });
    return i + (Math.round(r * Math.pow(10, a)) / Math.pow(10, a)).toFixed(a);
  }
  productAdjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.adjective);
  }
  productMaterial() {
    return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.material);
  }
  product() {
    return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.product);
  }
  productDescription() {
    return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_description);
  }
}, rD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(rD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  suffixes() {
    return this.faker.definitions.company.suffix.slice(0);
  }
  name(u) {
    var e;
    u != null && cu({ deprecated: "faker.company.name(format)", proposed: "faker.company.name() or faker.helpers.fake(format)", since: "7.4", until: "8.0" });
    let a = ["{{name.lastName}} {{company.companySuffix}}", "{{name.lastName}} - {{name.lastName}}", "{{name.lastName}}, {{name.lastName}} and {{name.lastName}}"], i = (e = this.faker.definitions.company.name_patterns) != null ? e : a;
    return typeof u != "number" && (u = this.faker.datatype.number(i.length - 1)), this.faker.helpers.fake(i[u]);
  }
  companyName(u) {
    return cu({ deprecated: "faker.company.companyName()", proposed: "faker.company.name()", since: "7.4", until: "8.0" }), this.name(u);
  }
  companySuffix() {
    return this.faker.helpers.arrayElement(this.suffixes());
  }
  catchPhrase() {
    return [this.catchPhraseAdjective(), this.catchPhraseDescriptor(), this.catchPhraseNoun()].join(" ");
  }
  bs() {
    return [this.bsBuzz(), this.bsAdjective(), this.bsNoun()].join(" ");
  }
  catchPhraseAdjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.adjective);
  }
  catchPhraseDescriptor() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.descriptor);
  }
  catchPhraseNoun() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.noun);
  }
  bsAdjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.bs_adjective);
  }
  bsBuzz() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.bs_verb);
  }
  bsNoun() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.bs_noun);
  }
}, nD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(nD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  column() {
    return this.faker.helpers.arrayElement(this.faker.definitions.database.column);
  }
  type() {
    return this.faker.helpers.arrayElement(this.faker.definitions.database.type);
  }
  collation() {
    return this.faker.helpers.arrayElement(this.faker.definitions.database.collation);
  }
  engine() {
    return this.faker.helpers.arrayElement(this.faker.definitions.database.engine);
  }
  mongodbObjectId() {
    return this.faker.datatype.hexadecimal({ length: 24, case: "lower", prefix: "" });
  }
}, oD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(oD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  number(u = 99999) {
    var e;
    typeof u == "number" && (u = { max: u });
    let { min: a = 0, precision: i = 1 } = u, r = (e = u.max) != null ? e : a + 99999;
    if (r === a)
      return a;
    if (r < a)
      throw new yu(`Max ${r} should be greater than min ${a}.`);
    return Math.floor(this.faker.mersenne.rand(r / i + 1, a / i)) / (1 / i);
  }
  float(u) {
    typeof u == "number" && (u = { precision: u }), u = u || {};
    let e = {};
    for (let a in u)
      e[a] = u[a];
    return e.precision == null && (e.precision = 0.01), this.number(e);
  }
  datetime(u = {}) {
    let e = typeof u == "number" ? void 0 : u.min, a = typeof u == "number" ? u : u.max;
    return (e == null || e < 864e13 * -1) && (e = Date.UTC(1990, 0)), (a == null || a > 864e13) && (a = Date.UTC(2100, 0)), new Date(this.number({ min: e, max: a }));
  }
  string(u = 10) {
    let e = Math.pow(2, 20);
    u >= e && (u = e);
    let a = { min: 33, max: 125 }, i = "";
    for (let r = 0; r < u; r++)
      i += String.fromCharCode(this.number(a));
    return i;
  }
  uuid() {
    let u = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", e = (a) => {
      let i = this.number({ min: 0, max: 15 });
      return (a === "x" ? i : i & 3 | 8).toString(16);
    };
    return u.replace(/[xy]/g, e);
  }
  boolean() {
    return !!this.number(1);
  }
  hexadecimal(u = {}) {
    typeof u == "number" && (cu({ deprecated: "faker.datatype.hexadecimal(length)", proposed: "faker.datatype.hexadecimal({ length })", since: "7.5", until: "8.0" }), u = { length: u });
    let { length: e = 1, prefix: a = "0x", case: i = "mixed" } = u, r = "";
    for (let n = 0; n < e; n++)
      r += this.faker.helpers.arrayElement(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"]);
    return i === "upper" ? r = r.toUpperCase() : i === "lower" && (r = r.toLowerCase()), `${a}${r}`;
  }
  json() {
    let u = ["foo", "bar", "bike", "a", "b", "name", "prop"], e = {};
    return u.forEach((a) => {
      e[a] = this.boolean() ? this.string() : this.number();
    }), JSON.stringify(e);
  }
  array(u = 10) {
    return Array.from({ length: u }).map(() => this.boolean() ? this.string() : this.number());
  }
  bigInt(u) {
    var e, a;
    let i, r;
    if (typeof u == "object" ? (i = BigInt((e = u.min) != null ? e : 0), r = BigInt((a = u.max) != null ? a : i + BigInt(999999999999999))) : (i = BigInt(0), r = BigInt(u ?? 999999999999999)), r === i)
      return i;
    if (r < i)
      throw new yu(`Max ${r} should be larger then min ${i}.`);
    let n = r - i, o = BigInt(this.faker.random.numeric(n.toString(10).length, { allowLeadingZeros: !0 })) % (n + BigInt(1));
    return i + o;
  }
};
function J0(u) {
  return u = new Date(u), isNaN(u.valueOf()) && (u = /* @__PURE__ */ new Date()), u;
}
var tD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(tD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  past(u, e) {
    let a = J0(e), i = { min: 1e3, max: (u || 1) * 365 * 24 * 3600 * 1e3 }, r = a.getTime();
    return r -= this.faker.datatype.number(i), a.setTime(r), a;
  }
  future(u, e) {
    let a = J0(e), i = { min: 1e3, max: (u || 1) * 365 * 24 * 3600 * 1e3 }, r = a.getTime();
    return r += this.faker.datatype.number(i), a.setTime(r), a;
  }
  between(u, e) {
    let a = J0(u).getTime(), i = J0(e).getTime(), r = this.faker.datatype.number(i - a);
    return new Date(a + r);
  }
  betweens(u, e, a = 3) {
    let i = [];
    for (; i.length < a; )
      i.push(this.between(u, e));
    return i.sort((r, n) => r.getTime() - n.getTime());
  }
  recent(u, e) {
    let a = J0(e), i = { min: 1e3, max: (u || 1) * 24 * 3600 * 1e3 }, r = a.getTime();
    return r -= this.faker.datatype.number(i), a.setTime(r), a;
  }
  soon(u, e) {
    let a = J0(e), i = { min: 1e3, max: (u || 1) * 24 * 3600 * 1e3 }, r = a.getTime();
    return r += this.faker.datatype.number(i), a.setTime(r), a;
  }
  month(u) {
    var e, a;
    let i = (e = u == null ? void 0 : u.abbr) != null ? e : !1, r = (a = u == null ? void 0 : u.context) != null ? a : !1, n = this.faker.definitions.date.month, o;
    return i ? r && n.abbr_context != null ? o = "abbr_context" : o = "abbr" : r && n.wide_context != null ? o = "wide_context" : o = "wide", this.faker.helpers.arrayElement(n[o]);
  }
  weekday(u) {
    var e, a;
    let i = (e = u == null ? void 0 : u.abbr) != null ? e : !1, r = (a = u == null ? void 0 : u.context) != null ? a : !1, n = this.faker.definitions.date.weekday, o;
    return i ? r && n.abbr_context != null ? o = "abbr_context" : o = "abbr" : r && n.wide_context != null ? o = "wide_context" : o = "wide", this.faker.helpers.arrayElement(n[o]);
  }
  birthdate(u = {}) {
    var e, a, i, r;
    let n = u.mode === "age" ? "age" : "year", o = J0(u.refDate), t = o.getUTCFullYear(), s, l;
    if (n === "age" ? (s = new Date(o).setUTCFullYear(t - ((e = u.max) != null ? e : 80) - 1), l = new Date(o).setUTCFullYear(t - ((a = u.min) != null ? a : 18))) : (s = new Date(Date.UTC(0, 0, 2)).setUTCFullYear((i = u.min) != null ? i : t - 80), l = new Date(Date.UTC(0, 11, 30)).setUTCFullYear((r = u.max) != null ? r : t - 18)), l < s)
      throw new yu(`Max ${l} should be larger then min ${s}.`);
    return new Date(this.faker.datatype.number({ min: s, max: l }));
  }
}, sD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(sD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  fake(u) {
    return cu({ deprecated: "faker.fake()", proposed: "faker.helpers.fake()", since: "7.4", until: "8.0" }), this.faker.helpers.fake(u);
  }
}, Fru = { alpha: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], formats: [{ country: "AL", total: 28, bban: [{ type: "n", count: 8 }, { type: "c", count: 16 }], format: "ALkk bbbs sssx cccc cccc cccc cccc" }, { country: "AD", total: 24, bban: [{ type: "n", count: 8 }, { type: "c", count: 12 }], format: "ADkk bbbb ssss cccc cccc cccc" }, { country: "AT", total: 20, bban: [{ type: "n", count: 5 }, { type: "n", count: 11 }], format: "ATkk bbbb bccc cccc cccc" }, { country: "AZ", total: 28, bban: [{ type: "a", count: 4 }, { type: "n", count: 20 }], format: "AZkk bbbb cccc cccc cccc cccc cccc" }, { country: "BH", total: 22, bban: [{ type: "a", count: 4 }, { type: "c", count: 14 }], format: "BHkk bbbb cccc cccc cccc cc" }, { country: "BE", total: 16, bban: [{ type: "n", count: 3 }, { type: "n", count: 9 }], format: "BEkk bbbc cccc ccxx" }, { country: "BA", total: 20, bban: [{ type: "n", count: 6 }, { type: "n", count: 10 }], format: "BAkk bbbs sscc cccc ccxx" }, { country: "BR", total: 29, bban: [{ type: "n", count: 13 }, { type: "n", count: 10 }, { type: "a", count: 1 }, { type: "c", count: 1 }], format: "BRkk bbbb bbbb ssss sccc cccc ccct n" }, { country: "BG", total: 22, bban: [{ type: "a", count: 4 }, { type: "n", count: 6 }, { type: "c", count: 8 }], format: "BGkk bbbb ssss ddcc cccc cc" }, { country: "CR", total: 22, bban: [{ type: "n", count: 1 }, { type: "n", count: 3 }, { type: "n", count: 14 }], format: "CRkk xbbb cccc cccc cccc cc" }, { country: "HR", total: 21, bban: [{ type: "n", count: 7 }, { type: "n", count: 10 }], format: "HRkk bbbb bbbc cccc cccc c" }, { country: "CY", total: 28, bban: [{ type: "n", count: 8 }, { type: "c", count: 16 }], format: "CYkk bbbs ssss cccc cccc cccc cccc" }, { country: "CZ", total: 24, bban: [{ type: "n", count: 10 }, { type: "n", count: 10 }], format: "CZkk bbbb ssss sscc cccc cccc" }, { country: "DK", total: 18, bban: [{ type: "n", count: 4 }, { type: "n", count: 10 }], format: "DKkk bbbb cccc cccc cc" }, { country: "DO", total: 28, bban: [{ type: "a", count: 4 }, { type: "n", count: 20 }], format: "DOkk bbbb cccc cccc cccc cccc cccc" }, { country: "TL", total: 23, bban: [{ type: "n", count: 3 }, { type: "n", count: 16 }], format: "TLkk bbbc cccc cccc cccc cxx" }, { country: "EE", total: 20, bban: [{ type: "n", count: 4 }, { type: "n", count: 12 }], format: "EEkk bbss cccc cccc cccx" }, { country: "FO", total: 18, bban: [{ type: "n", count: 4 }, { type: "n", count: 10 }], format: "FOkk bbbb cccc cccc cx" }, { country: "FI", total: 18, bban: [{ type: "n", count: 6 }, { type: "n", count: 8 }], format: "FIkk bbbb bbcc cccc cx" }, { country: "FR", total: 27, bban: [{ type: "n", count: 10 }, { type: "c", count: 11 }, { type: "n", count: 2 }], format: "FRkk bbbb bggg ggcc cccc cccc cxx" }, { country: "GE", total: 22, bban: [{ type: "a", count: 2 }, { type: "n", count: 16 }], format: "GEkk bbcc cccc cccc cccc cc" }, { country: "DE", total: 22, bban: [{ type: "n", count: 8 }, { type: "n", count: 10 }], format: "DEkk bbbb bbbb cccc cccc cc" }, { country: "GI", total: 23, bban: [{ type: "a", count: 4 }, { type: "c", count: 15 }], format: "GIkk bbbb cccc cccc cccc ccc" }, { country: "GR", total: 27, bban: [{ type: "n", count: 7 }, { type: "c", count: 16 }], format: "GRkk bbbs sssc cccc cccc cccc ccc" }, { country: "GL", total: 18, bban: [{ type: "n", count: 4 }, { type: "n", count: 10 }], format: "GLkk bbbb cccc cccc cc" }, { country: "GT", total: 28, bban: [{ type: "c", count: 4 }, { type: "c", count: 4 }, { type: "c", count: 16 }], format: "GTkk bbbb mmtt cccc cccc cccc cccc" }, { country: "HU", total: 28, bban: [{ type: "n", count: 8 }, { type: "n", count: 16 }], format: "HUkk bbbs sssk cccc cccc cccc cccx" }, { country: "IS", total: 26, bban: [{ type: "n", count: 6 }, { type: "n", count: 16 }], format: "ISkk bbbb sscc cccc iiii iiii ii" }, { country: "IE", total: 22, bban: [{ type: "c", count: 4 }, { type: "n", count: 6 }, { type: "n", count: 8 }], format: "IEkk aaaa bbbb bbcc cccc cc" }, { country: "IL", total: 23, bban: [{ type: "n", count: 6 }, { type: "n", count: 13 }], format: "ILkk bbbn nncc cccc cccc ccc" }, { country: "IT", total: 27, bban: [{ type: "a", count: 1 }, { type: "n", count: 10 }, { type: "c", count: 12 }], format: "ITkk xaaa aabb bbbc cccc cccc ccc" }, { country: "JO", total: 30, bban: [{ type: "a", count: 4 }, { type: "n", count: 4 }, { type: "n", count: 18 }], format: "JOkk bbbb nnnn cccc cccc cccc cccc cc" }, { country: "KZ", total: 20, bban: [{ type: "n", count: 3 }, { type: "c", count: 13 }], format: "KZkk bbbc cccc cccc cccc" }, { country: "XK", total: 20, bban: [{ type: "n", count: 4 }, { type: "n", count: 12 }], format: "XKkk bbbb cccc cccc cccc" }, { country: "KW", total: 30, bban: [{ type: "a", count: 4 }, { type: "c", count: 22 }], format: "KWkk bbbb cccc cccc cccc cccc cccc cc" }, { country: "LV", total: 21, bban: [{ type: "a", count: 4 }, { type: "c", count: 13 }], format: "LVkk bbbb cccc cccc cccc c" }, { country: "LB", total: 28, bban: [{ type: "n", count: 4 }, { type: "c", count: 20 }], format: "LBkk bbbb cccc cccc cccc cccc cccc" }, { country: "LI", total: 21, bban: [{ type: "n", count: 5 }, { type: "c", count: 12 }], format: "LIkk bbbb bccc cccc cccc c" }, { country: "LT", total: 20, bban: [{ type: "n", count: 5 }, { type: "n", count: 11 }], format: "LTkk bbbb bccc cccc cccc" }, { country: "LU", total: 20, bban: [{ type: "n", count: 3 }, { type: "c", count: 13 }], format: "LUkk bbbc cccc cccc cccc" }, { country: "MK", total: 19, bban: [{ type: "n", count: 3 }, { type: "c", count: 10 }, { type: "n", count: 2 }], format: "MKkk bbbc cccc cccc cxx" }, { country: "MT", total: 31, bban: [{ type: "a", count: 4 }, { type: "n", count: 5 }, { type: "c", count: 18 }], format: "MTkk bbbb ssss sccc cccc cccc cccc ccc" }, { country: "MR", total: 27, bban: [{ type: "n", count: 10 }, { type: "n", count: 13 }], format: "MRkk bbbb bsss sscc cccc cccc cxx" }, { country: "MU", total: 30, bban: [{ type: "a", count: 4 }, { type: "n", count: 4 }, { type: "n", count: 15 }, { type: "a", count: 3 }], format: "MUkk bbbb bbss cccc cccc cccc 000d dd" }, { country: "MC", total: 27, bban: [{ type: "n", count: 10 }, { type: "c", count: 11 }, { type: "n", count: 2 }], format: "MCkk bbbb bsss sscc cccc cccc cxx" }, { country: "MD", total: 24, bban: [{ type: "c", count: 2 }, { type: "c", count: 18 }], format: "MDkk bbcc cccc cccc cccc cccc" }, { country: "ME", total: 22, bban: [{ type: "n", count: 3 }, { type: "n", count: 15 }], format: "MEkk bbbc cccc cccc cccc xx" }, { country: "NL", total: 18, bban: [{ type: "a", count: 4 }, { type: "n", count: 10 }], format: "NLkk bbbb cccc cccc cc" }, { country: "NO", total: 15, bban: [{ type: "n", count: 4 }, { type: "n", count: 7 }], format: "NOkk bbbb cccc ccx" }, { country: "PK", total: 24, bban: [{ type: "a", count: 4 }, { type: "n", count: 16 }], format: "PKkk bbbb cccc cccc cccc cccc" }, { country: "PS", total: 29, bban: [{ type: "c", count: 4 }, { type: "n", count: 9 }, { type: "n", count: 12 }], format: "PSkk bbbb xxxx xxxx xccc cccc cccc c" }, { country: "PL", total: 28, bban: [{ type: "n", count: 8 }, { type: "n", count: 16 }], format: "PLkk bbbs sssx cccc cccc cccc cccc" }, { country: "PT", total: 25, bban: [{ type: "n", count: 8 }, { type: "n", count: 13 }], format: "PTkk bbbb ssss cccc cccc cccx x" }, { country: "QA", total: 29, bban: [{ type: "a", count: 4 }, { type: "c", count: 21 }], format: "QAkk bbbb cccc cccc cccc cccc cccc c" }, { country: "RO", total: 24, bban: [{ type: "a", count: 4 }, { type: "c", count: 16 }], format: "ROkk bbbb cccc cccc cccc cccc" }, { country: "SM", total: 27, bban: [{ type: "a", count: 1 }, { type: "n", count: 10 }, { type: "c", count: 12 }], format: "SMkk xaaa aabb bbbc cccc cccc ccc" }, { country: "SA", total: 24, bban: [{ type: "n", count: 2 }, { type: "c", count: 18 }], format: "SAkk bbcc cccc cccc cccc cccc" }, { country: "RS", total: 22, bban: [{ type: "n", count: 3 }, { type: "n", count: 15 }], format: "RSkk bbbc cccc cccc cccc xx" }, { country: "SK", total: 24, bban: [{ type: "n", count: 10 }, { type: "n", count: 10 }], format: "SKkk bbbb ssss sscc cccc cccc" }, { country: "SI", total: 19, bban: [{ type: "n", count: 5 }, { type: "n", count: 10 }], format: "SIkk bbss sccc cccc cxx" }, { country: "ES", total: 24, bban: [{ type: "n", count: 10 }, { type: "n", count: 10 }], format: "ESkk bbbb gggg xxcc cccc cccc" }, { country: "SE", total: 24, bban: [{ type: "n", count: 3 }, { type: "n", count: 17 }], format: "SEkk bbbc cccc cccc cccc cccc" }, { country: "CH", total: 21, bban: [{ type: "n", count: 5 }, { type: "c", count: 12 }], format: "CHkk bbbb bccc cccc cccc c" }, { country: "TN", total: 24, bban: [{ type: "n", count: 5 }, { type: "n", count: 15 }], format: "TNkk bbss sccc cccc cccc cccc" }, { country: "TR", total: 26, bban: [{ type: "n", count: 5 }, { type: "n", count: 1 }, { type: "n", count: 16 }], format: "TRkk bbbb bxcc cccc cccc cccc cc" }, { country: "AE", total: 23, bban: [{ type: "n", count: 3 }, { type: "n", count: 16 }], format: "AEkk bbbc cccc cccc cccc ccc" }, { country: "GB", total: 22, bban: [{ type: "a", count: 4 }, { type: "n", count: 6 }, { type: "n", count: 8 }], format: "GBkk bbbb ssss sscc cccc cc" }, { country: "VG", total: 24, bban: [{ type: "c", count: 4 }, { type: "n", count: 16 }], format: "VGkk bbbb cccc cccc cccc cccc" }], iso3166: ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"], mod97: (u) => {
  let e = 0;
  for (let a = 0; a < u.length; a++)
    e = (e * 10 + +u[a]) % 97;
  return e;
}, pattern10: ["01", "02", "03", "04", "05", "06", "07", "08", "09"], pattern100: ["001", "002", "003", "004", "005", "006", "007", "008", "009"], toDigitString: (u) => u.replace(/[A-Z]/gi, (e) => String(e.toUpperCase().charCodeAt(0) - 55)) }, d0 = Fru, lD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(lD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  account(u) {
    u = u || 8;
    let e = "";
    for (let a = 0; a < u; a++)
      e += "#";
    return u = null, this.faker.helpers.replaceSymbolWithNumber(e);
  }
  accountName() {
    return [this.faker.helpers.arrayElement(this.faker.definitions.finance.account_type), "Account"].join(" ");
  }
  routingNumber() {
    let u = this.faker.helpers.replaceSymbolWithNumber("########"), e = 0;
    for (let a = 0; a < u.length; a += 3)
      e += Number(u[a]) * 3, e += Number(u[a + 1]) * 7, e += Number(u[a + 2]) || 0;
    return `${u}${Math.ceil(e / 10) * 10 - e}`;
  }
  mask(u, e, a) {
    u = u || 4, e = e ?? !0, a = a ?? !0;
    let i = "";
    for (let r = 0; r < u; r++)
      i = `${i}#`;
    return i = a ? ["...", i].join("") : i, i = e ? ["(", i, ")"].join("") : i, i = this.faker.helpers.replaceSymbolWithNumber(i), i;
  }
  amount(u = 0, e = 1e3, a = 2, i = "", r) {
    let n = this.faker.datatype.number({ max: e, min: u, precision: Math.pow(10, -a) }), o;
    return r ? o = n.toLocaleString(void 0, { minimumFractionDigits: a }) : o = n.toFixed(a), i + o;
  }
  transactionType() {
    return this.faker.helpers.arrayElement(this.faker.definitions.finance.transaction_type);
  }
  currencyCode() {
    return this.faker.helpers.objectValue(this.faker.definitions.finance.currency).code;
  }
  currencyName() {
    return this.faker.helpers.objectKey(this.faker.definitions.finance.currency);
  }
  currencySymbol() {
    let u;
    for (; !u; )
      u = this.faker.helpers.objectValue(this.faker.definitions.finance.currency).symbol;
    return u;
  }
  bitcoinAddress() {
    let u = this.faker.datatype.number({ min: 25, max: 39 }), e = this.faker.helpers.arrayElement(["1", "3"]);
    return e += this.faker.random.alphaNumeric(u, { casing: "mixed", bannedChars: "0OIl" }), e;
  }
  litecoinAddress() {
    let u = this.faker.datatype.number({ min: 26, max: 33 }), e = this.faker.helpers.arrayElement(["L", "M", "3"]);
    for (let a = 0; a < u - 1; a++)
      e += this.faker.helpers.arrayElement("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ".split(""));
    return e;
  }
  creditCardNumber(u = "") {
    let e, a = this.faker.definitions.finance.credit_card, i = u.toLowerCase();
    if (i in a)
      e = this.faker.helpers.arrayElement(a[i]);
    else if (u.match(/#/))
      e = u;
    else {
      let r = this.faker.helpers.objectValue(a);
      e = this.faker.helpers.arrayElement(r);
    }
    return e = e.replace(/\//g, ""), this.faker.helpers.replaceCreditCardSymbols(e);
  }
  creditCardCVV() {
    let u = "";
    for (let e = 0; e < 3; e++)
      u += this.faker.datatype.number({ max: 9 }).toString();
    return u;
  }
  creditCardIssuer() {
    return this.faker.helpers.objectKey(this.faker.definitions.finance.credit_card);
  }
  pin(u = 4) {
    if (u < 1)
      throw new yu("minimum length is 1");
    return Array.from({ length: u }, () => this.faker.datatype.number(9)).join("");
  }
  ethereumAddress() {
    return this.faker.datatype.hexadecimal({ length: 40, case: "lower" });
  }
  iban(u = !1, e) {
    let a = e ? d0.formats.find((t) => t.country === e) : this.faker.helpers.arrayElement(d0.formats);
    if (!a)
      throw new yu(`Country code ${e} not supported.`);
    let i = "", r = 0;
    for (let t of a.bban) {
      let s = t.count;
      for (r += t.count; s > 0; )
        t.type === "a" ? i += this.faker.helpers.arrayElement(d0.alpha) : t.type === "c" ? this.faker.datatype.number(100) < 80 ? i += this.faker.datatype.number(9) : i += this.faker.helpers.arrayElement(d0.alpha) : s >= 3 && this.faker.datatype.number(100) < 30 ? this.faker.datatype.boolean() ? (i += this.faker.helpers.arrayElement(d0.pattern100), s -= 2) : (i += this.faker.helpers.arrayElement(d0.pattern10), s--) : i += this.faker.datatype.number(9), s--;
      i = i.substring(0, r);
    }
    let n = 98 - d0.mod97(d0.toDigitString(`${i}${a.country}00`));
    n < 10 && (n = `0${n}`);
    let o = `${a.country}${n}${i}`;
    return u ? o.match(/.{1,4}/g).join(" ") : o;
  }
  bic(u = {}) {
    let { includeBranchCode: e = this.faker.datatype.boolean() } = u, a = this.faker.random.alpha({ count: 4, casing: "upper" }), i = this.faker.helpers.arrayElement(d0.iso3166), r = this.faker.random.alphaNumeric(2, { casing: "upper" }), n = e ? this.faker.datatype.boolean() ? this.faker.random.alphaNumeric(3, { casing: "upper" }) : "XXX" : "";
    return `${a}${i}${r}${n}`;
  }
  transactionDescription() {
    let u = this.amount(), e = this.faker.company.name(), a = this.transactionType(), i = this.account(), r = this.mask(), n = this.currencyCode();
    return `${a} transaction at ${e} using card ending with ***${r} for ${n} ${u} in account ***${i}`;
  }
}, ED = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(ED.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  branch() {
    let u = this.faker.hacker.noun().replace(" ", "-"), e = this.faker.hacker.verb().replace(" ", "-");
    return `${u}-${e}`;
  }
  commitEntry(u = {}) {
    let { merge: e = this.faker.datatype.number({ min: 0, max: 4 }) === 0, eol: a = "CRLF" } = u, i = [`commit ${this.faker.git.commitSha()}`];
    e && i.push(`Merge: ${this.shortSha()} ${this.shortSha()}`), i.push(`Author: ${this.faker.name.firstName()} ${this.faker.name.lastName()} <${this.faker.internet.email()}>`, `Date: ${this.faker.date.recent().toString()}`, "", `    ${this.commitMessage()}`, "");
    let r = a === "CRLF" ? `\r
` : `
`;
    return i.join(r);
  }
  commitMessage() {
    return `${this.faker.hacker.verb()} ${this.faker.hacker.adjective()} ${this.faker.hacker.noun()}`;
  }
  commitSha() {
    return this.faker.datatype.hexadecimal({ length: 40, case: "lower", prefix: "" });
  }
  shortSha() {
    return this.faker.datatype.hexadecimal({ length: 7, case: "lower", prefix: "" });
  }
}, DD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(DD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  abbreviation() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.abbreviation);
  }
  adjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.adjective);
  }
  noun() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.noun);
  }
  verb() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.verb);
  }
  ingverb() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.ingverb);
  }
  phrase() {
    let u = { abbreviation: this.abbreviation, adjective: this.adjective, ingverb: this.ingverb, noun: this.noun, verb: this.verb }, e = this.faker.helpers.arrayElement(this.faker.definitions.hacker.phrase);
    return this.faker.helpers.mustache(e, u);
  }
};
function kru(u) {
  let e = pru(u.replace(/L?$/, "0"));
  return e === 0 ? 0 : 10 - e;
}
function pru(u) {
  u = u.replace(/[\s-]/g, "");
  let e = 0, a = !1;
  for (let i = u.length - 1; i >= 0; i--) {
    let r = parseInt(u.substring(i, i + 1));
    a && (r *= 2, r > 9 && (r = r % 10 + 1)), e += r, a = !a;
  }
  return e % 10;
}
var hru = {}, gru = [];
function Cru(u, e) {
  return u[e] === void 0 ? -1 : 0;
}
function C4(u, e, a, i, r) {
  throw console.error("Error", a), console.log(`Found ${Object.keys(i).length} unique entries before throwing error.
retried: ${r}
total time: ${e - u}ms`), new yu(`${a} for uniqueness check.

May not be able to generate any more unique values with current settings.
Try adjusting maxTime or maxRetries parameters for faker.helpers.unique().`);
}
function xD(u, e, a = {}) {
  var i;
  let r = (/* @__PURE__ */ new Date()).getTime(), { startTime: n = (/* @__PURE__ */ new Date()).getTime(), maxTime: o = 50, maxRetries: t = 50, compare: s = Cru, store: l = hru } = a, { exclude: E = gru } = a;
  if (a.currentIterations = (i = a.currentIterations) != null ? i : 0, Array.isArray(E) || (E = [E]), r - n >= o)
    return C4(n, r, `Exceeded maxTime: ${o}`, l, a.currentIterations);
  if (a.currentIterations >= t)
    return C4(n, r, `Exceeded maxRetries: ${t}`, l, a.currentIterations);
  let D = u.apply(this, e);
  return s(l, D) === -1 && E.indexOf(D) === -1 ? (l[D] = D, a.currentIterations = 0, D) : (a.currentIterations++, xD(u, e, { ...a, startTime: n, maxTime: o, maxRetries: t, compare: s, exclude: E }));
}
var cD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(cD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  slugify(u = "") {
    return u.replace(/ /g, "-").replace(/[^\一-龠\ぁ-ゔ\ァ-ヴー\w\.\-]+/g, "");
  }
  replaceSymbolWithNumber(u = "", e = "#") {
    let a = "";
    for (let i = 0; i < u.length; i++)
      u.charAt(i) === e ? a += this.faker.datatype.number(9) : u.charAt(i) === "!" ? a += this.faker.datatype.number({ min: 2, max: 9 }) : a += u.charAt(i);
    return a;
  }
  replaceSymbols(u = "") {
    let e = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], a = "";
    for (let i = 0; i < u.length; i++)
      u.charAt(i) === "#" ? a += this.faker.datatype.number(9) : u.charAt(i) === "?" ? a += this.arrayElement(e) : u.charAt(i) === "*" ? a += this.faker.datatype.boolean() ? this.arrayElement(e) : this.faker.datatype.number(9) : a += u.charAt(i);
    return a;
  }
  replaceCreditCardSymbols(u = "6453-####-####-####-###L", e = "#") {
    u = this.regexpStyleStringParse(u), u = this.replaceSymbolWithNumber(u, e);
    let a = kru(u);
    return u.replace("L", String(a));
  }
  repeatString(u = "", e = 0) {
    return cu({ deprecated: "faker.helpers.repeatString()", proposed: "String.prototype.repeat()", since: "7.5", until: "8.0" }), u.repeat(e);
  }
  regexpStyleStringParse(u = "") {
    let e = /(.)\{(\d+)\,(\d+)\}/, a = /(.)\{(\d+)\}/, i = /\[(\d+)\-(\d+)\]/, r, n, o, t, s = u.match(e);
    for (; s != null; )
      r = parseInt(s[2]), n = parseInt(s[3]), r > n && (o = n, n = r, r = o), t = this.faker.datatype.number({ min: r, max: n }), u = u.slice(0, s.index) + s[1].repeat(t) + u.slice(s.index + s[0].length), s = u.match(e);
    for (s = u.match(a); s != null; )
      t = parseInt(s[2]), u = u.slice(0, s.index) + s[1].repeat(t) + u.slice(s.index + s[0].length), s = u.match(a);
    for (s = u.match(i); s != null; )
      r = parseInt(s[1]), n = parseInt(s[2]), r > n && (o = n, n = r, r = o), u = u.slice(0, s.index) + this.faker.datatype.number({ min: r, max: n }).toString() + u.slice(s.index + s[0].length), s = u.match(i);
    return u;
  }
  shuffle(u) {
    if (u == null || u.length === 0)
      return u || [];
    for (let e = u.length - 1; e > 0; --e) {
      let a = this.faker.datatype.number(e), i = u[e];
      u[e] = u[a], u[a] = i;
    }
    return u;
  }
  uniqueArray(u, e) {
    if (Array.isArray(u)) {
      let i = new Set(u), r = Array.from(i);
      return this.shuffle(r).splice(0, e);
    }
    let a = /* @__PURE__ */ new Set();
    try {
      if (typeof u == "function")
        for (; a.size < e; )
          a.add(u());
    } catch {
    }
    return Array.from(a);
  }
  mustache(u, e) {
    if (u == null)
      return "";
    for (let a in e) {
      let i = new RegExp(`{{${a}}}`, "g"), r = e[a];
      u = u.replace(i, r);
    }
    return u;
  }
  maybe(u, e = {}) {
    let { probability: a = 0.5 } = e;
    if (this.faker.datatype.float({ min: 0, max: 1 }) < a)
      return u();
  }
  objectKey(u) {
    let e = Object.keys(u);
    return this.arrayElement(e);
  }
  objectValue(u) {
    let e = this.faker.helpers.objectKey(u);
    return u[e];
  }
  arrayElement(u = ["a", "b", "c"]) {
    let e = u.length > 1 ? this.faker.datatype.number({ max: u.length - 1 }) : 0;
    return u[e];
  }
  arrayElements(u = ["a", "b", "c"], e) {
    typeof e != "number" ? e = u.length === 0 ? 0 : this.faker.datatype.number({ min: 1, max: u.length }) : e > u.length ? e = u.length : e < 0 && (e = 0);
    let a = u.slice(0), i = u.length, r = i - e, n, o;
    for (; i-- > r; )
      o = Math.floor((i + 1) * this.faker.datatype.float({ min: 0, max: 0.99 })), n = a[o], a[o] = a[i], a[i] = n;
    return a.slice(r);
  }
  fake(u) {
    if (typeof u != "string" || u.length === 0)
      throw new yu("string parameter is required!");
    let e = u.search(/{{[a-z]/), a = u.indexOf("}}", e);
    if (e === -1 || a === -1)
      return u;
    let i = u.substring(e + 2, a + 2).replace("}}", "").replace("{{", ""), r = /\(([^)]+)\)/, n = r.exec(i), o = "";
    n && (i = i.replace(r, ""), o = n[1]);
    let t = i.split("."), s = this.faker, l = this.faker.definitions;
    for (let d of t)
      s = s == null ? void 0 : s[d], l = l == null ? void 0 : l[d];
    let E;
    if (typeof s == "function")
      E = s;
    else if (Array.isArray(l))
      E = () => this.faker.helpers.arrayElement(l);
    else
      throw new yu(`Invalid module method or definition: ${i}
- faker.${i} is not a function
- faker.definitions.${i} is not an array`);
    E = E.bind(this);
    let D;
    try {
      D = JSON.parse(o);
    } catch {
      D = o;
    }
    let x;
    typeof D == "string" && D.length === 0 ? x = String(E()) : x = String(E(D));
    let c = u.substring(0, e) + x + u.substring(a + 2);
    return c === "" ? "" : this.fake(c);
  }
  unique(u, e, a = {}) {
    let { maxTime: i = 50, maxRetries: r = 50 } = a;
    return xD(u, e, { ...a, startTime: (/* @__PURE__ */ new Date()).getTime(), maxTime: i, maxRetries: r, currentIterations: 0 });
  }
}, vru = class {
  constructor(u) {
    this.faker = u;
  }
  image(u, e, a, i) {
    return this.imageUrl(u, e, a, i);
  }
  imageGrayscale(u, e, a) {
    return this.imageUrl(u, e, a);
  }
  imageBlurred(u, e, a) {
    return this.imageUrl(u, e, void 0, a);
  }
  imageRandomSeeded(u, e, a, i, r) {
    return this.imageUrl(u, e, a, i, r);
  }
  avatar() {
    return cu({ deprecated: "faker.image.lorempicsum.avatar()", proposed: "faker.internet.avatar()", since: "7.3", until: "8.0" }), this.faker.internet.avatar();
  }
  imageUrl(u, e, a, i, r) {
    u = u || 640, e = e || 480;
    let n = "https://picsum.photos";
    return r && (n += `/seed/${r}`), n += `/${u}/${e}`, a && i ? `${n}?grayscale&blur=${i}` : a ? `${n}?grayscale` : i ? `${n}?blur=${i}` : n;
  }
}, bru = class {
  constructor(u) {
    this.faker = u;
  }
  image(u, e, a) {
    let i = ["abstract", "animals", "business", "cats", "city", "food", "nightlife", "fashion", "people", "nature", "sports", "technics", "transport"];
    return this[this.faker.helpers.arrayElement(i)](u, e, a);
  }
  avatar() {
    return cu({ deprecated: "faker.image.lorempixel.avatar()", proposed: "faker.internet.avatar()", since: "7.3", until: "8.0" }), this.faker.internet.avatar();
  }
  imageUrl(u, e, a, i) {
    u = u || 640, e = e || 480;
    let r = `https://lorempixel.com/${u}/${e}`;
    return a != null && (r += `/${a}`), i && (r += `?${this.faker.datatype.number()}`), r;
  }
  abstract(u, e, a) {
    return this.faker.image.lorempixel.imageUrl(u, e, "abstract", a);
  }
  animals(u, e, a) {
    return this.faker.image.lorempixel.imageUrl(u, e, "animals", a);
  }
  business(u, e, a) {
    return this.faker.image.lorempixel.imageUrl(u, e, "business", a);
  }
  cats(u, e, a) {
    return this.faker.image.lorempixel.imageUrl(u, e, "cats", a);
  }
  city(u, e, a) {
    return this.faker.image.lorempixel.imageUrl(u, e, "city", a);
  }
  food(u, e, a) {
    return this.faker.image.lorempixel.imageUrl(u, e, "food", a);
  }
  nightlife(u, e, a) {
    return this.faker.image.lorempixel.imageUrl(u, e, "nightlife", a);
  }
  fashion(u, e, a) {
    return this.faker.image.lorempixel.imageUrl(u, e, "fashion", a);
  }
  people(u, e, a) {
    return this.faker.image.lorempixel.imageUrl(u, e, "people", a);
  }
  nature(u, e, a) {
    return this.faker.image.lorempixel.imageUrl(u, e, "nature", a);
  }
  sports(u, e, a) {
    return this.faker.image.lorempixel.imageUrl(u, e, "sports", a);
  }
  technics(u, e, a) {
    return this.faker.image.lorempixel.imageUrl(u, e, "technics", a);
  }
  transport(u, e, a) {
    return this.faker.image.lorempixel.imageUrl(u, e, "transport", a);
  }
}, dD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(dD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  imageUrl(u, e, a, i, r, n) {
    u = u || 640, e = e || u;
    let o = "https://via.placeholder.com";
    return o += `/${u}x${e}`, r != null && (o += `/${r.replace("#", "").toUpperCase()}`, n != null && (o += `/${n.replace("#", "").toUpperCase()}`)), i != null && (o += `.${i}`), a != null && (o += `?${new URLSearchParams({ text: a }).toString()}`), o;
  }
  randomUrl(u, e, a) {
    return this.imageUrl(u, e, this.faker.lorem.word(), a, this.faker.color.rgb({ casing: "upper", prefix: "" }), this.faker.color.rgb({ casing: "upper", prefix: "" }));
  }
}, Aru = class {
  constructor(u) {
    this.faker = u;
  }
  get categories() {
    return cu({ deprecated: "faker.image.unsplash.categories", since: "7.3", until: "8.0" }), ["food", "nature", "people", "technology", "objects", "buildings"];
  }
  image(u, e, a) {
    return this.imageUrl(u, e, void 0, a);
  }
  avatar() {
    return cu({ deprecated: "faker.image.unsplash.avatar()", proposed: "faker.internet.avatar()", since: "7.3", until: "8.0" }), this.faker.internet.avatar();
  }
  imageUrl(u, e, a, i) {
    u = u || 640, e = e || 480;
    let r = "https://source.unsplash.com";
    return a != null && (r += `/category/${a}`), r += `/${u}x${e}`, i != null && /^([A-Za-z0-9].+,[A-Za-z0-9]+)$|^([A-Za-z0-9]+)$/.test(i) && (r += `?${i}`), r;
  }
  food(u, e, a) {
    return this.faker.image.unsplash.imageUrl(u, e, "food", a);
  }
  people(u, e, a) {
    return this.faker.image.unsplash.imageUrl(u, e, "people", a);
  }
  nature(u, e, a) {
    return this.faker.image.unsplash.imageUrl(u, e, "nature", a);
  }
  technology(u, e, a) {
    return this.faker.image.unsplash.imageUrl(u, e, "technology", a);
  }
  objects(u, e, a) {
    return this.faker.image.unsplash.imageUrl(u, e, "objects", a);
  }
  buildings(u, e, a) {
    return this.faker.image.unsplash.imageUrl(u, e, "buildings", a);
  }
}, mD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(mD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
    this.lorempixel = new bru(this.faker), this.unsplash = new Aru(this.faker), this.lorempicsum = new vru(this.faker), this.placeholder = new dD(this.faker);
  }
  image(u, e, a) {
    let i = ["abstract", "animals", "business", "cats", "city", "food", "nightlife", "fashion", "people", "nature", "sports", "technics", "transport"];
    return this[this.faker.helpers.arrayElement(i)](u, e, a);
  }
  avatar() {
    return this.faker.internet.avatar();
  }
  imageUrl(u, e, a, i) {
    u = u || 640, e = e || 480;
    let r = `https://loremflickr.com/${u}/${e}`;
    return a != null && (r += `/${a}`), i && (r += `?lock=${this.faker.datatype.number()}`), r;
  }
  abstract(u, e, a) {
    return this.imageUrl(u, e, "abstract", a);
  }
  animals(u, e, a) {
    return this.imageUrl(u, e, "animals", a);
  }
  business(u, e, a) {
    return this.imageUrl(u, e, "business", a);
  }
  cats(u, e, a) {
    return this.imageUrl(u, e, "cats", a);
  }
  city(u, e, a) {
    return this.imageUrl(u, e, "city", a);
  }
  food(u, e, a) {
    return this.imageUrl(u, e, "food", a);
  }
  nightlife(u, e, a) {
    return this.imageUrl(u, e, "nightlife", a);
  }
  fashion(u, e, a) {
    return this.imageUrl(u, e, "fashion", a);
  }
  people(u, e, a) {
    return this.imageUrl(u, e, "people", a);
  }
  nature(u, e, a) {
    return this.imageUrl(u, e, "nature", a);
  }
  sports(u, e, a) {
    return this.imageUrl(u, e, "sports", a);
  }
  technics(u, e, a) {
    return this.imageUrl(u, e, "technics", a);
  }
  transport(u, e, a) {
    return this.imageUrl(u, e, "transport", a);
  }
  dataUri(u, e, a = "grey") {
    let i = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="${u}" height="${e}"><rect width="100%" height="100%" fill="${a}"/><text x="${u / 2}" y="${e / 2}" font-size="20" alignment-baseline="middle" text-anchor="middle" fill="white">${u}x${e}</text></svg>`;
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(i);
  }
};
function Bru(u) {
  let e = (E) => {
    let D = u.datatype.number({ min: 0, max: 100 }) / 100, x = 0, c = 0, d;
    for (let F in E)
      if (Object.prototype.hasOwnProperty.call(E, F)) {
        if (c = E[F] + x, d = F, D >= x && D <= c)
          break;
        x = x + E[F];
      }
    return d;
  }, a = () => u.helpers.arrayElement(["AB", "AF", "AN", "AR", "AS", "AZ", "BE", "BG", "BN", "BO", "BR", "BS", "CA", "CE", "CO", "CS", "CU", "CY", "DA", "DE", "EL", "EN", "EO", "ES", "ET", "EU", "FA", "FI", "FJ", "FO", "FR", "FY", "GA", "GD", "GL", "GV", "HE", "HI", "HR", "HT", "HU", "HY", "ID", "IS", "IT", "JA", "JV", "KA", "KG", "KO", "KU", "KW", "KY", "LA", "LB", "LI", "LN", "LT", "LV", "MG", "MK", "MN", "MO", "MS", "MT", "MY", "NB", "NE", "NL", "NN", "NO", "OC", "PL", "PT", "RM", "RO", "RU", "SC", "SE", "SK", "SL", "SO", "SQ", "SR", "SV", "SW", "TK", "TR", "TY", "UK", "UR", "UZ", "VI", "VO", "YI", "ZH"]), i = () => {
    let E = e({ chrome: 0.45132810566, iexplorer: 0.27477061836, firefox: 0.19384170608, safari: 0.06186781118, opera: 0.01574236955 }), D = e({ chrome: { win: 0.89, mac: 0.09, lin: 0.02 }, firefox: { win: 0.83, mac: 0.16, lin: 0.01 }, opera: { win: 0.91, mac: 0.03, lin: 0.06 }, safari: { win: 0.04, mac: 0.96 }, iexplorer: { win: 1 } }[E]);
    return [E, D];
  }, r = (E) => {
    let D = { lin: ["i686", "x86_64"], mac: { Intel: 0.48, PPC: 0.01, "U; Intel": 0.48, "U; PPC": 0.01 }, win: ["", "WOW64", "Win64; x64"] }[E];
    return Array.isArray(D) ? u.helpers.arrayElement(D) : e(D);
  }, n = (E) => {
    let D = "";
    for (let x = 0; x < E; x++)
      D += `.${u.datatype.number({ min: 0, max: 9 })}`;
    return D;
  }, o = { net() {
    return [u.datatype.number({ min: 1, max: 4 }), u.datatype.number({ min: 0, max: 9 }), u.datatype.number({ min: 1e4, max: 99999 }), u.datatype.number({ min: 0, max: 9 })].join(".");
  }, nt() {
    return [u.datatype.number({ min: 5, max: 6 }), u.datatype.number({ min: 0, max: 3 })].join(".");
  }, ie() {
    return u.datatype.number({ min: 7, max: 11 });
  }, trident() {
    return [u.datatype.number({ min: 3, max: 7 }), u.datatype.number({ min: 0, max: 1 })].join(".");
  }, osx(E) {
    return [10, u.datatype.number({ min: 5, max: 10 }), u.datatype.number({ min: 0, max: 9 })].join(E || ".");
  }, chrome() {
    return [u.datatype.number({ min: 13, max: 39 }), 0, u.datatype.number({ min: 800, max: 899 }), 0].join(".");
  }, presto() {
    return `2.9.${u.datatype.number({ min: 160, max: 190 })}`;
  }, presto2() {
    return `${u.datatype.number({ min: 10, max: 12 })}.00`;
  }, safari() {
    return [u.datatype.number({ min: 531, max: 538 }), u.datatype.number({ min: 0, max: 2 }), u.datatype.number({ min: 0, max: 2 })].join(".");
  } }, t = { firefox(E) {
    let D = `${u.datatype.number({ min: 5, max: 15 })}${n(2)}`, x = `Gecko/20100101 Firefox/${D}`, c = r(E);
    return `Mozilla/5.0 ${E === "win" ? `(Windows NT ${o.nt()}${c ? `; ${c}` : ""}` : E === "mac" ? `(Macintosh; ${c} Mac OS X ${o.osx()}` : `(X11; Linux ${c}`}; rv:${D.slice(0, -2)}) ${x}`;
  }, iexplorer() {
    let E = o.ie();
    return E >= 11 ? `Mozilla/5.0 (Windows NT 6.${u.datatype.number({ min: 1, max: 3 })}; Trident/7.0; ${u.datatype.boolean() ? "Touch; " : ""}rv:11.0) like Gecko` : `Mozilla/5.0 (compatible; MSIE ${E}.0; Windows NT ${o.nt()}; Trident/${o.trident()}${u.datatype.boolean() ? `; .NET CLR ${o.net()}` : ""})`;
  }, opera(E) {
    let D = ` Presto/${o.presto()} Version/${o.presto2()})`, x = E === "win" ? `(Windows NT ${o.nt()}; U; ${a()}${D}` : E === "lin" ? `(X11; Linux ${r(E)}; U; ${a()}${D}` : `(Macintosh; Intel Mac OS X ${o.osx()} U; ${a()} Presto/${o.presto()} Version/${o.presto2()})`;
    return `Opera/${u.datatype.number({ min: 9, max: 14 })}.${u.datatype.number({ min: 0, max: 99 })} ${x}`;
  }, safari(E) {
    let D = o.safari(), x = `${u.datatype.number({ min: 4, max: 7 })}.${u.datatype.number({ min: 0, max: 1 })}.${u.datatype.number({ min: 0, max: 10 })}`;
    return `Mozilla/5.0 ${E === "mac" ? `(Macintosh; ${r("mac")} Mac OS X ${o.osx("_")} rv:${u.datatype.number({ min: 2, max: 6 })}.0; ${a()}) ` : `(Windows; U; Windows NT ${o.nt()})`}AppleWebKit/${D} (KHTML, like Gecko) Version/${x} Safari/${D}`;
  }, chrome(E) {
    let D = o.safari();
    return `Mozilla/5.0 ${E === "mac" ? `(Macintosh; ${r("mac")} Mac OS X ${o.osx("_")}) ` : E === "win" ? `(Windows; U; Windows NT ${o.nt()})` : `(X11; Linux ${r(E)}`} AppleWebKit/${D} (KHTML, like Gecko) Chrome/${o.chrome()} Safari/${D}`;
  } }, [s, l] = i();
  return t[s](l);
}
var FD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(FD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  avatar() {
    return `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${this.faker.datatype.number(1249)}.jpg`;
  }
  email(u, e, a, i) {
    a = a || this.faker.helpers.arrayElement(this.faker.definitions.internet.free_email);
    let r = this.faker.helpers.slugify(this.userName(u, e));
    if (i != null && i.allowSpecialCharacters) {
      let n = "._-".split(""), o = ".!#$%&'*+-/=?^_`{|}~".split("");
      r = r.replace(this.faker.helpers.arrayElement(n), this.faker.helpers.arrayElement(o));
    }
    return `${r}@${a}`;
  }
  exampleEmail(u, e, a) {
    let i = this.faker.helpers.arrayElement(this.faker.definitions.internet.example_email);
    return this.email(u, e, i, a);
  }
  userName(u, e) {
    let a;
    switch (u = u || this.faker.name.firstName(), e = e || this.faker.name.lastName(), this.faker.datatype.number(2)) {
      case 0:
        a = `${u}${this.faker.datatype.number(99)}`;
        break;
      case 1:
        a = u + this.faker.helpers.arrayElement([".", "_"]) + e;
        break;
      case 2:
        a = `${u}${this.faker.helpers.arrayElement([".", "_"])}${e}${this.faker.datatype.number(99)}`;
        break;
    }
    return a = a.toString().replace(/'/g, ""), a = a.replace(/ /g, ""), a;
  }
  protocol() {
    let u = ["http", "https"];
    return this.faker.helpers.arrayElement(u);
  }
  httpMethod() {
    let u = ["GET", "POST", "PUT", "DELETE", "PATCH"];
    return this.faker.helpers.arrayElement(u);
  }
  httpStatusCode(u = {}) {
    let { types: e = Object.keys(this.faker.definitions.internet.http_status_code) } = u, a = this.faker.helpers.arrayElement(e);
    return this.faker.helpers.arrayElement(this.faker.definitions.internet.http_status_code[a]);
  }
  url() {
    return `${this.protocol()}://${this.domainName()}`;
  }
  domainName() {
    return `${this.domainWord()}.${this.domainSuffix()}`;
  }
  domainSuffix() {
    return this.faker.helpers.arrayElement(this.faker.definitions.internet.domain_suffix);
  }
  domainWord() {
    return `${this.faker.word.adjective()}-${this.faker.word.noun()}`.replace(/([\\~#&*{}/:<>?|\"'])/gi, "").replace(/\s/g, "-").replace(/-{2,}/g, "-").toLowerCase();
  }
  ip() {
    return this.ipv4();
  }
  ipv4() {
    let u = () => this.faker.datatype.number(255).toFixed(0), e = [];
    for (let a = 0; a < 4; a++)
      e[a] = u();
    return e.join(".");
  }
  ipv6() {
    let u = () => {
      let a = "";
      for (let i = 0; i < 4; i++)
        a += this.faker.helpers.arrayElement(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]);
      return a;
    }, e = [];
    for (let a = 0; a < 8; a++)
      e[a] = u();
    return e.join(":");
  }
  port() {
    return this.faker.datatype.number({ min: 0, max: 65535 });
  }
  userAgent() {
    return Bru(this.faker);
  }
  color(u = 0, e = 0, a = 0) {
    let i = (t) => Math.floor((this.faker.datatype.number(256) + t) / 2).toString(16).padStart(2, "0"), r = i(u), n = i(e), o = i(a);
    return `#${r}${n}${o}`;
  }
  mac(u) {
    let e, a = "", i = ":";
    for (["-", ""].indexOf(u) !== -1 && (i = u), e = 0; e < 12; e++)
      a += this.faker.datatype.number(15).toString(16), e % 2 === 1 && e !== 11 && (a += i);
    return a;
  }
  password(u = 15, e = !1, a = /\w/, i = "") {
    let r = /[aeiouAEIOU]$/, n = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]$/, o = (t, s, l, E) => {
      if (E.length >= t)
        return E;
      s && (E.match(n) ? l = r : l = n);
      let D = this.faker.datatype.number(94) + 33, x = String.fromCharCode(D);
      return s && (x = x.toLowerCase()), x.match(l) ? o(t, s, l, E + x) : o(t, s, l, E);
    };
    return o(u, e, a, i);
  }
  emoji(u = {}) {
    let { types: e = Object.keys(this.faker.definitions.internet.emoji) } = u, a = this.faker.helpers.arrayElement(e);
    return this.faker.helpers.arrayElement(this.faker.definitions.internet.emoji[a]);
  }
}, mn = { fail: () => {
  throw new yu("No words found that match the given length.");
}, closest: (u, e) => {
  let a = u.reduce((t, s) => {
    var l;
    return (t[s.length] = (l = t[s.length]) != null ? l : []).push(s), t;
  }, {}), i = Object.keys(a).map(Number), r = Math.min(...i), n = Math.max(...i), o = Math.min(e.min - r, n - e.max);
  return u.filter((t) => t.length === e.min - o || t.length === e.max + o);
}, shortest: (u) => {
  let e = Math.min(...u.map((a) => a.length));
  return u.filter((a) => a.length === e);
}, longest: (u) => {
  let e = Math.max(...u.map((a) => a.length));
  return u.filter((a) => a.length === e);
}, "any-length": (u) => [...u] };
function S0(u) {
  let { wordList: e, length: a, strategy: i = "any-length" } = u;
  if (a) {
    let r = typeof a == "number" ? (o) => o.length === a : (o) => o.length >= a.min && o.length <= a.max, n = e.filter(r);
    return n.length > 0 ? n : typeof a == "number" ? mn[i](e, { min: a, max: a }) : mn[i](e, a);
  } else
    return i === "shortest" || i === "longest" ? mn[i](e) : [...e];
}
var kD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(kD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  word(u = {}) {
    let e = typeof u == "number" ? { length: u } : u;
    return this.faker.helpers.arrayElement(S0({ ...e, wordList: this.faker.definitions.lorem.words }));
  }
  words(u = 3) {
    let e = [];
    for (let a = 0; a < u; a++)
      e.push(this.word());
    return e.join(" ");
  }
  sentence(u) {
    u == null && (u = this.faker.datatype.number({ min: 3, max: 10 }));
    let e = this.words(u);
    return `${e.charAt(0).toUpperCase() + e.slice(1)}.`;
  }
  slug(u) {
    let e = this.words(u);
    return this.faker.helpers.slugify(e);
  }
  sentences(u, e = " ") {
    u == null && (u = this.faker.datatype.number({ min: 2, max: 6 }));
    let a = [];
    for (u; u > 0; u--)
      a.push(this.sentence());
    return a.join(e);
  }
  paragraph(u = 3) {
    return this.sentences(u + this.faker.datatype.number(3));
  }
  paragraphs(u = 3, e = `
`) {
    let a = [];
    for (u; u > 0; u--)
      a.push(this.paragraph());
    return a.join(e);
  }
  text() {
    let u = ["word", "words", "sentence", "sentences", "paragraph", "paragraphs", "lines"], e = this.faker.helpers.arrayElement(u);
    return `${this[e]()}`;
  }
  lines(u) {
    return u == null && (u = this.faker.datatype.number({ min: 1, max: 5 })), this.sentences(u, `
`);
  }
}, yru = class {
  constructor() {
    this.N = 624, this.M = 397, this.MATRIX_A = 2567483615, this.UPPER_MASK = 2147483648, this.LOWER_MASK = 2147483647, this.mt = new Array(this.N), this.mti = this.N + 1, this.mag01 = [0, this.MATRIX_A];
  }
  unsigned32(u) {
    return u < 0 ? (u ^ this.UPPER_MASK) + this.UPPER_MASK : u;
  }
  subtraction32(u, e) {
    return u < e ? this.unsigned32(4294967296 - (e - u) & 4294967295) : u - e;
  }
  addition32(u, e) {
    return this.unsigned32(u + e & 4294967295);
  }
  multiplication32(u, e) {
    let a = 0;
    for (let i = 0; i < 32; ++i)
      u >>> i & 1 && (a = this.addition32(a, this.unsigned32(e << i)));
    return a;
  }
  initGenrand(u) {
    for (this.mt[0] = this.unsigned32(u & 4294967295), this.mti = 1; this.mti < this.N; this.mti++)
      this.mt[this.mti] = this.addition32(this.multiplication32(1812433253, this.unsigned32(this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30)), this.mti), this.mt[this.mti] = this.unsigned32(this.mt[this.mti] & 4294967295);
  }
  initByArray(u, e) {
    this.initGenrand(19650218);
    let a = 1, i = 0, r = this.N > e ? this.N : e;
    for (; r; r--)
      this.mt[a] = this.addition32(this.addition32(this.unsigned32(this.mt[a] ^ this.multiplication32(this.unsigned32(this.mt[a - 1] ^ this.mt[a - 1] >>> 30), 1664525)), u[i]), i), this.mt[a] = this.unsigned32(this.mt[a] & 4294967295), a++, i++, a >= this.N && (this.mt[0] = this.mt[this.N - 1], a = 1), i >= e && (i = 0);
    for (r = this.N - 1; r; r--)
      this.mt[a] = this.subtraction32(this.unsigned32(this.mt[a] ^ this.multiplication32(this.unsigned32(this.mt[a - 1] ^ this.mt[a - 1] >>> 30), 1566083941)), a), this.mt[a] = this.unsigned32(this.mt[a] & 4294967295), a++, a >= this.N && (this.mt[0] = this.mt[this.N - 1], a = 1);
    this.mt[0] = 2147483648;
  }
  genrandInt32() {
    let u;
    if (this.mti >= this.N) {
      let e;
      for (this.mti === this.N + 1 && this.initGenrand(5489), e = 0; e < this.N - this.M; e++)
        u = this.unsigned32(this.mt[e] & this.UPPER_MASK | this.mt[e + 1] & this.LOWER_MASK), this.mt[e] = this.unsigned32(this.mt[e + this.M] ^ u >>> 1 ^ this.mag01[u & 1]);
      for (; e < this.N - 1; e++)
        u = this.unsigned32(this.mt[e] & this.UPPER_MASK | this.mt[e + 1] & this.LOWER_MASK), this.mt[e] = this.unsigned32(this.mt[e + (this.M - this.N)] ^ u >>> 1 ^ this.mag01[u & 1]);
      u = this.unsigned32(this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK), this.mt[this.N - 1] = this.unsigned32(this.mt[this.M - 1] ^ u >>> 1 ^ this.mag01[u & 1]), this.mti = 0;
    }
    return u = this.mt[this.mti++], u = this.unsigned32(u ^ u >>> 11), u = this.unsigned32(u ^ u << 7 & 2636928640), u = this.unsigned32(u ^ u << 15 & 4022730752), u = this.unsigned32(u ^ u >>> 18), u;
  }
  genrandInt31() {
    return this.genrandInt32() >>> 1;
  }
  genrandReal1() {
    return this.genrandInt32() * (1 / 4294967295);
  }
  genrandReal2() {
    return this.genrandInt32() * (1 / 4294967296);
  }
  genrandReal3() {
    return (this.genrandInt32() + 0.5) * (1 / 4294967296);
  }
  genrandRes53() {
    let u = this.genrandInt32() >>> 5, e = this.genrandInt32() >>> 6;
    return (u * 67108864 + e) * (1 / 9007199254740992);
  }
}, pD = class {
  constructor() {
    this.gen = new yru(), this.gen.initGenrand(Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER));
    for (let u of Object.getOwnPropertyNames(pD.prototype))
      u === "constructor" || typeof this[u] != "function" || (this[u] = this[u].bind(this));
  }
  rand(u = 32768, e = 0) {
    if (e > u) {
      let a = e;
      e = u, u = a;
    }
    return Math.floor(this.gen.genrandReal2() * (u - e) + e);
  }
  seed(u) {
    if (typeof u != "number")
      throw new yu(`seed(S) must take numeric argument; is ${typeof u}`);
    this.gen.initGenrand(u);
  }
  seed_array(u) {
    if (typeof u != "object")
      throw new yu(`seed_array(A) must take array of numbers; is ${typeof u}`);
    this.gen.initByArray(u, u.length);
  }
}, hD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(hD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  genre() {
    return this.faker.helpers.arrayElement(this.faker.definitions.music.genre);
  }
  songName() {
    return this.faker.helpers.arrayElement(this.faker.definitions.music.song_name);
  }
}, gD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(gD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  phoneNumber(u) {
    return cu({ deprecated: "faker.phone.phoneNumber()", proposed: "faker.phone.number()", since: "7.3", until: "8.0" }), this.faker.phone.number(u);
  }
  number(u) {
    return u = u ?? this.faker.helpers.arrayElement(this.faker.definitions.phone_number.formats), this.faker.helpers.replaceSymbolWithNumber(u);
  }
  phoneNumberFormat(u = 0) {
    return cu({ deprecated: "faker.phone.phoneNumberFormat()", proposed: "faker.phone.phoneNumber() or faker.helpers.replaceSymbolWithNumber(format)", since: "7.0", until: "8.0" }), this.faker.helpers.replaceSymbolWithNumber(this.faker.definitions.phone_number.formats[u]);
  }
  phoneFormats() {
    return cu({ deprecated: "faker.phone.phoneFormats()", proposed: "faker.phone.phoneNumber()", since: "7.0", until: "8.0" }), this.faker.helpers.arrayElement(this.faker.definitions.phone_number.formats);
  }
  imei() {
    return this.faker.helpers.replaceCreditCardSymbols("##-######-######-L", "#");
  }
}, Xa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), ui = "abcdefghijklmnopqrstuvwxyz".split(""), v4 = "0123456789".split("");
function b4(u, e) {
  return e.forEach((a) => {
    u = u.filter((i) => i !== a);
  }), u;
}
var CD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(CD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  word() {
    let u = [this.faker.address.cardinalDirection, this.faker.address.cityName, this.faker.address.country, this.faker.address.county, this.faker.address.direction, this.faker.address.ordinalDirection, this.faker.address.state, this.faker.address.street, this.faker.color.human, this.faker.commerce.department, this.faker.commerce.product, this.faker.commerce.productAdjective, this.faker.commerce.productMaterial, this.faker.commerce.productName, this.faker.company.bsAdjective, this.faker.company.bsBuzz, this.faker.company.bsNoun, this.faker.company.catchPhraseAdjective, this.faker.company.catchPhraseDescriptor, this.faker.company.catchPhraseNoun, this.faker.finance.accountName, this.faker.finance.currencyName, this.faker.finance.transactionType, this.faker.hacker.abbreviation, this.faker.hacker.adjective, this.faker.hacker.ingverb, this.faker.hacker.noun, this.faker.hacker.verb, this.faker.lorem.word, this.faker.music.genre, this.faker.name.gender, this.faker.name.jobArea, this.faker.name.jobDescriptor, this.faker.name.jobTitle, this.faker.name.jobType, this.faker.name.sex, () => this.faker.science.chemicalElement().name, () => this.faker.science.unit().name, this.faker.vehicle.bicycle, this.faker.vehicle.color, this.faker.vehicle.fuel, this.faker.vehicle.manufacturer, this.faker.vehicle.type, this.faker.word.adjective, this.faker.word.adverb, this.faker.word.conjunction, this.faker.word.interjection, this.faker.word.noun, this.faker.word.preposition, this.faker.word.verb], e = ["!", "#", "%", "&", "*", ")", "(", "+", "=", ".", "<", ">", "{", "}", "[", "]", ":", ";", "'", '"', "_", "-"], a;
    do {
      let i = this.faker.helpers.arrayElement(u);
      try {
        a = i();
      } catch {
        continue;
      }
    } while (!a || e.some((i) => a.includes(i)));
    return this.faker.helpers.arrayElement(a.split(" "));
  }
  words(u) {
    let e = [];
    u == null && (u = this.faker.datatype.number({ min: 1, max: 3 }));
    for (let a = 0; a < u; a++)
      e.push(this.word());
    return e.join(" ");
  }
  locale() {
    return this.faker.helpers.arrayElement(Object.keys(this.faker.locales));
  }
  alpha(u = {}) {
    typeof u == "number" && (u = { count: u });
    let { count: e = 1, upcase: a } = u, { bannedChars: i = [] } = u;
    if (typeof i == "string" && (i = i.split("")), e <= 0)
      return "";
    let { casing: r = a ? "upper" : "lower" } = u;
    a != null && cu({ deprecated: "faker.random.alpha({ upcase: true })", proposed: "faker.random.alpha({ casing: 'upper' })", since: "7.0", until: "8.0" });
    let n;
    switch (r) {
      case "upper":
        n = [...Xa];
        break;
      case "lower":
        n = [...ui];
        break;
      case "mixed":
      default:
        n = [...ui, ...Xa];
        break;
    }
    if (n = b4(n, i), n.length === 0)
      throw new yu("Unable to generate string, because all possible characters are banned.");
    return Array.from({ length: e }, () => this.faker.helpers.arrayElement(n)).join("");
  }
  alphaNumeric(u = 1, e = {}) {
    if (u <= 0)
      return "";
    let { casing: a = "lower" } = e, { bannedChars: i = [] } = e;
    typeof i == "string" && (i = i.split(""));
    let r = [...v4];
    switch (a) {
      case "upper":
        r.push(...Xa);
        break;
      case "lower":
        r.push(...ui);
        break;
      case "mixed":
      default:
        r.push(...ui, ...Xa);
        break;
    }
    if (r = b4(r, i), r.length === 0)
      throw new yu("Unable to generate string, because all possible characters are banned.");
    return Array.from({ length: u }, () => this.faker.helpers.arrayElement(r)).join("");
  }
  numeric(u = 1, e = {}) {
    if (u <= 0)
      return "";
    let { allowLeadingZeros: a = !1 } = e, { bannedDigits: i = [] } = e;
    typeof i == "string" && (i = i.split(""));
    let r = v4.filter((o) => !i.includes(o));
    if (r.length === 0 || r.length === 1 && !a && r[0] === "0")
      throw new yu("Unable to generate numeric string, because all possible digits are banned.");
    let n = "";
    for (!a && !i.includes("0") && (n += this.faker.helpers.arrayElement(r.filter((o) => o !== "0"))); n.length < u; )
      n += this.faker.helpers.arrayElement(r);
    return n;
  }
}, vD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(vD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  chemicalElement() {
    return this.faker.helpers.arrayElement(this.faker.definitions.science.chemicalElement);
  }
  unit() {
    return this.faker.helpers.arrayElement(this.faker.definitions.science.unit);
  }
}, fru = ["video", "audio", "image", "text", "application"], zru = ["application/pdf", "audio/mpeg", "audio/wav", "image/png", "image/jpeg", "image/gif", "video/mp4", "video/mpeg", "text/html"], Sru = ["en", "wl", "ww"], A4 = { index: "o", slot: "s", mac: "x", pci: "p" }, Mru = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], bD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(bD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  fileName(u = {}) {
    let { extensionCount: e = 1 } = u, a = this.faker.random.words().toLowerCase().replace(/\W/g, "_");
    if (e <= 0)
      return a;
    let i = Array.from({ length: e }).map(() => this.fileExt()).join(".");
    return `${a}.${i}`;
  }
  commonFileName(u) {
    return `${this.fileName({ extensionCount: 0 })}.${u || this.commonFileExt()}`;
  }
  mimeType() {
    let u = Object.keys(this.faker.definitions.system.mimeTypes);
    return this.faker.helpers.arrayElement(u);
  }
  commonFileType() {
    return this.faker.helpers.arrayElement(fru);
  }
  commonFileExt() {
    return this.fileExt(this.faker.helpers.arrayElement(zru));
  }
  fileType() {
    let u = /* @__PURE__ */ new Set(), e = this.faker.definitions.system.mimeTypes;
    Object.keys(e).forEach((i) => {
      let r = i.split("/")[0];
      u.add(r);
    });
    let a = Array.from(u);
    return this.faker.helpers.arrayElement(a);
  }
  fileExt(u) {
    if (typeof u == "string") {
      let r = this.faker.definitions.system.mimeTypes;
      return this.faker.helpers.arrayElement(r[u].extensions);
    }
    let e = this.faker.definitions.system.mimeTypes, a = /* @__PURE__ */ new Set();
    Object.keys(e).forEach((r) => {
      e[r].extensions instanceof Array && e[r].extensions.forEach((n) => {
        a.add(n);
      });
    });
    let i = Array.from(a);
    return this.faker.helpers.arrayElement(i);
  }
  directoryPath() {
    let u = this.faker.definitions.system.directoryPaths;
    return this.faker.helpers.arrayElement(u);
  }
  filePath() {
    return `${this.directoryPath()}/${this.fileName()}`;
  }
  semver() {
    return [this.faker.datatype.number(9), this.faker.datatype.number(9), this.faker.datatype.number(9)].join(".");
  }
  networkInterface(u = {}) {
    var e, a, i, r, n;
    let { interfaceType: o = this.faker.helpers.arrayElement(Sru), interfaceSchema: t = this.faker.helpers.objectKey(A4) } = u, s, l = "";
    switch (t) {
      case "index":
        s = this.faker.datatype.number(9).toString();
        break;
      case "slot":
        s = `${this.faker.datatype.number(9)}${(e = this.faker.helpers.maybe(() => `f${this.faker.datatype.number(9)}`)) != null ? e : ""}${(a = this.faker.helpers.maybe(() => `d${this.faker.datatype.number(9)}`)) != null ? a : ""}`;
        break;
      case "mac":
        s = this.faker.internet.mac("");
        break;
      case "pci":
        l = (i = this.faker.helpers.maybe(() => `P${this.faker.datatype.number(9)}`)) != null ? i : "", s = `${this.faker.datatype.number(9)}s${this.faker.datatype.number(9)}${(r = this.faker.helpers.maybe(() => `f${this.faker.datatype.number(9)}`)) != null ? r : ""}${(n = this.faker.helpers.maybe(() => `d${this.faker.datatype.number(9)}`)) != null ? n : ""}`;
        break;
    }
    return `${l}${o}${A4[t]}${s}`;
  }
  cron(u = {}) {
    let { includeYear: e = !1, includeNonStandard: a = !1 } = u, i = [this.faker.datatype.number({ min: 0, max: 59 }), "*"], r = [this.faker.datatype.number({ min: 0, max: 23 }), "*"], n = [this.faker.datatype.number({ min: 1, max: 31 }), "*", "?"], o = [this.faker.datatype.number({ min: 1, max: 12 }), "*"], t = [this.faker.datatype.number({ min: 0, max: 6 }), this.faker.helpers.arrayElement(Mru), "*", "?"], s = [this.faker.datatype.number({ min: 1970, max: 2099 }), "*"], l = this.faker.helpers.arrayElement(i), E = this.faker.helpers.arrayElement(r), D = this.faker.helpers.arrayElement(n), x = this.faker.helpers.arrayElement(o), c = this.faker.helpers.arrayElement(t), d = this.faker.helpers.arrayElement(s), F = `${l} ${E} ${D} ${x} ${c}`;
    e && (F += ` ${d}`);
    let k = ["@annually", "@daily", "@hourly", "@monthly", "@reboot", "@weekly", "@yearly"];
    return !a || this.faker.datatype.boolean() ? F : this.faker.helpers.arrayElement(k);
  }
}, AD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(AD.prototype))
      e === "constructor" || e === "maxTime" || e === "maxRetries" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  unique(u, e, a = {}) {
    return cu({ deprecated: "faker.unique()", proposed: "faker.helpers.unique()", since: "7.5", until: "8.0" }), this.faker.helpers.unique(u, e, a);
  }
}, BD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(BD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  vehicle() {
    return `${this.manufacturer()} ${this.model()}`;
  }
  manufacturer() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.manufacturer);
  }
  model() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.model);
  }
  type() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.type);
  }
  fuel() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.fuel);
  }
  vin() {
    let u = ["o", "i", "q", "O", "I", "Q"];
    return `${this.faker.random.alphaNumeric(10, { casing: "upper", bannedChars: u })}${this.faker.random.alpha({ count: 1, casing: "upper", bannedChars: u })}${this.faker.random.alphaNumeric(1, { casing: "upper", bannedChars: u })}${this.faker.datatype.number({ min: 1e4, max: 99999 })}`.toUpperCase();
  }
  color() {
    return this.faker.color.human();
  }
  vrm() {
    return `${this.faker.random.alpha({ count: 2, casing: "upper" })}${this.faker.datatype.number({ min: 0, max: 9 })}${this.faker.datatype.number({ min: 0, max: 9 })}${this.faker.random.alpha({ count: 3, casing: "upper" })}`.toUpperCase();
  }
  bicycle() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.bicycle_type);
  }
}, yD = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(yD.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  adjective(u = {}) {
    let e = typeof u == "number" ? { length: u } : u;
    return this.faker.helpers.arrayElement(S0({ ...e, wordList: this.faker.definitions.word.adjective }));
  }
  adverb(u = {}) {
    let e = typeof u == "number" ? { length: u } : u;
    return this.faker.helpers.arrayElement(S0({ ...e, wordList: this.faker.definitions.word.adverb }));
  }
  conjunction(u = {}) {
    let e = typeof u == "number" ? { length: u } : u;
    return this.faker.helpers.arrayElement(S0({ ...e, wordList: this.faker.definitions.word.conjunction }));
  }
  interjection(u = {}) {
    let e = typeof u == "number" ? { length: u } : u;
    return this.faker.helpers.arrayElement(S0({ ...e, wordList: this.faker.definitions.word.interjection }));
  }
  noun(u = {}) {
    let e = typeof u == "number" ? { length: u } : u;
    return this.faker.helpers.arrayElement(S0({ ...e, wordList: this.faker.definitions.word.noun }));
  }
  preposition(u = {}) {
    let e = typeof u == "number" ? { length: u } : u;
    return this.faker.helpers.arrayElement(S0({ ...e, wordList: this.faker.definitions.word.preposition }));
  }
  verb(u = {}) {
    let e = typeof u == "number" ? { length: u } : u;
    return this.faker.helpers.arrayElement(S0({ ...e, wordList: this.faker.definitions.word.verb }));
  }
}, jru = ["title", "separator"], Pru = class {
  constructor(u) {
    this.definitions = this.initDefinitions(), this.fake = new sD(this).fake, this.unique = new AD(this).unique, this.mersenne = new pD(), this.random = new CD(this), this.helpers = new cD(this), this.datatype = new oD(this), this.address = new XE(this), this.animal = new uD(this), this.color = new aD(this), this.commerce = new iD(this), this.company = new rD(this), this.database = new nD(this), this.date = new tD(this), this.finance = new lD(this), this.git = new ED(this), this.hacker = new DD(this), this.image = new mD(this), this.internet = new FD(this), this.lorem = new kD(this), this.music = new hD(this), this.name = new QE(this), this.phone = new gD(this), this.science = new vD(this), this.system = new bD(this), this.vehicle = new BD(this), this.word = new yD(this);
    var e;
    if (!u)
      throw new yu("Options with at least one entry in locales must be provided");
    if (Object.keys((e = u.locales) != null ? e : {}).length === 0)
      throw new yu("At least one entry in locales must be provided in the locales parameter");
    this.locales = u.locales, this.locale = u.locale || "en", this.localeFallback = u.localeFallback || "en";
  }
  get locale() {
    return this._locale;
  }
  set locale(u) {
    if (!this.locales[u])
      throw new yu(`Locale ${u} is not supported. You might want to add the requested locale first to \`faker.locales\`.`);
    this._locale = u;
  }
  get localeFallback() {
    return this._localeFallback;
  }
  set localeFallback(u) {
    if (!this.locales[u])
      throw new yu(`Locale ${u} is not supported. You might want to add the requested locale first to \`faker.locales\`.`);
    this._localeFallback = u;
  }
  initDefinitions() {
    let u = (i) => {
      var r;
      return (r = this.locales[this.locale][i]) != null ? r : this.locales[this.localeFallback][i];
    }, e = (i, r) => {
      var n, o, t;
      return (t = (n = this.locales[this.locale][i]) == null ? void 0 : n[r]) != null ? t : (o = this.locales[this.localeFallback][i]) == null ? void 0 : o[r];
    }, a = (i) => {
      if (u(i))
        return new Proxy({}, { get(r, n) {
          return e(i, n);
        } });
    };
    return new Proxy({}, { get(i, r) {
      let n = i[r];
      return n || (jru.includes(r) ? u(r) : (n = a(r), i[r] = n, n));
    } });
  }
  seed(u = Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER)) {
    return Array.isArray(u) && u.length ? this.mersenne.seed_array(u) : !Array.isArray(u) && !isNaN(u) && this.mersenne.seed(u), u;
  }
  setLocale(u) {
    this.locale = u;
  }
const Otu = ae.object({
  partnerId: ae.coerce.number().optional(),
  partnerKey: ae.coerce.string().optional(),
  baseURL: ae.coerce.string().url().optional(),
  accessToken: ae.coerce.string().optional(),
  shopId: ae.coerce.number().optional()
}), Ln = Otu.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK_SHOP_ID
});
if (!Ln.success)
  throw new Error(Ln.error.message);
const Jtu = Ln.data;
function Dt(u) {
  return new URL(u, Jtu.baseURL).toString();
}
function Hu(u) {
  return {
    item_id: (u == null ? void 0 : u.item_id) ?? G.datatype.number(),
    item_status: (u == null ? void 0 : u.item_status) ?? G.helpers.arrayElement(["NORMAL", "DELETED", "UNLIST", "BANNED"]),
    update_time: (u == null ? void 0 : u.update_time) ?? +PD(
      G.datatype.datetime({
        min: (/* @__PURE__ */ new Date("01/01/2022")).getTime(),
        max: (/* @__PURE__ */ new Date()).getTime()
      })
    )
  };
}
function $tu(u) {
  return {
    error: (u == null ? void 0 : u.error) ?? "",
    message: (u == null ? void 0 : u.message) ?? "",
    warning: (u == null ? void 0 : u.warning) ?? "",
    request_id: (u == null ? void 0 : u.request_id) ?? G.datatype.uuid(),
    response: (u == null ? void 0 : u.response) ?? { item: [] }
  };
}
const xt = [
  Hu({ item_id: 1, item_status: "NORMAL" }),
  Hu({ item_id: 2, item_status: "DELETED" }),
  Hu({ item_id: 3, item_status: "NORMAL" }),
  Hu({ item_id: 4, item_status: "BANNED" }),
  Hu({ item_id: 5, item_status: "NORMAL" }),
  Hu({ item_id: 6, item_status: "BANNED" }),
  Hu({ item_id: 7, item_status: "NORMAL" }),
  Hu({ item_id: 8, item_status: "NORMAL" }),
  Hu({ item_id: 9, item_status: "DELETED" }),
  Hu({ item_id: 10, item_status: "NORMAL" }),
  Hu({ item_id: 11, item_status: "UNLIST" }),
  Hu({ item_id: 12, item_status: "UNLIST" }),
  Hu({ item_id: 13, item_status: "NORMAL" })
], qtu = at.rest.get(
  Dt(TD),
  (u, e, a) => {
    const { searchParams: i } = u.url, r = +(i.get("page_size") ?? 10), n = +(i.get("offset") ?? 0), o = i.getAll("item_status"), t = n * r, s = xt.slice(
      t,
      t + r
    ).filter((E) => o.includes(E.item_status)), l = $tu({
      response: {
        item: s
      }
    });
    return e(a.status(200), a.json(l));
  }
);
function Wtu(u) {
  return {
    item_id: (u == null ? void 0 : u.item_id) ?? G.datatype.number(),
    category_id: (u == null ? void 0 : u.category_id) ?? G.datatype.number(),
    item_name: (u == null ? void 0 : u.item_name) ?? G.commerce.productName(),
    item_sku: (u == null ? void 0 : u.item_sku) ?? G.random.alphaNumeric(8),
    create_time: (u == null ? void 0 : u.create_time) ?? G.datatype.datetime({ min: (/* @__PURE__ */ new Date("01/01/2021")).getTime(), max: Date.now() }).getTime(),
    update_time: (u == null ? void 0 : u.update_time) ?? G.datatype.datetime({ min: (/* @__PURE__ */ new Date("01/01/2021")).getTime(), max: Date.now() }).getTime(),
    attribute_list: (u == null ? void 0 : u.attribute_list) ?? [],
    price_info: (u == null ? void 0 : u.price_info) ?? [
      {
        currency: "THB",
        original_price: +G.commerce.price(),
        current_price: +G.commerce.price()
      }
    ],
    stock_info_v2: (u == null ? void 0 : u.stock_info_v2) ?? {
      summary_info: {
        total_reserved_stock: G.datatype.number(),
        total_available_stock: G.datatype.number()
      },
      seller_stock: [
        {
          location_id: G.datatype.number().toString(),
          stock: G.datatype.number()
        }
      ]
    },
    image: (u == null ? void 0 : u.image) ?? {
      image_url_list: [G.image.imageUrl(640, 480, "product")],
      image_id_list: [G.datatype.uuid()]
    },
    weight: G.datatype.number().toString(),
    dimension: (u == null ? void 0 : u.dimension) ?? {
      package_length: G.datatype.number(),
      package_width: G.datatype.number(),
      package_height: G.datatype.number()
    },
    logistic_info: (u == null ? void 0 : u.logistic_info) ?? [
      {
        logistic_id: G.datatype.number(),
        logistic_name: G.company.name(),
        enabled: G.datatype.boolean(),
        is_free: G.datatype.boolean(),
        shipping_fee: G.datatype.number(),
        estimated_shipping_fee: G.datatype.number()
      }
    ],
    pre_order: (u == null ? void 0 : u.pre_order) ?? {
      is_pre_order: G.datatype.boolean(),
      days_to_ship: G.datatype.number()
    },
    condition: (u == null ? void 0 : u.condition) ?? G.datatype.string(),
    size_chart: (u == null ? void 0 : u.size_chart) ?? G.datatype.string(),
    item_status: (u == null ? void 0 : u.item_status) ?? G.datatype.string(),
    has_model: (u == null ? void 0 : u.has_model) ?? G.datatype.boolean(),
    promotion_id: (u == null ? void 0 : u.promotion_id) ?? G.datatype.number(),
    brand: (u == null ? void 0 : u.brand) ?? {
      brand_id: G.datatype.number(),
      original_brand_name: G.company.name()
    },
    tax_info: u == null ? void 0 : u.tax_info,
    description_type: (u == null ? void 0 : u.description_type) ?? "",
    description_info: (u == null ? void 0 : u.description_info) ?? {
      extended_description: {
        field_list: [
          {
            field_type: G.datatype.string(),
            text: G.commerce.productDescription(),
            image_info: {
              image_id: G.datatype.number().toString(),
              image_url: G.image.imageUrl(640, 480, "food")
            }
          }
        ]
      }
    }
  };
}
function Utu(u) {
  return {
    error: (u == null ? void 0 : u.error) ?? "",
    message: (u == null ? void 0 : u.message) ?? "",
    warning: (u == null ? void 0 : u.warning) ?? "",
    request_id: (u == null ? void 0 : u.request_id) ?? G.datatype.uuid(),
    response: (u == null ? void 0 : u.response) ?? { item_list: [] }
  };
}
const Ztu = xt.map(
  ({ item_id: u }) => Wtu({ item_id: u })
), Ytu = at.rest.get(Dt(wD), (u, e, a) => {
  const i = u.url.searchParams.get("item_id_list");
  return e(
    a.status(200),
    a.json(
      Utu({
        response: {
          item_list: Ztu.filter(
            (r) => i == null ? void 0 : i.includes(r.item_id.toString())
          )
        }
      })
    )
  );
});
function Qtu(u) {
  return {
    item_id: (u == null ? void 0 : u.item_id) ?? G.datatype.number(),
    sale: (u == null ? void 0 : u.sale) ?? G.datatype.number(),
    views: (u == null ? void 0 : u.views) ?? G.datatype.number(),
    likes: (u == null ? void 0 : u.likes) ?? G.datatype.number(),
    rating_star: (u == null ? void 0 : u.rating_star) ?? G.datatype.number(),
    comment_count: (u == null ? void 0 : u.comment_count) ?? G.datatype.number()
  };
}
function Xtu(u) {
  return {
    error: (u == null ? void 0 : u.error) ?? "",
    message: (u == null ? void 0 : u.message) ?? "",
    warning: (u == null ? void 0 : u.warning) ?? "",
    request_id: (u == null ? void 0 : u.request_id) ?? G.datatype.uuid(),
    response: (u == null ? void 0 : u.response) ?? { item_list: [] }
  };
}
const u1u = xt.map(
  ({ item_id: u }) => Qtu({ item_id: u })
), e1u = at.rest.get(
  Dt(ND),
  (u, e, a) => {
    const i = u.url.searchParams.get("item_id_list");
    return e(
      a.status(200),
      a.json(
        Xtu({
          response: {
            item_list: u1u.filter(
              (r) => i == null ? void 0 : i.includes(r.item_id.toString())
            )
          }
        })
      )
    );
  }
), a1u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItemBaseInfoMockHandler: Ytu,
  getItemExtraInfoMockHandler: e1u,
  getItemListMockHandlers: qtu
}, Symbol.toStringTag, { value: "Module" }));
var me, B4;
let i1u = (B4 = class {
  constructor() {
    mt(this, me, void 0);
    Ft(this, me, op(...Object.values(a1u)));
  }
  start() {
    br(this, me).listen();
  }
  close() {
    br(this, me).close();
  }
}, me = new WeakMap(), B4);
const A1u = {
  v2: new i1u()
};
export {
  A1u as MockServer
};