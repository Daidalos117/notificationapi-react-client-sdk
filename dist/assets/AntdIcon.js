import { w as L, b, _ as c, g as U, I, u as W, d as N, e as R, f as q, c as F, h, a as G } from "./index3.js";
import * as d from "react";
import x, { useContext as H, useEffect as J } from "react";
function S(n) {
  var o;
  return n == null || (o = n.getRootNode) === null || o === void 0 ? void 0 : o.call(n);
}
function K(n) {
  return S(n) instanceof ShadowRoot;
}
function M(n) {
  return K(n) ? S(n) : null;
}
function Q(n) {
  return n.replace(/-(.)/g, function(o, e) {
    return e.toUpperCase();
  });
}
function V(n, o) {
  L(n, "[@ant-design/icons] ".concat(o));
}
function _(n) {
  return b(n) === "object" && typeof n.name == "string" && typeof n.theme == "string" && (b(n.icon) === "object" || typeof n.icon == "function");
}
function k() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(n).reduce(function(o, e) {
    var r = n[e];
    switch (e) {
      case "class":
        o.className = r, delete o.class;
        break;
      default:
        delete o[e], o[Q(e)] = r;
    }
    return o;
  }, {});
}
function p(n, o, e) {
  return e ? /* @__PURE__ */ x.createElement(n.tag, c(c({
    key: o
  }, k(n.attrs)), e), (n.children || []).map(function(r, t) {
    return p(r, "".concat(o, "-").concat(n.tag, "-").concat(t));
  })) : /* @__PURE__ */ x.createElement(n.tag, c({
    key: o
  }, k(n.attrs)), (n.children || []).map(function(r, t) {
    return p(r, "".concat(o, "-").concat(n.tag, "-").concat(t));
  }));
}
function z(n) {
  return U(n)[0];
}
function E(n) {
  return n ? Array.isArray(n) ? n : [n] : [];
}
var X = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, Y = function(o) {
  var e = H(I), r = e.csp, t = e.prefixCls, i = X;
  t && (i = i.replace(/anticon/g, t)), J(function() {
    var l = o.current, s = M(l);
    W(i, "@ant-design-icons", {
      prepend: !0,
      csp: r,
      attachTo: s
    });
  }, []);
}, Z = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], f = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function nn(n) {
  var o = n.primaryColor, e = n.secondaryColor;
  f.primaryColor = o, f.secondaryColor = e || z(o), f.calculated = !!e;
}
function on() {
  return c({}, f);
}
var u = function(o) {
  var e = o.icon, r = o.className, t = o.onClick, i = o.style, l = o.primaryColor, s = o.secondaryColor, y = N(o, Z), C = d.useRef(), m = f;
  if (l && (m = {
    primaryColor: l,
    secondaryColor: s || z(l)
  }), Y(C), V(_(e), "icon should be icon definiton, but got ".concat(e)), !_(e))
    return null;
  var a = e;
  return a && typeof a.icon == "function" && (a = c(c({}, a), {}, {
    icon: a.icon(m.primaryColor, m.secondaryColor)
  })), p(a.icon, "svg-".concat(a.name), c(c({
    className: r,
    onClick: t,
    style: i,
    "data-icon": a.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, y), {}, {
    ref: C
  }));
};
u.displayName = "IconReact";
u.getTwoToneColors = on;
u.setTwoToneColors = nn;
function $(n) {
  var o = E(n), e = R(o, 2), r = e[0], t = e[1];
  return u.setTwoToneColors({
    primaryColor: r,
    secondaryColor: t
  });
}
function en() {
  var n = u.getTwoToneColors();
  return n.calculated ? [n.primaryColor, n.secondaryColor] : n.primaryColor;
}
var rn = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
$(q.primary);
var T = /* @__PURE__ */ d.forwardRef(function(n, o) {
  var e = n.className, r = n.icon, t = n.spin, i = n.rotate, l = n.tabIndex, s = n.onClick, y = n.twoToneColor, C = N(n, rn), m = d.useContext(I), a = m.prefixCls, g = a === void 0 ? "anticon" : a, j = m.rootClassName, A = F(j, g, h(h({}, "".concat(g, "-").concat(r.name), !!r.name), "".concat(g, "-spin"), !!t || r.name === "loading"), e), v = l;
  v === void 0 && s && (v = -1);
  var P = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, B = E(y), w = R(B, 2), O = w[0], D = w[1];
  return /* @__PURE__ */ d.createElement("span", G({
    role: "img",
    "aria-label": r.name
  }, C, {
    ref: o,
    tabIndex: v,
    onClick: s,
    className: A
  }), /* @__PURE__ */ d.createElement(u, {
    icon: r,
    primaryColor: O,
    secondaryColor: D,
    style: P
  }));
});
T.displayName = "AntdIcon";
T.getTwoToneColor = en;
T.setTwoToneColor = $;
export {
  T as I,
  M as g
};
