import { jsxs as ae, Fragment as G, jsx as B } from "react/jsx-runtime";
import { NotificationAPIContext as oe } from "../Provider/index.js";
import * as O from "react";
import b, { useContext as ie } from "react";
import { PreferenceInput as L } from "./PreferenceInput.js";
import { R as re } from "../../assets/RightOutlined.js";
import { e as F, c as D, h as k, d as U, a as T, w as le, b as ce } from "../../assets/index3.js";
import { d as se, _ as de, e as J, a as Q, g as ue, m as fe, u as R, r as me, f as pe, c as V } from "../../assets/colors.js";
import { K as W, t as Y, u as ve, e as ge, f as Ce, o as X } from "../../assets/index4.js";
import { p as be } from "../../assets/pickAttrs.js";
const he = (e) => ({
  [e.componentCls]: {
    // For common/openAnimation
    [`${e.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
      }
    },
    [`${e.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
    }
  }
});
var Z = /* @__PURE__ */ b.forwardRef(function(e, n) {
  var t = e.prefixCls, o = e.forceRender, i = e.className, c = e.style, f = e.children, r = e.isActive, s = e.role, a = b.useState(r || o), v = F(a, 2), d = v[0], m = v[1];
  return b.useEffect(function() {
    (o || r) && m(!0);
  }, [o, r]), d ? /* @__PURE__ */ b.createElement("div", {
    ref: n,
    className: D("".concat(t, "-content"), k(k({}, "".concat(t, "-content-active"), r), "".concat(t, "-content-inactive"), !r), i),
    style: c,
    role: s
  }, /* @__PURE__ */ b.createElement("div", {
    className: "".concat(t, "-content-box")
  }, f)) : null;
});
Z.displayName = "PanelContent";
var ye = ["showArrow", "headerClass", "isActive", "onItemClick", "forceRender", "className", "prefixCls", "collapsible", "accordion", "panelKey", "extra", "header", "expandIcon", "openMotion", "destroyInactivePanel", "children"], ee = /* @__PURE__ */ b.forwardRef(function(e, n) {
  var t = e.showArrow, o = t === void 0 ? !0 : t, i = e.headerClass, c = e.isActive, f = e.onItemClick, r = e.forceRender, s = e.className, a = e.prefixCls, v = e.collapsible, d = e.accordion, m = e.panelKey, g = e.extra, S = e.header, h = e.expandIcon, l = e.openMotion, x = e.destroyInactivePanel, I = e.children, $ = U(e, ye), u = v === "disabled", N = v === "header", C = v === "icon", E = g != null && typeof g != "boolean", y = function() {
    f == null || f(m);
  }, P = function(K) {
    (K.key === "Enter" || K.keyCode === W.ENTER || K.which === W.ENTER) && y();
  }, A = typeof h == "function" ? h(e) : /* @__PURE__ */ b.createElement("i", {
    className: "arrow"
  });
  A && (A = /* @__PURE__ */ b.createElement("div", {
    className: "".concat(a, "-expand-icon"),
    onClick: ["header", "icon"].includes(v) ? y : void 0
  }, A));
  var p = D(k(k(k({}, "".concat(a, "-item"), !0), "".concat(a, "-item-active"), c), "".concat(a, "-item-disabled"), u), s), w = D(i, k(k(k({}, "".concat(a, "-header"), !0), "".concat(a, "-header-collapsible-only"), N), "".concat(a, "-icon-collapsible-only"), C)), M = {
    className: w,
    "aria-expanded": c,
    "aria-disabled": u,
    onKeyDown: P
  };
  return !N && !C && (M.onClick = y, M.role = d ? "tab" : "button", M.tabIndex = u ? -1 : 0), /* @__PURE__ */ b.createElement("div", T({}, $, {
    ref: n,
    className: p
  }), /* @__PURE__ */ b.createElement("div", M, o && A, /* @__PURE__ */ b.createElement("span", {
    className: "".concat(a, "-header-text"),
    onClick: v === "header" ? y : void 0
  }, S), E && /* @__PURE__ */ b.createElement("div", {
    className: "".concat(a, "-extra")
  }, g)), /* @__PURE__ */ b.createElement(se, T({
    visible: c,
    leavedClassName: "".concat(a, "-content-hidden")
  }, l, {
    forceRender: r,
    removeOnLeave: x
  }), function(_, K) {
    var H = _.className, j = _.style;
    return /* @__PURE__ */ b.createElement(Z, {
      ref: K,
      prefixCls: a,
      className: H,
      style: j,
      isActive: c,
      forceRender: r,
      role: d ? "tabpanel" : void 0
    }, I);
  }));
}), Ie = ["children", "label", "key", "collapsible", "onItemClick", "destroyInactivePanel"], xe = function(n, t) {
  var o = t.prefixCls, i = t.accordion, c = t.collapsible, f = t.destroyInactivePanel, r = t.onItemClick, s = t.activeKey, a = t.openMotion, v = t.expandIcon;
  return n.map(function(d, m) {
    var g = d.children, S = d.label, h = d.key, l = d.collapsible, x = d.onItemClick, I = d.destroyInactivePanel, $ = U(d, Ie), u = String(h ?? m), N = l ?? c, C = I ?? f, E = function(A) {
      N !== "disabled" && (r(A), x == null || x(A));
    }, y = !1;
    return i ? y = s[0] === u : y = s.indexOf(u) > -1, /* @__PURE__ */ b.createElement(ee, T({}, $, {
      prefixCls: o,
      key: u,
      panelKey: u,
      isActive: y,
      accordion: i,
      openMotion: a,
      expandIcon: v,
      header: S,
      collapsible: N,
      onItemClick: E,
      destroyInactivePanel: C
    }), g);
  });
}, $e = function(n, t, o) {
  if (!n)
    return null;
  var i = o.prefixCls, c = o.accordion, f = o.collapsible, r = o.destroyInactivePanel, s = o.onItemClick, a = o.activeKey, v = o.openMotion, d = o.expandIcon, m = n.key || String(t), g = n.props, S = g.header, h = g.headerClass, l = g.destroyInactivePanel, x = g.collapsible, I = g.onItemClick, $ = !1;
  c ? $ = a[0] === m : $ = a.indexOf(m) > -1;
  var u = x ?? f, N = function(y) {
    u !== "disabled" && (s(y), I == null || I(y));
  }, C = {
    key: m,
    panelKey: m,
    header: S,
    headerClass: h,
    isActive: $,
    prefixCls: i,
    destroyInactivePanel: l ?? r,
    openMotion: v,
    accordion: c,
    children: n.props.children,
    onItemClick: N,
    expandIcon: d,
    collapsible: u
  };
  return typeof n.type == "string" ? n : (Object.keys(C).forEach(function(E) {
    typeof C[E] > "u" && delete C[E];
  }), /* @__PURE__ */ b.cloneElement(n, C));
};
function Ne(e, n, t) {
  return Array.isArray(e) ? xe(e, t) : Y(n).map(function(o, i) {
    return $e(o, i, t);
  });
}
function Pe(e) {
  var n = e;
  if (!Array.isArray(n)) {
    var t = ce(n);
    n = t === "number" || t === "string" ? [n] : [];
  }
  return n.map(function(o) {
    return String(o);
  });
}
var we = /* @__PURE__ */ b.forwardRef(function(e, n) {
  var t = e.prefixCls, o = t === void 0 ? "rc-collapse" : t, i = e.destroyInactivePanel, c = i === void 0 ? !1 : i, f = e.style, r = e.accordion, s = e.className, a = e.children, v = e.collapsible, d = e.openMotion, m = e.expandIcon, g = e.activeKey, S = e.defaultActiveKey, h = e.onChange, l = e.items, x = D(o, s), I = ve([], {
    value: g,
    onChange: function(P) {
      return h == null ? void 0 : h(P);
    },
    defaultValue: S,
    postState: Pe
  }), $ = F(I, 2), u = $[0], N = $[1], C = function(P) {
    return N(function() {
      if (r)
        return u[0] === P ? [] : [P];
      var A = u.indexOf(P), p = A > -1;
      return p ? u.filter(function(w) {
        return w !== P;
      }) : [].concat(de(u), [P]);
    });
  };
  le(!a, "[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");
  var E = Ne(l, a, {
    prefixCls: o,
    accordion: r,
    openMotion: d,
    expandIcon: m,
    collapsible: v,
    destroyInactivePanel: c,
    onItemClick: C,
    activeKey: u
  });
  return /* @__PURE__ */ b.createElement("div", T({
    ref: n,
    className: x,
    style: f,
    role: r ? "tablist" : void 0
  }, be(e, {
    aria: !0,
    data: !0
  })), E);
});
const z = Object.assign(we, {
  /**
   * @deprecated use `items` instead, will be removed in `v4.0.0`
   */
  Panel: ee
});
z.Panel;
const Se = /* @__PURE__ */ O.forwardRef((e, n) => {
  process.env.NODE_ENV !== "production" && J("Collapse.Panel").deprecated(!("disabled" in e), "disabled", 'collapsible="disabled"');
  const {
    getPrefixCls: t
  } = O.useContext(Q), {
    prefixCls: o,
    className: i,
    showArrow: c = !0
  } = e, f = t("collapse", o), r = D({
    [`${f}-no-arrow`]: !c
  }, i);
  return /* @__PURE__ */ O.createElement(z.Panel, Object.assign({
    ref: n
  }, e, {
    prefixCls: f,
    className: r
  }));
}), Ee = (e) => {
  const {
    componentCls: n,
    contentBg: t,
    padding: o,
    headerBg: i,
    headerPadding: c,
    collapseHeaderPaddingSM: f,
    collapseHeaderPaddingLG: r,
    collapsePanelBorderRadius: s,
    lineWidth: a,
    lineType: v,
    colorBorder: d,
    colorText: m,
    colorTextHeading: g,
    colorTextDisabled: S,
    fontSizeLG: h,
    lineHeight: l,
    lineHeightLG: x,
    marginSM: I,
    paddingSM: $,
    paddingLG: u,
    paddingXS: N,
    motionDurationSlow: C,
    fontSizeIcon: E,
    contentPadding: y,
    fontHeight: P,
    fontHeightLG: A
  } = e, p = `${R(a)} ${v} ${d}`;
  return {
    [n]: Object.assign(Object.assign({}, me(e)), {
      backgroundColor: i,
      border: p,
      borderRadius: s,
      "&-rtl": {
        direction: "rtl"
      },
      [`& > ${n}-item`]: {
        borderBottom: p,
        "&:last-child": {
          [`
            &,
            & > ${n}-header`]: {
            borderRadius: `0 0 ${R(s)} ${R(s)}`
          }
        },
        [`> ${n}-header`]: {
          position: "relative",
          // Compatible with old version of antd, should remove in next version
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "flex-start",
          padding: c,
          color: g,
          lineHeight: l,
          cursor: "pointer",
          transition: `all ${C}, visibility 0s`,
          [`> ${n}-header-text`]: {
            flex: "auto"
          },
          "&:focus": {
            outline: "none"
          },
          // >>>>> Arrow
          [`${n}-expand-icon`]: {
            height: P,
            display: "flex",
            alignItems: "center",
            paddingInlineEnd: I
          },
          [`${n}-arrow`]: Object.assign(Object.assign({}, pe()), {
            fontSize: E,
            // when `transform: rotate()` is applied to icon's root element
            transition: `transform ${C}`,
            // when `transform: rotate()` is applied to icon's child element
            svg: {
              transition: `transform ${C}`
            }
          }),
          // >>>>> Text
          [`${n}-header-text`]: {
            marginInlineEnd: "auto"
          }
        },
        [`${n}-icon-collapsible-only`]: {
          cursor: "unset",
          [`${n}-expand-icon`]: {
            cursor: "pointer"
          }
        }
      },
      [`${n}-content`]: {
        color: m,
        backgroundColor: t,
        borderTop: p,
        [`& > ${n}-content-box`]: {
          padding: y
        },
        "&-hidden": {
          display: "none"
        }
      },
      "&-small": {
        [`> ${n}-item`]: {
          [`> ${n}-header`]: {
            padding: f,
            paddingInlineStart: N,
            [`> ${n}-expand-icon`]: {
              // Arrow offset
              marginInlineStart: e.calc($).sub(N).equal()
            }
          },
          [`> ${n}-content > ${n}-content-box`]: {
            padding: $
          }
        }
      },
      "&-large": {
        [`> ${n}-item`]: {
          fontSize: h,
          lineHeight: x,
          [`> ${n}-header`]: {
            padding: r,
            paddingInlineStart: o,
            [`> ${n}-expand-icon`]: {
              height: A,
              // Arrow offset
              marginInlineStart: e.calc(u).sub(o).equal()
            }
          },
          [`> ${n}-content > ${n}-content-box`]: {
            padding: u
          }
        }
      },
      [`${n}-item:last-child`]: {
        borderBottom: 0,
        [`> ${n}-content`]: {
          borderRadius: `0 0 ${R(s)} ${R(s)}`
        }
      },
      [`& ${n}-item-disabled > ${n}-header`]: {
        "\n          &,\n          & > .arrow\n        ": {
          color: S,
          cursor: "not-allowed"
        }
      },
      // ========================== Icon Position ==========================
      [`&${n}-icon-position-end`]: {
        [`& > ${n}-item`]: {
          [`> ${n}-header`]: {
            [`${n}-expand-icon`]: {
              order: 1,
              paddingInlineEnd: 0,
              paddingInlineStart: I
            }
          }
        }
      }
    })
  };
}, Ae = (e) => {
  const {
    componentCls: n
  } = e, t = `> ${n}-item > ${n}-header ${n}-arrow`;
  return {
    [`${n}-rtl`]: {
      [t]: {
        transform: "rotate(180deg)"
      }
    }
  };
}, Me = (e) => {
  const {
    componentCls: n,
    headerBg: t,
    paddingXXS: o,
    colorBorder: i
  } = e;
  return {
    [`${n}-borderless`]: {
      backgroundColor: t,
      border: 0,
      [`> ${n}-item`]: {
        borderBottom: `1px solid ${i}`
      },
      [`
        > ${n}-item:last-child,
        > ${n}-item:last-child ${n}-header
      `]: {
        borderRadius: 0
      },
      [`> ${n}-item:last-child`]: {
        borderBottom: 0
      },
      [`> ${n}-item > ${n}-content`]: {
        backgroundColor: "transparent",
        borderTop: 0
      },
      [`> ${n}-item > ${n}-content > ${n}-content-box`]: {
        paddingTop: o
      }
    }
  };
}, Oe = (e) => {
  const {
    componentCls: n,
    paddingSM: t
  } = e;
  return {
    [`${n}-ghost`]: {
      backgroundColor: "transparent",
      border: 0,
      [`> ${n}-item`]: {
        borderBottom: 0,
        [`> ${n}-content`]: {
          backgroundColor: "transparent",
          border: 0,
          [`> ${n}-content-box`]: {
            paddingBlock: t
          }
        }
      }
    }
  };
}, Re = (e) => ({
  headerPadding: `${e.paddingSM}px ${e.padding}px`,
  headerBg: e.colorFillAlter,
  contentPadding: `${e.padding}px 16px`,
  // Fixed Value
  contentBg: e.colorBgContainer
}), _e = ue("Collapse", (e) => {
  const n = fe(e, {
    collapseHeaderPaddingSM: `${R(e.paddingXS)} ${R(e.paddingSM)}`,
    collapseHeaderPaddingLG: `${R(e.padding)} ${R(e.paddingLG)}`,
    collapsePanelBorderRadius: e.borderRadiusLG
  });
  return [Ee(n), Me(n), Oe(n), Ae(n), he(n)];
}, Re), ne = /* @__PURE__ */ O.forwardRef((e, n) => {
  const {
    getPrefixCls: t,
    direction: o,
    collapse: i
  } = O.useContext(Q), {
    prefixCls: c,
    className: f,
    rootClassName: r,
    style: s,
    bordered: a = !0,
    ghost: v,
    size: d,
    expandIconPosition: m = "start",
    children: g,
    expandIcon: S
  } = e, h = ge((p) => {
    var w;
    return (w = d ?? p) !== null && w !== void 0 ? w : "middle";
  }), l = t("collapse", c), x = t(), [I, $, u] = _e(l);
  if (process.env.NODE_ENV !== "production") {
    const p = J("Collapse");
    process.env.NODE_ENV !== "production" && p(m !== "left" && m !== "right", "deprecated", "`expandIconPosition` with `left` or `right` is deprecated. Please use `start` or `end` instead.");
  }
  const N = O.useMemo(() => m === "left" ? "start" : m === "right" ? "end" : m, [m]), C = S ?? (i == null ? void 0 : i.expandIcon), E = O.useCallback(function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const w = typeof C == "function" ? C(p) : /* @__PURE__ */ O.createElement(re, {
      rotate: p.isActive ? 90 : void 0
    });
    return V(w, () => {
      var M;
      return {
        className: D((M = w == null ? void 0 : w.props) === null || M === void 0 ? void 0 : M.className, `${l}-arrow`)
      };
    });
  }, [C, l]), y = D(`${l}-icon-position-${N}`, {
    [`${l}-borderless`]: !a,
    [`${l}-rtl`]: o === "rtl",
    [`${l}-ghost`]: !!v,
    [`${l}-${h}`]: h !== "middle"
  }, i == null ? void 0 : i.className, f, r, $, u), P = Object.assign(Object.assign({}, Ce(x)), {
    motionAppear: !1,
    leavedClassName: `${l}-content-hidden`
  }), A = O.useMemo(() => g ? Y(g).map((p, w) => {
    var M, _;
    if (!((M = p.props) === null || M === void 0) && M.disabled) {
      const K = (_ = p.key) !== null && _ !== void 0 ? _ : String(w), {
        disabled: H,
        collapsible: j
      } = p.props, te = Object.assign(Object.assign({}, X(p.props, ["disabled"])), {
        key: K,
        collapsible: j ?? (H ? "disabled" : void 0)
      });
      return V(p, te);
    }
    return p;
  }) : null, [g]);
  return I(
    // @ts-ignore
    /* @__PURE__ */ O.createElement(z, Object.assign({
      ref: n,
      openMotion: P
    }, X(e, ["rootClassName"]), {
      expandIcon: E,
      prefixCls: l,
      className: y,
      style: Object.assign(Object.assign({}, i == null ? void 0 : i.style), s)
    }), A)
  );
});
process.env.NODE_ENV !== "production" && (ne.displayName = "Collapse");
const q = Object.assign(ne, {
  Panel: Se
});
function Le() {
  const e = ie(oe);
  if (!e || !e.preferences)
    return null;
  const n = e.preferences.notifications.sort((t, o) => t.title.localeCompare(o.title)).map((t) => {
    var f, r, s;
    const o = (f = e.preferences) == null ? void 0 : f.preferences.filter(
      (a) => a.notificationId === t.notificationId && !a.subNotificationId
    ), i = (r = e.preferences) == null ? void 0 : r.preferences.filter(
      (a) => a.notificationId === t.notificationId && a.subNotificationId
    ), c = (s = e.preferences) == null ? void 0 : s.subNotifications.filter(
      (a) => i == null ? void 0 : i.find(
        (v) => v.subNotificationId === a.subNotificationId
      )
    );
    return {
      label: t.title,
      key: t.notificationId,
      children: /* @__PURE__ */ ae(G, { children: [
        /* @__PURE__ */ B(
          L,
          {
            notification: t,
            preferences: o || [],
            updateDelivery: e.updateDelivery
          },
          t.notificationId
        ),
        c == null ? void 0 : c.map((a) => /* @__PURE__ */ B(
          q,
          {
            bordered: !1,
            items: [
              {
                label: a.title,
                key: a.subNotificationId,
                children: /* @__PURE__ */ B(
                  L,
                  {
                    notification: t,
                    preferences: i || [],
                    updateDelivery: e.updateDelivery,
                    subNotificationId: a.subNotificationId
                  },
                  a.subNotificationId
                )
              }
            ],
            defaultActiveKey: []
          },
          a.subNotificationId
        ))
      ] })
    };
  });
  return /* @__PURE__ */ B(G, { children: /* @__PURE__ */ B(q, { items: n, defaultActiveKey: [] }) });
}
export {
  Le as Preferences
};
