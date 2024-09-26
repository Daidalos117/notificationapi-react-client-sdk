import * as j from "react";
import a, { forwardRef as Co, useContext as _, useMemo as Fo, useState as mo, Children as Vo, useEffect as po, createRef as qo } from "react";
import { c as O } from "./index3.js";
import { h as Xo, j as Uo, k as Jo, e as Ko, o as Qo, W as Yo } from "./index4.js";
import { a as yo, h as Zo, e as vo, c as ko, j as oe, d as ee, m as L, k as M, g as te, u as I, l as ne, n as re, D as ie, o as le } from "./colors.js";
var ae = function(o, e) {
  var t = {};
  for (var n in o)
    Object.prototype.hasOwnProperty.call(o, n) && e.indexOf(n) < 0 && (t[n] = o[n]);
  if (o != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(o); r < n.length; r++)
      e.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(o, n[r]) && (t[n[r]] = o[n[r]]);
  return t;
};
const $o = /* @__PURE__ */ j.createContext(void 0), ce = (o) => {
  const {
    getPrefixCls: e,
    direction: t
  } = j.useContext(yo), {
    prefixCls: n,
    size: r,
    className: i
  } = o, l = ae(o, ["prefixCls", "size", "className"]), c = e("btn-group", n), [, , m] = Zo();
  let u = "";
  switch (r) {
    case "large":
      u = "lg";
      break;
    case "small":
      u = "sm";
      break;
  }
  if (process.env.NODE_ENV !== "production") {
    const f = vo("Button.Group");
    process.env.NODE_ENV !== "production" && f(!r || ["large", "small", "middle"].includes(r), "usage", "Invalid prop `size`.");
  }
  const p = O(c, {
    [`${c}-${u}`]: u,
    [`${c}-rtl`]: t === "rtl"
  }, i, m);
  return /* @__PURE__ */ j.createElement($o.Provider, {
    value: r
  }, /* @__PURE__ */ j.createElement("div", Object.assign({}, l, {
    className: p
  })));
}, bo = /^[\u4e00-\u9fa5]{2}$/, q = bo.test.bind(bo);
function Ge(o) {
  return o === "danger" ? {
    danger: !0
  } : {
    type: o
  };
}
function fo(o) {
  return typeof o == "string";
}
function z(o) {
  return o === "text" || o === "link";
}
function se(o, e) {
  if (o == null)
    return;
  const t = e ? " " : "";
  return typeof o != "string" && typeof o != "number" && fo(o.type) && q(o.props.children) ? ko(o, {
    children: o.props.children.split("").join(t)
  }) : fo(o) ? q(o) ? /* @__PURE__ */ a.createElement("span", null, o.split("").join(t)) : /* @__PURE__ */ a.createElement("span", null, o) : oe(o) ? /* @__PURE__ */ a.createElement("span", null, o) : o;
}
function de(o, e) {
  let t = !1;
  const n = [];
  return a.Children.forEach(o, (r) => {
    const i = typeof r, l = i === "string" || i === "number";
    if (t && l) {
      const c = n.length - 1, m = n[c];
      n[c] = `${m}${r}`;
    } else
      n.push(r);
    t = l;
  }), a.Children.map(n, (r) => se(r, e));
}
const Bo = /* @__PURE__ */ Co((o, e) => {
  const {
    className: t,
    style: n,
    children: r,
    prefixCls: i
  } = o, l = O(`${i}-icon`, t);
  return /* @__PURE__ */ a.createElement("span", {
    ref: e,
    className: l,
    style: n
  }, r);
}), ho = /* @__PURE__ */ Co((o, e) => {
  const {
    prefixCls: t,
    className: n,
    style: r,
    iconClassName: i,
    iconPosition: l = "start"
  } = o, c = O(n, {
    [`${t}-loading-icon-end`]: l === "end",
    [`${t}-loading-icon`]: l === "start"
  });
  return /* @__PURE__ */ a.createElement(Bo, {
    prefixCls: t,
    className: c,
    style: r,
    ref: e
  }, /* @__PURE__ */ a.createElement(Xo, {
    className: i
  }));
}), F = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), V = (o) => ({
  width: o.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), ue = (o) => {
  const {
    prefixCls: e,
    loading: t,
    existIcon: n,
    className: r,
    style: i,
    iconPosition: l
  } = o, c = !!t;
  return n ? /* @__PURE__ */ a.createElement(ho, {
    prefixCls: e,
    className: r,
    style: i,
    iconPosition: l
  }) : /* @__PURE__ */ a.createElement(ee, {
    visible: c,
    // We do not really use this motionName
    motionName: `${e}-loading-icon-motion`,
    motionLeave: c,
    removeOnLeave: !0,
    onAppearStart: F,
    onAppearActive: V,
    onEnterStart: F,
    onEnterActive: V,
    onLeaveStart: V,
    onLeaveActive: F
  }, (m, u) => {
    let {
      className: p,
      style: f
    } = m;
    return /* @__PURE__ */ a.createElement(ho, {
      prefixCls: e,
      className: r,
      style: Object.assign(Object.assign({}, i), f),
      ref: u,
      iconClassName: p,
      iconPosition: l
    });
  });
}, So = (o, e) => ({
  // Border
  [`> span, > ${o}`]: {
    "&:not(:last-child)": {
      [`&, & > ${o}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: e
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${o}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: e
        }
      }
    }
  }
}), ge = (o) => {
  const {
    componentCls: e,
    fontSize: t,
    lineWidth: n,
    groupBorderColor: r,
    colorErrorHover: i
  } = o;
  return {
    [`${e}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${e}`]: {
          "&:not(:last-child)": {
            [`&, & > ${e}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: o.calc(n).mul(-1).equal(),
            [`&, & > ${e}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [e]: {
          position: "relative",
          zIndex: 1,
          "&:hover,\n          &:focus,\n          &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${e}-icon-only`]: {
          fontSize: t
        }
      },
      // Border Color
      So(`${e}-primary`, r),
      So(`${e}-danger`, i)
    ]
  };
}, Oo = (o) => {
  const {
    paddingInline: e,
    onlyIconSize: t,
    paddingBlock: n
  } = o;
  return L(o, {
    buttonPaddingHorizontal: e,
    buttonPaddingVertical: n,
    buttonIconOnlyFontSize: t
  });
}, Eo = (o) => {
  var e, t, n, r, i, l;
  const c = (e = o.contentFontSize) !== null && e !== void 0 ? e : o.fontSize, m = (t = o.contentFontSizeSM) !== null && t !== void 0 ? t : o.fontSize, u = (n = o.contentFontSizeLG) !== null && n !== void 0 ? n : o.fontSizeLG, p = (r = o.contentLineHeight) !== null && r !== void 0 ? r : M(c), f = (i = o.contentLineHeightSM) !== null && i !== void 0 ? i : M(m), v = (l = o.contentLineHeightLG) !== null && l !== void 0 ? l : M(u);
  return {
    fontWeight: 400,
    defaultShadow: `0 ${o.controlOutlineWidth}px 0 ${o.controlTmpOutline}`,
    primaryShadow: `0 ${o.controlOutlineWidth}px 0 ${o.controlOutline}`,
    dangerShadow: `0 ${o.controlOutlineWidth}px 0 ${o.colorErrorOutline}`,
    primaryColor: o.colorTextLightSolid,
    dangerColor: o.colorTextLightSolid,
    borderColorDisabled: o.colorBorder,
    defaultGhostColor: o.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: o.colorBgContainer,
    paddingInline: o.paddingContentHorizontal - o.lineWidth,
    paddingInlineLG: o.paddingContentHorizontal - o.lineWidth,
    paddingInlineSM: 8 - o.lineWidth,
    onlyIconSize: o.fontSizeLG,
    onlyIconSizeSM: o.fontSizeLG - 2,
    onlyIconSizeLG: o.fontSizeLG + 2,
    groupBorderColor: o.colorPrimaryHover,
    linkHoverBg: "transparent",
    textHoverBg: o.colorBgTextHover,
    defaultColor: o.colorText,
    defaultBg: o.colorBgContainer,
    defaultBorderColor: o.colorBorder,
    defaultBorderColorDisabled: o.colorBorder,
    defaultHoverBg: o.colorBgContainer,
    defaultHoverColor: o.colorPrimaryHover,
    defaultHoverBorderColor: o.colorPrimaryHover,
    defaultActiveBg: o.colorBgContainer,
    defaultActiveColor: o.colorPrimaryActive,
    defaultActiveBorderColor: o.colorPrimaryActive,
    contentFontSize: c,
    contentFontSizeSM: m,
    contentFontSizeLG: u,
    contentLineHeight: p,
    contentLineHeightSM: f,
    contentLineHeightLG: v,
    paddingBlock: Math.max((o.controlHeight - c * p) / 2 - o.lineWidth, 0),
    paddingBlockSM: Math.max((o.controlHeightSM - m * f) / 2 - o.lineWidth, 0),
    paddingBlockLG: Math.max((o.controlHeightLG - u * v) / 2 - o.lineWidth, 0)
  };
}, me = (o) => {
  const {
    componentCls: e,
    iconCls: t,
    fontWeight: n
  } = o;
  return {
    [e]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: n,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${I(o.lineWidth)} ${o.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${o.motionDurationMid} ${o.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: o.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      "> span": {
        display: "inline-block"
      },
      [`${e}-icon`]: {
        lineHeight: 0,
        // iconPosition in end
        "&-end": {
          marginInlineStart: o.marginXS
        }
      },
      // Leave a space between icon and text.
      [`> ${t} + span, > span + ${t}`]: {
        marginInlineStart: o.marginXS
      },
      [`&:not(${e}-icon-only) > ${e}-icon`]: {
        [`&${e}-loading-icon, &:not(:last-child)`]: {
          marginInlineEnd: o.marginXS
        },
        [`&${e}-loading-icon-end`]: {
          marginInlineStart: o.marginXS
        }
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Object.assign({}, ne(o)),
      [`&${e}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${e}-two-chinese-chars > *:not(${t})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      // make `btn-icon-only` not too narrow
      [`&-icon-only${e}-compact-item`]: {
        flex: "none"
      }
    }
  };
}, h = (o, e, t) => ({
  [`&:not(:disabled):not(${o}-disabled)`]: {
    "&:hover": e,
    "&:active": t
  }
}), pe = (o) => ({
  minWidth: o.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), be = (o) => ({
  borderRadius: o.controlHeight,
  paddingInlineStart: o.calc(o.controlHeight).div(2).equal(),
  paddingInlineEnd: o.calc(o.controlHeight).div(2).equal()
}), fe = (o) => ({
  cursor: "not-allowed",
  borderColor: o.borderColorDisabled,
  color: o.colorTextDisabled,
  background: o.colorBgContainerDisabled,
  boxShadow: "none"
}), H = (o, e, t, n, r, i, l, c) => ({
  [`&${o}-background-ghost`]: Object.assign(Object.assign({
    color: t || void 0,
    background: e,
    borderColor: n || void 0,
    boxShadow: "none"
  }, h(o, Object.assign({
    background: e
  }, l), Object.assign({
    background: e
  }, c))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: r || void 0,
      borderColor: i || void 0
    }
  })
}), X = (o) => ({
  [`&:disabled, &${o.componentCls}-disabled`]: Object.assign({}, fe(o))
}), xo = (o) => Object.assign({}, X(o)), N = (o) => ({
  [`&:disabled, &${o.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: o.colorTextDisabled
  }
}), Io = (o) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, xo(o)), {
  background: o.defaultBg,
  borderColor: o.defaultBorderColor,
  color: o.defaultColor,
  boxShadow: o.defaultShadow
}), h(o.componentCls, {
  color: o.defaultHoverColor,
  borderColor: o.defaultHoverBorderColor,
  background: o.defaultHoverBg
}, {
  color: o.defaultActiveColor,
  borderColor: o.defaultActiveBorderColor,
  background: o.defaultActiveBg
})), H(o.componentCls, o.ghostBg, o.defaultGhostColor, o.defaultGhostBorderColor, o.colorTextDisabled, o.colorBorder)), {
  [`&${o.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: o.colorError,
    borderColor: o.colorError
  }, h(o.componentCls, {
    color: o.colorErrorHover,
    borderColor: o.colorErrorBorderHover
  }, {
    color: o.colorErrorActive,
    borderColor: o.colorErrorActive
  })), H(o.componentCls, o.ghostBg, o.colorError, o.colorError, o.colorTextDisabled, o.colorBorder)), X(o))
}), he = (o) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, xo(o)), {
  color: o.primaryColor,
  background: o.colorPrimary,
  boxShadow: o.primaryShadow
}), h(o.componentCls, {
  color: o.colorTextLightSolid,
  background: o.colorPrimaryHover
}, {
  color: o.colorTextLightSolid,
  background: o.colorPrimaryActive
})), H(o.componentCls, o.ghostBg, o.colorPrimary, o.colorPrimary, o.colorTextDisabled, o.colorBorder, {
  color: o.colorPrimaryHover,
  borderColor: o.colorPrimaryHover
}, {
  color: o.colorPrimaryActive,
  borderColor: o.colorPrimaryActive
})), {
  [`&${o.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    background: o.colorError,
    boxShadow: o.dangerShadow,
    color: o.dangerColor
  }, h(o.componentCls, {
    background: o.colorErrorHover
  }, {
    background: o.colorErrorActive
  })), H(o.componentCls, o.ghostBg, o.colorError, o.colorError, o.colorTextDisabled, o.colorBorder, {
    color: o.colorErrorHover,
    borderColor: o.colorErrorHover
  }, {
    color: o.colorErrorActive,
    borderColor: o.colorErrorActive
  })), X(o))
}), Se = (o) => Object.assign(Object.assign({}, Io(o)), {
  borderStyle: "dashed"
}), Ce = (o) => Object.assign(Object.assign(Object.assign({
  color: o.colorLink
}, h(o.componentCls, {
  color: o.colorLinkHover,
  background: o.linkHoverBg
}, {
  color: o.colorLinkActive
})), N(o)), {
  [`&${o.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: o.colorError
  }, h(o.componentCls, {
    color: o.colorErrorHover
  }, {
    color: o.colorErrorActive
  })), N(o))
}), ye = (o) => Object.assign(Object.assign(Object.assign({}, h(o.componentCls, {
  color: o.colorText,
  background: o.textHoverBg
}, {
  color: o.colorText,
  background: o.colorBgTextActive
})), N(o)), {
  [`&${o.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: o.colorError
  }, N(o)), h(o.componentCls, {
    color: o.colorErrorHover,
    background: o.colorErrorBg
  }, {
    color: o.colorErrorHover,
    background: o.colorErrorBgActive
  }))
}), ve = (o) => {
  const {
    componentCls: e
  } = o;
  return {
    [`${e}-default`]: Io(o),
    [`${e}-primary`]: he(o),
    [`${e}-dashed`]: Se(o),
    [`${e}-link`]: Ce(o),
    [`${e}-text`]: ye(o),
    [`${e}-ghost`]: H(o.componentCls, o.ghostBg, o.colorBgContainer, o.colorBgContainer, o.colorTextDisabled, o.colorBorder)
  };
}, U = function(o) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: t,
    controlHeight: n,
    fontSize: r,
    lineHeight: i,
    borderRadius: l,
    buttonPaddingHorizontal: c,
    iconCls: m,
    buttonPaddingVertical: u
  } = o, p = `${t}-icon-only`;
  return [
    {
      [`${e}`]: {
        fontSize: r,
        lineHeight: i,
        height: n,
        padding: `${I(u)} ${I(c)}`,
        borderRadius: l,
        [`&${p}`]: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: n,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${t}-round`]: {
            width: "auto"
          },
          [m]: {
            fontSize: o.buttonIconOnlyFontSize
          }
        },
        // Loading
        [`&${t}-loading`]: {
          opacity: o.opacityLoading,
          cursor: "default"
        },
        [`${t}-loading-icon`]: {
          transition: `width ${o.motionDurationSlow} ${o.motionEaseInOut}, opacity ${o.motionDurationSlow} ${o.motionEaseInOut}`
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${t}${t}-circle${e}`]: pe(o)
    },
    {
      [`${t}${t}-round${e}`]: be(o)
    }
  ];
}, $e = (o) => {
  const e = L(o, {
    fontSize: o.contentFontSize,
    lineHeight: o.contentLineHeight
  });
  return U(e, o.componentCls);
}, Be = (o) => {
  const e = L(o, {
    controlHeight: o.controlHeightSM,
    fontSize: o.contentFontSizeSM,
    lineHeight: o.contentLineHeightSM,
    padding: o.paddingXS,
    buttonPaddingHorizontal: o.paddingInlineSM,
    buttonPaddingVertical: o.paddingBlockSM,
    borderRadius: o.borderRadiusSM,
    buttonIconOnlyFontSize: o.onlyIconSizeSM
  });
  return U(e, `${o.componentCls}-sm`);
}, Oe = (o) => {
  const e = L(o, {
    controlHeight: o.controlHeightLG,
    fontSize: o.contentFontSizeLG,
    lineHeight: o.contentLineHeightLG,
    buttonPaddingHorizontal: o.paddingInlineLG,
    buttonPaddingVertical: o.paddingBlockLG,
    borderRadius: o.borderRadiusLG,
    buttonIconOnlyFontSize: o.onlyIconSizeLG
  });
  return U(e, `${o.componentCls}-lg`);
}, Ee = (o) => {
  const {
    componentCls: e
  } = o;
  return {
    [e]: {
      [`&${e}-block`]: {
        width: "100%"
      }
    }
  };
}, xe = te("Button", (o) => {
  const e = Oo(o);
  return [
    // Shared
    me(e),
    // Size
    $e(e),
    Be(e),
    Oe(e),
    // Block
    Ee(e),
    // Group (type, ghost, danger, loading)
    ve(e),
    // Button Group
    ge(e)
  ];
}, Eo, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function Ie(o, e) {
  return {
    // border collapse
    [`&-item:not(${e}-last-item)`]: {
      marginBottom: o.calc(o.lineWidth).mul(-1).equal()
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function He(o, e) {
  return {
    [`&-item:not(${e}-first-item):not(${e}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${e}-first-item:not(${e}-last-item)`]: {
      [`&, &${o}-sm, &${o}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${e}-last-item:not(${e}-first-item)`]: {
      [`&, &${o}-sm, &${o}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function ze(o) {
  const e = `${o.componentCls}-compact-vertical`;
  return {
    [e]: Object.assign(Object.assign({}, Ie(o, e)), He(o.componentCls, e))
  };
}
const je = (o) => {
  const {
    componentCls: e,
    calc: t
  } = o;
  return {
    [e]: {
      // Special styles for Primary Button
      [`&-compact-item${e}-primary`]: {
        [`&:not([disabled]) + ${e}-compact-item${e}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: t(o.lineWidth).mul(-1).equal(),
            insetInlineStart: t(o.lineWidth).mul(-1).equal(),
            display: "inline-block",
            width: o.lineWidth,
            height: `calc(100% + ${I(o.lineWidth)} * 2)`,
            backgroundColor: o.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${e}-primary`]: {
          [`&:not([disabled]) + ${e}-compact-vertical-item${e}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: t(o.lineWidth).mul(-1).equal(),
              insetInlineStart: t(o.lineWidth).mul(-1).equal(),
              display: "inline-block",
              width: `calc(100% + ${I(o.lineWidth)} * 2)`,
              height: o.lineWidth,
              backgroundColor: o.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, Ne = re(["Button", "compact"], (o) => {
  const e = Oo(o);
  return [
    // Space Compact
    Uo(e),
    ze(e),
    je(e)
  ];
}, Eo);
var Le = function(o, e) {
  var t = {};
  for (var n in o)
    Object.prototype.hasOwnProperty.call(o, n) && e.indexOf(n) < 0 && (t[n] = o[n]);
  if (o != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(o); r < n.length; r++)
      e.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(o, n[r]) && (t[n[r]] = o[n[r]]);
  return t;
};
function Pe(o) {
  if (typeof o == "object" && o) {
    let e = o == null ? void 0 : o.delay;
    return e = !Number.isNaN(e) && typeof e == "number" ? e : 0, {
      loading: e <= 0,
      delay: e
    };
  }
  return {
    loading: !!o,
    delay: 0
  };
}
const Te = /* @__PURE__ */ a.forwardRef((o, e) => {
  var t, n, r;
  const {
    loading: i = !1,
    prefixCls: l,
    type: c,
    danger: m,
    shape: u = "default",
    size: p,
    styles: f,
    disabled: v,
    className: Ho,
    rootClassName: zo,
    children: S,
    icon: C,
    iconPosition: P = "start",
    ghost: K = !1,
    block: jo = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: No = "button",
    classNames: T,
    style: Lo = {},
    autoInsertSpace: w
  } = o, Q = Le(o, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace"]), $ = c || "default", {
    getPrefixCls: Po,
    direction: Y,
    button: g
  } = _(yo), W = (t = w ?? (g == null ? void 0 : g.autoInsertSpace)) !== null && t !== void 0 ? t : !0, s = Po("btn", l), [Z, To, wo] = xe(s), Wo = _(ie), E = v ?? Wo, Do = _($o), x = Fo(() => Pe(i), [i]), [y, k] = mo(x.loading), [D, oo] = mo(!1), B = le(e, /* @__PURE__ */ qo()), eo = Vo.count(S) === 1 && !C && !z($);
  po(() => {
    let d = null;
    x.delay > 0 ? d = setTimeout(() => {
      d = null, k(!0);
    }, x.delay) : k(x.loading);
    function b() {
      d && (clearTimeout(d), d = null);
    }
    return b;
  }, [x]), po(() => {
    if (!B || !B.current || !W)
      return;
    const d = B.current.textContent;
    eo && q(d) ? D || oo(!0) : D && oo(!1);
  }, [B]);
  const to = (d) => {
    const {
      onClick: b
    } = o;
    if (y || E) {
      d.preventDefault();
      return;
    }
    b == null || b(d);
  };
  if (process.env.NODE_ENV !== "production") {
    const d = vo("Button");
    process.env.NODE_ENV !== "production" && d(!(typeof C == "string" && C.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${C}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && d(!(K && z($)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: Ro,
    compactItemClassnames: no
  } = Jo(s, Y), Ao = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ro = Ko((d) => {
    var b, G;
    return (G = (b = p ?? Ro) !== null && b !== void 0 ? b : Do) !== null && G !== void 0 ? G : d;
  }), io = ro && Ao[ro] || "", lo = y ? "loading" : C, R = Qo(Q, ["navigate"]), ao = O(s, To, wo, {
    [`${s}-${u}`]: u !== "default" && u,
    [`${s}-${$}`]: $,
    [`${s}-${io}`]: io,
    [`${s}-icon-only`]: !S && S !== 0 && !!lo,
    [`${s}-background-ghost`]: K && !z($),
    [`${s}-loading`]: y,
    [`${s}-two-chinese-chars`]: D && W && !y,
    [`${s}-block`]: jo,
    [`${s}-dangerous`]: !!m,
    [`${s}-rtl`]: Y === "rtl"
  }, no, Ho, zo, g == null ? void 0 : g.className), co = Object.assign(Object.assign({}, g == null ? void 0 : g.style), Lo), Go = P === "end" && S && S !== 0 && lo, _o = O(T == null ? void 0 : T.icon, (n = g == null ? void 0 : g.classNames) === null || n === void 0 ? void 0 : n.icon, {
    [`${s}-icon-end`]: Go
  }), Mo = Object.assign(Object.assign({}, (f == null ? void 0 : f.icon) || {}), ((r = g == null ? void 0 : g.styles) === null || r === void 0 ? void 0 : r.icon) || {}), so = C && !y ? /* @__PURE__ */ a.createElement(Bo, {
    prefixCls: s,
    className: _o,
    style: Mo
  }, C) : /* @__PURE__ */ a.createElement(ue, {
    existIcon: !!C,
    prefixCls: s,
    loading: !!y,
    iconPosition: P
  }), uo = S || S === 0 ? de(S, eo && W) : null, go = (d, b) => P === "start" ? /* @__PURE__ */ a.createElement(a.Fragment, null, d, b) : /* @__PURE__ */ a.createElement(a.Fragment, null, b, d);
  if (R.href !== void 0)
    return Z(/* @__PURE__ */ a.createElement("a", Object.assign({}, R, {
      className: O(ao, {
        [`${s}-disabled`]: E
      }),
      href: E ? void 0 : R.href,
      style: co,
      onClick: to,
      ref: B,
      tabIndex: E ? -1 : 0
    }), go(so, uo)));
  let A = /* @__PURE__ */ a.createElement("button", Object.assign({}, Q, {
    type: No,
    className: ao,
    style: co,
    onClick: to,
    disabled: E,
    ref: B
  }), go(so, uo), !!no && /* @__PURE__ */ a.createElement(Ne, {
    key: "compact",
    prefixCls: s
  }));
  return z($) || (A = /* @__PURE__ */ a.createElement(Yo, {
    component: "Button",
    disabled: !!y
  }, A)), Z(A);
}), J = Te;
J.Group = ce;
J.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (J.displayName = "Button");
export {
  J as B,
  Ge as c
};
