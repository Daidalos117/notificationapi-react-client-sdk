import * as u from "react";
import ae, { useContext as Cr, useRef as Be, useState as Hn, useMemo as pi, useEffect as It, createContext as Eo, forwardRef as tn, useImperativeHandle as ua, cloneElement as Co } from "react";
import { _ as D, b as Ae, i as kn, a as ze, e as ie, c as Y, k as Kt, u as hi, r as Un, w as We, h as N, d as ut, H as So, l as xo } from "./index3.js";
import { ag as Oo, ah as da, ai as fa, aa as er, ab as tr, aj as rn, s as va, ac as Rn, ak as $o, B as Oa, q as $a, t as tt, al as Ra, h as nn, am as Ro, an as Fo, a7 as Xt, d as ga, o as rr, a as dt, c as ma, ao as No, g as an, m as nr, _ as re, a0 as Le, a8 as Po, ap as _o, aq as yi, ar as Io, as as ve, at as hr, au as Pt, av as yt, aw as Fa, K as Je, ax as To, ay as qn, u as Re, r as pa, b as Mo, i as Ao, e as bt, j as Vo, x as Lo, D as bi } from "./colors.js";
import { I as ar, g as Gn } from "./AntdIcon.js";
function Tt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return ae.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(Tt(n)) : Oo.isFragment(n) && n.props ? r = r.concat(Tt(n.props.children, t)) : r.push(n));
  }), r;
}
var Kn = /* @__PURE__ */ u.createContext(null);
function jo(e) {
  var t = e.children, r = e.onBatchResize, n = u.useRef(0), a = u.useRef([]), i = u.useContext(Kn), o = u.useCallback(function(s, c, d) {
    n.current += 1;
    var l = n.current;
    a.current.push({
      size: s,
      element: c,
      data: d
    }), Promise.resolve().then(function() {
      l === n.current && (r == null || r(a.current), a.current = []);
    }), i == null || i(s, c, d);
  }, [r, i]);
  return /* @__PURE__ */ u.createElement(Kn.Provider, {
    value: o
  }, t);
}
var wi = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(a, i) {
      return a[0] === r ? (n = i, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(r) {
        var n = e(this.__entries__, r), a = this.__entries__[n];
        return a && a[1];
      }, t.prototype.set = function(r, n) {
        var a = e(this.__entries__, r);
        ~a ? this.__entries__[a][1] = n : this.__entries__.push([r, n]);
      }, t.prototype.delete = function(r) {
        var n = this.__entries__, a = e(n, r);
        ~a && n.splice(a, 1);
      }, t.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(r, n) {
        n === void 0 && (n = null);
        for (var a = 0, i = this.__entries__; a < i.length; a++) {
          var o = i[a];
          r.call(n, o[1], o[0]);
        }
      }, t;
    }()
  );
}(), Zn = typeof window < "u" && typeof document < "u" && window.document === document, Xr = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Do = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Xr) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), zo = 2;
function Wo(e, t) {
  var r = !1, n = !1, a = 0;
  function i() {
    r && (r = !1, e()), n && s();
  }
  function o() {
    Do(i);
  }
  function s() {
    var c = Date.now();
    if (r) {
      if (c - a < zo)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(o, t);
    a = c;
  }
  return s;
}
var Bo = 20, Ho = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], ko = typeof MutationObserver < "u", Uo = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Wo(this.refresh.bind(this), Bo);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var r = this.observers_, n = r.indexOf(t);
      ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return t.forEach(function(r) {
        return r.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Zn || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ko ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Zn || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, a = Ho.some(function(i) {
        return !!~n.indexOf(i);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Ei = function(e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var a = n[r];
    Object.defineProperty(e, a, {
      value: t[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Qt = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Xr;
}, Ci = on(0, 0, 0, 0);
function Qr(e) {
  return parseFloat(e) || 0;
}
function Na(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, a) {
    var i = e["border-" + a + "-width"];
    return n + Qr(i);
  }, 0);
}
function qo(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, a = t; n < a.length; n++) {
    var i = a[n], o = e["padding-" + i];
    r[i] = Qr(o);
  }
  return r;
}
function Go(e) {
  var t = e.getBBox();
  return on(0, 0, t.width, t.height);
}
function Ko(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return Ci;
  var n = Qt(e).getComputedStyle(e), a = qo(n), i = a.left + a.right, o = a.top + a.bottom, s = Qr(n.width), c = Qr(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + i) !== t && (s -= Na(n, "left", "right") + i), Math.round(c + o) !== r && (c -= Na(n, "top", "bottom") + o)), !Xo(e)) {
    var d = Math.round(s + i) - t, l = Math.round(c + o) - r;
    Math.abs(d) !== 1 && (s -= d), Math.abs(l) !== 1 && (c -= l);
  }
  return on(a.left, a.top, s, c);
}
var Zo = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Qt(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Qt(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Xo(e) {
  return e === Qt(e).document.documentElement;
}
function Qo(e) {
  return Zn ? Zo(e) ? Go(e) : Ko(e) : Ci;
}
function Yo(e) {
  var t = e.x, r = e.y, n = e.width, a = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, o = Object.create(i.prototype);
  return Ei(o, {
    x: t,
    y: r,
    width: n,
    height: a,
    top: r,
    right: t + n,
    bottom: a + r,
    left: t
  }), o;
}
function on(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var Jo = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = on(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Qo(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), es = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, r) {
      var n = Yo(r);
      Ei(this, { target: t, contentRect: n });
    }
    return e;
  }()
), ts = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new wi(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Qt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new Jo(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Qt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && t.activeObservations_.push(r);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, r = this.activeObservations_.map(function(n) {
          return new es(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Si = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new wi(), xi = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = Uo.getInstance(), n = new ts(t, r, this);
      Si.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  xi.prototype[e] = function() {
    var t;
    return (t = Si.get(this))[e].apply(t, arguments);
  };
});
var rs = function() {
  return typeof Xr.ResizeObserver < "u" ? Xr.ResizeObserver : xi;
}(), ct = /* @__PURE__ */ new Map();
function Oi(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = ct.get(n)) === null || r === void 0 || r.forEach(function(a) {
      return a(n);
    });
  });
}
var $i = new rs(Oi);
process.env.NODE_ENV;
process.env.NODE_ENV;
function ns(e, t) {
  ct.has(e) || (ct.set(e, /* @__PURE__ */ new Set()), $i.observe(e)), ct.get(e).add(t);
}
function as(e, t) {
  ct.has(e) && (ct.get(e).delete(t), ct.get(e).size || ($i.unobserve(e), ct.delete(e)));
}
var is = /* @__PURE__ */ function(e) {
  da(r, e);
  var t = fa(r);
  function r() {
    return tr(this, r), t.apply(this, arguments);
  }
  return er(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(u.Component);
function os(e, t) {
  var r = e.children, n = e.disabled, a = u.useRef(null), i = u.useRef(null), o = u.useContext(Kn), s = typeof r == "function", c = s ? r(a) : r, d = u.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), l = !s && /* @__PURE__ */ u.isValidElement(c) && rn(c), f = l ? c.ref : null, g = va(f, a), b = function() {
    var x;
    return Rn(a.current) || // Support `nativeElement` format
    (a.current && Ae(a.current) === "object" ? Rn((x = a.current) === null || x === void 0 ? void 0 : x.nativeElement) : null) || Rn(i.current);
  };
  u.useImperativeHandle(t, function() {
    return b();
  });
  var p = u.useRef(e);
  p.current = e;
  var h = u.useCallback(function(v) {
    var x = p.current, y = x.onResize, m = x.data, E = v.getBoundingClientRect(), R = E.width, $ = E.height, F = v.offsetWidth, P = v.offsetHeight, C = Math.floor(R), I = Math.floor($);
    if (d.current.width !== C || d.current.height !== I || d.current.offsetWidth !== F || d.current.offsetHeight !== P) {
      var M = {
        width: C,
        height: I,
        offsetWidth: F,
        offsetHeight: P
      };
      d.current = M;
      var A = F === Math.round(R) ? R : F, j = P === Math.round($) ? $ : P, T = D(D({}, M), {}, {
        offsetWidth: A,
        offsetHeight: j
      });
      o == null || o(T, v, m), y && Promise.resolve().then(function() {
        y(T, v);
      });
    }
  }, []);
  return u.useEffect(function() {
    var v = b();
    return v && !n && ns(v, h), function() {
      return as(v, h);
    };
  }, [a.current, n]), /* @__PURE__ */ u.createElement(is, {
    ref: i
  }, l ? /* @__PURE__ */ u.cloneElement(c, {
    ref: g
  }) : c);
}
var Ri = /* @__PURE__ */ u.forwardRef(os);
process.env.NODE_ENV !== "production" && (Ri.displayName = "SingleObserver");
var ss = "rc-observer-key";
function ls(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : Tt(r);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? kn(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && kn(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(a, i) {
    var o = (a == null ? void 0 : a.key) || "".concat(ss, "-").concat(i);
    return /* @__PURE__ */ u.createElement(Ri, ze({}, e, {
      key: o,
      ref: i === 0 ? t : void 0
    }), a);
  });
}
var ir = /* @__PURE__ */ u.forwardRef(ls);
process.env.NODE_ENV !== "production" && (ir.displayName = "ResizeObserver");
ir.Collection = jo;
function ha(e, t) {
  var r = D({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
const cs = (e, t) => {
  const r = u.useContext($o), n = u.useMemo(() => {
    var i;
    const o = t || Oa[e], s = (i = r == null ? void 0 : r[e]) !== null && i !== void 0 ? i : {};
    return Object.assign(Object.assign({}, typeof o == "function" ? o() : o), s || {});
  }, [e, t, r]), a = u.useMemo(() => {
    const i = r == null ? void 0 : r.locale;
    return r != null && r.exist && !i ? Oa.locale : i;
  }, [r]);
  return [n, a];
};
function Fn(e) {
  return e !== void 0;
}
function Yt(e, t) {
  var r = t || {}, n = r.defaultValue, a = r.value, i = r.onChange, o = r.postState, s = $a(function() {
    return Fn(a) ? a : Fn(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), c = ie(s, 2), d = c[0], l = c[1], f = a !== void 0 ? a : d, g = o ? o(f) : f, b = tt(i), p = $a([f]), h = ie(p, 2), v = h[0], x = h[1];
  Ra(function() {
    var m = v[0];
    d !== m && b(d, m);
  }, [v]), Ra(function() {
    Fn(a) || l(a);
  }, [a]);
  var y = tt(function(m, E) {
    l(m, E), x([f], E);
  });
  return [g, y];
}
const Fi = (e) => ({
  // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
  // And Typography use this to generate link style which should not do this.
  color: e.colorLink,
  textDecoration: "none",
  outline: "none",
  cursor: "pointer",
  transition: `color ${e.motionDurationSlow}`,
  "&:focus, &:hover": {
    color: e.colorLinkHover
  },
  "&:active": {
    color: e.colorLinkActive
  }
});
var us = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, ds = function(t, r) {
  return /* @__PURE__ */ u.createElement(ar, ze({}, t, {
    ref: r,
    icon: us
  }));
}, Ni = /* @__PURE__ */ u.forwardRef(ds);
process.env.NODE_ENV !== "production" && (Ni.displayName = "CloseCircleFilled");
const Pi = (e) => {
  const [, , , , t] = nn();
  return t ? `${e}-css-var` : "";
};
var K = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    var r = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    r >= K.F1 && r <= K.F12)
      return !1;
    switch (r) {
      case K.ALT:
      case K.CAPS_LOCK:
      case K.CONTEXT_MENU:
      case K.CTRL:
      case K.DOWN:
      case K.END:
      case K.ESC:
      case K.HOME:
      case K.INSERT:
      case K.LEFT:
      case K.MAC_FF_META:
      case K.META:
      case K.NUMLOCK:
      case K.NUM_CENTER:
      case K.PAGE_DOWN:
      case K.PAGE_UP:
      case K.PAUSE:
      case K.PRINT_SCREEN:
      case K.RIGHT:
      case K.SHIFT:
      case K.UP:
      case K.WIN_KEY:
      case K.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= K.ZERO && t <= K.NINE || t >= K.NUM_ZERO && t <= K.NUM_MULTIPLY || t >= K.A && t <= K.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case K.SPACE:
      case K.QUESTION_MARK:
      case K.NUM_PLUS:
      case K.NUM_MINUS:
      case K.NUM_PERIOD:
      case K.NUM_DIVISION:
      case K.SEMICOLON:
      case K.DASH:
      case K.EQUALS:
      case K.COMMA:
      case K.PERIOD:
      case K.SLASH:
      case K.APOSTROPHE:
      case K.SINGLE_QUOTE:
      case K.OPEN_SQUARE_BRACKET:
      case K.BACKSLASH:
      case K.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, fs = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, vs = function(t, r) {
  return /* @__PURE__ */ u.createElement(ar, ze({}, t, {
    ref: r,
    icon: fs
  }));
}, _i = /* @__PURE__ */ u.forwardRef(vs);
process.env.NODE_ENV !== "production" && (_i.displayName = "LoadingOutlined");
const ya = /* @__PURE__ */ ae.createContext(void 0);
process.env.NODE_ENV !== "production" && (ya.displayName = "zIndexContext");
const Nt = 100, gs = 10, ms = Nt * gs, Ii = {
  Modal: Nt,
  Drawer: Nt,
  Popover: Nt,
  Popconfirm: Nt,
  Tooltip: Nt,
  Tour: Nt
}, ps = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function hs(e) {
  return e in Ii;
}
function ys(e, t) {
  const [, r] = nn(), n = ae.useContext(ya), a = hs(e);
  if (t !== void 0)
    return [t, t];
  let i = n ?? 0;
  return a ? (i += // Use preset token zIndex by default but not stack when has parent container
  (n ? 0 : r.zIndexPopupBase) + // Container offset
  Ii[e], i = Math.min(i, r.zIndexPopupBase + ms)) : i += ps[e], [n === void 0 ? t : i, i];
}
function He() {
  He = function() {
    return t;
  };
  var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, a = Object.defineProperty || function(O, w, S) {
    O[w] = S.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, o = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function d(O, w, S) {
    return Object.defineProperty(O, w, {
      value: S,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), O[w];
  }
  try {
    d({}, "");
  } catch {
    d = function(S, V, _) {
      return S[V] = _;
    };
  }
  function l(O, w, S, V) {
    var _ = w && w.prototype instanceof x ? w : x, L = Object.create(_.prototype), W = new T(V || []);
    return a(L, "_invoke", {
      value: I(O, S, W)
    }), L;
  }
  function f(O, w, S) {
    try {
      return {
        type: "normal",
        arg: O.call(w, S)
      };
    } catch (V) {
      return {
        type: "throw",
        arg: V
      };
    }
  }
  t.wrap = l;
  var g = "suspendedStart", b = "suspendedYield", p = "executing", h = "completed", v = {};
  function x() {
  }
  function y() {
  }
  function m() {
  }
  var E = {};
  d(E, o, function() {
    return this;
  });
  var R = Object.getPrototypeOf, $ = R && R(R(z([])));
  $ && $ !== r && n.call($, o) && (E = $);
  var F = m.prototype = x.prototype = Object.create(E);
  function P(O) {
    ["next", "throw", "return"].forEach(function(w) {
      d(O, w, function(S) {
        return this._invoke(w, S);
      });
    });
  }
  function C(O, w) {
    function S(_, L, W, U) {
      var q = f(O[_], O, L);
      if (q.type !== "throw") {
        var G = q.arg, k = G.value;
        return k && Ae(k) == "object" && n.call(k, "__await") ? w.resolve(k.__await).then(function(oe) {
          S("next", oe, W, U);
        }, function(oe) {
          S("throw", oe, W, U);
        }) : w.resolve(k).then(function(oe) {
          G.value = oe, W(G);
        }, function(oe) {
          return S("throw", oe, W, U);
        });
      }
      U(q.arg);
    }
    var V;
    a(this, "_invoke", {
      value: function(L, W) {
        function U() {
          return new w(function(q, G) {
            S(L, W, q, G);
          });
        }
        return V = V ? V.then(U, U) : U();
      }
    });
  }
  function I(O, w, S) {
    var V = g;
    return function(_, L) {
      if (V === p)
        throw Error("Generator is already running");
      if (V === h) {
        if (_ === "throw")
          throw L;
        return {
          value: e,
          done: !0
        };
      }
      for (S.method = _, S.arg = L; ; ) {
        var W = S.delegate;
        if (W) {
          var U = M(W, S);
          if (U) {
            if (U === v)
              continue;
            return U;
          }
        }
        if (S.method === "next")
          S.sent = S._sent = S.arg;
        else if (S.method === "throw") {
          if (V === g)
            throw V = h, S.arg;
          S.dispatchException(S.arg);
        } else
          S.method === "return" && S.abrupt("return", S.arg);
        V = p;
        var q = f(O, w, S);
        if (q.type === "normal") {
          if (V = S.done ? h : b, q.arg === v)
            continue;
          return {
            value: q.arg,
            done: S.done
          };
        }
        q.type === "throw" && (V = h, S.method = "throw", S.arg = q.arg);
      }
    };
  }
  function M(O, w) {
    var S = w.method, V = O.iterator[S];
    if (V === e)
      return w.delegate = null, S === "throw" && O.iterator.return && (w.method = "return", w.arg = e, M(O, w), w.method === "throw") || S !== "return" && (w.method = "throw", w.arg = new TypeError("The iterator does not provide a '" + S + "' method")), v;
    var _ = f(V, O.iterator, w.arg);
    if (_.type === "throw")
      return w.method = "throw", w.arg = _.arg, w.delegate = null, v;
    var L = _.arg;
    return L ? L.done ? (w[O.resultName] = L.value, w.next = O.nextLoc, w.method !== "return" && (w.method = "next", w.arg = e), w.delegate = null, v) : L : (w.method = "throw", w.arg = new TypeError("iterator result is not an object"), w.delegate = null, v);
  }
  function A(O) {
    var w = {
      tryLoc: O[0]
    };
    1 in O && (w.catchLoc = O[1]), 2 in O && (w.finallyLoc = O[2], w.afterLoc = O[3]), this.tryEntries.push(w);
  }
  function j(O) {
    var w = O.completion || {};
    w.type = "normal", delete w.arg, O.completion = w;
  }
  function T(O) {
    this.tryEntries = [{
      tryLoc: "root"
    }], O.forEach(A, this), this.reset(!0);
  }
  function z(O) {
    if (O || O === "") {
      var w = O[o];
      if (w)
        return w.call(O);
      if (typeof O.next == "function")
        return O;
      if (!isNaN(O.length)) {
        var S = -1, V = function _() {
          for (; ++S < O.length; )
            if (n.call(O, S))
              return _.value = O[S], _.done = !1, _;
          return _.value = e, _.done = !0, _;
        };
        return V.next = V;
      }
    }
    throw new TypeError(Ae(O) + " is not iterable");
  }
  return y.prototype = m, a(F, "constructor", {
    value: m,
    configurable: !0
  }), a(m, "constructor", {
    value: y,
    configurable: !0
  }), y.displayName = d(m, c, "GeneratorFunction"), t.isGeneratorFunction = function(O) {
    var w = typeof O == "function" && O.constructor;
    return !!w && (w === y || (w.displayName || w.name) === "GeneratorFunction");
  }, t.mark = function(O) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(O, m) : (O.__proto__ = m, d(O, c, "GeneratorFunction")), O.prototype = Object.create(F), O;
  }, t.awrap = function(O) {
    return {
      __await: O
    };
  }, P(C.prototype), d(C.prototype, s, function() {
    return this;
  }), t.AsyncIterator = C, t.async = function(O, w, S, V, _) {
    _ === void 0 && (_ = Promise);
    var L = new C(l(O, w, S, V), _);
    return t.isGeneratorFunction(w) ? L : L.next().then(function(W) {
      return W.done ? W.value : L.next();
    });
  }, P(F), d(F, c, "Generator"), d(F, o, function() {
    return this;
  }), d(F, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(O) {
    var w = Object(O), S = [];
    for (var V in w)
      S.push(V);
    return S.reverse(), function _() {
      for (; S.length; ) {
        var L = S.pop();
        if (L in w)
          return _.value = L, _.done = !1, _;
      }
      return _.done = !0, _;
    };
  }, t.values = z, T.prototype = {
    constructor: T,
    reset: function(w) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(j), !w)
        for (var S in this)
          S.charAt(0) === "t" && n.call(this, S) && !isNaN(+S.slice(1)) && (this[S] = e);
    },
    stop: function() {
      this.done = !0;
      var w = this.tryEntries[0].completion;
      if (w.type === "throw")
        throw w.arg;
      return this.rval;
    },
    dispatchException: function(w) {
      if (this.done)
        throw w;
      var S = this;
      function V(G, k) {
        return W.type = "throw", W.arg = w, S.next = G, k && (S.method = "next", S.arg = e), !!k;
      }
      for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
        var L = this.tryEntries[_], W = L.completion;
        if (L.tryLoc === "root")
          return V("end");
        if (L.tryLoc <= this.prev) {
          var U = n.call(L, "catchLoc"), q = n.call(L, "finallyLoc");
          if (U && q) {
            if (this.prev < L.catchLoc)
              return V(L.catchLoc, !0);
            if (this.prev < L.finallyLoc)
              return V(L.finallyLoc);
          } else if (U) {
            if (this.prev < L.catchLoc)
              return V(L.catchLoc, !0);
          } else {
            if (!q)
              throw Error("try statement without catch or finally");
            if (this.prev < L.finallyLoc)
              return V(L.finallyLoc);
          }
        }
      }
    },
    abrupt: function(w, S) {
      for (var V = this.tryEntries.length - 1; V >= 0; --V) {
        var _ = this.tryEntries[V];
        if (_.tryLoc <= this.prev && n.call(_, "finallyLoc") && this.prev < _.finallyLoc) {
          var L = _;
          break;
        }
      }
      L && (w === "break" || w === "continue") && L.tryLoc <= S && S <= L.finallyLoc && (L = null);
      var W = L ? L.completion : {};
      return W.type = w, W.arg = S, L ? (this.method = "next", this.next = L.finallyLoc, v) : this.complete(W);
    },
    complete: function(w, S) {
      if (w.type === "throw")
        throw w.arg;
      return w.type === "break" || w.type === "continue" ? this.next = w.arg : w.type === "return" ? (this.rval = this.arg = w.arg, this.method = "return", this.next = "end") : w.type === "normal" && S && (this.next = S), v;
    },
    finish: function(w) {
      for (var S = this.tryEntries.length - 1; S >= 0; --S) {
        var V = this.tryEntries[S];
        if (V.finallyLoc === w)
          return this.complete(V.completion, V.afterLoc), j(V), v;
      }
    },
    catch: function(w) {
      for (var S = this.tryEntries.length - 1; S >= 0; --S) {
        var V = this.tryEntries[S];
        if (V.tryLoc === w) {
          var _ = V.completion;
          if (_.type === "throw") {
            var L = _.arg;
            j(V);
          }
          return L;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(w, S, V) {
      return this.delegate = {
        iterator: z(w),
        resultName: S,
        nextLoc: V
      }, this.method === "next" && (this.arg = e), v;
    }
  }, t;
}
function Pa(e, t, r, n, a, i, o) {
  try {
    var s = e[i](o), c = s.value;
  } catch (d) {
    return void r(d);
  }
  s.done ? t(c) : Promise.resolve(c).then(n, a);
}
function Mt(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, a) {
      var i = e.apply(t, r);
      function o(c) {
        Pa(i, n, a, o, s, "next", c);
      }
      function s(c) {
        Pa(i, n, a, o, s, "throw", c);
      }
      o(void 0);
    });
  };
}
var Sr = D({}, Ro), bs = Sr.version, ws = Sr.render, Es = Sr.unmountComponentAtNode, sn;
try {
  var Cs = Number((bs || "").split(".")[0]);
  Cs >= 18 && (sn = Sr.createRoot);
} catch {
}
function _a(e) {
  var t = Sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && Ae(t) === "object" && (t.usingClientEntryPoint = e);
}
var Yr = "__rc_react_root__";
function Ss(e, t) {
  _a(!0);
  var r = t[Yr] || sn(t);
  _a(!1), r.render(e), t[Yr] = r;
}
function xs(e, t) {
  ws(e, t);
}
function Os(e, t) {
  if (sn) {
    Ss(e, t);
    return;
  }
  xs(e, t);
}
function $s(e) {
  return Xn.apply(this, arguments);
}
function Xn() {
  return Xn = Mt(/* @__PURE__ */ He().mark(function e(t) {
    return He().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.resolve().then(function() {
              var a;
              (a = t[Yr]) === null || a === void 0 || a.unmount(), delete t[Yr];
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), Xn.apply(this, arguments);
}
function Rs(e) {
  Es(e);
}
function Fs(e) {
  return Qn.apply(this, arguments);
}
function Qn() {
  return Qn = Mt(/* @__PURE__ */ He().mark(function e(t) {
    return He().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            if (sn === void 0) {
              n.next = 2;
              break;
            }
            return n.abrupt("return", $s(t));
          case 2:
            Rs(t);
          case 3:
          case "end":
            return n.stop();
        }
    }, e);
  })), Qn.apply(this, arguments);
}
const Nn = () => ({
  height: 0,
  opacity: 0
}), Ia = (e) => {
  const {
    scrollHeight: t
  } = e;
  return {
    height: t,
    opacity: 1
  };
}, Ns = (e) => ({
  height: e ? e.offsetHeight : 0
}), Pn = (e, t) => (t == null ? void 0 : t.deadline) === !0 || t.propertyName === "height", Od = function() {
  return {
    motionName: `${arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant"}-motion-collapse`,
    onAppearStart: Nn,
    onEnterStart: Nn,
    onAppearActive: Ia,
    onEnterActive: Ia,
    onLeaveStart: Ns,
    onLeaveActive: Nn,
    onAppearEnd: Pn,
    onEnterEnd: Pn,
    onLeaveEnd: Pn,
    motionDeadline: 500
  };
}, Ps = (e, t, r) => r !== void 0 ? r : `${e}-${t}`, Ti = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), r = t.width, n = t.height;
      if (r || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var a = e.getBoundingClientRect(), i = a.width, o = a.height;
      if (i || o)
        return !0;
    }
  }
  return !1;
}, _s = (e) => {
  const {
    componentCls: t,
    colorPrimary: r
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${r})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`, `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, Is = Fo("Wave", (e) => [_s(e)]), Mi = "ant-wave-target";
function Ts(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function _n(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && Ts(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Ms(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return _n(t) ? t : _n(r) ? r : _n(n) ? n : null;
}
function In(e) {
  return Number.isNaN(e) ? 0 : e;
}
const As = (e) => {
  const {
    className: t,
    target: r,
    component: n
  } = e, a = u.useRef(null), [i, o] = u.useState(null), [s, c] = u.useState([]), [d, l] = u.useState(0), [f, g] = u.useState(0), [b, p] = u.useState(0), [h, v] = u.useState(0), [x, y] = u.useState(!1), m = {
    left: d,
    top: f,
    width: b,
    height: h,
    borderRadius: s.map(($) => `${$}px`).join(" ")
  };
  i && (m["--wave-color"] = i);
  function E() {
    const $ = getComputedStyle(r);
    o(Ms(r));
    const F = $.position === "static", {
      borderLeftWidth: P,
      borderTopWidth: C
    } = $;
    l(F ? r.offsetLeft : In(-parseFloat(P))), g(F ? r.offsetTop : In(-parseFloat(C))), p(r.offsetWidth), v(r.offsetHeight);
    const {
      borderTopLeftRadius: I,
      borderTopRightRadius: M,
      borderBottomLeftRadius: A,
      borderBottomRightRadius: j
    } = $;
    c([I, M, j, A].map((T) => In(parseFloat(T))));
  }
  if (u.useEffect(() => {
    if (r) {
      const $ = Xt(() => {
        E(), y(!0);
      });
      let F;
      return typeof ResizeObserver < "u" && (F = new ResizeObserver(E), F.observe(r)), () => {
        Xt.cancel($), F == null || F.disconnect();
      };
    }
  }, []), !x)
    return null;
  const R = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(Mi));
  return /* @__PURE__ */ u.createElement(ga, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: ($, F) => {
      var P;
      if (F.deadline || F.propertyName === "opacity") {
        const C = (P = a.current) === null || P === void 0 ? void 0 : P.parentElement;
        Fs(C).then(() => {
          C == null || C.remove();
        });
      }
      return !1;
    }
  }, ($, F) => {
    let {
      className: P
    } = $;
    return /* @__PURE__ */ u.createElement("div", {
      ref: rr(a, F),
      className: Y(t, {
        "wave-quick": R
      }, P),
      style: m
    });
  });
}, Vs = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const a = document.createElement("div");
  a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", e == null || e.insertBefore(a, e == null ? void 0 : e.firstChild), Os(/* @__PURE__ */ u.createElement(As, Object.assign({}, t, {
    target: e
  })), a);
}, Ls = (e, t, r) => {
  const {
    wave: n
  } = u.useContext(dt), [, a, i] = nn(), o = tt((d) => {
    const l = e.current;
    if (n != null && n.disabled || !l)
      return;
    const f = l.querySelector(`.${Mi}`) || l, {
      showEffect: g
    } = n || {};
    (g || Vs)(f, {
      className: t,
      token: a,
      component: r,
      event: d,
      hashId: i
    });
  }), s = u.useRef();
  return (d) => {
    Xt.cancel(s.current), s.current = Xt(() => {
      o(d);
    });
  };
}, js = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: a
  } = Cr(dt), i = Be(null), o = a("wave"), [, s] = Is(o), c = Ls(i, Y(o, s), n);
  if (ae.useEffect(() => {
    const l = i.current;
    if (!l || l.nodeType !== 1 || r)
      return;
    const f = (g) => {
      !Ti(g.target) || // No need wave
      !l.getAttribute || l.getAttribute("disabled") || l.disabled || l.className.includes("disabled") || l.className.includes("-leave") || c(g);
    };
    return l.addEventListener("click", f, !0), () => {
      l.removeEventListener("click", f, !0);
    };
  }, [r]), !/* @__PURE__ */ ae.isValidElement(t))
    return t ?? null;
  const d = rn(t) ? rr(t.ref, i) : i;
  return ma(t, {
    ref: d
  });
};
process.env.NODE_ENV !== "production" && (js.displayName = "Wave");
const ba = (e) => {
  const t = ae.useContext(No);
  return ae.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, Ds = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
}, zs = (e) => {
  const {
    componentCls: t,
    antCls: r
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${t}-item:empty`]: {
        display: "none"
      },
      // https://github.com/ant-design/ant-design/issues/47875
      [`${t}-item > ${r}-badge-not-a-wrapper:only-child`]: {
        display: "block"
      }
    }
  };
}, Ws = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      "&-gap-row-small": {
        rowGap: e.spaceGapSmallSize
      },
      "&-gap-row-middle": {
        rowGap: e.spaceGapMiddleSize
      },
      "&-gap-row-large": {
        rowGap: e.spaceGapLargeSize
      },
      "&-gap-col-small": {
        columnGap: e.spaceGapSmallSize
      },
      "&-gap-col-middle": {
        columnGap: e.spaceGapMiddleSize
      },
      "&-gap-col-large": {
        columnGap: e.spaceGapLargeSize
      }
    }
  };
}, Bs = an("Space", (e) => {
  const t = nr(e, {
    spaceGapSmallSize: e.paddingXS,
    spaceGapMiddleSize: e.padding,
    spaceGapLargeSize: e.paddingLG
  });
  return [zs(t), Ws(t), Ds(t)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: !1
});
var Ai = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const ln = /* @__PURE__ */ u.createContext(null), Hs = (e, t) => {
  const r = u.useContext(ln), n = u.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: a,
      isFirstItem: i,
      isLastItem: o
    } = r, s = a === "vertical" ? "-vertical-" : "-";
    return Y(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: i,
      [`${e}-compact${s}last-item`]: o,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, r]);
  return {
    compactSize: r == null ? void 0 : r.compactSize,
    compactDirection: r == null ? void 0 : r.compactDirection,
    compactItemClassnames: n
  };
}, Vi = (e) => {
  let {
    children: t
  } = e;
  return /* @__PURE__ */ u.createElement(ln.Provider, {
    value: null
  }, t);
}, ks = (e) => {
  var {
    children: t
  } = e, r = Ai(e, ["children"]);
  return /* @__PURE__ */ u.createElement(ln.Provider, {
    value: r
  }, t);
}, $d = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = u.useContext(dt), {
    size: n,
    direction: a,
    block: i,
    prefixCls: o,
    className: s,
    rootClassName: c,
    children: d
  } = e, l = Ai(e, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), f = ba((m) => n ?? m), g = t("space-compact", o), [b, p] = Bs(g), h = Y(g, p, {
    [`${g}-rtl`]: r === "rtl",
    [`${g}-block`]: i,
    [`${g}-vertical`]: a === "vertical"
  }, s, c), v = u.useContext(ln), x = Tt(d), y = u.useMemo(() => x.map((m, E) => {
    const R = m && m.key || `${g}-item-${E}`;
    return /* @__PURE__ */ u.createElement(ks, {
      key: R,
      compactSize: f,
      compactDirection: a,
      isFirstItem: E === 0 && (!v || (v == null ? void 0 : v.isFirstItem)),
      isLastItem: E === x.length - 1 && (!v || (v == null ? void 0 : v.isLastItem))
    }, m);
  }), [n, x, v]);
  return x.length === 0 ? null : b(/* @__PURE__ */ u.createElement("div", Object.assign({
    className: h
  }, l), y));
};
function Us(e, t, r) {
  const {
    focusElCls: n,
    focus: a,
    borderElCls: i
  } = r, o = i ? "> *" : "", s = ["hover", a ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${o}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [s]: {
        zIndex: 2
      }
    }, n ? {
      [`&${n}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${o}`]: {
        zIndex: 0
      }
    })
  };
}
function qs(e, t, r) {
  const {
    borderElCls: n
  } = r, a = n ? `> ${n}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${a}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Gs(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, Us(e, n, t)), qs(r, n, t))
  };
}
var Li = /* @__PURE__ */ u.createContext(null), Ta = [];
function Ks(e, t) {
  var r = u.useState(function() {
    if (!Kt())
      return null;
    var p = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && p.setAttribute("data-debug", t), p;
  }), n = ie(r, 1), a = n[0], i = u.useRef(!1), o = u.useContext(Li), s = u.useState(Ta), c = ie(s, 2), d = c[0], l = c[1], f = o || (i.current ? void 0 : function(p) {
    l(function(h) {
      var v = [p].concat(re(h));
      return v;
    });
  });
  function g() {
    a.parentElement || document.body.appendChild(a), i.current = !0;
  }
  function b() {
    var p;
    (p = a.parentElement) === null || p === void 0 || p.removeChild(a), i.current = !1;
  }
  return Le(function() {
    return e ? o ? o(g) : g() : b(), b;
  }, [e]), Le(function() {
    d.length && (d.forEach(function(p) {
      return p();
    }), l(Ta));
  }, [d]), [a, f];
}
function Zs(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), r = document.createElement("div");
  r.id = t;
  var n = r.style;
  n.position = "absolute", n.left = "0", n.top = "0", n.width = "100px", n.height = "100px", n.overflow = "scroll";
  var a, i;
  if (e) {
    var o = getComputedStyle(e);
    n.scrollbarColor = o.scrollbarColor, n.scrollbarWidth = o.scrollbarWidth;
    var s = getComputedStyle(e, "::-webkit-scrollbar"), c = parseInt(s.width, 10), d = parseInt(s.height, 10);
    try {
      var l = c ? "width: ".concat(s.width, ";") : "", f = d ? "height: ".concat(s.height, ";") : "";
      hi(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(l, `
`).concat(f, `
}`), t);
    } catch (p) {
      console.error(p), a = c, i = d;
    }
  }
  document.body.appendChild(r);
  var g = e && a && !isNaN(a) ? a : r.offsetWidth - r.clientWidth, b = e && i && !isNaN(i) ? i : r.offsetHeight - r.clientHeight;
  return document.body.removeChild(r), Un(t), {
    width: g,
    height: b
  };
}
function Xs(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : Zs(e);
}
function Qs() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var Ys = "rc-util-locker-".concat(Date.now()), Ma = 0;
function Js(e) {
  var t = !!e, r = u.useState(function() {
    return Ma += 1, "".concat(Ys, "_").concat(Ma);
  }), n = ie(r, 1), a = n[0];
  Le(function() {
    if (t) {
      var i = Xs(document.body).width, o = Qs();
      hi(`
html body {
  overflow-y: hidden;
  `.concat(o ? "width: calc(100% - ".concat(i, "px);") : "", `
}`), a);
    } else
      Un(a);
    return function() {
      Un(a);
    };
  }, [t, a]);
}
var el = !1;
function tl(e) {
  return el;
}
var Aa = function(t) {
  return t === !1 ? !1 : !Kt() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, wa = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, a = e.getContainer, i = e.debug, o = e.autoDestroy, s = o === void 0 ? !0 : o, c = e.children, d = u.useState(r), l = ie(d, 2), f = l[0], g = l[1], b = f || r;
  process.env.NODE_ENV !== "production" && We(Kt() || !r, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), u.useEffect(function() {
    (s || r) && g(r);
  }, [r, s]);
  var p = u.useState(function() {
    return Aa(a);
  }), h = ie(p, 2), v = h[0], x = h[1];
  u.useEffect(function() {
    var A = Aa(a);
    x(A ?? null);
  });
  var y = Ks(b && !v, i), m = ie(y, 2), E = m[0], R = m[1], $ = v ?? E;
  Js(n && r && Kt() && ($ === E || $ === document.body));
  var F = null;
  if (c && rn(c) && t) {
    var P = c;
    F = P.ref;
  }
  var C = va(F, t);
  if (!b || !Kt() || v === void 0)
    return null;
  var I = $ === !1 || tl(), M = c;
  return t && (M = /* @__PURE__ */ u.cloneElement(c, {
    ref: C
  })), /* @__PURE__ */ u.createElement(Li.Provider, {
    value: R
  }, I ? M : /* @__PURE__ */ Po.createPortal(M, $));
});
process.env.NODE_ENV !== "production" && (wa.displayName = "Portal");
function rl() {
  var e = D({}, u);
  return e.useId;
}
var Va = 0, La = rl();
const nl = La ? (
  // Use React `useId`
  function(t) {
    var r = La();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : r);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var r = u.useState("ssr-id"), n = ie(r, 2), a = n[0], i = n[1];
    return u.useEffect(function() {
      var o = Va;
      Va += 1, i("rc_unique_".concat(o));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : a);
  }
);
var ji = function(t) {
  if (Kt() && window.document.documentElement) {
    var r = Array.isArray(t) ? t : [t], n = window.document.documentElement;
    return r.some(function(a) {
      return a in n.style;
    });
  }
  return !1;
}, al = function(t, r) {
  if (!ji(t))
    return !1;
  var n = document.createElement("div"), a = n.style[t];
  return n.style[t] = r, n.style[t] !== a;
};
function ja(e, t) {
  return !Array.isArray(e) && t !== void 0 ? al(e, t) : ji(e);
}
var _t = "RC_FORM_INTERNAL_HOOKS", Ce = function() {
  We(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Jt = /* @__PURE__ */ u.createContext({
  getFieldValue: Ce,
  getFieldsValue: Ce,
  getFieldError: Ce,
  getFieldWarning: Ce,
  getFieldsError: Ce,
  isFieldsTouched: Ce,
  isFieldTouched: Ce,
  isFieldValidating: Ce,
  isFieldsValidating: Ce,
  resetFields: Ce,
  setFields: Ce,
  setFieldValue: Ce,
  setFieldsValue: Ce,
  validateFields: Ce,
  submit: Ce,
  getInternalHooks: function() {
    return Ce(), {
      dispatch: Ce,
      initEntityValue: Ce,
      registerField: Ce,
      useSubscribe: Ce,
      setInitialValues: Ce,
      destroyForm: Ce,
      setCallbacks: Ce,
      registerWatch: Ce,
      getFields: Ce,
      setValidateMessages: Ce,
      setPreserve: Ce,
      getInitialValue: Ce
    };
  }
}), Jr = /* @__PURE__ */ u.createContext(null);
function Yn(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function il(e) {
  return e && !!e._init;
}
function Jn() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var ea = Jn();
function ol(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function sl(e, t, r) {
  if (_o())
    return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return r && yi(a, r.prototype), a;
}
function ta(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ta = function(n) {
    if (n === null || !ol(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n))
        return t.get(n);
      t.set(n, a);
    }
    function a() {
      return sl(n, arguments, Io(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), yi(a, n);
  }, ta(e);
}
var ll = /%[sdj%]/g, Di = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Di = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function ra(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function Ge(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var a = 0, i = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var o = e.replace(ll, function(s) {
      if (s === "%%")
        return "%";
      if (a >= i)
        return s;
      switch (s) {
        case "%s":
          return String(r[a++]);
        case "%d":
          return Number(r[a++]);
        case "%j":
          try {
            return JSON.stringify(r[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return o;
  }
  return e;
}
function cl(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function De(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || cl(t) && typeof e == "string" && !e);
}
function ul(e, t, r) {
  var n = [], a = 0, i = e.length;
  function o(s) {
    n.push.apply(n, re(s || [])), a++, a === i && r(n);
  }
  e.forEach(function(s) {
    t(s, o);
  });
}
function Da(e, t, r) {
  var n = 0, a = e.length;
  function i(o) {
    if (o && o.length) {
      r(o);
      return;
    }
    var s = n;
    n = n + 1, s < a ? t(e[s], i) : r([]);
  }
  i([]);
}
function dl(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, re(e[r] || []));
  }), t;
}
var za = /* @__PURE__ */ function(e) {
  da(r, e);
  var t = fa(r);
  function r(n, a) {
    var i;
    return tr(this, r), i = t.call(this, "Async Validation Error"), N(ve(i), "errors", void 0), N(ve(i), "fields", void 0), i.errors = n, i.fields = a, i;
  }
  return er(r);
}(/* @__PURE__ */ ta(Error));
function fl(e, t, r, n, a) {
  if (t.first) {
    var i = new Promise(function(g, b) {
      var p = function(x) {
        return n(x), x.length ? b(new za(x, ra(x))) : g(a);
      }, h = dl(e);
      Da(h, r, p);
    });
    return i.catch(function(g) {
      return g;
    }), i;
  }
  var o = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), c = s.length, d = 0, l = [], f = new Promise(function(g, b) {
    var p = function(v) {
      if (l.push.apply(l, v), d++, d === c)
        return n(l), l.length ? b(new za(l, ra(l))) : g(a);
    };
    s.length || (n(l), g(a)), s.forEach(function(h) {
      var v = e[h];
      o.indexOf(h) !== -1 ? Da(v, r, p) : ul(v, r, p);
    });
  });
  return f.catch(function(g) {
    return g;
  }), f;
}
function vl(e) {
  return !!(e && e.message !== void 0);
}
function gl(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function Wa(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = gl(t, e.fullFields) : n = t[r.field || e.fullField], vl(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function Ba(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        Ae(n) === "object" && Ae(e[r]) === "object" ? e[r] = D(D({}, e[r]), n) : e[r] = n;
      }
  }
  return e;
}
var Ht = "enum", ml = function(t, r, n, a, i) {
  t[Ht] = Array.isArray(t[Ht]) ? t[Ht] : [], t[Ht].indexOf(r) === -1 && a.push(Ge(i.messages[Ht], t.fullField, t[Ht].join(", ")));
}, pl = function(t, r, n, a, i) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || a.push(Ge(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var o = new RegExp(t.pattern);
      o.test(r) || a.push(Ge(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, hl = function(t, r, n, a, i) {
  var o = typeof t.len == "number", s = typeof t.min == "number", c = typeof t.max == "number", d = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = r, f = null, g = typeof r == "number", b = typeof r == "string", p = Array.isArray(r);
  if (g ? f = "number" : b ? f = "string" : p && (f = "array"), !f)
    return !1;
  p && (l = r.length), b && (l = r.replace(d, "_").length), o ? l !== t.len && a.push(Ge(i.messages[f].len, t.fullField, t.len)) : s && !c && l < t.min ? a.push(Ge(i.messages[f].min, t.fullField, t.min)) : c && !s && l > t.max ? a.push(Ge(i.messages[f].max, t.fullField, t.max)) : s && c && (l < t.min || l > t.max) && a.push(Ge(i.messages[f].range, t.fullField, t.min, t.max));
}, zi = function(t, r, n, a, i, o) {
  t.required && (!n.hasOwnProperty(t.field) || De(r, o || t.type)) && a.push(Ge(i.messages.required, t.fullField));
}, Ur;
const yl = function() {
  if (Ur)
    return Ur;
  var e = "[a-fA-F\\d:]", t = function($) {
    return $ && $.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", a = [
    "(?:".concat(n, ":){7}(?:").concat(n, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(n, ":){6}(?:").concat(r, "|:").concat(n, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(n, ":){5}(?::").concat(r, "|(?::").concat(n, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(n, ":){4}(?:(?::").concat(n, "){0,1}:").concat(r, "|(?::").concat(n, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(n, ":){3}(?:(?::").concat(n, "){0,2}:").concat(r, "|(?::").concat(n, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(n, ":){2}(?:(?::").concat(n, "){0,3}:").concat(r, "|(?::").concat(n, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(n, ":){1}(?:(?::").concat(n, "){0,4}:").concat(r, "|(?::").concat(n, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(n, "){0,5}:").concat(r, "|(?::").concat(n, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], i = "(?:%[0-9a-zA-Z]{1,})?", o = "(?:".concat(a.join("|"), ")").concat(i), s = new RegExp("(?:^".concat(r, "$)|(?:^").concat(o, "$)")), c = new RegExp("^".concat(r, "$")), d = new RegExp("^".concat(o, "$")), l = function($) {
    return $ && $.exact ? s : new RegExp("(?:".concat(t($)).concat(r).concat(t($), ")|(?:").concat(t($)).concat(o).concat(t($), ")"), "g");
  };
  l.v4 = function(R) {
    return R && R.exact ? c : new RegExp("".concat(t(R)).concat(r).concat(t(R)), "g");
  }, l.v6 = function(R) {
    return R && R.exact ? d : new RegExp("".concat(t(R)).concat(o).concat(t(R)), "g");
  };
  var f = "(?:(?:[a-z]+:)?//)", g = "(?:\\S+(?::\\S*)?@)?", b = l.v4().source, p = l.v6().source, h = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", v = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", x = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", m = '(?:[/?#][^\\s"]*)?', E = "(?:".concat(f, "|www\\.)").concat(g, "(?:localhost|").concat(b, "|").concat(p, "|").concat(h).concat(v).concat(x, ")").concat(y).concat(m);
  return Ur = new RegExp("(?:^".concat(E, "$)"), "i"), Ur;
};
var Ha = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, yr = {
  integer: function(t) {
    return yr.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return yr.number(t) && !yr.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return Ae(t) === "object" && !yr.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Ha.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(yl());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Ha.hex);
  }
}, bl = function(t, r, n, a, i) {
  if (t.required && r === void 0) {
    zi(t, r, n, a, i);
    return;
  }
  var o = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  o.indexOf(s) > -1 ? yr[s](r) || a.push(Ge(i.messages.types[s], t.fullField, t.type)) : s && Ae(r) !== t.type && a.push(Ge(i.messages.types[s], t.fullField, t.type));
}, wl = function(t, r, n, a, i) {
  (/^\s+$/.test(r) || r === "") && a.push(Ge(i.messages.whitespace, t.fullField));
};
const ce = {
  required: zi,
  whitespace: wl,
  type: bl,
  range: hl,
  enum: ml,
  pattern: pl
};
var El = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (De(r) && !t.required)
      return n();
    ce.required(t, r, a, o, i);
  }
  n(o);
}, Cl = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    ce.required(t, r, a, o, i, "array"), r != null && (ce.type(t, r, a, o, i), ce.range(t, r, a, o, i));
  }
  n(o);
}, Sl = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (De(r) && !t.required)
      return n();
    ce.required(t, r, a, o, i), r !== void 0 && ce.type(t, r, a, o, i);
  }
  n(o);
}, xl = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (De(r, "date") && !t.required)
      return n();
    if (ce.required(t, r, a, o, i), !De(r, "date")) {
      var c;
      r instanceof Date ? c = r : c = new Date(r), ce.type(t, c, a, o, i), c && ce.range(t, c.getTime(), a, o, i);
    }
  }
  n(o);
}, Ol = "enum", $l = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (De(r) && !t.required)
      return n();
    ce.required(t, r, a, o, i), r !== void 0 && ce[Ol](t, r, a, o, i);
  }
  n(o);
}, Rl = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (De(r) && !t.required)
      return n();
    ce.required(t, r, a, o, i), r !== void 0 && (ce.type(t, r, a, o, i), ce.range(t, r, a, o, i));
  }
  n(o);
}, Fl = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (De(r) && !t.required)
      return n();
    ce.required(t, r, a, o, i), r !== void 0 && (ce.type(t, r, a, o, i), ce.range(t, r, a, o, i));
  }
  n(o);
}, Nl = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (De(r) && !t.required)
      return n();
    ce.required(t, r, a, o, i), r !== void 0 && ce.type(t, r, a, o, i);
  }
  n(o);
}, Pl = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), De(r) && !t.required)
      return n();
    ce.required(t, r, a, o, i), r !== void 0 && (ce.type(t, r, a, o, i), ce.range(t, r, a, o, i));
  }
  n(o);
}, _l = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (De(r) && !t.required)
      return n();
    ce.required(t, r, a, o, i), r !== void 0 && ce.type(t, r, a, o, i);
  }
  n(o);
}, Il = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (De(r, "string") && !t.required)
      return n();
    ce.required(t, r, a, o, i), De(r, "string") || ce.pattern(t, r, a, o, i);
  }
  n(o);
}, Tl = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (De(r) && !t.required)
      return n();
    ce.required(t, r, a, o, i), De(r) || ce.type(t, r, a, o, i);
  }
  n(o);
}, Ml = function(t, r, n, a, i) {
  var o = [], s = Array.isArray(r) ? "array" : Ae(r);
  ce.required(t, r, a, o, i, s), n(o);
}, Al = function(t, r, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (De(r, "string") && !t.required)
      return n();
    ce.required(t, r, a, o, i, "string"), De(r, "string") || (ce.type(t, r, a, o, i), ce.range(t, r, a, o, i), ce.pattern(t, r, a, o, i), t.whitespace === !0 && ce.whitespace(t, r, a, o, i));
  }
  n(o);
}, Tn = function(t, r, n, a, i) {
  var o = t.type, s = [], c = t.required || !t.required && a.hasOwnProperty(t.field);
  if (c) {
    if (De(r, o) && !t.required)
      return n();
    ce.required(t, r, a, s, i, o), De(r, o) || ce.type(t, r, a, s, i);
  }
  n(s);
};
const br = {
  string: Al,
  method: Nl,
  number: Pl,
  boolean: Sl,
  regexp: Tl,
  integer: Fl,
  float: Rl,
  array: Cl,
  object: _l,
  enum: $l,
  pattern: Il,
  date: xl,
  url: Tn,
  hex: Tn,
  email: Tn,
  required: Ml,
  any: El
};
var xr = /* @__PURE__ */ function() {
  function e(t) {
    tr(this, e), N(this, "rules", null), N(this, "_messages", ea), this.define(t);
  }
  return er(e, [{
    key: "define",
    value: function(r) {
      var n = this;
      if (!r)
        throw new Error("Cannot configure a schema with no rules");
      if (Ae(r) !== "object" || Array.isArray(r))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(r).forEach(function(a) {
        var i = r[a];
        n.rules[a] = Array.isArray(i) ? i : [i];
      });
    }
  }, {
    key: "messages",
    value: function(r) {
      return r && (this._messages = Ba(Jn(), r)), this._messages;
    }
  }, {
    key: "validate",
    value: function(r) {
      var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, o = r, s = a, c = i;
      if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return c && c(null, o), Promise.resolve(o);
      function d(p) {
        var h = [], v = {};
        function x(m) {
          if (Array.isArray(m)) {
            var E;
            h = (E = h).concat.apply(E, re(m));
          } else
            h.push(m);
        }
        for (var y = 0; y < p.length; y++)
          x(p[y]);
        h.length ? (v = ra(h), c(h, v)) : c(null, o);
      }
      if (s.messages) {
        var l = this.messages();
        l === ea && (l = Jn()), Ba(l, s.messages), s.messages = l;
      } else
        s.messages = this.messages();
      var f = {}, g = s.keys || Object.keys(this.rules);
      g.forEach(function(p) {
        var h = n.rules[p], v = o[p];
        h.forEach(function(x) {
          var y = x;
          typeof y.transform == "function" && (o === r && (o = D({}, o)), v = o[p] = y.transform(v), v != null && (y.type = y.type || (Array.isArray(v) ? "array" : Ae(v)))), typeof y == "function" ? y = {
            validator: y
          } : y = D({}, y), y.validator = n.getValidationMethod(y), y.validator && (y.field = p, y.fullField = y.fullField || p, y.type = n.getType(y), f[p] = f[p] || [], f[p].push({
            rule: y,
            value: v,
            source: o,
            field: p
          }));
        });
      });
      var b = {};
      return fl(f, s, function(p, h) {
        var v = p.rule, x = (v.type === "object" || v.type === "array") && (Ae(v.fields) === "object" || Ae(v.defaultField) === "object");
        x = x && (v.required || !v.required && p.value), v.field = p.field;
        function y(F, P) {
          return D(D({}, P), {}, {
            fullField: "".concat(v.fullField, ".").concat(F),
            fullFields: v.fullFields ? [].concat(re(v.fullFields), [F]) : [F]
          });
        }
        function m() {
          var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], P = Array.isArray(F) ? F : [F];
          !s.suppressWarning && P.length && e.warning("async-validator:", P), P.length && v.message !== void 0 && (P = [].concat(v.message));
          var C = P.map(Wa(v, o));
          if (s.first && C.length)
            return b[v.field] = 1, h(C);
          if (!x)
            h(C);
          else {
            if (v.required && !p.value)
              return v.message !== void 0 ? C = [].concat(v.message).map(Wa(v, o)) : s.error && (C = [s.error(v, Ge(s.messages.required, v.field))]), h(C);
            var I = {};
            v.defaultField && Object.keys(p.value).map(function(j) {
              I[j] = v.defaultField;
            }), I = D(D({}, I), p.rule.fields);
            var M = {};
            Object.keys(I).forEach(function(j) {
              var T = I[j], z = Array.isArray(T) ? T : [T];
              M[j] = z.map(y.bind(null, j));
            });
            var A = new e(M);
            A.messages(s.messages), p.rule.options && (p.rule.options.messages = s.messages, p.rule.options.error = s.error), A.validate(p.value, p.rule.options || s, function(j) {
              var T = [];
              C && C.length && T.push.apply(T, re(C)), j && j.length && T.push.apply(T, re(j)), h(T.length ? T : null);
            });
          }
        }
        var E;
        if (v.asyncValidator)
          E = v.asyncValidator(v, p.value, m, p.source, s);
        else if (v.validator) {
          try {
            E = v.validator(v, p.value, m, p.source, s);
          } catch (F) {
            var R, $;
            (R = ($ = console).error) === null || R === void 0 || R.call($, F), s.suppressValidatorError || setTimeout(function() {
              throw F;
            }, 0), m(F.message);
          }
          E === !0 ? m() : E === !1 ? m(typeof v.message == "function" ? v.message(v.fullField || v.field) : v.message || "".concat(v.fullField || v.field, " fails")) : E instanceof Array ? m(E) : E instanceof Error && m(E.message);
        }
        E && E.then && E.then(function() {
          return m();
        }, function(F) {
          return m(F);
        });
      }, function(p) {
        d(p);
      }, o);
    }
  }, {
    key: "getType",
    value: function(r) {
      if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !br.hasOwnProperty(r.type))
        throw new Error(Ge("Unknown rule type %s", r.type));
      return r.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(r) {
      if (typeof r.validator == "function")
        return r.validator;
      var n = Object.keys(r), a = n.indexOf("message");
      return a !== -1 && n.splice(a, 1), n.length === 1 && n[0] === "required" ? br.required : br[this.getType(r)] || void 0;
    }
  }]), e;
}();
N(xr, "register", function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  br[t] = r;
});
N(xr, "warning", Di);
N(xr, "messages", ea);
N(xr, "validators", br);
var qe = "'${name}' is not a valid ${type}", Wi = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: qe,
    method: qe,
    array: qe,
    object: qe,
    number: qe,
    date: qe,
    boolean: qe,
    integer: qe,
    float: qe,
    regexp: qe,
    email: qe,
    url: qe,
    hex: qe
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, ka = xr;
function Vl(e, t) {
  return e.replace(/\$\{\w+\}/g, function(r) {
    var n = r.slice(2, -1);
    return t[n];
  });
}
var Ua = "CODE_LOGIC_ERROR";
function na(e, t, r, n, a) {
  return aa.apply(this, arguments);
}
function aa() {
  return aa = Mt(/* @__PURE__ */ He().mark(function e(t, r, n, a, i) {
    var o, s, c, d, l, f, g, b, p;
    return He().wrap(function(v) {
      for (; ; )
        switch (v.prev = v.next) {
          case 0:
            return o = D({}, n), delete o.ruleIndex, ka.warning = function() {
            }, o.validator && (s = o.validator, o.validator = function() {
              try {
                return s.apply(void 0, arguments);
              } catch (x) {
                return console.error(x), Promise.reject(Ua);
              }
            }), c = null, o && o.type === "array" && o.defaultField && (c = o.defaultField, delete o.defaultField), d = new ka(N({}, t, [o])), l = hr(Wi, a.validateMessages), d.messages(l), f = [], v.prev = 10, v.next = 13, Promise.resolve(d.validate(N({}, t, r), D({}, a)));
          case 13:
            v.next = 18;
            break;
          case 15:
            v.prev = 15, v.t0 = v.catch(10), v.t0.errors && (f = v.t0.errors.map(function(x, y) {
              var m = x.message, E = m === Ua ? l.default : m;
              return /* @__PURE__ */ u.isValidElement(E) ? (
                // Wrap ReactNode with `key`
                /* @__PURE__ */ u.cloneElement(E, {
                  key: "error_".concat(y)
                })
              ) : E;
            }));
          case 18:
            if (!(!f.length && c)) {
              v.next = 23;
              break;
            }
            return v.next = 21, Promise.all(r.map(function(x, y) {
              return na("".concat(t, ".").concat(y), x, c, a, i);
            }));
          case 21:
            return g = v.sent, v.abrupt("return", g.reduce(function(x, y) {
              return [].concat(re(x), re(y));
            }, []));
          case 23:
            return b = D(D({}, n), {}, {
              name: t,
              enum: (n.enum || []).join(", ")
            }, i), p = f.map(function(x) {
              return typeof x == "string" ? Vl(x, b) : x;
            }), v.abrupt("return", p);
          case 26:
          case "end":
            return v.stop();
        }
    }, e, null, [[10, 15]]);
  })), aa.apply(this, arguments);
}
function Ll(e, t, r, n, a, i) {
  var o = e.join("."), s = r.map(function(l, f) {
    var g = l.validator, b = D(D({}, l), {}, {
      ruleIndex: f
    });
    return g && (b.validator = function(p, h, v) {
      var x = !1, y = function() {
        for (var R = arguments.length, $ = new Array(R), F = 0; F < R; F++)
          $[F] = arguments[F];
        Promise.resolve().then(function() {
          We(!x, "Your validator function has already return a promise. `callback` will be ignored."), x || v.apply(void 0, $);
        });
      }, m = g(p, h, y);
      x = m && typeof m.then == "function" && typeof m.catch == "function", We(x, "`callback` is deprecated. Please return a promise instead."), x && m.then(function() {
        v();
      }).catch(function(E) {
        v(E || " ");
      });
    }), b;
  }).sort(function(l, f) {
    var g = l.warningOnly, b = l.ruleIndex, p = f.warningOnly, h = f.ruleIndex;
    return !!g == !!p ? b - h : g ? 1 : -1;
  }), c;
  if (a === !0)
    c = new Promise(/* @__PURE__ */ function() {
      var l = Mt(/* @__PURE__ */ He().mark(function f(g, b) {
        var p, h, v;
        return He().wrap(function(y) {
          for (; ; )
            switch (y.prev = y.next) {
              case 0:
                p = 0;
              case 1:
                if (!(p < s.length)) {
                  y.next = 12;
                  break;
                }
                return h = s[p], y.next = 5, na(o, t, h, n, i);
              case 5:
                if (v = y.sent, !v.length) {
                  y.next = 9;
                  break;
                }
                return b([{
                  errors: v,
                  rule: h
                }]), y.abrupt("return");
              case 9:
                p += 1, y.next = 1;
                break;
              case 12:
                g([]);
              case 13:
              case "end":
                return y.stop();
            }
        }, f);
      }));
      return function(f, g) {
        return l.apply(this, arguments);
      };
    }());
  else {
    var d = s.map(function(l) {
      return na(o, t, l, n, i).then(function(f) {
        return {
          errors: f,
          rule: l
        };
      });
    });
    c = (a ? Dl(d) : jl(d)).then(function(l) {
      return Promise.reject(l);
    });
  }
  return c.catch(function(l) {
    return l;
  }), c;
}
function jl(e) {
  return ia.apply(this, arguments);
}
function ia() {
  return ia = Mt(/* @__PURE__ */ He().mark(function e(t) {
    return He().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.all(t).then(function(a) {
              var i, o = (i = []).concat.apply(i, re(a));
              return o;
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), ia.apply(this, arguments);
}
function Dl(e) {
  return oa.apply(this, arguments);
}
function oa() {
  return oa = Mt(/* @__PURE__ */ He().mark(function e(t) {
    var r;
    return He().wrap(function(a) {
      for (; ; )
        switch (a.prev = a.next) {
          case 0:
            return r = 0, a.abrupt("return", new Promise(function(i) {
              t.forEach(function(o) {
                o.then(function(s) {
                  s.errors.length && i([s]), r += 1, r === t.length && i([]);
                });
              });
            }));
          case 2:
          case "end":
            return a.stop();
        }
    }, e);
  })), oa.apply(this, arguments);
}
function Me(e) {
  return Yn(e);
}
function qa(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var a = Pt(e, n);
    r = yt(r, n, a);
  }), r;
}
function Zt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(n) {
    return Bi(t, n, r);
  });
}
function Bi(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !r && e.length !== t.length ? !1 : t.every(function(n, a) {
    return e[a] === n;
  });
}
function zl(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || Ae(e) !== "object" || Ae(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), a = new Set([].concat(r, n));
  return re(a).every(function(i) {
    var o = e[i], s = t[i];
    return typeof o == "function" && typeof s == "function" ? !0 : o === s;
  });
}
function Wl(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Ae(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Ga(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var a = e[t], i = t - r;
  return i > 0 ? [].concat(re(e.slice(0, r)), [a], re(e.slice(r, t)), re(e.slice(t + 1, n))) : i < 0 ? [].concat(re(e.slice(0, t)), re(e.slice(t + 1, r + 1)), [a], re(e.slice(r + 1, n))) : e;
}
var Bl = ["name"], Xe = [];
function Ka(e, t, r, n, a, i) {
  return typeof e == "function" ? e(t, r, "source" in i ? {
    source: i.source
  } : {}) : n !== a;
}
var Ea = /* @__PURE__ */ function(e) {
  da(r, e);
  var t = fa(r);
  function r(n) {
    var a;
    if (tr(this, r), a = t.call(this, n), N(ve(a), "state", {
      resetCount: 0
    }), N(ve(a), "cancelRegisterFunc", null), N(ve(a), "mounted", !1), N(ve(a), "touched", !1), N(ve(a), "dirty", !1), N(ve(a), "validatePromise", void 0), N(ve(a), "prevValidating", void 0), N(ve(a), "errors", Xe), N(ve(a), "warnings", Xe), N(ve(a), "cancelRegister", function() {
      var c = a.props, d = c.preserve, l = c.isListField, f = c.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(l, d, Me(f)), a.cancelRegisterFunc = null;
    }), N(ve(a), "getNamePath", function() {
      var c = a.props, d = c.name, l = c.fieldContext, f = l.prefixName, g = f === void 0 ? [] : f;
      return d !== void 0 ? [].concat(re(g), re(d)) : [];
    }), N(ve(a), "getRules", function() {
      var c = a.props, d = c.rules, l = d === void 0 ? [] : d, f = c.fieldContext;
      return l.map(function(g) {
        return typeof g == "function" ? g(f) : g;
      });
    }), N(ve(a), "refresh", function() {
      a.mounted && a.setState(function(c) {
        var d = c.resetCount;
        return {
          resetCount: d + 1
        };
      });
    }), N(ve(a), "metaCache", null), N(ve(a), "triggerMetaEvent", function(c) {
      var d = a.props.onMetaChange;
      if (d) {
        var l = D(D({}, a.getMeta()), {}, {
          destroy: c
        });
        Fa(a.metaCache, l) || d(l), a.metaCache = l;
      } else
        a.metaCache = null;
    }), N(ve(a), "onStoreChange", function(c, d, l) {
      var f = a.props, g = f.shouldUpdate, b = f.dependencies, p = b === void 0 ? [] : b, h = f.onReset, v = l.store, x = a.getNamePath(), y = a.getValue(c), m = a.getValue(v), E = d && Zt(d, x);
      switch (l.type === "valueUpdate" && l.source === "external" && !Fa(y, m) && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = Xe, a.warnings = Xe, a.triggerMetaEvent()), l.type) {
        case "reset":
          if (!d || E) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = Xe, a.warnings = Xe, a.triggerMetaEvent(), h == null || h(), a.refresh();
            return;
          }
          break;
        case "remove": {
          if (g) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var R = l.data;
          if (E) {
            "touched" in R && (a.touched = R.touched), "validating" in R && !("originRCField" in R) && (a.validatePromise = R.validating ? Promise.resolve([]) : null), "errors" in R && (a.errors = R.errors || Xe), "warnings" in R && (a.warnings = R.warnings || Xe), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in R && Zt(d, x, !0)) {
            a.reRender();
            return;
          }
          if (g && !x.length && Ka(g, c, v, y, m, l)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var $ = p.map(Me);
          if ($.some(function(F) {
            return Zt(l.relatedFields, F);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (E || (!p.length || x.length || g) && Ka(g, c, v, y, m, l)) {
            a.reRender();
            return;
          }
          break;
      }
      g === !0 && a.reRender();
    }), N(ve(a), "validateRules", function(c) {
      var d = a.getNamePath(), l = a.getValue(), f = c || {}, g = f.triggerName, b = f.validateOnly, p = b === void 0 ? !1 : b, h = Promise.resolve().then(/* @__PURE__ */ Mt(/* @__PURE__ */ He().mark(function v() {
        var x, y, m, E, R, $, F;
        return He().wrap(function(C) {
          for (; ; )
            switch (C.prev = C.next) {
              case 0:
                if (a.mounted) {
                  C.next = 2;
                  break;
                }
                return C.abrupt("return", []);
              case 2:
                if (x = a.props, y = x.validateFirst, m = y === void 0 ? !1 : y, E = x.messageVariables, R = x.validateDebounce, $ = a.getRules(), g && ($ = $.filter(function(I) {
                  return I;
                }).filter(function(I) {
                  var M = I.validateTrigger;
                  if (!M)
                    return !0;
                  var A = Yn(M);
                  return A.includes(g);
                })), !(R && g)) {
                  C.next = 10;
                  break;
                }
                return C.next = 8, new Promise(function(I) {
                  setTimeout(I, R);
                });
              case 8:
                if (a.validatePromise === h) {
                  C.next = 10;
                  break;
                }
                return C.abrupt("return", []);
              case 10:
                return F = Ll(d, l, $, c, m, E), F.catch(function(I) {
                  return I;
                }).then(function() {
                  var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Xe;
                  if (a.validatePromise === h) {
                    var M;
                    a.validatePromise = null;
                    var A = [], j = [];
                    (M = I.forEach) === null || M === void 0 || M.call(I, function(T) {
                      var z = T.rule.warningOnly, O = T.errors, w = O === void 0 ? Xe : O;
                      z ? j.push.apply(j, re(w)) : A.push.apply(A, re(w));
                    }), a.errors = A, a.warnings = j, a.triggerMetaEvent(), a.reRender();
                  }
                }), C.abrupt("return", F);
              case 13:
              case "end":
                return C.stop();
            }
        }, v);
      })));
      return p || (a.validatePromise = h, a.dirty = !0, a.errors = Xe, a.warnings = Xe, a.triggerMetaEvent(), a.reRender()), h;
    }), N(ve(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), N(ve(a), "isFieldTouched", function() {
      return a.touched;
    }), N(ve(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var c = a.props.fieldContext, d = c.getInternalHooks(_t), l = d.getInitialValue;
      return l(a.getNamePath()) !== void 0;
    }), N(ve(a), "getErrors", function() {
      return a.errors;
    }), N(ve(a), "getWarnings", function() {
      return a.warnings;
    }), N(ve(a), "isListField", function() {
      return a.props.isListField;
    }), N(ve(a), "isList", function() {
      return a.props.isList;
    }), N(ve(a), "isPreserve", function() {
      return a.props.preserve;
    }), N(ve(a), "getMeta", function() {
      a.prevValidating = a.isFieldValidating();
      var c = {
        touched: a.isFieldTouched(),
        validating: a.prevValidating,
        errors: a.errors,
        warnings: a.warnings,
        name: a.getNamePath(),
        validated: a.validatePromise === null
      };
      return c;
    }), N(ve(a), "getOnlyChild", function(c) {
      if (typeof c == "function") {
        var d = a.getMeta();
        return D(D({}, a.getOnlyChild(c(a.getControlled(), d, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var l = Tt(c);
      return l.length !== 1 || !/* @__PURE__ */ u.isValidElement(l[0]) ? {
        child: l,
        isFunction: !1
      } : {
        child: l[0],
        isFunction: !1
      };
    }), N(ve(a), "getValue", function(c) {
      var d = a.props.fieldContext.getFieldsValue, l = a.getNamePath();
      return Pt(c || d(!0), l);
    }), N(ve(a), "getControlled", function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = a.props, l = d.name, f = d.trigger, g = d.validateTrigger, b = d.getValueFromEvent, p = d.normalize, h = d.valuePropName, v = d.getValueProps, x = d.fieldContext, y = g !== void 0 ? g : x.validateTrigger, m = a.getNamePath(), E = x.getInternalHooks, R = x.getFieldsValue, $ = E(_t), F = $.dispatch, P = a.getValue(), C = v || function(T) {
        return N({}, h, T);
      }, I = c[f], M = l !== void 0 ? C(P) : {};
      process.env.NODE_ENV !== "production" && M && Object.keys(M).forEach(function(T) {
        We(typeof M[T] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(T, ")"));
      });
      var A = D(D({}, c), M);
      A[f] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var T, z = arguments.length, O = new Array(z), w = 0; w < z; w++)
          O[w] = arguments[w];
        b ? T = b.apply(void 0, O) : T = Wl.apply(void 0, [h].concat(O)), p && (T = p(T, P, R(!0))), F({
          type: "updateValue",
          namePath: m,
          value: T
        }), I && I.apply(void 0, O);
      };
      var j = Yn(y || []);
      return j.forEach(function(T) {
        var z = A[T];
        A[T] = function() {
          z && z.apply(void 0, arguments);
          var O = a.props.rules;
          O && O.length && F({
            type: "validateField",
            namePath: m,
            triggerName: T
          });
        };
      }), A;
    }), n.fieldContext) {
      var i = n.fieldContext.getInternalHooks, o = i(_t), s = o.initEntityValue;
      s(ve(a));
    }
    return a;
  }
  return er(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.shouldUpdate, o = a.fieldContext;
      if (this.mounted = !0, o) {
        var s = o.getInternalHooks, c = s(_t), d = c.registerField;
        this.cancelRegisterFunc = d(this);
      }
      i === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var a = this.state.resetCount, i = this.props.children, o = this.getOnlyChild(i), s = o.child, c = o.isFunction, d;
      return c ? d = s : /* @__PURE__ */ u.isValidElement(s) ? d = /* @__PURE__ */ u.cloneElement(s, this.getControlled(s.props)) : (We(!s, "`children` of Field is not validate ReactElement."), d = s), /* @__PURE__ */ u.createElement(u.Fragment, {
        key: a
      }, d);
    }
  }]), r;
}(u.Component);
N(Ea, "contextType", Jt);
N(Ea, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Hi(e) {
  var t = e.name, r = ut(e, Bl), n = u.useContext(Jt), a = u.useContext(Jr), i = t !== void 0 ? Me(t) : void 0, o = "keep";
  return r.isListField || (o = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && r.isListField && i.length <= 1 && We(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ u.createElement(Ea, ze({
    key: o,
    name: i,
    isListField: !!a
  }, r, {
    fieldContext: n
  }));
}
function Hl(e) {
  var t = e.name, r = e.initialValue, n = e.children, a = e.rules, i = e.validateTrigger, o = e.isListField, s = u.useContext(Jt), c = u.useContext(Jr), d = u.useRef({
    keys: [],
    id: 0
  }), l = d.current, f = u.useMemo(function() {
    var h = Me(s.prefixName) || [];
    return [].concat(re(h), re(Me(t)));
  }, [s.prefixName, t]), g = u.useMemo(function() {
    return D(D({}, s), {}, {
      prefixName: f
    });
  }, [s, f]), b = u.useMemo(function() {
    return {
      getKey: function(v) {
        var x = f.length, y = v[x];
        return [l.keys[y], v.slice(x + 1)];
      }
    };
  }, [f]);
  if (typeof n != "function")
    return We(!1, "Form.List only accepts function as children."), null;
  var p = function(v, x, y) {
    var m = y.source;
    return m === "internal" ? !1 : v !== x;
  };
  return /* @__PURE__ */ u.createElement(Jr.Provider, {
    value: b
  }, /* @__PURE__ */ u.createElement(Jt.Provider, {
    value: g
  }, /* @__PURE__ */ u.createElement(Hi, {
    name: [],
    shouldUpdate: p,
    rules: a,
    validateTrigger: i,
    initialValue: r,
    isList: !0,
    isListField: o ?? !!c
  }, function(h, v) {
    var x = h.value, y = x === void 0 ? [] : x, m = h.onChange, E = s.getFieldValue, R = function() {
      var C = E(f || []);
      return C || [];
    }, $ = {
      add: function(C, I) {
        var M = R();
        I >= 0 && I <= M.length ? (l.keys = [].concat(re(l.keys.slice(0, I)), [l.id], re(l.keys.slice(I))), m([].concat(re(M.slice(0, I)), [C], re(M.slice(I))))) : (process.env.NODE_ENV !== "production" && (I < 0 || I > M.length) && We(!1, "The second parameter of the add function should be a valid positive number."), l.keys = [].concat(re(l.keys), [l.id]), m([].concat(re(M), [C]))), l.id += 1;
      },
      remove: function(C) {
        var I = R(), M = new Set(Array.isArray(C) ? C : [C]);
        M.size <= 0 || (l.keys = l.keys.filter(function(A, j) {
          return !M.has(j);
        }), m(I.filter(function(A, j) {
          return !M.has(j);
        })));
      },
      move: function(C, I) {
        if (C !== I) {
          var M = R();
          C < 0 || C >= M.length || I < 0 || I >= M.length || (l.keys = Ga(l.keys, C, I), m(Ga(M, C, I)));
        }
      }
    }, F = y || [];
    return Array.isArray(F) || (F = [], process.env.NODE_ENV !== "production" && We(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), n(F.map(function(P, C) {
      var I = l.keys[C];
      return I === void 0 && (l.keys[C] = l.id, I = l.keys[C], l.id += 1), {
        name: C,
        key: I,
        isListField: !0
      };
    }), $, v);
  })));
}
function kl(e) {
  var t = !1, r = e.length, n = [];
  return e.length ? new Promise(function(a, i) {
    e.forEach(function(o, s) {
      o.catch(function(c) {
        return t = !0, c;
      }).then(function(c) {
        r -= 1, n[s] = c, !(r > 0) && (t && i(n), a(n));
      });
    });
  }) : Promise.resolve([]);
}
var ki = "__@field_split__";
function Mn(e) {
  return e.map(function(t) {
    return "".concat(Ae(t), ":").concat(t);
  }).join(ki);
}
var kt = /* @__PURE__ */ function() {
  function e() {
    tr(this, e), N(this, "kvs", /* @__PURE__ */ new Map());
  }
  return er(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(Mn(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(Mn(r));
    }
  }, {
    key: "update",
    value: function(r, n) {
      var a = this.get(r), i = n(a);
      i ? this.set(r, i) : this.delete(r);
    }
  }, {
    key: "delete",
    value: function(r) {
      this.kvs.delete(Mn(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return re(this.kvs.entries()).map(function(n) {
        var a = ie(n, 2), i = a[0], o = a[1], s = i.split(ki);
        return r({
          key: s.map(function(c) {
            var d = c.match(/^([^:]*):(.*)$/), l = ie(d, 3), f = l[1], g = l[2];
            return f === "number" ? Number(g) : g;
          }),
          value: o
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var r = {};
      return this.map(function(n) {
        var a = n.key, i = n.value;
        return r[a.join(".")] = i, null;
      }), r;
    }
  }]), e;
}(), Ul = ["name"], ql = /* @__PURE__ */ er(function e(t) {
  var r = this;
  tr(this, e), N(this, "formHooked", !1), N(this, "forceRootUpdate", void 0), N(this, "subscribable", !0), N(this, "store", {}), N(this, "fieldEntities", []), N(this, "initialValues", {}), N(this, "callbacks", {}), N(this, "validateMessages", null), N(this, "preserve", null), N(this, "lastValidatePromise", null), N(this, "getForm", function() {
    return {
      getFieldValue: r.getFieldValue,
      getFieldsValue: r.getFieldsValue,
      getFieldError: r.getFieldError,
      getFieldWarning: r.getFieldWarning,
      getFieldsError: r.getFieldsError,
      isFieldsTouched: r.isFieldsTouched,
      isFieldTouched: r.isFieldTouched,
      isFieldValidating: r.isFieldValidating,
      isFieldsValidating: r.isFieldsValidating,
      resetFields: r.resetFields,
      setFields: r.setFields,
      setFieldValue: r.setFieldValue,
      setFieldsValue: r.setFieldsValue,
      validateFields: r.validateFields,
      submit: r.submit,
      _init: !0,
      getInternalHooks: r.getInternalHooks
    };
  }), N(this, "getInternalHooks", function(n) {
    return n === _t ? (r.formHooked = !0, {
      dispatch: r.dispatch,
      initEntityValue: r.initEntityValue,
      registerField: r.registerField,
      useSubscribe: r.useSubscribe,
      setInitialValues: r.setInitialValues,
      destroyForm: r.destroyForm,
      setCallbacks: r.setCallbacks,
      setValidateMessages: r.setValidateMessages,
      getFields: r.getFields,
      setPreserve: r.setPreserve,
      getInitialValue: r.getInitialValue,
      registerWatch: r.registerWatch
    }) : (We(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), N(this, "useSubscribe", function(n) {
    r.subscribable = n;
  }), N(this, "prevWithoutPreserves", null), N(this, "setInitialValues", function(n, a) {
    if (r.initialValues = n || {}, a) {
      var i, o = hr(n, r.store);
      (i = r.prevWithoutPreserves) === null || i === void 0 || i.map(function(s) {
        var c = s.key;
        o = yt(o, c, Pt(n, c));
      }), r.prevWithoutPreserves = null, r.updateStore(o);
    }
  }), N(this, "destroyForm", function() {
    var n = new kt();
    r.getFieldEntities(!0).forEach(function(a) {
      r.isMergedPreserve(a.isPreserve()) || n.set(a.getNamePath(), !0);
    }), r.prevWithoutPreserves = n;
  }), N(this, "getInitialValue", function(n) {
    var a = Pt(r.initialValues, n);
    return n.length ? hr(a) : a;
  }), N(this, "setCallbacks", function(n) {
    r.callbacks = n;
  }), N(this, "setValidateMessages", function(n) {
    r.validateMessages = n;
  }), N(this, "setPreserve", function(n) {
    r.preserve = n;
  }), N(this, "watchList", []), N(this, "registerWatch", function(n) {
    return r.watchList.push(n), function() {
      r.watchList = r.watchList.filter(function(a) {
        return a !== n;
      });
    };
  }), N(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (r.watchList.length) {
      var a = r.getFieldsValue(), i = r.getFieldsValue(!0);
      r.watchList.forEach(function(o) {
        o(a, i, n);
      });
    }
  }), N(this, "timeoutId", null), N(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !r.timeoutId && typeof window < "u" && (r.timeoutId = setTimeout(function() {
      r.timeoutId = null, r.formHooked || We(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), N(this, "updateStore", function(n) {
    r.store = n;
  }), N(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : r.fieldEntities;
  }), N(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new kt();
    return r.getFieldEntities(n).forEach(function(i) {
      var o = i.getNamePath();
      a.set(o, i);
    }), a;
  }), N(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var a = r.getFieldsMap(!0);
    return n.map(function(i) {
      var o = Me(i);
      return a.get(o) || {
        INVALIDATE_NAME_PATH: Me(i)
      };
    });
  }), N(this, "getFieldsValue", function(n, a) {
    r.warningUnhooked();
    var i, o, s;
    if (n === !0 || Array.isArray(n) ? (i = n, o = a) : n && Ae(n) === "object" && (s = n.strict, o = n.filter), i === !0 && !o)
      return r.store;
    var c = r.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null), d = [];
    return c.forEach(function(l) {
      var f, g, b = "INVALIDATE_NAME_PATH" in l ? l.INVALIDATE_NAME_PATH : l.getNamePath();
      if (s) {
        var p, h;
        if ((p = (h = l).isList) !== null && p !== void 0 && p.call(h))
          return;
      } else if (!i && (f = (g = l).isListField) !== null && f !== void 0 && f.call(g))
        return;
      if (!o)
        d.push(b);
      else {
        var v = "getMeta" in l ? l.getMeta() : null;
        o(v) && d.push(b);
      }
    }), qa(r.store, d.map(Me));
  }), N(this, "getFieldValue", function(n) {
    r.warningUnhooked();
    var a = Me(n);
    return Pt(r.store, a);
  }), N(this, "getFieldsError", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntitiesForNamePathList(n);
    return a.map(function(i, o) {
      return i && !("INVALIDATE_NAME_PATH" in i) ? {
        name: i.getNamePath(),
        errors: i.getErrors(),
        warnings: i.getWarnings()
      } : {
        name: Me(n[o]),
        errors: [],
        warnings: []
      };
    });
  }), N(this, "getFieldError", function(n) {
    r.warningUnhooked();
    var a = Me(n), i = r.getFieldsError([a])[0];
    return i.errors;
  }), N(this, "getFieldWarning", function(n) {
    r.warningUnhooked();
    var a = Me(n), i = r.getFieldsError([a])[0];
    return i.warnings;
  }), N(this, "isFieldsTouched", function() {
    r.warningUnhooked();
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a[0], s = a[1], c, d = !1;
    a.length === 0 ? c = null : a.length === 1 ? Array.isArray(o) ? (c = o.map(Me), d = !1) : (c = null, d = o) : (c = o.map(Me), d = s);
    var l = r.getFieldEntities(!0), f = function(v) {
      return v.isFieldTouched();
    };
    if (!c)
      return d ? l.every(function(h) {
        return f(h) || h.isList();
      }) : l.some(f);
    var g = new kt();
    c.forEach(function(h) {
      g.set(h, []);
    }), l.forEach(function(h) {
      var v = h.getNamePath();
      c.forEach(function(x) {
        x.every(function(y, m) {
          return v[m] === y;
        }) && g.update(x, function(y) {
          return [].concat(re(y), [h]);
        });
      });
    });
    var b = function(v) {
      return v.some(f);
    }, p = g.map(function(h) {
      var v = h.value;
      return v;
    });
    return d ? p.every(b) : p.some(b);
  }), N(this, "isFieldTouched", function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }), N(this, "isFieldsValidating", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntities();
    if (!n)
      return a.some(function(o) {
        return o.isFieldValidating();
      });
    var i = n.map(Me);
    return a.some(function(o) {
      var s = o.getNamePath();
      return Zt(i, s) && o.isFieldValidating();
    });
  }), N(this, "isFieldValidating", function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }), N(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new kt(), i = r.getFieldEntities(!0);
    i.forEach(function(c) {
      var d = c.props.initialValue, l = c.getNamePath();
      if (d !== void 0) {
        var f = a.get(l) || /* @__PURE__ */ new Set();
        f.add({
          entity: c,
          value: d
        }), a.set(l, f);
      }
    });
    var o = function(d) {
      d.forEach(function(l) {
        var f = l.props.initialValue;
        if (f !== void 0) {
          var g = l.getNamePath(), b = r.getInitialValue(g);
          if (b !== void 0)
            We(!1, "Form already set 'initialValues' with path '".concat(g.join("."), "'. Field can not overwrite it."));
          else {
            var p = a.get(g);
            if (p && p.size > 1)
              We(!1, "Multiple Field with path '".concat(g.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (p) {
              var h = r.getFieldValue(g), v = l.isListField();
              !v && (!n.skipExist || h === void 0) && r.updateStore(yt(r.store, g, re(p)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(c) {
      var d = a.get(c);
      if (d) {
        var l;
        (l = s).push.apply(l, re(re(d).map(function(f) {
          return f.entity;
        })));
      }
    })) : s = i, o(s);
  }), N(this, "resetFields", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (!n) {
      r.updateStore(hr(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(a, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var i = n.map(Me);
    i.forEach(function(o) {
      var s = r.getInitialValue(o);
      r.updateStore(yt(r.store, o, s));
    }), r.resetWithFieldInitialValue({
      namePathList: i
    }), r.notifyObservers(a, i, {
      type: "reset"
    }), r.notifyWatch(i);
  }), N(this, "setFields", function(n) {
    r.warningUnhooked();
    var a = r.store, i = [];
    n.forEach(function(o) {
      var s = o.name, c = ut(o, Ul), d = Me(s);
      i.push(d), "value" in c && r.updateStore(yt(r.store, d, c.value)), r.notifyObservers(a, [d], {
        type: "setField",
        data: o
      });
    }), r.notifyWatch(i);
  }), N(this, "getFields", function() {
    var n = r.getFieldEntities(!0), a = n.map(function(i) {
      var o = i.getNamePath(), s = i.getMeta(), c = D(D({}, s), {}, {
        name: o,
        value: r.getFieldValue(o)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return a;
  }), N(this, "initEntityValue", function(n) {
    var a = n.props.initialValue;
    if (a !== void 0) {
      var i = n.getNamePath(), o = Pt(r.store, i);
      o === void 0 && r.updateStore(yt(r.store, i, a));
    }
  }), N(this, "isMergedPreserve", function(n) {
    var a = n !== void 0 ? n : r.preserve;
    return a ?? !0;
  }), N(this, "registerField", function(n) {
    r.fieldEntities.push(n);
    var a = n.getNamePath();
    if (r.notifyWatch([a]), n.props.initialValue !== void 0) {
      var i = r.store;
      r.resetWithFieldInitialValue({
        entities: [n],
        skipExist: !0
      }), r.notifyObservers(i, [n.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(o, s) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (r.fieldEntities = r.fieldEntities.filter(function(f) {
        return f !== n;
      }), !r.isMergedPreserve(s) && (!o || c.length > 1)) {
        var d = o ? void 0 : r.getInitialValue(a);
        if (a.length && r.getFieldValue(a) !== d && r.fieldEntities.every(function(f) {
          return (
            // Only reset when no namePath exist
            !Bi(f.getNamePath(), a)
          );
        })) {
          var l = r.store;
          r.updateStore(yt(l, a, d, !0)), r.notifyObservers(l, [a], {
            type: "remove"
          }), r.triggerDependenciesUpdate(l, a);
        }
      }
      r.notifyWatch([a]);
    };
  }), N(this, "dispatch", function(n) {
    switch (n.type) {
      case "updateValue": {
        var a = n.namePath, i = n.value;
        r.updateValue(a, i);
        break;
      }
      case "validateField": {
        var o = n.namePath, s = n.triggerName;
        r.validateFields([o], {
          triggerName: s
        });
        break;
      }
    }
  }), N(this, "notifyObservers", function(n, a, i) {
    if (r.subscribable) {
      var o = D(D({}, i), {}, {
        store: r.getFieldsValue(!0)
      });
      r.getFieldEntities().forEach(function(s) {
        var c = s.onStoreChange;
        c(n, a, o);
      });
    } else
      r.forceRootUpdate();
  }), N(this, "triggerDependenciesUpdate", function(n, a) {
    var i = r.getDependencyChildrenFields(a);
    return i.length && r.validateFields(i), r.notifyObservers(n, i, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(re(i))
    }), i;
  }), N(this, "updateValue", function(n, a) {
    var i = Me(n), o = r.store;
    r.updateStore(yt(r.store, i, a)), r.notifyObservers(o, [i], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([i]);
    var s = r.triggerDependenciesUpdate(o, i), c = r.callbacks.onValuesChange;
    if (c) {
      var d = qa(r.store, [i]);
      c(d, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([i].concat(re(s)));
  }), N(this, "setFieldsValue", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (n) {
      var i = hr(r.store, n);
      r.updateStore(i);
    }
    r.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), r.notifyWatch();
  }), N(this, "setFieldValue", function(n, a) {
    r.setFields([{
      name: n,
      value: a
    }]);
  }), N(this, "getDependencyChildrenFields", function(n) {
    var a = /* @__PURE__ */ new Set(), i = [], o = new kt();
    r.getFieldEntities().forEach(function(c) {
      var d = c.props.dependencies;
      (d || []).forEach(function(l) {
        var f = Me(l);
        o.update(f, function() {
          var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return g.add(c), g;
        });
      });
    });
    var s = function c(d) {
      var l = o.get(d) || /* @__PURE__ */ new Set();
      l.forEach(function(f) {
        if (!a.has(f)) {
          a.add(f);
          var g = f.getNamePath();
          f.isFieldDirty() && g.length && (i.push(g), c(g));
        }
      });
    };
    return s(n), i;
  }), N(this, "triggerOnFieldsChange", function(n, a) {
    var i = r.callbacks.onFieldsChange;
    if (i) {
      var o = r.getFields();
      if (a) {
        var s = new kt();
        a.forEach(function(d) {
          var l = d.name, f = d.errors;
          s.set(l, f);
        }), o.forEach(function(d) {
          d.errors = s.get(d.name) || d.errors;
        });
      }
      var c = o.filter(function(d) {
        var l = d.name;
        return Zt(n, l);
      });
      c.length && i(c, o);
    }
  }), N(this, "validateFields", function(n, a) {
    r.warningUnhooked();
    var i, o;
    Array.isArray(n) || typeof n == "string" || typeof a == "string" ? (i = n, o = a) : o = n;
    var s = !!i, c = s ? i.map(Me) : [], d = [], l = String(Date.now()), f = /* @__PURE__ */ new Set(), g = o || {}, b = g.recursive, p = g.dirty;
    r.getFieldEntities(!0).forEach(function(y) {
      if (s || c.push(y.getNamePath()), !(!y.props.rules || !y.props.rules.length) && !(p && !y.isFieldDirty())) {
        var m = y.getNamePath();
        if (f.add(m.join(l)), !s || Zt(c, m, b)) {
          var E = y.validateRules(D({
            validateMessages: D(D({}, Wi), r.validateMessages)
          }, o));
          d.push(E.then(function() {
            return {
              name: m,
              errors: [],
              warnings: []
            };
          }).catch(function(R) {
            var $, F = [], P = [];
            return ($ = R.forEach) === null || $ === void 0 || $.call(R, function(C) {
              var I = C.rule.warningOnly, M = C.errors;
              I ? P.push.apply(P, re(M)) : F.push.apply(F, re(M));
            }), F.length ? Promise.reject({
              name: m,
              errors: F,
              warnings: P
            }) : {
              name: m,
              errors: F,
              warnings: P
            };
          }));
        }
      }
    });
    var h = kl(d);
    r.lastValidatePromise = h, h.catch(function(y) {
      return y;
    }).then(function(y) {
      var m = y.map(function(E) {
        var R = E.name;
        return R;
      });
      r.notifyObservers(r.store, m, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(m, y);
    });
    var v = h.then(function() {
      return r.lastValidatePromise === h ? Promise.resolve(r.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(y) {
      var m = y.filter(function(E) {
        return E && E.errors.length;
      });
      return Promise.reject({
        values: r.getFieldsValue(c),
        errorFields: m,
        outOfDate: r.lastValidatePromise !== h
      });
    });
    v.catch(function(y) {
      return y;
    });
    var x = c.filter(function(y) {
      return f.has(y.join(l));
    });
    return r.triggerOnFieldsChange(x), v;
  }), N(this, "submit", function() {
    r.warningUnhooked(), r.validateFields().then(function(n) {
      var a = r.callbacks.onFinish;
      if (a)
        try {
          a(n);
        } catch (i) {
          console.error(i);
        }
    }).catch(function(n) {
      var a = r.callbacks.onFinishFailed;
      a && a(n);
    });
  }), this.forceRootUpdate = t;
});
function Ui(e) {
  var t = u.useRef(), r = u.useState({}), n = ie(r, 2), a = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var i = function() {
        a({});
      }, o = new ql(i);
      t.current = o.getForm();
    }
  return [t.current];
}
var sa = /* @__PURE__ */ u.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), Gl = function(t) {
  var r = t.validateMessages, n = t.onFormChange, a = t.onFormFinish, i = t.children, o = u.useContext(sa), s = u.useRef({});
  return /* @__PURE__ */ u.createElement(sa.Provider, {
    value: D(D({}, o), {}, {
      validateMessages: D(D({}, o.validateMessages), r),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(d, l) {
        n && n(d, {
          changedFields: l,
          forms: s.current
        }), o.triggerFormChange(d, l);
      },
      triggerFormFinish: function(d, l) {
        a && a(d, {
          values: l,
          forms: s.current
        }), o.triggerFormFinish(d, l);
      },
      registerForm: function(d, l) {
        d && (s.current = D(D({}, s.current), {}, N({}, d, l))), o.registerForm(d, l);
      },
      unregisterForm: function(d) {
        var l = D({}, s.current);
        delete l[d], s.current = l, o.unregisterForm(d);
      }
    })
  }, i);
}, Kl = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], Zl = function(t, r) {
  var n = t.name, a = t.initialValues, i = t.fields, o = t.form, s = t.preserve, c = t.children, d = t.component, l = d === void 0 ? "form" : d, f = t.validateMessages, g = t.validateTrigger, b = g === void 0 ? "onChange" : g, p = t.onValuesChange, h = t.onFieldsChange, v = t.onFinish, x = t.onFinishFailed, y = ut(t, Kl), m = u.useContext(sa), E = Ui(o), R = ie(E, 1), $ = R[0], F = $.getInternalHooks(_t), P = F.useSubscribe, C = F.setInitialValues, I = F.setCallbacks, M = F.setValidateMessages, A = F.setPreserve, j = F.destroyForm;
  u.useImperativeHandle(r, function() {
    return $;
  }), u.useEffect(function() {
    return m.registerForm(n, $), function() {
      m.unregisterForm(n);
    };
  }, [m, $, n]), M(D(D({}, m.validateMessages), f)), I({
    onValuesChange: p,
    onFieldsChange: function(W) {
      if (m.triggerFormChange(n, W), h) {
        for (var U = arguments.length, q = new Array(U > 1 ? U - 1 : 0), G = 1; G < U; G++)
          q[G - 1] = arguments[G];
        h.apply(void 0, [W].concat(q));
      }
    },
    onFinish: function(W) {
      m.triggerFormFinish(n, W), v && v(W);
    },
    onFinishFailed: x
  }), A(s);
  var T = u.useRef(null);
  C(a, !T.current), T.current || (T.current = !0), u.useEffect(
    function() {
      return j;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var z, O = typeof c == "function";
  if (O) {
    var w = $.getFieldsValue(!0);
    z = c(w, $);
  } else
    z = c;
  P(!O);
  var S = u.useRef();
  u.useEffect(function() {
    zl(S.current || [], i || []) || $.setFields(i || []), S.current = i;
  }, [i, $]);
  var V = u.useMemo(function() {
    return D(D({}, $), {}, {
      validateTrigger: b
    });
  }, [$, b]), _ = /* @__PURE__ */ u.createElement(Jr.Provider, {
    value: null
  }, /* @__PURE__ */ u.createElement(Jt.Provider, {
    value: V
  }, z));
  return l === !1 ? _ : /* @__PURE__ */ u.createElement(l, ze({}, y, {
    onSubmit: function(W) {
      W.preventDefault(), W.stopPropagation(), $.submit();
    },
    onReset: function(W) {
      var U;
      W.preventDefault(), $.resetFields(), (U = y.onReset) === null || U === void 0 || U.call(y, W);
    }
  }), _);
};
function Za(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var Xl = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = Be(t);
  We(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function Ql() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], a = t[1], i = a === void 0 ? {} : a, o = il(i) ? {
    form: i
  } : i, s = o.form, c = Hn(), d = ie(c, 2), l = d[0], f = d[1], g = pi(function() {
    return Za(l);
  }, [l]), b = Be(g);
  b.current = g;
  var p = Cr(Jt), h = s || p, v = h && h._init;
  process.env.NODE_ENV !== "production" && We(t.length === 2 ? s ? v : !0 : v, "useWatch requires a form instance since it can not auto detect from context.");
  var x = Me(n), y = Be(x);
  return y.current = x, Xl(x), It(
    function() {
      if (v) {
        var m = h.getFieldsValue, E = h.getInternalHooks, R = E(_t), $ = R.registerWatch, F = function(M, A) {
          var j = o.preserve ? A : M;
          return typeof n == "function" ? n(j) : Pt(j, y.current);
        }, P = $(function(I, M) {
          var A = F(I, M), j = Za(A);
          b.current !== j && (b.current = j, f(A));
        }), C = F(m(), m(!0));
        return l !== C && f(C), P;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v]
  ), l;
}
var Yl = /* @__PURE__ */ u.forwardRef(Zl), Or = Yl;
Or.FormProvider = Gl;
Or.Field = Hi;
Or.List = Hl;
Or.useForm = Ui;
Or.useWatch = Ql;
const wr = /* @__PURE__ */ u.createContext({});
process.env.NODE_ENV !== "production" && (wr.displayName = "FormItemInputContext");
const Jl = (e) => {
  let {
    children: t,
    status: r,
    override: n
  } = e;
  const a = Cr(wr), i = pi(() => {
    const o = Object.assign({}, a);
    return n && delete o.isFormItemInput, r && (delete o.status, delete o.hasFeedback, delete o.feedbackIcon), o;
  }, [r, n, a]);
  return /* @__PURE__ */ u.createElement(wr.Provider, {
    value: i
  }, t);
}, ec = /* @__PURE__ */ Eo(void 0), tc = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), rc = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), nc = function(e, t, r, n) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, tc(n)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: Object.assign(Object.assign({}, rc(n)), {
      animationPlayState: "paused"
    }),
    [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${i}${e}-leave${e}-leave-active`]: {
      animationName: r,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, ac = new Je("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), ic = new Je("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Xa = new Je("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Qa = new Je("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), oc = new Je("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), sc = new Je("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), lc = new Je("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), cc = new Je("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), uc = new Je("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), dc = new Je("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), fc = new Je("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), vc = new Je("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), gc = {
  zoom: {
    inKeyframes: ac,
    outKeyframes: ic
  },
  "zoom-big": {
    inKeyframes: Xa,
    outKeyframes: Qa
  },
  "zoom-big-fast": {
    inKeyframes: Xa,
    outKeyframes: Qa
  },
  "zoom-left": {
    inKeyframes: lc,
    outKeyframes: cc
  },
  "zoom-right": {
    inKeyframes: uc,
    outKeyframes: dc
  },
  "zoom-up": {
    inKeyframes: oc,
    outKeyframes: sc
  },
  "zoom-down": {
    inKeyframes: fc,
    outKeyframes: vc
  }
}, mc = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: i
  } = gc[t];
  return [nc(n, a, i, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
    [`
        ${n}-enter,
        ${n}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${n}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, pc = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
function hc(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, a = e.arrowPos, i = n || {}, o = i.className, s = i.content, c = a.x, d = c === void 0 ? 0 : c, l = a.y, f = l === void 0 ? 0 : l, g = u.useRef();
  if (!r || !r.points)
    return null;
  var b = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var p = r.points[0], h = r.points[1], v = p[0], x = p[1], y = h[0], m = h[1];
    v === y || !["t", "b"].includes(v) ? b.top = f : v === "t" ? b.top = 0 : b.bottom = 0, x === m || !["l", "r"].includes(x) ? b.left = d : x === "l" ? b.left = 0 : b.right = 0;
  }
  return /* @__PURE__ */ u.createElement("div", {
    ref: g,
    className: Y("".concat(t, "-arrow"), o),
    style: b
  }, s);
}
function yc(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, a = e.mask, i = e.motion;
  return a ? /* @__PURE__ */ u.createElement(ga, ze({}, i, {
    motionAppear: !0,
    visible: r,
    removeOnLeave: !0
  }), function(o) {
    var s = o.className;
    return /* @__PURE__ */ u.createElement("div", {
      style: {
        zIndex: n
      },
      className: Y("".concat(t, "-mask"), s)
    });
  }) : null;
}
var qi = /* @__PURE__ */ u.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (qi.displayName = "PopupContent");
var Gi = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, a = e.prefixCls, i = e.style, o = e.target, s = e.onVisibleChanged, c = e.open, d = e.keepDom, l = e.fresh, f = e.onClick, g = e.mask, b = e.arrow, p = e.arrowPos, h = e.align, v = e.motion, x = e.maskMotion, y = e.forceRender, m = e.getPopupContainer, E = e.autoDestroy, R = e.portal, $ = e.zIndex, F = e.onMouseEnter, P = e.onMouseLeave, C = e.onPointerEnter, I = e.ready, M = e.offsetX, A = e.offsetY, j = e.offsetR, T = e.offsetB, z = e.onAlign, O = e.onPrepare, w = e.stretch, S = e.targetWidth, V = e.targetHeight, _ = typeof r == "function" ? r() : r, L = c || d, W = (m == null ? void 0 : m.length) > 0, U = u.useState(!m || !W), q = ie(U, 2), G = q[0], k = q[1];
  if (Le(function() {
    !G && W && o && k(!0);
  }, [G, W, o]), !G)
    return null;
  var oe = "auto", de = {
    left: "-1000vw",
    top: "-1000vh",
    right: oe,
    bottom: oe
  };
  if (I || !c) {
    var ge, we = h.points, Se = h.dynamicInset || ((ge = h._experimental) === null || ge === void 0 ? void 0 : ge.dynamicInset), Ee = Se && we[0][1] === "r", he = Se && we[0][0] === "b";
    Ee ? (de.right = j, de.left = oe) : (de.left = M, de.right = oe), he ? (de.bottom = T, de.top = oe) : (de.top = A, de.bottom = oe);
  }
  var Z = {};
  return w && (w.includes("height") && V ? Z.height = V : w.includes("minHeight") && V && (Z.minHeight = V), w.includes("width") && S ? Z.width = S : w.includes("minWidth") && S && (Z.minWidth = S)), c || (Z.pointerEvents = "none"), /* @__PURE__ */ u.createElement(R, {
    open: y || L,
    getContainer: m && function() {
      return m(o);
    },
    autoDestroy: E
  }, /* @__PURE__ */ u.createElement(yc, {
    prefixCls: a,
    open: c,
    zIndex: $,
    mask: g,
    motion: x
  }), /* @__PURE__ */ u.createElement(ir, {
    onResize: z,
    disabled: !c
  }, function(J) {
    return /* @__PURE__ */ u.createElement(ga, ze({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: y,
      leavedClassName: "".concat(a, "-hidden")
    }, v, {
      onAppearPrepare: O,
      onEnterPrepare: O,
      visible: c,
      onVisibleChanged: function(ue) {
        var Ne;
        v == null || (Ne = v.onVisibleChanged) === null || Ne === void 0 || Ne.call(v, ue), s(ue);
      }
    }), function(me, ue) {
      var Ne = me.className, se = me.style, te = Y(a, Ne, n);
      return /* @__PURE__ */ u.createElement("div", {
        ref: rr(J, t, ue),
        className: te,
        style: D(D(D(D({
          "--arrow-x": "".concat(p.x || 0, "px"),
          "--arrow-y": "".concat(p.y || 0, "px")
        }, de), Z), se), {}, {
          boxSizing: "border-box",
          zIndex: $
        }, i),
        onMouseEnter: F,
        onMouseLeave: P,
        onPointerEnter: C,
        onClick: f
      }, b && /* @__PURE__ */ u.createElement(hc, {
        prefixCls: a,
        arrow: b,
        arrowPos: p,
        align: h
      }), /* @__PURE__ */ u.createElement(qi, {
        cache: !c && !l
      }, _));
    });
  }));
});
process.env.NODE_ENV !== "production" && (Gi.displayName = "Popup");
var Ki = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, a = rn(r), i = u.useCallback(function(s) {
    To(t, n ? n(s) : s);
  }, [n]), o = va(i, r.ref);
  return a ? /* @__PURE__ */ u.cloneElement(r, {
    ref: o
  }) : r;
});
process.env.NODE_ENV !== "production" && (Ki.displayName = "TriggerWrapper");
var Ya = /* @__PURE__ */ u.createContext(null);
function Ja(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function bc(e, t, r, n) {
  return u.useMemo(function() {
    var a = Ja(r ?? t), i = Ja(n ?? t), o = new Set(a), s = new Set(i);
    return e && (o.has("hover") && (o.delete("hover"), o.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [o, s];
  }, [e, t, r, n]);
}
function wc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function Ec(e, t, r, n) {
  for (var a = r.points, i = Object.keys(e), o = 0; o < i.length; o += 1) {
    var s, c = i[o];
    if (wc((s = e[c]) === null || s === void 0 ? void 0 : s.points, a, n))
      return "".concat(t, "-placement-").concat(c);
  }
  return "";
}
function ei(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function $r(e) {
  return e.ownerDocument.defaultView;
}
function la(e) {
  for (var t = [], r = e == null ? void 0 : e.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var a = $r(r).getComputedStyle(r), i = a.overflowX, o = a.overflowY, s = a.overflow;
    [i, o, s].some(function(c) {
      return n.includes(c);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function Er(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function pr(e) {
  return Er(parseFloat(e), 0);
}
function ti(e, t) {
  var r = D({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var a = $r(n).getComputedStyle(n), i = a.overflow, o = a.overflowClipMargin, s = a.borderTopWidth, c = a.borderBottomWidth, d = a.borderLeftWidth, l = a.borderRightWidth, f = n.getBoundingClientRect(), g = n.offsetHeight, b = n.clientHeight, p = n.offsetWidth, h = n.clientWidth, v = pr(s), x = pr(c), y = pr(d), m = pr(l), E = Er(Math.round(f.width / p * 1e3) / 1e3), R = Er(Math.round(f.height / g * 1e3) / 1e3), $ = (p - h - y - m) * E, F = (g - b - v - x) * R, P = v * R, C = x * R, I = y * E, M = m * E, A = 0, j = 0;
      if (i === "clip") {
        var T = pr(o);
        A = T * E, j = T * R;
      }
      var z = f.x + I - A, O = f.y + P - j, w = z + f.width + 2 * A - I - M - $, S = O + f.height + 2 * j - P - C - F;
      r.left = Math.max(r.left, z), r.top = Math.max(r.top, O), r.right = Math.min(r.right, w), r.bottom = Math.min(r.bottom, S);
    }
  }), r;
}
function ri(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function ni(e, t) {
  var r = t || [], n = ie(r, 2), a = n[0], i = n[1];
  return [ri(e.width, a), ri(e.height, i)];
}
function ai() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Ut(e, t) {
  var r = t[0], n = t[1], a, i;
  return r === "t" ? i = e.y : r === "b" ? i = e.y + e.height : i = e.y + e.height / 2, n === "l" ? a = e.x : n === "r" ? a = e.x + e.width : a = e.x + e.width / 2, {
    x: a,
    y: i
  };
}
function ht(e, t) {
  var r = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(n, a) {
    return a === t ? r[n] || "c" : n;
  }).join("");
}
function Cc(e, t, r, n, a, i, o) {
  var s = u.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: a[n] || {}
  }), c = ie(s, 2), d = c[0], l = c[1], f = u.useRef(0), g = u.useMemo(function() {
    return t ? la(t) : [];
  }, [t]), b = u.useRef({}), p = function() {
    b.current = {};
  };
  e || p();
  var h = tt(function() {
    if (t && r && e) {
      let Ke = function(Dr, Ze) {
        var Wt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : te, zr = _.x + Dr, Bt = _.y + Ze, Wr = zr + ge, mr = Bt + de, Br = Math.max(zr, Wt.left), Sn = Math.max(Bt, Wt.top), xn = Math.min(Wr, Wt.right), On = Math.min(mr, Wt.bottom);
        return Math.max(0, (xn - Br) * (On - Sn));
      }, jr = function() {
        Ct = _.y + Ie, St = Ct + de, ot = _.x + Ve, xt = ot + ge;
      };
      var y, m, E = t, R = E.ownerDocument, $ = $r(E), F = $.getComputedStyle(E), P = F.width, C = F.height, I = F.position, M = E.style.left, A = E.style.top, j = E.style.right, T = E.style.bottom, z = E.style.overflow, O = D(D({}, a[n]), i), w = R.createElement("div");
      (y = E.parentElement) === null || y === void 0 || y.appendChild(w), w.style.left = "".concat(E.offsetLeft, "px"), w.style.top = "".concat(E.offsetTop, "px"), w.style.position = I, w.style.height = "".concat(E.offsetHeight, "px"), w.style.width = "".concat(E.offsetWidth, "px"), E.style.left = "0", E.style.top = "0", E.style.right = "auto", E.style.bottom = "auto", E.style.overflow = "hidden";
      var S;
      if (Array.isArray(r))
        S = {
          x: r[0],
          y: r[1],
          width: 0,
          height: 0
        };
      else {
        var V = r.getBoundingClientRect();
        S = {
          x: V.x,
          y: V.y,
          width: V.width,
          height: V.height
        };
      }
      var _ = E.getBoundingClientRect(), L = R.documentElement, W = L.clientWidth, U = L.clientHeight, q = L.scrollWidth, G = L.scrollHeight, k = L.scrollTop, oe = L.scrollLeft, de = _.height, ge = _.width, we = S.height, Se = S.width, Ee = {
        left: 0,
        top: 0,
        right: W,
        bottom: U
      }, he = {
        left: -oe,
        top: -k,
        right: q - oe,
        bottom: G - k
      }, Z = O.htmlRegion, J = "visible", me = "visibleFirst";
      Z !== "scroll" && Z !== me && (Z = J);
      var ue = Z === me, Ne = ti(he, g), se = ti(Ee, g), te = Z === J ? se : Ne, X = ue ? se : te;
      E.style.left = "auto", E.style.top = "auto", E.style.right = "0", E.style.bottom = "0";
      var ye = E.getBoundingClientRect();
      E.style.left = M, E.style.top = A, E.style.right = j, E.style.bottom = T, E.style.overflow = z, (m = E.parentElement) === null || m === void 0 || m.removeChild(w);
      var le = Er(Math.round(ge / parseFloat(P) * 1e3) / 1e3), be = Er(Math.round(de / parseFloat(C) * 1e3) / 1e3);
      if (le === 0 || be === 0 || qn(r) && !Ti(r))
        return;
      var pe = O.offset, xe = O.targetOffset, ft = ni(_, pe), nt = ie(ft, 2), fe = nt[0], ne = nt[1], Oe = ni(S, xe), $e = ie(Oe, 2), or = $e[0], At = $e[1];
      S.x -= or, S.y -= At;
      var sr = O.points || [], at = ie(sr, 2), ke = at[0], B = at[1], ee = ai(B), Fe = ai(ke), vt = Ut(S, ee), Vt = Ut(_, Fe), it = D({}, O), Ve = vt.x - Vt.x + fe, Ie = vt.y - Vt.y + ne, Te = Ke(Ve, Ie), Lt = Ke(Ve, Ie, se), gt = Ut(S, ["t", "l"]), wt = Ut(_, ["t", "l"]), lr = Ut(S, ["b", "r"]), cr = Ut(_, ["b", "r"]), Et = O.overflow || {}, et = Et.adjustX, dn = Et.adjustY, ur = Et.shiftX, jt = Et.shiftY, dr = function(Ze) {
        return typeof Ze == "boolean" ? Ze : Ze >= 0;
      }, Ct, St, ot, xt;
      jr();
      var Fr = dr(dn), fr = Fe[0] === ee[0];
      if (Fr && Fe[0] === "t" && (St > X.bottom || b.current.bt)) {
        var mt = Ie;
        fr ? mt -= de - we : mt = gt.y - cr.y - ne;
        var Nr = Ke(Ve, mt), Dt = Ke(Ve, mt, se);
        // Of course use larger one
        Nr > Te || Nr === Te && (!ue || // Choose recommend one
        Dt >= Lt) ? (b.current.bt = !0, Ie = mt, ne = -ne, it.points = [ht(Fe, 0), ht(ee, 0)]) : b.current.bt = !1;
      }
      if (Fr && Fe[0] === "b" && (Ct < X.top || b.current.tb)) {
        var Ot = Ie;
        fr ? Ot += de - we : Ot = lr.y - wt.y - ne;
        var Ue = Ke(Ve, Ot), fn = Ke(Ve, Ot, se);
        // Of course use larger one
        Ue > Te || Ue === Te && (!ue || // Choose recommend one
        fn >= Lt) ? (b.current.tb = !0, Ie = Ot, ne = -ne, it.points = [ht(Fe, 0), ht(ee, 0)]) : b.current.tb = !1;
      }
      var Pr = dr(et), _r = Fe[1] === ee[1];
      if (Pr && Fe[1] === "l" && (xt > X.right || b.current.rl)) {
        var $t = Ve;
        _r ? $t -= ge - Se : $t = gt.x - cr.x - fe;
        var Ir = Ke($t, Ie), vn = Ke($t, Ie, se);
        // Of course use larger one
        Ir > Te || Ir === Te && (!ue || // Choose recommend one
        vn >= Lt) ? (b.current.rl = !0, Ve = $t, fe = -fe, it.points = [ht(Fe, 1), ht(ee, 1)]) : b.current.rl = !1;
      }
      if (Pr && Fe[1] === "r" && (ot < X.left || b.current.lr)) {
        var Rt = Ve;
        _r ? Rt += ge - Se : Rt = lr.x - wt.x - fe;
        var Tr = Ke(Rt, Ie), gn = Ke(Rt, Ie, se);
        // Of course use larger one
        Tr > Te || Tr === Te && (!ue || // Choose recommend one
        gn >= Lt) ? (b.current.lr = !0, Ve = Rt, fe = -fe, it.points = [ht(Fe, 1), ht(ee, 1)]) : b.current.lr = !1;
      }
      jr();
      var rt = ur === !0 ? 0 : ur;
      typeof rt == "number" && (ot < se.left && (Ve -= ot - se.left - fe, S.x + Se < se.left + rt && (Ve += S.x - se.left + Se - rt)), xt > se.right && (Ve -= xt - se.right - fe, S.x > se.right - rt && (Ve += S.x - se.right + rt)));
      var st = jt === !0 ? 0 : jt;
      typeof st == "number" && (Ct < se.top && (Ie -= Ct - se.top - ne, S.y + we < se.top + st && (Ie += S.y - se.top + we - st)), St > se.bottom && (Ie -= St - se.bottom - ne, S.y > se.bottom - st && (Ie += S.y - se.bottom + st)));
      var vr = _.x + Ve, Mr = vr + ge, pt = _.y + Ie, Ft = pt + de, gr = S.x, zt = gr + Se, lt = S.y, mn = lt + we, pn = Math.max(vr, gr), hn = Math.min(Mr, zt), Ar = (pn + hn) / 2, yn = Ar - vr, bn = Math.max(pt, lt), wn = Math.min(Ft, mn), Vr = (bn + wn) / 2, En = Vr - pt;
      o == null || o(t, it);
      var Cn = ye.right - _.x - (Ve + _.width), Lr = ye.bottom - _.y - (Ie + _.height);
      l({
        ready: !0,
        offsetX: Ve / le,
        offsetY: Ie / be,
        offsetR: Cn / le,
        offsetB: Lr / be,
        arrowX: yn / le,
        arrowY: En / be,
        scaleX: le,
        scaleY: be,
        align: it
      });
    }
  }), v = function() {
    f.current += 1;
    var m = f.current;
    Promise.resolve().then(function() {
      f.current === m && h();
    });
  }, x = function() {
    l(function(m) {
      return D(D({}, m), {}, {
        ready: !1
      });
    });
  };
  return Le(x, [n]), Le(function() {
    e || x();
  }, [e]), [d.ready, d.offsetX, d.offsetY, d.offsetR, d.offsetB, d.arrowX, d.arrowY, d.scaleX, d.scaleY, d.align, v];
}
function Sc(e, t, r, n, a) {
  Le(function() {
    if (e && t && r) {
      let f = function() {
        n(), a();
      };
      var i = t, o = r, s = la(i), c = la(o), d = $r(o), l = new Set([d].concat(re(s), re(c)));
      return l.forEach(function(g) {
        g.addEventListener("scroll", f, {
          passive: !0
        });
      }), d.addEventListener("resize", f, {
        passive: !0
      }), n(), function() {
        l.forEach(function(g) {
          g.removeEventListener("scroll", f), d.removeEventListener("resize", f);
        });
      };
    }
  }, [e, t, r]);
}
function xc(e, t, r, n, a, i, o, s) {
  var c = u.useRef(e);
  c.current = e, u.useEffect(function() {
    if (t && n && (!a || i)) {
      var d = function(x) {
        var y = x.target;
        c.current && !o(y) && s(!1);
      }, l = $r(n);
      l.addEventListener("mousedown", d, !0), l.addEventListener("contextmenu", d, !0);
      var f = Gn(r);
      if (f && (f.addEventListener("mousedown", d, !0), f.addEventListener("contextmenu", d, !0)), process.env.NODE_ENV !== "production") {
        var g, b, p = r == null || (g = r.getRootNode) === null || g === void 0 ? void 0 : g.call(r), h = (b = n.getRootNode) === null || b === void 0 ? void 0 : b.call(n);
        kn(p === h, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        l.removeEventListener("mousedown", d, !0), l.removeEventListener("contextmenu", d, !0), f && (f.removeEventListener("mousedown", d, !0), f.removeEventListener("contextmenu", d, !0));
      };
    }
  }, [t, r, n, a, i]);
}
var Oc = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function $c() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wa, t = /* @__PURE__ */ u.forwardRef(function(r, n) {
    var a = r.prefixCls, i = a === void 0 ? "rc-trigger-popup" : a, o = r.children, s = r.action, c = s === void 0 ? "hover" : s, d = r.showAction, l = r.hideAction, f = r.popupVisible, g = r.defaultPopupVisible, b = r.onPopupVisibleChange, p = r.afterPopupVisibleChange, h = r.mouseEnterDelay, v = r.mouseLeaveDelay, x = v === void 0 ? 0.1 : v, y = r.focusDelay, m = r.blurDelay, E = r.mask, R = r.maskClosable, $ = R === void 0 ? !0 : R, F = r.getPopupContainer, P = r.forceRender, C = r.autoDestroy, I = r.destroyPopupOnHide, M = r.popup, A = r.popupClassName, j = r.popupStyle, T = r.popupPlacement, z = r.builtinPlacements, O = z === void 0 ? {} : z, w = r.popupAlign, S = r.zIndex, V = r.stretch, _ = r.getPopupClassNameFromAlign, L = r.fresh, W = r.alignPoint, U = r.onPopupClick, q = r.onPopupAlign, G = r.arrow, k = r.popupMotion, oe = r.maskMotion, de = r.popupTransitionName, ge = r.popupAnimation, we = r.maskTransitionName, Se = r.maskAnimation, Ee = r.className, he = r.getTriggerDOMNode, Z = ut(r, Oc), J = C || I || !1, me = u.useState(!1), ue = ie(me, 2), Ne = ue[0], se = ue[1];
    Le(function() {
      se(pc());
    }, []);
    var te = u.useRef({}), X = u.useContext(Ya), ye = u.useMemo(function() {
      return {
        registerSubPopup: function(Q, Pe) {
          te.current[Q] = Pe, X == null || X.registerSubPopup(Q, Pe);
        }
      };
    }, [X]), le = nl(), be = u.useState(null), pe = ie(be, 2), xe = pe[0], ft = pe[1], nt = u.useRef(null), fe = tt(function(H) {
      nt.current = H, qn(H) && xe !== H && ft(H), X == null || X.registerSubPopup(le, H);
    }), ne = u.useState(null), Oe = ie(ne, 2), $e = Oe[0], or = Oe[1], At = u.useRef(null), sr = tt(function(H) {
      qn(H) && $e !== H && (or(H), At.current = H);
    }), at = u.Children.only(o), ke = (at == null ? void 0 : at.props) || {}, B = {}, ee = tt(function(H) {
      var Q, Pe, je = $e;
      return (je == null ? void 0 : je.contains(H)) || ((Q = Gn(je)) === null || Q === void 0 ? void 0 : Q.host) === H || H === je || (xe == null ? void 0 : xe.contains(H)) || ((Pe = Gn(xe)) === null || Pe === void 0 ? void 0 : Pe.host) === H || H === xe || Object.values(te.current).some(function(_e) {
        return (_e == null ? void 0 : _e.contains(H)) || H === _e;
      });
    }), Fe = ei(i, k, ge, de), vt = ei(i, oe, Se, we), Vt = u.useState(g || !1), it = ie(Vt, 2), Ve = it[0], Ie = it[1], Te = f ?? Ve, Lt = tt(function(H) {
      f === void 0 && Ie(H);
    });
    Le(function() {
      Ie(f || !1);
    }, [f]);
    var gt = u.useRef(Te);
    gt.current = Te;
    var wt = u.useRef([]);
    wt.current = [];
    var lr = tt(function(H) {
      var Q;
      Lt(H), ((Q = wt.current[wt.current.length - 1]) !== null && Q !== void 0 ? Q : Te) !== H && (wt.current.push(H), b == null || b(H));
    }), cr = u.useRef(), Et = function() {
      clearTimeout(cr.current);
    }, et = function(Q) {
      var Pe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Et(), Pe === 0 ? lr(Q) : cr.current = setTimeout(function() {
        lr(Q);
      }, Pe * 1e3);
    };
    u.useEffect(function() {
      return Et;
    }, []);
    var dn = u.useState(!1), ur = ie(dn, 2), jt = ur[0], dr = ur[1];
    Le(function(H) {
      (!H || Te) && dr(!0);
    }, [Te]);
    var Ct = u.useState(null), St = ie(Ct, 2), ot = St[0], xt = St[1], Fr = u.useState([0, 0]), fr = ie(Fr, 2), mt = fr[0], Nr = fr[1], Dt = function(Q) {
      Nr([Q.clientX, Q.clientY]);
    }, Ot = Cc(Te, xe, W ? mt : $e, T, O, w, q), Ue = ie(Ot, 11), fn = Ue[0], Pr = Ue[1], _r = Ue[2], $t = Ue[3], Ir = Ue[4], vn = Ue[5], Rt = Ue[6], Tr = Ue[7], gn = Ue[8], rt = Ue[9], st = Ue[10], vr = bc(Ne, c, d, l), Mr = ie(vr, 2), pt = Mr[0], Ft = Mr[1], gr = pt.has("click"), zt = Ft.has("click") || Ft.has("contextMenu"), lt = tt(function() {
      jt || st();
    }), mn = function() {
      gt.current && W && zt && et(!1);
    };
    Sc(Te, $e, xe, lt, mn), Le(function() {
      lt();
    }, [mt, T]), Le(function() {
      Te && !(O != null && O[T]) && lt();
    }, [JSON.stringify(w)]);
    var pn = u.useMemo(function() {
      var H = Ec(O, i, rt, W);
      return Y(H, _ == null ? void 0 : _(rt));
    }, [rt, _, O, i, W]);
    u.useImperativeHandle(n, function() {
      return {
        nativeElement: At.current,
        popupElement: nt.current,
        forceAlign: lt
      };
    });
    var hn = u.useState(0), Ar = ie(hn, 2), yn = Ar[0], bn = Ar[1], wn = u.useState(0), Vr = ie(wn, 2), En = Vr[0], Cn = Vr[1], Lr = function() {
      if (V && $e) {
        var Q = $e.getBoundingClientRect();
        bn(Q.width), Cn(Q.height);
      }
    }, Ke = function() {
      Lr(), lt();
    }, jr = function(Q) {
      dr(!1), st(), p == null || p(Q);
    }, Dr = function() {
      return new Promise(function(Q) {
        Lr(), xt(function() {
          return Q;
        });
      });
    };
    Le(function() {
      ot && (st(), ot(), xt(null));
    }, [ot]);
    function Ze(H, Q, Pe, je) {
      B[H] = function(_e) {
        var Hr;
        je == null || je(_e), et(Q, Pe);
        for (var $n = arguments.length, xa = new Array($n > 1 ? $n - 1 : 0), kr = 1; kr < $n; kr++)
          xa[kr - 1] = arguments[kr];
        (Hr = ke[H]) === null || Hr === void 0 || Hr.call.apply(Hr, [ke, _e].concat(xa));
      };
    }
    (gr || zt) && (B.onClick = function(H) {
      var Q;
      gt.current && zt ? et(!1) : !gt.current && gr && (Dt(H), et(!0));
      for (var Pe = arguments.length, je = new Array(Pe > 1 ? Pe - 1 : 0), _e = 1; _e < Pe; _e++)
        je[_e - 1] = arguments[_e];
      (Q = ke.onClick) === null || Q === void 0 || Q.call.apply(Q, [ke, H].concat(je));
    }), xc(Te, zt, $e, xe, E, $, ee, et);
    var Wt = pt.has("hover"), zr = Ft.has("hover"), Bt, Wr;
    Wt && (Ze("onMouseEnter", !0, h, function(H) {
      Dt(H);
    }), Ze("onPointerEnter", !0, h, function(H) {
      Dt(H);
    }), Bt = function(Q) {
      (Te || jt) && xe !== null && xe !== void 0 && xe.contains(Q.target) && et(!0, h);
    }, W && (B.onMouseMove = function(H) {
      var Q;
      (Q = ke.onMouseMove) === null || Q === void 0 || Q.call(ke, H);
    })), zr && (Ze("onMouseLeave", !1, x), Ze("onPointerLeave", !1, x), Wr = function() {
      et(!1, x);
    }), pt.has("focus") && Ze("onFocus", !0, y), Ft.has("focus") && Ze("onBlur", !1, m), pt.has("contextMenu") && (B.onContextMenu = function(H) {
      var Q;
      gt.current && Ft.has("contextMenu") ? et(!1) : (Dt(H), et(!0)), H.preventDefault();
      for (var Pe = arguments.length, je = new Array(Pe > 1 ? Pe - 1 : 0), _e = 1; _e < Pe; _e++)
        je[_e - 1] = arguments[_e];
      (Q = ke.onContextMenu) === null || Q === void 0 || Q.call.apply(Q, [ke, H].concat(je));
    }), Ee && (B.className = Y(ke.className, Ee));
    var mr = D(D({}, ke), B), Br = {}, Sn = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Sn.forEach(function(H) {
      Z[H] && (Br[H] = function() {
        for (var Q, Pe = arguments.length, je = new Array(Pe), _e = 0; _e < Pe; _e++)
          je[_e] = arguments[_e];
        (Q = mr[H]) === null || Q === void 0 || Q.call.apply(Q, [mr].concat(je)), Z[H].apply(Z, je);
      });
    });
    var xn = /* @__PURE__ */ u.cloneElement(at, D(D({}, mr), Br)), On = {
      x: vn,
      y: Rt
    }, wo = G ? D({}, G !== !0 ? G : {}) : null;
    return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(ir, {
      disabled: !Te,
      ref: sr,
      onResize: Ke
    }, /* @__PURE__ */ u.createElement(Ki, {
      getTriggerDOMNode: he
    }, xn)), /* @__PURE__ */ u.createElement(Ya.Provider, {
      value: ye
    }, /* @__PURE__ */ u.createElement(Gi, {
      portal: e,
      ref: fe,
      prefixCls: i,
      popup: M,
      className: Y(A, pn),
      style: j,
      target: $e,
      onMouseEnter: Bt,
      onMouseLeave: Wr,
      onPointerEnter: Bt,
      zIndex: S,
      open: Te,
      keepDom: jt,
      fresh: L,
      onClick: U,
      mask: E,
      motion: Fe,
      maskMotion: vt,
      onVisibleChanged: jr,
      onPrepare: Dr,
      forceRender: P,
      autoDestroy: J,
      getPopupContainer: F,
      align: rt,
      arrow: wo,
      arrowPos: On,
      ready: fn,
      offsetX: Pr,
      offsetY: _r,
      offsetR: $t,
      offsetB: Ir,
      onAlign: lt,
      stretch: V,
      targetWidth: yn / Tr,
      targetHeight: En / gn
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const Rc = $c(wa);
function ca(e, t, r) {
  return Y({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: r
  });
}
const Zi = (e, t) => t || e, Fc = ["outlined", "borderless", "filled"], Xi = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  const r = Cr(ec);
  let n;
  typeof e < "u" ? n = e : t === !1 ? n = "borderless" : n = r ?? "outlined";
  const a = Fc.includes(n);
  return [n, a];
};
var Nc = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, Pc = function(t, r) {
  return /* @__PURE__ */ u.createElement(ar, ze({}, t, {
    ref: r,
    icon: Nc
  }));
}, Qi = /* @__PURE__ */ u.forwardRef(Pc);
process.env.NODE_ENV !== "production" && (Qi.displayName = "CheckOutlined");
function Yi(e) {
  var t = e.children, r = e.prefixCls, n = e.id, a = e.overlayInnerStyle, i = e.className, o = e.style;
  return /* @__PURE__ */ u.createElement("div", {
    className: Y("".concat(r, "-content"), i),
    style: o
  }, /* @__PURE__ */ u.createElement("div", {
    className: "".concat(r, "-inner"),
    id: n,
    role: "tooltip",
    style: a
  }, typeof t == "function" ? t() : t));
}
var qt = {
  shiftX: 64,
  adjustY: 1
}, Gt = {
  adjustX: 1,
  shiftY: !0
}, Qe = [0, 0], _c = {
  left: {
    points: ["cr", "cl"],
    overflow: Gt,
    offset: [-4, 0],
    targetOffset: Qe
  },
  right: {
    points: ["cl", "cr"],
    overflow: Gt,
    offset: [4, 0],
    targetOffset: Qe
  },
  top: {
    points: ["bc", "tc"],
    overflow: qt,
    offset: [0, -4],
    targetOffset: Qe
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: qt,
    offset: [0, 4],
    targetOffset: Qe
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: qt,
    offset: [0, -4],
    targetOffset: Qe
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Gt,
    offset: [-4, 0],
    targetOffset: Qe
  },
  topRight: {
    points: ["br", "tr"],
    overflow: qt,
    offset: [0, -4],
    targetOffset: Qe
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Gt,
    offset: [4, 0],
    targetOffset: Qe
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: qt,
    offset: [0, 4],
    targetOffset: Qe
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Gt,
    offset: [4, 0],
    targetOffset: Qe
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: qt,
    offset: [0, 4],
    targetOffset: Qe
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Gt,
    offset: [-4, 0],
    targetOffset: Qe
  }
}, Ic = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], Tc = function(t, r) {
  var n = t.overlayClassName, a = t.trigger, i = a === void 0 ? ["hover"] : a, o = t.mouseEnterDelay, s = o === void 0 ? 0 : o, c = t.mouseLeaveDelay, d = c === void 0 ? 0.1 : c, l = t.overlayStyle, f = t.prefixCls, g = f === void 0 ? "rc-tooltip" : f, b = t.children, p = t.onVisibleChange, h = t.afterVisibleChange, v = t.transitionName, x = t.animation, y = t.motion, m = t.placement, E = m === void 0 ? "right" : m, R = t.align, $ = R === void 0 ? {} : R, F = t.destroyTooltipOnHide, P = F === void 0 ? !1 : F, C = t.defaultVisible, I = t.getTooltipContainer, M = t.overlayInnerStyle;
  t.arrowContent;
  var A = t.overlay, j = t.id, T = t.showArrow, z = T === void 0 ? !0 : T, O = ut(t, Ic), w = Be(null);
  ua(r, function() {
    return w.current;
  });
  var S = D({}, O);
  "visible" in t && (S.popupVisible = t.visible);
  var V = function() {
    return /* @__PURE__ */ u.createElement(Yi, {
      key: "content",
      prefixCls: g,
      id: j,
      overlayInnerStyle: M
    }, A);
  };
  return /* @__PURE__ */ u.createElement(Rc, ze({
    popupClassName: n,
    prefixCls: g,
    popup: V,
    action: i,
    builtinPlacements: _c,
    popupPlacement: E,
    ref: w,
    popupAlign: $,
    getPopupContainer: I,
    onPopupVisibleChange: p,
    afterPopupVisibleChange: h,
    popupTransitionName: v,
    popupAnimation: x,
    popupMotion: y,
    defaultPopupVisible: C,
    autoDestroy: P,
    mouseLeaveDelay: d,
    popupStyle: l,
    mouseEnterDelay: s,
    arrow: z
  }, S), b);
};
const Mc = /* @__PURE__ */ tn(Tc);
function Ac(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: r,
    borderRadiusOuter: n
  } = e, a = t / 2, i = 0, o = a, s = n * 1 / Math.sqrt(2), c = a - n * (1 - 1 / Math.sqrt(2)), d = a - r * (1 / Math.sqrt(2)), l = n * (Math.sqrt(2) - 1) + r * (1 / Math.sqrt(2)), f = 2 * a - d, g = l, b = 2 * a - s, p = c, h = 2 * a - i, v = o, x = a * Math.sqrt(2) + n * (Math.sqrt(2) - 2), y = n * (Math.sqrt(2) - 1), m = `polygon(${y}px 100%, 50% ${y}px, ${2 * a - y}px 100%, ${y}px 100%)`, E = `path('M ${i} ${o} A ${n} ${n} 0 0 0 ${s} ${c} L ${d} ${l} A ${r} ${r} 0 0 1 ${f} ${g} L ${b} ${p} A ${n} ${n} 0 0 0 ${h} ${v} Z')`;
  return {
    arrowShadowWidth: x,
    arrowPath: E,
    arrowPolygon: m
  };
}
const Vc = (e, t, r) => {
  const {
    sizePopupArrow: n,
    arrowPolygon: a,
    arrowPath: i,
    arrowShadowWidth: o,
    borderRadiusXS: s,
    calc: c
  } = e;
  return {
    pointerEvents: "none",
    width: n,
    height: n,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: n,
      height: c(n).div(2).equal(),
      background: t,
      clipPath: {
        _multi_value_: !0,
        value: [a, i]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: o,
      height: o,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${Re(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: r,
      zIndex: 0,
      background: "transparent"
    }
  };
}, Ji = 8;
function eo(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: r
  } = e, n = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: n,
    arrowOffsetVertical: r ? Ji : n
  };
}
function qr(e, t) {
  return e ? t : {};
}
function Lc(e, t, r) {
  const {
    componentCls: n,
    boxShadowPopoverArrow: a,
    arrowOffsetVertical: i,
    arrowOffsetHorizontal: o
  } = e, {
    arrowDistance: s = 0,
    arrowPlacement: c = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = {};
  return {
    [n]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${n}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, Vc(e, t, a)), {
        "&:before": {
          background: t
        }
      })]
    }, qr(!!c.top, {
      [[`&-placement-top > ${n}-arrow`, `&-placement-topLeft > ${n}-arrow`, `&-placement-topRight > ${n}-arrow`].join(",")]: {
        bottom: s,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      [`&-placement-topLeft > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: o
        }
      },
      [`&-placement-topRight > ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: o
        }
      }
    })), qr(!!c.bottom, {
      [[`&-placement-bottom > ${n}-arrow`, `&-placement-bottomLeft > ${n}-arrow`, `&-placement-bottomRight > ${n}-arrow`].join(",")]: {
        top: s,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      [`&-placement-bottomLeft > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: o
        }
      },
      [`&-placement-bottomRight > ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: o
        }
      }
    })), qr(!!c.left, {
      [[`&-placement-left > ${n}-arrow`, `&-placement-leftTop > ${n}-arrow`, `&-placement-leftBottom > ${n}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${n}-arrow`]: {
        top: i
      },
      [`&-placement-leftBottom > ${n}-arrow`]: {
        bottom: i
      }
    })), qr(!!c.right, {
      [[`&-placement-right > ${n}-arrow`, `&-placement-rightTop > ${n}-arrow`, `&-placement-rightBottom > ${n}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${n}-arrow`]: {
        top: i
      },
      [`&-placement-rightBottom > ${n}-arrow`]: {
        bottom: i
      }
    }))
  };
}
function jc(e, t, r, n) {
  if (n === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const a = n && typeof n == "object" ? n : {}, i = {};
  switch (e) {
    case "top":
    case "bottom":
      i.shiftX = t.arrowOffsetHorizontal * 2 + r, i.shiftY = !0, i.adjustY = !0;
      break;
    case "left":
    case "right":
      i.shiftY = t.arrowOffsetVertical * 2 + r, i.shiftX = !0, i.adjustX = !0;
      break;
  }
  const o = Object.assign(Object.assign({}, i), a);
  return o.shiftX || (o.adjustX = !0), o.shiftY || (o.adjustY = !0), o;
}
const ii = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
}, Dc = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
}, zc = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function Wc(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: r,
    arrowPointAtCenter: n,
    offset: a,
    borderRadius: i,
    visibleFirst: o
  } = e, s = t / 2, c = {};
  return Object.keys(ii).forEach((d) => {
    const l = n && Dc[d] || ii[d], f = Object.assign(Object.assign({}, l), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (c[d] = f, zc.has(d) && (f.autoArrow = !1), d) {
      case "top":
      case "topLeft":
      case "topRight":
        f.offset[1] = -s - a;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        f.offset[1] = s + a;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        f.offset[0] = -s - a;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        f.offset[0] = s + a;
        break;
    }
    const g = eo({
      contentRadius: i,
      limitVerticalRadius: !0
    });
    if (n)
      switch (d) {
        case "topLeft":
        case "bottomLeft":
          f.offset[0] = -g.arrowOffsetHorizontal - s;
          break;
        case "topRight":
        case "bottomRight":
          f.offset[0] = g.arrowOffsetHorizontal + s;
          break;
        case "leftTop":
        case "rightTop":
          f.offset[1] = -g.arrowOffsetHorizontal - s;
          break;
        case "leftBottom":
        case "rightBottom":
          f.offset[1] = g.arrowOffsetHorizontal + s;
          break;
      }
    f.overflow = jc(d, g, t, r), o && (f.htmlRegion = "visibleFirst");
  }), c;
}
const Bc = (e) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: r,
    tooltipColor: n,
    tooltipBg: a,
    tooltipBorderRadius: i,
    zIndexPopup: o,
    controlHeight: s,
    boxShadowSecondary: c,
    paddingSM: d,
    paddingXS: l
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, pa(e)), {
        position: "absolute",
        zIndex: o,
        display: "block",
        width: "max-content",
        maxWidth: r,
        visibility: "visible",
        transformOrigin: "var(--arrow-x, 50%) var(--arrow-y, 50%)",
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": a,
        // Wrapper for the tooltip content
        [`${t}-inner`]: {
          minWidth: "1em",
          minHeight: s,
          padding: `${Re(e.calc(d).div(2).equal())} ${Re(l)}`,
          color: n,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: a,
          borderRadius: i,
          boxShadow: c,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: e.min(i, Ji)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), Mo(e, (f, g) => {
        let {
          darkColor: b
        } = g;
        return {
          [`&${t}-${f}`]: {
            [`${t}-inner`]: {
              backgroundColor: b
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": b
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    Lc(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, Hc = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, eo({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), Ac(nr(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), to = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return an("Tooltip", (n) => {
    const {
      borderRadius: a,
      colorTextLightSolid: i,
      colorBgSpotlight: o
    } = n, s = nr(n, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: i,
      tooltipBorderRadius: a,
      tooltipBg: o
    });
    return [Bc(s), mc(n, "zoom-big-fast")];
  }, Hc, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: t
  })(e);
};
function ro(e, t) {
  const r = Ao(t), n = Y({
    [`${e}-${t}`]: t && r
  }), a = {}, i = {};
  return t && !r && (a.background = t, i["--antd-arrow-background-color"] = t), {
    className: n,
    overlayStyle: a,
    arrowStyle: i
  };
}
const kc = (e) => {
  const {
    prefixCls: t,
    className: r,
    placement: n = "top",
    title: a,
    color: i,
    overlayInnerStyle: o
  } = e, {
    getPrefixCls: s
  } = u.useContext(dt), c = s("tooltip", t), [d, l, f] = to(c), g = ro(c, i), b = g.arrowStyle, p = Object.assign(Object.assign({}, o), g.overlayStyle), h = Y(l, f, c, `${c}-pure`, `${c}-placement-${n}`, r, g.className);
  return d(/* @__PURE__ */ u.createElement("div", {
    className: h,
    style: b
  }, /* @__PURE__ */ u.createElement("div", {
    className: `${c}-arrow`
  }), /* @__PURE__ */ u.createElement(Yi, Object.assign({}, e, {
    className: l,
    prefixCls: c,
    overlayInnerStyle: p
  }), a)));
};
var Uc = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const qc = /* @__PURE__ */ u.forwardRef((e, t) => {
  var r, n;
  const {
    prefixCls: a,
    openClassName: i,
    getTooltipContainer: o,
    overlayClassName: s,
    color: c,
    overlayInnerStyle: d,
    children: l,
    afterOpenChange: f,
    afterVisibleChange: g,
    destroyTooltipOnHide: b,
    arrow: p = !0,
    title: h,
    overlay: v,
    builtinPlacements: x,
    arrowPointAtCenter: y = !1,
    autoAdjustOverflow: m = !0
  } = e, E = !!p, [, R] = nn(), {
    getPopupContainer: $,
    getPrefixCls: F,
    direction: P
  } = u.useContext(dt), C = bt("Tooltip"), I = u.useRef(null), M = () => {
    var le;
    (le = I.current) === null || le === void 0 || le.forceAlign();
  };
  u.useImperativeHandle(t, () => {
    var le;
    return {
      forceAlign: M,
      forcePopupAlign: () => {
        C.deprecated(!1, "forcePopupAlign", "forceAlign"), M();
      },
      nativeElement: (le = I.current) === null || le === void 0 ? void 0 : le.nativeElement
    };
  }), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((le) => {
    let [be, pe] = le;
    C.deprecated(!(be in e), be, pe);
  }), process.env.NODE_ENV !== "production" && C(!b || typeof b == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && C(!p || typeof p == "boolean" || !("arrowPointAtCenter" in p), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [A, j] = Yt(!1, {
    value: (r = e.open) !== null && r !== void 0 ? r : e.visible,
    defaultValue: (n = e.defaultOpen) !== null && n !== void 0 ? n : e.defaultVisible
  }), T = !h && !v && h !== 0, z = (le) => {
    var be, pe;
    j(T ? !1 : le), T || ((be = e.onOpenChange) === null || be === void 0 || be.call(e, le), (pe = e.onVisibleChange) === null || pe === void 0 || pe.call(e, le));
  }, O = u.useMemo(() => {
    var le, be;
    let pe = y;
    return typeof p == "object" && (pe = (be = (le = p.pointAtCenter) !== null && le !== void 0 ? le : p.arrowPointAtCenter) !== null && be !== void 0 ? be : y), x || Wc({
      arrowPointAtCenter: pe,
      autoAdjustOverflow: m,
      arrowWidth: E ? R.sizePopupArrow : 0,
      borderRadius: R.borderRadius,
      offset: R.marginXXS,
      visibleFirst: !0
    });
  }, [y, p, x, R]), w = u.useMemo(() => h === 0 ? h : v || h || "", [v, h]), S = /* @__PURE__ */ u.createElement(Vi, null, typeof w == "function" ? w() : w), {
    getPopupContainer: V,
    placement: _ = "top",
    mouseEnterDelay: L = 0.1,
    mouseLeaveDelay: W = 0.1,
    overlayStyle: U,
    rootClassName: q
  } = e, G = Uc(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), k = F("tooltip", a), oe = F(), de = e["data-popover-inject"];
  let ge = A;
  !("open" in e) && !("visible" in e) && T && (ge = !1);
  const we = /* @__PURE__ */ u.isValidElement(l) && !Vo(l) ? l : /* @__PURE__ */ u.createElement("span", null, l), Se = we.props, Ee = !Se.className || typeof Se.className == "string" ? Y(Se.className, i || `${k}-open`) : Se.className, [he, Z, J] = to(k, !de), me = ro(k, c), ue = me.arrowStyle, Ne = Object.assign(Object.assign({}, d), me.overlayStyle), se = Y(s, {
    [`${k}-rtl`]: P === "rtl"
  }, me.className, q, Z, J), [te, X] = ys("Tooltip", G.zIndex), ye = /* @__PURE__ */ u.createElement(Mc, Object.assign({}, G, {
    zIndex: te,
    showArrow: E,
    placement: _,
    mouseEnterDelay: L,
    mouseLeaveDelay: W,
    prefixCls: k,
    overlayClassName: se,
    overlayStyle: Object.assign(Object.assign({}, ue), U),
    getTooltipContainer: V || o || $,
    ref: I,
    builtinPlacements: O,
    overlay: S,
    visible: ge,
    onVisibleChange: z,
    afterVisibleChange: f ?? g,
    overlayInnerStyle: Ne,
    arrowContent: /* @__PURE__ */ u.createElement("span", {
      className: `${k}-arrow-content`
    }),
    motion: {
      motionName: Ps(oe, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!b
  }), ge ? ma(we, {
    className: Ee
  }) : we);
  return he(/* @__PURE__ */ u.createElement(ya.Provider, {
    value: X
  }, ye));
}), Rr = qc;
process.env.NODE_ENV !== "production" && (Rr.displayName = "Tooltip");
Rr._InternalPanelDoNotUseOrYouWillBeFired = kc;
function Gc(e) {
  return nr(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const Kc = (e) => {
  const {
    controlHeight: t,
    fontSize: r,
    lineHeight: n,
    lineWidth: a,
    controlHeightSM: i,
    controlHeightLG: o,
    fontSizeLG: s,
    lineHeightLG: c,
    paddingSM: d,
    controlPaddingHorizontalSM: l,
    controlPaddingHorizontal: f,
    colorFillAlter: g,
    colorPrimaryHover: b,
    colorPrimary: p,
    controlOutlineWidth: h,
    controlOutline: v,
    colorErrorOutline: x,
    colorWarningOutline: y,
    colorBgContainer: m
  } = e;
  return {
    paddingBlock: Math.max(Math.round((t - r * n) / 2 * 10) / 10 - a, 0),
    paddingBlockSM: Math.max(Math.round((i - r * n) / 2 * 10) / 10 - a, 0),
    paddingBlockLG: Math.ceil((o - s * c) / 2 * 10) / 10 - a,
    paddingInline: d - a,
    paddingInlineSM: l - a,
    paddingInlineLG: f - a,
    addonBg: g,
    activeBorderColor: p,
    hoverBorderColor: b,
    activeShadow: `0 0 0 ${h}px ${v}`,
    errorActiveShadow: `0 0 0 ${h}px ${x}`,
    warningActiveShadow: `0 0 0 ${h}px ${y}`,
    hoverBg: m,
    activeBg: m,
    inputFontSize: r,
    inputFontSizeLG: s,
    inputFontSizeSM: r
  };
}, Zc = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), Ca = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, Zc(nr(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), no = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: t.borderColor,
  "&:hover": {
    borderColor: t.hoverBorderColor,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: t.activeBorderColor,
    boxShadow: t.activeShadow,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), oi = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, no(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: t.borderColor
  }
}), Xc = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, no(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Ca(e))
  }), oi(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), oi(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), si = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), Qc = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${Re(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, si(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), si(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, Ca(e))
    }
  })
}), Yc = (e, t) => ({
  "&-borderless": Object.assign({
    background: "transparent",
    border: "none",
    "&:focus, &:focus-within": {
      outline: "none"
    },
    [`&${e.componentCls}-disabled, &[disabled]`]: {
      color: e.colorTextDisabled
    }
  }, t)
}), ao = (e, t) => ({
  background: t.bg,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: "transparent",
  "input&, & input, textarea&, & textarea": {
    color: t == null ? void 0 : t.inputColor
  },
  "&:hover": {
    background: t.hoverBg
  },
  "&:focus, &:focus-within": {
    outline: 0,
    borderColor: t.activeBorderColor,
    backgroundColor: e.activeBg
  }
}), li = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, ao(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), Jc = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ao(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.colorPrimary
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Ca(e))
  }), li(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), li(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), ci = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), eu = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.colorFillTertiary
      },
      [`${e.componentCls}-filled:not(:focus):not(:focus-within)`]: {
        "&:not(:first-child)": {
          borderInlineStart: `${Re(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        },
        "&:not(:last-child)": {
          borderInlineEnd: `${Re(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        }
      }
    }
  }, ci(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), ci(e, {
    status: "warning",
    addonBg: e.colorWarningBg,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group`]: {
        "&-addon": {
          background: e.colorFillTertiary,
          color: e.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${Re(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${Re(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${Re(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${Re(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${Re(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${Re(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), tu = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), io = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: r,
    borderRadiusLG: n,
    paddingInlineLG: a
  } = e;
  return {
    padding: `${Re(t)} ${Re(a)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: r,
    borderRadius: n
  };
}, oo = (e) => ({
  padding: `${Re(e.paddingBlockSM)} ${Re(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), so = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${Re(e.paddingBlock)} ${Re(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, tu(e.colorTextPlaceholder)), {
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    // prevent textarea resize from coming out of its container
    height: "auto",
    minHeight: e.controlHeight,
    lineHeight: e.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${e.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": Object.assign({}, io(e)),
  "&-sm": Object.assign({}, oo(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), ru = (e) => {
  const {
    componentCls: t,
    antCls: r
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, io(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, oo(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${r}-select-single ${r}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${r}-select-single ${r}-select-selector`]: {
      height: e.controlHeightSM
    },
    [`> ${t}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${t}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${Re(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${r}-select`]: {
          margin: `${Re(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${Re(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${r}-select-single:not(${r}-select-customize-input):not(${r}-pagination-size-changer)`]: {
            [`${r}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${Re(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          },
          "&-open, &-focused": {
            [`${r}-select-selector`]: {
              color: e.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${r}-cascader-picker`]: {
          margin: `-9px ${Re(e.calc(e.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${r}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [`${t}`]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${r}-select ${r}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}-affix-wrapper`]: {
      [`&:not(:first-child) ${t}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${t}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${r}-select ${r}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${t}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${t}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, Lo()), {
      [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover, &:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-block",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${r}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [`${t}`]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${r}-select > ${r}-select-selector,
      & > ${r}-select-auto-complete ${t},
      & > ${r}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`& > ${r}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${r}-select > ${r}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${r}-select:first-child > ${r}-select-selector,
      & > ${r}-select-auto-complete:first-child ${t},
      & > ${r}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${r}-select:last-child > ${r}-select-selector,
      & > ${r}-cascader-picker:last-child ${t},
      & > ${r}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${r}-select-auto-complete ${t}`]: {
        verticalAlign: "top"
      },
      [`${t}-group-wrapper + ${t}-group-wrapper`]: {
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${t}-group-wrapper:not(:last-child)`]: {
        [`&${t}-search > ${t}-group`]: {
          [`& > ${t}-group-addon > ${t}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    })
  };
}, nu = (e) => {
  const {
    componentCls: t,
    controlHeightSM: r,
    lineWidth: n,
    calc: a
  } = e, o = a(r).sub(a(n).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, pa(e)), so(e)), Xc(e)), Jc(e)), Yc(e)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: r,
          paddingTop: o,
          paddingBottom: o
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        "-webkit-appearance": "none"
      }
    })
  };
}, au = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ========================= Input =========================
    [`${t}-clear-icon`]: {
      margin: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "&:hover": {
        color: e.colorTextTertiary
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${Re(e.inputAffixPadding)}`
      }
    }
  };
}, iu = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: r,
    colorTextDescription: n,
    motionDurationSlow: a,
    colorIcon: i,
    colorIconHover: o,
    iconCls: s
  } = e;
  return {
    [`${t}-affix-wrapper`]: Object.assign(Object.assign(Object.assign(Object.assign({}, so(e)), {
      display: "inline-flex",
      [`&:not(${t}-disabled):hover`]: {
        zIndex: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${t}`]: {
        padding: 0
      },
      [`> input${t}, > textarea${t}`]: {
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${t}`]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: n
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: r
        },
        "&-suffix": {
          marginInlineStart: r
        }
      }
    }), au(e)), {
      // password
      [`${s}${t}-password-icon`]: {
        color: i,
        cursor: "pointer",
        transition: `all ${a}`,
        "&:hover": {
          color: o
        }
      }
    })
  };
}, ou = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: r,
    borderRadiusSM: n
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, pa(e)), ru(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${t}-group-addon`]: {
            borderRadius: r,
            fontSize: e.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: n
          }
        }
      }, Qc(e)), eu(e)), {
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        }
      })
    })
  };
}, su = (e) => {
  const {
    componentCls: t,
    antCls: r
  } = e, n = `${t}-search`;
  return {
    [n]: {
      [`${t}`]: {
        "&:hover, &:focus": {
          borderColor: e.colorPrimaryHover,
          [`+ ${t}-group-addon ${n}-button:not(${r}-btn-primary)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${t}-affix-wrapper`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#components-auto-complete-demo-certain-category
      [`${t}-lg`]: {
        lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal({
          unit: !1
        })
      },
      [`> ${t}-group`]: {
        [`> ${t}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${n}-button`]: {
            // Fix https://github.com/ant-design/ant-design/issues/47150
            marginInlineEnd: -1,
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderStartEndRadius: e.borderRadius,
            borderEndEndRadius: e.borderRadius,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${n}-button:not(${r}-btn-primary)`]: {
            color: e.colorTextDescription,
            "&:hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${r}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${n}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`&-large ${n}-button`]: {
        height: e.controlHeightLG
      },
      [`&-small ${n}-button`]: {
        height: e.controlHeightSM
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${t}-compact-item`]: {
        [`&:not(${t}-compact-last-item)`]: {
          [`${t}-group-addon`]: {
            [`${t}-search-button`]: {
              marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
              borderRadius: 0
            }
          }
        },
        [`&:not(${t}-compact-first-item)`]: {
          [`${t},${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
          "&:hover, &:focus, &:active": {
            zIndex: 2
          }
        },
        [`> ${t}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
}, lu = (e) => {
  const {
    componentCls: t,
    paddingLG: r
  } = e, n = `${t}-textarea`;
  return {
    [n]: {
      position: "relative",
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${t}`]: {
          height: "100%"
        },
        [`${t}-data-count`]: {
          position: "absolute",
          bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: e.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      [`
        &-allow-clear > ${t},
        &-affix-wrapper${n}-has-feedback ${t}
      `]: {
        paddingInlineEnd: r
      },
      [`&-affix-wrapper${t}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${t}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          background: "transparent",
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${t}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${t}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: e.paddingXS,
            insetBlockStart: e.paddingXS
          },
          // Feedback Icon
          [`${n}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: e.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      }
    }
  };
}, cu = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-out-of-range`]: {
      [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
        color: e.colorError
      }
    }
  };
}, lo = an("Input", (e) => {
  const t = nr(e, Gc(e));
  return [
    nu(t),
    lu(t),
    iu(t),
    ou(t),
    su(t),
    cu(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Gs(t)
  ];
}, Kc, {
  resetFont: !1
});
function uu(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function du(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function ui(e, t, r) {
  var n = t.cloneNode(!0), a = Object.create(e, {
    target: {
      value: n
    },
    currentTarget: {
      value: n
    }
  });
  return n.value = r, typeof t.selectionStart == "number" && typeof t.selectionEnd == "number" && (n.selectionStart = t.selectionStart, n.selectionEnd = t.selectionEnd), n.setSelectionRange = function() {
    t.setSelectionRange.apply(t, arguments);
  }, a;
}
function en(e, t, r, n) {
  if (r) {
    var a = t;
    if (t.type === "click") {
      a = ui(t, e, ""), r(a);
      return;
    }
    if (e.type !== "file" && n !== void 0) {
      a = ui(t, e, n), r(a);
      return;
    }
    r(a);
  }
}
function fu(e, t) {
  if (e) {
    e.focus(t);
    var r = t || {}, n = r.cursor;
    if (n) {
      var a = e.value.length;
      switch (n) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(a, a);
          break;
        default:
          e.setSelectionRange(0, a);
      }
    }
  }
}
var co = /* @__PURE__ */ ae.forwardRef(function(e, t) {
  var r, n, a = e.inputElement, i = e.children, o = e.prefixCls, s = e.prefix, c = e.suffix, d = e.addonBefore, l = e.addonAfter, f = e.className, g = e.style, b = e.disabled, p = e.readOnly, h = e.focused, v = e.triggerFocus, x = e.allowClear, y = e.value, m = e.handleReset, E = e.hidden, R = e.classes, $ = e.classNames, F = e.dataAttrs, P = e.styles, C = e.components, I = i ?? a, M = (C == null ? void 0 : C.affixWrapper) || "span", A = (C == null ? void 0 : C.groupWrapper) || "span", j = (C == null ? void 0 : C.wrapper) || "span", T = (C == null ? void 0 : C.groupAddon) || "span", z = Be(null), O = function(J) {
    var me;
    (me = z.current) !== null && me !== void 0 && me.contains(J.target) && (v == null || v());
  }, w = du(e), S = /* @__PURE__ */ Co(I, {
    value: y,
    className: Y(I.props.className, !w && ($ == null ? void 0 : $.variant)) || null
  }), V = Be(null);
  if (ae.useImperativeHandle(t, function() {
    return {
      nativeElement: V.current || z.current
    };
  }), w) {
    var _, L = null;
    if (x) {
      var W, U = !b && !p && y, q = "".concat(o, "-clear-icon"), G = Ae(x) === "object" && x !== null && x !== void 0 && x.clearIcon ? x.clearIcon : "✖";
      L = /* @__PURE__ */ ae.createElement("span", {
        onClick: m,
        onMouseDown: function(J) {
          return J.preventDefault();
        },
        className: Y(q, (W = {}, N(W, "".concat(q, "-hidden"), !U), N(W, "".concat(q, "-has-suffix"), !!c), W)),
        role: "button",
        tabIndex: -1
      }, G);
    }
    var k = "".concat(o, "-affix-wrapper"), oe = Y(k, (_ = {}, N(_, "".concat(o, "-disabled"), b), N(_, "".concat(k, "-disabled"), b), N(_, "".concat(k, "-focused"), h), N(_, "".concat(k, "-readonly"), p), N(_, "".concat(k, "-input-with-clear-btn"), c && x && y), _), R == null ? void 0 : R.affixWrapper, $ == null ? void 0 : $.affixWrapper, $ == null ? void 0 : $.variant), de = (c || x) && /* @__PURE__ */ ae.createElement("span", {
      className: Y("".concat(o, "-suffix"), $ == null ? void 0 : $.suffix),
      style: P == null ? void 0 : P.suffix
    }, L, c);
    S = /* @__PURE__ */ ae.createElement(M, ze({
      className: oe,
      style: P == null ? void 0 : P.affixWrapper,
      onClick: O
    }, F == null ? void 0 : F.affixWrapper, {
      ref: z
    }), s && /* @__PURE__ */ ae.createElement("span", {
      className: Y("".concat(o, "-prefix"), $ == null ? void 0 : $.prefix),
      style: P == null ? void 0 : P.prefix
    }, s), S, de);
  }
  if (uu(e)) {
    var ge = "".concat(o, "-group"), we = "".concat(ge, "-addon"), Se = "".concat(ge, "-wrapper"), Ee = Y("".concat(o, "-wrapper"), ge, R == null ? void 0 : R.wrapper, $ == null ? void 0 : $.wrapper), he = Y(Se, N({}, "".concat(Se, "-disabled"), b), R == null ? void 0 : R.group, $ == null ? void 0 : $.groupWrapper);
    S = /* @__PURE__ */ ae.createElement(A, {
      className: he,
      ref: V
    }, /* @__PURE__ */ ae.createElement(j, {
      className: Ee
    }, d && /* @__PURE__ */ ae.createElement(T, {
      className: we
    }, d), S, l && /* @__PURE__ */ ae.createElement(T, {
      className: we
    }, l)));
  }
  return /* @__PURE__ */ ae.cloneElement(S, {
    className: Y((r = S.props) === null || r === void 0 ? void 0 : r.className, f) || null,
    style: D(D({}, (n = S.props) === null || n === void 0 ? void 0 : n.style), g),
    hidden: E
  });
}), vu = ["show"];
function uo(e, t) {
  return u.useMemo(function() {
    var r = {};
    t && (r.show = Ae(t) === "object" && t.formatter ? t.formatter : !!t), r = D(D({}, r), e);
    var n = r, a = n.show, i = ut(n, vu);
    return D(D({}, i), {}, {
      show: !!a,
      showFormatter: typeof a == "function" ? a : void 0,
      strategy: i.strategy || function(o) {
        return o.length;
      }
    });
  }, [e, t]);
}
var gu = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], mu = /* @__PURE__ */ tn(function(e, t) {
  var r = e.autoComplete, n = e.onChange, a = e.onFocus, i = e.onBlur, o = e.onPressEnter, s = e.onKeyDown, c = e.prefixCls, d = c === void 0 ? "rc-input" : c, l = e.disabled, f = e.htmlSize, g = e.className, b = e.maxLength, p = e.suffix, h = e.showCount, v = e.count, x = e.type, y = x === void 0 ? "text" : x, m = e.classes, E = e.classNames, R = e.styles, $ = e.onCompositionStart, F = e.onCompositionEnd, P = ut(e, gu), C = Hn(!1), I = ie(C, 2), M = I[0], A = I[1], j = Be(!1), T = Be(null), z = Be(null), O = function(X) {
    T.current && fu(T.current, X);
  }, w = Yt(e.defaultValue, {
    value: e.value
  }), S = ie(w, 2), V = S[0], _ = S[1], L = V == null ? "" : String(V), W = Hn(null), U = ie(W, 2), q = U[0], G = U[1], k = uo(v, h), oe = k.max || b, de = k.strategy(L), ge = !!oe && de > oe;
  ua(t, function() {
    var te;
    return {
      focus: O,
      blur: function() {
        var ye;
        (ye = T.current) === null || ye === void 0 || ye.blur();
      },
      setSelectionRange: function(ye, le, be) {
        var pe;
        (pe = T.current) === null || pe === void 0 || pe.setSelectionRange(ye, le, be);
      },
      select: function() {
        var ye;
        (ye = T.current) === null || ye === void 0 || ye.select();
      },
      input: T.current,
      nativeElement: ((te = z.current) === null || te === void 0 ? void 0 : te.nativeElement) || T.current
    };
  }), It(function() {
    A(function(te) {
      return te && l ? !1 : te;
    });
  }, [l]);
  var we = function(X, ye, le) {
    var be = ye;
    if (!j.current && k.exceedFormatter && k.max && k.strategy(ye) > k.max) {
      if (be = k.exceedFormatter(ye, {
        max: k.max
      }), ye !== be) {
        var pe, xe;
        G([((pe = T.current) === null || pe === void 0 ? void 0 : pe.selectionStart) || 0, ((xe = T.current) === null || xe === void 0 ? void 0 : xe.selectionEnd) || 0]);
      }
    } else if (le.source === "compositionEnd")
      return;
    _(be), T.current && en(T.current, X, n, be);
  };
  It(function() {
    if (q) {
      var te;
      (te = T.current) === null || te === void 0 || te.setSelectionRange.apply(te, re(q));
    }
  }, [q]);
  var Se = function(X) {
    we(X, X.target.value, {
      source: "change"
    });
  }, Ee = function(X) {
    j.current = !1, we(X, X.currentTarget.value, {
      source: "compositionEnd"
    }), F == null || F(X);
  }, he = function(X) {
    o && X.key === "Enter" && o(X), s == null || s(X);
  }, Z = function(X) {
    A(!0), a == null || a(X);
  }, J = function(X) {
    A(!1), i == null || i(X);
  }, me = function(X) {
    _(""), O(), T.current && en(T.current, X, n);
  }, ue = ge && "".concat(d, "-out-of-range"), Ne = function() {
    var X = ha(e, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "count",
      "classes",
      "htmlSize",
      "styles",
      "classNames"
    ]);
    return /* @__PURE__ */ ae.createElement("input", ze({
      autoComplete: r
    }, X, {
      onChange: Se,
      onFocus: Z,
      onBlur: J,
      onKeyDown: he,
      className: Y(d, N({}, "".concat(d, "-disabled"), l), E == null ? void 0 : E.input),
      style: R == null ? void 0 : R.input,
      ref: T,
      size: f,
      type: y,
      onCompositionStart: function(le) {
        j.current = !0, $ == null || $(le);
      },
      onCompositionEnd: Ee
    }));
  }, se = function() {
    var X = Number(oe) > 0;
    if (p || k.show) {
      var ye = k.showFormatter ? k.showFormatter({
        value: L,
        count: de,
        maxLength: oe
      }) : "".concat(de).concat(X ? " / ".concat(oe) : "");
      return /* @__PURE__ */ ae.createElement(ae.Fragment, null, k.show && /* @__PURE__ */ ae.createElement("span", {
        className: Y("".concat(d, "-show-count-suffix"), N({}, "".concat(d, "-show-count-has-suffix"), !!p), E == null ? void 0 : E.count),
        style: D({}, R == null ? void 0 : R.count)
      }, ye), p);
    }
    return null;
  };
  return /* @__PURE__ */ ae.createElement(co, ze({}, P, {
    prefixCls: d,
    className: Y(g, ue),
    handleReset: me,
    value: L,
    focused: M,
    triggerFocus: O,
    suffix: se(),
    disabled: l,
    classes: m,
    classNames: E,
    styles: R
  }), Ne());
});
const fo = (e) => {
  let t;
  return typeof e == "object" && (e != null && e.clearIcon) ? t = e : e && (t = {
    clearIcon: /* @__PURE__ */ ae.createElement(Ni, null)
  }), t;
};
function pu(e, t) {
  const r = Be([]), n = () => {
    r.current.push(setTimeout(() => {
      var a, i, o, s;
      !((a = e.current) === null || a === void 0) && a.input && ((i = e.current) === null || i === void 0 ? void 0 : i.input.getAttribute("type")) === "password" && (!((o = e.current) === null || o === void 0) && o.input.hasAttribute("value")) && ((s = e.current) === null || s === void 0 || s.input.removeAttribute("value"));
    }));
  };
  return It(() => (n(), () => r.current.forEach((a) => {
    a && clearTimeout(a);
  })), []), n;
}
function hu(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
var yu = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function bu(e, t) {
  if (!e)
    return;
  e.focus(t);
  const {
    cursor: r
  } = t || {};
  if (r) {
    const n = e.value.length;
    switch (r) {
      case "start":
        e.setSelectionRange(0, 0);
        break;
      case "end":
        e.setSelectionRange(n, n);
        break;
      default:
        e.setSelectionRange(0, n);
    }
  }
}
const wu = /* @__PURE__ */ tn((e, t) => {
  var r;
  const {
    prefixCls: n,
    bordered: a = !0,
    status: i,
    size: o,
    disabled: s,
    onBlur: c,
    onFocus: d,
    suffix: l,
    allowClear: f,
    addonAfter: g,
    addonBefore: b,
    className: p,
    style: h,
    styles: v,
    rootClassName: x,
    onChange: y,
    classNames: m,
    variant: E
  } = e, R = yu(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: J
    } = bt("Input");
    J(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: $,
    direction: F,
    input: P
  } = ae.useContext(dt), C = $("input", n), I = Be(null), M = Pi(C), [A, j, T] = lo(C, M), {
    compactSize: z,
    compactItemClassnames: O
  } = Hs(C, F), w = ba((J) => {
    var me;
    return (me = o ?? z) !== null && me !== void 0 ? me : J;
  }), S = ae.useContext(bi), V = s ?? S, {
    status: _,
    hasFeedback: L,
    feedbackIcon: W
  } = Cr(wr), U = Zi(_, i), q = hu(e) || !!L, G = Be(q);
  if (process.env.NODE_ENV !== "production") {
    const J = bt("Input");
    It(() => {
      var me;
      q && !G.current && process.env.NODE_ENV !== "production" && J(document.activeElement === ((me = I.current) === null || me === void 0 ? void 0 : me.input), "usage", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), G.current = q;
    }, [q]);
  }
  const k = pu(I), oe = (J) => {
    k(), c == null || c(J);
  }, de = (J) => {
    k(), d == null || d(J);
  }, ge = (J) => {
    k(), y == null || y(J);
  }, we = (L || l) && /* @__PURE__ */ ae.createElement(ae.Fragment, null, l, L && W), Se = (J) => J && /* @__PURE__ */ ae.createElement(Vi, null, /* @__PURE__ */ ae.createElement(Jl, {
    override: !0,
    status: !0
  }, J)), Ee = fo(f ?? (P == null ? void 0 : P.allowClear)), [he, Z] = Xi(E, a);
  return A(/* @__PURE__ */ ae.createElement(mu, Object.assign({
    ref: rr(t, I),
    prefixCls: C,
    autoComplete: P == null ? void 0 : P.autoComplete
  }, R, {
    disabled: V,
    onBlur: oe,
    onFocus: de,
    style: Object.assign(Object.assign({}, P == null ? void 0 : P.style), h),
    styles: Object.assign(Object.assign({}, P == null ? void 0 : P.styles), v),
    suffix: we,
    allowClear: Ee,
    className: Y(p, x, T, M, O, P == null ? void 0 : P.className),
    onChange: ge,
    addonBefore: Se(b),
    addonAfter: Se(g),
    classNames: Object.assign(Object.assign(Object.assign({}, m), P == null ? void 0 : P.classNames), {
      input: Y({
        [`${C}-sm`]: w === "small",
        [`${C}-lg`]: w === "large",
        [`${C}-rtl`]: F === "rtl"
      }, m == null ? void 0 : m.input, (r = P == null ? void 0 : P.classNames) === null || r === void 0 ? void 0 : r.input, j),
      variant: Y({
        [`${C}-${he}`]: Z
      }, ca(C, U)),
      affixWrapper: Y({
        [`${C}-affix-wrapper-sm`]: w === "small",
        [`${C}-affix-wrapper-lg`]: w === "large",
        [`${C}-affix-wrapper-rtl`]: F === "rtl"
      }, j),
      wrapper: Y({
        [`${C}-group-rtl`]: F === "rtl"
      }, j),
      groupWrapper: Y({
        [`${C}-group-wrapper-sm`]: w === "small",
        [`${C}-group-wrapper-lg`]: w === "large",
        [`${C}-group-wrapper-rtl`]: F === "rtl",
        [`${C}-group-wrapper-${he}`]: Z
      }, ca(`${C}-group-wrapper`, U, L), j)
    })
  })));
});
process.env.NODE_ENV !== "production" && (wu.displayName = "Input");
var Eu = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`, Cu = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], An = {}, Ye;
function Su(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && An[r])
    return An[r];
  var n = window.getComputedStyle(e), a = n.getPropertyValue("box-sizing") || n.getPropertyValue("-moz-box-sizing") || n.getPropertyValue("-webkit-box-sizing"), i = parseFloat(n.getPropertyValue("padding-bottom")) + parseFloat(n.getPropertyValue("padding-top")), o = parseFloat(n.getPropertyValue("border-bottom-width")) + parseFloat(n.getPropertyValue("border-top-width")), s = Cu.map(function(d) {
    return "".concat(d, ":").concat(n.getPropertyValue(d));
  }).join(";"), c = {
    sizingStyle: s,
    paddingSize: i,
    borderSize: o,
    boxSizing: a
  };
  return t && r && (An[r] = c), c;
}
function xu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  Ye || (Ye = document.createElement("textarea"), Ye.setAttribute("tab-index", "-1"), Ye.setAttribute("aria-hidden", "true"), document.body.appendChild(Ye)), e.getAttribute("wrap") ? Ye.setAttribute("wrap", e.getAttribute("wrap")) : Ye.removeAttribute("wrap");
  var a = Su(e, t), i = a.paddingSize, o = a.borderSize, s = a.boxSizing, c = a.sizingStyle;
  Ye.setAttribute("style", "".concat(c, ";").concat(Eu)), Ye.value = e.value || e.placeholder || "";
  var d = void 0, l = void 0, f, g = Ye.scrollHeight;
  if (s === "border-box" ? g += o : s === "content-box" && (g -= i), r !== null || n !== null) {
    Ye.value = " ";
    var b = Ye.scrollHeight - i;
    r !== null && (d = b * r, s === "border-box" && (d = d + i + o), g = Math.max(d, g)), n !== null && (l = b * n, s === "border-box" && (l = l + i + o), f = g > l ? "" : "hidden", g = Math.min(l, g));
  }
  var p = {
    height: g,
    overflowY: f,
    resize: "none"
  };
  return d && (p.minHeight = d), l && (p.maxHeight = l), p;
}
var Ou = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], Vn = 0, Ln = 1, jn = 2, $u = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e, n = r.prefixCls;
  r.onPressEnter;
  var a = r.defaultValue, i = r.value, o = r.autoSize, s = r.onResize, c = r.className, d = r.style, l = r.disabled, f = r.onChange, g = r.onInternalAutoSize, b = ut(r, Ou), p = Yt(a, {
    value: i,
    postState: function(G) {
      return G ?? "";
    }
  }), h = ie(p, 2), v = h[0], x = h[1], y = function(G) {
    x(G.target.value), f == null || f(G);
  }, m = u.useRef();
  u.useImperativeHandle(t, function() {
    return {
      textArea: m.current
    };
  });
  var E = u.useMemo(function() {
    return o && Ae(o) === "object" ? [o.minRows, o.maxRows] : [];
  }, [o]), R = ie(E, 2), $ = R[0], F = R[1], P = !!o, C = function() {
    try {
      if (document.activeElement === m.current) {
        var G = m.current, k = G.selectionStart, oe = G.selectionEnd, de = G.scrollTop;
        m.current.setSelectionRange(k, oe), m.current.scrollTop = de;
      }
    } catch {
    }
  }, I = u.useState(jn), M = ie(I, 2), A = M[0], j = M[1], T = u.useState(), z = ie(T, 2), O = z[0], w = z[1], S = function() {
    j(Vn), process.env.NODE_ENV === "test" && (g == null || g());
  };
  Le(function() {
    P && S();
  }, [i, $, F, P]), Le(function() {
    if (A === Vn)
      j(Ln);
    else if (A === Ln) {
      var q = xu(m.current, !1, $, F);
      j(jn), w(q);
    } else
      C();
  }, [A]);
  var V = u.useRef(), _ = function() {
    Xt.cancel(V.current);
  }, L = function(G) {
    A === jn && (s == null || s(G), o && (_(), V.current = Xt(function() {
      S();
    })));
  };
  u.useEffect(function() {
    return _;
  }, []);
  var W = P ? O : null, U = D(D({}, d), W);
  return (A === Vn || A === Ln) && (U.overflowY = "hidden", U.overflowX = "hidden"), /* @__PURE__ */ u.createElement(ir, {
    onResize: L,
    disabled: !(o || s)
  }, /* @__PURE__ */ u.createElement("textarea", ze({}, b, {
    ref: m,
    style: U,
    className: Y(n, c, N({}, "".concat(n, "-disabled"), l)),
    disabled: l,
    value: v,
    onChange: y
  })));
}), Ru = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "readOnly"], Fu = /* @__PURE__ */ ae.forwardRef(function(e, t) {
  var r, n = e.defaultValue, a = e.value, i = e.onFocus, o = e.onBlur, s = e.onChange, c = e.allowClear, d = e.maxLength, l = e.onCompositionStart, f = e.onCompositionEnd, g = e.suffix, b = e.prefixCls, p = b === void 0 ? "rc-textarea" : b, h = e.showCount, v = e.count, x = e.className, y = e.style, m = e.disabled, E = e.hidden, R = e.classNames, $ = e.styles, F = e.onResize, P = e.readOnly, C = ut(e, Ru), I = Yt(n, {
    value: a,
    defaultValue: n
  }), M = ie(I, 2), A = M[0], j = M[1], T = A == null ? "" : String(A), z = ae.useState(!1), O = ie(z, 2), w = O[0], S = O[1], V = ae.useRef(!1), _ = ae.useState(null), L = ie(_, 2), W = L[0], U = L[1], q = Be(null), G = Be(null), k = function() {
    var ne;
    return (ne = G.current) === null || ne === void 0 ? void 0 : ne.textArea;
  }, oe = function() {
    k().focus();
  };
  ua(t, function() {
    var fe;
    return {
      resizableTextArea: G.current,
      focus: oe,
      blur: function() {
        k().blur();
      },
      nativeElement: ((fe = q.current) === null || fe === void 0 ? void 0 : fe.nativeElement) || k()
    };
  }), It(function() {
    S(function(fe) {
      return !m && fe;
    });
  }, [m]);
  var de = ae.useState(null), ge = ie(de, 2), we = ge[0], Se = ge[1];
  ae.useEffect(function() {
    if (we) {
      var fe;
      (fe = k()).setSelectionRange.apply(fe, re(we));
    }
  }, [we]);
  var Ee = uo(v, h), he = (r = Ee.max) !== null && r !== void 0 ? r : d, Z = Number(he) > 0, J = Ee.strategy(T), me = !!he && J > he, ue = function(ne, Oe) {
    var $e = Oe;
    !V.current && Ee.exceedFormatter && Ee.max && Ee.strategy(Oe) > Ee.max && ($e = Ee.exceedFormatter(Oe, {
      max: Ee.max
    }), Oe !== $e && Se([k().selectionStart || 0, k().selectionEnd || 0])), j($e), en(ne.currentTarget, ne, s, $e);
  }, Ne = function(ne) {
    V.current = !0, l == null || l(ne);
  }, se = function(ne) {
    V.current = !1, ue(ne, ne.currentTarget.value), f == null || f(ne);
  }, te = function(ne) {
    ue(ne, ne.target.value);
  }, X = function(ne) {
    var Oe = C.onPressEnter, $e = C.onKeyDown;
    ne.key === "Enter" && Oe && Oe(ne), $e == null || $e(ne);
  }, ye = function(ne) {
    S(!0), i == null || i(ne);
  }, le = function(ne) {
    S(!1), o == null || o(ne);
  }, be = function(ne) {
    j(""), oe(), en(k(), ne, s);
  }, pe = g, xe;
  Ee.show && (Ee.showFormatter ? xe = Ee.showFormatter({
    value: T,
    count: J,
    maxLength: he
  }) : xe = "".concat(J).concat(Z ? " / ".concat(he) : ""), pe = /* @__PURE__ */ ae.createElement(ae.Fragment, null, pe, /* @__PURE__ */ ae.createElement("span", {
    className: Y("".concat(p, "-data-count"), R == null ? void 0 : R.count),
    style: $ == null ? void 0 : $.count
  }, xe)));
  var ft = function(ne) {
    var Oe;
    F == null || F(ne), (Oe = k()) !== null && Oe !== void 0 && Oe.style.height && U(!0);
  }, nt = !C.autoSize && !h && !c;
  return /* @__PURE__ */ ae.createElement(co, {
    ref: q,
    value: T,
    allowClear: c,
    handleReset: be,
    suffix: pe,
    prefixCls: p,
    classNames: D(D({}, R), {}, {
      affixWrapper: Y(R == null ? void 0 : R.affixWrapper, N(N({}, "".concat(p, "-show-count"), h), "".concat(p, "-textarea-allow-clear"), c))
    }),
    disabled: m,
    focused: w,
    className: Y(x, me && "".concat(p, "-out-of-range")),
    style: D(D({}, y), W && !nt ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof xe == "string" ? xe : void 0
      }
    },
    hidden: E,
    readOnly: P
  }, /* @__PURE__ */ ae.createElement($u, ze({}, C, {
    maxLength: d,
    onKeyDown: X,
    onChange: te,
    onFocus: ye,
    onBlur: le,
    onCompositionStart: Ne,
    onCompositionEnd: se,
    className: Y(R == null ? void 0 : R.textarea),
    style: D(D({}, $ == null ? void 0 : $.textarea), {}, {
      resize: y == null ? void 0 : y.resize
    }),
    disabled: m,
    prefixCls: p,
    onResize: ft,
    ref: G,
    readOnly: P
  })));
}), Nu = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Pu = /* @__PURE__ */ tn((e, t) => {
  var r, n;
  const {
    prefixCls: a,
    bordered: i = !0,
    size: o,
    disabled: s,
    status: c,
    allowClear: d,
    classNames: l,
    rootClassName: f,
    className: g,
    style: b,
    styles: p,
    variant: h
  } = e, v = Nu(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: _
    } = bt("TextArea");
    _(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: x,
    direction: y,
    textArea: m
  } = u.useContext(dt), E = ba(o), R = u.useContext(bi), $ = s ?? R, {
    status: F,
    hasFeedback: P,
    feedbackIcon: C
  } = u.useContext(wr), I = Zi(F, c), M = u.useRef(null);
  u.useImperativeHandle(t, () => {
    var _;
    return {
      resizableTextArea: (_ = M.current) === null || _ === void 0 ? void 0 : _.resizableTextArea,
      focus: (L) => {
        var W, U;
        bu((U = (W = M.current) === null || W === void 0 ? void 0 : W.resizableTextArea) === null || U === void 0 ? void 0 : U.textArea, L);
      },
      blur: () => {
        var L;
        return (L = M.current) === null || L === void 0 ? void 0 : L.blur();
      }
    };
  });
  const A = x("input", a), j = Pi(A), [T, z, O] = lo(A, j), [w, S] = Xi(h, i), V = fo(d ?? (m == null ? void 0 : m.allowClear));
  return T(/* @__PURE__ */ u.createElement(Fu, Object.assign({
    autoComplete: m == null ? void 0 : m.autoComplete
  }, v, {
    style: Object.assign(Object.assign({}, m == null ? void 0 : m.style), b),
    styles: Object.assign(Object.assign({}, m == null ? void 0 : m.styles), p),
    disabled: $,
    allowClear: V,
    className: Y(O, j, g, f, m == null ? void 0 : m.className),
    classNames: Object.assign(Object.assign(Object.assign({}, l), m == null ? void 0 : m.classNames), {
      textarea: Y({
        [`${A}-sm`]: E === "small",
        [`${A}-lg`]: E === "large"
      }, z, l == null ? void 0 : l.textarea, (r = m == null ? void 0 : m.classNames) === null || r === void 0 ? void 0 : r.textarea),
      variant: Y({
        [`${A}-${w}`]: S
      }, ca(A, I)),
      affixWrapper: Y(`${A}-textarea-affix-wrapper`, {
        [`${A}-affix-wrapper-rtl`]: y === "rtl",
        [`${A}-affix-wrapper-sm`]: E === "small",
        [`${A}-affix-wrapper-lg`]: E === "large",
        [`${A}-textarea-show-count`]: e.showCount || ((n = e.count) === null || n === void 0 ? void 0 : n.show)
      }, z)
    }),
    prefixCls: A,
    suffix: P && /* @__PURE__ */ u.createElement("span", {
      className: `${A}-textarea-suffix`
    }, C),
    ref: M
  })));
});
var _u = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Iu = {
  border: 0,
  background: "transparent",
  padding: 0,
  lineHeight: "inherit",
  display: "inline-block"
}, vo = /* @__PURE__ */ u.forwardRef((e, t) => {
  const r = (l) => {
    const {
      keyCode: f
    } = l;
    f === K.ENTER && l.preventDefault();
  }, n = (l) => {
    const {
      keyCode: f
    } = l, {
      onClick: g
    } = e;
    f === K.ENTER && g && g();
  }, {
    style: a,
    noStyle: i,
    disabled: o,
    tabIndex: s = 0
  } = e, c = _u(e, ["style", "noStyle", "disabled", "tabIndex"]);
  let d = {};
  return i || (d = Object.assign({}, Iu)), o && (d.pointerEvents = "none"), d = Object.assign(Object.assign({}, d), a), /* @__PURE__ */ u.createElement("div", Object.assign({
    role: "button",
    tabIndex: s,
    ref: t
  }, c, {
    onKeyDown: r,
    onKeyUp: n,
    style: d
  }));
});
var Tu = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, name: "edit", theme: "outlined" }, Mu = function(t, r) {
  return /* @__PURE__ */ u.createElement(ar, ze({}, t, {
    ref: r,
    icon: Tu
  }));
}, go = /* @__PURE__ */ u.forwardRef(Mu);
process.env.NODE_ENV !== "production" && (go.displayName = "EditOutlined");
var Au = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, name: "enter", theme: "outlined" }, Vu = function(t, r) {
  return /* @__PURE__ */ u.createElement(ar, ze({}, t, {
    ref: r,
    icon: Au
  }));
}, mo = /* @__PURE__ */ u.forwardRef(Vu);
process.env.NODE_ENV !== "production" && (mo.displayName = "EnterOutlined");
const Lu = (e, t, r, n) => {
  const {
    titleMarginBottom: a,
    fontWeightStrong: i
  } = n;
  return {
    marginBottom: a,
    color: r,
    fontWeight: i,
    fontSize: e,
    lineHeight: t
  };
}, ju = (e) => {
  const t = [1, 2, 3, 4, 5], r = {};
  return t.forEach((n) => {
    r[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `] = Lu(e[`fontSizeHeading${n}`], e[`lineHeightHeading${n}`], e.colorTextHeading, e);
  }), r;
}, Du = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    "a&, a": Object.assign(Object.assign({}, Fi(e)), {
      textDecoration: e.linkDecoration,
      "&:active, &:hover": {
        textDecoration: e.linkHoverDecoration
      },
      [`&[disabled], &${t}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        "&:active, &:hover": {
          color: e.colorTextDisabled
        },
        "&:active": {
          pointerEvents: "none"
        }
      }
    })
  };
}, zu = (e) => ({
  code: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.2em 0.1em",
    fontSize: "85%",
    fontFamily: e.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3
  },
  kbd: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.15em 0.1em",
    fontSize: "90%",
    fontFamily: e.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.06)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderBottomWidth: 2,
    borderRadius: 3
  },
  mark: {
    padding: 0,
    // FIXME hardcode in v4
    backgroundColor: So[2]
  },
  "u, ins": {
    textDecoration: "underline",
    textDecorationSkipInk: "auto"
  },
  "s, del": {
    textDecoration: "line-through"
  },
  strong: {
    fontWeight: 600
  },
  // list
  "ul, ol": {
    marginInline: 0,
    marginBlock: "0 1em",
    padding: 0,
    li: {
      marginInline: "20px 0",
      marginBlock: 0,
      paddingInline: "4px 0",
      paddingBlock: 0
    }
  },
  ul: {
    listStyleType: "circle",
    ul: {
      listStyleType: "disc"
    }
  },
  ol: {
    listStyleType: "decimal"
  },
  // pre & block
  "pre, blockquote": {
    margin: "1em 0"
  },
  pre: {
    padding: "0.4em 0.6em",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3,
    fontFamily: e.fontFamilyCode,
    // Compatible for marked
    code: {
      display: "inline",
      margin: 0,
      padding: 0,
      fontSize: "inherit",
      fontFamily: "inherit",
      background: "transparent",
      border: 0
    }
  },
  blockquote: {
    paddingInline: "0.6em 0",
    paddingBlock: 0,
    borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
    opacity: 0.85
  }
}), Wu = (e) => {
  const {
    componentCls: t,
    paddingSM: r
  } = e, n = r;
  return {
    "&-edit-content": {
      position: "relative",
      "div&": {
        insetInlineStart: e.calc(e.paddingSM).mul(-1).equal(),
        marginTop: e.calc(n).mul(-1).equal(),
        marginBottom: `calc(1em - ${Re(n)})`
      },
      [`${t}-edit-content-confirm`]: {
        position: "absolute",
        insetInlineEnd: e.calc(e.marginXS).add(2).equal(),
        insetBlockEnd: e.marginXS,
        color: e.colorTextDescription,
        // default style
        fontWeight: "normal",
        fontSize: e.fontSize,
        fontStyle: "normal",
        pointerEvents: "none"
      },
      textarea: {
        margin: "0!important",
        // Fix Editable Textarea flash in Firefox
        MozTransition: "none",
        height: "1em"
      }
    }
  };
}, Bu = (e) => ({
  [`${e.componentCls}-copy-success`]: {
    "\n    &,\n    &:hover,\n    &:focus": {
      color: e.colorSuccess
    }
  },
  [`${e.componentCls}-copy-icon-only`]: {
    marginInlineStart: 0
  }
}), Hu = () => ({
  "\n  a&-ellipsis,\n  span&-ellipsis\n  ": {
    display: "inline-block",
    maxWidth: "100%"
  },
  "&-single-line": {
    whiteSpace: "nowrap"
  },
  "&-ellipsis-single-line": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    // https://blog.csdn.net/iefreer/article/details/50421025
    "a&, span&": {
      verticalAlign: "bottom"
    },
    "> code": {
      paddingBlock: 0,
      maxWidth: "calc(100% - 1.2em)",
      display: "inline-block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      verticalAlign: "bottom",
      // https://github.com/ant-design/ant-design/issues/45953
      boxSizing: "content-box"
    }
  },
  "&-ellipsis-multiple-line": {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical"
  }
}), ku = (e) => {
  const {
    componentCls: t,
    titleMarginTop: r
  } = e;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
      color: e.colorText,
      wordBreak: "break-word",
      lineHeight: e.lineHeight,
      [`&${t}-secondary`]: {
        color: e.colorTextDescription
      },
      [`&${t}-success`]: {
        color: e.colorSuccess
      },
      [`&${t}-warning`]: {
        color: e.colorWarning
      },
      [`&${t}-danger`]: {
        color: e.colorError,
        "a&:active, a&:focus": {
          color: e.colorErrorActive
        },
        "a&:hover": {
          color: e.colorErrorHover
        }
      },
      [`&${t}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        userSelect: "none"
      },
      "\n        div&,\n        p\n      ": {
        marginBottom: "1em"
      }
    }, ju(e)), {
      [`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]: {
        marginTop: r
      },
      "\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5": {
        "\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ": {
          marginTop: r
        }
      }
    }), zu(e)), Du(e)), {
      // Operation
      [`
        ${t}-expand,
        ${t}-collapse,
        ${t}-edit,
        ${t}-copy
      `]: Object.assign(Object.assign({}, Fi(e)), {
        marginInlineStart: e.marginXXS
      })
    }), Wu(e)), Bu(e)), Hu()), {
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
}, Uu = () => ({
  titleMarginTop: "1.2em",
  titleMarginBottom: "0.5em"
}), po = an("Typography", (e) => [ku(e)], Uu), qu = (e) => {
  const {
    prefixCls: t,
    "aria-label": r,
    className: n,
    style: a,
    direction: i,
    maxLength: o,
    autoSize: s = !0,
    value: c,
    onSave: d,
    onCancel: l,
    onEnd: f,
    component: g,
    enterIcon: b = /* @__PURE__ */ u.createElement(mo, null)
  } = e, p = u.useRef(null), h = u.useRef(!1), v = u.useRef(), [x, y] = u.useState(c);
  u.useEffect(() => {
    y(c);
  }, [c]), u.useEffect(() => {
    if (p.current && p.current.resizableTextArea) {
      const {
        textArea: z
      } = p.current.resizableTextArea;
      z.focus();
      const {
        length: O
      } = z.value;
      z.setSelectionRange(O, O);
    }
  }, []);
  const m = (z) => {
    let {
      target: O
    } = z;
    y(O.value.replace(/[\n\r]/g, ""));
  }, E = () => {
    h.current = !0;
  }, R = () => {
    h.current = !1;
  }, $ = (z) => {
    let {
      keyCode: O
    } = z;
    h.current || (v.current = O);
  }, F = () => {
    d(x.trim());
  }, P = (z) => {
    let {
      keyCode: O,
      ctrlKey: w,
      altKey: S,
      metaKey: V,
      shiftKey: _
    } = z;
    v.current === O && !h.current && !w && !S && !V && !_ && (O === K.ENTER ? (F(), f == null || f()) : O === K.ESC && l());
  }, C = () => {
    F();
  }, I = g ? `${t}-${g}` : "", [M, A, j] = po(t), T = Y(t, `${t}-edit-content`, {
    [`${t}-rtl`]: i === "rtl"
  }, n, I, A, j);
  return M(/* @__PURE__ */ u.createElement("div", {
    className: T,
    style: a
  }, /* @__PURE__ */ u.createElement(Pu, {
    ref: p,
    maxLength: o,
    value: x,
    onChange: m,
    onKeyDown: $,
    onKeyUp: P,
    onCompositionStart: E,
    onCompositionEnd: R,
    onBlur: C,
    "aria-label": r,
    rows: 1,
    autoSize: s
  }), b !== null ? ma(b, {
    className: `${t}-edit-content-confirm`
  }) : null));
};
var Gu = function() {
  var e = document.getSelection();
  if (!e.rangeCount)
    return function() {
    };
  for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++)
    r.push(e.getRangeAt(n));
  switch (t.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      t.blur();
      break;
    default:
      t = null;
      break;
  }
  return e.removeAllRanges(), function() {
    e.type === "Caret" && e.removeAllRanges(), e.rangeCount || r.forEach(function(a) {
      e.addRange(a);
    }), t && t.focus();
  };
}, Ku = Gu, di = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, Zu = "Copy to clipboard: #{key}, Enter";
function Xu(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function Qu(e, t) {
  var r, n, a, i, o, s, c = !1;
  t || (t = {}), r = t.debug || !1;
  try {
    a = Ku(), i = document.createRange(), o = document.getSelection(), s = document.createElement("span"), s.textContent = e, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(l) {
      if (l.stopPropagation(), t.format)
        if (l.preventDefault(), typeof l.clipboardData > "u") {
          r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var f = di[t.format] || di.default;
          window.clipboardData.setData(f, e);
        } else
          l.clipboardData.clearData(), l.clipboardData.setData(t.format, e);
      t.onCopy && (l.preventDefault(), t.onCopy(l.clipboardData));
    }), document.body.appendChild(s), i.selectNodeContents(s), o.addRange(i);
    var d = document.execCommand("copy");
    if (!d)
      throw new Error("copy command was unsuccessful");
    c = !0;
  } catch (l) {
    r && console.error("unable to copy using execCommand: ", l), r && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), c = !0;
    } catch (f) {
      r && console.error("unable to copy using clipboardData: ", f), r && console.error("falling back to prompt"), n = Xu("message" in t ? t.message : Zu), window.prompt(n, e);
    }
  } finally {
    o && (typeof o.removeRange == "function" ? o.removeRange(i) : o.removeAllRanges()), s && document.body.removeChild(s), a();
  }
  return c;
}
var Yu = Qu;
const Ju = /* @__PURE__ */ xo(Yu);
var ed = function(e, t, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(o) {
      o(i);
    });
  }
  return new (r || (r = Promise))(function(i, o) {
    function s(l) {
      try {
        d(n.next(l));
      } catch (f) {
        o(f);
      }
    }
    function c(l) {
      try {
        d(n.throw(l));
      } catch (f) {
        o(f);
      }
    }
    function d(l) {
      l.done ? i(l.value) : a(l.value).then(s, c);
    }
    d((n = n.apply(e, t || [])).next());
  });
};
const td = (e) => {
  let {
    copyConfig: t,
    children: r
  } = e;
  const [n, a] = u.useState(!1), [i, o] = u.useState(!1), s = u.useRef(null), c = () => {
    s.current && clearTimeout(s.current);
  }, d = {};
  t.format && (d.format = t.format), u.useEffect(() => c, []);
  const l = tt((f) => ed(void 0, void 0, void 0, function* () {
    var g;
    f == null || f.preventDefault(), f == null || f.stopPropagation(), o(!0);
    try {
      const b = typeof t.text == "function" ? yield t.text() : t.text;
      Ju(b || String(r) || "", d), o(!1), a(!0), c(), s.current = setTimeout(() => {
        a(!1);
      }, 3e3), (g = t.onCopy) === null || g === void 0 || g.call(t, f);
    } catch (b) {
      throw o(!1), b;
    }
  }));
  return {
    copied: n,
    copyLoading: i,
    onClick: l
  };
};
function Dn(e, t) {
  return u.useMemo(() => {
    const r = !!e;
    return [r, Object.assign(Object.assign({}, t), r && typeof e == "object" ? e : null)];
  }, [e]);
}
const rd = (e, t) => {
  const r = u.useRef(!1);
  u.useEffect(() => {
    r.current ? e() : r.current = !0;
  }, t);
}, nd = (e) => {
  const t = Be();
  return It(() => {
    t.current = e;
  }), t.current;
};
var ad = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Sa = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    prefixCls: r,
    component: n = "article",
    className: a,
    rootClassName: i,
    setContentRef: o,
    children: s,
    direction: c,
    style: d
  } = e, l = ad(e, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]), {
    getPrefixCls: f,
    direction: g,
    typography: b
  } = u.useContext(dt), p = c ?? g;
  let h = t;
  o && (h = rr(t, o)), process.env.NODE_ENV !== "production" && bt("Typography").deprecated(!o, "setContentRef", "ref");
  const v = f("typography", r), [x, y, m] = po(v), E = Y(v, b == null ? void 0 : b.className, {
    [`${v}-rtl`]: p === "rtl"
  }, a, i, y, m), R = Object.assign(Object.assign({}, b == null ? void 0 : b.style), d);
  return x(
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    /* @__PURE__ */ u.createElement(n, Object.assign({
      className: E,
      style: R,
      ref: h
    }, l), s)
  );
});
process.env.NODE_ENV !== "production" && (Sa.displayName = "Typography");
var id = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" }, od = function(t, r) {
  return /* @__PURE__ */ u.createElement(ar, ze({}, t, {
    ref: r,
    icon: id
  }));
}, ho = /* @__PURE__ */ u.forwardRef(od);
process.env.NODE_ENV !== "production" && (ho.displayName = "CopyOutlined");
function fi(e) {
  return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e];
}
function Gr(e, t, r) {
  return e === !0 || e === void 0 ? t : e || r && t;
}
const sd = (e) => {
  const {
    prefixCls: t,
    copied: r,
    locale: n,
    iconOnly: a,
    tooltips: i,
    icon: o,
    loading: s,
    tabIndex: c,
    onCopy: d
  } = e, l = fi(i), f = fi(o), {
    copied: g,
    copy: b
  } = n ?? {}, p = r ? Gr(l[1], g) : Gr(l[0], b), v = typeof p == "string" ? p : r ? g : b;
  return /* @__PURE__ */ u.createElement(Rr, {
    key: "copy",
    title: p
  }, /* @__PURE__ */ u.createElement(vo, {
    className: Y(`${t}-copy`, {
      [`${t}-copy-success`]: r,
      [`${t}-copy-icon-only`]: a
    }),
    onClick: d,
    "aria-label": v,
    tabIndex: c
  }, r ? Gr(f[1], /* @__PURE__ */ u.createElement(Qi, null), !0) : Gr(f[0], s ? /* @__PURE__ */ u.createElement(_i, null) : /* @__PURE__ */ u.createElement(ho, null), !0)));
}, Kr = /* @__PURE__ */ u.forwardRef((e, t) => {
  let {
    style: r,
    children: n
  } = e;
  const a = u.useRef(null);
  return u.useImperativeHandle(t, () => ({
    isExceed: () => {
      const i = a.current;
      return i.scrollHeight > i.clientHeight;
    },
    getHeight: () => a.current.clientHeight
  })), /* @__PURE__ */ u.createElement("span", {
    "aria-hidden": !0,
    ref: a,
    style: Object.assign({
      position: "fixed",
      display: "block",
      left: 0,
      top: 0,
      pointerEvents: "none",
      backgroundColor: "rgba(255, 0, 0, 0.65)"
    }, r)
  }, n);
});
function yo(e) {
  const t = typeof e;
  return t === "string" || t === "number";
}
function ld(e) {
  let t = 0;
  return e.forEach((r) => {
    yo(r) ? t += String(r).length : t += 1;
  }), t;
}
function vi(e, t) {
  let r = 0;
  const n = [];
  for (let a = 0; a < e.length; a += 1) {
    if (r === t)
      return n;
    const i = e[a], s = yo(i) ? String(i).length : 1, c = r + s;
    if (c > t) {
      const d = t - r;
      return n.push(String(i).slice(0, d)), n;
    }
    n.push(i), r = c;
  }
  return e;
}
const zn = 0, Wn = 1, Bn = 2, gi = 3, Zr = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical"
};
function cd(e) {
  const {
    enableMeasure: t,
    width: r,
    text: n,
    children: a,
    rows: i,
    expanded: o,
    miscDeps: s,
    onEllipsis: c
  } = e, d = u.useMemo(() => Tt(n), [n]), l = u.useMemo(() => ld(d), [n]), f = u.useMemo(() => a(d, !1), [n]), [g, b] = u.useState(null), p = u.useRef(null), h = u.useRef(null), v = u.useRef(null), x = u.useRef(null), [y, m] = u.useState(!1), [E, R] = u.useState(zn), [$, F] = u.useState(0);
  Le(() => {
    R(t && r && l ? Wn : zn);
  }, [r, n, i, t, d]), Le(() => {
    var M, A, j, T;
    if (E === Wn) {
      const z = !!(!((M = h.current) === null || M === void 0) && M.isExceed());
      R(z ? Bn : gi), b(z ? [0, l] : null), m(z);
      const O = ((A = h.current) === null || A === void 0 ? void 0 : A.getHeight()) || 0, w = i === 1 ? 0 : ((j = v.current) === null || j === void 0 ? void 0 : j.getHeight()) || 0, S = ((T = x.current) === null || T === void 0 ? void 0 : T.getHeight()) || 0, V = w + S, _ = Math.max(O, V);
      F(_ + 1), c(z);
    }
  }, [E]);
  const P = g ? Math.ceil((g[0] + g[1]) / 2) : 0;
  Le(() => {
    var M;
    const [A, j] = g || [0, 0];
    if (A !== j) {
      const z = (((M = p.current) === null || M === void 0 ? void 0 : M.getHeight()) || 0) > $;
      let O = P;
      j - A === 1 && (O = z ? A : j), b(z ? [A, O] : [O, j]);
    }
  }, [g, P]);
  const C = u.useMemo(() => {
    if (E !== Bn || !g || g[0] !== g[1]) {
      const M = a(d, !1);
      return E !== gi && E !== zn ? /* @__PURE__ */ u.createElement("span", {
        style: Object.assign(Object.assign({}, Zr), {
          WebkitLineClamp: i
        })
      }, M) : M;
    }
    return a(o ? d : vi(d, g[0]), y);
  }, [o, E, g, d].concat(re(s))), I = {
    width: r,
    whiteSpace: "normal",
    margin: 0,
    padding: 0
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, C, E === Wn && /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(Kr, {
    style: Object.assign(Object.assign(Object.assign({}, I), Zr), {
      WebkitLineClamp: i
    }),
    ref: h
  }, f), /* @__PURE__ */ u.createElement(Kr, {
    style: Object.assign(Object.assign(Object.assign({}, I), Zr), {
      WebkitLineClamp: i - 1
    }),
    ref: v
  }, f), /* @__PURE__ */ u.createElement(Kr, {
    style: Object.assign(Object.assign(Object.assign({}, I), Zr), {
      WebkitLineClamp: 1
    }),
    ref: x
  }, a([], !0))), E === Bn && g && g[0] !== g[1] && /* @__PURE__ */ u.createElement(Kr, {
    style: Object.assign(Object.assign({}, I), {
      top: 400
    }),
    ref: p
  }, a(vi(d, P), !0)));
}
const bo = (e) => {
  let {
    enableEllipsis: t,
    isEllipsis: r,
    children: n,
    tooltipProps: a
  } = e;
  return !(a != null && a.title) || !t ? n : /* @__PURE__ */ u.createElement(Rr, Object.assign({
    open: r ? void 0 : !1
  }, a), n);
};
process.env.NODE_ENV !== "production" && (bo.displayName = "EllipsisTooltip");
var ud = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function dd(e, t) {
  let {
    mark: r,
    code: n,
    underline: a,
    delete: i,
    strong: o,
    keyboard: s,
    italic: c
  } = e, d = t;
  function l(f, g) {
    g && (d = /* @__PURE__ */ u.createElement(f, {}, d));
  }
  return l("strong", o), l("u", a), l("del", i), l("code", n), l("mark", r), l("kbd", s), l("i", c), d;
}
const fd = "...", cn = /* @__PURE__ */ u.forwardRef((e, t) => {
  var r, n, a;
  const {
    prefixCls: i,
    className: o,
    style: s,
    type: c,
    disabled: d,
    children: l,
    ellipsis: f,
    editable: g,
    copyable: b,
    component: p,
    title: h
  } = e, v = ud(e, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]), {
    getPrefixCls: x,
    direction: y
  } = u.useContext(dt), [m] = cs("Text"), E = u.useRef(null), R = u.useRef(null), $ = x("typography", i), F = ha(v, ["mark", "code", "delete", "underline", "strong", "keyboard", "italic"]), [P, C] = Dn(g), [I, M] = Yt(!1, {
    value: C.editing
  }), {
    triggerType: A = ["icon"]
  } = C, j = (B) => {
    var ee;
    B && ((ee = C.onStart) === null || ee === void 0 || ee.call(C)), M(B);
  }, T = nd(I);
  rd(() => {
    var B;
    !I && T && ((B = R.current) === null || B === void 0 || B.focus());
  }, [I]);
  const z = (B) => {
    B == null || B.preventDefault(), j(!0);
  }, O = (B) => {
    var ee;
    (ee = C.onChange) === null || ee === void 0 || ee.call(C, B), j(!1);
  }, w = () => {
    var B;
    (B = C.onCancel) === null || B === void 0 || B.call(C), j(!1);
  }, [S, V] = Dn(b), {
    copied: _,
    copyLoading: L,
    onClick: W
  } = td({
    copyConfig: V,
    children: l
  }), [U, q] = u.useState(!1), [G, k] = u.useState(!1), [oe, de] = u.useState(!1), [ge, we] = u.useState(!1), [Se, Ee] = u.useState(!0), [he, Z] = Dn(f, {
    expandable: !1,
    symbol: (B) => B ? m == null ? void 0 : m.collapse : m == null ? void 0 : m.expand
  }), [J, me] = Yt(Z.defaultExpanded || !1, {
    value: Z.expanded
  }), ue = he && (!J || Z.expandable === "collapsible"), {
    rows: Ne = 1
  } = Z, se = u.useMemo(() => (
    // Disable ellipsis
    ue && // Provide suffix
    (Z.suffix !== void 0 || Z.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
    Z.expandable || P || S)
  ), [ue, Z, P, S]);
  Le(() => {
    he && !se && (q(ja("webkitLineClamp")), k(ja("textOverflow")));
  }, [se, he]);
  const [te, X] = u.useState(ue), ye = u.useMemo(() => se ? !1 : Ne === 1 ? G : U, [se, G, U]);
  Le(() => {
    X(ye && ue);
  }, [ye, ue]);
  const le = ue && (te ? ge : oe), be = ue && Ne === 1 && te, pe = ue && Ne > 1 && te, xe = (B, ee) => {
    var Fe;
    me(ee.expanded), (Fe = Z.onExpand) === null || Fe === void 0 || Fe.call(Z, B, ee);
  }, [ft, nt] = u.useState(0), fe = (B) => {
    let {
      offsetWidth: ee
    } = B;
    nt(ee);
  }, ne = (B) => {
    var ee;
    de(B), oe !== B && ((ee = Z.onEllipsis) === null || ee === void 0 || ee.call(Z, B));
  };
  u.useEffect(() => {
    const B = E.current;
    if (he && te && B) {
      const ee = pe ? B.offsetHeight < B.scrollHeight : B.offsetWidth < B.scrollWidth;
      ge !== ee && we(ee);
    }
  }, [he, te, l, pe, Se, ft]), u.useEffect(() => {
    const B = E.current;
    if (typeof IntersectionObserver > "u" || !B || !te || !ue)
      return;
    const ee = new IntersectionObserver(() => {
      Ee(!!B.offsetParent);
    });
    return ee.observe(B), () => {
      ee.disconnect();
    };
  }, [te, ue]);
  let Oe = {};
  Z.tooltip === !0 ? Oe = {
    title: (r = C.text) !== null && r !== void 0 ? r : l
  } : /* @__PURE__ */ u.isValidElement(Z.tooltip) ? Oe = {
    title: Z.tooltip
  } : typeof Z.tooltip == "object" ? Oe = Object.assign({
    title: (n = C.text) !== null && n !== void 0 ? n : l
  }, Z.tooltip) : Oe = {
    title: Z.tooltip
  };
  const $e = u.useMemo(() => {
    const B = (ee) => ["string", "number"].includes(typeof ee);
    if (!(!he || te)) {
      if (B(C.text))
        return C.text;
      if (B(l))
        return l;
      if (B(h))
        return h;
      if (B(Oe.title))
        return Oe.title;
    }
  }, [he, te, h, Oe.title, le]);
  if (I)
    return /* @__PURE__ */ u.createElement(qu, {
      value: (a = C.text) !== null && a !== void 0 ? a : typeof l == "string" ? l : "",
      onSave: O,
      onCancel: w,
      onEnd: C.onEnd,
      prefixCls: $,
      className: o,
      style: s,
      direction: y,
      component: p,
      maxLength: C.maxLength,
      autoSize: C.autoSize,
      enterIcon: C.enterIcon
    });
  const or = () => {
    const {
      expandable: B,
      symbol: ee
    } = Z;
    return !B || J && B !== "collapsible" ? null : /* @__PURE__ */ u.createElement("a", {
      key: "expand",
      className: `${$}-${J ? "collapse" : "expand"}`,
      onClick: (Fe) => xe(Fe, {
        expanded: !J
      }),
      "aria-label": J ? m.collapse : m == null ? void 0 : m.expand
    }, typeof ee == "function" ? ee(J) : ee);
  }, At = () => {
    if (!P)
      return;
    const {
      icon: B,
      tooltip: ee,
      tabIndex: Fe
    } = C, vt = Tt(ee)[0] || (m == null ? void 0 : m.edit), Vt = typeof vt == "string" ? vt : "";
    return A.includes("icon") ? /* @__PURE__ */ u.createElement(Rr, {
      key: "edit",
      title: ee === !1 ? "" : vt
    }, /* @__PURE__ */ u.createElement(vo, {
      ref: R,
      className: `${$}-edit`,
      onClick: z,
      "aria-label": Vt,
      tabIndex: Fe
    }, B || /* @__PURE__ */ u.createElement(go, {
      role: "button"
    }))) : null;
  }, sr = () => S ? /* @__PURE__ */ u.createElement(sd, Object.assign({
    key: "copy"
  }, V, {
    prefixCls: $,
    copied: _,
    locale: m,
    onCopy: W,
    loading: L,
    iconOnly: l == null
  })) : null, at = (B) => [
    // (renderExpanded || ellipsisConfig.collapsible) && renderExpand(),
    B && or(),
    At(),
    sr()
  ], ke = (B) => [B && !J && /* @__PURE__ */ u.createElement("span", {
    "aria-hidden": !0,
    key: "ellipsis"
  }, fd), Z.suffix, at(B)];
  return /* @__PURE__ */ u.createElement(ir, {
    onResize: fe,
    disabled: !ue
  }, (B) => /* @__PURE__ */ u.createElement(bo, {
    tooltipProps: Oe,
    enableEllipsis: ue,
    isEllipsis: le
  }, /* @__PURE__ */ u.createElement(Sa, Object.assign({
    className: Y({
      [`${$}-${c}`]: c,
      [`${$}-disabled`]: d,
      [`${$}-ellipsis`]: he,
      [`${$}-single-line`]: ue && Ne === 1 && !J,
      [`${$}-ellipsis-single-line`]: be,
      [`${$}-ellipsis-multiple-line`]: pe
    }, o),
    prefixCls: i,
    style: Object.assign(Object.assign({}, s), {
      WebkitLineClamp: pe ? Ne : void 0
    }),
    component: p,
    ref: rr(B, E, t),
    direction: y,
    onClick: A.includes("text") ? z : void 0,
    "aria-label": $e == null ? void 0 : $e.toString(),
    title: h
  }, F), /* @__PURE__ */ u.createElement(cd, {
    enableMeasure: ue && !te,
    text: l,
    rows: Ne,
    width: ft,
    onEllipsis: ne,
    expanded: J,
    miscDeps: [_, J, L, P, S]
  }, (ee, Fe) => dd(e, /* @__PURE__ */ u.createElement(u.Fragment, null, ee.length > 0 && Fe && !J && $e ? /* @__PURE__ */ u.createElement("span", {
    key: "show-content",
    "aria-hidden": !0
  }, ee) : ee, ke(Fe)))))));
});
var vd = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const gd = /* @__PURE__ */ u.forwardRef((e, t) => {
  var {
    ellipsis: r,
    rel: n
  } = e, a = vd(e, ["ellipsis", "rel"]);
  if (process.env.NODE_ENV !== "production") {
    const o = bt("Typography.Link");
    process.env.NODE_ENV !== "production" && o(typeof r != "object", "usage", "`ellipsis` only supports boolean value.");
  }
  const i = Object.assign(Object.assign({}, a), {
    rel: n === void 0 && a.target === "_blank" ? "noopener noreferrer" : n
  });
  return delete i.navigate, /* @__PURE__ */ u.createElement(cn, Object.assign({}, i, {
    ref: t,
    ellipsis: !!r,
    component: "a"
  }));
}), md = /* @__PURE__ */ u.forwardRef((e, t) => /* @__PURE__ */ u.createElement(cn, Object.assign({
  ref: t
}, e, {
  component: "div"
})));
var pd = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const hd = (e, t) => {
  var {
    ellipsis: r
  } = e, n = pd(e, ["ellipsis"]);
  const a = u.useMemo(() => r && typeof r == "object" ? ha(r, ["expandable", "rows"]) : r, [r]);
  if (process.env.NODE_ENV !== "production") {
    const i = bt("Typography.Text");
    process.env.NODE_ENV !== "production" && i(typeof r != "object" || !r || !("expandable" in r) && !("rows" in r), "usage", "`ellipsis` do not support `expandable` or `rows` props.");
  }
  return /* @__PURE__ */ u.createElement(cn, Object.assign({
    ref: t
  }, n, {
    ellipsis: a,
    component: "span"
  }));
}, yd = /* @__PURE__ */ u.forwardRef(hd);
var bd = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const mi = [1, 2, 3, 4, 5], wd = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    level: r = 1
  } = e, n = bd(e, ["level"]);
  let a;
  if (process.env.NODE_ENV !== "production") {
    const i = bt("Typography.Title");
    process.env.NODE_ENV !== "production" && i(mi.includes(r), "usage", "Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.");
  }
  return mi.includes(r) ? a = `h${r}` : a = "h1", /* @__PURE__ */ u.createElement(cn, Object.assign({
    ref: t
  }, n, {
    component: a
  }));
}), un = Sa;
un.Text = yd;
un.Link = gd;
un.Title = wd;
un.Paragraph = md;
export {
  Fs as A,
  Os as B,
  $d as C,
  ir as D,
  Rc as E,
  wr as F,
  pc as G,
  Xi as H,
  ca as I,
  Zi as J,
  K,
  Kc as L,
  Gc as M,
  Vi as N,
  oo as O,
  Yi as P,
  so as Q,
  Qi as R,
  no as S,
  un as T,
  Ca as U,
  js as W,
  Ac as a,
  eo as b,
  Rr as c,
  Ps as d,
  ba as e,
  Od as f,
  Lc as g,
  _i as h,
  mc as i,
  Gs as j,
  Hs as k,
  Pi as l,
  Mi as m,
  Bs as n,
  ha as o,
  nl as p,
  wa as q,
  cs as r,
  nc as s,
  Tt as t,
  Yt as u,
  ys as v,
  Jl as w,
  Ni as x,
  ms as y,
  ya as z
};
