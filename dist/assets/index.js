import * as a from "react";
import { c as P } from "./index3.js";
import { i as z, g as M, a as R, b as V, P as A, u as H, c as L, d as K, K as F } from "./index4.js";
import { g as G, m as U, r as X, P as Y, a as S, c as Z } from "./colors.js";
const b = (e) => e ? typeof e == "function" ? e() : e : null, q = (e) => {
  const {
    componentCls: n,
    popoverColor: o,
    titleMinWidth: t,
    fontWeightStrong: r,
    innerPadding: l,
    boxShadowSecondary: i,
    colorTextHeading: c,
    borderRadiusLG: d,
    zIndexPopup: f,
    titleMarginBottom: p,
    colorBgElevated: v,
    popoverBg: u,
    titleBorderBottom: m,
    innerContentPadding: y,
    titlePadding: g
  } = e;
  return [
    {
      [n]: Object.assign(Object.assign({}, X(e)), {
        position: "absolute",
        top: 0,
        // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
        left: {
          _skip_check_: !0,
          value: 0
        },
        zIndex: f,
        fontWeight: "normal",
        whiteSpace: "normal",
        textAlign: "start",
        cursor: "auto",
        userSelect: "text",
        transformOrigin: "var(--arrow-x, 50%) var(--arrow-y, 50%)",
        "--antd-arrow-background-color": v,
        width: "max-content",
        maxWidth: "100vw",
        "&-rtl": {
          direction: "rtl"
        },
        "&-hidden": {
          display: "none"
        },
        [`${n}-content`]: {
          position: "relative"
        },
        [`${n}-inner`]: {
          backgroundColor: u,
          backgroundClip: "padding-box",
          borderRadius: d,
          boxShadow: i,
          padding: l
        },
        [`${n}-title`]: {
          minWidth: t,
          marginBottom: p,
          color: c,
          fontWeight: r,
          borderBottom: m,
          padding: g
        },
        [`${n}-inner-content`]: {
          color: o,
          padding: y
        }
      })
    },
    // Arrow Style
    M(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${n}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow,
        display: "inline-block",
        [`${n}-content`]: {
          display: "inline-block"
        }
      }
    }
  ];
}, J = (e) => {
  const {
    componentCls: n
  } = e;
  return {
    [n]: Y.map((o) => {
      const t = e[`${o}6`];
      return {
        [`&${n}-${o}`]: {
          "--antd-arrow-background-color": t,
          [`${n}-inner`]: {
            backgroundColor: t
          },
          [`${n}-arrow`]: {
            background: "transparent"
          }
        }
      };
    })
  };
}, Q = (e) => {
  const {
    lineWidth: n,
    controlHeight: o,
    fontHeight: t,
    padding: r,
    wireframe: l,
    zIndexPopupBase: i,
    borderRadiusLG: c,
    marginXS: d,
    lineType: f,
    colorSplit: p,
    paddingSM: v
  } = e, u = o - t, m = u / 2, y = u / 2 - n, g = r;
  return Object.assign(Object.assign(Object.assign({
    titleMinWidth: 177,
    zIndexPopup: i + 30
  }, R(e)), V({
    contentRadius: c,
    limitVerticalRadius: !0
  })), {
    // internal
    innerPadding: l ? 0 : 12,
    titleMarginBottom: l ? 0 : d,
    titlePadding: l ? `${m}px ${g}px ${y}px` : 0,
    titleBorderBottom: l ? `${n}px ${f} ${p}` : "none",
    innerContentPadding: l ? `${v}px ${g}px` : 0
  });
}, $ = G("Popover", (e) => {
  const {
    colorBgElevated: n,
    colorText: o
  } = e, t = U(e, {
    popoverBg: n,
    popoverColor: o
  });
  return [q(t), J(t), z(t, "zoom-big")];
}, Q, {
  resetStyle: !1,
  deprecatedTokens: [["width", "titleMinWidth"], ["minWidth", "titleMinWidth"]]
});
var ee = function(e, n) {
  var o = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, t = Object.getOwnPropertySymbols(e); r < t.length; r++)
      n.indexOf(t[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[r]) && (o[t[r]] = e[t[r]]);
  return o;
};
const te = (e, n, o) => !n && !o ? null : /* @__PURE__ */ a.createElement(a.Fragment, null, n && /* @__PURE__ */ a.createElement("div", {
  className: `${e}-title`
}, b(n)), /* @__PURE__ */ a.createElement("div", {
  className: `${e}-inner-content`
}, b(o))), ne = (e) => {
  const {
    hashId: n,
    prefixCls: o,
    className: t,
    style: r,
    placement: l = "top",
    title: i,
    content: c,
    children: d
  } = e;
  return /* @__PURE__ */ a.createElement("div", {
    className: P(n, o, `${o}-pure`, `${o}-placement-${l}`, t),
    style: r
  }, /* @__PURE__ */ a.createElement("div", {
    className: `${o}-arrow`
  }), /* @__PURE__ */ a.createElement(A, Object.assign({}, e, {
    className: n,
    prefixCls: o
  }), d || te(o, i, c)));
}, oe = (e) => {
  const {
    prefixCls: n,
    className: o
  } = e, t = ee(e, ["prefixCls", "className"]), {
    getPrefixCls: r
  } = a.useContext(S), l = r("popover", n), [i, c, d] = $(l);
  return i(/* @__PURE__ */ a.createElement(ne, Object.assign({}, t, {
    prefixCls: l,
    hashId: c,
    className: P(o, d)
  })));
};
var re = function(e, n) {
  var o = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, t = Object.getOwnPropertySymbols(e); r < t.length; r++)
      n.indexOf(t[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[r]) && (o[t[r]] = e[t[r]]);
  return o;
};
const ae = (e) => {
  let {
    title: n,
    content: o,
    prefixCls: t
  } = e;
  return /* @__PURE__ */ a.createElement(a.Fragment, null, n && /* @__PURE__ */ a.createElement("div", {
    className: `${t}-title`
  }, b(n)), /* @__PURE__ */ a.createElement("div", {
    className: `${t}-inner-content`
  }, b(o)));
}, le = /* @__PURE__ */ a.forwardRef((e, n) => {
  var o, t;
  const {
    prefixCls: r,
    title: l,
    content: i,
    overlayClassName: c,
    placement: d = "top",
    trigger: f = "hover",
    children: p,
    mouseEnterDelay: v = 0.1,
    mouseLeaveDelay: u = 0.1,
    onOpenChange: m,
    overlayStyle: y = {}
  } = e, g = re(e, ["prefixCls", "title", "content", "overlayClassName", "placement", "trigger", "children", "mouseEnterDelay", "mouseLeaveDelay", "onOpenChange", "overlayStyle"]), {
    getPrefixCls: O
  } = a.useContext(S), x = O("popover", r), [N, B, j] = $(x), _ = O(), k = P(c, B, j), [I, T] = H(!1, {
    value: (o = e.open) !== null && o !== void 0 ? o : e.visible,
    defaultValue: (t = e.defaultOpen) !== null && t !== void 0 ? t : e.defaultVisible
  }), w = (s, C) => {
    T(s, !0), m == null || m(s, C);
  }, W = (s) => {
    s.keyCode === F.ESC && w(!1, s);
  }, D = (s) => {
    w(s);
  };
  return N(/* @__PURE__ */ a.createElement(L, Object.assign({
    placement: d,
    trigger: f,
    mouseEnterDelay: v,
    mouseLeaveDelay: u,
    overlayStyle: y
  }, g, {
    prefixCls: x,
    overlayClassName: k,
    ref: n,
    open: I,
    onOpenChange: D,
    overlay: l || i ? /* @__PURE__ */ a.createElement(ae, {
      prefixCls: x,
      title: l,
      content: i
    }) : null,
    transitionName: K(_, "zoom-big", g.transitionName),
    "data-popover-inject": !0
  }), Z(p, {
    onKeyDown: (s) => {
      var C, h;
      /* @__PURE__ */ a.isValidElement(p) && ((h = p == null ? void 0 : (C = p.props).onKeyDown) === null || h === void 0 || h.call(C, s)), W(s);
    }
  })));
}), E = le;
E._InternalPanelDoNotUseOrYouWillBeFired = oe;
process.env.NODE_ENV !== "production" && (E.displayName = "Popover");
export {
  E as P
};
