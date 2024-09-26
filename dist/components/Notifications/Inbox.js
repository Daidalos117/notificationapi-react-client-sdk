import { jsx as Ct, jsxs as fi } from "react/jsx-runtime";
import { InboxHeader as Gn } from "./InboxHeader.js";
import { c as Se, b as Ht, e as re, d as St, a as ze, _ as ce, i as mi, h as ue, w as lt, k as gi, n as Un } from "../../assets/index3.js";
import { s as br, K as ne, D as dn, E as vi, G as pi, u as kt, o as Dn, t as bn, r as yr, j as hi, x as Si, R as bi, h as yi, k as Ci, H as $i, l as xi, F as wi, e as zn, I as Ei, v as Ii, d as Oi, J as Ni, L as Mi, M as Ri, O as Pi, Q as Di, S as zi, U as _i } from "../../assets/index4.js";
import { K as et, a7 as $t, t as yn, a8 as Cn, a0 as Ft, o as Ti, a9 as Li, _ as ft, s as ji, aa as Bi, ab as Hi, ac as Vi, ad as Ai, h as fn, T as an, g as Wt, m as Nt, a as xt, r as Jt, ae as $n, u as J, f as Cr, e as _n, D as Fi, c as xn, l as Wi, p as qn, n as Ki, af as Xi } from "../../assets/colors.js";
import * as o from "react";
import G, { useState as Bt, useMemo as wn, useCallback as Yn, useRef as De, useEffect as sn, useContext as en, createContext as Gi, Children as Jn } from "react";
import { u as Ui, r as Yt, a as $r, L as qi, N as Qn } from "../../assets/Notification.js";
import { NotificationAPIContext as Yi } from "../Provider/index.js";
import { Filter as Zn } from "./interface.js";
import { I as nn } from "../../assets/AntdIcon.js";
import { R as kn } from "../../assets/RightOutlined.js";
import { p as tn } from "../../assets/pickAttrs.js";
import { R as Ji, g as Qi } from "../../assets/PurePanel.js";
const Zi = new et("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), ki = new et("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), eo = new et("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), to = new et("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), no = new et("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), ro = new et("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), io = new et("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), oo = new et("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), ao = {
  "move-up": {
    inKeyframes: io,
    outKeyframes: oo
  },
  "move-down": {
    inKeyframes: Zi,
    outKeyframes: ki
  },
  "move-left": {
    inKeyframes: eo,
    outKeyframes: to
  },
  "move-right": {
    inKeyframes: no,
    outKeyframes: ro
  }
}, er = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: i,
    outKeyframes: a
  } = ao[t];
  return [br(r, i, a, e.motionDurationMid), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, xr = new et("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), wr = new et("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), Er = new et("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
}), Ir = new et("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
}), lo = new et("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), so = new et("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), co = new et("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
}), uo = new et("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
}), fo = {
  "slide-up": {
    inKeyframes: xr,
    outKeyframes: wr
  },
  "slide-down": {
    inKeyframes: Er,
    outKeyframes: Ir
  },
  "slide-left": {
    inKeyframes: lo,
    outKeyframes: so
  },
  "slide-right": {
    inKeyframes: co,
    outKeyframes: uo
  }
}, tr = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: i,
    outKeyframes: a
  } = fo[t];
  return [br(r, i, a, e.motionDurationMid), {
    [`
      ${r}-enter,
      ${r}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
};
var mn = function(t) {
  var n = t.className, r = t.customizeIcon, i = t.customizeIconProps, a = t.children, l = t.onMouseDown, s = t.onClick, f = typeof r == "function" ? r(i) : r;
  return /* @__PURE__ */ o.createElement("span", {
    className: n,
    onMouseDown: function(g) {
      g.preventDefault(), l == null || l(g);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: s,
    "aria-hidden": !0
  }, f !== void 0 ? f : /* @__PURE__ */ o.createElement("span", {
    className: Se(n.split(/\s+/).map(function(v) {
      return "".concat(v, "-icon");
    }))
  }, a));
}, mo = function(t, n, r, i, a) {
  var l = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1, s = arguments.length > 6 ? arguments[6] : void 0, f = arguments.length > 7 ? arguments[7] : void 0, v = G.useMemo(function() {
    if (Ht(i) === "object")
      return i.clearIcon;
    if (a)
      return a;
  }, [i, a]), g = G.useMemo(function() {
    return !!(!l && i && (r.length || s) && !(f === "combobox" && s === ""));
  }, [i, l, r.length, s, f]);
  return {
    allowClear: g,
    clearIcon: /* @__PURE__ */ G.createElement(mn, {
      className: "".concat(t, "-clear"),
      onMouseDown: n,
      customizeIcon: v
    }, "×")
  };
}, Or = /* @__PURE__ */ o.createContext(null);
function go() {
  return o.useContext(Or);
}
function vo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, t = o.useState(!1), n = re(t, 2), r = n[0], i = n[1], a = o.useRef(null), l = function() {
    window.clearTimeout(a.current);
  };
  o.useEffect(function() {
    return l;
  }, []);
  var s = function(v, g) {
    l(), a.current = window.setTimeout(function() {
      i(v), g && g();
    }, e);
  };
  return [r, s, l];
}
function Nr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, t = o.useRef(null), n = o.useRef(null);
  o.useEffect(function() {
    return function() {
      window.clearTimeout(n.current);
    };
  }, []);
  function r(i) {
    (i || t.current === null) && (t.current = i), window.clearTimeout(n.current), n.current = window.setTimeout(function() {
      t.current = null;
    }, e);
  }
  return [function() {
    return t.current;
  }, r];
}
function po(e, t, n, r) {
  var i = o.useRef(null);
  i.current = {
    open: t,
    triggerOpen: n,
    customizedTrigger: r
  }, o.useEffect(function() {
    function a(l) {
      var s;
      if (!((s = i.current) !== null && s !== void 0 && s.customizedTrigger)) {
        var f = l.target;
        f.shadowRoot && l.composed && (f = l.composedPath()[0] || f), i.current.open && e().filter(function(v) {
          return v;
        }).every(function(v) {
          return !v.contains(f) && v !== f;
        }) && i.current.triggerOpen(!1);
      }
    }
    return window.addEventListener("mousedown", a), function() {
      return window.removeEventListener("mousedown", a);
    };
  }, []);
}
function ho(e) {
  return ![
    // System function button
    ne.ESC,
    ne.SHIFT,
    ne.BACKSPACE,
    ne.TAB,
    ne.WIN_KEY,
    ne.ALT,
    ne.META,
    ne.WIN_KEY_RIGHT,
    ne.CTRL,
    ne.SEMICOLON,
    ne.EQUALS,
    ne.CAPS_LOCK,
    ne.CONTEXT_MENU,
    // F1-F12
    ne.F1,
    ne.F2,
    ne.F3,
    ne.F4,
    ne.F5,
    ne.F6,
    ne.F7,
    ne.F8,
    ne.F9,
    ne.F10,
    ne.F11,
    ne.F12
  ].includes(e);
}
var So = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Gt = void 0;
function bo(e, t) {
  var n = e.prefixCls, r = e.invalidate, i = e.item, a = e.renderItem, l = e.responsive, s = e.responsiveDisabled, f = e.registerSize, v = e.itemKey, g = e.className, m = e.style, b = e.children, c = e.display, u = e.order, d = e.component, h = d === void 0 ? "div" : d, p = St(e, So), S = l && !c;
  function y(D) {
    f(v, D);
  }
  o.useEffect(function() {
    return function() {
      y(null);
    };
  }, []);
  var w = a && i !== Gt ? a(i) : b, P;
  r || (P = {
    opacity: S ? 0 : 1,
    height: S ? 0 : Gt,
    overflowY: S ? "hidden" : Gt,
    order: l ? u : Gt,
    pointerEvents: S ? "none" : Gt,
    position: S ? "absolute" : Gt
  });
  var $ = {};
  S && ($["aria-hidden"] = !0);
  var x = /* @__PURE__ */ o.createElement(h, ze({
    className: Se(!r && n, g),
    style: ce(ce({}, P), m)
  }, $, p, {
    ref: t
  }), w);
  return l && (x = /* @__PURE__ */ o.createElement(dn, {
    onResize: function(O) {
      var I = O.offsetWidth;
      y(I);
    },
    disabled: s
  }, x)), x;
}
var Zt = /* @__PURE__ */ o.forwardRef(bo);
Zt.displayName = "Item";
function yo(e) {
  if (typeof MessageChannel > "u")
    $t(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function Co() {
  var e = o.useRef(null), t = function(r) {
    e.current || (e.current = [], yo(function() {
      Cn.unstable_batchedUpdates(function() {
        e.current.forEach(function(i) {
          i();
        }), e.current = null;
      });
    })), e.current.push(r);
  };
  return t;
}
function Qt(e, t) {
  var n = o.useState(t), r = re(n, 2), i = r[0], a = r[1], l = yn(function(s) {
    e(function() {
      a(s);
    });
  });
  return [i, l];
}
var cn = /* @__PURE__ */ G.createContext(null), $o = ["component"], xo = ["className"], wo = ["className"], Eo = function(t, n) {
  var r = o.useContext(cn);
  if (!r) {
    var i = t.component, a = i === void 0 ? "div" : i, l = St(t, $o);
    return /* @__PURE__ */ o.createElement(a, ze({}, l, {
      ref: n
    }));
  }
  var s = r.className, f = St(r, xo), v = t.className, g = St(t, wo);
  return /* @__PURE__ */ o.createElement(cn.Provider, {
    value: null
  }, /* @__PURE__ */ o.createElement(Zt, ze({
    ref: n,
    className: Se(s, v)
  }, f, g)));
}, Mr = /* @__PURE__ */ o.forwardRef(Eo);
Mr.displayName = "RawItem";
var Io = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], Rr = "responsive", Pr = "invalidate";
function Oo(e) {
  return "+ ".concat(e.length, " ...");
}
function No(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-overflow" : n, i = e.data, a = i === void 0 ? [] : i, l = e.renderItem, s = e.renderRawItem, f = e.itemKey, v = e.itemWidth, g = v === void 0 ? 10 : v, m = e.ssr, b = e.style, c = e.className, u = e.maxCount, d = e.renderRest, h = e.renderRawRest, p = e.suffix, S = e.component, y = S === void 0 ? "div" : S, w = e.itemComponent, P = e.onVisibleChange, $ = St(e, Io), x = m === "full", D = Co(), O = Qt(D, null), I = re(O, 2), H = I[0], B = I[1], T = H || 0, R = Qt(D, /* @__PURE__ */ new Map()), _ = re(R, 2), Y = _[0], V = _[1], M = Qt(D, 0), L = re(M, 2), k = L[0], W = L[1], Ie = Qt(D, 0), de = re(Ie, 2), fe = de[0], me = de[1], Ae = Qt(D, 0), ie = re(Ae, 2), ye = ie[0], _e = ie[1], N = Bt(null), C = re(N, 2), F = C[0], Q = C[1], j = Bt(null), E = re(j, 2), ee = E[0], xe = E[1], ae = o.useMemo(function() {
    return ee === null && x ? Number.MAX_SAFE_INTEGER : ee || 0;
  }, [ee, H]), ve = Bt(!1), Oe = re(ve, 2), le = Oe[0], $e = Oe[1], Ce = "".concat(r, "-item"), be = Math.max(k, fe), Ge = u === Rr, we = a.length && Ge, Te = u === Pr, Pe = we || typeof u == "number" && a.length > u, Le = wn(function() {
    var oe = a;
    return we ? H === null && x ? oe = a : oe = a.slice(0, Math.min(a.length, T / g)) : typeof u == "number" && (oe = a.slice(0, u)), oe;
  }, [a, g, H, u, we]), je = wn(function() {
    return we ? a.slice(ae + 1) : a.slice(Le.length);
  }, [a, Le, we, ae]), Qe = Yn(function(oe, U) {
    var Me;
    return typeof f == "function" ? f(oe) : (Me = f && (oe == null ? void 0 : oe[f])) !== null && Me !== void 0 ? Me : U;
  }, [f]), Ze = Yn(l || function(oe) {
    return oe;
  }, [l]);
  function pe(oe, U, Me) {
    ee === oe && (U === void 0 || U === F) || (xe(oe), Me || ($e(oe < a.length - 1), P == null || P(oe)), U !== void 0 && Q(U));
  }
  function Xe(oe, U) {
    B(U.clientWidth);
  }
  function rt(oe, U) {
    V(function(Me) {
      var We = new Map(Me);
      return U === null ? We.delete(oe) : We.set(oe, U), We;
    });
  }
  function Ue(oe, U) {
    me(U), W(fe);
  }
  function Fe(oe, U) {
    _e(U);
  }
  function Be(oe) {
    return Y.get(Qe(Le[oe], oe));
  }
  Ft(function() {
    if (T && typeof be == "number" && Le) {
      var oe = ye, U = Le.length, Me = U - 1;
      if (!U) {
        pe(0, null);
        return;
      }
      for (var We = 0; We < U; We += 1) {
        var A = Be(We);
        if (x && (A = A || 0), A === void 0) {
          pe(We - 1, void 0, !0);
          break;
        }
        if (oe += A, // Only one means `totalWidth` is the final width
        Me === 0 && oe <= T || // Last two width will be the final width
        We === Me - 1 && oe + Be(Me) <= T) {
          pe(Me, null);
          break;
        } else if (oe + be > T) {
          pe(We - 1, oe - A - ye + fe);
          break;
        }
      }
      p && Be(0) + ye > T && Q(null);
    }
  }, [T, Y, fe, ye, Qe, Le]);
  var bt = le && !!je.length, st = {};
  F !== null && we && (st = {
    position: "absolute",
    left: F,
    top: 0
  });
  var qe = {
    prefixCls: Ce,
    responsive: we,
    component: w,
    invalidate: Te
  }, Rt = s ? function(oe, U) {
    var Me = Qe(oe, U);
    return /* @__PURE__ */ o.createElement(cn.Provider, {
      key: Me,
      value: ce(ce({}, qe), {}, {
        order: U,
        item: oe,
        itemKey: Me,
        registerSize: rt,
        display: U <= ae
      })
    }, s(oe, U));
  } : function(oe, U) {
    var Me = Qe(oe, U);
    return /* @__PURE__ */ o.createElement(Zt, ze({}, qe, {
      order: U,
      key: Me,
      item: oe,
      renderItem: Ze,
      itemKey: Me,
      registerSize: rt,
      display: U <= ae
    }));
  }, mt, pt = {
    order: bt ? ae : Number.MAX_SAFE_INTEGER,
    className: "".concat(Ce, "-rest"),
    registerSize: Ue,
    display: bt
  };
  if (h)
    h && (mt = /* @__PURE__ */ o.createElement(cn.Provider, {
      value: ce(ce({}, qe), pt)
    }, h(je)));
  else {
    var nt = d || Oo;
    mt = /* @__PURE__ */ o.createElement(Zt, ze({}, qe, pt), typeof nt == "function" ? nt(je) : nt);
  }
  var ct = /* @__PURE__ */ o.createElement(y, ze({
    className: Se(!Te && r, c),
    style: b,
    ref: t
  }, $), Le.map(Rt), Pe ? mt : null, p && /* @__PURE__ */ o.createElement(Zt, ze({}, qe, {
    responsive: Ge,
    responsiveDisabled: !we,
    order: ae,
    className: "".concat(Ce, "-suffix"),
    registerSize: Fe,
    display: !0,
    style: st
  }), p));
  return Ge && (ct = /* @__PURE__ */ o.createElement(dn, {
    onResize: Xe,
    disabled: !we
  }, ct)), ct;
}
var rn = /* @__PURE__ */ o.forwardRef(No);
rn.displayName = "Overflow";
rn.Item = Mr;
rn.RESPONSIVE = Rr;
rn.INVALIDATE = Pr;
var Mo = function(t, n) {
  var r, i = t.prefixCls, a = t.id, l = t.inputElement, s = t.disabled, f = t.tabIndex, v = t.autoFocus, g = t.autoComplete, m = t.editable, b = t.activeDescendantId, c = t.value, u = t.maxLength, d = t.onKeyDown, h = t.onMouseDown, p = t.onChange, S = t.onPaste, y = t.onCompositionStart, w = t.onCompositionEnd, P = t.open, $ = t.attrs, x = l || /* @__PURE__ */ o.createElement("input", null), D = x, O = D.ref, I = D.props, H = I.onKeyDown, B = I.onChange, T = I.onMouseDown, R = I.onCompositionStart, _ = I.onCompositionEnd, Y = I.style;
  return mi(!("maxLength" in x.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled."), x = /* @__PURE__ */ o.cloneElement(x, ce(ce(ce({
    type: "search"
  }, I), {}, {
    // Override over origin props
    id: a,
    ref: Ti(n, O),
    disabled: s,
    tabIndex: f,
    autoComplete: g || "off",
    autoFocus: v,
    className: Se("".concat(i, "-selection-search-input"), (r = x) === null || r === void 0 || (r = r.props) === null || r === void 0 ? void 0 : r.className),
    role: "combobox",
    "aria-expanded": P || !1,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(a, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(a, "_list"),
    "aria-activedescendant": P ? b : void 0
  }, $), {}, {
    value: m ? c : "",
    maxLength: u,
    readOnly: !m,
    unselectable: m ? null : "on",
    style: ce(ce({}, Y), {}, {
      opacity: m ? null : 0
    }),
    onKeyDown: function(M) {
      d(M), H && H(M);
    },
    onMouseDown: function(M) {
      h(M), T && T(M);
    },
    onChange: function(M) {
      p(M), B && B(M);
    },
    onCompositionStart: function(M) {
      y(M), R && R(M);
    },
    onCompositionEnd: function(M) {
      w(M), _ && _(M);
    },
    onPaste: S
  })), x;
}, Tn = /* @__PURE__ */ o.forwardRef(Mo);
process.env.NODE_ENV !== "production" && (Tn.displayName = "Input");
function Ln(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
var Ro = typeof window < "u" && window.document && window.document.documentElement, Po = process.env.NODE_ENV !== "test" && Ro;
function Do(e) {
  return e != null;
}
function zo(e) {
  return !e && e !== 0;
}
function nr(e) {
  return ["string", "number"].includes(Ht(e));
}
function Dr(e) {
  var t = void 0;
  return e && (nr(e.title) ? t = e.title.toString() : nr(e.label) && (t = e.label.toString())), t;
}
function _o(e, t) {
  Po ? o.useLayoutEffect(e, t) : o.useEffect(e, t);
}
function To(e) {
  var t;
  return (t = e.key) !== null && t !== void 0 ? t : e.value;
}
var rr = function(t) {
  t.preventDefault(), t.stopPropagation();
}, Lo = function(t) {
  var n = t.id, r = t.prefixCls, i = t.values, a = t.open, l = t.searchValue, s = t.autoClearSearchValue, f = t.inputRef, v = t.placeholder, g = t.disabled, m = t.mode, b = t.showSearch, c = t.autoFocus, u = t.autoComplete, d = t.activeDescendantId, h = t.tabIndex, p = t.removeIcon, S = t.maxTagCount, y = t.maxTagTextLength, w = t.maxTagPlaceholder, P = w === void 0 ? function(Q) {
    return "+ ".concat(Q.length, " ...");
  } : w, $ = t.tagRender, x = t.onToggleOpen, D = t.onRemove, O = t.onInputChange, I = t.onInputPaste, H = t.onInputKeyDown, B = t.onInputMouseDown, T = t.onInputCompositionStart, R = t.onInputCompositionEnd, _ = o.useRef(null), Y = Bt(0), V = re(Y, 2), M = V[0], L = V[1], k = Bt(!1), W = re(k, 2), Ie = W[0], de = W[1], fe = "".concat(r, "-selection"), me = a || m === "multiple" && s === !1 || m === "tags" ? l : "", Ae = m === "tags" || m === "multiple" && s === !1 || b && (a || Ie);
  _o(function() {
    L(_.current.scrollWidth);
  }, [me]);
  var ie = function(j, E, ee, xe, ae) {
    return /* @__PURE__ */ o.createElement("span", {
      title: Dr(j),
      className: Se("".concat(fe, "-item"), ue({}, "".concat(fe, "-item-disabled"), ee))
    }, /* @__PURE__ */ o.createElement("span", {
      className: "".concat(fe, "-item-content")
    }, E), xe && /* @__PURE__ */ o.createElement(mn, {
      className: "".concat(fe, "-item-remove"),
      onMouseDown: rr,
      onClick: ae,
      customizeIcon: p
    }, "×"));
  }, ye = function(j, E, ee, xe, ae, ve) {
    var Oe = function($e) {
      rr($e), x(!a);
    };
    return /* @__PURE__ */ o.createElement("span", {
      onMouseDown: Oe
    }, $({
      label: E,
      value: j,
      disabled: ee,
      closable: xe,
      onClose: ae,
      isMaxTag: !!ve
    }));
  }, _e = function(j) {
    var E = j.disabled, ee = j.label, xe = j.value, ae = !g && !E, ve = ee;
    if (typeof y == "number" && (typeof ee == "string" || typeof ee == "number")) {
      var Oe = String(ve);
      Oe.length > y && (ve = "".concat(Oe.slice(0, y), "..."));
    }
    var le = function(Ce) {
      Ce && Ce.stopPropagation(), D(j);
    };
    return typeof $ == "function" ? ye(xe, ve, E, ae, le) : ie(j, ve, E, ae, le);
  }, N = function(j) {
    var E = typeof P == "function" ? P(j) : P;
    return typeof $ == "function" ? ye(void 0, E, !1, !1, void 0, !0) : ie({
      title: E
    }, E, !1);
  }, C = /* @__PURE__ */ o.createElement("div", {
    className: "".concat(fe, "-search"),
    style: {
      width: M
    },
    onFocus: function() {
      de(!0);
    },
    onBlur: function() {
      de(!1);
    }
  }, /* @__PURE__ */ o.createElement(Tn, {
    ref: f,
    open: a,
    prefixCls: r,
    id: n,
    inputElement: null,
    disabled: g,
    autoFocus: c,
    autoComplete: u,
    editable: Ae,
    activeDescendantId: d,
    value: me,
    onKeyDown: H,
    onMouseDown: B,
    onChange: O,
    onPaste: I,
    onCompositionStart: T,
    onCompositionEnd: R,
    tabIndex: h,
    attrs: tn(t, !0)
  }), /* @__PURE__ */ o.createElement("span", {
    ref: _,
    className: "".concat(fe, "-search-mirror"),
    "aria-hidden": !0
  }, me, " ")), F = /* @__PURE__ */ o.createElement(rn, {
    prefixCls: "".concat(fe, "-overflow"),
    data: i,
    renderItem: _e,
    renderRest: N,
    suffix: C,
    itemKey: To,
    maxCount: S
  });
  return /* @__PURE__ */ o.createElement(o.Fragment, null, F, !i.length && !me && /* @__PURE__ */ o.createElement("span", {
    className: "".concat(fe, "-placeholder")
  }, v));
}, jo = function(t) {
  var n = t.inputElement, r = t.prefixCls, i = t.id, a = t.inputRef, l = t.disabled, s = t.autoFocus, f = t.autoComplete, v = t.activeDescendantId, g = t.mode, m = t.open, b = t.values, c = t.placeholder, u = t.tabIndex, d = t.showSearch, h = t.searchValue, p = t.activeValue, S = t.maxLength, y = t.onInputKeyDown, w = t.onInputMouseDown, P = t.onInputChange, $ = t.onInputPaste, x = t.onInputCompositionStart, D = t.onInputCompositionEnd, O = t.title, I = o.useState(!1), H = re(I, 2), B = H[0], T = H[1], R = g === "combobox", _ = R || d, Y = b[0], V = h || "";
  R && p && !B && (V = p), o.useEffect(function() {
    R && T(!1);
  }, [R, p]);
  var M = g !== "combobox" && !m && !d ? !1 : !!V, L = O === void 0 ? Dr(Y) : O, k = o.useMemo(function() {
    return Y ? null : /* @__PURE__ */ o.createElement("span", {
      className: "".concat(r, "-selection-placeholder"),
      style: M ? {
        visibility: "hidden"
      } : void 0
    }, c);
  }, [Y, M, c, r]);
  return /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("span", {
    className: "".concat(r, "-selection-search")
  }, /* @__PURE__ */ o.createElement(Tn, {
    ref: a,
    prefixCls: r,
    id: i,
    open: m,
    inputElement: n,
    disabled: l,
    autoFocus: s,
    autoComplete: f,
    editable: _,
    activeDescendantId: v,
    value: V,
    onKeyDown: y,
    onMouseDown: w,
    onChange: function(Ie) {
      T(!0), P(Ie);
    },
    onPaste: $,
    onCompositionStart: x,
    onCompositionEnd: D,
    tabIndex: u,
    attrs: tn(t, !0),
    maxLength: R ? S : void 0
  })), !R && Y ? /* @__PURE__ */ o.createElement("span", {
    className: "".concat(r, "-selection-item"),
    title: L,
    style: M ? {
      visibility: "hidden"
    } : void 0
  }, Y.label) : null, k);
}, Bo = function(t, n) {
  var r = De(null), i = De(!1), a = t.prefixCls, l = t.open, s = t.mode, f = t.showSearch, v = t.tokenWithEnter, g = t.disabled, m = t.autoClearSearchValue, b = t.onSearch, c = t.onSearchSubmit, u = t.onToggleOpen, d = t.onInputKeyDown, h = t.domRef;
  o.useImperativeHandle(n, function() {
    return {
      focus: function(M) {
        r.current.focus(M);
      },
      blur: function() {
        r.current.blur();
      }
    };
  });
  var p = Nr(0), S = re(p, 2), y = S[0], w = S[1], P = function(M) {
    var L = M.which;
    (L === ne.UP || L === ne.DOWN) && M.preventDefault(), d && d(M), L === ne.ENTER && s === "tags" && !i.current && !l && (c == null || c(M.target.value)), ho(L) && u(!0);
  }, $ = function() {
    w(!0);
  }, x = De(null), D = function(M) {
    b(M, !0, i.current) !== !1 && u(!0);
  }, O = function() {
    i.current = !0;
  }, I = function(M) {
    i.current = !1, s !== "combobox" && D(M.target.value);
  }, H = function(M) {
    var L = M.target.value;
    if (v && x.current && /[\r\n]/.test(x.current)) {
      var k = x.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      L = L.replace(k, x.current);
    }
    x.current = null, D(L);
  }, B = function(M) {
    var L = M.clipboardData, k = L == null ? void 0 : L.getData("text");
    x.current = k || "";
  }, T = function(M) {
    var L = M.target;
    if (L !== r.current) {
      var k = document.body.style.msTouchAction !== void 0;
      k ? setTimeout(function() {
        r.current.focus();
      }) : r.current.focus();
    }
  }, R = function(M) {
    var L = y();
    M.target !== r.current && !L && !(s === "combobox" && g) && M.preventDefault(), (s !== "combobox" && (!f || !L) || !l) && (l && m !== !1 && b("", !0, !1), u());
  }, _ = {
    inputRef: r,
    onInputKeyDown: P,
    onInputMouseDown: $,
    onInputChange: H,
    onInputPaste: B,
    onInputCompositionStart: O,
    onInputCompositionEnd: I
  }, Y = s === "multiple" || s === "tags" ? /* @__PURE__ */ o.createElement(Lo, ze({}, t, _)) : /* @__PURE__ */ o.createElement(jo, ze({}, t, _));
  return /* @__PURE__ */ o.createElement("div", {
    ref: h,
    className: "".concat(a, "-selector"),
    onClick: T,
    onMouseDown: R
  }, Y);
}, zr = /* @__PURE__ */ o.forwardRef(Bo);
process.env.NODE_ENV !== "production" && (zr.displayName = "Selector");
var Ho = ["prefixCls", "disabled", "visible", "children", "popupElement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"], Vo = function(t) {
  var n = t === !0 ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    }
  };
}, Ao = function(t, n) {
  var r = t.prefixCls;
  t.disabled;
  var i = t.visible, a = t.children, l = t.popupElement, s = t.animation, f = t.transitionName, v = t.dropdownStyle, g = t.dropdownClassName, m = t.direction, b = m === void 0 ? "ltr" : m, c = t.placement, u = t.builtinPlacements, d = t.dropdownMatchSelectWidth, h = t.dropdownRender, p = t.dropdownAlign, S = t.getPopupContainer, y = t.empty, w = t.getTriggerDOMNode, P = t.onPopupVisibleChange, $ = t.onPopupMouseEnter, x = St(t, Ho), D = "".concat(r, "-dropdown"), O = l;
  h && (O = h(l));
  var I = o.useMemo(function() {
    return u || Vo(d);
  }, [u, d]), H = s ? "".concat(D, "-").concat(s) : f, B = typeof d == "number", T = o.useMemo(function() {
    return B ? null : d === !1 ? "minWidth" : "width";
  }, [d, B]), R = v;
  B && (R = ce(ce({}, R), {}, {
    width: d
  }));
  var _ = o.useRef(null);
  return o.useImperativeHandle(n, function() {
    return {
      getPopupElement: function() {
        var V;
        return (V = _.current) === null || V === void 0 ? void 0 : V.popupElement;
      }
    };
  }), /* @__PURE__ */ o.createElement(vi, ze({}, x, {
    showAction: P ? ["click"] : [],
    hideAction: P ? ["click"] : [],
    popupPlacement: c || (b === "rtl" ? "bottomRight" : "bottomLeft"),
    builtinPlacements: I,
    prefixCls: D,
    popupTransitionName: H,
    popup: /* @__PURE__ */ o.createElement("div", {
      onMouseEnter: $
    }, O),
    ref: _,
    stretch: T,
    popupAlign: p,
    popupVisible: i,
    getPopupContainer: S,
    popupClassName: Se(g, ue({}, "".concat(D, "-empty"), y)),
    popupStyle: R,
    getTriggerDOMNode: w,
    onPopupVisibleChange: P
  }), a);
}, _r = /* @__PURE__ */ o.forwardRef(Ao);
process.env.NODE_ENV !== "production" && (_r.displayName = "SelectTrigger");
function ir(e, t) {
  var n = e.key, r;
  return "value" in e && (r = e.value), n ?? (r !== void 0 ? r : "rc-index-key-".concat(t));
}
function En(e) {
  return typeof e < "u" && !Number.isNaN(e);
}
function Tr(e, t) {
  var n = e || {}, r = n.label, i = n.value, a = n.options, l = n.groupLabel, s = r || (t ? "children" : "label");
  return {
    label: s,
    value: i || "value",
    options: a || "options",
    groupLabel: l || s
  };
}
function Fo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.fieldNames, r = t.childrenAsData, i = [], a = Tr(n, !1), l = a.label, s = a.value, f = a.options, v = a.groupLabel;
  function g(m, b) {
    Array.isArray(m) && m.forEach(function(c) {
      if (b || !(f in c)) {
        var u = c[s];
        i.push({
          key: ir(c, i.length),
          groupOption: b,
          data: c,
          label: c[l],
          value: u
        });
      } else {
        var d = c[v];
        d === void 0 && r && (d = c.label), i.push({
          key: ir(c, i.length),
          group: !0,
          data: c,
          label: d
        }), g(c[f], !0);
      }
    });
  }
  return g(e, !1), i;
}
function In(e) {
  var t = ce({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get: function() {
      return lt(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
var Wo = function(t, n, r) {
  if (!n || !n.length)
    return null;
  var i = !1, a = function s(f, v) {
    var g = Li(v), m = g[0], b = g.slice(1);
    if (!m)
      return [f];
    var c = f.split(m);
    return i = i || c.length > 1, c.reduce(function(u, d) {
      return [].concat(ft(u), ft(s(d, b)));
    }, []).filter(Boolean);
  }, l = a(t, n);
  return i ? typeof r < "u" ? l.slice(0, r) : l : null;
}, jn = /* @__PURE__ */ o.createContext(null);
function Ko(e) {
  var t = e.visible, n = e.values;
  if (!t)
    return null;
  var r = 50;
  return /* @__PURE__ */ o.createElement("span", {
    "aria-live": "polite",
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    }
  }, "".concat(n.slice(0, r).map(function(i) {
    var a = i.label, l = i.value;
    return ["number", "string"].includes(Ht(a)) ? a : l;
  }).join(", ")), n.length > r ? ", ..." : null);
}
var Xo = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "suffixIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"], Go = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"], un = function(t) {
  return t === "tags" || t === "multiple";
}, Lr = /* @__PURE__ */ o.forwardRef(function(e, t) {
  var n, r = e.id, i = e.prefixCls, a = e.className, l = e.showSearch, s = e.tagRender, f = e.direction, v = e.omitDomProps, g = e.displayValues, m = e.onDisplayValuesChange, b = e.emptyOptions, c = e.notFoundContent, u = c === void 0 ? "Not Found" : c, d = e.onClear, h = e.mode, p = e.disabled, S = e.loading, y = e.getInputElement, w = e.getRawInputElement, P = e.open, $ = e.defaultOpen, x = e.onDropdownVisibleChange, D = e.activeValue, O = e.onActiveValueChange, I = e.activeDescendantId, H = e.searchValue, B = e.autoClearSearchValue, T = e.onSearch, R = e.onSearchSplit, _ = e.tokenSeparators, Y = e.allowClear, V = e.suffixIcon, M = e.clearIcon, L = e.OptionList, k = e.animation, W = e.transitionName, Ie = e.dropdownStyle, de = e.dropdownClassName, fe = e.dropdownMatchSelectWidth, me = e.dropdownRender, Ae = e.dropdownAlign, ie = e.placement, ye = e.builtinPlacements, _e = e.getPopupContainer, N = e.showAction, C = N === void 0 ? [] : N, F = e.onFocus, Q = e.onBlur, j = e.onKeyUp, E = e.onKeyDown, ee = e.onMouseDown, xe = St(e, Xo), ae = un(h), ve = (l !== void 0 ? l : ae) || h === "combobox", Oe = ce({}, xe);
  Go.forEach(function(Ne) {
    delete Oe[Ne];
  }), v == null || v.forEach(function(Ne) {
    delete Oe[Ne];
  });
  var le = o.useState(!1), $e = re(le, 2), Ce = $e[0], be = $e[1];
  o.useEffect(function() {
    be(pi());
  }, []);
  var Ge = o.useRef(null), we = o.useRef(null), Te = o.useRef(null), Pe = o.useRef(null), Le = o.useRef(null), je = o.useRef(!1), Qe = vo(), Ze = re(Qe, 3), pe = Ze[0], Xe = Ze[1], rt = Ze[2];
  o.useImperativeHandle(t, function() {
    var Ne, ge;
    return {
      focus: (Ne = Pe.current) === null || Ne === void 0 ? void 0 : Ne.focus,
      blur: (ge = Pe.current) === null || ge === void 0 ? void 0 : ge.blur,
      scrollTo: function(dt) {
        var Je;
        return (Je = Le.current) === null || Je === void 0 ? void 0 : Je.scrollTo(dt);
      },
      nativeElement: Ge.current || we.current
    };
  });
  var Ue = o.useMemo(function() {
    var Ne;
    if (h !== "combobox")
      return H;
    var ge = (Ne = g[0]) === null || Ne === void 0 ? void 0 : Ne.value;
    return typeof ge == "string" || typeof ge == "number" ? String(ge) : "";
  }, [H, h, g]), Fe = h === "combobox" && typeof y == "function" && y() || null, Be = typeof w == "function" && w(), bt = ji(we, Be == null || (n = Be.props) === null || n === void 0 ? void 0 : n.ref), st = o.useState(!1), qe = re(st, 2), Rt = qe[0], mt = qe[1];
  Ft(function() {
    mt(!0);
  }, []);
  var pt = kt(!1, {
    defaultValue: $,
    value: P
  }), nt = re(pt, 2), ct = nt[0], oe = nt[1], U = Rt ? ct : !1, Me = !u && b;
  (p || Me && U && h === "combobox") && (U = !1);
  var We = Me ? !1 : U, A = o.useCallback(function(Ne) {
    var ge = Ne !== void 0 ? Ne : !U;
    p || (oe(ge), U !== ge && (x == null || x(ge)));
  }, [p, U, oe, x]), te = o.useMemo(function() {
    return (_ || []).some(function(Ne) {
      return [`
`, `\r
`].includes(Ne);
    });
  }, [_]), z = o.useContext(jn) || {}, q = z.maxCount, he = z.rawValues, Re = function(ge, ut, dt) {
    if (!(ae && En(q) && (he == null ? void 0 : he.size) >= q)) {
      var Je = !0, at = ge;
      O == null || O(null);
      var Ot = Wo(ge, _, En(q) ? q - he.size : void 0), Tt = dt ? null : Ot;
      return h !== "combobox" && Tt && (at = "", R == null || R(Tt), A(!1), Je = !1), T && Ue !== at && T(at, {
        source: ut ? "typing" : "effect"
      }), Je;
    }
  }, it = function(ge) {
    !ge || !ge.trim() || T(ge, {
      source: "submit"
    });
  };
  o.useEffect(function() {
    !U && !ae && h !== "combobox" && Re("", !1, !1);
  }, [U]), o.useEffect(function() {
    ct && p && oe(!1), p && !je.current && Xe(!1);
  }, [p]);
  var ke = Nr(), tt = re(ke, 2), He = tt[0], Ye = tt[1], ot = function(ge) {
    var ut = He(), dt = ge.which;
    if (dt === ne.ENTER && (h !== "combobox" && ge.preventDefault(), U || A(!0)), Ye(!!Ue), dt === ne.BACKSPACE && !ut && ae && !Ue && g.length) {
      for (var Je = ft(g), at = null, Ot = Je.length - 1; Ot >= 0; Ot -= 1) {
        var Tt = Je[Ot];
        if (!Tt.disabled) {
          Je.splice(Ot, 1), at = Tt;
          break;
        }
      }
      at && m(Je, {
        type: "remove",
        values: [at]
      });
    }
    for (var Lt = arguments.length, Xt = new Array(Lt > 1 ? Lt - 1 : 0), jt = 1; jt < Lt; jt++)
      Xt[jt - 1] = arguments[jt];
    if (U) {
      var on;
      (on = Le.current) === null || on === void 0 || on.onKeyDown.apply(on, [ge].concat(Xt));
    }
    E == null || E.apply(void 0, [ge].concat(Xt));
  }, Vt = function(ge) {
    for (var ut = arguments.length, dt = new Array(ut > 1 ? ut - 1 : 0), Je = 1; Je < ut; Je++)
      dt[Je - 1] = arguments[Je];
    if (U) {
      var at;
      (at = Le.current) === null || at === void 0 || at.onKeyUp.apply(at, [ge].concat(dt));
    }
    j == null || j.apply(void 0, [ge].concat(dt));
  }, wt = function(ge) {
    var ut = g.filter(function(dt) {
      return dt !== ge;
    });
    m(ut, {
      type: "remove",
      values: [ge]
    });
  }, gt = o.useRef(!1), X = function() {
    Xe(!0), p || (F && !gt.current && F.apply(void 0, arguments), C.includes("focus") && A(!0)), gt.current = !0;
  }, K = function() {
    je.current = !0, Xe(!1, function() {
      gt.current = !1, je.current = !1, A(!1);
    }), !p && (Ue && (h === "tags" ? T(Ue, {
      source: "submit"
    }) : h === "multiple" && T("", {
      source: "blur"
    })), Q && Q.apply(void 0, arguments));
  }, se = [];
  o.useEffect(function() {
    return function() {
      se.forEach(function(Ne) {
        return clearTimeout(Ne);
      }), se.splice(0, se.length);
    };
  }, []);
  var Ve = function(ge) {
    var ut, dt = ge.target, Je = (ut = Te.current) === null || ut === void 0 ? void 0 : ut.getPopupElement();
    if (Je && Je.contains(dt)) {
      var at = setTimeout(function() {
        var Xt = se.indexOf(at);
        if (Xt !== -1 && se.splice(Xt, 1), rt(), !Ce && !Je.contains(document.activeElement)) {
          var jt;
          (jt = Pe.current) === null || jt === void 0 || jt.focus();
        }
      });
      se.push(at);
    }
    for (var Ot = arguments.length, Tt = new Array(Ot > 1 ? Ot - 1 : 0), Lt = 1; Lt < Ot; Lt++)
      Tt[Lt - 1] = arguments[Lt];
    ee == null || ee.apply(void 0, [ge].concat(Tt));
  }, vt = o.useState({}), Pt = re(vt, 2), yt = Pt[1];
  function Dt() {
    yt({});
  }
  var Et;
  Be && (Et = function(ge) {
    A(ge);
  }), po(function() {
    var Ne;
    return [Ge.current, (Ne = Te.current) === null || Ne === void 0 ? void 0 : Ne.getPopupElement()];
  }, We, A, !!Be);
  var zt = o.useMemo(function() {
    return ce(ce({}, e), {}, {
      notFoundContent: u,
      open: U,
      triggerOpen: We,
      id: r,
      showSearch: ve,
      multiple: ae,
      toggleOpen: A
    });
  }, [e, u, We, U, r, ve, ae, A]), _t = !!V || S, Z;
  _t && (Z = /* @__PURE__ */ o.createElement(mn, {
    className: Se("".concat(i, "-arrow"), ue({}, "".concat(i, "-arrow-loading"), S)),
    customizeIcon: V,
    customizeIconProps: {
      loading: S,
      searchValue: Ue,
      open: U,
      focused: pe,
      showSearch: ve
    }
  }));
  var Ee = function() {
    var ge;
    d == null || d(), (ge = Pe.current) === null || ge === void 0 || ge.focus(), m([], {
      type: "clear",
      values: g
    }), Re("", !1, !1);
  }, Ke = mo(i, Ee, g, Y, M, p, Ue, h), It = Ke.allowClear, Kt = Ke.clearIcon, ui = /* @__PURE__ */ o.createElement(L, {
    ref: Le
  }), di = Se(i, a, ue(ue(ue(ue(ue(ue(ue(ue(ue(ue({}, "".concat(i, "-focused"), pe), "".concat(i, "-multiple"), ae), "".concat(i, "-single"), !ae), "".concat(i, "-allow-clear"), Y), "".concat(i, "-show-arrow"), _t), "".concat(i, "-disabled"), p), "".concat(i, "-loading"), S), "".concat(i, "-open"), U), "".concat(i, "-customize-input"), Fe), "".concat(i, "-show-search"), ve)), Xn = /* @__PURE__ */ o.createElement(_r, {
    ref: Te,
    disabled: p,
    prefixCls: i,
    visible: We,
    popupElement: ui,
    animation: k,
    transitionName: W,
    dropdownStyle: Ie,
    dropdownClassName: de,
    direction: f,
    dropdownMatchSelectWidth: fe,
    dropdownRender: me,
    dropdownAlign: Ae,
    placement: ie,
    builtinPlacements: ye,
    getPopupContainer: _e,
    empty: b,
    getTriggerDOMNode: function(ge) {
      return (
        // TODO: This is workaround and should be removed in `rc-select`
        // And use new standard `nativeElement` for ref.
        // But we should update `rc-resize-observer` first.
        we.current || ge
      );
    },
    onPopupVisibleChange: Et,
    onPopupMouseEnter: Dt
  }, Be ? /* @__PURE__ */ o.cloneElement(Be, {
    ref: bt
  }) : /* @__PURE__ */ o.createElement(zr, ze({}, e, {
    domRef: we,
    prefixCls: i,
    inputElement: Fe,
    ref: Pe,
    id: r,
    showSearch: ve,
    autoClearSearchValue: B,
    mode: h,
    activeDescendantId: I,
    tagRender: s,
    values: g,
    open: U,
    onToggleOpen: A,
    activeValue: D,
    searchValue: Ue,
    onSearch: Re,
    onSearchSubmit: it,
    onRemove: wt,
    tokenWithEnter: te
  }))), gn;
  return Be ? gn = Xn : gn = /* @__PURE__ */ o.createElement("div", ze({
    className: di
  }, Oe, {
    ref: Ge,
    onMouseDown: Ve,
    onKeyDown: ot,
    onKeyUp: Vt,
    onFocus: X,
    onBlur: K
  }), /* @__PURE__ */ o.createElement(Ko, {
    visible: pe && !U,
    values: g
  }), Xn, Z, It && Kt), /* @__PURE__ */ o.createElement(Or.Provider, {
    value: zt
  }, gn);
});
process.env.NODE_ENV !== "production" && (Lr.displayName = "BaseSelect");
var Bn = function() {
  return null;
};
Bn.isSelectOptGroup = !0;
var Hn = function() {
  return null;
};
Hn.isSelectOption = !0;
var jr = /* @__PURE__ */ o.forwardRef(function(e, t) {
  var n = e.height, r = e.offsetY, i = e.offsetX, a = e.children, l = e.prefixCls, s = e.onInnerResize, f = e.innerProps, v = e.rtl, g = e.extra, m = {}, b = {
    display: "flex",
    flexDirection: "column"
  };
  return r !== void 0 && (m = {
    height: n,
    position: "relative",
    overflow: "hidden"
  }, b = ce(ce({}, b), {}, ue(ue(ue(ue(ue({
    transform: "translateY(".concat(r, "px)")
  }, v ? "marginRight" : "marginLeft", -i), "position", "absolute"), "left", 0), "right", 0), "top", 0))), /* @__PURE__ */ o.createElement("div", {
    style: m
  }, /* @__PURE__ */ o.createElement(dn, {
    onResize: function(u) {
      var d = u.offsetHeight;
      d && s && s();
    }
  }, /* @__PURE__ */ o.createElement("div", ze({
    style: b,
    className: Se(ue({}, "".concat(l, "-holder-inner"), l)),
    ref: t
  }, f), a, g)));
});
jr.displayName = "Filler";
function Uo(e) {
  var t = e.children, n = e.setRef, r = o.useCallback(function(i) {
    n(i);
  }, []);
  return /* @__PURE__ */ o.cloneElement(t, {
    ref: r
  });
}
function qo(e, t, n, r, i, a, l, s) {
  var f = s.getKey;
  return e.slice(t, n + 1).map(function(v, g) {
    var m = t + g, b = l(v, m, {
      style: {
        width: r
      },
      offsetX: i
    }), c = f(v);
    return /* @__PURE__ */ o.createElement(Uo, {
      key: c,
      setRef: function(d) {
        return a(v, d);
      }
    }, b);
  });
}
function Yo(e, t, n) {
  var r = e.length, i = t.length, a, l;
  if (r === 0 && i === 0)
    return null;
  r < i ? (a = e, l = t) : (a = t, l = e);
  var s = {
    __EMPTY_ITEM__: !0
  };
  function f(u) {
    return u !== void 0 ? n(u) : s;
  }
  for (var v = null, g = Math.abs(r - i) !== 1, m = 0; m < l.length; m += 1) {
    var b = f(a[m]), c = f(l[m]);
    if (b !== c) {
      v = m, g = g || b !== f(l[m + 1]);
      break;
    }
  }
  return v === null ? null : {
    index: v,
    multiple: g
  };
}
function Jo(e, t, n) {
  var r = o.useState(e), i = re(r, 2), a = i[0], l = i[1], s = o.useState(null), f = re(s, 2), v = f[0], g = f[1];
  return o.useEffect(function() {
    var m = Yo(a || [], e || [], t);
    (m == null ? void 0 : m.index) !== void 0 && g(e[m.index]), l(e);
  }, [e]), [v];
}
var or = (typeof navigator > "u" ? "undefined" : Ht(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const Br = function(e, t, n, r) {
  var i = De(!1), a = De(null);
  function l() {
    clearTimeout(a.current), i.current = !0, a.current = setTimeout(function() {
      i.current = !1;
    }, 50);
  }
  var s = De({
    top: e,
    bottom: t,
    left: n,
    right: r
  });
  return s.current.top = e, s.current.bottom = t, s.current.left = n, s.current.right = r, function(f, v) {
    var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, m = f ? (
      // Pass origin wheel when on the left
      v < 0 && s.current.left || // Pass origin wheel when on the right
      v > 0 && s.current.right
    ) : v < 0 && s.current.top || // Pass origin wheel when on the bottom
    v > 0 && s.current.bottom;
    return g && m ? (clearTimeout(a.current), i.current = !1) : (!m || i.current) && l(), !i.current && m;
  };
};
function Qo(e, t, n, r, i, a, l) {
  var s = De(0), f = De(null), v = De(null), g = De(!1), m = Br(t, n, r, i);
  function b(S, y) {
    $t.cancel(f.current), s.current += y, v.current = y, !m(!1, y) && (or || S.preventDefault(), f.current = $t(function() {
      var w = g.current ? 10 : 1;
      l(s.current * w), s.current = 0;
    }));
  }
  function c(S, y) {
    l(y, !0), or || S.preventDefault();
  }
  var u = De(null), d = De(null);
  function h(S) {
    if (e) {
      $t.cancel(d.current), d.current = $t(function() {
        u.current = null;
      }, 2);
      var y = S.deltaX, w = S.deltaY, P = S.shiftKey, $ = y, x = w;
      (u.current === "sx" || !u.current && P && w && !y) && ($ = w, x = 0, u.current = "sx");
      var D = Math.abs($), O = Math.abs(x);
      u.current === null && (u.current = a && D > O ? "x" : "y"), u.current === "y" ? b(S, x) : c(S, $);
    }
  }
  function p(S) {
    e && (g.current = S.detail === v.current);
  }
  return [h, p];
}
function Zo(e, t, n, r) {
  var i = o.useMemo(function() {
    return [/* @__PURE__ */ new Map(), []];
  }, [e, n.id, r]), a = re(i, 2), l = a[0], s = a[1], f = function(g) {
    var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : g, b = l.get(g), c = l.get(m);
    if (b === void 0 || c === void 0)
      for (var u = e.length, d = s.length; d < u; d += 1) {
        var h, p = e[d], S = t(p);
        l.set(S, d);
        var y = (h = n.get(S)) !== null && h !== void 0 ? h : r;
        if (s[d] = (s[d - 1] || 0) + y, S === g && (b = d), S === m && (c = d), b !== void 0 && c !== void 0)
          break;
      }
    return {
      top: s[b - 1] || 0,
      bottom: s[c]
    };
  };
  return f;
}
var ko = /* @__PURE__ */ function() {
  function e() {
    Hi(this, e), ue(this, "maps", void 0), ue(this, "id", 0), this.maps = /* @__PURE__ */ Object.create(null);
  }
  return Bi(e, [{
    key: "set",
    value: function(n, r) {
      this.maps[n] = r, this.id += 1;
    }
  }, {
    key: "get",
    value: function(n) {
      return this.maps[n];
    }
  }]), e;
}();
function ea(e, t, n) {
  var r = o.useState(0), i = re(r, 2), a = i[0], l = i[1], s = De(/* @__PURE__ */ new Map()), f = De(new ko()), v = De();
  function g() {
    $t.cancel(v.current);
  }
  function m() {
    var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    g();
    var u = function() {
      s.current.forEach(function(h, p) {
        if (h && h.offsetParent) {
          var S = Vi(h), y = S.offsetHeight;
          f.current.get(p) !== y && f.current.set(p, S.offsetHeight);
        }
      }), l(function(h) {
        return h + 1;
      });
    };
    c ? u() : v.current = $t(u);
  }
  function b(c, u) {
    var d = e(c);
    s.current.get(d), u ? (s.current.set(d, u), m()) : s.current.delete(d);
  }
  return sn(function() {
    return g;
  }, []), [b, m, f.current, a];
}
var ar = 14 / 15;
function ta(e, t, n) {
  var r = De(!1), i = De(0), a = De(0), l = De(null), s = De(null), f, v = function(c) {
    if (r.current) {
      var u = Math.ceil(c.touches[0].pageX), d = Math.ceil(c.touches[0].pageY), h = i.current - u, p = a.current - d, S = Math.abs(h) > Math.abs(p);
      S ? i.current = u : a.current = d, n(S, S ? h : p) && c.preventDefault(), clearInterval(s.current), s.current = setInterval(function() {
        S ? h *= ar : p *= ar;
        var y = Math.floor(S ? h : p);
        (!n(S, y, !0) || Math.abs(y) <= 0.1) && clearInterval(s.current);
      }, 16);
    }
  }, g = function() {
    r.current = !1, f();
  }, m = function(c) {
    f(), c.touches.length === 1 && !r.current && (r.current = !0, i.current = Math.ceil(c.touches[0].pageX), a.current = Math.ceil(c.touches[0].pageY), l.current = c.target, l.current.addEventListener("touchmove", v), l.current.addEventListener("touchend", g));
  };
  f = function() {
    l.current && (l.current.removeEventListener("touchmove", v), l.current.removeEventListener("touchend", g));
  }, Ft(function() {
    return e && t.current.addEventListener("touchstart", m), function() {
      var b;
      (b = t.current) === null || b === void 0 || b.removeEventListener("touchstart", m), f(), clearInterval(s.current);
    };
  }, [e]);
}
var lr = 10;
function na(e, t, n, r, i, a, l, s) {
  var f = o.useRef(), v = o.useState(null), g = re(v, 2), m = g[0], b = g[1];
  return Ft(function() {
    if (m && m.times < lr) {
      if (!e.current) {
        b(function(L) {
          return ce({}, L);
        });
        return;
      }
      a();
      var c = m.targetAlign, u = m.originAlign, d = m.index, h = m.offset, p = e.current.clientHeight, S = !1, y = c, w = null;
      if (p) {
        for (var P = c || u, $ = 0, x = 0, D = 0, O = Math.min(t.length - 1, d), I = 0; I <= O; I += 1) {
          var H = i(t[I]);
          x = $;
          var B = n.get(H);
          D = x + (B === void 0 ? r : B), $ = D;
        }
        for (var T = P === "top" ? h : p - h, R = O; R >= 0; R -= 1) {
          var _ = i(t[R]), Y = n.get(_);
          if (Y === void 0) {
            S = !0;
            break;
          }
          if (T -= Y, T <= 0)
            break;
        }
        switch (P) {
          case "top":
            w = x - h;
            break;
          case "bottom":
            w = D - p + h;
            break;
          default: {
            var V = e.current.scrollTop, M = V + p;
            x < V ? y = "top" : D > M && (y = "bottom");
          }
        }
        w !== null && l(w), w !== m.lastTop && (S = !0);
      }
      S && b(ce(ce({}, m), {}, {
        times: m.times + 1,
        targetAlign: y,
        lastTop: w
      }));
    } else
      process.env.NODE_ENV !== "production" && (m == null ? void 0 : m.times) === lr && lt(!1, "Seems `scrollTo` with `rc-virtual-list` reach the max limitation. Please fire issue for us. Thanks.");
  }, [m, e.current]), function(c) {
    if (c == null) {
      s();
      return;
    }
    if ($t.cancel(f.current), typeof c == "number")
      l(c);
    else if (c && Ht(c) === "object") {
      var u, d = c.align;
      "index" in c ? u = c.index : u = t.findIndex(function(S) {
        return i(S) === c.key;
      });
      var h = c.offset, p = h === void 0 ? 0 : h;
      b({
        times: 0,
        index: u,
        offset: p,
        originAlign: d
      });
    }
  };
}
function sr(e, t) {
  var n = "touches" in e ? e.touches[0] : e;
  return n[t ? "pageX" : "pageY"];
}
var On = /* @__PURE__ */ o.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.rtl, i = e.scrollOffset, a = e.scrollRange, l = e.onStartMove, s = e.onStopMove, f = e.onScroll, v = e.horizontal, g = e.spinSize, m = e.containerSize, b = e.style, c = e.thumbStyle, u = o.useState(!1), d = re(u, 2), h = d[0], p = d[1], S = o.useState(null), y = re(S, 2), w = y[0], P = y[1], $ = o.useState(null), x = re($, 2), D = x[0], O = x[1], I = !r, H = o.useRef(), B = o.useRef(), T = o.useState(!1), R = re(T, 2), _ = R[0], Y = R[1], V = o.useRef(), M = function() {
    clearTimeout(V.current), Y(!0), V.current = setTimeout(function() {
      Y(!1);
    }, 3e3);
  }, L = a - m || 0, k = m - g || 0, W = o.useMemo(function() {
    if (i === 0 || L === 0)
      return 0;
    var N = i / L;
    return N * k;
  }, [i, L, k]), Ie = function(C) {
    C.stopPropagation(), C.preventDefault();
  }, de = o.useRef({
    top: W,
    dragging: h,
    pageY: w,
    startTop: D
  });
  de.current = {
    top: W,
    dragging: h,
    pageY: w,
    startTop: D
  };
  var fe = function(C) {
    p(!0), P(sr(C, v)), O(de.current.top), l(), C.stopPropagation(), C.preventDefault();
  };
  o.useEffect(function() {
    var N = function(j) {
      j.preventDefault();
    }, C = H.current, F = B.current;
    return C.addEventListener("touchstart", N), F.addEventListener("touchstart", fe), function() {
      C.removeEventListener("touchstart", N), F.removeEventListener("touchstart", fe);
    };
  }, []);
  var me = o.useRef();
  me.current = L;
  var Ae = o.useRef();
  Ae.current = k, o.useEffect(function() {
    if (h) {
      var N, C = function(j) {
        var E = de.current, ee = E.dragging, xe = E.pageY, ae = E.startTop;
        if ($t.cancel(N), ee) {
          var ve = sr(j, v) - xe, Oe = ae;
          !I && v ? Oe -= ve : Oe += ve;
          var le = me.current, $e = Ae.current, Ce = $e ? Oe / $e : 0, be = Math.ceil(Ce * le);
          be = Math.max(be, 0), be = Math.min(be, le), N = $t(function() {
            f(be, v);
          });
        }
      }, F = function() {
        p(!1), s();
      };
      return window.addEventListener("mousemove", C), window.addEventListener("touchmove", C), window.addEventListener("mouseup", F), window.addEventListener("touchend", F), function() {
        window.removeEventListener("mousemove", C), window.removeEventListener("touchmove", C), window.removeEventListener("mouseup", F), window.removeEventListener("touchend", F), $t.cancel(N);
      };
    }
  }, [h]), o.useEffect(function() {
    M();
  }, [i]), o.useImperativeHandle(t, function() {
    return {
      delayHidden: M
    };
  });
  var ie = "".concat(n, "-scrollbar"), ye = {
    position: "absolute",
    visibility: _ ? null : "hidden"
  }, _e = {
    position: "absolute",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: 99,
    cursor: "pointer",
    userSelect: "none"
  };
  return v ? (ye.height = 8, ye.left = 0, ye.right = 0, ye.bottom = 0, _e.height = "100%", _e.width = g, I ? _e.left = W : _e.right = W) : (ye.width = 8, ye.top = 0, ye.bottom = 0, I ? ye.right = 0 : ye.left = 0, _e.width = "100%", _e.height = g, _e.top = W), /* @__PURE__ */ o.createElement("div", {
    ref: H,
    className: Se(ie, ue(ue(ue({}, "".concat(ie, "-horizontal"), v), "".concat(ie, "-vertical"), !v), "".concat(ie, "-visible"), _)),
    style: ce(ce({}, ye), b),
    onMouseDown: Ie,
    onMouseMove: M
  }, /* @__PURE__ */ o.createElement("div", {
    ref: B,
    className: Se("".concat(ie, "-thumb"), ue({}, "".concat(ie, "-thumb-moving"), h)),
    style: ce(ce({}, _e), c),
    onMouseDown: fe
  }));
});
process.env.NODE_ENV !== "production" && (On.displayName = "ScrollBar");
var ra = 20;
function cr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = e / t * e;
  return isNaN(n) && (n = 0), n = Math.max(n, ra), Math.floor(n);
}
var ia = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles"], oa = [], aa = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function la(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-virtual-list" : n, i = e.className, a = e.height, l = e.itemHeight, s = e.fullHeight, f = s === void 0 ? !0 : s, v = e.style, g = e.data, m = e.children, b = e.itemKey, c = e.virtual, u = e.direction, d = e.scrollWidth, h = e.component, p = h === void 0 ? "div" : h, S = e.onScroll, y = e.onVirtualScroll, w = e.onVisibleChange, P = e.innerProps, $ = e.extraRender, x = e.styles, D = St(e, ia), O = o.useCallback(function(X) {
    return typeof b == "function" ? b(X) : X == null ? void 0 : X[b];
  }, [b]), I = ea(O), H = re(I, 4), B = H[0], T = H[1], R = H[2], _ = H[3], Y = !!(c !== !1 && a && l), V = o.useMemo(function() {
    return Object.values(R.maps).reduce(function(X, K) {
      return X + K;
    }, 0);
  }, [R.id, R.maps]), M = Y && g && (Math.max(l * g.length, V) > a || !!d), L = u === "rtl", k = Se(r, ue({}, "".concat(r, "-rtl"), L), i), W = g || oa, Ie = De(), de = De(), fe = De(), me = Bt(0), Ae = re(me, 2), ie = Ae[0], ye = Ae[1], _e = Bt(0), N = re(_e, 2), C = N[0], F = N[1], Q = Bt(!1), j = re(Q, 2), E = j[0], ee = j[1], xe = function() {
    ee(!0);
  }, ae = function() {
    ee(!1);
  }, ve = {
    getKey: O
  };
  function Oe(X) {
    ye(function(K) {
      var se;
      typeof X == "function" ? se = X(K) : se = X;
      var Ve = Rt(se);
      return Ie.current.scrollTop = Ve, Ve;
    });
  }
  var le = De({
    start: 0,
    end: W.length
  }), $e = De(), Ce = Jo(W, O), be = re(Ce, 1), Ge = be[0];
  $e.current = Ge;
  var we = o.useMemo(function() {
    if (!Y)
      return {
        scrollHeight: void 0,
        start: 0,
        end: W.length - 1,
        offset: void 0
      };
    if (!M) {
      var X;
      return {
        scrollHeight: ((X = de.current) === null || X === void 0 ? void 0 : X.offsetHeight) || 0,
        start: 0,
        end: W.length - 1,
        offset: void 0
      };
    }
    for (var K = 0, se, Ve, vt, Pt = W.length, yt = 0; yt < Pt; yt += 1) {
      var Dt = W[yt], Et = O(Dt), zt = R.get(Et), _t = K + (zt === void 0 ? l : zt);
      _t >= ie && se === void 0 && (se = yt, Ve = K), _t > ie + a && vt === void 0 && (vt = yt), K = _t;
    }
    return se === void 0 && (se = 0, Ve = 0, vt = Math.ceil(a / l)), vt === void 0 && (vt = W.length - 1), vt = Math.min(vt + 1, W.length - 1), {
      scrollHeight: K,
      start: se,
      end: vt,
      offset: Ve
    };
  }, [M, Y, ie, W, _, a]), Te = we.scrollHeight, Pe = we.start, Le = we.end, je = we.offset;
  le.current.start = Pe, le.current.end = Le;
  var Qe = o.useState({
    width: 0,
    height: a
  }), Ze = re(Qe, 2), pe = Ze[0], Xe = Ze[1], rt = function(K) {
    Xe({
      width: K.width || K.offsetWidth,
      height: K.height || K.offsetHeight
    });
  }, Ue = De(), Fe = De(), Be = o.useMemo(function() {
    return cr(pe.width, d);
  }, [pe.width, d]), bt = o.useMemo(function() {
    return cr(pe.height, Te);
  }, [pe.height, Te]), st = Te - a, qe = De(st);
  qe.current = st;
  function Rt(X) {
    var K = X;
    return Number.isNaN(qe.current) || (K = Math.min(K, qe.current)), K = Math.max(K, 0), K;
  }
  var mt = ie <= 0, pt = ie >= st, nt = C <= 0, ct = C >= d, oe = Br(mt, pt, nt, ct), U = function() {
    return {
      x: L ? -C : C,
      y: ie
    };
  }, Me = De(U()), We = yn(function(X) {
    if (y) {
      var K = ce(ce({}, U()), X);
      (Me.current.x !== K.x || Me.current.y !== K.y) && (y(K), Me.current = K);
    }
  });
  function A(X, K) {
    var se = X;
    K ? (Cn.flushSync(function() {
      F(se);
    }), We()) : Oe(se);
  }
  function te(X) {
    var K = X.currentTarget.scrollTop;
    K !== ie && Oe(K), S == null || S(X), We();
  }
  var z = function(K) {
    var se = K, Ve = d ? d - pe.width : 0;
    return se = Math.max(se, 0), se = Math.min(se, Ve), se;
  }, q = yn(function(X, K) {
    K ? (Cn.flushSync(function() {
      F(function(se) {
        var Ve = se + (L ? -X : X);
        return z(Ve);
      });
    }), We()) : Oe(function(se) {
      var Ve = se + X;
      return Ve;
    });
  }), he = Qo(Y, mt, pt, nt, ct, !!d, q), Re = re(he, 2), it = Re[0], ke = Re[1];
  ta(Y, Ie, function(X, K, se) {
    return oe(X, K, se) ? !1 : (it({
      preventDefault: function() {
      },
      deltaX: X ? K : 0,
      deltaY: X ? 0 : K
    }), !0);
  }), Ft(function() {
    function X(se) {
      Y && se.preventDefault();
    }
    var K = Ie.current;
    return K.addEventListener("wheel", it), K.addEventListener("DOMMouseScroll", ke), K.addEventListener("MozMousePixelScroll", X), function() {
      K.removeEventListener("wheel", it), K.removeEventListener("DOMMouseScroll", ke), K.removeEventListener("MozMousePixelScroll", X);
    };
  }, [Y]), Ft(function() {
    if (d) {
      var X = z(C);
      F(X), We({
        x: X
      });
    }
  }, [pe.width, d]);
  var tt = function() {
    var K, se;
    (K = Ue.current) === null || K === void 0 || K.delayHidden(), (se = Fe.current) === null || se === void 0 || se.delayHidden();
  }, He = na(Ie, W, R, l, O, function() {
    return T(!0);
  }, Oe, tt);
  o.useImperativeHandle(t, function() {
    return {
      nativeElement: fe.current,
      getScrollInfo: U,
      scrollTo: function(K) {
        function se(Ve) {
          return Ve && Ht(Ve) === "object" && ("left" in Ve || "top" in Ve);
        }
        se(K) ? (K.left !== void 0 && F(z(K.left)), He(K.top)) : He(K);
      }
    };
  }), Ft(function() {
    if (w) {
      var X = W.slice(Pe, Le + 1);
      w(X, W);
    }
  }, [Pe, Le, W]);
  var Ye = Zo(W, O, R, l), ot = $ == null ? void 0 : $({
    start: Pe,
    end: Le,
    virtual: M,
    offsetX: C,
    offsetY: je,
    rtl: L,
    getSize: Ye
  }), Vt = qo(W, Pe, Le, d, C, B, m, ve), wt = null;
  a && (wt = ce(ue({}, f ? "height" : "maxHeight", a), aa), Y && (wt.overflowY = "hidden", d && (wt.overflowX = "hidden"), E && (wt.pointerEvents = "none")));
  var gt = {};
  return L && (gt.dir = "rtl"), /* @__PURE__ */ o.createElement("div", ze({
    ref: fe,
    style: ce(ce({}, v), {}, {
      position: "relative"
    }),
    className: k
  }, gt, D), /* @__PURE__ */ o.createElement(dn, {
    onResize: rt
  }, /* @__PURE__ */ o.createElement(p, {
    className: "".concat(r, "-holder"),
    style: wt,
    ref: Ie,
    onScroll: te,
    onMouseEnter: tt
  }, /* @__PURE__ */ o.createElement(jr, {
    prefixCls: r,
    height: Te,
    offsetX: C,
    offsetY: je,
    scrollWidth: d,
    onInnerResize: T,
    ref: de,
    innerProps: P,
    rtl: L,
    extra: ot
  }, Vt))), M && Te > a && /* @__PURE__ */ o.createElement(On, {
    ref: Ue,
    prefixCls: r,
    scrollOffset: ie,
    scrollRange: Te,
    rtl: L,
    onScroll: A,
    onStartMove: xe,
    onStopMove: ae,
    spinSize: bt,
    containerSize: pe.height,
    style: x == null ? void 0 : x.verticalScrollBar,
    thumbStyle: x == null ? void 0 : x.verticalScrollBarThumb
  }), M && d > pe.width && /* @__PURE__ */ o.createElement(On, {
    ref: Fe,
    prefixCls: r,
    scrollOffset: C,
    scrollRange: d,
    rtl: L,
    onScroll: A,
    onStartMove: xe,
    onStopMove: ae,
    spinSize: Be,
    containerSize: pe.width,
    horizontal: !0,
    style: x == null ? void 0 : x.horizontalScrollBar,
    thumbStyle: x == null ? void 0 : x.horizontalScrollBarThumb
  }));
}
var Vn = /* @__PURE__ */ o.forwardRef(la);
Vn.displayName = "List";
function sa() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var ca = ["disabled", "title", "children", "style", "className"];
function ur(e) {
  return typeof e == "string" || typeof e == "number";
}
var ua = function(t, n) {
  var r = go(), i = r.prefixCls, a = r.id, l = r.open, s = r.multiple, f = r.mode, v = r.searchValue, g = r.toggleOpen, m = r.notFoundContent, b = r.onPopupScroll, c = o.useContext(jn), u = c.maxCount, d = c.flattenOptions, h = c.onActiveValue, p = c.defaultActiveFirstOption, S = c.onSelect, y = c.menuItemSelectedIcon, w = c.rawValues, P = c.fieldNames, $ = c.virtual, x = c.direction, D = c.listHeight, O = c.listItemHeight, I = c.optionRender, H = "".concat(i, "-item"), B = Ai(function() {
    return d;
  }, [l, d], function(N, C) {
    return C[0] && N[1] !== C[1];
  }), T = o.useRef(null), R = o.useMemo(function() {
    return s && En(u) && (w == null ? void 0 : w.size) >= u;
  }, [s, u, w == null ? void 0 : w.size]), _ = function(C) {
    C.preventDefault();
  }, Y = function(C) {
    var F;
    (F = T.current) === null || F === void 0 || F.scrollTo(typeof C == "number" ? {
      index: C
    } : C);
  }, V = function(C) {
    for (var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, Q = B.length, j = 0; j < Q; j += 1) {
      var E = (C + j * F + Q) % Q, ee = B[E] || {}, xe = ee.group, ae = ee.data;
      if (!xe && !(ae != null && ae.disabled) && !R)
        return E;
    }
    return -1;
  }, M = o.useState(function() {
    return V(0);
  }), L = re(M, 2), k = L[0], W = L[1], Ie = function(C) {
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    W(C);
    var Q = {
      source: F ? "keyboard" : "mouse"
    }, j = B[C];
    if (!j) {
      h(null, -1, Q);
      return;
    }
    h(j.value, C, Q);
  };
  sn(function() {
    Ie(p !== !1 ? V(0) : -1);
  }, [B.length, v]);
  var de = o.useCallback(function(N) {
    return w.has(N) && f !== "combobox";
  }, [f, ft(w).toString(), w.size]);
  sn(function() {
    var N = setTimeout(function() {
      if (!s && l && w.size === 1) {
        var F = Array.from(w)[0], Q = B.findIndex(function(j) {
          var E = j.data;
          return E.value === F;
        });
        Q !== -1 && (Ie(Q), Y(Q));
      }
    });
    if (l) {
      var C;
      (C = T.current) === null || C === void 0 || C.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(N);
    };
  }, [l, v]);
  var fe = function(C) {
    C !== void 0 && S(C, {
      selected: !w.has(C)
    }), s || g(!1);
  };
  if (o.useImperativeHandle(n, function() {
    return {
      onKeyDown: function(C) {
        var F = C.which, Q = C.ctrlKey;
        switch (F) {
          case ne.N:
          case ne.P:
          case ne.UP:
          case ne.DOWN: {
            var j = 0;
            if (F === ne.UP ? j = -1 : F === ne.DOWN ? j = 1 : sa() && Q && (F === ne.N ? j = 1 : F === ne.P && (j = -1)), j !== 0) {
              var E = V(k + j, j);
              Y(E), Ie(E, !0);
            }
            break;
          }
          case ne.ENTER: {
            var ee, xe = B[k];
            xe && !(xe != null && (ee = xe.data) !== null && ee !== void 0 && ee.disabled) && !R ? fe(xe.value) : fe(void 0), l && C.preventDefault();
            break;
          }
          case ne.ESC:
            g(!1), l && C.stopPropagation();
        }
      },
      onKeyUp: function() {
      },
      scrollTo: function(C) {
        Y(C);
      }
    };
  }), B.length === 0)
    return /* @__PURE__ */ o.createElement("div", {
      role: "listbox",
      id: "".concat(a, "_list"),
      className: "".concat(H, "-empty"),
      onMouseDown: _
    }, m);
  var me = Object.keys(P).map(function(N) {
    return P[N];
  }), Ae = function(C) {
    return C.label;
  };
  function ie(N, C) {
    var F = N.group;
    return {
      role: F ? "presentation" : "option",
      id: "".concat(a, "_list_").concat(C)
    };
  }
  var ye = function(C) {
    var F = B[C];
    if (!F)
      return null;
    var Q = F.data || {}, j = Q.value, E = F.group, ee = tn(Q, !0), xe = Ae(F);
    return F ? /* @__PURE__ */ o.createElement("div", ze({
      "aria-label": typeof xe == "string" && !E ? xe : null
    }, ee, {
      key: C
    }, ie(F, C), {
      "aria-selected": de(j)
    }), j) : null;
  }, _e = {
    role: "listbox",
    id: "".concat(a, "_list")
  };
  return /* @__PURE__ */ o.createElement(o.Fragment, null, $ && /* @__PURE__ */ o.createElement("div", ze({}, _e, {
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }), ye(k - 1), ye(k), ye(k + 1)), /* @__PURE__ */ o.createElement(Vn, {
    itemKey: "key",
    ref: T,
    data: B,
    height: D,
    itemHeight: O,
    fullHeight: !1,
    onMouseDown: _,
    onScroll: b,
    virtual: $,
    direction: x,
    innerProps: $ ? null : _e
  }, function(N, C) {
    var F = N.group, Q = N.groupOption, j = N.data, E = N.label, ee = N.value, xe = j.key;
    if (F) {
      var ae, ve = (ae = j.title) !== null && ae !== void 0 ? ae : ur(E) ? E.toString() : void 0;
      return /* @__PURE__ */ o.createElement("div", {
        className: Se(H, "".concat(H, "-group"), j.className),
        title: ve
      }, E !== void 0 ? E : xe);
    }
    var Oe = j.disabled, le = j.title;
    j.children;
    var $e = j.style, Ce = j.className, be = St(j, ca), Ge = Dn(be, me), we = de(ee), Te = Oe || !we && R, Pe = "".concat(H, "-option"), Le = Se(H, Pe, Ce, ue(ue(ue(ue({}, "".concat(Pe, "-grouped"), Q), "".concat(Pe, "-active"), k === C && !Te), "".concat(Pe, "-disabled"), Te), "".concat(Pe, "-selected"), we)), je = Ae(N), Qe = !y || typeof y == "function" || we, Ze = typeof je == "number" ? je : je || ee, pe = ur(Ze) ? Ze.toString() : void 0;
    return le !== void 0 && (pe = le), /* @__PURE__ */ o.createElement("div", ze({}, tn(Ge), $ ? {} : ie(N, C), {
      "aria-selected": we,
      className: Le,
      title: pe,
      onMouseMove: function() {
        k === C || Te || Ie(C);
      },
      onClick: function() {
        Te || fe(ee);
      },
      style: $e
    }), /* @__PURE__ */ o.createElement("div", {
      className: "".concat(Pe, "-content")
    }, typeof I == "function" ? I(N, {
      index: C
    }) : Ze), /* @__PURE__ */ o.isValidElement(y) || we, Qe && /* @__PURE__ */ o.createElement(mn, {
      className: "".concat(H, "-option-state"),
      customizeIcon: y,
      customizeIconProps: {
        value: ee,
        disabled: Te,
        isSelected: we
      }
    }, we ? "✓" : null));
  }));
}, Hr = /* @__PURE__ */ o.forwardRef(ua);
process.env.NODE_ENV !== "production" && (Hr.displayName = "OptionList");
const da = function(e, t) {
  var n = o.useRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  }), r = o.useMemo(function() {
    var a = n.current, l = a.values, s = a.options, f = e.map(function(m) {
      if (m.label === void 0) {
        var b;
        return ce(ce({}, m), {}, {
          label: (b = l.get(m.value)) === null || b === void 0 ? void 0 : b.label
        });
      }
      return m;
    }), v = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map();
    return f.forEach(function(m) {
      v.set(m.value, m), g.set(m.value, t.get(m.value) || s.get(m.value));
    }), n.current.values = v, n.current.options = g, f;
  }, [e, t]), i = o.useCallback(function(a) {
    return t.get(a) || n.current.options.get(a);
  }, [t]);
  return [r, i];
};
function vn(e, t) {
  return Ln(e).join("").toUpperCase().includes(t);
}
const fa = function(e, t, n, r, i) {
  return o.useMemo(function() {
    if (!n || r === !1)
      return e;
    var a = t.options, l = t.label, s = t.value, f = [], v = typeof r == "function", g = n.toUpperCase(), m = v ? r : function(c, u) {
      return i ? vn(u[i], g) : u[a] ? vn(u[l !== "children" ? l : "label"], g) : vn(u[s], g);
    }, b = v ? function(c) {
      return In(c);
    } : function(c) {
      return c;
    };
    return e.forEach(function(c) {
      if (c[a]) {
        var u = m(n, b(c));
        if (u)
          f.push(c);
        else {
          var d = c[a].filter(function(h) {
            return m(n, b(h));
          });
          d.length && f.push(ce(ce({}, c), {}, ue({}, a, d)));
        }
        return;
      }
      m(n, b(c)) && f.push(c);
    }), f;
  }, [e, r, i, n, t]);
};
var dr = 0, ma = process.env.NODE_ENV !== "test" && gi();
function ga() {
  var e;
  return ma ? (e = dr, dr += 1) : e = "TEST_OR_SSR", e;
}
function va(e) {
  var t = o.useState(), n = re(t, 2), r = n[0], i = n[1];
  return o.useEffect(function() {
    i("rc_select_".concat(ga()));
  }, []), e || r;
}
var pa = ["children", "value"], ha = ["children"];
function Sa(e) {
  var t = e, n = t.key, r = t.props, i = r.children, a = r.value, l = St(r, pa);
  return ce({
    key: n,
    value: a !== void 0 ? a : n,
    children: i
  }, l);
}
function An(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return bn(e).map(function(n, r) {
    if (!/* @__PURE__ */ o.isValidElement(n) || !n.type)
      return null;
    var i = n, a = i.type.isSelectOptGroup, l = i.key, s = i.props, f = s.children, v = St(s, ha);
    return t || !a ? Sa(n) : ce(ce({
      key: "__RC_SELECT_GRP__".concat(l === null ? r : l, "__"),
      label: l
    }, v), {}, {
      options: An(f)
    });
  }).filter(function(n) {
    return n;
  });
}
var ba = function(t, n, r, i, a) {
  return o.useMemo(function() {
    var l = t, s = !t;
    s && (l = An(n));
    var f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), g = function(c, u, d) {
      d && typeof d == "string" && c.set(u[d], u);
    }, m = function b(c) {
      for (var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, d = 0; d < c.length; d += 1) {
        var h = c[d];
        !h[r.options] || u ? (f.set(h[r.value], h), g(v, h, r.label), g(v, h, i), g(v, h, a)) : b(h[r.options], !0);
      }
    };
    return m(l), {
      options: l,
      valueOptions: f,
      labelOptions: v
    };
  }, [t, n, r, i, a]);
};
function fr(e) {
  var t = o.useRef();
  t.current = e;
  var n = o.useCallback(function() {
    return t.current.apply(t, arguments);
  }, []);
  return n;
}
function ya(e) {
  var t = e.mode, n = e.options, r = e.children, i = e.backfill, a = e.allowClear, l = e.placeholder, s = e.getInputElement, f = e.showSearch, v = e.onSearch, g = e.defaultOpen, m = e.autoFocus, b = e.labelInValue, c = e.value, u = e.inputValue, d = e.optionLabelProp, h = un(t), p = f !== void 0 ? f : h || t === "combobox", S = n || An(r);
  if (lt(t !== "tags" || S.every(function($) {
    return !$.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), t === "tags" || t === "combobox") {
    var y = S.some(function($) {
      return $.options ? $.options.some(function(x) {
        return typeof ("value" in x ? x.value : x.key) == "number";
      }) : typeof ("value" in $ ? $.value : $.key) == "number";
    });
    lt(!y, "`value` of Option should not use number type when `mode` is `tags` or `combobox`.");
  }
  if (lt(t !== "combobox" || !d, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), lt(t === "combobox" || !i, "`backfill` only works with `combobox` mode."), lt(t === "combobox" || !s, "`getInputElement` only work with `combobox` mode."), Un(t !== "combobox" || !s || !a || !l, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), v && !p && t !== "combobox" && t !== "tags" && lt(!1, "`onSearch` should work with `showSearch` instead of use alone."), Un(!g || m, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed."), c != null) {
    var w = Ln(c);
    lt(!b || w.every(function($) {
      return Ht($) === "object" && ("key" in $ || "value" in $);
    }), "`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`"), lt(!h || Array.isArray(c), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (r) {
    var P = null;
    bn(r).some(function($) {
      if (!/* @__PURE__ */ o.isValidElement($) || !$.type)
        return !1;
      var x = $, D = x.type;
      if (D.isSelectOption)
        return !1;
      if (D.isSelectOptGroup) {
        var O = bn($.props.children).every(function(I) {
          return !/* @__PURE__ */ o.isValidElement(I) || !$.type || I.type.isSelectOption ? !0 : (P = I.type, !1);
        });
        return !O;
      }
      return P = D, !0;
    }), P && lt(!1, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(P.displayName || P.name || P, "`.")), lt(u === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function Ca(e, t) {
  if (e) {
    var n = function r(i) {
      for (var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, l = 0; l < i.length; l++) {
        var s = i[l];
        if (s[t == null ? void 0 : t.value] === null)
          return lt(!1, "`value` in Select options should not be `null`."), !0;
        if (!a && Array.isArray(s[t == null ? void 0 : t.options]) && r(s[t == null ? void 0 : t.options], !0))
          break;
      }
    };
    n(e);
  }
}
var $a = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "optionRender", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "labelRender", "value", "defaultValue", "labelInValue", "onChange", "maxCount"], xa = ["inputValue"];
function wa(e) {
  return !e || Ht(e) !== "object";
}
var Vr = /* @__PURE__ */ o.forwardRef(function(e, t) {
  var n = e.id, r = e.mode, i = e.prefixCls, a = i === void 0 ? "rc-select" : i, l = e.backfill, s = e.fieldNames, f = e.inputValue, v = e.searchValue, g = e.onSearch, m = e.autoClearSearchValue, b = m === void 0 ? !0 : m, c = e.onSelect, u = e.onDeselect, d = e.dropdownMatchSelectWidth, h = d === void 0 ? !0 : d, p = e.filterOption, S = e.filterSort, y = e.optionFilterProp, w = e.optionLabelProp, P = e.options, $ = e.optionRender, x = e.children, D = e.defaultActiveFirstOption, O = e.menuItemSelectedIcon, I = e.virtual, H = e.direction, B = e.listHeight, T = B === void 0 ? 200 : B, R = e.listItemHeight, _ = R === void 0 ? 20 : R, Y = e.labelRender, V = e.value, M = e.defaultValue, L = e.labelInValue, k = e.onChange, W = e.maxCount, Ie = St(e, $a), de = va(n), fe = un(r), me = !!(!P && x), Ae = o.useMemo(function() {
    return p === void 0 && r === "combobox" ? !1 : p;
  }, [p, r]), ie = o.useMemo(
    function() {
      return Tr(s, me);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      // We stringify fieldNames to avoid unnecessary re-renders.
      JSON.stringify(s),
      me
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  ), ye = kt("", {
    value: v !== void 0 ? v : f,
    postState: function(te) {
      return te || "";
    }
  }), _e = re(ye, 2), N = _e[0], C = _e[1], F = ba(P, x, ie, y, w), Q = F.valueOptions, j = F.labelOptions, E = F.options, ee = o.useCallback(function(A) {
    var te = Ln(A);
    return te.map(function(z) {
      var q, he, Re, it, ke;
      if (wa(z))
        q = z;
      else {
        var tt;
        Re = z.key, he = z.label, q = (tt = z.value) !== null && tt !== void 0 ? tt : Re;
      }
      var He = Q.get(q);
      if (He) {
        var Ye;
        if (he === void 0 && (he = He == null ? void 0 : He[w || ie.label]), Re === void 0 && (Re = (Ye = He == null ? void 0 : He.key) !== null && Ye !== void 0 ? Ye : q), it = He == null ? void 0 : He.disabled, ke = He == null ? void 0 : He.title, process.env.NODE_ENV !== "production" && !w) {
          var ot = He == null ? void 0 : He[ie.label];
          ot !== void 0 && !/* @__PURE__ */ o.isValidElement(ot) && !/* @__PURE__ */ o.isValidElement(he) && ot !== he && lt(!1, "`label` of `value` is not same as `label` in Select options.");
        }
      }
      return {
        label: he,
        value: q,
        key: Re,
        disabled: it,
        title: ke
      };
    });
  }, [ie, w, Q]), xe = kt(M, {
    value: V
  }), ae = re(xe, 2), ve = ae[0], Oe = ae[1], le = o.useMemo(function() {
    var A, te = fe && ve === null ? [] : ve, z = ee(te);
    return r === "combobox" && zo((A = z[0]) === null || A === void 0 ? void 0 : A.value) ? [] : z;
  }, [ve, ee, r, fe]), $e = da(le, Q), Ce = re($e, 2), be = Ce[0], Ge = Ce[1], we = o.useMemo(function() {
    if (!r && be.length === 1) {
      var A = be[0];
      if (A.value === null && (A.label === null || A.label === void 0))
        return [];
    }
    return be.map(function(te) {
      var z;
      return ce(ce({}, te), {}, {
        label: (z = typeof Y == "function" ? Y(te) : te.label) !== null && z !== void 0 ? z : te.value
      });
    });
  }, [r, be, Y]), Te = o.useMemo(function() {
    return new Set(be.map(function(A) {
      return A.value;
    }));
  }, [be]);
  o.useEffect(function() {
    if (r === "combobox") {
      var A, te = (A = be[0]) === null || A === void 0 ? void 0 : A.value;
      C(Do(te) ? String(te) : "");
    }
  }, [be]);
  var Pe = fr(function(A, te) {
    var z = te ?? A;
    return ue(ue({}, ie.value, A), ie.label, z);
  }), Le = o.useMemo(function() {
    if (r !== "tags")
      return E;
    var A = ft(E), te = function(q) {
      return Q.has(q);
    };
    return ft(be).sort(function(z, q) {
      return z.value < q.value ? -1 : 1;
    }).forEach(function(z) {
      var q = z.value;
      te(q) || A.push(Pe(q, z.label));
    }), A;
  }, [Pe, E, Q, be, r]), je = fa(Le, ie, N, Ae, y), Qe = o.useMemo(function() {
    return r !== "tags" || !N || je.some(function(A) {
      return A[y || "value"] === N;
    }) || je.some(function(A) {
      return A[ie.value] === N;
    }) ? je : [Pe(N)].concat(ft(je));
  }, [Pe, y, r, je, N, ie]), Ze = o.useMemo(function() {
    return S ? ft(Qe).sort(function(A, te) {
      return S(A, te);
    }) : Qe;
  }, [Qe, S]), pe = o.useMemo(function() {
    return Fo(Ze, {
      fieldNames: ie,
      childrenAsData: me
    });
  }, [Ze, ie, me]), Xe = function(te) {
    var z = ee(te);
    if (Oe(z), k && // Trigger event only when value changed
    (z.length !== be.length || z.some(function(Re, it) {
      var ke;
      return ((ke = be[it]) === null || ke === void 0 ? void 0 : ke.value) !== (Re == null ? void 0 : Re.value);
    }))) {
      var q = L ? z : z.map(function(Re) {
        return Re.value;
      }), he = z.map(function(Re) {
        return In(Ge(Re.value));
      });
      k(
        // Value
        fe ? q : q[0],
        // Option
        fe ? he : he[0]
      );
    }
  }, rt = o.useState(null), Ue = re(rt, 2), Fe = Ue[0], Be = Ue[1], bt = o.useState(0), st = re(bt, 2), qe = st[0], Rt = st[1], mt = D !== void 0 ? D : r !== "combobox", pt = o.useCallback(function(A, te) {
    var z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, q = z.source, he = q === void 0 ? "keyboard" : q;
    Rt(te), l && r === "combobox" && A !== null && he === "keyboard" && Be(String(A));
  }, [l, r]), nt = function(te, z, q) {
    var he = function() {
      var gt, X = Ge(te);
      return [L ? {
        label: X == null ? void 0 : X[ie.label],
        value: te,
        key: (gt = X == null ? void 0 : X.key) !== null && gt !== void 0 ? gt : te
      } : te, In(X)];
    };
    if (z && c) {
      var Re = he(), it = re(Re, 2), ke = it[0], tt = it[1];
      c(ke, tt);
    } else if (!z && u && q !== "clear") {
      var He = he(), Ye = re(He, 2), ot = Ye[0], Vt = Ye[1];
      u(ot, Vt);
    }
  }, ct = fr(function(A, te) {
    var z, q = fe ? te.selected : !0;
    q ? z = fe ? [].concat(ft(be), [A]) : [A] : z = be.filter(function(he) {
      return he.value !== A;
    }), Xe(z), nt(A, q), r === "combobox" ? Be("") : (!un || b) && (C(""), Be(""));
  }), oe = function(te, z) {
    Xe(te);
    var q = z.type, he = z.values;
    (q === "remove" || q === "clear") && he.forEach(function(Re) {
      nt(Re.value, !1, q);
    });
  }, U = function(te, z) {
    if (C(te), Be(null), z.source === "submit") {
      var q = (te || "").trim();
      if (q) {
        var he = Array.from(new Set([].concat(ft(Te), [q])));
        Xe(he), nt(q, !0), C("");
      }
      return;
    }
    z.source !== "blur" && (r === "combobox" && Xe(te), g == null || g(te));
  }, Me = function(te) {
    var z = te;
    r !== "tags" && (z = te.map(function(he) {
      var Re = j.get(he);
      return Re == null ? void 0 : Re.value;
    }).filter(function(he) {
      return he !== void 0;
    }));
    var q = Array.from(new Set([].concat(ft(Te), ft(z))));
    Xe(q), q.forEach(function(he) {
      nt(he, !0);
    });
  }, We = o.useMemo(function() {
    var A = I !== !1 && h !== !1;
    return ce(ce({}, F), {}, {
      flattenOptions: pe,
      onActiveValue: pt,
      defaultActiveFirstOption: mt,
      onSelect: ct,
      menuItemSelectedIcon: O,
      rawValues: Te,
      fieldNames: ie,
      virtual: A,
      direction: H,
      listHeight: T,
      listItemHeight: _,
      childrenAsData: me,
      maxCount: W,
      optionRender: $
    });
  }, [W, F, pe, pt, mt, ct, O, Te, ie, I, h, H, T, _, me, $]);
  return process.env.NODE_ENV !== "production" && (ya(e), Ca(E, ie)), /* @__PURE__ */ o.createElement(jn.Provider, {
    value: We
  }, /* @__PURE__ */ o.createElement(Lr, ze({}, Ie, {
    // >>> MISC
    id: de,
    prefixCls: a,
    ref: t,
    omitDomProps: xa,
    mode: r,
    displayValues: we,
    onDisplayValuesChange: oe,
    direction: H,
    searchValue: N,
    onSearch: U,
    autoClearSearchValue: b,
    onSearchSplit: Me,
    dropdownMatchSelectWidth: h,
    OptionList: Hr,
    emptyOptions: !pe.length,
    activeValue: Fe,
    activeDescendantId: "".concat(de, "_list_").concat(qe)
  })));
});
process.env.NODE_ENV !== "production" && (Vr.displayName = "Select");
var Fn = Vr;
Fn.Option = Hn;
Fn.OptGroup = Bn;
const Ar = () => {
  const [, e] = fn(), n = new an(e.colorBgBase).toHsl().l < 0.5 ? {
    opacity: 0.65
  } : {};
  return /* @__PURE__ */ o.createElement("svg", {
    style: n,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ o.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ o.createElement("g", {
    transform: "translate(24 31.67)"
  }, /* @__PURE__ */ o.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /* @__PURE__ */ o.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), /* @__PURE__ */ o.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), /* @__PURE__ */ o.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), /* @__PURE__ */ o.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), /* @__PURE__ */ o.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), /* @__PURE__ */ o.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, /* @__PURE__ */ o.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /* @__PURE__ */ o.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
process.env.NODE_ENV !== "production" && (Ar.displayName = "EmptyImage");
const Fr = () => {
  const [, e] = fn(), {
    colorFill: t,
    colorFillTertiary: n,
    colorFillQuaternary: r,
    colorBgContainer: i
  } = e, {
    borderColor: a,
    shadowColor: l,
    contentColor: s
  } = wn(() => ({
    borderColor: new an(t).onBackground(i).toHexShortString(),
    shadowColor: new an(n).onBackground(i).toHexShortString(),
    contentColor: new an(r).onBackground(i).toHexShortString()
  }), [t, n, r, i]);
  return /* @__PURE__ */ o.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ o.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ o.createElement("ellipse", {
    fill: l,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /* @__PURE__ */ o.createElement("g", {
    fillRule: "nonzero",
    stroke: a
  }, /* @__PURE__ */ o.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /* @__PURE__ */ o.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: s
  }))));
};
process.env.NODE_ENV !== "production" && (Fr.displayName = "SimpleImage");
const Ea = (e) => {
  const {
    componentCls: t,
    margin: n,
    marginXS: r,
    marginXL: i,
    fontSize: a,
    lineHeight: l
  } = e;
  return {
    [t]: {
      marginInline: r,
      fontSize: a,
      lineHeight: l,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-image`]: {
        height: e.emptyImgHeight,
        marginBottom: r,
        opacity: e.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          maxWidth: "100%",
          height: "100%",
          margin: "auto"
        }
      },
      [`${t}-description`]: {
        color: e.colorText
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-footer`]: {
        marginTop: n
      },
      "&-normal": {
        marginBlock: i,
        color: e.colorTextDescription,
        [`${t}-description`]: {
          color: e.colorTextDescription
        },
        [`${t}-image`]: {
          height: e.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: r,
        color: e.colorTextDescription,
        [`${t}-image`]: {
          height: e.emptyImgHeightSM
        }
      }
    }
  };
}, Ia = Wt("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n,
    calc: r
  } = e, i = Nt(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: r(n).mul(2.5).equal(),
    emptyImgHeightMD: n,
    emptyImgHeightSM: r(n).mul(0.875).equal()
  });
  return [Ea(i)];
});
var Oa = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
const Wr = /* @__PURE__ */ o.createElement(Ar, null), Kr = /* @__PURE__ */ o.createElement(Fr, null), ht = (e) => {
  var {
    className: t,
    rootClassName: n,
    prefixCls: r,
    image: i = Wr,
    description: a,
    children: l,
    imageStyle: s,
    style: f
  } = e, v = Oa(e, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style"]);
  const {
    getPrefixCls: g,
    direction: m,
    empty: b
  } = o.useContext(xt), c = g("empty", r), [u, d, h] = Ia(c), [p] = yr("Empty"), S = typeof a < "u" ? a : p == null ? void 0 : p.description, y = typeof S == "string" ? S : "empty";
  let w = null;
  return typeof i == "string" ? w = /* @__PURE__ */ o.createElement("img", {
    alt: y,
    src: i
  }) : w = i, u(/* @__PURE__ */ o.createElement("div", Object.assign({
    className: Se(d, h, c, b == null ? void 0 : b.className, {
      [`${c}-normal`]: i === Kr,
      [`${c}-rtl`]: m === "rtl"
    }, t, n),
    style: Object.assign(Object.assign({}, b == null ? void 0 : b.style), f)
  }, v), /* @__PURE__ */ o.createElement("div", {
    className: `${c}-image`,
    style: s
  }, w), S && /* @__PURE__ */ o.createElement("div", {
    className: `${c}-description`
  }, S), l && /* @__PURE__ */ o.createElement("div", {
    className: `${c}-footer`
  }, l)));
};
ht.PRESENTED_IMAGE_DEFAULT = Wr;
ht.PRESENTED_IMAGE_SIMPLE = Kr;
process.env.NODE_ENV !== "production" && (ht.displayName = "Empty");
const Xr = (e) => {
  const {
    componentName: t
  } = e, {
    getPrefixCls: n
  } = en(xt), r = n("empty");
  switch (t) {
    case "Table":
    case "List":
      return /* @__PURE__ */ G.createElement(ht, {
        image: ht.PRESENTED_IMAGE_SIMPLE
      });
    case "Select":
    case "TreeSelect":
    case "Cascader":
    case "Transfer":
    case "Mentions":
      return /* @__PURE__ */ G.createElement(ht, {
        image: ht.PRESENTED_IMAGE_SIMPLE,
        className: `${r}-small`
      });
    default:
      return /* @__PURE__ */ G.createElement(ht, null);
  }
}, Na = (e) => {
  const n = {
    overflow: {
      adjustX: !0,
      adjustY: !0,
      shiftY: !0
    },
    htmlRegion: e === "scroll" ? "scroll" : "visible",
    dynamicInset: !0
  };
  return {
    bottomLeft: Object.assign(Object.assign({}, n), {
      points: ["tl", "bl"],
      offset: [0, 4]
    }),
    bottomRight: Object.assign(Object.assign({}, n), {
      points: ["tr", "br"],
      offset: [0, 4]
    }),
    topLeft: Object.assign(Object.assign({}, n), {
      points: ["bl", "tl"],
      offset: [0, -4]
    }),
    topRight: Object.assign(Object.assign({}, n), {
      points: ["br", "tr"],
      offset: [0, -4]
    })
  };
};
function Ma(e, t) {
  return e || Na(t);
}
const mr = (e) => {
  const {
    optionHeight: t,
    optionFontSize: n,
    optionLineHeight: r,
    optionPadding: i
  } = e;
  return {
    position: "relative",
    display: "block",
    minHeight: t,
    padding: i,
    color: e.colorText,
    fontWeight: "normal",
    fontSize: n,
    lineHeight: r,
    boxSizing: "border-box"
  };
}, Ra = (e) => {
  const {
    antCls: t,
    componentCls: n
  } = e, r = `${n}-item`, i = `&${t}-slide-up-enter${t}-slide-up-enter-active`, a = `&${t}-slide-up-appear${t}-slide-up-appear-active`, l = `&${t}-slide-up-leave${t}-slide-up-leave-active`, s = `${n}-dropdown-placement-`;
  return [
    {
      [`${n}-dropdown`]: Object.assign(Object.assign({}, Jt(e)), {
        position: "absolute",
        top: -9999,
        zIndex: e.zIndexPopup,
        boxSizing: "border-box",
        padding: e.paddingXXS,
        overflow: "hidden",
        fontSize: e.fontSize,
        // Fix select render lag of long text in chrome
        // https://github.com/ant-design/ant-design/issues/11456
        // https://github.com/ant-design/ant-design/issues/11843
        fontVariant: "initial",
        backgroundColor: e.colorBgElevated,
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        [`
          ${i}${s}bottomLeft,
          ${a}${s}bottomLeft
        `]: {
          animationName: xr
        },
        [`
          ${i}${s}topLeft,
          ${a}${s}topLeft,
          ${i}${s}topRight,
          ${a}${s}topRight
        `]: {
          animationName: Er
        },
        [`${l}${s}bottomLeft`]: {
          animationName: wr
        },
        [`
          ${l}${s}topLeft,
          ${l}${s}topRight
        `]: {
          animationName: Ir
        },
        "&-hidden": {
          display: "none"
        },
        [`${r}`]: Object.assign(Object.assign({}, mr(e)), {
          cursor: "pointer",
          transition: `background ${e.motionDurationSlow} ease`,
          borderRadius: e.borderRadiusSM,
          // =========== Group ============
          "&-group": {
            color: e.colorTextDescription,
            fontSize: e.fontSizeSM,
            cursor: "default"
          },
          // =========== Option ===========
          "&-option": {
            display: "flex",
            "&-content": Object.assign({
              flex: "auto"
            }, $n),
            "&-state": {
              flex: "none",
              display: "flex",
              alignItems: "center"
            },
            [`&-active:not(${r}-option-disabled)`]: {
              backgroundColor: e.optionActiveBg
            },
            [`&-selected:not(${r}-option-disabled)`]: {
              color: e.optionSelectedColor,
              fontWeight: e.optionSelectedFontWeight,
              backgroundColor: e.optionSelectedBg,
              [`${r}-option-state`]: {
                color: e.colorPrimary
              },
              [`&:has(+ ${r}-option-selected:not(${r}-option-disabled))`]: {
                borderEndStartRadius: 0,
                borderEndEndRadius: 0,
                [`& + ${r}-option-selected:not(${r}-option-disabled)`]: {
                  borderStartStartRadius: 0,
                  borderStartEndRadius: 0
                }
              }
            },
            "&-disabled": {
              [`&${r}-option-selected`]: {
                backgroundColor: e.colorBgContainerDisabled
              },
              color: e.colorTextDisabled,
              cursor: "not-allowed"
            },
            "&-grouped": {
              paddingInlineStart: e.calc(e.controlPaddingHorizontal).mul(2).equal()
            }
          },
          "&-empty": Object.assign(Object.assign({}, mr(e)), {
            color: e.colorTextDisabled
          })
        }),
        // =========================== RTL ===========================
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Follow code may reuse in other components
    tr(e, "slide-up"),
    tr(e, "slide-down"),
    er(e, "move-up"),
    er(e, "move-down")
  ];
}, Pa = (e) => {
  const {
    multipleSelectItemHeight: t,
    paddingXXS: n,
    lineWidth: r,
    INTERNAL_FIXED_ITEM_MARGIN: i
  } = e, a = e.max(e.calc(n).sub(r).equal(), 0), l = e.max(e.calc(a).sub(i).equal(), 0);
  return {
    basePadding: a,
    containerPadding: l,
    itemHeight: J(t),
    itemLineHeight: J(e.calc(t).sub(e.calc(e.lineWidth).mul(2)).equal())
  };
}, Da = (e) => {
  const {
    multipleSelectItemHeight: t,
    selectHeight: n,
    lineWidth: r
  } = e;
  return e.calc(n).sub(t).div(2).sub(r).equal();
}, za = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    borderRadiusSM: r,
    motionDurationSlow: i,
    paddingXS: a,
    multipleItemColorDisabled: l,
    multipleItemBorderColorDisabled: s,
    colorIcon: f,
    colorIconHover: v,
    INTERNAL_FIXED_ITEM_MARGIN: g
  } = e;
  return {
    /**
     * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
     * may update to redesign with its align logic.
     */
    // =========================== Overflow ===========================
    [`${t}-selection-overflow`]: {
      position: "relative",
      display: "flex",
      flex: "auto",
      flexWrap: "wrap",
      maxWidth: "100%",
      "&-item": {
        flex: "none",
        alignSelf: "center",
        maxWidth: "100%",
        display: "inline-flex"
      },
      // ======================== Selections ==========================
      [`${t}-selection-item`]: {
        display: "flex",
        alignSelf: "center",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        marginBlock: g,
        borderRadius: r,
        cursor: "default",
        transition: `font-size ${i}, line-height ${i}, height ${i}`,
        marginInlineEnd: e.calc(g).mul(2).equal(),
        paddingInlineStart: a,
        paddingInlineEnd: e.calc(a).div(2).equal(),
        [`${t}-disabled&`]: {
          color: l,
          borderColor: s,
          cursor: "not-allowed"
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        "&-content": {
          display: "inline-block",
          marginInlineEnd: e.calc(a).div(2).equal(),
          overflow: "hidden",
          whiteSpace: "pre",
          // fix whitespace wrapping. custom tags display all whitespace within.
          textOverflow: "ellipsis"
        },
        "&-remove": Object.assign(Object.assign({}, Cr()), {
          display: "inline-flex",
          alignItems: "center",
          color: f,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${n}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: v
          }
        })
      }
    }
  };
}, _a = (e, t) => {
  const {
    componentCls: n,
    INTERNAL_FIXED_ITEM_MARGIN: r
  } = e, i = `${n}-selection-overflow`, a = e.multipleSelectItemHeight, l = Da(e), s = t ? `${n}-${t}` : "", f = Pa(e);
  return {
    [`${n}-multiple${s}`]: Object.assign(Object.assign({}, za(e)), {
      // ========================= Selector =========================
      [`${n}-selector`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        height: "100%",
        // Multiple is little different that horizontal is follow the vertical
        paddingInline: f.basePadding,
        paddingBlock: f.containerPadding,
        borderRadius: e.borderRadius,
        [`${n}-disabled&`]: {
          background: e.multipleSelectorBgDisabled,
          cursor: "not-allowed"
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${J(r)} 0`,
          lineHeight: J(a),
          visibility: "hidden",
          content: '"\\a0"'
        }
      },
      // ======================== Selections ========================
      [`${n}-selection-item`]: {
        height: f.itemHeight,
        lineHeight: J(f.itemLineHeight)
      },
      // ========================== Input ==========================
      [`${i}-item + ${i}-item`]: {
        [`${n}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      // https://github.com/ant-design/ant-design/issues/44754
      [`${i}-item-suffix`]: {
        height: "100%"
      },
      [`${n}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: e.calc(e.inputPaddingHorizontalBase).sub(l).equal(),
        "\n          &-input,\n          &-mirror\n        ": {
          height: a,
          fontFamily: e.fontFamily,
          lineHeight: J(a),
          transition: `all ${e.motionDurationSlow}`
        },
        "&-input": {
          width: "100%",
          minWidth: 4.1
          // fix search cursor missing
        },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          // fix whitespace wrapping caused width calculation bug
          visibility: "hidden"
        }
      },
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: e.inputPaddingHorizontalBase,
        insetInlineEnd: e.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${e.motionDurationSlow}`
      }
    })
  };
};
function pn(e, t) {
  const {
    componentCls: n
  } = e, r = t ? `${n}-${t}` : "", i = {
    [`${n}-multiple${r}`]: {
      fontSize: e.fontSize,
      // ========================= Selector =========================
      [`${n}-selector`]: {
        [`${n}-show-search&`]: {
          cursor: "text"
        }
      },
      [`
        &${n}-show-arrow ${n}-selector,
        &${n}-allow-clear ${n}-selector
      `]: {
        paddingInlineEnd: e.calc(e.fontSizeIcon).add(e.controlPaddingHorizontal).equal()
      }
    }
  };
  return [_a(e, t), i];
}
const Ta = (e) => {
  const {
    componentCls: t
  } = e, n = Nt(e, {
    selectHeight: e.controlHeightSM,
    multipleSelectItemHeight: e.multipleItemHeightSM,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS
  }), r = Nt(e, {
    fontSize: e.fontSizeLG,
    selectHeight: e.controlHeightLG,
    multipleSelectItemHeight: e.multipleItemHeightLG,
    borderRadius: e.borderRadiusLG,
    borderRadiusSM: e.borderRadius
  });
  return [
    pn(e),
    // ======================== Small ========================
    pn(n, "sm"),
    // Padding
    {
      [`${t}-multiple${t}-sm`]: {
        [`${t}-selection-placeholder`]: {
          insetInline: e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal()
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${t}-selection-search`]: {
          marginInlineStart: 2
          // Magic Number
        }
      }
    },
    // ======================== Large ========================
    pn(r, "lg")
  ];
};
function hn(e, t) {
  const {
    componentCls: n,
    inputPaddingHorizontalBase: r,
    borderRadius: i
  } = e, a = e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(), l = t ? `${n}-${t}` : "";
  return {
    [`${n}-single${l}`]: {
      fontSize: e.fontSize,
      height: e.controlHeight,
      // ========================= Selector =========================
      [`${n}-selector`]: Object.assign(Object.assign({}, Jt(e, !0)), {
        display: "flex",
        borderRadius: i,
        [`${n}-selection-search`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: r,
          insetInlineEnd: r,
          bottom: 0,
          "&-input": {
            width: "100%",
            WebkitAppearance: "textfield"
          }
        },
        [`
          ${n}-selection-item,
          ${n}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: J(a),
          transition: `all ${e.motionDurationSlow}, visibility 0s`,
          alignSelf: "center"
        },
        [`${n}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none"
        },
        // For common baseline align
        [[
          "&:after",
          /* For '' value baseline align */
          `${n}-selection-item:empty:after`,
          /* For undefined value baseline align */
          `${n}-selection-placeholder:empty:after`
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        }
      }),
      [`
        &${n}-show-arrow ${n}-selection-item,
        &${n}-show-arrow ${n}-selection-placeholder
      `]: {
        paddingInlineEnd: e.showArrowPaddingInlineEnd
      },
      // Opacity selection if open
      [`&${n}-open ${n}-selection-item`]: {
        color: e.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${n}-customize-input)`]: {
        [`${n}-selector`]: {
          width: "100%",
          height: "100%",
          padding: `0 ${J(r)}`,
          [`${n}-selection-search-input`]: {
            height: a
          },
          "&:after": {
            lineHeight: J(a)
          }
        }
      },
      [`&${n}-customize-input`]: {
        [`${n}-selector`]: {
          "&:after": {
            display: "none"
          },
          [`${n}-selection-search`]: {
            position: "static",
            width: "100%"
          },
          [`${n}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${J(r)}`,
            "&:after": {
              display: "none"
            }
          }
        }
      }
    }
  };
}
function La(e) {
  const {
    componentCls: t
  } = e, n = e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal();
  return [
    hn(e),
    // ======================== Small ========================
    // Shared
    hn(Nt(e, {
      controlHeight: e.controlHeightSM,
      borderRadius: e.borderRadiusSM
    }), "sm"),
    // padding
    {
      [`${t}-single${t}-sm`]: {
        [`&:not(${t}-customize-input)`]: {
          [`${t}-selection-search`]: {
            insetInlineStart: n,
            insetInlineEnd: n
          },
          [`${t}-selector`]: {
            padding: `0 ${J(n)}`
          },
          // With arrow should provides `padding-right` to show the arrow
          [`&${t}-show-arrow ${t}-selection-search`]: {
            insetInlineEnd: e.calc(n).add(e.calc(e.fontSize).mul(1.5)).equal()
          },
          [`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: {
            paddingInlineEnd: e.calc(e.fontSize).mul(1.5).equal()
          }
        }
      }
    },
    // ======================== Large ========================
    // Shared
    hn(Nt(e, {
      controlHeight: e.singleItemHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    }), "lg")
  ];
}
const ja = (e) => {
  const {
    fontSize: t,
    lineHeight: n,
    lineWidth: r,
    controlHeight: i,
    controlHeightSM: a,
    controlHeightLG: l,
    paddingXXS: s,
    controlPaddingHorizontal: f,
    zIndexPopupBase: v,
    colorText: g,
    fontWeightStrong: m,
    controlItemBgActive: b,
    controlItemBgHover: c,
    colorBgContainer: u,
    colorFillSecondary: d,
    colorBgContainerDisabled: h,
    colorTextDisabled: p
  } = e, S = s * 2, y = r * 2, w = Math.min(i - S, i - y), P = Math.min(a - S, a - y), $ = Math.min(l - S, l - y);
  return {
    INTERNAL_FIXED_ITEM_MARGIN: Math.floor(s / 2),
    zIndexPopup: v + 50,
    optionSelectedColor: g,
    optionSelectedFontWeight: m,
    optionSelectedBg: b,
    optionActiveBg: c,
    optionPadding: `${(i - t * n) / 2}px ${f}px`,
    optionFontSize: t,
    optionLineHeight: n,
    optionHeight: i,
    selectorBg: u,
    clearBg: u,
    singleItemHeightLG: l,
    multipleItemBg: d,
    multipleItemBorderColor: "transparent",
    multipleItemHeight: w,
    multipleItemHeightSM: P,
    multipleItemHeightLG: $,
    multipleSelectorBgDisabled: h,
    multipleItemColorDisabled: p,
    multipleItemBorderColorDisabled: "transparent",
    showArrowPaddingInlineEnd: Math.ceil(e.fontSize * 1.25)
  };
}, Gr = (e, t) => {
  const {
    componentCls: n,
    antCls: r,
    controlOutlineWidth: i
  } = e;
  return {
    [`&:not(${n}-customize-input) ${n}-selector`]: {
      border: `${J(e.lineWidth)} ${e.lineType} ${t.borderColor}`,
      background: e.selectorBg
    },
    [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
      [`&:hover ${n}-selector`]: {
        borderColor: t.hoverBorderHover
      },
      [`${n}-focused& ${n}-selector`]: {
        borderColor: t.activeBorderColor,
        boxShadow: `0 0 0 ${J(i)} ${t.activeShadowColor}`,
        outline: 0
      }
    }
  };
}, gr = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, Gr(e, t))
}), Ba = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign({}, Gr(e, {
    borderColor: e.colorBorder,
    hoverBorderHover: e.colorPrimaryHover,
    activeBorderColor: e.colorPrimary,
    activeShadowColor: e.controlOutline
  })), gr(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderHover: e.colorErrorHover,
    activeBorderColor: e.colorError,
    activeShadowColor: e.colorErrorOutline
  })), gr(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderHover: e.colorWarningHover,
    activeBorderColor: e.colorWarning,
    activeShadowColor: e.colorWarningOutline
  })), {
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        background: e.colorBgContainerDisabled,
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.multipleItemBg,
      border: `${J(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
    }
  })
}), Ur = (e, t) => {
  const {
    componentCls: n,
    antCls: r
  } = e;
  return {
    [`&:not(${n}-customize-input) ${n}-selector`]: {
      background: t.bg,
      border: `${J(e.lineWidth)} ${e.lineType} transparent`,
      color: t.color
    },
    [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
      [`&:hover ${n}-selector`]: {
        background: t.hoverBg
      },
      [`${n}-focused& ${n}-selector`]: {
        background: e.selectorBg,
        borderColor: t.activeBorderColor,
        outline: 0
      }
    }
  };
}, vr = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, Ur(e, t))
}), Ha = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign({}, Ur(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.colorPrimary,
    color: e.colorText
  })), vr(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    color: e.colorError
  })), vr(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    color: e.colorWarning
  })), {
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        borderColor: e.colorBorder,
        background: e.colorBgContainerDisabled,
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.colorBgContainer,
      border: `${J(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
    }
  })
}), Va = (e) => ({
  "&-borderless": {
    [`${e.componentCls}-selector`]: {
      background: "transparent",
      borderColor: "transparent"
    },
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.multipleItemBg,
      border: `${J(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
    }
  }
}), Aa = (e) => ({
  [e.componentCls]: Object.assign(Object.assign(Object.assign({}, Ba(e)), Ha(e)), Va(e))
}), Fa = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    position: "relative",
    transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
    input: {
      cursor: "pointer"
    },
    [`${t}-show-search&`]: {
      cursor: "text",
      input: {
        cursor: "auto",
        color: "inherit",
        height: "100%"
      }
    },
    [`${t}-disabled&`]: {
      cursor: "not-allowed",
      input: {
        cursor: "not-allowed"
      }
    }
  };
}, Wa = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      fontFamily: "inherit",
      "&::-webkit-search-cancel-button": {
        display: "none",
        "-webkit-appearance": "none"
      }
    }
  };
}, Ka = (e) => {
  const {
    antCls: t,
    componentCls: n,
    inputPaddingHorizontalBase: r,
    iconCls: i
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, Jt(e)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${n}-customize-input) ${n}-selector`]: Object.assign(Object.assign({}, Fa(e)), Wa(e)),
      // ======================== Selection ========================
      [`${n}-selection-item`]: Object.assign(Object.assign({
        flex: 1,
        fontWeight: "normal",
        position: "relative",
        userSelect: "none"
      }, $n), {
        // https://github.com/ant-design/ant-design/issues/40421
        [`> ${t}-typography`]: {
          display: "inline"
        }
      }),
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder`]: Object.assign(Object.assign({}, $n), {
        flex: 1,
        color: e.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${n}-arrow`]: Object.assign(Object.assign({}, Cr()), {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: r,
        height: e.fontSizeIcon,
        marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        lineHeight: 1,
        textAlign: "center",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        transition: `opacity ${e.motionDurationSlow} ease`,
        [i]: {
          verticalAlign: "top",
          transition: `transform ${e.motionDurationSlow}`,
          "> svg": {
            verticalAlign: "top"
          },
          [`&:not(${n}-suffix)`]: {
            pointerEvents: "auto"
          }
        },
        [`${n}-disabled &`]: {
          cursor: "not-allowed"
        },
        "> *:not(:last-child)": {
          marginInlineEnd: 8
          // FIXME: magic
        }
      }),
      // ========================== Clear ==========================
      [`${n}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: r,
        zIndex: 1,
        display: "inline-block",
        width: e.fontSizeIcon,
        height: e.fontSizeIcon,
        marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        cursor: "pointer",
        opacity: 0,
        transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
        textRendering: "auto",
        "&:before": {
          display: "block"
        },
        "&:hover": {
          color: e.colorTextTertiary
        }
      },
      "&:hover": {
        [`${n}-clear`]: {
          opacity: 1
        },
        // Should use the following selector, but since `:has` has poor compatibility,
        // we use `:not(:last-child)` instead, which may cause some problems in some cases.
        // [`${componentCls}-arrow:has(+ ${componentCls}-clear)`]: {
        [`${n}-arrow:not(:last-child)`]: {
          opacity: 0
        }
      }
    }),
    // ========================= Feedback ==========================
    [`${n}-has-feedback`]: {
      [`${n}-clear`]: {
        insetInlineEnd: e.calc(r).add(e.fontSize).add(e.paddingXS).equal()
      }
    }
  };
}, Xa = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    {
      [t]: {
        // ==================== In Form ====================
        [`&${t}-in-form-item`]: {
          width: "100%"
        }
      }
    },
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    Ka(e),
    // Single
    La(e),
    // Multiple
    Ta(e),
    // Dropdown
    Ra(e),
    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${t}-rtl`]: {
        direction: "rtl"
      }
    },
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    hi(e, {
      borderElCls: `${t}-selector`,
      focusElCls: `${t}-focused`
    })
  ];
}, Ga = Wt("Select", (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const r = Nt(e, {
    rootPrefixCls: n,
    inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
    multipleSelectItemHeight: e.multipleItemHeight,
    selectHeight: e.controlHeight
  });
  return [Xa(r), Aa(r)];
}, ja, {
  unitless: {
    optionLineHeight: !0,
    optionSelectedFontWeight: !0
  }
});
var Ua = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" }, qa = function(t, n) {
  return /* @__PURE__ */ o.createElement(nn, ze({}, t, {
    ref: n,
    icon: Ua
  }));
}, qr = /* @__PURE__ */ o.forwardRef(qa);
process.env.NODE_ENV !== "production" && (qr.displayName = "DownOutlined");
var Ya = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, Ja = function(t, n) {
  return /* @__PURE__ */ o.createElement(nn, ze({}, t, {
    ref: n,
    icon: Ya
  }));
}, Yr = /* @__PURE__ */ o.forwardRef(Ja);
process.env.NODE_ENV !== "production" && (Yr.displayName = "SearchOutlined");
function Qa(e) {
  let {
    suffixIcon: t,
    clearIcon: n,
    menuItemSelectedIcon: r,
    removeIcon: i,
    loading: a,
    multiple: l,
    hasFeedback: s,
    prefixCls: f,
    showSuffixIcon: v,
    feedbackIcon: g,
    showArrow: m,
    componentName: b
  } = e;
  process.env.NODE_ENV !== "production" && _n(b).deprecated(!n, "clearIcon", "allowClear={{ clearIcon: React.ReactNode }}");
  const c = n ?? /* @__PURE__ */ o.createElement(Si, null), u = (S) => t === null && !s && !m ? null : /* @__PURE__ */ o.createElement(o.Fragment, null, v !== !1 && S, s && g);
  let d = null;
  if (t !== void 0)
    d = u(t);
  else if (a)
    d = u(/* @__PURE__ */ o.createElement(yi, {
      spin: !0
    }));
  else {
    const S = `${f}-suffix`;
    d = (y) => {
      let {
        open: w,
        showSearch: P
      } = y;
      return u(w && P ? /* @__PURE__ */ o.createElement(Yr, {
        className: S
      }) : /* @__PURE__ */ o.createElement(qr, {
        className: S
      }));
    };
  }
  let h = null;
  r !== void 0 ? h = r : l ? h = /* @__PURE__ */ o.createElement(bi, null) : h = null;
  let p = null;
  return i !== void 0 ? p = i : p = /* @__PURE__ */ o.createElement(Ji, null), {
    clearIcon: c,
    suffixIcon: d,
    itemIcon: h,
    removeIcon: p
  };
}
function Za(e, t) {
  return t !== void 0 ? t : e !== null;
}
var ka = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
const Jr = "SECRET_COMBOBOX_MODE_DO_NOT_USE", Qr = (e, t) => {
  var n;
  const {
    prefixCls: r,
    bordered: i,
    className: a,
    rootClassName: l,
    getPopupContainer: s,
    popupClassName: f,
    dropdownClassName: v,
    listHeight: g = 256,
    placement: m,
    listItemHeight: b,
    size: c,
    disabled: u,
    notFoundContent: d,
    status: h,
    builtinPlacements: p,
    dropdownMatchSelectWidth: S,
    popupMatchSelectWidth: y,
    direction: w,
    style: P,
    allowClear: $,
    variant: x,
    dropdownStyle: D,
    transitionName: O,
    tagRender: I,
    maxCount: H
  } = e, B = ka(e, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style", "allowClear", "variant", "dropdownStyle", "transitionName", "tagRender", "maxCount"]), {
    getPopupContainer: T,
    getPrefixCls: R,
    renderEmpty: _,
    direction: Y,
    virtual: V,
    popupMatchSelectWidth: M,
    popupOverflow: L,
    select: k
  } = o.useContext(xt), [, W] = fn(), Ie = b ?? (W == null ? void 0 : W.controlHeight), de = R("select", r), fe = R(), me = w ?? Y, {
    compactSize: Ae,
    compactItemClassnames: ie
  } = Ci(de, me), [ye, _e] = $i(x, i), N = xi(de), [C, F, Q] = Ga(de, N), j = o.useMemo(() => {
    const {
      mode: Fe
    } = e;
    if (Fe !== "combobox")
      return Fe === Jr ? "combobox" : Fe;
  }, [e.mode]), E = j === "multiple" || j === "tags", ee = Za(e.suffixIcon, e.showArrow), xe = (n = y ?? S) !== null && n !== void 0 ? n : M, {
    status: ae,
    hasFeedback: ve,
    isFormItemInput: Oe,
    feedbackIcon: le
  } = o.useContext(wi), $e = Ni(ae, h);
  let Ce;
  d !== void 0 ? Ce = d : j === "combobox" ? Ce = null : Ce = (_ == null ? void 0 : _("Select")) || /* @__PURE__ */ o.createElement(Xr, {
    componentName: "Select"
  });
  const {
    suffixIcon: be,
    itemIcon: Ge,
    removeIcon: we,
    clearIcon: Te
  } = Qa(Object.assign(Object.assign({}, B), {
    multiple: E,
    hasFeedback: ve,
    feedbackIcon: le,
    showSuffixIcon: ee,
    prefixCls: de,
    componentName: "Select"
  })), Pe = $ === !0 ? {
    clearIcon: Te
  } : $, Le = Dn(B, ["suffixIcon", "itemIcon"]), je = Se(f || v, {
    [`${de}-dropdown-${me}`]: me === "rtl"
  }, l, Q, N, F), Qe = zn((Fe) => {
    var Be;
    return (Be = c ?? Ae) !== null && Be !== void 0 ? Be : Fe;
  }), Ze = o.useContext(Fi), pe = u ?? Ze, Xe = Se({
    [`${de}-lg`]: Qe === "large",
    [`${de}-sm`]: Qe === "small",
    [`${de}-rtl`]: me === "rtl",
    [`${de}-${ye}`]: _e,
    [`${de}-in-form-item`]: Oe
  }, Ei(de, $e, ve), ie, k == null ? void 0 : k.className, a, l, Q, N, F), rt = o.useMemo(() => m !== void 0 ? m : me === "rtl" ? "bottomRight" : "bottomLeft", [m, me]);
  if (process.env.NODE_ENV !== "production") {
    const Fe = _n("Select");
    Fe.deprecated(!v, "dropdownClassName", "popupClassName"), Fe.deprecated(S === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), process.env.NODE_ENV !== "production" && Fe(!("showArrow" in e), "deprecated", "`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null."), Fe.deprecated(!("bordered" in e), "bordered", "variant"), process.env.NODE_ENV !== "production" && Fe(!(typeof H < "u" && !E), "usage", "`maxCount` only works with mode `multiple` or `tags`");
  }
  const [Ue] = Ii("SelectLike", D == null ? void 0 : D.zIndex);
  return C(/* @__PURE__ */ o.createElement(Fn, Object.assign({
    ref: t,
    virtual: V,
    showSearch: k == null ? void 0 : k.showSearch
  }, Le, {
    style: Object.assign(Object.assign({}, k == null ? void 0 : k.style), P),
    dropdownMatchSelectWidth: xe,
    transitionName: Oi(fe, "slide-up", O),
    builtinPlacements: Ma(p, L),
    listHeight: g,
    listItemHeight: Ie,
    mode: j,
    prefixCls: de,
    placement: rt,
    direction: me,
    suffixIcon: be,
    menuItemSelectedIcon: Ge,
    removeIcon: we,
    allowClear: Pe,
    notFoundContent: Ce,
    className: Xe,
    getPopupContainer: s || T,
    dropdownClassName: je,
    disabled: pe,
    dropdownStyle: Object.assign(Object.assign({}, D), {
      zIndex: Ue
    }),
    maxCount: E ? H : void 0,
    tagRender: E ? I : void 0
  })));
};
process.env.NODE_ENV !== "production" && (Qr.displayName = "Select");
const Mt = /* @__PURE__ */ o.forwardRef(Qr), el = Qi(Mt);
Mt.SECRET_COMBOBOX_MODE_DO_NOT_USE = Jr;
Mt.Option = Hn;
Mt.OptGroup = Bn;
Mt._InternalPanelDoNotUseOrYouWillBeFired = el;
process.env.NODE_ENV !== "production" && (Mt.displayName = "Select");
var tl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" }, nl = function(t, n) {
  return /* @__PURE__ */ o.createElement(nn, ze({}, t, {
    ref: n,
    icon: tl
  }));
}, Nn = /* @__PURE__ */ o.forwardRef(nl);
process.env.NODE_ENV !== "production" && (Nn.displayName = "LeftOutlined");
function rl(e, t, n) {
  var r = n || {}, i = r.noTrailing, a = i === void 0 ? !1 : i, l = r.noLeading, s = l === void 0 ? !1 : l, f = r.debounceMode, v = f === void 0 ? void 0 : f, g, m = !1, b = 0;
  function c() {
    g && clearTimeout(g);
  }
  function u(h) {
    var p = h || {}, S = p.upcomingOnly, y = S === void 0 ? !1 : S;
    c(), m = !y;
  }
  function d() {
    for (var h = arguments.length, p = new Array(h), S = 0; S < h; S++)
      p[S] = arguments[S];
    var y = this, w = Date.now() - b;
    if (m)
      return;
    function P() {
      b = Date.now(), t.apply(y, p);
    }
    function $() {
      g = void 0;
    }
    !s && v && !g && P(), c(), v === void 0 && w > e ? s ? (b = Date.now(), a || (g = setTimeout(v ? $ : P, e))) : P() : a !== !0 && (g = setTimeout(v ? $ : P, v === void 0 ? e - w : e));
  }
  return d.cancel = u, d;
}
function il(e, t, n) {
  var r = {}, i = r.atBegin, a = i === void 0 ? !1 : i;
  return rl(e, t, {
    debounceMode: a !== !1
  });
}
const Zr = /* @__PURE__ */ Gi({}), ol = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      display: "flex",
      flexFlow: "row wrap",
      minWidth: 0,
      "&::before, &::after": {
        display: "flex"
      },
      "&-no-wrap": {
        flexWrap: "nowrap"
      },
      // The origin of the X-axis
      "&-start": {
        justifyContent: "flex-start"
      },
      // The center of the X-axis
      "&-center": {
        justifyContent: "center"
      },
      // The opposite of the X-axis
      "&-end": {
        justifyContent: "flex-end"
      },
      "&-space-between": {
        justifyContent: "space-between"
      },
      "&-space-around": {
        justifyContent: "space-around"
      },
      "&-space-evenly": {
        justifyContent: "space-evenly"
      },
      // Align at the top
      "&-top": {
        alignItems: "flex-start"
      },
      // Align at the center
      "&-middle": {
        alignItems: "center"
      },
      "&-bottom": {
        alignItems: "flex-end"
      }
    }
  };
}, al = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      position: "relative",
      maxWidth: "100%",
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
}, ll = (e, t) => {
  const {
    prefixCls: n,
    componentCls: r,
    gridColumns: i
  } = e, a = {};
  for (let l = i; l >= 0; l--)
    l === 0 ? (a[`${r}${t}-${l}`] = {
      display: "none"
    }, a[`${r}-push-${l}`] = {
      insetInlineStart: "auto"
    }, a[`${r}-pull-${l}`] = {
      insetInlineEnd: "auto"
    }, a[`${r}${t}-push-${l}`] = {
      insetInlineStart: "auto"
    }, a[`${r}${t}-pull-${l}`] = {
      insetInlineEnd: "auto"
    }, a[`${r}${t}-offset-${l}`] = {
      marginInlineStart: 0
    }, a[`${r}${t}-order-${l}`] = {
      order: 0
    }) : (a[`${r}${t}-${l}`] = [
      // https://github.com/ant-design/ant-design/issues/44456
      // Form set `display: flex` on Col which will override `display: block`.
      // Let's get it from css variable to support override.
      {
        "--ant-display": "block",
        // Fallback to display if variable not support
        display: "block"
      },
      {
        display: "var(--ant-display)",
        flex: `0 0 ${l / i * 100}%`,
        maxWidth: `${l / i * 100}%`
      }
    ], a[`${r}${t}-push-${l}`] = {
      insetInlineStart: `${l / i * 100}%`
    }, a[`${r}${t}-pull-${l}`] = {
      insetInlineEnd: `${l / i * 100}%`
    }, a[`${r}${t}-offset-${l}`] = {
      marginInlineStart: `${l / i * 100}%`
    }, a[`${r}${t}-order-${l}`] = {
      order: l
    });
  return a[`${r}${t}-flex`] = {
    flex: `var(--${n}${t}-flex)`
  }, a;
}, Mn = (e, t) => ll(e, t), sl = (e, t, n) => ({
  [`@media (min-width: ${J(t)})`]: Object.assign({}, Mn(e, n))
}), cl = () => ({}), ul = () => ({}), dl = Wt("Grid", ol, cl), fl = Wt("Grid", (e) => {
  const t = Nt(e, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  }), n = {
    "-sm": t.screenSMMin,
    "-md": t.screenMDMin,
    "-lg": t.screenLGMin,
    "-xl": t.screenXLMin,
    "-xxl": t.screenXXLMin
  };
  return [al(t), Mn(t, ""), Mn(t, "-xs"), Object.keys(n).map((r) => sl(t, n[r], r)).reduce((r, i) => Object.assign(Object.assign({}, r), i), {})];
}, ul);
var ml = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
function pr(e) {
  return typeof e == "number" ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e;
}
const gl = ["xs", "sm", "md", "lg", "xl", "xxl"], kr = /* @__PURE__ */ o.forwardRef((e, t) => {
  const {
    getPrefixCls: n,
    direction: r
  } = o.useContext(xt), {
    gutter: i,
    wrap: a
  } = o.useContext(Zr), {
    prefixCls: l,
    span: s,
    order: f,
    offset: v,
    push: g,
    pull: m,
    className: b,
    children: c,
    flex: u,
    style: d
  } = e, h = ml(e, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]), p = n("col", l), [S, y, w] = fl(p), P = {};
  let $ = {};
  gl.forEach((O) => {
    let I = {};
    const H = e[O];
    typeof H == "number" ? I.span = H : typeof H == "object" && (I = H || {}), delete h[O], $ = Object.assign(Object.assign({}, $), {
      [`${p}-${O}-${I.span}`]: I.span !== void 0,
      [`${p}-${O}-order-${I.order}`]: I.order || I.order === 0,
      [`${p}-${O}-offset-${I.offset}`]: I.offset || I.offset === 0,
      [`${p}-${O}-push-${I.push}`]: I.push || I.push === 0,
      [`${p}-${O}-pull-${I.pull}`]: I.pull || I.pull === 0,
      [`${p}-rtl`]: r === "rtl"
    }), I.flex && ($[`${p}-${O}-flex`] = !0, P[`--${p}-${O}-flex`] = pr(I.flex));
  });
  const x = Se(p, {
    [`${p}-${s}`]: s !== void 0,
    [`${p}-order-${f}`]: f,
    [`${p}-offset-${v}`]: v,
    [`${p}-push-${g}`]: g,
    [`${p}-pull-${m}`]: m
  }, b, $, y, w), D = {};
  if (i && i[0] > 0) {
    const O = i[0] / 2;
    D.paddingLeft = O, D.paddingRight = O;
  }
  return u && (D.flex = pr(u), a === !1 && !D.minWidth && (D.minWidth = 0)), S(/* @__PURE__ */ o.createElement("div", Object.assign({}, h, {
    style: Object.assign(Object.assign(Object.assign({}, D), d), P),
    className: x,
    ref: t
  }), c));
});
process.env.NODE_ENV !== "production" && (kr.displayName = "Col");
var vl = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
function hr(e, t) {
  const [n, r] = o.useState(typeof e == "string" ? e : ""), i = () => {
    if (typeof e == "string" && r(e), typeof e == "object")
      for (let a = 0; a < Yt.length; a++) {
        const l = Yt[a];
        if (!t[l])
          continue;
        const s = e[l];
        if (s !== void 0) {
          r(s);
          return;
        }
      }
  };
  return o.useEffect(() => {
    i();
  }, [JSON.stringify(e), t]), n;
}
const ei = /* @__PURE__ */ o.forwardRef((e, t) => {
  const {
    prefixCls: n,
    justify: r,
    align: i,
    className: a,
    style: l,
    children: s,
    gutter: f = 0,
    wrap: v
  } = e, g = vl(e, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]), {
    getPrefixCls: m,
    direction: b
  } = o.useContext(xt), [c, u] = o.useState({
    xs: !0,
    sm: !0,
    md: !0,
    lg: !0,
    xl: !0,
    xxl: !0
  }), [d, h] = o.useState({
    xs: !1,
    sm: !1,
    md: !1,
    lg: !1,
    xl: !1,
    xxl: !1
  }), p = hr(i, d), S = hr(r, d), y = o.useRef(f), w = Ui();
  o.useEffect(() => {
    const V = w.subscribe((M) => {
      h(M);
      const L = y.current || 0;
      (!Array.isArray(L) && typeof L == "object" || Array.isArray(L) && (typeof L[0] == "object" || typeof L[1] == "object")) && u(M);
    });
    return () => w.unsubscribe(V);
  }, []);
  const P = () => {
    const V = [void 0, void 0];
    return (Array.isArray(f) ? f : [f, void 0]).forEach((L, k) => {
      if (typeof L == "object")
        for (let W = 0; W < Yt.length; W++) {
          const Ie = Yt[W];
          if (c[Ie] && L[Ie] !== void 0) {
            V[k] = L[Ie];
            break;
          }
        }
      else
        V[k] = L;
    }), V;
  }, $ = m("row", n), [x, D, O] = dl($), I = P(), H = Se($, {
    [`${$}-no-wrap`]: v === !1,
    [`${$}-${S}`]: S,
    [`${$}-${p}`]: p,
    [`${$}-rtl`]: b === "rtl"
  }, a, D, O), B = {}, T = I[0] != null && I[0] > 0 ? I[0] / -2 : void 0;
  T && (B.marginLeft = T, B.marginRight = T);
  const [R, _] = I;
  B.rowGap = _;
  const Y = o.useMemo(() => ({
    gutter: [R, _],
    wrap: v
  }), [R, _, v]);
  return x(/* @__PURE__ */ o.createElement(Zr.Provider, {
    value: Y
  }, /* @__PURE__ */ o.createElement("div", Object.assign({}, g, {
    className: H,
    style: Object.assign(Object.assign({}, B), l),
    ref: t
  }), s)));
});
process.env.NODE_ENV !== "production" && (ei.displayName = "Row");
const pl = new et("antSpinMove", {
  to: {
    opacity: 1
  }
}), hl = new et("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), Sl = (e) => {
  const {
    componentCls: t,
    calc: n
  } = e;
  return {
    [`${t}`]: Object.assign(Object.assign({}, Jt(e)), {
      position: "absolute",
      display: "none",
      color: e.colorPrimary,
      fontSize: 0,
      textAlign: "center",
      verticalAlign: "middle",
      opacity: 0,
      transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,
      "&-spinning": {
        position: "static",
        display: "inline-block",
        opacity: 1
      },
      [`${t}-text`]: {
        fontSize: e.fontSize,
        paddingTop: n(n(e.dotSize).sub(e.fontSize)).div(2).add(2).equal()
      },
      "&-fullscreen": {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: e.colorBgMask,
        zIndex: e.zIndexPopupBase,
        inset: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        opacity: 0,
        visibility: "hidden",
        transition: `all ${e.motionDurationMid}`,
        "&-show": {
          opacity: 1,
          visibility: "visible"
        },
        [`${t}-dot ${t}-dot-item`]: {
          backgroundColor: e.colorWhite
        },
        [`${t}-text`]: {
          color: e.colorTextLightSolid
        }
      },
      "&-nested-loading": {
        position: "relative",
        [`> div > ${t}`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          zIndex: 4,
          display: "block",
          width: "100%",
          height: "100%",
          maxHeight: e.contentHeight,
          [`${t}-dot`]: {
            position: "absolute",
            top: "50%",
            insetInlineStart: "50%",
            margin: n(e.dotSize).mul(-1).div(2).equal()
          },
          [`${t}-text`]: {
            position: "absolute",
            top: "50%",
            width: "100%",
            textShadow: `0 1px 2px ${e.colorBgContainer}`
            // FIXME: shadow
          },
          [`&${t}-show-text ${t}-dot`]: {
            marginTop: n(e.dotSize).div(2).mul(-1).sub(10).equal()
          },
          "&-sm": {
            [`${t}-dot`]: {
              margin: n(e.dotSizeSM).mul(-1).div(2).equal()
            },
            [`${t}-text`]: {
              paddingTop: n(n(e.dotSizeSM).sub(e.fontSize)).div(2).add(2).equal()
            },
            [`&${t}-show-text ${t}-dot`]: {
              marginTop: n(e.dotSizeSM).div(2).mul(-1).sub(10).equal()
            }
          },
          "&-lg": {
            [`${t}-dot`]: {
              margin: n(e.dotSizeLG).mul(-1).div(2).equal()
            },
            [`${t}-text`]: {
              paddingTop: n(n(e.dotSizeLG).sub(e.fontSize)).div(2).add(2).equal()
            },
            [`&${t}-show-text ${t}-dot`]: {
              marginTop: n(e.dotSizeLG).div(2).mul(-1).sub(10).equal()
            }
          }
        },
        [`${t}-container`]: {
          position: "relative",
          transition: `opacity ${e.motionDurationSlow}`,
          "&::after": {
            position: "absolute",
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            zIndex: 10,
            width: "100%",
            height: "100%",
            background: e.colorBgContainer,
            opacity: 0,
            transition: `all ${e.motionDurationSlow}`,
            content: '""',
            pointerEvents: "none"
          }
        },
        [`${t}-blur`]: {
          clear: "both",
          opacity: 0.5,
          userSelect: "none",
          pointerEvents: "none",
          "&::after": {
            opacity: 0.4,
            pointerEvents: "auto"
          }
        }
      },
      // tip
      // ------------------------------
      "&-tip": {
        color: e.spinDotDefault
      },
      // dots
      // ------------------------------
      [`${t}-dot`]: {
        position: "relative",
        display: "inline-block",
        fontSize: e.dotSize,
        width: "1em",
        height: "1em",
        "&-item": {
          position: "absolute",
          display: "block",
          width: n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),
          height: n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),
          backgroundColor: e.colorPrimary,
          borderRadius: "100%",
          transform: "scale(0.75)",
          transformOrigin: "50% 50%",
          opacity: 0.3,
          animationName: pl,
          animationDuration: "1s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
          animationDirection: "alternate",
          "&:nth-child(1)": {
            top: 0,
            insetInlineStart: 0,
            animationDelay: "0s"
          },
          "&:nth-child(2)": {
            top: 0,
            insetInlineEnd: 0,
            animationDelay: "0.4s"
          },
          "&:nth-child(3)": {
            insetInlineEnd: 0,
            bottom: 0,
            animationDelay: "0.8s"
          },
          "&:nth-child(4)": {
            bottom: 0,
            insetInlineStart: 0,
            animationDelay: "1.2s"
          }
        },
        "&-spin": {
          transform: "rotate(45deg)",
          animationName: hl,
          animationDuration: "1.2s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        }
      },
      // small
      [`&-sm ${t}-dot`]: {
        fontSize: e.dotSizeSM,
        i: {
          width: n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal(),
          height: n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal()
        }
      },
      // large
      [`&-lg ${t}-dot`]: {
        fontSize: e.dotSizeLG,
        i: {
          width: n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),
          height: n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()
        }
      },
      [`&${t}-show-text ${t}-text`]: {
        display: "block"
      }
    })
  };
}, bl = (e) => {
  const {
    controlHeightLG: t,
    controlHeight: n
  } = e;
  return {
    contentHeight: 400,
    dotSize: t / 2,
    dotSizeSM: t * 0.35,
    dotSizeLG: n
  };
}, yl = Wt("Spin", (e) => {
  const t = Nt(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [Sl(t)];
}, bl);
var Cl = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
let ln = null;
function $l(e, t) {
  const {
    indicator: n
  } = t, r = `${e}-dot`;
  return n === null ? null : /* @__PURE__ */ o.isValidElement(n) ? xn(n, {
    className: Se(n.props.className, r)
  }) : /* @__PURE__ */ o.isValidElement(ln) ? xn(ln, {
    className: Se(ln.props.className, r)
  }) : /* @__PURE__ */ o.createElement("span", {
    className: Se(r, `${e}-dot-spin`)
  }, /* @__PURE__ */ o.createElement("i", {
    className: `${e}-dot-item`,
    key: 1
  }), /* @__PURE__ */ o.createElement("i", {
    className: `${e}-dot-item`,
    key: 2
  }), /* @__PURE__ */ o.createElement("i", {
    className: `${e}-dot-item`,
    key: 3
  }), /* @__PURE__ */ o.createElement("i", {
    className: `${e}-dot-item`,
    key: 4
  }));
}
function xl(e, t) {
  return !!e && !!t && !isNaN(Number(t));
}
const Wn = (e) => {
  const {
    prefixCls: t,
    spinning: n = !0,
    delay: r = 0,
    className: i,
    rootClassName: a,
    size: l = "default",
    tip: s,
    wrapperClassName: f,
    style: v,
    children: g,
    fullscreen: m = !1
  } = e, b = Cl(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen"]), {
    getPrefixCls: c
  } = o.useContext(xt), u = c("spin", t), [d, h, p] = yl(u), [S, y] = o.useState(() => n && !xl(n, r));
  o.useEffect(() => {
    if (n) {
      const B = il(r, () => {
        y(!0);
      });
      return B(), () => {
        var T;
        (T = B == null ? void 0 : B.cancel) === null || T === void 0 || T.call(B);
      };
    }
    y(!1);
  }, [r, n]);
  const w = o.useMemo(() => typeof g < "u" && !m, [g, m]);
  if (process.env.NODE_ENV !== "production") {
    const B = _n("Spin");
    process.env.NODE_ENV !== "production" && B(!s || w || m, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const {
    direction: P,
    spin: $
  } = o.useContext(xt), x = Se(u, $ == null ? void 0 : $.className, {
    [`${u}-sm`]: l === "small",
    [`${u}-lg`]: l === "large",
    [`${u}-spinning`]: S,
    [`${u}-show-text`]: !!s,
    [`${u}-fullscreen`]: m,
    [`${u}-fullscreen-show`]: m && S,
    [`${u}-rtl`]: P === "rtl"
  }, i, a, h, p), D = Se(`${u}-container`, {
    [`${u}-blur`]: S
  }), O = Dn(b, ["indicator"]), I = Object.assign(Object.assign({}, $ == null ? void 0 : $.style), v), H = /* @__PURE__ */ o.createElement("div", Object.assign({}, O, {
    style: I,
    className: x,
    "aria-live": "polite",
    "aria-busy": S
  }), $l(u, e), s && (w || m) ? /* @__PURE__ */ o.createElement("div", {
    className: `${u}-text`
  }, s) : null);
  return d(w ? /* @__PURE__ */ o.createElement("div", Object.assign({}, O, {
    className: Se(`${u}-nested-loading`, f, h, p)
  }), S && /* @__PURE__ */ o.createElement("div", {
    key: "loading"
  }, H), /* @__PURE__ */ o.createElement("div", {
    className: D,
    key: "container"
  }, g)) : H);
};
Wn.setDefaultIndicator = (e) => {
  ln = e;
};
process.env.NODE_ENV !== "production" && (Wn.displayName = "Spin");
const wl = function() {
  const e = Object.assign({}, arguments.length <= 0 ? void 0 : arguments[0]);
  for (let t = 1; t < arguments.length; t++) {
    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    n && Object.keys(n).forEach((r) => {
      const i = n[r];
      i !== void 0 && (e[r] = i);
    });
  }
  return e;
};
var El = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" } }] }, name: "double-left", theme: "outlined" }, Il = function(t, n) {
  return /* @__PURE__ */ o.createElement(nn, ze({}, t, {
    ref: n,
    icon: El
  }));
}, Rn = /* @__PURE__ */ o.forwardRef(Il);
process.env.NODE_ENV !== "production" && (Rn.displayName = "DoubleLeftOutlined");
var Ol = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" } }] }, name: "double-right", theme: "outlined" }, Nl = function(t, n) {
  return /* @__PURE__ */ o.createElement(nn, ze({}, t, {
    ref: n,
    icon: Ol
  }));
}, Pn = /* @__PURE__ */ o.forwardRef(Nl);
process.env.NODE_ENV !== "production" && (Pn.displayName = "DoubleRightOutlined");
var Ml = {
  // Options
  items_per_page: "条/页",
  jump_to: "跳至",
  jump_to_confirm: "确定",
  page: "页",
  // Pagination
  prev_page: "上一页",
  next_page: "下一页",
  prev_5: "向前 5 页",
  next_5: "向后 5 页",
  prev_3: "向前 3 页",
  next_3: "向后 3 页",
  page_size: "页码"
}, Rl = ["10", "20", "50", "100"], ti = function(t) {
  var n = t.pageSizeOptions, r = n === void 0 ? Rl : n, i = t.locale, a = t.changeSize, l = t.pageSize, s = t.goButton, f = t.quickGo, v = t.rootPrefixCls, g = t.selectComponentClass, m = t.selectPrefixCls, b = t.disabled, c = t.buildOptionText, u = G.useState(""), d = re(u, 2), h = d[0], p = d[1], S = function() {
    return !h || Number.isNaN(h) ? void 0 : Number(h);
  }, y = typeof c == "function" ? c : function(R) {
    return "".concat(R, " ").concat(i.items_per_page);
  }, w = function(_) {
    a == null || a(Number(_));
  }, P = function(_) {
    p(_.target.value);
  }, $ = function(_) {
    s || h === "" || (p(""), !(_.relatedTarget && (_.relatedTarget.className.indexOf("".concat(v, "-item-link")) >= 0 || _.relatedTarget.className.indexOf("".concat(v, "-item")) >= 0)) && (f == null || f(S())));
  }, x = function(_) {
    h !== "" && (_.keyCode === ne.ENTER || _.type === "click") && (p(""), f == null || f(S()));
  }, D = function() {
    return r.some(function(_) {
      return _.toString() === l.toString();
    }) ? r : r.concat([l.toString()]).sort(function(_, Y) {
      var V = Number.isNaN(Number(_)) ? 0 : Number(_), M = Number.isNaN(Number(Y)) ? 0 : Number(Y);
      return V - M;
    });
  }, O = "".concat(v, "-options");
  if (!a && !f)
    return null;
  var I = null, H = null, B = null;
  if (a && g) {
    var T = D().map(function(R, _) {
      return /* @__PURE__ */ G.createElement(g.Option, {
        key: _,
        value: R.toString()
      }, y(R));
    });
    I = /* @__PURE__ */ G.createElement(g, {
      disabled: b,
      prefixCls: m,
      showSearch: !1,
      className: "".concat(O, "-size-changer"),
      optionLabelProp: "children",
      popupMatchSelectWidth: !1,
      value: (l || r[0]).toString(),
      onChange: w,
      getPopupContainer: function(_) {
        return _.parentNode;
      },
      "aria-label": i.page_size,
      defaultOpen: !1
    }, T);
  }
  return f && (s && (B = typeof s == "boolean" ? /* @__PURE__ */ G.createElement("button", {
    type: "button",
    onClick: x,
    onKeyUp: x,
    disabled: b,
    className: "".concat(O, "-quick-jumper-button")
  }, i.jump_to_confirm) : /* @__PURE__ */ G.createElement("span", {
    onClick: x,
    onKeyUp: x
  }, s)), H = /* @__PURE__ */ G.createElement("div", {
    className: "".concat(O, "-quick-jumper")
  }, i.jump_to, /* @__PURE__ */ G.createElement("input", {
    disabled: b,
    type: "text",
    value: h,
    onChange: P,
    onKeyUp: x,
    onBlur: $,
    "aria-label": i.page
  }), i.page, B)), /* @__PURE__ */ G.createElement("li", {
    className: O
  }, I, H);
};
process.env.NODE_ENV !== "production" && (ti.displayName = "Options");
var Ut = function(t) {
  var n, r = t.rootPrefixCls, i = t.page, a = t.active, l = t.className, s = t.showTitle, f = t.onClick, v = t.onKeyPress, g = t.itemRender, m = "".concat(r, "-item"), b = Se(m, "".concat(m, "-").concat(i), (n = {}, ue(n, "".concat(m, "-active"), a), ue(n, "".concat(m, "-disabled"), !i), n), l), c = function() {
    f(i);
  }, u = function(p) {
    v(p, f, i);
  }, d = g(i, "page", /* @__PURE__ */ G.createElement("a", {
    rel: "nofollow"
  }, i));
  return d ? /* @__PURE__ */ G.createElement("li", {
    title: s ? String(i) : null,
    className: b,
    onClick: c,
    onKeyDown: u,
    tabIndex: 0
  }, d) : null;
};
process.env.NODE_ENV !== "production" && (Ut.displayName = "Pager");
var Pl = function(t, n, r) {
  return r;
};
function Sn() {
}
function Sr(e) {
  var t = Number(e);
  return typeof t == "number" && !Number.isNaN(t) && isFinite(t) && Math.floor(t) === t;
}
function At(e, t, n) {
  var r = typeof e > "u" ? t : e;
  return Math.floor((n - 1) / r) + 1;
}
var ni = function(t) {
  var n, r = t.prefixCls, i = r === void 0 ? "rc-pagination" : r, a = t.selectPrefixCls, l = a === void 0 ? "rc-select" : a, s = t.className, f = t.selectComponentClass, v = t.current, g = t.defaultCurrent, m = g === void 0 ? 1 : g, b = t.total, c = b === void 0 ? 0 : b, u = t.pageSize, d = t.defaultPageSize, h = d === void 0 ? 10 : d, p = t.onChange, S = p === void 0 ? Sn : p, y = t.hideOnSinglePage, w = t.showPrevNextJumpers, P = w === void 0 ? !0 : w, $ = t.showQuickJumper, x = t.showLessItems, D = t.showTitle, O = D === void 0 ? !0 : D, I = t.onShowSizeChange, H = I === void 0 ? Sn : I, B = t.locale, T = B === void 0 ? Ml : B, R = t.style, _ = t.totalBoundaryShowSizeChanger, Y = _ === void 0 ? 50 : _, V = t.disabled, M = t.simple, L = t.showTotal, k = t.showSizeChanger, W = t.pageSizeOptions, Ie = t.itemRender, de = Ie === void 0 ? Pl : Ie, fe = t.jumpPrevIcon, me = t.jumpNextIcon, Ae = t.prevIcon, ie = t.nextIcon, ye = G.useRef(null), _e = kt(10, {
    value: u,
    defaultValue: h
  }), N = re(_e, 2), C = N[0], F = N[1], Q = kt(1, {
    value: v,
    defaultValue: m,
    postState: function(Ee) {
      return Math.max(1, Math.min(Ee, At(void 0, C, c)));
    }
  }), j = re(Q, 2), E = j[0], ee = j[1], xe = G.useState(E), ae = re(xe, 2), ve = ae[0], Oe = ae[1];
  sn(function() {
    Oe(E);
  }, [E]);
  var le = S !== Sn, $e = "current" in t;
  process.env.NODE_ENV !== "production" && lt($e ? le : !0, "You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.");
  var Ce = Math.max(1, E - (x ? 3 : 5)), be = Math.min(At(void 0, C, c), E + (x ? 3 : 5));
  function Ge(Z, Ee) {
    var Ke = Z || /* @__PURE__ */ G.createElement("button", {
      type: "button",
      "aria-label": Ee,
      className: "".concat(i, "-item-link")
    });
    return typeof Z == "function" && (Ke = /* @__PURE__ */ G.createElement(Z, ce({}, t))), Ke;
  }
  function we(Z) {
    var Ee = Z.target.value, Ke = At(void 0, C, c), It;
    return Ee === "" ? It = Ee : Number.isNaN(Number(Ee)) ? It = ve : Ee >= Ke ? It = Ke : It = Number(Ee), It;
  }
  function Te(Z) {
    return Sr(Z) && Z !== E && Sr(c) && c > 0;
  }
  var Pe = c > C ? $ : !1;
  function Le(Z) {
    (Z.keyCode === ne.UP || Z.keyCode === ne.DOWN) && Z.preventDefault();
  }
  function je(Z) {
    var Ee = we(Z);
    switch (Ee !== ve && Oe(Ee), Z.keyCode) {
      case ne.ENTER:
        pe(Ee);
        break;
      case ne.UP:
        pe(Ee - 1);
        break;
      case ne.DOWN:
        pe(Ee + 1);
        break;
    }
  }
  function Qe(Z) {
    pe(we(Z));
  }
  function Ze(Z) {
    var Ee = At(Z, C, c), Ke = E > Ee && Ee !== 0 ? Ee : E;
    F(Z), Oe(Ke), H == null || H(E, Z), ee(Ke), S == null || S(Ke, Z);
  }
  function pe(Z) {
    if (Te(Z) && !V) {
      var Ee = At(void 0, C, c), Ke = Z;
      return Z > Ee ? Ke = Ee : Z < 1 && (Ke = 1), Ke !== ve && Oe(Ke), ee(Ke), S == null || S(Ke, C), Ke;
    }
    return E;
  }
  var Xe = E > 1, rt = E < At(void 0, C, c), Ue = k ?? c > Y;
  function Fe() {
    Xe && pe(E - 1);
  }
  function Be() {
    rt && pe(E + 1);
  }
  function bt() {
    pe(Ce);
  }
  function st() {
    pe(be);
  }
  function qe(Z, Ee) {
    if (Z.key === "Enter" || Z.charCode === ne.ENTER || Z.keyCode === ne.ENTER) {
      for (var Ke = arguments.length, It = new Array(Ke > 2 ? Ke - 2 : 0), Kt = 2; Kt < Ke; Kt++)
        It[Kt - 2] = arguments[Kt];
      Ee.apply(void 0, It);
    }
  }
  function Rt(Z) {
    qe(Z, Fe);
  }
  function mt(Z) {
    qe(Z, Be);
  }
  function pt(Z) {
    qe(Z, bt);
  }
  function nt(Z) {
    qe(Z, st);
  }
  function ct(Z) {
    var Ee = de(Z, "prev", Ge(Ae, "prev page"));
    return /* @__PURE__ */ G.isValidElement(Ee) ? /* @__PURE__ */ G.cloneElement(Ee, {
      disabled: !Xe
    }) : Ee;
  }
  function oe(Z) {
    var Ee = de(Z, "next", Ge(ie, "next page"));
    return /* @__PURE__ */ G.isValidElement(Ee) ? /* @__PURE__ */ G.cloneElement(Ee, {
      disabled: !rt
    }) : Ee;
  }
  function U(Z) {
    (Z.type === "click" || Z.keyCode === ne.ENTER) && pe(ve);
  }
  var Me = null, We = tn(t, {
    aria: !0,
    data: !0
  }), A = L && /* @__PURE__ */ G.createElement("li", {
    className: "".concat(i, "-total-text")
  }, L(c, [c === 0 ? 0 : (E - 1) * C + 1, E * C > c ? c : E * C])), te = null, z = At(void 0, C, c);
  if (y && c <= C)
    return null;
  var q = [], he = {
    rootPrefixCls: i,
    onClick: pe,
    onKeyPress: qe,
    showTitle: O,
    itemRender: de,
    page: -1
  }, Re = E - 1 > 0 ? E - 1 : 0, it = E + 1 < z ? E + 1 : z, ke = $ && $.goButton, tt = ke, He = null;
  M && (ke && (typeof ke == "boolean" ? tt = /* @__PURE__ */ G.createElement("button", {
    type: "button",
    onClick: U,
    onKeyUp: U
  }, T.jump_to_confirm) : tt = /* @__PURE__ */ G.createElement("span", {
    onClick: U,
    onKeyUp: U
  }, ke), tt = /* @__PURE__ */ G.createElement("li", {
    title: O ? "".concat(T.jump_to).concat(E, "/").concat(z) : null,
    className: "".concat(i, "-simple-pager")
  }, tt)), He = /* @__PURE__ */ G.createElement("li", {
    title: O ? "".concat(E, "/").concat(z) : null,
    className: "".concat(i, "-simple-pager")
  }, /* @__PURE__ */ G.createElement("input", {
    type: "text",
    value: ve,
    disabled: V,
    onKeyDown: Le,
    onKeyUp: je,
    onChange: je,
    onBlur: Qe,
    size: 3
  }), /* @__PURE__ */ G.createElement("span", {
    className: "".concat(i, "-slash")
  }, "/"), z));
  var Ye = x ? 1 : 2;
  if (z <= 3 + Ye * 2) {
    z || q.push(/* @__PURE__ */ G.createElement(Ut, ze({}, he, {
      key: "noPager",
      page: 1,
      className: "".concat(i, "-item-disabled")
    })));
    for (var ot = 1; ot <= z; ot += 1)
      q.push(/* @__PURE__ */ G.createElement(Ut, ze({}, he, {
        key: ot,
        page: ot,
        active: E === ot
      })));
  } else {
    var Vt = x ? T.prev_3 : T.prev_5, wt = x ? T.next_3 : T.next_5, gt = de(Ce, "jump-prev", Ge(fe, "prev page")), X = de(be, "jump-next", Ge(me, "next page"));
    P && (Me = gt ? /* @__PURE__ */ G.createElement("li", {
      title: O ? Vt : null,
      key: "prev",
      onClick: bt,
      tabIndex: 0,
      onKeyDown: pt,
      className: Se("".concat(i, "-jump-prev"), ue({}, "".concat(i, "-jump-prev-custom-icon"), !!fe))
    }, gt) : null, te = X ? /* @__PURE__ */ G.createElement("li", {
      title: O ? wt : null,
      key: "next",
      onClick: st,
      tabIndex: 0,
      onKeyDown: nt,
      className: Se("".concat(i, "-jump-next"), ue({}, "".concat(i, "-jump-next-custom-icon"), !!me))
    }, X) : null);
    var K = Math.max(1, E - Ye), se = Math.min(E + Ye, z);
    E - 1 <= Ye && (se = 1 + Ye * 2), z - E <= Ye && (K = z - Ye * 2);
    for (var Ve = K; Ve <= se; Ve += 1)
      q.push(/* @__PURE__ */ G.createElement(Ut, ze({}, he, {
        key: Ve,
        page: Ve,
        active: E === Ve
      })));
    if (E - 1 >= Ye * 2 && E !== 3 && (q[0] = /* @__PURE__ */ G.cloneElement(q[0], {
      className: Se("".concat(i, "-item-after-jump-prev"), q[0].props.className)
    }), q.unshift(Me)), z - E >= Ye * 2 && E !== z - 2) {
      var vt = q[q.length - 1];
      q[q.length - 1] = /* @__PURE__ */ G.cloneElement(vt, {
        className: Se("".concat(i, "-item-before-jump-next"), vt.props.className)
      }), q.push(te);
    }
    K !== 1 && q.unshift(/* @__PURE__ */ G.createElement(Ut, ze({}, he, {
      key: 1,
      page: 1
    }))), se !== z && q.push(/* @__PURE__ */ G.createElement(Ut, ze({}, he, {
      key: z,
      page: z
    })));
  }
  var Pt = ct(Re);
  if (Pt) {
    var yt = !Xe || !z;
    Pt = /* @__PURE__ */ G.createElement("li", {
      title: O ? T.prev_page : null,
      onClick: Fe,
      tabIndex: yt ? null : 0,
      onKeyDown: Rt,
      className: Se("".concat(i, "-prev"), ue({}, "".concat(i, "-disabled"), yt)),
      "aria-disabled": yt
    }, Pt);
  }
  var Dt = oe(it);
  if (Dt) {
    var Et, zt;
    M ? (Et = !rt, zt = Xe ? 0 : null) : (Et = !rt || !z, zt = Et ? null : 0), Dt = /* @__PURE__ */ G.createElement("li", {
      title: O ? T.next_page : null,
      onClick: Be,
      tabIndex: zt,
      onKeyDown: mt,
      className: Se("".concat(i, "-next"), ue({}, "".concat(i, "-disabled"), Et)),
      "aria-disabled": Et
    }, Dt);
  }
  var _t = Se(i, s, (n = {}, ue(n, "".concat(i, "-simple"), M), ue(n, "".concat(i, "-disabled"), V), n));
  return /* @__PURE__ */ G.createElement("ul", ze({
    className: _t,
    style: R,
    ref: ye
  }, We), A, Pt, M ? He : q, Dt, /* @__PURE__ */ G.createElement(ti, {
    locale: T,
    rootPrefixCls: i,
    disabled: V,
    selectComponentClass: f,
    selectPrefixCls: l,
    changeSize: Ue ? Ze : null,
    pageSize: C,
    pageSizeOptions: W,
    quickGo: Pe ? pe : null,
    goButton: tt
  }));
};
process.env.NODE_ENV !== "production" && (ni.displayName = "Pagination");
const ri = (e) => /* @__PURE__ */ o.createElement(Mt, Object.assign({}, e, {
  showSearch: !0,
  size: "small"
})), ii = (e) => /* @__PURE__ */ o.createElement(Mt, Object.assign({}, e, {
  showSearch: !0,
  size: "middle"
}));
ri.Option = Mt.Option;
ii.Option = Mt.Option;
const Dl = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-disabled`]: {
      "&, &:hover": {
        cursor: "not-allowed",
        [`${t}-item-link`]: {
          color: e.colorTextDisabled,
          cursor: "not-allowed"
        }
      },
      "&:focus-visible": {
        cursor: "not-allowed",
        [`${t}-item-link`]: {
          color: e.colorTextDisabled,
          cursor: "not-allowed"
        }
      }
    },
    [`&${t}-disabled`]: {
      cursor: "not-allowed",
      [`${t}-item`]: {
        cursor: "not-allowed",
        "&:hover, &:active": {
          backgroundColor: "transparent"
        },
        a: {
          color: e.colorTextDisabled,
          backgroundColor: "transparent",
          border: "none",
          cursor: "not-allowed"
        },
        "&-active": {
          borderColor: e.colorBorder,
          backgroundColor: e.itemActiveBgDisabled,
          "&:hover, &:active": {
            backgroundColor: e.itemActiveBgDisabled
          },
          a: {
            color: e.itemActiveColorDisabled
          }
        }
      },
      [`${t}-item-link`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        "&:hover, &:active": {
          backgroundColor: "transparent"
        },
        [`${t}-simple&`]: {
          backgroundColor: "transparent",
          "&:hover, &:active": {
            backgroundColor: "transparent"
          }
        }
      },
      [`${t}-simple-pager`]: {
        color: e.colorTextDisabled
      },
      [`${t}-jump-prev, ${t}-jump-next`]: {
        [`${t}-item-link-icon`]: {
          opacity: 0
        },
        [`${t}-item-ellipsis`]: {
          opacity: 1
        }
      }
    },
    [`&${t}-simple`]: {
      [`${t}-prev, ${t}-next`]: {
        [`&${t}-disabled ${t}-item-link`]: {
          "&:hover, &:active": {
            backgroundColor: "transparent"
          }
        }
      }
    }
  };
}, zl = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`&${t}-mini ${t}-total-text, &${t}-mini ${t}-simple-pager`]: {
      height: e.itemSizeSM,
      lineHeight: J(e.itemSizeSM)
    },
    [`&${t}-mini ${t}-item`]: {
      minWidth: e.itemSizeSM,
      height: e.itemSizeSM,
      margin: 0,
      lineHeight: J(e.calc(e.itemSizeSM).sub(2).equal())
    },
    [`&${t}-mini:not(${t}-disabled) ${t}-item:not(${t}-item-active)`]: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&:hover": {
        backgroundColor: e.colorBgTextHover
      },
      "&:active": {
        backgroundColor: e.colorBgTextActive
      }
    },
    [`&${t}-mini ${t}-prev, &${t}-mini ${t}-next`]: {
      minWidth: e.itemSizeSM,
      height: e.itemSizeSM,
      margin: 0,
      lineHeight: J(e.itemSizeSM)
    },
    [`&${t}-mini:not(${t}-disabled)`]: {
      [`${t}-prev, ${t}-next`]: {
        [`&:hover ${t}-item-link`]: {
          backgroundColor: e.colorBgTextHover
        },
        [`&:active ${t}-item-link`]: {
          backgroundColor: e.colorBgTextActive
        },
        [`&${t}-disabled:hover ${t}-item-link`]: {
          backgroundColor: "transparent"
        }
      }
    },
    [`
    &${t}-mini ${t}-prev ${t}-item-link,
    &${t}-mini ${t}-next ${t}-item-link
    `]: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&::after": {
        height: e.itemSizeSM,
        lineHeight: J(e.itemSizeSM)
      }
    },
    [`&${t}-mini ${t}-jump-prev, &${t}-mini ${t}-jump-next`]: {
      height: e.itemSizeSM,
      marginInlineEnd: 0,
      lineHeight: J(e.itemSizeSM)
    },
    [`&${t}-mini ${t}-options`]: {
      marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
      "&-size-changer": {
        top: e.miniOptionsSizeChangerTop
      },
      "&-quick-jumper": {
        height: e.itemSizeSM,
        lineHeight: J(e.itemSizeSM),
        input: Object.assign(Object.assign({}, Pi(e)), {
          width: e.paginationMiniQuickJumperInputWidth,
          height: e.controlHeightSM
        })
      }
    }
  };
}, _l = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`
    &${t}-simple ${t}-prev,
    &${t}-simple ${t}-next
    `]: {
      height: e.itemSizeSM,
      lineHeight: J(e.itemSizeSM),
      verticalAlign: "top",
      [`${t}-item-link`]: {
        height: e.itemSizeSM,
        backgroundColor: "transparent",
        border: 0,
        "&:hover": {
          backgroundColor: e.colorBgTextHover
        },
        "&:active": {
          backgroundColor: e.colorBgTextActive
        },
        "&::after": {
          height: e.itemSizeSM,
          lineHeight: J(e.itemSizeSM)
        }
      }
    },
    [`&${t}-simple ${t}-simple-pager`]: {
      display: "inline-block",
      height: e.itemSizeSM,
      marginInlineEnd: e.marginXS,
      input: {
        boxSizing: "border-box",
        height: "100%",
        marginInlineEnd: e.marginXS,
        padding: `0 ${J(e.paginationItemPaddingInline)}`,
        textAlign: "center",
        backgroundColor: e.itemInputBg,
        border: `${J(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
        borderRadius: e.borderRadius,
        outline: "none",
        transition: `border-color ${e.motionDurationMid}`,
        color: "inherit",
        "&:hover": {
          borderColor: e.colorPrimary
        },
        "&:focus": {
          borderColor: e.colorPrimaryHover,
          boxShadow: `${J(e.inputOutlineOffset)} 0 ${J(e.controlOutlineWidth)} ${e.controlOutline}`
        },
        "&[disabled]": {
          color: e.colorTextDisabled,
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          cursor: "not-allowed"
        }
      }
    }
  };
}, Tl = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-jump-prev, ${t}-jump-next`]: {
      outline: 0,
      [`${t}-item-container`]: {
        position: "relative",
        [`${t}-item-link-icon`]: {
          color: e.colorPrimary,
          fontSize: e.fontSizeSM,
          opacity: 0,
          transition: `all ${e.motionDurationMid}`,
          "&-svg": {
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            margin: "auto"
          }
        },
        [`${t}-item-ellipsis`]: {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          display: "block",
          margin: "auto",
          color: e.colorTextDisabled,
          fontFamily: "Arial, Helvetica, sans-serif",
          letterSpacing: e.paginationEllipsisLetterSpacing,
          textAlign: "center",
          textIndent: e.paginationEllipsisTextIndent,
          opacity: 1,
          transition: `all ${e.motionDurationMid}`
        }
      },
      "&:hover": {
        [`${t}-item-link-icon`]: {
          opacity: 1
        },
        [`${t}-item-ellipsis`]: {
          opacity: 0
        }
      }
    },
    [`
    ${t}-prev,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
      marginInlineEnd: e.marginXS
    },
    [`
    ${t}-prev,
    ${t}-next,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
      display: "inline-block",
      minWidth: e.itemSize,
      height: e.itemSize,
      color: e.colorText,
      fontFamily: e.fontFamily,
      lineHeight: `${J(e.itemSize)}`,
      textAlign: "center",
      verticalAlign: "middle",
      listStyle: "none",
      borderRadius: e.borderRadius,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid}`
    },
    [`${t}-prev, ${t}-next`]: {
      fontFamily: "Arial, Helvetica, sans-serif",
      outline: 0,
      button: {
        color: e.colorText,
        cursor: "pointer",
        userSelect: "none"
      },
      [`${t}-item-link`]: {
        display: "block",
        width: "100%",
        height: "100%",
        padding: 0,
        fontSize: e.fontSizeSM,
        textAlign: "center",
        backgroundColor: "transparent",
        border: `${J(e.lineWidth)} ${e.lineType} transparent`,
        borderRadius: e.borderRadius,
        outline: "none",
        transition: `all ${e.motionDurationMid}`
      },
      [`&:hover ${t}-item-link`]: {
        backgroundColor: e.colorBgTextHover
      },
      [`&:active ${t}-item-link`]: {
        backgroundColor: e.colorBgTextActive
      },
      [`&${t}-disabled:hover`]: {
        [`${t}-item-link`]: {
          backgroundColor: "transparent"
        }
      }
    },
    [`${t}-slash`]: {
      marginInlineEnd: e.paginationSlashMarginInlineEnd,
      marginInlineStart: e.paginationSlashMarginInlineStart
    },
    [`${t}-options`]: {
      display: "inline-block",
      marginInlineStart: e.margin,
      verticalAlign: "middle",
      "&-size-changer": {
        display: "inline-block",
        width: "auto"
      },
      "&-quick-jumper": {
        display: "inline-block",
        height: e.controlHeight,
        marginInlineStart: e.marginXS,
        lineHeight: J(e.controlHeight),
        verticalAlign: "top",
        input: Object.assign(Object.assign(Object.assign({}, Di(e)), zi(e, {
          borderColor: e.colorBorder,
          hoverBorderColor: e.colorPrimaryHover,
          activeBorderColor: e.colorPrimary,
          activeShadow: e.activeShadow
        })), {
          "&[disabled]": Object.assign({}, _i(e)),
          width: e.calc(e.controlHeightLG).mul(1.25).equal(),
          height: e.controlHeight,
          boxSizing: "border-box",
          margin: 0,
          marginInlineStart: e.marginXS,
          marginInlineEnd: e.marginXS
        })
      }
    }
  };
}, Ll = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-item`]: {
      display: "inline-block",
      minWidth: e.itemSize,
      height: e.itemSize,
      marginInlineEnd: e.marginXS,
      fontFamily: e.fontFamily,
      lineHeight: J(e.calc(e.itemSize).sub(2).equal()),
      textAlign: "center",
      verticalAlign: "middle",
      listStyle: "none",
      backgroundColor: "transparent",
      border: `${J(e.lineWidth)} ${e.lineType} transparent`,
      borderRadius: e.borderRadius,
      outline: 0,
      cursor: "pointer",
      userSelect: "none",
      a: {
        display: "block",
        padding: `0 ${J(e.paginationItemPaddingInline)}`,
        color: e.colorText,
        "&:hover": {
          textDecoration: "none"
        }
      },
      [`&:not(${t}-item-active)`]: {
        "&:hover": {
          transition: `all ${e.motionDurationMid}`,
          backgroundColor: e.colorBgTextHover
        },
        "&:active": {
          backgroundColor: e.colorBgTextActive
        }
      },
      "&-active": {
        fontWeight: e.fontWeightStrong,
        backgroundColor: e.itemActiveBg,
        borderColor: e.colorPrimary,
        a: {
          color: e.colorPrimary
        },
        "&:hover": {
          borderColor: e.colorPrimaryHover
        },
        "&:hover a": {
          color: e.colorPrimaryHover
        }
      }
    }
  };
}, jl = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Jt(e)), {
      "ul, ol": {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        overflow: "hidden",
        visibility: "hidden",
        content: '""'
      },
      [`${t}-total-text`]: {
        display: "inline-block",
        height: e.itemSize,
        marginInlineEnd: e.marginXS,
        lineHeight: J(e.calc(e.itemSize).sub(2).equal()),
        verticalAlign: "middle"
      }
    }), Ll(e)), Tl(e)), _l(e)), zl(e)), Dl(e)), {
      // media query style
      [`@media only screen and (max-width: ${e.screenLG}px)`]: {
        [`${t}-item`]: {
          "&-after-jump-prev, &-before-jump-next": {
            display: "none"
          }
        }
      },
      [`@media only screen and (max-width: ${e.screenSM}px)`]: {
        [`${t}-options`]: {
          display: "none"
        }
      }
    }),
    // rtl style
    [`&${e.componentCls}-rtl`]: {
      direction: "rtl"
    }
  };
}, Bl = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}:not(${t}-disabled)`]: {
      [`${t}-item`]: Object.assign({}, Wi(e)),
      [`${t}-jump-prev, ${t}-jump-next`]: {
        "&:focus-visible": Object.assign({
          [`${t}-item-link-icon`]: {
            opacity: 1
          },
          [`${t}-item-ellipsis`]: {
            opacity: 0
          }
        }, qn(e))
      },
      [`${t}-prev, ${t}-next`]: {
        [`&:focus-visible ${t}-item-link`]: Object.assign({}, qn(e))
      }
    }
  };
}, oi = (e) => Object.assign({
  itemBg: e.colorBgContainer,
  itemSize: e.controlHeight,
  itemSizeSM: e.controlHeightSM,
  itemActiveBg: e.colorBgContainer,
  itemLinkBg: e.colorBgContainer,
  itemActiveColorDisabled: e.colorTextDisabled,
  itemActiveBgDisabled: e.controlItemBgActiveDisabled,
  itemInputBg: e.colorBgContainer,
  miniOptionsSizeChangerTop: 0
}, Mi(e)), ai = (e) => Nt(e, {
  inputOutlineOffset: 0,
  paginationMiniOptionsMarginInlineStart: e.calc(e.marginXXS).div(2).equal(),
  paginationMiniQuickJumperInputWidth: e.calc(e.controlHeightLG).mul(1.1).equal(),
  paginationItemPaddingInline: e.calc(e.marginXXS).mul(1.5).equal(),
  paginationEllipsisLetterSpacing: e.calc(e.marginXXS).div(2).equal(),
  paginationSlashMarginInlineStart: e.marginXXS,
  paginationSlashMarginInlineEnd: e.marginSM,
  paginationEllipsisTextIndent: "0.13em"
  // magic for ui experience
}, Ri(e)), Hl = Wt("Pagination", (e) => {
  const t = ai(e);
  return [jl(t), Bl(t)];
}, oi), Vl = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}${t}-bordered${t}-disabled:not(${t}-mini)`]: {
      "&, &:hover": {
        [`${t}-item-link`]: {
          borderColor: e.colorBorder
        }
      },
      "&:focus-visible": {
        [`${t}-item-link`]: {
          borderColor: e.colorBorder
        }
      },
      [`${t}-item, ${t}-item-link`]: {
        backgroundColor: e.colorBgContainerDisabled,
        borderColor: e.colorBorder,
        [`&:hover:not(${t}-item-active)`]: {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          a: {
            color: e.colorTextDisabled
          }
        },
        [`&${t}-item-active`]: {
          backgroundColor: e.itemActiveBgDisabled
        }
      },
      [`${t}-prev, ${t}-next`]: {
        "&:hover button": {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          color: e.colorTextDisabled
        },
        [`${t}-item-link`]: {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder
        }
      }
    },
    [`${t}${t}-bordered:not(${t}-mini)`]: {
      [`${t}-prev, ${t}-next`]: {
        "&:hover button": {
          borderColor: e.colorPrimaryHover,
          backgroundColor: e.itemBg
        },
        [`${t}-item-link`]: {
          backgroundColor: e.itemLinkBg,
          borderColor: e.colorBorder
        },
        [`&:hover ${t}-item-link`]: {
          borderColor: e.colorPrimary,
          backgroundColor: e.itemBg,
          color: e.colorPrimary
        },
        [`&${t}-disabled`]: {
          [`${t}-item-link`]: {
            borderColor: e.colorBorder,
            color: e.colorTextDisabled
          }
        }
      },
      [`${t}-item`]: {
        backgroundColor: e.itemBg,
        border: `${J(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
        [`&:hover:not(${t}-item-active)`]: {
          borderColor: e.colorPrimary,
          backgroundColor: e.itemBg,
          a: {
            color: e.colorPrimary
          }
        },
        "&-active": {
          borderColor: e.colorPrimary
        }
      }
    }
  };
}, Al = Ki(["Pagination", "bordered"], (e) => {
  const t = ai(e);
  return [Vl(t)];
}, oi);
var Fl = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
const li = (e) => {
  const {
    prefixCls: t,
    selectPrefixCls: n,
    className: r,
    rootClassName: i,
    style: a,
    size: l,
    locale: s,
    selectComponentClass: f,
    responsive: v,
    showSizeChanger: g
  } = e, m = Fl(e, ["prefixCls", "selectPrefixCls", "className", "rootClassName", "style", "size", "locale", "selectComponentClass", "responsive", "showSizeChanger"]), {
    xs: b
  } = $r(v), [, c] = fn(), {
    getPrefixCls: u,
    direction: d,
    pagination: h = {}
  } = o.useContext(xt), p = u("pagination", t), [S, y, w] = Hl(p), P = g ?? h.showSizeChanger, $ = o.useMemo(() => {
    const R = /* @__PURE__ */ o.createElement("span", {
      className: `${p}-item-ellipsis`
    }, "•••"), _ = /* @__PURE__ */ o.createElement("button", {
      className: `${p}-item-link`,
      type: "button",
      tabIndex: -1
    }, d === "rtl" ? /* @__PURE__ */ o.createElement(kn, null) : /* @__PURE__ */ o.createElement(Nn, null)), Y = /* @__PURE__ */ o.createElement("button", {
      className: `${p}-item-link`,
      type: "button",
      tabIndex: -1
    }, d === "rtl" ? /* @__PURE__ */ o.createElement(Nn, null) : /* @__PURE__ */ o.createElement(kn, null)), V = /* @__PURE__ */ o.createElement("a", {
      className: `${p}-item-link`
    }, /* @__PURE__ */ o.createElement("div", {
      className: `${p}-item-container`
    }, d === "rtl" ? /* @__PURE__ */ o.createElement(Pn, {
      className: `${p}-item-link-icon`
    }) : /* @__PURE__ */ o.createElement(Rn, {
      className: `${p}-item-link-icon`
    }), R)), M = /* @__PURE__ */ o.createElement("a", {
      className: `${p}-item-link`
    }, /* @__PURE__ */ o.createElement("div", {
      className: `${p}-item-container`
    }, d === "rtl" ? /* @__PURE__ */ o.createElement(Rn, {
      className: `${p}-item-link-icon`
    }) : /* @__PURE__ */ o.createElement(Pn, {
      className: `${p}-item-link-icon`
    }), R));
    return {
      prevIcon: _,
      nextIcon: Y,
      jumpPrevIcon: V,
      jumpNextIcon: M
    };
  }, [d, p]), [x] = yr("Pagination", Xi), D = Object.assign(Object.assign({}, x), s), O = zn(l), I = O === "small" || !!(b && !O && v), H = u("select", n), B = Se({
    [`${p}-mini`]: I,
    [`${p}-rtl`]: d === "rtl",
    [`${p}-bordered`]: c.wireframe
  }, h == null ? void 0 : h.className, r, i, y, w), T = Object.assign(Object.assign({}, h == null ? void 0 : h.style), a);
  return S(/* @__PURE__ */ o.createElement(o.Fragment, null, c.wireframe && /* @__PURE__ */ o.createElement(Al, {
    prefixCls: p
  }), /* @__PURE__ */ o.createElement(ni, Object.assign({}, $, m, {
    style: T,
    prefixCls: p,
    selectPrefixCls: H,
    className: B,
    selectComponentClass: f || (I ? ri : ii),
    locale: D,
    showSizeChanger: P
  }))));
};
process.env.NODE_ENV !== "production" && (li.displayName = "Pagination");
const Kn = /* @__PURE__ */ G.createContext({});
Kn.Consumer;
var si = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
const Wl = (e) => {
  var {
    prefixCls: t,
    className: n,
    avatar: r,
    title: i,
    description: a
  } = e, l = si(e, ["prefixCls", "className", "avatar", "title", "description"]);
  const {
    getPrefixCls: s
  } = en(xt), f = s("list", t), v = Se(`${f}-item-meta`, n), g = /* @__PURE__ */ G.createElement("div", {
    className: `${f}-item-meta-content`
  }, i && /* @__PURE__ */ G.createElement("h4", {
    className: `${f}-item-meta-title`
  }, i), a && /* @__PURE__ */ G.createElement("div", {
    className: `${f}-item-meta-description`
  }, a));
  return /* @__PURE__ */ G.createElement("div", Object.assign({}, l, {
    className: v
  }), r && /* @__PURE__ */ G.createElement("div", {
    className: `${f}-item-meta-avatar`
  }, r), (i || a) && g);
}, Kl = /* @__PURE__ */ G.forwardRef((e, t) => {
  const {
    prefixCls: n,
    children: r,
    actions: i,
    extra: a,
    className: l,
    colStyle: s
  } = e, f = si(e, ["prefixCls", "children", "actions", "extra", "className", "colStyle"]), {
    grid: v,
    itemLayout: g
  } = en(Kn), {
    getPrefixCls: m
  } = en(xt), b = () => {
    let S;
    return Jn.forEach(r, (y) => {
      typeof y == "string" && (S = !0);
    }), S && Jn.count(r) > 1;
  }, c = () => g === "vertical" ? !!a : !b(), u = m("list", n), d = i && i.length > 0 && /* @__PURE__ */ G.createElement("ul", {
    className: `${u}-item-action`,
    key: "actions"
  }, i.map((S, y) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ G.createElement("li", {
      key: `${u}-item-action-${y}`
    }, S, y !== i.length - 1 && /* @__PURE__ */ G.createElement("em", {
      className: `${u}-item-action-split`
    }))
  ))), h = v ? "div" : "li", p = /* @__PURE__ */ G.createElement(h, Object.assign({}, f, v ? {} : {
    ref: t
  }, {
    className: Se(`${u}-item`, {
      [`${u}-item-no-flex`]: !c()
    }, l)
  }), g === "vertical" && a ? [/* @__PURE__ */ G.createElement("div", {
    className: `${u}-item-main`,
    key: "content"
  }, r, d), /* @__PURE__ */ G.createElement("div", {
    className: `${u}-item-extra`,
    key: "extra"
  }, a)] : [r, d, xn(a, {
    key: "extra"
  })]);
  return v ? /* @__PURE__ */ G.createElement(kr, {
    ref: t,
    flex: 1,
    style: s
  }, p) : p;
}), ci = Kl;
ci.Meta = Wl;
const Xl = (e) => {
  const {
    listBorderedCls: t,
    componentCls: n,
    paddingLG: r,
    margin: i,
    itemPaddingSM: a,
    itemPaddingLG: l,
    marginLG: s,
    borderRadiusLG: f
  } = e;
  return {
    [`${t}`]: {
      border: `${J(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
      borderRadius: f,
      [`${n}-header,${n}-footer,${n}-item`]: {
        paddingInline: r
      },
      [`${n}-pagination`]: {
        margin: `${J(i)} ${J(s)}`
      }
    },
    [`${t}${n}-sm`]: {
      [`${n}-item,${n}-header,${n}-footer`]: {
        padding: a
      }
    },
    [`${t}${n}-lg`]: {
      [`${n}-item,${n}-header,${n}-footer`]: {
        padding: l
      }
    }
  };
}, Gl = (e) => {
  const {
    componentCls: t,
    screenSM: n,
    screenMD: r,
    marginLG: i,
    marginSM: a,
    margin: l
  } = e;
  return {
    [`@media screen and (max-width:${r}px)`]: {
      [`${t}`]: {
        [`${t}-item`]: {
          [`${t}-item-action`]: {
            marginInlineStart: i
          }
        }
      },
      [`${t}-vertical`]: {
        [`${t}-item`]: {
          [`${t}-item-extra`]: {
            marginInlineStart: i
          }
        }
      }
    },
    [`@media screen and (max-width: ${n}px)`]: {
      [`${t}`]: {
        [`${t}-item`]: {
          flexWrap: "wrap",
          [`${t}-action`]: {
            marginInlineStart: a
          }
        }
      },
      [`${t}-vertical`]: {
        [`${t}-item`]: {
          flexWrap: "wrap-reverse",
          [`${t}-item-main`]: {
            minWidth: e.contentWidth
          },
          [`${t}-item-extra`]: {
            margin: `auto auto ${J(l)}`
          }
        }
      }
    }
  };
}, Ul = (e) => {
  const {
    componentCls: t,
    antCls: n,
    controlHeight: r,
    minHeight: i,
    paddingSM: a,
    marginLG: l,
    padding: s,
    itemPadding: f,
    colorPrimary: v,
    itemPaddingSM: g,
    itemPaddingLG: m,
    paddingXS: b,
    margin: c,
    colorText: u,
    colorTextDescription: d,
    motionDurationSlow: h,
    lineWidth: p,
    headerBg: S,
    footerBg: y,
    emptyTextPadding: w,
    metaMarginBottom: P,
    avatarMarginRight: $,
    titleMarginBottom: x,
    descriptionFontSize: D
  } = e, O = {};
  return ["start", "center", "end"].forEach((I) => {
    O[`&-align-${I}`] = {
      textAlign: I
    };
  }), {
    [`${t}`]: Object.assign(Object.assign({}, Jt(e)), {
      position: "relative",
      "*": {
        outline: "none"
      },
      [`${t}-header`]: {
        background: S
      },
      [`${t}-footer`]: {
        background: y
      },
      [`${t}-header, ${t}-footer`]: {
        paddingBlock: a
      },
      [`${t}-pagination`]: Object.assign(Object.assign({
        marginBlockStart: l
      }, O), {
        // https://github.com/ant-design/ant-design/issues/20037
        [`${n}-pagination-options`]: {
          textAlign: "start"
        }
      }),
      [`${t}-spin`]: {
        minHeight: i,
        textAlign: "center"
      },
      [`${t}-items`]: {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      [`${t}-item`]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: f,
        color: u,
        [`${t}-item-meta`]: {
          display: "flex",
          flex: 1,
          alignItems: "flex-start",
          maxWidth: "100%",
          [`${t}-item-meta-avatar`]: {
            marginInlineEnd: $
          },
          [`${t}-item-meta-content`]: {
            flex: "1 0",
            width: 0,
            color: u
          },
          [`${t}-item-meta-title`]: {
            margin: `0 0 ${J(e.marginXXS)} 0`,
            color: u,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            "> a": {
              color: u,
              transition: `all ${h}`,
              "&:hover": {
                color: v
              }
            }
          },
          [`${t}-item-meta-description`]: {
            color: d,
            fontSize: D,
            lineHeight: e.lineHeight
          }
        },
        [`${t}-item-action`]: {
          flex: "0 0 auto",
          marginInlineStart: e.marginXXL,
          padding: 0,
          fontSize: 0,
          listStyle: "none",
          "& > li": {
            position: "relative",
            display: "inline-block",
            padding: `0 ${J(b)}`,
            color: d,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            textAlign: "center",
            "&:first-child": {
              paddingInlineStart: 0
            }
          },
          [`${t}-item-action-split`]: {
            position: "absolute",
            insetBlockStart: "50%",
            insetInlineEnd: 0,
            width: p,
            height: e.calc(e.fontHeight).sub(e.calc(e.marginXXS).mul(2)).equal(),
            transform: "translateY(-50%)",
            backgroundColor: e.colorSplit
          }
        }
      },
      [`${t}-empty`]: {
        padding: `${J(s)} 0`,
        color: d,
        fontSize: e.fontSizeSM,
        textAlign: "center"
      },
      [`${t}-empty-text`]: {
        padding: w,
        color: e.colorTextDisabled,
        fontSize: e.fontSize,
        textAlign: "center"
      },
      // ============================ without flex ============================
      [`${t}-item-no-flex`]: {
        display: "block"
      }
    }),
    [`${t}-grid ${n}-col > ${t}-item`]: {
      display: "block",
      maxWidth: "100%",
      marginBlockEnd: c,
      paddingBlock: 0,
      borderBlockEnd: "none"
    },
    [`${t}-vertical ${t}-item`]: {
      alignItems: "initial",
      [`${t}-item-main`]: {
        display: "block",
        flex: 1
      },
      [`${t}-item-extra`]: {
        marginInlineStart: l
      },
      [`${t}-item-meta`]: {
        marginBlockEnd: P,
        [`${t}-item-meta-title`]: {
          marginBlockStart: 0,
          marginBlockEnd: x,
          color: u,
          fontSize: e.fontSizeLG,
          lineHeight: e.lineHeightLG
        }
      },
      [`${t}-item-action`]: {
        marginBlockStart: s,
        marginInlineStart: "auto",
        "> li": {
          padding: `0 ${J(s)}`,
          "&:first-child": {
            paddingInlineStart: 0
          }
        }
      }
    },
    [`${t}-split ${t}-item`]: {
      borderBlockEnd: `${J(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
      "&:last-child": {
        borderBlockEnd: "none"
      }
    },
    [`${t}-split ${t}-header`]: {
      borderBlockEnd: `${J(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
    },
    [`${t}-split${t}-empty ${t}-footer`]: {
      borderTop: `${J(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
    },
    [`${t}-loading ${t}-spin-nested-loading`]: {
      minHeight: r
    },
    [`${t}-split${t}-something-after-last-item ${n}-spin-container > ${t}-items > ${t}-item:last-child`]: {
      borderBlockEnd: `${J(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
    },
    [`${t}-lg ${t}-item`]: {
      padding: m
    },
    [`${t}-sm ${t}-item`]: {
      padding: g
    },
    // Horizontal
    [`${t}:not(${t}-vertical)`]: {
      [`${t}-item-no-flex`]: {
        [`${t}-item-action`]: {
          float: "right"
        }
      }
    }
  };
}, ql = (e) => ({
  contentWidth: 220,
  itemPadding: `${J(e.paddingContentVertical)} 0`,
  itemPaddingSM: `${J(e.paddingContentVerticalSM)} ${J(e.paddingContentHorizontal)}`,
  itemPaddingLG: `${J(e.paddingContentVerticalLG)} ${J(e.paddingContentHorizontalLG)}`,
  headerBg: "transparent",
  footerBg: "transparent",
  emptyTextPadding: e.padding,
  metaMarginBottom: e.padding,
  avatarMarginRight: e.padding,
  titleMarginBottom: e.paddingSM,
  descriptionFontSize: e.fontSize
}), Yl = Wt("List", (e) => {
  const t = Nt(e, {
    listBorderedCls: `${e.componentCls}-bordered`,
    minHeight: e.controlHeightLG
  });
  return [Ul(t), Xl(t), Gl(t)];
}, ql);
var Jl = function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
function qt(e) {
  var t, {
    pagination: n = !1,
    prefixCls: r,
    bordered: i = !1,
    split: a = !0,
    className: l,
    rootClassName: s,
    style: f,
    children: v,
    itemLayout: g,
    loadMore: m,
    grid: b,
    dataSource: c = [],
    size: u,
    header: d,
    footer: h,
    loading: p = !1,
    rowKey: S,
    renderItem: y,
    locale: w
  } = e, P = Jl(e, ["pagination", "prefixCls", "bordered", "split", "className", "rootClassName", "style", "children", "itemLayout", "loadMore", "grid", "dataSource", "size", "header", "footer", "loading", "rowKey", "renderItem", "locale"]);
  const $ = n && typeof n == "object" ? n : {}, [x, D] = o.useState($.defaultCurrent || 1), [O, I] = o.useState($.defaultPageSize || 10), {
    getPrefixCls: H,
    renderEmpty: B,
    direction: T,
    list: R
  } = o.useContext(xt), _ = {
    current: 1,
    total: 0
  }, Y = (le) => ($e, Ce) => {
    var be;
    D($e), I(Ce), n && n[le] && ((be = n == null ? void 0 : n[le]) === null || be === void 0 || be.call(n, $e, Ce));
  }, V = Y("onChange"), M = Y("onShowSizeChange"), L = (le, $e) => {
    if (!y)
      return null;
    let Ce;
    return typeof S == "function" ? Ce = S(le) : S ? Ce = le[S] : Ce = le.key, Ce || (Ce = `list-item-${$e}`), /* @__PURE__ */ o.createElement(o.Fragment, {
      key: Ce
    }, y(le, $e));
  }, k = () => !!(m || n || h), W = H("list", r), [Ie, de, fe] = Yl(W);
  let me = p;
  typeof me == "boolean" && (me = {
    spinning: me
  });
  const Ae = me && me.spinning, ie = zn(u);
  let ye = "";
  switch (ie) {
    case "large":
      ye = "lg";
      break;
    case "small":
      ye = "sm";
      break;
  }
  const _e = Se(W, {
    [`${W}-vertical`]: g === "vertical",
    [`${W}-${ye}`]: ye,
    [`${W}-split`]: a,
    [`${W}-bordered`]: i,
    [`${W}-loading`]: Ae,
    [`${W}-grid`]: !!b,
    [`${W}-something-after-last-item`]: k(),
    [`${W}-rtl`]: T === "rtl"
  }, R == null ? void 0 : R.className, l, s, de, fe), N = wl(_, {
    total: c.length,
    current: x,
    pageSize: O
  }, n || {}), C = Math.ceil(N.total / N.pageSize);
  N.current > C && (N.current = C);
  const F = n ? /* @__PURE__ */ o.createElement("div", {
    className: Se(`${W}-pagination`, `${W}-pagination-align-${(t = N == null ? void 0 : N.align) !== null && t !== void 0 ? t : "end"}`)
  }, /* @__PURE__ */ o.createElement(li, Object.assign({}, N, {
    onChange: V,
    onShowSizeChange: M
  }))) : null;
  let Q = ft(c);
  n && c.length > (N.current - 1) * N.pageSize && (Q = ft(c).splice((N.current - 1) * N.pageSize, N.pageSize));
  const j = Object.keys(b || {}).some((le) => ["xs", "sm", "md", "lg", "xl", "xxl"].includes(le)), E = $r(j), ee = o.useMemo(() => {
    for (let le = 0; le < Yt.length; le += 1) {
      const $e = Yt[le];
      if (E[$e])
        return $e;
    }
  }, [E]), xe = o.useMemo(() => {
    if (!b)
      return;
    const le = ee && b[ee] ? b[ee] : b.column;
    if (le)
      return {
        width: `${100 / le}%`,
        maxWidth: `${100 / le}%`
      };
  }, [JSON.stringify(b), ee]);
  let ae = Ae && /* @__PURE__ */ o.createElement("div", {
    style: {
      minHeight: 53
    }
  });
  if (Q.length > 0) {
    const le = Q.map(($e, Ce) => L($e, Ce));
    ae = b ? /* @__PURE__ */ o.createElement(ei, {
      gutter: b.gutter
    }, o.Children.map(le, ($e) => /* @__PURE__ */ o.createElement("div", {
      key: $e == null ? void 0 : $e.key,
      style: xe
    }, $e))) : /* @__PURE__ */ o.createElement("ul", {
      className: `${W}-items`
    }, le);
  } else
    !v && !Ae && (ae = /* @__PURE__ */ o.createElement("div", {
      className: `${W}-empty-text`
    }, w && w.emptyText || (B == null ? void 0 : B("List")) || /* @__PURE__ */ o.createElement(Xr, {
      componentName: "List"
    })));
  const ve = N.position || "bottom", Oe = o.useMemo(() => ({
    grid: b,
    itemLayout: g
  }), [JSON.stringify(b), g]);
  return Ie(/* @__PURE__ */ o.createElement(Kn.Provider, {
    value: Oe
  }, /* @__PURE__ */ o.createElement("div", Object.assign({
    style: Object.assign(Object.assign({}, R == null ? void 0 : R.style), f),
    className: _e
  }, P), (ve === "top" || ve === "both") && F, d && /* @__PURE__ */ o.createElement("div", {
    className: `${W}-header`
  }, d), /* @__PURE__ */ o.createElement(Wn, Object.assign({}, me), ae, v), h && /* @__PURE__ */ o.createElement("div", {
    className: `${W}-footer`
  }, h), m || (ve === "bottom" || ve === "both") && F)));
}
process.env.NODE_ENV !== "production" && (qt.displayName = "List");
qt.Item = ci;
const us = (e) => {
  var f, v, g, m, b, c;
  const t = en(Yi);
  if (!t)
    return null;
  const n = (u) => e.filter === Zn.ALL || !e.filter ? u : e.filter === Zn.UNARCHIVED ? u.filter((d) => !d.archived) : u.filter(e.filter);
  if (t.notifications === void 0)
    return null;
  const i = n(t.notifications).sort((u, d) => new Date(u.date).getTime() - new Date(d.date).getTime()), a = {}, l = new qi();
  i.forEach((u) => {
    var d, h;
    if ((h = (d = u.deliveryOptions) == null ? void 0 : d.instant) != null && h.batching) {
      const p = u.deliveryOptions.instant.batchingKey, S = p ? l.parseAndRenderSync(`{{${p}}}`, u) : "", y = `${u.notificationId}-${S}`;
      a[y] ? a[y].push(u) : a[y] = [u];
    } else {
      const p = u.id;
      a[p] = [u];
    }
  });
  const s = Object.values(a).sort(
    (u, d) => new Date(d[d.length - 1].date).getTime() - new Date(u[u.length - 1].date).getTime()
  );
  return /* @__PURE__ */ Ct("div", { children: e.pagination === "INFINITE_SCROLL" ? /* @__PURE__ */ fi(
    qt,
    {
      header: /* @__PURE__ */ Ct(
        Gn,
        {
          title: (f = e.header) == null ? void 0 : f.title,
          button1ClickHandler: (v = e.header) == null ? void 0 : v.button1ClickHandler,
          button2ClickHandler: (g = e.header) == null ? void 0 : g.button2ClickHandler
        }
      ),
      dataSource: s,
      children: [
        s.length === 0 && /* @__PURE__ */ Ct(
          ht,
          {
            image: ht.PRESENTED_IMAGE_SIMPLE,
            description: "You are caught up!"
          }
        ),
        /* @__PURE__ */ Ct(
          Vn,
          {
            data: s,
            height: e.maxHeight,
            itemHeight: 47,
            itemKey: (u) => u[0].id,
            onScroll: (u) => {
              Math.abs(
                u.currentTarget.scrollHeight - u.currentTarget.scrollTop - e.maxHeight
              ) <= 1 && t.loadNotifications();
            },
            children: (u) => /* @__PURE__ */ Ct(qt.Item, { style: { padding: 0 }, children: /* @__PURE__ */ Ct(
              Qn,
              {
                imageShape: e.imageShape,
                markAsArchived: t.markAsArchived,
                notifications: u,
                markAsClicked: t.markAsClicked,
                renderer: e.notificationRenderer
              }
            ) }, u[0].id)
          }
        )
      ]
    }
  ) : /* @__PURE__ */ Ct(
    qt,
    {
      header: /* @__PURE__ */ Ct(
        Gn,
        {
          title: (m = e.header) == null ? void 0 : m.title,
          button1ClickHandler: (b = e.header) == null ? void 0 : b.button1ClickHandler,
          button2ClickHandler: (c = e.header) == null ? void 0 : c.button2ClickHandler
        }
      ),
      dataSource: s,
      renderItem: (u) => /* @__PURE__ */ Ct(qt.Item, { style: { padding: 0 }, children: /* @__PURE__ */ Ct(
        Qn,
        {
          imageShape: e.imageShape,
          markAsArchived: t.markAsArchived,
          notifications: u,
          markAsClicked: t.markAsClicked,
          renderer: e.notificationRenderer
        }
      ) }, u[0].id),
      pagination: {
        pageSize: e.pageSize,
        align: "center",
        position: e.pagePosition,
        showSizeChanger: !1,
        simple: !0,
        onChange(u, d) {
          u >= Math.floor(t.notifications.length / d) && t.loadNotifications();
        }
      },
      children: s.length === 0 && /* @__PURE__ */ Ct(
        ht,
        {
          image: ht.PRESENTED_IMAGE_SIMPLE,
          description: "You are caught up!"
        }
      )
    }
  ) });
};
export {
  us as Inbox
};
