import { jsxs as er, jsx as ve } from "react/jsx-runtime";
import * as H from "react";
import we, { useRef as Ft, useDebugValue as sn, createElement as io, useContext as so, useMemo as je, useCallback as oo, useState as ao, useEffect as on } from "react";
import { E as uo, F as M, G as Ce, M as W, W as V, H as co, I as tr, J as gt, L as $e, N as lo, R as zi, O as fo, Q as ho, S as qi, U as Le, V as po, X as mo, Y as et, Z as an, $ as un, h as go, a0 as yo, g as vo, m as wo, r as bo, u as So, o as To, a as Ui, e as Oo, c as xo, a1 as Eo, a2 as ko, a3 as Ao, a4 as Po, a5 as Ro, a6 as Vi } from "./colors.js";
import { c as pr, l as Bi, m as Hi } from "./index3.js";
import { e as _o, l as Yi, D as Co, t as $o, T as cn, R as Do } from "./index4.js";
import { P as No } from "./index.js";
import { B as Io } from "./button.js";
import { B as Fo } from "./index2.js";
function Wi(e, t, r) {
  switch (uo(e, t)) {
    case 5103:
      return V + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return V + e + e;
    case 4789:
      return gt + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return V + e + gt + e + W + e + e;
    case 5936:
      switch (Ce(e, t + 11)) {
        case 114:
          return V + e + W + M(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return V + e + W + M(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return V + e + W + M(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return V + e + W + e + e;
    case 6165:
      return V + e + W + "flex-" + e + e;
    case 5187:
      return V + e + M(e, /(\w+).+(:[^]+)/, V + "box-$1$2" + W + "flex-$1$2") + e;
    case 5443:
      return V + e + W + "flex-item-" + M(e, /flex-|-self/g, "") + ($e(e, /flex-|baseline/) ? "" : W + "grid-row-" + M(e, /flex-|-self/g, "")) + e;
    case 4675:
      return V + e + W + "flex-line-pack" + M(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return V + e + W + M(e, "shrink", "negative") + e;
    case 5292:
      return V + e + W + M(e, "basis", "preferred-size") + e;
    case 6060:
      return V + "box-" + M(e, "-grow", "") + V + e + W + M(e, "grow", "positive") + e;
    case 4554:
      return V + M(e, /([^-])(transform)/g, "$1" + V + "$2") + e;
    case 6187:
      return M(M(M(e, /(zoom-|grab)/, V + "$1"), /(image-set)/, V + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return M(e, /(image-set\([^]*)/, V + "$1$`$1");
    case 4968:
      return M(M(e, /(.+:)(flex-)?(.*)/, V + "box-pack:$3" + W + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + V + e + e;
    case 4200:
      if (!$e(e, /flex-|baseline/))
        return W + "grid-column-align" + lo(e, t) + e;
      break;
    case 2592:
    case 3360:
      return W + M(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(n, i) {
        return t = i, $e(n.props, /grid-\w+-end/);
      }) ? ~tr(e + (r = r[t].value), "span", 0) ? e : W + M(e, "-start", "") + e + W + "grid-row-span:" + (~tr(r, "span", 0) ? $e(r, /\d+/) : +$e(r, /\d+/) - +$e(e, /\d+/)) + ";" : W + M(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return $e(n.props, /grid-\w+-start/);
      }) ? e : W + M(M(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return M(e, /(.+)-inline(.+)/, V + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (co(e) - 1 - t > 6)
        switch (Ce(e, t + 1)) {
          case 109:
            if (Ce(e, t + 4) !== 45)
              break;
          case 102:
            return M(e, /(.+:)(.+)-([^]+)/, "$1" + V + "$2-$3$1" + gt + (Ce(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~tr(e, "stretch", 0) ? Wi(M(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return M(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, i, s, o, a, u, l) {
        return W + i + ":" + s + l + (o ? W + i + "-span:" + (a ? u : +u - +s) + l : "") + e;
      });
    case 4949:
      if (Ce(e, t + 6) === 121)
        return M(e, ":", ":" + V) + e;
      break;
    case 6444:
      switch (Ce(e, Ce(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return M(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + V + (Ce(e, 14) === 45 ? "inline-" : "") + "box$3$1" + V + "$2$3$1" + W + "$2box$3") + e;
        case 100:
          return M(e, ":", ":" + W) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return M(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Lo(e) {
  var t = mo(e);
  return function(r, n, i, s) {
    for (var o = "", a = 0; a < t; a++)
      o += e[a](r, n, i, s) || "";
    return o;
  };
}
function Mo(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function jo(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case po:
        e.return = Wi(e.value, e.length, r);
        return;
      case ho:
        return qi([Le(e, { value: M(e.value, "@", "@" + V) })], n);
      case zi:
        if (e.length)
          return fo(r = e.props, function(i) {
            switch ($e(i, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                et(Le(e, { props: [M(i, /:(read-\w+)/, ":" + gt + "$1")] })), et(Le(e, { props: [i] })), an(e, { props: un(r, n) });
                break;
              case "::placeholder":
                et(Le(e, { props: [M(i, /:(plac\w+)/, ":" + V + "input-$1")] })), et(Le(e, { props: [M(i, /:(plac\w+)/, ":" + gt + "$1")] })), et(Le(e, { props: [M(i, /:(plac\w+)/, W + "input-$1")] })), et(Le(e, { props: [i] })), an(e, { props: un(r, n) });
                break;
            }
            return "";
          });
    }
}
const Gi = ["xxl", "xl", "lg", "md", "sm", "xs"], zo = (e) => ({
  xs: `(max-width: ${e.screenXSMax}px)`,
  sm: `(min-width: ${e.screenSM}px)`,
  md: `(min-width: ${e.screenMD}px)`,
  lg: `(min-width: ${e.screenLG}px)`,
  xl: `(min-width: ${e.screenXL}px)`,
  xxl: `(min-width: ${e.screenXXL}px)`
}), qo = (e) => {
  const t = e, r = [].concat(Gi).reverse();
  return r.forEach((n, i) => {
    const s = n.toUpperCase(), o = `screen${s}Min`, a = `screen${s}`;
    if (!(t[o] <= t[a]))
      throw new Error(`${o}<=${a} fails : !(${t[o]}<=${t[a]})`);
    if (i < r.length - 1) {
      const u = `screen${s}Max`;
      if (!(t[a] <= t[u]))
        throw new Error(`${a}<=${u} fails : !(${t[a]}<=${t[u]})`);
      const f = `screen${r[i + 1].toUpperCase()}Min`;
      if (!(t[u] <= t[f]))
        throw new Error(`${u}<=${f} fails : !(${t[u]}<=${t[f]})`);
    }
  }), e;
};
function Uo() {
  const [, e] = go(), t = zo(qo(e));
  return we.useMemo(() => {
    const r = /* @__PURE__ */ new Map();
    let n = -1, i = {};
    return {
      matchHandlers: {},
      dispatch(s) {
        return i = s, r.forEach((o) => o(i)), r.size >= 1;
      },
      subscribe(s) {
        return r.size || this.register(), n += 1, r.set(n, s), s(i), n;
      },
      unsubscribe(s) {
        r.delete(s), r.size || this.unregister();
      },
      unregister() {
        Object.keys(t).forEach((s) => {
          const o = t[s], a = this.matchHandlers[o];
          a == null || a.mql.removeListener(a == null ? void 0 : a.listener);
        }), r.clear();
      },
      register() {
        Object.keys(t).forEach((s) => {
          const o = t[s], a = (l) => {
            let {
              matches: f
            } = l;
            this.dispatch(Object.assign(Object.assign({}, i), {
              [s]: f
            }));
          }, u = window.matchMedia(o);
          u.addListener(a), this.matchHandlers[o] = {
            mql: u,
            listener: a
          }, a(u);
        });
      },
      responsiveMap: t
    };
  }, [e]);
}
function Vo() {
  const [, e] = H.useReducer((t) => t + 1, 0);
  return e;
}
function Bo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  const t = Ft({}), r = Vo(), n = Uo();
  return yo(() => {
    const i = n.subscribe((s) => {
      t.current = s, e && r();
    });
    return () => n.unsubscribe(i);
  }, []), t.current;
}
const dr = /* @__PURE__ */ H.createContext({}), Ho = (e) => {
  const {
    antCls: t,
    componentCls: r,
    iconCls: n,
    avatarBg: i,
    avatarColor: s,
    containerSize: o,
    containerSizeLG: a,
    containerSizeSM: u,
    textFontSize: l,
    textFontSizeLG: f,
    textFontSizeSM: d,
    borderRadius: y,
    borderRadiusLG: v,
    borderRadiusSM: O,
    lineWidth: S,
    lineType: N
  } = e, _ = (R, x, k) => ({
    width: R,
    height: R,
    borderRadius: "50%",
    [`&${r}-square`]: {
      borderRadius: k
    },
    [`&${r}-icon`]: {
      fontSize: x,
      [`> ${n}`]: {
        margin: 0
      }
    }
  });
  return {
    [r]: Object.assign(Object.assign(Object.assign(Object.assign({}, bo(e)), {
      position: "relative",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      color: s,
      whiteSpace: "nowrap",
      textAlign: "center",
      verticalAlign: "middle",
      background: i,
      border: `${So(S)} ${N} transparent`,
      "&-image": {
        background: "transparent"
      },
      [`${t}-image-img`]: {
        display: "block"
      }
    }), _(o, l, y)), {
      "&-lg": Object.assign({}, _(a, f, v)),
      "&-sm": Object.assign({}, _(u, d, O)),
      "> img": {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })
  };
}, Yo = (e) => {
  const {
    componentCls: t,
    groupBorderColor: r,
    groupOverlapping: n,
    groupSpace: i
  } = e;
  return {
    [`${t}-group`]: {
      display: "inline-flex",
      [`${t}`]: {
        borderColor: r
      },
      "> *:not(:first-child)": {
        marginInlineStart: n
      }
    },
    [`${t}-group-popover`]: {
      [`${t} + ${t}`]: {
        marginInlineStart: i
      }
    }
  };
}, Wo = (e) => {
  const {
    controlHeight: t,
    controlHeightLG: r,
    controlHeightSM: n,
    fontSize: i,
    fontSizeLG: s,
    fontSizeXL: o,
    fontSizeHeading3: a,
    marginXS: u,
    marginXXS: l,
    colorBorderBg: f
  } = e;
  return {
    containerSize: t,
    containerSizeLG: r,
    containerSizeSM: n,
    textFontSize: Math.round((s + o) / 2),
    textFontSizeLG: a,
    textFontSizeSM: i,
    groupSpace: l,
    groupOverlapping: -u,
    groupBorderColor: f
  };
}, Xi = vo("Avatar", (e) => {
  const {
    colorTextLightSolid: t,
    colorTextPlaceholder: r
  } = e, n = wo(e, {
    avatarBg: r,
    avatarColor: t
  });
  return [Ho(n), Yo(n)];
}, Wo);
var Go = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
const Xo = (e, t) => {
  const [r, n] = H.useState(1), [i, s] = H.useState(!1), [o, a] = H.useState(!0), u = H.useRef(null), l = H.useRef(null), f = To(t, u), {
    getPrefixCls: d,
    avatar: y
  } = H.useContext(Ui), v = H.useContext(dr), O = () => {
    if (!l.current || !u.current)
      return;
    const b = l.current.offsetWidth, T = u.current.offsetWidth;
    if (b !== 0 && T !== 0) {
      const {
        gap: $ = 4
      } = e;
      $ * 2 < T && n(T - $ * 2 < b ? (T - $ * 2) / b : 1);
    }
  };
  H.useEffect(() => {
    s(!0);
  }, []), H.useEffect(() => {
    a(!0), n(1);
  }, [e.src]), H.useEffect(O, [e.gap]);
  const S = () => {
    const {
      onError: b
    } = e;
    (b == null ? void 0 : b()) !== !1 && a(!1);
  }, {
    prefixCls: N,
    shape: _,
    size: R,
    src: x,
    srcSet: k,
    icon: h,
    className: I,
    rootClassName: Y,
    alt: J,
    draggable: ie,
    children: ce,
    crossOrigin: fe
  } = e, ae = Go(e, ["prefixCls", "shape", "size", "src", "srcSet", "icon", "className", "rootClassName", "alt", "draggable", "children", "crossOrigin"]), G = _o((b) => {
    var T, $;
    return ($ = (T = R ?? (v == null ? void 0 : v.size)) !== null && T !== void 0 ? T : b) !== null && $ !== void 0 ? $ : "default";
  }), ue = Object.keys(typeof G == "object" ? G || {} : {}).some((b) => ["xs", "sm", "md", "lg", "xl", "xxl"].includes(b)), ye = Bo(ue), se = H.useMemo(() => {
    if (typeof G != "object")
      return {};
    const b = Gi.find(($) => ye[$]), T = G[b];
    return T ? {
      width: T,
      height: T,
      fontSize: T && (h || ce) ? T / 2 : 18
    } : {};
  }, [ye, G]);
  if (process.env.NODE_ENV !== "production") {
    const b = Oo("Avatar");
    process.env.NODE_ENV !== "production" && b(!(typeof h == "string" && h.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${h}\` at https://ant.design/components/icon`);
  }
  const z = d("avatar", N), oe = Yi(z), [Z, p, g] = Xi(z, oe), E = pr({
    [`${z}-lg`]: G === "large",
    [`${z}-sm`]: G === "small"
  }), A = /* @__PURE__ */ H.isValidElement(x), C = _ || (v == null ? void 0 : v.shape) || "circle", F = pr(z, E, y == null ? void 0 : y.className, `${z}-${C}`, {
    [`${z}-image`]: A || x && o,
    [`${z}-icon`]: !!h
  }, g, oe, I, Y, p), D = typeof G == "number" ? {
    width: G,
    height: G,
    fontSize: h ? G / 2 : 18
  } : {};
  let P;
  if (typeof x == "string" && o)
    P = /* @__PURE__ */ H.createElement("img", {
      src: x,
      draggable: ie,
      srcSet: k,
      onError: S,
      alt: J,
      crossOrigin: fe
    });
  else if (A)
    P = x;
  else if (h)
    P = h;
  else if (i || r !== 1) {
    const b = `scale(${r})`, T = {
      msTransform: b,
      WebkitTransform: b,
      transform: b
    };
    P = /* @__PURE__ */ H.createElement(Co, {
      onResize: O
    }, /* @__PURE__ */ H.createElement("span", {
      className: `${z}-string`,
      ref: l,
      style: Object.assign({}, T)
    }, ce));
  } else
    P = /* @__PURE__ */ H.createElement("span", {
      className: `${z}-string`,
      style: {
        opacity: 0
      },
      ref: l
    }, ce);
  return delete ae.onError, delete ae.gap, Z(/* @__PURE__ */ H.createElement("span", Object.assign({}, ae, {
    style: Object.assign(Object.assign(Object.assign(Object.assign({}, D), se), y == null ? void 0 : y.style), ae.style),
    className: F,
    ref: f
  }), P));
}, jr = /* @__PURE__ */ H.forwardRef(Xo);
process.env.NODE_ENV !== "production" && (jr.displayName = "Avatar");
const ln = (e) => {
  const {
    size: t,
    shape: r
  } = H.useContext(dr), n = H.useMemo(() => ({
    size: e.size || t,
    shape: e.shape || r
  }), [e.size, e.shape, t, r]);
  return /* @__PURE__ */ H.createElement(dr.Provider, {
    value: n
  }, e.children);
}, Jo = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = H.useContext(Ui), {
    prefixCls: n,
    className: i,
    rootClassName: s,
    style: o,
    maxCount: a,
    maxStyle: u,
    size: l,
    shape: f,
    maxPopoverPlacement: d = "top",
    maxPopoverTrigger: y = "hover",
    children: v
  } = e, O = t("avatar", n), S = `${O}-group`, N = Yi(O), [_, R, x] = Xi(O, N), k = pr(S, {
    [`${S}-rtl`]: r === "rtl"
  }, x, N, i, s, R), h = $o(v).map((Y, J) => xo(Y, {
    key: `avatar-key-${J}`
  })), I = h.length;
  if (a && a < I) {
    const Y = h.slice(0, a), J = h.slice(a, I);
    return Y.push(/* @__PURE__ */ H.createElement(No, {
      key: "avatar-popover-key",
      content: J,
      trigger: y,
      placement: d,
      overlayClassName: `${S}-popover`,
      destroyTooltipOnHide: !0
    }, /* @__PURE__ */ H.createElement(jr, {
      style: u
    }, `+${I - a}`))), _(/* @__PURE__ */ H.createElement(ln, {
      shape: f,
      size: l
    }, /* @__PURE__ */ H.createElement("div", {
      className: k,
      style: o
    }, Y)));
  }
  return _(/* @__PURE__ */ H.createElement(ln, {
    shape: f,
    size: l
  }, /* @__PURE__ */ H.createElement("div", {
    className: k,
    style: o
  }, h)));
}, Ji = jr;
Ji.Group = Jo;
var le = function() {
  return le = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, le.apply(this, arguments);
};
function st(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, s; n < i; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function Qo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Zo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ko = /* @__PURE__ */ Qo(
  function(e) {
    return Zo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ea = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ge = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Qi = "active", Zi = "data-styled-version", Wt = "6.1.11", zr = `/*!sc*/
`, qr = typeof window < "u" && "HTMLElement" in window, ta = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), fn = /invalid hook call/i, Tt = /* @__PURE__ */ new Set(), ra = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var s = !0;
      console.error = function(o) {
        for (var a = [], u = 1; u < arguments.length; u++)
          a[u - 1] = arguments[u];
        fn.test(o) ? (s = !1, Tt.delete(n)) : i.apply(void 0, st([o], a, !1));
      }, Ft(), s && !Tt.has(n) && (console.warn(n), Tt.add(n));
    } catch (o) {
      fn.test(o.message) && Tt.delete(n);
    } finally {
      console.error = i;
    }
  }
}, Gt = Object.freeze([]), ot = Object.freeze({});
function na(e, t, r) {
  return r === void 0 && (r = ot), e.theme !== r.theme && e.theme || t || r.theme;
}
var mr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), ia = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, sa = /(^-|-$)/g;
function hn(e) {
  return e.replace(ia, "-").replace(sa, "");
}
var oa = /(a)(d)/gi, Ot = 52, pn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function gr(e) {
  var t, r = "";
  for (t = Math.abs(e); t > Ot; t = t / Ot | 0)
    r = pn(t % Ot) + r;
  return (pn(t % Ot) + r).replace(oa, "$1-$2");
}
var rr, Ki = 5381, ze = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, es = function(e) {
  return ze(Ki, e);
};
function aa(e) {
  return gr(es(e) >>> 0);
}
function ts(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function nr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var rs = typeof Symbol == "function" && Symbol.for, ns = rs ? Symbol.for("react.memo") : 60115, ua = rs ? Symbol.for("react.forward_ref") : 60112, ca = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, la = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, is = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, fa = ((rr = {})[ua] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, rr[ns] = is, rr);
function dn(e) {
  return ("type" in (t = e) && t.type.$$typeof) === ns ? is : "$$typeof" in e ? fa[e.$$typeof] : ca;
  var t;
}
var ha = Object.defineProperty, pa = Object.getOwnPropertyNames, mn = Object.getOwnPropertySymbols, da = Object.getOwnPropertyDescriptor, ma = Object.getPrototypeOf, gn = Object.prototype;
function ss(e, t, r) {
  if (typeof t != "string") {
    if (gn) {
      var n = ma(t);
      n && n !== gn && ss(e, n, r);
    }
    var i = pa(t);
    mn && (i = i.concat(mn(t)));
    for (var s = dn(e), o = dn(t), a = 0; a < i.length; ++a) {
      var u = i[a];
      if (!(u in la || r && r[u] || o && u in o || s && u in s)) {
        var l = da(t, u);
        try {
          ha(e, u, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function at(e) {
  return typeof e == "function";
}
function Ur(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Ue(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function yn(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], n = 1; n < e.length; n++)
    r += e[n];
  return r;
}
function ut(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function yr(e, t, r) {
  if (r === void 0 && (r = !1), !r && !ut(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      e[n] = yr(e[n], t[n]);
  else if (ut(t))
    for (var n in t)
      e[n] = yr(e[n], t[n]);
  return e;
}
function Vr(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var ga = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function ya() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], n = [], i = 1, s = e.length; i < s; i += 1)
    n.push(e[i]);
  return n.forEach(function(o) {
    r = r.replace(/%[a-z]/, o);
  }), r;
}
function ft(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(ya.apply(void 0, st([ga[e]], t, !1)).trim());
}
var va = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++)
      r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, i = n.length, s = i; t >= s; )
        if ((s <<= 1) < 0)
          throw ft(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(n), this.length = s;
      for (var o = i; o < s; o++)
        this.groupSizes[o] = 0;
    }
    for (var a = this.indexOfGroup(t + 1), u = (o = 0, r.length); o < u; o++)
      this.tag.insertRule(a, r[o]) && (this.groupSizes[t]++, a++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), i = n + r;
      this.groupSizes[t] = 0;
      for (var s = n; s < i; s++)
        this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var n = this.groupSizes[t], i = this.indexOfGroup(t), s = i + n, o = i; o < s; o++)
      r += "".concat(this.tag.getRule(o)).concat(zr);
    return r;
  }, e;
}(), wa = 1 << 30, Ct = /* @__PURE__ */ new Map(), Lt = /* @__PURE__ */ new Map(), $t = 1, xt = function(e) {
  if (Ct.has(e))
    return Ct.get(e);
  for (; Lt.has($t); )
    $t++;
  var t = $t++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > wa))
    throw ft(16, "".concat(t));
  return Ct.set(e, t), Lt.set(t, e), t;
}, ba = function(e, t) {
  $t = t + 1, Ct.set(e, t), Lt.set(t, e);
}, Sa = "style[".concat(Ge, "][").concat(Zi, '="').concat(Wt, '"]'), Ta = new RegExp("^".concat(Ge, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Oa = function(e, t, r) {
  for (var n, i = r.split(","), s = 0, o = i.length; s < o; s++)
    (n = i[s]) && e.registerName(t, n);
}, xa = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(zr), i = [], s = 0, o = n.length; s < o; s++) {
    var a = n[s].trim();
    if (a) {
      var u = a.match(Ta);
      if (u) {
        var l = 0 | parseInt(u[1], 10), f = u[2];
        l !== 0 && (ba(f, l), Oa(e, f, u[3]), e.getTag().insertRules(l, i)), i.length = 0;
      } else
        i.push(a);
    }
  }
};
function Ea() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var os = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(a) {
    var u = Array.from(a.querySelectorAll("style[".concat(Ge, "]")));
    return u[u.length - 1];
  }(r), s = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(Ge, Qi), n.setAttribute(Zi, Wt);
  var o = Ea();
  return o && n.setAttribute("nonce", o), r.insertBefore(n, s), n;
}, ka = function() {
  function e(t) {
    this.element = os(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var n = document.styleSheets, i = 0, s = n.length; i < s; i++) {
        var o = n[i];
        if (o.ownerNode === r)
          return o;
      }
      throw ft(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), Aa = function() {
  function e(t) {
    this.element = os(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Pa = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), vn = qr, Ra = { isServer: !qr, useCSSOMInjection: !ta }, as = function() {
  function e(t, r, n) {
    t === void 0 && (t = ot), r === void 0 && (r = {});
    var i = this;
    this.options = le(le({}, Ra), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && qr && vn && (vn = !1, function(s) {
      for (var o = document.querySelectorAll(Sa), a = 0, u = o.length; a < u; a++) {
        var l = o[a];
        l && l.getAttribute(Ge) !== Qi && (xa(s, l), l.parentNode && l.parentNode.removeChild(l));
      }
    }(this)), Vr(this, function() {
      return function(s) {
        for (var o = s.getTag(), a = o.length, u = "", l = function(d) {
          var y = function(_) {
            return Lt.get(_);
          }(d);
          if (y === void 0)
            return "continue";
          var v = s.names.get(y), O = o.getGroup(d);
          if (v === void 0 || O.length === 0)
            return "continue";
          var S = "".concat(Ge, ".g").concat(d, '[id="').concat(y, '"]'), N = "";
          v !== void 0 && v.forEach(function(_) {
            _.length > 0 && (N += "".concat(_, ","));
          }), u += "".concat(O).concat(S, '{content:"').concat(N, '"}').concat(zr);
        }, f = 0; f < a; f++)
          l(f);
        return u;
      }(i);
    });
  }
  return e.registerId = function(t) {
    return xt(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(le(le({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, i = r.target;
      return r.isServer ? new Pa(i) : n ? new ka(i) : new Aa(i);
    }(this.options), new va(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (xt(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(xt(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(xt(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), _a = /&/g, Ca = /^\s*\/\/.*$/gm;
function us(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = us(r.children, t)), r;
  });
}
function $a(e) {
  var t, r, n, i = ot, s = i.options, o = s === void 0 ? ot : s, a = i.plugins, u = a === void 0 ? Gt : a, l = function(y, v, O) {
    return O.startsWith(r) && O.endsWith(r) && O.replaceAll(r, "").length > 0 ? ".".concat(t) : y;
  }, f = u.slice();
  f.push(function(y) {
    y.type === zi && y.value.includes("&") && (y.props[0] = y.props[0].replace(_a, r).replace(n, l));
  }), o.prefix && f.push(jo), f.push(Eo);
  var d = function(y, v, O, S) {
    v === void 0 && (v = ""), O === void 0 && (O = ""), S === void 0 && (S = "&"), t = S, r = v, n = new RegExp("\\".concat(r, "\\b"), "g");
    var N = y.replace(Ca, ""), _ = ko(O || v ? "".concat(O, " ").concat(v, " { ").concat(N, " }") : N);
    o.namespace && (_ = us(_, o.namespace));
    var R = [];
    return qi(_, Lo(f.concat(Mo(function(x) {
      return R.push(x);
    })))), R;
  };
  return d.hash = u.length ? u.reduce(function(y, v) {
    return v.name || ft(15), ze(y, v.name);
  }, Ki).toString() : "", d;
}
var Da = new as(), vr = $a(), cs = we.createContext({ shouldForwardProp: void 0, styleSheet: Da, stylis: vr });
cs.Consumer;
we.createContext(void 0);
function wn() {
  return so(cs);
}
var bn = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, s) {
      s === void 0 && (s = vr);
      var o = n.name + s.hash;
      i.hasNameForId(n.id, o) || i.insertRules(n.id, o, s(n.rules, o, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, Vr(this, function() {
      throw ft(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = vr), this.name + t.hash;
  }, e;
}(), Na = function(e) {
  return e >= "A" && e <= "Z";
};
function Sn(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-")
      return e;
    Na(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var ls = function(e) {
  return e == null || e === !1 || e === "";
}, fs = function(e) {
  var t, r, n = [];
  for (var i in e) {
    var s = e[i];
    e.hasOwnProperty(i) && !ls(s) && (Array.isArray(s) && s.isCss || at(s) ? n.push("".concat(Sn(i), ":"), s, ";") : ut(s) ? n.push.apply(n, st(st(["".concat(i, " {")], fs(s), !1), ["}"], !1)) : n.push("".concat(Sn(i), ": ").concat((t = i, (r = s) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in ea || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function Be(e, t, r, n) {
  if (ls(e))
    return [];
  if (Ur(e))
    return [".".concat(e.styledComponentId)];
  if (at(e)) {
    if (!at(s = e) || s.prototype && s.prototype.isReactComponent || !t)
      return [e];
    var i = e(t);
    return process.env.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof bn || ut(i) || i === null || console.error("".concat(ts(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Be(i, t, r, n);
  }
  var s;
  return e instanceof bn ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : ut(e) ? fs(e) : Array.isArray(e) ? Array.prototype.concat.apply(Gt, e.map(function(o) {
    return Be(o, t, r, n);
  })) : [e.toString()];
}
function Ia(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (at(r) && !Ur(r))
      return !1;
  }
  return !0;
}
var Fa = es(Wt), La = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Ia(t), this.componentId = r, this.baseHash = ze(Fa, r), this.baseStyle = n, as.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        i = Ue(i, this.staticRulesId);
      else {
        var s = yn(Be(this.rules, t, r, n)), o = gr(ze(this.baseHash, s) >>> 0);
        if (!r.hasNameForId(this.componentId, o)) {
          var a = n(s, ".".concat(o), void 0, this.componentId);
          r.insertRules(this.componentId, o, a);
        }
        i = Ue(i, o), this.staticRulesId = o;
      }
    else {
      for (var u = ze(this.baseHash, n.hash), l = "", f = 0; f < this.rules.length; f++) {
        var d = this.rules[f];
        if (typeof d == "string")
          l += d, process.env.NODE_ENV !== "production" && (u = ze(u, d));
        else if (d) {
          var y = yn(Be(d, t, r, n));
          u = ze(u, y + f), l += y;
        }
      }
      if (l) {
        var v = gr(u >>> 0);
        r.hasNameForId(this.componentId, v) || r.insertRules(this.componentId, v, n(l, ".".concat(v), void 0, this.componentId)), i = Ue(i, v);
      }
    }
    return i;
  }, e;
}(), hs = we.createContext(void 0);
hs.Consumer;
var ir = {}, Tn = /* @__PURE__ */ new Set();
function Ma(e, t, r) {
  var n = Ur(e), i = e, s = !nr(e), o = t.attrs, a = o === void 0 ? Gt : o, u = t.componentId, l = u === void 0 ? function(k, h) {
    var I = typeof k != "string" ? "sc" : hn(k);
    ir[I] = (ir[I] || 0) + 1;
    var Y = "".concat(I, "-").concat(aa(Wt + I + ir[I]));
    return h ? "".concat(h, "-").concat(Y) : Y;
  }(t.displayName, t.parentComponentId) : u, f = t.displayName, d = f === void 0 ? function(k) {
    return nr(k) ? "styled.".concat(k) : "Styled(".concat(ts(k), ")");
  }(e) : f, y = t.displayName && t.componentId ? "".concat(hn(t.displayName), "-").concat(t.componentId) : t.componentId || l, v = n && i.attrs ? i.attrs.concat(a).filter(Boolean) : a, O = t.shouldForwardProp;
  if (n && i.shouldForwardProp) {
    var S = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var N = t.shouldForwardProp;
      O = function(k, h) {
        return S(k, h) && N(k, h);
      };
    } else
      O = S;
  }
  var _ = new La(r, y, n ? i.componentStyle : void 0);
  function R(k, h) {
    return function(I, Y, J) {
      var ie = I.attrs, ce = I.componentStyle, fe = I.defaultProps, ae = I.foldedComponentIds, G = I.styledComponentId, ue = I.target, ye = we.useContext(hs), se = wn(), z = I.shouldForwardProp || se.shouldForwardProp;
      process.env.NODE_ENV !== "production" && sn(G);
      var oe = na(Y, ye, fe) || ot, Z = function(F, D, P) {
        for (var b, T = le(le({}, D), { className: void 0, theme: P }), $ = 0; $ < F.length; $ += 1) {
          var ee = at(b = F[$]) ? b(T) : b;
          for (var m in ee)
            T[m] = m === "className" ? Ue(T[m], ee[m]) : m === "style" ? le(le({}, T[m]), ee[m]) : ee[m];
        }
        return D.className && (T.className = Ue(T.className, D.className)), T;
      }(ie, Y, oe), p = Z.as || ue, g = {};
      for (var E in Z)
        Z[E] === void 0 || E[0] === "$" || E === "as" || E === "theme" && Z.theme === oe || (E === "forwardedAs" ? g.as = Z.forwardedAs : z && !z(E, p) || (g[E] = Z[E], z || process.env.NODE_ENV !== "development" || Ko(E) || Tn.has(E) || !mr.has(p) || (Tn.add(E), console.warn('styled-components: it looks like an unknown prop "'.concat(E, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var A = function(F, D) {
        var P = wn(), b = F.generateAndInjectStyles(D, P.styleSheet, P.stylis);
        return process.env.NODE_ENV !== "production" && sn(b), b;
      }(ce, Z);
      process.env.NODE_ENV !== "production" && I.warnTooManyClasses && I.warnTooManyClasses(A);
      var C = Ue(ae, G);
      return A && (C += " " + A), Z.className && (C += " " + Z.className), g[nr(p) && !mr.has(p) ? "class" : "className"] = C, g.ref = J, io(p, g);
    }(x, k, h);
  }
  R.displayName = d;
  var x = we.forwardRef(R);
  return x.attrs = v, x.componentStyle = _, x.displayName = d, x.shouldForwardProp = O, x.foldedComponentIds = n ? Ue(i.foldedComponentIds, i.styledComponentId) : "", x.styledComponentId = y, x.target = n ? i.target : e, Object.defineProperty(x, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(k) {
    this._foldedDefaultProps = n ? function(h) {
      for (var I = [], Y = 1; Y < arguments.length; Y++)
        I[Y - 1] = arguments[Y];
      for (var J = 0, ie = I; J < ie.length; J++)
        yr(h, ie[J], !0);
      return h;
    }({}, i.defaultProps, k) : k;
  } }), process.env.NODE_ENV !== "production" && (ra(d, y), x.warnTooManyClasses = /* @__PURE__ */ function(k, h) {
    var I = {}, Y = !1;
    return function(J) {
      if (!Y && (I[J] = !0, Object.keys(I).length >= 200)) {
        var ie = h ? ' with the id of "'.concat(h, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(k).concat(ie, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), Y = !0, I = {};
      }
    };
  }(d, y)), Vr(x, function() {
    return ".".concat(x.styledComponentId);
  }), s && ss(x, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), x;
}
function On(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}
var xn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function ja(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (at(e) || ut(e))
    return xn(Be(On(Gt, st([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? Be(n) : xn(Be(On(n, t)));
}
function wr(e, t, r) {
  if (r === void 0 && (r = ot), !t)
    throw ft(1, t);
  var n = function(i) {
    for (var s = [], o = 1; o < arguments.length; o++)
      s[o - 1] = arguments[o];
    return e(t, r, ja.apply(void 0, st([i], s, !1)));
  };
  return n.attrs = function(i) {
    return wr(e, t, le(le({}, r), { attrs: Array.prototype.concat(r.attrs, i).filter(Boolean) }));
  }, n.withConfig = function(i) {
    return wr(e, t, le(le({}, r), i));
  }, n;
}
var ps = function(e) {
  return wr(Ma, e);
}, ds = ps;
mr.forEach(function(e) {
  ds[e] = ps(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Et = "__sc-".concat(Ge, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Et] || (window[Et] = 0), window[Et] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Et] += 1);
var ms = "en", Br = {}, br = {};
function gs() {
  return ms;
}
function za(e) {
  ms = e;
}
function qa(e) {
  return Br[e];
}
function Ua(e) {
  if (!e)
    throw new Error("No locale data passed");
  Br[e.locale] = e, br[e.locale.toLowerCase()] = e.locale;
}
function En(e) {
  if (Br[e])
    return e;
  if (br[e.toLowerCase()])
    return br[e.toLowerCase()];
}
function ys(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.localeMatcher || "lookup";
  switch (r) {
    case "lookup":
      return kn(e);
    case "best fit":
      return kn(e);
    default:
      throw new RangeError('Invalid "localeMatcher" option: '.concat(r));
  }
}
function kn(e) {
  var t = En(e);
  if (t)
    return t;
  for (var r = e.split("-"); e.length > 1; ) {
    r.pop(), e = r.join("-");
    var n = En(e);
    if (n)
      return n;
  }
}
var c = {
  af: function(t) {
    return t == 1 ? "one" : "other";
  },
  am: function(t) {
    return t >= 0 && t <= 1 ? "one" : "other";
  },
  ar: function(t) {
    var r = String(t).split("."), n = Number(r[0]) == t, i = n && r[0].slice(-2);
    return t == 0 ? "zero" : t == 1 ? "one" : t == 2 ? "two" : i >= 3 && i <= 10 ? "few" : i >= 11 && i <= 99 ? "many" : "other";
  },
  ast: function(t) {
    var r = String(t).split("."), n = !r[1];
    return t == 1 && n ? "one" : "other";
  },
  be: function(t) {
    var r = String(t).split("."), n = Number(r[0]) == t, i = n && r[0].slice(-1), s = n && r[0].slice(-2);
    return i == 1 && s != 11 ? "one" : i >= 2 && i <= 4 && (s < 12 || s > 14) ? "few" : n && i == 0 || i >= 5 && i <= 9 || s >= 11 && s <= 14 ? "many" : "other";
  },
  br: function(t) {
    var r = String(t).split("."), n = Number(r[0]) == t, i = n && r[0].slice(-1), s = n && r[0].slice(-2), o = n && r[0].slice(-6);
    return i == 1 && s != 11 && s != 71 && s != 91 ? "one" : i == 2 && s != 12 && s != 72 && s != 92 ? "two" : (i == 3 || i == 4 || i == 9) && (s < 10 || s > 19) && (s < 70 || s > 79) && (s < 90 || s > 99) ? "few" : t != 0 && n && o == 0 ? "many" : "other";
  },
  bs: function(t) {
    var r = String(t).split("."), n = r[0], i = r[1] || "", s = !r[1], o = n.slice(-1), a = n.slice(-2), u = i.slice(-1), l = i.slice(-2);
    return s && o == 1 && a != 11 || u == 1 && l != 11 ? "one" : s && o >= 2 && o <= 4 && (a < 12 || a > 14) || u >= 2 && u <= 4 && (l < 12 || l > 14) ? "few" : "other";
  },
  ca: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1], s = n.slice(-6);
    return t == 1 && i ? "one" : n != 0 && s == 0 && i ? "many" : "other";
  },
  ceb: function(t) {
    var r = String(t).split("."), n = r[0], i = r[1] || "", s = !r[1], o = n.slice(-1), a = i.slice(-1);
    return s && (n == 1 || n == 2 || n == 3) || s && o != 4 && o != 6 && o != 9 || !s && a != 4 && a != 6 && a != 9 ? "one" : "other";
  },
  cs: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1];
    return t == 1 && i ? "one" : n >= 2 && n <= 4 && i ? "few" : i ? "other" : "many";
  },
  cy: function(t) {
    return t == 0 ? "zero" : t == 1 ? "one" : t == 2 ? "two" : t == 3 ? "few" : t == 6 ? "many" : "other";
  },
  da: function(t) {
    var r = String(t).split("."), n = r[0], i = Number(r[0]) == t;
    return t == 1 || !i && (n == 0 || n == 1) ? "one" : "other";
  },
  dsb: function(t) {
    var r = String(t).split("."), n = r[0], i = r[1] || "", s = !r[1], o = n.slice(-2), a = i.slice(-2);
    return s && o == 1 || a == 1 ? "one" : s && o == 2 || a == 2 ? "two" : s && (o == 3 || o == 4) || a == 3 || a == 4 ? "few" : "other";
  },
  dz: function(t) {
    return "other";
  },
  es: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1], s = n.slice(-6);
    return t == 1 ? "one" : n != 0 && s == 0 && i ? "many" : "other";
  },
  ff: function(t) {
    return t >= 0 && t < 2 ? "one" : "other";
  },
  fr: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1], s = n.slice(-6);
    return t >= 0 && t < 2 ? "one" : n != 0 && s == 0 && i ? "many" : "other";
  },
  ga: function(t) {
    var r = String(t).split("."), n = Number(r[0]) == t;
    return t == 1 ? "one" : t == 2 ? "two" : n && t >= 3 && t <= 6 ? "few" : n && t >= 7 && t <= 10 ? "many" : "other";
  },
  gd: function(t) {
    var r = String(t).split("."), n = Number(r[0]) == t;
    return t == 1 || t == 11 ? "one" : t == 2 || t == 12 ? "two" : n && t >= 3 && t <= 10 || n && t >= 13 && t <= 19 ? "few" : "other";
  },
  he: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1];
    return n == 1 && i || n == 0 && !i ? "one" : n == 2 && i ? "two" : "other";
  },
  is: function(t) {
    var r = String(t).split("."), n = r[0], i = (r[1] || "").replace(/0+$/, ""), s = Number(r[0]) == t, o = n.slice(-1), a = n.slice(-2);
    return s && o == 1 && a != 11 || i % 10 == 1 && i % 100 != 11 ? "one" : "other";
  },
  ksh: function(t) {
    return t == 0 ? "zero" : t == 1 ? "one" : "other";
  },
  lt: function(t) {
    var r = String(t).split("."), n = r[1] || "", i = Number(r[0]) == t, s = i && r[0].slice(-1), o = i && r[0].slice(-2);
    return s == 1 && (o < 11 || o > 19) ? "one" : s >= 2 && s <= 9 && (o < 11 || o > 19) ? "few" : n != 0 ? "many" : "other";
  },
  lv: function(t) {
    var r = String(t).split("."), n = r[1] || "", i = n.length, s = Number(r[0]) == t, o = s && r[0].slice(-1), a = s && r[0].slice(-2), u = n.slice(-2), l = n.slice(-1);
    return s && o == 0 || a >= 11 && a <= 19 || i == 2 && u >= 11 && u <= 19 ? "zero" : o == 1 && a != 11 || i == 2 && l == 1 && u != 11 || i != 2 && l == 1 ? "one" : "other";
  },
  mk: function(t) {
    var r = String(t).split("."), n = r[0], i = r[1] || "", s = !r[1], o = n.slice(-1), a = n.slice(-2), u = i.slice(-1), l = i.slice(-2);
    return s && o == 1 && a != 11 || u == 1 && l != 11 ? "one" : "other";
  },
  mt: function(t) {
    var r = String(t).split("."), n = Number(r[0]) == t, i = n && r[0].slice(-2);
    return t == 1 ? "one" : t == 2 ? "two" : t == 0 || i >= 3 && i <= 10 ? "few" : i >= 11 && i <= 19 ? "many" : "other";
  },
  pa: function(t) {
    return t == 0 || t == 1 ? "one" : "other";
  },
  pl: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1], s = n.slice(-1), o = n.slice(-2);
    return t == 1 && i ? "one" : i && s >= 2 && s <= 4 && (o < 12 || o > 14) ? "few" : i && n != 1 && (s == 0 || s == 1) || i && s >= 5 && s <= 9 || i && o >= 12 && o <= 14 ? "many" : "other";
  },
  pt: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1], s = n.slice(-6);
    return n == 0 || n == 1 ? "one" : n != 0 && s == 0 && i ? "many" : "other";
  },
  ro: function(t) {
    var r = String(t).split("."), n = !r[1], i = Number(r[0]) == t, s = i && r[0].slice(-2);
    return t == 1 && n ? "one" : !n || t == 0 || t != 1 && s >= 1 && s <= 19 ? "few" : "other";
  },
  ru: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1], s = n.slice(-1), o = n.slice(-2);
    return i && s == 1 && o != 11 ? "one" : i && s >= 2 && s <= 4 && (o < 12 || o > 14) ? "few" : i && s == 0 || i && s >= 5 && s <= 9 || i && o >= 11 && o <= 14 ? "many" : "other";
  },
  se: function(t) {
    return t == 1 ? "one" : t == 2 ? "two" : "other";
  },
  si: function(t) {
    var r = String(t).split("."), n = r[0], i = r[1] || "";
    return t == 0 || t == 1 || n == 0 && i == 1 ? "one" : "other";
  },
  sl: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1], s = n.slice(-2);
    return i && s == 1 ? "one" : i && s == 2 ? "two" : i && (s == 3 || s == 4) || !i ? "few" : "other";
  }
};
c.as = c.am;
c.az = c.af;
c.bg = c.af;
c.bn = c.am;
c.brx = c.af;
c.ce = c.af;
c.chr = c.af;
c.de = c.ast;
c.ee = c.af;
c.el = c.af;
c.en = c.ast;
c.et = c.ast;
c.eu = c.af;
c.fa = c.am;
c.fi = c.ast;
c.fil = c.ceb;
c.fo = c.af;
c.fur = c.af;
c.fy = c.ast;
c.gl = c.ast;
c.gu = c.am;
c.ha = c.af;
c.hi = c.am;
c.hr = c.bs;
c.hsb = c.dsb;
c.hu = c.af;
c.hy = c.ff;
c.ia = c.ast;
c.id = c.dz;
c.ig = c.dz;
c.it = c.ca;
c.ja = c.dz;
c.jgo = c.af;
c.jv = c.dz;
c.ka = c.af;
c.kea = c.dz;
c.kk = c.af;
c.kl = c.af;
c.km = c.dz;
c.kn = c.am;
c.ko = c.dz;
c.ks = c.af;
c.ku = c.af;
c.ky = c.af;
c.lb = c.af;
c.lkt = c.dz;
c.lo = c.dz;
c.ml = c.af;
c.mn = c.af;
c.mr = c.af;
c.ms = c.dz;
c.my = c.dz;
c.nb = c.af;
c.ne = c.af;
c.nl = c.ast;
c.nn = c.af;
c.no = c.af;
c.or = c.af;
c.pcm = c.am;
c.ps = c.af;
c.rm = c.af;
c.sah = c.dz;
c.sc = c.ast;
c.sd = c.af;
c.sk = c.cs;
c.so = c.af;
c.sq = c.af;
c.sr = c.bs;
c.su = c.dz;
c.sv = c.ast;
c.sw = c.ast;
c.ta = c.af;
c.te = c.af;
c.th = c.dz;
c.ti = c.pa;
c.tk = c.af;
c.to = c.dz;
c.tr = c.af;
c.ug = c.af;
c.uk = c.ru;
c.ur = c.ast;
c.uz = c.af;
c.vi = c.dz;
c.wae = c.af;
c.wo = c.dz;
c.xh = c.af;
c.yi = c.ast;
c.yo = c.dz;
c.yue = c.dz;
c.zh = c.dz;
c.zu = c.am;
function An(e) {
  return e === "pt-PT" ? e : Ba(e);
}
var Va = /^([a-z0-9]+)/i;
function Ba(e) {
  var t = e.match(Va);
  if (!t)
    throw new TypeError("Invalid locale: ".concat(e));
  return t[1];
}
function Ha(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pn(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ya(e, t, r) {
  return t && Pn(e.prototype, t), r && Pn(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Sr = /* @__PURE__ */ function() {
  function e(t, r) {
    Ha(this, e);
    var n = e.supportedLocalesOf(t);
    if (n.length === 0)
      throw new RangeError("Unsupported locale: " + t);
    if (r && r.type !== "cardinal")
      throw new RangeError('Only "cardinal" "type" is supported');
    this.$ = c[An(n[0])];
  }
  return Ya(e, [{
    key: "select",
    value: function(r) {
      return this.$(r);
    }
  }], [{
    key: "supportedLocalesOf",
    value: function(r) {
      return typeof r == "string" && (r = [r]), r.filter(function(n) {
        return c[An(n)];
      });
    }
  }]), e;
}();
function Tr(e) {
  "@babel/helpers - typeof";
  return Tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tr(e);
}
function Rn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _n(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rn(Object(r), !0).forEach(function(n) {
      Wa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wa(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Cn(e, t) {
  return Qa(e) || Ja(e, t) || Xa(e, t) || Ga();
}
function Ga() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xa(e, t) {
  if (e) {
    if (typeof e == "string")
      return $n(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return $n(e, t);
  }
}
function $n(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Ja(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, s = !1, o, a;
    try {
      for (r = r.call(e); !(i = (o = r.next()).done) && (n.push(o.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      s = !0, a = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (s)
          throw a;
      }
    }
    return n;
  }
}
function Qa(e) {
  if (Array.isArray(e))
    return e;
}
function Za(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ka(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function eu(e, t, r) {
  return t && Ka(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var tu = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"], ru = ["auto", "always"], nu = ["long", "short", "narrow"], iu = ["lookup", "best fit"], Ie = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Za(this, e);
    var n = r.numeric, i = r.style, s = r.localeMatcher;
    if (this.numeric = "always", this.style = "long", this.localeMatcher = "lookup", n !== void 0) {
      if (ru.indexOf(n) < 0)
        throw new RangeError('Invalid "numeric" option: '.concat(n));
      this.numeric = n;
    }
    if (i !== void 0) {
      if (nu.indexOf(i) < 0)
        throw new RangeError('Invalid "style" option: '.concat(i));
      this.style = i;
    }
    if (s !== void 0) {
      if (iu.indexOf(s) < 0)
        throw new RangeError('Invalid "localeMatcher" option: '.concat(s));
      this.localeMatcher = s;
    }
    if (typeof t == "string" && (t = [t]), t.push(gs()), this.locale = e.supportedLocalesOf(t, {
      localeMatcher: this.localeMatcher
    })[0], !this.locale)
      throw new Error("No supported locale was found");
    Sr.supportedLocalesOf(this.locale).length > 0 ? this.pluralRules = new Sr(this.locale) : console.warn('"'.concat(this.locale, '" locale is not supported')), typeof Intl < "u" && Intl.NumberFormat ? (this.numberFormat = new Intl.NumberFormat(this.locale), this.numberingSystem = this.numberFormat.resolvedOptions().numberingSystem) : this.numberingSystem = "latn", this.locale = ys(this.locale, {
      localeMatcher: this.localeMatcher
    });
  }
  return eu(e, [{
    key: "format",
    value: function() {
      var r = Dn(arguments), n = Cn(r, 2), i = n[0], s = n[1];
      return this.getRule(i, s).replace("{0}", this.formatNumber(Math.abs(i)));
    }
    /**
     * Formats time `number` in `units` (either in past or in future).
     * @param {number} number - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {Object[]} The parts (`{ type, value, unit? }`).
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Version 1 (deprecated).
     * // Returns [
     * //   { type: "literal", value: "in " },
     * //   { type: "day", value: "100" },
     * //   { type: "literal", value: " days" }
     * // ]
     * rtf.formatToParts(100, "day")
     * //
     * // Version 2.
     * // Returns [
     * //   { type: "literal", value: "in " },
     * //   { type: "integer", value: "100", unit: "day" },
     * //   { type: "literal", value: " days" }
     * // ]
     * rtf.formatToParts(100, "day")
     */
  }, {
    key: "formatToParts",
    value: function() {
      var r = Dn(arguments), n = Cn(r, 2), i = n[0], s = n[1], o = this.getRule(i, s), a = o.indexOf("{0}");
      if (a < 0)
        return [{
          type: "literal",
          value: o
        }];
      var u = [];
      return a > 0 && u.push({
        type: "literal",
        value: o.slice(0, a)
      }), u = u.concat(this.formatNumberToParts(Math.abs(i)).map(function(l) {
        return _n(_n({}, l), {}, {
          unit: s
        });
      })), a + 3 < o.length - 1 && u.push({
        type: "literal",
        value: o.slice(a + 3)
      }), u;
    }
    /**
     * Returns formatting rule for `value` in `units` (either in past or in future).
     * @param {number} value - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {string}
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Returns "{0} days ago"
     * getRule(-2, "day")
     */
  }, {
    key: "getRule",
    value: function(r, n) {
      var i = qa(this.locale)[this.style][n];
      if (typeof i == "string")
        return i;
      if (this.numeric === "auto") {
        if (r === -2 || r === -1) {
          var s = i["previous".concat(r === -1 ? "" : "-" + Math.abs(r))];
          if (s)
            return s;
        } else if (r === 1 || r === 2) {
          var o = i["next".concat(r === 1 ? "" : "-" + Math.abs(r))];
          if (o)
            return o;
        } else if (r === 0 && i.current)
          return i.current;
      }
      var a = i[cu(r) ? "past" : "future"];
      if (typeof a == "string")
        return a;
      var u = this.pluralRules && this.pluralRules.select(Math.abs(r)) || "other";
      return a[u] || a.other;
    }
    /**
     * Formats a number into a string.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {string}
     */
  }, {
    key: "formatNumber",
    value: function(r) {
      return this.numberFormat ? this.numberFormat.format(r) : String(r);
    }
    /**
     * Formats a number into a list of parts.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {object[]}
     */
  }, {
    key: "formatNumberToParts",
    value: function(r) {
      return this.numberFormat && this.numberFormat.formatToParts ? this.numberFormat.formatToParts(r) : [{
        type: "integer",
        value: this.formatNumber(r)
      }];
    }
    /**
     * Returns a new object with properties reflecting the locale and date and time formatting options computed during initialization of this DateTimeFormat object.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/resolvedOptions
     * @return {Object}
     */
  }, {
    key: "resolvedOptions",
    value: function() {
      return {
        locale: this.locale,
        style: this.style,
        numeric: this.numeric,
        numberingSystem: this.numberingSystem
      };
    }
  }]), e;
}();
Ie.supportedLocalesOf = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (typeof e == "string")
    e = [e];
  else if (!Array.isArray(e))
    throw new TypeError('Invalid "locales" argument');
  return e.filter(function(r) {
    return ys(r, t);
  });
};
Ie.addLocale = Ua;
Ie.setDefaultLocale = za;
Ie.getDefaultLocale = gs;
Ie.PluralRules = Sr;
var sr = 'Invalid "unit" argument';
function su(e) {
  if (Tr(e) === "symbol")
    throw new TypeError(sr);
  if (typeof e != "string")
    throw new RangeError("".concat(sr, ": ").concat(e));
  if (e[e.length - 1] === "s" && (e = e.slice(0, e.length - 1)), tu.indexOf(e) < 0)
    throw new RangeError("".concat(sr, ": ").concat(e));
  return e;
}
var ou = 'Invalid "number" argument';
function au(e) {
  if (e = Number(e), Number.isFinite && !Number.isFinite(e))
    throw new RangeError("".concat(ou, ": ").concat(e));
  return e;
}
function uu(e) {
  return 1 / e === -1 / 0;
}
function cu(e) {
  return e < 0 || e === 0 && uu(e);
}
function Dn(e) {
  if (e.length < 2)
    throw new TypeError('"unit" argument is required');
  return [au(e[0]), su(e[1])];
}
function Mt(e) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mt(e);
}
function lu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fu(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function hu(e, t, r) {
  return t && fu(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Nn = /* @__PURE__ */ function() {
  function e() {
    lu(this, e), this.cache = {};
  }
  return hu(e, [{
    key: "get",
    value: function() {
      for (var r = this.cache, n = arguments.length, i = new Array(n), s = 0; s < n; s++)
        i[s] = arguments[s];
      for (var o = 0, a = i; o < a.length; o++) {
        var u = a[o];
        if (Mt(r) !== "object")
          return;
        r = r[u];
      }
      return r;
    }
  }, {
    key: "put",
    value: function() {
      for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      for (var s = n.pop(), o = n.pop(), a = this.cache, u = 0, l = n; u < l.length; u++) {
        var f = l[u];
        Mt(a[f]) !== "object" && (a[f] = {}), a = a[f];
      }
      return a[o] = s;
    }
  }]), e;
}();
function Or(e) {
  "@babel/helpers - typeof";
  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Or(e);
}
function pu(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = du(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function du(e, t) {
  if (e) {
    if (typeof e == "string")
      return In(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return In(e, t);
  }
}
function In(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function mu(e, t) {
  for (var r = pu(e), n; !(n = r()).done; ) {
    var i = n.value;
    if (t(i))
      return i;
    for (var s = i.split("-"); s.length > 1; )
      if (s.pop(), i = s.join("-"), t(i))
        return i;
  }
  throw new Error("No locale data has been registered for any of the locales: ".concat(e.join(", ")));
}
function gu() {
  var e = (typeof Intl > "u" ? "undefined" : Or(Intl)) === "object";
  return e && typeof Intl.DateTimeFormat == "function";
}
function xr(e) {
  "@babel/helpers - typeof";
  return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xr(e);
}
function yu(e) {
  return wu(e) && (Array.isArray(e.steps) || // `gradation` property is deprecated: it has been renamed to `steps`.
  Array.isArray(e.gradation) || // `flavour` property is deprecated: it has been renamed to `labels`.
  Array.isArray(e.flavour) || typeof e.flavour == "string" || Array.isArray(e.labels) || typeof e.labels == "string" || // `units` property is deprecated.
  Array.isArray(e.units) || // `custom` property is deprecated.
  typeof e.custom == "function");
}
var vu = {}.constructor;
function wu(e) {
  return xr(e) !== void 0 && e !== null && e.constructor === vu;
}
var ke = 60, jt = 60 * ke, He = 24 * jt, Er = 7 * He, kr = 30.44 * He, vs = 146097 / 400 * He;
function nt(e) {
  switch (e) {
    case "second":
      return 1;
    case "minute":
      return ke;
    case "hour":
      return jt;
    case "day":
      return He;
    case "week":
      return Er;
    case "month":
      return kr;
    case "year":
      return vs;
  }
}
function ws(e) {
  return e.factor !== void 0 ? e.factor : nt(e.unit || e.formatAs) || 1;
}
function yt(e) {
  switch (e) {
    case "floor":
      return Math.floor;
    default:
      return Math.round;
  }
}
function Hr(e) {
  switch (e) {
    case "floor":
      return 1;
    default:
      return 0.5;
  }
}
function Ar(e) {
  "@babel/helpers - typeof";
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ar(e);
}
function bs(e, t) {
  var r = t.prevStep, n = t.timestamp, i = t.now, s = t.future, o = t.round, a;
  return r && (r.id || r.unit) && (a = e["threshold_for_".concat(r.id || r.unit)]), a === void 0 && e.threshold !== void 0 && (a = e.threshold, typeof a == "function" && (a = a(i, s))), a === void 0 && (a = e.minTime), Ar(a) === "object" && (r && r.id && a[r.id] !== void 0 ? a = a[r.id] : a = a.default), typeof a == "function" && (a = a(n, {
    future: s,
    getMinTimeForUnit: function(l, f) {
      return Fn(l, f || r && r.formatAs, {
        round: o
      });
    }
  })), a === void 0 && e.test && (e.test(n, {
    now: i,
    future: s
  }) ? a = 0 : a = 9007199254740991), a === void 0 && (r ? e.formatAs && r.formatAs && (a = Fn(e.formatAs, r.formatAs, {
    round: o
  })) : a = 0), a === void 0 && console.warn("[javascript-time-ago] A step should specify `minTime`:\n" + JSON.stringify(e, null, 2)), a;
}
function Fn(e, t, r) {
  var n = r.round, i = nt(e), s;
  if (t === "now" ? s = nt(e) : s = nt(t), i !== void 0 && s !== void 0)
    return i - s * (1 - Hr(n));
}
function Ln(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ln(Object(r), !0).forEach(function(n) {
      Su(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ln(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Su(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Tu(e, t, r) {
  var n = r.now, i = r.future, s = r.round, o = r.units;
  e = xu(e, o);
  var a = Ou(e, t, {
    now: n,
    future: i,
    round: s
  });
  {
    if (a) {
      var u = e[e.indexOf(a) - 1], l = e[e.indexOf(a) + 1];
      return [u, a, l];
    }
    return [void 0, void 0, e[0]];
  }
}
function Ou(e, t, r) {
  var n = r.now, i = r.future, s = r.round;
  if (e.length !== 0) {
    var o = Ss(e, t, {
      now: n,
      future: i || t < 0,
      round: s
    });
    if (o !== -1) {
      var a = e[o];
      if (a.granularity) {
        var u = yt(s)(Math.abs(t) / ws(a) / a.granularity) * a.granularity;
        if (u === 0 && o > 0)
          return e[o - 1];
      }
      return a;
    }
  }
}
function Ss(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = bs(e[n], bu({
    prevStep: e[n - 1],
    timestamp: r.now - t * 1e3
  }, r));
  return i === void 0 || Math.abs(t) < i ? n - 1 : n === e.length - 1 ? n : Ss(e, t, r, n + 1);
}
function xu(e, t) {
  return e.filter(function(r) {
    var n = r.unit, i = r.formatAs;
    return n = n || i, n ? t.indexOf(n) >= 0 : !0;
  });
}
function Eu(e, t, r) {
  var n = r.now, i = r.round;
  if (nt(e)) {
    var s = nt(e) * 1e3, o = t > n, a = Math.abs(t - n), u = yt(i)(a / s) * s;
    return o ? u > 0 ? a - u + Au(i, s) : a - u + 1 : -(a - u) + ku(i, s);
  }
}
function ku(e, t) {
  return Hr(e) * t;
}
function Au(e, t) {
  return (1 - Hr(e)) * t + 1;
}
var Pu = 365 * 24 * 60 * 60 * 1e3, Ts = 1e3 * Pu;
function Ru(e, t, r) {
  var n = r.prevStep, i = r.nextStep, s = r.now, o = r.future, a = r.round, u = e.getTime ? e.getTime() : e, l = function(O) {
    return Eu(O, u, {
      now: s,
      round: a
    });
  }, f = Cu(o ? t : i, u, {
    future: o,
    now: s,
    round: a,
    prevStep: o ? n : t
    // isFirstStep: future && isFirstStep
  });
  if (f !== void 0) {
    var d;
    if (t && (t.getTimeToNextUpdate && (d = t.getTimeToNextUpdate(u, {
      getTimeToNextUpdateForUnit: l,
      getRoundFunction: yt,
      now: s,
      future: o,
      round: a
    })), d === void 0)) {
      var y = t.unit || t.formatAs;
      y && (d = l(y));
    }
    return d === void 0 ? f : Math.min(d, f);
  }
}
function _u(e, t, r) {
  var n = r.now, i = r.future, s = r.round, o = r.prevStep, a = bs(e, {
    timestamp: t,
    now: n,
    future: i,
    round: s,
    prevStep: o
  });
  if (a !== void 0)
    return i ? t - a * 1e3 + 1 : a === 0 && t === n ? Ts : t + a * 1e3;
}
function Cu(e, t, r) {
  var n = r.now, i = r.future, s = r.round, o = r.prevStep;
  if (e) {
    var a = _u(e, t, {
      now: n,
      future: i,
      round: s,
      prevStep: o
    });
    return a === void 0 ? void 0 : a - n;
  } else
    return i ? t - n + 1 : Ts;
}
var Os = {};
function tt(e) {
  return Os[e];
}
function xs(e) {
  if (!e)
    throw new Error("[javascript-time-ago] No locale data passed.");
  Os[e.locale] = e;
}
const $u = [{
  formatAs: "now"
}, {
  formatAs: "second"
}, {
  formatAs: "minute"
}, {
  formatAs: "hour"
}, {
  formatAs: "day"
}, {
  formatAs: "week"
}, {
  formatAs: "month"
}, {
  formatAs: "year"
}], Pr = {
  steps: $u,
  labels: "long"
};
function Mn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mn(Object(r), !0).forEach(function(n) {
      Du(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Du(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Rr = jn(jn({}, Pr), {}, {
  // Skip "seconds".
  steps: Pr.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
}), Es = [{
  // This step returns the amount of seconds
  // by dividing the amount of seconds by `1`.
  factor: 1,
  // "now" labels are used for formatting the output.
  unit: "now"
}, {
  // When the language doesn't support `now` unit,
  // the first step is ignored, and it uses this `second` unit.
  threshold: 1,
  // `threshold_for_now` should be the same as `threshold` on minutes.
  threshold_for_now: 45.5,
  // This step returns the amount of seconds
  // by dividing the amount of seconds by `1`.
  factor: 1,
  // "second" labels are used for formatting the output.
  unit: "second"
}, {
  // `threshold` should be the same as `threshold_for_now` on seconds.
  threshold: 45.5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: ke,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 2.5 minutes.
  threshold: 2.5 * ke,
  // Allow only 5-minute increments of minutes starting from 2.5 minutes.
  // `granularity` — (advanced) Time interval value "granularity".
  // For example, it could be set to `5` for minutes to allow only 5-minute increments
  // when formatting time intervals: `0 minutes`, `5 minutes`, `10 minutes`, etc.
  // Perhaps this feature will be removed because there seem to be no use cases
  // of it in the real world.
  granularity: 5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: ke,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 22.5 minutes.
  threshold: 22.5 * ke,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in  half-an-hour.
  factor: 0.5 * jt,
  // "half-hour" labels are used for formatting the output.
  // (if available, which is no longer the case)
  unit: "half-hour"
}, {
  // This step is effective starting from 42.5 minutes.
  threshold: 42.5 * ke,
  threshold_for_minute: 52.5 * ke,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in an hour.
  factor: jt,
  // "hour" labels are used for formatting the output.
  unit: "hour"
}, {
  // This step is effective starting from 20.5 hours.
  threshold: 20.5 / 24 * He,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a day.
  factor: He,
  // "day" labels are used for formatting the output.
  unit: "day"
}, {
  // This step is effective starting from 5.5 days.
  threshold: 5.5 * He,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a week.
  factor: Er,
  // "week" labels are used for formatting the output.
  unit: "week"
}, {
  // This step is effective starting from 3.5 weeks.
  threshold: 3.5 * Er,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a month.
  factor: kr,
  // "month" labels are used for formatting the output.
  unit: "month"
}, {
  // This step is effective starting from 10.5 months.
  threshold: 10.5 * kr,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a year.
  factor: vs,
  // "year" labels are used for formatting the output.
  unit: "year"
}], zn = {
  gradation: Es,
  flavour: "long",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
}, Nu = {
  gradation: Es,
  flavour: "long-time",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
};
function ks(e) {
  return e instanceof Date ? e : new Date(e);
}
var _r = [{
  formatAs: "second"
}, {
  formatAs: "minute"
}, {
  formatAs: "hour"
}], xe = {}, Iu = {
  minTime: function(t, r) {
    r.future;
    var n = r.getMinTimeForUnit;
    return n("day");
  },
  format: function(t, r) {
    return xe[r] || (xe[r] = {}), xe[r].dayMonth || (xe[r].dayMonth = new Intl.DateTimeFormat(r, {
      month: "short",
      day: "numeric"
    })), xe[r].dayMonth.format(ks(t));
  }
}, Fu = {
  minTime: function(t, r) {
    var n = r.future;
    if (n) {
      var i = new Date(new Date(t).getFullYear(), 0).getTime() - 1;
      return (t - i) / 1e3;
    } else {
      var s = new Date(new Date(t).getFullYear() + 1, 0).getTime();
      return (s - t) / 1e3;
    }
  },
  format: function(t, r) {
    return xe[r] || (xe[r] = {}), xe[r].dayMonthYear || (xe[r].dayMonthYear = new Intl.DateTimeFormat(r, {
      year: "numeric",
      month: "short",
      day: "numeric"
    })), xe[r].dayMonthYear.format(ks(t));
  }
};
gu() ? _r.push(Iu, Fu) : _r.push({
  formatAs: "day"
}, {
  formatAs: "week"
}, {
  formatAs: "month"
}, {
  formatAs: "year"
});
const Xe = {
  steps: _r,
  labels: [
    // "mini" labels are only defined for a few languages.
    "mini",
    // "short-time" labels are only defined for a few languages.
    "short-time",
    // "narrow" and "short" labels are defined for all languages.
    // "narrow" labels can sometimes be weird (like "+5d."),
    // but "short" labels have the " ago" part, so "narrow" seem
    // more appropriate.
    // "short" labels would have been more appropriate if they
    // didn't have the " ago" part, hence the "short-time" above.
    "narrow",
    // Since "narrow" labels are always present, "short" element
    // of this array can be removed.
    "short"
  ]
};
function qn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qn(Object(r), !0).forEach(function(n) {
      Lu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Lu(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Mu = Un(Un({}, Xe), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Xe.steps)
});
function Vn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vn(Object(r), !0).forEach(function(n) {
      ju(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ju(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Cr = Bn(Bn({}, Xe), {}, {
  // Skip "seconds".
  steps: Xe.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
});
function Hn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hn(Object(r), !0).forEach(function(n) {
      zu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zu(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const qu = Yn(Yn({}, Cr), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Cr.steps)
});
function Wn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wn(Object(r), !0).forEach(function(n) {
      Uu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Uu(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Vu = kt(kt({}, Xe), {}, {
  // Skip "seconds".
  steps: Xe.steps.filter(function(e) {
    return e.formatAs !== "second";
  }).map(function(e) {
    return e.formatAs === "minute" ? kt(kt({}, e), {}, {
      minTime: ke
    }) : e;
  })
}), vt = {
  steps: [{
    formatAs: "second"
  }, {
    formatAs: "minute"
  }, {
    formatAs: "hour"
  }, {
    formatAs: "day"
  }, {
    formatAs: "month"
  }, {
    formatAs: "year"
  }],
  labels: [
    // "mini" labels are only defined for a few languages.
    "mini",
    // "short-time" labels are only defined for a few languages.
    "short-time",
    // "narrow" and "short" labels are defined for all languages.
    // "narrow" labels can sometimes be weird (like "+5d."),
    // but "short" labels have the " ago" part, so "narrow" seem
    // more appropriate.
    // "short" labels would have been more appropriate if they
    // didn't have the " ago" part, hence the "short-time" above.
    "narrow",
    // Since "narrow" labels are always present, "short" element
    // of this array can be removed.
    "short"
  ]
};
function Gn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gn(Object(r), !0).forEach(function(n) {
      Bu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Bu(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Hu = Xn(Xn({}, vt), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(vt.steps)
});
function Jn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jn(Object(r), !0).forEach(function(n) {
      Yu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Yu(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const $r = Qn(Qn({}, vt), {}, {
  // Skip "seconds".
  steps: vt.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
});
function Zn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zn(Object(r), !0).forEach(function(n) {
      Wu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wu(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Gu = Kn(Kn({}, $r), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat($r.steps)
});
function Xu(e) {
  switch (e) {
    case "default":
    case "round":
      return Pr;
    case "round-minute":
      return Rr;
    case "approximate":
      return zn;
    case "time":
    case "approximate-time":
      return Nu;
    case "mini":
      return vt;
    case "mini-now":
      return Hu;
    case "mini-minute":
      return $r;
    case "mini-minute-now":
      return Gu;
    case "twitter":
      return Xe;
    case "twitter-now":
      return Mu;
    case "twitter-minute":
      return Cr;
    case "twitter-minute-now":
      return qu;
    case "twitter-first-minute":
      return Vu;
    default:
      return zn;
  }
}
function zt(e) {
  "@babel/helpers - typeof";
  return zt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zt(e);
}
function Ju(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = As(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qu(e, t) {
  return ec(e) || Ku(e, t) || As(e, t) || Zu();
}
function Zu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function As(e, t) {
  if (e) {
    if (typeof e == "string")
      return ei(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ei(e, t);
  }
}
function ei(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Ku(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, s = !1, o, a;
    try {
      for (r = r.call(e); !(i = (o = r.next()).done) && (n.push(o.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      s = !0, a = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (s)
          throw a;
      }
    }
    return n;
  }
}
function ec(e) {
  if (Array.isArray(e))
    return e;
}
function tc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function nc(e, t, r) {
  return t && rc(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var he = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.polyfill;
    tc(this, e), typeof t == "string" && (t = [t]), this.locale = mu(t.concat(e.getDefaultLocale()), tt), typeof Intl < "u" && Intl.NumberFormat && (this.numberFormat = new Intl.NumberFormat(this.locale)), n === !1 ? (this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat, this.IntlPluralRules = Intl.PluralRules) : (this.IntlRelativeTimeFormat = Ie, this.IntlPluralRules = Ie.PluralRules), this.relativeTimeFormatCache = new Nn(), this.pluralRulesCache = new Nn();
  }
  return nc(e, [{
    key: "format",
    value: function(r, n, i) {
      i || (n && !uc(n) ? (i = n, n = void 0) : i = {}), n || (n = Rr), typeof n == "string" && (n = Xu(n));
      var s = ic(r), o = this.getLabels(n.flavour || n.labels), a = o.labels, u = o.labelsType, l;
      n.now !== void 0 && (l = n.now), l === void 0 && i.now !== void 0 && (l = i.now), l === void 0 && (l = Date.now());
      var f = (l - s) / 1e3, d = i.future || f < 0, y = ac(a, tt(this.locale).now, tt(this.locale).long, d);
      if (n.custom) {
        var v = n.custom({
          now: l,
          date: new Date(s),
          time: s,
          elapsed: f,
          locale: this.locale
        });
        if (v !== void 0)
          return v;
      }
      var O = oc(
        // Controlling `style.steps` through `style.units` seems to be deprecated:
        // create a new custom `style` instead.
        n.units,
        a,
        y
      ), S = i.round || n.round, N = Tu(
        // "gradation" is a legacy name for "steps".
        // For historical reasons, "approximate" steps are used by default.
        // In the next major version, there'll be no default for `steps`.
        n.gradation || n.steps || Rr.steps,
        f,
        {
          now: l,
          units: O,
          round: S,
          future: d,
          getNextStep: !0
        }
      ), _ = Qu(N, 3), R = _[0], x = _[1], k = _[2], h = this.formatDateForStep(s, x, f, {
        labels: a,
        labelsType: u,
        nowLabel: y,
        now: l,
        future: d,
        round: S
      }) || "";
      if (i.getTimeToNextUpdate) {
        var I = Ru(s, x, {
          nextStep: k,
          prevStep: R,
          now: l,
          future: d,
          round: S
        });
        return [h, I];
      }
      return h;
    }
  }, {
    key: "formatDateForStep",
    value: function(r, n, i, s) {
      var o = this, a = s.labels, u = s.labelsType, l = s.nowLabel, f = s.now, d = s.future, y = s.round;
      if (n) {
        if (n.format)
          return n.format(r, this.locale, {
            formatAs: function(_, R) {
              return o.formatValue(R, _, {
                labels: a,
                future: d
              });
            },
            now: f,
            future: d
          });
        var v = n.unit || n.formatAs;
        if (!v)
          throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(n)));
        if (v === "now")
          return l;
        var O = Math.abs(i) / ws(n);
        n.granularity && (O = yt(y)(O / n.granularity) * n.granularity);
        var S = -1 * Math.sign(i) * yt(y)(O);
        switch (S === 0 && (d ? S = 0 : S = -0), u) {
          case "long":
          case "short":
          case "narrow":
            return this.getFormatter(u).format(S, v);
          default:
            return this.formatValue(S, v, {
              labels: a,
              future: d
            });
        }
      }
    }
    /**
     * Mimicks what `Intl.RelativeTimeFormat` does for additional locale styles.
     * @param  {number} value
     * @param  {string} unit
     * @param  {object} options.labels — Relative time labels.
     * @param  {boolean} [options.future] — Tells how to format value `0`: as "future" (`true`) or "past" (`false`). Is `false` by default, but should have been `true` actually.
     * @return {string}
     */
  }, {
    key: "formatValue",
    value: function(r, n, i) {
      var s = i.labels, o = i.future;
      return this.getFormattingRule(s, n, r, {
        future: o
      }).replace("{0}", this.formatNumber(Math.abs(r)));
    }
    /**
     * Returns formatting rule for `value` in `units` (either in past or in future).
     * @param {object} formattingRules — Relative time labels for different units.
     * @param {string} unit - Time interval measurement unit.
     * @param {number} value - Time interval value.
     * @param  {boolean} [options.future] — Tells how to format value `0`: as "future" (`true`) or "past" (`false`). Is `false` by default.
     * @return {string}
     * @example
     * // Returns "{0} days ago"
     * getFormattingRule(en.long, "day", -2, 'en')
     */
  }, {
    key: "getFormattingRule",
    value: function(r, n, i, s) {
      var o = s.future;
      if (this.locale, r = r[n], typeof r == "string")
        return r;
      var a = i === 0 ? o ? "future" : "past" : i < 0 ? "past" : "future", u = r[a] || r;
      if (typeof u == "string")
        return u;
      var l = this.getPluralRules().select(Math.abs(i));
      return u[l] || u.other;
    }
    /**
     * Formats a number into a string.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {string}
     */
  }, {
    key: "formatNumber",
    value: function(r) {
      return this.numberFormat ? this.numberFormat.format(r) : String(r);
    }
    /**
     * Returns an `Intl.RelativeTimeFormat` for a given `labelsType`.
     * @param {string} labelsType
     * @return {object} `Intl.RelativeTimeFormat` instance
     */
  }, {
    key: "getFormatter",
    value: function(r) {
      return this.relativeTimeFormatCache.get(this.locale, r) || this.relativeTimeFormatCache.put(this.locale, r, new this.IntlRelativeTimeFormat(this.locale, {
        style: r
      }));
    }
    /**
     * Returns an `Intl.PluralRules` instance.
     * @return {object} `Intl.PluralRules` instance
     */
  }, {
    key: "getPluralRules",
    value: function() {
      return this.pluralRulesCache.get(this.locale) || this.pluralRulesCache.put(this.locale, new this.IntlPluralRules(this.locale));
    }
    /**
     * Gets localized labels for this type of labels.
     *
     * @param {(string|string[])} labelsType - Relative date/time labels type.
     *                                     If it's an array then all label types are tried
     *                                     until a suitable one is found.
     *
     * @returns {Object} Returns an object of shape { labelsType, labels }
     */
  }, {
    key: "getLabels",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      typeof r == "string" && (r = [r]), r = r.map(function(a) {
        switch (a) {
          case "tiny":
          case "mini-time":
            return "mini";
          default:
            return a;
        }
      }), r = r.concat("long");
      for (var n = tt(this.locale), i = Ju(r), s; !(s = i()).done; ) {
        var o = s.value;
        if (n[o])
          return {
            labelsType: o,
            labels: n[o]
          };
      }
    }
  }]), e;
}(), Ps = "en";
he.getDefaultLocale = function() {
  return Ps;
};
he.setDefaultLocale = function(e) {
  return Ps = e;
};
he.addDefaultLocale = function(e) {
  if (ti)
    return console.error("[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.");
  ti = !0, he.setDefaultLocale(e.locale), he.addLocale(e);
};
var ti;
he.addLocale = function(e) {
  xs(e), Ie.addLocale(e);
};
he.locale = he.addLocale;
he.addLabels = function(e, t, r) {
  var n = tt(e);
  n || (xs({
    locale: e
  }), n = tt(e)), n[t] = r;
};
function ic(e) {
  if (e.constructor === Date || sc(e))
    return e.getTime();
  if (typeof e == "number")
    return e;
  throw new Error("Unsupported relative time formatter input: ".concat(zt(e), ", ").concat(e));
}
function sc(e) {
  return zt(e) === "object" && typeof e.getTime == "function";
}
function oc(e, t, r) {
  var n = Object.keys(t);
  return r && n.push("now"), e && (n = e.filter(function(i) {
    return i === "now" || n.indexOf(i) >= 0;
  })), n;
}
function ac(e, t, r, n) {
  var i = e.now || t && t.now;
  if (i)
    return typeof i == "string" ? i : n ? i.future : i.past;
  if (r && r.second && r.second.current)
    return r.second.current;
}
function uc(e) {
  return typeof e == "string" || yu(e);
}
const Rs = {
  locale: "en",
  long: {
    year: {
      previous: "last year",
      current: "this year",
      next: "next year",
      past: {
        one: "{0} year ago",
        other: "{0} years ago"
      },
      future: {
        one: "in {0} year",
        other: "in {0} years"
      }
    },
    quarter: {
      previous: "last quarter",
      current: "this quarter",
      next: "next quarter",
      past: {
        one: "{0} quarter ago",
        other: "{0} quarters ago"
      },
      future: {
        one: "in {0} quarter",
        other: "in {0} quarters"
      }
    },
    month: {
      previous: "last month",
      current: "this month",
      next: "next month",
      past: {
        one: "{0} month ago",
        other: "{0} months ago"
      },
      future: {
        one: "in {0} month",
        other: "in {0} months"
      }
    },
    week: {
      previous: "last week",
      current: "this week",
      next: "next week",
      past: {
        one: "{0} week ago",
        other: "{0} weeks ago"
      },
      future: {
        one: "in {0} week",
        other: "in {0} weeks"
      }
    },
    day: {
      previous: "yesterday",
      current: "today",
      next: "tomorrow",
      past: {
        one: "{0} day ago",
        other: "{0} days ago"
      },
      future: {
        one: "in {0} day",
        other: "in {0} days"
      }
    },
    hour: {
      current: "this hour",
      past: {
        one: "{0} hour ago",
        other: "{0} hours ago"
      },
      future: {
        one: "in {0} hour",
        other: "in {0} hours"
      }
    },
    minute: {
      current: "this minute",
      past: {
        one: "{0} minute ago",
        other: "{0} minutes ago"
      },
      future: {
        one: "in {0} minute",
        other: "in {0} minutes"
      }
    },
    second: {
      current: "now",
      past: {
        one: "{0} second ago",
        other: "{0} seconds ago"
      },
      future: {
        one: "in {0} second",
        other: "in {0} seconds"
      }
    }
  },
  short: {
    year: {
      previous: "last yr.",
      current: "this yr.",
      next: "next yr.",
      past: "{0} yr. ago",
      future: "in {0} yr."
    },
    quarter: {
      previous: "last qtr.",
      current: "this qtr.",
      next: "next qtr.",
      past: {
        one: "{0} qtr. ago",
        other: "{0} qtrs. ago"
      },
      future: {
        one: "in {0} qtr.",
        other: "in {0} qtrs."
      }
    },
    month: {
      previous: "last mo.",
      current: "this mo.",
      next: "next mo.",
      past: "{0} mo. ago",
      future: "in {0} mo."
    },
    week: {
      previous: "last wk.",
      current: "this wk.",
      next: "next wk.",
      past: "{0} wk. ago",
      future: "in {0} wk."
    },
    day: {
      previous: "yesterday",
      current: "today",
      next: "tomorrow",
      past: {
        one: "{0} day ago",
        other: "{0} days ago"
      },
      future: {
        one: "in {0} day",
        other: "in {0} days"
      }
    },
    hour: {
      current: "this hour",
      past: "{0} hr. ago",
      future: "in {0} hr."
    },
    minute: {
      current: "this minute",
      past: "{0} min. ago",
      future: "in {0} min."
    },
    second: {
      current: "now",
      past: "{0} sec. ago",
      future: "in {0} sec."
    }
  },
  narrow: {
    year: {
      previous: "last yr.",
      current: "this yr.",
      next: "next yr.",
      past: "{0}y ago",
      future: "in {0}y"
    },
    quarter: {
      previous: "last qtr.",
      current: "this qtr.",
      next: "next qtr.",
      past: "{0}q ago",
      future: "in {0}q"
    },
    month: {
      previous: "last mo.",
      current: "this mo.",
      next: "next mo.",
      past: "{0}mo ago",
      future: "in {0}mo"
    },
    week: {
      previous: "last wk.",
      current: "this wk.",
      next: "next wk.",
      past: "{0}w ago",
      future: "in {0}w"
    },
    day: {
      previous: "yesterday",
      current: "today",
      next: "tomorrow",
      past: "{0}d ago",
      future: "in {0}d"
    },
    hour: {
      current: "this hour",
      past: "{0}h ago",
      future: "in {0}h"
    },
    minute: {
      current: "this minute",
      past: "{0}m ago",
      future: "in {0}m"
    },
    second: {
      current: "now",
      past: "{0}s ago",
      future: "in {0}s"
    }
  },
  now: {
    now: {
      current: "now",
      future: "in a moment",
      past: "just now"
    }
  },
  mini: {
    year: "{0}yr",
    month: "{0}mo",
    week: "{0}wk",
    day: "{0}d",
    hour: "{0}h",
    minute: "{0}m",
    second: "{0}s",
    now: "now"
  },
  "short-time": {
    year: "{0} yr.",
    month: "{0} mo.",
    week: "{0} wk.",
    day: {
      one: "{0} day",
      other: "{0} days"
    },
    hour: "{0} hr.",
    minute: "{0} min.",
    second: "{0} sec."
  },
  "long-time": {
    year: {
      one: "{0} year",
      other: "{0} years"
    },
    month: {
      one: "{0} month",
      other: "{0} months"
    },
    week: {
      one: "{0} week",
      other: "{0} weeks"
    },
    day: {
      one: "{0} day",
      other: "{0} days"
    },
    hour: {
      one: "{0} hour",
      other: "{0} hours"
    },
    minute: {
      one: "{0} minute",
      other: "{0} minutes"
    },
    second: {
      one: "{0} second",
      other: "{0} seconds"
    }
  }
};
var Dr = { exports: {} }, At = { exports: {} }, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ri;
function cc() {
  if (ri)
    return q;
  ri = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function x(h) {
    if (typeof h == "object" && h !== null) {
      var I = h.$$typeof;
      switch (I) {
        case t:
          switch (h = h.type, h) {
            case u:
            case l:
            case n:
            case s:
            case i:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case f:
                case O:
                case v:
                case o:
                  return h;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  function k(h) {
    return x(h) === l;
  }
  return q.AsyncMode = u, q.ConcurrentMode = l, q.ContextConsumer = a, q.ContextProvider = o, q.Element = t, q.ForwardRef = f, q.Fragment = n, q.Lazy = O, q.Memo = v, q.Portal = r, q.Profiler = s, q.StrictMode = i, q.Suspense = d, q.isAsyncMode = function(h) {
    return k(h) || x(h) === u;
  }, q.isConcurrentMode = k, q.isContextConsumer = function(h) {
    return x(h) === a;
  }, q.isContextProvider = function(h) {
    return x(h) === o;
  }, q.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, q.isForwardRef = function(h) {
    return x(h) === f;
  }, q.isFragment = function(h) {
    return x(h) === n;
  }, q.isLazy = function(h) {
    return x(h) === O;
  }, q.isMemo = function(h) {
    return x(h) === v;
  }, q.isPortal = function(h) {
    return x(h) === r;
  }, q.isProfiler = function(h) {
    return x(h) === s;
  }, q.isStrictMode = function(h) {
    return x(h) === i;
  }, q.isSuspense = function(h) {
    return x(h) === d;
  }, q.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === l || h === s || h === i || h === d || h === y || typeof h == "object" && h !== null && (h.$$typeof === O || h.$$typeof === v || h.$$typeof === o || h.$$typeof === a || h.$$typeof === f || h.$$typeof === N || h.$$typeof === _ || h.$$typeof === R || h.$$typeof === S);
  }, q.typeOf = x, q;
}
var U = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ni;
function lc() {
  return ni || (ni = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function x(m) {
      return typeof m == "string" || typeof m == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      m === n || m === l || m === s || m === i || m === d || m === y || typeof m == "object" && m !== null && (m.$$typeof === O || m.$$typeof === v || m.$$typeof === o || m.$$typeof === a || m.$$typeof === f || m.$$typeof === N || m.$$typeof === _ || m.$$typeof === R || m.$$typeof === S);
    }
    function k(m) {
      if (typeof m == "object" && m !== null) {
        var Te = m.$$typeof;
        switch (Te) {
          case t:
            var St = m.type;
            switch (St) {
              case u:
              case l:
              case n:
              case s:
              case i:
              case d:
                return St;
              default:
                var nn = St && St.$$typeof;
                switch (nn) {
                  case a:
                  case f:
                  case O:
                  case v:
                  case o:
                    return nn;
                  default:
                    return Te;
                }
            }
          case r:
            return Te;
        }
      }
    }
    var h = u, I = l, Y = a, J = o, ie = t, ce = f, fe = n, ae = O, G = v, ue = r, ye = s, se = i, z = d, oe = !1;
    function Z(m) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(m) || k(m) === u;
    }
    function p(m) {
      return k(m) === l;
    }
    function g(m) {
      return k(m) === a;
    }
    function E(m) {
      return k(m) === o;
    }
    function A(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function C(m) {
      return k(m) === f;
    }
    function F(m) {
      return k(m) === n;
    }
    function D(m) {
      return k(m) === O;
    }
    function P(m) {
      return k(m) === v;
    }
    function b(m) {
      return k(m) === r;
    }
    function T(m) {
      return k(m) === s;
    }
    function $(m) {
      return k(m) === i;
    }
    function ee(m) {
      return k(m) === d;
    }
    U.AsyncMode = h, U.ConcurrentMode = I, U.ContextConsumer = Y, U.ContextProvider = J, U.Element = ie, U.ForwardRef = ce, U.Fragment = fe, U.Lazy = ae, U.Memo = G, U.Portal = ue, U.Profiler = ye, U.StrictMode = se, U.Suspense = z, U.isAsyncMode = Z, U.isConcurrentMode = p, U.isContextConsumer = g, U.isContextProvider = E, U.isElement = A, U.isForwardRef = C, U.isFragment = F, U.isLazy = D, U.isMemo = P, U.isPortal = b, U.isProfiler = T, U.isStrictMode = $, U.isSuspense = ee, U.isValidElementType = x, U.typeOf = k;
  }()), U;
}
var ii;
function _s() {
  return ii || (ii = 1, process.env.NODE_ENV === "production" ? At.exports = cc() : At.exports = lc()), At.exports;
}
var or, si;
function fc() {
  if (si)
    return or;
  si = 1;
  var e = _s(), t = Ao(), r = Vi(), n = Po(), i = Ro(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(a) {
    var u = "Warning: " + a;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return or = function(a, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function d(p) {
      var g = p && (l && p[l] || p[f]);
      if (typeof g == "function")
        return g;
    }
    var y = "<<anonymous>>", v = {
      array: _("array"),
      bigint: _("bigint"),
      bool: _("boolean"),
      func: _("function"),
      number: _("number"),
      object: _("object"),
      string: _("string"),
      symbol: _("symbol"),
      any: R(),
      arrayOf: x,
      element: k(),
      elementType: h(),
      instanceOf: I,
      node: ce(),
      objectOf: J,
      oneOf: Y,
      oneOfType: ie,
      shape: ae,
      exact: G
    };
    function O(p, g) {
      return p === g ? p !== 0 || 1 / p === 1 / g : p !== p && g !== g;
    }
    function S(p, g) {
      this.message = p, this.data = g && typeof g == "object" ? g : {}, this.stack = "";
    }
    S.prototype = Error.prototype;
    function N(p) {
      if (process.env.NODE_ENV !== "production")
        var g = {}, E = 0;
      function A(F, D, P, b, T, $, ee) {
        if (b = b || y, $ = $ || P, ee !== r) {
          if (u) {
            var m = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw m.name = "Invariant Violation", m;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Te = b + ":" + P;
            !g[Te] && // Avoid spamming the console because they are often not actionable except for lib authors
            E < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + b + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), g[Te] = !0, E++);
          }
        }
        return D[P] == null ? F ? D[P] === null ? new S("The " + T + " `" + $ + "` is marked as required " + ("in `" + b + "`, but its value is `null`.")) : new S("The " + T + " `" + $ + "` is marked as required in " + ("`" + b + "`, but its value is `undefined`.")) : null : p(D, P, b, T, $);
      }
      var C = A.bind(null, !1);
      return C.isRequired = A.bind(null, !0), C;
    }
    function _(p) {
      function g(E, A, C, F, D, P) {
        var b = E[A], T = se(b);
        if (T !== p) {
          var $ = z(b);
          return new S(
            "Invalid " + F + " `" + D + "` of type " + ("`" + $ + "` supplied to `" + C + "`, expected ") + ("`" + p + "`."),
            { expectedType: p }
          );
        }
        return null;
      }
      return N(g);
    }
    function R() {
      return N(o);
    }
    function x(p) {
      function g(E, A, C, F, D) {
        if (typeof p != "function")
          return new S("Property `" + D + "` of component `" + C + "` has invalid PropType notation inside arrayOf.");
        var P = E[A];
        if (!Array.isArray(P)) {
          var b = se(P);
          return new S("Invalid " + F + " `" + D + "` of type " + ("`" + b + "` supplied to `" + C + "`, expected an array."));
        }
        for (var T = 0; T < P.length; T++) {
          var $ = p(P, T, C, F, D + "[" + T + "]", r);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return N(g);
    }
    function k() {
      function p(g, E, A, C, F) {
        var D = g[E];
        if (!a(D)) {
          var P = se(D);
          return new S("Invalid " + C + " `" + F + "` of type " + ("`" + P + "` supplied to `" + A + "`, expected a single ReactElement."));
        }
        return null;
      }
      return N(p);
    }
    function h() {
      function p(g, E, A, C, F) {
        var D = g[E];
        if (!e.isValidElementType(D)) {
          var P = se(D);
          return new S("Invalid " + C + " `" + F + "` of type " + ("`" + P + "` supplied to `" + A + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return N(p);
    }
    function I(p) {
      function g(E, A, C, F, D) {
        if (!(E[A] instanceof p)) {
          var P = p.name || y, b = Z(E[A]);
          return new S("Invalid " + F + " `" + D + "` of type " + ("`" + b + "` supplied to `" + C + "`, expected ") + ("instance of `" + P + "`."));
        }
        return null;
      }
      return N(g);
    }
    function Y(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), o;
      function g(E, A, C, F, D) {
        for (var P = E[A], b = 0; b < p.length; b++)
          if (O(P, p[b]))
            return null;
        var T = JSON.stringify(p, function(ee, m) {
          var Te = z(m);
          return Te === "symbol" ? String(m) : m;
        });
        return new S("Invalid " + F + " `" + D + "` of value `" + String(P) + "` " + ("supplied to `" + C + "`, expected one of " + T + "."));
      }
      return N(g);
    }
    function J(p) {
      function g(E, A, C, F, D) {
        if (typeof p != "function")
          return new S("Property `" + D + "` of component `" + C + "` has invalid PropType notation inside objectOf.");
        var P = E[A], b = se(P);
        if (b !== "object")
          return new S("Invalid " + F + " `" + D + "` of type " + ("`" + b + "` supplied to `" + C + "`, expected an object."));
        for (var T in P)
          if (n(P, T)) {
            var $ = p(P, T, C, F, D + "." + T, r);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return N(g);
    }
    function ie(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var g = 0; g < p.length; g++) {
        var E = p[g];
        if (typeof E != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(E) + " at index " + g + "."
          ), o;
      }
      function A(C, F, D, P, b) {
        for (var T = [], $ = 0; $ < p.length; $++) {
          var ee = p[$], m = ee(C, F, D, P, b, r);
          if (m == null)
            return null;
          m.data && n(m.data, "expectedType") && T.push(m.data.expectedType);
        }
        var Te = T.length > 0 ? ", expected one of type [" + T.join(", ") + "]" : "";
        return new S("Invalid " + P + " `" + b + "` supplied to " + ("`" + D + "`" + Te + "."));
      }
      return N(A);
    }
    function ce() {
      function p(g, E, A, C, F) {
        return ue(g[E]) ? null : new S("Invalid " + C + " `" + F + "` supplied to " + ("`" + A + "`, expected a ReactNode."));
      }
      return N(p);
    }
    function fe(p, g, E, A, C) {
      return new S(
        (p || "React class") + ": " + g + " type `" + E + "." + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + C + "`."
      );
    }
    function ae(p) {
      function g(E, A, C, F, D) {
        var P = E[A], b = se(P);
        if (b !== "object")
          return new S("Invalid " + F + " `" + D + "` of type `" + b + "` " + ("supplied to `" + C + "`, expected `object`."));
        for (var T in p) {
          var $ = p[T];
          if (typeof $ != "function")
            return fe(C, F, D, T, z($));
          var ee = $(P, T, C, F, D + "." + T, r);
          if (ee)
            return ee;
        }
        return null;
      }
      return N(g);
    }
    function G(p) {
      function g(E, A, C, F, D) {
        var P = E[A], b = se(P);
        if (b !== "object")
          return new S("Invalid " + F + " `" + D + "` of type `" + b + "` " + ("supplied to `" + C + "`, expected `object`."));
        var T = t({}, E[A], p);
        for (var $ in T) {
          var ee = p[$];
          if (n(p, $) && typeof ee != "function")
            return fe(C, F, D, $, z(ee));
          if (!ee)
            return new S(
              "Invalid " + F + " `" + D + "` key `" + $ + "` supplied to `" + C + "`.\nBad object: " + JSON.stringify(E[A], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(p), null, "  ")
            );
          var m = ee(P, $, C, F, D + "." + $, r);
          if (m)
            return m;
        }
        return null;
      }
      return N(g);
    }
    function ue(p) {
      switch (typeof p) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !p;
        case "object":
          if (Array.isArray(p))
            return p.every(ue);
          if (p === null || a(p))
            return !0;
          var g = d(p);
          if (g) {
            var E = g.call(p), A;
            if (g !== p.entries) {
              for (; !(A = E.next()).done; )
                if (!ue(A.value))
                  return !1;
            } else
              for (; !(A = E.next()).done; ) {
                var C = A.value;
                if (C && !ue(C[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ye(p, g) {
      return p === "symbol" ? !0 : g ? g["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && g instanceof Symbol : !1;
    }
    function se(p) {
      var g = typeof p;
      return Array.isArray(p) ? "array" : p instanceof RegExp ? "object" : ye(g, p) ? "symbol" : g;
    }
    function z(p) {
      if (typeof p > "u" || p === null)
        return "" + p;
      var g = se(p);
      if (g === "object") {
        if (p instanceof Date)
          return "date";
        if (p instanceof RegExp)
          return "regexp";
      }
      return g;
    }
    function oe(p) {
      var g = z(p);
      switch (g) {
        case "array":
        case "object":
          return "an " + g;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + g;
        default:
          return g;
      }
    }
    function Z(p) {
      return !p.constructor || !p.constructor.name ? y : p.constructor.name;
    }
    return v.checkPropTypes = i, v.resetWarningCache = i.resetWarningCache, v.PropTypes = v, v;
  }, or;
}
var ar, oi;
function hc() {
  if (oi)
    return ar;
  oi = 1;
  var e = Vi();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ar = function() {
    function n(o, a, u, l, f, d) {
      if (d !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, ar;
}
if (process.env.NODE_ENV !== "production") {
  var pc = _s(), dc = !0;
  Dr.exports = fc()(pc.isElement, dc);
} else
  Dr.exports = hc()();
var mc = Dr.exports;
const j = /* @__PURE__ */ Bi(mc);
var gc = ["date", "verboseDate", "tooltip", "children"];
function Nr() {
  return Nr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nr.apply(this, arguments);
}
function yc(e, t) {
  if (e == null)
    return {};
  var r = vc(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function vc(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, s;
  for (s = 0; s < n.length; s++)
    i = n[s], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function qt(e, t) {
  var r = e.date, n = e.verboseDate, i = e.tooltip, s = e.children, o = yc(e, gc), a = je(function() {
    return r.toISOString();
  }, [r]);
  return /* @__PURE__ */ we.createElement("time", Nr({
    ref: t
  }, o, {
    dateTime: a,
    title: i ? n : void 0
  }), s);
}
qt = /* @__PURE__ */ we.forwardRef(qt);
qt.propTypes = {
  date: j.instanceOf(Date).isRequired,
  verboseDate: j.string,
  tooltip: j.bool.isRequired,
  children: j.string.isRequired
};
var ai = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function wc(e, t) {
  return !!(e === t || ai(e) && ai(t));
}
function bc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!wc(e[r], t[r]))
      return !1;
  return !0;
}
function Sc(e, t) {
  t === void 0 && (t = bc);
  var r = null;
  function n() {
    for (var i = [], s = 0; s < arguments.length; s++)
      i[s] = arguments[s];
    if (r && r.lastThis === this && t(i, r.lastArgs))
      return r.lastResult;
    var o = e.apply(this, i);
    return r = {
      lastResult: o,
      lastArgs: i,
      lastThis: this
    }, o;
  }
  return n.clear = function() {
    r = null;
  }, n;
}
function Ir(e) {
  "@babel/helpers - typeof";
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ir(e);
}
function Tc(e) {
  if (Cs())
    return Intl.DateTimeFormat.supportedLocalesOf(e)[0];
}
function Cs() {
  var e = (typeof Intl > "u" ? "undefined" : Ir(Intl)) === "object";
  return e && typeof Intl.DateTimeFormat == "function";
}
function Ut(e) {
  "@babel/helpers - typeof";
  return Ut = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ut(e);
}
function Oc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ec(e, t, r) {
  return t && xc(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var $s = /* @__PURE__ */ function() {
  function e() {
    Oc(this, e), this.cache = {};
  }
  return Ec(e, [{
    key: "get",
    value: function() {
      for (var r = this.cache, n = arguments.length, i = new Array(n), s = 0; s < n; s++)
        i[s] = arguments[s];
      for (var o = 0, a = i; o < a.length; o++) {
        var u = a[o];
        if (Ut(r) !== "object")
          return;
        r = r[u];
      }
      return r;
    }
  }, {
    key: "put",
    value: function() {
      for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      for (var s = n.pop(), o = n.pop(), a = this.cache, u = 0, l = n; u < l.length; u++) {
        var f = l[u];
        Ut(a[f]) !== "object" && (a[f] = {}), a = a[f];
      }
      return a[o] = s;
    }
  }]), e;
}(), ui = new $s(), kc = Cs(), Ac = function(t) {
  return t.toString();
};
function Pc(e, t) {
  if (!kc)
    return Ac;
  var r = _c(e), n = JSON.stringify(t), i = ui.get(String(r), n) || ui.put(String(r), n, new Intl.DateTimeFormat(r, t));
  return function(s) {
    return i.format(s);
  };
}
const Rc = Sc(Pc);
var ur = {};
function _c(e) {
  var t = e.toString();
  return ur[t] ? ur[t] : ur[t] = Tc(e);
}
function Fr(e) {
  "@babel/helpers - typeof";
  return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fr(e);
}
function Cc(e) {
  return $c(e) ? e : new Date(e);
}
function $c(e) {
  return e instanceof Date || Dc(e);
}
function Dc(e) {
  return Fr(e) === "object" && typeof e.getTime == "function";
}
var ci = new $s();
function Nc(e, t) {
  var r = t.polyfill, n = String(e) + ":" + String(r);
  return ci.get(n) || ci.put(n, new he(e, {
    polyfill: r
  }));
}
var Xt = { exports: {} }, dt = { exports: {} };
(function() {
  var e, t, r, n, i, s;
  typeof performance < "u" && performance !== null && performance.now ? dt.exports = function() {
    return performance.now();
  } : typeof process < "u" && process !== null && process.hrtime ? (dt.exports = function() {
    return (e() - i) / 1e6;
  }, t = process.hrtime, e = function() {
    var o;
    return o = t(), o[0] * 1e9 + o[1];
  }, n = e(), s = process.uptime() * 1e9, i = n - s) : Date.now ? (dt.exports = function() {
    return Date.now() - r;
  }, r = Date.now()) : (dt.exports = function() {
    return (/* @__PURE__ */ new Date()).getTime() - r;
  }, r = (/* @__PURE__ */ new Date()).getTime());
}).call(Hi);
var Ic = dt.exports, Fc = Ic, Pe = typeof window > "u" ? Hi : window, Pt = ["moz", "webkit"], it = "AnimationFrame", ct = Pe["request" + it], wt = Pe["cancel" + it] || Pe["cancelRequest" + it];
for (var pt = 0; !ct && pt < Pt.length; pt++)
  ct = Pe[Pt[pt] + "Request" + it], wt = Pe[Pt[pt] + "Cancel" + it] || Pe[Pt[pt] + "CancelRequest" + it];
if (!ct || !wt) {
  var cr = 0, li = 0, Me = [], Lc = 1e3 / 60;
  ct = function(e) {
    if (Me.length === 0) {
      var t = Fc(), r = Math.max(0, Lc - (t - cr));
      cr = r + t, setTimeout(function() {
        var n = Me.slice(0);
        Me.length = 0;
        for (var i = 0; i < n.length; i++)
          if (!n[i].cancelled)
            try {
              n[i].callback(cr);
            } catch (s) {
              setTimeout(function() {
                throw s;
              }, 0);
            }
      }, Math.round(r));
    }
    return Me.push({
      handle: ++li,
      callback: e,
      cancelled: !1
    }), li;
  }, wt = function(e) {
    for (var t = 0; t < Me.length; t++)
      Me[t].handle === e && (Me[t].cancelled = !0);
  };
}
Xt.exports = function(e) {
  return ct.call(Pe, e);
};
Xt.exports.cancel = function() {
  wt.apply(Pe, arguments);
};
Xt.exports.polyfill = function(e) {
  e || (e = Pe), e.requestAnimationFrame = ct, e.cancelAnimationFrame = wt;
};
var Mc = Xt.exports;
const fi = /* @__PURE__ */ Bi(Mc);
function jc(e, t) {
  if (e.length === 0)
    return 0;
  for (var r = 0, n = e.length - 1, i; r <= n; ) {
    i = Math.floor((n + r) / 2);
    var s = t(e[i]);
    if (s === 0)
      return i;
    if (s < 0) {
      if (r = i + 1, r > n)
        return r;
    } else if (n = i - 1, n < r)
      return r;
  }
}
function zc(e, t) {
  return Bc(e) || Vc(e, t) || Uc(e, t) || qc();
}
function qc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Uc(e, t) {
  if (e) {
    if (typeof e == "string")
      return hi(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return hi(e, t);
  }
}
function hi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Vc(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, s = !1, o, a;
    try {
      for (r = r.call(e); !(i = (o = r.next()).done) && (n.push(o.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      s = !0, a = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (s)
          throw a;
      }
    }
    return n;
  }
}
function Bc(e) {
  if (Array.isArray(e))
    return e;
}
const Hc = {
  instances: [],
  add: function(t) {
    var r = this, n = this.instances.length === 0;
    return Ds(this.instances, t), n && this.start(), {
      stop: function() {
        Ns(r.instances, t), r.instances.length === 0 && r.stop();
      },
      forceUpdate: function() {
        pi(t, r.instances);
      }
    };
  },
  tick: function() {
    for (var t = Date.now(); ; ) {
      var r = this.instances[0];
      if (t >= r.nextUpdateTime)
        pi(r, this.instances);
      else
        break;
    }
  },
  scheduleNextTick: function() {
    var t = this;
    this.scheduledTick = fi(function() {
      t.tick(), t.scheduleNextTick();
    });
  },
  start: function() {
    this.scheduleNextTick();
  },
  stop: function() {
    fi.cancel(this.scheduledTick);
  }
};
function Yc(e) {
  var t = e.getNextValue(), r = zc(t, 2), n = r[0], i = r[1];
  e.setValue(n), e.nextUpdateTime = i;
}
function pi(e, t) {
  Yc(e), Ns(t, e), Ds(t, e);
}
function Ds(e, t) {
  var r = Wc(e, t);
  e.splice(r, 0, t);
}
function Ns(e, t) {
  var r = e.indexOf(t);
  e.splice(r, 1);
}
function Wc(e, t) {
  var r = t.nextUpdateTime;
  return jc(e, function(n) {
    return n.nextUpdateTime === r ? 0 : n.nextUpdateTime > r ? 1 : -1;
  });
}
function Rt(e, t) {
  return Qc(e) || Jc(e, t) || Xc(e, t) || Gc();
}
function Gc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xc(e, t) {
  if (e) {
    if (typeof e == "string")
      return di(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return di(e, t);
  }
}
function di(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Jc(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, s = !1, o, a;
    try {
      for (r = r.call(e); !(i = (o = r.next()).done) && (n.push(o.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      s = !0, a = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (s)
          throw a;
      }
    }
    return n;
  }
}
function Qc(e) {
  if (Array.isArray(e))
    return e;
}
function Zc(e) {
  var t = e.date, r = e.future, n = e.locale, i = e.locales, s = e.timeStyle, o = e.round, a = e.minTimeLeft, u = e.formatVerboseDate, l = e.verboseDateFormat, f = l === void 0 ? tl : l, d = e.updateInterval, y = e.tick, v = y === void 0 ? !0 : y, O = e.now, S = e.timeOffset, N = S === void 0 ? 0 : S, _ = e.polyfill, R = je(function() {
    return n && (i = [n]), i.concat(he.getDefaultLocale());
  }, [n, i]), x = je(function() {
    return Nc(R, {
      polyfill: _
    });
  }, [R, _]);
  t = je(function() {
    return Cc(t);
  }, [t]);
  var k = oo(function() {
    var z = (O || Date.now()) - N, oe;
    if (r && z >= t.getTime() && (z = t.getTime(), oe = !0), a !== void 0) {
      var Z = t.getTime() - a * 1e3;
      z > Z && (z = Z, oe = !0);
    }
    var p = x.format(t, s, {
      getTimeToNextUpdate: !0,
      now: z,
      future: r,
      round: o
    }), g = Rt(p, 2), E = g[0], A = g[1];
    return oe ? A = el : A = d || A || 60 * 1e3, [E, z + A];
  }, [t, r, s, d, o, a, x, O]), h = Ft();
  h.current = k;
  var I = je(k, []), Y = Rt(I, 2), J = Y[0], ie = Y[1], ce = ao(J), fe = Rt(ce, 2), ae = fe[0], G = fe[1], ue = Ft();
  on(function() {
    if (v)
      return ue.current = Hc.add({
        getNextValue: function() {
          return h.current();
        },
        setValue: G,
        nextUpdateTime: ie
      }), function() {
        return ue.current.stop();
      };
  }, [v]), on(function() {
    if (ue.current)
      ue.current.forceUpdate();
    else {
      var z = k(), oe = Rt(z, 1), Z = oe[0];
      G(Z);
    }
  }, [k]);
  var ye = je(function() {
    return Rc(R, f);
  }, [R, f]), se = je(function() {
    return u ? u(t) : ye(t);
  }, [t, u, ye]);
  return {
    date: t,
    formattedDate: ae,
    verboseDate: se
  };
}
var Kc = 365 * 24 * 60 * 60 * 1e3, el = 1e3 * Kc, tl = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
  // timeZoneName: 'short'
}, Lr = j.oneOfType, mi = j.arrayOf, rt = j.string, gi = j.number, mt = j.shape, _t = j.func, rl = Lr([mt({
  minTime: gi,
  formatAs: rt.isRequired
}), mt({
  test: _t,
  formatAs: rt.isRequired
}), mt({
  minTime: gi,
  format: _t.isRequired
}), mt({
  test: _t,
  format: _t.isRequired
})]), nl = Lr([
  // Not using `oneOf()` here, because that way
  // this package wouldn't support some hypothetical
  // new styles added to `javascript-time-ago` in some future.
  rt,
  mt({
    steps: mi(rl).isRequired,
    labels: Lr([rt, mi(rt)]).isRequired,
    round: rt
  })
]), il = ["date", "future", "timeStyle", "round", "minTimeLeft", "locale", "locales", "formatVerboseDate", "verboseDateFormat", "updateInterval", "tick", "now", "timeOffset", "polyfill", "tooltip", "component", "container", "wrapperComponent", "wrapperProps"];
function Vt() {
  return Vt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vt.apply(this, arguments);
}
function sl(e, t) {
  if (e == null)
    return {};
  var r = ol(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ol(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, s;
  for (s = 0; s < n.length; s++)
    i = n[s], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Bt(e) {
  var t = e.date, r = e.future, n = e.timeStyle, i = e.round, s = e.minTimeLeft, o = e.locale, a = e.locales, u = a === void 0 ? [] : a, l = e.formatVerboseDate, f = e.verboseDateFormat, d = e.updateInterval, y = e.tick, v = e.now, O = e.timeOffset, S = e.polyfill, N = e.tooltip, _ = N === void 0 ? !0 : N, R = e.component, x = R === void 0 ? qt : R, k = e.container, h = e.wrapperComponent, I = e.wrapperProps, Y = sl(e, il), J = Zc({
    date: t,
    future: r,
    timeStyle: n,
    round: i,
    minTimeLeft: s,
    locale: o,
    locales: u,
    formatVerboseDate: l,
    verboseDateFormat: f,
    updateInterval: d,
    tick: y,
    now: v,
    timeOffset: O,
    polyfill: S
  }), ie = J.date, ce = J.verboseDate, fe = J.formattedDate, ae = /* @__PURE__ */ we.createElement(x, Vt({
    date: ie,
    verboseDate: ce,
    tooltip: _
  }, Y), fe), G = h || k;
  return G ? /* @__PURE__ */ we.createElement(G, Vt({}, I, {
    verboseDate: ce
  }), ae) : ae;
}
Bt.propTypes = {
  // `date: Date` or `timestamp: number`.
  // E.g. `new Date()` or `1355972400000`.
  date: j.oneOfType([j.instanceOf(Date), j.number]).isRequired,
  // Preferred locale.
  // Is 'en' by default.
  // E.g. 'ru-RU'.
  locale: j.string,
  // Alternatively to `locale`, one could pass `locales`:
  // A list of preferred locales (ordered).
  // Will choose the first supported locale from the list.
  // E.g. `['ru-RU', 'en-GB']`.
  locales: j.arrayOf(j.string),
  // If set to `true`, then will stop at "zero point"
  // when going from future dates to past dates.
  // In other words, even if the `date` has passed,
  // it will still render as if `date` is `now`.
  future: j.bool,
  // Date/time formatting style.
  // See `javascript-time-ago` docs on "Styles" for more info.
  // E.g. 'round', 'round-minute', 'twitter', 'twitter-first-minute'.
  timeStyle: nl,
  // `round` parameter of `javascript-time-ago`.
  // See `javascript-time-ago` docs on "Rounding" for more info.
  // Examples: "round", "floor".
  round: j.string,
  // If specified, the time won't "tick" past this threshold (in seconds).
  // For example, if `minTimeLeft` is `60 * 60`
  // then the time won't "tick" past "in 1 hour".
  minTimeLeft: j.number,
  // A React component to render the relative time label.
  // Receives properties:
  // * date: Date — The date.
  // * verboseDate: string — Formatted verbose date.
  // * tooltip: boolean — The `tooltip` property of `<ReactTimeAgo/>` component.
  // * children: string — The relative time label.
  // * All "unknown" properties that have been passed to `<ReactTimeAgo/>` are passed through to this component.
  component: j.elementType,
  // Whether to use HTML `tooltip` attribute to show a verbose date tooltip.
  // Is `true` by default.
  // Can be set to `false` to disable the native HTML `tooltip`.
  tooltip: j.bool,
  // Verbose date formatter.
  // By default it's `(date) => new Intl.DateTimeFormat(locale, {…}).format(date)`.
  formatVerboseDate: j.func,
  // `Intl.DateTimeFormat` format for formatting verbose date.
  // See `Intl.DateTimeFormat` docs for more info.
  verboseDateFormat: j.object,
  // (deprecated)
  // How often the component refreshes itself.
  // When not provided, will use `getNextTimeToUpdate()` feature
  // of `javascript-time-ago` styles to determine the update interval.
  updateInterval: j.oneOfType([j.number, j.arrayOf(j.shape({
    threshold: j.number,
    interval: j.number.isRequired
  }))]),
  // (deprecated).
  // Set to `false` to disable automatic refresh of the component.
  // Is `true` by default.
  // I guess no one actually turns auto-update off, so this parameter is deprecated.
  tick: j.bool,
  // Allows setting a custom baseline for relative time measurement.
  // https://gitlab.com/catamphetamine/react-time-ago/-/issues/4
  now: j.number,
  // Allows offsetting the `date` by an arbitrary amount of milliseconds.
  // https://gitlab.com/catamphetamine/react-time-ago/-/issues/4
  timeOffset: j.number,
  // Pass `false` to use native `Intl.RelativeTimeFormat` / `Intl.PluralRules`
  // instead of the polyfilled ones in `javascript-time-ago`.
  polyfill: j.bool,
  // (advanced)
  // A React Component to wrap the resulting `<time/>` React Element.
  // Receives `verboseDate` and `children` properties.
  // Also receives `wrapperProps`, if they're passed.
  // `verboseDate` can be used for displaying verbose date label
  // in an "on mouse over" (or "on touch") tooltip.
  // See the "Tooltip" readme section for more info.
  // Another example could be having `wrapperComponent`
  // being rerendered every time the component refreshes itself.
  wrapperComponent: j.elementType,
  // Custom `props` passed to `wrapperComponent`.
  wrapperProps: j.object
};
Bt = /* @__PURE__ */ we.memo(Bt);
class ge {
  constructor(t, r, n, i, s) {
    this.kind = t, this.input = r, this.begin = n, this.end = i, this.file = s;
  }
  getText() {
    return this.input.slice(this.begin, this.end);
  }
  getPosition() {
    let [t, r] = [1, 1];
    for (let n = 0; n < this.begin; n++)
      this.input[n] === `
` ? (t++, r = 1) : r++;
    return [t, r];
  }
  size() {
    return this.end - this.begin;
  }
}
class Qe {
  liquidMethodMissing(t) {
  }
}
const al = Object.prototype.toString, yi = String.prototype.toLowerCase, Is = Object.hasOwnProperty;
function be(e) {
  return typeof e == "string";
}
function te(e) {
  return typeof e == "function";
}
function ul(e) {
  return e && te(e.then);
}
function Ht(e) {
  return e && te(e.next) && te(e.throw) && te(e.return);
}
function cl(e) {
  return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function w(e) {
  return e = L(e), be(e) ? e : Re(e) ? "" : ne(e) ? e.map((t) => w(t)).join("") : String(e);
}
function Yr(e) {
  return e = L(e), ne(e) ? e : be(e) && e.length > 0 ? [e] : fl(e) ? Array.from(e) : Jt(e) ? Object.keys(e).map((t) => [t, e[t]]) : [];
}
function re(e) {
  return e = L(e), Re(e) ? [] : ne(e) ? e : [e];
}
function L(e) {
  return e instanceof Qe && te(e.valueOf) ? e.valueOf() : e;
}
function Wr(e) {
  return typeof e == "number";
}
function Fs(e) {
  return e && te(e.toLiquid) ? Fs(e.toLiquid()) : e;
}
function Re(e) {
  return e == null;
}
function ll(e) {
  return e === void 0;
}
function ne(e) {
  return al.call(e) === "[object Array]";
}
function fl(e) {
  return Jt(e) && Symbol.iterator in e;
}
function vi(e, t) {
  e = e || {};
  for (const r in e)
    if (Is.call(e, r) && t(e[r], r, e) === !1)
      break;
  return e;
}
function Ls(e) {
  return e[e.length - 1];
}
function Jt(e) {
  const t = typeof e;
  return e !== null && (t === "object" || t === "function");
}
function Ms(e, t, r = 1) {
  const n = [];
  for (let i = e; i < t; i += r)
    n.push(i);
  return n;
}
function bt(e, t, r = " ") {
  return js(e, t, r, (n, i) => i + n);
}
function hl(e, t, r = " ") {
  return js(e, t, r, (n, i) => n + i);
}
function js(e, t, r, n) {
  e = String(e);
  let i = t - e.length;
  for (; i-- > 0; )
    e = n(e, r);
  return e;
}
function zs(e) {
  return e;
}
function pl(e) {
  return [...e].some((r) => r >= "a" && r <= "z") ? e.toUpperCase() : e.toLowerCase();
}
function dl(e, t) {
  return e.length > t ? e.slice(0, t - 3) + "..." : e;
}
function wi(e, t) {
  return e == null && t == null ? 0 : e == null ? 1 : t == null || (e = yi.call(e), t = yi.call(t), e < t) ? -1 : e > t ? 1 : 0;
}
function pe(e) {
  return (...t) => e(...t.map(L));
}
function Gr(e) {
  return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
const bi = "__liquidClass__";
class Ze extends Error {
  constructor(t, r) {
    super(typeof t == "string" ? t : t.message), this.context = "", typeof t != "string" && Object.defineProperty(this, "originalError", { value: t, enumerable: !1 }), Object.defineProperty(this, "token", { value: r, enumerable: !1 }), Object.defineProperty(this, bi, { value: "LiquidError", enumerable: !1 });
  }
  update() {
    Object.defineProperty(this, "context", { value: Sl(this.token), enumerable: !1 }), this.message = Tl(this.message, this.token), this.stack = this.message + `
` + this.context + `
` + this.stack, this.originalError && (this.stack += `
From ` + this.originalError.stack);
  }
  static is(t) {
    return (t == null ? void 0 : t[bi]) === "LiquidError";
  }
}
class ml extends Ze {
  constructor(t, r) {
    super(t, r), this.name = "TokenizationError", super.update();
  }
}
class gl extends Ze {
  constructor(t, r) {
    super(t, r), this.name = "ParseError", this.message = t.message, super.update();
  }
}
class yl extends Ze {
  constructor(t, r) {
    super(t, r.token), this.name = "RenderError", this.message = t.message, super.update();
  }
  static is(t) {
    return t.name === "RenderError";
  }
}
class qs extends Ze {
  constructor(t) {
    super(t[0], t[0].token), this.errors = t, this.name = "LiquidErrors";
    const r = t.length > 1 ? "s" : "";
    this.message = `${t.length} error${r} found`, super.update();
  }
  static is(t) {
    return t.name === "LiquidErrors";
  }
}
class vl extends Ze {
  constructor(t, r) {
    super(t, r), this.name = "UndefinedVariableError", this.message = t.message, super.update();
  }
}
class wl extends Error {
  constructor(t) {
    super(`undefined variable: ${t}`), this.name = "InternalUndefinedVariableError", this.variableName = t;
  }
}
class bl extends Error {
  constructor(t) {
    super(t), this.name = "AssertionError", this.message = t + "";
  }
}
function Sl(e) {
  const [t, r] = e.getPosition(), n = e.input.split(`
`), i = Math.max(t - 2, 1), s = Math.min(t + 3, n.length);
  return Ms(i, s + 1).map((a) => {
    const u = a === t ? ">> " : "   ", l = bt(String(a), String(s).length);
    let f = `${u}${l}| `;
    const d = a === t ? `
` + bt("^", r + f.length) : "";
    return f += n[a - 1], f += d, f;
  }).join(`
`);
}
function Tl(e, t) {
  t.file && (e += `, file:${t.file}`);
  const [r, n] = t.getPosition();
  return e += `, line:${r}, col:${n}`, e;
}
const B = [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 4, 4, 4, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 8, 0, 0, 0, 0, 8, 0, 0, 0, 64, 0, 65, 0, 0, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 0, 0, 2, 2, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], Ol = 1, lt = 4, Si = 8, Us = 16, Vs = 32, Bs = 64, xl = 128;
function Dt(e) {
  const t = e.charCodeAt(0);
  return t >= 128 ? !B[t] : !!(B[t] & Ol);
}
B[160] = B[5760] = B[6158] = B[8192] = B[8193] = B[8194] = B[8195] = B[8196] = B[8197] = B[8198] = B[8199] = B[8200] = B[8201] = B[8202] = B[8232] = B[8233] = B[8239] = B[8287] = B[12288] = lt;
B[8220] = B[8221] = xl;
function Se(e, t) {
  if (!e) {
    const r = typeof t == "function" ? t() : t || `expect ${e} to be true`;
    throw new bl(r);
  }
}
class El extends Qe {
  equals(t) {
    return Re(L(t));
  }
  gt() {
    return !1;
  }
  geq() {
    return !1;
  }
  lt() {
    return !1;
  }
  leq() {
    return !1;
  }
  valueOf() {
    return null;
  }
}
class Qt extends Qe {
  equals(t) {
    return t instanceof Qt ? !1 : (t = L(t), be(t) || ne(t) ? t.length === 0 : Jt(t) ? Object.keys(t).length === 0 : !1);
  }
  gt() {
    return !1;
  }
  geq() {
    return !1;
  }
  lt() {
    return !1;
  }
  leq() {
    return !1;
  }
  valueOf() {
    return "";
  }
}
class kl extends Qt {
  equals(t) {
    return t === !1 || Re(L(t)) ? !0 : be(t) ? /^\s*$/.test(t) : super.equals(t);
  }
}
class Xr extends Qe {
  constructor(t, r, n) {
    super(), this.i = 0, this.length = t, this.name = `${n}-${r}`;
  }
  next() {
    this.i++;
  }
  index0() {
    return this.i;
  }
  index() {
    return this.i + 1;
  }
  first() {
    return this.i === 0;
  }
  last() {
    return this.i === this.length - 1;
  }
  rindex() {
    return this.length - this.i;
  }
  rindex0() {
    return this.length - this.i - 1;
  }
  valueOf() {
    return JSON.stringify(this);
  }
}
class Ti extends Qe {
  constructor(t = () => "") {
    super(), this.superBlockRender = t;
  }
  /**
   * Provide parent access in child block by
   * {{ block.super }}
   */
  super() {
    return this.superBlockRender();
  }
}
function Oe(e) {
  return e && te(e.equals) && te(e.gt) && te(e.geq) && te(e.lt) && te(e.leq);
}
const Oi = new El(), Hs = {
  true: !0,
  false: !1,
  nil: Oi,
  null: Oi,
  empty: new Qt(),
  blank: new kl()
};
function xi(e) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    let i = t;
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      i[o] = i[o] || {}, s === r.length - 1 && Dt(r[s]) && (i[o].needBoundary = !0), i = i[o];
    }
    i.data = n, i.end = !0;
  }
  return t;
}
var Yt = function() {
  return Yt = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, Yt.apply(this, arguments);
};
function Ae(e, t, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function a(f) {
      try {
        l(n.next(f));
      } catch (d) {
        o(d);
      }
    }
    function u(f) {
      try {
        l(n.throw(f));
      } catch (d) {
        o(d);
      }
    }
    function l(f) {
      f.done ? s(f.value) : i(f.value).then(a, u);
    }
    l((n = n.apply(e, [])).next());
  });
}
function De(e) {
  return Ae(this, void 0, void 0, function* () {
    if (!Ht(e))
      return e;
    let t, r = !1, n = "next";
    do {
      const i = e[n](t);
      r = i.done, t = i.value, n = "next";
      try {
        Ht(t) && (t = De(t)), ul(t) && (t = yield t);
      } catch (s) {
        n = "throw", t = s;
      }
    } while (!r);
    return t;
  });
}
function Ne(e) {
  if (!Ht(e))
    return e;
  let t, r = !1, n = "next";
  do {
    const i = e[n](t);
    if (r = i.done, t = i.value, n = "next", Ht(t))
      try {
        t = Ne(t);
      } catch (s) {
        n = "throw", t = s;
      }
  } while (!r);
  return t;
}
const Al = /%([-_0^#:]+)?(\d+)?([EO])?(.)/, Ys = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], Ws = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], Pl = Ys.map(Gs), Rl = Ws.map(Gs);
function Gs(e) {
  return e.slice(0, 3);
}
function _l(e) {
  return [31, Cl(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function Xs(e) {
  let t = 0;
  for (let r = 0; r < e.getMonth(); ++r)
    t += _l(e)[r];
  return t + e.getDate();
}
function Ei(e, t) {
  const r = Xs(e) + (t - e.getDay()), i = 7 - new Date(e.getFullYear(), 0, 1).getDay() + t;
  return String(Math.floor((r - i) / 7) + 1);
}
function Cl(e) {
  const t = e.getFullYear();
  return !!(!(t & 3) && (t % 100 || t % 400 === 0 && t));
}
function $l(e) {
  const t = e.getDate();
  if ([11, 12, 13].includes(t))
    return "th";
  switch (t % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
function Dl(e) {
  return parseInt(e.getFullYear().toString().substring(0, 2), 10);
}
const Nl = {
  d: 2,
  e: 2,
  H: 2,
  I: 2,
  j: 3,
  k: 2,
  l: 2,
  L: 3,
  m: 2,
  M: 2,
  S: 2,
  U: 2,
  W: 2
}, Il = {
  a: " ",
  A: " ",
  b: " ",
  B: " ",
  c: " ",
  e: " ",
  k: " ",
  l: " ",
  p: " ",
  P: " "
};
function ki(e, t) {
  const r = Math.abs(e.getTimezoneOffset()), n = Math.floor(r / 60), i = r % 60;
  return (e.getTimezoneOffset() > 0 ? "-" : "+") + bt(n, 2, "0") + (t.flags[":"] ? ":" : "") + bt(i, 2, "0");
}
const Mr = {
  a: (e) => Rl[e.getDay()],
  A: (e) => Ws[e.getDay()],
  b: (e) => Pl[e.getMonth()],
  B: (e) => Ys[e.getMonth()],
  c: (e) => e.toLocaleString(),
  C: (e) => Dl(e),
  d: (e) => e.getDate(),
  e: (e) => e.getDate(),
  H: (e) => e.getHours(),
  I: (e) => String(e.getHours() % 12 || 12),
  j: (e) => Xs(e),
  k: (e) => e.getHours(),
  l: (e) => String(e.getHours() % 12 || 12),
  L: (e) => e.getMilliseconds(),
  m: (e) => e.getMonth() + 1,
  M: (e) => e.getMinutes(),
  N: (e, t) => {
    const r = Number(t.width) || 9, n = String(e.getMilliseconds()).slice(0, r);
    return hl(n, r, "0");
  },
  p: (e) => e.getHours() < 12 ? "AM" : "PM",
  P: (e) => e.getHours() < 12 ? "am" : "pm",
  q: (e) => $l(e),
  s: (e) => Math.round(e.getTime() / 1e3),
  S: (e) => e.getSeconds(),
  u: (e) => e.getDay() || 7,
  U: (e) => Ei(e, 0),
  w: (e) => e.getDay(),
  W: (e) => Ei(e, 1),
  x: (e) => e.toLocaleDateString(),
  X: (e) => e.toLocaleTimeString(),
  y: (e) => e.getFullYear().toString().slice(2, 4),
  Y: (e) => e.getFullYear(),
  z: ki,
  Z: (e, t) => e.getTimezoneName ? e.getTimezoneName() || ki(e, t) : typeof Intl < "u" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "",
  t: () => "	",
  n: () => `
`,
  "%": () => "%"
};
Mr.h = Mr.b;
function Nt(e, t) {
  let r = "", n = t, i;
  for (; i = Al.exec(n); )
    r += n.slice(0, i.index), n = n.slice(i.index + i[0].length), r += Fl(e, i);
  return r + n;
}
function Fl(e, t) {
  const [r, n = "", i, s, o] = t, a = Mr[o];
  if (!a)
    return r;
  const u = {};
  for (const y of n)
    u[y] = !0;
  let l = String(a(e, { flags: u, width: i, modifier: s })), f = Il[o] || "0", d = i || Nl[o] || 0;
  return u["^"] ? l = l.toUpperCase() : u["#"] && (l = pl(l)), u._ ? f = " " : u[0] && (f = "0"), u["-"] && (d = 0), bt(l, d, f);
}
const Ll = 6e4, Ml = /([zZ]|([+-])(\d{2}):(\d{2}))$/;
class Ee {
  constructor(t, r) {
    this.date = t instanceof Ee ? t.date : new Date(t), this.timezoneOffset = be(r) ? Ee.getTimezoneOffset(r, this.date) : r, this.timezoneName = be(r) ? r : "";
    const n = (this.date.getTimezoneOffset() - this.timezoneOffset) * Ll, i = this.date.getTime() + n;
    this.displayDate = new Date(i);
  }
  getTime() {
    return this.displayDate.getTime();
  }
  getMilliseconds() {
    return this.displayDate.getMilliseconds();
  }
  getSeconds() {
    return this.displayDate.getSeconds();
  }
  getMinutes() {
    return this.displayDate.getMinutes();
  }
  getHours() {
    return this.displayDate.getHours();
  }
  getDay() {
    return this.displayDate.getDay();
  }
  getDate() {
    return this.displayDate.getDate();
  }
  getMonth() {
    return this.displayDate.getMonth();
  }
  getFullYear() {
    return this.displayDate.getFullYear();
  }
  toLocaleString(t, r) {
    return r != null && r.timeZone ? this.date.toLocaleString(t, r) : this.displayDate.toLocaleString(t, r);
  }
  toLocaleTimeString(t) {
    return this.displayDate.toLocaleTimeString(t);
  }
  toLocaleDateString(t) {
    return this.displayDate.toLocaleDateString(t);
  }
  getTimezoneOffset() {
    return this.timezoneOffset;
  }
  getTimezoneName() {
    return this.timezoneName;
  }
  /**
   * Create a Date object fixed to it's declared Timezone. Both
   * - 2021-08-06T02:29:00.000Z and
   * - 2021-08-06T02:29:00.000+08:00
   * will always be displayed as
   * - 2021-08-06 02:29:00
   * regardless timezoneOffset in JavaScript realm
   *
   * The implementation hack:
   * Instead of calling `.getMonth()`/`.getUTCMonth()` respect to `preserveTimezones`,
   * we create a different Date to trick strftime, it's both simpler and more performant.
   * Given that a template is expected to be parsed fewer times than rendered.
   */
  static createDateFixedToTimezone(t) {
    const r = t.match(Ml);
    if (r && r[1] === "Z")
      return new Ee(+new Date(t), 0);
    if (r && r[2] && r[3] && r[4]) {
      const [, , n, i, s] = r, o = (n === "+" ? -1 : 1) * (parseInt(i, 10) * 60 + parseInt(s, 10));
      return new Ee(+new Date(t), o);
    }
    return new Date(t);
  }
  static getTimezoneOffset(t, r = /* @__PURE__ */ new Date()) {
    const n = r.toLocaleString("en-US", { timeZone: t }), i = r.toLocaleString("en-US", { timeZone: "UTC" }), s = new Date(n);
    return (+new Date(i) - +s) / (60 * 1e3);
  }
}
class Jr extends ge {
  constructor(t, [r, n], i, s, o, a, u, l) {
    super(t, i, s, o, l), this.trimLeft = !1, this.trimRight = !1;
    const f = i[r] === "-", d = i[n - 1] === "-";
    let y = f ? r + 1 : r, v = d ? n - 1 : n;
    for (; y < v && B[i.charCodeAt(y)] & lt; )
      y++;
    for (; v > y && B[i.charCodeAt(v - 1)] & lt; )
      v--;
    this.contentRange = [y, v], this.trimLeft = f || a, this.trimRight = d || u;
  }
  get content() {
    return this.input.slice(this.contentRange[0], this.contentRange[1]);
  }
}
class Ai extends Jr {
  constructor(t, r, n, i, s) {
    const { trimTagLeft: o, trimTagRight: a, tagDelimiterLeft: u, tagDelimiterRight: l } = i, [f, d] = [r + u.length, n - l.length];
    super(X.Tag, [f, d], t, r, n, o, a, s), this.tokenizer = new _e(t, i.operators, s, this.contentRange), this.name = this.tokenizer.readTagName(), this.tokenizer.assert(this.name, "illegal tag syntax, tag name expected"), this.tokenizer.skipBlank();
  }
  get args() {
    return this.tokenizer.input.slice(this.tokenizer.p, this.contentRange[1]);
  }
}
class jl extends Jr {
  constructor(t, r, n, i, s) {
    const { trimOutputLeft: o, trimOutputRight: a, outputDelimiterLeft: u, outputDelimiterRight: l } = i, f = [r + u.length, n - l.length];
    super(X.Output, f, t, r, n, o, a, s);
  }
}
class Pi extends ge {
  constructor(t, r, n, i) {
    super(X.HTML, t, r, n, i), this.input = t, this.begin = r, this.end = n, this.file = i, this.trimLeft = 0, this.trimRight = 0;
  }
  getContent() {
    return this.input.slice(this.begin + this.trimLeft, this.end - this.trimRight);
  }
}
class zl extends ge {
  constructor(t, r, n, i) {
    super(X.Number, t, r, n, i), this.input = t, this.begin = r, this.end = n, this.file = i, this.content = Number(this.getText());
  }
}
class lr extends ge {
  constructor(t, r, n, i) {
    super(X.Word, t, r, n, i), this.input = t, this.begin = r, this.end = n, this.file = i, this.content = this.getText();
  }
  isNumber(t = !1) {
    const r = t && B[this.input.charCodeAt(this.begin)] & Bs ? this.begin + 1 : this.begin;
    for (let n = r; n < this.end; n++)
      if (!(B[this.input.charCodeAt(n)] & Vs))
        return !1;
    return !0;
  }
}
class ql extends ge {
  constructor(t, r, n, i) {
    super(X.Literal, t, r, n, i), this.input = t, this.begin = r, this.end = n, this.file = i, this.literal = this.getText(), this.content = Hs[this.literal];
  }
}
const Ri = {
  "==": 2,
  "!=": 2,
  ">": 2,
  "<": 2,
  ">=": 2,
  "<=": 2,
  contains: 2,
  not: 1,
  and: 0,
  or: 0
}, Ul = {
  "==": 0,
  "!=": 0,
  ">": 0,
  "<": 0,
  ">=": 0,
  "<=": 0,
  contains: 0,
  not: 1,
  and: 0,
  or: 0
  /* OperatorType.Binary */
};
class Vl extends ge {
  constructor(t, r, n, i) {
    super(X.Operator, t, r, n, i), this.input = t, this.begin = r, this.end = n, this.file = i, this.operator = this.getText();
  }
  getPrecedence() {
    const t = this.getText();
    return t in Ri ? Ri[t] : 1;
  }
}
class _i extends ge {
  constructor(t, r, n, i, s, o) {
    super(X.PropertyAccess, n, i, s, o), this.variable = t, this.props = r;
  }
}
class Bl extends ge {
  constructor(t, r, n, i, s, o) {
    super(X.Filter, n, i, s, o), this.name = t, this.args = r;
  }
}
class Hl extends ge {
  constructor(t, r, n, i, s, o) {
    super(X.Hash, t, r, n, o), this.input = t, this.begin = r, this.end = n, this.name = i, this.value = s, this.file = o;
  }
}
const Yl = /[\da-fA-F]/, Ci = /[0-7]/, $i = {
  b: "\b",
  f: "\f",
  n: `
`,
  r: "\r",
  t: "	",
  v: "\v"
};
function Di(e) {
  const t = e.charCodeAt(0);
  return t >= 97 ? t - 87 : t >= 65 ? t - 55 : t - 48;
}
function Wl(e) {
  let t = "";
  for (let r = 1; r < e.length - 1; r++) {
    if (e[r] !== "\\") {
      t += e[r];
      continue;
    }
    if ($i[e[r + 1]] !== void 0)
      t += $i[e[++r]];
    else if (e[r + 1] === "u") {
      let n = 0, i = r + 2;
      for (; i <= r + 5 && Yl.test(e[i]); )
        n = n * 16 + Di(e[i++]);
      r = i - 1, t += String.fromCharCode(n);
    } else if (!Ci.test(e[r + 1]))
      t += e[++r];
    else {
      let n = r + 1, i = 0;
      for (; n <= r + 3 && Ci.test(e[n]); )
        i = i * 8 + Di(e[n++]);
      r = n - 1, t += String.fromCharCode(i);
    }
  }
  return t;
}
class Gl extends ge {
  constructor(t, r, n, i) {
    super(X.Quoted, t, r, n, i), this.input = t, this.begin = r, this.end = n, this.file = i, this.content = Wl(this.getText());
  }
}
class Xl extends ge {
  constructor(t, r, n, i, s, o) {
    super(X.Range, t, r, n, o), this.input = t, this.begin = r, this.end = n, this.lhs = i, this.rhs = s, this.file = o;
  }
}
class Jl extends Jr {
  constructor(t, r, n, i, s) {
    super(X.Tag, [r, n], t, r, n, !1, !1, s), this.tokenizer = new _e(t, i.operators, s, this.contentRange), this.name = this.tokenizer.readTagName(), this.tokenizer.assert(this.name, "illegal liquid tag syntax"), this.tokenizer.skipBlank(), this.args = this.tokenizer.remaining();
  }
}
class Ql extends ge {
  constructor(t, r, n, i, s, o) {
    super(X.FilteredValue, n, i, s, o), this.initial = t, this.filters = r, this.input = n, this.begin = i, this.end = s, this.file = o;
  }
}
class Zl {
  constructor() {
    this.buffer = "";
  }
  write(t) {
    this.buffer += w(t);
  }
}
class Kl {
  constructor() {
    throw this.buffer = "", this.stream = null, new Error("streaming not supported in browser");
  }
}
class ef {
  constructor() {
    this.buffer = "";
  }
  write(t) {
    t = L(t), typeof t != "string" && this.buffer === "" ? this.buffer = t : this.buffer = w(this.buffer) + w(t);
  }
}
class tf {
  renderTemplatesToNodeStream(t, r) {
    const n = new Kl();
    return Promise.resolve().then(() => De(this.renderTemplates(t, r, n))).then(() => n.end(), (i) => n.error(i)), n.stream;
  }
  *renderTemplates(t, r, n) {
    n || (n = r.opts.keepOutputType ? new ef() : new Zl());
    const i = [];
    for (const s of t)
      try {
        const o = yield s.render(r, n);
        if (o && n.write(o), n.break || n.continue)
          break;
      } catch (o) {
        const a = Ze.is(o) ? o : new yl(o, s);
        if (r.opts.catchAllErrors)
          i.push(a);
        else
          throw a;
      }
    if (i.length)
      throw new qs(i);
    return n.buffer;
  }
}
class rf {
  constructor(t) {
    this.postfix = [...of(t)];
  }
  *evaluate(t, r) {
    Se(t, "unable to evaluate: context not defined");
    const n = [];
    for (const i of this.postfix)
      if (eo(i)) {
        const s = n.pop();
        let o;
        if (Ul[i.operator] === 1)
          o = yield t.opts.operators[i.operator](s, t);
        else {
          const a = n.pop();
          o = yield t.opts.operators[i.operator](a, s, t);
        }
        n.push(o);
      } else
        n.push(yield K(i, t, r));
    return n[0];
  }
  valid() {
    return !!this.postfix.length;
  }
}
function* K(e, t, r = !1) {
  if (e) {
    if ("content" in e)
      return e.content;
    if (Bf(e))
      return yield nf(e, t, r);
    if (Hf(e))
      return yield sf(e, t);
  }
}
function* nf(e, t, r) {
  const n = [];
  for (const i of e.props)
    n.push(yield K(i, t, !1));
  try {
    if (e.variable) {
      const i = yield K(e.variable, t, r);
      return yield t._getFromScope(i, n);
    } else
      return yield t._get(n);
  } catch (i) {
    if (r && i.name === "InternalUndefinedVariableError")
      return null;
    throw new vl(i, e);
  }
}
function Js(e) {
  return e.content;
}
function* sf(e, t) {
  const r = yield K(e.lhs, t), n = yield K(e.rhs, t);
  return Ms(+r, +n + 1);
}
function* of(e) {
  const t = [];
  for (const r of e)
    if (eo(r)) {
      for (; t.length && t[t.length - 1].getPrecedence() > r.getPrecedence(); )
        yield t.pop();
      t.push(r);
    } else
      yield r;
  for (; t.length; )
    yield t.pop();
}
function Ve(e, t) {
  return !Zt(e, t);
}
function Zt(e, t) {
  return e = L(e), t.opts.jsTruthy ? !e : e === !1 || e === void 0 || e === null;
}
const af = {
  "==": Ye,
  "!=": (e, t) => !Ye(e, t),
  ">": (e, t) => Oe(e) ? e.gt(t) : Oe(t) ? t.lt(e) : L(e) > L(t),
  "<": (e, t) => Oe(e) ? e.lt(t) : Oe(t) ? t.gt(e) : L(e) < L(t),
  ">=": (e, t) => Oe(e) ? e.geq(t) : Oe(t) ? t.leq(e) : L(e) >= L(t),
  "<=": (e, t) => Oe(e) ? e.leq(t) : Oe(t) ? t.geq(e) : L(e) <= L(t),
  contains: (e, t) => (e = L(e), ne(e) ? e.some((r) => Ye(r, t)) : te(e == null ? void 0 : e.indexOf) ? e.indexOf(L(t)) > -1 : !1),
  not: (e, t) => Zt(L(e), t),
  and: (e, t, r) => Ve(L(e), r) && Ve(L(t), r),
  or: (e, t, r) => Ve(L(e), r) || Ve(L(t), r)
};
function Ye(e, t) {
  return Oe(e) ? e.equals(t) : Oe(t) ? t.equals(e) : (e = L(e), t = L(t), ne(e) ? ne(t) && uf(e, t) : e === t);
}
function uf(e, t) {
  return e.length !== t.length ? !1 : !e.some((r, n) => !Ye(r, t[n]));
}
class fr {
  constructor(t, r, n, i) {
    this.key = t, this.value = r, this.next = n, this.prev = i;
  }
}
class Ni {
  constructor(t, r = 0) {
    this.limit = t, this.size = r, this.cache = {}, this.head = new fr("HEAD", null, null, null), this.tail = new fr("TAIL", null, null, null), this.head.next = this.tail, this.tail.prev = this.head;
  }
  write(t, r) {
    if (this.cache[t])
      this.cache[t].value = r;
    else {
      const n = new fr(t, r, this.head.next, this.head);
      this.head.next.prev = n, this.head.next = n, this.cache[t] = n, this.size++, this.ensureLimit();
    }
  }
  read(t) {
    if (!this.cache[t])
      return;
    const { value: r } = this.cache[t];
    return this.remove(t), this.write(t, r), r;
  }
  remove(t) {
    const r = this.cache[t];
    r.prev.next = r.next, r.next.prev = r.prev, delete this.cache[t], this.size--;
  }
  clear() {
    this.head.next = this.tail, this.tail.prev = this.head, this.size = 0, this.cache = {};
  }
  ensureLimit() {
    this.size > this.limit && this.remove(this.tail.prev.key);
  }
}
function Qs(e, t) {
  const r = document.createElement("base");
  r.href = e;
  const n = document.getElementsByTagName("head")[0];
  n.insertBefore(r, n.firstChild);
  const i = document.createElement("a");
  i.href = t;
  const s = i.href;
  return n.removeChild(r), s;
}
function cf(e, t, r) {
  return e.length && Ls(e) !== "/" && (e += "/"), Qs(e, t).replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/, (i, s, o) => {
    const a = o.split("/").pop();
    return /\.\w+$/.test(a) ? i : s + o + r;
  });
}
function lf(e) {
  return Ae(this, void 0, void 0, function* () {
    return new Promise((t, r) => {
      const n = new XMLHttpRequest();
      n.onload = () => {
        n.status >= 200 && n.status < 300 ? t(n.responseText) : r(new Error(n.statusText));
      }, n.onerror = () => {
        r(new Error("An error occurred whilst receiving the response."));
      }, n.open("GET", e), n.send();
    });
  });
}
function ff(e) {
  const t = new XMLHttpRequest();
  if (t.open("GET", e, !1), t.send(), t.status < 200 || t.status >= 300)
    throw new Error(t.statusText);
  return t.responseText;
}
function hf(e) {
  return Ae(this, void 0, void 0, function* () {
    return !0;
  });
}
function pf(e) {
  return !0;
}
function df(e) {
  return Qs(e, ".");
}
const mf = "/";
var gf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  resolve: cf,
  readFile: lf,
  readFileSync: ff,
  exists: hf,
  existsSync: pf,
  dirname: df,
  sep: mf
});
function yf(e, t, ...r) {
  return e = L(e), ne(e) || be(e) ? e.length ? e : t : e === !1 && new Map(r).get("allow_false") ? !1 : Zt(e, this.context) ? t : e;
}
function Ii(e, t = 0) {
  return JSON.stringify(e, null, t);
}
function vf(e, t = 0) {
  const r = [];
  return JSON.stringify(e, function(n, i) {
    if (typeof i != "object" || i === null)
      return i;
    for (; r.length > 0 && r[r.length - 1] !== this; )
      r.pop();
    return r.includes(i) ? "[Circular]" : (r.push(i), i);
  }, t);
}
function wf(e) {
  return Number(e);
}
const bf = {
  raw: !0,
  handler: zs
};
var Zs = {
  default: yf,
  raw: bf,
  jsonify: Ii,
  to_integer: wf,
  json: Ii,
  inspect: vf
};
const Sf = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&#34;",
  "'": "&#39;"
}, Tf = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&#34;": '"',
  "&#39;": "'"
};
function Kt(e) {
  return w(e).replace(/&|<|>|"|'/g, (t) => Sf[t]);
}
function Of(e) {
  return Kt(e);
}
function xf(e) {
  return w(e).replace(/&(amp|lt|gt|#34|#39);/g, (t) => Tf[t]);
}
function Ef(e) {
  return Kt(xf(w(e)));
}
function kf(e) {
  return w(e).replace(/\r?\n/gm, `<br />
`);
}
function Af(e) {
  return w(e).replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<.*?>|<!--[\s\S]*?-->/g, "");
}
var Pf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  escape: Kt,
  xml_escape: Of,
  escape_once: Ef,
  newline_to_br: kf,
  strip_html: Af
});
const qe = {
  root: ["."],
  layouts: ["."],
  partials: ["."],
  relativeReference: !0,
  jekyllInclude: !1,
  cache: void 0,
  extname: "",
  fs: gf,
  dynamicPartials: !0,
  jsTruthy: !1,
  dateFormat: "%A, %B %-e, %Y at %-l:%M %P %z",
  trimTagRight: !1,
  trimTagLeft: !1,
  trimOutputRight: !1,
  trimOutputLeft: !1,
  greedy: !0,
  tagDelimiterLeft: "{%",
  tagDelimiterRight: "%}",
  outputDelimiterLeft: "{{",
  outputDelimiterRight: "}}",
  preserveTimezones: !1,
  strictFilters: !1,
  strictVariables: !1,
  ownPropertyOnly: !0,
  lenientIf: !1,
  globals: {},
  keepOutputType: !1,
  operators: af
};
function Rf(e) {
  if (e.hasOwnProperty("root") && (e.hasOwnProperty("partials") || (e.partials = e.root), e.hasOwnProperty("layouts") || (e.layouts = e.root)), e.hasOwnProperty("cache")) {
    let t;
    typeof e.cache == "number" ? t = e.cache > 0 ? new Ni(e.cache) : void 0 : typeof e.cache == "object" ? t = e.cache : t = e.cache ? new Ni(1024) : void 0, e.cache = t;
  }
  return e = Object.assign(Object.assign(Object.assign({}, qe), e.jekyllInclude ? { dynamicPartials: !1 } : {}), e), (!e.fs.dirname || !e.fs.sep) && e.relativeReference && (console.warn("[LiquidJS] `fs.dirname` and `fs.sep` are required for relativeReference, set relativeReference to `false` to suppress this warning"), e.relativeReference = !1), e.root = It(e.root), e.partials = It(e.partials), e.layouts = It(e.layouts), e.outputEscape = e.outputEscape && _f(e.outputEscape), e;
}
function _f(e) {
  return e === "escape" ? Kt : e === "json" ? Zs.json : (Se(te(e), "`outputEscape` need to be of type string or function"), e);
}
function It(e) {
  let t = [];
  return ne(e) && (t = e), be(e) && (t = [e]), t;
}
function Cf(e, t) {
  let r = !1;
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    qf(i) && (!r && i.trimLeft && $f(e[n - 1], t.greedy), Ke(i) && (i.name === "raw" ? r = !0 : i.name === "endraw" && (r = !1)), !r && i.trimRight && Df(e[n + 1], t.greedy));
  }
}
function $f(e, t) {
  if (!e || !Zr(e))
    return;
  const r = t ? lt : Us;
  for (; B[e.input.charCodeAt(e.end - 1 - e.trimRight)] & r; )
    e.trimRight++;
}
function Df(e, t) {
  if (!e || !Zr(e))
    return;
  const r = t ? lt : Us;
  for (; B[e.input.charCodeAt(e.begin + e.trimLeft)] & r; )
    e.trimLeft++;
  e.input.charAt(e.begin + e.trimLeft) === `
` && e.trimLeft++;
}
class _e {
  constructor(t, r = qe.operators, n, i) {
    this.input = t, this.file = n, this.rawBeginAt = -1, this.p = i ? i[0] : 0, this.N = i ? i[1] : t.length, this.opTrie = xi(r), this.literalTrie = xi(Hs);
  }
  readExpression() {
    return new rf(this.readExpressionTokens());
  }
  *readExpressionTokens() {
    for (; this.p < this.N; ) {
      const t = this.readOperator();
      if (t) {
        yield t;
        continue;
      }
      const r = this.readValue();
      if (r) {
        yield r;
        continue;
      }
      return;
    }
  }
  readOperator() {
    this.skipBlank();
    const t = this.matchTrie(this.opTrie);
    if (t !== -1)
      return new Vl(this.input, this.p, this.p = t, this.file);
  }
  matchTrie(t) {
    let r = t, n = this.p, i;
    for (; r[this.input[n]] && n < this.N; )
      r = r[this.input[n++]], r.end && (i = r);
    return !i || i.needBoundary && Dt(this.peek(n - this.p)) ? -1 : n;
  }
  readFilteredValue() {
    const t = this.p, r = this.readExpression();
    this.assert(r.valid(), `invalid value expression: ${this.snapshot()}`);
    const n = this.readFilters();
    return new Ql(r, n, this.input, t, this.p, this.file);
  }
  readFilters() {
    const t = [];
    for (; ; ) {
      const r = this.readFilter();
      if (!r)
        return t;
      t.push(r);
    }
  }
  readFilter() {
    if (this.skipBlank(), this.end())
      return null;
    this.assert(this.peek() === "|", 'expected "|" before filter'), this.p++;
    const t = this.p, r = this.readIdentifier();
    if (!r.size())
      return this.assert(this.end(), "expected filter name"), null;
    const n = [];
    if (this.skipBlank(), this.peek() === ":")
      do {
        ++this.p;
        const i = this.readFilterArg();
        i && n.push(i), this.skipBlank(), this.assert(this.end() || this.peek() === "," || this.peek() === "|", () => `unexpected character ${this.snapshot()}`);
      } while (this.peek() === ",");
    else if (!(this.peek() === "|" || this.end()))
      throw this.error('expected ":" after filter name');
    return new Bl(r.getText(), n, this.input, t, this.p, this.file);
  }
  readFilterArg() {
    const t = this.readValue();
    if (!t)
      return;
    if (this.skipBlank(), this.peek() !== ":")
      return t;
    ++this.p;
    const r = this.readValue();
    return [t.getText(), r];
  }
  readTopLevelTokens(t = qe) {
    const r = [];
    for (; this.p < this.N; ) {
      const n = this.readTopLevelToken(t);
      r.push(n);
    }
    return Cf(r, t), r;
  }
  readTopLevelToken(t) {
    const { tagDelimiterLeft: r, outputDelimiterLeft: n } = t;
    return this.rawBeginAt > -1 ? this.readEndrawOrRawContent(t) : this.match(r) ? this.readTagToken(t) : this.match(n) ? this.readOutputToken(t) : this.readHTMLToken([r, n]);
  }
  readHTMLToken(t) {
    const r = this.p;
    for (; this.p < this.N && !t.some((n) => this.match(n)); )
      ++this.p;
    return new Pi(this.input, r, this.p, this.file);
  }
  readTagToken(t = qe) {
    const { file: r, input: n } = this, i = this.p;
    if (this.readToDelimiter(t.tagDelimiterRight) === -1)
      throw this.error(`tag ${this.snapshot(i)} not closed`, i);
    const s = new Ai(n, i, this.p, t, r);
    return s.name === "raw" && (this.rawBeginAt = i), s;
  }
  readToDelimiter(t, r = !1) {
    for (this.skipBlank(); this.p < this.N; ) {
      if (r && this.peekType() & Si) {
        this.readQuoted();
        continue;
      }
      if (++this.p, this.rmatch(t))
        return this.p;
    }
    return -1;
  }
  readOutputToken(t = qe) {
    const { file: r, input: n } = this, { outputDelimiterRight: i } = t, s = this.p;
    if (this.readToDelimiter(i, !0) === -1)
      throw this.error(`output ${this.snapshot(s)} not closed`, s);
    return new jl(n, s, this.p, t, r);
  }
  readEndrawOrRawContent(t) {
    const { tagDelimiterLeft: r, tagDelimiterRight: n } = t, i = this.p;
    let s = this.readTo(r) - r.length;
    for (; this.p < this.N; ) {
      if (this.readIdentifier().getText() !== "endraw") {
        s = this.readTo(r) - r.length;
        continue;
      }
      for (; this.p <= this.N; ) {
        if (this.rmatch(n)) {
          const o = this.p;
          return i === s ? (this.rawBeginAt = -1, new Ai(this.input, i, o, t, this.file)) : (this.p = s, new Pi(this.input, i, s, this.file));
        }
        if (this.rmatch(r))
          break;
        this.p++;
      }
    }
    throw this.error(`raw ${this.snapshot(this.rawBeginAt)} not closed`, i);
  }
  readLiquidTagTokens(t = qe) {
    const r = [];
    for (; this.p < this.N; ) {
      const n = this.readLiquidTagToken(t);
      n && r.push(n);
    }
    return r;
  }
  readLiquidTagToken(t) {
    if (this.skipBlank(), this.end())
      return;
    const r = this.p;
    this.readToDelimiter(`
`);
    const n = this.p;
    return new Jl(this.input, r, n, t, this.file);
  }
  error(t, r = this.p) {
    return new ml(t, new lr(this.input, r, this.N, this.file));
  }
  assert(t, r, n) {
    if (!t)
      throw this.error(typeof r == "function" ? r() : r, n);
  }
  snapshot(t = this.p) {
    return JSON.stringify(dl(this.input.slice(t, this.N), 32));
  }
  /**
   * @deprecated use #readIdentifier instead
   */
  readWord() {
    return this.readIdentifier();
  }
  readIdentifier() {
    this.skipBlank();
    const t = this.p;
    for (; !this.end() && Dt(this.peek()); )
      ++this.p;
    return new lr(this.input, t, this.p, this.file);
  }
  readNonEmptyIdentifier() {
    const t = this.readIdentifier();
    return t.size() ? t : void 0;
  }
  readTagName() {
    return this.skipBlank(), this.input[this.p] === "#" ? this.input.slice(this.p, ++this.p) : this.readIdentifier().getText();
  }
  readHashes(t) {
    const r = [];
    for (; ; ) {
      const n = this.readHash(t);
      if (!n)
        return r;
      r.push(n);
    }
  }
  readHash(t) {
    this.skipBlank(), this.peek() === "," && ++this.p;
    const r = this.p, n = this.readNonEmptyIdentifier();
    if (!n)
      return;
    let i;
    this.skipBlank();
    const s = t ? "=" : ":";
    return this.peek() === s && (++this.p, i = this.readValue()), new Hl(this.input, r, this.p, n, i, this.file);
  }
  remaining() {
    return this.input.slice(this.p, this.N);
  }
  advance(t = 1) {
    this.p += t;
  }
  end() {
    return this.p >= this.N;
  }
  readTo(t) {
    for (; this.p < this.N; )
      if (++this.p, this.rmatch(t))
        return this.p;
    return -1;
  }
  readValue() {
    this.skipBlank();
    const t = this.p, r = this.readLiteral() || this.readQuoted() || this.readRange() || this.readNumber(), n = this.readProperties(!r);
    return n.length ? new _i(r, n, this.input, t, this.p) : r;
  }
  readScopeValue() {
    this.skipBlank();
    const t = this.p, r = this.readProperties();
    if (r.length)
      return new _i(void 0, r, this.input, t, this.p);
  }
  readProperties(t = !0) {
    const r = [];
    for (; ; ) {
      if (this.peek() === "[") {
        this.p++;
        const n = this.readValue() || new lr(this.input, this.p, this.p, this.file);
        this.assert(this.readTo("]") !== -1, "[ not closed"), r.push(n);
        continue;
      }
      if (t && !r.length) {
        const n = this.readNonEmptyIdentifier();
        if (n) {
          r.push(n);
          continue;
        }
      }
      if (this.peek() === "." && this.peek(1) !== ".") {
        this.p++;
        const n = this.readNonEmptyIdentifier();
        if (!n)
          break;
        r.push(n);
        continue;
      }
      break;
    }
    return r;
  }
  readNumber() {
    this.skipBlank();
    let t = !1, r = !1, n = 0;
    for (this.peekType() & Bs && n++; this.p + n <= this.N; )
      if (this.peekType(n) & Vs)
        r = !0, n++;
      else if (this.peek(n) === "." && this.peek(n + 1) !== ".") {
        if (t || !r)
          return;
        t = !0, n++;
      } else
        break;
    if (r && !Dt(this.peek(n))) {
      const i = new zl(this.input, this.p, this.p + n, this.file);
      return this.advance(n), i;
    }
  }
  readLiteral() {
    this.skipBlank();
    const t = this.matchTrie(this.literalTrie);
    if (t === -1)
      return;
    const r = new ql(this.input, this.p, t, this.file);
    return this.p = t, r;
  }
  readRange() {
    this.skipBlank();
    const t = this.p;
    if (this.peek() !== "(")
      return;
    ++this.p;
    const r = this.readValueOrThrow();
    this.p += 2;
    const n = this.readValueOrThrow();
    return ++this.p, new Xl(this.input, t, this.p, r, n, this.file);
  }
  readValueOrThrow() {
    const t = this.readValue();
    return this.assert(t, () => `unexpected token ${this.snapshot()}, value expected`), t;
  }
  readQuoted() {
    this.skipBlank();
    const t = this.p;
    if (!(this.peekType() & Si))
      return;
    ++this.p;
    let r = !1;
    for (; this.p < this.N && (++this.p, !(this.input[this.p - 1] === this.input[t] && !r)); )
      r ? r = !1 : this.input[this.p - 1] === "\\" && (r = !0);
    return new Gl(this.input, t, this.p, this.file);
  }
  *readFileNameTemplate(t) {
    const { outputDelimiterLeft: r } = t, n = [",", " ", r], i = new Set(n);
    for (; this.p < this.N && !i.has(this.peek()); )
      yield this.match(r) ? this.readOutputToken(t) : this.readHTMLToken(n);
  }
  match(t) {
    for (let r = 0; r < t.length; r++)
      if (t[r] !== this.input[this.p + r])
        return !1;
    return !0;
  }
  rmatch(t) {
    for (let r = 0; r < t.length; r++)
      if (t[t.length - 1 - r] !== this.input[this.p - 1 - r])
        return !1;
    return !0;
  }
  peekType(t = 0) {
    return this.p + t >= this.N ? 0 : B[this.input.charCodeAt(this.p + t)];
  }
  peek(t = 0) {
    return this.p + t >= this.N ? "" : this.input[this.p + t];
  }
  skipBlank() {
    for (; this.peekType() & lt; )
      ++this.p;
  }
}
class Nf {
  constructor(t, r) {
    this.handlers = {}, this.stopRequested = !1, this.tokens = t, this.parseToken = r;
  }
  on(t, r) {
    return this.handlers[t] = r, this;
  }
  trigger(t, r) {
    const n = this.handlers[t];
    return n ? (n.call(this, r), !0) : !1;
  }
  start() {
    this.trigger("start");
    let t;
    for (; !this.stopRequested && (t = this.tokens.shift()); ) {
      if (this.trigger("token", t) || Ke(t) && this.trigger(`tag:${t.name}`, t))
        continue;
      const r = this.parseToken(t, this.tokens);
      this.trigger("template", r);
    }
    return this.stopRequested || this.trigger("end"), this;
  }
  stop() {
    return this.stopRequested = !0, this;
  }
}
class Qr {
  constructor(t) {
    this.token = t;
  }
}
class Q extends Qr {
  constructor(t, r, n) {
    super(t), this.name = t.name, this.liquid = n, this.tokenizer = t.tokenizer;
  }
}
class ht {
  constructor(t, r) {
    this.hash = {};
    const n = new _e(t, {});
    for (const i of n.readHashes(r))
      this.hash[i.name.content] = i.value;
  }
  *render(t) {
    const r = {};
    for (const n of Object.keys(this.hash))
      r[n] = this.hash[n] === void 0 ? !0 : yield K(this.hash[n], t);
    return r;
  }
}
function If(e) {
  return class extends Q {
    constructor(t, r, n) {
      super(t, r, n), te(e.parse) && e.parse.call(this, t, r);
    }
    *render(t, r) {
      const n = yield new ht(this.token.args).render(t);
      return yield e.render.call(this, t, r, n);
    }
  };
}
function Ff(e) {
  return ne(e);
}
class Ks {
  constructor(t, r, n, i) {
    this.name = t, this.handler = te(r) ? r : te(r == null ? void 0 : r.handler) ? r.handler : zs, this.raw = !te(r) && !!(r != null && r.raw), this.args = n, this.liquid = i;
  }
  *render(t, r) {
    const n = [];
    for (const i of this.args)
      Ff(i) ? n.push([i[0], yield K(i[1], r)]) : n.push(yield K(i, r));
    return yield this.handler.apply({ context: r, liquid: this.liquid }, [t, ...n]);
  }
}
class me {
  /**
   * @param str the value to be valuated, eg.: "foobar" | truncate: 3
   */
  constructor(t, r) {
    this.filters = [];
    const n = typeof t == "string" ? new _e(t, r.options.operators).readFilteredValue() : t;
    this.initial = n.initial, this.filters = n.filters.map(({ name: i, args: s }) => new Ks(i, this.getFilter(r, i), s, r));
  }
  *value(t, r) {
    r = r || t.opts.lenientIf && this.filters.length > 0 && this.filters[0].name === "default";
    let n = yield this.initial.evaluate(t, r);
    for (const i of this.filters)
      n = yield i.render(n, t);
    return n;
  }
  getFilter(t, r) {
    const n = t.filters[r];
    return Se(n || !t.options.strictFilters, () => `undefined filter: ${r}`), n;
  }
}
class Lf extends Qr {
  constructor(t, r) {
    var n;
    super(t);
    const i = new _e(t.input, r.options.operators, t.file, t.contentRange);
    this.value = new me(i.readFilteredValue(), r);
    const s = this.value.filters, o = r.options.outputEscape;
    !(!((n = s[s.length - 1]) === null || n === void 0) && n.raw) && o && s.push(new Ks(toString.call(o), o, [], r));
  }
  *render(t, r) {
    const n = yield this.value.value(t, !1);
    r.write(n);
  }
}
class Mf extends Qr {
  constructor(t) {
    super(t), this.str = t.getContent();
  }
  *render(t, r) {
    r.write(this.str);
  }
}
var Je;
(function(e) {
  e.Partials = "partials", e.Layouts = "layouts", e.Root = "root";
})(Je || (Je = {}));
class jf {
  constructor(t) {
    if (this.options = t, t.relativeReference) {
      const r = t.fs.sep;
      Se(r, "`fs.sep` is required for relative reference");
      const n = new RegExp(["." + r, ".." + r, "./", "../"].map((i) => cl(i)).join("|"));
      this.shouldLoadRelative = (i) => n.test(i);
    } else
      this.shouldLoadRelative = (r) => !1;
    this.contains = this.options.fs.contains || (() => !0);
  }
  *lookup(t, r, n, i) {
    const { fs: s } = this.options, o = this.options[r];
    for (const a of this.candidates(t, o, i, r !== Je.Root))
      if (n ? s.existsSync(a) : yield s.exists(a))
        return a;
    throw this.lookupError(t, o);
  }
  *candidates(t, r, n, i) {
    const { fs: s, extname: o } = this.options;
    if (this.shouldLoadRelative(t) && n) {
      const a = s.resolve(this.dirname(n), t, o);
      for (const u of r)
        if (!i || this.contains(u, a)) {
          yield a;
          break;
        }
    }
    for (const a of r) {
      const u = s.resolve(a, t, o);
      (!i || this.contains(a, u)) && (yield u);
    }
    if (s.fallback !== void 0) {
      const a = s.fallback(t);
      a !== void 0 && (yield a);
    }
  }
  dirname(t) {
    const r = this.options.fs;
    return Se(r.dirname, "`fs.dirname` is required for relative reference"), r.dirname(t);
  }
  lookupError(t, r) {
    const n = new Error("ENOENT");
    return n.message = `ENOENT: Failed to lookup "${t}" in "${r}"`, n.code = "ENOENT", n;
  }
}
class zf {
  constructor(t) {
    this.liquid = t, this.cache = this.liquid.options.cache, this.fs = this.liquid.options.fs, this.parseFile = this.cache ? this._parseFileCached : this._parseFile, this.loader = new jf(this.liquid.options);
  }
  parse(t, r) {
    const i = new _e(t, this.liquid.options.operators, r).readTopLevelTokens(this.liquid.options);
    return this.parseTokens(i);
  }
  parseTokens(t) {
    let r;
    const n = [], i = [];
    for (; r = t.shift(); )
      try {
        n.push(this.parseToken(r, t));
      } catch (s) {
        if (this.liquid.options.catchAllErrors)
          i.push(s);
        else
          throw s;
      }
    if (i.length)
      throw new qs(i);
    return n;
  }
  parseToken(t, r) {
    try {
      if (Ke(t)) {
        const n = this.liquid.tags[t.name];
        return Se(n, `tag "${t.name}" not found`), new n(t, r, this.liquid);
      }
      return Uf(t) ? new Lf(t, this.liquid) : new Mf(t);
    } catch (n) {
      throw Ze.is(n) ? n : new gl(n, t);
    }
  }
  parseStream(t) {
    return new Nf(t, (r, n) => this.parseToken(r, n));
  }
  *_parseFileCached(t, r, n = Je.Root, i) {
    const s = this.cache, o = this.loader.shouldLoadRelative(t) ? i + "," + t : n + ":" + t, a = yield s.read(o);
    if (a)
      return a;
    const u = this._parseFile(t, r, n, i), l = r ? yield u : De(u);
    s.write(o, l);
    try {
      return yield l;
    } catch (f) {
      throw s.remove(o), f;
    }
  }
  *_parseFile(t, r, n = Je.Root, i) {
    const s = yield this.loader.lookup(t, n, r, i);
    return this.liquid.parse(r ? this.fs.readFileSync(s) : yield this.fs.readFile(s), s);
  }
}
var X;
(function(e) {
  e[e.Number = 1] = "Number", e[e.Literal = 2] = "Literal", e[e.Tag = 4] = "Tag", e[e.Output = 8] = "Output", e[e.HTML = 16] = "HTML", e[e.Filter = 32] = "Filter", e[e.Hash = 64] = "Hash", e[e.PropertyAccess = 128] = "PropertyAccess", e[e.Word = 256] = "Word", e[e.Range = 512] = "Range", e[e.Quoted = 1024] = "Quoted", e[e.Operator = 2048] = "Operator", e[e.FilteredValue = 4096] = "FilteredValue", e[e.Delimited = 12] = "Delimited";
})(X || (X = {}));
function qf(e) {
  return !!(Fe(e) & X.Delimited);
}
function eo(e) {
  return Fe(e) === X.Operator;
}
function Zr(e) {
  return Fe(e) === X.HTML;
}
function Uf(e) {
  return Fe(e) === X.Output;
}
function Ke(e) {
  return Fe(e) === X.Tag;
}
function Vf(e) {
  return Fe(e) === X.Quoted;
}
function Bf(e) {
  return Fe(e) === X.PropertyAccess;
}
function Hf(e) {
  return Fe(e) === X.Range;
}
function Fe(e) {
  return e ? e.kind : -1;
}
class de {
  constructor(t = {}, r = qe, n = {}) {
    var i, s, o;
    this.scopes = [{}], this.registers = {}, this.sync = !!n.sync, this.opts = r, this.globals = (i = n.globals) !== null && i !== void 0 ? i : r.globals, this.environments = Jt(t) ? t : Object(t), this.strictVariables = (s = n.strictVariables) !== null && s !== void 0 ? s : this.opts.strictVariables, this.ownPropertyOnly = (o = n.ownPropertyOnly) !== null && o !== void 0 ? o : r.ownPropertyOnly;
  }
  getRegister(t) {
    return this.registers[t] = this.registers[t] || {};
  }
  setRegister(t, r) {
    return this.registers[t] = r;
  }
  saveRegister(...t) {
    return t.map((r) => [r, this.getRegister(r)]);
  }
  restoreRegister(t) {
    return t.forEach(([r, n]) => this.setRegister(r, n));
  }
  getAll() {
    return [this.globals, this.environments, ...this.scopes].reduce((t, r) => Yt(t, r), {});
  }
  /**
   * @deprecated use `_get()` or `getSync()` instead
   */
  get(t) {
    return this.getSync(t);
  }
  getSync(t) {
    return Ne(this._get(t));
  }
  *_get(t) {
    const r = this.findScope(t[0]);
    return yield this._getFromScope(r, t);
  }
  /**
   * @deprecated use `_get()` instead
   */
  getFromScope(t, r) {
    return Ne(this._getFromScope(t, r));
  }
  *_getFromScope(t, r, n = this.strictVariables) {
    be(r) && (r = r.split("."));
    for (let i = 0; i < r.length; i++)
      if (t = yield Yf(t, r[i], this.ownPropertyOnly), n && ll(t))
        throw new wl(r.slice(0, i + 1).join("."));
    return t;
  }
  push(t) {
    return this.scopes.push(t);
  }
  pop() {
    return this.scopes.pop();
  }
  bottom() {
    return this.scopes[0];
  }
  findScope(t) {
    for (let r = this.scopes.length - 1; r >= 0; r--) {
      const n = this.scopes[r];
      if (t in n)
        return n;
    }
    return t in this.environments ? this.environments : this.globals;
  }
}
function Yf(e, t, r) {
  if (e = Fs(e), Re(e))
    return e;
  if (ne(e) && t < 0)
    return e[e.length + +t];
  const n = Wf(e, t, r);
  return n === void 0 && e instanceof Qe ? e.liquidMethodMissing(t) : te(n) ? n.call(e) : t === "size" ? Jf(e) : t === "first" ? Gf(e) : t === "last" ? Xf(e) : n;
}
function Wf(e, t, r) {
  if (!(r && !Object.hasOwnProperty.call(e, t) && !(e instanceof Qe)))
    return e[t];
}
function Gf(e) {
  return ne(e) ? e[0] : e.first;
}
function Xf(e) {
  return ne(e) ? e[e.length - 1] : e.last;
}
function Jf(e) {
  if (e.hasOwnProperty("size") || e.size !== void 0)
    return e.size;
  if (ne(e) || be(e))
    return e.length;
  if (typeof e == "object")
    return Object.keys(e).length;
}
var We;
(function(e) {
  e[e.OUTPUT = 0] = "OUTPUT", e[e.STORE = 1] = "STORE";
})(We || (We = {}));
const Qf = pe(Math.abs), Zf = pe(Math.max), Kf = pe(Math.min), eh = pe(Math.ceil), th = pe((e, t, r = !1) => r ? Math.floor(e / t) : e / t), rh = pe(Math.floor), nh = pe((e, t) => e - t), ih = pe((e, t) => e % t), sh = pe((e, t) => e * t);
function oh(e, t = 0) {
  e = L(e), t = L(t);
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}
function ah(e, t) {
  return e = L(e), t = L(t), Number(e) + Number(t);
}
var uh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  abs: Qf,
  at_least: Zf,
  at_most: Kf,
  ceil: eh,
  divided_by: th,
  floor: rh,
  minus: nh,
  modulo: ih,
  times: sh,
  round: oh,
  plus: ah
});
const ch = (e) => decodeURIComponent(w(e)).replace(/\+/g, " "), lh = (e) => encodeURIComponent(w(e)).replace(/%20/g, "+"), fh = (e) => encodeURIComponent(w(e)).replace(/%20/g, "+").replace(/[!'()*]/g, (t) => "%" + t.charCodeAt(0).toString(16).toUpperCase()), hh = (e) => encodeURI(w(e)).replace(/%5B/g, "[").replace(/%5D/g, "]"), Fi = /[^\p{M}\p{L}\p{Nd}]+/ug, ph = {
  raw: /\s+/g,
  default: Fi,
  pretty: /[^\p{M}\p{L}\p{Nd}._~!$&'()+,;=@]+/ug,
  ascii: /[^A-Za-z0-9]+/g,
  latin: Fi,
  none: null
};
function dh(e, t = "default", r = !1) {
  e = w(e);
  const n = ph[t];
  return n && (t === "latin" && (e = mh(e)), e = e.replace(n, "-").replace(/^-|-$/g, "")), r ? e : e.toLowerCase();
}
function mh(e) {
  return e.replace(/[àáâãäå]/g, "a").replace(/[æ]/g, "ae").replace(/[ç]/g, "c").replace(/[èéêë]/g, "e").replace(/[ìíîï]/g, "i").replace(/[ð]/g, "d").replace(/[ñ]/g, "n").replace(/[òóôõöø]/g, "o").replace(/[ùúûü]/g, "u").replace(/[ýÿ]/g, "y").replace(/[ß]/g, "ss").replace(/[œ]/g, "oe").replace(/[þ]/g, "th").replace(/[ẞ]/g, "SS").replace(/[Œ]/g, "OE").replace(/[Þ]/g, "TH");
}
var gh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  url_decode: ch,
  url_encode: lh,
  cgi_escape: fh,
  uri_escape: hh,
  slugify: dh
});
const yh = pe((e, t) => re(e).join(t === void 0 ? " " : t)), vh = pe((e) => ne(e) ? Ls(e) : ""), wh = pe((e) => ne(e) ? e[0] : ""), bh = pe((e) => [...re(e)].reverse());
function* Sh(e, t) {
  const r = [];
  for (const n of re(e))
    r.push([
      n,
      t ? yield this.context._getFromScope(n, w(t).split("."), !1) : n
    ]);
  return r.sort((n, i) => {
    const s = n[1], o = i[1];
    return s < o ? -1 : s > o ? 1 : 0;
  }).map((n) => n[0]);
}
function Th(e, t) {
  const r = w(t), n = t === void 0 ? wi : (i, s) => wi(i[r], s[r]);
  return [...re(e)].sort(n);
}
const Oh = (e) => e && e.length || 0;
function* xh(e, t) {
  const r = [];
  for (const n of re(e))
    r.push(yield this.context._getFromScope(n, w(t), !1));
  return r;
}
function* Eh(e, t) {
  let r = 0;
  for (const n of re(e)) {
    const i = Number(t ? yield this.context._getFromScope(n, w(t), !1) : n);
    r += Number.isNaN(i) ? 0 : i;
  }
  return r;
}
function kh(e) {
  return re(e).filter((t) => !Re(L(t)));
}
function to(e, t = []) {
  return re(e).concat(re(t));
}
function Ah(e, t) {
  return to(e, [t]);
}
function Ph(e, t) {
  const r = [...re(e)];
  return r.unshift(t), r;
}
function Rh(e) {
  const t = [...re(e)];
  return t.pop(), t;
}
function _h(e) {
  const t = [...re(e)];
  return t.shift(), t;
}
function Ch(e, t, r = 1) {
  return e = L(e), Re(e) ? [] : (ne(e) || (e = w(e)), t = t < 0 ? e.length + t : t, e.slice(t, t + r));
}
function* $h(e, t, r) {
  const n = [];
  e = re(e);
  const i = new _e(w(t)).readScopeValue();
  for (const s of e)
    n.push(yield K(i, new de(s)));
  return e.filter((s, o) => r === void 0 ? Ve(n[o], this.context) : Ye(n[o], r));
}
function* Dh(e, t, r) {
  const n = [], i = new me(w(r), this.liquid);
  for (const s of re(e))
    (yield i.value(new de({ [t]: s }))) && n.push(s);
  return n;
}
function* Nh(e, t) {
  const r = /* @__PURE__ */ new Map();
  e = re(e);
  const n = new _e(w(t)).readScopeValue();
  for (const i of e) {
    const s = yield K(n, new de(i));
    r.has(s) || r.set(s, []), r.get(s).push(i);
  }
  return [...r.entries()].map(([i, s]) => ({ name: i, items: s }));
}
function* Ih(e, t, r) {
  const n = /* @__PURE__ */ new Map(), i = new me(w(r), this.liquid);
  for (const s of re(e)) {
    const o = yield i.value(new de({ [t]: s }));
    n.has(o) || n.set(o, []), n.get(o).push(s);
  }
  return [...n.entries()].map(([s, o]) => ({ name: s, items: o }));
}
function* Fh(e, t, r) {
  const n = new _e(w(t)).readScopeValue();
  for (const i of re(e)) {
    const s = yield K(n, new de(i));
    if (Ye(s, r))
      return i;
  }
  return null;
}
function* Lh(e, t, r) {
  const n = new me(w(r), this.liquid);
  for (const i of re(e))
    if (yield n.value(new de({ [t]: i })))
      return i;
  return null;
}
function Mh(e) {
  e = L(e);
  const t = {};
  return (e || []).filter((r) => Is.call(t, String(r)) ? !1 : (t[String(r)] = !0, !0));
}
function jh(e, t = 1) {
  if (e = L(e), Re(e))
    return [];
  ne(e) || (e = w(e));
  const r = [...e].sort(() => Math.random() - 0.5);
  return t === 1 ? r[0] : r.slice(0, t);
}
var zh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  join: yh,
  last: vh,
  first: wh,
  reverse: bh,
  sort: Sh,
  sort_natural: Th,
  size: Oh,
  map: xh,
  sum: Eh,
  compact: kh,
  concat: to,
  push: Ah,
  unshift: Ph,
  pop: Rh,
  shift: _h,
  slice: Ch,
  where: $h,
  where_exp: Dh,
  group_by: Nh,
  group_by_exp: Ih,
  find: Fh,
  find_exp: Lh,
  uniq: Mh,
  sample: jh
});
function Kr(e, t, r) {
  const n = no(e, this.context.opts, r);
  return n ? (t = L(t), t = Re(t) ? this.context.opts.dateFormat : w(t), Nt(n, t)) : e;
}
function qh(e) {
  return Kr.call(this, e, "%Y-%m-%dT%H:%M:%S%:z");
}
function Uh(e) {
  return Kr.call(this, e, "%a, %d %b %Y %H:%M:%S %z");
}
function Vh(e, t, r) {
  return ro.call(this, e, "%b", t, r);
}
function Bh(e, t, r) {
  return ro.call(this, e, "%B", t, r);
}
function ro(e, t, r, n) {
  const i = no(e, this.context.opts);
  if (!i)
    return e;
  if (r === "ordinal") {
    const s = i.getDate();
    return n === "US" ? Nt(i, `${t} ${s}%q, %Y`) : Nt(i, `${s}%q ${t} %Y`);
  }
  return Nt(i, `%d ${t} %Y`);
}
function no(e, t, r) {
  let n;
  if (e = L(e), e === "now" || e === "today" ? n = /* @__PURE__ */ new Date() : Wr(e) ? n = new Date(e * 1e3) : be(e) ? /^\d+$/.test(e) ? n = new Date(+e * 1e3) : t.preserveTimezones ? n = Ee.createDateFixedToTimezone(e) : n = new Date(e) : n = e, !!Hh(n))
    return r !== void 0 ? n = new Ee(n, r) : !(n instanceof Ee) && t.timezoneOffset !== void 0 && (n = new Ee(n, t.timezoneOffset)), n;
}
function Hh(e) {
  return (e instanceof Date || e instanceof Ee) && !isNaN(e.getTime());
}
var Yh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  date: Kr,
  date_to_xmlschema: qh,
  date_to_rfc822: Uh,
  date_to_string: Vh,
  date_to_long_string: Bh
});
const hr = /[\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/gu, Li = /[^\u4E00-\u9FFF\uF900-\uFAFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF\s]+/gu;
function Wh(e, t) {
  return Se(arguments.length === 2, "append expect 2 arguments"), w(e) + w(t);
}
function Gh(e, t) {
  return Se(arguments.length === 2, "prepend expect 2 arguments"), w(t) + w(e);
}
function Xh(e, t) {
  return t ? (t = Gr(w(t)), w(e).replace(new RegExp(`^[${t}]+`, "g"), "")) : w(e).replace(/^\s+/, "");
}
function Jh(e) {
  return w(e).toLowerCase();
}
function Qh(e) {
  return w(e).toUpperCase();
}
function Zh(e, t) {
  return w(e).split(w(t)).join("");
}
function Kh(e, t) {
  return w(e).replace(w(t), "");
}
function ep(e, t) {
  const r = w(e), n = w(t), i = r.lastIndexOf(n);
  return i === -1 ? r : r.substring(0, i) + r.substring(i + n.length);
}
function tp(e, t) {
  return t ? (t = Gr(w(t)), w(e).replace(new RegExp(`[${t}]+$`, "g"), "")) : w(e).replace(/\s+$/, "");
}
function rp(e, t) {
  const r = w(e).split(w(t));
  for (; r.length && r[r.length - 1] === ""; )
    r.pop();
  return r;
}
function np(e, t) {
  return t ? (t = Gr(w(t)), w(e).replace(new RegExp(`^[${t}]+`, "g"), "").replace(new RegExp(`[${t}]+$`, "g"), "")) : w(e).trim();
}
function ip(e) {
  return w(e).replace(/\r?\n/gm, "");
}
function sp(e) {
  return e = w(e), e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
}
function op(e, t, r) {
  return w(e).split(w(t)).join(r);
}
function ap(e, t, r) {
  return w(e).replace(w(t), r);
}
function up(e, t, r) {
  const n = w(e), i = w(t), s = n.lastIndexOf(i);
  if (s === -1)
    return n;
  const o = w(r);
  return n.substring(0, s) + o + n.substring(s + i.length);
}
function cp(e, t = 50, r = "...") {
  return e = w(e), e.length <= t ? e : e.substring(0, t - r.length) + r;
}
function lp(e, t = 15, r = "...") {
  const n = w(e).split(/\s+/);
  t <= 0 && (t = 1);
  let i = n.slice(0, t).join(" ");
  return n.length >= t && (i += r), i;
}
function fp(e) {
  return e = w(e), e.replace(/\s+/g, " ");
}
function hp(e, t) {
  if (e = w(e).trim(), !e)
    return 0;
  switch (t) {
    case "cjk":
      return (e.match(hr) || []).length + (e.match(Li) || []).length;
    case "auto":
      return hr.test(e) ? e.match(hr).length + (e.match(Li) || []).length : e.split(/\s+/).length;
    default:
      return e.split(/\s+/).length;
  }
}
function pp(e, t = "and") {
  switch (e.length) {
    case 0:
      return "";
    case 1:
      return e[0];
    case 2:
      return `${e[0]} ${t} ${e[1]}`;
    default:
      return `${e.slice(0, -1).join(", ")}, ${t} ${e[e.length - 1]}`;
  }
}
var dp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  append: Wh,
  prepend: Gh,
  lstrip: Xh,
  downcase: Jh,
  upcase: Qh,
  remove: Zh,
  remove_first: Kh,
  remove_last: ep,
  rstrip: tp,
  split: rp,
  strip: np,
  strip_newlines: ip,
  capitalize: sp,
  replace: op,
  replace_first: ap,
  replace_last: up,
  truncate: cp,
  truncatewords: lp,
  normalize_whitespace: fp,
  number_of_words: hp,
  array_to_sentence_string: pp
});
const mp = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Pf), uh), gh), zh), Yh), dp), Zs);
class gp extends Q {
  constructor(t, r, n) {
    super(t, r, n), this.key = this.tokenizer.readIdentifier().content, this.tokenizer.assert(this.key, "expected variable name"), this.tokenizer.skipBlank(), this.tokenizer.assert(this.tokenizer.peek() === "=", 'expected "="'), this.tokenizer.advance(), this.value = new me(this.tokenizer.readFilteredValue(), this.liquid);
  }
  *render(t) {
    t.bottom()[this.key] = yield this.value.value(t, this.liquid.options.lenientIf);
  }
}
const Mi = ["offset", "limit", "reversed"];
class yp extends Q {
  constructor(t, r, n) {
    super(t, r, n);
    const i = this.tokenizer.readIdentifier(), s = this.tokenizer.readIdentifier(), o = this.tokenizer.readValue();
    if (!i.size() || s.content !== "in" || !o)
      throw new Error(`illegal tag: ${t.getText()}`);
    this.variable = i.content, this.collection = o, this.hash = new ht(this.tokenizer.remaining()), this.templates = [], this.elseTemplates = [];
    let a;
    const u = this.liquid.parser.parseStream(r).on("start", () => a = this.templates).on("tag:else", () => a = this.elseTemplates).on("tag:endfor", () => u.stop()).on("template", (l) => a.push(l)).on("end", () => {
      throw new Error(`tag ${t.getText()} not closed`);
    });
    u.start();
  }
  *render(t, r) {
    const n = this.liquid.renderer;
    let i = Yr(yield K(this.collection, t));
    if (!i.length) {
      yield n.renderTemplates(this.elseTemplates, t, r);
      return;
    }
    const s = "continue-" + this.variable + "-" + this.collection.getText();
    t.push({ continue: t.getRegister(s) });
    const o = yield this.hash.render(t);
    t.pop(), i = (this.liquid.options.orderedFilterParameters ? Object.keys(o).filter((l) => Mi.includes(l)) : Mi.filter((l) => o[l] !== void 0)).reduce((l, f) => f === "offset" ? wp(l, o.offset) : f === "limit" ? bp(l, o.limit) : vp(l), i), t.setRegister(s, (o.offset || 0) + i.length);
    const u = { forloop: new Xr(i.length, this.collection.getText(), this.variable) };
    t.push(u);
    for (const l of i) {
      if (u[this.variable] = l, yield n.renderTemplates(this.templates, t, r), r.break) {
        r.break = !1;
        break;
      }
      r.continue = !1, u.forloop.next();
    }
    t.pop();
  }
}
function vp(e) {
  return [...e].reverse();
}
function wp(e, t) {
  return e.slice(t);
}
function bp(e, t) {
  return e.slice(0, t);
}
class Sp extends Q {
  constructor(t, r, n) {
    for (super(t, r, n), this.templates = [], this.variable = this.readVariableName(); r.length; ) {
      const i = r.shift();
      if (Ke(i) && i.name === "endcapture")
        return;
      this.templates.push(n.parser.parseToken(i, r));
    }
    throw new Error(`tag ${t.getText()} not closed`);
  }
  *render(t) {
    const n = yield this.liquid.renderer.renderTemplates(this.templates, t);
    t.bottom()[this.variable] = n;
  }
  readVariableName() {
    const t = this.tokenizer.readIdentifier().content;
    if (t)
      return t;
    const r = this.tokenizer.readQuoted();
    if (r)
      return Js(r);
    throw this.tokenizer.error("invalid capture name");
  }
}
class Tp extends Q {
  constructor(t, r, n) {
    super(t, r, n), this.branches = [], this.elseTemplates = [], this.value = new me(this.tokenizer.readFilteredValue(), this.liquid), this.elseTemplates = [];
    let i = [], s = 0;
    const o = this.liquid.parser.parseStream(r).on("tag:when", (a) => {
      if (s > 0)
        return;
      i = [];
      const u = [];
      for (; !a.tokenizer.end(); )
        u.push(a.tokenizer.readValueOrThrow()), a.tokenizer.skipBlank(), a.tokenizer.peek() === "," ? a.tokenizer.readTo(",") : a.tokenizer.readTo("or");
      this.branches.push({
        values: u,
        templates: i
      });
    }).on("tag:else", () => {
      s++, i = this.elseTemplates;
    }).on("tag:endcase", () => o.stop()).on("template", (a) => {
      (i !== this.elseTemplates || s === 1) && i.push(a);
    }).on("end", () => {
      throw new Error(`tag ${t.getText()} not closed`);
    });
    o.start();
  }
  *render(t, r) {
    const n = this.liquid.renderer, i = L(yield this.value.value(t, t.opts.lenientIf));
    let s = !1;
    for (const o of this.branches)
      for (const a of o.values) {
        const u = yield K(a, t, t.opts.lenientIf);
        if (Ye(i, u)) {
          yield n.renderTemplates(o.templates, t, r), s = !0;
          break;
        }
      }
    s || (yield n.renderTemplates(this.elseTemplates, t, r));
  }
}
class Op extends Q {
  constructor(t, r, n) {
    for (super(t, r, n); r.length; ) {
      const i = r.shift();
      if (Ke(i) && i.name === "endcomment")
        return;
    }
    throw new Error(`tag ${t.getText()} not closed`);
  }
  render() {
  }
}
class xp extends Q {
  constructor(t, r, n) {
    super(t, r, n);
    const i = this.tokenizer;
    for (this.file = en(i, this.liquid), this.currentFile = t.file; !i.end(); ) {
      i.skipBlank();
      const s = i.p, o = i.readIdentifier();
      if ((o.content === "with" || o.content === "for") && (i.skipBlank(), i.peek() !== ":")) {
        const a = i.readValue();
        if (a) {
          const u = i.p, l = i.readIdentifier();
          let f;
          l.content === "as" ? f = i.readIdentifier() : i.p = u, this[o.content] = { value: a, alias: f && f.content }, i.skipBlank(), i.peek() === "," && i.advance();
          continue;
        }
      }
      i.p = s;
      break;
    }
    this.hash = new ht(i.remaining());
  }
  *render(t, r) {
    const { liquid: n, hash: i } = this, s = yield tn(this.file, t, n);
    Se(s, () => `illegal file path "${s}"`);
    const o = new de({}, t.opts, { sync: t.sync, globals: t.globals, strictVariables: t.strictVariables }), a = o.bottom();
    if (Yt(a, yield i.render(t)), this.with) {
      const { value: u, alias: l } = this.with;
      a[l || s] = yield K(u, t);
    }
    if (this.for) {
      const { value: u, alias: l } = this.for, f = Yr(yield K(u, t));
      a.forloop = new Xr(f.length, u.getText(), l);
      for (const d of f) {
        a[l] = d;
        const y = yield n._parsePartialFile(s, o.sync, this.currentFile);
        yield n.renderer.renderTemplates(y, o, r), a.forloop.next();
      }
    } else {
      const u = yield n._parsePartialFile(s, o.sync, this.currentFile);
      yield n.renderer.renderTemplates(u, o, r);
    }
  }
}
function en(e, t) {
  if (t.options.dynamicPartials) {
    const i = e.readValue();
    if (e.assert(i, "illegal file path"), i.getText() === "none")
      return;
    if (Vf(i)) {
      const s = t.parse(Js(i));
      return ji(s);
    }
    return i;
  }
  const r = [...e.readFileNameTemplate(t.options)], n = ji(t.parser.parseTokens(r));
  return n === "none" ? void 0 : n;
}
function ji(e) {
  return e.length === 1 && Zr(e[0].token) ? e[0].token.getContent() : e;
}
function* tn(e, t, r) {
  return typeof e == "string" ? e : Array.isArray(e) ? r.renderer.renderTemplates(e, t) : yield K(e, t);
}
class Ep extends Q {
  constructor(t, r, n) {
    super(t, r, n);
    const { tokenizer: i } = t;
    this.file = en(i, this.liquid), this.currentFile = t.file;
    const s = i.p;
    i.readIdentifier().content === "with" ? (i.skipBlank(), i.peek() !== ":" ? this.withVar = i.readValue() : i.p = s) : i.p = s, this.hash = new ht(i.remaining(), this.liquid.options.jekyllInclude);
  }
  *render(t, r) {
    const { liquid: n, hash: i, withVar: s } = this, { renderer: o } = n, a = yield tn(this.file, t, n);
    Se(a, () => `illegal file path "${a}"`);
    const u = t.saveRegister("blocks", "blockMode");
    t.setRegister("blocks", {}), t.setRegister("blockMode", We.OUTPUT);
    const l = yield i.render(t);
    s && (l[a] = yield K(s, t));
    const f = yield n._parsePartialFile(a, t.sync, this.currentFile);
    t.push(t.opts.jekyllInclude ? { include: l } : l), yield o.renderTemplates(f, t, r), t.pop(), t.restoreRegister(u);
  }
}
class kp extends Q {
  constructor(t, r, n) {
    super(t, r, n), this.variable = this.tokenizer.readIdentifier().content;
  }
  render(t, r) {
    const n = t.environments;
    Wr(n[this.variable]) || (n[this.variable] = 0), r.write(w(--n[this.variable]));
  }
}
class Ap extends Q {
  constructor(t, r, n) {
    super(t, r, n), this.candidates = [];
    const i = this.tokenizer.readValue();
    for (this.tokenizer.skipBlank(), i && (this.tokenizer.peek() === ":" ? (this.group = i, this.tokenizer.advance()) : this.candidates.push(i)); !this.tokenizer.end(); ) {
      const s = this.tokenizer.readValue();
      s && this.candidates.push(s), this.tokenizer.readTo(",");
    }
    this.tokenizer.assert(this.candidates.length, () => `empty candidates: "${t.getText()}"`);
  }
  *render(t, r) {
    const i = `cycle:${yield K(this.group, t)}:` + this.candidates.join(","), s = t.getRegister("cycle");
    let o = s[i];
    o === void 0 && (o = s[i] = 0);
    const a = this.candidates[o];
    return o = (o + 1) % this.candidates.length, s[i] = o, yield K(a, t);
  }
}
class Pp extends Q {
  constructor(t, r, n) {
    super(t, r, n), this.branches = [], this.elseTemplates = [];
    let i = [], s = 0;
    n.parser.parseStream(r).on("start", () => this.branches.push({
      value: new me(t.args, this.liquid),
      templates: i = []
    })).on("tag:elsif", (o) => {
      if (s > 0) {
        i = [];
        return;
      }
      this.branches.push({
        value: new me(o.args, this.liquid),
        templates: i = []
      });
    }).on("tag:else", () => {
      s++, i = this.elseTemplates;
    }).on("tag:endif", function() {
      this.stop();
    }).on("template", (o) => {
      (i !== this.elseTemplates || s === 1) && i.push(o);
    }).on("end", () => {
      throw new Error(`tag ${t.getText()} not closed`);
    }).start();
  }
  *render(t, r) {
    const n = this.liquid.renderer;
    for (const { value: i, templates: s } of this.branches) {
      const o = yield i.value(t, t.opts.lenientIf);
      if (Ve(o, t)) {
        yield n.renderTemplates(s, t, r);
        return;
      }
    }
    yield n.renderTemplates(this.elseTemplates, t, r);
  }
}
class Rp extends Q {
  constructor(t, r, n) {
    super(t, r, n), this.variable = this.tokenizer.readIdentifier().content;
  }
  render(t, r) {
    const n = t.environments;
    Wr(n[this.variable]) || (n[this.variable] = 0);
    const i = n[this.variable];
    n[this.variable]++, r.write(w(i));
  }
}
class _p extends Q {
  constructor(t, r, n) {
    super(t, r, n), this.file = en(this.tokenizer, this.liquid), this.currentFile = t.file, this.args = new ht(this.tokenizer.remaining()), this.templates = this.liquid.parser.parseTokens(r);
  }
  *render(t, r) {
    const { liquid: n, args: i, file: s } = this, { renderer: o } = n;
    if (s === void 0) {
      t.setRegister("blockMode", We.OUTPUT), yield o.renderTemplates(this.templates, t, r);
      return;
    }
    const a = yield tn(this.file, t, n);
    Se(a, () => `illegal file path "${a}"`);
    const u = yield n._parseLayoutFile(a, t.sync, this.currentFile);
    t.setRegister("blockMode", We.STORE);
    const l = yield o.renderTemplates(this.templates, t), f = t.getRegister("blocks");
    f[""] === void 0 && (f[""] = (d, y) => y.write(l)), t.setRegister("blockMode", We.OUTPUT), t.push(yield i.render(t)), yield o.renderTemplates(u, t, r), t.pop();
  }
}
class Cp extends Q {
  constructor(t, r, n) {
    super(t, r, n), this.templates = [];
    const i = /\w+/.exec(t.args);
    for (this.block = i ? i[0] : ""; r.length; ) {
      const s = r.shift();
      if (Ke(s) && s.name === "endblock")
        return;
      const o = n.parser.parseToken(s, r);
      this.templates.push(o);
    }
    throw new Error(`tag ${t.getText()} not closed`);
  }
  *render(t, r) {
    const n = this.getBlockRender(t);
    t.getRegister("blockMode") === We.STORE ? t.getRegister("blocks")[this.block] = n : yield n(new Ti(), r);
  }
  getBlockRender(t) {
    const { liquid: r, templates: n } = this, i = t.getRegister("blocks")[this.block], s = function* (o, a) {
      t.push({ block: o }), yield r.renderer.renderTemplates(n, t, a), t.pop();
    };
    return i ? (o, a) => i(new Ti(() => s(o, a)), a) : s;
  }
}
class $p extends Q {
  constructor(t, r, n) {
    for (super(t, r, n), this.tokens = []; r.length; ) {
      const i = r.shift();
      if (Ke(i) && i.name === "endraw")
        return;
      this.tokens.push(i);
    }
    throw new Error(`tag ${t.getText()} not closed`);
  }
  render() {
    return this.tokens.map((t) => t.getText()).join("");
  }
}
class Dp extends Xr {
  constructor(t, r, n, i) {
    super(t, n, i), this.length = t, this.cols = r;
  }
  row() {
    return Math.floor(this.i / this.cols) + 1;
  }
  col0() {
    return this.i % this.cols;
  }
  col() {
    return this.col0() + 1;
  }
  col_first() {
    return this.col0() === 0;
  }
  col_last() {
    return this.col() === this.cols;
  }
}
class Np extends Q {
  constructor(t, r, n) {
    super(t, r, n);
    const i = this.tokenizer.readIdentifier();
    this.tokenizer.skipBlank();
    const s = this.tokenizer.readIdentifier(), o = this.tokenizer.readValue();
    if (s.content !== "in" || !o)
      throw new Error(`illegal tag: ${t.getText()}`);
    this.variable = i.content, this.collection = o, this.args = new ht(this.tokenizer.remaining()), this.templates = [];
    let a;
    const u = this.liquid.parser.parseStream(r).on("start", () => a = this.templates).on("tag:endtablerow", () => u.stop()).on("template", (l) => a.push(l)).on("end", () => {
      throw new Error(`tag ${t.getText()} not closed`);
    });
    u.start();
  }
  *render(t, r) {
    let n = Yr(yield K(this.collection, t));
    const i = yield this.args.render(t), s = i.offset || 0, o = i.limit === void 0 ? n.length : i.limit;
    n = n.slice(s, s + o);
    const a = i.cols || n.length, u = this.liquid.renderer, l = new Dp(n.length, a, this.collection.getText(), this.variable), f = { tablerowloop: l };
    t.push(f);
    for (let d = 0; d < n.length; d++, l.next())
      f[this.variable] = n[d], l.col0() === 0 && (l.row() !== 1 && r.write("</tr>"), r.write(`<tr class="row${l.row()}">`)), r.write(`<td class="col${l.col()}">`), yield u.renderTemplates(this.templates, t, r), r.write("</td>");
    n.length && r.write("</tr>"), t.pop();
  }
}
class Ip extends Q {
  constructor(t, r, n) {
    super(t, r, n), this.branches = [], this.elseTemplates = [];
    let i = [], s = 0;
    this.liquid.parser.parseStream(r).on("start", () => this.branches.push({
      value: new me(t.args, this.liquid),
      test: Zt,
      templates: i = []
    })).on("tag:elsif", (o) => {
      if (s > 0) {
        i = [];
        return;
      }
      this.branches.push({
        value: new me(o.args, this.liquid),
        test: Ve,
        templates: i = []
      });
    }).on("tag:else", () => {
      s++, i = this.elseTemplates;
    }).on("tag:endunless", function() {
      this.stop();
    }).on("template", (o) => {
      (i !== this.elseTemplates || s === 1) && i.push(o);
    }).on("end", () => {
      throw new Error(`tag ${t.getText()} not closed`);
    }).start();
  }
  *render(t, r) {
    const n = this.liquid.renderer;
    for (const { value: i, test: s, templates: o } of this.branches) {
      const a = yield i.value(t, t.opts.lenientIf);
      if (s(a, t)) {
        yield n.renderTemplates(o, t, r);
        return;
      }
    }
    yield n.renderTemplates(this.elseTemplates, t, r);
  }
}
class Fp extends Q {
  render(t, r) {
    r.break = !0;
  }
}
class Lp extends Q {
  render(t, r) {
    r.continue = !0;
  }
}
class Mp extends Q {
  constructor(t, r, n) {
    super(t, r, n), this.tokenizer.skipBlank(), this.tokenizer.end() || (this.value = new me(this.tokenizer.readFilteredValue(), this.liquid));
  }
  *render(t, r) {
    if (!this.value)
      return;
    const n = yield this.value.value(t, !1);
    r.write(n);
  }
}
class jp extends Q {
  constructor(t, r, n) {
    super(t, r, n);
    const i = this.tokenizer.readLiquidTagTokens(this.liquid.options);
    this.templates = this.liquid.parser.parseTokens(i);
  }
  *render(t, r) {
    yield this.liquid.renderer.renderTemplates(this.templates, t, r);
  }
}
class zp extends Q {
  constructor(t, r, n) {
    if (super(t, r, n), t.args.search(/\n\s*[^#\s]/g) !== -1)
      throw new Error("every line of an inline comment must start with a '#' character");
  }
  render() {
  }
}
const qp = {
  assign: gp,
  for: yp,
  capture: Sp,
  case: Tp,
  comment: Op,
  include: Ep,
  render: xp,
  decrement: kp,
  increment: Rp,
  cycle: Ap,
  if: Pp,
  layout: _p,
  block: Cp,
  raw: $p,
  tablerow: Np,
  unless: Ip,
  break: Fp,
  continue: Lp,
  echo: Mp,
  liquid: jp,
  "#": zp
};
class rn {
  constructor(t = {}) {
    this.renderer = new tf(), this.filters = {}, this.tags = {}, this.options = Rf(t), this.parser = new zf(this), vi(qp, (r, n) => this.registerTag(n, r)), vi(mp, (r, n) => this.registerFilter(n, r));
  }
  parse(t, r) {
    return this.parser.parse(t, r);
  }
  _render(t, r, n) {
    const i = r instanceof de ? r : new de(r, this.options, n);
    return this.renderer.renderTemplates(t, i);
  }
  render(t, r, n) {
    return Ae(this, void 0, void 0, function* () {
      return De(this._render(t, r, Object.assign(Object.assign({}, n), { sync: !1 })));
    });
  }
  renderSync(t, r, n) {
    return Ne(this._render(t, r, Object.assign(Object.assign({}, n), { sync: !0 })));
  }
  renderToNodeStream(t, r, n = {}) {
    const i = new de(r, this.options, n);
    return this.renderer.renderTemplatesToNodeStream(t, i);
  }
  _parseAndRender(t, r, n) {
    const i = this.parse(t);
    return this._render(i, r, n);
  }
  parseAndRender(t, r, n) {
    return Ae(this, void 0, void 0, function* () {
      return De(this._parseAndRender(t, r, Object.assign(Object.assign({}, n), { sync: !1 })));
    });
  }
  parseAndRenderSync(t, r, n) {
    return Ne(this._parseAndRender(t, r, Object.assign(Object.assign({}, n), { sync: !0 })));
  }
  _parsePartialFile(t, r, n) {
    return this.parser.parseFile(t, r, Je.Partials, n);
  }
  _parseLayoutFile(t, r, n) {
    return this.parser.parseFile(t, r, Je.Layouts, n);
  }
  _parseFile(t, r, n, i) {
    return this.parser.parseFile(t, r, n, i);
  }
  parseFile(t, r) {
    return Ae(this, void 0, void 0, function* () {
      return De(this.parser.parseFile(t, !1, r));
    });
  }
  parseFileSync(t, r) {
    return Ne(this.parser.parseFile(t, !0, r));
  }
  *_renderFile(t, r, n) {
    const i = yield this._parseFile(t, n.sync, n.lookupType);
    return yield this._render(i, r, n);
  }
  renderFile(t, r, n) {
    return Ae(this, void 0, void 0, function* () {
      return De(this._renderFile(t, r, Object.assign(Object.assign({}, n), { sync: !1 })));
    });
  }
  renderFileSync(t, r, n) {
    return Ne(this._renderFile(t, r, Object.assign(Object.assign({}, n), { sync: !0 })));
  }
  renderFileToNodeStream(t, r, n) {
    return Ae(this, void 0, void 0, function* () {
      const i = yield this.parseFile(t);
      return this.renderToNodeStream(i, r, n);
    });
  }
  _evalValue(t, r) {
    const n = new me(t, this), i = r instanceof de ? r : new de(r, this.options);
    return n.value(i);
  }
  evalValue(t, r) {
    return Ae(this, void 0, void 0, function* () {
      return De(this._evalValue(t, r));
    });
  }
  evalValueSync(t, r) {
    return Ne(this._evalValue(t, r));
  }
  registerFilter(t, r) {
    this.filters[t] = r;
  }
  registerTag(t, r) {
    this.tags[t] = te(r) ? r : If(r);
  }
  plugin(t) {
    return t.call(this, rn);
  }
  express() {
    const t = this;
    let r = !0;
    return function(n, i, s) {
      if (r) {
        r = !1;
        const o = It(this.root);
        t.options.root.unshift(...o), t.options.layouts.unshift(...o), t.options.partials.unshift(...o);
      }
      t.renderFile(n, i).then((o) => s(null, o), s);
    };
  }
}
he.addDefaultLocale(Rs);
he.addLocale(Rs);
const Up = ds.div`
  cursor: ${(e) => e.$redirect ? "pointer" : "default"};

  &:hover {
    background: #eee !important;
  }

  & .notification-archive-button {
    visibility: hidden;
    transition: visibility 0s;
  }

  &:hover .notification-archive-button {
    visibility: ${(e) => e.$archived ? "hidden" : "visible"};
  }
`, Qp = (e) => {
  var O, S, N, _;
  if (e.renderer)
    return e.renderer(e.notifications);
  const t = new rn(), r = e.notifications.length, n = e.notifications[r - 1], i = (S = (O = n.deliveryOptions) == null ? void 0 : O.instant) != null && S.batching ? (N = n.template) == null ? void 0 : N.batch : (_ = n.template) == null ? void 0 : _.instant;
  let s = { _items: [] };
  e.notifications.forEach((R) => {
    s = {
      ...s,
      ...R.parameters
    };
  }), s._items = e.notifications.map((R) => ({ ...R.parameters, _items: void 0 }));
  const o = t.parseAndRenderSync((i == null ? void 0 : i.title) ?? "", s), a = t.parseAndRenderSync(
    (i == null ? void 0 : i.redirectURL) ?? "",
    s
  ), u = t.parseAndRenderSync(
    (i == null ? void 0 : i.imageURL) ?? "",
    s
  ), l = e.notifications.every((R) => R.seen), f = e.notifications.every((R) => R.opened), d = e.notifications.every((R) => R.archived), y = e.notifications[r - 1].date, v = e.notifications.map((R) => R.id);
  return /* @__PURE__ */ er(
    Up,
    {
      $redirect: !!a,
      $seen: l || !!f,
      $archived: !!d,
      onClick: () => {
        e.markAsClicked(v), a && (window.location.href = a);
      },
      style: {
        padding: "16px 6px 16px 0",
        background: "#fff",
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "100%"
      },
      children: [
        /* @__PURE__ */ ve("div", { children: /* @__PURE__ */ ve(
          Ji,
          {
            src: u,
            size: "large",
            style: {
              marginRight: 8,
              marginLeft: 12
            },
            shape: e.imageShape
          }
        ) }),
        /* @__PURE__ */ er(
          "div",
          {
            style: {
              flexGrow: 1
            },
            children: [
              /* @__PURE__ */ ve("div", { children: /* @__PURE__ */ ve(
                cn.Text,
                {
                  style: {
                    whiteSpace: "pre-line"
                  },
                  children: /* @__PURE__ */ ve("span", { dangerouslySetInnerHTML: { __html: o } })
                }
              ) }),
              /* @__PURE__ */ ve("div", { children: /* @__PURE__ */ ve(cn.Text, { type: "secondary", style: { fontSize: 12 }, children: /* @__PURE__ */ ve(Bt, { date: new Date(y).getTime(), locale: "en-US" }) }) })
            ]
          }
        ),
        /* @__PURE__ */ er(
          "div",
          {
            style: {
              position: "relative",
              width: 48,
              height: 32,
              display: "flex",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ ve(
                Io,
                {
                  className: "notification-archive-button",
                  icon: /* @__PURE__ */ ve(Do, {}),
                  size: "small",
                  type: "text",
                  shape: "circle",
                  onClick: (R) => (e.markAsArchived(v), R.preventDefault(), R.stopPropagation(), !1)
                }
              ),
              /* @__PURE__ */ ve(
                Fo,
                {
                  dot: !0,
                  className: "notification-highlight",
                  style: {
                    visibility: d ? "hidden" : "visible",
                    marginRight: 10,
                    marginLeft: 8,
                    marginTop: 6,
                    right: 0
                  }
                }
              )
            ]
          }
        )
      ]
    }
  );
};
export {
  rn as L,
  Qp as N,
  Bo as a,
  Gi as r,
  Uo as u
};
