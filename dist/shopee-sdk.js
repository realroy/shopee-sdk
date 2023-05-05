var P5 = Object.defineProperty;
var T5 = (u, e, a) => e in u ? P5(u, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : u[e] = a;
var Iu = (u, e, a) => (T5(u, typeof e != "symbol" ? e + "" : e, a), a);
import { setTimeout as w5 } from "timers";
import N5 from "axios";
import { createHmac as L5 } from "crypto";
import { z as f } from "zod";
var y = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Je(u) {
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
var In = {}, K5 = {
  get exports() {
    return In;
  },
  set exports(u) {
    In = u;
  }
}, Yr, Wt;
function R5() {
  return Wt || (Wt = 1, Yr = {
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
  }), Yr;
}
var Qr, Zt;
function ts() {
  if (Zt)
    return Qr;
  Zt = 1;
  const u = R5(), e = {};
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
  Qr = a;
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
    const E = r[0] / 255, D = r[1] / 255, x = r[2] / 255, c = Math.max(E, D, x), d = c - Math.min(E, D, x), m = function(k) {
      return (c - k) / 6 / d + 1 / 2;
    };
    return d === 0 ? (s = 0, l = 0) : (l = d / c, n = m(E), o = m(D), t = m(x), E === c ? s = t - o : D === c ? s = 1 / 3 + n - t : x === c && (s = 2 / 3 + o - n), s < 0 ? s += 1 : s > 1 && (s -= 1)), [
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
    let c, d, m;
    switch (E) {
      default:
      case 6:
      case 0:
        c = D, d = x, m = o;
        break;
      case 1:
        c = x, d = D, m = o;
        break;
      case 2:
        c = o, d = D, m = x;
        break;
      case 3:
        c = o, d = x, m = D;
        break;
      case 4:
        c = x, d = o, m = D;
        break;
      case 5:
        c = D, d = o, m = x;
        break;
    }
    return [c * 255, d * 255, m * 255];
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
  }, Qr;
}
var Xr, Yt;
function _5() {
  if (Yt)
    return Xr;
  Yt = 1;
  const u = ts();
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
  return Xr = function(n) {
    const o = a(n), t = {}, s = Object.keys(o);
    for (let l = s.length, E = 0; E < l; E++) {
      const D = s[E];
      o[D].parent !== null && (t[D] = r(D, o));
    }
    return t;
  }, Xr;
}
var un, Qt;
function H5() {
  if (Qt)
    return un;
  Qt = 1;
  const u = ts(), e = _5(), a = {}, i = Object.keys(u);
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
  }), un = a, un;
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
    t === void 0 && (t = H5());
    const d = c ? 10 : 0, m = {};
    for (const [k, g] of Object.entries(t)) {
      const P = k === "ansi16" ? "ansi" : k;
      k === D ? m[P] = E(x, d) : typeof g == "object" && (m[P] = E(g[D], d));
    }
    return m;
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
      for (const [d, m] of Object.entries(c))
        D[d] = {
          open: `\x1B[${m[0]}m`,
          close: `\x1B[${m[1]}m`
        }, c[d] = D[d], E.set(m[0], m[1]);
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
})(K5);
var G5 = {
  stdout: !1,
  stderr: !1
};
const V5 = (u, e, a) => {
  let i = u.indexOf(e);
  if (i === -1)
    return u;
  const r = e.length;
  let n = 0, o = "";
  do
    o += u.substr(n, i - n) + e + a, n = i + r, i = u.indexOf(e, n);
  while (i !== -1);
  return o += u.substr(n), o;
}, I5 = (u, e, a, i) => {
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
var O5 = {
  stringReplaceAll: V5,
  stringEncaseCRLFWithFirstIndex: I5
}, en, Xt;
function J5() {
  if (Xt)
    return en;
  Xt = 1;
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
      const m = Number(d);
      if (!Number.isNaN(m))
        D.push(m);
      else if (c = d.match(a))
        D.push(c[2].replace(i, (k, g, P) => g ? n(g) : P));
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
  return en = (l, E) => {
    const D = [], x = [];
    let c = [];
    if (E.replace(u, (d, m, k, g, P, A) => {
      if (m)
        c.push(n(m));
      else if (g) {
        const v = c.join("");
        c = [], x.push(D.length === 0 ? v : s(l, D)(v)), D.push({ inverse: k, styles: t(g) });
      } else if (P) {
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
  }, en;
}
const Fa = In, { stdout: On, stderr: Jn } = G5, {
  stringReplaceAll: $5,
  stringEncaseCRLFWithFirstIndex: q5
} = O5, { isArray: Si } = Array, ss = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
], $e = /* @__PURE__ */ Object.create(null), U5 = (u, e = {}) => {
  if (e.level && !(Number.isInteger(e.level) && e.level >= 0 && e.level <= 3))
    throw new Error("The `level` option should be an integer from 0 to 3");
  const a = On ? On.level : 0;
  u.level = e.level === void 0 ? a : e.level;
};
class W5 {
  constructor(e) {
    return ls(e);
  }
}
const ls = (u) => {
  const e = {};
  return U5(e, u), e.template = (...a) => Ds(e.template, ...a), Object.setPrototypeOf(e, Xi.prototype), Object.setPrototypeOf(e.template, e), e.template.constructor = () => {
    throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
  }, e.template.Instance = W5, e.template;
};
function Xi(u) {
  return ls(u);
}
for (const [u, e] of Object.entries(Fa))
  $e[u] = {
    get() {
      const a = ur(this, xo(e.open, e.close, this._styler), this._isEmpty);
      return Object.defineProperty(this, u, { value: a }), a;
    }
  };
$e.visible = {
  get() {
    const u = ur(this, this._styler, !0);
    return Object.defineProperty(this, "visible", { value: u }), u;
  }
};
const Es = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
for (const u of Es)
  $e[u] = {
    get() {
      const { level: e } = this;
      return function(...a) {
        const i = xo(Fa.color[ss[e]][u](...a), Fa.color.close, this._styler);
        return ur(this, i, this._isEmpty);
      };
    }
  };
for (const u of Es) {
  const e = "bg" + u[0].toUpperCase() + u.slice(1);
  $e[e] = {
    get() {
      const { level: a } = this;
      return function(...i) {
        const r = xo(Fa.bgColor[ss[a]][u](...i), Fa.bgColor.close, this._styler);
        return ur(this, r, this._isEmpty);
      };
    }
  };
}
const Z5 = Object.defineProperties(() => {
}, {
  ...$e,
  level: {
    enumerable: !0,
    get() {
      return this._generator.level;
    },
    set(u) {
      this._generator.level = u;
    }
  }
}), xo = (u, e, a) => {
  let i, r;
  return a === void 0 ? (i = u, r = e) : (i = a.openAll + u, r = e + a.closeAll), {
    open: u,
    close: e,
    openAll: i,
    closeAll: r,
    parent: a
  };
}, ur = (u, e, a) => {
  const i = (...r) => Si(r[0]) && Si(r[0].raw) ? u1(i, Ds(i, ...r)) : u1(i, r.length === 1 ? "" + r[0] : r.join(" "));
  return Object.setPrototypeOf(i, Z5), i._generator = u, i._styler = e, i._isEmpty = a, i;
}, u1 = (u, e) => {
  if (u.level <= 0 || !e)
    return u._isEmpty ? "" : e;
  let a = u._styler;
  if (a === void 0)
    return e;
  const { openAll: i, closeAll: r } = a;
  if (e.indexOf("\x1B") !== -1)
    for (; a !== void 0; )
      e = $5(e, a.close, a.open), a = a.parent;
  const n = e.indexOf(`
`);
  return n !== -1 && (e = q5(e, r, i, n)), i + e + r;
};
let an;
const Ds = (u, ...e) => {
  const [a] = e;
  if (!Si(a) || !Si(a.raw))
    return e.join(" ");
  const i = e.slice(1), r = [a.raw[0]];
  for (let n = 1; n < a.length; n++)
    r.push(
      String(i[n - 1]).replace(/[{}\\]/g, "\\$&"),
      String(a.raw[n])
    );
  return an === void 0 && (an = J5()), an(u, r.join(""));
};
Object.defineProperties(Xi.prototype, $e);
const er = Xi();
er.supportsColor = On;
er.stderr = Xi({ level: Jn ? Jn.level : 0 });
er.stderr.supportsColor = Jn;
var Y5 = er, Q5 = /(%?)(%([sdjo]))/g;
function X5(u, e) {
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
function ka(u, ...e) {
  if (e.length === 0)
    return u;
  let a = 0, i = u.replace(
    Q5,
    (r, n, o, t) => {
      const s = e[a], l = X5(s, t);
      return n ? r : (a++, l);
    }
  );
  return a < e.length && (i += ` ${e.slice(a).join(" ")}`), i = i.replace(/%{2,2}/g, "%"), i;
}
var ux = 2;
function ex(u) {
  if (!u.stack)
    return;
  const e = u.stack.split(`
`);
  e.splice(1, ux), u.stack = e.join(`
`);
}
var xs = class extends Error {
  constructor(e, ...a) {
    super(e), this.message = e, this.name = "Invariant Violation", this.message = ka(e, ...a), ex(this);
  }
}, J0 = (u, e, ...a) => {
  if (!u)
    throw new xs(e, ...a);
};
J0.as = (u, e, a, ...i) => {
  if (!e)
    throw u.prototype.name != null ? new u(ka(a, i)) : u(ka(a, i));
};
const ax = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InvariantError: xs,
  format: ka,
  invariant: J0
}, Symbol.toStringTag, { value: "Module" }));
var S0 = {}, me = {};
Object.defineProperty(me, "__esModule", { value: !0 });
me.IS_PATCHED_MODULE = void 0;
me.IS_PATCHED_MODULE = Symbol("isPatchedModule");
var qe = {};
const pa = typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {};
function cs() {
  throw new Error("setTimeout has not been defined");
}
function ds() {
  throw new Error("clearTimeout has not been defined");
}
var V0 = cs, I0 = ds;
typeof pa.setTimeout == "function" && (V0 = setTimeout);
typeof pa.clearTimeout == "function" && (I0 = clearTimeout);
function ms(u) {
  if (V0 === setTimeout)
    return setTimeout(u, 0);
  if ((V0 === cs || !V0) && setTimeout)
    return V0 = setTimeout, setTimeout(u, 0);
  try {
    return V0(u, 0);
  } catch {
    try {
      return V0.call(null, u, 0);
    } catch {
      return V0.call(this, u, 0);
    }
  }
}
function ix(u) {
  if (I0 === clearTimeout)
    return clearTimeout(u);
  if ((I0 === ds || !I0) && clearTimeout)
    return I0 = clearTimeout, clearTimeout(u);
  try {
    return I0(u);
  } catch {
    try {
      return I0.call(null, u);
    } catch {
      return I0.call(this, u);
    }
  }
}
var y0 = [], Pe = !1, te, Ci = -1;
function rx() {
  !Pe || !te || (Pe = !1, te.length ? y0 = te.concat(y0) : Ci = -1, y0.length && Fs());
}
function Fs() {
  if (!Pe) {
    var u = ms(rx);
    Pe = !0;
    for (var e = y0.length; e; ) {
      for (te = y0, y0 = []; ++Ci < e; )
        te && te[Ci].run();
      Ci = -1, e = y0.length;
    }
    te = null, Pe = !1, ix(u);
  }
}
function nx(u) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var a = 1; a < arguments.length; a++)
      e[a - 1] = arguments[a];
  y0.push(new ks(u, e)), y0.length === 1 && !Pe && ms(Fs);
}
function ks(u, e) {
  this.fun = u, this.array = e;
}
ks.prototype.run = function() {
  this.fun.apply(null, this.array);
};
var ox = "browser", tx = "browser", sx = !0, lx = {}, Ex = [], Dx = "", xx = {}, cx = {}, dx = {};
function Fe() {
}
var mx = Fe, Fx = Fe, kx = Fe, px = Fe, hx = Fe, gx = Fe, Cx = Fe;
function vx(u) {
  throw new Error("process.binding is not supported");
}
function bx() {
  return "/";
}
function Ax(u) {
  throw new Error("process.chdir is not supported");
}
function Bx() {
  return 0;
}
var Be = pa.performance || {}, fx = Be.now || Be.mozNow || Be.msNow || Be.oNow || Be.webkitNow || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
function yx(u) {
  var e = fx.call(Be) * 1e-3, a = Math.floor(e), i = Math.floor(e % 1 * 1e9);
  return u && (a = a - u[0], i = i - u[1], i < 0 && (a--, i += 1e9)), [a, i];
}
var zx = /* @__PURE__ */ new Date();
function Sx() {
  var u = /* @__PURE__ */ new Date(), e = u - zx;
  return e / 1e3;
}
var Ju = {
  nextTick: nx,
  title: ox,
  browser: sx,
  env: lx,
  argv: Ex,
  version: Dx,
  versions: xx,
  on: mx,
  addListener: Fx,
  once: kx,
  off: px,
  removeListener: hx,
  removeAllListeners: gx,
  emit: Cx,
  binding: vx,
  cwd: bx,
  chdir: Ax,
  umask: Bx,
  hrtime: yx,
  platform: tx,
  release: cx,
  config: dx,
  uptime: Sx
}, i0 = {}, Mx = {
  get exports() {
    return i0;
  },
  set exports(u) {
    i0 = u;
  }
}, rn, e1;
function jx() {
  if (e1)
    return rn;
  e1 = 1;
  var u = 1e3, e = u * 60, a = e * 60, i = a * 24, r = i * 7, n = i * 365.25;
  rn = function(E, D) {
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
  return rn;
}
function Px(u) {
  a.debug = a, a.default = a, a.coerce = s, a.disable = n, a.enable = r, a.enabled = o, a.humanize = jx(), a.destroy = l, Object.keys(u).forEach((E) => {
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
    function m(...k) {
      if (!m.enabled)
        return;
      const g = m, P = Number(/* @__PURE__ */ new Date()), A = P - (D || P);
      g.diff = A, g.prev = D, g.curr = P, D = P, k[0] = a.coerce(k[0]), typeof k[0] != "string" && k.unshift("%O");
      let v = 0;
      k[0] = k[0].replace(/%([a-zA-Z%])/g, (H, $) => {
        if (H === "%%")
          return "%";
        v++;
        const O = a.formatters[$];
        if (typeof O == "function") {
          const b = k[v];
          H = O.call(g, b), k.splice(v, 1), v--;
        }
        return H;
      }), a.formatArgs.call(g, k), (g.log || a.log).apply(g, k);
    }
    return m.namespace = E, m.useColors = a.useColors(), m.color = a.selectColor(E), m.extend = i, m.destroy = a.destroy, Object.defineProperty(m, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => x !== null ? x : (c !== a.namespaces && (c = a.namespaces, d = a.enabled(E)), d),
      set: (k) => {
        x = k;
      }
    }), typeof a.init == "function" && a.init(m), m;
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
var Tx = Px;
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
    return !s && typeof Ju < "u" && "env" in Ju && (s = Ju.env.DEBUG), s;
  }
  function o() {
    try {
      return localStorage;
    } catch {
    }
  }
  u.exports = Tx(e);
  const { formatters: t } = u.exports;
  t.j = function(s) {
    try {
      return JSON.stringify(s);
    } catch (l) {
      return "[UnexpectedJSONParseError]: " + l.message;
    }
  };
})(Mx, i0);
var ps = {}, hs = {}, ar = {}, Mi = {}, wx = {
  get exports() {
    return Mi;
  },
  set exports(u) {
    Mi = u;
  }
}, Te = typeof Reflect == "object" ? Reflect : null, a1 = Te && typeof Te.apply == "function" ? Te.apply : function(e, a, i) {
  return Function.prototype.apply.call(e, a, i);
}, vi;
Te && typeof Te.ownKeys == "function" ? vi = Te.ownKeys : Object.getOwnPropertySymbols ? vi = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : vi = function(e) {
  return Object.getOwnPropertyNames(e);
};
function Nx(u) {
  console && console.warn && console.warn(u);
}
var gs = Number.isNaN || function(e) {
  return e !== e;
};
function su() {
  su.init.call(this);
}
wx.exports = su;
Mi.once = _x;
su.EventEmitter = su;
su.prototype._events = void 0;
su.prototype._eventsCount = 0;
su.prototype._maxListeners = void 0;
var i1 = 10;
function ir(u) {
  if (typeof u != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof u);
}
Object.defineProperty(su, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return i1;
  },
  set: function(u) {
    if (typeof u != "number" || u < 0 || gs(u))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + u + ".");
    i1 = u;
  }
});
su.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
su.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || gs(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function Cs(u) {
  return u._maxListeners === void 0 ? su.defaultMaxListeners : u._maxListeners;
}
su.prototype.getMaxListeners = function() {
  return Cs(this);
};
su.prototype.emit = function(e) {
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
    a1(s, this, a);
  else
    for (var l = s.length, E = fs(s, l), i = 0; i < l; ++i)
      a1(E[i], this, a);
  return !0;
};
function vs(u, e, a, i) {
  var r, n, o;
  if (ir(a), n = u._events, n === void 0 ? (n = u._events = /* @__PURE__ */ Object.create(null), u._eventsCount = 0) : (n.newListener !== void 0 && (u.emit(
    "newListener",
    e,
    a.listener ? a.listener : a
  ), n = u._events), o = n[e]), o === void 0)
    o = n[e] = a, ++u._eventsCount;
  else if (typeof o == "function" ? o = n[e] = i ? [a, o] : [o, a] : i ? o.unshift(a) : o.push(a), r = Cs(u), r > 0 && o.length > r && !o.warned) {
    o.warned = !0;
    var t = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    t.name = "MaxListenersExceededWarning", t.emitter = u, t.type = e, t.count = o.length, Nx(t);
  }
  return u;
}
su.prototype.addListener = function(e, a) {
  return vs(this, e, a, !1);
};
su.prototype.on = su.prototype.addListener;
su.prototype.prependListener = function(e, a) {
  return vs(this, e, a, !0);
};
function Lx() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function bs(u, e, a) {
  var i = { fired: !1, wrapFn: void 0, target: u, type: e, listener: a }, r = Lx.bind(i);
  return r.listener = a, i.wrapFn = r, r;
}
su.prototype.once = function(e, a) {
  return ir(a), this.on(e, bs(this, e, a)), this;
};
su.prototype.prependOnceListener = function(e, a) {
  return ir(a), this.prependListener(e, bs(this, e, a)), this;
};
su.prototype.removeListener = function(e, a) {
  var i, r, n, o, t;
  if (ir(a), r = this._events, r === void 0)
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
    n === 0 ? i.shift() : Kx(i, n), i.length === 1 && (r[e] = i[0]), r.removeListener !== void 0 && this.emit("removeListener", e, t || a);
  }
  return this;
};
su.prototype.off = su.prototype.removeListener;
su.prototype.removeAllListeners = function(e) {
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
function As(u, e, a) {
  var i = u._events;
  if (i === void 0)
    return [];
  var r = i[e];
  return r === void 0 ? [] : typeof r == "function" ? a ? [r.listener || r] : [r] : a ? Rx(r) : fs(r, r.length);
}
su.prototype.listeners = function(e) {
  return As(this, e, !0);
};
su.prototype.rawListeners = function(e) {
  return As(this, e, !1);
};
su.listenerCount = function(u, e) {
  return typeof u.listenerCount == "function" ? u.listenerCount(e) : Bs.call(u, e);
};
su.prototype.listenerCount = Bs;
function Bs(u) {
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
su.prototype.eventNames = function() {
  return this._eventsCount > 0 ? vi(this._events) : [];
};
function fs(u, e) {
  for (var a = new Array(e), i = 0; i < e; ++i)
    a[i] = u[i];
  return a;
}
function Kx(u, e) {
  for (; e + 1 < u.length; e++)
    u[e] = u[e + 1];
  u.pop();
}
function Rx(u) {
  for (var e = new Array(u.length), a = 0; a < e.length; ++a)
    e[a] = u[a].listener || u[a];
  return e;
}
function _x(u, e) {
  return new Promise(function(a, i) {
    function r(o) {
      u.removeListener(e, n), i(o);
    }
    function n() {
      typeof u.removeListener == "function" && u.removeListener("error", r), a([].slice.call(arguments));
    }
    ys(u, e, n, { once: !0 }), e !== "error" && Hx(u, r, { once: !0 });
  });
}
function Hx(u, e, a) {
  typeof u.on == "function" && ys(u, "error", e, a);
}
function ys(u, e, a, i) {
  if (typeof u.on == "function")
    i.once ? u.once(e, a) : u.on(e, a);
  else if (typeof u.addEventListener == "function")
    u.addEventListener(e, function r(n) {
      i.once && u.removeEventListener(e, r), a(n);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof u);
}
var Gx = y && y.__extends || function() {
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
}(), Vx = y && y.__spreadArrays || function() {
  for (var u = 0, e = 0, a = arguments.length; e < a; e++)
    u += arguments[e].length;
  for (var i = Array(u), r = 0, e = 0; e < a; e++)
    for (var n = arguments[e], o = 0, t = n.length; o < t; o++, r++)
      i[r] = n[o];
  return i;
};
ar.__esModule = !0;
ar.StrictEventEmitter = void 0;
var Ix = Mi, Ox = (
  /** @class */
  function(u) {
    Gx(e, u);
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
      return u.prototype.emit.apply(this, Vx([a.toString()], i));
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
  }(Ix.EventEmitter)
);
ar.StrictEventEmitter = Ox;
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
  u.__esModule = !0, a(ar, u);
})(hs);
var Ee = {};
Object.defineProperty(Ee, "__esModule", { value: !0 });
Ee.nextTickAsync = Ee.nextTick = void 0;
function Jx(u) {
  setTimeout(u, 0);
}
Ee.nextTick = Jx;
function $x(u) {
  return new Promise(function(e) {
    setTimeout(function() {
      e(u());
    }, 0);
  });
}
Ee.nextTickAsync = $x;
(function(u) {
  var e = y && y.__extends || function() {
    var D = function(x, c) {
      return D = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, m) {
        d.__proto__ = m;
      } || function(d, m) {
        for (var k in m)
          Object.prototype.hasOwnProperty.call(m, k) && (d[k] = m[k]);
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
    function m(k) {
      return k instanceof c ? k : new c(function(g) {
        g(k);
      });
    }
    return new (c || (c = Promise))(function(k, g) {
      function P(N) {
        try {
          v(d.next(N));
        } catch (H) {
          g(H);
        }
      }
      function A(N) {
        try {
          v(d.throw(N));
        } catch (H) {
          g(H);
        }
      }
      function v(N) {
        N.done ? k(N.value) : m(N.value).then(P, A);
      }
      v((d = d.apply(D, x || [])).next());
    });
  }, i = y && y.__generator || function(D, x) {
    var c = { label: 0, sent: function() {
      if (k[0] & 1)
        throw k[1];
      return k[1];
    }, trys: [], ops: [] }, d, m, k, g;
    return g = { next: P(0), throw: P(1), return: P(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function P(v) {
      return function(N) {
        return A([v, N]);
      };
    }
    function A(v) {
      if (d)
        throw new TypeError("Generator is already executing.");
      for (; c; )
        try {
          if (d = 1, m && (k = v[0] & 2 ? m.return : v[0] ? m.throw || ((k = m.return) && k.call(m), 0) : m.next) && !(k = k.call(m, v[1])).done)
            return k;
          switch (m = 0, k && (v = [v[0] & 2, k.value]), v[0]) {
            case 0:
            case 1:
              k = v;
              break;
            case 4:
              return c.label++, { value: v[1], done: !1 };
            case 5:
              c.label++, m = v[1], v = [0];
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
        } catch (N) {
          v = [6, N], m = 0;
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
    var d = c.call(D), m, k = [], g;
    try {
      for (; (x === void 0 || x-- > 0) && !(m = d.next()).done; )
        k.push(m.value);
    } catch (P) {
      g = { error: P };
    } finally {
      try {
        m && !m.done && (c = d.return) && c.call(d);
      } finally {
        if (g)
          throw g.error;
      }
    }
    return k;
  }, n = y && y.__spreadArray || function(D, x) {
    for (var c = 0, d = x.length, m = D.length; c < d; c++, m++)
      D[m] = x[c];
    return D;
  };
  Object.defineProperty(u, "__esModule", { value: !0 }), u.AsyncEventEmitter = u.AsyncEventEmitterReadyState = void 0;
  var o = i0, t = hs, s = Ee, l;
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
        var m = this, k = this.log.extend("on");
        return k('adding "%s" listener...', c), this.readyState === l.DEACTIVATED ? (k("the emitter is destroyed, skipping!"), this) : D.prototype.on.call(this, c, function() {
          for (var g = [], P = 0; P < arguments.length; P++)
            g[P] = arguments[P];
          return a(m, void 0, void 0, function() {
            var A, v = this;
            return i(this, function(N) {
              return A = this.openListenerQueue(c), k('awaiting the "%s" listener...', c), A.push({
                args: g,
                done: new Promise(function(H, $) {
                  return a(v, void 0, void 0, function() {
                    var O;
                    return i(this, function(b) {
                      switch (b.label) {
                        case 0:
                          return b.trys.push([0, 2, , 3]), [4, d.apply(void 0, n([], r(g)))];
                        case 1:
                          return b.sent(), H(), k('"%s" listener has resolved!', c), [3, 3];
                        case 2:
                          return O = b.sent(), k('"%s" listener has rejected!', O), $(O), [3, 3];
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
        for (var d = this, m = [], k = 1; k < arguments.length; k++)
          m[k - 1] = arguments[k];
        var g = this.log.extend("emit");
        return g('emitting "%s" event...', c), this.readyState === l.DEACTIVATED ? (g("the emitter is destroyed, skipping!"), !1) : (this.openListenerQueue(c), g('appending a one-time cleanup "%s" listener...', c), this.once(c, function() {
          s.nextTick(function() {
            d.queue.delete(c), g('cleaned up "%s" listeners queue!', c);
          });
        }), D.prototype.emit.apply(this, n([c], r(m))));
      }, x.prototype.untilIdle = function(c, d) {
        return d === void 0 && (d = function() {
          return !0;
        }), a(this, void 0, void 0, function() {
          var m, k = this;
          return i(this, function(g) {
            switch (g.label) {
              case 0:
                return m = this.queue.get(c) || [], [4, Promise.all(m.filter(d).map(function(P) {
                  var A = P.done;
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
        var m = this.queue.get(c);
        return m ? (d("returning an exising queue:", m), m) : (d("no queue found, creating one..."), this.queue.set(c, []), []);
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
})(ps);
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
  var a = i0, i = ps, r = Ee;
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
          x("found a running instance, reusing..."), this.on = function(m, k) {
            x('proxying the "%s" listener', m), d.emitter.addListener(m, k), D.subscriptions.push(function() {
              d.emitter.removeListener(m, k), x('removed proxied "%s" listener!', m);
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
            for (var m = e(this.subscriptions), k = m.next(); !k.done; k = m.next()) {
              var g = k.value;
              g();
            }
          } catch (P) {
            D = { error: P };
          } finally {
            try {
              k && !k.done && (x = m.return) && x.call(m);
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
})(qe);
var rr = {}, qx = y && y.__extends || function() {
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
}(), Ux = y && y.__values || function(u) {
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
Object.defineProperty(rr, "__esModule", { value: !0 });
rr.BatchInterceptor = void 0;
var Wx = qe, Zx = (
  /** @class */
  function(u) {
    qx(e, u);
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
        for (var t = Ux(this.interceptors), s = t.next(); !s.done; s = t.next()) {
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
  }(Wx.Interceptor)
);
rr.BatchInterceptor = Zx;
var Q0 = {}, co = Object.defineProperty, Yx = Object.getOwnPropertyDescriptor, Qx = Object.getOwnPropertyNames, Xx = Object.prototype.hasOwnProperty, uc = (u, e) => {
  for (var a in e)
    co(u, a, { get: e[a], enumerable: !0 });
}, ec = (u, e, a, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let r of Qx(e))
      !Xx.call(u, r) && r !== a && co(u, r, { get: () => e[r], enumerable: !(i = Yx(e, r)) || i.enumerable });
  return u;
}, ac = (u) => ec(co({}, "__esModule", { value: !0 }), u), zs = {};
uc(zs, {
  Headers: () => Ma,
  flattenHeadersList: () => Dc,
  flattenHeadersObject: () => xc,
  headersToList: () => Ss,
  headersToObject: () => tc,
  headersToString: () => nc,
  listToHeaders: () => lc,
  objectToHeaders: () => Ec,
  reduceHeadersObject: () => mo,
  stringToHeaders: () => sc
});
var Sa = ac(zs), ic = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
function aa(u) {
  if (typeof u != "string" && (u = String(u)), ic.test(u) || u.trim() === "")
    throw new TypeError("Invalid character in header field name");
  return u.toLowerCase();
}
function rc(u) {
  return typeof u != "string" && (u = String(u)), u;
}
var Qu = Symbol("normalizedHeaders"), ni = Symbol("rawHeaderNames"), r1, n1, Ma = class {
  constructor(e) {
    this[r1] = {}, this[n1] = /* @__PURE__ */ new Map(), ["Headers", "HeadersPolyfill"].includes(e == null ? void 0 : e.constructor.name) || e instanceof Ma ? e.forEach((i, r) => {
      this.append(r, i);
    }, this) : Array.isArray(e) ? e.forEach(([a, i]) => {
      this.append(a, Array.isArray(i) ? i.join(", ") : i);
    }) : e && Object.getOwnPropertyNames(e).forEach((a) => {
      const i = e[a];
      this.append(a, Array.isArray(i) ? i.join(", ") : i);
    });
  }
  [(r1 = Qu, n1 = ni, Symbol.iterator)]() {
    return this.entries();
  }
  *keys() {
    for (const e of Object.keys(this[Qu]))
      yield e;
  }
  *values() {
    for (const e of Object.values(this[Qu]))
      yield e;
  }
  *entries() {
    for (const e of Object.keys(this[Qu]))
      yield [e, this.get(e)];
  }
  get(e) {
    return this[Qu][aa(e)] || null;
  }
  set(e, a) {
    const i = aa(e);
    this[Qu][i] = rc(a), this[ni].set(i, e);
  }
  append(e, a) {
    const i = aa(e);
    let r = this.has(i) ? `${this.get(i)}, ${a}` : a;
    this.set(e, r);
  }
  delete(e) {
    if (!this.has(e))
      return;
    const a = aa(e);
    delete this[Qu][a], this[ni].delete(a);
  }
  all() {
    return this[Qu];
  }
  raw() {
    const e = {};
    for (const [a, i] of this.entries())
      e[this[ni].get(a)] = i;
    return e;
  }
  has(e) {
    return this[Qu].hasOwnProperty(aa(e));
  }
  forEach(e, a) {
    for (const i in this[Qu])
      this[Qu].hasOwnProperty(i) && e.call(a, this[Qu][i], i, this);
  }
};
function Ss(u) {
  const e = [];
  return u.forEach((a, i) => {
    const r = a.includes(",") ? a.split(",").map((n) => n.trim()) : a;
    e.push([i, r]);
  }), e;
}
function nc(u) {
  return Ss(u).map(([i, r]) => {
    const n = [].concat(r);
    return `${i}: ${n.join(", ")}`;
  }).join(`\r
`);
}
var oc = ["user-agent"];
function tc(u) {
  const e = {};
  return u.forEach((a, i) => {
    const r = !oc.includes(i.toLowerCase()) && a.includes(",");
    e[i] = r ? a.split(",").map((n) => n.trim()) : a;
  }), e;
}
function sc(u) {
  return u.trim().split(/[\r\n]+/).reduce((a, i) => {
    if (i.trim() === "")
      return a;
    const r = i.split(": "), n = r.shift(), o = r.join(": ");
    return a.append(n, o), a;
  }, new Ma());
}
function lc(u) {
  const e = new Ma();
  return u.forEach(([a, i]) => {
    [].concat(i).forEach((n) => {
      e.append(a, n);
    });
  }), e;
}
function mo(u, e, a) {
  return Object.keys(u).reduce((i, r) => e(i, r, u[r]), a);
}
function Ec(u) {
  return mo(
    u,
    (e, a, i) => ([].concat(i).filter(Boolean).forEach((n) => {
      e.append(a, n);
    }), e),
    new Ma()
  );
}
function Dc(u) {
  return u.map(([e, a]) => [e, [].concat(a).join(", ")]);
}
function xc(u) {
  return mo(
    u,
    (e, a, i) => (e[a] = [].concat(i).join(", "), e),
    {}
  );
}
var Fo = Object.defineProperty, cc = Object.getOwnPropertyDescriptor, dc = Object.getOwnPropertyNames, mc = Object.prototype.hasOwnProperty, Fc = (u, e) => {
  for (var a in e)
    Fo(u, a, { get: e[a], enumerable: !0 });
}, kc = (u, e, a, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let r of dc(e))
      !mc.call(u, r) && r !== a && Fo(u, r, { get: () => e[r], enumerable: !(i = cc(e, r)) || i.enumerable });
  return u;
}, pc = (u) => kc(Fo({}, "__esModule", { value: !0 }), u), Ms = {};
Fc(Ms, {
  InvariantError: () => js,
  format: () => ji,
  invariant: () => Ps
});
var ja = pc(Ms), hc = /(%?)(%([sdjo]))/g;
function gc(u, e) {
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
function ji(u, ...e) {
  if (e.length === 0)
    return u;
  let a = 0, i = u.replace(
    hc,
    (r, n, o, t) => {
      const s = e[a], l = gc(s, t);
      return n ? r : (a++, l);
    }
  );
  return a < e.length && (i += ` ${e.slice(a).join(" ")}`), i = i.replace(/%{2,2}/g, "%"), i;
}
var Cc = 2;
function vc(u) {
  if (!u.stack)
    return;
  const e = u.stack.split(`
`);
  e.splice(1, Cc), u.stack = e.join(`
`);
}
var js = class extends Error {
  constructor(u, ...e) {
    super(u), this.message = u, this.name = "Invariant Violation", this.message = ji(u, ...e), vc(this);
  }
}, Ps = (u, e, ...a) => {
  if (!u)
    throw new js(e, ...a);
};
Ps.as = (u, e, a, ...i) => {
  if (!e)
    throw u.prototype.name != null ? new u(ji(a, i)) : u(ji(a, i));
};
var a0 = {}, ko = {}, nn = {}, on = {}, tn, o1;
function Ts() {
  return o1 || (o1 = 1, tn = function() {
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
  }), tn;
}
var sn, t1;
function nr() {
  if (t1)
    return sn;
  t1 = 1;
  var u = Ts();
  return sn = function() {
    return u() && !!Symbol.toStringTag;
  }, sn;
}
var ln, s1;
function bc() {
  if (s1)
    return ln;
  s1 = 1;
  var u = typeof Symbol < "u" && Symbol, e = Ts();
  return ln = function() {
    return typeof u != "function" || typeof Symbol != "function" || typeof u("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : e();
  }, ln;
}
var En, l1;
function Ac() {
  if (l1)
    return En;
  l1 = 1;
  var u = "Function.prototype.bind called on incompatible ", e = Array.prototype.slice, a = Object.prototype.toString, i = "[object Function]";
  return En = function(n) {
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
  }, En;
}
var Dn, E1;
function po() {
  if (E1)
    return Dn;
  E1 = 1;
  var u = Ac();
  return Dn = Function.prototype.bind || u, Dn;
}
var xn, D1;
function Bc() {
  if (D1)
    return xn;
  D1 = 1;
  var u = po();
  return xn = u.call(Function.call, Object.prototype.hasOwnProperty), xn;
}
var cn, x1;
function ho() {
  if (x1)
    return cn;
  x1 = 1;
  var u, e = SyntaxError, a = Function, i = TypeError, r = function(G) {
    try {
      return a('"use strict"; return (' + G + ").constructor;")();
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
  }() : o, s = bc()(), l = Object.getPrototypeOf || function(G) {
    return G.__proto__;
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
  } catch (G) {
    var c = l(l(G));
    x["%Error.prototype%"] = c;
  }
  var d = function G(q) {
    var ou;
    if (q === "%AsyncFunction%")
      ou = r("async function () {}");
    else if (q === "%GeneratorFunction%")
      ou = r("function* () {}");
    else if (q === "%AsyncGeneratorFunction%")
      ou = r("async function* () {}");
    else if (q === "%AsyncGenerator%") {
      var X = G("%AsyncGeneratorFunction%");
      X && (ou = X.prototype);
    } else if (q === "%AsyncIteratorPrototype%") {
      var iu = G("%AsyncGenerator%");
      iu && (ou = l(iu.prototype));
    }
    return x[q] = ou, ou;
  }, m = {
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
  }, k = po(), g = Bc(), P = k.call(Function.call, Array.prototype.concat), A = k.call(Function.apply, Array.prototype.splice), v = k.call(Function.call, String.prototype.replace), N = k.call(Function.call, String.prototype.slice), H = k.call(Function.call, RegExp.prototype.exec), $ = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, O = /\\(\\)?/g, b = function(q) {
    var ou = N(q, 0, 1), X = N(q, -1);
    if (ou === "%" && X !== "%")
      throw new e("invalid intrinsic syntax, expected closing `%`");
    if (X === "%" && ou !== "%")
      throw new e("invalid intrinsic syntax, expected opening `%`");
    var iu = [];
    return v(q, $, function(U, lu, Eu, vu) {
      iu[iu.length] = Eu ? v(vu, O, "$1") : lu || U;
    }), iu;
  }, w = function(q, ou) {
    var X = q, iu;
    if (g(m, X) && (iu = m[X], X = "%" + iu[0] + "%"), g(x, X)) {
      var U = x[X];
      if (U === E && (U = d(X)), typeof U > "u" && !ou)
        throw new i("intrinsic " + q + " exists, but is not available. Please file an issue!");
      return {
        alias: iu,
        name: X,
        value: U
      };
    }
    throw new e("intrinsic " + q + " does not exist!");
  };
  return cn = function(q, ou) {
    if (typeof q != "string" || q.length === 0)
      throw new i("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof ou != "boolean")
      throw new i('"allowMissing" argument must be a boolean');
    if (H(/^%?[^%]*%?$/, q) === null)
      throw new e("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var X = b(q), iu = X.length > 0 ? X[0] : "", U = w("%" + iu + "%", ou), lu = U.name, Eu = U.value, vu = !1, Vu = U.alias;
    Vu && (iu = Vu[0], A(X, P([0, 1], Vu)));
    for (var t0 = 1, F = !0; t0 < X.length; t0 += 1) {
      var h = X[t0], C = N(h, 0, 1), j = N(h, -1);
      if ((C === '"' || C === "'" || C === "`" || j === '"' || j === "'" || j === "`") && C !== j)
        throw new e("property names with quotes must have matching quotes");
      if ((h === "constructor" || !F) && (vu = !0), iu += "." + h, lu = "%" + iu + "%", g(x, lu))
        Eu = x[lu];
      else if (Eu != null) {
        if (!(h in Eu)) {
          if (!ou)
            throw new i("base intrinsic for " + q + " exists, but the property is not available.");
          return;
        }
        if (n && t0 + 1 >= X.length) {
          var K = n(Eu, h);
          F = !!K, F && "get" in K && !("originalValue" in K.get) ? Eu = K.get : Eu = Eu[h];
        } else
          F = g(Eu, h), Eu = Eu[h];
        F && !vu && (x[lu] = Eu);
      }
    }
    return Eu;
  }, cn;
}
var Pi = {}, fc = {
  get exports() {
    return Pi;
  },
  set exports(u) {
    Pi = u;
  }
}, c1;
function yc() {
  return c1 || (c1 = 1, function(u) {
    var e = po(), a = ho(), i = a("%Function.prototype.apply%"), r = a("%Function.prototype.call%"), n = a("%Reflect.apply%", !0) || e.call(r, i), o = a("%Object.getOwnPropertyDescriptor%", !0), t = a("%Object.defineProperty%", !0), s = a("%Math.max%");
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
  }(fc)), Pi;
}
var dn, d1;
function go() {
  if (d1)
    return dn;
  d1 = 1;
  var u = ho(), e = yc(), a = e(u("String.prototype.indexOf"));
  return dn = function(r, n) {
    var o = u(r, !!n);
    return typeof o == "function" && a(r, ".prototype.") > -1 ? e(o) : o;
  }, dn;
}
var mn, m1;
function zc() {
  if (m1)
    return mn;
  m1 = 1;
  var u = nr()(), e = go(), a = e("Object.prototype.toString"), i = function(t) {
    return u && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : a(t) === "[object Arguments]";
  }, r = function(t) {
    return i(t) ? !0 : t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && a(t) !== "[object Array]" && a(t.callee) === "[object Function]";
  }, n = function() {
    return i(arguments);
  }();
  return i.isLegacyArguments = r, mn = n ? i : r, mn;
}
var Fn, F1;
function Sc() {
  if (F1)
    return Fn;
  F1 = 1;
  var u = Object.prototype.toString, e = Function.prototype.toString, a = /^\s*(?:function)?\*/, i = nr()(), r = Object.getPrototypeOf, n = function() {
    if (!i)
      return !1;
    try {
      return Function("return function*() {}")();
    } catch {
    }
  }, o;
  return Fn = function(s) {
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
  }, Fn;
}
var kn, k1;
function Mc() {
  if (k1)
    return kn;
  k1 = 1;
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
    } catch (P) {
      P !== i && (e = null);
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
  }, t = Object.prototype.toString, s = "[object Object]", l = "[object Function]", E = "[object GeneratorFunction]", D = "[object HTMLAllCollection]", x = "[object HTML document.all class]", c = "[object HTMLCollection]", d = typeof Symbol == "function" && !!Symbol.toStringTag, m = !(0 in [,]), k = function() {
    return !1;
  };
  if (typeof document == "object") {
    var g = document.all;
    t.call(g) === t.call(document.all) && (k = function(A) {
      if ((m || !A) && (typeof A > "u" || typeof A == "object"))
        try {
          var v = t.call(A);
          return (v === D || v === x || v === c || v === s) && A("") == null;
        } catch {
        }
      return !1;
    });
  }
  return kn = e ? function(A) {
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
  }, kn;
}
var pn, p1;
function ws() {
  if (p1)
    return pn;
  p1 = 1;
  var u = Mc(), e = Object.prototype.toString, a = Object.prototype.hasOwnProperty, i = function(s, l, E) {
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
  return pn = o, pn;
}
var hn, h1;
function Ns() {
  if (h1)
    return hn;
  h1 = 1;
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
  return hn = function() {
    for (var i = [], r = 0; r < u.length; r++)
      typeof e[u[r]] == "function" && (i[i.length] = u[r]);
    return i;
  }, hn;
}
var gn, g1;
function Ls() {
  if (g1)
    return gn;
  g1 = 1;
  var u = ho(), e = u("%Object.getOwnPropertyDescriptor%", !0);
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return gn = e, gn;
}
var Cn, C1;
function Ks() {
  if (C1)
    return Cn;
  C1 = 1;
  var u = ws(), e = Ns(), a = go(), i = a("Object.prototype.toString"), r = nr()(), n = Ls(), o = typeof globalThis > "u" ? y : globalThis, t = e(), s = a("Array.prototype.indexOf", !0) || function(d, m) {
    for (var k = 0; k < d.length; k += 1)
      if (d[k] === m)
        return k;
    return -1;
  }, l = a("String.prototype.slice"), E = {}, D = Object.getPrototypeOf;
  r && n && D && u(t, function(c) {
    var d = new o[c]();
    if (Symbol.toStringTag in d) {
      var m = D(d), k = n(m, Symbol.toStringTag);
      if (!k) {
        var g = D(m);
        k = n(g, Symbol.toStringTag);
      }
      E[c] = k.get;
    }
  });
  var x = function(d) {
    var m = !1;
    return u(E, function(k, g) {
      if (!m)
        try {
          m = k.call(d) === g;
        } catch {
        }
    }), m;
  };
  return Cn = function(d) {
    if (!d || typeof d != "object")
      return !1;
    if (!r || !(Symbol.toStringTag in d)) {
      var m = l(i(d), 8, -1);
      return s(t, m) > -1;
    }
    return n ? x(d) : !1;
  }, Cn;
}
var vn, v1;
function jc() {
  if (v1)
    return vn;
  v1 = 1;
  var u = ws(), e = Ns(), a = go(), i = Ls(), r = a("Object.prototype.toString"), n = nr()(), o = typeof globalThis > "u" ? y : globalThis, t = e(), s = a("String.prototype.slice"), l = {}, E = Object.getPrototypeOf;
  n && i && E && u(t, function(c) {
    if (typeof o[c] == "function") {
      var d = new o[c]();
      if (Symbol.toStringTag in d) {
        var m = E(d), k = i(m, Symbol.toStringTag);
        if (!k) {
          var g = E(m);
          k = i(g, Symbol.toStringTag);
        }
        l[c] = k.get;
      }
    }
  });
  var D = function(d) {
    var m = !1;
    return u(l, function(k, g) {
      if (!m)
        try {
          var P = k.call(d);
          P === g && (m = P);
        } catch {
        }
    }), m;
  }, x = Ks();
  return vn = function(d) {
    return x(d) ? !n || !(Symbol.toStringTag in d) ? s(r(d), 8, -1) : D(d) : !1;
  }, vn;
}
var b1;
function Pc() {
  return b1 || (b1 = 1, function(u) {
    var e = zc(), a = Sc(), i = jc(), r = Ks();
    function n(T) {
      return T.call.bind(T);
    }
    var o = typeof BigInt < "u", t = typeof Symbol < "u", s = n(Object.prototype.toString), l = n(Number.prototype.valueOf), E = n(String.prototype.valueOf), D = n(Boolean.prototype.valueOf);
    if (o)
      var x = n(BigInt.prototype.valueOf);
    if (t)
      var c = n(Symbol.prototype.valueOf);
    function d(T, j5) {
      if (typeof T != "object")
        return !1;
      try {
        return j5(T), !0;
      } catch {
        return !1;
      }
    }
    u.isArgumentsObject = e, u.isGeneratorFunction = a, u.isTypedArray = r;
    function m(T) {
      return typeof Promise < "u" && T instanceof Promise || T !== null && typeof T == "object" && typeof T.then == "function" && typeof T.catch == "function";
    }
    u.isPromise = m;
    function k(T) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(T) : r(T) || h(T);
    }
    u.isArrayBufferView = k;
    function g(T) {
      return i(T) === "Uint8Array";
    }
    u.isUint8Array = g;
    function P(T) {
      return i(T) === "Uint8ClampedArray";
    }
    u.isUint8ClampedArray = P;
    function A(T) {
      return i(T) === "Uint16Array";
    }
    u.isUint16Array = A;
    function v(T) {
      return i(T) === "Uint32Array";
    }
    u.isUint32Array = v;
    function N(T) {
      return i(T) === "Int8Array";
    }
    u.isInt8Array = N;
    function H(T) {
      return i(T) === "Int16Array";
    }
    u.isInt16Array = H;
    function $(T) {
      return i(T) === "Int32Array";
    }
    u.isInt32Array = $;
    function O(T) {
      return i(T) === "Float32Array";
    }
    u.isFloat32Array = O;
    function b(T) {
      return i(T) === "Float64Array";
    }
    u.isFloat64Array = b;
    function w(T) {
      return i(T) === "BigInt64Array";
    }
    u.isBigInt64Array = w;
    function G(T) {
      return i(T) === "BigUint64Array";
    }
    u.isBigUint64Array = G;
    function q(T) {
      return s(T) === "[object Map]";
    }
    q.working = typeof Map < "u" && q(/* @__PURE__ */ new Map());
    function ou(T) {
      return typeof Map > "u" ? !1 : q.working ? q(T) : T instanceof Map;
    }
    u.isMap = ou;
    function X(T) {
      return s(T) === "[object Set]";
    }
    X.working = typeof Set < "u" && X(/* @__PURE__ */ new Set());
    function iu(T) {
      return typeof Set > "u" ? !1 : X.working ? X(T) : T instanceof Set;
    }
    u.isSet = iu;
    function U(T) {
      return s(T) === "[object WeakMap]";
    }
    U.working = typeof WeakMap < "u" && U(/* @__PURE__ */ new WeakMap());
    function lu(T) {
      return typeof WeakMap > "u" ? !1 : U.working ? U(T) : T instanceof WeakMap;
    }
    u.isWeakMap = lu;
    function Eu(T) {
      return s(T) === "[object WeakSet]";
    }
    Eu.working = typeof WeakSet < "u" && Eu(/* @__PURE__ */ new WeakSet());
    function vu(T) {
      return Eu(T);
    }
    u.isWeakSet = vu;
    function Vu(T) {
      return s(T) === "[object ArrayBuffer]";
    }
    Vu.working = typeof ArrayBuffer < "u" && Vu(new ArrayBuffer());
    function t0(T) {
      return typeof ArrayBuffer > "u" ? !1 : Vu.working ? Vu(T) : T instanceof ArrayBuffer;
    }
    u.isArrayBuffer = t0;
    function F(T) {
      return s(T) === "[object DataView]";
    }
    F.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && F(new DataView(new ArrayBuffer(1), 0, 1));
    function h(T) {
      return typeof DataView > "u" ? !1 : F.working ? F(T) : T instanceof DataView;
    }
    u.isDataView = h;
    var C = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
    function j(T) {
      return s(T) === "[object SharedArrayBuffer]";
    }
    function K(T) {
      return typeof C > "u" ? !1 : (typeof j.working > "u" && (j.working = j(new C())), j.working ? j(T) : T instanceof C);
    }
    u.isSharedArrayBuffer = K;
    function V(T) {
      return s(T) === "[object AsyncFunction]";
    }
    u.isAsyncFunction = V;
    function R(T) {
      return s(T) === "[object Map Iterator]";
    }
    u.isMapIterator = R;
    function W(T) {
      return s(T) === "[object Set Iterator]";
    }
    u.isSetIterator = W;
    function eu(T) {
      return s(T) === "[object Generator]";
    }
    u.isGeneratorObject = eu;
    function yu(T) {
      return s(T) === "[object WebAssembly.Module]";
    }
    u.isWebAssemblyCompiledModule = yu;
    function bu(T) {
      return d(T, l);
    }
    u.isNumberObject = bu;
    function ii(T) {
      return d(T, E);
    }
    u.isStringObject = ii;
    function he(T) {
      return d(T, D);
    }
    u.isBooleanObject = he;
    function ri(T) {
      return o && d(T, x);
    }
    u.isBigIntObject = ri;
    function Ut(T) {
      return t && d(T, c);
    }
    u.isSymbolObject = Ut;
    function S5(T) {
      return bu(T) || ii(T) || he(T) || ri(T) || Ut(T);
    }
    u.isBoxedPrimitive = S5;
    function M5(T) {
      return typeof Uint8Array < "u" && (t0(T) || K(T));
    }
    u.isAnyArrayBuffer = M5, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(T) {
      Object.defineProperty(u, T, {
        enumerable: !1,
        value: function() {
          throw new Error(T + " is not supported in userland");
        }
      });
    });
  }(on)), on;
}
var bn, A1;
function Tc() {
  return A1 || (A1 = 1, bn = function(e) {
    return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
  }), bn;
}
var Ti = {}, B1 = {
  get exports() {
    return Ti;
  },
  set exports(u) {
    Ti = u;
  }
}, f1;
function wc() {
  return f1 || (f1 = 1, typeof Object.create == "function" ? B1.exports = function(e, a) {
    a && (e.super_ = a, e.prototype = Object.create(a.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : B1.exports = function(e, a) {
    if (a) {
      e.super_ = a;
      var i = function() {
      };
      i.prototype = a.prototype, e.prototype = new i(), e.prototype.constructor = e;
    }
  }), Ti;
}
var y1;
function Rs() {
  return y1 || (y1 = 1, function(u) {
    var e = Object.getOwnPropertyDescriptors || function(h) {
      for (var C = Object.keys(h), j = {}, K = 0; K < C.length; K++)
        j[C[K]] = Object.getOwnPropertyDescriptor(h, C[K]);
      return j;
    }, a = /%[sdj%]/g;
    u.format = function(F) {
      if (!N(F)) {
        for (var h = [], C = 0; C < arguments.length; C++)
          h.push(o(arguments[C]));
        return h.join(" ");
      }
      for (var C = 1, j = arguments, K = j.length, V = String(F).replace(a, function(W) {
        if (W === "%%")
          return "%";
        if (C >= K)
          return W;
        switch (W) {
          case "%s":
            return String(j[C++]);
          case "%d":
            return Number(j[C++]);
          case "%j":
            try {
              return JSON.stringify(j[C++]);
            } catch {
              return "[Circular]";
            }
          default:
            return W;
        }
      }), R = j[C]; C < K; R = j[++C])
        P(R) || !b(R) ? V += " " + R : V += " " + o(R);
      return V;
    }, u.deprecate = function(F, h) {
      if (typeof Ju < "u" && Ju.noDeprecation === !0)
        return F;
      if (typeof Ju > "u")
        return function() {
          return u.deprecate(F, h).apply(this, arguments);
        };
      var C = !1;
      function j() {
        if (!C) {
          if (Ju.throwDeprecation)
            throw new Error(h);
          Ju.traceDeprecation ? console.trace(h) : console.error(h), C = !0;
        }
        return F.apply(this, arguments);
      }
      return j;
    };
    var i = {}, r = /^$/;
    if (Ju.env.NODE_DEBUG) {
      var n = Ju.env.NODE_DEBUG;
      n = n.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), r = new RegExp("^" + n + "$", "i");
    }
    u.debuglog = function(F) {
      if (F = F.toUpperCase(), !i[F])
        if (r.test(F)) {
          var h = Ju.pid;
          i[F] = function() {
            var C = u.format.apply(u, arguments);
            console.error("%s %d: %s", F, h, C);
          };
        } else
          i[F] = function() {
          };
      return i[F];
    };
    function o(F, h) {
      var C = {
        seen: [],
        stylize: s
      };
      return arguments.length >= 3 && (C.depth = arguments[2]), arguments.length >= 4 && (C.colors = arguments[3]), g(h) ? C.showHidden = h : h && u._extend(C, h), $(C.showHidden) && (C.showHidden = !1), $(C.depth) && (C.depth = 2), $(C.colors) && (C.colors = !1), $(C.customInspect) && (C.customInspect = !0), C.colors && (C.stylize = t), E(C, F, C.depth);
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
    function t(F, h) {
      var C = o.styles[h];
      return C ? "\x1B[" + o.colors[C][0] + "m" + F + "\x1B[" + o.colors[C][1] + "m" : F;
    }
    function s(F, h) {
      return F;
    }
    function l(F) {
      var h = {};
      return F.forEach(function(C, j) {
        h[C] = !0;
      }), h;
    }
    function E(F, h, C) {
      if (F.customInspect && h && q(h.inspect) && // Filter out the util module, it's inspect function is special
      h.inspect !== u.inspect && // Also filter out any prototype objects using the circular check.
      !(h.constructor && h.constructor.prototype === h)) {
        var j = h.inspect(C, F);
        return N(j) || (j = E(F, j, C)), j;
      }
      var K = D(F, h);
      if (K)
        return K;
      var V = Object.keys(h), R = l(V);
      if (F.showHidden && (V = Object.getOwnPropertyNames(h)), G(h) && (V.indexOf("message") >= 0 || V.indexOf("description") >= 0))
        return x(h);
      if (V.length === 0) {
        if (q(h)) {
          var W = h.name ? ": " + h.name : "";
          return F.stylize("[Function" + W + "]", "special");
        }
        if (O(h))
          return F.stylize(RegExp.prototype.toString.call(h), "regexp");
        if (w(h))
          return F.stylize(Date.prototype.toString.call(h), "date");
        if (G(h))
          return x(h);
      }
      var eu = "", yu = !1, bu = ["{", "}"];
      if (k(h) && (yu = !0, bu = ["[", "]"]), q(h)) {
        var ii = h.name ? ": " + h.name : "";
        eu = " [Function" + ii + "]";
      }
      if (O(h) && (eu = " " + RegExp.prototype.toString.call(h)), w(h) && (eu = " " + Date.prototype.toUTCString.call(h)), G(h) && (eu = " " + x(h)), V.length === 0 && (!yu || h.length == 0))
        return bu[0] + eu + bu[1];
      if (C < 0)
        return O(h) ? F.stylize(RegExp.prototype.toString.call(h), "regexp") : F.stylize("[Object]", "special");
      F.seen.push(h);
      var he;
      return yu ? he = c(F, h, C, R, V) : he = V.map(function(ri) {
        return d(F, h, C, R, ri, yu);
      }), F.seen.pop(), m(he, eu, bu);
    }
    function D(F, h) {
      if ($(h))
        return F.stylize("undefined", "undefined");
      if (N(h)) {
        var C = "'" + JSON.stringify(h).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return F.stylize(C, "string");
      }
      if (v(h))
        return F.stylize("" + h, "number");
      if (g(h))
        return F.stylize("" + h, "boolean");
      if (P(h))
        return F.stylize("null", "null");
    }
    function x(F) {
      return "[" + Error.prototype.toString.call(F) + "]";
    }
    function c(F, h, C, j, K) {
      for (var V = [], R = 0, W = h.length; R < W; ++R)
        Eu(h, String(R)) ? V.push(d(
          F,
          h,
          C,
          j,
          String(R),
          !0
        )) : V.push("");
      return K.forEach(function(eu) {
        eu.match(/^\d+$/) || V.push(d(
          F,
          h,
          C,
          j,
          eu,
          !0
        ));
      }), V;
    }
    function d(F, h, C, j, K, V) {
      var R, W, eu;
      if (eu = Object.getOwnPropertyDescriptor(h, K) || { value: h[K] }, eu.get ? eu.set ? W = F.stylize("[Getter/Setter]", "special") : W = F.stylize("[Getter]", "special") : eu.set && (W = F.stylize("[Setter]", "special")), Eu(j, K) || (R = "[" + K + "]"), W || (F.seen.indexOf(eu.value) < 0 ? (P(C) ? W = E(F, eu.value, null) : W = E(F, eu.value, C - 1), W.indexOf(`
`) > -1 && (V ? W = W.split(`
`).map(function(yu) {
        return "  " + yu;
      }).join(`
`).slice(2) : W = `
` + W.split(`
`).map(function(yu) {
        return "   " + yu;
      }).join(`
`))) : W = F.stylize("[Circular]", "special")), $(R)) {
        if (V && K.match(/^\d+$/))
          return W;
        R = JSON.stringify("" + K), R.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (R = R.slice(1, -1), R = F.stylize(R, "name")) : (R = R.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), R = F.stylize(R, "string"));
      }
      return R + ": " + W;
    }
    function m(F, h, C) {
      var j = F.reduce(function(K, V) {
        return V.indexOf(`
`) >= 0, K + V.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return j > 60 ? C[0] + (h === "" ? "" : h + `
 `) + " " + F.join(`,
  `) + " " + C[1] : C[0] + h + " " + F.join(", ") + " " + C[1];
    }
    u.types = Pc();
    function k(F) {
      return Array.isArray(F);
    }
    u.isArray = k;
    function g(F) {
      return typeof F == "boolean";
    }
    u.isBoolean = g;
    function P(F) {
      return F === null;
    }
    u.isNull = P;
    function A(F) {
      return F == null;
    }
    u.isNullOrUndefined = A;
    function v(F) {
      return typeof F == "number";
    }
    u.isNumber = v;
    function N(F) {
      return typeof F == "string";
    }
    u.isString = N;
    function H(F) {
      return typeof F == "symbol";
    }
    u.isSymbol = H;
    function $(F) {
      return F === void 0;
    }
    u.isUndefined = $;
    function O(F) {
      return b(F) && X(F) === "[object RegExp]";
    }
    u.isRegExp = O, u.types.isRegExp = O;
    function b(F) {
      return typeof F == "object" && F !== null;
    }
    u.isObject = b;
    function w(F) {
      return b(F) && X(F) === "[object Date]";
    }
    u.isDate = w, u.types.isDate = w;
    function G(F) {
      return b(F) && (X(F) === "[object Error]" || F instanceof Error);
    }
    u.isError = G, u.types.isNativeError = G;
    function q(F) {
      return typeof F == "function";
    }
    u.isFunction = q;
    function ou(F) {
      return F === null || typeof F == "boolean" || typeof F == "number" || typeof F == "string" || typeof F == "symbol" || // ES6 symbol
      typeof F > "u";
    }
    u.isPrimitive = ou, u.isBuffer = Tc();
    function X(F) {
      return Object.prototype.toString.call(F);
    }
    function iu(F) {
      return F < 10 ? "0" + F.toString(10) : F.toString(10);
    }
    var U = [
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
    function lu() {
      var F = /* @__PURE__ */ new Date(), h = [
        iu(F.getHours()),
        iu(F.getMinutes()),
        iu(F.getSeconds())
      ].join(":");
      return [F.getDate(), U[F.getMonth()], h].join(" ");
    }
    u.log = function() {
      console.log("%s - %s", lu(), u.format.apply(u, arguments));
    }, u.inherits = wc(), u._extend = function(F, h) {
      if (!h || !b(h))
        return F;
      for (var C = Object.keys(h), j = C.length; j--; )
        F[C[j]] = h[C[j]];
      return F;
    };
    function Eu(F, h) {
      return Object.prototype.hasOwnProperty.call(F, h);
    }
    var vu = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
    u.promisify = function(h) {
      if (typeof h != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (vu && h[vu]) {
        var C = h[vu];
        if (typeof C != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(C, vu, {
          value: C,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), C;
      }
      function C() {
        for (var j, K, V = new Promise(function(eu, yu) {
          j = eu, K = yu;
        }), R = [], W = 0; W < arguments.length; W++)
          R.push(arguments[W]);
        R.push(function(eu, yu) {
          eu ? K(eu) : j(yu);
        });
        try {
          h.apply(this, R);
        } catch (eu) {
          K(eu);
        }
        return V;
      }
      return Object.setPrototypeOf(C, Object.getPrototypeOf(h)), vu && Object.defineProperty(C, vu, {
        value: C,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Object.defineProperties(
        C,
        e(h)
      );
    }, u.promisify.custom = vu;
    function Vu(F, h) {
      if (!F) {
        var C = new Error("Promise was rejected with a falsy value");
        C.reason = F, F = C;
      }
      return h(F);
    }
    function t0(F) {
      if (typeof F != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function h() {
        for (var C = [], j = 0; j < arguments.length; j++)
          C.push(arguments[j]);
        var K = C.pop();
        if (typeof K != "function")
          throw new TypeError("The last argument must be of type Function");
        var V = this, R = function() {
          return K.apply(V, arguments);
        };
        F.apply(this, C).then(
          function(W) {
            Ju.nextTick(R.bind(null, null, W));
          },
          function(W) {
            Ju.nextTick(Vu.bind(null, W, R));
          }
        );
      }
      return Object.setPrototypeOf(h, Object.getPrototypeOf(F)), Object.defineProperties(
        h,
        e(F)
      ), h;
    }
    u.callbackify = t0;
  }(nn)), nn;
}
ko.TextEncoder = typeof TextEncoder < "u" ? TextEncoder : Rs().TextEncoder;
ko.TextDecoder = typeof TextDecoder < "u" ? TextDecoder : Rs().TextDecoder;
Object.defineProperty(a0, "__esModule", { value: !0 });
a0.getArrayBuffer = Hs = a0.decodeBuffer = a0.encodeBuffer = void 0;
var _s = ko;
function Nc(u) {
  var e = new _s.TextEncoder(), a = e.encode(u);
  return Gs(a);
}
a0.encodeBuffer = Nc;
function Lc(u, e) {
  var a = new _s.TextDecoder(e);
  return a.decode(u);
}
var Hs = a0.decodeBuffer = Lc;
function Gs(u) {
  return u.buffer.slice(u.byteOffset, u.byteOffset + u.byteLength);
}
a0.getArrayBuffer = Gs;
var or = {};
Object.defineProperty(or, "__esModule", { value: !0 });
or.uuidv4 = void 0;
function Kc() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(u) {
    var e = Math.random() * 16 | 0, a = u == "x" ? e : e & 3 | 8;
    return a.toString(16);
  });
}
or.uuidv4 = Kc;
var An = y && y.__awaiter || function(u, e, a, i) {
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
}, Bn = y && y.__generator || function(u, e) {
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
Object.defineProperty(Q0, "__esModule", { value: !0 });
Q0.IsomorphicRequest = void 0;
var Rc = Sa, fn = ja, z1 = a0, _c = or, Hc = (
  /** @class */
  function() {
    function u(e, a) {
      a === void 0 && (a = {});
      var i = new ArrayBuffer(0);
      if (this._bodyUsed = !1, e instanceof u) {
        this.id = e.id, this.url = e.url, this.method = e.method, this.headers = e.headers, this.credentials = e.credentials, this._body = e._body || i;
        return;
      }
      this.id = _c.uuidv4(), this.url = e, this.method = a.method || "GET", this.headers = new Rc.Headers(a.headers), this.credentials = a.credentials || "same-origin", this._body = a.body || i;
    }
    return Object.defineProperty(u.prototype, "bodyUsed", {
      get: function() {
        return this._bodyUsed;
      },
      enumerable: !1,
      configurable: !0
    }), u.prototype.text = function() {
      return An(this, void 0, void 0, function() {
        return Bn(this, function(e) {
          return fn.invariant(!this.bodyUsed, 'Failed to execute "text" on "IsomorphicRequest": body buffer already read'), this._bodyUsed = !0, [2, z1.decodeBuffer(this._body)];
        });
      });
    }, u.prototype.json = function() {
      return An(this, void 0, void 0, function() {
        var e;
        return Bn(this, function(a) {
          return fn.invariant(!this.bodyUsed, 'Failed to execute "json" on "IsomorphicRequest": body buffer already read'), this._bodyUsed = !0, e = z1.decodeBuffer(this._body), [2, JSON.parse(e)];
        });
      });
    }, u.prototype.arrayBuffer = function() {
      return An(this, void 0, void 0, function() {
        return Bn(this, function(e) {
          return fn.invariant(!this.bodyUsed, 'Failed to execute "arrayBuffer" on "IsomorphicRequest": body buffer already read'), this._bodyUsed = !0, [2, this._body];
        });
      });
    }, u.prototype.clone = function() {
      return new u(this);
    }, u;
  }()
);
Q0.IsomorphicRequest = Hc;
var ke = {}, tr = {}, Gc = y && y.__awaiter || function(u, e, a, i) {
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
}, Vc = y && y.__generator || function(u, e) {
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
Object.defineProperty(tr, "__esModule", { value: !0 });
tr.createLazyCallback = void 0;
function Ic(u) {
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
    return Gc(e, void 0, void 0, function() {
      return Vc(this, function(t) {
        return i = setTimeout(function() {
          r([]);
        }, 0), [2, n];
      });
    });
  }, o;
}
tr.createLazyCallback = Ic;
var Oc = y && y.__extends || function() {
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
Object.defineProperty(ke, "__esModule", { value: !0 });
ke.InteractiveIsomorphicRequest = void 0;
var Jc = ja, $c = Q0, qc = tr, Uc = (
  /** @class */
  function(u) {
    Oc(e, u);
    function e(a) {
      var i = u.call(this, a) || this;
      return i.respondWith = qc.createLazyCallback({
        maxCalls: 1,
        maxCallsCallback: function() {
          Jc.invariant(!1, 'Failed to respond to "%s %s" request: the "request" event has already been responded to.', i.method, i.url.href);
        }
      }), i;
    }
    return e;
  }($c.IsomorphicRequest)
);
ke.InteractiveIsomorphicRequest = Uc;
var Pa = {};
Object.defineProperty(Pa, "__esModule", { value: !0 });
var Vs = Pa.getCleanUrl = void 0;
function Wc(u, e) {
  return e === void 0 && (e = !0), [e && u.origin, u.pathname].filter(Boolean).join("");
}
Vs = Pa.getCleanUrl = Wc;
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
  Object.defineProperty(u, "__esModule", { value: !0 }), u.decodeBuffer = u.encodeBuffer = u.getCleanUrl = void 0, a(me, u), a(qe, u), a(rr, u), a(Q0, u), a(ke, u);
  var i = Pa;
  Object.defineProperty(u, "getCleanUrl", { enumerable: !0, get: function() {
    return i.getCleanUrl;
  } });
  var r = a0;
  Object.defineProperty(u, "encodeBuffer", { enumerable: !0, get: function() {
    return r.encodeBuffer;
  } }), Object.defineProperty(u, "decodeBuffer", { enumerable: !0, get: function() {
    return r.decodeBuffer;
  } });
})(S0);
var wi = {}, sr = {}, Ta = {};
Object.defineProperty(Ta, "__esModule", { value: !0 });
Ta.MemoryLeakError = void 0;
class Zc extends Error {
  constructor(e, a, i) {
    super(`Possible EventEmitter memory leak detected. ${i} ${a.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`), this.emitter = e, this.type = a, this.count = i, this.name = "MaxListenersExceededWarning";
  }
}
Ta.MemoryLeakError = Zc;
Object.defineProperty(sr, "__esModule", { value: !0 });
sr.Emitter = void 0;
const Yc = Ta;
class lr {
  constructor() {
    this.events = /* @__PURE__ */ new Map(), this.maxListeners = lr.defaultMaxListeners, this.hasWarnedAboutPotentialMemoryLeak = !1;
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
      const r = new Yc.MemoryLeakError(this, e, this.listenerCount(e));
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
sr.Emitter = lr;
lr.defaultMaxListeners = 10;
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
  Object.defineProperty(u, "__esModule", { value: !0 }), a(sr, u), a(Ta, u);
})(wi);
var wa = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var Is = wa.parse = ed, Qc = wa.serialize = ad, Xc = decodeURIComponent, ud = encodeURIComponent, oi = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function ed(u, e) {
  if (typeof u != "string")
    throw new TypeError("argument str must be a string");
  for (var a = {}, i = e || {}, r = u.split(";"), n = i.decode || Xc, o = 0; o < r.length; o++) {
    var t = r[o], s = t.indexOf("=");
    if (!(s < 0)) {
      var l = t.substring(0, s).trim();
      if (a[l] == null) {
        var E = t.substring(s + 1, t.length).trim();
        E[0] === '"' && (E = E.slice(1, -1)), a[l] = id(E, n);
      }
    }
  }
  return a;
}
function ad(u, e, a) {
  var i = a || {}, r = i.encode || ud;
  if (typeof r != "function")
    throw new TypeError("option encode is invalid");
  if (!oi.test(u))
    throw new TypeError("argument name is invalid");
  var n = r(e);
  if (n && !oi.test(n))
    throw new TypeError("argument val is invalid");
  var o = u + "=" + n;
  if (i.maxAge != null) {
    var t = i.maxAge - 0;
    if (isNaN(t) || !isFinite(t))
      throw new TypeError("option maxAge is invalid");
    o += "; Max-Age=" + Math.floor(t);
  }
  if (i.domain) {
    if (!oi.test(i.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=" + i.domain;
  }
  if (i.path) {
    if (!oi.test(i.path))
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
function id(u, e) {
  try {
    return e(u);
  } catch {
    return u;
  }
}
var De = {}, Os = {}, Ne = {}, rd = {
  get exports() {
    return Ne;
  },
  set exports(u) {
    Ne = u;
  }
}, Se = {
  decodeValues: !0,
  map: !1,
  silent: !1
};
function $n(u) {
  return typeof u == "string" && !!u.trim();
}
function qn(u, e) {
  var a = u.split(";").filter($n), i = a.shift(), r = nd(i), n = r.name, o = r.value;
  e = e ? Object.assign({}, Se, e) : Se;
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
function nd(u) {
  var e = "", a = "", i = u.split("=");
  return i.length > 1 ? (e = i.shift(), a = i.join("=")) : a = u, { name: e, value: a };
}
function Js(u, e) {
  if (e = e ? Object.assign({}, Se, e) : Se, !u)
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
  if (Array.isArray(u) || (u = [u]), e = e ? Object.assign({}, Se, e) : Se, e.map) {
    var i = {};
    return u.filter($n).reduce(function(r, n) {
      var o = qn(n, e);
      return r[o.name] = o, r;
    }, i);
  } else
    return u.filter($n).map(function(r) {
      return qn(r, e);
    });
}
function od(u) {
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
rd.exports = Js;
Ne.parse = Js;
Ne.parseString = qn;
Ne.splitCookiesString = od;
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
  const a = Ne;
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
        var { maxAge: d } = c, m = e(c, ["maxAge"]);
        return Object.assign(Object.assign({}, m), { expires: d === void 0 ? m.expires : new Date(E + d * 1e3), maxAge: d });
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
})(Os);
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
  Object.defineProperty(u, "__esModule", { value: !0 }), a(Os, u);
})(De);
var td = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
function ia(u) {
  if (typeof u != "string" && (u = String(u)), td.test(u) || u.trim() === "")
    throw new TypeError("Invalid character in header field name");
  return u.toLowerCase();
}
function sd(u) {
  return typeof u != "string" && (u = String(u)), u;
}
var Xu = Symbol("normalizedHeaders"), ti = Symbol("rawHeaderNames"), S1, M1, X0 = class {
  constructor(u) {
    this[S1] = {}, this[M1] = /* @__PURE__ */ new Map(), ["Headers", "HeadersPolyfill"].includes(u == null ? void 0 : u.constructor.name) || u instanceof X0 ? u.forEach((a, i) => {
      this.append(i, a);
    }, this) : Array.isArray(u) ? u.forEach(([e, a]) => {
      this.append(e, Array.isArray(a) ? a.join(", ") : a);
    }) : u && Object.getOwnPropertyNames(u).forEach((e) => {
      const a = u[e];
      this.append(e, Array.isArray(a) ? a.join(", ") : a);
    });
  }
  [(S1 = Xu, M1 = ti, Symbol.iterator)]() {
    return this.entries();
  }
  *keys() {
    for (const u of Object.keys(this[Xu]))
      yield u;
  }
  *values() {
    for (const u of Object.values(this[Xu]))
      yield u;
  }
  *entries() {
    for (const u of Object.keys(this[Xu]))
      yield [u, this.get(u)];
  }
  get(u) {
    return this[Xu][ia(u)] || null;
  }
  set(u, e) {
    const a = ia(u);
    this[Xu][a] = sd(e), this[ti].set(a, u);
  }
  append(u, e) {
    const a = ia(u);
    let i = this.has(a) ? `${this.get(a)}, ${e}` : e;
    this.set(u, i);
  }
  delete(u) {
    if (!this.has(u))
      return;
    const e = ia(u);
    delete this[Xu][e], this[ti].delete(e);
  }
  all() {
    return this[Xu];
  }
  raw() {
    const u = {};
    for (const [e, a] of this.entries())
      u[this[ti].get(e)] = a;
    return u;
  }
  has(u) {
    return this[Xu].hasOwnProperty(ia(u));
  }
  forEach(u, e) {
    for (const a in this[Xu])
      this[Xu].hasOwnProperty(a) && u.call(e, this[Xu][a], a, this);
  }
};
function $s(u) {
  const e = [];
  return u.forEach((a, i) => {
    const r = a.includes(",") ? a.split(",").map((n) => n.trim()) : a;
    e.push([i, r]);
  }), e;
}
function ld(u) {
  return $s(u).map(([i, r]) => {
    const n = [].concat(r);
    return `${i}: ${n.join(", ")}`;
  }).join(`\r
`);
}
var Ed = ["user-agent"];
function Dd(u) {
  const e = {};
  return u.forEach((a, i) => {
    const r = !Ed.includes(i.toLowerCase()) && a.includes(",");
    e[i] = r ? a.split(",").map((n) => n.trim()) : a;
  }), e;
}
function qs(u) {
  return u.trim().split(/[\r\n]+/).reduce((a, i) => {
    if (i.trim() === "")
      return a;
    const r = i.split(": "), n = r.shift(), o = r.join(": ");
    return a.append(n, o), a;
  }, new X0());
}
function xd(u) {
  const e = new X0();
  return u.forEach(([a, i]) => {
    [].concat(i).forEach((n) => {
      e.append(a, n);
    });
  }), e;
}
function Co(u, e, a) {
  return Object.keys(u).reduce((i, r) => e(i, r, u[r]), a);
}
function vo(u) {
  return Co(
    u,
    (e, a, i) => ([].concat(i).filter(Boolean).forEach((n) => {
      e.append(a, n);
    }), e),
    new X0()
  );
}
function cd(u) {
  return u.map(([e, a]) => [e, [].concat(a).join(", ")]);
}
function dd(u) {
  return Co(
    u,
    (e, a, i) => (e[a] = [].concat(i).join(", "), e),
    {}
  );
}
const md = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Headers: X0,
  flattenHeadersList: cd,
  flattenHeadersObject: dd,
  headersToList: $s,
  headersToObject: Dd,
  headersToString: ld,
  listToHeaders: xd,
  objectToHeaders: vo,
  reduceHeadersObject: Co,
  stringToHeaders: qs
}, Symbol.toStringTag, { value: "Module" }));
var L0 = {}, bo = {};
Object.defineProperty(bo, "__esModule", { value: !0 });
bo.until = async (u) => {
  try {
    return [null, await u().catch((a) => {
      throw a;
    })];
  } catch (e) {
    return [e, null];
  }
};
Object.defineProperty(L0, "__esModule", { value: !0 });
var Fd = bo, kd = L0.until = Fd.until, Ao = function() {
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
    var t = 0, s, l, E, D, x, c, d, m, k, g, P, A, v = [];
    for (s = 0; s < r; s++)
      v.push(s + 1), v.push(e.charCodeAt(o + s));
    for (var N = v.length - 1; t < n - 3; )
      for (k = a.charCodeAt(o + (l = t)), g = a.charCodeAt(o + (E = t + 1)), P = a.charCodeAt(o + (D = t + 2)), A = a.charCodeAt(o + (x = t + 3)), c = t += 4, s = 0; s < N; s += 2)
        d = v[s], m = v[s + 1], l = u(d, l, E, k, m), E = u(l, E, D, g, m), D = u(E, D, x, P, m), c = u(D, x, c, A, m), v[s] = c, x = D, D = E, E = l, l = d;
    for (; t < n; )
      for (k = a.charCodeAt(o + (l = t)), c = ++t, s = 0; s < N; s += 2)
        d = v[s], v[s] = c = u(d, l, c, k, v[s + 1]), l = d;
    return c;
  };
}();
const pd = "16.6.0", hd = Object.freeze({
  major: 16,
  minor: 6,
  patch: 0,
  preReleaseTag: null
});
function Y(u, e) {
  if (!!!u)
    throw new Error(e);
}
function Uu(u) {
  return typeof (u == null ? void 0 : u.then) == "function";
}
function Wu(u) {
  return typeof u == "object" && u !== null;
}
function hu(u, e) {
  if (!!!u)
    throw new Error(
      e ?? "Unexpected invariant triggered."
    );
}
const gd = /\r\n|[\n\r]/g;
function Ni(u, e) {
  let a = 0, i = 1;
  for (const r of u.body.matchAll(gd)) {
    if (typeof r.index == "number" || hu(!1), r.index >= e)
      break;
    a = r.index + r[0].length, i += 1;
  }
  return {
    line: i,
    column: e + 1 - a
  };
}
function Us(u) {
  return Bo(
    u.source,
    Ni(u.source, u.start)
  );
}
function Bo(u, e) {
  const a = u.locationOffset.column - 1, i = "".padStart(a) + u.body, r = e.line - 1, n = u.locationOffset.line - 1, o = e.line + n, t = e.line === 1 ? a : 0, s = e.column + t, l = `${u.name}:${o}:${s}
`, E = i.split(/\r\n|[\n\r]/g), D = E[r];
  if (D.length > 120) {
    const x = Math.floor(s / 80), c = s % 80, d = [];
    for (let m = 0; m < D.length; m += 80)
      d.push(D.slice(m, m + 80));
    return l + j1([
      [`${o} |`, d[0]],
      ...d.slice(1, x + 1).map((m) => ["|", m]),
      ["|", "^".padStart(c)],
      ["|", d[x + 1]]
    ]);
  }
  return l + j1([
    // Lines specified like this: ["prefix", "string"],
    [`${o - 1} |`, E[r - 1]],
    [`${o} |`, D],
    ["|", "^".padStart(s)],
    [`${o + 1} |`, E[r + 1]]
  ]);
}
function j1(u) {
  const e = u.filter(([i, r]) => r !== void 0), a = Math.max(...e.map(([i]) => i.length));
  return e.map(([i, r]) => i.padStart(a) + (r ? " " + r : "")).join(`
`);
}
function Cd(u) {
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
    const { nodes: o, source: t, positions: s, path: l, originalError: E, extensions: D } = Cd(a);
    super(e), this.name = "GraphQLError", this.path = l ?? void 0, this.originalError = E ?? void 0, this.nodes = P1(
      Array.isArray(o) ? o : o ? [o] : void 0
    );
    const x = P1(
      (i = this.nodes) === null || i === void 0 ? void 0 : i.map((d) => d.loc).filter((d) => d != null)
    );
    this.source = t ?? (x == null || (r = x[0]) === null || r === void 0 ? void 0 : r.source), this.positions = s ?? (x == null ? void 0 : x.map((d) => d.start)), this.locations = s && t ? s.map((d) => Ni(t, d)) : x == null ? void 0 : x.map((d) => Ni(d.source, d.start));
    const c = Wu(
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

` + Us(a.loc));
    else if (this.source && this.locations)
      for (const a of this.locations)
        e += `

` + Bo(this.source, a);
    return e;
  }
  toJSON() {
    const e = {
      message: this.message
    };
    return this.locations != null && (e.locations = this.locations), this.path != null && (e.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e;
  }
}
function P1(u) {
  return u === void 0 || u.length === 0 ? void 0 : u;
}
function vd(u) {
  return u.toString();
}
function bd(u) {
  return u.toJSON();
}
function Au(u, e, a) {
  return new B(`Syntax Error: ${a}`, {
    source: u,
    positions: [e]
  });
}
class Ws {
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
class fo {
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
const Zs = {
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
}, Ad = new Set(Object.keys(Zs));
function Un(u) {
  const e = u == null ? void 0 : u.kind;
  return typeof e == "string" && Ad.has(e);
}
var Bu;
(function(u) {
  u.QUERY = "query", u.MUTATION = "mutation", u.SUBSCRIPTION = "subscription";
})(Bu || (Bu = {}));
var _;
(function(u) {
  u.QUERY = "QUERY", u.MUTATION = "MUTATION", u.SUBSCRIPTION = "SUBSCRIPTION", u.FIELD = "FIELD", u.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", u.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", u.INLINE_FRAGMENT = "INLINE_FRAGMENT", u.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", u.SCHEMA = "SCHEMA", u.SCALAR = "SCALAR", u.OBJECT = "OBJECT", u.FIELD_DEFINITION = "FIELD_DEFINITION", u.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", u.INTERFACE = "INTERFACE", u.UNION = "UNION", u.ENUM = "ENUM", u.ENUM_VALUE = "ENUM_VALUE", u.INPUT_OBJECT = "INPUT_OBJECT", u.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(_ || (_ = {}));
var p;
(function(u) {
  u.NAME = "Name", u.DOCUMENT = "Document", u.OPERATION_DEFINITION = "OperationDefinition", u.VARIABLE_DEFINITION = "VariableDefinition", u.SELECTION_SET = "SelectionSet", u.FIELD = "Field", u.ARGUMENT = "Argument", u.FRAGMENT_SPREAD = "FragmentSpread", u.INLINE_FRAGMENT = "InlineFragment", u.FRAGMENT_DEFINITION = "FragmentDefinition", u.VARIABLE = "Variable", u.INT = "IntValue", u.FLOAT = "FloatValue", u.STRING = "StringValue", u.BOOLEAN = "BooleanValue", u.NULL = "NullValue", u.ENUM = "EnumValue", u.LIST = "ListValue", u.OBJECT = "ObjectValue", u.OBJECT_FIELD = "ObjectField", u.DIRECTIVE = "Directive", u.NAMED_TYPE = "NamedType", u.LIST_TYPE = "ListType", u.NON_NULL_TYPE = "NonNullType", u.SCHEMA_DEFINITION = "SchemaDefinition", u.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", u.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", u.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", u.FIELD_DEFINITION = "FieldDefinition", u.INPUT_VALUE_DEFINITION = "InputValueDefinition", u.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", u.UNION_TYPE_DEFINITION = "UnionTypeDefinition", u.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", u.ENUM_VALUE_DEFINITION = "EnumValueDefinition", u.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", u.DIRECTIVE_DEFINITION = "DirectiveDefinition", u.SCHEMA_EXTENSION = "SchemaExtension", u.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", u.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", u.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", u.UNION_TYPE_EXTENSION = "UnionTypeExtension", u.ENUM_TYPE_EXTENSION = "EnumTypeExtension", u.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(p || (p = {}));
function Wn(u) {
  return u === 9 || u === 32;
}
function ha(u) {
  return u >= 48 && u <= 57;
}
function Ys(u) {
  return u >= 97 && u <= 122 || // A-Z
  u >= 65 && u <= 90;
}
function yo(u) {
  return Ys(u) || u === 95;
}
function Qs(u) {
  return Ys(u) || ha(u) || u === 95;
}
function Bd(u) {
  var e;
  let a = Number.MAX_SAFE_INTEGER, i = null, r = -1;
  for (let o = 0; o < u.length; ++o) {
    var n;
    const t = u[o], s = fd(t);
    s !== t.length && (i = (n = i) !== null && n !== void 0 ? n : o, r = o, o !== 0 && s < a && (a = s));
  }
  return u.map((o, t) => t === 0 ? o : o.slice(a)).slice(
    (e = i) !== null && e !== void 0 ? e : 0,
    r + 1
  );
}
function fd(u) {
  let e = 0;
  for (; e < u.length && Wn(u.charCodeAt(e)); )
    ++e;
  return e;
}
function yd(u) {
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
function Xs(u, e) {
  const a = u.replace(/"""/g, '\\"""'), i = a.split(/\r\n|[\n\r]/g), r = i.length === 1, n = i.length > 1 && i.slice(1).every((c) => c.length === 0 || Wn(c.charCodeAt(0))), o = a.endsWith('\\"""'), t = u.endsWith('"') && !o, s = u.endsWith("\\"), l = t || s, E = !(e != null && e.minimize) && // add leading and trailing new lines only if it improves readability
  (!r || u.length > 70 || l || n || o);
  let D = "";
  const x = r && Wn(u.charCodeAt(0));
  return (E && !x || n) && (D += `
`), D += a, (E || l) && (D += `
`), '"""' + D + '"""';
}
var z;
(function(u) {
  u.SOF = "<SOF>", u.EOF = "<EOF>", u.BANG = "!", u.DOLLAR = "$", u.AMP = "&", u.PAREN_L = "(", u.PAREN_R = ")", u.SPREAD = "...", u.COLON = ":", u.EQUALS = "=", u.AT = "@", u.BRACKET_L = "[", u.BRACKET_R = "]", u.BRACE_L = "{", u.PIPE = "|", u.BRACE_R = "}", u.NAME = "Name", u.INT = "Int", u.FLOAT = "Float", u.STRING = "String", u.BLOCK_STRING = "BlockString", u.COMMENT = "Comment";
})(z || (z = {}));
class zo {
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
    const a = new fo(z.SOF, 0, 0, 0, 0);
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
    if (e.kind !== z.EOF)
      do
        if (e.next)
          e = e.next;
        else {
          const a = zd(this, e.end);
          e.next = a, a.prev = e, e = a;
        }
      while (e.kind === z.COMMENT);
    return e;
  }
}
function ul(u) {
  return u === z.BANG || u === z.DOLLAR || u === z.AMP || u === z.PAREN_L || u === z.PAREN_R || u === z.SPREAD || u === z.COLON || u === z.EQUALS || u === z.AT || u === z.BRACKET_L || u === z.BRACKET_R || u === z.BRACE_L || u === z.PIPE || u === z.BRACE_R;
}
function Ue(u) {
  return u >= 0 && u <= 55295 || u >= 57344 && u <= 1114111;
}
function Er(u, e) {
  return el(u.charCodeAt(e)) && al(u.charCodeAt(e + 1));
}
function el(u) {
  return u >= 55296 && u <= 56319;
}
function al(u) {
  return u >= 56320 && u <= 57343;
}
function xe(u, e) {
  const a = u.source.body.codePointAt(e);
  if (a === void 0)
    return z.EOF;
  if (a >= 32 && a <= 126) {
    const i = String.fromCodePoint(a);
    return i === '"' ? `'"'` : `"${i}"`;
  }
  return "U+" + a.toString(16).toUpperCase().padStart(4, "0");
}
function gu(u, e, a, i, r) {
  const n = u.line, o = 1 + a - u.lineStart;
  return new fo(e, a, i, n, o, r);
}
function zd(u, e) {
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
        return Sd(u, r);
      case 33:
        return gu(u, z.BANG, r, r + 1);
      case 36:
        return gu(u, z.DOLLAR, r, r + 1);
      case 38:
        return gu(u, z.AMP, r, r + 1);
      case 40:
        return gu(u, z.PAREN_L, r, r + 1);
      case 41:
        return gu(u, z.PAREN_R, r, r + 1);
      case 46:
        if (a.charCodeAt(r + 1) === 46 && a.charCodeAt(r + 2) === 46)
          return gu(u, z.SPREAD, r, r + 3);
        break;
      case 58:
        return gu(u, z.COLON, r, r + 1);
      case 61:
        return gu(u, z.EQUALS, r, r + 1);
      case 64:
        return gu(u, z.AT, r, r + 1);
      case 91:
        return gu(u, z.BRACKET_L, r, r + 1);
      case 93:
        return gu(u, z.BRACKET_R, r, r + 1);
      case 123:
        return gu(u, z.BRACE_L, r, r + 1);
      case 124:
        return gu(u, z.PIPE, r, r + 1);
      case 125:
        return gu(u, z.BRACE_R, r, r + 1);
      case 34:
        return a.charCodeAt(r + 1) === 34 && a.charCodeAt(r + 2) === 34 ? Nd(u, r) : jd(u, r);
    }
    if (ha(n) || n === 45)
      return Md(u, r, n);
    if (yo(n))
      return Ld(u, r);
    throw Au(
      u.source,
      r,
      n === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : Ue(n) || Er(a, r) ? `Unexpected character: ${xe(u, r)}.` : `Invalid character: ${xe(u, r)}.`
    );
  }
  return gu(u, z.EOF, i, i);
}
function Sd(u, e) {
  const a = u.source.body, i = a.length;
  let r = e + 1;
  for (; r < i; ) {
    const n = a.charCodeAt(r);
    if (n === 10 || n === 13)
      break;
    if (Ue(n))
      ++r;
    else if (Er(a, r))
      r += 2;
    else
      break;
  }
  return gu(
    u,
    z.COMMENT,
    e,
    r,
    a.slice(e + 1, r)
  );
}
function Md(u, e, a) {
  const i = u.source.body;
  let r = e, n = a, o = !1;
  if (n === 45 && (n = i.charCodeAt(++r)), n === 48) {
    if (n = i.charCodeAt(++r), ha(n))
      throw Au(
        u.source,
        r,
        `Invalid number, unexpected digit after 0: ${xe(
          u,
          r
        )}.`
      );
  } else
    r = yn(u, r, n), n = i.charCodeAt(r);
  if (n === 46 && (o = !0, n = i.charCodeAt(++r), r = yn(u, r, n), n = i.charCodeAt(r)), (n === 69 || n === 101) && (o = !0, n = i.charCodeAt(++r), (n === 43 || n === 45) && (n = i.charCodeAt(++r)), r = yn(u, r, n), n = i.charCodeAt(r)), n === 46 || yo(n))
    throw Au(
      u.source,
      r,
      `Invalid number, expected digit but got: ${xe(
        u,
        r
      )}.`
    );
  return gu(
    u,
    o ? z.FLOAT : z.INT,
    e,
    r,
    i.slice(e, r)
  );
}
function yn(u, e, a) {
  if (!ha(a))
    throw Au(
      u.source,
      e,
      `Invalid number, expected digit but got: ${xe(
        u,
        e
      )}.`
    );
  const i = u.source.body;
  let r = e + 1;
  for (; ha(i.charCodeAt(r)); )
    ++r;
  return r;
}
function jd(u, e) {
  const a = u.source.body, i = a.length;
  let r = e + 1, n = r, o = "";
  for (; r < i; ) {
    const t = a.charCodeAt(r);
    if (t === 34)
      return o += a.slice(n, r), gu(u, z.STRING, e, r + 1, o);
    if (t === 92) {
      o += a.slice(n, r);
      const s = a.charCodeAt(r + 1) === 117 ? a.charCodeAt(r + 2) === 123 ? Pd(u, r) : Td(u, r) : wd(u, r);
      o += s.value, r += s.size, n = r;
      continue;
    }
    if (t === 10 || t === 13)
      break;
    if (Ue(t))
      ++r;
    else if (Er(a, r))
      r += 2;
    else
      throw Au(
        u.source,
        r,
        `Invalid character within String: ${xe(
          u,
          r
        )}.`
      );
  }
  throw Au(u.source, r, "Unterminated string.");
}
function Pd(u, e) {
  const a = u.source.body;
  let i = 0, r = 3;
  for (; r < 12; ) {
    const n = a.charCodeAt(e + r++);
    if (n === 125) {
      if (r < 5 || !Ue(i))
        break;
      return {
        value: String.fromCodePoint(i),
        size: r
      };
    }
    if (i = i << 4 | sa(n), i < 0)
      break;
  }
  throw Au(
    u.source,
    e,
    `Invalid Unicode escape sequence: "${a.slice(
      e,
      e + r
    )}".`
  );
}
function Td(u, e) {
  const a = u.source.body, i = T1(a, e + 2);
  if (Ue(i))
    return {
      value: String.fromCodePoint(i),
      size: 6
    };
  if (el(i) && a.charCodeAt(e + 6) === 92 && a.charCodeAt(e + 7) === 117) {
    const r = T1(a, e + 8);
    if (al(r))
      return {
        value: String.fromCodePoint(i, r),
        size: 12
      };
  }
  throw Au(
    u.source,
    e,
    `Invalid Unicode escape sequence: "${a.slice(e, e + 6)}".`
  );
}
function T1(u, e) {
  return sa(u.charCodeAt(e)) << 12 | sa(u.charCodeAt(e + 1)) << 8 | sa(u.charCodeAt(e + 2)) << 4 | sa(u.charCodeAt(e + 3));
}
function sa(u) {
  return u >= 48 && u <= 57 ? u - 48 : u >= 65 && u <= 70 ? u - 55 : u >= 97 && u <= 102 ? u - 87 : -1;
}
function wd(u, e) {
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
  throw Au(
    u.source,
    e,
    `Invalid character escape sequence: "${a.slice(
      e,
      e + 2
    )}".`
  );
}
function Nd(u, e) {
  const a = u.source.body, i = a.length;
  let r = u.lineStart, n = e + 3, o = n, t = "";
  const s = [];
  for (; n < i; ) {
    const l = a.charCodeAt(n);
    if (l === 34 && a.charCodeAt(n + 1) === 34 && a.charCodeAt(n + 2) === 34) {
      t += a.slice(o, n), s.push(t);
      const E = gu(
        u,
        z.BLOCK_STRING,
        e,
        n + 3,
        // Return a string of the lines joined with U+000A.
        Bd(s).join(`
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
    if (Ue(l))
      ++n;
    else if (Er(a, n))
      n += 2;
    else
      throw Au(
        u.source,
        n,
        `Invalid character within String: ${xe(
          u,
          n
        )}.`
      );
  }
  throw Au(u.source, n, "Unterminated string.");
}
function Ld(u, e) {
  const a = u.source.body, i = a.length;
  let r = e + 1;
  for (; r < i; ) {
    const n = a.charCodeAt(r);
    if (Qs(n))
      ++r;
    else
      break;
  }
  return gu(
    u,
    z.NAME,
    e,
    r,
    a.slice(e, r)
  );
}
const Kd = 10, il = 2;
function S(u) {
  return Dr(u, []);
}
function Dr(u, e) {
  switch (typeof u) {
    case "string":
      return JSON.stringify(u);
    case "function":
      return u.name ? `[function ${u.name}]` : "[function]";
    case "object":
      return Rd(u, e);
    default:
      return String(u);
  }
}
function Rd(u, e) {
  if (u === null)
    return "null";
  if (e.includes(u))
    return "[Circular]";
  const a = [...e, u];
  if (_d(u)) {
    const i = u.toJSON();
    if (i !== u)
      return typeof i == "string" ? i : Dr(i, a);
  } else if (Array.isArray(u))
    return Gd(u, a);
  return Hd(u, a);
}
function _d(u) {
  return typeof u.toJSON == "function";
}
function Hd(u, e) {
  const a = Object.entries(u);
  return a.length === 0 ? "{}" : e.length > il ? "[" + Vd(u) + "]" : "{ " + a.map(
    ([r, n]) => r + ": " + Dr(n, e)
  ).join(", ") + " }";
}
function Gd(u, e) {
  if (u.length === 0)
    return "[]";
  if (e.length > il)
    return "[Array]";
  const a = Math.min(Kd, u.length), i = u.length - a, r = [];
  for (let n = 0; n < a; ++n)
    r.push(Dr(u[n], e));
  return i === 1 ? r.push("... 1 more item") : i > 1 && r.push(`... ${i} more items`), "[" + r.join(", ") + "]";
}
function Vd(u) {
  const e = Object.prototype.toString.call(u).replace(/^\[object /, "").replace(/]$/, "");
  if (e === "Object" && typeof u.constructor == "function") {
    const a = u.constructor.name;
    if (typeof a == "string" && a !== "")
      return a;
  }
  return e;
}
const x0 = (
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
        const o = S(e);
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
class xr {
  constructor(e, a = "GraphQL request", i = {
    line: 1,
    column: 1
  }) {
    typeof e == "string" || Y(!1, `Body must be a string. Received: ${S(e)}.`), this.body = e, this.name = a, this.locationOffset = i, this.locationOffset.line > 0 || Y(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || Y(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function rl(u) {
  return x0(u, xr);
}
function Na(u, e) {
  return new cr(u, e).parseDocument();
}
function nl(u, e) {
  const a = new cr(u, e);
  a.expectToken(z.SOF);
  const i = a.parseValueLiteral(!1);
  return a.expectToken(z.EOF), i;
}
function Id(u, e) {
  const a = new cr(u, e);
  a.expectToken(z.SOF);
  const i = a.parseConstValueLiteral();
  return a.expectToken(z.EOF), i;
}
function Od(u, e) {
  const a = new cr(u, e);
  a.expectToken(z.SOF);
  const i = a.parseTypeReference();
  return a.expectToken(z.EOF), i;
}
class cr {
  constructor(e, a = {}) {
    const i = rl(e) ? e : new xr(e);
    this._lexer = new zo(i), this._options = a, this._tokenCounter = 0;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const e = this.expectToken(z.NAME);
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
        z.SOF,
        this.parseDefinition,
        z.EOF
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
    if (this.peek(z.BRACE_L))
      return this.parseOperationDefinition();
    const e = this.peekDescription(), a = e ? this._lexer.lookahead() : this._lexer.token;
    if (a.kind === z.NAME) {
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
        throw Au(
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
    if (this.peek(z.BRACE_L))
      return this.node(e, {
        kind: p.OPERATION_DEFINITION,
        operation: Bu.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    const a = this.parseOperationType();
    let i;
    return this.peek(z.NAME) && (i = this.parseName()), this.node(e, {
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
    const e = this.expectToken(z.NAME);
    switch (e.value) {
      case "query":
        return Bu.QUERY;
      case "mutation":
        return Bu.MUTATION;
      case "subscription":
        return Bu.SUBSCRIPTION;
    }
    throw this.unexpected(e);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      z.PAREN_L,
      this.parseVariableDefinition,
      z.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: p.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(z.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(z.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const e = this._lexer.token;
    return this.expectToken(z.DOLLAR), this.node(e, {
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
        z.BRACE_L,
        this.parseSelection,
        z.BRACE_R
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
    return this.peek(z.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const e = this._lexer.token, a = this.parseName();
    let i, r;
    return this.expectOptionalToken(z.COLON) ? (i = a, r = this.parseName()) : r = a, this.node(e, {
      kind: p.FIELD,
      alias: i,
      name: r,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek(z.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(e) {
    const a = e ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(z.PAREN_L, a, z.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(e = !1) {
    const a = this._lexer.token, i = this.parseName();
    return this.expectToken(z.COLON), this.node(a, {
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
    this.expectToken(z.SPREAD);
    const a = this.expectOptionalKeyword("on");
    return !a && this.peek(z.NAME) ? this.node(e, {
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
      case z.BRACKET_L:
        return this.parseList(e);
      case z.BRACE_L:
        return this.parseObject(e);
      case z.INT:
        return this.advanceLexer(), this.node(a, {
          kind: p.INT,
          value: a.value
        });
      case z.FLOAT:
        return this.advanceLexer(), this.node(a, {
          kind: p.FLOAT,
          value: a.value
        });
      case z.STRING:
      case z.BLOCK_STRING:
        return this.parseStringLiteral();
      case z.NAME:
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
      case z.DOLLAR:
        if (e)
          if (this.expectToken(z.DOLLAR), this._lexer.token.kind === z.NAME) {
            const i = this._lexer.token.value;
            throw Au(
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
      block: e.kind === z.BLOCK_STRING
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
      values: this.any(z.BRACKET_L, a, z.BRACKET_R)
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
      fields: this.any(z.BRACE_L, a, z.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(e) {
    const a = this._lexer.token, i = this.parseName();
    return this.expectToken(z.COLON), this.node(a, {
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
    for (; this.peek(z.AT); )
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
    return this.expectToken(z.AT), this.node(a, {
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
    if (this.expectOptionalToken(z.BRACKET_L)) {
      const i = this.parseTypeReference();
      this.expectToken(z.BRACKET_R), a = this.node(e, {
        kind: p.LIST_TYPE,
        type: i
      });
    } else
      a = this.parseNamedType();
    return this.expectOptionalToken(z.BANG) ? this.node(e, {
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
    return this.peek(z.STRING) || this.peek(z.BLOCK_STRING);
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
      z.BRACE_L,
      this.parseOperationTypeDefinition,
      z.BRACE_R
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
    this.expectToken(z.COLON);
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
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(z.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      z.BRACE_L,
      this.parseFieldDefinition,
      z.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const e = this._lexer.token, a = this.parseDescription(), i = this.parseName(), r = this.parseArgumentDefs();
    this.expectToken(z.COLON);
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
      z.PAREN_L,
      this.parseInputValueDef,
      z.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const e = this._lexer.token, a = this.parseDescription(), i = this.parseName();
    this.expectToken(z.COLON);
    const r = this.parseTypeReference();
    let n;
    this.expectOptionalToken(z.EQUALS) && (n = this.parseConstValueLiteral());
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
    return this.expectOptionalToken(z.EQUALS) ? this.delimitedMany(z.PIPE, this.parseNamedType) : [];
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
      z.BRACE_L,
      this.parseEnumValueDefinition,
      z.BRACE_R
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
      throw Au(
        this._lexer.source,
        this._lexer.token.start,
        `${si(
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
      z.BRACE_L,
      this.parseInputValueDef,
      z.BRACE_R
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
    if (e.kind === z.NAME)
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
      z.BRACE_L,
      this.parseOperationTypeDefinition,
      z.BRACE_R
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
    this.expectKeyword("directive"), this.expectToken(z.AT);
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
    return this.delimitedMany(z.PIPE, this.parseDirectiveLocation);
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
    if (Object.prototype.hasOwnProperty.call(_, a.value))
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
    return this._options.noLocation !== !0 && (a.loc = new Ws(
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
    throw Au(
      this._lexer.source,
      a.start,
      `Expected ${ol(e)}, found ${si(a)}.`
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
    if (a.kind === z.NAME && a.value === e)
      this.advanceLexer();
    else
      throw Au(
        this._lexer.source,
        a.start,
        `Expected "${e}", found ${si(a)}.`
      );
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(e) {
    const a = this._lexer.token;
    return a.kind === z.NAME && a.value === e ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(e) {
    const a = e ?? this._lexer.token;
    return Au(
      this._lexer.source,
      a.start,
      `Unexpected ${si(a)}.`
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
    if (e !== void 0 && a.kind !== z.EOF && (++this._tokenCounter, this._tokenCounter > e))
      throw Au(
        this._lexer.source,
        a.start,
        `Document contains more that ${e} tokens. Parsing aborted.`
      );
  }
}
function si(u) {
  const e = u.value;
  return ol(u.kind) + (e != null ? ` "${e}"` : "");
}
function ol(u) {
  return ul(u) ? `"${u}"` : u;
}
const Jd = 5;
function j0(u, e) {
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
  const o = n.slice(0, Jd), t = o.pop();
  return r + o.join(", ") + ", or " + t + "?";
}
function w1(u) {
  return u;
}
function P0(u, e) {
  const a = /* @__PURE__ */ Object.create(null);
  for (const i of u)
    a[e(i)] = i;
  return a;
}
function $0(u, e, a) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const r of u)
    i[e(r)] = a(r);
  return i;
}
function f0(u, e) {
  const a = /* @__PURE__ */ Object.create(null);
  for (const i of Object.keys(u))
    a[i] = e(u[i], i);
  return a;
}
function La(u, e) {
  let a = 0, i = 0;
  for (; a < u.length && i < e.length; ) {
    let r = u.charCodeAt(a), n = e.charCodeAt(i);
    if (li(r) && li(n)) {
      let o = 0;
      do
        ++a, o = o * 10 + r - Zn, r = u.charCodeAt(a);
      while (li(r) && o > 0);
      let t = 0;
      do
        ++i, t = t * 10 + n - Zn, n = e.charCodeAt(i);
      while (li(n) && t > 0);
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
const Zn = 48, $d = 57;
function li(u) {
  return !isNaN(u) && Zn <= u && u <= $d;
}
function ue(u, e) {
  const a = /* @__PURE__ */ Object.create(null), i = new qd(u), r = Math.floor(u.length * 0.4) + 1;
  for (const n of e) {
    const o = i.measure(n, r);
    o !== void 0 && (a[n] = o);
  }
  return Object.keys(a).sort((n, o) => {
    const t = a[n] - a[o];
    return t !== 0 ? t : La(n, o);
  });
}
class qd {
  constructor(e) {
    this._input = e, this._inputLowerCase = e.toLowerCase(), this._inputArray = N1(this._inputLowerCase), this._rows = [
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
    let r = N1(i), n = this._inputArray;
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
        const m = r[E - 1] === n[d - 1] ? 0 : 1;
        let k = Math.min(
          D[d] + 1,
          // delete
          x[d - 1] + 1,
          // insert
          D[d - 1] + m
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
function N1(u) {
  const e = u.length, a = new Array(e);
  for (let i = 0; i < e; ++i)
    a[i] = u.charCodeAt(i);
  return a;
}
function o0(u) {
  if (u == null)
    return /* @__PURE__ */ Object.create(null);
  if (Object.getPrototypeOf(u) === null)
    return u;
  const e = /* @__PURE__ */ Object.create(null);
  for (const [a, i] of Object.entries(u))
    e[a] = i;
  return e;
}
function Ud(u) {
  return `"${u.replace(Wd, Zd)}"`;
}
const Wd = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Zd(u) {
  return Yd[u.charCodeAt(0)];
}
const Yd = [
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
], Me = Object.freeze({});
function We(u, e, a = Zs) {
  const i = /* @__PURE__ */ new Map();
  for (const g of Object.values(p))
    i.set(g, Le(e, g));
  let r, n = Array.isArray(u), o = [u], t = -1, s = [], l = u, E, D;
  const x = [], c = [];
  do {
    t++;
    const g = t === o.length, P = g && s.length !== 0;
    if (g) {
      if (E = c.length === 0 ? void 0 : x[x.length - 1], l = D, D = c.pop(), P)
        if (n) {
          l = l.slice();
          let v = 0;
          for (const [N, H] of s) {
            const $ = N - v;
            H === null ? (l.splice($, 1), v++) : l[$] = H;
          }
        } else {
          l = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(l)
          );
          for (const [v, N] of s)
            l[v] = N;
        }
      t = r.index, o = r.keys, s = r.edits, n = r.inArray, r = r.prev;
    } else if (D) {
      if (E = n ? t : o[t], l = D[E], l == null)
        continue;
      x.push(E);
    }
    let A;
    if (!Array.isArray(l)) {
      var d, m;
      Un(l) || Y(!1, `Invalid AST Node: ${S(l)}.`);
      const v = g ? (d = i.get(l.kind)) === null || d === void 0 ? void 0 : d.leave : (m = i.get(l.kind)) === null || m === void 0 ? void 0 : m.enter;
      if (A = v == null ? void 0 : v.call(e, l, E, D, x, c), A === Me)
        break;
      if (A === !1) {
        if (!g) {
          x.pop();
          continue;
        }
      } else if (A !== void 0 && (s.push([E, A]), !g))
        if (Un(A))
          l = A;
        else {
          x.pop();
          continue;
        }
    }
    if (A === void 0 && P && s.push([E, l]), g)
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
function So(u) {
  const e = new Array(u.length).fill(null), a = /* @__PURE__ */ Object.create(null);
  for (const i of Object.values(p)) {
    let r = !1;
    const n = new Array(u.length).fill(void 0), o = new Array(u.length).fill(void 0);
    for (let s = 0; s < u.length; ++s) {
      const { enter: l, leave: E } = Le(u[s], i);
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
            else if (x === Me)
              e[D] = Me;
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
            if (x === Me)
              e[D] = Me;
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
function Le(u, e) {
  const a = u[e];
  return typeof a == "object" ? a : typeof a == "function" ? {
    enter: a,
    leave: void 0
  } : {
    enter: u.enter,
    leave: u.leave
  };
}
function Qd(u, e, a) {
  const { enter: i, leave: r } = Le(u, e);
  return a ? r : i;
}
function xu(u) {
  return We(u, u6);
}
const Xd = 80, u6 = {
  Name: {
    leave: (u) => u.value
  },
  Variable: {
    leave: (u) => "$" + u.name
  },
  // Document
  Document: {
    leave: (u) => L(u.definitions, `

`)
  },
  OperationDefinition: {
    leave(u) {
      const e = Q("(", L(u.variableDefinitions, ", "), ")"), a = L(
        [
          u.operation,
          L([u.name, e]),
          L(u.directives, " ")
        ],
        " "
      );
      return (a === "query" ? "" : a + " ") + u.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: u, type: e, defaultValue: a, directives: i }) => u + ": " + e + Q(" = ", a) + Q(" ", L(i, " "))
  },
  SelectionSet: {
    leave: ({ selections: u }) => s0(u)
  },
  Field: {
    leave({ alias: u, name: e, arguments: a, directives: i, selectionSet: r }) {
      const n = Q("", u, ": ") + e;
      let o = n + Q("(", L(a, ", "), ")");
      return o.length > Xd && (o = n + Q(`(
`, bi(L(a, `
`)), `
)`)), L([o, L(i, " "), r], " ");
    }
  },
  Argument: {
    leave: ({ name: u, value: e }) => u + ": " + e
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: u, directives: e }) => "..." + u + Q(" ", L(e, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: u, directives: e, selectionSet: a }) => L(
      [
        "...",
        Q("on ", u),
        L(e, " "),
        a
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: u, typeCondition: e, variableDefinitions: a, directives: i, selectionSet: r }) => (
      // or removed in the future.
      `fragment ${u}${Q("(", L(a, ", "), ")")} on ${e} ${Q("", L(i, " "), " ")}` + r
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
    leave: ({ value: u, block: e }) => e ? Xs(u) : Ud(u)
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
    leave: ({ values: u }) => "[" + L(u, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: u }) => "{" + L(u, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: u, value: e }) => u + ": " + e
  },
  // Directive
  Directive: {
    leave: ({ name: u, arguments: e }) => "@" + u + Q("(", L(e, ", "), ")")
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
    leave: ({ description: u, directives: e, operationTypes: a }) => Q("", u, `
`) + L(["schema", L(e, " "), s0(a)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: u, type: e }) => u + ": " + e
  },
  ScalarTypeDefinition: {
    leave: ({ description: u, name: e, directives: a }) => Q("", u, `
`) + L(["scalar", e, L(a, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: u, name: e, interfaces: a, directives: i, fields: r }) => Q("", u, `
`) + L(
      [
        "type",
        e,
        Q("implements ", L(a, " & ")),
        L(i, " "),
        s0(r)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: u, name: e, arguments: a, type: i, directives: r }) => Q("", u, `
`) + e + (L1(a) ? Q(`(
`, bi(L(a, `
`)), `
)`) : Q("(", L(a, ", "), ")")) + ": " + i + Q(" ", L(r, " "))
  },
  InputValueDefinition: {
    leave: ({ description: u, name: e, type: a, defaultValue: i, directives: r }) => Q("", u, `
`) + L(
      [e + ": " + a, Q("= ", i), L(r, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: u, name: e, interfaces: a, directives: i, fields: r }) => Q("", u, `
`) + L(
      [
        "interface",
        e,
        Q("implements ", L(a, " & ")),
        L(i, " "),
        s0(r)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: u, name: e, directives: a, types: i }) => Q("", u, `
`) + L(
      ["union", e, L(a, " "), Q("= ", L(i, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: u, name: e, directives: a, values: i }) => Q("", u, `
`) + L(["enum", e, L(a, " "), s0(i)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: u, name: e, directives: a }) => Q("", u, `
`) + L([e, L(a, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: u, name: e, directives: a, fields: i }) => Q("", u, `
`) + L(["input", e, L(a, " "), s0(i)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: u, name: e, arguments: a, repeatable: i, locations: r }) => Q("", u, `
`) + "directive @" + e + (L1(a) ? Q(`(
`, bi(L(a, `
`)), `
)`) : Q("(", L(a, ", "), ")")) + (i ? " repeatable" : "") + " on " + L(r, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: u, operationTypes: e }) => L(
      ["extend schema", L(u, " "), s0(e)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: u, directives: e }) => L(["extend scalar", u, L(e, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: u, interfaces: e, directives: a, fields: i }) => L(
      [
        "extend type",
        u,
        Q("implements ", L(e, " & ")),
        L(a, " "),
        s0(i)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: u, interfaces: e, directives: a, fields: i }) => L(
      [
        "extend interface",
        u,
        Q("implements ", L(e, " & ")),
        L(a, " "),
        s0(i)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: u, directives: e, types: a }) => L(
      [
        "extend union",
        u,
        L(e, " "),
        Q("= ", L(a, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: u, directives: e, values: a }) => L(["extend enum", u, L(e, " "), s0(a)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: u, directives: e, fields: a }) => L(["extend input", u, L(e, " "), s0(a)], " ")
  }
};
function L(u, e = "") {
  var a;
  return (a = u == null ? void 0 : u.filter((i) => i).join(e)) !== null && a !== void 0 ? a : "";
}
function s0(u) {
  return Q(`{
`, bi(L(u, `
`)), `
}`);
}
function Q(u, e, a = "") {
  return e != null && e !== "" ? u + e + a : "";
}
function bi(u) {
  return Q("  ", u.replace(/\n/g, `
  `));
}
function L1(u) {
  var e;
  return (e = u == null ? void 0 : u.some((a) => a.includes(`
`))) !== null && e !== void 0 ? e : !1;
}
function Li(u, e) {
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
        (a) => Li(a, e)
      );
    case p.OBJECT:
      return $0(
        u.fields,
        (a) => a.name.value,
        (a) => Li(a.value, e)
      );
    case p.VARIABLE:
      return e == null ? void 0 : e[u.name.value];
  }
}
function Zu(u) {
  if (u != null || Y(!1, "Must provide name."), typeof u == "string" || Y(!1, "Expected name to be a string."), u.length === 0)
    throw new B("Expected name to be a non-empty string.");
  for (let e = 1; e < u.length; ++e)
    if (!Qs(u.charCodeAt(e)))
      throw new B(
        `Names must only contain [_a-zA-Z0-9] but "${u}" does not.`
      );
  if (!yo(u.charCodeAt(0)))
    throw new B(
      `Names must start with [_a-zA-Z] but "${u}" does not.`
    );
  return u;
}
function tl(u) {
  if (u === "true" || u === "false" || u === "null")
    throw new B(`Enum values cannot be named: ${u}`);
  return Zu(u);
}
function Ka(u) {
  return Yu(u) || uu(u) || au(u) || fu(u) || Cu(u) || du(u) || cu(u) || J(u);
}
function e6(u) {
  if (!Ka(u))
    throw new Error(`Expected ${S(u)} to be a GraphQL type.`);
  return u;
}
function Yu(u) {
  return x0(u, C0);
}
function a6(u) {
  if (!Yu(u))
    throw new Error(`Expected ${S(u)} to be a GraphQL Scalar type.`);
  return u;
}
function uu(u) {
  return x0(u, r0);
}
function sl(u) {
  if (!uu(u))
    throw new Error(`Expected ${S(u)} to be a GraphQL Object type.`);
  return u;
}
function au(u) {
  return x0(u, Ke);
}
function ll(u) {
  if (!au(u))
    throw new Error(
      `Expected ${S(u)} to be a GraphQL Interface type.`
    );
  return u;
}
function fu(u) {
  return x0(u, Re);
}
function i6(u) {
  if (!fu(u))
    throw new Error(`Expected ${S(u)} to be a GraphQL Union type.`);
  return u;
}
function Cu(u) {
  return x0(u, Y0);
}
function r6(u) {
  if (!Cu(u))
    throw new Error(`Expected ${S(u)} to be a GraphQL Enum type.`);
  return u;
}
function du(u) {
  return x0(u, _e);
}
function n6(u) {
  if (!du(u))
    throw new Error(
      `Expected ${S(u)} to be a GraphQL Input Object type.`
    );
  return u;
}
function cu(u) {
  return x0(u, ju);
}
function o6(u) {
  if (!cu(u))
    throw new Error(`Expected ${S(u)} to be a GraphQL List type.`);
  return u;
}
function J(u) {
  return x0(u, Z);
}
function t6(u) {
  if (!J(u))
    throw new Error(`Expected ${S(u)} to be a GraphQL Non-Null type.`);
  return u;
}
function Ku(u) {
  return Yu(u) || Cu(u) || du(u) || Ra(u) && Ku(u.ofType);
}
function s6(u) {
  if (!Ku(u))
    throw new Error(`Expected ${S(u)} to be a GraphQL input type.`);
  return u;
}
function U0(u) {
  return Yu(u) || uu(u) || au(u) || fu(u) || Cu(u) || Ra(u) && U0(u.ofType);
}
function l6(u) {
  if (!U0(u))
    throw new Error(`Expected ${S(u)} to be a GraphQL output type.`);
  return u;
}
function h0(u) {
  return Yu(u) || Cu(u);
}
function E6(u) {
  if (!h0(u))
    throw new Error(`Expected ${S(u)} to be a GraphQL leaf type.`);
  return u;
}
function g0(u) {
  return uu(u) || au(u) || fu(u);
}
function D6(u) {
  if (!g0(u))
    throw new Error(
      `Expected ${S(u)} to be a GraphQL composite type.`
    );
  return u;
}
function F0(u) {
  return au(u) || fu(u);
}
function x6(u) {
  if (!F0(u))
    throw new Error(`Expected ${S(u)} to be a GraphQL abstract type.`);
  return u;
}
class ju {
  constructor(e) {
    Ka(e) || Y(!1, `Expected ${S(e)} to be a GraphQL type.`), this.ofType = e;
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
class Z {
  constructor(e) {
    Mo(e) || Y(
      !1,
      `Expected ${S(e)} to be a GraphQL nullable type.`
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
function Ra(u) {
  return cu(u) || J(u);
}
function c6(u) {
  if (!Ra(u))
    throw new Error(`Expected ${S(u)} to be a GraphQL wrapping type.`);
  return u;
}
function Mo(u) {
  return Ka(u) && !J(u);
}
function El(u) {
  if (!Mo(u))
    throw new Error(`Expected ${S(u)} to be a GraphQL nullable type.`);
  return u;
}
function jo(u) {
  if (u)
    return J(u) ? u.ofType : u;
}
function _a(u) {
  return Yu(u) || uu(u) || au(u) || fu(u) || Cu(u) || du(u);
}
function d6(u) {
  if (!_a(u))
    throw new Error(`Expected ${S(u)} to be a GraphQL named type.`);
  return u;
}
function wu(u) {
  if (u) {
    let e = u;
    for (; Ra(e); )
      e = e.ofType;
    return e;
  }
}
function Po(u) {
  return typeof u == "function" ? u() : u;
}
function To(u) {
  return typeof u == "function" ? u() : u;
}
class C0 {
  constructor(e) {
    var a, i, r, n;
    const o = (a = e.parseValue) !== null && a !== void 0 ? a : w1;
    this.name = Zu(e.name), this.description = e.description, this.specifiedByURL = e.specifiedByURL, this.serialize = (i = e.serialize) !== null && i !== void 0 ? i : w1, this.parseValue = o, this.parseLiteral = (r = e.parseLiteral) !== null && r !== void 0 ? r : (t, s) => o(Li(t, s)), this.extensions = o0(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (n = e.extensionASTNodes) !== null && n !== void 0 ? n : [], e.specifiedByURL == null || typeof e.specifiedByURL == "string" || Y(
      !1,
      `${this.name} must provide "specifiedByURL" as a string, but got: ${S(e.specifiedByURL)}.`
    ), e.serialize == null || typeof e.serialize == "function" || Y(
      !1,
      `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`
    ), e.parseLiteral && (typeof e.parseValue == "function" && typeof e.parseLiteral == "function" || Y(
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
class r0 {
  constructor(e) {
    var a;
    this.name = Zu(e.name), this.description = e.description, this.isTypeOf = e.isTypeOf, this.extensions = o0(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (a = e.extensionASTNodes) !== null && a !== void 0 ? a : [], this._fields = () => xl(e), this._interfaces = () => Dl(e), e.isTypeOf == null || typeof e.isTypeOf == "function" || Y(
      !1,
      `${this.name} must provide "isTypeOf" as a function, but got: ${S(e.isTypeOf)}.`
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
      fields: dl(this.getFields()),
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
function Dl(u) {
  var e;
  const a = Po(
    (e = u.interfaces) !== null && e !== void 0 ? e : []
  );
  return Array.isArray(a) || Y(
    !1,
    `${u.name} interfaces must be an Array or a function which returns an Array.`
  ), a;
}
function xl(u) {
  const e = To(u.fields);
  return we(e) || Y(
    !1,
    `${u.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), f0(e, (a, i) => {
    var r;
    we(a) || Y(
      !1,
      `${u.name}.${i} field config must be an object.`
    ), a.resolve == null || typeof a.resolve == "function" || Y(
      !1,
      `${u.name}.${i} field resolver must be a function if provided, but got: ${S(a.resolve)}.`
    );
    const n = (r = a.args) !== null && r !== void 0 ? r : {};
    return we(n) || Y(
      !1,
      `${u.name}.${i} args must be an object with argument names as keys.`
    ), {
      name: Zu(i),
      description: a.description,
      type: a.type,
      args: cl(n),
      resolve: a.resolve,
      subscribe: a.subscribe,
      deprecationReason: a.deprecationReason,
      extensions: o0(a.extensions),
      astNode: a.astNode
    };
  });
}
function cl(u) {
  return Object.entries(u).map(([e, a]) => ({
    name: Zu(e),
    description: a.description,
    type: a.type,
    defaultValue: a.defaultValue,
    deprecationReason: a.deprecationReason,
    extensions: o0(a.extensions),
    astNode: a.astNode
  }));
}
function we(u) {
  return Wu(u) && !Array.isArray(u);
}
function dl(u) {
  return f0(u, (e) => ({
    description: e.description,
    type: e.type,
    args: ml(e.args),
    resolve: e.resolve,
    subscribe: e.subscribe,
    deprecationReason: e.deprecationReason,
    extensions: e.extensions,
    astNode: e.astNode
  }));
}
function ml(u) {
  return $0(
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
function ee(u) {
  return J(u.type) && u.defaultValue === void 0;
}
class Ke {
  constructor(e) {
    var a;
    this.name = Zu(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = o0(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (a = e.extensionASTNodes) !== null && a !== void 0 ? a : [], this._fields = xl.bind(void 0, e), this._interfaces = Dl.bind(void 0, e), e.resolveType == null || typeof e.resolveType == "function" || Y(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${S(e.resolveType)}.`
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
      fields: dl(this.getFields()),
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
class Re {
  constructor(e) {
    var a;
    this.name = Zu(e.name), this.description = e.description, this.resolveType = e.resolveType, this.extensions = o0(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (a = e.extensionASTNodes) !== null && a !== void 0 ? a : [], this._types = m6.bind(void 0, e), e.resolveType == null || typeof e.resolveType == "function" || Y(
      !1,
      `${this.name} must provide "resolveType" as a function, but got: ${S(e.resolveType)}.`
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
function m6(u) {
  const e = Po(u.types);
  return Array.isArray(e) || Y(
    !1,
    `Must provide Array of types or a function which returns such an array for Union ${u.name}.`
  ), e;
}
class Y0 {
  /* <T> */
  constructor(e) {
    var a;
    this.name = Zu(e.name), this.description = e.description, this.extensions = o0(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (a = e.extensionASTNodes) !== null && a !== void 0 ? a : [], this._values = F6(this.name, e.values), this._valueLookup = new Map(
      this._values.map((i) => [i.value, i])
    ), this._nameLookup = P0(this._values, (i) => i.name);
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
        `Enum "${this.name}" cannot represent value: ${S(e)}`
      );
    return a.name;
  }
  parseValue(e) {
    if (typeof e != "string") {
      const i = S(e);
      throw new B(
        `Enum "${this.name}" cannot represent non-string value: ${i}.` + Ei(this, i)
      );
    }
    const a = this.getValue(e);
    if (a == null)
      throw new B(
        `Value "${e}" does not exist in "${this.name}" enum.` + Ei(this, e)
      );
    return a.value;
  }
  parseLiteral(e, a) {
    if (e.kind !== p.ENUM) {
      const r = xu(e);
      throw new B(
        `Enum "${this.name}" cannot represent non-enum value: ${r}.` + Ei(this, r),
        {
          nodes: e
        }
      );
    }
    const i = this.getValue(e.value);
    if (i == null) {
      const r = xu(e);
      throw new B(
        `Value "${r}" does not exist in "${this.name}" enum.` + Ei(this, r),
        {
          nodes: e
        }
      );
    }
    return i.value;
  }
  toConfig() {
    const e = $0(
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
function Ei(u, e) {
  const a = u.getValues().map((r) => r.name), i = ue(e, a);
  return j0("the enum value", i);
}
function F6(u, e) {
  return we(e) || Y(
    !1,
    `${u} values must be an object with value names as keys.`
  ), Object.entries(e).map(([a, i]) => (we(i) || Y(
    !1,
    `${u}.${a} must refer to an object with a "value" key representing an internal value but got: ${S(i)}.`
  ), {
    name: tl(a),
    description: i.description,
    value: i.value !== void 0 ? i.value : a,
    deprecationReason: i.deprecationReason,
    extensions: o0(i.extensions),
    astNode: i.astNode
  }));
}
class _e {
  constructor(e) {
    var a;
    this.name = Zu(e.name), this.description = e.description, this.extensions = o0(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (a = e.extensionASTNodes) !== null && a !== void 0 ? a : [], this._fields = k6.bind(void 0, e);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInputObjectType";
  }
  getFields() {
    return typeof this._fields == "function" && (this._fields = this._fields()), this._fields;
  }
  toConfig() {
    const e = f0(this.getFields(), (a) => ({
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
function k6(u) {
  const e = To(u.fields);
  return we(e) || Y(
    !1,
    `${u.name} fields must be an object with field names as keys or a function which returns such an object.`
  ), f0(e, (a, i) => (!("resolve" in a) || Y(
    !1,
    `${u.name}.${i} field has a resolve property, but Input Types cannot define resolvers.`
  ), {
    name: Zu(i),
    description: a.description,
    type: a.type,
    defaultValue: a.defaultValue,
    deprecationReason: a.deprecationReason,
    extensions: o0(a.extensions),
    astNode: a.astNode
  }));
}
function dr(u) {
  return J(u.type) && u.defaultValue === void 0;
}
function Ki(u, e) {
  return u === e ? !0 : J(u) && J(e) || cu(u) && cu(e) ? Ki(u.ofType, e.ofType) : !1;
}
function le(u, e, a) {
  return e === a ? !0 : J(a) ? J(e) ? le(u, e.ofType, a.ofType) : !1 : J(e) ? le(u, e.ofType, a) : cu(a) ? cu(e) ? le(u, e.ofType, a.ofType) : !1 : cu(e) ? !1 : F0(a) && (au(e) || uu(e)) && u.isSubType(a, e);
}
function Yn(u, e, a) {
  return e === a ? !0 : F0(e) ? F0(a) ? u.getPossibleTypes(e).some((i) => u.isSubType(a, i)) : u.isSubType(e, a) : F0(a) ? u.isSubType(a, e) : !1;
}
const Ai = 2147483647, Bi = -2147483648, Fl = new C0({
  name: "Int",
  description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
  serialize(u) {
    const e = Ga(u);
    if (typeof e == "boolean")
      return e ? 1 : 0;
    let a = e;
    if (typeof e == "string" && e !== "" && (a = Number(e)), typeof a != "number" || !Number.isInteger(a))
      throw new B(
        `Int cannot represent non-integer value: ${S(e)}`
      );
    if (a > Ai || a < Bi)
      throw new B(
        "Int cannot represent non 32-bit signed integer value: " + S(e)
      );
    return a;
  },
  parseValue(u) {
    if (typeof u != "number" || !Number.isInteger(u))
      throw new B(
        `Int cannot represent non-integer value: ${S(u)}`
      );
    if (u > Ai || u < Bi)
      throw new B(
        `Int cannot represent non 32-bit signed integer value: ${u}`
      );
    return u;
  },
  parseLiteral(u) {
    if (u.kind !== p.INT)
      throw new B(
        `Int cannot represent non-integer value: ${xu(u)}`,
        {
          nodes: u
        }
      );
    const e = parseInt(u.value, 10);
    if (e > Ai || e < Bi)
      throw new B(
        `Int cannot represent non 32-bit signed integer value: ${u.value}`,
        {
          nodes: u
        }
      );
    return e;
  }
}), kl = new C0({
  name: "Float",
  description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
  serialize(u) {
    const e = Ga(u);
    if (typeof e == "boolean")
      return e ? 1 : 0;
    let a = e;
    if (typeof e == "string" && e !== "" && (a = Number(e)), typeof a != "number" || !Number.isFinite(a))
      throw new B(
        `Float cannot represent non numeric value: ${S(e)}`
      );
    return a;
  },
  parseValue(u) {
    if (typeof u != "number" || !Number.isFinite(u))
      throw new B(
        `Float cannot represent non numeric value: ${S(u)}`
      );
    return u;
  },
  parseLiteral(u) {
    if (u.kind !== p.FLOAT && u.kind !== p.INT)
      throw new B(
        `Float cannot represent non numeric value: ${xu(u)}`,
        u
      );
    return parseFloat(u.value);
  }
}), ku = new C0({
  name: "String",
  description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
  serialize(u) {
    const e = Ga(u);
    if (typeof e == "string")
      return e;
    if (typeof e == "boolean")
      return e ? "true" : "false";
    if (typeof e == "number" && Number.isFinite(e))
      return e.toString();
    throw new B(
      `String cannot represent value: ${S(u)}`
    );
  },
  parseValue(u) {
    if (typeof u != "string")
      throw new B(
        `String cannot represent a non string value: ${S(u)}`
      );
    return u;
  },
  parseLiteral(u) {
    if (u.kind !== p.STRING)
      throw new B(
        `String cannot represent a non string value: ${xu(u)}`,
        {
          nodes: u
        }
      );
    return u.value;
  }
}), qu = new C0({
  name: "Boolean",
  description: "The `Boolean` scalar type represents `true` or `false`.",
  serialize(u) {
    const e = Ga(u);
    if (typeof e == "boolean")
      return e;
    if (Number.isFinite(e))
      return e !== 0;
    throw new B(
      `Boolean cannot represent a non boolean value: ${S(e)}`
    );
  },
  parseValue(u) {
    if (typeof u != "boolean")
      throw new B(
        `Boolean cannot represent a non boolean value: ${S(u)}`
      );
    return u;
  },
  parseLiteral(u) {
    if (u.kind !== p.BOOLEAN)
      throw new B(
        `Boolean cannot represent a non boolean value: ${xu(u)}`,
        {
          nodes: u
        }
      );
    return u.value;
  }
}), wo = new C0({
  name: "ID",
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize(u) {
    const e = Ga(u);
    if (typeof e == "string")
      return e;
    if (Number.isInteger(e))
      return String(e);
    throw new B(
      `ID cannot represent value: ${S(u)}`
    );
  },
  parseValue(u) {
    if (typeof u == "string")
      return u;
    if (typeof u == "number" && Number.isInteger(u))
      return u.toString();
    throw new B(`ID cannot represent value: ${S(u)}`);
  },
  parseLiteral(u) {
    if (u.kind !== p.STRING && u.kind !== p.INT)
      throw new B(
        "ID cannot represent a non-string and non-integer value: " + xu(u),
        {
          nodes: u
        }
      );
    return u.value;
  }
}), Ha = Object.freeze([
  ku,
  Fl,
  kl,
  qu,
  wo
]);
function mr(u) {
  return Ha.some(({ name: e }) => u.name === e);
}
function Ga(u) {
  if (Wu(u)) {
    if (typeof u.valueOf == "function") {
      const e = u.valueOf();
      if (!Wu(e))
        return e;
    }
    if (typeof u.toJSON == "function")
      return u.toJSON();
  }
  return u;
}
function Fr(u) {
  return x0(u, v0);
}
function p6(u) {
  if (!Fr(u))
    throw new Error(
      `Expected ${S(u)} to be a GraphQL directive.`
    );
  return u;
}
class v0 {
  constructor(e) {
    var a, i;
    this.name = Zu(e.name), this.description = e.description, this.locations = e.locations, this.isRepeatable = (a = e.isRepeatable) !== null && a !== void 0 ? a : !1, this.extensions = o0(e.extensions), this.astNode = e.astNode, Array.isArray(e.locations) || Y(!1, `@${e.name} locations must be an Array.`);
    const r = (i = e.args) !== null && i !== void 0 ? i : {};
    Wu(r) && !Array.isArray(r) || Y(
      !1,
      `@${e.name} args must be an object with argument names as keys.`
    ), this.args = cl(r);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLDirective";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: ml(this.args),
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
const No = new v0({
  name: "include",
  description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
  locations: [
    _.FIELD,
    _.FRAGMENT_SPREAD,
    _.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new Z(qu),
      description: "Included when true."
    }
  }
}), Lo = new v0({
  name: "skip",
  description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
  locations: [
    _.FIELD,
    _.FRAGMENT_SPREAD,
    _.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new Z(qu),
      description: "Skipped when true."
    }
  }
}), Ko = "No longer supported", kr = new v0({
  name: "deprecated",
  description: "Marks an element of a GraphQL schema as no longer supported.",
  locations: [
    _.FIELD_DEFINITION,
    _.ARGUMENT_DEFINITION,
    _.INPUT_FIELD_DEFINITION,
    _.ENUM_VALUE
  ],
  args: {
    reason: {
      type: ku,
      description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
      defaultValue: Ko
    }
  }
}), Ro = new v0({
  name: "specifiedBy",
  description: "Exposes a URL that specifies the behavior of this scalar.",
  locations: [_.SCALAR],
  args: {
    url: {
      type: new Z(ku),
      description: "The URL that specifies the behavior of this scalar."
    }
  }
}), ae = Object.freeze([
  No,
  Lo,
  kr,
  Ro
]);
function _o(u) {
  return ae.some(({ name: e }) => e === u.name);
}
function Ho(u) {
  return typeof u == "object" && typeof (u == null ? void 0 : u[Symbol.iterator]) == "function";
}
function q0(u, e) {
  if (J(e)) {
    const a = q0(u, e.ofType);
    return (a == null ? void 0 : a.kind) === p.NULL ? null : a;
  }
  if (u === null)
    return {
      kind: p.NULL
    };
  if (u === void 0)
    return null;
  if (cu(e)) {
    const a = e.ofType;
    if (Ho(u)) {
      const i = [];
      for (const r of u) {
        const n = q0(r, a);
        n != null && i.push(n);
      }
      return {
        kind: p.LIST,
        values: i
      };
    }
    return q0(u, a);
  }
  if (du(e)) {
    if (!Wu(u))
      return null;
    const a = [];
    for (const i of Object.values(e.getFields())) {
      const r = q0(u[i.name], i.type);
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
  if (h0(e)) {
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
      return K1.test(i) ? {
        kind: p.INT,
        value: i
      } : {
        kind: p.FLOAT,
        value: i
      };
    }
    if (typeof a == "string")
      return Cu(e) ? {
        kind: p.ENUM,
        value: a
      } : e === wo && K1.test(a) ? {
        kind: p.INT,
        value: a
      } : {
        kind: p.STRING,
        value: a
      };
    throw new TypeError(`Cannot convert value to AST: ${S(a)}.`);
  }
  hu(!1, "Unexpected input type: " + S(e));
}
const K1 = /^-?(?:0|[1-9][0-9]*)$/, pr = new r0({
  name: "__Schema",
  description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
  fields: () => ({
    description: {
      type: ku,
      resolve: (u) => u.description
    },
    types: {
      description: "A list of all types supported by this server.",
      type: new Z(new ju(new Z(e0))),
      resolve(u) {
        return Object.values(u.getTypeMap());
      }
    },
    queryType: {
      description: "The type that query operations will be rooted at.",
      type: new Z(e0),
      resolve: (u) => u.getQueryType()
    },
    mutationType: {
      description: "If this server supports mutation, the type that mutation operations will be rooted at.",
      type: e0,
      resolve: (u) => u.getMutationType()
    },
    subscriptionType: {
      description: "If this server support subscription, the type that subscription operations will be rooted at.",
      type: e0,
      resolve: (u) => u.getSubscriptionType()
    },
    directives: {
      description: "A list of all directives supported by this server.",
      type: new Z(
        new ju(new Z(Go))
      ),
      resolve: (u) => u.getDirectives()
    }
  })
}), Go = new r0({
  name: "__Directive",
  description: `A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,
  fields: () => ({
    name: {
      type: new Z(ku),
      resolve: (u) => u.name
    },
    description: {
      type: ku,
      resolve: (u) => u.description
    },
    isRepeatable: {
      type: new Z(qu),
      resolve: (u) => u.isRepeatable
    },
    locations: {
      type: new Z(
        new ju(new Z(Vo))
      ),
      resolve: (u) => u.locations
    },
    args: {
      type: new Z(
        new ju(new Z(Va))
      ),
      args: {
        includeDeprecated: {
          type: qu,
          defaultValue: !1
        }
      },
      resolve(u, { includeDeprecated: e }) {
        return e ? u.args : u.args.filter((a) => a.deprecationReason == null);
      }
    }
  })
}), Vo = new Y0({
  name: "__DirectiveLocation",
  description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
  values: {
    QUERY: {
      value: _.QUERY,
      description: "Location adjacent to a query operation."
    },
    MUTATION: {
      value: _.MUTATION,
      description: "Location adjacent to a mutation operation."
    },
    SUBSCRIPTION: {
      value: _.SUBSCRIPTION,
      description: "Location adjacent to a subscription operation."
    },
    FIELD: {
      value: _.FIELD,
      description: "Location adjacent to a field."
    },
    FRAGMENT_DEFINITION: {
      value: _.FRAGMENT_DEFINITION,
      description: "Location adjacent to a fragment definition."
    },
    FRAGMENT_SPREAD: {
      value: _.FRAGMENT_SPREAD,
      description: "Location adjacent to a fragment spread."
    },
    INLINE_FRAGMENT: {
      value: _.INLINE_FRAGMENT,
      description: "Location adjacent to an inline fragment."
    },
    VARIABLE_DEFINITION: {
      value: _.VARIABLE_DEFINITION,
      description: "Location adjacent to a variable definition."
    },
    SCHEMA: {
      value: _.SCHEMA,
      description: "Location adjacent to a schema definition."
    },
    SCALAR: {
      value: _.SCALAR,
      description: "Location adjacent to a scalar definition."
    },
    OBJECT: {
      value: _.OBJECT,
      description: "Location adjacent to an object type definition."
    },
    FIELD_DEFINITION: {
      value: _.FIELD_DEFINITION,
      description: "Location adjacent to a field definition."
    },
    ARGUMENT_DEFINITION: {
      value: _.ARGUMENT_DEFINITION,
      description: "Location adjacent to an argument definition."
    },
    INTERFACE: {
      value: _.INTERFACE,
      description: "Location adjacent to an interface definition."
    },
    UNION: {
      value: _.UNION,
      description: "Location adjacent to a union definition."
    },
    ENUM: {
      value: _.ENUM,
      description: "Location adjacent to an enum definition."
    },
    ENUM_VALUE: {
      value: _.ENUM_VALUE,
      description: "Location adjacent to an enum value definition."
    },
    INPUT_OBJECT: {
      value: _.INPUT_OBJECT,
      description: "Location adjacent to an input object type definition."
    },
    INPUT_FIELD_DEFINITION: {
      value: _.INPUT_FIELD_DEFINITION,
      description: "Location adjacent to an input object field definition."
    }
  }
}), e0 = new r0({
  name: "__Type",
  description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
  fields: () => ({
    kind: {
      type: new Z(Jo),
      resolve(u) {
        if (Yu(u))
          return tu.SCALAR;
        if (uu(u))
          return tu.OBJECT;
        if (au(u))
          return tu.INTERFACE;
        if (fu(u))
          return tu.UNION;
        if (Cu(u))
          return tu.ENUM;
        if (du(u))
          return tu.INPUT_OBJECT;
        if (cu(u))
          return tu.LIST;
        if (J(u))
          return tu.NON_NULL;
        hu(!1, `Unexpected type: "${S(u)}".`);
      }
    },
    name: {
      type: ku,
      resolve: (u) => "name" in u ? u.name : void 0
    },
    description: {
      type: ku,
      resolve: (u) => (
        /* c8 ignore next */
        "description" in u ? u.description : void 0
      )
    },
    specifiedByURL: {
      type: ku,
      resolve: (u) => "specifiedByURL" in u ? u.specifiedByURL : void 0
    },
    fields: {
      type: new ju(new Z(Io)),
      args: {
        includeDeprecated: {
          type: qu,
          defaultValue: !1
        }
      },
      resolve(u, { includeDeprecated: e }) {
        if (uu(u) || au(u)) {
          const a = Object.values(u.getFields());
          return e ? a : a.filter((i) => i.deprecationReason == null);
        }
      }
    },
    interfaces: {
      type: new ju(new Z(e0)),
      resolve(u) {
        if (uu(u) || au(u))
          return u.getInterfaces();
      }
    },
    possibleTypes: {
      type: new ju(new Z(e0)),
      resolve(u, e, a, { schema: i }) {
        if (F0(u))
          return i.getPossibleTypes(u);
      }
    },
    enumValues: {
      type: new ju(new Z(Oo)),
      args: {
        includeDeprecated: {
          type: qu,
          defaultValue: !1
        }
      },
      resolve(u, { includeDeprecated: e }) {
        if (Cu(u)) {
          const a = u.getValues();
          return e ? a : a.filter((i) => i.deprecationReason == null);
        }
      }
    },
    inputFields: {
      type: new ju(new Z(Va)),
      args: {
        includeDeprecated: {
          type: qu,
          defaultValue: !1
        }
      },
      resolve(u, { includeDeprecated: e }) {
        if (du(u)) {
          const a = Object.values(u.getFields());
          return e ? a : a.filter((i) => i.deprecationReason == null);
        }
      }
    },
    ofType: {
      type: e0,
      resolve: (u) => "ofType" in u ? u.ofType : void 0
    }
  })
}), Io = new r0({
  name: "__Field",
  description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
  fields: () => ({
    name: {
      type: new Z(ku),
      resolve: (u) => u.name
    },
    description: {
      type: ku,
      resolve: (u) => u.description
    },
    args: {
      type: new Z(
        new ju(new Z(Va))
      ),
      args: {
        includeDeprecated: {
          type: qu,
          defaultValue: !1
        }
      },
      resolve(u, { includeDeprecated: e }) {
        return e ? u.args : u.args.filter((a) => a.deprecationReason == null);
      }
    },
    type: {
      type: new Z(e0),
      resolve: (u) => u.type
    },
    isDeprecated: {
      type: new Z(qu),
      resolve: (u) => u.deprecationReason != null
    },
    deprecationReason: {
      type: ku,
      resolve: (u) => u.deprecationReason
    }
  })
}), Va = new r0({
  name: "__InputValue",
  description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
  fields: () => ({
    name: {
      type: new Z(ku),
      resolve: (u) => u.name
    },
    description: {
      type: ku,
      resolve: (u) => u.description
    },
    type: {
      type: new Z(e0),
      resolve: (u) => u.type
    },
    defaultValue: {
      type: ku,
      description: "A GraphQL-formatted string representing the default value for this input value.",
      resolve(u) {
        const { type: e, defaultValue: a } = u, i = q0(a, e);
        return i ? xu(i) : null;
      }
    },
    isDeprecated: {
      type: new Z(qu),
      resolve: (u) => u.deprecationReason != null
    },
    deprecationReason: {
      type: ku,
      resolve: (u) => u.deprecationReason
    }
  })
}), Oo = new r0({
  name: "__EnumValue",
  description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
  fields: () => ({
    name: {
      type: new Z(ku),
      resolve: (u) => u.name
    },
    description: {
      type: ku,
      resolve: (u) => u.description
    },
    isDeprecated: {
      type: new Z(qu),
      resolve: (u) => u.deprecationReason != null
    },
    deprecationReason: {
      type: ku,
      resolve: (u) => u.deprecationReason
    }
  })
});
var tu;
(function(u) {
  u.SCALAR = "SCALAR", u.OBJECT = "OBJECT", u.INTERFACE = "INTERFACE", u.UNION = "UNION", u.ENUM = "ENUM", u.INPUT_OBJECT = "INPUT_OBJECT", u.LIST = "LIST", u.NON_NULL = "NON_NULL";
})(tu || (tu = {}));
const Jo = new Y0({
  name: "__TypeKind",
  description: "An enum describing what kind of type a given `__Type` is.",
  values: {
    SCALAR: {
      value: tu.SCALAR,
      description: "Indicates this type is a scalar."
    },
    OBJECT: {
      value: tu.OBJECT,
      description: "Indicates this type is an object. `fields` and `interfaces` are valid fields."
    },
    INTERFACE: {
      value: tu.INTERFACE,
      description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
    },
    UNION: {
      value: tu.UNION,
      description: "Indicates this type is a union. `possibleTypes` is a valid field."
    },
    ENUM: {
      value: tu.ENUM,
      description: "Indicates this type is an enum. `enumValues` is a valid field."
    },
    INPUT_OBJECT: {
      value: tu.INPUT_OBJECT,
      description: "Indicates this type is an input object. `inputFields` is a valid field."
    },
    LIST: {
      value: tu.LIST,
      description: "Indicates this type is a list. `ofType` is a valid field."
    },
    NON_NULL: {
      value: tu.NON_NULL,
      description: "Indicates this type is a non-null. `ofType` is a valid field."
    }
  }
}), ga = {
  name: "__schema",
  type: new Z(pr),
  description: "Access the current type schema of this server.",
  args: [],
  resolve: (u, e, a, { schema: i }) => i,
  deprecationReason: void 0,
  extensions: /* @__PURE__ */ Object.create(null),
  astNode: void 0
}, Ca = {
  name: "__type",
  type: e0,
  description: "Request the type information of a single type.",
  args: [
    {
      name: "name",
      description: void 0,
      type: new Z(ku),
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
}, va = {
  name: "__typename",
  type: new Z(ku),
  description: "The name of the current Object type at runtime.",
  args: [],
  resolve: (u, e, a, { parentType: i }) => i.name,
  deprecationReason: void 0,
  extensions: /* @__PURE__ */ Object.create(null),
  astNode: void 0
}, Ia = Object.freeze([
  pr,
  Go,
  Vo,
  e0,
  Io,
  Va,
  Oo,
  Jo
]);
function pe(u) {
  return Ia.some(({ name: e }) => u.name === e);
}
function pl(u) {
  return x0(u, Ze);
}
function $o(u) {
  if (!pl(u))
    throw new Error(`Expected ${S(u)} to be a GraphQL schema.`);
  return u;
}
class Ze {
  // Used as a cache for validateSchema().
  constructor(e) {
    var a, i;
    this.__validationErrors = e.assumeValid === !0 ? [] : void 0, Wu(e) || Y(!1, "Must provide configuration object."), !e.types || Array.isArray(e.types) || Y(
      !1,
      `"types" must be Array if provided but got: ${S(e.types)}.`
    ), !e.directives || Array.isArray(e.directives) || Y(
      !1,
      `"directives" must be Array if provided but got: ${S(e.directives)}.`
    ), this.description = e.description, this.extensions = o0(e.extensions), this.astNode = e.astNode, this.extensionASTNodes = (a = e.extensionASTNodes) !== null && a !== void 0 ? a : [], this._queryType = e.query, this._mutationType = e.mutation, this._subscriptionType = e.subscription, this._directives = (i = e.directives) !== null && i !== void 0 ? i : ae;
    const r = new Set(e.types);
    if (e.types != null)
      for (const n of e.types)
        r.delete(n), l0(n, r);
    this._queryType != null && l0(this._queryType, r), this._mutationType != null && l0(this._mutationType, r), this._subscriptionType != null && l0(this._subscriptionType, r);
    for (const n of this._directives)
      if (Fr(n))
        for (const o of n.args)
          l0(o.type, r);
    l0(pr, r), this._typeMap = /* @__PURE__ */ Object.create(null), this._subTypeMap = /* @__PURE__ */ Object.create(null), this._implementationsMap = /* @__PURE__ */ Object.create(null);
    for (const n of r) {
      if (n == null)
        continue;
      const o = n.name;
      if (o || Y(
        !1,
        "One of the provided types for building the Schema is missing a name."
      ), this._typeMap[o] !== void 0)
        throw new Error(
          `Schema must contain uniquely named types but contains multiple types named "${o}".`
        );
      if (this._typeMap[o] = n, au(n)) {
        for (const t of n.getInterfaces())
          if (au(t)) {
            let s = this._implementationsMap[t.name];
            s === void 0 && (s = this._implementationsMap[t.name] = {
              objects: [],
              interfaces: []
            }), s.interfaces.push(n);
          }
      } else if (uu(n)) {
        for (const t of n.getInterfaces())
          if (au(t)) {
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
      case Bu.QUERY:
        return this.getQueryType();
      case Bu.MUTATION:
        return this.getMutationType();
      case Bu.SUBSCRIPTION:
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
    return fu(e) ? e.getTypes() : this.getImplementations(e).objects;
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
      if (i = /* @__PURE__ */ Object.create(null), fu(e))
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
function l0(u, e) {
  const a = wu(u);
  if (!e.has(a)) {
    if (e.add(a), fu(a))
      for (const i of a.getTypes())
        l0(i, e);
    else if (uu(a) || au(a)) {
      for (const i of a.getInterfaces())
        l0(i, e);
      for (const i of Object.values(a.getFields())) {
        l0(i.type, e);
        for (const r of i.args)
          l0(r.type, e);
      }
    } else if (du(a))
      for (const i of Object.values(a.getFields()))
        l0(i.type, e);
  }
  return e;
}
function qo(u) {
  if ($o(u), u.__validationErrors)
    return u.__validationErrors;
  const e = new h6(u);
  g6(e), C6(e), v6(e);
  const a = e.getErrors();
  return u.__validationErrors = a, a;
}
function Uo(u) {
  const e = qo(u);
  if (e.length !== 0)
    throw new Error(e.map((a) => a.message).join(`

`));
}
class h6 {
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
function g6(u) {
  const e = u.schema, a = e.getQueryType();
  if (!a)
    u.reportError("Query root type must be provided.", e.astNode);
  else if (!uu(a)) {
    var i;
    u.reportError(
      `Query root type must be Object type, it cannot be ${S(
        a
      )}.`,
      (i = zn(
        e,
        Bu.QUERY
      )) !== null && i !== void 0 ? i : a.astNode
    );
  }
  const r = e.getMutationType();
  if (r && !uu(r)) {
    var n;
    u.reportError(
      `Mutation root type must be Object type if provided, it cannot be ${S(r)}.`,
      (n = zn(
        e,
        Bu.MUTATION
      )) !== null && n !== void 0 ? n : r.astNode
    );
  }
  const o = e.getSubscriptionType();
  if (o && !uu(o)) {
    var t;
    u.reportError(
      `Subscription root type must be Object type if provided, it cannot be ${S(o)}.`,
      (t = zn(
        e,
        Bu.SUBSCRIPTION
      )) !== null && t !== void 0 ? t : o.astNode
    );
  }
}
function zn(u, e) {
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
function C6(u) {
  for (const a of u.schema.getDirectives()) {
    if (!Fr(a)) {
      u.reportError(
        `Expected directive but got: ${S(a)}.`,
        a == null ? void 0 : a.astNode
      );
      continue;
    }
    ce(u, a);
    for (const i of a.args)
      if (ce(u, i), Ku(i.type) || u.reportError(
        `The type of @${a.name}(${i.name}:) must be Input Type but got: ${S(i.type)}.`,
        i.astNode
      ), ee(i) && i.deprecationReason != null) {
        var e;
        u.reportError(
          `Required argument @${a.name}(${i.name}:) cannot be deprecated.`,
          [
            Wo(i.astNode),
            (e = i.astNode) === null || e === void 0 ? void 0 : e.type
          ]
        );
      }
  }
}
function ce(u, e) {
  e.name.startsWith("__") && u.reportError(
    `Name "${e.name}" must not begin with "__", which is reserved by GraphQL introspection.`,
    e.astNode
  );
}
function v6(u) {
  const e = z6(u), a = u.schema.getTypeMap();
  for (const i of Object.values(a)) {
    if (!_a(i)) {
      u.reportError(
        `Expected GraphQL named type but got: ${S(i)}.`,
        i.astNode
      );
      continue;
    }
    pe(i) || ce(u, i), uu(i) || au(i) ? (R1(u, i), _1(u, i)) : fu(i) ? B6(u, i) : Cu(i) ? f6(u, i) : du(i) && (y6(u, i), e(i));
  }
}
function R1(u, e) {
  const a = Object.values(e.getFields());
  a.length === 0 && u.reportError(`Type ${e.name} must define one or more fields.`, [
    e.astNode,
    ...e.extensionASTNodes
  ]);
  for (const o of a) {
    if (ce(u, o), !U0(o.type)) {
      var i;
      u.reportError(
        `The type of ${e.name}.${o.name} must be Output Type but got: ${S(o.type)}.`,
        (i = o.astNode) === null || i === void 0 ? void 0 : i.type
      );
    }
    for (const t of o.args) {
      const s = t.name;
      if (ce(u, t), !Ku(t.type)) {
        var r;
        u.reportError(
          `The type of ${e.name}.${o.name}(${s}:) must be Input Type but got: ${S(t.type)}.`,
          (r = t.astNode) === null || r === void 0 ? void 0 : r.type
        );
      }
      if (ee(t) && t.deprecationReason != null) {
        var n;
        u.reportError(
          `Required argument ${e.name}.${o.name}(${s}:) cannot be deprecated.`,
          [
            Wo(t.astNode),
            (n = t.astNode) === null || n === void 0 ? void 0 : n.type
          ]
        );
      }
    }
  }
}
function _1(u, e) {
  const a = /* @__PURE__ */ Object.create(null);
  for (const i of e.getInterfaces()) {
    if (!au(i)) {
      u.reportError(
        `Type ${S(e)} must only implement Interface types, it cannot implement ${S(i)}.`,
        Da(e, i)
      );
      continue;
    }
    if (e === i) {
      u.reportError(
        `Type ${e.name} cannot implement itself because it would create a circular reference.`,
        Da(e, i)
      );
      continue;
    }
    if (a[i.name]) {
      u.reportError(
        `Type ${e.name} can only implement ${i.name} once.`,
        Da(e, i)
      );
      continue;
    }
    a[i.name] = !0, A6(u, e, i), b6(u, e, i);
  }
}
function b6(u, e, a) {
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
    if (!le(u.schema, E.type, s.type)) {
      var r, n;
      u.reportError(
        `Interface field ${a.name}.${l} expects type ${S(s.type)} but ${e.name}.${l} is type ${S(E.type)}.`,
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
      if (!Ki(D.type, c.type)) {
        var o, t;
        u.reportError(
          `Interface field argument ${a.name}.${l}(${x}:) expects type ${S(D.type)} but ${e.name}.${l}(${x}:) is type ${S(c.type)}.`,
          [
            (o = D.astNode) === null || o === void 0 ? void 0 : o.type,
            (t = c.astNode) === null || t === void 0 ? void 0 : t.type
          ]
        );
      }
    }
    for (const D of E.args) {
      const x = D.name;
      !s.args.find((d) => d.name === x) && ee(D) && u.reportError(
        `Object field ${e.name}.${l} includes required argument ${x} that is missing from the Interface field ${a.name}.${l}.`,
        [D.astNode, s.astNode]
      );
    }
  }
}
function A6(u, e, a) {
  const i = e.getInterfaces();
  for (const r of a.getInterfaces())
    i.includes(r) || u.reportError(
      r === e ? `Type ${e.name} cannot implement ${a.name} because it would create a circular reference.` : `Type ${e.name} must implement ${r.name} because it is implemented by ${a.name}.`,
      [
        ...Da(a, r),
        ...Da(e, a)
      ]
    );
}
function B6(u, e) {
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
        H1(e, r.name)
      );
      continue;
    }
    i[r.name] = !0, uu(r) || u.reportError(
      `Union type ${e.name} can only include Object types, it cannot include ${S(r)}.`,
      H1(e, String(r))
    );
  }
}
function f6(u, e) {
  const a = e.getValues();
  a.length === 0 && u.reportError(
    `Enum type ${e.name} must define one or more values.`,
    [e.astNode, ...e.extensionASTNodes]
  );
  for (const i of a)
    ce(u, i);
}
function y6(u, e) {
  const a = Object.values(e.getFields());
  a.length === 0 && u.reportError(
    `Input Object type ${e.name} must define one or more fields.`,
    [e.astNode, ...e.extensionASTNodes]
  );
  for (const n of a) {
    if (ce(u, n), !Ku(n.type)) {
      var i;
      u.reportError(
        `The type of ${e.name}.${n.name} must be Input Type but got: ${S(n.type)}.`,
        (i = n.astNode) === null || i === void 0 ? void 0 : i.type
      );
    }
    if (dr(n) && n.deprecationReason != null) {
      var r;
      u.reportError(
        `Required input field ${e.name}.${n.name} cannot be deprecated.`,
        [
          Wo(n.astNode),
          (r = n.astNode) === null || r === void 0 ? void 0 : r.type
        ]
      );
    }
  }
}
function z6(u) {
  const e = /* @__PURE__ */ Object.create(null), a = [], i = /* @__PURE__ */ Object.create(null);
  return r;
  function r(n) {
    if (e[n.name])
      return;
    e[n.name] = !0, i[n.name] = a.length;
    const o = Object.values(n.getFields());
    for (const t of o)
      if (J(t.type) && du(t.type.ofType)) {
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
function Da(u, e) {
  const { astNode: a, extensionASTNodes: i } = u;
  return (a != null ? [a, ...i] : i).flatMap((n) => {
    var o;
    return (
      /* c8 ignore next */
      (o = n.interfaces) !== null && o !== void 0 ? o : []
    );
  }).filter((n) => n.name.value === e.name);
}
function H1(u, e) {
  const { astNode: a, extensionASTNodes: i } = u;
  return (a != null ? [a, ...i] : i).flatMap((n) => {
    var o;
    return (
      /* c8 ignore next */
      (o = n.types) !== null && o !== void 0 ? o : []
    );
  }).filter((n) => n.name.value === e);
}
function Wo(u) {
  var e;
  return u == null || (e = u.directives) === null || e === void 0 ? void 0 : e.find(
    (a) => a.name.value === kr.name
  );
}
function Ru(u, e) {
  switch (e.kind) {
    case p.LIST_TYPE: {
      const a = Ru(u, e.type);
      return a && new ju(a);
    }
    case p.NON_NULL_TYPE: {
      const a = Ru(u, e.type);
      return a && new Z(a);
    }
    case p.NAMED_TYPE:
      return u.getType(e.name.value);
  }
}
class Zo {
  constructor(e, a, i) {
    this._schema = e, this._typeStack = [], this._parentTypeStack = [], this._inputTypeStack = [], this._fieldDefStack = [], this._defaultValueStack = [], this._directive = null, this._argument = null, this._enumValue = null, this._getFieldDef = i ?? S6, a && (Ku(a) && this._inputTypeStack.push(a), g0(a) && this._parentTypeStack.push(a), U0(a) && this._typeStack.push(a));
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
        const r = wu(this.getType());
        this._parentTypeStack.push(
          g0(r) ? r : void 0
        );
        break;
      }
      case p.FIELD: {
        const r = this.getParentType();
        let n, o;
        r && (n = this._getFieldDef(a, r, e), n && (o = n.type)), this._fieldDefStack.push(n), this._typeStack.push(U0(o) ? o : void 0);
        break;
      }
      case p.DIRECTIVE:
        this._directive = a.getDirective(e.name.value);
        break;
      case p.OPERATION_DEFINITION: {
        const r = a.getRootType(e.operation);
        this._typeStack.push(uu(r) ? r : void 0);
        break;
      }
      case p.INLINE_FRAGMENT:
      case p.FRAGMENT_DEFINITION: {
        const r = e.typeCondition, n = r ? Ru(a, r) : wu(this.getType());
        this._typeStack.push(U0(n) ? n : void 0);
        break;
      }
      case p.VARIABLE_DEFINITION: {
        const r = Ru(a, e.type);
        this._inputTypeStack.push(
          Ku(r) ? r : void 0
        );
        break;
      }
      case p.ARGUMENT: {
        var i;
        let r, n;
        const o = (i = this.getDirective()) !== null && i !== void 0 ? i : this.getFieldDef();
        o && (r = o.args.find(
          (t) => t.name === e.name.value
        ), r && (n = r.type)), this._argument = r, this._defaultValueStack.push(r ? r.defaultValue : void 0), this._inputTypeStack.push(Ku(n) ? n : void 0);
        break;
      }
      case p.LIST: {
        const r = jo(this.getInputType()), n = cu(r) ? r.ofType : r;
        this._defaultValueStack.push(void 0), this._inputTypeStack.push(Ku(n) ? n : void 0);
        break;
      }
      case p.OBJECT_FIELD: {
        const r = wu(this.getInputType());
        let n, o;
        du(r) && (o = r.getFields()[e.name.value], o && (n = o.type)), this._defaultValueStack.push(
          o ? o.defaultValue : void 0
        ), this._inputTypeStack.push(
          Ku(n) ? n : void 0
        );
        break;
      }
      case p.ENUM: {
        const r = wu(this.getInputType());
        let n;
        Cu(r) && (n = r.getValue(e.value)), this._enumValue = n;
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
function S6(u, e, a) {
  const i = a.name.value;
  if (i === ga.name && u.getQueryType() === e)
    return ga;
  if (i === Ca.name && u.getQueryType() === e)
    return Ca;
  if (i === va.name && g0(e))
    return va;
  if (uu(e) || au(e))
    return e.getFields()[i];
}
function Yo(u, e) {
  return {
    enter(...a) {
      const i = a[0];
      u.enter(i);
      const r = Le(e, i.kind).enter;
      if (r) {
        const n = r.apply(e, a);
        return n !== void 0 && (u.leave(i), Un(n) && u.enter(n)), n;
      }
    },
    leave(...a) {
      const i = a[0], r = Le(e, i.kind).leave;
      let n;
      return r && (n = r.apply(e, a)), u.leave(i), n;
    }
  };
}
function M6(u) {
  return Qo(u) || Xo(u) || ut(u);
}
function Qo(u) {
  return u.kind === p.OPERATION_DEFINITION || u.kind === p.FRAGMENT_DEFINITION;
}
function j6(u) {
  return u.kind === p.FIELD || u.kind === p.FRAGMENT_SPREAD || u.kind === p.INLINE_FRAGMENT;
}
function hl(u) {
  return u.kind === p.VARIABLE || u.kind === p.INT || u.kind === p.FLOAT || u.kind === p.STRING || u.kind === p.BOOLEAN || u.kind === p.NULL || u.kind === p.ENUM || u.kind === p.LIST || u.kind === p.OBJECT;
}
function Qn(u) {
  return hl(u) && (u.kind === p.LIST ? u.values.some(Qn) : u.kind === p.OBJECT ? u.fields.some((e) => Qn(e.value)) : u.kind !== p.VARIABLE);
}
function P6(u) {
  return u.kind === p.NAMED_TYPE || u.kind === p.LIST_TYPE || u.kind === p.NON_NULL_TYPE;
}
function Xo(u) {
  return u.kind === p.SCHEMA_DEFINITION || Ye(u) || u.kind === p.DIRECTIVE_DEFINITION;
}
function Ye(u) {
  return u.kind === p.SCALAR_TYPE_DEFINITION || u.kind === p.OBJECT_TYPE_DEFINITION || u.kind === p.INTERFACE_TYPE_DEFINITION || u.kind === p.UNION_TYPE_DEFINITION || u.kind === p.ENUM_TYPE_DEFINITION || u.kind === p.INPUT_OBJECT_TYPE_DEFINITION;
}
function ut(u) {
  return u.kind === p.SCHEMA_EXTENSION || hr(u);
}
function hr(u) {
  return u.kind === p.SCALAR_TYPE_EXTENSION || u.kind === p.OBJECT_TYPE_EXTENSION || u.kind === p.INTERFACE_TYPE_EXTENSION || u.kind === p.UNION_TYPE_EXTENSION || u.kind === p.ENUM_TYPE_EXTENSION || u.kind === p.INPUT_OBJECT_TYPE_EXTENSION;
}
function gl(u) {
  return {
    Document(e) {
      for (const a of e.definitions)
        if (!Qo(a)) {
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
function Cl(u) {
  return {
    Field(e) {
      const a = u.getParentType();
      if (a && !u.getFieldDef()) {
        const r = u.getSchema(), n = e.name.value;
        let o = j0(
          "to use an inline fragment on",
          T6(r, a, n)
        );
        o === "" && (o = j0(w6(a, n))), u.reportError(
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
function T6(u, e, a) {
  if (!F0(e))
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
    return s !== 0 ? s : au(o) && u.isSubType(o, t) ? -1 : au(t) && u.isSubType(t, o) ? 1 : La(o.name, t.name);
  }).map((o) => o.name);
}
function w6(u, e) {
  if (uu(u) || au(u)) {
    const a = Object.keys(u.getFields());
    return ue(e, a);
  }
  return [];
}
function vl(u) {
  return {
    InlineFragment(e) {
      const a = e.typeCondition;
      if (a) {
        const i = Ru(u.getSchema(), a);
        if (i && !g0(i)) {
          const r = xu(a);
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
      const a = Ru(u.getSchema(), e.typeCondition);
      if (a && !g0(a)) {
        const i = xu(e.typeCondition);
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
function bl(u) {
  return {
    // eslint-disable-next-line new-cap
    ...Al(u),
    Argument(e) {
      const a = u.getArgument(), i = u.getFieldDef(), r = u.getParentType();
      if (!a && i && r) {
        const n = e.name.value, o = i.args.map((s) => s.name), t = ue(n, o);
        u.reportError(
          new B(
            `Unknown argument "${n}" on field "${r.name}.${i.name}".` + j0(t),
            {
              nodes: e
            }
          )
        );
      }
    }
  };
}
function Al(u) {
  const e = /* @__PURE__ */ Object.create(null), a = u.getSchema(), i = a ? a.getDirectives() : ae;
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
            const D = ue(E, s);
            u.reportError(
              new B(
                `Unknown argument "${E}" on directive "@${t}".` + j0(D),
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
function et(u) {
  const e = /* @__PURE__ */ Object.create(null), a = u.getSchema(), i = a ? a.getDirectives() : ae;
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
      const x = N6(l);
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
function N6(u) {
  const e = u[u.length - 1];
  switch ("kind" in e || hu(!1), e.kind) {
    case p.OPERATION_DEFINITION:
      return L6(e.operation);
    case p.FIELD:
      return _.FIELD;
    case p.FRAGMENT_SPREAD:
      return _.FRAGMENT_SPREAD;
    case p.INLINE_FRAGMENT:
      return _.INLINE_FRAGMENT;
    case p.FRAGMENT_DEFINITION:
      return _.FRAGMENT_DEFINITION;
    case p.VARIABLE_DEFINITION:
      return _.VARIABLE_DEFINITION;
    case p.SCHEMA_DEFINITION:
    case p.SCHEMA_EXTENSION:
      return _.SCHEMA;
    case p.SCALAR_TYPE_DEFINITION:
    case p.SCALAR_TYPE_EXTENSION:
      return _.SCALAR;
    case p.OBJECT_TYPE_DEFINITION:
    case p.OBJECT_TYPE_EXTENSION:
      return _.OBJECT;
    case p.FIELD_DEFINITION:
      return _.FIELD_DEFINITION;
    case p.INTERFACE_TYPE_DEFINITION:
    case p.INTERFACE_TYPE_EXTENSION:
      return _.INTERFACE;
    case p.UNION_TYPE_DEFINITION:
    case p.UNION_TYPE_EXTENSION:
      return _.UNION;
    case p.ENUM_TYPE_DEFINITION:
    case p.ENUM_TYPE_EXTENSION:
      return _.ENUM;
    case p.ENUM_VALUE_DEFINITION:
      return _.ENUM_VALUE;
    case p.INPUT_OBJECT_TYPE_DEFINITION:
    case p.INPUT_OBJECT_TYPE_EXTENSION:
      return _.INPUT_OBJECT;
    case p.INPUT_VALUE_DEFINITION: {
      const a = u[u.length - 3];
      return "kind" in a || hu(!1), a.kind === p.INPUT_OBJECT_TYPE_DEFINITION ? _.INPUT_FIELD_DEFINITION : _.ARGUMENT_DEFINITION;
    }
    default:
      hu(!1, "Unexpected kind: " + S(e.kind));
  }
}
function L6(u) {
  switch (u) {
    case Bu.QUERY:
      return _.QUERY;
    case Bu.MUTATION:
      return _.MUTATION;
    case Bu.SUBSCRIPTION:
      return _.SUBSCRIPTION;
  }
}
function Bl(u) {
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
function at(u) {
  const e = u.getSchema(), a = e ? e.getTypeMap() : /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  for (const n of u.getDocument().definitions)
    Ye(n) && (i[n.name.value] = !0);
  const r = [
    ...Object.keys(a),
    ...Object.keys(i)
  ];
  return {
    NamedType(n, o, t, s, l) {
      const E = n.name.value;
      if (!a[E] && !i[E]) {
        var D;
        const x = (D = l[2]) !== null && D !== void 0 ? D : t, c = x != null && K6(x);
        if (c && G1.includes(E))
          return;
        const d = ue(
          E,
          c ? G1.concat(r) : r
        );
        u.reportError(
          new B(
            `Unknown type "${E}".` + j0(d),
            {
              nodes: n
            }
          )
        );
      }
    }
  };
}
const G1 = [...Ha, ...Ia].map(
  (u) => u.name
);
function K6(u) {
  return "kind" in u && (Xo(u) || ut(u));
}
function fl(u) {
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
function yl(u) {
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
function zl(u) {
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
function Sl(u) {
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
function Ml(u) {
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
function jl(u) {
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
function gr(u) {
  switch (u.kind) {
    case p.OBJECT:
      return { ...u, fields: R6(u.fields) };
    case p.LIST:
      return { ...u, values: u.values.map(gr) };
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
function R6(u) {
  return u.map((e) => ({
    ...e,
    value: gr(e.value)
  })).sort(
    (e, a) => La(e.name.value, a.name.value)
  );
}
function Pl(u) {
  return Array.isArray(u) ? u.map(
    ([e, a]) => `subfields "${e}" conflict because ` + Pl(a)
  ).join(" and ") : u;
}
function Tl(u) {
  const e = new I6(), a = /* @__PURE__ */ new Map();
  return {
    SelectionSet(i) {
      const r = _6(
        u,
        a,
        e,
        u.getParentType(),
        i
      );
      for (const [[n, o], t, s] of r) {
        const l = Pl(o);
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
function _6(u, e, a, i, r) {
  const n = [], [o, t] = Hi(
    u,
    e,
    i,
    r
  );
  if (G6(
    u,
    n,
    e,
    a,
    o
  ), t.length !== 0)
    for (let s = 0; s < t.length; s++) {
      Ri(
        u,
        n,
        e,
        a,
        !1,
        o,
        t[s]
      );
      for (let l = s + 1; l < t.length; l++)
        _i(
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
function Ri(u, e, a, i, r, n, o) {
  const t = u.getFragment(o);
  if (!t)
    return;
  const [s, l] = uo(
    u,
    a,
    t
  );
  if (n !== s) {
    it(
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
      ), Ri(
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
function _i(u, e, a, i, r, n, o) {
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
  const [l, E] = uo(
    u,
    a,
    t
  ), [D, x] = uo(
    u,
    a,
    s
  );
  it(
    u,
    e,
    a,
    i,
    r,
    l,
    D
  );
  for (const c of x)
    _i(
      u,
      e,
      a,
      i,
      r,
      n,
      c
    );
  for (const c of E)
    _i(
      u,
      e,
      a,
      i,
      r,
      c,
      o
    );
}
function H6(u, e, a, i, r, n, o, t) {
  const s = [], [l, E] = Hi(
    u,
    e,
    r,
    n
  ), [D, x] = Hi(
    u,
    e,
    o,
    t
  );
  it(
    u,
    s,
    e,
    a,
    i,
    l,
    D
  );
  for (const c of x)
    Ri(
      u,
      s,
      e,
      a,
      i,
      l,
      c
    );
  for (const c of E)
    Ri(
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
      _i(
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
function G6(u, e, a, i, r) {
  for (const [n, o] of Object.entries(r))
    if (o.length > 1)
      for (let t = 0; t < o.length; t++)
        for (let s = t + 1; s < o.length; s++) {
          const l = wl(
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
function it(u, e, a, i, r, n, o) {
  for (const [t, s] of Object.entries(n)) {
    const l = o[t];
    if (l)
      for (const E of s)
        for (const D of l) {
          const x = wl(
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
function wl(u, e, a, i, r, n, o) {
  const [t, s, l] = n, [E, D, x] = o, c = i || t !== E && uu(t) && uu(E);
  if (!c) {
    const P = s.name.value, A = D.name.value;
    if (P !== A)
      return [
        [r, `"${P}" and "${A}" are different fields`],
        [s],
        [D]
      ];
    if (V1(s) !== V1(D))
      return [
        [r, "they have differing arguments"],
        [s],
        [D]
      ];
  }
  const d = l == null ? void 0 : l.type, m = x == null ? void 0 : x.type;
  if (d && m && Xn(d, m))
    return [
      [
        r,
        `they return conflicting types "${S(d)}" and "${S(
          m
        )}"`
      ],
      [s],
      [D]
    ];
  const k = s.selectionSet, g = D.selectionSet;
  if (k && g) {
    const P = H6(
      u,
      e,
      a,
      c,
      wu(d),
      k,
      wu(m),
      g
    );
    return V6(P, r, s, D);
  }
}
function V1(u) {
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
  return xu(gr(i));
}
function Xn(u, e) {
  return cu(u) ? cu(e) ? Xn(u.ofType, e.ofType) : !0 : cu(e) ? !0 : J(u) ? J(e) ? Xn(u.ofType, e.ofType) : !0 : J(e) ? !0 : h0(u) || h0(e) ? u !== e : !1;
}
function Hi(u, e, a, i) {
  const r = e.get(i);
  if (r)
    return r;
  const n = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  Nl(
    u,
    a,
    i,
    n,
    o
  );
  const t = [n, Object.keys(o)];
  return e.set(i, t), t;
}
function uo(u, e, a) {
  const i = e.get(a.selectionSet);
  if (i)
    return i;
  const r = Ru(u.getSchema(), a.typeCondition);
  return Hi(
    u,
    e,
    r,
    a.selectionSet
  );
}
function Nl(u, e, a, i, r) {
  for (const n of a.selections)
    switch (n.kind) {
      case p.FIELD: {
        const o = n.name.value;
        let t;
        (uu(e) || au(e)) && (t = e.getFields()[o]);
        const s = n.alias ? n.alias.value : o;
        i[s] || (i[s] = []), i[s].push([e, n, t]);
        break;
      }
      case p.FRAGMENT_SPREAD:
        r[n.name.value] = !0;
        break;
      case p.INLINE_FRAGMENT: {
        const o = n.typeCondition, t = o ? Ru(u.getSchema(), o) : e;
        Nl(
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
function V6(u, e, a, i) {
  if (u.length > 0)
    return [
      [e, u.map(([r]) => r)],
      [a, ...u.map(([, r]) => r).flat()],
      [i, ...u.map(([, , r]) => r).flat()]
    ];
}
class I6 {
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
function Ll(u) {
  return {
    InlineFragment(e) {
      const a = u.getType(), i = u.getParentType();
      if (g0(a) && g0(i) && !Yn(u.getSchema(), a, i)) {
        const r = S(i), n = S(a);
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
      const a = e.name.value, i = O6(u, a), r = u.getParentType();
      if (i && r && !Yn(u.getSchema(), i, r)) {
        const n = S(r), o = S(i);
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
function O6(u, e) {
  const a = u.getFragment(e);
  if (a) {
    const i = Ru(u.getSchema(), a.typeCondition);
    if (g0(i))
      return i;
  }
}
function Kl(u) {
  const e = u.getSchema(), a = /* @__PURE__ */ Object.create(null);
  for (const r of u.getDocument().definitions)
    Ye(r) && (a[r.name.value] = r);
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
    if (o ? s = J6[o.kind] : t && (s = $6(t)), s) {
      if (s !== r.kind) {
        const l = q6(r.kind);
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
      }), E = ue(n, l);
      u.reportError(
        new B(
          `Cannot extend type "${n}" because it is not defined.` + j0(E),
          {
            nodes: r.name
          }
        )
      );
    }
  }
}
const J6 = {
  [p.SCALAR_TYPE_DEFINITION]: p.SCALAR_TYPE_EXTENSION,
  [p.OBJECT_TYPE_DEFINITION]: p.OBJECT_TYPE_EXTENSION,
  [p.INTERFACE_TYPE_DEFINITION]: p.INTERFACE_TYPE_EXTENSION,
  [p.UNION_TYPE_DEFINITION]: p.UNION_TYPE_EXTENSION,
  [p.ENUM_TYPE_DEFINITION]: p.ENUM_TYPE_EXTENSION,
  [p.INPUT_OBJECT_TYPE_DEFINITION]: p.INPUT_OBJECT_TYPE_EXTENSION
};
function $6(u) {
  if (Yu(u))
    return p.SCALAR_TYPE_EXTENSION;
  if (uu(u))
    return p.OBJECT_TYPE_EXTENSION;
  if (au(u))
    return p.INTERFACE_TYPE_EXTENSION;
  if (fu(u))
    return p.UNION_TYPE_EXTENSION;
  if (Cu(u))
    return p.ENUM_TYPE_EXTENSION;
  if (du(u))
    return p.INPUT_OBJECT_TYPE_EXTENSION;
  hu(!1, "Unexpected type: " + S(u));
}
function q6(u) {
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
      hu(!1, "Unexpected kind: " + S(u));
  }
}
function Rl(u) {
  return {
    // eslint-disable-next-line new-cap
    ..._l(u),
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
          if (!r.has(n.name) && ee(n)) {
            const o = S(n.type);
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
function _l(u) {
  var e;
  const a = /* @__PURE__ */ Object.create(null), i = u.getSchema(), r = (e = i == null ? void 0 : i.getDirectives()) !== null && e !== void 0 ? e : ae;
  for (const t of r)
    a[t.name] = P0(
      t.args.filter(ee),
      (s) => s.name
    );
  const n = u.getDocument().definitions;
  for (const t of n)
    if (t.kind === p.DIRECTIVE_DEFINITION) {
      var o;
      const s = (o = t.arguments) !== null && o !== void 0 ? o : [];
      a[t.name.value] = P0(
        s.filter(U6),
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
              const m = Ka(d.type) ? S(d.type) : xu(d.type);
              u.reportError(
                new B(
                  `Directive "@${s}" argument "${c}" of type "${m}" is required, but it was not provided.`,
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
function U6(u) {
  return u.type.kind === p.NON_NULL_TYPE && u.defaultValue == null;
}
function Hl(u) {
  return {
    Field(e) {
      const a = u.getType(), i = e.selectionSet;
      if (a) {
        if (h0(wu(a))) {
          if (i) {
            const r = e.name.value, n = S(a);
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
          const r = e.name.value, n = S(a);
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
function Gl(u) {
  return u.map(
    (e) => typeof e == "number" ? "[" + e.toString() + "]" : "." + e
  ).join("");
}
function He(u, e, a) {
  return {
    prev: u,
    key: e,
    typename: a
  };
}
function $u(u) {
  const e = [];
  let a = u;
  for (; a; )
    e.push(a.key), a = a.prev;
  return e.reverse();
}
function Vl(u, e, a = W6) {
  return la(u, e, a, void 0);
}
function W6(u, e, a) {
  let i = "Invalid value " + S(e);
  throw u.length > 0 && (i += ` at "value${Gl(u)}"`), a.message = i + ": " + a.message, a;
}
function la(u, e, a, i) {
  if (J(e)) {
    if (u != null)
      return la(u, e.ofType, a, i);
    a(
      $u(i),
      u,
      new B(
        `Expected non-nullable type "${S(e)}" not to be null.`
      )
    );
    return;
  }
  if (u == null)
    return null;
  if (cu(e)) {
    const r = e.ofType;
    return Ho(u) ? Array.from(u, (n, o) => {
      const t = He(i, o, void 0);
      return la(n, r, a, t);
    }) : [la(u, r, a, i)];
  }
  if (du(e)) {
    if (!Wu(u)) {
      a(
        $u(i),
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
        else if (J(o.type)) {
          const s = S(o.type);
          a(
            $u(i),
            u,
            new B(
              `Field "${o.name}" of required type "${s}" was not provided.`
            )
          );
        }
        continue;
      }
      r[o.name] = la(
        t,
        o.type,
        a,
        He(i, o.name, e.name)
      );
    }
    for (const o of Object.keys(u))
      if (!n[o]) {
        const t = ue(
          o,
          Object.keys(e.getFields())
        );
        a(
          $u(i),
          u,
          new B(
            `Field "${o}" is not defined by type "${e.name}".` + j0(t)
          )
        );
      }
    return r;
  }
  if (h0(e)) {
    let r;
    try {
      r = e.parseValue(u);
    } catch (n) {
      n instanceof B ? a($u(i), u, n) : a(
        $u(i),
        u,
        new B(`Expected type "${e.name}". ` + n.message, {
          originalError: n
        })
      );
      return;
    }
    return r === void 0 && a(
      $u(i),
      u,
      new B(`Expected type "${e.name}".`)
    ), r;
  }
  hu(!1, "Unexpected input type: " + S(e));
}
function m0(u, e, a) {
  if (u) {
    if (u.kind === p.VARIABLE) {
      const i = u.name.value;
      if (a == null || a[i] === void 0)
        return;
      const r = a[i];
      return r === null && J(e) ? void 0 : r;
    }
    if (J(e))
      return u.kind === p.NULL ? void 0 : m0(u, e.ofType, a);
    if (u.kind === p.NULL)
      return null;
    if (cu(e)) {
      const i = e.ofType;
      if (u.kind === p.LIST) {
        const n = [];
        for (const o of u.values)
          if (I1(o, a)) {
            if (J(i))
              return;
            n.push(null);
          } else {
            const t = m0(o, i, a);
            if (t === void 0)
              return;
            n.push(t);
          }
        return n;
      }
      const r = m0(u, i, a);
      return r === void 0 ? void 0 : [r];
    }
    if (du(e)) {
      if (u.kind !== p.OBJECT)
        return;
      const i = /* @__PURE__ */ Object.create(null), r = P0(u.fields, (n) => n.name.value);
      for (const n of Object.values(e.getFields())) {
        const o = r[n.name];
        if (!o || I1(o.value, a)) {
          if (n.defaultValue !== void 0)
            i[n.name] = n.defaultValue;
          else if (J(n.type))
            return;
          continue;
        }
        const t = m0(o.value, n.type, a);
        if (t === void 0)
          return;
        i[n.name] = t;
      }
      return i;
    }
    if (h0(e)) {
      let i;
      try {
        i = e.parseLiteral(u, a);
      } catch {
        return;
      }
      return i === void 0 ? void 0 : i;
    }
    hu(!1, "Unexpected input type: " + S(e));
  }
}
function I1(u, e) {
  return u.kind === p.VARIABLE && (e == null || e[u.name.value] === void 0);
}
function Il(u, e, a, i) {
  const r = [], n = i == null ? void 0 : i.maxErrors;
  try {
    const o = Z6(
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
function Z6(u, e, a, i) {
  const r = {};
  for (const n of e) {
    const o = n.variable.name.value, t = Ru(u, n.type);
    if (!Ku(t)) {
      const l = xu(n.type);
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
    if (!Ol(a, o)) {
      if (n.defaultValue)
        r[o] = m0(n.defaultValue, t);
      else if (J(t)) {
        const l = S(t);
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
    if (s === null && J(t)) {
      const l = S(t);
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
    r[o] = Vl(
      s,
      t,
      (l, E, D) => {
        let x = `Variable "$${o}" got invalid value ` + S(E);
        l.length > 0 && (x += ` at "${o}${Gl(l)}"`), i(
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
function Cr(u, e, a) {
  var i;
  const r = {}, n = (i = e.arguments) !== null && i !== void 0 ? i : [], o = P0(n, (t) => t.name.value);
  for (const t of u.args) {
    const s = t.name, l = t.type, E = o[s];
    if (!E) {
      if (t.defaultValue !== void 0)
        r[s] = t.defaultValue;
      else if (J(l))
        throw new B(
          `Argument "${s}" of required type "${S(l)}" was not provided.`,
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
      if (a == null || !Ol(a, d)) {
        if (t.defaultValue !== void 0)
          r[s] = t.defaultValue;
        else if (J(l))
          throw new B(
            `Argument "${s}" of required type "${S(l)}" was provided the variable "$${d}" which was not provided a runtime value.`,
            {
              nodes: D
            }
          );
        continue;
      }
      x = a[d] == null;
    }
    if (x && J(l))
      throw new B(
        `Argument "${s}" of non-null type "${S(l)}" must not be null.`,
        {
          nodes: D
        }
      );
    const c = m0(D, l, a);
    if (c === void 0)
      throw new B(
        `Argument "${s}" has invalid value ${xu(D)}.`,
        {
          nodes: D
        }
      );
    r[s] = c;
  }
  return r;
}
function ba(u, e, a) {
  var i;
  const r = (i = e.directives) === null || i === void 0 ? void 0 : i.find(
    (n) => n.name.value === u.name
  );
  if (r)
    return Cr(u, r, a);
}
function Ol(u, e) {
  return Object.prototype.hasOwnProperty.call(u, e);
}
function rt(u, e, a, i, r) {
  const n = /* @__PURE__ */ new Map();
  return Gi(
    u,
    e,
    a,
    i,
    r,
    n,
    /* @__PURE__ */ new Set()
  ), n;
}
function Y6(u, e, a, i, r) {
  const n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
  for (const t of r)
    t.selectionSet && Gi(
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
function Gi(u, e, a, i, r, n, o) {
  for (const t of r.selections)
    switch (t.kind) {
      case p.FIELD: {
        if (!Sn(a, t))
          continue;
        const s = Q6(t), l = n.get(s);
        l !== void 0 ? l.push(t) : n.set(s, [t]);
        break;
      }
      case p.INLINE_FRAGMENT: {
        if (!Sn(a, t) || !O1(u, t, i))
          continue;
        Gi(
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
        if (o.has(s) || !Sn(a, t))
          continue;
        o.add(s);
        const l = e[s];
        if (!l || !O1(u, l, i))
          continue;
        Gi(
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
function Sn(u, e) {
  const a = ba(Lo, e, u);
  if ((a == null ? void 0 : a.if) === !0)
    return !1;
  const i = ba(
    No,
    e,
    u
  );
  return (i == null ? void 0 : i.if) !== !1;
}
function O1(u, e, a) {
  const i = e.typeCondition;
  if (!i)
    return !0;
  const r = Ru(u, i);
  return r === a ? !0 : F0(r) ? u.isSubType(r, a) : !1;
}
function Q6(u) {
  return u.alias ? u.alias.value : u.name.value;
}
function Jl(u) {
  return {
    OperationDefinition(e) {
      if (e.operation === "subscription") {
        const a = u.getSchema(), i = a.getSubscriptionType();
        if (i) {
          const r = e.name ? e.name.value : null, n = /* @__PURE__ */ Object.create(null), o = u.getDocument(), t = /* @__PURE__ */ Object.create(null);
          for (const l of o.definitions)
            l.kind === p.FRAGMENT_DEFINITION && (t[l.name.value] = l);
          const s = rt(
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
function nt(u, e) {
  const a = /* @__PURE__ */ new Map();
  for (const i of u) {
    const r = e(i), n = a.get(r);
    n === void 0 ? a.set(r, [i]) : n.push(i);
  }
  return a;
}
function $l(u) {
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
    const n = nt(r, (o) => o.name.value);
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
function ot(u) {
  return {
    Field: e,
    Directive: e
  };
  function e(a) {
    var i;
    const r = (i = a.arguments) !== null && i !== void 0 ? i : [], n = nt(r, (o) => o.name.value);
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
function ql(u) {
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
function tt(u) {
  const e = /* @__PURE__ */ Object.create(null), a = u.getSchema(), i = a ? a.getDirectives() : ae;
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
      else if (Ye(t) || hr(t)) {
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
function Ul(u) {
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
      Cu(x) && x.getValue(D) ? u.reportError(
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
function Wl(u) {
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
      X6(a[t], D) ? u.reportError(
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
function X6(u, e) {
  return uu(u) || au(u) || du(u) ? u.getFields()[e] != null : !1;
}
function Zl(u) {
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
function st(u) {
  const e = [];
  let a = /* @__PURE__ */ Object.create(null);
  return {
    ObjectValue: {
      enter() {
        e.push(a), a = /* @__PURE__ */ Object.create(null);
      },
      leave() {
        const i = e.pop();
        i || hu(!1), a = i;
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
function Yl(u) {
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
function Ql(u) {
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
function Xl(u) {
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
function u3(u) {
  return {
    OperationDefinition(e) {
      var a;
      const i = (a = e.variableDefinitions) !== null && a !== void 0 ? a : [], r = nt(
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
function e3(u) {
  return {
    ListValue(e) {
      const a = jo(u.getParentInputType());
      if (!cu(a))
        return re(u, e), !1;
    },
    ObjectValue(e) {
      const a = wu(u.getInputType());
      if (!du(a))
        return re(u, e), !1;
      const i = P0(e.fields, (r) => r.name.value);
      for (const r of Object.values(a.getFields()))
        if (!i[r.name] && dr(r)) {
          const o = S(r.type);
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
      const a = wu(u.getParentInputType());
      if (!u.getInputType() && du(a)) {
        const r = ue(
          e.name.value,
          Object.keys(a.getFields())
        );
        u.reportError(
          new B(
            `Field "${e.name.value}" is not defined by type "${a.name}".` + j0(r),
            {
              nodes: e
            }
          )
        );
      }
    },
    NullValue(e) {
      const a = u.getInputType();
      J(a) && u.reportError(
        new B(
          `Expected value of type "${S(a)}", found ${xu(e)}.`,
          {
            nodes: e
          }
        )
      );
    },
    EnumValue: (e) => re(u, e),
    IntValue: (e) => re(u, e),
    FloatValue: (e) => re(u, e),
    StringValue: (e) => re(u, e),
    BooleanValue: (e) => re(u, e)
  };
}
function re(u, e) {
  const a = u.getInputType();
  if (!a)
    return;
  const i = wu(a);
  if (!h0(i)) {
    const r = S(a);
    u.reportError(
      new B(
        `Expected value of type "${r}", found ${xu(e)}.`,
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
      const n = S(a);
      u.reportError(
        new B(
          `Expected value of type "${n}", found ${xu(e)}.`,
          {
            nodes: e
          }
        )
      );
    }
  } catch (r) {
    const n = S(a);
    r instanceof B ? u.reportError(r) : u.reportError(
      new B(
        `Expected value of type "${n}", found ${xu(e)}; ` + r.message,
        {
          nodes: e,
          originalError: r
        }
      )
    );
  }
}
function a3(u) {
  return {
    VariableDefinition(e) {
      const a = Ru(u.getSchema(), e.type);
      if (a !== void 0 && !Ku(a)) {
        const i = e.variable.name.value, r = xu(e.type);
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
function i3(u) {
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
            const l = u.getSchema(), E = Ru(l, s.type);
            if (E && !um(
              l,
              E,
              s.defaultValue,
              n,
              o
            )) {
              const D = S(E), x = S(n);
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
function um(u, e, a, i, r) {
  if (J(i) && !J(e)) {
    if (!(a != null && a.kind !== p.NULL) && !(r !== void 0))
      return !1;
    const t = i.ofType;
    return le(u, e, t);
  }
  return le(u, e, i);
}
const r3 = Object.freeze([
  gl,
  Yl,
  fl,
  Jl,
  at,
  vl,
  a3,
  Hl,
  Cl,
  Zl,
  Bl,
  Ml,
  Ll,
  zl,
  u3,
  Sl,
  jl,
  et,
  tt,
  bl,
  ot,
  e3,
  Rl,
  i3,
  Tl,
  st
]), em = Object.freeze([
  yl,
  Ql,
  Xl,
  Ul,
  Wl,
  $l,
  ql,
  at,
  et,
  tt,
  Kl,
  Al,
  ot,
  st,
  _l
]);
class n3 {
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
class am extends n3 {
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
class o3 extends n3 {
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
      const i = [], r = new Zo(this._schema);
      We(
        e,
        Yo(r, {
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
function t3(u, e, a = r3, i, r = new Zo(u)) {
  var n;
  const o = (n = i == null ? void 0 : i.maxErrors) !== null && n !== void 0 ? n : 100;
  e || Y(!1, "Must provide document."), Uo(u);
  const t = Object.freeze({}), s = [], l = new o3(
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
  ), E = So(a.map((D) => D(l)));
  try {
    We(e, Yo(r, E));
  } catch (D) {
    if (D !== t)
      throw D;
  }
  return s;
}
function s3(u, e, a = em) {
  const i = [], r = new am(
    u,
    e,
    (o) => {
      i.push(o);
    }
  ), n = a.map((o) => o(r));
  return We(u, So(n)), i;
}
function im(u) {
  const e = s3(u);
  if (e.length !== 0)
    throw new Error(e.map((a) => a.message).join(`

`));
}
function rm(u, e) {
  const a = s3(u, e);
  if (a.length !== 0)
    throw new Error(a.map((i) => i.message).join(`

`));
}
function nm(u) {
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
function om(u) {
  return Promise.all(Object.values(u)).then((e) => {
    const a = /* @__PURE__ */ Object.create(null);
    for (const [i, r] of Object.keys(u).entries())
      a[r] = e[i];
    return a;
  });
}
function tm(u, e, a) {
  let i = a;
  for (const r of u)
    i = Uu(i) ? i.then((n) => e(n, r)) : e(i, r);
  return i;
}
function sm(u) {
  return u instanceof Error ? u : new lm(u);
}
class lm extends Error {
  constructor(e) {
    super("Unexpected error value: " + S(e)), this.name = "NonErrorThrown", this.thrownValue = e;
  }
}
function Ge(u, e, a) {
  var i;
  const r = sm(u);
  return Em(r) ? r : new B(r.message, {
    nodes: (i = r.nodes) !== null && i !== void 0 ? i : e,
    source: r.source,
    positions: r.positions,
    path: a,
    originalError: r
  });
}
function Em(u) {
  return Array.isArray(u.path);
}
const Dm = nm(
  (u, e, a) => Y6(
    u.schema,
    u.fragments,
    u.variableValues,
    e,
    a
  )
);
function vr(u) {
  arguments.length < 2 || Y(
    !1,
    "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead."
  );
  const { schema: e, document: a, variableValues: i, rootValue: r } = u;
  E3(e, a, i);
  const n = D3(u);
  if (!("schema" in n))
    return {
      errors: n
    };
  try {
    const { operation: o } = n, t = xm(n, o, r);
    return Uu(t) ? t.then(
      (s) => Di(s, n.errors),
      (s) => (n.errors.push(s), Di(null, n.errors))
    ) : Di(t, n.errors);
  } catch (o) {
    return n.errors.push(o), Di(null, n.errors);
  }
}
function l3(u) {
  const e = vr(u);
  if (Uu(e))
    throw new Error("GraphQL execution failed to complete synchronously.");
  return e;
}
function Di(u, e) {
  return e.length === 0 ? {
    data: u
  } : {
    errors: e,
    data: u
  };
}
function E3(u, e, a) {
  e || Y(!1, "Must provide document."), Uo(u), a == null || Wu(a) || Y(
    !1,
    "Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided."
  );
}
function D3(u) {
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
  const d = (a = x.variableDefinitions) !== null && a !== void 0 ? a : [], m = Il(
    i,
    d,
    t ?? {},
    {
      maxErrors: 50
    }
  );
  return m.errors ? m.errors : {
    schema: i,
    fragments: c,
    rootValue: n,
    contextValue: o,
    operation: x,
    variableValues: m.coerced,
    fieldResolver: l ?? ao,
    typeResolver: E ?? d3,
    subscribeFieldResolver: D ?? ao,
    errors: []
  };
}
function xm(u, e, a) {
  const i = u.schema.getRootType(e.operation);
  if (i == null)
    throw new B(
      `Schema is not configured to execute ${e.operation} operation.`,
      {
        nodes: e
      }
    );
  const r = rt(
    u.schema,
    u.fragments,
    u.variableValues,
    i,
    e.selectionSet
  ), n = void 0;
  switch (e.operation) {
    case Bu.QUERY:
      return Vi(u, i, a, n, r);
    case Bu.MUTATION:
      return cm(
        u,
        i,
        a,
        n,
        r
      );
    case Bu.SUBSCRIPTION:
      return Vi(u, i, a, n, r);
  }
}
function cm(u, e, a, i, r) {
  return tm(
    r.entries(),
    (n, [o, t]) => {
      const s = He(i, o, e.name), l = x3(
        u,
        e,
        a,
        t,
        s
      );
      return l === void 0 ? n : Uu(l) ? l.then((E) => (n[o] = E, n)) : (n[o] = l, n);
    },
    /* @__PURE__ */ Object.create(null)
  );
}
function Vi(u, e, a, i, r) {
  const n = /* @__PURE__ */ Object.create(null);
  let o = !1;
  for (const [t, s] of r.entries()) {
    const l = He(i, t, e.name), E = x3(
      u,
      e,
      a,
      s,
      l
    );
    E !== void 0 && (n[t] = E, Uu(E) && (o = !0));
  }
  return o ? om(n) : n;
}
function x3(u, e, a, i, r) {
  var n;
  const o = m3(u.schema, e, i[0]);
  if (!o)
    return;
  const t = o.type, s = (n = o.resolve) !== null && n !== void 0 ? n : u.fieldResolver, l = c3(
    u,
    o,
    i,
    e,
    r
  );
  try {
    const E = Cr(
      o,
      i[0],
      u.variableValues
    ), D = u.contextValue, x = s(a, E, D, l);
    let c;
    return Uu(x) ? c = x.then(
      (d) => Aa(u, t, i, l, r, d)
    ) : c = Aa(
      u,
      t,
      i,
      l,
      r,
      x
    ), Uu(c) ? c.then(void 0, (d) => {
      const m = Ge(d, i, $u(r));
      return Ii(m, t, u);
    }) : c;
  } catch (E) {
    const D = Ge(E, i, $u(r));
    return Ii(D, t, u);
  }
}
function c3(u, e, a, i, r) {
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
function Ii(u, e, a) {
  if (J(e))
    throw u;
  return a.errors.push(u), null;
}
function Aa(u, e, a, i, r, n) {
  if (n instanceof Error)
    throw n;
  if (J(e)) {
    const o = Aa(
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
  if (cu(e))
    return dm(
      u,
      e,
      a,
      i,
      r,
      n
    );
  if (h0(e))
    return mm(e, n);
  if (F0(e))
    return Fm(
      u,
      e,
      a,
      i,
      r,
      n
    );
  if (uu(e))
    return eo(
      u,
      e,
      a,
      i,
      r,
      n
    );
  hu(
    !1,
    "Cannot complete value of unexpected output type: " + S(e)
  );
}
function dm(u, e, a, i, r, n) {
  if (!Ho(n))
    throw new B(
      `Expected Iterable, but did not find one for field "${i.parentType.name}.${i.fieldName}".`
    );
  const o = e.ofType;
  let t = !1;
  const s = Array.from(n, (l, E) => {
    const D = He(r, E, void 0);
    try {
      let x;
      return Uu(l) ? x = l.then(
        (c) => Aa(
          u,
          o,
          a,
          i,
          D,
          c
        )
      ) : x = Aa(
        u,
        o,
        a,
        i,
        D,
        l
      ), Uu(x) ? (t = !0, x.then(void 0, (c) => {
        const d = Ge(
          c,
          a,
          $u(D)
        );
        return Ii(d, o, u);
      })) : x;
    } catch (x) {
      const c = Ge(x, a, $u(D));
      return Ii(c, o, u);
    }
  });
  return t ? Promise.all(s) : s;
}
function mm(u, e) {
  const a = u.serialize(e);
  if (a == null)
    throw new Error(
      `Expected \`${S(u)}.serialize(${S(e)})\` to return non-nullable value, returned: ${S(a)}`
    );
  return a;
}
function Fm(u, e, a, i, r, n) {
  var o;
  const t = (o = e.resolveType) !== null && o !== void 0 ? o : u.typeResolver, s = u.contextValue, l = t(n, s, i, e);
  return Uu(l) ? l.then(
    (E) => eo(
      u,
      J1(
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
  ) : eo(
    u,
    J1(
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
function J1(u, e, a, i, r, n) {
  if (u == null)
    throw new B(
      `Abstract type "${a.name}" must resolve to an Object type at runtime for field "${r.parentType.name}.${r.fieldName}". Either the "${a.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`,
      i
    );
  if (uu(u))
    throw new B(
      "Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead."
    );
  if (typeof u != "string")
    throw new B(
      `Abstract type "${a.name}" must resolve to an Object type at runtime for field "${r.parentType.name}.${r.fieldName}" with value ${S(n)}, received "${S(u)}".`
    );
  const o = e.schema.getType(u);
  if (o == null)
    throw new B(
      `Abstract type "${a.name}" was resolved to a type "${u}" that does not exist inside the schema.`,
      {
        nodes: i
      }
    );
  if (!uu(o))
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
function eo(u, e, a, i, r, n) {
  const o = Dm(u, e, a);
  if (e.isTypeOf) {
    const t = e.isTypeOf(n, u.contextValue, i);
    if (Uu(t))
      return t.then((s) => {
        if (!s)
          throw $1(e, n, a);
        return Vi(
          u,
          e,
          n,
          r,
          o
        );
      });
    if (!t)
      throw $1(e, n, a);
  }
  return Vi(u, e, n, r, o);
}
function $1(u, e, a) {
  return new B(
    `Expected value of type "${u.name}" but got: ${S(e)}.`,
    {
      nodes: a
    }
  );
}
const d3 = function(u, e, a, i) {
  if (Wu(u) && typeof u.__typename == "string")
    return u.__typename;
  const r = a.schema.getPossibleTypes(i), n = [];
  for (let o = 0; o < r.length; o++) {
    const t = r[o];
    if (t.isTypeOf) {
      const s = t.isTypeOf(u, e, a);
      if (Uu(s))
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
}, ao = function(u, e, a, i) {
  if (Wu(u) || typeof u == "function") {
    const r = u[i.fieldName];
    return typeof r == "function" ? u[i.fieldName](e, a, i) : r;
  }
};
function m3(u, e, a) {
  const i = a.name.value;
  return i === ga.name && u.getQueryType() === e ? ga : i === Ca.name && u.getQueryType() === e ? Ca : i === va.name ? va : e.getFields()[i];
}
function km(u) {
  return new Promise((e) => e(F3(u)));
}
function pm(u) {
  const e = F3(u);
  if (Uu(e))
    throw new Error("GraphQL execution failed to complete synchronously.");
  return e;
}
function F3(u) {
  arguments.length < 2 || Y(
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
  } = u, l = qo(e);
  if (l.length > 0)
    return {
      errors: l
    };
  let E;
  try {
    E = Na(a);
  } catch (x) {
    return {
      errors: [x]
    };
  }
  const D = t3(e, E);
  return D.length > 0 ? {
    errors: D
  } : vr({
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
function k3(u) {
  return typeof (u == null ? void 0 : u[Symbol.asyncIterator]) == "function";
}
function hm(u, e) {
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
async function gm(u) {
  arguments.length < 2 || Y(
    !1,
    "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead."
  );
  const e = await p3(u);
  return k3(e) ? hm(e, (i) => vr({ ...u, rootValue: i })) : e;
}
function Cm(u) {
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
async function p3(...u) {
  const e = Cm(u), { schema: a, document: i, variableValues: r } = e;
  E3(a, i, r);
  const n = D3(e);
  if (!("schema" in n))
    return {
      errors: n
    };
  try {
    const o = await vm(n);
    if (!k3(o))
      throw new Error(
        `Subscription field must return Async Iterable. Received: ${S(o)}.`
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
async function vm(u) {
  const { schema: e, fragments: a, operation: i, variableValues: r, rootValue: n } = u, o = e.getSubscriptionType();
  if (o == null)
    throw new B(
      "Schema is not configured to execute subscription operation.",
      {
        nodes: i
      }
    );
  const t = rt(
    e,
    a,
    r,
    o,
    i.selectionSet
  ), [s, l] = [...t.entries()][0], E = m3(e, o, l[0]);
  if (!E) {
    const d = l[0].name.value;
    throw new B(
      `The subscription field "${d}" is not defined.`,
      {
        nodes: l
      }
    );
  }
  const D = He(void 0, s, o.name), x = c3(
    u,
    E,
    l,
    o,
    D
  );
  try {
    var c;
    const d = Cr(E, l[0], r), m = u.contextValue, g = await ((c = E.subscribe) !== null && c !== void 0 ? c : u.subscribeFieldResolver)(n, d, m, x);
    if (g instanceof Error)
      throw g;
    return g;
  } catch (d) {
    throw Ge(d, l, $u(D));
  }
}
function bm(u) {
  return {
    Field(e) {
      const a = u.getFieldDef(), i = a == null ? void 0 : a.deprecationReason;
      if (a && i != null) {
        const r = u.getParentType();
        r != null || hu(!1), u.reportError(
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
          n != null && o != null || hu(!1), u.reportError(
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
      const a = wu(u.getParentInputType());
      if (du(a)) {
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
        const r = wu(u.getInputType());
        r != null || hu(!1), u.reportError(
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
function Am(u) {
  return {
    Field(e) {
      const a = wu(u.getType());
      a && pe(a) && u.reportError(
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
function h3(u) {
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
function Bm(u, e) {
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
function fm(u, e) {
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
function ym(u, e) {
  const a = {
    specifiedByUrl: !0,
    directiveIsRepeatable: !0,
    schemaDescription: !0,
    inputValueDeprecation: !0,
    ...e
  }, i = Na(h3(a)), r = l3({
    schema: u,
    document: i
  });
  return !r.errors && r.data || hu(!1), r.data;
}
function zm(u, e) {
  Wu(u) && Wu(u.__schema) || Y(
    !1,
    `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${S(
      u
    )}.`
  );
  const a = u.__schema, i = $0(
    a.types,
    (b) => b.name,
    (b) => x(b)
  );
  for (const b of [...Ha, ...Ia])
    i[b.name] && (i[b.name] = b);
  const r = a.queryType ? E(a.queryType) : null, n = a.mutationType ? E(a.mutationType) : null, o = a.subscriptionType ? E(a.subscriptionType) : null, t = a.directives ? a.directives.map(O) : [];
  return new Ze({
    description: a.description,
    query: r,
    mutation: n,
    subscription: o,
    types: Object.values(i),
    directives: t,
    assumeValid: e == null ? void 0 : e.assumeValid
  });
  function s(b) {
    if (b.kind === tu.LIST) {
      const w = b.ofType;
      if (!w)
        throw new Error("Decorated type deeper than introspection query.");
      return new ju(s(w));
    }
    if (b.kind === tu.NON_NULL) {
      const w = b.ofType;
      if (!w)
        throw new Error("Decorated type deeper than introspection query.");
      const G = s(w);
      return new Z(El(G));
    }
    return l(b);
  }
  function l(b) {
    const w = b.name;
    if (!w)
      throw new Error(`Unknown type reference: ${S(b)}.`);
    const G = i[w];
    if (!G)
      throw new Error(
        `Invalid or incomplete schema, unknown type: ${w}. Ensure that a full introspection query is used in order to build a client schema.`
      );
    return G;
  }
  function E(b) {
    return sl(l(b));
  }
  function D(b) {
    return ll(l(b));
  }
  function x(b) {
    if (b != null && b.name != null && b.kind != null)
      switch (b.kind) {
        case tu.SCALAR:
          return c(b);
        case tu.OBJECT:
          return m(b);
        case tu.INTERFACE:
          return k(b);
        case tu.UNION:
          return g(b);
        case tu.ENUM:
          return P(b);
        case tu.INPUT_OBJECT:
          return A(b);
      }
    const w = S(b);
    throw new Error(
      `Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${w}.`
    );
  }
  function c(b) {
    return new C0({
      name: b.name,
      description: b.description,
      specifiedByURL: b.specifiedByURL
    });
  }
  function d(b) {
    if (b.interfaces === null && b.kind === tu.INTERFACE)
      return [];
    if (!b.interfaces) {
      const w = S(b);
      throw new Error(
        `Introspection result missing interfaces: ${w}.`
      );
    }
    return b.interfaces.map(D);
  }
  function m(b) {
    return new r0({
      name: b.name,
      description: b.description,
      interfaces: () => d(b),
      fields: () => v(b)
    });
  }
  function k(b) {
    return new Ke({
      name: b.name,
      description: b.description,
      interfaces: () => d(b),
      fields: () => v(b)
    });
  }
  function g(b) {
    if (!b.possibleTypes) {
      const w = S(b);
      throw new Error(
        `Introspection result missing possibleTypes: ${w}.`
      );
    }
    return new Re({
      name: b.name,
      description: b.description,
      types: () => b.possibleTypes.map(E)
    });
  }
  function P(b) {
    if (!b.enumValues) {
      const w = S(b);
      throw new Error(
        `Introspection result missing enumValues: ${w}.`
      );
    }
    return new Y0({
      name: b.name,
      description: b.description,
      values: $0(
        b.enumValues,
        (w) => w.name,
        (w) => ({
          description: w.description,
          deprecationReason: w.deprecationReason
        })
      )
    });
  }
  function A(b) {
    if (!b.inputFields) {
      const w = S(b);
      throw new Error(
        `Introspection result missing inputFields: ${w}.`
      );
    }
    return new _e({
      name: b.name,
      description: b.description,
      fields: () => H(b.inputFields)
    });
  }
  function v(b) {
    if (!b.fields)
      throw new Error(
        `Introspection result missing fields: ${S(b)}.`
      );
    return $0(
      b.fields,
      (w) => w.name,
      N
    );
  }
  function N(b) {
    const w = s(b.type);
    if (!U0(w)) {
      const G = S(w);
      throw new Error(
        `Introspection must provide output type for fields, but received: ${G}.`
      );
    }
    if (!b.args) {
      const G = S(b);
      throw new Error(
        `Introspection result missing field args: ${G}.`
      );
    }
    return {
      description: b.description,
      deprecationReason: b.deprecationReason,
      type: w,
      args: H(b.args)
    };
  }
  function H(b) {
    return $0(
      b,
      (w) => w.name,
      $
    );
  }
  function $(b) {
    const w = s(b.type);
    if (!Ku(w)) {
      const q = S(w);
      throw new Error(
        `Introspection must provide input type for arguments, but received: ${q}.`
      );
    }
    const G = b.defaultValue != null ? m0(nl(b.defaultValue), w) : void 0;
    return {
      description: b.description,
      type: w,
      defaultValue: G,
      deprecationReason: b.deprecationReason
    };
  }
  function O(b) {
    if (!b.args) {
      const w = S(b);
      throw new Error(
        `Introspection result missing directive args: ${w}.`
      );
    }
    if (!b.locations) {
      const w = S(b);
      throw new Error(
        `Introspection result missing directive locations: ${w}.`
      );
    }
    return new v0({
      name: b.name,
      description: b.description,
      isRepeatable: b.isRepeatable,
      locations: b.locations.slice(),
      args: H(b.args)
    });
  }
}
function Sm(u, e, a) {
  $o(u), e != null && e.kind === p.DOCUMENT || Y(!1, "Must provide valid Document AST."), (a == null ? void 0 : a.assumeValid) !== !0 && (a == null ? void 0 : a.assumeValidSDL) !== !0 && rm(e, u);
  const i = u.toConfig(), r = g3(i, e, a);
  return i === r ? u : new Ze(r);
}
function g3(u, e, a) {
  var i, r, n, o;
  const t = [], s = /* @__PURE__ */ Object.create(null), l = [];
  let E;
  const D = [];
  for (const F of e.definitions)
    if (F.kind === p.SCHEMA_DEFINITION)
      E = F;
    else if (F.kind === p.SCHEMA_EXTENSION)
      D.push(F);
    else if (Ye(F))
      t.push(F);
    else if (hr(F)) {
      const h = F.name.value, C = s[h];
      s[h] = C ? C.concat([F]) : [F];
    } else
      F.kind === p.DIRECTIVE_DEFINITION && l.push(F);
  if (Object.keys(s).length === 0 && t.length === 0 && l.length === 0 && D.length === 0 && E == null)
    return u;
  const x = /* @__PURE__ */ Object.create(null);
  for (const F of u.types)
    x[F.name] = P(F);
  for (const F of t) {
    var c;
    const h = F.name.value;
    x[h] = (c = q1[h]) !== null && c !== void 0 ? c : t0(F);
  }
  const d = {
    // Get the extended root operation types.
    query: u.query && k(u.query),
    mutation: u.mutation && k(u.mutation),
    subscription: u.subscription && k(u.subscription),
    // Then, incorporate schema definition and all schema extensions.
    ...E && G([E]),
    ...G(D)
  };
  return {
    description: (i = E) === null || i === void 0 || (r = i.description) === null || r === void 0 ? void 0 : r.value,
    ...d,
    types: Object.values(x),
    directives: [
      ...u.directives.map(g),
      ...l.map(X)
    ],
    extensions: /* @__PURE__ */ Object.create(null),
    astNode: (n = E) !== null && n !== void 0 ? n : u.astNode,
    extensionASTNodes: u.extensionASTNodes.concat(D),
    assumeValid: (o = a == null ? void 0 : a.assumeValid) !== null && o !== void 0 ? o : !1
  };
  function m(F) {
    return cu(F) ? new ju(m(F.ofType)) : J(F) ? new Z(m(F.ofType)) : k(F);
  }
  function k(F) {
    return x[F.name];
  }
  function g(F) {
    const h = F.toConfig();
    return new v0({
      ...h,
      args: f0(h.args, w)
    });
  }
  function P(F) {
    if (pe(F) || mr(F))
      return F;
    if (Yu(F))
      return N(F);
    if (uu(F))
      return H(F);
    if (au(F))
      return $(F);
    if (fu(F))
      return O(F);
    if (Cu(F))
      return v(F);
    if (du(F))
      return A(F);
    hu(!1, "Unexpected type: " + S(F));
  }
  function A(F) {
    var h;
    const C = F.toConfig(), j = (h = s[C.name]) !== null && h !== void 0 ? h : [];
    return new _e({
      ...C,
      fields: () => ({
        ...f0(C.fields, (K) => ({
          ...K,
          type: m(K.type)
        })),
        ...lu(j)
      }),
      extensionASTNodes: C.extensionASTNodes.concat(j)
    });
  }
  function v(F) {
    var h;
    const C = F.toConfig(), j = (h = s[F.name]) !== null && h !== void 0 ? h : [];
    return new Y0({
      ...C,
      values: { ...C.values, ...Eu(j) },
      extensionASTNodes: C.extensionASTNodes.concat(j)
    });
  }
  function N(F) {
    var h;
    const C = F.toConfig(), j = (h = s[C.name]) !== null && h !== void 0 ? h : [];
    let K = C.specifiedByURL;
    for (const R of j) {
      var V;
      K = (V = U1(R)) !== null && V !== void 0 ? V : K;
    }
    return new C0({
      ...C,
      specifiedByURL: K,
      extensionASTNodes: C.extensionASTNodes.concat(j)
    });
  }
  function H(F) {
    var h;
    const C = F.toConfig(), j = (h = s[C.name]) !== null && h !== void 0 ? h : [];
    return new r0({
      ...C,
      interfaces: () => [
        ...F.getInterfaces().map(k),
        ...vu(j)
      ],
      fields: () => ({
        ...f0(C.fields, b),
        ...iu(j)
      }),
      extensionASTNodes: C.extensionASTNodes.concat(j)
    });
  }
  function $(F) {
    var h;
    const C = F.toConfig(), j = (h = s[C.name]) !== null && h !== void 0 ? h : [];
    return new Ke({
      ...C,
      interfaces: () => [
        ...F.getInterfaces().map(k),
        ...vu(j)
      ],
      fields: () => ({
        ...f0(C.fields, b),
        ...iu(j)
      }),
      extensionASTNodes: C.extensionASTNodes.concat(j)
    });
  }
  function O(F) {
    var h;
    const C = F.toConfig(), j = (h = s[C.name]) !== null && h !== void 0 ? h : [];
    return new Re({
      ...C,
      types: () => [
        ...F.getTypes().map(k),
        ...Vu(j)
      ],
      extensionASTNodes: C.extensionASTNodes.concat(j)
    });
  }
  function b(F) {
    return {
      ...F,
      type: m(F.type),
      args: F.args && f0(F.args, w)
    };
  }
  function w(F) {
    return { ...F, type: m(F.type) };
  }
  function G(F) {
    const h = {};
    for (const j of F) {
      var C;
      const K = (
        /* c8 ignore next */
        (C = j.operationTypes) !== null && C !== void 0 ? C : []
      );
      for (const V of K)
        h[V.operation] = q(V.type);
    }
    return h;
  }
  function q(F) {
    var h;
    const C = F.name.value, j = (h = q1[C]) !== null && h !== void 0 ? h : x[C];
    if (j === void 0)
      throw new Error(`Unknown type: "${C}".`);
    return j;
  }
  function ou(F) {
    return F.kind === p.LIST_TYPE ? new ju(ou(F.type)) : F.kind === p.NON_NULL_TYPE ? new Z(ou(F.type)) : q(F);
  }
  function X(F) {
    var h;
    return new v0({
      name: F.name.value,
      description: (h = F.description) === null || h === void 0 ? void 0 : h.value,
      // @ts-expect-error
      locations: F.locations.map(({ value: C }) => C),
      isRepeatable: F.repeatable,
      args: U(F.arguments),
      astNode: F
    });
  }
  function iu(F) {
    const h = /* @__PURE__ */ Object.create(null);
    for (const K of F) {
      var C;
      const V = (
        /* c8 ignore next */
        (C = K.fields) !== null && C !== void 0 ? C : []
      );
      for (const R of V) {
        var j;
        h[R.name.value] = {
          // Note: While this could make assertions to get the correctly typed
          // value, that would throw immediately while type system validation
          // with validateSchema() will produce more actionable results.
          type: ou(R.type),
          description: (j = R.description) === null || j === void 0 ? void 0 : j.value,
          args: U(R.arguments),
          deprecationReason: xi(R),
          astNode: R
        };
      }
    }
    return h;
  }
  function U(F) {
    const h = (
      /* c8 ignore next */
      F ?? []
    ), C = /* @__PURE__ */ Object.create(null);
    for (const K of h) {
      var j;
      const V = ou(K.type);
      C[K.name.value] = {
        type: V,
        description: (j = K.description) === null || j === void 0 ? void 0 : j.value,
        defaultValue: m0(K.defaultValue, V),
        deprecationReason: xi(K),
        astNode: K
      };
    }
    return C;
  }
  function lu(F) {
    const h = /* @__PURE__ */ Object.create(null);
    for (const K of F) {
      var C;
      const V = (
        /* c8 ignore next */
        (C = K.fields) !== null && C !== void 0 ? C : []
      );
      for (const R of V) {
        var j;
        const W = ou(R.type);
        h[R.name.value] = {
          type: W,
          description: (j = R.description) === null || j === void 0 ? void 0 : j.value,
          defaultValue: m0(R.defaultValue, W),
          deprecationReason: xi(R),
          astNode: R
        };
      }
    }
    return h;
  }
  function Eu(F) {
    const h = /* @__PURE__ */ Object.create(null);
    for (const K of F) {
      var C;
      const V = (
        /* c8 ignore next */
        (C = K.values) !== null && C !== void 0 ? C : []
      );
      for (const R of V) {
        var j;
        h[R.name.value] = {
          description: (j = R.description) === null || j === void 0 ? void 0 : j.value,
          deprecationReason: xi(R),
          astNode: R
        };
      }
    }
    return h;
  }
  function vu(F) {
    return F.flatMap(
      // FIXME: https://github.com/graphql/graphql-js/issues/2203
      (h) => {
        var C, j;
        return (
          /* c8 ignore next */
          (C = (j = h.interfaces) === null || j === void 0 ? void 0 : j.map(q)) !== null && C !== void 0 ? C : []
        );
      }
    );
  }
  function Vu(F) {
    return F.flatMap(
      // FIXME: https://github.com/graphql/graphql-js/issues/2203
      (h) => {
        var C, j;
        return (
          /* c8 ignore next */
          (C = (j = h.types) === null || j === void 0 ? void 0 : j.map(q)) !== null && C !== void 0 ? C : []
        );
      }
    );
  }
  function t0(F) {
    var h;
    const C = F.name.value, j = (h = s[C]) !== null && h !== void 0 ? h : [];
    switch (F.kind) {
      case p.OBJECT_TYPE_DEFINITION: {
        var K;
        const bu = [F, ...j];
        return new r0({
          name: C,
          description: (K = F.description) === null || K === void 0 ? void 0 : K.value,
          interfaces: () => vu(bu),
          fields: () => iu(bu),
          astNode: F,
          extensionASTNodes: j
        });
      }
      case p.INTERFACE_TYPE_DEFINITION: {
        var V;
        const bu = [F, ...j];
        return new Ke({
          name: C,
          description: (V = F.description) === null || V === void 0 ? void 0 : V.value,
          interfaces: () => vu(bu),
          fields: () => iu(bu),
          astNode: F,
          extensionASTNodes: j
        });
      }
      case p.ENUM_TYPE_DEFINITION: {
        var R;
        const bu = [F, ...j];
        return new Y0({
          name: C,
          description: (R = F.description) === null || R === void 0 ? void 0 : R.value,
          values: Eu(bu),
          astNode: F,
          extensionASTNodes: j
        });
      }
      case p.UNION_TYPE_DEFINITION: {
        var W;
        const bu = [F, ...j];
        return new Re({
          name: C,
          description: (W = F.description) === null || W === void 0 ? void 0 : W.value,
          types: () => Vu(bu),
          astNode: F,
          extensionASTNodes: j
        });
      }
      case p.SCALAR_TYPE_DEFINITION: {
        var eu;
        return new C0({
          name: C,
          description: (eu = F.description) === null || eu === void 0 ? void 0 : eu.value,
          specifiedByURL: U1(F),
          astNode: F,
          extensionASTNodes: j
        });
      }
      case p.INPUT_OBJECT_TYPE_DEFINITION: {
        var yu;
        const bu = [F, ...j];
        return new _e({
          name: C,
          description: (yu = F.description) === null || yu === void 0 ? void 0 : yu.value,
          fields: () => lu(bu),
          astNode: F,
          extensionASTNodes: j
        });
      }
    }
  }
}
const q1 = P0(
  [...Ha, ...Ia],
  (u) => u.name
);
function xi(u) {
  const e = ba(kr, u);
  return e == null ? void 0 : e.reason;
}
function U1(u) {
  const e = ba(Ro, u);
  return e == null ? void 0 : e.url;
}
function C3(u, e) {
  u != null && u.kind === p.DOCUMENT || Y(!1, "Must provide valid Document AST."), (e == null ? void 0 : e.assumeValid) !== !0 && (e == null ? void 0 : e.assumeValidSDL) !== !0 && im(u);
  const i = g3({
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
    ...ae.filter(
      (n) => i.directives.every(
        (o) => o.name !== n.name
      )
    )
  ];
  return new Ze({ ...i, directives: r });
}
function Mm(u, e) {
  const a = Na(u, {
    noLocation: e == null ? void 0 : e.noLocation,
    allowLegacyFragmentVariables: e == null ? void 0 : e.allowLegacyFragmentVariables
  });
  return C3(a, {
    assumeValidSDL: e == null ? void 0 : e.assumeValidSDL,
    assumeValid: e == null ? void 0 : e.assumeValid
  });
}
function jm(u) {
  const e = u.toConfig(), a = $0(
    Mn(e.types),
    (x) => x.name,
    D
  );
  return new Ze({
    ...e,
    types: Object.values(a),
    directives: Mn(e.directives).map(o),
    query: n(e.query),
    mutation: n(e.mutation),
    subscription: n(e.subscription)
  });
  function i(x) {
    return cu(x) ? new ju(i(x.ofType)) : J(x) ? new Z(i(x.ofType)) : r(x);
  }
  function r(x) {
    return a[x.name];
  }
  function n(x) {
    return x && r(x);
  }
  function o(x) {
    const c = x.toConfig();
    return new v0({
      ...c,
      locations: v3(c.locations, (d) => d),
      args: t(c.args)
    });
  }
  function t(x) {
    return ci(x, (c) => ({ ...c, type: i(c.type) }));
  }
  function s(x) {
    return ci(x, (c) => ({
      ...c,
      type: i(c.type),
      args: c.args && t(c.args)
    }));
  }
  function l(x) {
    return ci(x, (c) => ({
      ...c,
      type: i(c.type)
    }));
  }
  function E(x) {
    return Mn(x).map(r);
  }
  function D(x) {
    if (Yu(x) || pe(x))
      return x;
    if (uu(x)) {
      const c = x.toConfig();
      return new r0({
        ...c,
        interfaces: () => E(c.interfaces),
        fields: () => s(c.fields)
      });
    }
    if (au(x)) {
      const c = x.toConfig();
      return new Ke({
        ...c,
        interfaces: () => E(c.interfaces),
        fields: () => s(c.fields)
      });
    }
    if (fu(x)) {
      const c = x.toConfig();
      return new Re({
        ...c,
        types: () => E(c.types)
      });
    }
    if (Cu(x)) {
      const c = x.toConfig();
      return new Y0({
        ...c,
        values: ci(c.values, (d) => d)
      });
    }
    if (du(x)) {
      const c = x.toConfig();
      return new _e({
        ...c,
        fields: () => l(c.fields)
      });
    }
    hu(!1, "Unexpected type: " + S(x));
  }
}
function ci(u, e) {
  const a = /* @__PURE__ */ Object.create(null);
  for (const i of Object.keys(u).sort(La))
    a[i] = e(u[i]);
  return a;
}
function Mn(u) {
  return v3(u, (e) => e.name);
}
function v3(u, e) {
  return u.slice().sort((a, i) => {
    const r = e(a), n = e(i);
    return La(r, n);
  });
}
function Pm(u) {
  return b3(
    u,
    (e) => !_o(e),
    wm
  );
}
function Tm(u) {
  return b3(u, _o, pe);
}
function wm(u) {
  return !mr(u) && !pe(u);
}
function b3(u, e, a) {
  const i = u.getDirectives().filter(e), r = Object.values(u.getTypeMap()).filter(a);
  return [
    Nm(u),
    ...i.map((n) => Im(n)),
    ...r.map((n) => A3(n))
  ].filter(Boolean).join(`

`);
}
function Nm(u) {
  if (u.description == null && Lm(u))
    return;
  const e = [], a = u.getQueryType();
  a && e.push(`  query: ${a.name}`);
  const i = u.getMutationType();
  i && e.push(`  mutation: ${i.name}`);
  const r = u.getSubscriptionType();
  return r && e.push(`  subscription: ${r.name}`), n0(u) + `schema {
${e.join(`
`)}
}`;
}
function Lm(u) {
  const e = u.getQueryType();
  if (e && e.name !== "Query")
    return !1;
  const a = u.getMutationType();
  if (a && a.name !== "Mutation")
    return !1;
  const i = u.getSubscriptionType();
  return !(i && i.name !== "Subscription");
}
function A3(u) {
  if (Yu(u))
    return Km(u);
  if (uu(u))
    return Rm(u);
  if (au(u))
    return _m(u);
  if (fu(u))
    return Hm(u);
  if (Cu(u))
    return Gm(u);
  if (du(u))
    return Vm(u);
  hu(!1, "Unexpected type: " + S(u));
}
function Km(u) {
  return n0(u) + `scalar ${u.name}` + Om(u);
}
function B3(u) {
  const e = u.getInterfaces();
  return e.length ? " implements " + e.map((a) => a.name).join(" & ") : "";
}
function Rm(u) {
  return n0(u) + `type ${u.name}` + B3(u) + f3(u);
}
function _m(u) {
  return n0(u) + `interface ${u.name}` + B3(u) + f3(u);
}
function Hm(u) {
  const e = u.getTypes(), a = e.length ? " = " + e.join(" | ") : "";
  return n0(u) + "union " + u.name + a;
}
function Gm(u) {
  const e = u.getValues().map(
    (a, i) => n0(a, "  ", !i) + "  " + a.name + Et(a.deprecationReason)
  );
  return n0(u) + `enum ${u.name}` + lt(e);
}
function Vm(u) {
  const e = Object.values(u.getFields()).map(
    (a, i) => n0(a, "  ", !i) + "  " + io(a)
  );
  return n0(u) + `input ${u.name}` + lt(e);
}
function f3(u) {
  const e = Object.values(u.getFields()).map(
    (a, i) => n0(a, "  ", !i) + "  " + a.name + y3(a.args, "  ") + ": " + String(a.type) + Et(a.deprecationReason)
  );
  return lt(e);
}
function lt(u) {
  return u.length !== 0 ? ` {
` + u.join(`
`) + `
}` : "";
}
function y3(u, e = "") {
  return u.length === 0 ? "" : u.every((a) => !a.description) ? "(" + u.map(io).join(", ") + ")" : `(
` + u.map(
    (a, i) => n0(a, "  " + e, !i) + "  " + e + io(a)
  ).join(`
`) + `
` + e + ")";
}
function io(u) {
  const e = q0(u.defaultValue, u.type);
  let a = u.name + ": " + String(u.type);
  return e && (a += ` = ${xu(e)}`), a + Et(u.deprecationReason);
}
function Im(u) {
  return n0(u) + "directive @" + u.name + y3(u.args) + (u.isRepeatable ? " repeatable" : "") + " on " + u.locations.join(" | ");
}
function Et(u) {
  return u == null ? "" : u !== Ko ? ` @deprecated(reason: ${xu({
    kind: p.STRING,
    value: u
  })})` : " @deprecated";
}
function Om(u) {
  return u.specifiedByURL == null ? "" : ` @specifiedBy(url: ${xu({
    kind: p.STRING,
    value: u.specifiedByURL
  })})`;
}
function n0(u, e = "", a = !0) {
  const { description: i } = u;
  if (i == null)
    return "";
  const r = xu({
    kind: p.STRING,
    value: i,
    block: yd(i)
  });
  return (e && !a ? `
` + e : e) + r.replace(/\n/g, `
` + e) + `
`;
}
function Jm(u) {
  const e = [];
  for (const a of u)
    e.push(...a.definitions);
  return {
    kind: p.DOCUMENT,
    definitions: e
  };
}
function $m(u) {
  const e = [], a = /* @__PURE__ */ Object.create(null);
  for (const r of u.definitions)
    switch (r.kind) {
      case p.OPERATION_DEFINITION:
        e.push(r);
        break;
      case p.FRAGMENT_DEFINITION:
        a[r.name.value] = W1(
          r.selectionSet
        );
        break;
    }
  const i = /* @__PURE__ */ Object.create(null);
  for (const r of e) {
    const n = /* @__PURE__ */ new Set();
    for (const t of W1(r.selectionSet))
      z3(n, a, t);
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
function z3(u, e, a) {
  if (!u.has(a)) {
    u.add(a);
    const i = e[a];
    if (i !== void 0)
      for (const r of i)
        z3(u, e, r);
  }
}
function W1(u) {
  const e = [];
  return We(u, {
    FragmentSpread(a) {
      e.push(a.name.value);
    }
  }), e;
}
function qm(u) {
  const e = rl(u) ? u : new xr(u), a = e.body, i = new zo(e);
  let r = "", n = !1;
  for (; i.advance().kind !== z.EOF; ) {
    const o = i.token, t = o.kind, s = !ul(o.kind);
    n && (s || o.kind === z.SPREAD) && (r += " ");
    const l = a.slice(o.start, o.end);
    t === z.BLOCK_STRING ? r += Xs(o.value, {
      minimize: !0
    }) : r += l, n = s;
  }
  return r;
}
function Um(u) {
  const e = S3(u);
  if (e)
    throw e;
  return u;
}
function S3(u) {
  if (typeof u == "string" || Y(!1, "Expected name to be a string."), u.startsWith("__"))
    return new B(
      `Name "${u}" must not begin with "__", which is reserved by GraphQL introspection.`
    );
  try {
    Zu(u);
  } catch (e) {
    return e;
  }
}
var Fu;
(function(u) {
  u.TYPE_REMOVED = "TYPE_REMOVED", u.TYPE_CHANGED_KIND = "TYPE_CHANGED_KIND", u.TYPE_REMOVED_FROM_UNION = "TYPE_REMOVED_FROM_UNION", u.VALUE_REMOVED_FROM_ENUM = "VALUE_REMOVED_FROM_ENUM", u.REQUIRED_INPUT_FIELD_ADDED = "REQUIRED_INPUT_FIELD_ADDED", u.IMPLEMENTED_INTERFACE_REMOVED = "IMPLEMENTED_INTERFACE_REMOVED", u.FIELD_REMOVED = "FIELD_REMOVED", u.FIELD_CHANGED_KIND = "FIELD_CHANGED_KIND", u.REQUIRED_ARG_ADDED = "REQUIRED_ARG_ADDED", u.ARG_REMOVED = "ARG_REMOVED", u.ARG_CHANGED_KIND = "ARG_CHANGED_KIND", u.DIRECTIVE_REMOVED = "DIRECTIVE_REMOVED", u.DIRECTIVE_ARG_REMOVED = "DIRECTIVE_ARG_REMOVED", u.REQUIRED_DIRECTIVE_ARG_ADDED = "REQUIRED_DIRECTIVE_ARG_ADDED", u.DIRECTIVE_REPEATABLE_REMOVED = "DIRECTIVE_REPEATABLE_REMOVED", u.DIRECTIVE_LOCATION_REMOVED = "DIRECTIVE_LOCATION_REMOVED";
})(Fu || (Fu = {}));
var E0;
(function(u) {
  u.VALUE_ADDED_TO_ENUM = "VALUE_ADDED_TO_ENUM", u.TYPE_ADDED_TO_UNION = "TYPE_ADDED_TO_UNION", u.OPTIONAL_INPUT_FIELD_ADDED = "OPTIONAL_INPUT_FIELD_ADDED", u.OPTIONAL_ARG_ADDED = "OPTIONAL_ARG_ADDED", u.IMPLEMENTED_INTERFACE_ADDED = "IMPLEMENTED_INTERFACE_ADDED", u.ARG_DEFAULT_VALUE_CHANGE = "ARG_DEFAULT_VALUE_CHANGE";
})(E0 || (E0 = {}));
function Wm(u, e) {
  return M3(u, e).filter(
    (a) => a.type in Fu
  );
}
function Zm(u, e) {
  return M3(u, e).filter(
    (a) => a.type in E0
  );
}
function M3(u, e) {
  return [
    ...Qm(u, e),
    ...Ym(u, e)
  ];
}
function Ym(u, e) {
  const a = [], i = T0(
    u.getDirectives(),
    e.getDirectives()
  );
  for (const r of i.removed)
    a.push({
      type: Fu.DIRECTIVE_REMOVED,
      description: `${r.name} was removed.`
    });
  for (const [r, n] of i.persisted) {
    const o = T0(r.args, n.args);
    for (const t of o.added)
      ee(t) && a.push({
        type: Fu.REQUIRED_DIRECTIVE_ARG_ADDED,
        description: `A required arg ${t.name} on directive ${r.name} was added.`
      });
    for (const t of o.removed)
      a.push({
        type: Fu.DIRECTIVE_ARG_REMOVED,
        description: `${t.name} was removed from ${r.name}.`
      });
    r.isRepeatable && !n.isRepeatable && a.push({
      type: Fu.DIRECTIVE_REPEATABLE_REMOVED,
      description: `Repeatable flag was removed from ${r.name}.`
    });
    for (const t of r.locations)
      n.locations.includes(t) || a.push({
        type: Fu.DIRECTIVE_LOCATION_REMOVED,
        description: `${t} was removed from ${r.name}.`
      });
  }
  return a;
}
function Qm(u, e) {
  const a = [], i = T0(
    Object.values(u.getTypeMap()),
    Object.values(e.getTypeMap())
  );
  for (const r of i.removed)
    a.push({
      type: Fu.TYPE_REMOVED,
      description: mr(r) ? `Standard scalar ${r.name} was removed because it is not referenced anymore.` : `${r.name} was removed.`
    });
  for (const [r, n] of i.persisted)
    Cu(r) && Cu(n) ? a.push(...eF(r, n)) : fu(r) && fu(n) ? a.push(...uF(r, n)) : du(r) && du(n) ? a.push(...Xm(r, n)) : uu(r) && uu(n) ? a.push(
      ...Y1(r, n),
      ...Z1(r, n)
    ) : au(r) && au(n) ? a.push(
      ...Y1(r, n),
      ...Z1(r, n)
    ) : r.constructor !== n.constructor && a.push({
      type: Fu.TYPE_CHANGED_KIND,
      description: `${r.name} changed from ${Q1(r)} to ${Q1(n)}.`
    });
  return a;
}
function Xm(u, e) {
  const a = [], i = T0(
    Object.values(u.getFields()),
    Object.values(e.getFields())
  );
  for (const r of i.added)
    dr(r) ? a.push({
      type: Fu.REQUIRED_INPUT_FIELD_ADDED,
      description: `A required field ${r.name} on input type ${u.name} was added.`
    }) : a.push({
      type: E0.OPTIONAL_INPUT_FIELD_ADDED,
      description: `An optional field ${r.name} on input type ${u.name} was added.`
    });
  for (const r of i.removed)
    a.push({
      type: Fu.FIELD_REMOVED,
      description: `${u.name}.${r.name} was removed.`
    });
  for (const [r, n] of i.persisted)
    xa(
      r.type,
      n.type
    ) || a.push({
      type: Fu.FIELD_CHANGED_KIND,
      description: `${u.name}.${r.name} changed type from ${String(r.type)} to ${String(n.type)}.`
    });
  return a;
}
function uF(u, e) {
  const a = [], i = T0(u.getTypes(), e.getTypes());
  for (const r of i.added)
    a.push({
      type: E0.TYPE_ADDED_TO_UNION,
      description: `${r.name} was added to union type ${u.name}.`
    });
  for (const r of i.removed)
    a.push({
      type: Fu.TYPE_REMOVED_FROM_UNION,
      description: `${r.name} was removed from union type ${u.name}.`
    });
  return a;
}
function eF(u, e) {
  const a = [], i = T0(u.getValues(), e.getValues());
  for (const r of i.added)
    a.push({
      type: E0.VALUE_ADDED_TO_ENUM,
      description: `${r.name} was added to enum type ${u.name}.`
    });
  for (const r of i.removed)
    a.push({
      type: Fu.VALUE_REMOVED_FROM_ENUM,
      description: `${r.name} was removed from enum type ${u.name}.`
    });
  return a;
}
function Z1(u, e) {
  const a = [], i = T0(u.getInterfaces(), e.getInterfaces());
  for (const r of i.added)
    a.push({
      type: E0.IMPLEMENTED_INTERFACE_ADDED,
      description: `${r.name} added to interfaces implemented by ${u.name}.`
    });
  for (const r of i.removed)
    a.push({
      type: Fu.IMPLEMENTED_INTERFACE_REMOVED,
      description: `${u.name} no longer implements interface ${r.name}.`
    });
  return a;
}
function Y1(u, e) {
  const a = [], i = T0(
    Object.values(u.getFields()),
    Object.values(e.getFields())
  );
  for (const r of i.removed)
    a.push({
      type: Fu.FIELD_REMOVED,
      description: `${u.name}.${r.name} was removed.`
    });
  for (const [r, n] of i.persisted)
    a.push(...aF(u, r, n)), Ea(
      r.type,
      n.type
    ) || a.push({
      type: Fu.FIELD_CHANGED_KIND,
      description: `${u.name}.${r.name} changed type from ${String(r.type)} to ${String(n.type)}.`
    });
  return a;
}
function aF(u, e, a) {
  const i = [], r = T0(e.args, a.args);
  for (const n of r.removed)
    i.push({
      type: Fu.ARG_REMOVED,
      description: `${u.name}.${e.name} arg ${n.name} was removed.`
    });
  for (const [n, o] of r.persisted)
    if (!xa(
      n.type,
      o.type
    ))
      i.push({
        type: Fu.ARG_CHANGED_KIND,
        description: `${u.name}.${e.name} arg ${n.name} has changed type from ${String(n.type)} to ${String(o.type)}.`
      });
    else if (n.defaultValue !== void 0)
      if (o.defaultValue === void 0)
        i.push({
          type: E0.ARG_DEFAULT_VALUE_CHANGE,
          description: `${u.name}.${e.name} arg ${n.name} defaultValue was removed.`
        });
      else {
        const s = X1(n.defaultValue, n.type), l = X1(o.defaultValue, o.type);
        s !== l && i.push({
          type: E0.ARG_DEFAULT_VALUE_CHANGE,
          description: `${u.name}.${e.name} arg ${n.name} has changed defaultValue from ${s} to ${l}.`
        });
      }
  for (const n of r.added)
    ee(n) ? i.push({
      type: Fu.REQUIRED_ARG_ADDED,
      description: `A required arg ${n.name} on ${u.name}.${e.name} was added.`
    }) : i.push({
      type: E0.OPTIONAL_ARG_ADDED,
      description: `An optional arg ${n.name} on ${u.name}.${e.name} was added.`
    });
  return i;
}
function Ea(u, e) {
  return cu(u) ? (
    // if they're both lists, make sure the underlying types are compatible
    cu(e) && Ea(
      u.ofType,
      e.ofType
    ) || // moving from nullable to non-null of the same underlying type is safe
    J(e) && Ea(u, e.ofType)
  ) : J(u) ? J(e) && Ea(u.ofType, e.ofType) : (
    // if they're both named types, see if their names are equivalent
    _a(e) && u.name === e.name || // moving from nullable to non-null of the same underlying type is safe
    J(e) && Ea(u, e.ofType)
  );
}
function xa(u, e) {
  return cu(u) ? cu(e) && xa(u.ofType, e.ofType) : J(u) ? (
    // if they're both non-null, make sure the underlying types are
    // compatible
    J(e) && xa(
      u.ofType,
      e.ofType
    ) || // moving from non-null to nullable of the same underlying type is safe
    !J(e) && xa(u.ofType, e)
  ) : _a(e) && u.name === e.name;
}
function Q1(u) {
  if (Yu(u))
    return "a Scalar type";
  if (uu(u))
    return "an Object type";
  if (au(u))
    return "an Interface type";
  if (fu(u))
    return "a Union type";
  if (Cu(u))
    return "an Enum type";
  if (du(u))
    return "an Input type";
  hu(!1, "Unexpected type: " + S(u));
}
function X1(u, e) {
  const a = q0(u, e);
  return a != null || hu(!1), xu(gr(a));
}
function T0(u, e) {
  const a = [], i = [], r = [], n = P0(u, ({ name: t }) => t), o = P0(e, ({ name: t }) => t);
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
const iF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BREAK: Me,
  get BreakingChangeType() {
    return Fu;
  },
  DEFAULT_DEPRECATION_REASON: Ko,
  get DangerousChangeType() {
    return E0;
  },
  get DirectiveLocation() {
    return _;
  },
  ExecutableDefinitionsRule: gl,
  FieldsOnCorrectTypeRule: Cl,
  FragmentsOnCompositeTypesRule: vl,
  GRAPHQL_MAX_INT: Ai,
  GRAPHQL_MIN_INT: Bi,
  GraphQLBoolean: qu,
  GraphQLDeprecatedDirective: kr,
  GraphQLDirective: v0,
  GraphQLEnumType: Y0,
  GraphQLError: B,
  GraphQLFloat: kl,
  GraphQLID: wo,
  GraphQLIncludeDirective: No,
  GraphQLInputObjectType: _e,
  GraphQLInt: Fl,
  GraphQLInterfaceType: Ke,
  GraphQLList: ju,
  GraphQLNonNull: Z,
  GraphQLObjectType: r0,
  GraphQLScalarType: C0,
  GraphQLSchema: Ze,
  GraphQLSkipDirective: Lo,
  GraphQLSpecifiedByDirective: Ro,
  GraphQLString: ku,
  GraphQLUnionType: Re,
  get Kind() {
    return p;
  },
  KnownArgumentNamesRule: bl,
  KnownDirectivesRule: et,
  KnownFragmentNamesRule: Bl,
  KnownTypeNamesRule: at,
  Lexer: zo,
  Location: Ws,
  LoneAnonymousOperationRule: fl,
  LoneSchemaDefinitionRule: yl,
  NoDeprecatedCustomRule: bm,
  NoFragmentCyclesRule: zl,
  NoSchemaIntrospectionCustomRule: Am,
  NoUndefinedVariablesRule: Sl,
  NoUnusedFragmentsRule: Ml,
  NoUnusedVariablesRule: jl,
  get OperationTypeNode() {
    return Bu;
  },
  OverlappingFieldsCanBeMergedRule: Tl,
  PossibleFragmentSpreadsRule: Ll,
  PossibleTypeExtensionsRule: Kl,
  ProvidedRequiredArgumentsRule: Rl,
  ScalarLeafsRule: Hl,
  SchemaMetaFieldDef: ga,
  SingleFieldSubscriptionsRule: Jl,
  Source: xr,
  Token: fo,
  get TokenKind() {
    return z;
  },
  TypeInfo: Zo,
  get TypeKind() {
    return tu;
  },
  TypeMetaFieldDef: Ca,
  TypeNameMetaFieldDef: va,
  UniqueArgumentDefinitionNamesRule: $l,
  UniqueArgumentNamesRule: ot,
  UniqueDirectiveNamesRule: ql,
  UniqueDirectivesPerLocationRule: tt,
  UniqueEnumValueNamesRule: Ul,
  UniqueFieldDefinitionNamesRule: Wl,
  UniqueFragmentNamesRule: Zl,
  UniqueInputFieldNamesRule: st,
  UniqueOperationNamesRule: Yl,
  UniqueOperationTypesRule: Ql,
  UniqueTypeNamesRule: Xl,
  UniqueVariableNamesRule: u3,
  ValidationContext: o3,
  ValuesOfCorrectTypeRule: e3,
  VariablesAreInputTypesRule: a3,
  VariablesInAllowedPositionRule: i3,
  __Directive: Go,
  __DirectiveLocation: Vo,
  __EnumValue: Oo,
  __Field: Io,
  __InputValue: Va,
  __Schema: pr,
  __Type: e0,
  __TypeKind: Jo,
  assertAbstractType: x6,
  assertCompositeType: D6,
  assertDirective: p6,
  assertEnumType: r6,
  assertEnumValueName: tl,
  assertInputObjectType: n6,
  assertInputType: s6,
  assertInterfaceType: ll,
  assertLeafType: E6,
  assertListType: o6,
  assertName: Zu,
  assertNamedType: d6,
  assertNonNullType: t6,
  assertNullableType: El,
  assertObjectType: sl,
  assertOutputType: l6,
  assertScalarType: a6,
  assertSchema: $o,
  assertType: e6,
  assertUnionType: i6,
  assertValidName: Um,
  assertValidSchema: Uo,
  assertWrappingType: c6,
  astFromValue: q0,
  buildASTSchema: C3,
  buildClientSchema: zm,
  buildSchema: Mm,
  coerceInputValue: Vl,
  concatAST: Jm,
  createSourceEventStream: p3,
  defaultFieldResolver: ao,
  defaultTypeResolver: d3,
  doTypesOverlap: Yn,
  execute: vr,
  executeSync: l3,
  extendSchema: Sm,
  findBreakingChanges: Wm,
  findDangerousChanges: Zm,
  formatError: bd,
  getArgumentValues: Cr,
  getDirectiveValues: ba,
  getEnterLeaveForKind: Le,
  getIntrospectionQuery: h3,
  getLocation: Ni,
  getNamedType: wu,
  getNullableType: jo,
  getOperationAST: Bm,
  getOperationRootType: fm,
  getVariableValues: Il,
  getVisitFn: Qd,
  graphql: km,
  graphqlSync: pm,
  introspectionFromSchema: ym,
  introspectionTypes: Ia,
  isAbstractType: F0,
  isCompositeType: g0,
  isConstValueNode: Qn,
  isDefinitionNode: M6,
  isDirective: Fr,
  isEnumType: Cu,
  isEqualType: Ki,
  isExecutableDefinitionNode: Qo,
  isInputObjectType: du,
  isInputType: Ku,
  isInterfaceType: au,
  isIntrospectionType: pe,
  isLeafType: h0,
  isListType: cu,
  isNamedType: _a,
  isNonNullType: J,
  isNullableType: Mo,
  isObjectType: uu,
  isOutputType: U0,
  isRequiredArgument: ee,
  isRequiredInputField: dr,
  isScalarType: Yu,
  isSchema: pl,
  isSelectionNode: j6,
  isSpecifiedDirective: _o,
  isSpecifiedScalarType: mr,
  isType: Ka,
  isTypeDefinitionNode: Ye,
  isTypeExtensionNode: hr,
  isTypeNode: P6,
  isTypeSubTypeOf: le,
  isTypeSystemDefinitionNode: Xo,
  isTypeSystemExtensionNode: ut,
  isUnionType: fu,
  isValidNameError: S3,
  isValueNode: hl,
  isWrappingType: Ra,
  lexicographicSortSchema: jm,
  locatedError: Ge,
  parse: Na,
  parseConstValue: Id,
  parseType: Od,
  parseValue: nl,
  print: xu,
  printError: vd,
  printIntrospectionSchema: Tm,
  printLocation: Us,
  printSchema: Pm,
  printSourceLocation: Bo,
  printType: A3,
  resolveObjMapThunk: To,
  resolveReadonlyArrayThunk: Po,
  responsePathAsArray: $u,
  separateOperations: $m,
  specifiedDirectives: ae,
  specifiedRules: r3,
  specifiedScalarTypes: Ha,
  stripIgnoredCharacters: qm,
  subscribe: gm,
  syntaxError: Au,
  typeFromAST: Ru,
  validate: t3,
  validateSchema: qo,
  valueFromAST: m0,
  valueFromASTUntyped: Li,
  version: pd,
  versionInfo: hd,
  visit: We,
  visitInParallel: So,
  visitWithTypeInfo: Yo
}, Symbol.toStringTag, { value: "Module" }));
function Dt() {
  if (typeof navigator < "u" && navigator.product === "ReactNative")
    return !0;
  if (typeof process < "u") {
    const u = process.type;
    return u === "renderer" || u === "worker" ? !1 : !!(process.versions && process.versions.node);
  }
  return !1;
}
const rF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isNodeProcess: Dt
}, Symbol.toStringTag, { value: "Module" }));
function nF(u) {
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
function xt(u, e) {
  e === void 0 && (e = {});
  for (var a = nF(u), i = e.prefixes, r = i === void 0 ? "./" : i, n = "[^".concat(fe(e.delimiter || "/#?"), "]+?"), o = [], t = 0, s = 0, l = "", E = function(H) {
    if (s < a.length && a[s].type === H)
      return a[s++].value;
  }, D = function(H) {
    var $ = E(H);
    if ($ !== void 0)
      return $;
    var O = a[s], b = O.type, w = O.index;
    throw new TypeError("Unexpected ".concat(b, " at ").concat(w, ", expected ").concat(H));
  }, x = function() {
    for (var H = "", $; $ = E("CHAR") || E("ESCAPED_CHAR"); )
      H += $;
    return H;
  }; s < a.length; ) {
    var c = E("CHAR"), d = E("NAME"), m = E("PATTERN");
    if (d || m) {
      var k = c || "";
      r.indexOf(k) === -1 && (l += k, k = ""), l && (o.push(l), l = ""), o.push({
        name: d || t++,
        prefix: k,
        suffix: "",
        pattern: m || n,
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
    var P = E("OPEN");
    if (P) {
      var k = x(), A = E("NAME") || "", v = E("PATTERN") || "", N = x();
      D("CLOSE"), o.push({
        name: A || (v ? t++ : ""),
        pattern: A && !v ? n : v,
        prefix: k,
        suffix: N,
        modifier: E("MODIFIER") || ""
      });
      continue;
    }
    D("END");
  }
  return o;
}
function oF(u, e) {
  return j3(xt(u, e), e);
}
function j3(u, e) {
  e === void 0 && (e = {});
  var a = ct(e), i = e.encode, r = i === void 0 ? function(s) {
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
        for (var m = 0; m < x.length; m++) {
          var k = r(x[m], D);
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
function P3(u, e) {
  var a = [], i = dt(u, a, e);
  return T3(i, a, e);
}
function T3(u, e, a) {
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
function fe(u) {
  return u.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function ct(u) {
  return u && u.sensitive ? "" : "i";
}
function tF(u, e) {
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
function sF(u, e, a) {
  var i = u.map(function(r) {
    return dt(r, e, a).source;
  });
  return new RegExp("(?:".concat(i.join("|"), ")"), ct(a));
}
function lF(u, e, a) {
  return w3(xt(u, a), e, a);
}
function w3(u, e, a) {
  a === void 0 && (a = {});
  for (var i = a.strict, r = i === void 0 ? !1 : i, n = a.start, o = n === void 0 ? !0 : n, t = a.end, s = t === void 0 ? !0 : t, l = a.encode, E = l === void 0 ? function(w) {
    return w;
  } : l, D = a.delimiter, x = D === void 0 ? "/#?" : D, c = a.endsWith, d = c === void 0 ? "" : c, m = "[".concat(fe(d), "]|$"), k = "[".concat(fe(x), "]"), g = o ? "^" : "", P = 0, A = u; P < A.length; P++) {
    var v = A[P];
    if (typeof v == "string")
      g += fe(E(v));
    else {
      var N = fe(E(v.prefix)), H = fe(E(v.suffix));
      if (v.pattern)
        if (e && e.push(v), N || H)
          if (v.modifier === "+" || v.modifier === "*") {
            var $ = v.modifier === "*" ? "?" : "";
            g += "(?:".concat(N, "((?:").concat(v.pattern, ")(?:").concat(H).concat(N, "(?:").concat(v.pattern, "))*)").concat(H, ")").concat($);
          } else
            g += "(?:".concat(N, "(").concat(v.pattern, ")").concat(H, ")").concat(v.modifier);
        else
          v.modifier === "+" || v.modifier === "*" ? g += "((?:".concat(v.pattern, ")").concat(v.modifier, ")") : g += "(".concat(v.pattern, ")").concat(v.modifier);
      else
        g += "(?:".concat(N).concat(H, ")").concat(v.modifier);
    }
  }
  if (s)
    r || (g += "".concat(k, "?")), g += a.endsWith ? "(?=".concat(m, ")") : "$";
  else {
    var O = u[u.length - 1], b = typeof O == "string" ? k.indexOf(O[O.length - 1]) > -1 : O === void 0;
    r || (g += "(?:".concat(k, "(?=").concat(m, "))?")), b || (g += "(?=".concat(k, "|").concat(m, ")"));
  }
  return new RegExp(g, ct(a));
}
function dt(u, e, a) {
  return u instanceof RegExp ? tF(u, e) : Array.isArray(u) ? sF(u, e, a) : lF(u, e, a);
}
const EF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compile: oF,
  match: P3,
  parse: xt,
  pathToRegexp: dt,
  regexpToFunction: T3,
  tokensToFunction: j3,
  tokensToRegexp: w3
}, Symbol.toStringTag, { value: "Module" }));
var mt = {};
const DF = {}, xF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DF
}, Symbol.toStringTag, { value: "Module" })), b0 = /* @__PURE__ */ Je(xF);
var br = {}, d0 = [], u0 = [], cF = typeof Uint8Array < "u" ? Uint8Array : Array, Ft = !1;
function N3() {
  Ft = !0;
  for (var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = 0, a = u.length; e < a; ++e)
    d0[e] = u[e], u0[u.charCodeAt(e)] = e;
  u0["-".charCodeAt(0)] = 62, u0["_".charCodeAt(0)] = 63;
}
function dF(u) {
  Ft || N3();
  var e, a, i, r, n, o, t = u.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  n = u[t - 2] === "=" ? 2 : u[t - 1] === "=" ? 1 : 0, o = new cF(t * 3 / 4 - n), i = n > 0 ? t - 4 : t;
  var s = 0;
  for (e = 0, a = 0; e < i; e += 4, a += 3)
    r = u0[u.charCodeAt(e)] << 18 | u0[u.charCodeAt(e + 1)] << 12 | u0[u.charCodeAt(e + 2)] << 6 | u0[u.charCodeAt(e + 3)], o[s++] = r >> 16 & 255, o[s++] = r >> 8 & 255, o[s++] = r & 255;
  return n === 2 ? (r = u0[u.charCodeAt(e)] << 2 | u0[u.charCodeAt(e + 1)] >> 4, o[s++] = r & 255) : n === 1 && (r = u0[u.charCodeAt(e)] << 10 | u0[u.charCodeAt(e + 1)] << 4 | u0[u.charCodeAt(e + 2)] >> 2, o[s++] = r >> 8 & 255, o[s++] = r & 255), o;
}
function mF(u) {
  return d0[u >> 18 & 63] + d0[u >> 12 & 63] + d0[u >> 6 & 63] + d0[u & 63];
}
function FF(u, e, a) {
  for (var i, r = [], n = e; n < a; n += 3)
    i = (u[n] << 16) + (u[n + 1] << 8) + u[n + 2], r.push(mF(i));
  return r.join("");
}
function u4(u) {
  Ft || N3();
  for (var e, a = u.length, i = a % 3, r = "", n = [], o = 16383, t = 0, s = a - i; t < s; t += o)
    n.push(FF(u, t, t + o > s ? s : t + o));
  return i === 1 ? (e = u[a - 1], r += d0[e >> 2], r += d0[e << 4 & 63], r += "==") : i === 2 && (e = (u[a - 2] << 8) + u[a - 1], r += d0[e >> 10], r += d0[e >> 4 & 63], r += d0[e << 2 & 63], r += "="), n.push(r), n.join("");
}
function Ar(u, e, a, i, r) {
  var n, o, t = r * 8 - i - 1, s = (1 << t) - 1, l = s >> 1, E = -7, D = a ? r - 1 : 0, x = a ? -1 : 1, c = u[e + D];
  for (D += x, n = c & (1 << -E) - 1, c >>= -E, E += t; E > 0; n = n * 256 + u[e + D], D += x, E -= 8)
    ;
  for (o = n & (1 << -E) - 1, n >>= -E, E += i; E > 0; o = o * 256 + u[e + D], D += x, E -= 8)
    ;
  if (n === 0)
    n = 1 - l;
  else {
    if (n === s)
      return o ? NaN : (c ? -1 : 1) * (1 / 0);
    o = o + Math.pow(2, i), n = n - l;
  }
  return (c ? -1 : 1) * o * Math.pow(2, n - i);
}
function L3(u, e, a, i, r, n) {
  var o, t, s, l = n * 8 - r - 1, E = (1 << l) - 1, D = E >> 1, x = r === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, c = i ? 0 : n - 1, d = i ? 1 : -1, m = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (t = isNaN(e) ? 1 : 0, o = E) : (o = Math.floor(Math.log(e) / Math.LN2), e * (s = Math.pow(2, -o)) < 1 && (o--, s *= 2), o + D >= 1 ? e += x / s : e += x * Math.pow(2, 1 - D), e * s >= 2 && (o++, s /= 2), o + D >= E ? (t = 0, o = E) : o + D >= 1 ? (t = (e * s - 1) * Math.pow(2, r), o = o + D) : (t = e * Math.pow(2, D - 1) * Math.pow(2, r), o = 0)); r >= 8; u[a + c] = t & 255, c += d, t /= 256, r -= 8)
    ;
  for (o = o << r | t, l += r; l > 0; u[a + c] = o & 255, c += d, o /= 256, l -= 8)
    ;
  u[a + c - d] |= m * 128;
}
var kF = {}.toString, K3 = Array.isArray || function(u) {
  return kF.call(u) == "[object Array]";
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var pF = 50;
M.TYPED_ARRAY_SUPPORT = pa.TYPED_ARRAY_SUPPORT !== void 0 ? pa.TYPED_ARRAY_SUPPORT : !0;
Oi();
function Oi() {
  return M.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function z0(u, e) {
  if (Oi() < e)
    throw new RangeError("Invalid typed array length");
  return M.TYPED_ARRAY_SUPPORT ? (u = new Uint8Array(e), u.__proto__ = M.prototype) : (u === null && (u = new M(e)), u.length = e), u;
}
function M(u, e, a) {
  if (!M.TYPED_ARRAY_SUPPORT && !(this instanceof M))
    return new M(u, e, a);
  if (typeof u == "number") {
    if (typeof e == "string")
      throw new Error(
        "If encoding is specified then the first argument must be a string"
      );
    return kt(this, u);
  }
  return R3(this, u, e, a);
}
M.poolSize = 8192;
M._augment = function(u) {
  return u.__proto__ = M.prototype, u;
};
function R3(u, e, a, i) {
  if (typeof e == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer ? CF(u, e, a, i) : typeof e == "string" ? gF(u, e, a) : vF(u, e);
}
M.from = function(u, e, a) {
  return R3(null, u, e, a);
};
M.TYPED_ARRAY_SUPPORT && (M.prototype.__proto__ = Uint8Array.prototype, M.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && M[Symbol.species]);
function _3(u) {
  if (typeof u != "number")
    throw new TypeError('"size" argument must be a number');
  if (u < 0)
    throw new RangeError('"size" argument must not be negative');
}
function hF(u, e, a, i) {
  return _3(e), e <= 0 ? z0(u, e) : a !== void 0 ? typeof i == "string" ? z0(u, e).fill(a, i) : z0(u, e).fill(a) : z0(u, e);
}
M.alloc = function(u, e, a) {
  return hF(null, u, e, a);
};
function kt(u, e) {
  if (_3(e), u = z0(u, e < 0 ? 0 : pt(e) | 0), !M.TYPED_ARRAY_SUPPORT)
    for (var a = 0; a < e; ++a)
      u[a] = 0;
  return u;
}
M.allocUnsafe = function(u) {
  return kt(null, u);
};
M.allocUnsafeSlow = function(u) {
  return kt(null, u);
};
function gF(u, e, a) {
  if ((typeof a != "string" || a === "") && (a = "utf8"), !M.isEncoding(a))
    throw new TypeError('"encoding" must be a valid string encoding');
  var i = H3(e, a) | 0;
  u = z0(u, i);
  var r = u.write(e, a);
  return r !== i && (u = u.slice(0, r)), u;
}
function ro(u, e) {
  var a = e.length < 0 ? 0 : pt(e.length) | 0;
  u = z0(u, a);
  for (var i = 0; i < a; i += 1)
    u[i] = e[i] & 255;
  return u;
}
function CF(u, e, a, i) {
  if (e.byteLength, a < 0 || e.byteLength < a)
    throw new RangeError("'offset' is out of bounds");
  if (e.byteLength < a + (i || 0))
    throw new RangeError("'length' is out of bounds");
  return a === void 0 && i === void 0 ? e = new Uint8Array(e) : i === void 0 ? e = new Uint8Array(e, a) : e = new Uint8Array(e, a, i), M.TYPED_ARRAY_SUPPORT ? (u = e, u.__proto__ = M.prototype) : u = ro(u, e), u;
}
function vF(u, e) {
  if (A0(e)) {
    var a = pt(e.length) | 0;
    return u = z0(u, a), u.length === 0 || e.copy(u, 0, 0, a), u;
  }
  if (e) {
    if (typeof ArrayBuffer < "u" && e.buffer instanceof ArrayBuffer || "length" in e)
      return typeof e.length != "number" || GF(e.length) ? z0(u, 0) : ro(u, e);
    if (e.type === "Buffer" && K3(e.data))
      return ro(u, e.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function pt(u) {
  if (u >= Oi())
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Oi().toString(16) + " bytes");
  return u | 0;
}
M.isBuffer = VF;
function A0(u) {
  return !!(u != null && u._isBuffer);
}
M.compare = function(e, a) {
  if (!A0(e) || !A0(a))
    throw new TypeError("Arguments must be Buffers");
  if (e === a)
    return 0;
  for (var i = e.length, r = a.length, n = 0, o = Math.min(i, r); n < o; ++n)
    if (e[n] !== a[n]) {
      i = e[n], r = a[n];
      break;
    }
  return i < r ? -1 : r < i ? 1 : 0;
};
M.isEncoding = function(e) {
  switch (String(e).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return !0;
    default:
      return !1;
  }
};
M.concat = function(e, a) {
  if (!K3(e))
    throw new TypeError('"list" argument must be an Array of Buffers');
  if (e.length === 0)
    return M.alloc(0);
  var i;
  if (a === void 0)
    for (a = 0, i = 0; i < e.length; ++i)
      a += e[i].length;
  var r = M.allocUnsafe(a), n = 0;
  for (i = 0; i < e.length; ++i) {
    var o = e[i];
    if (!A0(o))
      throw new TypeError('"list" argument must be an Array of Buffers');
    o.copy(r, n), n += o.length;
  }
  return r;
};
function H3(u, e) {
  if (A0(u))
    return u.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(u) || u instanceof ArrayBuffer))
    return u.byteLength;
  typeof u != "string" && (u = "" + u);
  var a = u.length;
  if (a === 0)
    return 0;
  for (var i = !1; ; )
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return a;
      case "utf8":
      case "utf-8":
      case void 0:
        return Ji(u).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return a * 2;
      case "hex":
        return a >>> 1;
      case "base64":
        return q3(u).length;
      default:
        if (i)
          return Ji(u).length;
        e = ("" + e).toLowerCase(), i = !0;
    }
}
M.byteLength = H3;
function bF(u, e, a) {
  var i = !1;
  if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, e >>>= 0, a <= e))
    return "";
  for (u || (u = "utf8"); ; )
    switch (u) {
      case "hex":
        return TF(this, e, a);
      case "utf8":
      case "utf-8":
        return I3(this, e, a);
      case "ascii":
        return jF(this, e, a);
      case "latin1":
      case "binary":
        return PF(this, e, a);
      case "base64":
        return SF(this, e, a);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return wF(this, e, a);
      default:
        if (i)
          throw new TypeError("Unknown encoding: " + u);
        u = (u + "").toLowerCase(), i = !0;
    }
}
M.prototype._isBuffer = !0;
function se(u, e, a) {
  var i = u[e];
  u[e] = u[a], u[a] = i;
}
M.prototype.swap16 = function() {
  var e = this.length;
  if (e % 2 !== 0)
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var a = 0; a < e; a += 2)
    se(this, a, a + 1);
  return this;
};
M.prototype.swap32 = function() {
  var e = this.length;
  if (e % 4 !== 0)
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var a = 0; a < e; a += 4)
    se(this, a, a + 3), se(this, a + 1, a + 2);
  return this;
};
M.prototype.swap64 = function() {
  var e = this.length;
  if (e % 8 !== 0)
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var a = 0; a < e; a += 8)
    se(this, a, a + 7), se(this, a + 1, a + 6), se(this, a + 2, a + 5), se(this, a + 3, a + 4);
  return this;
};
M.prototype.toString = function() {
  var e = this.length | 0;
  return e === 0 ? "" : arguments.length === 0 ? I3(this, 0, e) : bF.apply(this, arguments);
};
M.prototype.equals = function(e) {
  if (!A0(e))
    throw new TypeError("Argument must be a Buffer");
  return this === e ? !0 : M.compare(this, e) === 0;
};
M.prototype.inspect = function() {
  var e = "", a = pF;
  return this.length > 0 && (e = this.toString("hex", 0, a).match(/.{2}/g).join(" "), this.length > a && (e += " ... ")), "<Buffer " + e + ">";
};
M.prototype.compare = function(e, a, i, r, n) {
  if (!A0(e))
    throw new TypeError("Argument must be a Buffer");
  if (a === void 0 && (a = 0), i === void 0 && (i = e ? e.length : 0), r === void 0 && (r = 0), n === void 0 && (n = this.length), a < 0 || i > e.length || r < 0 || n > this.length)
    throw new RangeError("out of range index");
  if (r >= n && a >= i)
    return 0;
  if (r >= n)
    return -1;
  if (a >= i)
    return 1;
  if (a >>>= 0, i >>>= 0, r >>>= 0, n >>>= 0, this === e)
    return 0;
  for (var o = n - r, t = i - a, s = Math.min(o, t), l = this.slice(r, n), E = e.slice(a, i), D = 0; D < s; ++D)
    if (l[D] !== E[D]) {
      o = l[D], t = E[D];
      break;
    }
  return o < t ? -1 : t < o ? 1 : 0;
};
function G3(u, e, a, i, r) {
  if (u.length === 0)
    return -1;
  if (typeof a == "string" ? (i = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, isNaN(a) && (a = r ? 0 : u.length - 1), a < 0 && (a = u.length + a), a >= u.length) {
    if (r)
      return -1;
    a = u.length - 1;
  } else if (a < 0)
    if (r)
      a = 0;
    else
      return -1;
  if (typeof e == "string" && (e = M.from(e, i)), A0(e))
    return e.length === 0 ? -1 : e4(u, e, a, i, r);
  if (typeof e == "number")
    return e = e & 255, M.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? r ? Uint8Array.prototype.indexOf.call(u, e, a) : Uint8Array.prototype.lastIndexOf.call(u, e, a) : e4(u, [e], a, i, r);
  throw new TypeError("val must be string, number or Buffer");
}
function e4(u, e, a, i, r) {
  var n = 1, o = u.length, t = e.length;
  if (i !== void 0 && (i = String(i).toLowerCase(), i === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le")) {
    if (u.length < 2 || e.length < 2)
      return -1;
    n = 2, o /= 2, t /= 2, a /= 2;
  }
  function s(c, d) {
    return n === 1 ? c[d] : c.readUInt16BE(d * n);
  }
  var l;
  if (r) {
    var E = -1;
    for (l = a; l < o; l++)
      if (s(u, l) === s(e, E === -1 ? 0 : l - E)) {
        if (E === -1 && (E = l), l - E + 1 === t)
          return E * n;
      } else
        E !== -1 && (l -= l - E), E = -1;
  } else
    for (a + t > o && (a = o - t), l = a; l >= 0; l--) {
      for (var D = !0, x = 0; x < t; x++)
        if (s(u, l + x) !== s(e, x)) {
          D = !1;
          break;
        }
      if (D)
        return l;
    }
  return -1;
}
M.prototype.includes = function(e, a, i) {
  return this.indexOf(e, a, i) !== -1;
};
M.prototype.indexOf = function(e, a, i) {
  return G3(this, e, a, i, !0);
};
M.prototype.lastIndexOf = function(e, a, i) {
  return G3(this, e, a, i, !1);
};
function AF(u, e, a, i) {
  a = Number(a) || 0;
  var r = u.length - a;
  i ? (i = Number(i), i > r && (i = r)) : i = r;
  var n = e.length;
  if (n % 2 !== 0)
    throw new TypeError("Invalid hex string");
  i > n / 2 && (i = n / 2);
  for (var o = 0; o < i; ++o) {
    var t = parseInt(e.substr(o * 2, 2), 16);
    if (isNaN(t))
      return o;
    u[a + o] = t;
  }
  return o;
}
function BF(u, e, a, i) {
  return yr(Ji(e, u.length - a), u, a, i);
}
function V3(u, e, a, i) {
  return yr(_F(e), u, a, i);
}
function fF(u, e, a, i) {
  return V3(u, e, a, i);
}
function yF(u, e, a, i) {
  return yr(q3(e), u, a, i);
}
function zF(u, e, a, i) {
  return yr(HF(e, u.length - a), u, a, i);
}
M.prototype.write = function(e, a, i, r) {
  if (a === void 0)
    r = "utf8", i = this.length, a = 0;
  else if (i === void 0 && typeof a == "string")
    r = a, i = this.length, a = 0;
  else if (isFinite(a))
    a = a | 0, isFinite(i) ? (i = i | 0, r === void 0 && (r = "utf8")) : (r = i, i = void 0);
  else
    throw new Error(
      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
    );
  var n = this.length - a;
  if ((i === void 0 || i > n) && (i = n), e.length > 0 && (i < 0 || a < 0) || a > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  r || (r = "utf8");
  for (var o = !1; ; )
    switch (r) {
      case "hex":
        return AF(this, e, a, i);
      case "utf8":
      case "utf-8":
        return BF(this, e, a, i);
      case "ascii":
        return V3(this, e, a, i);
      case "latin1":
      case "binary":
        return fF(this, e, a, i);
      case "base64":
        return yF(this, e, a, i);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return zF(this, e, a, i);
      default:
        if (o)
          throw new TypeError("Unknown encoding: " + r);
        r = ("" + r).toLowerCase(), o = !0;
    }
};
M.prototype.toJSON = function() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function SF(u, e, a) {
  return e === 0 && a === u.length ? u4(u) : u4(u.slice(e, a));
}
function I3(u, e, a) {
  a = Math.min(u.length, a);
  for (var i = [], r = e; r < a; ) {
    var n = u[r], o = null, t = n > 239 ? 4 : n > 223 ? 3 : n > 191 ? 2 : 1;
    if (r + t <= a) {
      var s, l, E, D;
      switch (t) {
        case 1:
          n < 128 && (o = n);
          break;
        case 2:
          s = u[r + 1], (s & 192) === 128 && (D = (n & 31) << 6 | s & 63, D > 127 && (o = D));
          break;
        case 3:
          s = u[r + 1], l = u[r + 2], (s & 192) === 128 && (l & 192) === 128 && (D = (n & 15) << 12 | (s & 63) << 6 | l & 63, D > 2047 && (D < 55296 || D > 57343) && (o = D));
          break;
        case 4:
          s = u[r + 1], l = u[r + 2], E = u[r + 3], (s & 192) === 128 && (l & 192) === 128 && (E & 192) === 128 && (D = (n & 15) << 18 | (s & 63) << 12 | (l & 63) << 6 | E & 63, D > 65535 && D < 1114112 && (o = D));
      }
    }
    o === null ? (o = 65533, t = 1) : o > 65535 && (o -= 65536, i.push(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), i.push(o), r += t;
  }
  return MF(i);
}
var a4 = 4096;
function MF(u) {
  var e = u.length;
  if (e <= a4)
    return String.fromCharCode.apply(String, u);
  for (var a = "", i = 0; i < e; )
    a += String.fromCharCode.apply(
      String,
      u.slice(i, i += a4)
    );
  return a;
}
function jF(u, e, a) {
  var i = "";
  a = Math.min(u.length, a);
  for (var r = e; r < a; ++r)
    i += String.fromCharCode(u[r] & 127);
  return i;
}
function PF(u, e, a) {
  var i = "";
  a = Math.min(u.length, a);
  for (var r = e; r < a; ++r)
    i += String.fromCharCode(u[r]);
  return i;
}
function TF(u, e, a) {
  var i = u.length;
  (!e || e < 0) && (e = 0), (!a || a < 0 || a > i) && (a = i);
  for (var r = "", n = e; n < a; ++n)
    r += RF(u[n]);
  return r;
}
function wF(u, e, a) {
  for (var i = u.slice(e, a), r = "", n = 0; n < i.length; n += 2)
    r += String.fromCharCode(i[n] + i[n + 1] * 256);
  return r;
}
M.prototype.slice = function(e, a) {
  var i = this.length;
  e = ~~e, a = a === void 0 ? i : ~~a, e < 0 ? (e += i, e < 0 && (e = 0)) : e > i && (e = i), a < 0 ? (a += i, a < 0 && (a = 0)) : a > i && (a = i), a < e && (a = e);
  var r;
  if (M.TYPED_ARRAY_SUPPORT)
    r = this.subarray(e, a), r.__proto__ = M.prototype;
  else {
    var n = a - e;
    r = new M(n, void 0);
    for (var o = 0; o < n; ++o)
      r[o] = this[o + e];
  }
  return r;
};
function Mu(u, e, a) {
  if (u % 1 !== 0 || u < 0)
    throw new RangeError("offset is not uint");
  if (u + e > a)
    throw new RangeError("Trying to access beyond buffer length");
}
M.prototype.readUIntLE = function(e, a, i) {
  e = e | 0, a = a | 0, i || Mu(e, a, this.length);
  for (var r = this[e], n = 1, o = 0; ++o < a && (n *= 256); )
    r += this[e + o] * n;
  return r;
};
M.prototype.readUIntBE = function(e, a, i) {
  e = e | 0, a = a | 0, i || Mu(e, a, this.length);
  for (var r = this[e + --a], n = 1; a > 0 && (n *= 256); )
    r += this[e + --a] * n;
  return r;
};
M.prototype.readUInt8 = function(e, a) {
  return a || Mu(e, 1, this.length), this[e];
};
M.prototype.readUInt16LE = function(e, a) {
  return a || Mu(e, 2, this.length), this[e] | this[e + 1] << 8;
};
M.prototype.readUInt16BE = function(e, a) {
  return a || Mu(e, 2, this.length), this[e] << 8 | this[e + 1];
};
M.prototype.readUInt32LE = function(e, a) {
  return a || Mu(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
};
M.prototype.readUInt32BE = function(e, a) {
  return a || Mu(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
};
M.prototype.readIntLE = function(e, a, i) {
  e = e | 0, a = a | 0, i || Mu(e, a, this.length);
  for (var r = this[e], n = 1, o = 0; ++o < a && (n *= 256); )
    r += this[e + o] * n;
  return n *= 128, r >= n && (r -= Math.pow(2, 8 * a)), r;
};
M.prototype.readIntBE = function(e, a, i) {
  e = e | 0, a = a | 0, i || Mu(e, a, this.length);
  for (var r = a, n = 1, o = this[e + --r]; r > 0 && (n *= 256); )
    o += this[e + --r] * n;
  return n *= 128, o >= n && (o -= Math.pow(2, 8 * a)), o;
};
M.prototype.readInt8 = function(e, a) {
  return a || Mu(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
};
M.prototype.readInt16LE = function(e, a) {
  a || Mu(e, 2, this.length);
  var i = this[e] | this[e + 1] << 8;
  return i & 32768 ? i | 4294901760 : i;
};
M.prototype.readInt16BE = function(e, a) {
  a || Mu(e, 2, this.length);
  var i = this[e + 1] | this[e] << 8;
  return i & 32768 ? i | 4294901760 : i;
};
M.prototype.readInt32LE = function(e, a) {
  return a || Mu(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
};
M.prototype.readInt32BE = function(e, a) {
  return a || Mu(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
};
M.prototype.readFloatLE = function(e, a) {
  return a || Mu(e, 4, this.length), Ar(this, e, !0, 23, 4);
};
M.prototype.readFloatBE = function(e, a) {
  return a || Mu(e, 4, this.length), Ar(this, e, !1, 23, 4);
};
M.prototype.readDoubleLE = function(e, a) {
  return a || Mu(e, 8, this.length), Ar(this, e, !0, 52, 8);
};
M.prototype.readDoubleBE = function(e, a) {
  return a || Mu(e, 8, this.length), Ar(this, e, !1, 52, 8);
};
function _u(u, e, a, i, r, n) {
  if (!A0(u))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e > r || e < n)
    throw new RangeError('"value" argument is out of bounds');
  if (a + i > u.length)
    throw new RangeError("Index out of range");
}
M.prototype.writeUIntLE = function(e, a, i, r) {
  if (e = +e, a = a | 0, i = i | 0, !r) {
    var n = Math.pow(2, 8 * i) - 1;
    _u(this, e, a, i, n, 0);
  }
  var o = 1, t = 0;
  for (this[a] = e & 255; ++t < i && (o *= 256); )
    this[a + t] = e / o & 255;
  return a + i;
};
M.prototype.writeUIntBE = function(e, a, i, r) {
  if (e = +e, a = a | 0, i = i | 0, !r) {
    var n = Math.pow(2, 8 * i) - 1;
    _u(this, e, a, i, n, 0);
  }
  var o = i - 1, t = 1;
  for (this[a + o] = e & 255; --o >= 0 && (t *= 256); )
    this[a + o] = e / t & 255;
  return a + i;
};
M.prototype.writeUInt8 = function(e, a, i) {
  return e = +e, a = a | 0, i || _u(this, e, a, 1, 255, 0), M.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[a] = e & 255, a + 1;
};
function Br(u, e, a, i) {
  e < 0 && (e = 65535 + e + 1);
  for (var r = 0, n = Math.min(u.length - a, 2); r < n; ++r)
    u[a + r] = (e & 255 << 8 * (i ? r : 1 - r)) >>> (i ? r : 1 - r) * 8;
}
M.prototype.writeUInt16LE = function(e, a, i) {
  return e = +e, a = a | 0, i || _u(this, e, a, 2, 65535, 0), M.TYPED_ARRAY_SUPPORT ? (this[a] = e & 255, this[a + 1] = e >>> 8) : Br(this, e, a, !0), a + 2;
};
M.prototype.writeUInt16BE = function(e, a, i) {
  return e = +e, a = a | 0, i || _u(this, e, a, 2, 65535, 0), M.TYPED_ARRAY_SUPPORT ? (this[a] = e >>> 8, this[a + 1] = e & 255) : Br(this, e, a, !1), a + 2;
};
function fr(u, e, a, i) {
  e < 0 && (e = 4294967295 + e + 1);
  for (var r = 0, n = Math.min(u.length - a, 4); r < n; ++r)
    u[a + r] = e >>> (i ? r : 3 - r) * 8 & 255;
}
M.prototype.writeUInt32LE = function(e, a, i) {
  return e = +e, a = a | 0, i || _u(this, e, a, 4, 4294967295, 0), M.TYPED_ARRAY_SUPPORT ? (this[a + 3] = e >>> 24, this[a + 2] = e >>> 16, this[a + 1] = e >>> 8, this[a] = e & 255) : fr(this, e, a, !0), a + 4;
};
M.prototype.writeUInt32BE = function(e, a, i) {
  return e = +e, a = a | 0, i || _u(this, e, a, 4, 4294967295, 0), M.TYPED_ARRAY_SUPPORT ? (this[a] = e >>> 24, this[a + 1] = e >>> 16, this[a + 2] = e >>> 8, this[a + 3] = e & 255) : fr(this, e, a, !1), a + 4;
};
M.prototype.writeIntLE = function(e, a, i, r) {
  if (e = +e, a = a | 0, !r) {
    var n = Math.pow(2, 8 * i - 1);
    _u(this, e, a, i, n - 1, -n);
  }
  var o = 0, t = 1, s = 0;
  for (this[a] = e & 255; ++o < i && (t *= 256); )
    e < 0 && s === 0 && this[a + o - 1] !== 0 && (s = 1), this[a + o] = (e / t >> 0) - s & 255;
  return a + i;
};
M.prototype.writeIntBE = function(e, a, i, r) {
  if (e = +e, a = a | 0, !r) {
    var n = Math.pow(2, 8 * i - 1);
    _u(this, e, a, i, n - 1, -n);
  }
  var o = i - 1, t = 1, s = 0;
  for (this[a + o] = e & 255; --o >= 0 && (t *= 256); )
    e < 0 && s === 0 && this[a + o + 1] !== 0 && (s = 1), this[a + o] = (e / t >> 0) - s & 255;
  return a + i;
};
M.prototype.writeInt8 = function(e, a, i) {
  return e = +e, a = a | 0, i || _u(this, e, a, 1, 127, -128), M.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[a] = e & 255, a + 1;
};
M.prototype.writeInt16LE = function(e, a, i) {
  return e = +e, a = a | 0, i || _u(this, e, a, 2, 32767, -32768), M.TYPED_ARRAY_SUPPORT ? (this[a] = e & 255, this[a + 1] = e >>> 8) : Br(this, e, a, !0), a + 2;
};
M.prototype.writeInt16BE = function(e, a, i) {
  return e = +e, a = a | 0, i || _u(this, e, a, 2, 32767, -32768), M.TYPED_ARRAY_SUPPORT ? (this[a] = e >>> 8, this[a + 1] = e & 255) : Br(this, e, a, !1), a + 2;
};
M.prototype.writeInt32LE = function(e, a, i) {
  return e = +e, a = a | 0, i || _u(this, e, a, 4, 2147483647, -2147483648), M.TYPED_ARRAY_SUPPORT ? (this[a] = e & 255, this[a + 1] = e >>> 8, this[a + 2] = e >>> 16, this[a + 3] = e >>> 24) : fr(this, e, a, !0), a + 4;
};
M.prototype.writeInt32BE = function(e, a, i) {
  return e = +e, a = a | 0, i || _u(this, e, a, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), M.TYPED_ARRAY_SUPPORT ? (this[a] = e >>> 24, this[a + 1] = e >>> 16, this[a + 2] = e >>> 8, this[a + 3] = e & 255) : fr(this, e, a, !1), a + 4;
};
function O3(u, e, a, i, r, n) {
  if (a + i > u.length)
    throw new RangeError("Index out of range");
  if (a < 0)
    throw new RangeError("Index out of range");
}
function J3(u, e, a, i, r) {
  return r || O3(u, e, a, 4), L3(u, e, a, i, 23, 4), a + 4;
}
M.prototype.writeFloatLE = function(e, a, i) {
  return J3(this, e, a, !0, i);
};
M.prototype.writeFloatBE = function(e, a, i) {
  return J3(this, e, a, !1, i);
};
function $3(u, e, a, i, r) {
  return r || O3(u, e, a, 8), L3(u, e, a, i, 52, 8), a + 8;
}
M.prototype.writeDoubleLE = function(e, a, i) {
  return $3(this, e, a, !0, i);
};
M.prototype.writeDoubleBE = function(e, a, i) {
  return $3(this, e, a, !1, i);
};
M.prototype.copy = function(e, a, i, r) {
  if (i || (i = 0), !r && r !== 0 && (r = this.length), a >= e.length && (a = e.length), a || (a = 0), r > 0 && r < i && (r = i), r === i || e.length === 0 || this.length === 0)
    return 0;
  if (a < 0)
    throw new RangeError("targetStart out of bounds");
  if (i < 0 || i >= this.length)
    throw new RangeError("sourceStart out of bounds");
  if (r < 0)
    throw new RangeError("sourceEnd out of bounds");
  r > this.length && (r = this.length), e.length - a < r - i && (r = e.length - a + i);
  var n = r - i, o;
  if (this === e && i < a && a < r)
    for (o = n - 1; o >= 0; --o)
      e[o + a] = this[o + i];
  else if (n < 1e3 || !M.TYPED_ARRAY_SUPPORT)
    for (o = 0; o < n; ++o)
      e[o + a] = this[o + i];
  else
    Uint8Array.prototype.set.call(
      e,
      this.subarray(i, i + n),
      a
    );
  return n;
};
M.prototype.fill = function(e, a, i, r) {
  if (typeof e == "string") {
    if (typeof a == "string" ? (r = a, a = 0, i = this.length) : typeof i == "string" && (r = i, i = this.length), e.length === 1) {
      var n = e.charCodeAt(0);
      n < 256 && (e = n);
    }
    if (r !== void 0 && typeof r != "string")
      throw new TypeError("encoding must be a string");
    if (typeof r == "string" && !M.isEncoding(r))
      throw new TypeError("Unknown encoding: " + r);
  } else
    typeof e == "number" && (e = e & 255);
  if (a < 0 || this.length < a || this.length < i)
    throw new RangeError("Out of range index");
  if (i <= a)
    return this;
  a = a >>> 0, i = i === void 0 ? this.length : i >>> 0, e || (e = 0);
  var o;
  if (typeof e == "number")
    for (o = a; o < i; ++o)
      this[o] = e;
  else {
    var t = A0(e) ? e : Ji(new M(e, r).toString()), s = t.length;
    for (o = 0; o < i - a; ++o)
      this[o + a] = t[o % s];
  }
  return this;
};
var NF = /[^+\/0-9A-Za-z-_]/g;
function LF(u) {
  if (u = KF(u).replace(NF, ""), u.length < 2)
    return "";
  for (; u.length % 4 !== 0; )
    u = u + "=";
  return u;
}
function KF(u) {
  return u.trim ? u.trim() : u.replace(/^\s+|\s+$/g, "");
}
function RF(u) {
  return u < 16 ? "0" + u.toString(16) : u.toString(16);
}
function Ji(u, e) {
  e = e || 1 / 0;
  for (var a, i = u.length, r = null, n = [], o = 0; o < i; ++o) {
    if (a = u.charCodeAt(o), a > 55295 && a < 57344) {
      if (!r) {
        if (a > 56319) {
          (e -= 3) > -1 && n.push(239, 191, 189);
          continue;
        } else if (o + 1 === i) {
          (e -= 3) > -1 && n.push(239, 191, 189);
          continue;
        }
        r = a;
        continue;
      }
      if (a < 56320) {
        (e -= 3) > -1 && n.push(239, 191, 189), r = a;
        continue;
      }
      a = (r - 55296 << 10 | a - 56320) + 65536;
    } else
      r && (e -= 3) > -1 && n.push(239, 191, 189);
    if (r = null, a < 128) {
      if ((e -= 1) < 0)
        break;
      n.push(a);
    } else if (a < 2048) {
      if ((e -= 2) < 0)
        break;
      n.push(
        a >> 6 | 192,
        a & 63 | 128
      );
    } else if (a < 65536) {
      if ((e -= 3) < 0)
        break;
      n.push(
        a >> 12 | 224,
        a >> 6 & 63 | 128,
        a & 63 | 128
      );
    } else if (a < 1114112) {
      if ((e -= 4) < 0)
        break;
      n.push(
        a >> 18 | 240,
        a >> 12 & 63 | 128,
        a >> 6 & 63 | 128,
        a & 63 | 128
      );
    } else
      throw new Error("Invalid code point");
  }
  return n;
}
function _F(u) {
  for (var e = [], a = 0; a < u.length; ++a)
    e.push(u.charCodeAt(a) & 255);
  return e;
}
function HF(u, e) {
  for (var a, i, r, n = [], o = 0; o < u.length && !((e -= 2) < 0); ++o)
    a = u.charCodeAt(o), i = a >> 8, r = a % 256, n.push(r), n.push(i);
  return n;
}
function q3(u) {
  return dF(LF(u));
}
function yr(u, e, a, i) {
  for (var r = 0; r < i && !(r + a >= e.length || r >= u.length); ++r)
    e[r + a] = u[r];
  return r;
}
function GF(u) {
  return u !== u;
}
function VF(u) {
  return u != null && (!!u._isBuffer || U3(u) || IF(u));
}
function U3(u) {
  return !!u.constructor && typeof u.constructor.isBuffer == "function" && u.constructor.isBuffer(u);
}
function IF(u) {
  return typeof u.readFloatLE == "function" && typeof u.slice == "function" && U3(u.slice(0, 0));
}
var Oa = {}, zr = {};
Object.defineProperty(zr, "__esModule", { value: !0 });
zr.concatChunkToBuffer = void 0;
function OF(u, e) {
  return M.isBuffer(u) || (u = M.from(u)), e.concat(u);
}
zr.concatChunkToBuffer = OF;
var Sr = {};
Object.defineProperty(Sr, "__esModule", { value: !0 });
Sr.normalizeClientRequestEndArgs = void 0;
var i4 = i0("http normalizeClientRequestEndArgs");
function JF() {
  for (var u = [], e = 0; e < arguments.length; e++)
    u[e] = arguments[e];
  i4("arguments", u);
  var a = new Array(3).fill(null).map(function(i, r) {
    return u[r] || i;
  });
  return a.sort(function(i, r) {
    return typeof i == "function" ? 1 : typeof r == "function" ? -1 : typeof i == "string" && typeof r == "string" ? a.indexOf(i) - a.indexOf(r) : 0;
  }), i4("normalized args", a), a;
}
Sr.normalizeClientRequestEndArgs = JF;
var Qe = {};
Object.defineProperty(Qe, "__esModule", { value: !0 });
Qe.toIsoResponse = void 0;
var $F = Sa;
function qF(u) {
  var e;
  return {
    status: (e = u.status) !== null && e !== void 0 ? e : 200,
    statusText: u.statusText || "OK",
    headers: $F.objectToHeaders(u.headers || {}),
    body: u.body
  };
}
Qe.toIsoResponse = qF;
var Mr = {}, UF = y && y.__createBinding || (Object.create ? function(u, e, a, i) {
  i === void 0 && (i = a), Object.defineProperty(u, i, { enumerable: !0, get: function() {
    return e[a];
  } });
} : function(u, e, a, i) {
  i === void 0 && (i = a), u[i] = e[a];
}), WF = y && y.__setModuleDefault || (Object.create ? function(u, e) {
  Object.defineProperty(u, "default", { enumerable: !0, value: e });
} : function(u, e) {
  u.default = e;
}), ZF = y && y.__importStar || function(u) {
  if (u && u.__esModule)
    return u;
  var e = {};
  if (u != null)
    for (var a in u)
      a !== "default" && Object.prototype.hasOwnProperty.call(u, a) && UF(e, u, a);
  return WF(e, u), e;
};
Object.defineProperty(Mr, "__esModule", { value: !0 });
Mr.getIncomingMessageBody = void 0;
var YF = i0, QF = b0, XF = ZF(b0), ra = YF.debug("http getIncomingMessageBody");
function uk(u) {
  return new Promise(function(e, a) {
    ra("cloning the original response...");
    var i = u.pipe(new QF.PassThrough()), r = u.headers["content-encoding"] === "gzip" ? i.pipe(XF.createGunzip()) : i, n = u.readableEncoding || "utf8";
    r.setEncoding(n), ra("using encoding:", n);
    var o = "";
    r.on("data", function(t) {
      ra("response body read:", t), o += t;
    }), r.once("end", function() {
      ra("response body end"), e(o);
    }), r.once("error", function(t) {
      ra("error while reading response body:", t), a(t);
    });
  });
}
Mr.getIncomingMessageBody = uk;
var jr = {};
Object.defineProperty(jr, "__esModule", { value: !0 });
jr.bodyBufferToString = void 0;
function ek(u) {
  var e = u.toString("utf8"), a = M.from(e), i = a.equals(u);
  return i ? e : u.toString("hex");
}
jr.bodyBufferToString = ek;
var Pr = {};
Object.defineProperty(Pr, "__esModule", { value: !0 });
Pr.normalizeClientRequestWriteArgs = void 0;
var ak = i0, r4 = ak.debug("http normalizeWriteArgs");
function ik(u) {
  r4("normalizing ClientRequest.write arguments...", u);
  var e = u[0], a = typeof u[1] == "string" ? u[1] : void 0, i = typeof u[1] == "function" ? u[1] : u[2], r = [
    e,
    a,
    i
  ];
  return r4("successfully normalized ClientRequest.write arguments:", r), r;
}
Pr.normalizeClientRequestWriteArgs = ik;
var W3 = {};
(function(u) {
  var e = y && y.__read || function(l, E) {
    var D = typeof Symbol == "function" && l[Symbol.iterator];
    if (!D)
      return l;
    var x = D.call(l), c, d = [], m;
    try {
      for (; (E === void 0 || E-- > 0) && !(c = x.next()).done; )
        d.push(c.value);
    } catch (k) {
      m = { error: k };
    } finally {
      try {
        c && !c.done && (D = x.return) && D.call(x);
      } finally {
        if (m)
          throw m.error;
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
  var r = b0, n = b0;
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
      for (var d = i(c), m = d.next(); !m.done; m = d.next()) {
        var k = m.value;
        if (!E.hasOwnProperty(k)) {
          var g = Object.getOwnPropertyDescriptor(l, k);
          g && Object.defineProperty(E, k, g);
        }
      }
    } catch (P) {
      D = { error: P };
    } finally {
      try {
        m && !m.done && (x = d.return) && x.call(d);
      } finally {
        if (D)
          throw D.error;
      }
    }
  }
})(W3);
var rk = y && y.__extends || function() {
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
}(), n4 = y && y.__awaiter || function(u, e, a, i) {
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
}, o4 = y && y.__generator || function(u, e) {
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
}, Nu = y && y.__read || function(u, e) {
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
}, ge = y && y.__spreadArray || function(u, e) {
  for (var a = 0, i = e.length, r = u.length; a < i; a++, r++)
    u[r] = e[a];
  return u;
}, jn = y && y.__values || function(u) {
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
Object.defineProperty(Oa, "__esModule", { value: !0 });
Oa.NodeClientRequest = void 0;
var t4 = b0, nk = L0, s4 = Sa, l4 = zr, ok = Sr, tk = Qe, sk = Mr, lk = jr, Ek = Pr, E4 = W3, Dk = Q0, xk = ke, ck = a0, dk = (
  /** @class */
  function(u) {
    rk(e, u);
    function e(a, i) {
      var r = Nu(a, 3), n = r[0], o = r[1], t = r[2], s = u.call(this, o, t) || this;
      return s.chunks = [], s.responseSource = "mock", s.requestBody = [], s.log = i.log.extend("request " + o.method + " " + n.href), s.log("constructing ClientRequest using options:", {
        url: n,
        requestOptions: o,
        callback: t
      }), s.url = n, s.options = o, s.emitter = i.emitter, s.response = new t4.IncomingMessage(s.socket), s;
    }
    return e.prototype.write = function() {
      for (var a = [], i = 0; i < arguments.length; i++)
        a[i] = arguments[i];
      var r = Nu(Ek.normalizeClientRequestWriteArgs(a), 3), n = r[0], o = r[1], t = r[2];
      return this.log("write:", { chunk: n, encoding: o, callback: t }), this.chunks.push({ chunk: n, encoding: o }), this.requestBody = l4.concatChunkToBuffer(n, this.requestBody), this.log("chunk successfully stored!", this.requestBody), !n || n.length === 0 ? this.log("written chunk is empty, skipping callback...") : t == null || t(), !0;
    }, e.prototype.end = function() {
      for (var a = this, i = [], r = 0; r < arguments.length; r++)
        i[r] = arguments[r];
      this.log("end", i);
      var n = Nu(ok.normalizeClientRequestEndArgs.apply(void 0, ge([], Nu(i))), 3), o = n[0], t = n[1], s = n[2];
      this.log("normalized arguments:", { chunk: o, encoding: t, callback: s });
      var l = this.getRequestBody(o), E = this.toIsomorphicRequest(l), D = new xk.InteractiveIsomorphicRequest(E);
      return this.log('emitting the "request" event for %d listener(s)...', this.emitter.listenerCount("request")), this.emitter.emit("request", D), nk.until(function() {
        return n4(a, void 0, void 0, function() {
          var x, c;
          return o4(this, function(d) {
            switch (d.label) {
              case 0:
                return [4, this.emitter.untilIdle("request", function(m) {
                  var k = Nu(m.args, 1), g = k[0];
                  return g.id === D.id;
                })];
              case 1:
                return d.sent(), [4, D.respondWith.invoked()];
              case 2:
                return x = Nu.apply(void 0, [d.sent(), 1]), c = x[0], this.log("event.respondWith called with:", c), [2, c];
            }
          });
        });
      }).then(function(x) {
        var c, d, m = Nu(x, 2), k = m[0], g = m[1];
        if (a.log("the listeners promise awaited!"), k)
          return a.log("encountered resolver exception, aborting request...", k), a.emit("error", k), a.terminate(), a;
        if (g) {
          a.log("received mocked response:", g), a.responseSource = "mock";
          var P = tk.toIsoResponse(g);
          return a.respondWith(g), a.log(P.status, P.statusText, P.body, "(MOCKED)"), s == null || s(), a.log('emitting the custom "response" event...'), a.emitter.emit("response", E, P), a;
        }
        if (a.log("no mocked response received!"), a.responseSource = "bypass", a.capturedError)
          return a.emit("error", a.capturedError), a;
        a.log("writing request chunks...", a.chunks);
        try {
          for (var A = jn(a.chunks), v = A.next(); !v.done; v = A.next()) {
            var N = v.value, H = N.chunk, $ = N.encoding;
            $ ? u.prototype.write.call(a, H, $) : u.prototype.write.call(a, H);
          }
        } catch (O) {
          c = { error: O };
        } finally {
          try {
            v && !v.done && (d = A.return) && d.call(A);
          } finally {
            if (c)
              throw c.error;
          }
        }
        return a.once("error", function(O) {
          a.log("original request error:", O);
        }), a.once("abort", function() {
          a.log("original request aborted!");
        }), a.once("response-internal", function(O) {
          return n4(a, void 0, void 0, function() {
            var b;
            return o4(this, function(w) {
              switch (w.label) {
                case 0:
                  return [4, sk.getIncomingMessageBody(O)];
                case 1:
                  return b = w.sent(), this.log(O.statusCode, O.statusMessage, b), this.log("original response headers:", O.headers), this.log('emitting the custom "response" event...'), this.emitter.emit("response", E, {
                    status: O.statusCode || 200,
                    statusText: O.statusMessage || "OK",
                    headers: s4.objectToHeaders(O.headers),
                    body: b
                  }), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }), a.log("performing original request..."), u.prototype.end.apply(a, ge([], Nu([
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
          var n = i[0], o = E4.cloneIncomingMessage(n), t = E4.cloneIncomingMessage(n);
          return this.emit("response-internal", t), this.log('response successfully cloned, emitting "response" event...'), u.prototype.emit.apply(this, ge([a, o], Nu(i.slice(1))));
        } catch (E) {
          return this.log("error when cloning response:", E), u.prototype.emit.apply(this, ge([a], Nu(i)));
        }
      }
      if (a === "error") {
        var s = i[0], l = s.code || "";
        if (this.log(`error:
`, s), this.responseSource === "mock" && e.suppressErrorCodes.includes(l))
          return this.capturedError || (this.capturedError = s, this.log("captured the first error:", this.capturedError)), !1;
      }
      return u.prototype.emit.apply(this, ge([a], Nu(i)));
    }, e.prototype.respondWith = function(a) {
      var i, r, n;
      this.log("responding with a mocked response...", a);
      var o = a.status, t = a.statusText, s = a.headers, l = a.body;
      if (this.response.statusCode = o, this.response.statusMessage = t, s) {
        this.response.headers = {};
        try {
          for (var E = jn(Object.entries(s)), D = E.next(); !D.done; D = E.next()) {
            var x = Nu(D.value, 2), c = x[0], d = x[1];
            (n = this.response.rawHeaders).push.apply(n, ge([c], Nu(Array.isArray(d) ? d : [d])));
            var m = c.toLowerCase(), k = this.response.headers[m];
            this.response.headers[m] = k ? Array.prototype.concat([], k, d) : d;
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
      this.log("mocked response headers ready:", s), l && this.response.push(M.from(l)), this.response.push(null), this.response.complete = !0, this.res = this.response, this.finished = !0, Object.defineProperty(this, "writableEnded", {
        value: !0
      }), this.emit("finish"), this.emit("response", this.response), this.terminate();
    }, e.prototype.terminate = function() {
      var a;
      (a = this.agent) === null || a === void 0 || a.destroy();
    }, e.prototype.getRequestBody = function(a) {
      var i = lk.bodyBufferToString(M.concat(this.requestBody));
      this.log("written request body:", i), a && (this.requestBody = l4.concatChunkToBuffer(a, this.requestBody));
      var r = M.concat(this.requestBody);
      return this.log("resolved request body:", r), ck.getArrayBuffer(r);
    }, e.prototype.toIsomorphicRequest = function(a) {
      var i, r;
      this.log("creating isomorphic request object...");
      var n = this.getHeaders();
      this.log("request outgoing headers:", n);
      var o = new s4.Headers();
      try {
        for (var t = jn(Object.entries(n)), s = t.next(); !s.done; s = t.next()) {
          var l = Nu(s.value, 2), E = l[0], D = l[1];
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
      var x = new Dk.IsomorphicRequest(this.url, {
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
  }(t4.ClientRequest)
);
Oa.NodeClientRequest = dk;
var Ja = {}, Tr = {};
Object.defineProperty(Tr, "__esModule", { value: !0 });
Tr.getRequestOptionsByUrl = void 0;
function mk(u) {
  var e = {
    method: "GET",
    protocol: u.protocol,
    hostname: typeof u.hostname == "string" && u.hostname.startsWith("[") ? u.hostname.slice(1, -1) : u.hostname,
    host: u.host,
    path: "" + u.pathname + (u.search || "")
  };
  return u.port && (e.port = Number(u.port)), (u.username || u.password) && (e.auth = u.username + ":" + u.password), e;
}
Tr.getRequestOptionsByUrl = mk;
var Z3 = {};
(function(u) {
  var e = y && y.__read || function(d, m) {
    var k = typeof Symbol == "function" && d[Symbol.iterator];
    if (!k)
      return d;
    var g = k.call(d), P, A = [], v;
    try {
      for (; (m === void 0 || m-- > 0) && !(P = g.next()).done; )
        A.push(P.value);
    } catch (N) {
      v = { error: N };
    } finally {
      try {
        P && !P.done && (k = g.return) && k.call(g);
      } finally {
        if (v)
          throw v.error;
      }
    }
    return A;
  };
  Object.defineProperty(u, "__esModule", { value: !0 }), u.getUrlByRequestOptions = u.DEFAULT_PATH = void 0;
  var a = b0, i = i0("utils getUrlByRequestOptions");
  u.DEFAULT_PATH = "/";
  var r = "http:", n = "localhost", o = 80, t = 443;
  function s(d) {
    return d.agent instanceof a.Agent ? d.agent : void 0;
  }
  function l(d) {
    var m, k;
    if (d.protocol)
      return d.protocol;
    var g = s(d), P = (m = g) === null || m === void 0 ? void 0 : m.protocol;
    if (P)
      return P;
    var A = E(d), v = d.cert || A === t;
    return v ? "https:" : ((k = d.uri) === null || k === void 0 ? void 0 : k.protocol) || r;
  }
  function E(d) {
    var m, k, g = s(d), P = ((m = g) === null || m === void 0 ? void 0 : m.options.port) || ((k = g) === null || k === void 0 ? void 0 : k.defaultPort), A = d.port;
    if (A || P) {
      var v = A || P || o;
      return Number(v);
    }
  }
  function D(d) {
    return d.hostname || d.host || n;
  }
  function x(d) {
    if (d.auth) {
      var m = e(d.auth.split(":"), 2), k = m[0], g = m[1];
      return { username: k, password: g };
    }
  }
  function c(d) {
    i("request options", d);
    var m = l(d), k = D(d), g = E(d), P = d.path || u.DEFAULT_PATH, A = x(d);
    i("protocol", m), i("host", k), i("port", g), i("path", P);
    var v = m + "//" + k;
    i("base URL:", v);
    var N = d.uri ? new URL(d.uri.href) : new URL(P, v);
    return g && (i("detected explicit port", g), N.port = g.toString()), A && (i("resolved auth", A), N.username = A.username, N.password = A.password), i("created URL:", N), N;
  }
  u.getUrlByRequestOptions = c;
})(Z3);
var wr = {}, Fk = y && y.__read || function(u, e) {
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
Object.defineProperty(wr, "__esModule", { value: !0 });
wr.cloneObject = void 0;
var ca = i0("cloneObject");
function D4(u) {
  var e;
  return ca("is plain object?", u), u == null || !(!((e = u.constructor) === null || e === void 0) && e.name) ? (ca("given object is undefined, not a plain object..."), !1) : (ca("checking the object constructor:", u.constructor.name), u.constructor.name === "Object");
}
function Y3(u) {
  ca("cloning object:", u);
  var e = Object.entries(u).reduce(function(a, i) {
    var r = Fk(i, 2), n = r[0], o = r[1];
    return ca("analyzing key-value pair:", n, o), a[n] = D4(o) ? Y3(o) : o, a;
  }, {});
  return D4(u) ? e : Object.assign(Object.getPrototypeOf(u), e);
}
wr.cloneObject = Y3;
var Nr = {};
Object.defineProperty(Nr, "__esModule", { value: !0 });
Nr.isObject = void 0;
function kk(u) {
  return Object.prototype.toString.call(u) === "[object Object]";
}
Nr.isObject = kk;
var Ba = y && y.__assign || function() {
  return Ba = Object.assign || function(u) {
    for (var e, a = 1, i = arguments.length; a < i; a++) {
      e = arguments[a];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (u[r] = e[r]);
    }
    return u;
  }, Ba.apply(this, arguments);
}, pk = y && y.__read || function(u, e) {
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
Object.defineProperty(Ja, "__esModule", { value: !0 });
Ja.normalizeClientRequestArgs = void 0;
var hk = i0, x4 = b0, c4 = b0, no = Tr, gk = Z3, Ck = wr, d4 = Nr, Du = hk.debug("http normalizeClientRequestArgs");
function m4(u, e) {
  if (typeof u[1] > "u" || typeof u[1] == "function")
    return Du("request options not provided, deriving from the url", e), no.getRequestOptionsByUrl(e);
  if (u[1]) {
    Du("has custom RequestOptions!", u[1]);
    var a = no.getRequestOptionsByUrl(e);
    Du("derived RequestOptions from the URL:", a), Du("cloning RequestOptions...");
    var i = Ck.cloneObject(u[1]);
    return Du("successfully cloned RequestOptions!", i), Ba(Ba({}, a), i);
  }
  return Du("using an empty object as request options"), {};
}
function Pn(u) {
  return typeof u[1] == "function" ? u[1] : u[2];
}
function ye(u) {
  for (var e = [], a = 1; a < arguments.length; a++)
    e[a - 1] = arguments[a];
  var i, r, n;
  if (Du("arguments", e), Du("using default protocol:", u), typeof e[0] == "string") {
    Du("first argument is a location string:", e[0]), i = new URL(e[0]), Du("created a url:", i);
    var o = no.getRequestOptionsByUrl(i);
    Du("request options from url:", o), r = m4(e, i), Du("resolved request options:", r), n = Pn(e);
  } else if (e[0] instanceof URL)
    i = e[0], Du("first argument is a URL:", i), r = m4(e, i), Du("derived request options:", r), n = Pn(e);
  else if ("hash" in e[0] && !("method" in e[0])) {
    var t = pk(e, 1), s = t[0];
    if (Du("first argument is a legacy URL:", s), s.hostname === null)
      return Du("given legacy URL is relative (no hostname)"), d4.isObject(e[1]) ? ye(u, Ba({ path: s.path }, e[1]), e[2]) : ye(u, { path: s.path }, e[1]);
    Du("given legacy url is absolute");
    var l = new URL(s.href);
    return e[1] === void 0 ? ye(u, l) : typeof e[1] == "function" ? ye(u, l, e[1]) : ye(u, l, e[1], e[2]);
  } else if (d4.isObject(e[0]))
    r = e[0], Du("first argument is RequestOptions:", r), r.protocol = r.protocol || u, Du("normalized request options:", r), i = gk.getUrlByRequestOptions(r), Du("created a URL from RequestOptions:", i.href), n = Pn(e);
  else
    throw new Error("Failed to construct ClientRequest with these parameters: " + e);
  if (r.protocol = r.protocol || i.protocol, r.method = r.method || "GET", typeof r.agent > "u") {
    var E = r.protocol === "https:" ? new c4.Agent({
      rejectUnauthorized: r.rejectUnauthorized
    }) : new x4.Agent();
    r.agent = E, Du("resolved fallback agent:", E);
  }
  return r._defaultAgent || (Du('has no default agent, setting the default agent for "%s"', r.protocol), r._defaultAgent = r.protocol === "https:" ? c4.globalAgent : x4.globalAgent), Du("successfully resolved url:", i.href), Du("successfully resolved options:", r), Du("successfully resolved callback:", n), [i, r, n];
}
Ja.normalizeClientRequestArgs = ye;
var vk = y && y.__read || function(u, e) {
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
}, bk = y && y.__spreadArray || function(u, e) {
  for (var a = 0, i = e.length, r = u.length; a < i; a++, r++)
    u[r] = e[a];
  return u;
};
Object.defineProperty(br, "__esModule", { value: !0 });
br.get = void 0;
var Ak = Oa, Bk = Ja;
function fk(u, e) {
  return function() {
    for (var a = [], i = 0; i < arguments.length; i++)
      a[i] = arguments[i];
    var r = Bk.normalizeClientRequestArgs.apply(void 0, bk([u + ":"], vk(a))), n = new Ak.NodeClientRequest(r, e);
    return n.end(), n;
  };
}
br.get = fk;
var Lr = {}, yk = y && y.__read || function(u, e) {
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
}, zk = y && y.__spreadArray || function(u, e) {
  for (var a = 0, i = e.length, r = u.length; a < i; a++, r++)
    u[r] = e[a];
  return u;
};
Object.defineProperty(Lr, "__esModule", { value: !0 });
Lr.request = void 0;
var Sk = i0, Mk = Oa, jk = Ja, Pk = Sk.debug("http request");
function Tk(u, e) {
  return function() {
    for (var a = [], i = 0; i < arguments.length; i++)
      a[i] = arguments[i];
    Pk('request call (protocol "%s"):', u, a);
    var r = jk.normalizeClientRequestArgs.apply(void 0, zk([u + ":"], yk(a)));
    return new Mk.NodeClientRequest(r, e);
  };
}
Lr.request = Tk;
var wk = y && y.__extends || function() {
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
}(), Nk = y && y.__values || function(u) {
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
}, Lk = y && y.__read || function(u, e) {
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
}, Q3 = y && y.__importDefault || function(u) {
  return u && u.__esModule ? u : { default: u };
};
Object.defineProperty(mt, "__esModule", { value: !0 });
var X3 = mt.ClientRequestInterceptor = void 0, Kk = Q3(b0), Rk = Q3(b0), _k = ja, Tn = me, Hk = qe, Gk = br, Vk = Lr, Ik = (
  /** @class */
  function(u) {
    wk(e, u);
    function e() {
      var a = u.call(this, e.symbol) || this;
      return a.modules = /* @__PURE__ */ new Map(), a.modules.set("http", Kk.default), a.modules.set("https", Rk.default), a;
    }
    return e.prototype.setup = function() {
      var a, i, r = this.log.extend("setup"), n = function(x, c) {
        var d = c.request, m = c.get;
        _k.invariant(!c[Tn.IS_PATCHED_MODULE], 'Failed to patch the "%s" module: already patched.', x), o.subscriptions.push(function() {
          Object.defineProperty(c, Tn.IS_PATCHED_MODULE, {
            value: void 0
          }), c.request = d, c.get = m, r('native "%s" module restored!', x);
        });
        var k = {
          emitter: o.emitter,
          log: o.log
        };
        c.request = // Force a line break.
        Vk.request(x, k), c.get = // Force a line break.
        Gk.get(x, k), Object.defineProperty(c, Tn.IS_PATCHED_MODULE, {
          configurable: !0,
          enumerable: !0,
          value: !0
        }), r('native "%s" module patched!', x);
      }, o = this;
      try {
        for (var t = Nk(this.modules), s = t.next(); !s.done; s = t.next()) {
          var l = Lk(s.value, 2), E = l[0], D = l[1];
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
  }(Hk.Interceptor)
);
X3 = mt.ClientRequestInterceptor = Ik;
var Kr = {}, Rr = {}, _r = {}, K0 = {}, R0 = {};
function Ok(u, e, a) {
  if (a === void 0 && (a = Array.prototype), u && typeof a.find == "function")
    return a.find.call(u, e);
  for (var i = 0; i < u.length; i++)
    if (Object.prototype.hasOwnProperty.call(u, i)) {
      var r = u[i];
      if (e.call(void 0, r, i, u))
        return r;
    }
}
function ht(u, e) {
  return e === void 0 && (e = Object), e && typeof e.freeze == "function" ? e.freeze(u) : u;
}
function Jk(u, e) {
  if (u === null || typeof u != "object")
    throw new TypeError("target is not an object");
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && (u[a] = e[a]);
  return u;
}
var uE = ht({
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
    return u === uE.HTML;
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
}), eE = ht({
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
    return u === eE.HTML;
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
R0.assign = Jk;
R0.find = Ok;
R0.freeze = ht;
R0.MIME_TYPE = uE;
R0.NAMESPACE = eE;
var aE = R0, k0 = aE.find, fa = aE.NAMESPACE;
function $k(u) {
  return u !== "";
}
function qk(u) {
  return u ? u.split(/[\t\n\f\r ]+/).filter($k) : [];
}
function Uk(u, e) {
  return u.hasOwnProperty(e) || (u[e] = !0), u;
}
function F4(u) {
  if (!u)
    return [];
  var e = qk(u);
  return Object.keys(e.reduce(Uk, {}));
}
function Wk(u) {
  return function(e) {
    return u && u.indexOf(e) !== -1;
  };
}
function $a(u, e) {
  for (var a in u)
    Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
}
function Hu(u, e) {
  var a = u.prototype;
  if (!(a instanceof e)) {
    let i = function() {
    };
    i.prototype = e.prototype, i = new i(), $a(a, i), u.prototype = a = i;
  }
  a.constructor != u && (typeof u != "function" && console.error("unknown Class:" + u), a.constructor = u);
}
var Gu = {}, D0 = Gu.ELEMENT_NODE = 1, Ve = Gu.ATTRIBUTE_NODE = 2, $i = Gu.TEXT_NODE = 3, iE = Gu.CDATA_SECTION_NODE = 4, rE = Gu.ENTITY_REFERENCE_NODE = 5, Zk = Gu.ENTITY_NODE = 6, nE = Gu.PROCESSING_INSTRUCTION_NODE = 7, oE = Gu.COMMENT_NODE = 8, tE = Gu.DOCUMENT_NODE = 9, sE = Gu.DOCUMENT_TYPE_NODE = 10, w0 = Gu.DOCUMENT_FRAGMENT_NODE = 11, Yk = Gu.NOTATION_NODE = 12, Tu = {}, Su = {};
Tu.INDEX_SIZE_ERR = (Su[1] = "Index size error", 1);
Tu.DOMSTRING_SIZE_ERR = (Su[2] = "DOMString size error", 2);
var Lu = Tu.HIERARCHY_REQUEST_ERR = (Su[3] = "Hierarchy request error", 3);
Tu.WRONG_DOCUMENT_ERR = (Su[4] = "Wrong document", 4);
Tu.INVALID_CHARACTER_ERR = (Su[5] = "Invalid character", 5);
Tu.NO_DATA_ALLOWED_ERR = (Su[6] = "No data allowed", 6);
Tu.NO_MODIFICATION_ALLOWED_ERR = (Su[7] = "No modification allowed", 7);
var lE = Tu.NOT_FOUND_ERR = (Su[8] = "Not found", 8);
Tu.NOT_SUPPORTED_ERR = (Su[9] = "Not supported", 9);
var k4 = Tu.INUSE_ATTRIBUTE_ERR = (Su[10] = "Attribute in use", 10);
Tu.INVALID_STATE_ERR = (Su[11] = "Invalid state", 11);
Tu.SYNTAX_ERR = (Su[12] = "Syntax error", 12);
Tu.INVALID_MODIFICATION_ERR = (Su[13] = "Invalid modification", 13);
Tu.NAMESPACE_ERR = (Su[14] = "Invalid namespace", 14);
Tu.INVALID_ACCESS_ERR = (Su[15] = "Invalid access", 15);
function pu(u, e) {
  if (e instanceof Error)
    var a = e;
  else
    a = this, Error.call(this, Su[u]), this.message = Su[u], Error.captureStackTrace && Error.captureStackTrace(this, pu);
  return a.code = u, e && (this.message = this.message + ": " + e), a;
}
pu.prototype = Error.prototype;
$a(Tu, pu);
function M0() {
}
M0.prototype = {
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
      je(this[i], a, u, e);
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
function Ie(u, e) {
  this._node = u, this._refresh = e, gt(this);
}
function gt(u) {
  var e = u._node._inc || u._node.ownerDocument._inc;
  if (u._inc != e) {
    var a = u._refresh(u._node);
    CE(u, "length", a.length), $a(a, u), u._inc = e;
  }
}
Ie.prototype.item = function(u) {
  return gt(this), this[u];
};
Hu(Ie, M0);
function qi() {
}
function EE(u, e) {
  for (var a = u.length; a--; )
    if (u[a] === e)
      return a;
}
function p4(u, e, a, i) {
  if (i ? e[EE(e, i)] = a : e[e.length++] = a, u) {
    a.ownerElement = u;
    var r = u.ownerDocument;
    r && (i && cE(r, u, i), Qk(r, u, a));
  }
}
function h4(u, e, a) {
  var i = EE(e, a);
  if (i >= 0) {
    for (var r = e.length - 1; i < r; )
      e[i] = e[++i];
    if (e.length = r, u) {
      var n = u.ownerDocument;
      n && (cE(n, u, a), a.ownerElement = null);
    }
  } else
    throw new pu(lE, new Error(u.tagName + "@" + a));
}
qi.prototype = {
  length: 0,
  item: M0.prototype.item,
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
      throw new pu(k4);
    var a = this.getNamedItem(u.nodeName);
    return p4(this._ownerElement, this, u, a), a;
  },
  /* returns Node */
  setNamedItemNS: function(u) {
    var e = u.ownerElement, a;
    if (e && e != this._ownerElement)
      throw new pu(k4);
    return a = this.getNamedItemNS(u.namespaceURI, u.localName), p4(this._ownerElement, this, u, a), a;
  },
  /* returns Node */
  removeNamedItem: function(u) {
    var e = this.getNamedItem(u);
    return h4(this._ownerElement, this, e), e;
  },
  // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
  //for level2
  removeNamedItemNS: function(u, e) {
    var a = this.getNamedItemNS(u, e);
    return h4(this._ownerElement, this, a), a;
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
function DE() {
}
DE.prototype = {
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
    var i = new qa();
    if (i.implementation = this, i.childNodes = new M0(), i.doctype = a || null, a && i.appendChild(a), e) {
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
    var i = new Hr();
    return i.name = u, i.nodeName = u, i.publicId = e || "", i.systemId = a || "", i;
  }
};
function nu() {
}
nu.prototype = {
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
    return Ui(this, u, e);
  },
  replaceChild: function(u, e) {
    Ui(this, u, e, mE), e && this.removeChild(e);
  },
  removeChild: function(u) {
    return dE(this, u);
  },
  appendChild: function(u) {
    return this.insertBefore(u, null);
  },
  hasChildNodes: function() {
    return this.firstChild != null;
  },
  cloneNode: function(u) {
    return oo(this.ownerDocument || this, this, u);
  },
  // Modified in DOM Level 2:
  normalize: function() {
    for (var u = this.firstChild; u; ) {
      var e = u.nextSibling;
      e && e.nodeType == $i && u.nodeType == $i ? (this.removeChild(e), u.appendData(e.data)) : (u.normalize(), u = e);
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
      e = e.nodeType == Ve ? e.ownerDocument : e.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  lookupNamespaceURI: function(u) {
    for (var e = this; e; ) {
      var a = e._nsMap;
      if (a && Object.prototype.hasOwnProperty.call(a, u))
        return a[u];
      e = e.nodeType == Ve ? e.ownerDocument : e.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  isDefaultNamespace: function(u) {
    var e = this.lookupPrefix(u);
    return e == null;
  }
};
function xE(u) {
  return u == "<" && "&lt;" || u == ">" && "&gt;" || u == "&" && "&amp;" || u == '"' && "&quot;" || "&#" + u.charCodeAt() + ";";
}
$a(Gu, nu);
$a(Gu, nu.prototype);
function ya(u, e) {
  if (e(u))
    return !0;
  if (u = u.firstChild)
    do
      if (ya(u, e))
        return !0;
    while (u = u.nextSibling);
}
function qa() {
  this.ownerDocument = this;
}
function Qk(u, e, a) {
  u && u._inc++;
  var i = a.namespaceURI;
  i === fa.XMLNS && (e._nsMap[a.prefix ? a.localName : ""] = a.value);
}
function cE(u, e, a, i) {
  u && u._inc++;
  var r = a.namespaceURI;
  r === fa.XMLNS && delete e._nsMap[a.prefix ? a.localName : ""];
}
function Ct(u, e, a) {
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
function dE(u, e) {
  var a = e.previousSibling, i = e.nextSibling;
  return a ? a.nextSibling = i : u.firstChild = i, i ? i.previousSibling = a : u.lastChild = a, e.parentNode = null, e.previousSibling = null, e.nextSibling = null, Ct(u.ownerDocument, u), e;
}
function Xk(u) {
  return u && (u.nodeType === nu.DOCUMENT_NODE || u.nodeType === nu.DOCUMENT_FRAGMENT_NODE || u.nodeType === nu.ELEMENT_NODE);
}
function up(u) {
  return u && (p0(u) || vt(u) || N0(u) || u.nodeType === nu.DOCUMENT_FRAGMENT_NODE || u.nodeType === nu.COMMENT_NODE || u.nodeType === nu.PROCESSING_INSTRUCTION_NODE);
}
function N0(u) {
  return u && u.nodeType === nu.DOCUMENT_TYPE_NODE;
}
function p0(u) {
  return u && u.nodeType === nu.ELEMENT_NODE;
}
function vt(u) {
  return u && u.nodeType === nu.TEXT_NODE;
}
function g4(u, e) {
  var a = u.childNodes || [];
  if (k0(a, p0) || N0(e))
    return !1;
  var i = k0(a, N0);
  return !(e && i && a.indexOf(i) > a.indexOf(e));
}
function C4(u, e) {
  var a = u.childNodes || [];
  function i(n) {
    return p0(n) && n !== e;
  }
  if (k0(a, i))
    return !1;
  var r = k0(a, N0);
  return !(e && r && a.indexOf(r) > a.indexOf(e));
}
function ep(u, e, a) {
  if (!Xk(u))
    throw new pu(Lu, "Unexpected parent node type " + u.nodeType);
  if (a && a.parentNode !== u)
    throw new pu(lE, "child not in parent");
  if (
    // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
    !up(e) || // 5. If either `node` is a Text node and `parent` is a document,
    // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
    // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
    // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
    N0(e) && u.nodeType !== nu.DOCUMENT_NODE
  )
    throw new pu(
      Lu,
      "Unexpected node type " + e.nodeType + " for parent node type " + u.nodeType
    );
}
function ap(u, e, a) {
  var i = u.childNodes || [], r = e.childNodes || [];
  if (e.nodeType === nu.DOCUMENT_FRAGMENT_NODE) {
    var n = r.filter(p0);
    if (n.length > 1 || k0(r, vt))
      throw new pu(Lu, "More than one element or text in fragment");
    if (n.length === 1 && !g4(u, a))
      throw new pu(Lu, "Element in fragment can not be inserted before doctype");
  }
  if (p0(e) && !g4(u, a))
    throw new pu(Lu, "Only one element can be added and only after doctype");
  if (N0(e)) {
    if (k0(i, N0))
      throw new pu(Lu, "Only one doctype is allowed");
    var o = k0(i, p0);
    if (a && i.indexOf(o) < i.indexOf(a))
      throw new pu(Lu, "Doctype can only be inserted before an element");
    if (!a && o)
      throw new pu(Lu, "Doctype can not be appended since element is present");
  }
}
function mE(u, e, a) {
  var i = u.childNodes || [], r = e.childNodes || [];
  if (e.nodeType === nu.DOCUMENT_FRAGMENT_NODE) {
    var n = r.filter(p0);
    if (n.length > 1 || k0(r, vt))
      throw new pu(Lu, "More than one element or text in fragment");
    if (n.length === 1 && !C4(u, a))
      throw new pu(Lu, "Element in fragment can not be inserted before doctype");
  }
  if (p0(e) && !C4(u, a))
    throw new pu(Lu, "Only one element can be added and only after doctype");
  if (N0(e)) {
    if (k0(i, function(s) {
      return N0(s) && s !== a;
    }))
      throw new pu(Lu, "Only one doctype is allowed");
    var o = k0(i, p0);
    if (a && i.indexOf(o) < i.indexOf(a))
      throw new pu(Lu, "Doctype can only be inserted before an element");
  }
}
function Ui(u, e, a, i) {
  ep(u, e, a), u.nodeType === nu.DOCUMENT_NODE && (i || ap)(u, e, a);
  var r = e.parentNode;
  if (r && r.removeChild(e), e.nodeType === w0) {
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
  return Ct(u.ownerDocument || u, u), e.nodeType == w0 && (e.firstChild = e.lastChild = null), e;
}
function ip(u, e) {
  return e.parentNode && e.parentNode.removeChild(e), e.parentNode = u, e.previousSibling = u.lastChild, e.nextSibling = null, e.previousSibling ? e.previousSibling.nextSibling = e : u.firstChild = e, u.lastChild = e, Ct(u.ownerDocument, u, e), e;
}
qa.prototype = {
  //implementation : null,
  nodeName: "#document",
  nodeType: tE,
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
    if (u.nodeType == w0) {
      for (var a = u.firstChild; a; ) {
        var i = a.nextSibling;
        this.insertBefore(a, e), a = i;
      }
      return u;
    }
    return Ui(this, u, e), u.ownerDocument = this, this.documentElement === null && u.nodeType === D0 && (this.documentElement = u), u;
  },
  removeChild: function(u) {
    return this.documentElement == u && (this.documentElement = null), dE(this, u);
  },
  replaceChild: function(u, e) {
    Ui(this, u, e, mE), u.ownerDocument = this, e && this.removeChild(e), p0(u) && (this.documentElement = u);
  },
  // Introduced in DOM Level 2:
  importNode: function(u, e) {
    return gE(this, u, e);
  },
  // Introduced in DOM Level 2:
  getElementById: function(u) {
    var e = null;
    return ya(this.documentElement, function(a) {
      if (a.nodeType == D0 && a.getAttribute("id") == u)
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
    var e = F4(u);
    return new Ie(this, function(a) {
      var i = [];
      return e.length > 0 && ya(a.documentElement, function(r) {
        if (r !== a && r.nodeType === D0) {
          var n = r.getAttribute("class");
          if (n) {
            var o = u === n;
            if (!o) {
              var t = F4(n);
              o = e.every(Wk(t));
            }
            o && i.push(r);
          }
        }
      }), i;
    });
  },
  //document factory method:
  createElement: function(u) {
    var e = new de();
    e.ownerDocument = this, e.nodeName = u, e.tagName = u, e.localName = u, e.childNodes = new M0();
    var a = e.attributes = new qi();
    return a._ownerElement = e, e;
  },
  createDocumentFragment: function() {
    var u = new Gr();
    return u.ownerDocument = this, u.childNodes = new M0(), u;
  },
  createTextNode: function(u) {
    var e = new bt();
    return e.ownerDocument = this, e.appendData(u), e;
  },
  createComment: function(u) {
    var e = new At();
    return e.ownerDocument = this, e.appendData(u), e;
  },
  createCDATASection: function(u) {
    var e = new Bt();
    return e.ownerDocument = this, e.appendData(u), e;
  },
  createProcessingInstruction: function(u, e) {
    var a = new yt();
    return a.ownerDocument = this, a.tagName = a.target = u, a.nodeValue = a.data = e, a;
  },
  createAttribute: function(u) {
    var e = new Wi();
    return e.ownerDocument = this, e.name = u, e.nodeName = u, e.localName = u, e.specified = !0, e;
  },
  createEntityReference: function(u) {
    var e = new ft();
    return e.ownerDocument = this, e.nodeName = u, e;
  },
  // Introduced in DOM Level 2:
  createElementNS: function(u, e) {
    var a = new de(), i = e.split(":"), r = a.attributes = new qi();
    return a.childNodes = new M0(), a.ownerDocument = this, a.nodeName = e, a.tagName = e, a.namespaceURI = u, i.length == 2 ? (a.prefix = i[0], a.localName = i[1]) : a.localName = e, r._ownerElement = a, a;
  },
  // Introduced in DOM Level 2:
  createAttributeNS: function(u, e) {
    var a = new Wi(), i = e.split(":");
    return a.ownerDocument = this, a.nodeName = e, a.name = e, a.namespaceURI = u, a.specified = !0, i.length == 2 ? (a.prefix = i[0], a.localName = i[1]) : a.localName = e, a;
  }
};
Hu(qa, nu);
function de() {
  this._nsMap = {};
}
de.prototype = {
  nodeType: D0,
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
    return u.nodeType === w0 ? this.insertBefore(u, null) : ip(this, u);
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
    return new Ie(this, function(e) {
      var a = [];
      return ya(e, function(i) {
        i !== e && i.nodeType == D0 && (u === "*" || i.tagName == u) && a.push(i);
      }), a;
    });
  },
  getElementsByTagNameNS: function(u, e) {
    return new Ie(this, function(a) {
      var i = [];
      return ya(a, function(r) {
        r !== a && r.nodeType === D0 && (u === "*" || r.namespaceURI === u) && (e === "*" || r.localName == e) && i.push(r);
      }), i;
    });
  }
};
qa.prototype.getElementsByTagName = de.prototype.getElementsByTagName;
qa.prototype.getElementsByTagNameNS = de.prototype.getElementsByTagNameNS;
Hu(de, nu);
function Wi() {
}
Wi.prototype.nodeType = Ve;
Hu(Wi, nu);
function Ua() {
}
Ua.prototype = {
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
    throw new Error(Su[Lu]);
  },
  deleteData: function(u, e) {
    this.replaceData(u, e, "");
  },
  replaceData: function(u, e, a) {
    var i = this.data.substring(0, u), r = this.data.substring(u + e);
    a = i + a + r, this.nodeValue = this.data = a, this.length = a.length;
  }
};
Hu(Ua, nu);
function bt() {
}
bt.prototype = {
  nodeName: "#text",
  nodeType: $i,
  splitText: function(u) {
    var e = this.data, a = e.substring(u);
    e = e.substring(0, u), this.data = this.nodeValue = e, this.length = e.length;
    var i = this.ownerDocument.createTextNode(a);
    return this.parentNode && this.parentNode.insertBefore(i, this.nextSibling), i;
  }
};
Hu(bt, Ua);
function At() {
}
At.prototype = {
  nodeName: "#comment",
  nodeType: oE
};
Hu(At, Ua);
function Bt() {
}
Bt.prototype = {
  nodeName: "#cdata-section",
  nodeType: iE
};
Hu(Bt, Ua);
function Hr() {
}
Hr.prototype.nodeType = sE;
Hu(Hr, nu);
function FE() {
}
FE.prototype.nodeType = Yk;
Hu(FE, nu);
function kE() {
}
kE.prototype.nodeType = Zk;
Hu(kE, nu);
function ft() {
}
ft.prototype.nodeType = rE;
Hu(ft, nu);
function Gr() {
}
Gr.prototype.nodeName = "#document-fragment";
Gr.prototype.nodeType = w0;
Hu(Gr, nu);
function yt() {
}
yt.prototype.nodeType = nE;
Hu(yt, nu);
function pE() {
}
pE.prototype.serializeToString = function(u, e, a) {
  return hE.call(u, e, a);
};
nu.prototype.toString = hE;
function hE(u, e) {
  var a = [], i = this.nodeType == 9 && this.documentElement || this, r = i.prefix, n = i.namespaceURI;
  if (n && r == null) {
    var r = i.lookupPrefix(n);
    if (r == null)
      var o = [
        { namespace: n, prefix: null }
        //{namespace:uri,prefix:''}
      ];
  }
  return je(this, a, u, e, o), a.join("");
}
function v4(u, e, a) {
  var i = u.prefix || "", r = u.namespaceURI;
  if (!r || i === "xml" && r === fa.XML || r === fa.XMLNS)
    return !1;
  for (var n = a.length; n--; ) {
    var o = a[n];
    if (o.prefix === i)
      return o.namespace !== r;
  }
  return !0;
}
function wn(u, e, a) {
  u.push(" ", e, '="', a.replace(/[<>&"\t\n\r]/g, xE), '"');
}
function je(u, e, a, i, r) {
  if (r || (r = []), i)
    if (u = i(u), u) {
      if (typeof u == "string") {
        e.push(u);
        return;
      }
    } else
      return;
  switch (u.nodeType) {
    case D0:
      var n = u.attributes, o = n.length, g = u.firstChild, t = u.tagName;
      a = fa.isHTML(u.namespaceURI) || a;
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
        if (v4(d, a, r)) {
          var m = d.prefix || "", k = d.namespaceURI;
          wn(e, m ? "xmlns:" + m : "xmlns", k), r.push({ prefix: m, namespace: k });
        }
        je(d, e, a, i, r);
      }
      if (t === s && v4(u, a, r)) {
        var m = u.prefix || "", k = u.namespaceURI;
        wn(e, m ? "xmlns:" + m : "xmlns", k), r.push({ prefix: m, namespace: k });
      }
      if (g || a && !/^(?:meta|link|img|br|hr|input)$/i.test(t)) {
        if (e.push(">"), a && /^script$/i.test(t))
          for (; g; )
            g.data ? e.push(g.data) : je(g, e, a, i, r.slice()), g = g.nextSibling;
        else
          for (; g; )
            je(g, e, a, i, r.slice()), g = g.nextSibling;
        e.push("</", s, ">");
      } else
        e.push("/>");
      return;
    case tE:
    case w0:
      for (var g = u.firstChild; g; )
        je(g, e, a, i, r.slice()), g = g.nextSibling;
      return;
    case Ve:
      return wn(e, u.name, u.value);
    case $i:
      return e.push(
        u.data.replace(/[<&>]/g, xE)
      );
    case iE:
      return e.push("<![CDATA[", u.data, "]]>");
    case oE:
      return e.push("<!--", u.data, "-->");
    case sE:
      var P = u.publicId, A = u.systemId;
      if (e.push("<!DOCTYPE ", u.name), P)
        e.push(" PUBLIC ", P), A && A != "." && e.push(" ", A), e.push(">");
      else if (A && A != ".")
        e.push(" SYSTEM ", A, ">");
      else {
        var v = u.internalSubset;
        v && e.push(" [", v, "]"), e.push(">");
      }
      return;
    case nE:
      return e.push("<?", u.target, " ", u.data, "?>");
    case rE:
      return e.push("&", u.nodeName, ";");
    default:
      e.push("??", u.nodeName);
  }
}
function gE(u, e, a) {
  var i;
  switch (e.nodeType) {
    case D0:
      i = e.cloneNode(!1), i.ownerDocument = u;
    case w0:
      break;
    case Ve:
      a = !0;
      break;
  }
  if (i || (i = e.cloneNode(!1)), i.ownerDocument = u, i.parentNode = null, a)
    for (var r = e.firstChild; r; )
      i.appendChild(gE(u, r, a)), r = r.nextSibling;
  return i;
}
function oo(u, e, a) {
  var i = new e.constructor();
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      var n = e[r];
      typeof n != "object" && n != i[r] && (i[r] = n);
    }
  switch (e.childNodes && (i.childNodes = new M0()), i.ownerDocument = u, i.nodeType) {
    case D0:
      var o = e.attributes, t = i.attributes = new qi(), s = o.length;
      t._ownerElement = i;
      for (var l = 0; l < s; l++)
        i.setAttributeNode(oo(u, o.item(l), !0));
      break;
    case Ve:
      a = !0;
  }
  if (a)
    for (var E = e.firstChild; E; )
      i.appendChild(oo(u, E, a)), E = E.nextSibling;
  return i;
}
function CE(u, e, a) {
  u[e] = a;
}
try {
  if (Object.defineProperty) {
    let u = function(e) {
      switch (e.nodeType) {
        case D0:
        case w0:
          var a = [];
          for (e = e.firstChild; e; )
            e.nodeType !== 7 && e.nodeType !== 8 && a.push(u(e)), e = e.nextSibling;
          return a.join("");
        default:
          return e.nodeValue;
      }
    };
    Object.defineProperty(Ie.prototype, "length", {
      get: function() {
        return gt(this), this.$$length;
      }
    }), Object.defineProperty(nu.prototype, "textContent", {
      get: function() {
        return u(this);
      },
      set: function(e) {
        switch (this.nodeType) {
          case D0:
          case w0:
            for (; this.firstChild; )
              this.removeChild(this.firstChild);
            (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
            break;
          default:
            this.data = e, this.value = e, this.nodeValue = e;
        }
      }
    }), CE = function(e, a, i) {
      e["$$" + a] = i;
    };
  }
} catch {
}
K0.DocumentType = Hr;
K0.DOMException = pu;
K0.DOMImplementation = DE;
K0.Element = de;
K0.Node = nu;
K0.NodeList = M0;
K0.XMLSerializer = pE;
var Vr = {}, vE = {};
(function(u) {
  var e = R0.freeze;
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
})(vE);
var zt = {}, za = R0.NAMESPACE, to = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, b4 = new RegExp("[\\-\\.0-9" + to.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), A4 = new RegExp("^" + to.source + b4.source + "*(?::" + to.source + b4.source + "*)?$"), na = 0, _0 = 1, Ce = 2, oa = 3, ve = 4, be = 5, ta = 6, di = 7;
function Oe(u, e) {
  this.message = u, this.locator = e, Error.captureStackTrace && Error.captureStackTrace(this, Oe);
}
Oe.prototype = new Error();
Oe.prototype.name = Oe.name;
function bE() {
}
bE.prototype = {
  parse: function(u, e, a) {
    var i = this.domBuilder;
    i.startDocument(), AE(e, e = {}), rp(
      u,
      e,
      a,
      i,
      this.errorHandler
    ), i.endDocument();
  }
};
function rp(u, e, a, i, r) {
  function n(U) {
    if (U > 65535) {
      U -= 65536;
      var lu = 55296 + (U >> 10), Eu = 56320 + (U & 1023);
      return String.fromCharCode(lu, Eu);
    } else
      return String.fromCharCode(U);
  }
  function o(U) {
    var lu = U.slice(1, -1);
    return Object.hasOwnProperty.call(a, lu) ? a[lu] : lu.charAt(0) === "#" ? n(parseInt(lu.substr(1).replace("x", "0x"))) : (r.error("entity not found:" + U), U);
  }
  function t(U) {
    if (U > m) {
      var lu = u.substring(m, U).replace(/&#?\w+;/g, o);
      x && s(m), i.characters(lu, 0, U - m), m = U;
    }
  }
  function s(U, lu) {
    for (; U >= E && (lu = D.exec(u)); )
      l = lu.index, E = l + lu[0].length, x.lineNumber++;
    x.columnNumber = U - l + 1;
  }
  for (var l = 0, E = 0, D = /.*(?:\r\n?|\n)|.*$/g, x = i.locator, c = [{ currentNSMap: e }], d = {}, m = 0; ; ) {
    try {
      var k = u.indexOf("<", m);
      if (k < 0) {
        if (!u.substr(m).match(/^\s*$/)) {
          var g = i.doc, P = g.createTextNode(u.substr(m));
          g.appendChild(P), i.currentElement = P;
        }
        return;
      }
      switch (k > m && t(k), u.charAt(k + 1)) {
        case "/":
          var G = u.indexOf(">", k + 3), A = u.substring(k + 2, G).replace(/[ \t\n\r]+$/g, ""), v = c.pop();
          G < 0 ? (A = u.substring(k + 2).replace(/[\s<].*/, ""), r.error("end tag name: " + A + " is not complete:" + v.tagName), G = k + 1 + A.length) : A.match(/\s</) && (A = A.replace(/[\s<].*/, ""), r.error("end tag name: " + A + " maybe not complete"), G = k + 1 + A.length);
          var N = v.localNSMap, H = v.tagName == A, $ = H || v.tagName && v.tagName.toLowerCase() == A.toLowerCase();
          if ($) {
            if (i.endElement(v.uri, v.localName, A), N)
              for (var O in N)
                Object.prototype.hasOwnProperty.call(N, O) && i.endPrefixMapping(O);
            H || r.fatalError("end tag name: " + A + " is not match the current start tagName:" + v.tagName);
          } else
            c.push(v);
          G++;
          break;
        case "?":
          x && s(k), G = lp(u, k, i);
          break;
        case "!":
          x && s(k), G = sp(u, k, i, r);
          break;
        default:
          x && s(k);
          var b = new BE(), w = c[c.length - 1].currentNSMap, G = np(u, k, b, w, o, r), q = b.length;
          if (!b.closed && tp(u, G, b.tagName, d) && (b.closed = !0, a.nbsp || r.warning("unclosed xml attribute")), x && q) {
            for (var ou = B4(x, {}), X = 0; X < q; X++) {
              var iu = b[X];
              s(iu.offset), iu.locator = B4(x, {});
            }
            i.locator = ou, f4(b, i, w) && c.push(b), i.locator = x;
          } else
            f4(b, i, w) && c.push(b);
          za.isHTML(b.uri) && !b.closed ? G = op(u, G, b.tagName, o, i) : G++;
      }
    } catch (U) {
      if (U instanceof Oe)
        throw U;
      r.error("element parse error: " + U), G = -1;
    }
    G > m ? m = G : t(Math.max(k, m) + 1);
  }
}
function B4(u, e) {
  return e.lineNumber = u.lineNumber, e.columnNumber = u.columnNumber, e;
}
function np(u, e, a, i, r, n) {
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
  for (var t, s, l = ++e, E = na; ; ) {
    var D = u.charAt(l);
    switch (D) {
      case "=":
        if (E === _0)
          t = u.slice(e, l), E = oa;
        else if (E === Ce)
          E = oa;
        else
          throw new Error("attribute equal must after attrName");
        break;
      case "'":
      case '"':
        if (E === oa || E === _0)
          if (E === _0 && (n.warning('attribute value must after "="'), t = u.slice(e, l)), e = l + 1, l = u.indexOf(D, e), l > 0)
            s = u.slice(e, l), o(t, s, e - 1), E = be;
          else
            throw new Error("attribute value no end '" + D + "' match");
        else if (E == ve)
          s = u.slice(e, l), o(t, s, e), n.warning('attribute "' + t + '" missed start quot(' + D + ")!!"), e = l + 1, E = be;
        else
          throw new Error('attribute value must after "="');
        break;
      case "/":
        switch (E) {
          case na:
            a.setTagName(u.slice(e, l));
          case be:
          case ta:
          case di:
            E = di, a.closed = !0;
          case ve:
          case _0:
            break;
          case Ce:
            a.closed = !0;
            break;
          default:
            throw new Error("attribute invalid close char('/')");
        }
        break;
      case "":
        return n.error("unexpected end of input"), E == na && a.setTagName(u.slice(e, l)), l;
      case ">":
        switch (E) {
          case na:
            a.setTagName(u.slice(e, l));
          case be:
          case ta:
          case di:
            break;
          case ve:
          case _0:
            s = u.slice(e, l), s.slice(-1) === "/" && (a.closed = !0, s = s.slice(0, -1));
          case Ce:
            E === Ce && (s = t), E == ve ? (n.warning('attribute "' + s + '" missed quot(")!'), o(t, s, e)) : ((!za.isHTML(i[""]) || !s.match(/^(?:disabled|checked|selected)$/i)) && n.warning('attribute "' + s + '" missed value!! "' + s + '" instead!!'), o(s, s, e));
            break;
          case oa:
            throw new Error("attribute value missed!!");
        }
        return l;
      case "":
        D = " ";
      default:
        if (D <= " ")
          switch (E) {
            case na:
              a.setTagName(u.slice(e, l)), E = ta;
              break;
            case _0:
              t = u.slice(e, l), E = Ce;
              break;
            case ve:
              var s = u.slice(e, l);
              n.warning('attribute "' + s + '" missed quot(")!!'), o(t, s, e);
            case be:
              E = ta;
              break;
          }
        else
          switch (E) {
            case Ce:
              a.tagName, (!za.isHTML(i[""]) || !t.match(/^(?:disabled|checked|selected)$/i)) && n.warning('attribute "' + t + '" missed value!! "' + t + '" instead2!!'), o(t, t, e), e = l, E = _0;
              break;
            case be:
              n.warning('attribute space is required"' + t + '"!!');
            case ta:
              E = _0, e = l;
              break;
            case oa:
              E = ve, e = l;
              break;
            case di:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
    }
    l++;
  }
}
function f4(u, e, a) {
  for (var i = u.tagName, r = null, D = u.length; D--; ) {
    var n = u[D], o = n.qName, t = n.value, x = o.indexOf(":");
    if (x > 0)
      var s = n.prefix = o.slice(0, x), l = o.slice(x + 1), E = s === "xmlns" && l;
    else
      l = o, s = null, E = o === "xmlns" && "";
    n.localName = l, E !== !1 && (r == null && (r = {}, AE(a, a = {})), a[E] = r[E] = t, n.uri = za.XMLNS, e.startPrefixMapping(E, t));
  }
  for (var D = u.length; D--; ) {
    n = u[D];
    var s = n.prefix;
    s && (s === "xml" && (n.uri = za.XML), s !== "xmlns" && (n.uri = a[s || ""]));
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
function op(u, e, a, i, r) {
  if (/^(?:script|textarea)$/i.test(a)) {
    var n = u.indexOf("</" + a + ">", e), o = u.substring(e + 1, n);
    if (/[&<]/.test(o))
      return /^script$/i.test(a) ? (r.characters(o, 0, o.length), n) : (o = o.replace(/&#?\w+;/g, i), r.characters(o, 0, o.length), n);
  }
  return e + 1;
}
function tp(u, e, a, i) {
  var r = i[a];
  return r == null && (r = u.lastIndexOf("</" + a + ">"), r < e && (r = u.lastIndexOf("</" + a)), i[a] = r), r < e;
}
function AE(u, e) {
  for (var a in u)
    Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
}
function sp(u, e, a, i) {
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
      var o = Ep(u, e), t = o.length;
      if (t > 1 && /!doctype/i.test(o[0][0])) {
        var s = o[1][0], l = !1, E = !1;
        t > 3 && (/^public$/i.test(o[2][0]) ? (l = o[3][0], E = t > 4 && o[4][0]) : /^system$/i.test(o[2][0]) && (E = o[3][0]));
        var D = o[t - 1];
        return a.startDTD(s, l, E), a.endDTD(), D.index + D[0].length;
      }
  }
  return -1;
}
function lp(u, e, a) {
  var i = u.indexOf("?>", e);
  if (i) {
    var r = u.substring(e, i).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
    return r ? (r[0].length, a.processingInstruction(r[1], r[2]), i + 2) : -1;
  }
  return -1;
}
function BE() {
  this.attributeNames = {};
}
BE.prototype = {
  setTagName: function(u) {
    if (!A4.test(u))
      throw new Error("invalid tagName:" + u);
    this.tagName = u;
  },
  addValue: function(u, e, a) {
    if (!A4.test(u))
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
function Ep(u, e) {
  var a, i = [], r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  for (r.lastIndex = e, r.exec(u); a = r.exec(u); )
    if (i.push(a), a[1])
      return i;
}
zt.XMLReader = bE;
zt.ParseError = Oe;
var Dp = R0, xp = K0, y4 = vE, fE = zt, cp = xp.DOMImplementation, z4 = Dp.NAMESPACE, dp = fE.ParseError, mp = fE.XMLReader;
function yE(u) {
  return u.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028]/g, `
`);
}
function zE(u) {
  this.options = u || { locator: {} };
}
zE.prototype.parseFromString = function(u, e) {
  var a = this.options, i = new mp(), r = a.domBuilder || new Wa(), n = a.errorHandler, o = a.locator, t = a.xmlns || {}, s = /\/x?html?$/.test(e), l = s ? y4.HTML_ENTITIES : y4.XML_ENTITIES;
  o && r.setDocumentLocator(o), i.errorHandler = Fp(n, r, o), i.domBuilder = a.domBuilder || r, s && (t[""] = z4.HTML), t.xml = t.xml || z4.XML;
  var E = a.normalizeLineEndings || yE;
  return u && typeof u == "string" ? i.parse(
    E(u),
    t,
    l
  ) : i.errorHandler.error("invalid doc source"), r.doc;
};
function Fp(u, e, a) {
  if (!u) {
    if (e instanceof Wa)
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
      t("[xmldom " + o + "]	" + s + so(a));
    } || function() {
    };
  }
  return n("warning"), n("error"), n("fatalError"), i;
}
function Wa() {
  this.cdata = !1;
}
function Ae(u, e) {
  e.lineNumber = u.lineNumber, e.columnNumber = u.columnNumber;
}
Wa.prototype = {
  startDocument: function() {
    this.doc = new cp().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
  },
  startElement: function(u, e, a, i) {
    var r = this.doc, n = r.createElementNS(u, a || e), o = i.length;
    mi(this, n), this.currentElement = n, this.locator && Ae(this.locator, n);
    for (var t = 0; t < o; t++) {
      var u = i.getURI(t), s = i.getValue(t), a = i.getQName(t), l = r.createAttributeNS(u, a);
      this.locator && Ae(i.getLocator(t), l), l.value = l.nodeValue = s, n.setAttributeNode(l);
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
    this.locator && Ae(this.locator, a), mi(this, a);
  },
  ignorableWhitespace: function(u, e, a) {
  },
  characters: function(u, e, a) {
    if (u = S4.apply(this, arguments), u) {
      if (this.cdata)
        var i = this.doc.createCDATASection(u);
      else
        var i = this.doc.createTextNode(u);
      this.currentElement ? this.currentElement.appendChild(i) : /^\s*$/.test(u) && this.doc.appendChild(i), this.locator && Ae(this.locator, i);
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
    u = S4.apply(this, arguments);
    var i = this.doc.createComment(u);
    this.locator && Ae(this.locator, i), mi(this, i);
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
      this.locator && Ae(this.locator, r), mi(this, r), this.doc.doctype = r;
    }
  },
  /**
   * @see org.xml.sax.ErrorHandler
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
   */
  warning: function(u) {
    console.warn("[xmldom warning]	" + u, so(this.locator));
  },
  error: function(u) {
    console.error("[xmldom error]	" + u, so(this.locator));
  },
  fatalError: function(u) {
    throw new dp(u, this.locator);
  }
};
function so(u) {
  if (u)
    return `
@` + (u.systemId || "") + "#[line:" + u.lineNumber + ",col:" + u.columnNumber + "]";
}
function S4(u, e, a) {
  return typeof u == "string" ? u.substr(e, a) : u.length >= e + a || e ? new java.lang.String(u, e, a) + "" : u;
}
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(u) {
  Wa.prototype[u] = function() {
    return null;
  };
});
function mi(u, e) {
  u.currentElement ? u.currentElement.appendChild(e) : u.doc.appendChild(e);
}
Vr.__DOMHandler = Wa;
Vr.normalizeLineEndings = yE;
Vr.DOMParser = zE;
var SE = K0;
_r.DOMImplementation = SE.DOMImplementation;
_r.XMLSerializer = SE.XMLSerializer;
_r.DOMParser = Vr.DOMParser;
var Ir = {};
Object.defineProperty(Ir, "__esModule", { value: !0 });
Ir.parseJson = void 0;
function kp(u) {
  try {
    var e = JSON.parse(u);
    return e;
  } catch {
    return null;
  }
}
Ir.parseJson = kp;
var Or = {};
Object.defineProperty(Or, "__esModule", { value: !0 });
Or.bufferFrom = void 0;
function pp(u) {
  var e = encodeURIComponent(u), a = e.replace(/%([0-9A-F]{2})/g, function(r, n) {
    return String.fromCharCode("0x" + n);
  }), i = new Uint8Array(a.length);
  return Array.prototype.forEach.call(a, function(r, n) {
    i[n] = r.charCodeAt(0);
  }), i;
}
Or.bufferFrom = pp;
var Jr = {}, Za = {};
Object.defineProperty(Za, "__esModule", { value: !0 });
Za.EventPolyfill = void 0;
var hp = (
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
Za.EventPolyfill = hp;
var $r = {}, gp = y && y.__extends || function() {
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
Object.defineProperty($r, "__esModule", { value: !0 });
$r.ProgressEventPolyfill = void 0;
var Cp = Za, vp = (
  /** @class */
  function(u) {
    gp(e, u);
    function e(a, i) {
      var r = u.call(this, a) || this;
      return r.lengthComputable = (i == null ? void 0 : i.lengthComputable) || !1, r.composed = (i == null ? void 0 : i.composed) || !1, r.loaded = (i == null ? void 0 : i.loaded) || 0, r.total = (i == null ? void 0 : i.total) || 0, r;
    }
    return e;
  }(Cp.EventPolyfill)
);
$r.ProgressEventPolyfill = vp;
Object.defineProperty(Jr, "__esModule", { value: !0 });
Jr.createEvent = void 0;
var bp = Za, Ap = $r, Bp = typeof ProgressEvent < "u";
function fp(u, e, a) {
  var i = [
    "error",
    "progress",
    "loadstart",
    "loadend",
    "load",
    "timeout",
    "abort"
  ], r = Bp ? ProgressEvent : Ap.ProgressEventPolyfill, n = i.includes(e) ? new r(e, {
    lengthComputable: !0,
    loaded: (a == null ? void 0 : a.loaded) || 0,
    total: (a == null ? void 0 : a.total) || 0
  }) : new bp.EventPolyfill(e, {
    target: u,
    currentTarget: u
  });
  return n;
}
Jr.createEvent = fp;
var M4 = y && y.__awaiter || function(u, e, a, i) {
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
}, j4 = y && y.__generator || function(u, e) {
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
}, P4 = y && y.__values || function(u) {
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
}, Fi = y && y.__read || function(u, e) {
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
Object.defineProperty(Rr, "__esModule", { value: !0 });
Rr.createXMLHttpRequestOverride = void 0;
var yp = L0, H0 = Sa, zp = _r, Sp = Ir, Mp = Qe, T4 = Or, w4 = Jr, jp = Q0, Pp = a0, Tp = ke, wp = function(u) {
  var e, a = u.XMLHttpRequest, i = u.emitter, r = u.log;
  return e = /** @class */
  function() {
    function n() {
      this._events = [], this.log = r, this.UNSENT = 0, this.OPENED = 1, this.HEADERS_RECEIVED = 2, this.LOADING = 3, this.DONE = 4, this.onreadystatechange = null, this.onabort = null, this.onerror = null, this.onload = null, this.onloadend = null, this.onloadstart = null, this.onprogress = null, this.ontimeout = null, this.url = "", this.method = "GET", this.readyState = this.UNSENT, this.withCredentials = !1, this.status = 200, this.statusText = "OK", this.response = "", this.responseType = "text", this.responseText = "", this.responseXML = null, this.responseURL = "", this.upload = {}, this.timeout = 0, this._requestHeaders = new H0.Headers(), this._responseHeaders = new H0.Headers();
    }
    return n.prototype.setReadyState = function(o) {
      o !== this.readyState && (this.log("readyState change %d -> %d", this.readyState, o), this.readyState = o, o !== this.UNSENT && (this.log("triggering readystate change..."), this.trigger("readystatechange")));
    }, n.prototype.trigger = function(o, t) {
      var s, l;
      this.log('trigger "%s" (%d)', o, this.readyState), this.log('resolve listener for event "%s"', o);
      var E = this["on" + o];
      E == null || E.call(this, w4.createEvent(this, o, t));
      try {
        for (var D = P4(this._events), x = D.next(); !x.done; x = D.next()) {
          var c = x.value;
          c.name === o && (r('calling mock event listener "%s" (%d)', o, this.readyState), c.listener.call(this, w4.createEvent(this, o, t)));
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
      this.log("reset"), this.setReadyState(this.UNSENT), this.status = 200, this.statusText = "OK", this.response = null, this.responseText = null, this.responseXML = null, this._requestHeaders = new H0.Headers(), this._responseHeaders = new H0.Headers();
    }, n.prototype.open = function(o, t, s, l, E) {
      return s === void 0 && (s = !0), M4(this, void 0, void 0, function() {
        return j4(this, function(D) {
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
      typeof o == "string" ? s = Pp.encodeBuffer(o) : s = o || new ArrayBuffer(0);
      var l;
      try {
        l = new URL(this.url);
      } catch {
        l = new URL(this.url, window.location.href);
      }
      this.log("request headers", this._requestHeaders);
      var E = new jp.IsomorphicRequest(l, {
        body: s,
        method: this.method,
        headers: this._requestHeaders,
        credentials: this.withCredentials ? "include" : "omit"
      }), D = new Tp.InteractiveIsomorphicRequest(E);
      this.log('emitting the "request" event for %d listener(s)...', i.listenerCount("request")), i.emit("request", D), this.log("awaiting mocked response..."), Promise.resolve(yp.until(function() {
        return M4(t, void 0, void 0, function() {
          var x, c;
          return j4(this, function(d) {
            switch (d.label) {
              case 0:
                return [4, i.untilIdle("request", function(m) {
                  var k = Fi(m.args, 1), g = k[0];
                  return g.id === D.id;
                })];
              case 1:
                return d.sent(), this.log("all request listeners have been resolved!"), [4, D.respondWith.invoked()];
              case 2:
                return x = Fi.apply(void 0, [d.sent(), 1]), c = x[0], this.log("event.respondWith called with:", c), [2, c];
            }
          });
        });
      })).then(function(x) {
        var c, d, m = Fi(x, 2), k = m[0], g = m[1];
        if (k) {
          t.log("middleware function threw an exception!", k), t.trigger("error"), t.abort();
          return;
        }
        if (g) {
          if (t.log("received mocked response", g), t.trigger("loadstart"), t.status = (c = g.status) !== null && c !== void 0 ? c : 200, t.statusText = g.statusText || "OK", t._responseHeaders = g.headers ? H0.objectToHeaders(g.headers) : new H0.Headers(), t.log("set response status", t.status, t.statusText), t.log("set response headers", t._responseHeaders), t.setReadyState(t.HEADERS_RECEIVED), t.log("response type", t.responseType), t.response = t.getResponseBody(g.body), t.responseURL = t.url, t.responseText = g.body || "", t.responseXML = t.getResponseXML(), t.log("set response body", t.response), g.body && t.response) {
            t.setReadyState(t.LOADING);
            var P = T4.bufferFrom(g.body);
            t.trigger("progress", {
              loaded: P.length,
              total: P.length
            });
          }
          t.setReadyState(t.DONE), t.trigger("load"), t.trigger("loadend"), i.emit("response", E, Mp.toIsoResponse(g));
        } else {
          t.log("no mocked response received!");
          var A = new a();
          t.log("opening an original request %s %s", t.method, t.url), A.open(t.method, t.url, (d = t.async) !== null && d !== void 0 ? d : !0, t.user, t.password), A.addEventListener("load", function() {
            t.log('original "onload"'), t.status = A.status, t.statusText = A.statusText, t.responseURL = A.responseURL, t.responseType = A.responseType, t.response = A.response, t.responseText = A.responseText, t.responseXML = A.responseXML, t.log("set mock request readyState to DONE"), t.setReadyState(t.DONE), t.log("received original response", t.status, t.statusText), t.log("original response body:", t.response);
            var v = A.getAllResponseHeaders();
            t.log(`original response headers:
`, v), t._responseHeaders = H0.stringToHeaders(v), t.log("original response headers (normalized)", t._responseHeaders), t.log("original response finished"), i.emit("response", E, {
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
      return this.log("get all response headers"), this.readyState < this.HEADERS_RECEIVED ? (this.log("cannot return headers: headers not received (state: %s)", this.readyState), "") : H0.headersToString(this._responseHeaders);
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
          return this.log("resolving response body as JSON"), Sp.parseJson(t);
        case "blob": {
          var s = this.getResponseHeader("content-type") || "text/plain";
          return this.log("resolving response body as Blob", { type: s }), new Blob([t], {
            type: s
          });
        }
        case "arraybuffer": {
          this.log("resolving response body as ArrayBuffer");
          var l = T4.bufferFrom(t);
          return l;
        }
        default:
          return t;
      }
    }, n.prototype.getResponseXML = function() {
      var o = this.getResponseHeader("Content-Type");
      return o === "application/xml" || o === "text/xml" ? new zp.DOMParser().parseFromString(this.responseText, o) : null;
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
        for (var E = P4(l), D = E.next(); !D.done; D = E.next()) {
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
        var E = Fi(l, 2), D = E[0], x = E[1];
        s.log('setting "%s" (%s) header on the original request', D, x), o.setRequestHeader(D, x);
      });
    }, n;
  }(), /* Request state */
  e.UNSENT = 0, e.OPENED = 1, e.HEADERS_RECEIVED = 2, e.LOADING = 3, e.DONE = 4, e;
};
Rr.createXMLHttpRequestOverride = wp;
var Np = y && y.__extends || function() {
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
Object.defineProperty(Kr, "__esModule", { value: !0 });
var ME = Kr.XMLHttpRequestInterceptor = void 0, Lp = ja, Nn = me, Kp = qe, Rp = Rr, _p = (
  /** @class */
  function(u) {
    Np(e, u);
    function e() {
      return u.call(this, e.symbol) || this;
    }
    return e.prototype.checkEnvironment = function() {
      return typeof window < "u" && typeof window.XMLHttpRequest < "u";
    }, e.prototype.setup = function() {
      var a = this.log.extend("setup");
      a('patching "XMLHttpRequest" module...');
      var i = window.XMLHttpRequest;
      Lp.invariant(!i[Nn.IS_PATCHED_MODULE], 'Failed to patch the "XMLHttpRequest" module: already patched.'), window.XMLHttpRequest = Rp.createXMLHttpRequestOverride({
        XMLHttpRequest: i,
        emitter: this.emitter,
        log: this.log
      }), a('native "XMLHttpRequest" module patched!', window.XMLHttpRequest.name), Object.defineProperty(window.XMLHttpRequest, Nn.IS_PATCHED_MODULE, {
        enumerable: !0,
        configurable: !0,
        value: !0
      }), this.subscriptions.push(function() {
        Object.defineProperty(window.XMLHttpRequest, Nn.IS_PATCHED_MODULE, {
          value: void 0
        }), window.XMLHttpRequest = i, a('native "XMLHttpRequest" module restored!', window.XMLHttpRequest.name);
      });
    }, e.symbol = Symbol("xhr"), e;
  }(Kp.Interceptor)
);
ME = Kr.XMLHttpRequestInterceptor = _p;
var qr = {}, Hp = y && y.__extends || function() {
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
}(), Zi = y && y.__assign || function() {
  return Zi = Object.assign || function(u) {
    for (var e, a = 1, i = arguments.length; a < i; a++) {
      e = arguments[a];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (u[r] = e[r]);
    }
    return u;
  }, Zi.apply(this, arguments);
}, fi = y && y.__awaiter || function(u, e, a, i) {
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
}, yi = y && y.__generator || function(u, e) {
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
}, Ln = y && y.__read || function(u, e) {
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
Object.defineProperty(qr, "__esModule", { value: !0 });
var jE = qr.FetchInterceptor = void 0, Yi = Sa, Gp = ja, Vp = L0, Ip = Q0, Kn = me, Op = qe, Jp = Qe, $p = ke, qp = (
  /** @class */
  function(u) {
    Hp(e, u);
    function e() {
      return u.call(this, e.symbol) || this;
    }
    return e.prototype.checkEnvironment = function() {
      return typeof globalThis < "u" && typeof globalThis.fetch < "u";
    }, e.prototype.setup = function() {
      var a = this, i = globalThis.fetch;
      Gp.invariant(!i[Kn.IS_PATCHED_MODULE], 'Failed to patch the "fetch" module: already patched.'), globalThis.fetch = function(r, n) {
        return fi(a, void 0, void 0, function() {
          var o, t, s, l, E, D, x, c, d, m, k, g, P, A = this;
          return yi(this, function(v) {
            switch (v.label) {
              case 0:
                return o = new Request(r, n), t = typeof r == "string" ? r : r.url, s = o.method, this.log("[%s] %s", s, t), [4, o.clone().arrayBuffer()];
              case 1:
                return l = v.sent(), E = new URL(t, typeof location < "u" ? location.origin : void 0), D = new Ip.IsomorphicRequest(E, {
                  body: l,
                  method: s,
                  headers: new Yi.Headers(o.headers),
                  credentials: o.credentials
                }), x = new $p.InteractiveIsomorphicRequest(D), this.log("isomorphic request", x), this.log('emitting the "request" event for %d listener(s)...', this.emitter.listenerCount("request")), this.emitter.emit("request", x), this.log("awaiting for the mocked response..."), [4, Vp.until(function() {
                  return fi(A, void 0, void 0, function() {
                    var N, H;
                    return yi(this, function($) {
                      switch ($.label) {
                        case 0:
                          return [4, this.emitter.untilIdle("request", function(O) {
                            var b = Ln(O.args, 1), w = b[0];
                            return w.id === x.id;
                          })];
                        case 1:
                          return $.sent(), this.log("all request listeners have been resolved!"), [4, x.respondWith.invoked()];
                        case 2:
                          return N = Ln.apply(void 0, [$.sent(), 1]), H = N[0], this.log("event.respondWith called with:", H), [2, H];
                      }
                    });
                  });
                })];
              case 2:
                return c = Ln.apply(void 0, [v.sent(), 2]), d = c[0], m = c[1], d ? (console.error(o.method + " " + o.url + " net::ERR_FAILED"), k = Object.assign(new TypeError("Failed to fetch"), {
                  cause: d
                }), [2, Promise.reject(k)]) : m ? (this.log("received mocked response:", m), g = Jp.toIsoResponse(m), this.log("derived isomorphic response:", g), this.emitter.emit("response", x, g), P = new Response(m.body, Zi(Zi({}, g), {
                  // `Response.headers` cannot be instantiated with the `Headers` polyfill.
                  // Apparently, it halts if the `Headers` class contains unknown properties
                  // (i.e. the internal `Headers.map`).
                  headers: Yi.flattenHeadersObject(m.headers || {})
                })), Object.defineProperty(P, "url", {
                  writable: !1,
                  enumerable: !0,
                  configurable: !1,
                  value: x.url.href
                }), [2, P]) : (this.log("no mocked response received!"), [2, i(o).then(function(N) {
                  return fi(A, void 0, void 0, function() {
                    var H, $, O, b;
                    return yi(this, function(w) {
                      switch (w.label) {
                        case 0:
                          return H = N.clone(), this.log("original fetch performed", H), O = ($ = this.emitter).emit, b = [
                            "response",
                            x
                          ], [4, Up(H)];
                        case 1:
                          return O.apply($, b.concat([w.sent()])), [2, N];
                      }
                    });
                  });
                })]);
            }
          });
        });
      }, Object.defineProperty(globalThis.fetch, Kn.IS_PATCHED_MODULE, {
        enumerable: !0,
        configurable: !0,
        value: !0
      }), this.subscriptions.push(function() {
        Object.defineProperty(globalThis.fetch, Kn.IS_PATCHED_MODULE, {
          value: void 0
        }), globalThis.fetch = i, a.log('restored native "globalThis.fetch"!', globalThis.fetch.name);
      });
    }, e.symbol = Symbol("fetch"), e;
  }(Op.Interceptor)
);
jE = qr.FetchInterceptor = qp;
function Up(u) {
  return fi(this, void 0, void 0, function() {
    var e;
    return yi(this, function(a) {
      switch (a.label) {
        case 0:
          return e = {
            status: u.status,
            statusText: u.statusText,
            headers: Yi.objectToHeaders(Yi.headersToObject(u.headers))
          }, [4, u.text()];
        case 1:
          return [2, (e.body = a.sent(), e)];
      }
    });
  });
}
var Wp = Object.create, PE = Object.defineProperty, Zp = Object.getOwnPropertyDescriptor, Yp = Object.getOwnPropertyNames, Qp = Object.getPrototypeOf, Xp = Object.prototype.hasOwnProperty, uh = /* @__PURE__ */ ((u) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(u, {
  get: (e, a) => (typeof require < "u" ? require : e)[a]
}) : u)(function(u) {
  if (typeof require < "u")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + u + '" is not supported');
}), eh = (u, e, a, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let r of Yp(e))
      !Xp.call(u, r) && r !== a && PE(u, r, { get: () => e[r], enumerable: !(i = Zp(e, r)) || i.enumerable });
  return u;
}, ah = (u, e, a) => (a = u != null ? Wp(Qp(u)) : {}, eh(
  e || !u || !u.__esModule ? PE(a, "default", { value: u, enumerable: !0 }) : a,
  u
)), ih = w5, rh = "[MSW]";
function St(u, ...e) {
  const a = ka(u, ...e);
  return `${rh} ${a}`;
}
function nh(u, ...e) {
  console.warn(St(u, ...e));
}
function oh(u, ...e) {
  console.error(St(u, ...e));
}
var Pu = {
  formatMessage: St,
  warn: nh,
  error: oh
};
function th(u, e) {
  const a = u.emit;
  a._isPiped || (u.emit = function(i, ...r) {
    return e.emit(i, ...r), a.call(this, i, ...r);
  }, u.emit._isPiped = !0);
}
function N4(u) {
  const e = [...u];
  return Object.freeze(e), e;
}
var sh = class {
  constructor(...e) {
    this.validateHandlers(...e), this.initialHandlers = N4(e), this.currentHandlers = [...e], this.emitter = new wi.Emitter(), this.publicEmitter = new wi.Emitter(), th(this.emitter, this.publicEmitter), this.events = this.createLifeCycleEvents();
  }
  validateHandlers(...e) {
    for (const a of e)
      J0(
        !Array.isArray(a),
        Pu.formatMessage(
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
    return N4(this.currentHandlers);
  }
  createLifeCycleEvents() {
    return {
      on: (...e) => this.publicEmitter.on(...e),
      removeListener: (...e) => this.publicEmitter.removeListener(...e),
      removeAllListeners: (...e) => this.publicEmitter.removeAllListeners(...e)
    };
  }
};
function L4(u) {
  return u != null && typeof u == "object" && !Array.isArray(u);
}
function Xe(u, e) {
  return Object.entries(e).reduce((a, [i, r]) => {
    const n = a[i];
    return Array.isArray(n) && Array.isArray(r) ? (a[i] = n.concat(r), a) : L4(n) && L4(r) ? (a[i] = Xe(n, r), a) : (a[i] = r, a);
  }, Object.assign({}, u));
}
function K4() {
  return Is(document.cookie);
}
function lh(u) {
  if (typeof document > "u" || typeof location > "u")
    return {};
  switch (u.credentials) {
    case "same-origin":
      return location.origin === u.url.origin ? K4() : {};
    case "include":
      return K4();
    default:
      return {};
  }
}
function W0(u) {
  try {
    return JSON.parse(u);
  } catch {
    return;
  }
}
function Eh(u) {
  var e, a;
  const i = qs(u), r = i.get("content-type") || "text/plain", n = i.get("content-disposition");
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
function Dh(u, e) {
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
`), { contentType: x, filename: c, name: d } = Eh(l), m = c === void 0 ? D : new File([D], c, { type: x }), k = t[d];
      k === void 0 ? t[d] = m : Array.isArray(k) ? t[d] = [...k, m] : t[d] = [k, m];
    }
    return t;
  } catch {
    return;
  }
}
function TE(u, e) {
  var a;
  if (!u)
    return u;
  const i = ((a = e == null ? void 0 : e.get("content-type")) == null ? void 0 : a.toLowerCase()) || "";
  return i.startsWith("multipart/form-data") && typeof u != "object" ? Dh(u.toString(), e) || u : i.includes("json") && typeof u != "object" && W0(u.toString()) || u;
}
function Mt(u, e) {
  return u.toLowerCase() === e.toLowerCase();
}
var jt = class extends S0.IsomorphicRequest {
  constructor(e, a = {}) {
    super(e, a), a.id && (this.id = a.id), this.cache = a.cache || "default", this.destination = a.destination || "", this.integrity = a.integrity || "", this.keepalive = a.keepalive || !1, this.mode = a.mode || "cors", this.priority = a.priority || "auto", this.redirect = a.redirect || "follow", this.referrer = a.referrer || "", this.referrerPolicy = a.referrerPolicy || "no-referrer", this.cookies = a.cookies || this.getCookies();
  }
  get body() {
    const e = Hs(this._body), a = TE(e, this.headers);
    if (!(Mt(this.method, "GET") && a === ""))
      return a;
  }
  passthrough() {
    return {
      status: 101,
      statusText: "Continue",
      headers: new X0(),
      body: null,
      passthrough: !0,
      once: !1
    };
  }
  getCookies() {
    var e;
    const a = this.headers.get("cookie"), i = a ? Is(a) : {};
    De.store.hydrate();
    const r = Array.from(
      (e = De.store.get({ ...this, url: this.url.href })) == null ? void 0 : e.entries()
    ).reduce((t, [s, { value: l }]) => Object.assign(t, { [s.trim()]: l }), {}), o = {
      ...lh(this),
      ...r
    };
    for (const [t, s] of Object.entries(o))
      this.headers.append("cookie", `${t}=${s}`);
    return {
      ...o,
      ...i
    };
  }
}, xh = async (u, e, a) => {
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
}, Ya = (u) => u.referrer.startsWith(u.url.origin) ? u.url.pathname : new URL(
  u.url.pathname,
  `${u.url.protocol}//${u.url.host}`
).href;
function wE(u) {
  var e;
  const a = u.definitions.find((i) => i.kind === "OperationDefinition");
  return {
    operationType: a == null ? void 0 : a.operation,
    operationName: (e = a == null ? void 0 : a.name) == null ? void 0 : e.value
  };
}
function ch(u) {
  try {
    const e = Na(u);
    return wE(e);
  } catch (e) {
    return e;
  }
}
function dh(u, e, a) {
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
function mh(u) {
  var e, a;
  switch (u.method) {
    case "GET": {
      const i = u.url.searchParams.get("query"), r = u.url.searchParams.get("variables") || "";
      return {
        query: i,
        variables: W0(r)
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
        const { operations: i, map: r, ...n } = u.body, o = W0(
          i
        ) || {};
        if (!o.query)
          return null;
        const t = W0(r || "") || {}, s = o.variables ? dh(
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
function NE(u) {
  const e = mh(u);
  if (!e || !e.query)
    return;
  const { query: a, variables: i } = e, r = ch(a);
  if (r instanceof Error) {
    const n = Ya(u);
    throw new Error(
      Pu.formatMessage(
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
var Fh = {
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
}, kh = (u, e) => (a) => (a.status = u, a.statusText = e || Fh[String(u)], a);
function ph(...u) {
  return (e) => {
    const [a, i] = u;
    return typeof a == "string" ? e.headers.append(a, i) : vo(a).forEach((n, o) => {
      e.headers.append(o, n);
    }), e;
  };
}
var LE = (u, e, a) => (i) => {
  const r = Qc(u, e, a);
  return i.headers.append("Set-Cookie", r), typeof document < "u" && (document.cookie = r), i;
}, hh = (u) => (e) => (e.body = u, e), Qa = (u) => (e) => (e.headers.set("Content-Type", "application/json"), e.body = JSON.stringify(u), e), gh = (u) => (e) => {
  const a = W0(e.body) || {}, i = Xe(a, { data: u });
  return Qa(i)(e);
}, Ch = (u) => (e) => {
  const a = W0(e.body) || {}, i = Xe(a, { extensions: u });
  return Qa(i)(e);
}, Rn = 2147483647, R4 = 100, vh = 400, bh = 5, _4 = () => Dt() ? bh : Math.floor(
  Math.random() * (vh - R4) + R4
), Ah = (u) => (e) => {
  let a;
  if (typeof u == "string")
    switch (u) {
      case "infinite": {
        a = Rn;
        break;
      }
      case "real": {
        a = _4();
        break;
      }
      default:
        throw new Error(
          `Failed to delay a response: unknown delay mode "${u}". Please make sure you provide one of the supported modes ("real", "infinite") or a number to "ctx.delay".`
        );
    }
  else if (typeof u > "u")
    a = _4();
  else {
    if (u > Rn)
      throw new Error(
        `Failed to delay a response: provided delay duration (${u}) exceeds the maximum allowed duration for "setTimeout" (${Rn}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`
      );
    a = u;
  }
  return e.delay = a, e;
}, Bh = (u) => (e) => {
  if (u == null)
    return e;
  const a = W0(e.body) || {}, i = Xe(a, { errors: u });
  return Qa(i)(e);
}, H4 = Dt() ? (u, e) => Promise.resolve().then(() => ah(uh("node-fetch"))).then(
  ({ default: a }) => a(u, e)
) : globalThis.fetch, G4 = (u) => {
  const e = new X0(u.headers);
  return e.set("x-msw-bypass", "true"), {
    ...u,
    headers: e.all()
  };
}, fh = (u) => {
  const { body: e, method: a } = u, i = {
    ...u,
    body: void 0
  };
  return ["GET", "HEAD"].includes(a) || (typeof e == "object" || typeof e == "number" || typeof e == "boolean" ? i.body = JSON.stringify(e) : i.body = e), i;
}, yh = (u, e = {}) => {
  if (typeof u == "string")
    return H4(u, G4(e));
  const a = fh(u), i = G4(a);
  return H4(u.url.href, i);
}, zh = (u) => (e) => (e.headers.set("Content-Type", "text/plain"), e.body = u, e), Sh = (u) => (e) => (e.headers.set("Content-Type", "text/xml"), e.body = u, e);
function KE(u) {
  return u < 300 ? "#69AB32" : u < 400 ? "#F0BB4B" : "#E95F5D";
}
function RE() {
  const u = /* @__PURE__ */ new Date();
  return [u.getHours(), u.getMinutes(), u.getSeconds()].map(String).map((e) => e.slice(0, 2)).map((e) => e.padStart(2, "0")).join(":");
}
function _E(u) {
  return {
    ...u,
    body: u.body,
    headers: u.headers.all()
  };
}
function HE(u) {
  const e = vo(u.headers);
  return {
    ...u,
    body: TE(u.body, e)
  };
}
var Mh = /[\?|#].*$/g;
function jh(u) {
  return new URL(`/${u}`, "http://localhost").searchParams;
}
function GE(u) {
  return u.replace(Mh, "");
}
function Ph(u) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u);
}
function Th(u, e) {
  if (Ph(u) || u.startsWith("*"))
    return u;
  const a = e || typeof document < "u" && document.baseURI;
  return a ? decodeURI(new URL(encodeURI(u), a).href) : u;
}
function wh(u, e) {
  if (u instanceof RegExp)
    return u;
  const a = Th(u, e);
  return GE(a);
}
function Nh(u) {
  return u.replace(
    /([:a-zA-Z_-]*)(\*{1,2})+/g,
    (e, a, i) => {
      const r = "(.*)";
      return a ? a.startsWith(":") ? `${a}${i}` : `${a}${r}` : r;
    }
  ).replace(/([^\/])(:)(?=\d+)/, "$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/, "$1\\$2");
}
function VE(u, e, a) {
  const i = wh(e, a), r = typeof i == "string" ? Nh(i) : i, n = Vs(u), o = P3(r, { decode: decodeURIComponent })(n), t = o && o.params || {};
  return {
    matches: o !== !1,
    params: t
  };
}
function Lh(...u) {
  return (...e) => u.reduceRight((a, i) => a instanceof Promise ? Promise.resolve(a).then(i) : i(a), e[0]);
}
var Kh = class extends Error {
  constructor(e) {
    super(e), this.name = "NetworkError";
  }
}, Rh = {
  status: 200,
  statusText: "OK",
  body: null,
  delay: 0,
  once: !1,
  passthrough: !1
}, _h = [];
function V4(u, e = _h) {
  return async (...a) => {
    const i = Object.assign(
      {},
      Rh,
      {
        headers: new X0({
          "x-powered-by": "msw"
        })
      },
      u
    ), r = [
      ...e,
      ...a
    ].filter(Boolean);
    return r.length > 0 ? Lh(...r)(i) : i;
  };
}
var Hh = Object.assign(V4(), {
  once: V4({ once: !0 }),
  networkError(u) {
    throw new Kh(u);
  }
}), Gh = /[\/\\]msw[\/\\]src[\/\\](.+)/, Vh = /(node_modules)?[\/\\]lib[\/\\](umd|esm|iief|cjs)[\/\\]|^[^\/\\]*$/;
function Ih(u) {
  const e = u.stack;
  if (!e)
    return;
  const i = e.split(`
`).slice(1).find((n) => !(Gh.test(n) || Vh.test(n)));
  return i ? i.replace(/\s*at [^()]*\(([^)]+)\)/, "$1").replace(/^@/, "") : void 0;
}
function Oh(u) {
  return u ? typeof u[Symbol.iterator] == "function" : !1;
}
var Pt = {
  status: kh,
  set: ph,
  delay: Ah,
  fetch: yh
}, IE = class {
  constructor(e) {
    this.shouldSkip = !1, this.ctx = e.ctx || Pt, this.resolver = e.resolver;
    const a = Ih(new Error());
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
      Hh,
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
      if (Oh(n)) {
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
}, Jh = {
  ...Pt,
  cookie: LE,
  body: hh,
  text: zh,
  json: Qa,
  xml: Sh
}, $h = class extends jt {
  constructor(e, a) {
    super(e.url, {
      ...e,
      body: e._body
    }), this.params = a, this.id = e.id;
  }
}, qh = class extends IE {
  constructor(e, a, i) {
    super({
      info: {
        header: `${e} ${a}`,
        path: a,
        method: e
      },
      ctx: Jh,
      resolver: i
    }), this.checkRedundantQueryParameters();
  }
  checkRedundantQueryParameters() {
    const { method: e, path: a } = this.info;
    if (a instanceof RegExp || GE(a) === a)
      return;
    jh(a).forEach((n, o) => {
    }), Pu.warn(
      `Found a redundant usage of query parameters in the request handler URL for "${e} ${a}". Please match against a path instead and access query parameters in the response resolver function using "req.url.searchParams".`
    );
  }
  parse(e, a) {
    return VE(
      e.url,
      this.info.path,
      a == null ? void 0 : a.baseUrl
    );
  }
  getPublicRequest(e, a) {
    return new $h(e, a.params || {});
  }
  predicate(e, a) {
    return (this.info.method instanceof RegExp ? this.info.method.test(e.method) : Mt(this.info.method, e.method)) && a.matches;
  }
  log(e, a) {
    const i = Ya(e), r = _E(e), n = HE(a), o = KE(a.status);
    console.groupCollapsed(
      Pu.formatMessage("%s %s %s (%c%s%c)"),
      RE(),
      e.method,
      i,
      `color:${o}`,
      `${a.status} ${a.statusText}`,
      "color:inherit"
    ), console.log("Request", r), console.log("Handler:", this), console.log("Response", n), console.groupEnd();
  }
}, Uh = (u, e) => (a) => {
  Wh(u);
  const i = W0(a.body) || {}, r = Xe(i, { [u]: e });
  return Qa(r)(a);
};
function Wh(u) {
  J0(
    u.trim() !== "",
    Pu.formatMessage(
      "Failed to set a custom field on a GraphQL response: field name cannot be empty."
    )
  ), J0(
    u !== "data",
    Pu.formatMessage(
      'Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.data()" instead?',
      u
    )
  ), J0(
    u !== "errors",
    Pu.formatMessage(
      'Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.errors()" instead?',
      u
    )
  ), J0(
    u !== "extensions",
    Pu.formatMessage(
      'Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.extensions()" instead?',
      u
    )
  );
}
function OE(u, e) {
  try {
    return u();
  } catch (a) {
    e == null || e(a);
  }
}
var Zh = {
  ...Pt,
  data: gh,
  extensions: Ch,
  errors: Bh,
  cookie: LE,
  field: Uh
};
function Yh(u) {
  return u == null ? !1 : typeof u == "object" && "kind" in u && "definitions" in u;
}
var Qh = class extends jt {
  constructor(e, a, i) {
    super(e.url, {
      ...e,
      body: e._body
    }), this.variables = a, this.operationName = i;
  }
}, Xh = class extends IE {
  constructor(e, a, i, r) {
    let n = a;
    if (Yh(a)) {
      const t = wE(a);
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
      ctx: Zh,
      resolver: r
    }), this.endpoint = i;
  }
  parse(e) {
    return OE(
      () => NE(e),
      (a) => console.error(a.message)
    );
  }
  getPublicRequest(e, a) {
    var i, r;
    return new Qh(
      e,
      (i = a == null ? void 0 : a.variables) != null ? i : {},
      (r = a == null ? void 0 : a.operationName) != null ? r : ""
    );
  }
  predicate(e, a) {
    if (!a)
      return !1;
    if (!a.operationName && this.info.operationType !== "all") {
      const o = Ya(e);
      return Pu.warn(`Failed to intercept a GraphQL request at "${e.method} ${o}": anonymous GraphQL operations are not supported.

Consider naming this operation or using "graphql.operation()" request handler to intercept GraphQL requests regardless of their operation name/type. Read more: https://mswjs.io/docs/api/graphql/operation      `), !1;
    }
    const i = VE(e.url, this.endpoint), r = this.info.operationType === "all" || a.operationType === this.info.operationType, n = this.info.operationName instanceof RegExp ? this.info.operationName.test(a.operationName || "") : a.operationName === this.info.operationName;
    return i.matches && r && n;
  }
  log(e, a, i) {
    const r = _E(e), n = HE(a), o = KE(a.status), t = i != null && i.operationName ? `${i == null ? void 0 : i.operationType} ${i == null ? void 0 : i.operationName}` : `anonymous ${i == null ? void 0 : i.operationType}`;
    console.groupCollapsed(
      Pu.formatMessage("%s %s (%c%s%c)"),
      RE(),
      `${t}`,
      `color:${o}`,
      `${a.status} ${a.statusText}`,
      "color:inherit"
    ), console.log("Request:", r), console.log("Handler:", this), console.log("Response:", n), console.groupEnd();
  }
}, ug = 3, eg = 4, JE = 0.5;
function ag(u) {
  return u.reduce(
    (e, a) => (a instanceof qh && e.rest.push(a), a instanceof Xh && e.graphql.push(a), e),
    {
      rest: [],
      graphql: []
    }
  );
}
function ig() {
  return (u, e) => {
    const { path: a, method: i } = e.info;
    if (a instanceof RegExp || i instanceof RegExp)
      return 1 / 0;
    const n = Mt(u.method, i) ? JE : 0, o = Ya(u);
    return Ao(o, a) - n;
  };
}
function rg(u) {
  return (e, a) => {
    if (typeof u.operationName > "u")
      return 1 / 0;
    const { operationType: i, operationName: r } = a.info;
    if (typeof r != "string")
      return 1 / 0;
    const o = u.operationType === i ? JE : 0;
    return Ao(u.operationName, r) - o;
  };
}
function ng(u, e, a) {
  return e.reduce((r, n) => {
    const o = a(u, n);
    return r.concat([[o, n]]);
  }, []).sort(([r], [n]) => r - n).filter(([r]) => r <= ug).slice(0, eg).map(([, r]) => r);
}
function og(u) {
  return u.length > 1 ? `Did you mean to request one of the following resources instead?

${u.map((e) => `  • ${e.info.header}`).join(`
`)}` : `Did you mean to request "${u[0].info.header}" instead?`;
}
function tg(u, e, a = "warn") {
  const i = OE(() => NE(u));
  function r() {
    const t = ag(e), s = i ? t.graphql : t.rest, l = ng(
      u,
      s,
      i ? rg(i) : ig()
    );
    return l.length > 0 ? og(l) : "";
  }
  function n() {
    const t = Ya(u), s = i ? `${i.operationType} ${i.operationName} (${u.method} ${t})` : `${u.method} ${t}`, l = r();
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
        throw Pu.error("Error: %s", s), new Error(
          Pu.formatMessage(
            'Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'
          )
        );
      case "warn": {
        Pu.warn("Warning: %s", s);
        break;
      }
      case "bypass":
        break;
      default:
        throw new Error(
          Pu.formatMessage(
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
function sg(u, e) {
  De.store.add({ ...u, url: u.url.toString() }, e), De.store.persist();
}
async function lg(u, e, a, i, r) {
  var n, o, t, s, l, E;
  if (i.emit("request:start", u), u.headers.get("x-msw-bypass") === "true") {
    i.emit("request:end", u), (n = r == null ? void 0 : r.onPassthroughResponse) == null || n.call(r, u);
    return;
  }
  const [D, x] = await kd(() => xh(
    u,
    e,
    r == null ? void 0 : r.resolutionContext
  ));
  if (D)
    throw i.emit("unhandledException", D, u), D;
  const { handler: c, response: d } = x;
  if (!c) {
    tg(u, e, a.onUnhandledRequest), i.emit("request:unhandled", u), i.emit("request:end", u), (o = r == null ? void 0 : r.onPassthroughResponse) == null || o.call(r, u);
    return;
  }
  if (!d) {
    Pu.warn(
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
  sg(u, d), i.emit("request:match", u);
  const m = x, k = ((l = r == null ? void 0 : r.transformResponse) == null ? void 0 : l.call(r, d)) || d;
  return (E = r == null ? void 0 : r.onMockedResponse) == null || E.call(
    r,
    k,
    m
  ), i.emit("request:end", u), k;
}
var { bold: Eg } = Y5, Dg = {
  onUnhandledRequest: "warn"
}, xg = class extends sh {
  constructor(u, ...e) {
    super(...e), this.interceptor = new S0.BatchInterceptor({
      name: "setup-server",
      interceptors: u.map((a) => new a())
    }), this.resolvedOptions = {}, this.init();
  }
  init() {
    this.interceptor.on("request", async (u) => {
      const e = new jt(u.url, {
        ...u,
        body: await u.arrayBuffer()
      }), a = await lg(
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
        ih(i, a.delay);
      }), u.respondWith(a));
    }), this.interceptor.on("response", (u, e) => {
      u.id && (e.headers.get("x-powered-by") === "msw" ? this.emitter.emit("response:mocked", e, u.id) : this.emitter.emit("response:bypass", e, u.id));
    });
  }
  listen(u = {}) {
    this.resolvedOptions = Xe(
      Dg,
      u
    ), this.interceptor.apply(), J0(
      [S0.InterceptorReadyState.APPLYING, S0.InterceptorReadyState.APPLIED].includes(
        this.interceptor.readyState
      ),
      Pu.formatMessage(
        'Failed to start "setupServer": the interceptor failed to apply. This is likely an issue with the library and you should report it at "%s".'
      ),
      "https://github.com/mswjs/msw/issues/new/choose"
    );
  }
  printHandlers() {
    this.listHandlers().forEach((e) => {
      const { header: a, callFrame: i } = e.info, r = e.info.hasOwnProperty("operationType") ? "[graphql]" : "[rest]";
      console.log(`${Eg(`${r} ${a}`)}
  Declaration: ${i}
`);
    });
  }
  close() {
    super.dispose(), this.interceptor.dispose();
  }
}, cg = (...u) => new xg(
  [X3, ME, jE],
  ...u
);
const $t = class {
  constructor() {
    Iu(this, "axios");
    Iu(this, "logger", console);
    this.axios = N5.create(), this.axios.interceptors.request.use(
      (e) => (this.logger.log(`${e.url}`), e.data && this.logger.info(`[Body]: ${JSON.stringify(e.data, null, 4)}`), e),
      (e) => (this.logger.error(e), e)
    ), this.axios.interceptors.response.use(
      (e) => (this.logger.log(`[Response]: ${JSON.stringify(e.data, null, 4)}`), e),
      (e) => {
        const {
          response: a,
          message: i,
          config: { method: r, url: n, data: o, params: t }
        } = e, s = a == null ? void 0 : a.status;
        return this.logger.error({ status: s, message: i, method: r, url: n, data: o, params: t }), e;
      }
    );
  }
  static getInstance() {
    return this.instance ?? (this.instance = new $t());
  }
  get(e, a) {
    return this.axios.get(e, { params: a });
  }
  post(e, a, i) {
    return this.axios.post(e, i, { params: a });
  }
};
let zi = $t;
Iu(zi, "instance");
const qt = class {
  constructor() {
    Iu(this, "partnerId");
    Iu(this, "partnerKey");
    Iu(this, "baseURL");
    Iu(this, "accessToken");
    Iu(this, "shopId");
  }
  static getInstance() {
    return this.instance ?? (this.instance = new qt());
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
};
let da = qt;
Iu(da, "instance");
function dg(u, ...e) {
  const a = L5("sha256", u);
  return e.filter((i) => !!i).forEach((i) => a.update(i)), a.digest("hex");
}
const mg = f.object({
  partnerId: f.coerce.number().optional(),
  partnerKey: f.coerce.string().optional(),
  baseURL: f.coerce.string().url().optional(),
  accessToken: f.coerce.string().optional(),
  shopId: f.coerce.number().optional()
}), lo = mg.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK_SHOP_ID
});
if (!lo.success)
  throw new Error(lo.error.message);
const ze = lo.data;
function Tt(u) {
  return new URL(u, ze.baseURL).toString();
}
function Eo(u) {
  const e = u ? u.getTime() : Date.now();
  return Math.round(e / 1e3).toString();
}
function Fg(u) {
  const {
    partner_id: e,
    partner_key: a,
    path: i,
    base_url: r,
    access_token: n,
    shop_id: o,
    params: t = {}
  } = u, s = e.toString(), l = o.toString(), E = {};
  for (const d in t) {
    const m = t[d];
    Array.isArray(m) ? E[d] = [
      m[0],
      ...m.slice(1).map((k) => `&${d}=${k}`)
    ].join("") : m instanceof Date ? E[d] = Eo(m) : E[d] = `${m}`;
  }
  const D = Eo(), x = new URL(i, r), c = dg(
    a,
    s,
    i,
    D,
    n,
    l
  );
  return x.search = new URLSearchParams({
    ...E,
    partner_id: s,
    shop_id: l,
    access_token: n,
    sign: c,
    timestamp: D
  }).toString(), x.toString().replace(new RegExp("%26", "g"), "&").replace(new RegExp("%3D", "g"), "=");
}
const I4 = zi.getInstance();
function wt(u) {
  return async function(a) {
    const i = u.transformRequestParameter ?? ((E) => E), r = await u.requestParameterSchema.transform(i).safeParseAsync(a);
    if (!r.success)
      throw new Error(r.error.message);
    const n = r.data, o = da.getInstance().value, t = Fg({
      ...o,
      path: u.path,
      params: n
    });
    let s;
    if (u.method === "POST") {
      const E = await u.requestBodySchema.safeParseAsync(u.body);
      if (!E.success)
        throw new Error(E.error.message);
      s = (await I4.post(t, {}, u.body)).data;
    } else
      s = (await I4.get(t)).data;
    const l = await u.responseSchema.safeParseAsync(s);
    if (!l.success)
      throw new Error(l.error.message);
    return l.data;
  };
}
const $E = "/api/v2/product/get_item_list", qE = ["NORMAL", "DELETED", "UNLIST", "BANNED"], kg = f.object({
  offset: f.number().int().min(0).optional(),
  page_size: f.number().int().positive().max(100).optional(),
  update_time_from: f.date().optional(),
  update_time_to: f.date().optional(),
  item_status: f.array(f.enum(qE))
}), pg = f.object({
  item_id: f.number().int(),
  item_status: f.enum(qE),
  update_time: f.number().int()
}), hg = f.object({
  error: f.string(),
  message: f.string().nullable().optional(),
  warning: f.string().nullable().optional(),
  request_id: f.string(),
  response: f.object({
    item: f.array(pg.optional()).optional()
  }).optional(),
  total_count: f.number().int().optional(),
  has_next_page: f.boolean().optional(),
  next_offset: f.number().int().optional()
}), gg = wt({
  method: "GET",
  path: $E,
  requestParameterSchema: kg,
  transformRequestParameter(u) {
    return u.update_time_from = u.update_time_from ?? /* @__PURE__ */ new Date("01/01/2022"), u.update_time_to = u.update_time_to ?? /* @__PURE__ */ new Date(), u;
  },
  responseSchema: hg
}), UE = "/api/v2/product/get_item_base_info", Cg = f.object({
  item_id_list: f.string(),
  need_tax_info: f.coerce.boolean().optional(),
  need_complaint_policy: f.coerce.boolean().optional()
}), vg = f.object({
  value_id: f.number(),
  original_value_name: f.string(),
  value_unit: f.string()
}), bg = f.object({
  attribute_id: f.number(),
  original_attribute_name: f.string(),
  is_mandatory: f.boolean(),
  attribute_value_list: f.array(vg)
}), Ag = f.object({
  currency: f.string(),
  original_price: f.number(),
  current_price: f.number()
}), Bg = f.object({
  location_id: f.string(),
  stock: f.number()
}), fg = f.object({
  logistic_id: f.number(),
  logistic_name: f.string(),
  enabled: f.boolean(),
  shipping_fee: f.number().optional(),
  is_free: f.boolean(),
  estimated_shipping_fee: f.number().optional()
}), yg = f.object({
  field_type: f.string(),
  text: f.string().optional(),
  image_info: f.object({
    image_id: f.string(),
    image_url: f.string()
  }).optional()
}), zg = f.object({
  item_id: f.number(),
  category_id: f.number(),
  item_name: f.string(),
  item_sku: f.string(),
  create_time: f.number(),
  update_time: f.number(),
  attribute_list: f.array(bg).optional(),
  price_info: f.array(Ag).optional(),
  stock_info_v2: f.object({
    summary_info: f.object({
      total_reserved_stock: f.number(),
      total_available_stock: f.number()
    }),
    seller_stock: f.array(Bg).optional()
  }).optional(),
  image: f.object({
    image_url_list: f.array(f.string()),
    image_id_list: f.array(f.string())
  }),
  weight: f.string(),
  dimension: f.object({
    package_length: f.number(),
    package_width: f.number(),
    package_height: f.number()
  }),
  logistic_info: f.array(fg),
  pre_order: f.object({
    is_pre_order: f.boolean(),
    days_to_ship: f.number()
  }),
  condition: f.string(),
  size_chart: f.string(),
  item_status: f.string(),
  has_model: f.boolean(),
  promotion_id: f.number().optional(),
  brand: f.object({
    brand_id: f.number(),
    original_brand_name: f.string()
  }),
  tax_info: f.object({
    ncm: f.number(),
    same_state_cfop: f.number(),
    diff_state_cfop: f.number(),
    csosn: f.number(),
    origin: f.number()
  }).optional(),
  description_type: f.string(),
  description_info: f.object({
    extended_description: f.object({
      field_list: f.array(yg)
    })
  })
}), Sg = f.object({
  error: f.string(),
  message: f.string(),
  warning: f.string(),
  request_id: f.string(),
  response: f.object({
    item_list: f.array(zg).optional()
  })
}), Mg = wt({
  method: "GET",
  path: UE,
  requestParameterSchema: Cg,
  responseSchema: Sg,
  transformRequestParameter(u) {
    return u.need_tax_info = !!u.need_tax_info, u.need_complaint_policy = !!u.need_complaint_policy, u;
  }
}), WE = "/api/v2/product/get_item_extra_info", jg = f.object({
  item_id_list: f.string()
}), Pg = f.object({
  item_id: f.number(),
  sale: f.number(),
  views: f.number(),
  likes: f.number(),
  rating_star: f.number(),
  comment_count: f.number()
}), Tg = f.object({
  error: f.string(),
  message: f.string(),
  warning: f.string().optional(),
  request_id: f.string(),
  response: f.object({
    item_list: f.array(Pg).optional()
  }).optional()
}), wg = wt({
  method: "GET",
  path: WE,
  requestParameterSchema: jg,
  responseSchema: Tg
}), Ng = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItemBaseInfo: Mg,
  getItemExtraInfo: wg,
  getItemList: gg
}, Symbol.toStringTag, { value: "Module" })), Lg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  product: Ng
}, Symbol.toStringTag, { value: "Module" })), ie = /* @__PURE__ */ Je(md), Nt = /* @__PURE__ */ Je(rF);
var ma = {}, Kg = {
  get exports() {
    return ma;
  },
  set exports(u) {
    ma = u;
  }
}, O4;
function Rg() {
  return O4 || (O4 = 1, function(u, e) {
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
  }(Kg, ma)), ma;
}
const Xa = /* @__PURE__ */ Je(ax), _g = /* @__PURE__ */ Je(iF), Hg = /* @__PURE__ */ Je(EF);
var Gg = Object.create, Ur = Object.defineProperty, Vg = Object.getOwnPropertyDescriptor, Ig = Object.getOwnPropertyNames, Og = Object.getPrototypeOf, Jg = Object.prototype.hasOwnProperty, ZE = (u, e) => {
  for (var a in e)
    Ur(u, a, { get: e[a], enumerable: !0 });
}, YE = (u, e, a, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let r of Ig(e))
      !Jg.call(u, r) && r !== a && Ur(u, r, { get: () => e[r], enumerable: !(i = Vg(e, r)) || i.enumerable });
  return u;
}, ui = (u, e, a) => (a = u != null ? Gg(Og(u)) : {}, YE(
  e || !u || !u.__esModule ? Ur(a, "default", { value: u, enumerable: !0 }) : a,
  u
)), $g = (u) => YE(Ur({}, "__esModule", { value: !0 }), u), QE = {};
ZE(QE, {
  GraphQLHandler: () => Zr,
  MockedRequest: () => ei,
  RESTMethods: () => bD,
  RequestHandler: () => Vt,
  RestHandler: () => It,
  SetupApi: () => MD,
  SetupWorkerApi: () => jD,
  cleanUrl: () => Ht,
  compose: () => gD,
  context: () => XE,
  createResponseComposition: () => Do,
  defaultContext: () => Wr,
  defaultResponse: () => CD,
  graphql: () => Pv,
  graphqlContext: () => fD,
  handleRequest: () => Ot,
  matchRequestUrl: () => Gt,
  response: () => vD,
  rest: () => Sv,
  restContext: () => AD,
  setupWorker: () => zv
});
var Lt = $g(QE), XE = {};
ZE(XE, {
  body: () => aD,
  cookie: () => Kt,
  data: () => iD,
  delay: () => nD,
  errors: () => oD,
  extensions: () => rD,
  fetch: () => tD,
  json: () => ea,
  set: () => eD,
  status: () => uD,
  text: () => sD,
  xml: () => lD
});
var qg = {
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
}, uD = (u, e) => (a) => (a.status = u, a.statusText = e || qg[String(u)], a), Ug = ie;
function eD(...u) {
  return (e) => {
    const [a, i] = u;
    return typeof a == "string" ? e.headers.append(a, i) : (0, Ug.objectToHeaders)(a).forEach((n, o) => {
      e.headers.append(o, n);
    }), e;
  };
}
var Wg = ui(wa), Kt = (u, e, a) => (i) => {
  const r = Wg.serialize(u, e, a);
  return i.headers.append("Set-Cookie", r), typeof document < "u" && (document.cookie = r), i;
}, aD = (u) => (e) => (e.body = u, e);
function Z0(u) {
  try {
    return JSON.parse(u);
  } catch {
    return;
  }
}
function J4(u) {
  return u != null && typeof u == "object" && !Array.isArray(u);
}
function ua(u, e) {
  return Object.entries(e).reduce((a, [i, r]) => {
    const n = a[i];
    return Array.isArray(n) && Array.isArray(r) ? (a[i] = n.concat(r), a) : J4(n) && J4(r) ? (a[i] = ua(n, r), a) : (a[i] = r, a);
  }, Object.assign({}, u));
}
var ea = (u) => (e) => (e.headers.set("Content-Type", "application/json"), e.body = JSON.stringify(u), e), iD = (u) => (e) => {
  const a = Z0(e.body) || {}, i = ua(a, { data: u });
  return ea(i)(e);
}, rD = (u) => (e) => {
  const a = Z0(e.body) || {}, i = ua(a, { extensions: u });
  return ea(i)(e);
}, Zg = Nt, _n = 2147483647, $4 = 100, Yg = 400, Qg = 5, q4 = () => (0, Zg.isNodeProcess)() ? Qg : Math.floor(
  Math.random() * (Yg - $4) + $4
), nD = (u) => (e) => {
  let a;
  if (typeof u == "string")
    switch (u) {
      case "infinite": {
        a = _n;
        break;
      }
      case "real": {
        a = q4();
        break;
      }
      default:
        throw new Error(
          `Failed to delay a response: unknown delay mode "${u}". Please make sure you provide one of the supported modes ("real", "infinite") or a number to "ctx.delay".`
        );
    }
  else if (typeof u > "u")
    a = q4();
  else {
    if (u > _n)
      throw new Error(
        `Failed to delay a response: provided delay duration (${u}) exceeds the maximum allowed duration for "setTimeout" (${_n}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`
      );
    a = u;
  }
  return e.delay = a, e;
}, oD = (u) => (e) => {
  if (u == null)
    return e;
  const a = Z0(e.body) || {}, i = ua(a, { errors: u });
  return ea(i)(e);
}, Xg = Nt, uC = ie, U4 = (0, Xg.isNodeProcess)() ? (u, e) => Promise.resolve().then(() => ui(Rg())).then(
  ({ default: a }) => a(u, e)
) : globalThis.fetch, W4 = (u) => {
  const e = new uC.Headers(u.headers);
  return e.set("x-msw-bypass", "true"), {
    ...u,
    headers: e.all()
  };
}, eC = (u) => {
  const { body: e, method: a } = u, i = {
    ...u,
    body: void 0
  };
  return ["GET", "HEAD"].includes(a) || (typeof e == "object" || typeof e == "number" || typeof e == "boolean" ? i.body = JSON.stringify(e) : i.body = e), i;
}, tD = (u, e = {}) => {
  if (typeof u == "string")
    return U4(u, W4(e));
  const a = eC(u), i = W4(a);
  return U4(u.url.href, i);
}, sD = (u) => (e) => (e.headers.set("Content-Type", "text/plain"), e.body = u, e), lD = (u) => (e) => (e.headers.set("Content-Type", "text/xml"), e.body = u, e), aC = Xa, iC = Xa, rC = "[MSW]";
function Rt(u, ...e) {
  const a = (0, iC.format)(u, ...e);
  return `${rC} ${a}`;
}
function nC(u, ...e) {
  console.warn(Rt(u, ...e));
}
function oC(u, ...e) {
  console.error(Rt(u, ...e));
}
var ru = {
  formatMessage: Rt,
  warn: nC,
  error: oC
};
function tC() {
  (0, aC.invariant)(
    typeof URL < "u",
    ru.formatMessage(
      `Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`
    )
  );
}
var sC = Xa, lC = Nt, EC = L0, DC = L0;
function Hn(u, e, a) {
  return [
    u.active,
    u.installing,
    u.waiting
  ].filter((o) => o != null).find((o) => a(o.scriptURL, e)) || null;
}
function xC(u) {
  return new URL(u, location.href).href;
}
var cC = async (u, e = {}, a) => {
  const i = xC(u), r = await navigator.serviceWorker.getRegistrations().then(
    (s) => s.filter(
      (l) => Hn(l, i, a)
    )
  );
  !navigator.serviceWorker.controller && r.length > 0 && location.reload();
  const [n] = r;
  if (n)
    return n.update().then(() => [
      Hn(
        n,
        i,
        a
      ),
      n
    ]);
  const [o, t] = await (0, DC.until)(
    async () => {
      const s = await navigator.serviceWorker.register(u, e);
      return [
        Hn(s, i, a),
        s
      ];
    }
  );
  if (o) {
    if (o.message.includes("(404)")) {
      const l = new URL((e == null ? void 0 : e.scope) || "/", location.href);
      throw new Error(
        ru.formatMessage(`Failed to register a Service Worker for scope ('${l.href}') with script ('${i}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`)
      );
    }
    throw new Error(
      ru.formatMessage(
        `Failed to register the Service Worker:

%s`,
        o.message
      )
    );
  }
  return t;
};
function ED(u = {}) {
  if (u.quiet)
    return;
  const e = u.message || "Mocking enabled.";
  console.groupCollapsed(
    `%c${ru.formatMessage(e)}`,
    "color:orangered;font-weight:bold;"
  ), console.log(
    "%cDocumentation: %chttps://mswjs.io/docs",
    "font-weight:bold",
    "font-weight:normal"
  ), console.log("Found an issue? https://github.com/mswjs/msw/issues"), u.workerUrl && console.log("Worker script URL:", u.workerUrl), u.workerScope && console.log("Worker scope:", u.workerScope), console.groupEnd();
}
async function dC(u, e) {
  var a, i;
  if (u.workerChannel.send("MOCK_ACTIVATE"), await u.events.once("MOCKING_ENABLED"), u.isMockingEnabled) {
    ru.warn(
      'Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.'
    );
    return;
  }
  u.isMockingEnabled = !0, ED({
    quiet: e.quiet,
    workerScope: (a = u.registration) == null ? void 0 : a.scope,
    workerUrl: (i = u.worker) == null ? void 0 : i.scriptURL
  });
}
var mC = class {
  constructor(u) {
    this.port = u;
  }
  postMessage(u, ...e) {
    const [a, i] = e;
    this.port.postMessage({ type: u, data: a }, { transfer: i });
  }
}, DD = class extends Error {
  constructor(u) {
    super(u), this.name = "NetworkError";
  }
}, FC = S0, kC = ie, pC = ui(wa), Z4 = De, hC = S0, gC = a0, CC = ie, vC = ui(wa);
function Y4() {
  return vC.parse(document.cookie);
}
function bC(u) {
  if (typeof document > "u" || typeof location > "u")
    return {};
  switch (u.credentials) {
    case "same-origin":
      return location.origin === u.url.origin ? Y4() : {};
    case "include":
      return Y4();
    default:
      return {};
  }
}
var AC = ie;
function BC(u) {
  var e, a;
  const i = (0, AC.stringToHeaders)(u), r = i.get("content-type") || "text/plain", n = i.get("content-disposition");
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
function fC(u, e) {
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
`), { contentType: x, filename: c, name: d } = BC(l), m = c === void 0 ? D : new File([D], c, { type: x }), k = t[d];
      k === void 0 ? t[d] = m : Array.isArray(k) ? t[d] = [...k, m] : t[d] = [k, m];
    }
    return t;
  } catch {
    return;
  }
}
function xD(u, e) {
  var a;
  if (!u)
    return u;
  const i = ((a = e == null ? void 0 : e.get("content-type")) == null ? void 0 : a.toLowerCase()) || "";
  return i.startsWith("multipart/form-data") && typeof u != "object" ? fC(u.toString(), e) || u : i.includes("json") && typeof u != "object" && Z0(u.toString()) || u;
}
function _t(u, e) {
  return u.toLowerCase() === e.toLowerCase();
}
var ei = class extends hC.IsomorphicRequest {
  constructor(u, e = {}) {
    super(u, e), e.id && (this.id = e.id), this.cache = e.cache || "default", this.destination = e.destination || "", this.integrity = e.integrity || "", this.keepalive = e.keepalive || !1, this.mode = e.mode || "cors", this.priority = e.priority || "auto", this.redirect = e.redirect || "follow", this.referrer = e.referrer || "", this.referrerPolicy = e.referrerPolicy || "no-referrer", this.cookies = e.cookies || this.getCookies();
  }
  get body() {
    const u = (0, gC.decodeBuffer)(this._body), e = xD(u, this.headers);
    if (!(_t(this.method, "GET") && e === ""))
      return e;
  }
  passthrough() {
    return {
      status: 101,
      statusText: "Continue",
      headers: new CC.Headers(),
      body: null,
      passthrough: !0,
      once: !1
    };
  }
  getCookies() {
    var u;
    const e = this.headers.get("cookie"), a = e ? pC.parse(e) : {};
    Z4.store.hydrate();
    const i = Array.from(
      (u = Z4.store.get({ ...this, url: this.url.href })) == null ? void 0 : u.entries()
    ).reduce((o, [t, { value: s }]) => Object.assign(o, { [t.trim()]: s }), {}), n = {
      ...bC(this),
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
function yC(u) {
  const e = new URL(u.url), a = new kC.Headers(u.headers);
  return new ei(e, {
    ...u,
    body: (0, FC.encodeBuffer)(u.body || ""),
    headers: a
  });
}
var zC = L0, SC = async (u, e, a) => {
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
}, cD = ui(Ao), MC = _g, ai = (u) => u.referrer.startsWith(u.url.origin) ? u.url.pathname : new URL(
  u.url.pathname,
  `${u.url.protocol}//${u.url.host}`
).href;
function dD(u) {
  var e;
  const a = u.definitions.find((i) => i.kind === "OperationDefinition");
  return {
    operationType: a == null ? void 0 : a.operation,
    operationName: (e = a == null ? void 0 : a.name) == null ? void 0 : e.value
  };
}
function jC(u) {
  try {
    const e = (0, MC.parse)(u);
    return dD(e);
  } catch (e) {
    return e;
  }
}
function PC(u, e, a) {
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
function TC(u) {
  var e, a;
  switch (u.method) {
    case "GET": {
      const i = u.url.searchParams.get("query"), r = u.url.searchParams.get("variables") || "";
      return {
        query: i,
        variables: Z0(r)
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
        const { operations: i, map: r, ...n } = u.body, o = Z0(
          i
        ) || {};
        if (!o.query)
          return null;
        const t = Z0(r || "") || {}, s = o.variables ? PC(
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
function mD(u) {
  const e = TC(u);
  if (!e || !e.query)
    return;
  const { query: a, variables: i } = e, r = jC(a);
  if (r instanceof Error) {
    const n = ai(u);
    throw new Error(
      ru.formatMessage(
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
function FD(u) {
  return u < 300 ? "#69AB32" : u < 400 ? "#F0BB4B" : "#E95F5D";
}
function kD() {
  const u = /* @__PURE__ */ new Date();
  return [u.getHours(), u.getMinutes(), u.getSeconds()].map(String).map((e) => e.slice(0, 2)).map((e) => e.padStart(2, "0")).join(":");
}
function pD(u) {
  return {
    ...u,
    body: u.body,
    headers: u.headers.all()
  };
}
var wC = ie;
function hD(u) {
  const e = (0, wC.objectToHeaders)(u.headers);
  return {
    ...u,
    body: xD(u.body, e)
  };
}
var NC = Hg, LC = Pa, KC = /[\?|#].*$/g;
function RC(u) {
  return new URL(`/${u}`, "http://localhost").searchParams;
}
function Ht(u) {
  return u.replace(KC, "");
}
function _C(u) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u);
}
function HC(u, e) {
  if (_C(u) || u.startsWith("*"))
    return u;
  const a = e || typeof document < "u" && document.baseURI;
  return a ? decodeURI(new URL(encodeURI(u), a).href) : u;
}
function GC(u, e) {
  if (u instanceof RegExp)
    return u;
  const a = HC(u, e);
  return Ht(a);
}
function VC(u) {
  return u.replace(
    /([:a-zA-Z_-]*)(\*{1,2})+/g,
    (e, a, i) => {
      const r = "(.*)";
      return a ? a.startsWith(":") ? `${a}${i}` : `${a}${r}` : r;
    }
  ).replace(/([^\/])(:)(?=\d+)/, "$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/, "$1\\$2");
}
function Gt(u, e, a) {
  const i = GC(e, a), r = typeof i == "string" ? VC(i) : i, n = (0, LC.getCleanUrl)(u), o = (0, NC.match)(r, { decode: decodeURIComponent })(n), t = o && o.params || {};
  return {
    matches: o !== !1,
    params: t
  };
}
var IC = ie;
function gD(...u) {
  return (...e) => u.reduceRight((a, i) => a instanceof Promise ? Promise.resolve(a).then(i) : i(a), e[0]);
}
var CD = {
  status: 200,
  statusText: "OK",
  body: null,
  delay: 0,
  once: !1,
  passthrough: !1
}, OC = [];
function Do(u, e = OC) {
  return async (...a) => {
    const i = Object.assign(
      {},
      CD,
      {
        headers: new IC.Headers({
          "x-powered-by": "msw"
        })
      },
      u
    ), r = [
      ...e,
      ...a
    ].filter(Boolean);
    return r.length > 0 ? gD(...r)(i) : i;
  };
}
var vD = Object.assign(Do(), {
  once: Do({ once: !0 }),
  networkError(u) {
    throw new DD(u);
  }
}), JC = /[\/\\]msw[\/\\]src[\/\\](.+)/, $C = /(node_modules)?[\/\\]lib[\/\\](umd|esm|iief|cjs)[\/\\]|^[^\/\\]*$/;
function qC(u) {
  const e = u.stack;
  if (!e)
    return;
  const i = e.split(`
`).slice(1).find((n) => !(JC.test(n) || $C.test(n)));
  return i ? i.replace(/\s*at [^()]*\(([^)]+)\)/, "$1").replace(/^@/, "") : void 0;
}
function UC(u) {
  return u ? typeof u[Symbol.iterator] == "function" : !1;
}
var Wr = {
  status: uD,
  set: eD,
  delay: nD,
  fetch: tD
}, Vt = class {
  constructor(u) {
    this.shouldSkip = !1, this.ctx = u.ctx || Wr, this.resolver = u.resolver;
    const e = qC(new Error());
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
      vD,
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
      if (UC(r)) {
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
}, bD = /* @__PURE__ */ ((u) => (u.HEAD = "HEAD", u.GET = "GET", u.POST = "POST", u.PUT = "PUT", u.PATCH = "PATCH", u.OPTIONS = "OPTIONS", u.DELETE = "DELETE", u))(bD || {}), AD = {
  ...Wr,
  cookie: Kt,
  body: aD,
  text: sD,
  json: ea,
  xml: lD
}, WC = class extends ei {
  constructor(u, e) {
    super(u.url, {
      ...u,
      body: u._body
    }), this.params = e, this.id = u.id;
  }
}, It = class extends Vt {
  constructor(u, e, a) {
    super({
      info: {
        header: `${u} ${e}`,
        path: e,
        method: u
      },
      ctx: AD,
      resolver: a
    }), this.checkRedundantQueryParameters();
  }
  checkRedundantQueryParameters() {
    const { method: u, path: e } = this.info;
    if (e instanceof RegExp || Ht(e) === e)
      return;
    RC(e).forEach((r, n) => {
    }), ru.warn(
      `Found a redundant usage of query parameters in the request handler URL for "${u} ${e}". Please match against a path instead and access query parameters in the response resolver function using "req.url.searchParams".`
    );
  }
  parse(u, e) {
    return Gt(
      u.url,
      this.info.path,
      e == null ? void 0 : e.baseUrl
    );
  }
  getPublicRequest(u, e) {
    return new WC(u, e.params || {});
  }
  predicate(u, e) {
    return (this.info.method instanceof RegExp ? this.info.method.test(u.method) : _t(this.info.method, u.method)) && e.matches;
  }
  log(u, e) {
    const a = ai(u), i = pD(u), r = hD(e), n = FD(e.status);
    console.groupCollapsed(
      ru.formatMessage("%s %s %s (%c%s%c)"),
      kD(),
      u.method,
      a,
      `color:${n}`,
      `${e.status} ${e.statusText}`,
      "color:inherit"
    ), console.log("Request", i), console.log("Handler:", this), console.log("Response", r), console.groupEnd();
  }
}, ki = Xa, ZC = (u, e) => (a) => {
  YC(u);
  const i = Z0(a.body) || {}, r = ua(i, { [u]: e });
  return ea(r)(a);
};
function YC(u) {
  (0, ki.invariant)(
    u.trim() !== "",
    ru.formatMessage(
      "Failed to set a custom field on a GraphQL response: field name cannot be empty."
    )
  ), (0, ki.invariant)(
    u !== "data",
    ru.formatMessage(
      'Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.data()" instead?',
      u
    )
  ), (0, ki.invariant)(
    u !== "errors",
    ru.formatMessage(
      'Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.errors()" instead?',
      u
    )
  ), (0, ki.invariant)(
    u !== "extensions",
    ru.formatMessage(
      'Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.extensions()" instead?',
      u
    )
  );
}
function BD(u, e) {
  try {
    return u();
  } catch (a) {
    e == null || e(a);
  }
}
var fD = {
  ...Wr,
  data: iD,
  extensions: rD,
  errors: oD,
  cookie: Kt,
  field: ZC
};
function QC(u) {
  return u == null ? !1 : typeof u == "object" && "kind" in u && "definitions" in u;
}
var XC = class extends ei {
  constructor(u, e, a) {
    super(u.url, {
      ...u,
      body: u._body
    }), this.variables = e, this.operationName = a;
  }
}, Zr = class extends Vt {
  constructor(u, e, a, i) {
    let r = e;
    if (QC(e)) {
      const o = dD(e);
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
      ctx: fD,
      resolver: i
    }), this.endpoint = a;
  }
  parse(u) {
    return BD(
      () => mD(u),
      (e) => console.error(e.message)
    );
  }
  getPublicRequest(u, e) {
    var a, i;
    return new XC(
      u,
      (a = e == null ? void 0 : e.variables) != null ? a : {},
      (i = e == null ? void 0 : e.operationName) != null ? i : ""
    );
  }
  predicate(u, e) {
    if (!e)
      return !1;
    if (!e.operationName && this.info.operationType !== "all") {
      const n = ai(u);
      return ru.warn(`Failed to intercept a GraphQL request at "${u.method} ${n}": anonymous GraphQL operations are not supported.

Consider naming this operation or using "graphql.operation()" request handler to intercept GraphQL requests regardless of their operation name/type. Read more: https://mswjs.io/docs/api/graphql/operation      `), !1;
    }
    const a = Gt(u.url, this.endpoint), i = this.info.operationType === "all" || e.operationType === this.info.operationType, r = this.info.operationName instanceof RegExp ? this.info.operationName.test(e.operationName || "") : e.operationName === this.info.operationName;
    return a.matches && i && r;
  }
  log(u, e, a) {
    const i = pD(u), r = hD(e), n = FD(e.status), o = a != null && a.operationName ? `${a == null ? void 0 : a.operationType} ${a == null ? void 0 : a.operationName}` : `anonymous ${a == null ? void 0 : a.operationType}`;
    console.groupCollapsed(
      ru.formatMessage("%s %s (%c%s%c)"),
      kD(),
      `${o}`,
      `color:${n}`,
      `${e.status} ${e.statusText}`,
      "color:inherit"
    ), console.log("Request:", i), console.log("Handler:", this), console.log("Response:", r), console.groupEnd();
  }
}, uv = 3, ev = 4, yD = 0.5;
function av(u) {
  return u.reduce(
    (e, a) => (a instanceof It && e.rest.push(a), a instanceof Zr && e.graphql.push(a), e),
    {
      rest: [],
      graphql: []
    }
  );
}
function iv() {
  return (u, e) => {
    const { path: a, method: i } = e.info;
    if (a instanceof RegExp || i instanceof RegExp)
      return 1 / 0;
    const n = _t(u.method, i) ? yD : 0, o = ai(u);
    return (0, cD.default)(o, a) - n;
  };
}
function rv(u) {
  return (e, a) => {
    if (typeof u.operationName > "u")
      return 1 / 0;
    const { operationType: i, operationName: r } = a.info;
    if (typeof r != "string")
      return 1 / 0;
    const o = u.operationType === i ? yD : 0;
    return (0, cD.default)(u.operationName, r) - o;
  };
}
function nv(u, e, a) {
  return e.reduce((r, n) => {
    const o = a(u, n);
    return r.concat([[o, n]]);
  }, []).sort(([r], [n]) => r - n).filter(([r]) => r <= uv).slice(0, ev).map(([, r]) => r);
}
function ov(u) {
  return u.length > 1 ? `Did you mean to request one of the following resources instead?

${u.map((e) => `  • ${e.info.header}`).join(`
`)}` : `Did you mean to request "${u[0].info.header}" instead?`;
}
function tv(u, e, a = "warn") {
  const i = BD(() => mD(u));
  function r() {
    const t = av(e), s = i ? t.graphql : t.rest, l = nv(
      u,
      s,
      i ? rv(i) : iv()
    );
    return l.length > 0 ? ov(l) : "";
  }
  function n() {
    const t = ai(u), s = i ? `${i.operationType} ${i.operationName} (${u.method} ${t})` : `${u.method} ${t}`, l = r();
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
        throw ru.error("Error: %s", s), new Error(
          ru.formatMessage(
            'Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'
          )
        );
      case "warn": {
        ru.warn("Warning: %s", s);
        break;
      }
      case "bypass":
        break;
      default:
        throw new Error(
          ru.formatMessage(
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
var Q4 = De;
function sv(u, e) {
  Q4.store.add({ ...u, url: u.url.toString() }, e), Q4.store.persist();
}
async function Ot(u, e, a, i, r) {
  var n, o, t, s, l, E;
  if (i.emit("request:start", u), u.headers.get("x-msw-bypass") === "true") {
    i.emit("request:end", u), (n = r == null ? void 0 : r.onPassthroughResponse) == null || n.call(r, u);
    return;
  }
  const [D, x] = await (0, zC.until)(() => SC(
    u,
    e,
    r == null ? void 0 : r.resolutionContext
  ));
  if (D)
    throw i.emit("unhandledException", D, u), D;
  const { handler: c, response: d } = x;
  if (!c) {
    tv(u, e, a.onUnhandledRequest), i.emit("request:unhandled", u), i.emit("request:end", u), (o = r == null ? void 0 : r.onPassthroughResponse) == null || o.call(r, u);
    return;
  }
  if (!d) {
    ru.warn(
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
  sv(u, d), i.emit("request:match", u);
  const m = x, k = ((l = r == null ? void 0 : r.transformResponse) == null ? void 0 : l.call(r, d)) || d;
  return (E = r == null ? void 0 : r.onMockedResponse) == null || E.call(
    r,
    k,
    m
  ), i.emit("request:end", u), k;
}
var X4 = ie;
function zD(u) {
  return {
    status: u.status,
    statusText: u.statusText,
    headers: (0, X4.flattenHeadersObject)((0, X4.headersToObject)(u.headers)),
    body: u.body
  };
}
var lv = (u, e) => async (a, i) => {
  var r;
  const n = new mC(a.ports[0]), o = yC(i.payload);
  try {
    await Ot(
      o,
      u.requestHandlers,
      e,
      u.emitter,
      {
        transformResponse: Ev,
        onPassthroughResponse() {
          n.postMessage("NOT_FOUND");
        },
        async onMockedResponse(t, { handler: s, publicRequest: l, parsedRequest: E }) {
          if (t.body instanceof ReadableStream)
            throw new Error(
              ru.formatMessage(
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
              zD(d),
              E
            );
          });
        }
      }
    );
  } catch (t) {
    if (t instanceof DD) {
      n.postMessage("NETWORK_ERROR", {
        name: t.name,
        message: t.message
      });
      return;
    }
    t instanceof Error && (ru.error(
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
function Ev(u) {
  return {
    status: u.status,
    statusText: u.statusText,
    headers: u.headers.all(),
    body: u.body,
    delay: u.delay
  };
}
async function Dv(u, e) {
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
var us = L0;
function xv(u) {
  const e = window.XMLHttpRequest.prototype.send;
  window.XMLHttpRequest.prototype.send = function(...i) {
    (0, us.until)(() => u).then(() => {
      window.XMLHttpRequest.prototype.send = e, this.send(...i);
    });
  };
  const a = window.fetch;
  window.fetch = async (...i) => (await (0, us.until)(() => u), window.fetch = a, window.fetch(...i));
}
function cv(u) {
  return (e, a) => {
    var i;
    const { payload: r } = a;
    if ((i = r.type) != null && i.includes("opaque"))
      return;
    const n = new Response(r.body || null, r);
    n.headers.get("x-powered-by") === "msw" ? u.emitter.emit("response:mocked", n, r.requestId) : u.emitter.emit("response:bypass", n, r.requestId);
  };
}
function dv(u, e) {
  !(e != null && e.quiet) && !location.href.startsWith(u.scope) && ru.warn(
    `Cannot intercept requests on this page because it's outside of the worker's scope ("${u.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`
  );
}
var mv = (u) => function(a, i) {
  const n = (async () => {
    u.events.removeAllListeners(), u.workerChannel.on(
      "REQUEST",
      lv(u, a)
    ), u.workerChannel.on("RESPONSE", cv(u));
    const o = await cC(
      a.serviceWorker.url,
      a.serviceWorker.options,
      a.findWorker
    ), [t, s] = o;
    if (!t) {
      const E = i != null && i.findWorker ? ru.formatMessage(
        `Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`,
        a.serviceWorker.url
      ) : ru.formatMessage(
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
    const [l] = await (0, EC.until)(
      () => Dv(u, t)
    );
    return l && ru.error(`Detected outdated Service Worker: ${l.message}

The mocking is still enabled, but it's highly recommended that you update your Service Worker by running:

$ npx msw init <PUBLIC_DIR>

This is necessary to ensure that the Service Worker is in sync with the library to guarantee its stability.
If this message still persists after updating, please report an issue: https://github.com/open-draft/msw/issues      `), u.keepAliveInterval = window.setInterval(
      () => u.workerChannel.send("KEEPALIVE_REQUEST"),
      5e3
    ), dv(s, u.startOptions), s;
  })().then(
    async (o) => {
      const t = o.installing || o.waiting;
      return t && await new Promise((s) => {
        t.addEventListener("statechange", () => {
          if (t.state === "activated")
            return s();
        });
      }), await dC(u, a).catch((s) => {
        throw new Error(`Failed to enable mocking: ${s == null ? void 0 : s.message}`);
      }), o;
    }
  );
  return a.waitUntilReady && xv(n), n;
};
function SD(u = {}) {
  u.quiet || console.log(
    `%c${ru.formatMessage("Mocking disabled.")}`,
    "color:orangered;font-weight:bold;"
  );
}
var Fv = (u) => function() {
  var a;
  if (!u.isMockingEnabled) {
    ru.warn(
      'Found a redundant "worker.stop()" call. Note that stopping the worker while mocking already stopped has no effect. Consider removing this "worker.stop()" call.'
    );
    return;
  }
  u.workerChannel.send("MOCK_DEACTIVATE"), u.isMockingEnabled = !1, window.clearInterval(u.keepAliveInterval), SD({ quiet: (a = u.startOptions) == null ? void 0 : a.quiet });
}, kv = {
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
}, pv = S0, hv = qr, gv = Kr, Cv = S0, Gn = () => {
  throw new Error("Not implemented");
};
function vv(u) {
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
      return (0, Cv.encodeBuffer)(u.body || "");
    },
    bodyUsed: !1,
    formData: Gn,
    blob: Gn,
    clone: Gn
  };
}
function bv(u, e) {
  const a = new pv.BatchInterceptor({
    name: "fallback",
    interceptors: [new hv.FetchInterceptor(), new gv.XMLHttpRequestInterceptor()]
  });
  return a.on("request", async (i) => {
    const r = new ei(i.url, {
      ...i,
      body: await i.arrayBuffer()
    }), n = await Ot(
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
              zD(E),
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
    const n = vv(r);
    r.headers.get("x-powered-by") === "msw" ? u.emitter.emit("response:mocked", n, i.id) : u.emitter.emit("response:bypass", n, i.id);
  }), a.apply(), a;
}
function Av(u) {
  return async function(a) {
    u.fallbackInterceptor = bv(
      u,
      a
    ), ED({
      message: "Mocking enabled (fallback mode).",
      quiet: a.quiet
    });
  };
}
function Bv(u) {
  return function() {
    var a, i;
    (a = u.fallbackInterceptor) == null || a.dispose(), SD({ quiet: (i = u.startOptions) == null ? void 0 : i.quiet });
  };
}
var fv = Xa, es = wi;
function yv(u, e) {
  const a = u.emit;
  a._isPiped || (u.emit = function(i, ...r) {
    return e.emit(i, ...r), a.call(this, i, ...r);
  }, u.emit._isPiped = !0);
}
function as(u) {
  const e = [...u];
  return Object.freeze(e), e;
}
var MD = class {
  constructor(...u) {
    this.validateHandlers(...u), this.initialHandlers = as(u), this.currentHandlers = [...u], this.emitter = new es.Emitter(), this.publicEmitter = new es.Emitter(), yv(this.emitter, this.publicEmitter), this.events = this.createLifeCycleEvents();
  }
  validateHandlers(...u) {
    for (const e of u)
      (0, fv.invariant)(
        !Array.isArray(e),
        ru.formatMessage(
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
    return as(this.currentHandlers);
  }
  createLifeCycleEvents() {
    return {
      on: (...u) => this.publicEmitter.on(...u),
      removeListener: (...u) => this.publicEmitter.removeListener(...u),
      removeAllListeners: (...u) => this.publicEmitter.removeAllListeners(...u)
    };
  }
}, jD = class extends MD {
  constructor(...u) {
    super(...u), this.startHandler = null, this.stopHandler = null, (0, sC.invariant)(
      !(0, lC.isNodeProcess)(),
      ru.formatMessage(
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
    }), this.startHandler = u.useFallbackMode ? Av(u) : mv(u), this.stopHandler = u.useFallbackMode ? Bv(u) : Fv(u), u;
  }
  async start(u = {}) {
    return this.context.startOptions = ua(
      kv,
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
function zv(...u) {
  return new jD(...u);
}
function G0(u) {
  return (e, a) => new It(u, e, a);
}
var Sv = {
  all: G0(/.+/),
  head: G0(
    "HEAD"
    /* HEAD */
  ),
  get: G0(
    "GET"
    /* GET */
  ),
  post: G0(
    "POST"
    /* POST */
  ),
  put: G0(
    "PUT"
    /* PUT */
  ),
  delete: G0(
    "DELETE"
    /* DELETE */
  ),
  patch: G0(
    "PATCH"
    /* PATCH */
  ),
  options: G0(
    "OPTIONS"
    /* OPTIONS */
  )
};
function Qi(u, e) {
  return (a, i) => new Zr(
    u,
    a,
    e,
    i
  );
}
function PD(u) {
  return (e) => new Zr(
    "all",
    new RegExp(".*"),
    u,
    e
  );
}
var Mv = {
  operation: PD("*"),
  query: Qi("query", "*"),
  mutation: Qi("mutation", "*")
};
function jv(u) {
  return {
    operation: PD(u),
    query: Qi("query", u),
    mutation: Qi("mutation", u)
  };
}
var Pv = {
  ...Mv,
  link: jv
};
tC();
};
function mu(u) {
  let e = `[@faker-js/faker]: ${u.deprecated} is deprecated`;
  u.since && (e += ` since v${u.since}`), u.until && (e += ` and will be removed in v${u.until}`), u.proposed && (e += `. Please use ${u.proposed} instead`), console.warn(`${e}.`);
}
var Gou = ((u) => (u.female = "female", u.male = "male", u))(Gou || {}), XD = ((u) => (u.Female = "female", u.Male = "male", u))(XD || {});
function pi(u, e, { generic: a, female: i, male: r } = {}) {
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
var u5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(u5.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  firstName(u) {
    let { first_name: e, female_first_name: a, male_first_name: i } = this.faker.definitions.name;
    return pi(this.faker, u, { generic: e, female: a, male: i });
  }
  lastName(u) {
    let { last_name: e, female_last_name: a, male_last_name: i } = this.faker.definitions.name;
    return pi(this.faker, u, { generic: e, female: a, male: i });
  }
  middleName(u) {
    let { middle_name: e, female_middle_name: a, male_middle_name: i } = this.faker.definitions.name;
    return pi(this.faker, u, { generic: e, female: a, male: i });
  }
  findName(u, e, a) {
    return mu({ deprecated: "faker.name.findName()", proposed: "faker.name.fullName()", since: "7.4", until: "8.0" }), this.fullName({ firstName: u, lastName: e, sex: a });
  }
  fullName(u = {}) {
    let { gender: e, sex: a = e || this.faker.helpers.arrayElement(["female", "male"]), firstName: i = this.firstName(a), lastName: r = this.lastName(a) } = u;
    e && mu({ deprecated: "faker.name.fullName({ gender: '...' })", proposed: "faker.name.fullName({ sex: '...' })", since: "7.4", until: "8.0" });
    let n = [], o = this.faker.helpers.maybe(() => this.prefix(a), { probability: 0.125 });
    o && n.push(o), n.push(i), n.push(r);
    let t = this.faker.helpers.maybe(() => this.suffix(), { probability: 0.125 });
    return t && n.push(t), n.join(" ");
  }
  gender(u) {
    return u ? (mu({ deprecated: "faker.name.gender(true)", proposed: "faker.name.sex()", since: "7.5", until: "8.0" }), this.faker.name.sex()) : this.faker.helpers.arrayElement(this.faker.definitions.name.gender);
  }
  sex() {
    return this.faker.helpers.arrayElement(this.faker.definitions.name.sex);
  }
  sexType() {
    return this.faker.helpers.objectValue(XD);
  }
  prefix(u) {
    let { prefix: e, female_prefix: a, male_prefix: i } = this.faker.definitions.name;
    return pi(this.faker, u, { generic: e, female: a, male: i });
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
}, e5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(e5.prototype))
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
    u != null && mu({ deprecated: "faker.address.city(format)", proposed: "faker.address.city() or faker.helpers.fake(format)", since: "7.0", until: "8.0" });
    let e = this.faker.definitions.address.city;
    return typeof u != "number" && (u = this.faker.datatype.number(e.length - 1)), this.faker.helpers.fake(e[u]);
  }
  cityPrefix() {
    return mu({ deprecated: "faker.address.cityPrefix()", proposed: "faker.address.city() or faker.fake('{{address.city_prefix}}')", since: "7.2", until: "8.0" }), this.faker.helpers.arrayElement(this.faker.definitions.address.city_prefix);
  }
  citySuffix() {
    return mu({ deprecated: "faker.address.citySuffix()", proposed: "faker.address.city() or faker.helpers.fake('{{address.city_suffix}}')", since: "7.2", until: "8.0" }), this.faker.helpers.arrayElement(this.faker.definitions.address.city_suffix);
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
    return this.faker.definitions.address.street_name == null ? (mu({ deprecated: "faker.address.streetName() without address.street_name definitions", proposed: "faker.address.street() or provide address.street_name definitions", since: "7.0", until: "8.0" }), this.street()) : this.faker.helpers.arrayElement(this.faker.definitions.address.street_name);
  }
  streetAddress(u = !1) {
    let e = this.faker.definitions.address.street_address[u ? "full" : "normal"];
    return this.faker.helpers.fake(e);
  }
  streetSuffix() {
    return mu({ deprecated: "faker.address.streetSuffix()", proposed: "faker.address.street()", since: "7.4", until: "8.0" }), this.faker.helpers.arrayElement(this.faker.definitions.address.street_suffix);
  }
  streetPrefix() {
    return mu({ deprecated: "faker.address.streetPrefix()", proposed: "faker.address.street()", since: "7.4", until: "8.0" }), this.faker.helpers.arrayElement(this.faker.definitions.address.street_prefix);
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
}, a5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(a5.prototype))
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
}, Vou = ["sRGB", "display-p3", "rec2020", "a98-rgb", "prophoto-rgb", "rec2020"], Iou = ["rgb", "rgba", "hsl", "hsla", "hwb", "cmyk", "lab", "lch", "color"];
function Oou(u, e) {
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
function i5(u) {
  return u.map((e) => {
    if (e % 1 !== 0) {
      let a = new ArrayBuffer(4);
      new DataView(a).setFloat32(0, e);
      let i = new Uint8Array(a);
      return i5(Array.from(i)).split(" ").join("");
    }
    return (e >>> 0).toString(2).padStart(8, "0");
  }).join(" ");
}
function Jou(u, e = "rgb", a = "sRGB") {
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
function ne(u, e, a = "rgb", i = "sRGB") {
  switch (e) {
    case "css":
      return Jou(u, a, i);
    case "binary":
      return i5(u);
    default:
      return u;
  }
}
var r5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(r5.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  human() {
    return this.faker.helpers.arrayElement(this.faker.definitions.color.human);
  }
  space() {
    return this.faker.helpers.arrayElement(this.faker.definitions.color.space);
  }
  cssSupportedFunction() {
    return this.faker.helpers.arrayElement(Iou);
  }
  cssSupportedSpace() {
    return this.faker.helpers.arrayElement(Vou);
  }
  rgb(u) {
    let { format: e = "hex", includeAlpha: a = !1, prefix: i = "#", casing: r = "lower" } = u || {};
    u = { format: e, includeAlpha: a, prefix: i, casing: r };
    let n, o = "rgb";
    return e === "hex" ? (n = this.faker.datatype.hexadecimal({ length: a ? 8 : 6, prefix: "" }), n = Oou(n, u), n) : (n = Array.from({ length: 3 }).map(() => this.faker.datatype.number({ min: 0, max: 255 })), a && (n.push(this.faker.datatype.float({ min: 0, max: 1, precision: 0.01 })), o = "rgba"), ne(n, e, o));
  }
  cmyk(u) {
    let e = Array.from({ length: 4 }).map(() => this.faker.datatype.float({ min: 0, max: 1, precision: 0.01 }));
    return ne(e, (u == null ? void 0 : u.format) || "decimal", "cmyk");
  }
  hsl(u) {
    let e = [this.faker.datatype.number({ min: 0, max: 360 })];
    for (let a = 0; a < (u != null && u.includeAlpha ? 3 : 2); a++)
      e.push(this.faker.datatype.float({ min: 0, max: 1, precision: 0.01 }));
    return ne(e, (u == null ? void 0 : u.format) || "decimal", u != null && u.includeAlpha ? "hsla" : "hsl");
  }
  hwb(u) {
    let e = [this.faker.datatype.number({ min: 0, max: 360 })];
    for (let a = 0; a < 2; a++)
      e.push(this.faker.datatype.float({ min: 0, max: 1, precision: 0.01 }));
    return ne(e, (u == null ? void 0 : u.format) || "decimal", "hwb");
  }
  lab(u) {
    let e = [this.faker.datatype.float({ min: 0, max: 1, precision: 1e-6 })];
    for (let a = 0; a < 2; a++)
      e.push(this.faker.datatype.float({ min: -100, max: 100, precision: 1e-4 }));
    return ne(e, (u == null ? void 0 : u.format) || "decimal", "lab");
  }
  lch(u) {
    let e = [this.faker.datatype.float({ min: 0, max: 1, precision: 1e-6 })];
    for (let a = 0; a < 2; a++)
      e.push(this.faker.datatype.number({ min: 0, max: 230, precision: 0.1 }));
    return ne(e, (u == null ? void 0 : u.format) || "decimal", "lch");
  }
  colorByCSSColorSpace(u) {
    (u == null ? void 0 : u.format) === "css" && !(u != null && u.space) && (u = { ...u, space: "sRGB" });
    let e = Array.from({ length: 3 }).map(() => this.faker.datatype.float({ min: 0, max: 1, precision: 1e-4 }));
    return ne(e, (u == null ? void 0 : u.format) || "decimal", "color", u == null ? void 0 : u.space);
  }
}, n5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(n5.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  color() {
    return mu({ deprecated: "faker.commerce.color()", proposed: "faker.color.human()", since: "7.0", until: "8.0" }), this.faker.color.human();
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
}, o5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(o5.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  suffixes() {
    return this.faker.definitions.company.suffix.slice(0);
  }
  name(u) {
    var e;
    u != null && mu({ deprecated: "faker.company.name(format)", proposed: "faker.company.name() or faker.helpers.fake(format)", since: "7.4", until: "8.0" });
    let a = ["{{name.lastName}} {{company.companySuffix}}", "{{name.lastName}} - {{name.lastName}}", "{{name.lastName}}, {{name.lastName}} and {{name.lastName}}"], i = (e = this.faker.definitions.company.name_patterns) != null ? e : a;
    return typeof u != "number" && (u = this.faker.datatype.number(i.length - 1)), this.faker.helpers.fake(i[u]);
  }
  companyName(u) {
    return mu({ deprecated: "faker.company.companyName()", proposed: "faker.company.name()", since: "7.4", until: "8.0" }), this.name(u);
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
}, t5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(t5.prototype))
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
}, s5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(s5.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  number(u = 99999) {
    var e;
    typeof u == "number" && (u = { max: u });
    let { min: a = 0, precision: i = 1 } = u, r = (e = u.max) != null ? e : a + 99999;
    if (r === a)
      return a;
    if (r < a)
      throw new zu(`Max ${r} should be greater than min ${a}.`);
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
    typeof u == "number" && (mu({ deprecated: "faker.datatype.hexadecimal(length)", proposed: "faker.datatype.hexadecimal({ length })", since: "7.5", until: "8.0" }), u = { length: u });
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
      throw new zu(`Max ${r} should be larger then min ${i}.`);
    let n = r - i, o = BigInt(this.faker.random.numeric(n.toString(10).length, { allowLeadingZeros: !0 })) % (n + BigInt(1));
    return i + o;
  }
};
function oe(u) {
  return u = new Date(u), isNaN(u.valueOf()) && (u = /* @__PURE__ */ new Date()), u;
}
var l5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(l5.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  past(u, e) {
    let a = oe(e), i = { min: 1e3, max: (u || 1) * 365 * 24 * 3600 * 1e3 }, r = a.getTime();
    return r -= this.faker.datatype.number(i), a.setTime(r), a;
  }
  future(u, e) {
    let a = oe(e), i = { min: 1e3, max: (u || 1) * 365 * 24 * 3600 * 1e3 }, r = a.getTime();
    return r += this.faker.datatype.number(i), a.setTime(r), a;
  }
  between(u, e) {
    let a = oe(u).getTime(), i = oe(e).getTime(), r = this.faker.datatype.number(i - a);
    return new Date(a + r);
  }
  betweens(u, e, a = 3) {
    let i = [];
    for (; i.length < a; )
      i.push(this.between(u, e));
    return i.sort((r, n) => r.getTime() - n.getTime());
  }
  recent(u, e) {
    let a = oe(e), i = { min: 1e3, max: (u || 1) * 24 * 3600 * 1e3 }, r = a.getTime();
    return r -= this.faker.datatype.number(i), a.setTime(r), a;
  }
  soon(u, e) {
    let a = oe(e), i = { min: 1e3, max: (u || 1) * 24 * 3600 * 1e3 }, r = a.getTime();
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
    let n = u.mode === "age" ? "age" : "year", o = oe(u.refDate), t = o.getUTCFullYear(), s, l;
    if (n === "age" ? (s = new Date(o).setUTCFullYear(t - ((e = u.max) != null ? e : 80) - 1), l = new Date(o).setUTCFullYear(t - ((a = u.min) != null ? a : 18))) : (s = new Date(Date.UTC(0, 0, 2)).setUTCFullYear((i = u.min) != null ? i : t - 80), l = new Date(Date.UTC(0, 11, 30)).setUTCFullYear((r = u.max) != null ? r : t - 18)), l < s)
      throw new zu(`Max ${l} should be larger then min ${s}.`);
    return new Date(this.faker.datatype.number({ min: s, max: l }));
  }
}, E5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(E5.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  fake(u) {
    return mu({ deprecated: "faker.fake()", proposed: "faker.helpers.fake()", since: "7.4", until: "8.0" }), this.faker.helpers.fake(u);
  }
}, $ou = { alpha: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], formats: [{ country: "AL", total: 28, bban: [{ type: "n", count: 8 }, { type: "c", count: 16 }], format: "ALkk bbbs sssx cccc cccc cccc cccc" }, { country: "AD", total: 24, bban: [{ type: "n", count: 8 }, { type: "c", count: 12 }], format: "ADkk bbbb ssss cccc cccc cccc" }, { country: "AT", total: 20, bban: [{ type: "n", count: 5 }, { type: "n", count: 11 }], format: "ATkk bbbb bccc cccc cccc" }, { country: "AZ", total: 28, bban: [{ type: "a", count: 4 }, { type: "n", count: 20 }], format: "AZkk bbbb cccc cccc cccc cccc cccc" }, { country: "BH", total: 22, bban: [{ type: "a", count: 4 }, { type: "c", count: 14 }], format: "BHkk bbbb cccc cccc cccc cc" }, { country: "BE", total: 16, bban: [{ type: "n", count: 3 }, { type: "n", count: 9 }], format: "BEkk bbbc cccc ccxx" }, { country: "BA", total: 20, bban: [{ type: "n", count: 6 }, { type: "n", count: 10 }], format: "BAkk bbbs sscc cccc ccxx" }, { country: "BR", total: 29, bban: [{ type: "n", count: 13 }, { type: "n", count: 10 }, { type: "a", count: 1 }, { type: "c", count: 1 }], format: "BRkk bbbb bbbb ssss sccc cccc ccct n" }, { country: "BG", total: 22, bban: [{ type: "a", count: 4 }, { type: "n", count: 6 }, { type: "c", count: 8 }], format: "BGkk bbbb ssss ddcc cccc cc" }, { country: "CR", total: 22, bban: [{ type: "n", count: 1 }, { type: "n", count: 3 }, { type: "n", count: 14 }], format: "CRkk xbbb cccc cccc cccc cc" }, { country: "HR", total: 21, bban: [{ type: "n", count: 7 }, { type: "n", count: 10 }], format: "HRkk bbbb bbbc cccc cccc c" }, { country: "CY", total: 28, bban: [{ type: "n", count: 8 }, { type: "c", count: 16 }], format: "CYkk bbbs ssss cccc cccc cccc cccc" }, { country: "CZ", total: 24, bban: [{ type: "n", count: 10 }, { type: "n", count: 10 }], format: "CZkk bbbb ssss sscc cccc cccc" }, { country: "DK", total: 18, bban: [{ type: "n", count: 4 }, { type: "n", count: 10 }], format: "DKkk bbbb cccc cccc cc" }, { country: "DO", total: 28, bban: [{ type: "a", count: 4 }, { type: "n", count: 20 }], format: "DOkk bbbb cccc cccc cccc cccc cccc" }, { country: "TL", total: 23, bban: [{ type: "n", count: 3 }, { type: "n", count: 16 }], format: "TLkk bbbc cccc cccc cccc cxx" }, { country: "EE", total: 20, bban: [{ type: "n", count: 4 }, { type: "n", count: 12 }], format: "EEkk bbss cccc cccc cccx" }, { country: "FO", total: 18, bban: [{ type: "n", count: 4 }, { type: "n", count: 10 }], format: "FOkk bbbb cccc cccc cx" }, { country: "FI", total: 18, bban: [{ type: "n", count: 6 }, { type: "n", count: 8 }], format: "FIkk bbbb bbcc cccc cx" }, { country: "FR", total: 27, bban: [{ type: "n", count: 10 }, { type: "c", count: 11 }, { type: "n", count: 2 }], format: "FRkk bbbb bggg ggcc cccc cccc cxx" }, { country: "GE", total: 22, bban: [{ type: "a", count: 2 }, { type: "n", count: 16 }], format: "GEkk bbcc cccc cccc cccc cc" }, { country: "DE", total: 22, bban: [{ type: "n", count: 8 }, { type: "n", count: 10 }], format: "DEkk bbbb bbbb cccc cccc cc" }, { country: "GI", total: 23, bban: [{ type: "a", count: 4 }, { type: "c", count: 15 }], format: "GIkk bbbb cccc cccc cccc ccc" }, { country: "GR", total: 27, bban: [{ type: "n", count: 7 }, { type: "c", count: 16 }], format: "GRkk bbbs sssc cccc cccc cccc ccc" }, { country: "GL", total: 18, bban: [{ type: "n", count: 4 }, { type: "n", count: 10 }], format: "GLkk bbbb cccc cccc cc" }, { country: "GT", total: 28, bban: [{ type: "c", count: 4 }, { type: "c", count: 4 }, { type: "c", count: 16 }], format: "GTkk bbbb mmtt cccc cccc cccc cccc" }, { country: "HU", total: 28, bban: [{ type: "n", count: 8 }, { type: "n", count: 16 }], format: "HUkk bbbs sssk cccc cccc cccc cccx" }, { country: "IS", total: 26, bban: [{ type: "n", count: 6 }, { type: "n", count: 16 }], format: "ISkk bbbb sscc cccc iiii iiii ii" }, { country: "IE", total: 22, bban: [{ type: "c", count: 4 }, { type: "n", count: 6 }, { type: "n", count: 8 }], format: "IEkk aaaa bbbb bbcc cccc cc" }, { country: "IL", total: 23, bban: [{ type: "n", count: 6 }, { type: "n", count: 13 }], format: "ILkk bbbn nncc cccc cccc ccc" }, { country: "IT", total: 27, bban: [{ type: "a", count: 1 }, { type: "n", count: 10 }, { type: "c", count: 12 }], format: "ITkk xaaa aabb bbbc cccc cccc ccc" }, { country: "JO", total: 30, bban: [{ type: "a", count: 4 }, { type: "n", count: 4 }, { type: "n", count: 18 }], format: "JOkk bbbb nnnn cccc cccc cccc cccc cc" }, { country: "KZ", total: 20, bban: [{ type: "n", count: 3 }, { type: "c", count: 13 }], format: "KZkk bbbc cccc cccc cccc" }, { country: "XK", total: 20, bban: [{ type: "n", count: 4 }, { type: "n", count: 12 }], format: "XKkk bbbb cccc cccc cccc" }, { country: "KW", total: 30, bban: [{ type: "a", count: 4 }, { type: "c", count: 22 }], format: "KWkk bbbb cccc cccc cccc cccc cccc cc" }, { country: "LV", total: 21, bban: [{ type: "a", count: 4 }, { type: "c", count: 13 }], format: "LVkk bbbb cccc cccc cccc c" }, { country: "LB", total: 28, bban: [{ type: "n", count: 4 }, { type: "c", count: 20 }], format: "LBkk bbbb cccc cccc cccc cccc cccc" }, { country: "LI", total: 21, bban: [{ type: "n", count: 5 }, { type: "c", count: 12 }], format: "LIkk bbbb bccc cccc cccc c" }, { country: "LT", total: 20, bban: [{ type: "n", count: 5 }, { type: "n", count: 11 }], format: "LTkk bbbb bccc cccc cccc" }, { country: "LU", total: 20, bban: [{ type: "n", count: 3 }, { type: "c", count: 13 }], format: "LUkk bbbc cccc cccc cccc" }, { country: "MK", total: 19, bban: [{ type: "n", count: 3 }, { type: "c", count: 10 }, { type: "n", count: 2 }], format: "MKkk bbbc cccc cccc cxx" }, { country: "MT", total: 31, bban: [{ type: "a", count: 4 }, { type: "n", count: 5 }, { type: "c", count: 18 }], format: "MTkk bbbb ssss sccc cccc cccc cccc ccc" }, { country: "MR", total: 27, bban: [{ type: "n", count: 10 }, { type: "n", count: 13 }], format: "MRkk bbbb bsss sscc cccc cccc cxx" }, { country: "MU", total: 30, bban: [{ type: "a", count: 4 }, { type: "n", count: 4 }, { type: "n", count: 15 }, { type: "a", count: 3 }], format: "MUkk bbbb bbss cccc cccc cccc 000d dd" }, { country: "MC", total: 27, bban: [{ type: "n", count: 10 }, { type: "c", count: 11 }, { type: "n", count: 2 }], format: "MCkk bbbb bsss sscc cccc cccc cxx" }, { country: "MD", total: 24, bban: [{ type: "c", count: 2 }, { type: "c", count: 18 }], format: "MDkk bbcc cccc cccc cccc cccc" }, { country: "ME", total: 22, bban: [{ type: "n", count: 3 }, { type: "n", count: 15 }], format: "MEkk bbbc cccc cccc cccc xx" }, { country: "NL", total: 18, bban: [{ type: "a", count: 4 }, { type: "n", count: 10 }], format: "NLkk bbbb cccc cccc cc" }, { country: "NO", total: 15, bban: [{ type: "n", count: 4 }, { type: "n", count: 7 }], format: "NOkk bbbb cccc ccx" }, { country: "PK", total: 24, bban: [{ type: "a", count: 4 }, { type: "n", count: 16 }], format: "PKkk bbbb cccc cccc cccc cccc" }, { country: "PS", total: 29, bban: [{ type: "c", count: 4 }, { type: "n", count: 9 }, { type: "n", count: 12 }], format: "PSkk bbbb xxxx xxxx xccc cccc cccc c" }, { country: "PL", total: 28, bban: [{ type: "n", count: 8 }, { type: "n", count: 16 }], format: "PLkk bbbs sssx cccc cccc cccc cccc" }, { country: "PT", total: 25, bban: [{ type: "n", count: 8 }, { type: "n", count: 13 }], format: "PTkk bbbb ssss cccc cccc cccx x" }, { country: "QA", total: 29, bban: [{ type: "a", count: 4 }, { type: "c", count: 21 }], format: "QAkk bbbb cccc cccc cccc cccc cccc c" }, { country: "RO", total: 24, bban: [{ type: "a", count: 4 }, { type: "c", count: 16 }], format: "ROkk bbbb cccc cccc cccc cccc" }, { country: "SM", total: 27, bban: [{ type: "a", count: 1 }, { type: "n", count: 10 }, { type: "c", count: 12 }], format: "SMkk xaaa aabb bbbc cccc cccc ccc" }, { country: "SA", total: 24, bban: [{ type: "n", count: 2 }, { type: "c", count: 18 }], format: "SAkk bbcc cccc cccc cccc cccc" }, { country: "RS", total: 22, bban: [{ type: "n", count: 3 }, { type: "n", count: 15 }], format: "RSkk bbbc cccc cccc cccc xx" }, { country: "SK", total: 24, bban: [{ type: "n", count: 10 }, { type: "n", count: 10 }], format: "SKkk bbbb ssss sscc cccc cccc" }, { country: "SI", total: 19, bban: [{ type: "n", count: 5 }, { type: "n", count: 10 }], format: "SIkk bbss sccc cccc cxx" }, { country: "ES", total: 24, bban: [{ type: "n", count: 10 }, { type: "n", count: 10 }], format: "ESkk bbbb gggg xxcc cccc cccc" }, { country: "SE", total: 24, bban: [{ type: "n", count: 3 }, { type: "n", count: 17 }], format: "SEkk bbbc cccc cccc cccc cccc" }, { country: "CH", total: 21, bban: [{ type: "n", count: 5 }, { type: "c", count: 12 }], format: "CHkk bbbb bccc cccc cccc c" }, { country: "TN", total: 24, bban: [{ type: "n", count: 5 }, { type: "n", count: 15 }], format: "TNkk bbss sccc cccc cccc cccc" }, { country: "TR", total: 26, bban: [{ type: "n", count: 5 }, { type: "n", count: 1 }, { type: "n", count: 16 }], format: "TRkk bbbb bxcc cccc cccc cccc cc" }, { country: "AE", total: 23, bban: [{ type: "n", count: 3 }, { type: "n", count: 16 }], format: "AEkk bbbc cccc cccc cccc ccc" }, { country: "GB", total: 22, bban: [{ type: "a", count: 4 }, { type: "n", count: 6 }, { type: "n", count: 8 }], format: "GBkk bbbb ssss sscc cccc cc" }, { country: "VG", total: 24, bban: [{ type: "c", count: 4 }, { type: "n", count: 16 }], format: "VGkk bbbb cccc cccc cccc cccc" }], iso3166: ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"], mod97: (u) => {
  let e = 0;
  for (let a = 0; a < u.length; a++)
    e = (e * 10 + +u[a]) % 97;
  return e;
}, pattern10: ["01", "02", "03", "04", "05", "06", "07", "08", "09"], pattern100: ["001", "002", "003", "004", "005", "006", "007", "008", "009"], toDigitString: (u) => u.replace(/[A-Z]/gi, (e) => String(e.toUpperCase().charCodeAt(0) - 55)) }, B0 = $ou, D5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(D5.prototype))
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
      throw new zu("minimum length is 1");
    return Array.from({ length: u }, () => this.faker.datatype.number(9)).join("");
  }
  ethereumAddress() {
    return this.faker.datatype.hexadecimal({ length: 40, case: "lower" });
  }
  iban(u = !1, e) {
    let a = e ? B0.formats.find((t) => t.country === e) : this.faker.helpers.arrayElement(B0.formats);
    if (!a)
      throw new zu(`Country code ${e} not supported.`);
    let i = "", r = 0;
    for (let t of a.bban) {
      let s = t.count;
      for (r += t.count; s > 0; )
        t.type === "a" ? i += this.faker.helpers.arrayElement(B0.alpha) : t.type === "c" ? this.faker.datatype.number(100) < 80 ? i += this.faker.datatype.number(9) : i += this.faker.helpers.arrayElement(B0.alpha) : s >= 3 && this.faker.datatype.number(100) < 30 ? this.faker.datatype.boolean() ? (i += this.faker.helpers.arrayElement(B0.pattern100), s -= 2) : (i += this.faker.helpers.arrayElement(B0.pattern10), s--) : i += this.faker.datatype.number(9), s--;
      i = i.substring(0, r);
    }
    let n = 98 - B0.mod97(B0.toDigitString(`${i}${a.country}00`));
    n < 10 && (n = `0${n}`);
    let o = `${a.country}${n}${i}`;
    return u ? o.match(/.{1,4}/g).join(" ") : o;
  }
  bic(u = {}) {
    let { includeBranchCode: e = this.faker.datatype.boolean() } = u, a = this.faker.random.alpha({ count: 4, casing: "upper" }), i = this.faker.helpers.arrayElement(B0.iso3166), r = this.faker.random.alphaNumeric(2, { casing: "upper" }), n = e ? this.faker.datatype.boolean() ? this.faker.random.alphaNumeric(3, { casing: "upper" }) : "XXX" : "";
    return `${a}${i}${r}${n}`;
  }
  transactionDescription() {
    let u = this.amount(), e = this.faker.company.name(), a = this.transactionType(), i = this.account(), r = this.mask(), n = this.currencyCode();
    return `${a} transaction at ${e} using card ending with ***${r} for ${n} ${u} in account ***${i}`;
  }
}, x5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(x5.prototype))
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
}, c5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(c5.prototype))
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
function qou(u) {
  let e = Uou(u.replace(/L?$/, "0"));
  return e === 0 ? 0 : 10 - e;
}
function Uou(u) {
  u = u.replace(/[\s-]/g, "");
  let e = 0, a = !1;
  for (let i = u.length - 1; i >= 0; i--) {
    let r = parseInt(u.substring(i, i + 1));
    a && (r *= 2, r > 9 && (r = r % 10 + 1)), e += r, a = !a;
  }
  return e % 10;
}
var Wou = {}, Zou = [];
function You(u, e) {
  return u[e] === void 0 ? -1 : 0;
}
function is(u, e, a, i, r) {
  throw console.error("Error", a), console.log(`Found ${Object.keys(i).length} unique entries before throwing error.
retried: ${r}
total time: ${e - u}ms`), new zu(`${a} for uniqueness check.

May not be able to generate any more unique values with current settings.
Try adjusting maxTime or maxRetries parameters for faker.helpers.unique().`);
}
function d5(u, e, a = {}) {
  var i;
  let r = (/* @__PURE__ */ new Date()).getTime(), { startTime: n = (/* @__PURE__ */ new Date()).getTime(), maxTime: o = 50, maxRetries: t = 50, compare: s = You, store: l = Wou } = a, { exclude: E = Zou } = a;
  if (a.currentIterations = (i = a.currentIterations) != null ? i : 0, Array.isArray(E) || (E = [E]), r - n >= o)
    return is(n, r, `Exceeded maxTime: ${o}`, l, a.currentIterations);
  if (a.currentIterations >= t)
    return is(n, r, `Exceeded maxRetries: ${t}`, l, a.currentIterations);
  let D = u.apply(this, e);
  return s(l, D) === -1 && E.indexOf(D) === -1 ? (l[D] = D, a.currentIterations = 0, D) : (a.currentIterations++, d5(u, e, { ...a, startTime: n, maxTime: o, maxRetries: t, compare: s, exclude: E }));
}
var m5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(m5.prototype))
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
    let a = qou(u);
    return u.replace("L", String(a));
  }
  repeatString(u = "", e = 0) {
    return mu({ deprecated: "faker.helpers.repeatString()", proposed: "String.prototype.repeat()", since: "7.5", until: "8.0" }), u.repeat(e);
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
      throw new zu("string parameter is required!");
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
      throw new zu(`Invalid module method or definition: ${i}
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
    return d5(u, e, { ...a, startTime: (/* @__PURE__ */ new Date()).getTime(), maxTime: i, maxRetries: r, currentIterations: 0 });
  }
}, Qou = class {
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
    return mu({ deprecated: "faker.image.lorempicsum.avatar()", proposed: "faker.internet.avatar()", since: "7.3", until: "8.0" }), this.faker.internet.avatar();
  }
  imageUrl(u, e, a, i, r) {
    u = u || 640, e = e || 480;
    let n = "https://picsum.photos";
    return r && (n += `/seed/${r}`), n += `/${u}/${e}`, a && i ? `${n}?grayscale&blur=${i}` : a ? `${n}?grayscale` : i ? `${n}?blur=${i}` : n;
  }
}, Xou = class {
  constructor(u) {
    this.faker = u;
  }
  image(u, e, a) {
    let i = ["abstract", "animals", "business", "cats", "city", "food", "nightlife", "fashion", "people", "nature", "sports", "technics", "transport"];
    return this[this.faker.helpers.arrayElement(i)](u, e, a);
  }
  avatar() {
    return mu({ deprecated: "faker.image.lorempixel.avatar()", proposed: "faker.internet.avatar()", since: "7.3", until: "8.0" }), this.faker.internet.avatar();
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
}, F5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(F5.prototype))
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
}, utu = class {
  constructor(u) {
    this.faker = u;
  }
  get categories() {
    return mu({ deprecated: "faker.image.unsplash.categories", since: "7.3", until: "8.0" }), ["food", "nature", "people", "technology", "objects", "buildings"];
  }
  image(u, e, a) {
    return this.imageUrl(u, e, void 0, a);
  }
  avatar() {
    return mu({ deprecated: "faker.image.unsplash.avatar()", proposed: "faker.internet.avatar()", since: "7.3", until: "8.0" }), this.faker.internet.avatar();
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
}, k5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(k5.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
    this.lorempixel = new Xou(this.faker), this.unsplash = new utu(this.faker), this.lorempicsum = new Qou(this.faker), this.placeholder = new F5(this.faker);
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
function etu(u) {
  let e = (E) => {
    let D = u.datatype.number({ min: 0, max: 100 }) / 100, x = 0, c = 0, d;
    for (let m in E)
      if (Object.prototype.hasOwnProperty.call(E, m)) {
        if (c = E[m] + x, d = m, D >= x && D <= c)
          break;
        x = x + E[m];
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
var p5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(p5.prototype))
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
    return etu(this.faker);
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
}, Vn = { fail: () => {
  throw new zu("No words found that match the given length.");
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
function O0(u) {
  let { wordList: e, length: a, strategy: i = "any-length" } = u;
  if (a) {
    let r = typeof a == "number" ? (o) => o.length === a : (o) => o.length >= a.min && o.length <= a.max, n = e.filter(r);
    return n.length > 0 ? n : typeof a == "number" ? Vn[i](e, { min: a, max: a }) : Vn[i](e, a);
  } else
    return i === "shortest" || i === "longest" ? Vn[i](e) : [...e];
}
var h5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(h5.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  word(u = {}) {
    let e = typeof u == "number" ? { length: u } : u;
    return this.faker.helpers.arrayElement(O0({ ...e, wordList: this.faker.definitions.lorem.words }));
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
}, atu = class {
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
}, g5 = class {
  constructor() {
    this.gen = new atu(), this.gen.initGenrand(Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER));
    for (let u of Object.getOwnPropertyNames(g5.prototype))
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
      throw new zu(`seed(S) must take numeric argument; is ${typeof u}`);
    this.gen.initGenrand(u);
  }
  seed_array(u) {
    if (typeof u != "object")
      throw new zu(`seed_array(A) must take array of numbers; is ${typeof u}`);
    this.gen.initByArray(u, u.length);
  }
}, C5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(C5.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  genre() {
    return this.faker.helpers.arrayElement(this.faker.definitions.music.genre);
  }
  songName() {
    return this.faker.helpers.arrayElement(this.faker.definitions.music.song_name);
  }
}, v5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(v5.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  phoneNumber(u) {
    return mu({ deprecated: "faker.phone.phoneNumber()", proposed: "faker.phone.number()", since: "7.3", until: "8.0" }), this.faker.phone.number(u);
  }
  number(u) {
    return u = u ?? this.faker.helpers.arrayElement(this.faker.definitions.phone_number.formats), this.faker.helpers.replaceSymbolWithNumber(u);
  }
  phoneNumberFormat(u = 0) {
    return mu({ deprecated: "faker.phone.phoneNumberFormat()", proposed: "faker.phone.phoneNumber() or faker.helpers.replaceSymbolWithNumber(format)", since: "7.0", until: "8.0" }), this.faker.helpers.replaceSymbolWithNumber(this.faker.definitions.phone_number.formats[u]);
  }
  phoneFormats() {
    return mu({ deprecated: "faker.phone.phoneFormats()", proposed: "faker.phone.phoneNumber()", since: "7.0", until: "8.0" }), this.faker.helpers.arrayElement(this.faker.definitions.phone_number.formats);
  }
  imei() {
    return this.faker.helpers.replaceCreditCardSymbols("##-######-######-L", "#");
  }
}, hi = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), gi = "abcdefghijklmnopqrstuvwxyz".split(""), rs = "0123456789".split("");
function ns(u, e) {
  return e.forEach((a) => {
    u = u.filter((i) => i !== a);
  }), u;
}
var b5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(b5.prototype))
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
    a != null && mu({ deprecated: "faker.random.alpha({ upcase: true })", proposed: "faker.random.alpha({ casing: 'upper' })", since: "7.0", until: "8.0" });
    let n;
    switch (r) {
      case "upper":
        n = [...hi];
        break;
      case "lower":
        n = [...gi];
        break;
      case "mixed":
      default:
        n = [...gi, ...hi];
        break;
    }
    if (n = ns(n, i), n.length === 0)
      throw new zu("Unable to generate string, because all possible characters are banned.");
    return Array.from({ length: e }, () => this.faker.helpers.arrayElement(n)).join("");
  }
  alphaNumeric(u = 1, e = {}) {
    if (u <= 0)
      return "";
    let { casing: a = "lower" } = e, { bannedChars: i = [] } = e;
    typeof i == "string" && (i = i.split(""));
    let r = [...rs];
    switch (a) {
      case "upper":
        r.push(...hi);
        break;
      case "lower":
        r.push(...gi);
        break;
      case "mixed":
      default:
        r.push(...gi, ...hi);
        break;
    }
    if (r = ns(r, i), r.length === 0)
      throw new zu("Unable to generate string, because all possible characters are banned.");
    return Array.from({ length: u }, () => this.faker.helpers.arrayElement(r)).join("");
  }
  numeric(u = 1, e = {}) {
    if (u <= 0)
      return "";
    let { allowLeadingZeros: a = !1 } = e, { bannedDigits: i = [] } = e;
    typeof i == "string" && (i = i.split(""));
    let r = rs.filter((o) => !i.includes(o));
    if (r.length === 0 || r.length === 1 && !a && r[0] === "0")
      throw new zu("Unable to generate numeric string, because all possible digits are banned.");
    let n = "";
    for (!a && !i.includes("0") && (n += this.faker.helpers.arrayElement(r.filter((o) => o !== "0"))); n.length < u; )
      n += this.faker.helpers.arrayElement(r);
    return n;
  }
}, A5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(A5.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  chemicalElement() {
    return this.faker.helpers.arrayElement(this.faker.definitions.science.chemicalElement);
  }
  unit() {
    return this.faker.helpers.arrayElement(this.faker.definitions.science.unit);
  }
}, itu = ["video", "audio", "image", "text", "application"], rtu = ["application/pdf", "audio/mpeg", "audio/wav", "image/png", "image/jpeg", "image/gif", "video/mp4", "video/mpeg", "text/html"], ntu = ["en", "wl", "ww"], os = { index: "o", slot: "s", mac: "x", pci: "p" }, otu = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], B5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(B5.prototype))
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
    return this.faker.helpers.arrayElement(itu);
  }
  commonFileExt() {
    return this.fileExt(this.faker.helpers.arrayElement(rtu));
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
    let { interfaceType: o = this.faker.helpers.arrayElement(ntu), interfaceSchema: t = this.faker.helpers.objectKey(os) } = u, s, l = "";
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
    return `${l}${o}${os[t]}${s}`;
  }
  cron(u = {}) {
    let { includeYear: e = !1, includeNonStandard: a = !1 } = u, i = [this.faker.datatype.number({ min: 0, max: 59 }), "*"], r = [this.faker.datatype.number({ min: 0, max: 23 }), "*"], n = [this.faker.datatype.number({ min: 1, max: 31 }), "*", "?"], o = [this.faker.datatype.number({ min: 1, max: 12 }), "*"], t = [this.faker.datatype.number({ min: 0, max: 6 }), this.faker.helpers.arrayElement(otu), "*", "?"], s = [this.faker.datatype.number({ min: 1970, max: 2099 }), "*"], l = this.faker.helpers.arrayElement(i), E = this.faker.helpers.arrayElement(r), D = this.faker.helpers.arrayElement(n), x = this.faker.helpers.arrayElement(o), c = this.faker.helpers.arrayElement(t), d = this.faker.helpers.arrayElement(s), m = `${l} ${E} ${D} ${x} ${c}`;
    e && (m += ` ${d}`);
    let k = ["@annually", "@daily", "@hourly", "@monthly", "@reboot", "@weekly", "@yearly"];
    return !a || this.faker.datatype.boolean() ? m : this.faker.helpers.arrayElement(k);
  }
}, f5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(f5.prototype))
      e === "constructor" || e === "maxTime" || e === "maxRetries" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  unique(u, e, a = {}) {
    return mu({ deprecated: "faker.unique()", proposed: "faker.helpers.unique()", since: "7.5", until: "8.0" }), this.faker.helpers.unique(u, e, a);
  }
}, y5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(y5.prototype))
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
}, z5 = class {
  constructor(u) {
    this.faker = u;
    for (let e of Object.getOwnPropertyNames(z5.prototype))
      e === "constructor" || typeof this[e] != "function" || (this[e] = this[e].bind(this));
  }
  adjective(u = {}) {
    let e = typeof u == "number" ? { length: u } : u;
    return this.faker.helpers.arrayElement(O0({ ...e, wordList: this.faker.definitions.word.adjective }));
  }
  adverb(u = {}) {
    let e = typeof u == "number" ? { length: u } : u;
    return this.faker.helpers.arrayElement(O0({ ...e, wordList: this.faker.definitions.word.adverb }));
  }
  conjunction(u = {}) {
    let e = typeof u == "number" ? { length: u } : u;
    return this.faker.helpers.arrayElement(O0({ ...e, wordList: this.faker.definitions.word.conjunction }));
  }
  interjection(u = {}) {
    let e = typeof u == "number" ? { length: u } : u;
    return this.faker.helpers.arrayElement(O0({ ...e, wordList: this.faker.definitions.word.interjection }));
  }
  noun(u = {}) {
    let e = typeof u == "number" ? { length: u } : u;
    return this.faker.helpers.arrayElement(O0({ ...e, wordList: this.faker.definitions.word.noun }));
  }
  preposition(u = {}) {
    let e = typeof u == "number" ? { length: u } : u;
    return this.faker.helpers.arrayElement(O0({ ...e, wordList: this.faker.definitions.word.preposition }));
  }
  verb(u = {}) {
    let e = typeof u == "number" ? { length: u } : u;
    return this.faker.helpers.arrayElement(O0({ ...e, wordList: this.faker.definitions.word.verb }));
  }
}, ttu = ["title", "separator"], stu = class {
  constructor(u) {
    this.definitions = this.initDefinitions(), this.fake = new E5(this).fake, this.unique = new f5(this).unique, this.mersenne = new g5(), this.random = new b5(this), this.helpers = new m5(this), this.datatype = new s5(this), this.address = new e5(this), this.animal = new a5(this), this.color = new r5(this), this.commerce = new n5(this), this.company = new o5(this), this.database = new t5(this), this.date = new l5(this), this.finance = new D5(this), this.git = new x5(this), this.hacker = new c5(this), this.image = new k5(this), this.internet = new p5(this), this.lorem = new h5(this), this.music = new C5(this), this.name = new u5(this), this.phone = new v5(this), this.science = new A5(this), this.system = new B5(this), this.vehicle = new y5(this), this.word = new z5(this);
    var e;
    if (!u)
      throw new zu("Options with at least one entry in locales must be provided");
    if (Object.keys((e = u.locales) != null ? e : {}).length === 0)
      throw new zu("At least one entry in locales must be provided in the locales parameter");
    this.locales = u.locales, this.locale = u.locale || "en", this.localeFallback = u.localeFallback || "en";
  }
  get locale() {
    return this._locale;
  }
  set locale(u) {
    if (!this.locales[u])
      throw new zu(`Locale ${u} is not supported. You might want to add the requested locale first to \`faker.locales\`.`);
    this._locale = u;
  }
  get localeFallback() {
    return this._localeFallback;
  }
  set localeFallback(u) {
    if (!this.locales[u])
      throw new zu(`Locale ${u} is not supported. You might want to add the requested locale first to \`faker.locales\`.`);
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
      return n || (ttu.includes(r) ? u(r) : (n = a(r), i[r] = n, n));
    } });
  }
  seed(u = Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER)) {
    return Array.isArray(u) && u.length ? this.mersenne.seed_array(u) : !Array.isArray(u) && !isNaN(u) && this.mersenne.seed(u), u;
  }
  setLocale(u) {
    this.locale = u;
  }
function Ou(u) {
  return {
    item_id: (u == null ? void 0 : u.item_id) ?? I.datatype.number(),
    item_status: (u == null ? void 0 : u.item_status) ?? I.helpers.arrayElement(["NORMAL", "DELETED", "UNLIST", "BANNED"]),
    update_time: (u == null ? void 0 : u.update_time) ?? +Eo(
      I.datatype.datetime({
        min: (/* @__PURE__ */ new Date("01/01/2022")).getTime(),
        max: (/* @__PURE__ */ new Date()).getTime()
      })
    )
  };
}
function gsu(u) {
  return {
    error: (u == null ? void 0 : u.error) ?? "",
    message: (u == null ? void 0 : u.message) ?? "",
    warning: (u == null ? void 0 : u.warning) ?? "",
    request_id: (u == null ? void 0 : u.request_id) ?? I.datatype.uuid(),
    response: (u == null ? void 0 : u.response) ?? { item: [] }
  };
}
const Jt = [
  Ou({ item_id: 1, item_status: "NORMAL" }),
  Ou({ item_id: 2, item_status: "DELETED" }),
  Ou({ item_id: 3, item_status: "NORMAL" }),
  Ou({ item_id: 4, item_status: "BANNED" }),
  Ou({ item_id: 5, item_status: "NORMAL" }),
  Ou({ item_id: 6, item_status: "BANNED" }),
  Ou({ item_id: 7, item_status: "NORMAL" }),
  Ou({ item_id: 8, item_status: "NORMAL" }),
  Ou({ item_id: 9, item_status: "DELETED" }),
  Ou({ item_id: 10, item_status: "NORMAL" }),
  Ou({ item_id: 11, item_status: "UNLIST" }),
  Ou({ item_id: 12, item_status: "UNLIST" }),
  Ou({ item_id: 13, item_status: "NORMAL" })
], Csu = Lt.rest.get(
  Tt($E),
  (u, e, a) => {
    const { searchParams: i } = u.url, r = +(i.get("page_size") ?? 10), n = +(i.get("offset") ?? 0), o = i.getAll("item_status"), t = n * r, s = Jt.slice(
      t,
      t + r
    ).filter((E) => o.includes(E.item_status)), l = gsu({
      response: {
        item: s
      }
    });
    return e(a.status(200), a.json(l));
  }
);
function vsu(u) {
  return {
    item_id: (u == null ? void 0 : u.item_id) ?? I.datatype.number(),
    category_id: (u == null ? void 0 : u.category_id) ?? I.datatype.number(),
    item_name: (u == null ? void 0 : u.item_name) ?? I.commerce.productName(),
    item_sku: (u == null ? void 0 : u.item_sku) ?? I.random.alphaNumeric(8),
    create_time: (u == null ? void 0 : u.create_time) ?? I.datatype.datetime({ min: (/* @__PURE__ */ new Date("01/01/2021")).getTime(), max: Date.now() }).getTime(),
    update_time: (u == null ? void 0 : u.update_time) ?? I.datatype.datetime({ min: (/* @__PURE__ */ new Date("01/01/2021")).getTime(), max: Date.now() }).getTime(),
    attribute_list: (u == null ? void 0 : u.attribute_list) ?? [],
    price_info: (u == null ? void 0 : u.price_info) ?? [
      {
        currency: "THB",
        original_price: +I.commerce.price(),
        current_price: +I.commerce.price()
      }
    ],
    stock_info_v2: (u == null ? void 0 : u.stock_info_v2) ?? {
      summary_info: {
        total_reserved_stock: I.datatype.number(),
        total_available_stock: I.datatype.number()
      },
      seller_stock: [
        {
          location_id: I.datatype.number().toString(),
          stock: I.datatype.number()
        }
      ]
    },
    image: (u == null ? void 0 : u.image) ?? {
      image_url_list: [I.image.imageUrl(640, 480, "product")],
      image_id_list: [I.datatype.uuid()]
    },
    weight: I.datatype.number().toString(),
    dimension: (u == null ? void 0 : u.dimension) ?? {
      package_length: I.datatype.number(),
      package_width: I.datatype.number(),
      package_height: I.datatype.number()
    },
    logistic_info: (u == null ? void 0 : u.logistic_info) ?? [
      {
        logistic_id: I.datatype.number(),
        logistic_name: I.company.name(),
        enabled: I.datatype.boolean(),
        is_free: I.datatype.boolean(),
        shipping_fee: I.datatype.number(),
        estimated_shipping_fee: I.datatype.number()
      }
    ],
    pre_order: (u == null ? void 0 : u.pre_order) ?? {
      is_pre_order: I.datatype.boolean(),
      days_to_ship: I.datatype.number()
    },
    condition: (u == null ? void 0 : u.condition) ?? I.datatype.string(),
    size_chart: (u == null ? void 0 : u.size_chart) ?? I.datatype.string(),
    item_status: (u == null ? void 0 : u.item_status) ?? I.datatype.string(),
    has_model: (u == null ? void 0 : u.has_model) ?? I.datatype.boolean(),
    promotion_id: (u == null ? void 0 : u.promotion_id) ?? I.datatype.number(),
    brand: (u == null ? void 0 : u.brand) ?? {
      brand_id: I.datatype.number(),
      original_brand_name: I.company.name()
    },
    tax_info: u == null ? void 0 : u.tax_info,
    description_type: (u == null ? void 0 : u.description_type) ?? "",
    description_info: (u == null ? void 0 : u.description_info) ?? {
      extended_description: {
        field_list: [
          {
            field_type: I.datatype.string(),
            text: I.commerce.productDescription(),
            image_info: {
              image_id: I.datatype.number().toString(),
              image_url: I.image.imageUrl(640, 480, "food")
            }
          }
        ]
      }
    }
  };
}
function bsu(u) {
  return {
    error: (u == null ? void 0 : u.error) ?? "",
    message: (u == null ? void 0 : u.message) ?? "",
    warning: (u == null ? void 0 : u.warning) ?? "",
    request_id: (u == null ? void 0 : u.request_id) ?? I.datatype.uuid(),
    response: (u == null ? void 0 : u.response) ?? { item_list: [] }
  };
}
const Asu = Jt.map(
  ({ item_id: u }) => vsu({ item_id: u })
), Bsu = Lt.rest.get(Tt(UE), (u, e, a) => {
  const i = u.url.searchParams.get("item_id_list");
  return e(
    a.status(200),
    a.json(
      bsu({
        response: {
          item_list: Asu.filter(
            (r) => i == null ? void 0 : i.includes(r.item_id.toString())
          )
        }
      })
    )
  );
});
function fsu(u) {
  return {
    item_id: (u == null ? void 0 : u.item_id) ?? I.datatype.number(),
    sale: (u == null ? void 0 : u.sale) ?? I.datatype.number(),
    views: (u == null ? void 0 : u.views) ?? I.datatype.number(),
    likes: (u == null ? void 0 : u.likes) ?? I.datatype.number(),
    rating_star: (u == null ? void 0 : u.rating_star) ?? I.datatype.number(),
    comment_count: (u == null ? void 0 : u.comment_count) ?? I.datatype.number()
  };
}
function ysu(u) {
  return {
    error: (u == null ? void 0 : u.error) ?? "",
    message: (u == null ? void 0 : u.message) ?? "",
    warning: (u == null ? void 0 : u.warning) ?? "",
    request_id: (u == null ? void 0 : u.request_id) ?? I.datatype.uuid(),
    response: (u == null ? void 0 : u.response) ?? { item_list: [] }
  };
}
const zsu = Jt.map(
  ({ item_id: u }) => fsu({ item_id: u })
), Ssu = Lt.rest.get(
  Tt(WE),
  (u, e, a) => {
    const i = u.url.searchParams.get("item_id_list");
    return e(
      a.status(200),
      a.json(
        ysu({
          response: {
            item_list: zsu.filter(
              (r) => i == null ? void 0 : i.includes(r.item_id.toString())
            )
          }
        })
      )
    );
  }
), Msu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getItemBaseInfoMockHandler: Bsu,
  getItemExtraInfoMockHandler: Ssu,
  getItemListMockHandlers: Csu
}, Symbol.toStringTag, { value: "Module" })), c0 = da.getInstance();
class qsu {
  constructor(e) {
    Iu(this, "server");
    Iu(this, "isMocked");
    Iu(this, "v2");
    c0.accessToken = e.accessToken ?? ze.accessToken, c0.baseURL = e.baseURL ?? ze.baseURL, c0.partnerId = e.partnerId ?? ze.partnerId, c0.partnerKey = e.partnerKey ?? ze.partnerKey, c0.shopId = e.shopId ?? ze.shopId, this.isMocked = e.isMocked ?? !1, this.v2 = Lg, this.resolveServer();
  }
  setPartnerId(e) {
    return c0.partnerId = e, this;
  }
  setBaseURL(e) {
    return c0.baseURL = e, this;
  }
  setPartnerKey(e) {
    return c0.partnerKey = e, this;
  }
  setAccessToken(e) {
    return c0.accessToken = e, this;
  }
  setShopId(e) {
    return c0.shopId = e, this;
  }
  setIsMocked(e) {
    return this.isMocked = e, this.resolveServer(), this;
  }
  resolveServer() {
    var e, a;
    if (!this.isMocked) {
      (a = (e = this.server) == null ? void 0 : e.close) == null || a.call(e);
      return;
    }
    this.server === void 0 && (this.server = cg(...Object.values(Msu))), this.server.listen();
  }
}
export {
  qsu as ShopeeSdk
};