import { jsx as R, Fragment as te, jsxs as q } from "react/jsx-runtime";
import { g as Oe, a as ze } from "../../assets/channelUtils.js";
import { u as K, F as Pe, l as ce, W as ue, m as Ne, e as he, C as Me, t as Re, n as je, K as ie, h as De, T as Be } from "../../assets/index4.js";
import * as s from "react";
import _e, { forwardRef as Te, useRef as oe, useImperativeHandle as He } from "react";
import { d as ge, e as be, c as D, h as F, a as pe, _ as re } from "../../assets/index3.js";
import { g as Z, m as ee, r as W, u as O, p as fe, a as _, o as qe, e as me, D as Ce, l as We, T as Ve } from "../../assets/colors.js";
import { p as Le } from "../../assets/pickAttrs.js";
const ve = /* @__PURE__ */ s.createContext(null), Ae = ve.Provider, Se = /* @__PURE__ */ s.createContext(null), Ge = Se.Provider;
var Fe = ["prefixCls", "className", "style", "checked", "disabled", "defaultChecked", "type", "title", "onChange"], Xe = /* @__PURE__ */ Te(function(e, t) {
  var o = e.prefixCls, n = o === void 0 ? "rc-checkbox" : o, i = e.className, r = e.style, d = e.checked, a = e.disabled, l = e.defaultChecked, c = l === void 0 ? !1 : l, h = e.type, u = h === void 0 ? "checkbox" : h, v = e.title, f = e.onChange, E = ge(e, Fe), p = oe(null), S = oe(null), w = K(c, {
    value: d
  }), m = be(w, 2), $ = m[0], y = m[1];
  He(t, function() {
    return {
      focus: function(b) {
        var k;
        (k = p.current) === null || k === void 0 || k.focus(b);
      },
      blur: function() {
        var b;
        (b = p.current) === null || b === void 0 || b.blur();
      },
      input: p.current,
      nativeElement: S.current
    };
  });
  var x = D(n, i, F(F({}, "".concat(n, "-checked"), $), "".concat(n, "-disabled"), a)), g = function(b) {
    a || ("checked" in e || y(b.target.checked), f == null || f({
      target: re(re({}, e), {}, {
        type: u,
        checked: b.target.checked
      }),
      stopPropagation: function() {
        b.stopPropagation();
      },
      preventDefault: function() {
        b.preventDefault();
      },
      nativeEvent: b.nativeEvent
    }));
  };
  return /* @__PURE__ */ s.createElement("span", {
    className: x,
    title: v,
    style: r,
    ref: S
  }, /* @__PURE__ */ s.createElement("input", pe({}, E, {
    className: "".concat(n, "-input"),
    ref: p,
    onChange: g,
    disabled: a,
    checked: !!$,
    type: u
  })), /* @__PURE__ */ s.createElement("span", {
    className: "".concat(n, "-inner")
  }));
});
const Ke = (e) => {
  const {
    componentCls: t,
    antCls: o
  } = e, n = `${t}-group`;
  return {
    [n]: Object.assign(Object.assign({}, W(e)), {
      display: "inline-block",
      fontSize: 0,
      // RTL
      [`&${n}-rtl`]: {
        direction: "rtl"
      },
      [`${o}-badge ${o}-badge-count`]: {
        zIndex: 1
      },
      [`> ${o}-badge:not(:first-child) > ${o}-button-wrapper`]: {
        borderInlineStart: "none"
      }
    })
  };
}, Ue = (e) => {
  const {
    componentCls: t,
    wrapperMarginInlineEnd: o,
    colorPrimary: n,
    radioSize: i,
    motionDurationSlow: r,
    motionDurationMid: d,
    motionEaseInOutCirc: a,
    colorBgContainer: l,
    colorBorder: c,
    lineWidth: h,
    colorBgContainerDisabled: u,
    colorTextDisabled: v,
    paddingXS: f,
    dotColorDisabled: E,
    lineType: p,
    radioColor: S,
    radioBgColor: w,
    calc: m
  } = e, $ = `${t}-inner`, x = m(i).sub(m(4).mul(2)), g = m(1).mul(i).equal();
  return {
    [`${t}-wrapper`]: Object.assign(Object.assign({}, W(e)), {
      display: "inline-flex",
      alignItems: "baseline",
      marginInlineStart: 0,
      marginInlineEnd: o,
      cursor: "pointer",
      // RTL
      [`&${t}-wrapper-rtl`]: {
        direction: "rtl"
      },
      "&-disabled": {
        cursor: "not-allowed",
        color: e.colorTextDisabled
      },
      "&::after": {
        display: "inline-block",
        width: 0,
        overflow: "hidden",
        content: '"\\a0"'
      },
      // hashId 在 wrapper 上，只能铺平
      [`${t}-checked::after`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        width: "100%",
        height: "100%",
        border: `${O(h)} ${p} ${n}`,
        borderRadius: "50%",
        visibility: "hidden",
        opacity: 0,
        content: '""'
      },
      [t]: Object.assign(Object.assign({}, W(e)), {
        position: "relative",
        display: "inline-block",
        outline: "none",
        cursor: "pointer",
        alignSelf: "center",
        borderRadius: "50%"
      }),
      [`${t}-wrapper:hover &,
        &:hover ${$}`]: {
        borderColor: n
      },
      [`${t}-input:focus-visible + ${$}`]: Object.assign({}, fe(e)),
      [`${t}:hover::after, ${t}-wrapper:hover &::after`]: {
        visibility: "visible"
      },
      [`${t}-inner`]: {
        "&::after": {
          boxSizing: "border-box",
          position: "absolute",
          insetBlockStart: "50%",
          insetInlineStart: "50%",
          display: "block",
          width: g,
          height: g,
          marginBlockStart: m(1).mul(i).div(-2).equal(),
          marginInlineStart: m(1).mul(i).div(-2).equal(),
          backgroundColor: S,
          borderBlockStart: 0,
          borderInlineStart: 0,
          borderRadius: g,
          transform: "scale(0)",
          opacity: 0,
          transition: `all ${r} ${a}`,
          content: '""'
        },
        boxSizing: "border-box",
        position: "relative",
        insetBlockStart: 0,
        insetInlineStart: 0,
        display: "block",
        width: g,
        height: g,
        backgroundColor: l,
        borderColor: c,
        borderStyle: "solid",
        borderWidth: h,
        borderRadius: "50%",
        transition: `all ${d}`
      },
      [`${t}-input`]: {
        position: "absolute",
        inset: 0,
        zIndex: 1,
        cursor: "pointer",
        opacity: 0
      },
      // 选中状态
      [`${t}-checked`]: {
        [$]: {
          borderColor: n,
          backgroundColor: w,
          "&::after": {
            transform: `scale(${e.calc(e.dotSize).div(i).equal()})`,
            opacity: 1,
            transition: `all ${r} ${a}`
          }
        }
      },
      [`${t}-disabled`]: {
        cursor: "not-allowed",
        [$]: {
          backgroundColor: u,
          borderColor: c,
          cursor: "not-allowed",
          "&::after": {
            backgroundColor: E
          }
        },
        [`${t}-input`]: {
          cursor: "not-allowed"
        },
        [`${t}-disabled + span`]: {
          color: v,
          cursor: "not-allowed"
        },
        [`&${t}-checked`]: {
          [$]: {
            "&::after": {
              transform: `scale(${m(x).div(i).equal({
                unit: !1
              })})`
            }
          }
        }
      },
      [`span${t} + *`]: {
        paddingInlineStart: f,
        paddingInlineEnd: f
      }
    })
  };
}, Qe = (e) => {
  const {
    buttonColor: t,
    controlHeight: o,
    componentCls: n,
    lineWidth: i,
    lineType: r,
    colorBorder: d,
    motionDurationSlow: a,
    motionDurationMid: l,
    buttonPaddingInline: c,
    fontSize: h,
    buttonBg: u,
    fontSizeLG: v,
    controlHeightLG: f,
    controlHeightSM: E,
    paddingXS: p,
    borderRadius: S,
    borderRadiusSM: w,
    borderRadiusLG: m,
    buttonCheckedBg: $,
    buttonSolidCheckedColor: y,
    colorTextDisabled: x,
    colorBgContainerDisabled: g,
    buttonCheckedBgDisabled: z,
    buttonCheckedColorDisabled: b,
    colorPrimary: k,
    colorPrimaryHover: P,
    colorPrimaryActive: I,
    buttonSolidCheckedBg: N,
    buttonSolidCheckedHoverBg: j,
    buttonSolidCheckedActiveBg: C,
    calc: M
  } = e;
  return {
    [`${n}-button-wrapper`]: {
      position: "relative",
      display: "inline-block",
      height: o,
      margin: 0,
      paddingInline: c,
      paddingBlock: 0,
      color: t,
      fontSize: h,
      lineHeight: O(M(o).sub(M(i).mul(2)).equal()),
      background: u,
      border: `${O(i)} ${r} ${d}`,
      // strange align fix for chrome but works
      // https://gw.alipayobjects.com/zos/rmsportal/VFTfKXJuogBAXcvfAUWJ.gif
      borderBlockStartWidth: M(i).add(0.02).equal(),
      borderInlineStartWidth: 0,
      borderInlineEndWidth: i,
      cursor: "pointer",
      transition: [`color ${l}`, `background ${l}`, `box-shadow ${l}`].join(","),
      a: {
        color: t
      },
      [`> ${n}-button`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        zIndex: -1,
        width: "100%",
        height: "100%"
      },
      "&:not(:first-child)": {
        "&::before": {
          position: "absolute",
          insetBlockStart: M(i).mul(-1).equal(),
          insetInlineStart: M(i).mul(-1).equal(),
          display: "block",
          boxSizing: "content-box",
          width: 1,
          height: "100%",
          paddingBlock: i,
          paddingInline: 0,
          backgroundColor: d,
          transition: `background-color ${a}`,
          content: '""'
        }
      },
      "&:first-child": {
        borderInlineStart: `${O(i)} ${r} ${d}`,
        borderStartStartRadius: S,
        borderEndStartRadius: S
      },
      "&:last-child": {
        borderStartEndRadius: S,
        borderEndEndRadius: S
      },
      "&:first-child:last-child": {
        borderRadius: S
      },
      [`${n}-group-large &`]: {
        height: f,
        fontSize: v,
        lineHeight: O(M(f).sub(M(i).mul(2)).equal()),
        "&:first-child": {
          borderStartStartRadius: m,
          borderEndStartRadius: m
        },
        "&:last-child": {
          borderStartEndRadius: m,
          borderEndEndRadius: m
        }
      },
      [`${n}-group-small &`]: {
        height: E,
        paddingInline: M(p).sub(i).equal(),
        paddingBlock: 0,
        lineHeight: O(M(E).sub(M(i).mul(2)).equal()),
        "&:first-child": {
          borderStartStartRadius: w,
          borderEndStartRadius: w
        },
        "&:last-child": {
          borderStartEndRadius: w,
          borderEndEndRadius: w
        }
      },
      "&:hover": {
        position: "relative",
        color: k
      },
      "&:has(:focus-visible)": Object.assign({}, fe(e)),
      [`${n}-inner, input[type='checkbox'], input[type='radio']`]: {
        width: 0,
        height: 0,
        opacity: 0,
        pointerEvents: "none"
      },
      [`&-checked:not(${n}-button-wrapper-disabled)`]: {
        zIndex: 1,
        color: k,
        background: $,
        borderColor: k,
        "&::before": {
          backgroundColor: k
        },
        "&:first-child": {
          borderColor: k
        },
        "&:hover": {
          color: P,
          borderColor: P,
          "&::before": {
            backgroundColor: P
          }
        },
        "&:active": {
          color: I,
          borderColor: I,
          "&::before": {
            backgroundColor: I
          }
        }
      },
      [`${n}-group-solid &-checked:not(${n}-button-wrapper-disabled)`]: {
        color: y,
        background: N,
        borderColor: N,
        "&:hover": {
          color: y,
          background: j,
          borderColor: j
        },
        "&:active": {
          color: y,
          background: C,
          borderColor: C
        }
      },
      "&-disabled": {
        color: x,
        backgroundColor: g,
        borderColor: d,
        cursor: "not-allowed",
        "&:first-child, &:hover": {
          color: x,
          backgroundColor: g,
          borderColor: d
        }
      },
      [`&-disabled${n}-button-wrapper-checked`]: {
        color: b,
        backgroundColor: z,
        borderColor: d,
        boxShadow: "none"
      }
    }
  };
}, Ye = (e) => {
  const {
    wireframe: t,
    padding: o,
    marginXS: n,
    lineWidth: i,
    fontSizeLG: r,
    colorText: d,
    colorBgContainer: a,
    colorTextDisabled: l,
    controlItemBgActiveDisabled: c,
    colorTextLightSolid: h,
    colorPrimary: u,
    colorPrimaryHover: v,
    colorPrimaryActive: f,
    colorWhite: E
  } = e, p = 4, S = r, w = t ? S - p * 2 : S - (p + i) * 2;
  return {
    // Radio
    radioSize: S,
    dotSize: w,
    dotColorDisabled: l,
    // Radio buttons
    buttonSolidCheckedColor: h,
    buttonSolidCheckedBg: u,
    buttonSolidCheckedHoverBg: v,
    buttonSolidCheckedActiveBg: f,
    buttonBg: a,
    buttonCheckedBg: a,
    buttonColor: d,
    buttonCheckedBgDisabled: c,
    buttonCheckedColorDisabled: l,
    buttonPaddingInline: o - i,
    wrapperMarginInlineEnd: n,
    // internal
    radioColor: t ? u : E,
    radioBgColor: t ? a : u
  };
}, $e = Z("Radio", (e) => {
  const {
    controlOutline: t,
    controlOutlineWidth: o
  } = e, n = `0 0 0 ${O(o)} ${t}`, r = ee(e, {
    radioFocusShadow: n,
    radioButtonFocusShadow: n
  });
  return [Ke(r), Ue(r), Qe(r)];
}, Ye, {
  unitless: {
    radioSize: !0,
    dotSize: !0
  }
});
var Je = function(e, t) {
  var o = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (o[n[i]] = e[n[i]]);
  return o;
};
const Ze = (e, t) => {
  var o, n;
  const i = s.useContext(ve), r = s.useContext(Se), {
    getPrefixCls: d,
    direction: a,
    radio: l
  } = s.useContext(_), c = s.useRef(null), h = qe(t, c), {
    isFormItemInput: u
  } = s.useContext(Pe);
  if (process.env.NODE_ENV !== "production") {
    const C = me("Radio");
    process.env.NODE_ENV !== "production" && C(!("optionType" in e), "usage", "`optionType` is only support in Radio.Group.");
  }
  const v = (C) => {
    var M, B;
    (M = e.onChange) === null || M === void 0 || M.call(e, C), (B = i == null ? void 0 : i.onChange) === null || B === void 0 || B.call(i, C);
  }, {
    prefixCls: f,
    className: E,
    rootClassName: p,
    children: S,
    style: w,
    title: m
  } = e, $ = Je(e, ["prefixCls", "className", "rootClassName", "children", "style", "title"]), y = d("radio", f), x = ((i == null ? void 0 : i.optionType) || r) === "button", g = x ? `${y}-button` : y, z = ce(y), [b, k, P] = $e(y, z), I = Object.assign({}, $), N = s.useContext(Ce);
  i && (I.name = i.name, I.onChange = v, I.checked = e.value === i.value, I.disabled = (o = I.disabled) !== null && o !== void 0 ? o : i.disabled), I.disabled = (n = I.disabled) !== null && n !== void 0 ? n : N;
  const j = D(`${g}-wrapper`, {
    [`${g}-wrapper-checked`]: I.checked,
    [`${g}-wrapper-disabled`]: I.disabled,
    [`${g}-wrapper-rtl`]: a === "rtl",
    [`${g}-wrapper-in-form-item`]: u
  }, l == null ? void 0 : l.className, E, p, k, P, z);
  return b(/* @__PURE__ */ s.createElement(ue, {
    component: "Radio",
    disabled: I.disabled
  }, /* @__PURE__ */ s.createElement("label", {
    className: j,
    style: Object.assign(Object.assign({}, l == null ? void 0 : l.style), w),
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    title: m
  }, /* @__PURE__ */ s.createElement(Xe, Object.assign({}, I, {
    className: D(I.className, !x && Ne),
    type: "radio",
    prefixCls: g,
    ref: h
  })), S !== void 0 ? /* @__PURE__ */ s.createElement("span", null, S) : null)));
}, V = /* @__PURE__ */ s.forwardRef(Ze);
process.env.NODE_ENV !== "production" && (V.displayName = "Radio");
const en = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    getPrefixCls: o,
    direction: n
  } = s.useContext(_), [i, r] = K(e.defaultValue, {
    value: e.value
  }), d = (C) => {
    const M = i, B = C.target.value;
    "value" in e || r(B);
    const {
      onChange: T
    } = e;
    T && B !== M && T(C);
  }, {
    prefixCls: a,
    className: l,
    rootClassName: c,
    options: h,
    buttonStyle: u = "outline",
    disabled: v,
    children: f,
    size: E,
    style: p,
    id: S,
    onMouseEnter: w,
    onMouseLeave: m,
    onFocus: $,
    onBlur: y
  } = e, x = o("radio", a), g = `${x}-group`, z = ce(x), [b, k, P] = $e(x, z);
  let I = f;
  h && h.length > 0 && (I = h.map((C) => typeof C == "string" || typeof C == "number" ? /* @__PURE__ */ s.createElement(V, {
    key: C.toString(),
    prefixCls: x,
    disabled: v,
    value: C,
    checked: i === C
  }, C) : /* @__PURE__ */ s.createElement(V, {
    key: `radio-group-value-options-${C.value}`,
    prefixCls: x,
    disabled: C.disabled || v,
    value: C.value,
    checked: i === C.value,
    title: C.title,
    style: C.style,
    id: C.id,
    required: C.required
  }, C.label)));
  const N = he(E), j = D(g, `${g}-${u}`, {
    [`${g}-${N}`]: N,
    [`${g}-rtl`]: n === "rtl"
  }, l, c, k, P, z);
  return b(/* @__PURE__ */ s.createElement("div", Object.assign({}, Le(e, {
    aria: !0,
    data: !0
  }), {
    className: j,
    style: p,
    onMouseEnter: w,
    onMouseLeave: m,
    onFocus: $,
    onBlur: y,
    id: S,
    ref: t
  }), /* @__PURE__ */ s.createElement(Ae, {
    value: {
      onChange: d,
      value: i,
      disabled: e.disabled,
      name: e.name,
      optionType: e.optionType
    }
  }, I)));
}), nn = /* @__PURE__ */ s.memo(en);
var tn = function(e, t) {
  var o = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (o[n[i]] = e[n[i]]);
  return o;
};
const on = (e, t) => {
  const {
    getPrefixCls: o
  } = s.useContext(_), {
    prefixCls: n
  } = e, i = tn(e, ["prefixCls"]), r = o("radio", n);
  return /* @__PURE__ */ s.createElement(Ge, {
    value: "button"
  }, /* @__PURE__ */ s.createElement(V, Object.assign({
    prefixCls: r
  }, i, {
    type: "radio",
    ref: t
  })));
}, rn = /* @__PURE__ */ s.forwardRef(on), L = V;
L.Button = rn;
L.Group = nn;
L.__ANT_RADIO = !0;
const an = (e) => {
  const {
    componentCls: t,
    sizePaddingEdgeHorizontal: o,
    colorSplit: n,
    lineWidth: i,
    textPaddingInline: r,
    orientationMargin: d,
    verticalMarginInline: a
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, W(e)), {
      borderBlockStart: `${O(i)} solid ${n}`,
      // vertical
      "&-vertical": {
        position: "relative",
        top: "-0.06em",
        display: "inline-block",
        height: "0.9em",
        marginInline: a,
        marginBlock: 0,
        verticalAlign: "middle",
        borderTop: 0,
        borderInlineStart: `${O(i)} solid ${n}`
      },
      "&-horizontal": {
        display: "flex",
        clear: "both",
        width: "100%",
        minWidth: "100%",
        // Fix https://github.com/ant-design/ant-design/issues/10914
        margin: `${O(e.dividerHorizontalGutterMargin)} 0`
      },
      [`&-horizontal${t}-with-text`]: {
        display: "flex",
        alignItems: "center",
        margin: `${O(e.dividerHorizontalWithTextGutterMargin)} 0`,
        color: e.colorTextHeading,
        fontWeight: 500,
        fontSize: e.fontSizeLG,
        whiteSpace: "nowrap",
        textAlign: "center",
        borderBlockStart: `0 ${n}`,
        "&::before, &::after": {
          position: "relative",
          width: "50%",
          borderBlockStart: `${O(i)} solid transparent`,
          // Chrome not accept `inherit` in `border-top`
          borderBlockStartColor: "inherit",
          borderBlockEnd: 0,
          transform: "translateY(50%)",
          content: "''"
        }
      },
      [`&-horizontal${t}-with-text-left`]: {
        "&::before": {
          width: `calc(${d} * 100%)`
        },
        "&::after": {
          width: `calc(100% - ${d} * 100%)`
        }
      },
      [`&-horizontal${t}-with-text-right`]: {
        "&::before": {
          width: `calc(100% - ${d} * 100%)`
        },
        "&::after": {
          width: `calc(${d} * 100%)`
        }
      },
      [`${t}-inner-text`]: {
        display: "inline-block",
        paddingBlock: 0,
        paddingInline: r
      },
      "&-dashed": {
        background: "none",
        borderColor: n,
        borderStyle: "dashed",
        borderWidth: `${O(i)} 0 0`
      },
      [`&-horizontal${t}-with-text${t}-dashed`]: {
        "&::before, &::after": {
          borderStyle: "dashed none none"
        }
      },
      [`&-vertical${t}-dashed`]: {
        borderInlineStartWidth: i,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      [`&-plain${t}-with-text`]: {
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.fontSize
      },
      [`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]: {
        "&::before": {
          width: 0
        },
        "&::after": {
          width: "100%"
        },
        [`${t}-inner-text`]: {
          paddingInlineStart: o
        }
      },
      [`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]: {
        "&::before": {
          width: "100%"
        },
        "&::after": {
          width: 0
        },
        [`${t}-inner-text`]: {
          paddingInlineEnd: o
        }
      }
    })
  };
}, ln = (e) => ({
  textPaddingInline: "1em",
  orientationMargin: 0.05,
  verticalMarginInline: e.marginXS
}), dn = Z("Divider", (e) => {
  const t = ee(e, {
    dividerHorizontalWithTextGutterMargin: e.margin,
    dividerHorizontalGutterMargin: e.marginLG,
    sizePaddingEdgeHorizontal: 0
  });
  return [an(t)];
}, ln, {
  unitless: {
    orientationMargin: !0
  }
});
var sn = function(e, t) {
  var o = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (o[n[i]] = e[n[i]]);
  return o;
};
const ye = (e) => {
  const {
    getPrefixCls: t,
    direction: o,
    divider: n
  } = s.useContext(_), {
    prefixCls: i,
    type: r = "horizontal",
    orientation: d = "center",
    orientationMargin: a,
    className: l,
    rootClassName: c,
    children: h,
    dashed: u,
    plain: v,
    style: f
  } = e, E = sn(e, ["prefixCls", "type", "orientation", "orientationMargin", "className", "rootClassName", "children", "dashed", "plain", "style"]), p = t("divider", i), [S, w, m] = dn(p), $ = d.length > 0 ? `-${d}` : d, y = !!h, x = d === "left" && a != null, g = d === "right" && a != null, z = D(p, n == null ? void 0 : n.className, w, m, `${p}-${r}`, {
    [`${p}-with-text`]: y,
    [`${p}-with-text${$}`]: y,
    [`${p}-dashed`]: !!u,
    [`${p}-plain`]: !!v,
    [`${p}-rtl`]: o === "rtl",
    [`${p}-no-default-orientation-margin-left`]: x,
    [`${p}-no-default-orientation-margin-right`]: g
  }, l, c), b = s.useMemo(() => typeof a == "number" ? a : /^\d+$/.test(a) ? Number(a) : a, [a]), k = Object.assign(Object.assign({}, x && {
    marginLeft: b
  }), g && {
    marginRight: b
  });
  if (process.env.NODE_ENV !== "production") {
    const P = me("Divider");
    process.env.NODE_ENV !== "production" && P(!h || r !== "vertical", "usage", "`children` not working in `vertical` mode.");
  }
  return S(/* @__PURE__ */ s.createElement("div", Object.assign({
    className: z,
    style: Object.assign(Object.assign({}, n == null ? void 0 : n.style), f)
  }, E, {
    role: "separator"
  }), h && r !== "vertical" && /* @__PURE__ */ s.createElement("span", {
    className: `${p}-inner-text`,
    style: k
  }, h)));
};
process.env.NODE_ENV !== "production" && (ye.displayName = "Divider");
function ae(e) {
  return ["small", "middle", "large"].includes(e);
}
function le(e) {
  return e ? typeof e == "number" && !Number.isNaN(e) : !1;
}
const xe = /* @__PURE__ */ _e.createContext({
  latestIndex: 0
}), cn = xe.Provider, un = (e) => {
  let {
    className: t,
    index: o,
    children: n,
    split: i,
    style: r
  } = e;
  const {
    latestIndex: d
  } = s.useContext(xe);
  return n == null ? null : /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("div", {
    className: t,
    style: r
  }, n), o < d && i && /* @__PURE__ */ s.createElement("span", {
    className: `${t}-split`
  }, i));
};
var hn = function(e, t) {
  var o = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (o[n[i]] = e[n[i]]);
  return o;
};
const gn = /* @__PURE__ */ s.forwardRef((e, t) => {
  var o, n;
  const {
    getPrefixCls: i,
    space: r,
    direction: d
  } = s.useContext(_), {
    size: a = (r == null ? void 0 : r.size) || "small",
    align: l,
    className: c,
    rootClassName: h,
    children: u,
    direction: v = "horizontal",
    prefixCls: f,
    split: E,
    style: p,
    wrap: S = !1,
    classNames: w,
    styles: m
  } = e, $ = hn(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [y, x] = Array.isArray(a) ? a : [a, a], g = ae(x), z = ae(y), b = le(x), k = le(y), P = Re(u, {
    keepEmpty: !0
  }), I = l === void 0 && v === "horizontal" ? "center" : l, N = i("space", f), [j, C, M] = je(N), B = D(N, r == null ? void 0 : r.className, C, `${N}-${v}`, {
    [`${N}-rtl`]: d === "rtl",
    [`${N}-align-${I}`]: I,
    [`${N}-gap-row-${x}`]: g,
    [`${N}-gap-col-${y}`]: z
  }, c, h, M), T = D(`${N}-item`, (o = w == null ? void 0 : w.item) !== null && o !== void 0 ? o : (n = r == null ? void 0 : r.classNames) === null || n === void 0 ? void 0 : n.item);
  let U = 0;
  const ke = P.map((H, Q) => {
    var Y, J;
    H != null && (U = Q);
    const Ee = H && H.key || `${T}-${Q}`;
    return /* @__PURE__ */ s.createElement(un, {
      className: T,
      key: Ee,
      index: Q,
      split: E,
      style: (Y = m == null ? void 0 : m.item) !== null && Y !== void 0 ? Y : (J = r == null ? void 0 : r.styles) === null || J === void 0 ? void 0 : J.item
    }, H);
  }), Ie = s.useMemo(() => ({
    latestIndex: U
  }), [U]);
  if (P.length === 0)
    return null;
  const A = {};
  return S && (A.flexWrap = "wrap"), !z && k && (A.columnGap = y), !g && b && (A.rowGap = x), j(/* @__PURE__ */ s.createElement("div", Object.assign({
    ref: t,
    className: B,
    style: Object.assign(Object.assign(Object.assign({}, A), r == null ? void 0 : r.style), p)
  }, $), /* @__PURE__ */ s.createElement(cn, {
    value: Ie
  }, ke)));
}), ne = gn;
ne.Compact = Me;
process.env.NODE_ENV !== "production" && (ne.displayName = "Space");
var bn = ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"], we = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var o, n = e.prefixCls, i = n === void 0 ? "rc-switch" : n, r = e.className, d = e.checked, a = e.defaultChecked, l = e.disabled, c = e.loadingIcon, h = e.checkedChildren, u = e.unCheckedChildren, v = e.onClick, f = e.onChange, E = e.onKeyDown, p = ge(e, bn), S = K(!1, {
    value: d,
    defaultValue: a
  }), w = be(S, 2), m = w[0], $ = w[1];
  function y(b, k) {
    var P = m;
    return l || (P = b, $(P), f == null || f(P, k)), P;
  }
  function x(b) {
    b.which === ie.LEFT ? y(!1, b) : b.which === ie.RIGHT && y(!0, b), E == null || E(b);
  }
  function g(b) {
    var k = y(!m, b);
    v == null || v(k, b);
  }
  var z = D(i, r, (o = {}, F(o, "".concat(i, "-checked"), m), F(o, "".concat(i, "-disabled"), l), o));
  return /* @__PURE__ */ s.createElement("button", pe({}, p, {
    type: "button",
    role: "switch",
    "aria-checked": m,
    disabled: l,
    className: z,
    ref: t,
    onKeyDown: x,
    onClick: g
  }), c, /* @__PURE__ */ s.createElement("span", {
    className: "".concat(i, "-inner")
  }, /* @__PURE__ */ s.createElement("span", {
    className: "".concat(i, "-inner-checked")
  }, h), /* @__PURE__ */ s.createElement("span", {
    className: "".concat(i, "-inner-unchecked")
  }, u)));
});
we.displayName = "Switch";
const pn = (e) => {
  const {
    componentCls: t,
    trackHeightSM: o,
    trackPadding: n,
    trackMinWidthSM: i,
    innerMinMarginSM: r,
    innerMaxMarginSM: d,
    handleSizeSM: a,
    calc: l
  } = e, c = `${t}-inner`, h = O(l(a).add(l(n).mul(2)).equal()), u = O(l(d).mul(2).equal());
  return {
    [t]: {
      [`&${t}-small`]: {
        minWidth: i,
        height: o,
        lineHeight: O(o),
        [`${t}-inner`]: {
          paddingInlineStart: d,
          paddingInlineEnd: r,
          [`${c}-checked, ${c}-unchecked`]: {
            minHeight: o
          },
          [`${c}-checked`]: {
            marginInlineStart: `calc(-100% + ${h} - ${u})`,
            marginInlineEnd: `calc(100% - ${h} + ${u})`
          },
          [`${c}-unchecked`]: {
            marginTop: l(o).mul(-1).equal(),
            marginInlineStart: 0,
            marginInlineEnd: 0
          }
        },
        [`${t}-handle`]: {
          width: a,
          height: a
        },
        [`${t}-loading-icon`]: {
          top: l(l(a).sub(e.switchLoadingIconSize)).div(2).equal(),
          fontSize: e.switchLoadingIconSize
        },
        [`&${t}-checked`]: {
          [`${t}-inner`]: {
            paddingInlineStart: r,
            paddingInlineEnd: d,
            [`${c}-checked`]: {
              marginInlineStart: 0,
              marginInlineEnd: 0
            },
            [`${c}-unchecked`]: {
              marginInlineStart: `calc(100% - ${h} + ${u})`,
              marginInlineEnd: `calc(-100% + ${h} - ${u})`
            }
          },
          [`${t}-handle`]: {
            insetInlineStart: `calc(100% - ${O(l(a).add(n).equal())})`
          }
        },
        [`&:not(${t}-disabled):active`]: {
          [`&:not(${t}-checked) ${c}`]: {
            [`${c}-unchecked`]: {
              marginInlineStart: l(e.marginXXS).div(2).equal(),
              marginInlineEnd: l(e.marginXXS).mul(-1).div(2).equal()
            }
          },
          [`&${t}-checked ${c}`]: {
            [`${c}-checked`]: {
              marginInlineStart: l(e.marginXXS).mul(-1).div(2).equal(),
              marginInlineEnd: l(e.marginXXS).div(2).equal()
            }
          }
        }
      }
    }
  };
}, fn = (e) => {
  const {
    componentCls: t,
    handleSize: o,
    calc: n
  } = e;
  return {
    [t]: {
      [`${t}-loading-icon${e.iconCls}`]: {
        position: "relative",
        top: n(n(o).sub(e.fontSize)).div(2).equal(),
        color: e.switchLoadingIconColor,
        verticalAlign: "top"
      },
      [`&${t}-checked ${t}-loading-icon`]: {
        color: e.switchColor
      }
    }
  };
}, mn = (e) => {
  const {
    componentCls: t,
    trackPadding: o,
    handleBg: n,
    handleShadow: i,
    handleSize: r,
    calc: d
  } = e, a = `${t}-handle`;
  return {
    [t]: {
      [a]: {
        position: "absolute",
        top: o,
        insetInlineStart: o,
        width: r,
        height: r,
        transition: `all ${e.switchDuration} ease-in-out`,
        "&::before": {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          backgroundColor: n,
          borderRadius: d(r).div(2).equal(),
          boxShadow: i,
          transition: `all ${e.switchDuration} ease-in-out`,
          content: '""'
        }
      },
      [`&${t}-checked ${a}`]: {
        insetInlineStart: `calc(100% - ${O(d(r).add(o).equal())})`
      },
      [`&:not(${t}-disabled):active`]: {
        [`${a}::before`]: {
          insetInlineEnd: e.switchHandleActiveInset,
          insetInlineStart: 0
        },
        [`&${t}-checked ${a}::before`]: {
          insetInlineEnd: 0,
          insetInlineStart: e.switchHandleActiveInset
        }
      }
    }
  };
}, Cn = (e) => {
  const {
    componentCls: t,
    trackHeight: o,
    trackPadding: n,
    innerMinMargin: i,
    innerMaxMargin: r,
    handleSize: d,
    calc: a
  } = e, l = `${t}-inner`, c = O(a(d).add(a(n).mul(2)).equal()), h = O(a(r).mul(2).equal());
  return {
    [t]: {
      [l]: {
        display: "block",
        overflow: "hidden",
        borderRadius: 100,
        height: "100%",
        paddingInlineStart: r,
        paddingInlineEnd: i,
        transition: `padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,
        [`${l}-checked, ${l}-unchecked`]: {
          display: "block",
          color: e.colorTextLightSolid,
          fontSize: e.fontSizeSM,
          transition: `margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,
          pointerEvents: "none",
          minHeight: o
        },
        [`${l}-checked`]: {
          marginInlineStart: `calc(-100% + ${c} - ${h})`,
          marginInlineEnd: `calc(100% - ${c} + ${h})`
        },
        [`${l}-unchecked`]: {
          marginTop: a(o).mul(-1).equal(),
          marginInlineStart: 0,
          marginInlineEnd: 0
        }
      },
      [`&${t}-checked ${l}`]: {
        paddingInlineStart: i,
        paddingInlineEnd: r,
        [`${l}-checked`]: {
          marginInlineStart: 0,
          marginInlineEnd: 0
        },
        [`${l}-unchecked`]: {
          marginInlineStart: `calc(100% - ${c} + ${h})`,
          marginInlineEnd: `calc(-100% + ${c} - ${h})`
        }
      },
      [`&:not(${t}-disabled):active`]: {
        [`&:not(${t}-checked) ${l}`]: {
          [`${l}-unchecked`]: {
            marginInlineStart: a(n).mul(2).equal(),
            marginInlineEnd: a(n).mul(-1).mul(2).equal()
          }
        },
        [`&${t}-checked ${l}`]: {
          [`${l}-checked`]: {
            marginInlineStart: a(n).mul(-1).mul(2).equal(),
            marginInlineEnd: a(n).mul(2).equal()
          }
        }
      }
    }
  };
}, vn = (e) => {
  const {
    componentCls: t,
    trackHeight: o,
    trackMinWidth: n
  } = e;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, W(e)), {
      position: "relative",
      display: "inline-block",
      boxSizing: "border-box",
      minWidth: n,
      height: o,
      lineHeight: `${O(o)}`,
      verticalAlign: "middle",
      background: e.colorTextQuaternary,
      border: "0",
      borderRadius: 100,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid}`,
      userSelect: "none",
      [`&:hover:not(${t}-disabled)`]: {
        background: e.colorTextTertiary
      }
    }), We(e)), {
      [`&${t}-checked`]: {
        background: e.switchColor,
        [`&:hover:not(${t}-disabled)`]: {
          background: e.colorPrimaryHover
        }
      },
      [`&${t}-loading, &${t}-disabled`]: {
        cursor: "not-allowed",
        opacity: e.switchDisabledOpacity,
        "*": {
          boxShadow: "none",
          cursor: "not-allowed"
        }
      },
      // rtl style
      [`&${t}-rtl`]: {
        direction: "rtl"
      }
    })
  };
}, Sn = (e) => {
  const {
    fontSize: t,
    lineHeight: o,
    controlHeight: n,
    colorWhite: i
  } = e, r = t * o, d = n / 2, a = 2, l = r - a * 2, c = d - a * 2;
  return {
    trackHeight: r,
    trackHeightSM: d,
    trackMinWidth: l * 2 + a * 4,
    trackMinWidthSM: c * 2 + a * 2,
    trackPadding: a,
    // Fixed value
    handleBg: i,
    handleSize: l,
    handleSizeSM: c,
    handleShadow: `0 2px 4px 0 ${new Ve("#00230b").setAlpha(0.2).toRgbString()}`,
    innerMinMargin: l / 2,
    innerMaxMargin: l + a + a * 2,
    innerMinMarginSM: c / 2,
    innerMaxMarginSM: c + a + a * 2
  };
}, $n = Z("Switch", (e) => {
  const t = ee(e, {
    switchDuration: e.motionDurationMid,
    switchColor: e.colorPrimary,
    switchDisabledOpacity: e.opacityLoading,
    switchLoadingIconSize: e.calc(e.fontSizeIcon).mul(0.75).equal(),
    switchLoadingIconColor: `rgba(0, 0, 0, ${e.opacityLoading})`,
    switchHandleActiveInset: "-30%"
  });
  return [
    vn(t),
    // inner style
    Cn(t),
    // handle style
    mn(t),
    // loading style
    fn(t),
    // small style
    pn(t)
  ];
}, Sn);
var yn = function(e, t) {
  var o = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (o[n[i]] = e[n[i]]);
  return o;
};
const xn = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    prefixCls: o,
    size: n,
    disabled: i,
    loading: r,
    className: d,
    rootClassName: a,
    style: l,
    checked: c,
    value: h,
    defaultChecked: u,
    defaultValue: v,
    onChange: f
  } = e, E = yn(e, ["prefixCls", "size", "disabled", "loading", "className", "rootClassName", "style", "checked", "value", "defaultChecked", "defaultValue", "onChange"]), [p, S] = K(!1, {
    value: c ?? h,
    defaultValue: u ?? v
  }), {
    getPrefixCls: w,
    direction: m,
    switch: $
  } = s.useContext(_), y = s.useContext(Ce), x = (i ?? y) || r, g = w("switch", o), z = /* @__PURE__ */ s.createElement("div", {
    className: `${g}-handle`
  }, r && /* @__PURE__ */ s.createElement(De, {
    className: `${g}-loading-icon`
  })), [b, k, P] = $n(g), I = he(n), N = D($ == null ? void 0 : $.className, {
    [`${g}-small`]: I === "small",
    [`${g}-loading`]: r,
    [`${g}-rtl`]: m === "rtl"
  }, d, a, k, P), j = Object.assign(Object.assign({}, $ == null ? void 0 : $.style), l), C = function() {
    S(arguments.length <= 0 ? void 0 : arguments[0]), f == null || f.apply(void 0, arguments);
  };
  return b(/* @__PURE__ */ s.createElement(ue, {
    component: "Switch"
  }, /* @__PURE__ */ s.createElement(we, Object.assign({}, E, {
    checked: p,
    onChange: C,
    prefixCls: g,
    className: N,
    style: j,
    disabled: x,
    ref: t,
    loadingIcon: z
  }))));
}), X = xn;
X.__ANT_SWITCH = !0;
process.env.NODE_ENV !== "production" && (X.displayName = "Switch");
const G = Be.Text, wn = (e, t) => {
  const o = ["EMAIL", "INAPP_WEB", "SMS", "CALL", "PUSH", "WEB_PUSH"];
  return o.indexOf(e) - o.indexOf(t);
}, de = (e, t) => {
  const o = ["off", "instant", "hourly", "daily", "weekly", "monthly"];
  return o.indexOf(e) - o.indexOf(t);
}, se = (e) => ({
  off: "Off",
  instant: "Instant",
  hourly: "Hourly",
  daily: "Daily",
  weekly: "Weekly",
  monthly: "Monthly"
})[e], Mn = ({
  notification: e,
  preferences: t,
  updateDelivery: o,
  subNotificationId: n
}) => /* @__PURE__ */ R(te, { children: e.channels.sort(wn).map((i, r) => {
  const d = t.find(
    (u) => u.notificationId === e.notificationId && u.channel === i
  );
  if (!d)
    return null;
  const a = Oe(i), l = ze(i), c = Object.keys(
    e.options[i]
  ).filter(
    (u) => u !== "defaultDeliveryOption" && u !== "defaultDeliverOption"
  );
  let h;
  return c.length === 1 ? h = /* @__PURE__ */ R(G, { children: se(d.delivery) }) : c.length === 2 && c.includes("off") ? h = /* @__PURE__ */ R(
    X,
    {
      checked: d.delivery !== "off",
      onChange: (u) => {
        if (u) {
          const v = c.find((f) => f !== "off");
          o(
            e.notificationId,
            i,
            v,
            n
          );
        } else
          o(
            e.notificationId,
            i,
            "off",
            n
          );
      }
    }
  ) : h = /* @__PURE__ */ q(te, { children: [
    /* @__PURE__ */ R(
      X,
      {
        checked: d.delivery !== "off",
        onChange: (u) => {
          if (u) {
            const v = c.sort(de).find((f) => f !== "off");
            o(
              e.notificationId,
              i,
              v,
              n
            );
          } else
            o(
              e.notificationId,
              i,
              "off",
              n
            );
        }
      }
    ),
    /* @__PURE__ */ R(
      "div",
      {
        style: {
          width: "100%",
          marginTop: 8,
          maxHeight: d.delivery !== "off" ? 1e3 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease"
        },
        children: /* @__PURE__ */ q("div", { children: [
          /* @__PURE__ */ R("div", { style: { marginTop: 20 }, children: /* @__PURE__ */ R(G, { strong: !0, children: "Choose frequency:" }) }),
          /* @__PURE__ */ R(
            L.Group,
            {
              value: d.delivery,
              onChange: (u) => {
                o(
                  e.notificationId,
                  i,
                  u.target.value,
                  n
                );
              },
              children: /* @__PURE__ */ R(ne, { direction: "vertical", style: { paddingTop: 10 }, children: c.filter((u) => u !== "off").sort(de).map((u) => /* @__PURE__ */ R(L, { value: u, children: /* @__PURE__ */ R(G, { children: se(u) }) }, u)) })
            }
          )
        ] })
      }
    )
  ] }), /* @__PURE__ */ q("div", { children: [
    /* @__PURE__ */ q(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: r === 0 ? 12 : 0,
          marginBottom: r === e.channels.length - 1 ? 12 : 0
        },
        children: [
          /* @__PURE__ */ q(G, { children: [
            l,
            " ",
            a
          ] }),
          h
        ]
      },
      i
    ),
    r !== e.channels.length - 1 && /* @__PURE__ */ R(ye, {})
  ] }, i);
}) });
export {
  Mn as PreferenceInput
};
