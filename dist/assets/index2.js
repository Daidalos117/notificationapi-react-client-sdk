import * as l from "react";
import { useMemo as et, useRef as X } from "react";
import { c as w } from "./index3.js";
import { g as nt, K as z, b as rt, r as it, u as j, m as Ot, a as K, i as st, c as at, d as xt } from "./colors.js";
const wt = new z("antStatusProcessing", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0.5
  },
  "100%": {
    transform: "scale(2.4)",
    opacity: 0
  }
}), jt = new z("antZoomBadgeIn", {
  "0%": {
    transform: "scale(0) translate(50%, -50%)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1) translate(50%, -50%)"
  }
}), Et = new z("antZoomBadgeOut", {
  "0%": {
    transform: "scale(1) translate(50%, -50%)"
  },
  "100%": {
    transform: "scale(0) translate(50%, -50%)",
    opacity: 0
  }
}), Pt = new z("antNoWrapperZoomBadgeIn", {
  "0%": {
    transform: "scale(0)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)"
  }
}), It = new z("antNoWrapperZoomBadgeOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0)",
    opacity: 0
  }
}), zt = new z("antBadgeLoadingCircle", {
  "0%": {
    transformOrigin: "50%"
  },
  "100%": {
    transform: "translate(50%, -50%) rotate(360deg)",
    transformOrigin: "50%"
  }
}), Bt = (t) => {
  const {
    componentCls: e,
    iconCls: i,
    antCls: n,
    badgeShadowSize: o,
    motionDurationSlow: d,
    textFontSize: a,
    textFontSizeSM: h,
    statusSize: y,
    dotSize: g,
    textFontWeight: m,
    indicatorHeight: s,
    indicatorHeightSM: c,
    marginXS: f,
    calc: v
  } = t, u = `${n}-scroll-number`, C = rt(t, (b, $) => {
    let {
      darkColor: S
    } = $;
    return {
      [`&${e} ${e}-color-${b}`]: {
        background: S,
        [`&:not(${e}-count)`]: {
          color: S
        },
        "a:hover &": {
          background: S
        }
      }
    };
  });
  return {
    [e]: Object.assign(Object.assign(Object.assign(Object.assign({}, it(t)), {
      position: "relative",
      display: "inline-block",
      width: "fit-content",
      lineHeight: 1,
      [`${e}-count`]: {
        display: "inline-flex",
        justifyContent: "center",
        zIndex: t.indicatorZIndex,
        minWidth: s,
        height: s,
        color: t.badgeTextColor,
        fontWeight: m,
        fontSize: a,
        lineHeight: j(s),
        whiteSpace: "nowrap",
        textAlign: "center",
        background: t.badgeColor,
        borderRadius: v(s).div(2).equal(),
        boxShadow: `0 0 0 ${j(o)} ${t.badgeShadowColor}`,
        transition: `background ${t.motionDurationMid}`,
        a: {
          color: t.badgeTextColor
        },
        "a:hover": {
          color: t.badgeTextColor
        },
        "a:hover &": {
          background: t.badgeColorHover
        }
      },
      [`${e}-count-sm`]: {
        minWidth: c,
        height: c,
        fontSize: h,
        lineHeight: j(c),
        borderRadius: v(c).div(2).equal()
      },
      [`${e}-multiple-words`]: {
        padding: `0 ${j(t.paddingXS)}`,
        bdi: {
          unicodeBidi: "plaintext"
        }
      },
      [`${e}-dot`]: {
        zIndex: t.indicatorZIndex,
        width: g,
        minWidth: g,
        height: g,
        background: t.badgeColor,
        borderRadius: "100%",
        boxShadow: `0 0 0 ${j(o)} ${t.badgeShadowColor}`
      },
      [`${e}-dot${u}`]: {
        transition: `background ${d}`
      },
      [`${e}-count, ${e}-dot, ${u}-custom-component`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: 0,
        transform: "translate(50%, -50%)",
        transformOrigin: "100% 0%",
        [`&${i}-spin`]: {
          animationName: zt,
          animationDuration: "1s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        }
      },
      [`&${e}-status`]: {
        lineHeight: "inherit",
        verticalAlign: "baseline",
        [`${e}-status-dot`]: {
          position: "relative",
          top: -1,
          // Magic number, but seems better experience
          display: "inline-block",
          width: y,
          height: y,
          verticalAlign: "middle",
          borderRadius: "50%"
        },
        [`${e}-status-success`]: {
          backgroundColor: t.colorSuccess
        },
        [`${e}-status-processing`]: {
          overflow: "visible",
          color: t.colorInfo,
          backgroundColor: t.colorInfo,
          "&::after": {
            position: "absolute",
            top: 0,
            insetInlineStart: 0,
            width: "100%",
            height: "100%",
            borderWidth: o,
            borderStyle: "solid",
            borderColor: "inherit",
            borderRadius: "50%",
            animationName: wt,
            animationDuration: t.badgeProcessingDuration,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
            content: '""'
          }
        },
        [`${e}-status-default`]: {
          backgroundColor: t.colorTextPlaceholder
        },
        [`${e}-status-error`]: {
          backgroundColor: t.colorError
        },
        [`${e}-status-warning`]: {
          backgroundColor: t.colorWarning
        },
        [`${e}-status-text`]: {
          marginInlineStart: f,
          color: t.colorText,
          fontSize: t.fontSize
        }
      }
    }), C), {
      [`${e}-zoom-appear, ${e}-zoom-enter`]: {
        animationName: jt,
        animationDuration: t.motionDurationSlow,
        animationTimingFunction: t.motionEaseOutBack,
        animationFillMode: "both"
      },
      [`${e}-zoom-leave`]: {
        animationName: Et,
        animationDuration: t.motionDurationSlow,
        animationTimingFunction: t.motionEaseOutBack,
        animationFillMode: "both"
      },
      [`&${e}-not-a-wrapper`]: {
        [`${e}-zoom-appear, ${e}-zoom-enter`]: {
          animationName: Pt,
          animationDuration: t.motionDurationSlow,
          animationTimingFunction: t.motionEaseOutBack
        },
        [`${e}-zoom-leave`]: {
          animationName: It,
          animationDuration: t.motionDurationSlow,
          animationTimingFunction: t.motionEaseOutBack
        },
        [`&:not(${e}-status)`]: {
          verticalAlign: "middle"
        },
        [`${u}-custom-component, ${e}-count`]: {
          transform: "none"
        },
        [`${u}-custom-component, ${u}`]: {
          position: "relative",
          top: "auto",
          display: "block",
          transformOrigin: "50% 50%"
        }
      },
      [`${u}`]: {
        overflow: "hidden",
        [`${u}-only`]: {
          position: "relative",
          display: "inline-block",
          height: s,
          transition: `all ${t.motionDurationSlow} ${t.motionEaseOutBack}`,
          WebkitTransformStyle: "preserve-3d",
          WebkitBackfaceVisibility: "hidden",
          [`> p${u}-only-unit`]: {
            height: s,
            margin: 0,
            WebkitTransformStyle: "preserve-3d",
            WebkitBackfaceVisibility: "hidden"
          }
        },
        [`${u}-symbol`]: {
          verticalAlign: "top"
        }
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl",
        [`${e}-count, ${e}-dot, ${u}-custom-component`]: {
          transform: "translate(-50%, -50%)"
        }
      }
    })
  };
}, lt = (t) => {
  const {
    fontHeight: e,
    lineWidth: i,
    marginXS: n,
    colorBorderBg: o
  } = t, d = e, a = i, h = t.colorBgContainer, y = t.colorError, g = t.colorErrorHover;
  return Ot(t, {
    badgeFontHeight: d,
    badgeShadowSize: a,
    badgeTextColor: h,
    badgeColor: y,
    badgeColorHover: g,
    badgeShadowColor: o,
    badgeProcessingDuration: "1.2s",
    badgeRibbonOffset: n,
    // Follow token just by Design. Not related with token
    badgeRibbonCornerTransform: "scaleY(0.75)",
    badgeRibbonCornerFilter: "brightness(75%)"
  });
}, ct = (t) => {
  const {
    fontSize: e,
    lineHeight: i,
    fontSizeSM: n,
    lineWidth: o
  } = t;
  return {
    indicatorZIndex: "auto",
    indicatorHeight: Math.round(e * i) - 2 * o,
    indicatorHeightSM: e,
    dotSize: n / 2,
    textFontSize: n,
    textFontSizeSM: n,
    textFontWeight: "normal",
    statusSize: n / 2
  };
}, Tt = nt("Badge", (t) => {
  const e = lt(t);
  return Bt(e);
}, ct), Rt = (t) => {
  const {
    antCls: e,
    badgeFontHeight: i,
    marginXS: n,
    badgeRibbonOffset: o,
    calc: d
  } = t, a = `${e}-ribbon`, h = `${e}-ribbon-wrapper`, y = rt(t, (g, m) => {
    let {
      darkColor: s
    } = m;
    return {
      [`&${a}-color-${g}`]: {
        background: s,
        color: s
      }
    };
  });
  return {
    [`${h}`]: {
      position: "relative"
    },
    [`${a}`]: Object.assign(Object.assign(Object.assign(Object.assign({}, it(t)), {
      position: "absolute",
      top: n,
      padding: `0 ${j(t.paddingXS)}`,
      color: t.colorPrimary,
      lineHeight: j(i),
      whiteSpace: "nowrap",
      backgroundColor: t.colorPrimary,
      borderRadius: t.borderRadiusSM,
      [`${a}-text`]: {
        color: t.colorTextLightSolid
      },
      [`${a}-corner`]: {
        position: "absolute",
        top: "100%",
        width: o,
        height: o,
        color: "currentcolor",
        border: `${j(d(o).div(2).equal())} solid`,
        transform: t.badgeRibbonCornerTransform,
        transformOrigin: "top",
        filter: t.badgeRibbonCornerFilter
      }
    }), y), {
      [`&${a}-placement-end`]: {
        insetInlineEnd: d(o).mul(-1).equal(),
        borderEndEndRadius: 0,
        [`${a}-corner`]: {
          insetInlineEnd: 0,
          borderInlineEndColor: "transparent",
          borderBlockEndColor: "transparent"
        }
      },
      [`&${a}-placement-start`]: {
        insetInlineStart: d(o).mul(-1).equal(),
        borderEndStartRadius: 0,
        [`${a}-corner`]: {
          insetInlineStart: 0,
          borderBlockEndColor: "transparent",
          borderInlineStartColor: "transparent"
        }
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
}, Dt = nt(["Badge", "Ribbon"], (t) => {
  const e = lt(t);
  return Rt(e);
}, ct), dt = (t) => {
  const {
    className: e,
    prefixCls: i,
    style: n,
    color: o,
    children: d,
    text: a,
    placement: h = "end",
    rootClassName: y
  } = t, {
    getPrefixCls: g,
    direction: m
  } = l.useContext(K), s = g("ribbon", i), c = `${s}-wrapper`, [f, v, u] = Dt(s, c), C = st(o, !1), b = w(s, `${s}-placement-${h}`, {
    [`${s}-rtl`]: m === "rtl",
    [`${s}-color-${o}`]: C
  }, e), $ = {}, S = {};
  return o && !C && ($.background = o, S.color = o), f(/* @__PURE__ */ l.createElement("div", {
    className: w(c, y, v, u)
  }, d, /* @__PURE__ */ l.createElement("div", {
    className: w(b, v),
    style: Object.assign(Object.assign({}, $), n)
  }, /* @__PURE__ */ l.createElement("span", {
    className: `${s}-text`
  }, a), /* @__PURE__ */ l.createElement("div", {
    className: `${s}-corner`,
    style: S
  }))));
};
process.env.NODE_ENV !== "production" && (dt.displayName = "Ribbon");
function ot(t) {
  let {
    prefixCls: e,
    value: i,
    current: n,
    offset: o = 0
  } = t, d;
  return o && (d = {
    position: "absolute",
    top: `${o}00%`,
    left: 0
  }), /* @__PURE__ */ l.createElement("span", {
    style: d,
    className: w(`${e}-only-unit`, {
      current: n
    })
  }, i);
}
function Wt(t, e, i) {
  let n = t, o = 0;
  for (; (n + 10) % 10 !== e; )
    n += i, o += i;
  return o;
}
function Ft(t) {
  const {
    prefixCls: e,
    count: i,
    value: n
  } = t, o = Number(n), d = Math.abs(i), [a, h] = l.useState(o), [y, g] = l.useState(d), m = () => {
    h(o), g(d);
  };
  l.useEffect(() => {
    const f = setTimeout(() => {
      m();
    }, 1e3);
    return () => {
      clearTimeout(f);
    };
  }, [o]);
  let s, c;
  if (a === o || Number.isNaN(o) || Number.isNaN(a))
    s = [/* @__PURE__ */ l.createElement(ot, Object.assign({}, t, {
      key: o,
      current: !0
    }))], c = {
      transition: "none"
    };
  else {
    s = [];
    const f = o + 10, v = [];
    for (let b = o; b <= f; b += 1)
      v.push(b);
    const u = v.findIndex((b) => b % 10 === a);
    s = v.map((b, $) => {
      const S = b % 10;
      return /* @__PURE__ */ l.createElement(ot, Object.assign({}, t, {
        key: b,
        value: S,
        offset: $ - u,
        current: $ === u
      }));
    });
    const C = y < d ? 1 : -1;
    c = {
      transform: `translateY(${-Wt(a, o, C)}00%)`
    };
  }
  return /* @__PURE__ */ l.createElement("span", {
    className: `${e}-only`,
    style: c,
    onTransitionEnd: m
  }, s);
}
var Ht = function(t, e) {
  var i = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++)
      e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (i[n[o]] = t[n[o]]);
  return i;
};
const _t = /* @__PURE__ */ l.forwardRef((t, e) => {
  const {
    prefixCls: i,
    count: n,
    className: o,
    motionClassName: d,
    style: a,
    title: h,
    show: y,
    component: g = "sup",
    children: m
  } = t, s = Ht(t, ["prefixCls", "count", "className", "motionClassName", "style", "title", "show", "component", "children"]), {
    getPrefixCls: c
  } = l.useContext(K), f = c("scroll-number", i), v = Object.assign(Object.assign({}, s), {
    "data-show": y,
    style: a,
    className: w(f, o, d),
    title: h
  });
  let u = n;
  if (n && Number(n) % 1 === 0) {
    const C = String(n).split("");
    u = /* @__PURE__ */ l.createElement("bdi", null, C.map((b, $) => /* @__PURE__ */ l.createElement(Ft, {
      prefixCls: f,
      count: Number(n),
      value: b,
      // eslint-disable-next-line react/no-array-index-key
      key: C.length - $
    })));
  }
  return a && a.borderColor && (v.style = Object.assign(Object.assign({}, a), {
    boxShadow: `0 0 0 1px ${a.borderColor} inset`
  })), m ? at(m, (C) => ({
    className: w(`${f}-custom-component`, C == null ? void 0 : C.className, d)
  })) : /* @__PURE__ */ l.createElement(g, Object.assign({}, v, {
    ref: e
  }), u);
});
var Zt = function(t, e) {
  var i = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++)
      e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (i[n[o]] = t[n[o]]);
  return i;
};
const Mt = /* @__PURE__ */ l.forwardRef((t, e) => {
  var i, n, o, d, a;
  const {
    prefixCls: h,
    scrollNumberPrefixCls: y,
    children: g,
    status: m,
    text: s,
    color: c,
    count: f = null,
    overflowCount: v = 99,
    dot: u = !1,
    size: C = "default",
    title: b,
    offset: $,
    style: S,
    className: mt,
    rootClassName: bt,
    classNames: x,
    styles: N,
    showZero: F = !1
  } = t, U = Zt(t, ["prefixCls", "scrollNumberPrefixCls", "children", "status", "text", "color", "count", "overflowCount", "dot", "size", "title", "offset", "style", "className", "rootClassName", "classNames", "styles", "showZero"]), {
    getPrefixCls: Y,
    direction: H,
    badge: r
  } = l.useContext(K), p = Y("badge", h), [k, gt, ft] = Tt(p), _ = f > v ? `${v}+` : f, T = _ === "0" || _ === 0, pt = f === null || T && !F, Z = (m != null || c != null) && pt, B = u && !T, E = B ? "" : _, P = et(() => (E == null || E === "" || T && !F) && !B, [E, T, F, B]), G = X(f);
  P || (G.current = f);
  const I = G.current, J = X(E);
  P || (J.current = E);
  const M = J.current, Q = X(B);
  P || (Q.current = B);
  const R = et(() => {
    if (!$)
      return Object.assign(Object.assign({}, r == null ? void 0 : r.style), S);
    const O = {
      marginTop: $[1]
    };
    return H === "rtl" ? O.left = parseInt($[0], 10) : O.right = -parseInt($[0], 10), Object.assign(Object.assign(Object.assign({}, O), r == null ? void 0 : r.style), S);
  }, [H, $, S, r == null ? void 0 : r.style]), vt = b ?? (typeof I == "string" || typeof I == "number" ? I : void 0), Ct = P || !s ? null : /* @__PURE__ */ l.createElement("span", {
    className: `${p}-status-text`
  }, s), $t = !I || typeof I != "object" ? void 0 : at(I, (O) => ({
    style: Object.assign(Object.assign({}, R), O.style)
  })), D = st(c, !1), yt = w(x == null ? void 0 : x.indicator, (i = r == null ? void 0 : r.classNames) === null || i === void 0 ? void 0 : i.indicator, {
    [`${p}-status-dot`]: Z,
    [`${p}-status-${m}`]: !!m,
    [`${p}-color-${c}`]: D
  }), V = {};
  c && !D && (V.color = c, V.background = c);
  const tt = w(p, {
    [`${p}-status`]: Z,
    [`${p}-not-a-wrapper`]: !g,
    [`${p}-rtl`]: H === "rtl"
  }, mt, bt, r == null ? void 0 : r.className, (n = r == null ? void 0 : r.classNames) === null || n === void 0 ? void 0 : n.root, x == null ? void 0 : x.root, gt, ft);
  if (!g && Z) {
    const O = R.color;
    return k(/* @__PURE__ */ l.createElement("span", Object.assign({}, U, {
      className: tt,
      style: Object.assign(Object.assign(Object.assign({}, N == null ? void 0 : N.root), (o = r == null ? void 0 : r.styles) === null || o === void 0 ? void 0 : o.root), R)
    }), /* @__PURE__ */ l.createElement("span", {
      className: yt,
      style: Object.assign(Object.assign(Object.assign({}, N == null ? void 0 : N.indicator), (d = r == null ? void 0 : r.styles) === null || d === void 0 ? void 0 : d.indicator), V)
    }), s && /* @__PURE__ */ l.createElement("span", {
      style: {
        color: O
      },
      className: `${p}-status-text`
    }, s)));
  }
  return k(/* @__PURE__ */ l.createElement("span", Object.assign({
    ref: e
  }, U, {
    className: tt,
    style: Object.assign(Object.assign({}, (a = r == null ? void 0 : r.styles) === null || a === void 0 ? void 0 : a.root), N == null ? void 0 : N.root)
  }), g, /* @__PURE__ */ l.createElement(xt, {
    visible: !P,
    motionName: `${p}-zoom`,
    motionAppear: !1,
    motionDeadline: 1e3
  }, (O) => {
    let {
      className: ht
    } = O;
    var A, q;
    const St = Y("scroll-number", y), L = Q.current, Nt = w(x == null ? void 0 : x.indicator, (A = r == null ? void 0 : r.classNames) === null || A === void 0 ? void 0 : A.indicator, {
      [`${p}-dot`]: L,
      [`${p}-count`]: !L,
      [`${p}-count-sm`]: C === "small",
      [`${p}-multiple-words`]: !L && M && M.toString().length > 1,
      [`${p}-status-${m}`]: !!m,
      [`${p}-color-${c}`]: D
    });
    let W = Object.assign(Object.assign(Object.assign({}, N == null ? void 0 : N.indicator), (q = r == null ? void 0 : r.styles) === null || q === void 0 ? void 0 : q.indicator), R);
    return c && !D && (W = W || {}, W.background = c), /* @__PURE__ */ l.createElement(_t, {
      prefixCls: St,
      show: !P,
      motionClassName: ht,
      className: Nt,
      count: M,
      title: vt,
      style: W,
      key: "scrollNumber"
    }, $t);
  }), Ct));
}), ut = Mt;
ut.Ribbon = dt;
process.env.NODE_ENV !== "production" && (ut.displayName = "Badge");
export {
  ut as B
};
