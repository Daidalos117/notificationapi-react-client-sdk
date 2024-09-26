import { createContext as ae } from "react";
var Ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ie(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var J = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var a = "", f = 0; f < arguments.length; f++) {
        var o = arguments[f];
        o && (a = i(a, n(o)));
      }
      return a;
    }
    function n(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return r.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var f = "";
      for (var o in a)
        t.call(a, o) && a[o] && (f = i(f, o));
      return f;
    }
    function i(a, f) {
      return f ? a ? a + " " + f : a + f : a;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(J);
var fe = J.exports;
const Ve = /* @__PURE__ */ ie(fe);
function H() {
  return H = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, H.apply(null, arguments);
}
var T = {}, I = [], oe = function(t) {
  I.push(t);
};
function ue(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = I.reduce(function(n, i) {
      return i(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function se(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = I.reduce(function(n, i) {
      return i(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function ce() {
  T = {};
}
function X(e, t, r) {
  !t && !T[r] && (e(!1, r), T[r] = !0);
}
function R(e, t) {
  X(ue, e, t);
}
function le(e, t) {
  X(se, e, t);
}
R.preMessage = oe;
R.resetWarned = ce;
R.noteOnce = le;
function w(e) {
  "@babel/helpers - typeof";
  return w = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, w(e);
}
function de(e, t) {
  if (w(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (w(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function be(e) {
  var t = de(e, "string");
  return w(t) == "symbol" ? t : t + "";
}
function ge(e, t, r) {
  return (t = be(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function W(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? W(Object(r), !0).forEach(function(n) {
      ge(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : W(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function B(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function pe(e, t) {
  if (e) {
    if (typeof e == "string")
      return B(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? B(e, t) : void 0;
  }
}
function he(e) {
  if (Array.isArray(e))
    return e;
}
function ve(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, f, o = [], u = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = a.call(r)).done) && (o.push(n.value), o.length !== t); u = !0)
          ;
    } catch (d) {
      s = !0, i = d;
    } finally {
      try {
        if (!u && r.return != null && (f = r.return(), Object(f) !== f))
          return;
      } finally {
        if (s)
          throw i;
      }
    }
    return o;
  }
}
function me() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ge(e, t) {
  return he(e) || ve(e, t) || pe(e, t) || me();
}
function ye() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function we(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var q = "data-rc-order", L = "data-rc-priority", xe = "rc-util-key", N = /* @__PURE__ */ new Map();
function $() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : xe;
}
function k(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Se(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function D(e) {
  return Array.from((N.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function ee(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!ye())
    return null;
  var r = t.csp, n = t.prepend, i = t.priority, a = i === void 0 ? 0 : i, f = Se(n), o = f === "prependQueue", u = document.createElement("style");
  u.setAttribute(q, f), o && a && u.setAttribute(L, "".concat(a)), r != null && r.nonce && (u.nonce = r == null ? void 0 : r.nonce), u.innerHTML = e;
  var s = k(t), d = s.firstChild;
  if (n) {
    if (o) {
      var h = (t.styles || D(s)).filter(function(x) {
        if (!["prepend", "prependQueue"].includes(x.getAttribute(q)))
          return !1;
        var M = Number(x.getAttribute(L) || 0);
        return a >= M;
      });
      if (h.length)
        return s.insertBefore(u, h[h.length - 1].nextSibling), u;
    }
    s.insertBefore(u, d);
  } else
    s.appendChild(u);
  return u;
}
function re(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = k(t);
  return (t.styles || D(r)).find(function(n) {
    return n.getAttribute($(t)) === e;
  });
}
function Ke(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = re(e, t);
  if (r) {
    var n = k(t);
    n.removeChild(r);
  }
}
function Ae(e, t) {
  var r = N.get(e);
  if (!r || !we(document, r)) {
    var n = ee("", t), i = n.parentNode;
    N.set(e, i), e.removeChild(n);
  }
}
function Qe(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = k(r), i = D(n), a = _(_({}, r), {}, {
    styles: i
  });
  Ae(n, a);
  var f = re(t, a);
  if (f) {
    var o, u;
    if ((o = a.csp) !== null && o !== void 0 && o.nonce && f.nonce !== ((u = a.csp) === null || u === void 0 ? void 0 : u.nonce)) {
      var s;
      f.nonce = (s = a.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return f.innerHTML !== e && (f.innerHTML = e), f;
  }
  var d = ee(e, a);
  return d.setAttribute($(a), t), d;
}
function Oe(e, t) {
  if (e == null)
    return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0)
        continue;
      r[n] = e[n];
    }
  return r;
}
function Ye(e, t) {
  if (e == null)
    return {};
  var r, n, i = Oe(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      r = a[n], t.indexOf(r) >= 0 || {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
var ze = /* @__PURE__ */ ae({});
function c(e, t) {
  ke(e) && (e = "100%");
  var r = Me(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Ze(e) {
  return Math.min(1, Math.max(0, e));
}
function ke(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Me(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function je(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function S(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function v(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Ce(e, t, r) {
  return {
    r: c(e, 255) * 255,
    g: c(t, 255) * 255,
    b: c(r, 255) * 255
  };
}
function Je(e, t, r) {
  e = c(e, 255), t = c(t, 255), r = c(r, 255);
  var n = Math.max(e, t, r), i = Math.min(e, t, r), a = 0, f = 0, o = (n + i) / 2;
  if (n === i)
    f = 0, a = 0;
  else {
    var u = n - i;
    switch (f = o > 0.5 ? u / (2 - n - i) : u / (n + i), n) {
      case e:
        a = (t - r) / u + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / u + 2;
        break;
      case r:
        a = (e - t) / u + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: f, l: o };
}
function j(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Pe(e, t, r) {
  var n, i, a;
  if (e = c(e, 360), t = c(t, 100), r = c(r, 100), t === 0)
    i = r, a = r, n = r;
  else {
    var f = r < 0.5 ? r * (1 + t) : r + t - r * t, o = 2 * r - f;
    n = j(o, f, e + 1 / 3), i = j(o, f, e), a = j(o, f, e - 1 / 3);
  }
  return { r: n * 255, g: i * 255, b: a * 255 };
}
function Ee(e, t, r) {
  e = c(e, 255), t = c(t, 255), r = c(r, 255);
  var n = Math.max(e, t, r), i = Math.min(e, t, r), a = 0, f = n, o = n - i, u = n === 0 ? 0 : o / n;
  if (n === i)
    a = 0;
  else {
    switch (n) {
      case e:
        a = (t - r) / o + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / o + 2;
        break;
      case r:
        a = (e - t) / o + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: u, v: f };
}
function Fe(e, t, r) {
  e = c(e, 360) * 6, t = c(t, 100), r = c(r, 100);
  var n = Math.floor(e), i = e - n, a = r * (1 - t), f = r * (1 - i * t), o = r * (1 - (1 - i) * t), u = n % 6, s = [r, f, a, a, o, r][u], d = [o, r, r, f, a, a][u], h = [a, a, o, r, r, f][u];
  return { r: s * 255, g: d * 255, b: h * 255 };
}
function Te(e, t, r, n) {
  var i = [
    v(Math.round(e).toString(16)),
    v(Math.round(t).toString(16)),
    v(Math.round(r).toString(16))
  ];
  return n && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function Xe(e, t, r, n, i) {
  var a = [
    v(Math.round(e).toString(16)),
    v(Math.round(t).toString(16)),
    v(Math.round(r).toString(16)),
    v(Ne(n))
  ];
  return i && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Ne(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function U(e) {
  return l(e) / 255;
}
function l(e) {
  return parseInt(e, 16);
}
function $e(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var V = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function m(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, i = null, a = null, f = !1, o = !1;
  return typeof e == "string" && (e = De(e)), typeof e == "object" && (g(e.r) && g(e.g) && g(e.b) ? (t = Ce(e.r, e.g, e.b), f = !0, o = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : g(e.h) && g(e.s) && g(e.v) ? (n = S(e.s), i = S(e.v), t = Fe(e.h, n, i), f = !0, o = "hsv") : g(e.h) && g(e.s) && g(e.l) && (n = S(e.s), a = S(e.l), t = Pe(e.h, n, a), f = !0, o = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = je(r), {
    ok: f,
    format: e.format || o,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var Ie = "[-\\+]?\\d+%?", Re = "[-\\+]?\\d*\\.\\d+%?", p = "(?:".concat(Re, ")|(?:").concat(Ie, ")"), C = "[\\s|\\(]+(".concat(p, ")[,|\\s]+(").concat(p, ")[,|\\s]+(").concat(p, ")\\s*\\)?"), P = "[\\s|\\(]+(".concat(p, ")[,|\\s]+(").concat(p, ")[,|\\s]+(").concat(p, ")[,|\\s]+(").concat(p, ")\\s*\\)?"), b = {
  CSS_UNIT: new RegExp(p),
  rgb: new RegExp("rgb" + C),
  rgba: new RegExp("rgba" + P),
  hsl: new RegExp("hsl" + C),
  hsla: new RegExp("hsla" + P),
  hsv: new RegExp("hsv" + C),
  hsva: new RegExp("hsva" + P),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function De(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (V[e])
    e = V[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = b.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = b.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = b.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = b.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = b.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = b.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = b.hex8.exec(e), r ? {
    r: l(r[1]),
    g: l(r[2]),
    b: l(r[3]),
    a: U(r[4]),
    format: t ? "name" : "hex8"
  } : (r = b.hex6.exec(e), r ? {
    r: l(r[1]),
    g: l(r[2]),
    b: l(r[3]),
    format: t ? "name" : "hex"
  } : (r = b.hex4.exec(e), r ? {
    r: l(r[1] + r[1]),
    g: l(r[2] + r[2]),
    b: l(r[3] + r[3]),
    a: U(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = b.hex3.exec(e), r ? {
    r: l(r[1] + r[1]),
    g: l(r[2] + r[2]),
    b: l(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function g(e) {
  return !!b.CSS_UNIT.exec(String(e));
}
var A = 2, G = 0.16, He = 0.05, We = 0.05, _e = 0.15, te = 5, ne = 4, Be = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function K(e) {
  var t = e.r, r = e.g, n = e.b, i = Ee(t, r, n);
  return {
    h: i.h * 360,
    s: i.s,
    v: i.v
  };
}
function O(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(Te(t, r, n, !1));
}
function qe(e, t, r) {
  var n = r / 100, i = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return i;
}
function Q(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - A * t : Math.round(e.h) + A * t : n = r ? Math.round(e.h) + A * t : Math.round(e.h) - A * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Y(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - G * t : t === ne ? n = e.s + G : n = e.s + He * t, n > 1 && (n = 1), r && t === te && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function z(e, t, r) {
  var n;
  return r ? n = e.v + We * t : n = e.v - _e * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function Z(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = m(e), i = te; i > 0; i -= 1) {
    var a = K(n), f = O(m({
      h: Q(a, i, !0),
      s: Y(a, i, !0),
      v: z(a, i, !0)
    }));
    r.push(f);
  }
  r.push(O(n));
  for (var o = 1; o <= ne; o += 1) {
    var u = K(n), s = O(m({
      h: Q(u, o),
      s: Y(u, o),
      v: z(u, o)
    }));
    r.push(s);
  }
  return t.theme === "dark" ? Be.map(function(d) {
    var h = d.index, x = d.opacity, M = O(qe(m(t.backgroundColor || "#141414"), m(r[h]), x * 100));
    return M;
  }) : r;
}
var E = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, y = {}, F = {};
Object.keys(E).forEach(function(e) {
  y[e] = Z(E[e]), y[e].primary = y[e][5], F[e] = Z(E[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), F[e].primary = F[e][5];
});
var er = y.gold, rr = y.blue;
export {
  Ee as A,
  Je as B,
  Te as C,
  Xe as D,
  Ze as E,
  c as F,
  V as G,
  er as H,
  ze as I,
  _,
  H as a,
  w as b,
  Ve as c,
  Ye as d,
  Ge as e,
  rr as f,
  Z as g,
  ge as h,
  ue as i,
  we as j,
  ye as k,
  ie as l,
  Ue as m,
  le as n,
  B as o,
  pe as p,
  he as q,
  Ke as r,
  me as s,
  be as t,
  Qe as u,
  ce as v,
  R as w,
  $e as x,
  m as y,
  je as z
};
