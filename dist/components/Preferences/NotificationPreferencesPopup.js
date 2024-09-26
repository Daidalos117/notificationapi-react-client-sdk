import { jsx as ye } from "react/jsx-runtime";
import { Preferences as yn } from "./Preferences.js";
import { _ as U, q as xn, s as hn, d as De, t as En, v as _e, w as $n, K as He, g as On, u as S, r as Nn, l as Sn, m as wn, a as oe, e as ce, n as Pn, x as In, C as Ae, h as Tn, y as Rn, z as Mn, A as Le, B as jn } from "../../assets/colors.js";
import * as l from "react";
import v, { useContext as Y, useRef as V, useMemo as Bn, useEffect as xe } from "react";
import { p as zn, K as he, q as Fn, r as de, s as Dn, i as _n, l as Ve, v as Hn, N as An, w as Ln, z as Vn, d as te, x as Wn, y as qn, A as Gn, B as Un } from "../../assets/index4.js";
import { a as D, c as w, _ as I, b as Xn, e as ue, i as Ee, j as $e, k as Kn } from "../../assets/index3.js";
import { I as fe } from "../../assets/AntdIcon.js";
import { B as me, c as We } from "../../assets/button.js";
import { R as ge, w as Qn } from "../../assets/PurePanel.js";
import { p as Ce } from "../../assets/pickAttrs.js";
var Zn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" }, Yn = function(n, t) {
  return /* @__PURE__ */ l.createElement(fe, D({}, n, {
    ref: t,
    icon: Zn
  }));
}, qe = /* @__PURE__ */ l.forwardRef(Yn);
process.env.NODE_ENV !== "production" && (qe.displayName = "CheckCircleFilled");
var kn = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Jn = function(n, t) {
  return /* @__PURE__ */ l.createElement(fe, D({}, n, {
    ref: t,
    icon: kn
  }));
}, Ge = /* @__PURE__ */ l.forwardRef(Jn);
process.env.NODE_ENV !== "production" && (Ge.displayName = "ExclamationCircleFilled");
var et = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, nt = function(n, t) {
  return /* @__PURE__ */ l.createElement(fe, D({}, n, {
    ref: t,
    icon: et
  }));
}, Ue = /* @__PURE__ */ l.forwardRef(nt);
process.env.NODE_ENV !== "production" && (Ue.displayName = "InfoCircleFilled");
function tt() {
  const [e, n] = l.useState([]), t = l.useCallback((o) => (n((a) => [].concat(U(a), [o])), () => {
    n((a) => a.filter((r) => r !== o));
  }), []);
  return [e, t];
}
function ie(e) {
  return !!(e && e.then);
}
const Xe = (e) => {
  const {
    type: n,
    children: t,
    prefixCls: o,
    buttonProps: a,
    close: r,
    autoFocus: u,
    emitEvent: d,
    isSilent: s,
    quitOnNullishReturnValue: c,
    actionFn: i
  } = e, f = l.useRef(!1), b = l.useRef(null), [g, h] = xn(!1), C = function() {
    r == null || r.apply(void 0, arguments);
  };
  l.useEffect(() => {
    let m = null;
    return u && (m = setTimeout(() => {
      var y;
      (y = b.current) === null || y === void 0 || y.focus();
    })), () => {
      m && clearTimeout(m);
    };
  }, []);
  const E = (m) => {
    ie(m) && (h(!0), m.then(function() {
      h(!1, !0), C.apply(void 0, arguments), f.current = !1;
    }, (y) => {
      if (h(!1, !0), f.current = !1, !(s != null && s()))
        return Promise.reject(y);
    }));
  }, p = (m) => {
    if (f.current)
      return;
    if (f.current = !0, !i) {
      C();
      return;
    }
    let y;
    if (d) {
      if (y = i(m), c && !ie(y)) {
        f.current = !1, C(m);
        return;
      }
    } else if (i.length)
      y = i(r), f.current = !1;
    else if (y = i(), !ie(y)) {
      C();
      return;
    }
    E(y);
  };
  return /* @__PURE__ */ l.createElement(me, Object.assign({}, We(n), {
    onClick: p,
    loading: g,
    prefixCls: o
  }, a, {
    ref: b
  }), t);
}, k = /* @__PURE__ */ v.createContext({}), {
  Provider: Ke
} = k, Oe = () => {
  const {
    autoFocusButton: e,
    cancelButtonProps: n,
    cancelTextLocale: t,
    isSilent: o,
    mergedOkCancel: a,
    rootPrefixCls: r,
    close: u,
    onCancel: d,
    onConfirm: s
  } = Y(k);
  return a ? /* @__PURE__ */ v.createElement(Xe, {
    isSilent: o,
    actionFn: d,
    close: function() {
      u == null || u.apply(void 0, arguments), s == null || s(!1);
    },
    autoFocus: e === "cancel",
    buttonProps: n,
    prefixCls: `${r}-btn`
  }, t) : null;
}, Ne = () => {
  const {
    autoFocusButton: e,
    close: n,
    isSilent: t,
    okButtonProps: o,
    rootPrefixCls: a,
    okTextLocale: r,
    okType: u,
    onConfirm: d,
    onOk: s
  } = Y(k);
  return /* @__PURE__ */ v.createElement(Xe, {
    isSilent: t,
    type: u || "primary",
    actionFn: s,
    close: function() {
      n == null || n.apply(void 0, arguments), d == null || d(!0);
    },
    autoFocus: e === "ok",
    buttonProps: o,
    prefixCls: `${a}-btn`
  }, r);
};
var Qe = /* @__PURE__ */ l.createContext({});
function Se(e, n, t) {
  var o = n;
  return !o && t && (o = "".concat(e, "-").concat(t)), o;
}
function we(e, n) {
  var t = e["page".concat(n ? "Y" : "X", "Offset")], o = "scroll".concat(n ? "Top" : "Left");
  if (typeof t != "number") {
    var a = e.document;
    t = a.documentElement[o], typeof t != "number" && (t = a.body[o]);
  }
  return t;
}
function ot(e) {
  var n = e.getBoundingClientRect(), t = {
    left: n.left,
    top: n.top
  }, o = e.ownerDocument, a = o.defaultView || o.parentWindow;
  return t.left += we(a), t.top += we(a, !0), t;
}
const at = /* @__PURE__ */ l.memo(function(e) {
  var n = e.children;
  return n;
}, function(e, n) {
  var t = n.shouldUpdate;
  return !t;
});
var Pe = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}, rt = {
  outline: "none"
}, ve = /* @__PURE__ */ v.forwardRef(function(e, n) {
  var t = e.prefixCls, o = e.className, a = e.style, r = e.title, u = e.ariaId, d = e.footer, s = e.closable, c = e.closeIcon, i = e.onClose, f = e.children, b = e.bodyStyle, g = e.bodyProps, h = e.modalRender, C = e.onMouseDown, E = e.onMouseUp, p = e.holderRef, m = e.visible, y = e.forceRender, x = e.width, P = e.height, O = e.classNames, $ = e.styles, H = v.useContext(Qe), W = H.panel, q = hn(p, W), _ = V(), A = V(), j = V();
  v.useImperativeHandle(n, function() {
    return {
      focus: function() {
        var F;
        (F = j.current) === null || F === void 0 || F.focus();
      },
      changeActive: function(F) {
        var Z = document, ee = Z.activeElement;
        F && ee === A.current ? _.current.focus() : !F && ee === _.current && A.current.focus();
      }
    };
  });
  var T = {};
  x !== void 0 && (T.width = x), P !== void 0 && (T.height = P);
  var z;
  d && (z = /* @__PURE__ */ v.createElement("div", {
    className: w("".concat(t, "-footer"), O == null ? void 0 : O.footer),
    style: I({}, $ == null ? void 0 : $.footer)
  }, d));
  var L;
  r && (L = /* @__PURE__ */ v.createElement("div", {
    className: w("".concat(t, "-header"), O == null ? void 0 : O.header),
    style: I({}, $ == null ? void 0 : $.header)
  }, /* @__PURE__ */ v.createElement("div", {
    className: "".concat(t, "-title"),
    id: u
  }, r)));
  var G = Bn(function() {
    return Xn(s) === "object" && s !== null ? s : s ? {
      closeIcon: c ?? /* @__PURE__ */ v.createElement("span", {
        className: "".concat(t, "-close-x")
      })
    } : {};
  }, [s, c]), Q = Ce(G, !0), X;
  s && (X = /* @__PURE__ */ v.createElement("button", D({
    type: "button",
    onClick: i,
    "aria-label": "Close"
  }, Q, {
    className: "".concat(t, "-close")
  }), G.closeIcon));
  var R = /* @__PURE__ */ v.createElement("div", {
    className: w("".concat(t, "-content"), O == null ? void 0 : O.content),
    style: $ == null ? void 0 : $.content
  }, X, L, /* @__PURE__ */ v.createElement("div", D({
    className: w("".concat(t, "-body"), O == null ? void 0 : O.body),
    style: I(I({}, b), $ == null ? void 0 : $.body)
  }, g), f), z);
  return /* @__PURE__ */ v.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": r ? u : null,
    "aria-modal": "true",
    ref: q,
    style: I(I({}, a), T),
    className: w(t, o),
    onMouseDown: C,
    onMouseUp: E
  }, /* @__PURE__ */ v.createElement("div", {
    tabIndex: 0,
    ref: _,
    style: Pe,
    "aria-hidden": "true"
  }), /* @__PURE__ */ v.createElement("div", {
    ref: j,
    tabIndex: -1,
    style: rt
  }, /* @__PURE__ */ v.createElement(at, {
    shouldUpdate: m || y
  }, h ? h(R) : R)), /* @__PURE__ */ v.createElement("div", {
    tabIndex: 0,
    ref: A,
    style: Pe,
    "aria-hidden": "true"
  }));
});
process.env.NODE_ENV !== "production" && (ve.displayName = "Panel");
var Ze = /* @__PURE__ */ l.forwardRef(function(e, n) {
  var t = e.prefixCls, o = e.title, a = e.style, r = e.className, u = e.visible, d = e.forceRender, s = e.destroyOnClose, c = e.motionName, i = e.ariaId, f = e.onVisibleChanged, b = e.mousePosition, g = V(), h = l.useState(), C = ue(h, 2), E = C[0], p = C[1], m = {};
  E && (m.transformOrigin = E);
  function y() {
    var x = ot(g.current);
    p(b ? "".concat(b.x - x.left, "px ").concat(b.y - x.top, "px") : "");
  }
  return /* @__PURE__ */ l.createElement(De, {
    visible: u,
    onVisibleChanged: f,
    onAppearPrepare: y,
    onEnterPrepare: y,
    forceRender: d,
    motionName: c,
    removeOnLeave: s,
    ref: g
  }, function(x, P) {
    var O = x.className, $ = x.style;
    return /* @__PURE__ */ l.createElement(ve, D({}, e, {
      ref: n,
      title: o,
      ariaId: i,
      prefixCls: t,
      holderRef: P,
      style: I(I(I({}, $), a), m),
      className: w(r, O)
    }));
  });
});
Ze.displayName = "Content";
function lt(e) {
  var n = e.prefixCls, t = e.style, o = e.visible, a = e.maskProps, r = e.motionName, u = e.className;
  return /* @__PURE__ */ l.createElement(De, {
    key: "mask",
    visible: o,
    motionName: r,
    leavedClassName: "".concat(n, "-mask-hidden")
  }, function(d, s) {
    var c = d.className, i = d.style;
    return /* @__PURE__ */ l.createElement("div", D({
      ref: s,
      style: I(I({}, i), t),
      className: w("".concat(n, "-mask"), c, u)
    }, a));
  });
}
function it(e) {
  var n = e.prefixCls, t = n === void 0 ? "rc-dialog" : n, o = e.zIndex, a = e.visible, r = a === void 0 ? !1 : a, u = e.keyboard, d = u === void 0 ? !0 : u, s = e.focusTriggerAfterClose, c = s === void 0 ? !0 : s, i = e.wrapStyle, f = e.wrapClassName, b = e.wrapProps, g = e.onClose, h = e.afterOpenChange, C = e.afterClose, E = e.transitionName, p = e.animation, m = e.closable, y = m === void 0 ? !0 : m, x = e.mask, P = x === void 0 ? !0 : x, O = e.maskTransitionName, $ = e.maskAnimation, H = e.maskClosable, W = H === void 0 ? !0 : H, q = e.maskStyle, _ = e.maskProps, A = e.rootClassName, j = e.classNames, T = e.styles;
  process.env.NODE_ENV !== "production" && (["wrapStyle", "bodyStyle", "maskStyle"].forEach(function(N) {
    Ee(!(N in e), "".concat(N, " is deprecated, please use styles instead."));
  }), "wrapClassName" in e && Ee(!1, "wrapClassName is deprecated, please use classNames instead."));
  var z = V(), L = V(), G = V(), Q = l.useState(r), X = ue(Q, 2), R = X[0], M = X[1], F = zn();
  function Z() {
    $e(L.current, document.activeElement) || (z.current = document.activeElement);
  }
  function ee() {
    if (!$e(L.current, document.activeElement)) {
      var N;
      (N = G.current) === null || N === void 0 || N.focus();
    }
  }
  function Cn(N) {
    if (N)
      ee();
    else {
      if (M(!1), P && z.current && c) {
        try {
          z.current.focus({
            preventScroll: !0
          });
        } catch {
        }
        z.current = null;
      }
      R && (C == null || C());
    }
    h == null || h(N);
  }
  function ae(N) {
    g == null || g(N);
  }
  var ne = V(!1), re = V(), vn = function() {
    clearTimeout(re.current), ne.current = !0;
  }, bn = function() {
    re.current = setTimeout(function() {
      ne.current = !1;
    });
  }, pe = null;
  W && (pe = function(le) {
    ne.current ? ne.current = !1 : L.current === le.target && ae(le);
  });
  function pn(N) {
    if (d && N.keyCode === he.ESC) {
      N.stopPropagation(), ae(N);
      return;
    }
    r && N.keyCode === he.TAB && G.current.changeActive(!N.shiftKey);
  }
  return xe(function() {
    r && (M(!0), Z());
  }, [r]), xe(function() {
    return function() {
      clearTimeout(re.current);
    };
  }, []), /* @__PURE__ */ l.createElement("div", D({
    className: w("".concat(t, "-root"), A)
  }, Ce(e, {
    data: !0
  })), /* @__PURE__ */ l.createElement(lt, {
    prefixCls: t,
    visible: P && r,
    motionName: Se(t, O, $),
    style: I(I({
      zIndex: o
    }, q), T == null ? void 0 : T.mask),
    maskProps: _,
    className: j == null ? void 0 : j.mask
  }), /* @__PURE__ */ l.createElement("div", D({
    tabIndex: -1,
    onKeyDown: pn,
    className: w("".concat(t, "-wrap"), f, j == null ? void 0 : j.wrapper),
    ref: L,
    onClick: pe,
    style: I(I(I({
      zIndex: o
    }, i), T == null ? void 0 : T.wrapper), {}, {
      display: R ? null : "none"
    })
  }, b), /* @__PURE__ */ l.createElement(Ze, D({}, e, {
    onMouseDown: vn,
    onMouseUp: bn,
    ref: G,
    closable: y,
    ariaId: F,
    prefixCls: t,
    visible: r && R,
    onClose: ae,
    onVisibleChanged: Cn,
    motionName: Se(t, E, p)
  }))));
}
var Ye = function(n) {
  var t = n.visible, o = n.getContainer, a = n.forceRender, r = n.destroyOnClose, u = r === void 0 ? !1 : r, d = n.afterClose, s = n.panelRef, c = l.useState(t), i = ue(c, 2), f = i[0], b = i[1], g = l.useMemo(function() {
    return {
      panel: s
    };
  }, [s]);
  return l.useEffect(function() {
    t && b(!0);
  }, [t]), !a && u && !f ? null : /* @__PURE__ */ l.createElement(Qe.Provider, {
    value: g
  }, /* @__PURE__ */ l.createElement(Fn, {
    open: t || a || f,
    autoDestroy: !1,
    getContainer: o,
    autoLock: t || f
  }, /* @__PURE__ */ l.createElement(it, D({}, n, {
    destroyOnClose: u,
    afterClose: function() {
      d == null || d(), b(!1);
    }
  }))));
};
Ye.displayName = "Dialog";
function Ie(e) {
  if (e)
    return {
      closable: e.closable,
      closeIcon: e.closeIcon
    };
}
function Te(e) {
  const {
    closable: n,
    closeIcon: t
  } = e || {};
  return v.useMemo(() => {
    if (
      // If `closable`, whatever rest be should be true
      !n && (n === !1 || t === !1 || t === null)
    )
      return !1;
    if (n === void 0 && t === void 0)
      return null;
    let o = {
      closeIcon: typeof t != "boolean" && t !== null ? t : void 0
    };
    return n && typeof n == "object" && (o = Object.assign(Object.assign({}, o), n)), o;
  }, [n, t]);
}
function Re() {
  const e = {};
  for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++)
    t[o] = arguments[o];
  return t.forEach((a) => {
    a && Object.keys(a).forEach((r) => {
      a[r] !== void 0 && (e[r] = a[r]);
    });
  }), e;
}
const st = {};
function ct(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : st;
  const o = Te(e), a = Te(n), r = v.useMemo(() => Object.assign({
    closeIcon: /* @__PURE__ */ v.createElement(ge, null)
  }, t), [t]), u = v.useMemo(() => o === !1 ? !1 : o ? Re(r, a, o) : a === !1 ? !1 : a ? Re(r, a) : r.closable ? r : !1, [o, a, r]);
  return v.useMemo(() => {
    if (u === !1)
      return [!1, null];
    const {
      closeIconRender: d
    } = r, {
      closeIcon: s
    } = u;
    let c = s;
    if (c != null) {
      d && (c = d(s));
      const i = Ce(u, !0);
      Object.keys(i).length && (c = /* @__PURE__ */ v.isValidElement(c) ? /* @__PURE__ */ v.cloneElement(c, i) : /* @__PURE__ */ v.createElement("span", Object.assign({}, i), c));
    }
    return [!0, c];
  }, [u, r]);
}
const dt = () => Kn() && window.document.documentElement;
function Me() {
}
const ut = /* @__PURE__ */ l.createContext({
  add: Me,
  remove: Me
});
function ft(e) {
  const n = l.useContext(ut), t = l.useRef();
  return En((a) => {
    if (a) {
      const r = e ? a.querySelector(e) : a;
      n.add(r), t.current = r;
    } else
      n.remove(t.current);
  });
}
const je = () => {
  const {
    cancelButtonProps: e,
    cancelTextLocale: n,
    onCancel: t
  } = Y(k);
  return /* @__PURE__ */ v.createElement(me, Object.assign({
    onClick: t
  }, e), n);
}, Be = () => {
  const {
    confirmLoading: e,
    okButtonProps: n,
    okType: t,
    okTextLocale: o,
    onOk: a
  } = Y(k);
  return /* @__PURE__ */ v.createElement(me, Object.assign({}, We(t), {
    loading: e,
    onClick: a
  }, n), o);
};
function ke(e, n) {
  return /* @__PURE__ */ v.createElement("span", {
    className: `${e}-close-x`
  }, n || /* @__PURE__ */ v.createElement(ge, {
    className: `${e}-close-icon`
  }));
}
const Je = (e) => {
  const {
    okText: n,
    okType: t = "primary",
    cancelText: o,
    confirmLoading: a,
    onOk: r,
    onCancel: u,
    okButtonProps: d,
    cancelButtonProps: s,
    footer: c
  } = e, [i] = de("Modal", _e()), f = n || (i == null ? void 0 : i.okText), b = o || (i == null ? void 0 : i.cancelText), g = {
    confirmLoading: a,
    okButtonProps: d,
    cancelButtonProps: s,
    okTextLocale: f,
    cancelTextLocale: b,
    okType: t,
    onOk: r,
    onCancel: u
  }, h = v.useMemo(() => g, U(Object.values(g)));
  let C;
  return typeof c == "function" || typeof c > "u" ? (C = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(je, null), /* @__PURE__ */ v.createElement(Be, null)), typeof c == "function" && (C = c(C, {
    OkBtn: Be,
    CancelBtn: je
  })), C = /* @__PURE__ */ v.createElement(Ke, {
    value: h
  }, C)) : C = c, /* @__PURE__ */ v.createElement($n, {
    disabled: !1
  }, C);
}, mt = new He("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), gt = new He("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), Ct = function(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const {
    antCls: t
  } = e, o = `${t}-fade`, a = n ? "&" : "";
  return [Dn(o, mt, gt, e.motionDurationMid, n), {
    [`
        ${a}${o}-enter,
        ${a}${o}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${a}${o}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
};
function ze(e) {
  return {
    position: e,
    inset: 0
  };
}
const vt = (e) => {
  const {
    componentCls: n,
    antCls: t
  } = e;
  return [{
    [`${n}-root`]: {
      [`${n}${t}-zoom-enter, ${n}${t}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: e.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      // https://github.com/ant-design/ant-design/issues/37329
      // https://github.com/ant-design/ant-design/issues/40272
      [`${n}${t}-zoom-leave ${n}-content`]: {
        pointerEvents: "none"
      },
      [`${n}-mask`]: Object.assign(Object.assign({}, ze("fixed")), {
        zIndex: e.zIndexPopupBase,
        height: "100%",
        backgroundColor: e.colorBgMask,
        pointerEvents: "none",
        [`${n}-hidden`]: {
          display: "none"
        }
      }),
      [`${n}-wrap`]: Object.assign(Object.assign({}, ze("fixed")), {
        zIndex: e.zIndexPopupBase,
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${n}-root`]: Ct(e)
  }];
}, bt = (e) => {
  const {
    componentCls: n
  } = e;
  return [
    // ======================== Root =========================
    {
      [`${n}-root`]: {
        [`${n}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${n}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [n]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${e.screenSMMax}px)`]: {
          [n]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${S(e.marginXS)} auto`
          },
          [`${n}-centered`]: {
            [n]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [n]: Object.assign(Object.assign({}, Nn(e)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${S(e.calc(e.margin).mul(2).equal())})`,
        margin: "0 auto",
        paddingBottom: e.paddingLG,
        [`${n}-title`]: {
          margin: 0,
          color: e.titleColor,
          fontWeight: e.fontWeightStrong,
          fontSize: e.titleFontSize,
          lineHeight: e.titleLineHeight,
          wordWrap: "break-word"
        },
        [`${n}-content`]: {
          position: "relative",
          backgroundColor: e.contentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: e.borderRadiusLG,
          boxShadow: e.boxShadow,
          pointerEvents: "auto",
          padding: e.contentPadding
        },
        [`${n}-close`]: Object.assign({
          position: "absolute",
          top: e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),
          insetInlineEnd: e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),
          zIndex: e.calc(e.zIndexPopupBase).add(10).equal(),
          padding: 0,
          color: e.modalCloseIconColor,
          fontWeight: e.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: e.borderRadiusSM,
          width: e.modalCloseBtnSize,
          height: e.modalCloseBtnSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
          "&-x": {
            display: "flex",
            fontSize: e.fontSizeLG,
            fontStyle: "normal",
            lineHeight: `${S(e.modalCloseBtnSize)}`,
            justifyContent: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:hover": {
            color: e.modalCloseIconHoverColor,
            backgroundColor: e.colorBgTextHover,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: e.colorBgTextActive
          }
        }, Sn(e)),
        [`${n}-header`]: {
          color: e.colorText,
          background: e.headerBg,
          borderRadius: `${S(e.borderRadiusLG)} ${S(e.borderRadiusLG)} 0 0`,
          marginBottom: e.headerMarginBottom,
          padding: e.headerPadding,
          borderBottom: e.headerBorderBottom
        },
        [`${n}-body`]: {
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          wordWrap: "break-word",
          padding: e.bodyPadding
        },
        [`${n}-footer`]: {
          textAlign: "end",
          background: e.footerBg,
          marginTop: e.footerMarginTop,
          padding: e.footerPadding,
          borderTop: e.footerBorderTop,
          borderRadius: e.footerBorderRadius,
          [`> ${e.antCls}-btn + ${e.antCls}-btn`]: {
            marginInlineStart: e.marginXS
          }
        },
        [`${n}-open`]: {
          overflow: "hidden"
        }
      })
    },
    // ======================== Pure =========================
    {
      [`${n}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${n}-content,
          ${n}-body,
          ${n}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${n}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
}, pt = (e) => {
  const {
    componentCls: n
  } = e;
  return {
    [`${n}-root`]: {
      [`${n}-wrap-rtl`]: {
        direction: "rtl",
        [`${n}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
}, en = (e) => {
  const n = e.padding, t = e.fontSizeHeading5, o = e.lineHeightHeading5;
  return wn(e, {
    modalHeaderHeight: e.calc(e.calc(o).mul(t).equal()).add(e.calc(n).mul(2).equal()).equal(),
    modalFooterBorderColorSplit: e.colorSplit,
    modalFooterBorderStyle: e.lineType,
    modalFooterBorderWidth: e.lineWidth,
    modalCloseIconColor: e.colorIcon,
    modalCloseIconHoverColor: e.colorIconHover,
    modalCloseBtnSize: e.controlHeight,
    modalConfirmIconSize: e.fontHeight,
    modalTitleHeight: e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()
  });
}, nn = (e) => ({
  footerBg: "transparent",
  headerBg: e.colorBgElevated,
  titleLineHeight: e.lineHeightHeading5,
  titleFontSize: e.fontSizeHeading5,
  contentBg: e.colorBgElevated,
  titleColor: e.colorTextHeading,
  // internal
  contentPadding: e.wireframe ? 0 : `${S(e.paddingMD)} ${S(e.paddingContentHorizontalLG)}`,
  headerPadding: e.wireframe ? `${S(e.padding)} ${S(e.paddingLG)}` : 0,
  headerBorderBottom: e.wireframe ? `${S(e.lineWidth)} ${e.lineType} ${e.colorSplit}` : "none",
  headerMarginBottom: e.wireframe ? 0 : e.marginXS,
  bodyPadding: e.wireframe ? e.paddingLG : 0,
  footerPadding: e.wireframe ? `${S(e.paddingXS)} ${S(e.padding)}` : 0,
  footerBorderTop: e.wireframe ? `${S(e.lineWidth)} ${e.lineType} ${e.colorSplit}` : "none",
  footerBorderRadius: e.wireframe ? `0 0 ${S(e.borderRadiusLG)} ${S(e.borderRadiusLG)}` : 0,
  footerMarginTop: e.wireframe ? 0 : e.marginSM,
  confirmBodyPadding: e.wireframe ? `${S(e.padding * 2)} ${S(e.padding * 2)} ${S(e.paddingLG)}` : 0,
  confirmIconMarginInlineEnd: e.wireframe ? e.margin : e.marginSM,
  confirmBtnsMarginTop: e.wireframe ? e.marginLG : e.marginSM
}), tn = On("Modal", (e) => {
  const n = en(e);
  return [bt(n), pt(n), vt(n), _n(n, "zoom")];
}, nn, {
  unitless: {
    titleLineHeight: !0
  }
});
var yt = function(e, n) {
  var t = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      n.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (t[o[a]] = e[o[a]]);
  return t;
};
let se;
const xt = (e) => {
  se = {
    x: e.pageX,
    y: e.pageY
  }, setTimeout(() => {
    se = null;
  }, 100);
};
dt() && document.documentElement.addEventListener("click", xt, !0);
const on = (e) => {
  var n;
  const {
    getPopupContainer: t,
    getPrefixCls: o,
    direction: a,
    modal: r
  } = l.useContext(oe), u = (R) => {
    const {
      onCancel: M
    } = e;
    M == null || M(R);
  }, d = (R) => {
    const {
      onOk: M
    } = e;
    M == null || M(R);
  };
  if (process.env.NODE_ENV !== "production") {
    const R = ce("Modal");
    [["visible", "open"], ["bodyStyle", "styles.body"], ["maskStyle", "styles.mask"]].forEach((M) => {
      let [F, Z] = M;
      R.deprecated(!(F in e), F, Z);
    });
  }
  const {
    prefixCls: s,
    className: c,
    rootClassName: i,
    open: f,
    wrapClassName: b,
    centered: g,
    getContainer: h,
    focusTriggerAfterClose: C = !0,
    style: E,
    // Deprecated
    visible: p,
    width: m = 520,
    footer: y,
    classNames: x,
    styles: P
  } = e, O = yt(e, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "focusTriggerAfterClose", "style", "visible", "width", "footer", "classNames", "styles"]), $ = o("modal", s), H = o(), W = Ve($), [q, _, A] = tn($, W), j = w(b, {
    [`${$}-centered`]: !!g,
    [`${$}-wrap-rtl`]: a === "rtl"
  }), T = y !== null && /* @__PURE__ */ l.createElement(Je, Object.assign({}, e, {
    onOk: d,
    onCancel: u
  })), [z, L] = ct(Ie(e), Ie(r), {
    closable: !0,
    closeIcon: /* @__PURE__ */ l.createElement(ge, {
      className: `${$}-close-icon`
    }),
    closeIconRender: (R) => ke($, R)
  }), G = ft(`.${$}-content`), [Q, X] = Hn("Modal", O.zIndex);
  return q(/* @__PURE__ */ l.createElement(An, null, /* @__PURE__ */ l.createElement(Ln, {
    status: !0,
    override: !0
  }, /* @__PURE__ */ l.createElement(Vn.Provider, {
    value: X
  }, /* @__PURE__ */ l.createElement(Ye, Object.assign({
    width: m
  }, O, {
    zIndex: Q,
    getContainer: h === void 0 ? t : h,
    prefixCls: $,
    rootClassName: w(_, i, A, W),
    footer: T,
    visible: f ?? p,
    mousePosition: (n = O.mousePosition) !== null && n !== void 0 ? n : se,
    onClose: u,
    closable: z,
    closeIcon: L,
    focusTriggerAfterClose: C,
    transitionName: te(H, "zoom", e.transitionName),
    maskTransitionName: te(H, "fade", e.maskTransitionName),
    className: w(_, c, r == null ? void 0 : r.className),
    style: Object.assign(Object.assign({}, r == null ? void 0 : r.style), E),
    classNames: Object.assign(Object.assign(Object.assign({}, r == null ? void 0 : r.classNames), x), {
      wrapper: w(j, x == null ? void 0 : x.wrapper)
    }),
    styles: Object.assign(Object.assign({}, r == null ? void 0 : r.styles), P),
    panelRef: G
  }))))));
}, ht = (e) => {
  const {
    componentCls: n,
    titleFontSize: t,
    titleLineHeight: o,
    modalConfirmIconSize: a,
    fontSize: r,
    lineHeight: u,
    modalTitleHeight: d,
    fontHeight: s,
    confirmBodyPadding: c
  } = e, i = `${n}-confirm`;
  return {
    [i]: {
      "&-rtl": {
        direction: "rtl"
      },
      [`${e.antCls}-modal-header`]: {
        display: "none"
      },
      [`${i}-body-wrapper`]: Object.assign({}, In()),
      [`&${n} ${n}-body`]: {
        padding: c
      },
      // ====================== Body ======================
      [`${i}-body`]: {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "start",
        [`> ${e.iconCls}`]: {
          flex: "none",
          fontSize: a,
          marginInlineEnd: e.confirmIconMarginInlineEnd,
          marginTop: e.calc(e.calc(s).sub(a).equal()).div(2).equal()
        },
        [`&-has-title > ${e.iconCls}`]: {
          marginTop: e.calc(e.calc(d).sub(a).equal()).div(2).equal()
        }
      },
      [`${i}-paragraph`]: {
        display: "flex",
        flexDirection: "column",
        flex: "auto",
        rowGap: e.marginXS
      },
      // https://github.com/ant-design/ant-design/issues/48159
      [`${e.iconCls} + ${i}-paragraph`]: {
        maxWidth: `calc(100% - ${S(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`
      },
      [`${i}-title`]: {
        color: e.colorTextHeading,
        fontWeight: e.fontWeightStrong,
        fontSize: t,
        lineHeight: o
      },
      [`${i}-content`]: {
        color: e.colorText,
        fontSize: r,
        lineHeight: u
      },
      // ===================== Footer =====================
      [`${i}-btns`]: {
        textAlign: "end",
        marginTop: e.confirmBtnsMarginTop,
        [`${e.antCls}-btn + ${e.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: e.marginXS
        }
      }
    },
    [`${i}-error ${i}-body > ${e.iconCls}`]: {
      color: e.colorError
    },
    [`${i}-warning ${i}-body > ${e.iconCls},
        ${i}-confirm ${i}-body > ${e.iconCls}`]: {
      color: e.colorWarning
    },
    [`${i}-info ${i}-body > ${e.iconCls}`]: {
      color: e.colorInfo
    },
    [`${i}-success ${i}-body > ${e.iconCls}`]: {
      color: e.colorSuccess
    }
  };
}, Et = Pn(["Modal", "confirm"], (e) => {
  const n = en(e);
  return [ht(n)];
}, nn, {
  // confirm is weak than modal since no conflict here
  order: -1e3
});
var $t = function(e, n) {
  var t = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      n.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (t[o[a]] = e[o[a]]);
  return t;
};
function an(e) {
  const {
    prefixCls: n,
    icon: t,
    okText: o,
    cancelText: a,
    confirmPrefixCls: r,
    type: u,
    okCancel: d,
    footer: s,
    // Legacy for static function usage
    locale: c
  } = e, i = $t(e, ["prefixCls", "icon", "okText", "cancelText", "confirmPrefixCls", "type", "okCancel", "footer", "locale"]);
  if (process.env.NODE_ENV !== "production") {
    const $ = ce("Modal");
    process.env.NODE_ENV !== "production" && $(!(typeof t == "string" && t.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${t}\` at https://ant.design/components/icon`);
  }
  let f = t;
  if (!t && t !== null)
    switch (u) {
      case "info":
        f = /* @__PURE__ */ l.createElement(Ue, null);
        break;
      case "success":
        f = /* @__PURE__ */ l.createElement(qe, null);
        break;
      case "error":
        f = /* @__PURE__ */ l.createElement(Wn, null);
        break;
      default:
        f = /* @__PURE__ */ l.createElement(Ge, null);
    }
  const b = d ?? u === "confirm", g = e.autoFocusButton === null ? !1 : e.autoFocusButton || "ok", [h] = de("Modal"), C = c || h, E = o || (b ? C == null ? void 0 : C.okText : C == null ? void 0 : C.justOkText), p = a || (C == null ? void 0 : C.cancelText), m = Object.assign({
    autoFocusButton: g,
    cancelTextLocale: p,
    okTextLocale: E,
    mergedOkCancel: b
  }, i), y = l.useMemo(() => m, U(Object.values(m))), x = /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(Oe, null), /* @__PURE__ */ l.createElement(Ne, null)), P = e.title !== void 0 && e.title !== null, O = `${r}-body`;
  return /* @__PURE__ */ l.createElement("div", {
    className: `${r}-body-wrapper`
  }, /* @__PURE__ */ l.createElement("div", {
    className: w(O, {
      [`${O}-has-title`]: P
    })
  }, f, /* @__PURE__ */ l.createElement("div", {
    className: `${r}-paragraph`
  }, P && /* @__PURE__ */ l.createElement("span", {
    className: `${r}-title`
  }, e.title), /* @__PURE__ */ l.createElement("div", {
    className: `${r}-content`
  }, e.content))), s === void 0 || typeof s == "function" ? /* @__PURE__ */ l.createElement(Ke, {
    value: y
  }, /* @__PURE__ */ l.createElement("div", {
    className: `${r}-btns`
  }, typeof s == "function" ? s(x, {
    OkBtn: Ne,
    CancelBtn: Oe
  }) : x)) : s, /* @__PURE__ */ l.createElement(Et, {
    prefixCls: n
  }));
}
const rn = (e) => {
  const {
    close: n,
    zIndex: t,
    afterClose: o,
    open: a,
    keyboard: r,
    centered: u,
    getContainer: d,
    maskStyle: s,
    direction: c,
    prefixCls: i,
    wrapClassName: f,
    rootPrefixCls: b,
    bodyStyle: g,
    closable: h = !1,
    closeIcon: C,
    modalRender: E,
    focusTriggerAfterClose: p,
    onConfirm: m,
    styles: y
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const A = ce("Modal");
    [["visible", "open"], ["bodyStyle", "styles.body"], ["maskStyle", "styles.mask"]].forEach((j) => {
      let [T, z] = j;
      A.deprecated(!(T in e), T, z);
    });
  }
  const x = `${i}-confirm`, P = e.width || 416, O = e.style || {}, $ = e.mask === void 0 ? !0 : e.mask, H = e.maskClosable === void 0 ? !1 : e.maskClosable, W = w(x, `${x}-${e.type}`, {
    [`${x}-rtl`]: c === "rtl"
  }, e.className), [, q] = Tn(), _ = l.useMemo(() => t !== void 0 ? t : q.zIndexPopupBase + qn, [t, q]);
  return /* @__PURE__ */ l.createElement(on, {
    prefixCls: i,
    className: W,
    wrapClassName: w({
      [`${x}-centered`]: !!e.centered
    }, f),
    onCancel: () => {
      n == null || n({
        triggerCancel: !0
      }), m == null || m(!1);
    },
    open: a,
    title: "",
    footer: null,
    transitionName: te(b || "", "zoom", e.transitionName),
    maskTransitionName: te(b || "", "fade", e.maskTransitionName),
    mask: $,
    maskClosable: H,
    style: O,
    styles: Object.assign({
      body: g,
      mask: s
    }, y),
    width: P,
    zIndex: _,
    afterClose: o,
    keyboard: r,
    centered: u,
    getContainer: d,
    closable: h,
    closeIcon: C,
    modalRender: E,
    focusTriggerAfterClose: p
  }, /* @__PURE__ */ l.createElement(an, Object.assign({}, e, {
    confirmPrefixCls: x
  })));
}, be = (e) => {
  const {
    rootPrefixCls: n,
    iconPrefixCls: t,
    direction: o,
    theme: a
  } = e;
  return /* @__PURE__ */ l.createElement(Ae, {
    prefixCls: n,
    iconPrefixCls: t,
    direction: o,
    theme: a
  }, /* @__PURE__ */ l.createElement(rn, Object.assign({}, e)));
};
process.env.NODE_ENV !== "production" && (rn.displayName = "ConfirmDialog", be.displayName = "ConfirmDialogWrapper");
const K = [];
let ln = "";
function sn() {
  return ln;
}
const Ot = (e) => {
  var n, t;
  const {
    prefixCls: o,
    getContainer: a,
    direction: r
  } = e, u = _e(), d = Y(oe), s = sn() || d.getPrefixCls(), c = o || `${s}-modal`;
  let i = a;
  return i === !1 && (i = void 0, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && Le(!1, "Modal", "Static method not support `getContainer` to be `false` since it do not have context env.")), /* @__PURE__ */ v.createElement(be, Object.assign({}, e, {
    rootPrefixCls: s,
    prefixCls: c,
    iconPrefixCls: d.iconPrefixCls,
    theme: d.theme,
    direction: r ?? d.direction,
    locale: (t = (n = d.locale) === null || n === void 0 ? void 0 : n.Modal) !== null && t !== void 0 ? t : u,
    getContainer: i
  }));
};
function J(e) {
  const n = Rn();
  process.env.NODE_ENV !== "production" && !n.holderRender && Mn("Modal");
  const t = document.createDocumentFragment();
  let o = Object.assign(Object.assign({}, e), {
    close: d,
    open: !0
  }), a;
  function r() {
    for (var c = arguments.length, i = new Array(c), f = 0; f < c; f++)
      i[f] = arguments[f];
    const b = i.some((g) => g && g.triggerCancel);
    e.onCancel && b && e.onCancel.apply(e, [() => {
    }].concat(U(i.slice(1))));
    for (let g = 0; g < K.length; g++)
      if (K[g] === d) {
        K.splice(g, 1);
        break;
      }
    Gn(t);
  }
  function u(c) {
    clearTimeout(a), a = setTimeout(() => {
      const i = n.getPrefixCls(void 0, sn()), f = n.getIconPrefixCls(), b = n.getTheme(), g = /* @__PURE__ */ v.createElement(Ot, Object.assign({}, c));
      Un(/* @__PURE__ */ v.createElement(Ae, {
        prefixCls: i,
        iconPrefixCls: f,
        theme: b
      }, n.holderRender ? n.holderRender(g) : g), t);
    });
  }
  function d() {
    for (var c = arguments.length, i = new Array(c), f = 0; f < c; f++)
      i[f] = arguments[f];
    o = Object.assign(Object.assign({}, o), {
      open: !1,
      afterClose: () => {
        typeof e.afterClose == "function" && e.afterClose(), r.apply(this, i);
      }
    }), o.visible && delete o.visible, u(o);
  }
  function s(c) {
    typeof c == "function" ? o = c(o) : o = Object.assign(Object.assign({}, o), c), u(o);
  }
  return u(o), K.push(d), {
    destroy: d,
    update: s
  };
}
function cn(e) {
  return Object.assign(Object.assign({}, e), {
    type: "warning"
  });
}
function dn(e) {
  return Object.assign(Object.assign({}, e), {
    type: "info"
  });
}
function un(e) {
  return Object.assign(Object.assign({}, e), {
    type: "success"
  });
}
function fn(e) {
  return Object.assign(Object.assign({}, e), {
    type: "error"
  });
}
function mn(e) {
  return Object.assign(Object.assign({}, e), {
    type: "confirm"
  });
}
function Nt(e) {
  let {
    rootPrefixCls: n
  } = e;
  process.env.NODE_ENV !== "production" && Le(!1, "Modal", "Modal.config is deprecated. Please use ConfigProvider.config instead."), ln = n;
}
var St = function(e, n) {
  var t = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      n.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (t[o[a]] = e[o[a]]);
  return t;
};
const wt = (e, n) => {
  var t, {
    afterClose: o,
    config: a
  } = e, r = St(e, ["afterClose", "config"]);
  const [u, d] = l.useState(!0), [s, c] = l.useState(a), {
    direction: i,
    getPrefixCls: f
  } = l.useContext(oe), b = f("modal"), g = f(), h = () => {
    var m;
    o(), (m = s.afterClose) === null || m === void 0 || m.call(s);
  }, C = function() {
    d(!1);
    for (var m = arguments.length, y = new Array(m), x = 0; x < m; x++)
      y[x] = arguments[x];
    const P = y.some((O) => O && O.triggerCancel);
    s.onCancel && P && s.onCancel.apply(s, [() => {
    }].concat(U(y.slice(1))));
  };
  l.useImperativeHandle(n, () => ({
    destroy: C,
    update: (m) => {
      c((y) => Object.assign(Object.assign({}, y), m));
    }
  }));
  const E = (t = s.okCancel) !== null && t !== void 0 ? t : s.type === "confirm", [p] = de("Modal", jn.Modal);
  return /* @__PURE__ */ l.createElement(be, Object.assign({
    prefixCls: b,
    rootPrefixCls: g
  }, s, {
    close: C,
    open: u,
    afterClose: h,
    okText: s.okText || (E ? p == null ? void 0 : p.okText : p == null ? void 0 : p.justOkText),
    direction: s.direction || i,
    cancelText: s.cancelText || (p == null ? void 0 : p.cancelText)
  }, r));
}, Pt = /* @__PURE__ */ l.forwardRef(wt);
let Fe = 0;
const It = /* @__PURE__ */ l.memo(/* @__PURE__ */ l.forwardRef((e, n) => {
  const [t, o] = tt();
  return l.useImperativeHandle(n, () => ({
    patchElement: o
  }), []), /* @__PURE__ */ l.createElement(l.Fragment, null, t);
}));
function Tt() {
  const e = l.useRef(null), [n, t] = l.useState([]);
  l.useEffect(() => {
    n.length && (U(n).forEach((u) => {
      u();
    }), t([]));
  }, [n]);
  const o = l.useCallback((r) => function(d) {
    var s;
    Fe += 1;
    const c = /* @__PURE__ */ l.createRef();
    let i;
    const f = new Promise((E) => {
      i = E;
    });
    let b = !1, g;
    const h = /* @__PURE__ */ l.createElement(Pt, {
      key: `modal-${Fe}`,
      config: r(d),
      ref: c,
      afterClose: () => {
        g == null || g();
      },
      isSilent: () => b,
      onConfirm: (E) => {
        i(E);
      }
    });
    return g = (s = e.current) === null || s === void 0 ? void 0 : s.patchElement(h), g && K.push(g), {
      destroy: () => {
        function E() {
          var p;
          (p = c.current) === null || p === void 0 || p.destroy();
        }
        c.current ? E() : t((p) => [].concat(U(p), [E]));
      },
      update: (E) => {
        function p() {
          var m;
          (m = c.current) === null || m === void 0 || m.update(E);
        }
        c.current ? p() : t((m) => [].concat(U(m), [p]));
      },
      then: (E) => (b = !0, f.then(E))
    };
  }, []);
  return [l.useMemo(() => ({
    info: o(dn),
    success: o(un),
    error: o(fn),
    warning: o(cn),
    confirm: o(mn)
  }), []), /* @__PURE__ */ l.createElement(It, {
    key: "modal-holder",
    ref: e
  })];
}
var Rt = function(e, n) {
  var t = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      n.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (t[o[a]] = e[o[a]]);
  return t;
};
const Mt = (e) => {
  const {
    prefixCls: n,
    className: t,
    closeIcon: o,
    closable: a,
    type: r,
    title: u,
    children: d,
    footer: s
  } = e, c = Rt(e, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children", "footer"]), {
    getPrefixCls: i
  } = l.useContext(oe), f = i(), b = n || i("modal"), g = Ve(f), [h, C, E] = tn(b, g), p = `${b}-confirm`;
  let m = {};
  return r ? m = {
    closable: a ?? !1,
    title: "",
    footer: "",
    children: /* @__PURE__ */ l.createElement(an, Object.assign({}, e, {
      prefixCls: b,
      confirmPrefixCls: p,
      rootPrefixCls: f,
      content: d
    }))
  } : m = {
    closable: a ?? !0,
    title: u,
    footer: s !== null && /* @__PURE__ */ l.createElement(Je, Object.assign({}, e)),
    children: d
  }, h(/* @__PURE__ */ l.createElement(ve, Object.assign({
    prefixCls: b,
    className: w(C, `${b}-pure-panel`, r && p, r && `${p}-${r}`, t, E, g)
  }, c, {
    closeIcon: ke(b, o),
    closable: a
  }, m)));
}, jt = Qn(Mt);
function gn(e) {
  return J(cn(e));
}
const B = on;
B.useModal = Tt;
B.info = function(n) {
  return J(dn(n));
};
B.success = function(n) {
  return J(un(n));
};
B.error = function(n) {
  return J(fn(n));
};
B.warning = gn;
B.warn = gn;
B.confirm = function(n) {
  return J(mn(n));
};
B.destroyAll = function() {
  for (; K.length; ) {
    const n = K.pop();
    n && n();
  }
};
B.config = Nt;
B._InternalPanelDoNotUseOrYouWillBeFired = jt;
process.env.NODE_ENV !== "production" && (B.displayName = "Modal");
function qt(e) {
  const n = {
    open: e.open === void 0 ? !0 : e.open,
    onClose: e.onClose || (() => {
    }),
    collapse: e.collapse === void 0 ? !1 : e.collapse
  };
  return /* @__PURE__ */ ye(
    B,
    {
      title: "Notification Preferences",
      open: n.open,
      onCancel: () => {
        n.onClose();
      },
      footer: null,
      zIndex: 9999,
      children: /* @__PURE__ */ ye(yn, {})
    }
  );
}
export {
  qt as NotificationPreferencesPopup
};
