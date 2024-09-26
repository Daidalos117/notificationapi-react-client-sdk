import { l as wk, b as vr, t as _k, o as kk, p as fC, w as cm, h as gt, e as Tt, i as dC, k as kl, _ as at, u as Ic, r as pC, a as vC, q as Ok, s as Dk, v as Mk, x as Ak, y as Nk, z as Pk, A as Rb, B as wb, C as _b, D as Lk, E as Vh, F as kb, G as Uk, g as am, d as R0, c as zk, I as Hk } from "./index3.js";
import * as ve from "react";
import gi, { useContext as sp, createContext as hC, useRef as Fc, useLayoutEffect as jk, useEffect as qh } from "react";
function Ik(u, c) {
  for (var p = 0; p < c.length; p++) {
    const d = c[p];
    if (typeof d != "string" && !Array.isArray(d)) {
      for (const m in d)
        if (m !== "default" && !(m in u)) {
          const b = Object.getOwnPropertyDescriptor(d, m);
          b && Object.defineProperty(u, m, b.get ? b : {
            enumerable: !0,
            get: () => d[m]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
var w0 = { exports: {} }, Rt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ob;
function Fk() {
  if (Ob)
    return Rt;
  Ob = 1;
  var u = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), C = Symbol.for("react.context"), g = Symbol.for("react.server_context"), k = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), re;
  re = Symbol.for("react.module.reference");
  function G(j) {
    if (typeof j == "object" && j !== null) {
      var ue = j.$$typeof;
      switch (ue) {
        case u:
          switch (j = j.type, j) {
            case p:
            case m:
            case d:
            case R:
            case D:
              return j;
            default:
              switch (j = j && j.$$typeof, j) {
                case g:
                case C:
                case k:
                case P:
                case N:
                case b:
                  return j;
                default:
                  return ue;
              }
          }
        case c:
          return ue;
      }
    }
  }
  return Rt.ContextConsumer = C, Rt.ContextProvider = b, Rt.Element = u, Rt.ForwardRef = k, Rt.Fragment = p, Rt.Lazy = P, Rt.Memo = N, Rt.Portal = c, Rt.Profiler = m, Rt.StrictMode = d, Rt.Suspense = R, Rt.SuspenseList = D, Rt.isAsyncMode = function() {
    return !1;
  }, Rt.isConcurrentMode = function() {
    return !1;
  }, Rt.isContextConsumer = function(j) {
    return G(j) === C;
  }, Rt.isContextProvider = function(j) {
    return G(j) === b;
  }, Rt.isElement = function(j) {
    return typeof j == "object" && j !== null && j.$$typeof === u;
  }, Rt.isForwardRef = function(j) {
    return G(j) === k;
  }, Rt.isFragment = function(j) {
    return G(j) === p;
  }, Rt.isLazy = function(j) {
    return G(j) === P;
  }, Rt.isMemo = function(j) {
    return G(j) === N;
  }, Rt.isPortal = function(j) {
    return G(j) === c;
  }, Rt.isProfiler = function(j) {
    return G(j) === m;
  }, Rt.isStrictMode = function(j) {
    return G(j) === d;
  }, Rt.isSuspense = function(j) {
    return G(j) === R;
  }, Rt.isSuspenseList = function(j) {
    return G(j) === D;
  }, Rt.isValidElementType = function(j) {
    return typeof j == "string" || typeof j == "function" || j === p || j === m || j === d || j === R || j === D || j === Y || typeof j == "object" && j !== null && (j.$$typeof === P || j.$$typeof === N || j.$$typeof === b || j.$$typeof === C || j.$$typeof === k || j.$$typeof === re || j.getModuleId !== void 0);
  }, Rt.typeOf = G, Rt;
}
var wt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Db;
function Vk() {
  return Db || (Db = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), C = Symbol.for("react.context"), g = Symbol.for("react.server_context"), k = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), re = !1, G = !1, j = !1, ue = !1, Q = !1, ne;
    ne = Symbol.for("react.module.reference");
    function X(Ee) {
      return !!(typeof Ee == "string" || typeof Ee == "function" || Ee === p || Ee === m || Q || Ee === d || Ee === R || Ee === D || ue || Ee === Y || re || G || j || typeof Ee == "object" && Ee !== null && (Ee.$$typeof === P || Ee.$$typeof === N || Ee.$$typeof === b || Ee.$$typeof === C || Ee.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Ee.$$typeof === ne || Ee.getModuleId !== void 0));
    }
    function $(Ee) {
      if (typeof Ee == "object" && Ee !== null) {
        var ct = Ee.$$typeof;
        switch (ct) {
          case u:
            var nt = Ee.type;
            switch (nt) {
              case p:
              case m:
              case d:
              case R:
              case D:
                return nt;
              default:
                var un = nt && nt.$$typeof;
                switch (un) {
                  case g:
                  case C:
                  case k:
                  case P:
                  case N:
                  case b:
                    return un;
                  default:
                    return ct;
                }
            }
          case c:
            return ct;
        }
      }
    }
    var K = C, ee = b, ae = u, Oe = k, Ue = p, Ie = P, ze = N, $e = c, xe = m, Z = d, We = R, be = D, De = !1, de = !1;
    function Re(Ee) {
      return De || (De = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function st(Ee) {
      return de || (de = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Ze(Ee) {
      return $(Ee) === C;
    }
    function Ge(Ee) {
      return $(Ee) === b;
    }
    function q(Ee) {
      return typeof Ee == "object" && Ee !== null && Ee.$$typeof === u;
    }
    function oe(Ee) {
      return $(Ee) === k;
    }
    function Ne(Ee) {
      return $(Ee) === p;
    }
    function he(Ee) {
      return $(Ee) === P;
    }
    function Ye(Ee) {
      return $(Ee) === N;
    }
    function tt(Ee) {
      return $(Ee) === c;
    }
    function Jt(Ee) {
      return $(Ee) === m;
    }
    function Be(Ee) {
      return $(Ee) === d;
    }
    function ot(Ee) {
      return $(Ee) === R;
    }
    function en(Ee) {
      return $(Ee) === D;
    }
    wt.ContextConsumer = K, wt.ContextProvider = ee, wt.Element = ae, wt.ForwardRef = Oe, wt.Fragment = Ue, wt.Lazy = Ie, wt.Memo = ze, wt.Portal = $e, wt.Profiler = xe, wt.StrictMode = Z, wt.Suspense = We, wt.SuspenseList = be, wt.isAsyncMode = Re, wt.isConcurrentMode = st, wt.isContextConsumer = Ze, wt.isContextProvider = Ge, wt.isElement = q, wt.isForwardRef = oe, wt.isFragment = Ne, wt.isLazy = he, wt.isMemo = Ye, wt.isPortal = tt, wt.isProfiler = Jt, wt.isStrictMode = Be, wt.isSuspense = ot, wt.isSuspenseList = en, wt.isValidElementType = X, wt.typeOf = $;
  }()), wt;
}
process.env.NODE_ENV === "production" ? w0.exports = Fk() : w0.exports = Vk();
var s0 = w0.exports, _0 = { exports: {} }, Wr = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var c0, Mb;
function mC() {
  if (Mb)
    return c0;
  Mb = 1;
  var u = Object.getOwnPropertySymbols, c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
  function d(b) {
    if (b == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(b);
  }
  function m() {
    try {
      if (!Object.assign)
        return !1;
      var b = new String("abc");
      if (b[5] = "de", Object.getOwnPropertyNames(b)[0] === "5")
        return !1;
      for (var C = {}, g = 0; g < 10; g++)
        C["_" + String.fromCharCode(g)] = g;
      var k = Object.getOwnPropertyNames(C).map(function(D) {
        return C[D];
      });
      if (k.join("") !== "0123456789")
        return !1;
      var R = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(D) {
        R[D] = D;
      }), Object.keys(Object.assign({}, R)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return c0 = m() ? Object.assign : function(b, C) {
    for (var g, k = d(b), R, D = 1; D < arguments.length; D++) {
      g = Object(arguments[D]);
      for (var N in g)
        c.call(g, N) && (k[N] = g[N]);
      if (u) {
        R = u(g);
        for (var P = 0; P < R.length; P++)
          p.call(g, R[P]) && (k[R[P]] = g[R[P]]);
      }
    }
    return k;
  }, c0;
}
var $h = { exports: {} }, f0 = {};
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ab;
function $k() {
  return Ab || (Ab = 1, function(u) {
    var c, p, d, m, b;
    if (typeof window > "u" || typeof MessageChannel != "function") {
      var C = null, g = null, k = function() {
        if (C !== null)
          try {
            var q = u.unstable_now();
            C(!0, q), C = null;
          } catch (oe) {
            throw setTimeout(k, 0), oe;
          }
      }, R = Date.now();
      u.unstable_now = function() {
        return Date.now() - R;
      }, c = function(q) {
        C !== null ? setTimeout(c, 0, q) : (C = q, setTimeout(k, 0));
      }, p = function(q, oe) {
        g = setTimeout(q, oe);
      }, d = function() {
        clearTimeout(g);
      }, m = function() {
        return !1;
      }, b = u.unstable_forceFrameRate = function() {
      };
    } else {
      var D = window.performance, N = window.Date, P = window.setTimeout, Y = window.clearTimeout;
      if (typeof console < "u") {
        var re = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), typeof re != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
      }
      if (typeof D == "object" && typeof D.now == "function")
        u.unstable_now = function() {
          return D.now();
        };
      else {
        var G = N.now();
        u.unstable_now = function() {
          return N.now() - G;
        };
      }
      var j = !1, ue = null, Q = -1, ne = 5, X = 0;
      m = function() {
        return u.unstable_now() >= X;
      }, b = function() {
      }, u.unstable_forceFrameRate = function(q) {
        0 > q || 125 < q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : ne = 0 < q ? Math.floor(1e3 / q) : 5;
      };
      var $ = new MessageChannel(), K = $.port2;
      $.port1.onmessage = function() {
        if (ue !== null) {
          var q = u.unstable_now();
          X = q + ne;
          try {
            ue(!0, q) ? K.postMessage(null) : (j = !1, ue = null);
          } catch (oe) {
            throw K.postMessage(null), oe;
          }
        } else
          j = !1;
      }, c = function(q) {
        ue = q, j || (j = !0, K.postMessage(null));
      }, p = function(q, oe) {
        Q = P(function() {
          q(u.unstable_now());
        }, oe);
      }, d = function() {
        Y(Q), Q = -1;
      };
    }
    function ee(q, oe) {
      var Ne = q.length;
      q.push(oe);
      e:
        for (; ; ) {
          var he = Ne - 1 >>> 1, Ye = q[he];
          if (Ye !== void 0 && 0 < Ue(Ye, oe))
            q[he] = oe, q[Ne] = Ye, Ne = he;
          else
            break e;
        }
    }
    function ae(q) {
      return q = q[0], q === void 0 ? null : q;
    }
    function Oe(q) {
      var oe = q[0];
      if (oe !== void 0) {
        var Ne = q.pop();
        if (Ne !== oe) {
          q[0] = Ne;
          e:
            for (var he = 0, Ye = q.length; he < Ye; ) {
              var tt = 2 * (he + 1) - 1, Jt = q[tt], Be = tt + 1, ot = q[Be];
              if (Jt !== void 0 && 0 > Ue(Jt, Ne))
                ot !== void 0 && 0 > Ue(ot, Jt) ? (q[he] = ot, q[Be] = Ne, he = Be) : (q[he] = Jt, q[tt] = Ne, he = tt);
              else if (ot !== void 0 && 0 > Ue(ot, Ne))
                q[he] = ot, q[Be] = Ne, he = Be;
              else
                break e;
            }
        }
        return oe;
      }
      return null;
    }
    function Ue(q, oe) {
      var Ne = q.sortIndex - oe.sortIndex;
      return Ne !== 0 ? Ne : q.id - oe.id;
    }
    var Ie = [], ze = [], $e = 1, xe = null, Z = 3, We = !1, be = !1, De = !1;
    function de(q) {
      for (var oe = ae(ze); oe !== null; ) {
        if (oe.callback === null)
          Oe(ze);
        else if (oe.startTime <= q)
          Oe(ze), oe.sortIndex = oe.expirationTime, ee(Ie, oe);
        else
          break;
        oe = ae(ze);
      }
    }
    function Re(q) {
      if (De = !1, de(q), !be)
        if (ae(Ie) !== null)
          be = !0, c(st);
        else {
          var oe = ae(ze);
          oe !== null && p(Re, oe.startTime - q);
        }
    }
    function st(q, oe) {
      be = !1, De && (De = !1, d()), We = !0;
      var Ne = Z;
      try {
        for (de(oe), xe = ae(Ie); xe !== null && (!(xe.expirationTime > oe) || q && !m()); ) {
          var he = xe.callback;
          if (he !== null) {
            xe.callback = null, Z = xe.priorityLevel;
            var Ye = he(xe.expirationTime <= oe);
            oe = u.unstable_now(), typeof Ye == "function" ? xe.callback = Ye : xe === ae(Ie) && Oe(Ie), de(oe);
          } else
            Oe(Ie);
          xe = ae(Ie);
        }
        if (xe !== null)
          var tt = !0;
        else {
          var Jt = ae(ze);
          Jt !== null && p(Re, Jt.startTime - oe), tt = !1;
        }
        return tt;
      } finally {
        xe = null, Z = Ne, We = !1;
      }
    }
    function Ze(q) {
      switch (q) {
        case 1:
          return -1;
        case 2:
          return 250;
        case 5:
          return 1073741823;
        case 4:
          return 1e4;
        default:
          return 5e3;
      }
    }
    var Ge = b;
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(q) {
      q.callback = null;
    }, u.unstable_continueExecution = function() {
      be || We || (be = !0, c(st));
    }, u.unstable_getCurrentPriorityLevel = function() {
      return Z;
    }, u.unstable_getFirstCallbackNode = function() {
      return ae(Ie);
    }, u.unstable_next = function(q) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
          var oe = 3;
          break;
        default:
          oe = Z;
      }
      var Ne = Z;
      Z = oe;
      try {
        return q();
      } finally {
        Z = Ne;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = Ge, u.unstable_runWithPriority = function(q, oe) {
      switch (q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          q = 3;
      }
      var Ne = Z;
      Z = q;
      try {
        return oe();
      } finally {
        Z = Ne;
      }
    }, u.unstable_scheduleCallback = function(q, oe, Ne) {
      var he = u.unstable_now();
      if (typeof Ne == "object" && Ne !== null) {
        var Ye = Ne.delay;
        Ye = typeof Ye == "number" && 0 < Ye ? he + Ye : he, Ne = typeof Ne.timeout == "number" ? Ne.timeout : Ze(q);
      } else
        Ne = Ze(q), Ye = he;
      return Ne = Ye + Ne, q = { id: $e++, callback: oe, priorityLevel: q, startTime: Ye, expirationTime: Ne, sortIndex: -1 }, Ye > he ? (q.sortIndex = Ye, ee(ze, q), ae(Ie) === null && q === ae(ze) && (De ? d() : De = !0, p(Re, Ye - he))) : (q.sortIndex = Ne, ee(Ie, q), be || We || (be = !0, c(st))), q;
    }, u.unstable_shouldYield = function() {
      var q = u.unstable_now();
      de(q);
      var oe = ae(Ie);
      return oe !== xe && xe !== null && oe !== null && oe.callback !== null && oe.startTime <= q && oe.expirationTime < xe.expirationTime || m();
    }, u.unstable_wrapCallback = function(q) {
      var oe = Z;
      return function() {
        var Ne = Z;
        Z = oe;
        try {
          return q.apply(this, arguments);
        } finally {
          Z = Ne;
        }
      };
    };
  }(f0)), f0;
}
var d0 = {};
/** @license React v0.19.1
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nb;
function Bk() {
  return Nb || (Nb = 1, function(u) {
    process.env.NODE_ENV !== "production" && function() {
      var c = !1, p = !0, d, m, b, C, g;
      if (
        // If Scheduler runs in a non-DOM environment, it falls back to a naive
        // implementation using setTimeout.
        typeof window > "u" || // Check if MessageChannel is supported, too.
        typeof MessageChannel != "function"
      ) {
        var k = null, R = null, D = function() {
          if (k !== null)
            try {
              var W = u.unstable_now(), ie = !0;
              k(ie, W), k = null;
            } catch (He) {
              throw setTimeout(D, 0), He;
            }
        }, N = Date.now();
        u.unstable_now = function() {
          return Date.now() - N;
        }, d = function(W) {
          k !== null ? setTimeout(d, 0, W) : (k = W, setTimeout(D, 0));
        }, m = function(W, ie) {
          R = setTimeout(W, ie);
        }, b = function() {
          clearTimeout(R);
        }, C = function() {
          return !1;
        }, g = u.unstable_forceFrameRate = function() {
        };
      } else {
        var P = window.performance, Y = window.Date, re = window.setTimeout, G = window.clearTimeout;
        if (typeof console < "u") {
          var j = window.requestAnimationFrame, ue = window.cancelAnimationFrame;
          typeof j != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), typeof ue != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
        }
        if (typeof P == "object" && typeof P.now == "function")
          u.unstable_now = function() {
            return P.now();
          };
        else {
          var Q = Y.now();
          u.unstable_now = function() {
            return Y.now() - Q;
          };
        }
        var ne = !1, X = null, $ = -1, K = 5, ee = 0;
        C = function() {
          return u.unstable_now() >= ee;
        }, g = function() {
        }, u.unstable_forceFrameRate = function(W) {
          if (W < 0 || W > 125) {
            console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported");
            return;
          }
          W > 0 ? K = Math.floor(1e3 / W) : K = 5;
        };
        var ae = function() {
          if (X !== null) {
            var W = u.unstable_now();
            ee = W + K;
            var ie = !0;
            try {
              var He = X(ie, W);
              He ? Ue.postMessage(null) : (ne = !1, X = null);
            } catch (lt) {
              throw Ue.postMessage(null), lt;
            }
          } else
            ne = !1;
        }, Oe = new MessageChannel(), Ue = Oe.port2;
        Oe.port1.onmessage = ae, d = function(W) {
          X = W, ne || (ne = !0, Ue.postMessage(null));
        }, m = function(W, ie) {
          $ = re(function() {
            W(u.unstable_now());
          }, ie);
        }, b = function() {
          G($), $ = -1;
        };
      }
      function Ie(W, ie) {
        var He = W.length;
        W.push(ie), xe(W, ie, He);
      }
      function ze(W) {
        var ie = W[0];
        return ie === void 0 ? null : ie;
      }
      function $e(W) {
        var ie = W[0];
        if (ie !== void 0) {
          var He = W.pop();
          return He !== ie && (W[0] = He, Z(W, He, 0)), ie;
        } else
          return null;
      }
      function xe(W, ie, He) {
        for (var lt = He; ; ) {
          var qt = lt - 1 >>> 1, Kt = W[qt];
          if (Kt !== void 0 && We(Kt, ie) > 0)
            W[qt] = ie, W[lt] = Kt, lt = qt;
          else
            return;
        }
      }
      function Z(W, ie, He) {
        for (var lt = He, qt = W.length; lt < qt; ) {
          var Kt = (lt + 1) * 2 - 1, rn = W[Kt], yr = Kt + 1, tn = W[yr];
          if (rn !== void 0 && We(rn, ie) < 0)
            tn !== void 0 && We(tn, rn) < 0 ? (W[lt] = tn, W[yr] = ie, lt = yr) : (W[lt] = rn, W[Kt] = ie, lt = Kt);
          else if (tn !== void 0 && We(tn, ie) < 0)
            W[lt] = tn, W[yr] = ie, lt = yr;
          else
            return;
        }
      }
      function We(W, ie) {
        var He = W.sortIndex - ie.sortIndex;
        return He !== 0 ? He : W.id - ie.id;
      }
      var be = 0, De = 1, de = 2, Re = 3, st = 4, Ze = 5, Ge = 0, q = 0, oe = 4, Ne = (
        // $FlowFixMe Flow doesn't know about SharedArrayBuffer
        typeof SharedArrayBuffer == "function" ? new SharedArrayBuffer(oe * Int32Array.BYTES_PER_ELEMENT) : (
          // $FlowFixMe Flow doesn't know about ArrayBuffer
          typeof ArrayBuffer == "function" ? new ArrayBuffer(oe * Int32Array.BYTES_PER_ELEMENT) : null
        )
      ), he = Ne !== null ? new Int32Array(Ne) : [], Ye = 0, tt = 1, Jt = 2, Be = 3;
      he[Ye] = be, he[Be] = 0, he[tt] = 0;
      var ot = 131072, en = 524288, Ee = 0, ct = null, nt = null, un = 0, _t = 1, Lt = 2, kt = 3, Vt = 4, Fn = 5, Xr = 6, hr = 7, Gi = 8;
      function An(W) {
        if (nt !== null) {
          var ie = un;
          if (un += W.length, un + 1 > Ee) {
            if (Ee *= 2, Ee > en) {
              console.error("Scheduler Profiling: Event log exceeded maximum size. Don't forget to call `stopLoggingProfilingEvents()`."), qr();
              return;
            }
            var He = new Int32Array(Ee * 4);
            He.set(nt), ct = He.buffer, nt = He;
          }
          nt.set(W, ie);
        }
      }
      function Fa() {
        Ee = ot, ct = new ArrayBuffer(Ee * 4), nt = new Int32Array(ct), un = 0;
      }
      function qr() {
        var W = ct;
        return Ee = 0, ct = null, nt = null, un = 0, W;
      }
      function En(W, ie) {
        he[Be]++, nt !== null && An([_t, ie * 1e3, W.id, W.priorityLevel]);
      }
      function Ei(W, ie) {
        he[Ye] = be, he[tt] = 0, he[Be]--, nt !== null && An([Lt, ie * 1e3, W.id]);
      }
      function Va(W, ie) {
        he[Be]--, nt !== null && An([Vt, ie * 1e3, W.id]);
      }
      function $a(W, ie) {
        he[Ye] = be, he[tt] = 0, he[Be]--, nt !== null && An([kt, ie * 1e3, W.id]);
      }
      function Xi(W, ie) {
        Ge++, he[Ye] = W.priorityLevel, he[tt] = W.id, he[Jt] = Ge, nt !== null && An([Fn, ie * 1e3, W.id, Ge]);
      }
      function Vn(W, ie) {
        he[Ye] = be, he[tt] = 0, he[Jt] = 0, nt !== null && An([Xr, ie * 1e3, W.id, Ge]);
      }
      function Kr(W) {
        q++, nt !== null && An([hr, W * 1e3, q]);
      }
      function $n(W) {
        nt !== null && An([Gi, W * 1e3, q]);
      }
      var qi = 1073741823, Tn = -1, Zr = 250, Ti = 5e3, wr = 1e4, Jn = qi, Ut = [], er = [], zt = 1, St = null, $t = Re, Et = !1, rt = !1, Xt = !1;
      function Ht(W) {
        for (var ie = ze(er); ie !== null; ) {
          if (ie.callback === null)
            $e(er);
          else if (ie.startTime <= W)
            $e(er), ie.sortIndex = ie.expirationTime, Ie(Ut, ie), En(ie, W), ie.isQueued = !0;
          else
            return;
          ie = ze(er);
        }
      }
      function mr(W) {
        if (Xt = !1, Ht(W), !rt)
          if (ze(Ut) !== null)
            rt = !0, d(Ki);
          else {
            var ie = ze(er);
            ie !== null && m(mr, ie.startTime - W);
          }
      }
      function Ki(W, ie) {
        $n(ie), rt = !1, Xt && (Xt = !1, b()), Et = !0;
        var He = $t;
        try {
          if (p)
            try {
              return Ba(W, ie);
            } catch (Kt) {
              if (St !== null) {
                var lt = u.unstable_now();
                $a(St, lt), St.isQueued = !1;
              }
              throw Kt;
            }
        } finally {
          St = null, $t = He, Et = !1;
          {
            var qt = u.unstable_now();
            Kr(qt);
          }
        }
      }
      function Ba(W, ie) {
        var He = ie;
        for (Ht(He), St = ze(Ut); St !== null && !c && !(St.expirationTime > He && (!W || C())); ) {
          var lt = St.callback;
          if (lt !== null) {
            St.callback = null, $t = St.priorityLevel;
            var qt = St.expirationTime <= He;
            Xi(St, He);
            var Kt = lt(qt);
            He = u.unstable_now(), typeof Kt == "function" ? (St.callback = Kt, Vn(St, He)) : (Ei(St, He), St.isQueued = !1, St === ze(Ut) && $e(Ut)), Ht(He);
          } else
            $e(Ut);
          St = ze(Ut);
        }
        if (St !== null)
          return !0;
        var rn = ze(er);
        return rn !== null && m(mr, rn.startTime - He), !1;
      }
      function Zi(W, ie) {
        switch (W) {
          case De:
          case de:
          case Re:
          case st:
          case Ze:
            break;
          default:
            W = Re;
        }
        var He = $t;
        $t = W;
        try {
          return ie();
        } finally {
          $t = He;
        }
      }
      function Wa(W) {
        var ie;
        switch ($t) {
          case De:
          case de:
          case Re:
            ie = Re;
            break;
          default:
            ie = $t;
            break;
        }
        var He = $t;
        $t = ie;
        try {
          return W();
        } finally {
          $t = He;
        }
      }
      function Ji(W) {
        var ie = $t;
        return function() {
          var He = $t;
          $t = ie;
          try {
            return W.apply(this, arguments);
          } finally {
            $t = He;
          }
        };
      }
      function bi(W) {
        switch (W) {
          case De:
            return Tn;
          case de:
            return Zr;
          case Ze:
            return Jn;
          case st:
            return wr;
          case Re:
          default:
            return Ti;
        }
      }
      function Jr(W, ie, He) {
        var lt = u.unstable_now(), qt, Kt;
        if (typeof He == "object" && He !== null) {
          var rn = He.delay;
          typeof rn == "number" && rn > 0 ? qt = lt + rn : qt = lt, Kt = typeof He.timeout == "number" ? He.timeout : bi(W);
        } else
          Kt = bi(W), qt = lt;
        var yr = qt + Kt, tn = {
          id: zt++,
          callback: ie,
          priorityLevel: W,
          startTime: qt,
          expirationTime: yr,
          sortIndex: -1
        };
        return tn.isQueued = !1, qt > lt ? (tn.sortIndex = qt, Ie(er, tn), ze(Ut) === null && tn === ze(er) && (Xt ? b() : Xt = !0, m(mr, qt - lt))) : (tn.sortIndex = yr, Ie(Ut, tn), En(tn, lt), tn.isQueued = !0, !rt && !Et && (rt = !0, d(Ki))), tn;
      }
      function bn() {
      }
      function tr() {
        !rt && !Et && (rt = !0, d(Ki));
      }
      function ea() {
        return ze(Ut);
      }
      function Nn(W) {
        if (W.isQueued) {
          var ie = u.unstable_now();
          Va(W, ie), W.isQueued = !1;
        }
        W.callback = null;
      }
      function Ci() {
        return $t;
      }
      function Ol() {
        var W = u.unstable_now();
        Ht(W);
        var ie = ze(Ut);
        return ie !== St && St !== null && ie !== null && ie.callback !== null && ie.startTime <= W && ie.expirationTime < St.expirationTime || C();
      }
      var Ya = g, Dl = {
        startLoggingProfilingEvents: Fa,
        stopLoggingProfilingEvents: qr,
        sharedProfilingBuffer: Ne
      };
      u.unstable_IdlePriority = Ze, u.unstable_ImmediatePriority = De, u.unstable_LowPriority = st, u.unstable_NormalPriority = Re, u.unstable_Profiling = Dl, u.unstable_UserBlockingPriority = de, u.unstable_cancelCallback = Nn, u.unstable_continueExecution = tr, u.unstable_getCurrentPriorityLevel = Ci, u.unstable_getFirstCallbackNode = ea, u.unstable_next = Wa, u.unstable_pauseExecution = bn, u.unstable_requestPaint = Ya, u.unstable_runWithPriority = Zi, u.unstable_scheduleCallback = Jr, u.unstable_shouldYield = Ol, u.unstable_wrapCallback = Ji;
    }();
  }(d0)), d0;
}
var Pb;
function yC() {
  return Pb || (Pb = 1, process.env.NODE_ENV === "production" ? $h.exports = $k() : $h.exports = Bk()), $h.exports;
}
/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lb;
function Wk() {
  if (Lb)
    return Wr;
  Lb = 1;
  var u = gi, c = mC(), p = yC();
  function d(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  if (!u)
    throw Error(d(227));
  function m(n, r, o, s, v, S, E, x, z) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, U);
    } catch (ye) {
      this.onError(ye);
    }
  }
  var b = !1, C = null, g = !1, k = null, R = { onError: function(n) {
    b = !0, C = n;
  } };
  function D(n, r, o, s, v, S, E, x, z) {
    b = !1, C = null, m.apply(R, arguments);
  }
  function N(n, r, o, s, v, S, E, x, z) {
    if (D.apply(this, arguments), b) {
      if (b) {
        var U = C;
        b = !1, C = null;
      } else
        throw Error(d(198));
      g || (g = !0, k = U);
    }
  }
  var P = null, Y = null, re = null;
  function G(n, r, o) {
    var s = n.type || "unknown-event";
    n.currentTarget = re(o), N(s, r, void 0, n), n.currentTarget = null;
  }
  var j = null, ue = {};
  function Q() {
    if (j)
      for (var n in ue) {
        var r = ue[n], o = j.indexOf(n);
        if (!(-1 < o))
          throw Error(d(96, n));
        if (!X[o]) {
          if (!r.extractEvents)
            throw Error(d(97, n));
          X[o] = r, o = r.eventTypes;
          for (var s in o) {
            var v = void 0, S = o[s], E = r, x = s;
            if ($.hasOwnProperty(x))
              throw Error(d(99, x));
            $[x] = S;
            var z = S.phasedRegistrationNames;
            if (z) {
              for (v in z)
                z.hasOwnProperty(v) && ne(z[v], E, x);
              v = !0;
            } else
              S.registrationName ? (ne(S.registrationName, E, x), v = !0) : v = !1;
            if (!v)
              throw Error(d(98, s, n));
          }
        }
      }
  }
  function ne(n, r, o) {
    if (K[n])
      throw Error(d(100, n));
    K[n] = r, ee[n] = r.eventTypes[o].dependencies;
  }
  var X = [], $ = {}, K = {}, ee = {};
  function ae(n) {
    var r = !1, o;
    for (o in n)
      if (n.hasOwnProperty(o)) {
        var s = n[o];
        if (!ue.hasOwnProperty(o) || ue[o] !== s) {
          if (ue[o])
            throw Error(d(102, o));
          ue[o] = s, r = !0;
        }
      }
    r && Q();
  }
  var Oe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ue = null, Ie = null, ze = null;
  function $e(n) {
    if (n = Y(n)) {
      if (typeof Ue != "function")
        throw Error(d(280));
      var r = n.stateNode;
      r && (r = P(r), Ue(n.stateNode, n.type, r));
    }
  }
  function xe(n) {
    Ie ? ze ? ze.push(n) : ze = [n] : Ie = n;
  }
  function Z() {
    if (Ie) {
      var n = Ie, r = ze;
      if (ze = Ie = null, $e(n), r)
        for (n = 0; n < r.length; n++)
          $e(r[n]);
    }
  }
  function We(n, r) {
    return n(r);
  }
  function be(n, r, o, s, v) {
    return n(r, o, s, v);
  }
  function De() {
  }
  var de = We, Re = !1, st = !1;
  function Ze() {
    (Ie !== null || ze !== null) && (De(), Z());
  }
  function Ge(n, r, o) {
    if (st)
      return n(r, o);
    st = !0;
    try {
      return de(n, r, o);
    } finally {
      st = !1, Ze();
    }
  }
  var q = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, oe = Object.prototype.hasOwnProperty, Ne = {}, he = {};
  function Ye(n) {
    return oe.call(he, n) ? !0 : oe.call(Ne, n) ? !1 : q.test(n) ? he[n] = !0 : (Ne[n] = !0, !1);
  }
  function tt(n, r, o, s) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Jt(n, r, o, s) {
    if (r === null || typeof r > "u" || tt(n, r, o, s))
      return !0;
    if (s)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function Be(n, r, o, s, v, S) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = s, this.attributeNamespace = v, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = S;
  }
  var ot = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ot[n] = new Be(n, 0, !1, n, null, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ot[r] = new Be(r, 1, !1, n[1], null, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ot[n] = new Be(n, 2, !1, n.toLowerCase(), null, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ot[n] = new Be(n, 2, !1, n, null, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ot[n] = new Be(n, 3, !1, n.toLowerCase(), null, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ot[n] = new Be(n, 3, !0, n, null, !1);
  }), ["capture", "download"].forEach(function(n) {
    ot[n] = new Be(n, 4, !1, n, null, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ot[n] = new Be(n, 6, !1, n, null, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ot[n] = new Be(n, 5, !1, n.toLowerCase(), null, !1);
  });
  var en = /[\-:]([a-z])/g;
  function Ee(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      en,
      Ee
    );
    ot[r] = new Be(r, 1, !1, n, null, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(en, Ee);
    ot[r] = new Be(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(en, Ee);
    ot[r] = new Be(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ot[n] = new Be(n, 1, !1, n.toLowerCase(), null, !1);
  }), ot.xlinkHref = new Be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach(function(n) {
    ot[n] = new Be(n, 1, !1, n.toLowerCase(), null, !0);
  });
  var ct = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ct.hasOwnProperty("ReactCurrentDispatcher") || (ct.ReactCurrentDispatcher = { current: null }), ct.hasOwnProperty("ReactCurrentBatchConfig") || (ct.ReactCurrentBatchConfig = { suspense: null });
  function nt(n, r, o, s) {
    var v = ot.hasOwnProperty(r) ? ot[r] : null, S = v !== null ? v.type === 0 : s ? !1 : !(!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N");
    S || (Jt(r, o, v, s) && (o = null), s || v === null ? Ye(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : v.mustUseProperty ? n[v.propertyName] = o === null ? v.type === 3 ? !1 : "" : o : (r = v.attributeName, s = v.attributeNamespace, o === null ? n.removeAttribute(r) : (v = v.type, o = v === 3 || v === 4 && o === !0 ? "" : "" + o, s ? n.setAttributeNS(s, r, o) : n.setAttribute(r, o))));
  }
  var un = /^(.*)[\\\/]/, _t = typeof Symbol == "function" && Symbol.for, Lt = _t ? Symbol.for("react.element") : 60103, kt = _t ? Symbol.for("react.portal") : 60106, Vt = _t ? Symbol.for("react.fragment") : 60107, Fn = _t ? Symbol.for("react.strict_mode") : 60108, Xr = _t ? Symbol.for("react.profiler") : 60114, hr = _t ? Symbol.for("react.provider") : 60109, Gi = _t ? Symbol.for("react.context") : 60110, An = _t ? Symbol.for("react.concurrent_mode") : 60111, Fa = _t ? Symbol.for("react.forward_ref") : 60112, qr = _t ? Symbol.for("react.suspense") : 60113, En = _t ? Symbol.for("react.suspense_list") : 60120, Ei = _t ? Symbol.for("react.memo") : 60115, Va = _t ? Symbol.for("react.lazy") : 60116, $a = _t ? Symbol.for("react.block") : 60121, Xi = typeof Symbol == "function" && Symbol.iterator;
  function Vn(n) {
    return n === null || typeof n != "object" ? null : (n = Xi && n[Xi] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  function Kr(n) {
    if (n._status === -1) {
      n._status = 0;
      var r = n._ctor;
      r = r(), n._result = r, r.then(function(o) {
        n._status === 0 && (o = o.default, n._status = 1, n._result = o);
      }, function(o) {
        n._status === 0 && (n._status = 2, n._result = o);
      });
    }
  }
  function $n(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Vt:
        return "Fragment";
      case kt:
        return "Portal";
      case Xr:
        return "Profiler";
      case Fn:
        return "StrictMode";
      case qr:
        return "Suspense";
      case En:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Gi:
          return "Context.Consumer";
        case hr:
          return "Context.Provider";
        case Fa:
          var r = n.render;
          return r = r.displayName || r.name || "", n.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
        case Ei:
          return $n(n.type);
        case $a:
          return $n(n.render);
        case Va:
          if (n = n._status === 1 ? n._result : null)
            return $n(n);
      }
    return null;
  }
  function qi(n) {
    var r = "";
    do {
      e:
        switch (n.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var o = "";
            break e;
          default:
            var s = n._debugOwner, v = n._debugSource, S = $n(n.type);
            o = null, s && (o = $n(s.type)), s = S, S = "", v ? S = " (at " + v.fileName.replace(un, "") + ":" + v.lineNumber + ")" : o && (S = " (created by " + o + ")"), o = `
    in ` + (s || "Unknown") + S;
        }
      r += o, n = n.return;
    } while (n);
    return r;
  }
  function Tn(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return n;
      default:
        return "";
    }
  }
  function Zr(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Ti(n) {
    var r = Zr(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), s = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var v = o.get, S = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return v.call(this);
      }, set: function(E) {
        s = "" + E, S.call(this, E);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(E) {
        s = "" + E;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function wr(n) {
    n._valueTracker || (n._valueTracker = Ti(n));
  }
  function Jn(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), s = "";
    return n && (s = Zr(n) ? n.checked ? "true" : "false" : n.value), n = s, n !== o ? (r.setValue(n), !0) : !1;
  }
  function Ut(n, r) {
    var o = r.checked;
    return c({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function er(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, s = r.checked != null ? r.checked : r.defaultChecked;
    o = Tn(r.value != null ? r.value : o), n._wrapperState = { initialChecked: s, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function zt(n, r) {
    r = r.checked, r != null && nt(n, "checked", r, !1);
  }
  function St(n, r) {
    zt(n, r);
    var o = Tn(r.value), s = r.type;
    if (o != null)
      s === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (s === "submit" || s === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Et(n, r.type, o) : r.hasOwnProperty("defaultValue") && Et(n, r.type, Tn(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function $t(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var s = r.type;
      if (!(s !== "submit" && s !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Et(n, r, o) {
    (r !== "number" || n.ownerDocument.activeElement !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  function rt(n) {
    var r = "";
    return u.Children.forEach(n, function(o) {
      o != null && (r += o);
    }), r;
  }
  function Xt(n, r) {
    return n = c({ children: void 0 }, r), (r = rt(r.children)) && (n.children = r), n;
  }
  function Ht(n, r, o, s) {
    if (n = n.options, r) {
      r = {};
      for (var v = 0; v < o.length; v++)
        r["$" + o[v]] = !0;
      for (o = 0; o < n.length; o++)
        v = r.hasOwnProperty("$" + n[o].value), n[o].selected !== v && (n[o].selected = v), v && s && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Tn(o), r = null, v = 0; v < n.length; v++) {
        if (n[v].value === o) {
          n[v].selected = !0, s && (n[v].defaultSelected = !0);
          return;
        }
        r !== null || n[v].disabled || (r = n[v]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function mr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(d(91));
    return c({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Ki(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(d(92));
        if (Array.isArray(o)) {
          if (!(1 >= o.length))
            throw Error(d(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Tn(o) };
  }
  function Ba(n, r) {
    var o = Tn(r.value), s = Tn(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), s != null && (n.defaultValue = "" + s);
  }
  function Zi(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  var Wa = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
  function Ji(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function bi(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ji(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Jr, bn = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, s, v) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, s, v);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== Wa.svg || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Jr = Jr || document.createElement("div"), Jr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Jr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function tr(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  function ea(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Nn = { animationend: ea("Animation", "AnimationEnd"), animationiteration: ea("Animation", "AnimationIteration"), animationstart: ea("Animation", "AnimationStart"), transitionend: ea("Transition", "TransitionEnd") }, Ci = {}, Ol = {};
  Oe && (Ol = document.createElement("div").style, "AnimationEvent" in window || (delete Nn.animationend.animation, delete Nn.animationiteration.animation, delete Nn.animationstart.animation), "TransitionEvent" in window || delete Nn.transitionend.transition);
  function Ya(n) {
    if (Ci[n])
      return Ci[n];
    if (!Nn[n])
      return n;
    var r = Nn[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in Ol)
        return Ci[n] = r[o];
    return n;
  }
  var Dl = Ya("animationend"), W = Ya("animationiteration"), ie = Ya("animationstart"), He = Ya("transitionend"), lt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qt = new (typeof WeakMap == "function" ? WeakMap : Map)();
  function Kt(n) {
    var r = qt.get(n);
    return r === void 0 && (r = /* @__PURE__ */ new Map(), qt.set(n, r)), r;
  }
  function rn(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.effectTag & 1026 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function yr(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function tn(n) {
    if (rn(n) !== n)
      throw Error(d(188));
  }
  function Ml(n) {
    var r = n.alternate;
    if (!r) {
      if (r = rn(n), r === null)
        throw Error(d(188));
      return r !== n ? null : n;
    }
    for (var o = n, s = r; ; ) {
      var v = o.return;
      if (v === null)
        break;
      var S = v.alternate;
      if (S === null) {
        if (s = v.return, s !== null) {
          o = s;
          continue;
        }
        break;
      }
      if (v.child === S.child) {
        for (S = v.child; S; ) {
          if (S === o)
            return tn(v), n;
          if (S === s)
            return tn(v), r;
          S = S.sibling;
        }
        throw Error(d(188));
      }
      if (o.return !== s.return)
        o = v, s = S;
      else {
        for (var E = !1, x = v.child; x; ) {
          if (x === o) {
            E = !0, o = v, s = S;
            break;
          }
          if (x === s) {
            E = !0, s = v, o = S;
            break;
          }
          x = x.sibling;
        }
        if (!E) {
          for (x = S.child; x; ) {
            if (x === o) {
              E = !0, o = S, s = v;
              break;
            }
            if (x === s) {
              E = !0, s = S, o = v;
              break;
            }
            x = x.sibling;
          }
          if (!E)
            throw Error(d(189));
        }
      }
      if (o.alternate !== s)
        throw Error(d(190));
    }
    if (o.tag !== 3)
      throw Error(d(188));
    return o.stateNode.current === o ? n : r;
  }
  function Ku(n) {
    if (n = Ml(n), !n)
      return null;
    for (var r = n; ; ) {
      if (r.tag === 5 || r.tag === 6)
        return r;
      if (r.child)
        r.child.return = r, r = r.child;
      else {
        if (r === n)
          break;
        for (; !r.sibling; ) {
          if (!r.return || r.return === n)
            return null;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return null;
  }
  function an(n, r) {
    if (r == null)
      throw Error(d(30));
    return n == null ? r : Array.isArray(n) ? Array.isArray(r) ? (n.push.apply(n, r), n) : (n.push(r), n) : Array.isArray(r) ? [n].concat(r) : [n, r];
  }
  function sn(n, r, o) {
    Array.isArray(n) ? n.forEach(r, o) : n && r.call(o, n);
  }
  var Al = null;
  function Qc(n) {
    if (n) {
      var r = n._dispatchListeners, o = n._dispatchInstances;
      if (Array.isArray(r))
        for (var s = 0; s < r.length && !n.isPropagationStopped(); s++)
          G(n, r[s], o[s]);
      else
        r && G(n, r, o);
      n._dispatchListeners = null, n._dispatchInstances = null, n.isPersistent() || n.constructor.release(n);
    }
  }
  function Fo(n) {
    if (n !== null && (Al = an(Al, n)), n = Al, Al = null, n) {
      if (sn(n, Qc), Al)
        throw Error(d(95));
      if (g)
        throw n = k, g = !1, k = null, n;
    }
  }
  function Gc(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  function hp(n) {
    if (!Oe)
      return !1;
    n = "on" + n;
    var r = n in document;
    return r || (r = document.createElement("div"), r.setAttribute(n, "return;"), r = typeof r[n] == "function"), r;
  }
  var Nl = [];
  function Xc(n) {
    n.topLevelType = null, n.nativeEvent = null, n.targetInst = null, n.ancestors.length = 0, 10 > Nl.length && Nl.push(n);
  }
  function mp(n, r, o, s) {
    if (Nl.length) {
      var v = Nl.pop();
      return v.topLevelType = n, v.eventSystemFlags = s, v.nativeEvent = r, v.targetInst = o, v;
    }
    return { topLevelType: n, eventSystemFlags: s, nativeEvent: r, targetInst: o, ancestors: [] };
  }
  function qc(n) {
    var r = n.targetInst, o = r;
    do {
      if (!o) {
        n.ancestors.push(o);
        break;
      }
      var s = o;
      if (s.tag === 3)
        s = s.stateNode.containerInfo;
      else {
        for (; s.return; )
          s = s.return;
        s = s.tag !== 3 ? null : s.stateNode.containerInfo;
      }
      if (!s)
        break;
      r = o.tag, r !== 5 && r !== 6 || n.ancestors.push(o), o = Xo(s);
    } while (o);
    for (o = 0; o < n.ancestors.length; o++) {
      r = n.ancestors[o];
      var v = Gc(n.nativeEvent);
      s = n.topLevelType;
      var S = n.nativeEvent, E = n.eventSystemFlags;
      o === 0 && (E |= 64);
      for (var x = null, z = 0; z < X.length; z++) {
        var U = X[z];
        U && (U = U.extractEvents(s, r, S, v, E)) && (x = an(x, U));
      }
      Fo(x);
    }
  }
  function Pl(n, r, o) {
    if (!o.has(n)) {
      switch (n) {
        case "scroll":
          kr(r, "scroll", !0);
          break;
        case "focus":
        case "blur":
          kr(r, "focus", !0), kr(r, "blur", !0), o.set("blur", null), o.set("focus", null);
          break;
        case "cancel":
        case "close":
          hp(n) && kr(r, n, !0);
          break;
        case "invalid":
        case "submit":
        case "reset":
          break;
        default:
          lt.indexOf(n) === -1 && qe(n, r);
      }
      o.set(n, null);
    }
  }
  var Zu, Kc, Pn, Qa = !1, _n = [], Bn = null, xi = null, _r = null, Ga = /* @__PURE__ */ new Map(), Xa = /* @__PURE__ */ new Map(), Ll = [], qa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "), Ju = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
  function es(n, r) {
    var o = Kt(r);
    qa.forEach(function(s) {
      Pl(s, r, o);
    }), Ju.forEach(function(s) {
      Pl(s, r, o);
    });
  }
  function Vo(n, r, o, s, v) {
    return { blockedOn: n, topLevelType: r, eventSystemFlags: o | 32, nativeEvent: v, container: s };
  }
  function ta(n, r) {
    switch (n) {
      case "focus":
      case "blur":
        Bn = null;
        break;
      case "dragenter":
      case "dragleave":
        xi = null;
        break;
      case "mouseover":
      case "mouseout":
        _r = null;
        break;
      case "pointerover":
      case "pointerout":
        Ga.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xa.delete(r.pointerId);
    }
  }
  function $o(n, r, o, s, v, S) {
    return n === null || n.nativeEvent !== S ? (n = Vo(r, o, s, v, S), r !== null && (r = jl(r), r !== null && Kc(r)), n) : (n.eventSystemFlags |= s, n);
  }
  function yp(n, r, o, s, v) {
    switch (r) {
      case "focus":
        return Bn = $o(Bn, n, r, o, s, v), !0;
      case "dragenter":
        return xi = $o(xi, n, r, o, s, v), !0;
      case "mouseover":
        return _r = $o(_r, n, r, o, s, v), !0;
      case "pointerover":
        var S = v.pointerId;
        return Ga.set(S, $o(Ga.get(S) || null, n, r, o, s, v)), !0;
      case "gotpointercapture":
        return S = v.pointerId, Xa.set(S, $o(Xa.get(S) || null, n, r, o, s, v)), !0;
    }
    return !1;
  }
  function Tm(n) {
    var r = Xo(n.target);
    if (r !== null) {
      var o = rn(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = yr(o), r !== null) {
            n.blockedOn = r, p.unstable_runWithPriority(n.priority, function() {
              Pn(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.hydrate) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function ei(n) {
    if (n.blockedOn !== null)
      return !1;
    var r = ni(n.topLevelType, n.eventSystemFlags, n.container, n.nativeEvent);
    if (r !== null) {
      var o = jl(r);
      return o !== null && Kc(o), n.blockedOn = r, !1;
    }
    return !0;
  }
  function gp(n, r, o) {
    ei(n) && o.delete(r);
  }
  function Zc() {
    for (Qa = !1; 0 < _n.length; ) {
      var n = _n[0];
      if (n.blockedOn !== null) {
        n = jl(n.blockedOn), n !== null && Zu(n);
        break;
      }
      var r = ni(n.topLevelType, n.eventSystemFlags, n.container, n.nativeEvent);
      r !== null ? n.blockedOn = r : _n.shift();
    }
    Bn !== null && ei(Bn) && (Bn = null), xi !== null && ei(xi) && (xi = null), _r !== null && ei(_r) && (_r = null), Ga.forEach(gp), Xa.forEach(gp);
  }
  function Ka(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Qa || (Qa = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, Zc)));
  }
  function Sp(n) {
    function r(v) {
      return Ka(v, n);
    }
    if (0 < _n.length) {
      Ka(_n[0], n);
      for (var o = 1; o < _n.length; o++) {
        var s = _n[o];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (Bn !== null && Ka(Bn, n), xi !== null && Ka(xi, n), _r !== null && Ka(_r, n), Ga.forEach(r), Xa.forEach(r), o = 0; o < Ll.length; o++)
      s = Ll[o], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < Ll.length && (o = Ll[0], o.blockedOn === null); )
      Tm(o), o.blockedOn === null && Ll.shift();
  }
  var Jc = {}, Ep = /* @__PURE__ */ new Map(), ef = /* @__PURE__ */ new Map(), me = [
    "abort",
    "abort",
    Dl,
    "animationEnd",
    W,
    "animationIteration",
    ie,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    He,
    "transitionEnd",
    "waiting",
    "waiting"
  ];
  function ts(n, r) {
    for (var o = 0; o < n.length; o += 2) {
      var s = n[o], v = n[o + 1], S = "on" + (v[0].toUpperCase() + v.slice(1));
      S = { phasedRegistrationNames: { bubbled: S, captured: S + "Capture" }, dependencies: [s], eventPriority: r }, ef.set(s, r), Ep.set(s, S), Jc[v] = S;
    }
  }
  ts("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), ts("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), ts(me, 2);
  for (var Tp = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), kn = 0; kn < Tp.length; kn++)
    ef.set(Tp[kn], 0);
  var Ri = p.unstable_UserBlockingPriority, Ul = p.unstable_runWithPriority, na = !0;
  function qe(n, r) {
    kr(r, n, !1);
  }
  function kr(n, r, o) {
    var s = ef.get(r);
    switch (s === void 0 ? 2 : s) {
      case 0:
        s = Bo.bind(null, r, 1, n);
        break;
      case 1:
        s = ti.bind(null, r, 1, n);
        break;
      default:
        s = Ln.bind(null, r, 1, n);
    }
    o ? n.addEventListener(r, s, !0) : n.addEventListener(r, s, !1);
  }
  function Bo(n, r, o, s) {
    Re || De();
    var v = Ln, S = Re;
    Re = !0;
    try {
      be(v, n, r, o, s);
    } finally {
      (Re = S) || Ze();
    }
  }
  function ti(n, r, o, s) {
    Ul(Ri, Ln.bind(null, n, r, o, s));
  }
  function Ln(n, r, o, s) {
    if (na)
      if (0 < _n.length && -1 < qa.indexOf(n))
        n = Vo(null, n, r, o, s), _n.push(n);
      else {
        var v = ni(n, r, o, s);
        if (v === null)
          ta(n, s);
        else if (-1 < qa.indexOf(n))
          n = Vo(v, n, r, o, s), _n.push(n);
        else if (!yp(v, n, r, o, s)) {
          ta(n, s), n = mp(n, s, null, r);
          try {
            Ge(qc, n);
          } finally {
            Xc(n);
          }
        }
      }
  }
  function ni(n, r, o, s) {
    if (o = Gc(s), o = Xo(o), o !== null) {
      var v = rn(o);
      if (v === null)
        o = null;
      else {
        var S = v.tag;
        if (S === 13) {
          if (o = yr(v), o !== null)
            return o;
          o = null;
        } else if (S === 3) {
          if (v.stateNode.hydrate)
            return v.tag === 3 ? v.stateNode.containerInfo : null;
          o = null;
        } else
          v !== o && (o = null);
      }
    }
    n = mp(n, s, o, r);
    try {
      Ge(qc, n);
    } finally {
      Xc(n);
    }
    return null;
  }
  var Wo = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ns = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Wo).forEach(function(n) {
    ns.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Wo[r] = Wo[n];
    });
  });
  function bp(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || Wo.hasOwnProperty(n) && Wo[n] ? ("" + r).trim() : r + "px";
  }
  function Cp(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var s = o.indexOf("--") === 0, v = bp(o, r[o], s);
        o === "float" && (o = "cssFloat"), s ? n.setProperty(o, v) : n[o] = v;
      }
  }
  var xp = c({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function rs(n, r) {
    if (r) {
      if (xp[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(d(137, n, ""));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(d(60));
        if (!(typeof r.dangerouslySetInnerHTML == "object" && "__html" in r.dangerouslySetInnerHTML))
          throw Error(d(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(d(62, ""));
    }
  }
  function tf(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Rp = Wa.html;
  function wi(n, r) {
    n = n.nodeType === 9 || n.nodeType === 11 ? n : n.ownerDocument;
    var o = Kt(n);
    r = ee[r];
    for (var s = 0; s < r.length; s++)
      Pl(r[s], n, o);
  }
  function Za() {
  }
  function is(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function nf(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function rf(n, r) {
    var o = nf(n);
    n = 0;
    for (var s; o; ) {
      if (o.nodeType === 3) {
        if (s = n + o.textContent.length, n <= r && s >= r)
          return { node: o, offset: r - n };
        n = s;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = nf(o);
    }
  }
  function af(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? af(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function of() {
    for (var n = window, r = is(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = is(n.document);
    }
    return r;
  }
  function as(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  var os = "$", lf = "/$", ls = "$?", zl = "$!", us = null, uf = null;
  function wp(n, r) {
    switch (n) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!r.autoFocus;
    }
    return !1;
  }
  function Hl(n, r) {
    return n === "textarea" || n === "option" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ss = typeof setTimeout == "function" ? setTimeout : void 0, _p = typeof clearTimeout == "function" ? clearTimeout : void 0;
  function Yo(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
    }
    return n;
  }
  function sf(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === os || o === zl || o === ls) {
          if (r === 0)
            return n;
          r--;
        } else
          o === lf && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var cf = Math.random().toString(36).slice(2), ri = "__reactInternalInstance$" + cf, Qo = "__reactEventHandlers$" + cf, Go = "__reactContainere$" + cf;
  function Xo(n) {
    var r = n[ri];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Go] || o[ri]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = sf(n); n !== null; ) {
            if (o = n[ri])
              return o;
            n = sf(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function jl(n) {
    return n = n[ri] || n[Go], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function gr(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(d(33));
  }
  function Il(n) {
    return n[Qo] || null;
  }
  function ii(n) {
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function kp(n, r) {
    var o = n.stateNode;
    if (!o)
      return null;
    var s = P(o);
    if (!s)
      return null;
    o = s[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (s = !s.disabled) || (n = n.type, s = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !s;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(d(
        231,
        r,
        typeof o
      ));
    return o;
  }
  function Op(n, r, o) {
    (r = kp(n, o.dispatchConfig.phasedRegistrationNames[r])) && (o._dispatchListeners = an(o._dispatchListeners, r), o._dispatchInstances = an(o._dispatchInstances, n));
  }
  function bm(n) {
    if (n && n.dispatchConfig.phasedRegistrationNames) {
      for (var r = n._targetInst, o = []; r; )
        o.push(r), r = ii(r);
      for (r = o.length; 0 < r--; )
        Op(o[r], "captured", n);
      for (r = 0; r < o.length; r++)
        Op(o[r], "bubbled", n);
    }
  }
  function cs(n, r, o) {
    n && o && o.dispatchConfig.registrationName && (r = kp(n, o.dispatchConfig.registrationName)) && (o._dispatchListeners = an(o._dispatchListeners, r), o._dispatchInstances = an(o._dispatchInstances, n));
  }
  function ff(n) {
    n && n.dispatchConfig.registrationName && cs(n._targetInst, null, n);
  }
  function Ja(n) {
    sn(n, bm);
  }
  var _i = null, fs = null, ds = null;
  function Fl() {
    if (ds)
      return ds;
    var n, r = fs, o = r.length, s, v = "value" in _i ? _i.value : _i.textContent, S = v.length;
    for (n = 0; n < o && r[n] === v[n]; n++)
      ;
    var E = o - n;
    for (s = 1; s <= E && r[o - s] === v[S - s]; s++)
      ;
    return ds = v.slice(n, 1 < s ? 1 - s : void 0);
  }
  function Vl() {
    return !0;
  }
  function qo() {
    return !1;
  }
  function Wn(n, r, o, s) {
    this.dispatchConfig = n, this._targetInst = r, this.nativeEvent = o, n = this.constructor.Interface;
    for (var v in n)
      n.hasOwnProperty(v) && ((r = n[v]) ? this[v] = r(o) : v === "target" ? this.target = s : this[v] = o[v]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Vl : qo, this.isPropagationStopped = qo, this;
  }
  c(Wn.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Vl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Vl);
  }, persist: function() {
    this.isPersistent = Vl;
  }, isPersistent: qo, destructor: function() {
    var n = this.constructor.Interface, r;
    for (r in n)
      this[r] = null;
    this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = qo, this._dispatchInstances = this._dispatchListeners = null;
  } }), Wn.Interface = { type: null, target: null, currentTarget: function() {
    return null;
  }, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: null, isTrusted: null }, Wn.extend = function(n) {
    function r() {
    }
    function o() {
      return s.apply(this, arguments);
    }
    var s = this;
    r.prototype = s.prototype;
    var v = new r();
    return c(v, o.prototype), o.prototype = v, o.prototype.constructor = o, o.Interface = c({}, s.Interface, n), o.extend = s.extend, Dp(o), o;
  }, Dp(Wn);
  function df(n, r, o, s) {
    if (this.eventPool.length) {
      var v = this.eventPool.pop();
      return this.call(v, n, r, o, s), v;
    }
    return new this(n, r, o, s);
  }
  function pf(n) {
    if (!(n instanceof this))
      throw Error(d(279));
    n.destructor(), 10 > this.eventPool.length && this.eventPool.push(n);
  }
  function Dp(n) {
    n.eventPool = [], n.getPooled = df, n.release = pf;
  }
  var ps = Wn.extend({ data: null }), Mp = Wn.extend({ data: null }), Or = [9, 13, 27, 32], Dr = Oe && "CompositionEvent" in window, Un = null;
  Oe && "documentMode" in document && (Un = document.documentMode);
  var ra = Oe && "TextEvent" in window && !Un, vs = Oe && (!Dr || Un && 8 < Un && 11 >= Un), $l = " ", ia = { beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] }, compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") }, compositionStart: { phasedRegistrationNames: {
    bubbled: "onCompositionStart",
    captured: "onCompositionStartCapture"
  }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") }, compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") } }, Cm = !1;
  function Bl(n, r) {
    switch (n) {
      case "keyup":
        return Or.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "blur":
        return !0;
      default:
        return !1;
    }
  }
  function eo(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var aa = !1;
  function Ap(n, r) {
    switch (n) {
      case "compositionend":
        return eo(r);
      case "keypress":
        return r.which !== 32 ? null : (Cm = !0, $l);
      case "textInput":
        return n = r.data, n === $l && Cm ? null : n;
      default:
        return null;
    }
  }
  function hs(n, r) {
    if (aa)
      return n === "compositionend" || !Dr && Bl(n, r) ? (n = Fl(), ds = fs = _i = null, aa = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return vs && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var vf = { eventTypes: ia, extractEvents: function(n, r, o, s) {
    var v;
    if (Dr)
      e: {
        switch (n) {
          case "compositionstart":
            var S = ia.compositionStart;
            break e;
          case "compositionend":
            S = ia.compositionEnd;
            break e;
          case "compositionupdate":
            S = ia.compositionUpdate;
            break e;
        }
        S = void 0;
      }
    else
      aa ? Bl(n, o) && (S = ia.compositionEnd) : n === "keydown" && o.keyCode === 229 && (S = ia.compositionStart);
    return S ? (vs && o.locale !== "ko" && (aa || S !== ia.compositionStart ? S === ia.compositionEnd && aa && (v = Fl()) : (_i = s, fs = "value" in _i ? _i.value : _i.textContent, aa = !0)), S = ps.getPooled(
      S,
      r,
      o,
      s
    ), v ? S.data = v : (v = eo(o), v !== null && (S.data = v)), Ja(S), v = S) : v = null, (n = ra ? Ap(n, o) : hs(n, o)) ? (r = Mp.getPooled(ia.beforeInput, r, o, s), r.data = n, Ja(r)) : r = null, v === null ? r : r === null ? v : [v, r];
  } }, Np = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function hf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Np[n.type] : r === "textarea";
  }
  var mf = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };
  function Cn(n, r, o) {
    return n = Wn.getPooled(mf.change, n, r, o), n.type = "change", xe(o), Ja(n), n;
  }
  var to = null, no = null;
  function ms(n) {
    Fo(n);
  }
  function oa(n) {
    var r = gr(n);
    if (Jn(r))
      return n;
  }
  function Wl(n, r) {
    if (n === "change")
      return r;
  }
  var Ko = !1;
  Oe && (Ko = hp("input") && (!document.documentMode || 9 < document.documentMode));
  function ki() {
    to && (to.detachEvent("onpropertychange", Yl), no = to = null);
  }
  function Yl(n) {
    if (n.propertyName === "value" && oa(no))
      if (n = Cn(no, n, Gc(n)), Re)
        Fo(n);
      else {
        Re = !0;
        try {
          We(ms, n);
        } finally {
          Re = !1, Ze();
        }
      }
  }
  function yf(n, r, o) {
    n === "focus" ? (ki(), to = r, no = o, to.attachEvent("onpropertychange", Yl)) : n === "blur" && ki();
  }
  function Ql(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return oa(no);
  }
  function gf(n, r) {
    if (n === "click")
      return oa(r);
  }
  function Sf(n, r) {
    if (n === "input" || n === "change")
      return oa(r);
  }
  var Ef = { eventTypes: mf, _isInputEventSupported: Ko, extractEvents: function(n, r, o, s) {
    var v = r ? gr(r) : window, S = v.nodeName && v.nodeName.toLowerCase();
    if (S === "select" || S === "input" && v.type === "file")
      var E = Wl;
    else if (hf(v))
      if (Ko)
        E = Sf;
      else {
        E = Ql;
        var x = yf;
      }
    else
      (S = v.nodeName) && S.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (E = gf);
    if (E && (E = E(n, r)))
      return Cn(E, o, s);
    x && x(n, v, r), n === "blur" && (n = v._wrapperState) && n.controlled && v.type === "number" && Et(v, "number", v.value);
  } }, ro = Wn.extend({ view: null, detail: null }), Pp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Gl(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Pp[n]) ? !!r[n] : !1;
  }
  function io() {
    return Gl;
  }
  var Tf = 0, Xl = 0, bf = !1, ys = !1, ao = ro.extend({ screenX: null, screenY: null, clientX: null, clientY: null, pageX: null, pageY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: io, button: null, buttons: null, relatedTarget: function(n) {
    return n.relatedTarget || (n.fromElement === n.srcElement ? n.toElement : n.fromElement);
  }, movementX: function(n) {
    if ("movementX" in n)
      return n.movementX;
    var r = Tf;
    return Tf = n.screenX, bf ? n.type === "mousemove" ? n.screenX - r : 0 : (bf = !0, 0);
  }, movementY: function(n) {
    if ("movementY" in n)
      return n.movementY;
    var r = Xl;
    return Xl = n.screenY, ys ? n.type === "mousemove" ? n.screenY - r : 0 : (ys = !0, 0);
  } }), gs = ao.extend({ pointerId: null, width: null, height: null, pressure: null, tangentialPressure: null, tiltX: null, tiltY: null, twist: null, pointerType: null, isPrimary: null }), oo = { mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] }, mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] }, pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] }, pointerLeave: {
    registrationName: "onPointerLeave",
    dependencies: ["pointerout", "pointerover"]
  } }, Cf = { eventTypes: oo, extractEvents: function(n, r, o, s, v) {
    var S = n === "mouseover" || n === "pointerover", E = n === "mouseout" || n === "pointerout";
    if (S && !(v & 32) && (o.relatedTarget || o.fromElement) || !E && !S)
      return null;
    if (S = s.window === s ? s : (S = s.ownerDocument) ? S.defaultView || S.parentWindow : window, E) {
      if (E = r, r = (r = o.relatedTarget || o.toElement) ? Xo(r) : null, r !== null) {
        var x = rn(r);
        (r !== x || r.tag !== 5 && r.tag !== 6) && (r = null);
      }
    } else
      E = null;
    if (E === r)
      return null;
    if (n === "mouseout" || n === "mouseover")
      var z = ao, U = oo.mouseLeave, ye = oo.mouseEnter, Ce = "mouse";
    else
      (n === "pointerout" || n === "pointerover") && (z = gs, U = oo.pointerLeave, ye = oo.pointerEnter, Ce = "pointer");
    if (n = E == null ? S : gr(E), S = r == null ? S : gr(r), U = z.getPooled(U, E, o, s), U.type = Ce + "leave", U.target = n, U.relatedTarget = S, o = z.getPooled(ye, r, o, s), o.type = Ce + "enter", o.target = S, o.relatedTarget = n, s = E, Ce = r, s && Ce)
      e: {
        for (z = s, ye = Ce, E = 0, n = z; n; n = ii(n))
          E++;
        for (n = 0, r = ye; r; r = ii(r))
          n++;
        for (; 0 < E - n; )
          z = ii(z), E--;
        for (; 0 < n - E; )
          ye = ii(ye), n--;
        for (; E--; ) {
          if (z === ye || z === ye.alternate)
            break e;
          z = ii(z), ye = ii(ye);
        }
        z = null;
      }
    else
      z = null;
    for (ye = z, z = []; s && s !== ye && (E = s.alternate, !(E !== null && E === ye)); )
      z.push(s), s = ii(s);
    for (s = []; Ce && Ce !== ye && (E = Ce.alternate, !(E !== null && E === ye)); )
      s.push(Ce), Ce = ii(Ce);
    for (Ce = 0; Ce < z.length; Ce++)
      cs(z[Ce], "bubbled", U);
    for (Ce = s.length; 0 < Ce--; )
      cs(s[Ce], "captured", o);
    return v & 64 ? [U, o] : [U];
  } };
  function xf(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var nr = typeof Object.is == "function" ? Object.is : xf, Sr = Object.prototype.hasOwnProperty;
  function Oi(n, r) {
    if (nr(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), s = Object.keys(r);
    if (o.length !== s.length)
      return !1;
    for (s = 0; s < o.length; s++)
      if (!Sr.call(r, o[s]) || !nr(n[o[s]], r[o[s]]))
        return !1;
    return !0;
  }
  var ql = Oe && "documentMode" in document && 11 >= document.documentMode, ai = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ") } }, xn = null, Er = null, zn = null, la = !1;
  function Ss(n, r) {
    var o = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    return la || xn == null || xn !== is(o) ? null : (o = xn, "selectionStart" in o && as(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), zn && Oi(zn, o) ? null : (zn = o, n = Wn.getPooled(ai.select, Er, n, r), n.type = "select", n.target = xn, Ja(n), n));
  }
  var Rf = { eventTypes: ai, extractEvents: function(n, r, o, s, v, S) {
    if (v = S || (s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument), !(S = !v)) {
      e: {
        v = Kt(v), S = ee.onSelect;
        for (var E = 0; E < S.length; E++)
          if (!v.has(S[E])) {
            v = !1;
            break e;
          }
        v = !0;
      }
      S = !v;
    }
    if (S)
      return null;
    switch (v = r ? gr(r) : window, n) {
      case "focus":
        (hf(v) || v.contentEditable === "true") && (xn = v, Er = r, zn = null);
        break;
      case "blur":
        zn = Er = xn = null;
        break;
      case "mousedown":
        la = !0;
        break;
      case "contextmenu":
      case "mouseup":
      case "dragend":
        return la = !1, Ss(o, s);
      case "selectionchange":
        if (ql)
          break;
      case "keydown":
      case "keyup":
        return Ss(o, s);
    }
    return null;
  } }, wf = Wn.extend({ animationName: null, elapsedTime: null, pseudoElement: null }), Es = Wn.extend({ clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Di = ro.extend({ relatedTarget: null });
  function Kl(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  var ua = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Mi = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Zl = ro.extend({ key: function(n) {
    if (n.key) {
      var r = ua[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Kl(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Mi[n.keyCode] || "Unidentified" : "";
  }, location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: io, charCode: function(n) {
    return n.type === "keypress" ? Kl(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Kl(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Jl = ao.extend({ dataTransfer: null }), _f = ro.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: io }), kf = Wn.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }), Of = ao.extend({ deltaX: function(n) {
    return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
  }, deltaY: function(n) {
    return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
  }, deltaZ: null, deltaMode: null }), Df = { eventTypes: Jc, extractEvents: function(n, r, o, s) {
    var v = Ep.get(n);
    if (!v)
      return null;
    switch (n) {
      case "keypress":
        if (Kl(o) === 0)
          return null;
      case "keydown":
      case "keyup":
        n = Zl;
        break;
      case "blur":
      case "focus":
        n = Di;
        break;
      case "click":
        if (o.button === 2)
          return null;
      case "auxclick":
      case "dblclick":
      case "mousedown":
      case "mousemove":
      case "mouseup":
      case "mouseout":
      case "mouseover":
      case "contextmenu":
        n = ao;
        break;
      case "drag":
      case "dragend":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "dragstart":
      case "drop":
        n = Jl;
        break;
      case "touchcancel":
      case "touchend":
      case "touchmove":
      case "touchstart":
        n = _f;
        break;
      case Dl:
      case W:
      case ie:
        n = wf;
        break;
      case He:
        n = kf;
        break;
      case "scroll":
        n = ro;
        break;
      case "wheel":
        n = Of;
        break;
      case "copy":
      case "cut":
      case "paste":
        n = Es;
        break;
      case "gotpointercapture":
      case "lostpointercapture":
      case "pointercancel":
      case "pointerdown":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerup":
        n = gs;
        break;
      default:
        n = Wn;
    }
    return r = n.getPooled(v, r, o, s), Ja(r), r;
  } };
  if (j)
    throw Error(d(101));
  j = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), Q();
  var Mf = jl;
  P = Il, Y = Mf, re = gr, ae({ SimpleEventPlugin: Df, EnterLeaveEventPlugin: Cf, ChangeEventPlugin: Ef, SelectEventPlugin: Rf, BeforeInputEventPlugin: vf });
  var Ts = [], rr = -1;
  function ft(n) {
    0 > rr || (n.current = Ts[rr], Ts[rr] = null, rr--);
  }
  function Bt(n, r) {
    rr++, Ts[rr] = n.current, n.current = r;
  }
  var oi = {}, vn = { current: oi }, cn = { current: !1 }, li = oi;
  function sa(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return oi;
    var s = n.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === r)
      return s.__reactInternalMemoizedMaskedChildContext;
    var v = {}, S;
    for (S in o)
      v[S] = r[S];
    return s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = v), v;
  }
  function On(n) {
    return n = n.childContextTypes, n != null;
  }
  function ca() {
    ft(cn), ft(vn);
  }
  function bs(n, r, o) {
    if (vn.current !== oi)
      throw Error(d(168));
    Bt(vn, r), Bt(cn, o);
  }
  function lo(n, r, o) {
    var s = n.stateNode;
    if (n = r.childContextTypes, typeof s.getChildContext != "function")
      return o;
    s = s.getChildContext();
    for (var v in s)
      if (!(v in n))
        throw Error(d(108, $n(r) || "Unknown", v));
    return c({}, o, {}, s);
  }
  function Zo(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || oi, li = vn.current, Bt(vn, n), Bt(cn, cn.current), !0;
  }
  function eu(n, r, o) {
    var s = n.stateNode;
    if (!s)
      throw Error(d(169));
    o ? (n = lo(n, r, li), s.__reactInternalMemoizedMergedChildContext = n, ft(cn), ft(vn), Bt(vn, n)) : ft(cn), Bt(cn, o);
  }
  var Af = p.unstable_runWithPriority, Jo = p.unstable_scheduleCallback, Cs = p.unstable_cancelCallback, xs = p.unstable_requestPaint, Rs = p.unstable_now, Nf = p.unstable_getCurrentPriorityLevel, tu = p.unstable_ImmediatePriority, ws = p.unstable_UserBlockingPriority, _s = p.unstable_NormalPriority, Pf = p.unstable_LowPriority, el = p.unstable_IdlePriority, Lf = {}, xm = p.unstable_shouldYield, Lp = xs !== void 0 ? xs : function() {
  }, Mr = null, Ai = null, Uf = !1, Up = Rs(), bt = 1e4 > Up ? Rs : function() {
    return Rs() - Up;
  };
  function Ar() {
    switch (Nf()) {
      case tu:
        return 99;
      case ws:
        return 98;
      case _s:
        return 97;
      case Pf:
        return 96;
      case el:
        return 95;
      default:
        throw Error(d(332));
    }
  }
  function on(n) {
    switch (n) {
      case 99:
        return tu;
      case 98:
        return ws;
      case 97:
        return _s;
      case 96:
        return Pf;
      case 95:
        return el;
      default:
        throw Error(d(332));
    }
  }
  function dt(n, r) {
    return n = on(n), Af(n, r);
  }
  function zp(n, r, o) {
    return n = on(n), Jo(n, r, o);
  }
  function uo(n) {
    return Mr === null ? (Mr = [n], Ai = Jo(tu, zf)) : Mr.push(n), Lf;
  }
  function ir() {
    if (Ai !== null) {
      var n = Ai;
      Ai = null, Cs(n);
    }
    zf();
  }
  function zf() {
    if (!Uf && Mr !== null) {
      Uf = !0;
      var n = 0;
      try {
        var r = Mr;
        dt(99, function() {
          for (; n < r.length; n++) {
            var o = r[n];
            do
              o = o(!0);
            while (o !== null);
          }
        }), Mr = null;
      } catch (o) {
        throw Mr !== null && (Mr = Mr.slice(n + 1)), Jo(tu, ir), o;
      } finally {
        Uf = !1;
      }
    }
  }
  function Ot(n, r, o) {
    return o /= 10, 1073741821 - (((1073741821 - n + r / 10) / o | 0) + 1) * o;
  }
  function Yn(n, r) {
    if (n && n.defaultProps) {
      r = c({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
    }
    return r;
  }
  var fa = { current: null }, da = null, Tr = null, ks = null;
  function Hf() {
    ks = Tr = da = null;
  }
  function jf(n) {
    var r = fa.current;
    ft(fa), n.type._context._currentValue = r;
  }
  function tl(n, r) {
    for (; n !== null; ) {
      var o = n.alternate;
      if (n.childExpirationTime < r)
        n.childExpirationTime = r, o !== null && o.childExpirationTime < r && (o.childExpirationTime = r);
      else if (o !== null && o.childExpirationTime < r)
        o.childExpirationTime = r;
      else
        break;
      n = n.return;
    }
  }
  function Qn(n, r) {
    da = n, ks = Tr = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.expirationTime >= r && (Pr = !0), n.firstContext = null);
  }
  function br(n, r) {
    if (ks !== n && r !== !1 && r !== 0)
      if ((typeof r != "number" || r === 1073741823) && (ks = n, r = 1073741823), r = { context: n, observedBits: r, next: null }, Tr === null) {
        if (da === null)
          throw Error(d(308));
        Tr = r, da.dependencies = { expirationTime: 0, firstContext: r, responders: null };
      } else
        Tr = Tr.next = r;
    return n._currentValue;
  }
  var Gn = !1;
  function Os(n) {
    n.updateQueue = { baseState: n.memoizedState, baseQueue: null, shared: { pending: null }, effects: null };
  }
  function Ds(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, baseQueue: n.baseQueue, shared: n.shared, effects: n.effects });
  }
  function pa(n, r) {
    return n = { expirationTime: n, suspenseConfig: r, tag: 0, payload: null, callback: null, next: null }, n.next = n;
  }
  function va(n, r) {
    if (n = n.updateQueue, n !== null) {
      n = n.shared;
      var o = n.pending;
      o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
    }
  }
  function If(n, r) {
    var o = n.alternate;
    o !== null && Ds(o, n), n = n.updateQueue, o = n.baseQueue, o === null ? (n.baseQueue = r.next = r, r.next = r) : (r.next = o.next, o.next = r);
  }
  function nl(n, r, o, s) {
    var v = n.updateQueue;
    Gn = !1;
    var S = v.baseQueue, E = v.shared.pending;
    if (E !== null) {
      if (S !== null) {
        var x = S.next;
        S.next = E.next, E.next = x;
      }
      S = E, v.shared.pending = null, x = n.alternate, x !== null && (x = x.updateQueue, x !== null && (x.baseQueue = E));
    }
    if (S !== null) {
      x = S.next;
      var z = v.baseState, U = 0, ye = null, Ce = null, Je = null;
      if (x !== null) {
        var vt = x;
        do {
          if (E = vt.expirationTime, E < s) {
            var sr = { expirationTime: vt.expirationTime, suspenseConfig: vt.suspenseConfig, tag: vt.tag, payload: vt.payload, callback: vt.callback, next: null };
            Je === null ? (Ce = Je = sr, ye = z) : Je = Je.next = sr, E > U && (U = E);
          } else {
            Je !== null && (Je = Je.next = { expirationTime: 1073741823, suspenseConfig: vt.suspenseConfig, tag: vt.tag, payload: vt.payload, callback: vt.callback, next: null }), ud(E, vt.suspenseConfig);
            e: {
              var wn = n, M = vt;
              switch (E = r, sr = o, M.tag) {
                case 1:
                  if (wn = M.payload, typeof wn == "function") {
                    z = wn.call(sr, z, E);
                    break e;
                  }
                  z = wn;
                  break e;
                case 3:
                  wn.effectTag = wn.effectTag & -4097 | 64;
                case 0:
                  if (wn = M.payload, E = typeof wn == "function" ? wn.call(sr, z, E) : wn, E == null)
                    break e;
                  z = c({}, z, E);
                  break e;
                case 2:
                  Gn = !0;
              }
            }
            vt.callback !== null && (n.effectTag |= 32, E = v.effects, E === null ? v.effects = [vt] : E.push(vt));
          }
          if (vt = vt.next, vt === null || vt === x) {
            if (E = v.shared.pending, E === null)
              break;
            vt = S.next = E.next, E.next = x, v.baseQueue = S = E, v.shared.pending = null;
          }
        } while (!0);
      }
      Je === null ? ye = z : Je.next = Ce, v.baseState = ye, v.baseQueue = Je, mu(U), n.expirationTime = U, n.memoizedState = z;
    }
  }
  function Ff(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var s = n[r], v = s.callback;
        if (v !== null) {
          if (s.callback = null, s = v, v = o, typeof s != "function")
            throw Error(d(191, s));
          s.call(v);
        }
      }
  }
  var nu = ct.ReactCurrentBatchConfig, so = new u.Component().refs;
  function rl(n, r, o, s) {
    r = n.memoizedState, o = o(s, r), o = o == null ? r : c({}, r, o), n.memoizedState = o, n.expirationTime === 0 && (n.updateQueue.baseState = o);
  }
  var ha = { isMounted: function(n) {
    return (n = n._reactInternalFiber) ? rn(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternalFiber;
    var s = yn(), v = nu.suspense;
    s = ba(s, n, v), v = pa(s, v), v.payload = r, o != null && (v.callback = o), va(n, v), Ca(n, s);
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternalFiber;
    var s = yn(), v = nu.suspense;
    s = ba(s, n, v), v = pa(s, v), v.tag = 1, v.payload = r, o != null && (v.callback = o), va(n, v), Ca(n, s);
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternalFiber;
    var o = yn(), s = nu.suspense;
    o = ba(o, n, s), s = pa(o, s), s.tag = 2, r != null && (s.callback = r), va(n, s), Ca(n, o);
  } };
  function Hp(n, r, o, s, v, S, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, S, E) : r.prototype && r.prototype.isPureReactComponent ? !Oi(o, s) || !Oi(v, S) : !0;
  }
  function jp(n, r, o) {
    var s = !1, v = oi, S = r.contextType;
    return typeof S == "object" && S !== null ? S = br(S) : (v = On(r) ? li : vn.current, s = r.contextTypes, S = (s = s != null) ? sa(n, v) : oi), r = new r(o, S), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = ha, n.stateNode = r, r._reactInternalFiber = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = v, n.__reactInternalMemoizedMaskedChildContext = S), r;
  }
  function Ms(n, r, o, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, s), r.state !== n && ha.enqueueReplaceState(r, r.state, null);
  }
  function ru(n, r, o, s) {
    var v = n.stateNode;
    v.props = o, v.state = n.memoizedState, v.refs = so, Os(n);
    var S = r.contextType;
    typeof S == "object" && S !== null ? v.context = br(S) : (S = On(r) ? li : vn.current, v.context = sa(n, S)), nl(n, o, v, s), v.state = n.memoizedState, S = r.getDerivedStateFromProps, typeof S == "function" && (rl(n, r, S, o), v.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (r = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), r !== v.state && ha.enqueueReplaceState(v, v.state, null), nl(n, o, v, s), v.state = n.memoizedState), typeof v.componentDidMount == "function" && (n.effectTag |= 4);
  }
  var iu = Array.isArray;
  function au(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(d(309));
          var s = o.stateNode;
        }
        if (!s)
          throw Error(d(147, n));
        var v = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === v ? r.ref : (r = function(S) {
          var E = s.refs;
          E === so && (E = s.refs = {}), S === null ? delete E[v] : E[v] = S;
        }, r._stringRef = v, r);
      }
      if (typeof n != "string")
        throw Error(d(284));
      if (!o._owner)
        throw Error(d(290, n));
    }
    return n;
  }
  function co(n, r) {
    if (n.type !== "textarea")
      throw Error(d(31, Object.prototype.toString.call(r) === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : r, ""));
  }
  function Ip(n) {
    function r(M, O) {
      if (n) {
        var I = M.lastEffect;
        I !== null ? (I.nextEffect = O, M.lastEffect = O) : M.firstEffect = M.lastEffect = O, O.nextEffect = null, O.effectTag = 8;
      }
    }
    function o(M, O) {
      if (!n)
        return null;
      for (; O !== null; )
        r(M, O), O = O.sibling;
      return null;
    }
    function s(M, O) {
      for (M = /* @__PURE__ */ new Map(); O !== null; )
        O.key !== null ? M.set(O.key, O) : M.set(O.index, O), O = O.sibling;
      return M;
    }
    function v(M, O) {
      return M = zr(M, O), M.index = 0, M.sibling = null, M;
    }
    function S(M, O, I) {
      return M.index = I, n ? (I = M.alternate, I !== null ? (I = I.index, I < O ? (M.effectTag = 2, O) : I) : (M.effectTag = 2, O)) : O;
    }
    function E(M) {
      return n && M.alternate === null && (M.effectTag = 2), M;
    }
    function x(M, O, I, te) {
      return O === null || O.tag !== 6 ? (O = fd(I, M.mode, te), O.return = M, O) : (O = v(O, I), O.return = M, O);
    }
    function z(M, O, I, te) {
      return O !== null && O.elementType === I.type ? (te = v(O, I.props), te.ref = au(M, O, I), te.return = M, te) : (te = ic(I.type, I.key, I.props, null, M.mode, te), te.ref = au(M, O, I), te.return = M, te);
    }
    function U(M, O, I, te) {
      return O === null || O.tag !== 4 || O.stateNode.containerInfo !== I.containerInfo || O.stateNode.implementation !== I.implementation ? (O = dd(I, M.mode, te), O.return = M, O) : (O = v(O, I.children || []), O.return = M, O);
    }
    function ye(M, O, I, te, fe) {
      return O === null || O.tag !== 7 ? (O = Li(I, M.mode, te, fe), O.return = M, O) : (O = v(O, I), O.return = M, O);
    }
    function Ce(M, O, I) {
      if (typeof O == "string" || typeof O == "number")
        return O = fd("" + O, M.mode, I), O.return = M, O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case Lt:
            return I = ic(O.type, O.key, O.props, null, M.mode, I), I.ref = au(M, null, O), I.return = M, I;
          case kt:
            return O = dd(O, M.mode, I), O.return = M, O;
        }
        if (iu(O) || Vn(O))
          return O = Li(O, M.mode, I, null), O.return = M, O;
        co(M, O);
      }
      return null;
    }
    function Je(M, O, I, te) {
      var fe = O !== null ? O.key : null;
      if (typeof I == "string" || typeof I == "number")
        return fe !== null ? null : x(M, O, "" + I, te);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case Lt:
            return I.key === fe ? I.type === Vt ? ye(M, O, I.props.children, te, fe) : z(M, O, I, te) : null;
          case kt:
            return I.key === fe ? U(M, O, I, te) : null;
        }
        if (iu(I) || Vn(I))
          return fe !== null ? null : ye(M, O, I, te, null);
        co(M, I);
      }
      return null;
    }
    function vt(M, O, I, te, fe) {
      if (typeof te == "string" || typeof te == "number")
        return M = M.get(I) || null, x(O, M, "" + te, fe);
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case Lt:
            return M = M.get(te.key === null ? I : te.key) || null, te.type === Vt ? ye(O, M, te.props.children, fe, te.key) : z(O, M, te, fe);
          case kt:
            return M = M.get(te.key === null ? I : te.key) || null, U(O, M, te, fe);
        }
        if (iu(te) || Vn(te))
          return M = M.get(I) || null, ye(O, M, te, fe, null);
        co(O, te);
      }
      return null;
    }
    function sr(M, O, I, te) {
      for (var fe = null, we = null, Pe = O, ut = O = 0, Qt = null; Pe !== null && ut < I.length; ut++) {
        Pe.index > ut ? (Qt = Pe, Pe = null) : Qt = Pe.sibling;
        var Xe = Je(M, Pe, I[ut], te);
        if (Xe === null) {
          Pe === null && (Pe = Qt);
          break;
        }
        n && Pe && Xe.alternate === null && r(M, Pe), O = S(Xe, O, ut), we === null ? fe = Xe : we.sibling = Xe, we = Xe, Pe = Qt;
      }
      if (ut === I.length)
        return o(M, Pe), fe;
      if (Pe === null) {
        for (; ut < I.length; ut++)
          Pe = Ce(M, I[ut], te), Pe !== null && (O = S(Pe, O, ut), we === null ? fe = Pe : we.sibling = Pe, we = Pe);
        return fe;
      }
      for (Pe = s(M, Pe); ut < I.length; ut++)
        Qt = vt(Pe, M, ut, I[ut], te), Qt !== null && (n && Qt.alternate !== null && Pe.delete(Qt.key === null ? ut : Qt.key), O = S(Qt, O, ut), we === null ? fe = Qt : we.sibling = Qt, we = Qt);
      return n && Pe.forEach(function(_a) {
        return r(M, _a);
      }), fe;
    }
    function wn(M, O, I, te) {
      var fe = Vn(I);
      if (typeof fe != "function")
        throw Error(d(150));
      if (I = fe.call(I), I == null)
        throw Error(d(151));
      for (var we = fe = null, Pe = O, ut = O = 0, Qt = null, Xe = I.next(); Pe !== null && !Xe.done; ut++, Xe = I.next()) {
        Pe.index > ut ? (Qt = Pe, Pe = null) : Qt = Pe.sibling;
        var _a = Je(M, Pe, Xe.value, te);
        if (_a === null) {
          Pe === null && (Pe = Qt);
          break;
        }
        n && Pe && _a.alternate === null && r(M, Pe), O = S(_a, O, ut), we === null ? fe = _a : we.sibling = _a, we = _a, Pe = Qt;
      }
      if (Xe.done)
        return o(M, Pe), fe;
      if (Pe === null) {
        for (; !Xe.done; ut++, Xe = I.next())
          Xe = Ce(M, Xe.value, te), Xe !== null && (O = S(Xe, O, ut), we === null ? fe = Xe : we.sibling = Xe, we = Xe);
        return fe;
      }
      for (Pe = s(M, Pe); !Xe.done; ut++, Xe = I.next())
        Xe = vt(Pe, M, ut, Xe.value, te), Xe !== null && (n && Xe.alternate !== null && Pe.delete(Xe.key === null ? ut : Xe.key), O = S(Xe, O, ut), we === null ? fe = Xe : we.sibling = Xe, we = Xe);
      return n && Pe.forEach(function(Fm) {
        return r(M, Fm);
      }), fe;
    }
    return function(M, O, I, te) {
      var fe = typeof I == "object" && I !== null && I.type === Vt && I.key === null;
      fe && (I = I.props.children);
      var we = typeof I == "object" && I !== null;
      if (we)
        switch (I.$$typeof) {
          case Lt:
            e: {
              for (we = I.key, fe = O; fe !== null; ) {
                if (fe.key === we) {
                  switch (fe.tag) {
                    case 7:
                      if (I.type === Vt) {
                        o(M, fe.sibling), O = v(fe, I.props.children), O.return = M, M = O;
                        break e;
                      }
                      break;
                    default:
                      if (fe.elementType === I.type) {
                        o(
                          M,
                          fe.sibling
                        ), O = v(fe, I.props), O.ref = au(M, fe, I), O.return = M, M = O;
                        break e;
                      }
                  }
                  o(M, fe);
                  break;
                } else
                  r(M, fe);
                fe = fe.sibling;
              }
              I.type === Vt ? (O = Li(I.props.children, M.mode, te, I.key), O.return = M, M = O) : (te = ic(I.type, I.key, I.props, null, M.mode, te), te.ref = au(M, O, I), te.return = M, M = te);
            }
            return E(M);
          case kt:
            e: {
              for (fe = I.key; O !== null; ) {
                if (O.key === fe)
                  if (O.tag === 4 && O.stateNode.containerInfo === I.containerInfo && O.stateNode.implementation === I.implementation) {
                    o(M, O.sibling), O = v(O, I.children || []), O.return = M, M = O;
                    break e;
                  } else {
                    o(M, O);
                    break;
                  }
                else
                  r(M, O);
                O = O.sibling;
              }
              O = dd(I, M.mode, te), O.return = M, M = O;
            }
            return E(M);
        }
      if (typeof I == "string" || typeof I == "number")
        return I = "" + I, O !== null && O.tag === 6 ? (o(M, O.sibling), O = v(O, I), O.return = M, M = O) : (o(M, O), O = fd(I, M.mode, te), O.return = M, M = O), E(M);
      if (iu(I))
        return sr(M, O, I, te);
      if (Vn(I))
        return wn(M, O, I, te);
      if (we && co(M, I), typeof I > "u" && !fe)
        switch (M.tag) {
          case 1:
          case 0:
            throw M = M.type, Error(d(152, M.displayName || M.name || "Component"));
        }
      return o(M, O);
    };
  }
  var il = Ip(!0), Vf = Ip(!1), ou = {}, ui = { current: ou }, lu = { current: ou }, al = { current: ou };
  function fo(n) {
    if (n === ou)
      throw Error(d(174));
    return n;
  }
  function As(n, r) {
    switch (Bt(al, r), Bt(lu, n), Bt(ui, ou), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : bi(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = bi(r, n);
    }
    ft(ui), Bt(ui, r);
  }
  function ol() {
    ft(ui), ft(lu), ft(al);
  }
  function $f(n) {
    fo(al.current);
    var r = fo(ui.current), o = bi(r, n.type);
    r !== o && (Bt(lu, n), Bt(ui, o));
  }
  function Bf(n) {
    lu.current === n && (ft(ui), ft(lu));
  }
  var jt = { current: 0 };
  function Ns(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === ls || o.data === zl))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.effectTag & 64)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  function Ps(n, r) {
    return { responder: n, props: r };
  }
  var Ls = ct.ReactCurrentDispatcher, Xn = ct.ReactCurrentBatchConfig, Dn = 0, At = null, Wt = null, Yt = null, ma = !1;
  function Rn() {
    throw Error(d(321));
  }
  function po(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!nr(n[o], r[o]))
        return !1;
    return !0;
  }
  function Wf(n, r, o, s, v, S) {
    if (Dn = S, At = r, r.memoizedState = null, r.updateQueue = null, r.expirationTime = 0, Ls.current = n === null || n.memoizedState === null ? Rm : wm, n = o(s, v), r.expirationTime === Dn) {
      S = 0;
      do {
        if (r.expirationTime = 0, !(25 > S))
          throw Error(d(301));
        S += 1, Yt = Wt = null, r.updateQueue = null, Ls.current = _m, n = o(s, v);
      } while (r.expirationTime === Dn);
    }
    if (Ls.current = $s, r = Wt !== null && Wt.next !== null, Dn = 0, Yt = Wt = At = null, ma = !1, r)
      throw Error(d(300));
    return n;
  }
  function vo() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Yt === null ? At.memoizedState = Yt = n : Yt = Yt.next = n, Yt;
  }
  function ll() {
    if (Wt === null) {
      var n = At.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = Wt.next;
    var r = Yt === null ? At.memoizedState : Yt.next;
    if (r !== null)
      Yt = r, Wt = n;
    else {
      if (n === null)
        throw Error(d(310));
      Wt = n, n = { memoizedState: Wt.memoizedState, baseState: Wt.baseState, baseQueue: Wt.baseQueue, queue: Wt.queue, next: null }, Yt === null ? At.memoizedState = Yt = n : Yt = Yt.next = n;
    }
    return Yt;
  }
  function ya(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function uu(n) {
    var r = ll(), o = r.queue;
    if (o === null)
      throw Error(d(311));
    o.lastRenderedReducer = n;
    var s = Wt, v = s.baseQueue, S = o.pending;
    if (S !== null) {
      if (v !== null) {
        var E = v.next;
        v.next = S.next, S.next = E;
      }
      s.baseQueue = v = S, o.pending = null;
    }
    if (v !== null) {
      v = v.next, s = s.baseState;
      var x = E = S = null, z = v;
      do {
        var U = z.expirationTime;
        if (U < Dn) {
          var ye = { expirationTime: z.expirationTime, suspenseConfig: z.suspenseConfig, action: z.action, eagerReducer: z.eagerReducer, eagerState: z.eagerState, next: null };
          x === null ? (E = x = ye, S = s) : x = x.next = ye, U > At.expirationTime && (At.expirationTime = U, mu(U));
        } else
          x !== null && (x = x.next = { expirationTime: 1073741823, suspenseConfig: z.suspenseConfig, action: z.action, eagerReducer: z.eagerReducer, eagerState: z.eagerState, next: null }), ud(U, z.suspenseConfig), s = z.eagerReducer === n ? z.eagerState : n(s, z.action);
        z = z.next;
      } while (z !== null && z !== v);
      x === null ? S = s : x.next = E, nr(s, r.memoizedState) || (Pr = !0), r.memoizedState = s, r.baseState = S, r.baseQueue = x, o.lastRenderedState = s;
    }
    return [r.memoizedState, o.dispatch];
  }
  function Us(n) {
    var r = ll(), o = r.queue;
    if (o === null)
      throw Error(d(311));
    o.lastRenderedReducer = n;
    var s = o.dispatch, v = o.pending, S = r.memoizedState;
    if (v !== null) {
      o.pending = null;
      var E = v = v.next;
      do
        S = n(S, E.action), E = E.next;
      while (E !== v);
      nr(S, r.memoizedState) || (Pr = !0), r.memoizedState = S, r.baseQueue === null && (r.baseState = S), o.lastRenderedState = S;
    }
    return [S, s];
  }
  function zs(n) {
    var r = vo();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = r.queue = { pending: null, dispatch: null, lastRenderedReducer: ya, lastRenderedState: n }, n = n.dispatch = Vs.bind(null, At, n), [r.memoizedState, n];
  }
  function Hs(n, r, o, s) {
    return n = { tag: n, create: r, destroy: o, deps: s, next: null }, r = At.updateQueue, r === null ? (r = { lastEffect: null }, At.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (s = o.next, o.next = n, n.next = s, r.lastEffect = n)), n;
  }
  function Yf() {
    return ll().memoizedState;
  }
  function ho(n, r, o, s) {
    var v = vo();
    At.effectTag |= n, v.memoizedState = Hs(1 | r, o, void 0, s === void 0 ? null : s);
  }
  function Qf(n, r, o, s) {
    var v = ll();
    s = s === void 0 ? null : s;
    var S = void 0;
    if (Wt !== null) {
      var E = Wt.memoizedState;
      if (S = E.destroy, s !== null && po(s, E.deps)) {
        Hs(r, o, S, s);
        return;
      }
    }
    At.effectTag |= n, v.memoizedState = Hs(1 | r, o, S, s);
  }
  function Fp(n, r) {
    return ho(516, 4, n, r);
  }
  function mo(n, r) {
    return Qf(516, 4, n, r);
  }
  function Gf(n, r) {
    return Qf(4, 2, n, r);
  }
  function Vp(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function ul(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Qf(4, 2, Vp.bind(null, r, n), o);
  }
  function js() {
  }
  function $p(n, r) {
    return vo().memoizedState = [n, r === void 0 ? null : r], n;
  }
  function Is(n, r) {
    var o = ll();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && po(r, s[1]) ? s[0] : (o.memoizedState = [n, r], n);
  }
  function Xf(n, r) {
    var o = ll();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && po(r, s[1]) ? s[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Fs(n, r, o) {
    var s = Ar();
    dt(98 > s ? 98 : s, function() {
      n(!0);
    }), dt(97 < s ? 97 : s, function() {
      var v = Xn.suspense;
      Xn.suspense = r === void 0 ? null : r;
      try {
        n(!1), o();
      } finally {
        Xn.suspense = v;
      }
    });
  }
  function Vs(n, r, o) {
    var s = yn(), v = nu.suspense;
    s = ba(s, n, v), v = { expirationTime: s, suspenseConfig: v, action: o, eagerReducer: null, eagerState: null, next: null };
    var S = r.pending;
    if (S === null ? v.next = v : (v.next = S.next, S.next = v), r.pending = v, S = n.alternate, n === At || S !== null && S === At)
      ma = !0, v.expirationTime = Dn, At.expirationTime = Dn;
    else {
      if (n.expirationTime === 0 && (S === null || S.expirationTime === 0) && (S = r.lastRenderedReducer, S !== null))
        try {
          var E = r.lastRenderedState, x = S(E, o);
          if (v.eagerReducer = S, v.eagerState = x, nr(x, E))
            return;
        } catch {
        } finally {
        }
      Ca(
        n,
        s
      );
    }
  }
  var $s = { readContext: br, useCallback: Rn, useContext: Rn, useEffect: Rn, useImperativeHandle: Rn, useLayoutEffect: Rn, useMemo: Rn, useReducer: Rn, useRef: Rn, useState: Rn, useDebugValue: Rn, useResponder: Rn, useDeferredValue: Rn, useTransition: Rn }, Rm = { readContext: br, useCallback: $p, useContext: br, useEffect: Fp, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, ho(4, 2, Vp.bind(null, r, n), o);
  }, useLayoutEffect: function(n, r) {
    return ho(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = vo();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [
      n,
      r
    ], n;
  }, useReducer: function(n, r, o) {
    var s = vo();
    return r = o !== void 0 ? o(r) : r, s.memoizedState = s.baseState = r, n = s.queue = { pending: null, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, n = n.dispatch = Vs.bind(null, At, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = vo();
    return n = { current: n }, r.memoizedState = n;
  }, useState: zs, useDebugValue: js, useResponder: Ps, useDeferredValue: function(n, r) {
    var o = zs(n), s = o[0], v = o[1];
    return Fp(function() {
      var S = Xn.suspense;
      Xn.suspense = r === void 0 ? null : r;
      try {
        v(n);
      } finally {
        Xn.suspense = S;
      }
    }, [n, r]), s;
  }, useTransition: function(n) {
    var r = zs(!1), o = r[0];
    return r = r[1], [$p(Fs.bind(null, r, n), [r, n]), o];
  } }, wm = { readContext: br, useCallback: Is, useContext: br, useEffect: mo, useImperativeHandle: ul, useLayoutEffect: Gf, useMemo: Xf, useReducer: uu, useRef: Yf, useState: function() {
    return uu(ya);
  }, useDebugValue: js, useResponder: Ps, useDeferredValue: function(n, r) {
    var o = uu(ya), s = o[0], v = o[1];
    return mo(function() {
      var S = Xn.suspense;
      Xn.suspense = r === void 0 ? null : r;
      try {
        v(n);
      } finally {
        Xn.suspense = S;
      }
    }, [n, r]), s;
  }, useTransition: function(n) {
    var r = uu(ya), o = r[0];
    return r = r[1], [Is(Fs.bind(null, r, n), [r, n]), o];
  } }, _m = { readContext: br, useCallback: Is, useContext: br, useEffect: mo, useImperativeHandle: ul, useLayoutEffect: Gf, useMemo: Xf, useReducer: Us, useRef: Yf, useState: function() {
    return Us(ya);
  }, useDebugValue: js, useResponder: Ps, useDeferredValue: function(n, r) {
    var o = Us(ya), s = o[0], v = o[1];
    return mo(function() {
      var S = Xn.suspense;
      Xn.suspense = r === void 0 ? null : r;
      try {
        v(n);
      } finally {
        Xn.suspense = S;
      }
    }, [n, r]), s;
  }, useTransition: function(n) {
    var r = Us(ya), o = r[0];
    return r = r[1], [Is(Fs.bind(
      null,
      r,
      n
    ), [r, n]), o];
  } }, Nr = null, ga = null, yo = !1;
  function Bp(n, r) {
    var o = fi(5, null, null, 0);
    o.elementType = "DELETED", o.type = "DELETED", o.stateNode = r, o.return = n, o.effectTag = 8, n.lastEffect !== null ? (n.lastEffect.nextEffect = o, n.lastEffect = o) : n.firstEffect = n.lastEffect = o;
  }
  function Wp(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, !0) : !1;
      case 13:
        return !1;
      default:
        return !1;
    }
  }
  function su(n) {
    if (yo) {
      var r = ga;
      if (r) {
        var o = r;
        if (!Wp(n, r)) {
          if (r = Yo(o.nextSibling), !r || !Wp(n, r)) {
            n.effectTag = n.effectTag & -1025 | 2, yo = !1, Nr = n;
            return;
          }
          Bp(Nr, o);
        }
        Nr = n, ga = Yo(r.firstChild);
      } else
        n.effectTag = n.effectTag & -1025 | 2, yo = !1, Nr = n;
    }
  }
  function qf(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Nr = n;
  }
  function Bs(n) {
    if (n !== Nr)
      return !1;
    if (!yo)
      return qf(n), yo = !0, !1;
    var r = n.type;
    if (n.tag !== 5 || r !== "head" && r !== "body" && !Hl(r, n.memoizedProps))
      for (r = ga; r; )
        Bp(n, r), r = Yo(r.nextSibling);
    if (qf(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(d(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === lf) {
              if (r === 0) {
                ga = Yo(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== os && o !== zl && o !== ls || r++;
          }
          n = n.nextSibling;
        }
        ga = null;
      }
    } else
      ga = Nr ? Yo(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Pt() {
    ga = Nr = null, yo = !1;
  }
  var Ws = ct.ReactCurrentOwner, Pr = !1;
  function ar(n, r, o, s) {
    r.child = n === null ? Vf(r, null, o, s) : il(r, n.child, o, s);
  }
  function Yp(n, r, o, s, v) {
    o = o.render;
    var S = r.ref;
    return Qn(r, v), s = Wf(n, r, o, s, S, v), n !== null && !Pr ? (r.updateQueue = n.updateQueue, r.effectTag &= -517, n.expirationTime <= v && (n.expirationTime = 0), Ni(n, r, v)) : (r.effectTag |= 1, ar(n, r, s, v), r.child);
  }
  function cu(n, r, o, s, v, S) {
    if (n === null) {
      var E = o.type;
      return typeof E == "function" && !cd(E) && E.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = E, Ys(n, r, E, s, v, S)) : (n = ic(o.type, null, s, null, r.mode, S), n.ref = r.ref, n.return = r, r.child = n);
    }
    return E = n.child, v < S && (v = E.memoizedProps, o = o.compare, o = o !== null ? o : Oi, o(v, s) && n.ref === r.ref) ? Ni(n, r, S) : (r.effectTag |= 1, n = zr(E, s), n.ref = r.ref, n.return = r, r.child = n);
  }
  function Ys(n, r, o, s, v, S) {
    return n !== null && Oi(n.memoizedProps, s) && n.ref === r.ref && (Pr = !1, v < S) ? (r.expirationTime = n.expirationTime, Ni(n, r, S)) : go(n, r, o, s, S);
  }
  function Qp(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.effectTag |= 128);
  }
  function go(n, r, o, s, v) {
    var S = On(o) ? li : vn.current;
    return S = sa(r, S), Qn(r, v), o = Wf(n, r, o, s, S, v), n !== null && !Pr ? (r.updateQueue = n.updateQueue, r.effectTag &= -517, n.expirationTime <= v && (n.expirationTime = 0), Ni(n, r, v)) : (r.effectTag |= 1, ar(n, r, o, v), r.child);
  }
  function Gp(n, r, o, s, v) {
    if (On(o)) {
      var S = !0;
      Zo(r);
    } else
      S = !1;
    if (Qn(r, v), r.stateNode === null)
      n !== null && (n.alternate = null, r.alternate = null, r.effectTag |= 2), jp(r, o, s), ru(r, o, s, v), s = !0;
    else if (n === null) {
      var E = r.stateNode, x = r.memoizedProps;
      E.props = x;
      var z = E.context, U = o.contextType;
      typeof U == "object" && U !== null ? U = br(U) : (U = On(o) ? li : vn.current, U = sa(r, U));
      var ye = o.getDerivedStateFromProps, Ce = typeof ye == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      Ce || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (x !== s || z !== U) && Ms(r, E, s, U), Gn = !1;
      var Je = r.memoizedState;
      E.state = Je, nl(r, s, E, v), z = r.memoizedState, x !== s || Je !== z || cn.current || Gn ? (typeof ye == "function" && (rl(r, o, ye, s), z = r.memoizedState), (x = Gn || Hp(r, o, x, s, Je, z, U)) ? (Ce || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.effectTag |= 4)) : (typeof E.componentDidMount == "function" && (r.effectTag |= 4), r.memoizedProps = s, r.memoizedState = z), E.props = s, E.state = z, E.context = U, s = x) : (typeof E.componentDidMount == "function" && (r.effectTag |= 4), s = !1);
    } else
      E = r.stateNode, Ds(n, r), x = r.memoizedProps, E.props = r.type === r.elementType ? x : Yn(r.type, x), z = E.context, U = o.contextType, typeof U == "object" && U !== null ? U = br(U) : (U = On(o) ? li : vn.current, U = sa(r, U)), ye = o.getDerivedStateFromProps, (Ce = typeof ye == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (x !== s || z !== U) && Ms(r, E, s, U), Gn = !1, z = r.memoizedState, E.state = z, nl(r, s, E, v), Je = r.memoizedState, x !== s || z !== Je || cn.current || Gn ? (typeof ye == "function" && (rl(r, o, ye, s), Je = r.memoizedState), (ye = Gn || Hp(r, o, x, s, z, Je, U)) ? (Ce || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(
        s,
        Je,
        U
      ), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(s, Je, U)), typeof E.componentDidUpdate == "function" && (r.effectTag |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.effectTag |= 256)) : (typeof E.componentDidUpdate != "function" || x === n.memoizedProps && z === n.memoizedState || (r.effectTag |= 4), typeof E.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && z === n.memoizedState || (r.effectTag |= 256), r.memoizedProps = s, r.memoizedState = Je), E.props = s, E.state = Je, E.context = U, s = ye) : (typeof E.componentDidUpdate != "function" || x === n.memoizedProps && z === n.memoizedState || (r.effectTag |= 4), typeof E.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && z === n.memoizedState || (r.effectTag |= 256), s = !1);
    return Kf(n, r, o, s, S, v);
  }
  function Kf(n, r, o, s, v, S) {
    Qp(n, r);
    var E = (r.effectTag & 64) !== 0;
    if (!s && !E)
      return v && eu(r, o, !1), Ni(n, r, S);
    s = r.stateNode, Ws.current = r;
    var x = E && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return r.effectTag |= 1, n !== null && E ? (r.child = il(r, n.child, null, S), r.child = il(r, null, x, S)) : ar(n, r, x, S), r.memoizedState = s.state, v && eu(r, o, !0), r.child;
  }
  function Qs(n) {
    var r = n.stateNode;
    r.pendingContext ? bs(n, r.pendingContext, r.pendingContext !== r.context) : r.context && bs(n, r.context, !1), As(n, r.containerInfo);
  }
  var Zf = { dehydrated: null, retryTime: 0 };
  function Xp(n, r, o) {
    var s = r.mode, v = r.pendingProps, S = jt.current, E = !1, x;
    if ((x = (r.effectTag & 64) !== 0) || (x = (S & 2) !== 0 && (n === null || n.memoizedState !== null)), x ? (E = !0, r.effectTag &= -65) : n !== null && n.memoizedState === null || v.fallback === void 0 || v.unstable_avoidThisFallback === !0 || (S |= 1), Bt(jt, S & 1), n === null) {
      if (v.fallback !== void 0 && su(r), E) {
        if (E = v.fallback, v = Li(null, s, 0, null), v.return = r, !(r.mode & 2))
          for (n = r.memoizedState !== null ? r.child.child : r.child, v.child = n; n !== null; )
            n.return = v, n = n.sibling;
        return o = Li(E, s, o, null), o.return = r, v.sibling = o, r.memoizedState = Zf, r.child = v, o;
      }
      return s = v.children, r.memoizedState = null, r.child = Vf(r, null, s, o);
    }
    if (n.memoizedState !== null) {
      if (n = n.child, s = n.sibling, E) {
        if (v = v.fallback, o = zr(n, n.pendingProps), o.return = r, !(r.mode & 2) && (E = r.memoizedState !== null ? r.child.child : r.child, E !== n.child))
          for (o.child = E; E !== null; )
            E.return = o, E = E.sibling;
        return s = zr(s, v), s.return = r, o.sibling = s, o.childExpirationTime = 0, r.memoizedState = Zf, r.child = o, s;
      }
      return o = il(r, n.child, v.children, o), r.memoizedState = null, r.child = o;
    }
    if (n = n.child, E) {
      if (E = v.fallback, v = Li(null, s, 0, null), v.return = r, v.child = n, n !== null && (n.return = v), !(r.mode & 2))
        for (n = r.memoizedState !== null ? r.child.child : r.child, v.child = n; n !== null; )
          n.return = v, n = n.sibling;
      return o = Li(E, s, o, null), o.return = r, v.sibling = o, o.effectTag |= 2, v.childExpirationTime = 0, r.memoizedState = Zf, r.child = v, o;
    }
    return r.memoizedState = null, r.child = il(r, n, v.children, o);
  }
  function qp(n, r) {
    n.expirationTime < r && (n.expirationTime = r);
    var o = n.alternate;
    o !== null && o.expirationTime < r && (o.expirationTime = r), tl(n.return, r);
  }
  function Gs(n, r, o, s, v, S) {
    var E = n.memoizedState;
    E === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: s, tail: o, tailExpiration: 0, tailMode: v, lastEffect: S } : (E.isBackwards = r, E.rendering = null, E.renderingStartTime = 0, E.last = s, E.tail = o, E.tailExpiration = 0, E.tailMode = v, E.lastEffect = S);
  }
  function Kp(n, r, o) {
    var s = r.pendingProps, v = s.revealOrder, S = s.tail;
    if (ar(n, r, s.children, o), s = jt.current, s & 2)
      s = s & 1 | 2, r.effectTag |= 64;
    else {
      if (n !== null && n.effectTag & 64)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && qp(n, o);
            else if (n.tag === 19)
              qp(n, o);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      s &= 1;
    }
    if (Bt(jt, s), !(r.mode & 2))
      r.memoizedState = null;
    else
      switch (v) {
        case "forwards":
          for (o = r.child, v = null; o !== null; )
            n = o.alternate, n !== null && Ns(n) === null && (v = o), o = o.sibling;
          o = v, o === null ? (v = r.child, r.child = null) : (v = o.sibling, o.sibling = null), Gs(r, !1, v, o, S, r.lastEffect);
          break;
        case "backwards":
          for (o = null, v = r.child, r.child = null; v !== null; ) {
            if (n = v.alternate, n !== null && Ns(n) === null) {
              r.child = v;
              break;
            }
            n = v.sibling, v.sibling = o, o = v, v = n;
          }
          Gs(r, !0, o, null, S, r.lastEffect);
          break;
        case "together":
          Gs(r, !1, null, null, void 0, r.lastEffect);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Ni(n, r, o) {
    n !== null && (r.dependencies = n.dependencies);
    var s = r.expirationTime;
    if (s !== 0 && mu(s), r.childExpirationTime < o)
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(d(153));
    if (r.child !== null) {
      for (n = r.child, o = zr(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = zr(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  var Zp, Xs, So, qs;
  Zp = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Xs = function() {
  }, So = function(n, r, o, s, v) {
    var S = n.memoizedProps;
    if (S !== s) {
      var E = r.stateNode;
      switch (fo(ui.current), n = null, o) {
        case "input":
          S = Ut(E, S), s = Ut(E, s), n = [];
          break;
        case "option":
          S = Xt(E, S), s = Xt(E, s), n = [];
          break;
        case "select":
          S = c({}, S, { value: void 0 }), s = c({}, s, { value: void 0 }), n = [];
          break;
        case "textarea":
          S = mr(E, S), s = mr(E, s), n = [];
          break;
        default:
          typeof S.onClick != "function" && typeof s.onClick == "function" && (E.onclick = Za);
      }
      rs(o, s);
      var x, z;
      o = null;
      for (x in S)
        if (!s.hasOwnProperty(x) && S.hasOwnProperty(x) && S[x] != null)
          if (x === "style")
            for (z in E = S[x], E)
              E.hasOwnProperty(z) && (o || (o = {}), o[z] = "");
          else
            x !== "dangerouslySetInnerHTML" && x !== "children" && x !== "suppressContentEditableWarning" && x !== "suppressHydrationWarning" && x !== "autoFocus" && (K.hasOwnProperty(x) ? n || (n = []) : (n = n || []).push(x, null));
      for (x in s) {
        var U = s[x];
        if (E = S != null ? S[x] : void 0, s.hasOwnProperty(x) && U !== E && (U != null || E != null))
          if (x === "style")
            if (E) {
              for (z in E)
                !E.hasOwnProperty(z) || U && U.hasOwnProperty(z) || (o || (o = {}), o[z] = "");
              for (z in U)
                U.hasOwnProperty(z) && E[z] !== U[z] && (o || (o = {}), o[z] = U[z]);
            } else
              o || (n || (n = []), n.push(x, o)), o = U;
          else
            x === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, E = E ? E.__html : void 0, U != null && E !== U && (n = n || []).push(x, U)) : x === "children" ? E === U || typeof U != "string" && typeof U != "number" || (n = n || []).push(x, "" + U) : x !== "suppressContentEditableWarning" && x !== "suppressHydrationWarning" && (K.hasOwnProperty(x) ? (U != null && wi(v, x), n || E === U || (n = [])) : (n = n || []).push(x, U));
      }
      o && (n = n || []).push("style", o), v = n, (r.updateQueue = v) && (r.effectTag |= 4);
    }
  }, qs = function(n, r, o, s) {
    o !== s && (r.effectTag |= 4);
  };
  function fu(n, r) {
    switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var o = null; r !== null; )
          r.alternate !== null && (o = r), r = r.sibling;
        o === null ? n.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = n.tail;
        for (var s = null; o !== null; )
          o.alternate !== null && (s = o), o = o.sibling;
        s === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : s.sibling = null;
    }
  }
  function Jp(n, r, o) {
    var s = r.pendingProps;
    switch (r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return On(r.type) && ca(), null;
      case 3:
        return ol(), ft(cn), ft(vn), o = r.stateNode, o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), n !== null && n.child !== null || !Bs(r) || (r.effectTag |= 4), Xs(r), null;
      case 5:
        Bf(r), o = fo(al.current);
        var v = r.type;
        if (n !== null && r.stateNode != null)
          So(n, r, v, s, o), n.ref !== r.ref && (r.effectTag |= 128);
        else {
          if (!s) {
            if (r.stateNode === null)
              throw Error(d(166));
            return null;
          }
          if (n = fo(ui.current), Bs(r)) {
            s = r.stateNode, v = r.type;
            var S = r.memoizedProps;
            switch (s[ri] = r, s[Qo] = S, v) {
              case "iframe":
              case "object":
              case "embed":
                qe("load", s);
                break;
              case "video":
              case "audio":
                for (n = 0; n < lt.length; n++)
                  qe(lt[n], s);
                break;
              case "source":
                qe("error", s);
                break;
              case "img":
              case "image":
              case "link":
                qe("error", s), qe("load", s);
                break;
              case "form":
                qe("reset", s), qe("submit", s);
                break;
              case "details":
                qe("toggle", s);
                break;
              case "input":
                er(s, S), qe("invalid", s), wi(o, "onChange");
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!S.multiple }, qe("invalid", s), wi(o, "onChange");
                break;
              case "textarea":
                Ki(s, S), qe("invalid", s), wi(o, "onChange");
            }
            rs(v, S), n = null;
            for (var E in S)
              if (S.hasOwnProperty(E)) {
                var x = S[E];
                E === "children" ? typeof x == "string" ? s.textContent !== x && (n = ["children", x]) : typeof x == "number" && s.textContent !== "" + x && (n = ["children", "" + x]) : K.hasOwnProperty(E) && x != null && wi(o, E);
              }
            switch (v) {
              case "input":
                wr(s), $t(s, S, !0);
                break;
              case "textarea":
                wr(s), Zi(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof S.onClick == "function" && (s.onclick = Za);
            }
            o = n, r.updateQueue = o, o !== null && (r.effectTag |= 4);
          } else {
            switch (E = o.nodeType === 9 ? o : o.ownerDocument, n === Rp && (n = Ji(v)), n === Rp ? v === "script" ? (n = E.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof s.is == "string" ? n = E.createElement(v, { is: s.is }) : (n = E.createElement(v), v === "select" && (E = n, s.multiple ? E.multiple = !0 : s.size && (E.size = s.size))) : n = E.createElementNS(n, v), n[ri] = r, n[Qo] = s, Zp(n, r, !1, !1), r.stateNode = n, E = tf(v, s), v) {
              case "iframe":
              case "object":
              case "embed":
                qe(
                  "load",
                  n
                ), x = s;
                break;
              case "video":
              case "audio":
                for (x = 0; x < lt.length; x++)
                  qe(lt[x], n);
                x = s;
                break;
              case "source":
                qe("error", n), x = s;
                break;
              case "img":
              case "image":
              case "link":
                qe("error", n), qe("load", n), x = s;
                break;
              case "form":
                qe("reset", n), qe("submit", n), x = s;
                break;
              case "details":
                qe("toggle", n), x = s;
                break;
              case "input":
                er(n, s), x = Ut(n, s), qe("invalid", n), wi(o, "onChange");
                break;
              case "option":
                x = Xt(n, s);
                break;
              case "select":
                n._wrapperState = { wasMultiple: !!s.multiple }, x = c({}, s, { value: void 0 }), qe("invalid", n), wi(o, "onChange");
                break;
              case "textarea":
                Ki(
                  n,
                  s
                ), x = mr(n, s), qe("invalid", n), wi(o, "onChange");
                break;
              default:
                x = s;
            }
            rs(v, x);
            var z = x;
            for (S in z)
              if (z.hasOwnProperty(S)) {
                var U = z[S];
                S === "style" ? Cp(n, U) : S === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, U != null && bn(n, U)) : S === "children" ? typeof U == "string" ? (v !== "textarea" || U !== "") && tr(n, U) : typeof U == "number" && tr(n, "" + U) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (K.hasOwnProperty(S) ? U != null && wi(o, S) : U != null && nt(n, S, U, E));
              }
            switch (v) {
              case "input":
                wr(n), $t(n, s, !1);
                break;
              case "textarea":
                wr(n), Zi(n);
                break;
              case "option":
                s.value != null && n.setAttribute("value", "" + Tn(s.value));
                break;
              case "select":
                n.multiple = !!s.multiple, o = s.value, o != null ? Ht(n, !!s.multiple, o, !1) : s.defaultValue != null && Ht(n, !!s.multiple, s.defaultValue, !0);
                break;
              default:
                typeof x.onClick == "function" && (n.onclick = Za);
            }
            wp(v, s) && (r.effectTag |= 4);
          }
          r.ref !== null && (r.effectTag |= 128);
        }
        return null;
      case 6:
        if (n && r.stateNode != null)
          qs(n, r, n.memoizedProps, s);
        else {
          if (typeof s != "string" && r.stateNode === null)
            throw Error(d(166));
          o = fo(al.current), fo(ui.current), Bs(r) ? (o = r.stateNode, s = r.memoizedProps, o[ri] = r, o.nodeValue !== s && (r.effectTag |= 4)) : (o = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), o[ri] = r, r.stateNode = o);
        }
        return null;
      case 13:
        return ft(jt), s = r.memoizedState, r.effectTag & 64 ? (r.expirationTime = o, r) : (o = s !== null, s = !1, n === null ? r.memoizedProps.fallback !== void 0 && Bs(r) : (v = n.memoizedState, s = v !== null, o || v === null || (v = n.child.sibling, v !== null && (S = r.firstEffect, S !== null ? (r.firstEffect = v, v.nextEffect = S) : (r.firstEffect = r.lastEffect = v, v.nextEffect = null), v.effectTag = 8))), o && !s && r.mode & 2 && (n === null && r.memoizedProps.unstable_avoidThisFallback !== !0 || jt.current & 1 ? Zt === Sa && (Zt = vu) : ((Zt === Sa || Zt === vu) && (Zt = Js), Lr !== 0 && or !== null && (wo(or, Dt), pd(or, Lr)))), (o || s) && (r.effectTag |= 4), null);
      case 4:
        return ol(), Xs(r), null;
      case 10:
        return jf(r), null;
      case 17:
        return On(r.type) && ca(), null;
      case 19:
        if (ft(jt), s = r.memoizedState, s === null)
          return null;
        if (v = (r.effectTag & 64) !== 0, S = s.rendering, S === null) {
          if (v)
            fu(s, !1);
          else if (Zt !== Sa || n !== null && n.effectTag & 64)
            for (S = r.child; S !== null; ) {
              if (n = Ns(S), n !== null) {
                for (r.effectTag |= 64, fu(s, !1), v = n.updateQueue, v !== null && (r.updateQueue = v, r.effectTag |= 4), s.lastEffect === null && (r.firstEffect = null), r.lastEffect = s.lastEffect, s = r.child; s !== null; )
                  v = s, S = o, v.effectTag &= 2, v.nextEffect = null, v.firstEffect = null, v.lastEffect = null, n = v.alternate, n === null ? (v.childExpirationTime = 0, v.expirationTime = S, v.child = null, v.memoizedProps = null, v.memoizedState = null, v.updateQueue = null, v.dependencies = null) : (v.childExpirationTime = n.childExpirationTime, v.expirationTime = n.expirationTime, v.child = n.child, v.memoizedProps = n.memoizedProps, v.memoizedState = n.memoizedState, v.updateQueue = n.updateQueue, S = n.dependencies, v.dependencies = S === null ? null : { expirationTime: S.expirationTime, firstContext: S.firstContext, responders: S.responders }), s = s.sibling;
                return Bt(jt, jt.current & 1 | 2), r.child;
              }
              S = S.sibling;
            }
        } else {
          if (!v)
            if (n = Ns(S), n !== null) {
              if (r.effectTag |= 64, v = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.effectTag |= 4), fu(s, !0), s.tail === null && s.tailMode === "hidden" && !S.alternate)
                return r = r.lastEffect = s.lastEffect, r !== null && (r.nextEffect = null), null;
            } else
              2 * bt() - s.renderingStartTime > s.tailExpiration && 1 < o && (r.effectTag |= 64, v = !0, fu(s, !1), r.expirationTime = r.childExpirationTime = o - 1);
          s.isBackwards ? (S.sibling = r.child, r.child = S) : (o = s.last, o !== null ? o.sibling = S : r.child = S, s.last = S);
        }
        return s.tail !== null ? (s.tailExpiration === 0 && (s.tailExpiration = bt() + 500), o = s.tail, s.rendering = o, s.tail = o.sibling, s.lastEffect = r.lastEffect, s.renderingStartTime = bt(), o.sibling = null, r = jt.current, Bt(jt, v ? r & 1 | 2 : r & 1), o) : null;
    }
    throw Error(d(
      156,
      r.tag
    ));
  }
  function km(n) {
    switch (n.tag) {
      case 1:
        On(n.type) && ca();
        var r = n.effectTag;
        return r & 4096 ? (n.effectTag = r & -4097 | 64, n) : null;
      case 3:
        if (ol(), ft(cn), ft(vn), r = n.effectTag, r & 64)
          throw Error(d(285));
        return n.effectTag = r & -4097 | 64, n;
      case 5:
        return Bf(n), null;
      case 13:
        return ft(jt), r = n.effectTag, r & 4096 ? (n.effectTag = r & -4097 | 64, n) : null;
      case 19:
        return ft(jt), null;
      case 4:
        return ol(), null;
      case 10:
        return jf(n), null;
      default:
        return null;
    }
  }
  function Jf(n, r) {
    return { value: n, source: r, stack: qi(r) };
  }
  var Om = typeof WeakSet == "function" ? WeakSet : Set;
  function ed(n, r) {
    var o = r.source, s = r.stack;
    s === null && o !== null && (s = qi(o)), o !== null && $n(o.type), r = r.value, n !== null && n.tag === 1 && $n(n.type);
    try {
      console.error(r);
    } catch (v) {
      setTimeout(function() {
        throw v;
      });
    }
  }
  function Dm(n, r) {
    try {
      r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
    } catch (o) {
      Ra(n, o);
    }
  }
  function ev(n) {
    var r = n.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (o) {
          Ra(n, o);
        }
      else
        r.current = null;
  }
  function Mm(n, r) {
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (r.effectTag & 256 && n !== null) {
          var o = n.memoizedProps, s = n.memoizedState;
          n = r.stateNode, r = n.getSnapshotBeforeUpdate(r.elementType === r.type ? o : Yn(r.type, o), s), n.__reactInternalSnapshotBeforeUpdate = r;
        }
        return;
      case 3:
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(d(163));
  }
  function tv(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var s = o.destroy;
          o.destroy = void 0, s !== void 0 && s();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function td(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var s = o.create;
          o.destroy = s();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Am(n, r, o) {
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        td(3, o);
        return;
      case 1:
        if (n = o.stateNode, o.effectTag & 4)
          if (r === null)
            n.componentDidMount();
          else {
            var s = o.elementType === o.type ? r.memoizedProps : Yn(o.type, r.memoizedProps);
            n.componentDidUpdate(s, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
          }
        r = o.updateQueue, r !== null && Ff(o, r, n);
        return;
      case 3:
        if (r = o.updateQueue, r !== null) {
          if (n = null, o.child !== null)
            switch (o.child.tag) {
              case 5:
                n = o.child.stateNode;
                break;
              case 1:
                n = o.child.stateNode;
            }
          Ff(o, r, n);
        }
        return;
      case 5:
        n = o.stateNode, r === null && o.effectTag & 4 && wp(o.type, o.memoizedProps) && n.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        o.memoizedState === null && (o = o.alternate, o !== null && (o = o.memoizedState, o !== null && (o = o.dehydrated, o !== null && Sp(o))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
        return;
    }
    throw Error(d(163));
  }
  function nd(n, r, o) {
    switch (typeof gu == "function" && gu(r), r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        if (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null)) {
          var s = n.next;
          dt(97 < o ? 97 : o, function() {
            var v = s;
            do {
              var S = v.destroy;
              if (S !== void 0) {
                var E = r;
                try {
                  S();
                } catch (x) {
                  Ra(E, x);
                }
              }
              v = v.next;
            } while (v !== s);
          });
        }
        break;
      case 1:
        ev(r), o = r.stateNode, typeof o.componentWillUnmount == "function" && Dm(r, o);
        break;
      case 5:
        ev(r);
        break;
      case 4:
        Ks(n, r, o);
    }
  }
  function nv(n) {
    var r = n.alternate;
    n.return = null, n.child = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null, n.alternate = null, n.firstEffect = null, n.lastEffect = null, n.pendingProps = null, n.memoizedProps = null, n.stateNode = null, r !== null && nv(r);
  }
  function rv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function iv(n) {
    e: {
      for (var r = n.return; r !== null; ) {
        if (rv(r)) {
          var o = r;
          break e;
        }
        r = r.return;
      }
      throw Error(d(160));
    }
    switch (r = o.stateNode, o.tag) {
      case 5:
        var s = !1;
        break;
      case 3:
        r = r.containerInfo, s = !0;
        break;
      case 4:
        r = r.containerInfo, s = !0;
        break;
      default:
        throw Error(d(161));
    }
    o.effectTag & 16 && (tr(r, ""), o.effectTag &= -17);
    e:
      t:
        for (o = n; ; ) {
          for (; o.sibling === null; ) {
            if (o.return === null || rv(o.return)) {
              o = null;
              break e;
            }
            o = o.return;
          }
          for (o.sibling.return = o.return, o = o.sibling; o.tag !== 5 && o.tag !== 6 && o.tag !== 18; ) {
            if (o.effectTag & 2 || o.child === null || o.tag === 4)
              continue t;
            o.child.return = o, o = o.child;
          }
          if (!(o.effectTag & 2)) {
            o = o.stateNode;
            break e;
          }
        }
    s ? rd(n, o, r) : du(n, o, r);
  }
  function rd(n, r, o) {
    var s = n.tag, v = s === 5 || s === 6;
    if (v)
      n = v ? n.stateNode : n.stateNode.instance, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Za));
    else if (s !== 4 && (n = n.child, n !== null))
      for (rd(n, r, o), n = n.sibling; n !== null; )
        rd(n, r, o), n = n.sibling;
  }
  function du(n, r, o) {
    var s = n.tag, v = s === 5 || s === 6;
    if (v)
      n = v ? n.stateNode : n.stateNode.instance, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (s !== 4 && (n = n.child, n !== null))
      for (du(n, r, o), n = n.sibling; n !== null; )
        du(n, r, o), n = n.sibling;
  }
  function Ks(n, r, o) {
    for (var s = r, v = !1, S, E; ; ) {
      if (!v) {
        v = s.return;
        e:
          for (; ; ) {
            if (v === null)
              throw Error(d(160));
            switch (S = v.stateNode, v.tag) {
              case 5:
                E = !1;
                break e;
              case 3:
                S = S.containerInfo, E = !0;
                break e;
              case 4:
                S = S.containerInfo, E = !0;
                break e;
            }
            v = v.return;
          }
        v = !0;
      }
      if (s.tag === 5 || s.tag === 6) {
        e:
          for (var x = n, z = s, U = o, ye = z; ; )
            if (nd(x, ye, U), ye.child !== null && ye.tag !== 4)
              ye.child.return = ye, ye = ye.child;
            else {
              if (ye === z)
                break e;
              for (; ye.sibling === null; ) {
                if (ye.return === null || ye.return === z)
                  break e;
                ye = ye.return;
              }
              ye.sibling.return = ye.return, ye = ye.sibling;
            }
        E ? (x = S, z = s.stateNode, x.nodeType === 8 ? x.parentNode.removeChild(z) : x.removeChild(z)) : S.removeChild(s.stateNode);
      } else if (s.tag === 4) {
        if (s.child !== null) {
          S = s.stateNode.containerInfo, E = !0, s.child.return = s, s = s.child;
          continue;
        }
      } else if (nd(n, s, o), s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === r)
        break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === r)
          return;
        s = s.return, s.tag === 4 && (v = !1);
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }
  function Pi(n, r) {
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        tv(3, r);
        return;
      case 1:
        return;
      case 5:
        var o = r.stateNode;
        if (o != null) {
          var s = r.memoizedProps, v = n !== null ? n.memoizedProps : s;
          n = r.type;
          var S = r.updateQueue;
          if (r.updateQueue = null, S !== null) {
            for (o[Qo] = s, n === "input" && s.type === "radio" && s.name != null && zt(o, s), tf(n, v), r = tf(n, s), v = 0; v < S.length; v += 2) {
              var E = S[v], x = S[v + 1];
              E === "style" ? Cp(o, x) : E === "dangerouslySetInnerHTML" ? bn(o, x) : E === "children" ? tr(o, x) : nt(o, E, x, r);
            }
            switch (n) {
              case "input":
                St(o, s);
                break;
              case "textarea":
                Ba(o, s);
                break;
              case "select":
                r = o._wrapperState.wasMultiple, o._wrapperState.wasMultiple = !!s.multiple, n = s.value, n != null ? Ht(o, !!s.multiple, n, !1) : r !== !!s.multiple && (s.defaultValue != null ? Ht(o, !!s.multiple, s.defaultValue, !0) : Ht(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
          }
        }
        return;
      case 6:
        if (r.stateNode === null)
          throw Error(d(162));
        r.stateNode.nodeValue = r.memoizedProps;
        return;
      case 3:
        r = r.stateNode, r.hydrate && (r.hydrate = !1, Sp(r.containerInfo));
        return;
      case 12:
        return;
      case 13:
        if (o = r, r.memoizedState === null ? s = !1 : (s = !0, o = r.child, Ea = bt()), o !== null)
          e:
            for (n = o; ; ) {
              if (n.tag === 5)
                S = n.stateNode, s ? (S = S.style, typeof S.setProperty == "function" ? S.setProperty("display", "none", "important") : S.display = "none") : (S = n.stateNode, v = n.memoizedProps.style, v = v != null && v.hasOwnProperty("display") ? v.display : null, S.style.display = bp("display", v));
              else if (n.tag === 6)
                n.stateNode.nodeValue = s ? "" : n.memoizedProps;
              else if (n.tag === 13 && n.memoizedState !== null && n.memoizedState.dehydrated === null) {
                S = n.child.sibling, S.return = n, n = S;
                continue;
              } else if (n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
              }
              if (n === o)
                break;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === o)
                  break e;
                n = n.return;
              }
              n.sibling.return = n.return, n = n.sibling;
            }
        pu(r);
        return;
      case 19:
        pu(r);
        return;
      case 17:
        return;
    }
    throw Error(d(163));
  }
  function pu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Om()), r.forEach(function(s) {
        var v = zm.bind(null, n, s);
        o.has(s) || (o.add(s), s.then(v, v));
      });
    }
  }
  var av = typeof WeakMap == "function" ? WeakMap : Map;
  function Eo(n, r, o) {
    o = pa(o, null), o.tag = 3, o.payload = { element: null };
    var s = r.value;
    return o.callback = function() {
      Co || (Co = !0, cl = s), ed(n, r);
    }, o;
  }
  function ov(n, r, o) {
    o = pa(o, null), o.tag = 3;
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var v = r.value;
      o.payload = function() {
        return ed(n, r), s(v);
      };
    }
    var S = n.stateNode;
    return S !== null && typeof S.componentDidCatch == "function" && (o.callback = function() {
      typeof s != "function" && (xr === null ? xr = /* @__PURE__ */ new Set([this]) : xr.add(this), ed(n, r));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), o;
  }
  var Nm = Math.ceil, Zs = ct.ReactCurrentDispatcher, lv = ct.ReactCurrentOwner, hn = 0, id = 8, Cr = 16, si = 32, Sa = 0, mn = 1, uv = 2, vu = 3, Js = 4, ad = 5, Ve = hn, or = null, Qe = null, Dt = 0, Zt = Sa, To = null, lr = 1073741823, sl = 1073741823, ci = null, Lr = 0, bo = !1, Ea = 0, ec = 500, ke = null, Co = !1, cl = null, xr = null, hu = !1, Ta = null, fl = 90, Ur = null, dl = 0, od = null, tc = 0;
  function yn() {
    return (Ve & (Cr | si)) !== hn ? 1073741821 - (bt() / 10 | 0) : tc !== 0 ? tc : tc = 1073741821 - (bt() / 10 | 0);
  }
  function ba(n, r, o) {
    if (r = r.mode, !(r & 2))
      return 1073741823;
    var s = Ar();
    if (!(r & 4))
      return s === 99 ? 1073741823 : 1073741822;
    if ((Ve & Cr) !== hn)
      return Dt;
    if (o !== null)
      n = Ot(n, o.timeoutMs | 0 || 5e3, 250);
    else
      switch (s) {
        case 99:
          n = 1073741823;
          break;
        case 98:
          n = Ot(n, 150, 100);
          break;
        case 97:
        case 96:
          n = Ot(n, 5e3, 250);
          break;
        case 95:
          n = 2;
          break;
        default:
          throw Error(d(326));
      }
    return or !== null && n === Dt && --n, n;
  }
  function Ca(n, r) {
    if (50 < dl)
      throw dl = 0, od = null, Error(d(185));
    if (n = xo(n, r), n !== null) {
      var o = Ar();
      r === 1073741823 ? (Ve & id) !== hn && (Ve & (Cr | si)) === hn ? ld(n) : (ur(n), Ve === hn && ir()) : ur(n), (Ve & 4) === hn || o !== 98 && o !== 99 || (Ur === null ? Ur = /* @__PURE__ */ new Map([[n, r]]) : (o = Ur.get(n), (o === void 0 || o > r) && Ur.set(n, r)));
    }
  }
  function xo(n, r) {
    n.expirationTime < r && (n.expirationTime = r);
    var o = n.alternate;
    o !== null && o.expirationTime < r && (o.expirationTime = r);
    var s = n.return, v = null;
    if (s === null && n.tag === 3)
      v = n.stateNode;
    else
      for (; s !== null; ) {
        if (o = s.alternate, s.childExpirationTime < r && (s.childExpirationTime = r), o !== null && o.childExpirationTime < r && (o.childExpirationTime = r), s.return === null && s.tag === 3) {
          v = s.stateNode;
          break;
        }
        s = s.return;
      }
    return v !== null && (or === v && (mu(r), Zt === Js && wo(v, Dt)), pd(v, r)), v;
  }
  function nc(n) {
    var r = n.lastExpiredTime;
    if (r !== 0 || (r = n.firstPendingTime, !bv(n, r)))
      return r;
    var o = n.lastPingedTime;
    return n = n.nextKnownPendingLevel, n = o > n ? o : n, 2 >= n && r !== n ? 0 : n;
  }
  function ur(n) {
    if (n.lastExpiredTime !== 0)
      n.callbackExpirationTime = 1073741823, n.callbackPriority = 99, n.callbackNode = uo(ld.bind(null, n));
    else {
      var r = nc(n), o = n.callbackNode;
      if (r === 0)
        o !== null && (n.callbackNode = null, n.callbackExpirationTime = 0, n.callbackPriority = 90);
      else {
        var s = yn();
        if (r === 1073741823 ? s = 99 : r === 1 || r === 2 ? s = 95 : (s = 10 * (1073741821 - r) - 10 * (1073741821 - s), s = 0 >= s ? 99 : 250 >= s ? 98 : 5250 >= s ? 97 : 95), o !== null) {
          var v = n.callbackPriority;
          if (n.callbackExpirationTime === r && v >= s)
            return;
          o !== Lf && Cs(o);
        }
        n.callbackExpirationTime = r, n.callbackPriority = s, r = r === 1073741823 ? uo(ld.bind(null, n)) : zp(s, sv.bind(null, n), { timeout: 10 * (1073741821 - r) - bt() }), n.callbackNode = r;
      }
    }
  }
  function sv(n, r) {
    if (tc = 0, r)
      return r = yn(), wa(n, r), ur(n), null;
    var o = nc(n);
    if (o !== 0) {
      if (r = n.callbackNode, (Ve & (Cr | si)) !== hn)
        throw Error(d(327));
      if (pl(), n === or && o === Dt || Ro(n, o), Qe !== null) {
        var s = Ve;
        Ve |= Cr;
        var v = pv();
        do
          try {
            hv();
            break;
          } catch (x) {
            dv(n, x);
          }
        while (!0);
        if (Hf(), Ve = s, Zs.current = v, Zt === mn)
          throw r = To, Ro(n, o), wo(n, o), ur(n), r;
        if (Qe === null)
          switch (v = n.finishedWork = n.current.alternate, n.finishedExpirationTime = o, s = Zt, or = null, s) {
            case Sa:
            case mn:
              throw Error(d(345));
            case uv:
              wa(n, 2 < o ? 2 : o);
              break;
            case vu:
              if (wo(n, o), s = n.lastSuspendedTime, o === s && (n.nextKnownPendingLevel = yu(v)), lr === 1073741823 && (v = Ea + ec - bt(), 10 < v)) {
                if (bo) {
                  var S = n.lastPingedTime;
                  if (S === 0 || S >= o) {
                    n.lastPingedTime = o, Ro(n, o);
                    break;
                  }
                }
                if (S = nc(n), S !== 0 && S !== o)
                  break;
                if (s !== 0 && s !== o) {
                  n.lastPingedTime = s;
                  break;
                }
                n.timeoutHandle = ss(xa.bind(null, n), v);
                break;
              }
              xa(n);
              break;
            case Js:
              if (wo(n, o), s = n.lastSuspendedTime, o === s && (n.nextKnownPendingLevel = yu(v)), bo && (v = n.lastPingedTime, v === 0 || v >= o)) {
                n.lastPingedTime = o, Ro(n, o);
                break;
              }
              if (v = nc(n), v !== 0 && v !== o)
                break;
              if (s !== 0 && s !== o) {
                n.lastPingedTime = s;
                break;
              }
              if (sl !== 1073741823 ? s = 10 * (1073741821 - sl) - bt() : lr === 1073741823 ? s = 0 : (s = 10 * (1073741821 - lr) - 5e3, v = bt(), o = 10 * (1073741821 - o) - v, s = v - s, 0 > s && (s = 0), s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Nm(s / 1960)) - s, o < s && (s = o)), 10 < s) {
                n.timeoutHandle = ss(xa.bind(null, n), s);
                break;
              }
              xa(n);
              break;
            case ad:
              if (lr !== 1073741823 && ci !== null) {
                S = lr;
                var E = ci;
                if (s = E.busyMinDurationMs | 0, 0 >= s ? s = 0 : (v = E.busyDelayMs | 0, S = bt() - (10 * (1073741821 - S) - (E.timeoutMs | 0 || 5e3)), s = S <= v ? 0 : v + s - S), 10 < s) {
                  wo(n, o), n.timeoutHandle = ss(xa.bind(null, n), s);
                  break;
                }
              }
              xa(n);
              break;
            default:
              throw Error(d(329));
          }
        if (ur(n), n.callbackNode === r)
          return sv.bind(null, n);
      }
    }
    return null;
  }
  function ld(n) {
    var r = n.lastExpiredTime;
    if (r = r !== 0 ? r : 1073741823, (Ve & (Cr | si)) !== hn)
      throw Error(d(327));
    if (pl(), n === or && r === Dt || Ro(n, r), Qe !== null) {
      var o = Ve;
      Ve |= Cr;
      var s = pv();
      do
        try {
          vv();
          break;
        } catch (v) {
          dv(n, v);
        }
      while (!0);
      if (Hf(), Ve = o, Zs.current = s, Zt === mn)
        throw o = To, Ro(n, r), wo(n, r), ur(n), o;
      if (Qe !== null)
        throw Error(d(261));
      n.finishedWork = n.current.alternate, n.finishedExpirationTime = r, or = null, xa(n), ur(n);
    }
    return null;
  }
  function Pm() {
    if (Ur !== null) {
      var n = Ur;
      Ur = null, n.forEach(function(r, o) {
        wa(o, r), ur(o);
      }), ir();
    }
  }
  function cv(n, r) {
    var o = Ve;
    Ve |= 1;
    try {
      return n(r);
    } finally {
      Ve = o, Ve === hn && ir();
    }
  }
  function fv(n, r) {
    var o = Ve;
    Ve &= -2, Ve |= id;
    try {
      return n(r);
    } finally {
      Ve = o, Ve === hn && ir();
    }
  }
  function Ro(n, r) {
    n.finishedWork = null, n.finishedExpirationTime = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, _p(o)), Qe !== null)
      for (o = Qe.return; o !== null; ) {
        var s = o;
        switch (s.tag) {
          case 1:
            s = s.type.childContextTypes, s != null && ca();
            break;
          case 3:
            ol(), ft(cn), ft(vn);
            break;
          case 5:
            Bf(s);
            break;
          case 4:
            ol();
            break;
          case 13:
            ft(jt);
            break;
          case 19:
            ft(jt);
            break;
          case 10:
            jf(s);
        }
        o = o.return;
      }
    or = n, Qe = zr(n.current, null), Dt = r, Zt = Sa, To = null, sl = lr = 1073741823, ci = null, Lr = 0, bo = !1;
  }
  function dv(n, r) {
    do {
      try {
        if (Hf(), Ls.current = $s, ma)
          for (var o = At.memoizedState; o !== null; ) {
            var s = o.queue;
            s !== null && (s.pending = null), o = o.next;
          }
        if (Dn = 0, Yt = Wt = At = null, ma = !1, Qe === null || Qe.return === null)
          return Zt = mn, To = r, Qe = null;
        e: {
          var v = n, S = Qe.return, E = Qe, x = r;
          if (r = Dt, E.effectTag |= 2048, E.firstEffect = E.lastEffect = null, x !== null && typeof x == "object" && typeof x.then == "function") {
            var z = x;
            if (!(E.mode & 2)) {
              var U = E.alternate;
              U ? (E.updateQueue = U.updateQueue, E.memoizedState = U.memoizedState, E.expirationTime = U.expirationTime) : (E.updateQueue = null, E.memoizedState = null);
            }
            var ye = (jt.current & 1) !== 0, Ce = S;
            do {
              var Je;
              if (Je = Ce.tag === 13) {
                var vt = Ce.memoizedState;
                if (vt !== null)
                  Je = vt.dehydrated !== null;
                else {
                  var sr = Ce.memoizedProps;
                  Je = sr.fallback === void 0 ? !1 : sr.unstable_avoidThisFallback !== !0 ? !0 : !ye;
                }
              }
              if (Je) {
                var wn = Ce.updateQueue;
                if (wn === null) {
                  var M = /* @__PURE__ */ new Set();
                  M.add(z), Ce.updateQueue = M;
                } else
                  wn.add(z);
                if (!(Ce.mode & 2)) {
                  if (Ce.effectTag |= 64, E.effectTag &= -2981, E.tag === 1)
                    if (E.alternate === null)
                      E.tag = 17;
                    else {
                      var O = pa(1073741823, null);
                      O.tag = 2, va(E, O);
                    }
                  E.expirationTime = 1073741823;
                  break e;
                }
                x = void 0, E = r;
                var I = v.pingCache;
                if (I === null ? (I = v.pingCache = new av(), x = /* @__PURE__ */ new Set(), I.set(z, x)) : (x = I.get(z), x === void 0 && (x = /* @__PURE__ */ new Set(), I.set(z, x))), !x.has(E)) {
                  x.add(E);
                  var te = Sv.bind(null, v, z, E);
                  z.then(te, te);
                }
                Ce.effectTag |= 4096, Ce.expirationTime = r;
                break e;
              }
              Ce = Ce.return;
            } while (Ce !== null);
            x = Error(($n(E.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.` + qi(E));
          }
          Zt !== ad && (Zt = uv), x = Jf(x, E), Ce = S;
          do {
            switch (Ce.tag) {
              case 3:
                z = x, Ce.effectTag |= 4096, Ce.expirationTime = r;
                var fe = Eo(Ce, z, r);
                If(Ce, fe);
                break e;
              case 1:
                z = x;
                var we = Ce.type, Pe = Ce.stateNode;
                if (!(Ce.effectTag & 64) && (typeof we.getDerivedStateFromError == "function" || Pe !== null && typeof Pe.componentDidCatch == "function" && (xr === null || !xr.has(Pe)))) {
                  Ce.effectTag |= 4096, Ce.expirationTime = r;
                  var ut = ov(Ce, z, r);
                  If(Ce, ut);
                  break e;
                }
            }
            Ce = Ce.return;
          } while (Ce !== null);
        }
        Qe = mv(Qe);
      } catch (Qt) {
        r = Qt;
        continue;
      }
      break;
    } while (!0);
  }
  function pv() {
    var n = Zs.current;
    return Zs.current = $s, n === null ? $s : n;
  }
  function ud(n, r) {
    n < lr && 2 < n && (lr = n), r !== null && n < sl && 2 < n && (sl = n, ci = r);
  }
  function mu(n) {
    n > Lr && (Lr = n);
  }
  function vv() {
    for (; Qe !== null; )
      Qe = sd(Qe);
  }
  function hv() {
    for (; Qe !== null && !xm(); )
      Qe = sd(Qe);
  }
  function sd(n) {
    var r = Ev(n.alternate, n, Dt);
    return n.memoizedProps = n.pendingProps, r === null && (r = mv(n)), lv.current = null, r;
  }
  function mv(n) {
    Qe = n;
    do {
      var r = Qe.alternate;
      if (n = Qe.return, Qe.effectTag & 2048) {
        if (r = km(Qe), r !== null)
          return r.effectTag &= 2047, r;
        n !== null && (n.firstEffect = n.lastEffect = null, n.effectTag |= 2048);
      } else {
        if (r = Jp(r, Qe, Dt), Dt === 1 || Qe.childExpirationTime !== 1) {
          for (var o = 0, s = Qe.child; s !== null; ) {
            var v = s.expirationTime, S = s.childExpirationTime;
            v > o && (o = v), S > o && (o = S), s = s.sibling;
          }
          Qe.childExpirationTime = o;
        }
        if (r !== null)
          return r;
        n !== null && !(n.effectTag & 2048) && (n.firstEffect === null && (n.firstEffect = Qe.firstEffect), Qe.lastEffect !== null && (n.lastEffect !== null && (n.lastEffect.nextEffect = Qe.firstEffect), n.lastEffect = Qe.lastEffect), 1 < Qe.effectTag && (n.lastEffect !== null ? n.lastEffect.nextEffect = Qe : n.firstEffect = Qe, n.lastEffect = Qe));
      }
      if (r = Qe.sibling, r !== null)
        return r;
      Qe = n;
    } while (Qe !== null);
    return Zt === Sa && (Zt = ad), null;
  }
  function yu(n) {
    var r = n.expirationTime;
    return n = n.childExpirationTime, r > n ? r : n;
  }
  function xa(n) {
    var r = Ar();
    return dt(99, Lm.bind(null, n, r)), null;
  }
  function Lm(n, r) {
    do
      pl();
    while (Ta !== null);
    if ((Ve & (Cr | si)) !== hn)
      throw Error(d(327));
    var o = n.finishedWork, s = n.finishedExpirationTime;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedExpirationTime = 0, o === n.current)
      throw Error(d(177));
    n.callbackNode = null, n.callbackExpirationTime = 0, n.callbackPriority = 90, n.nextKnownPendingLevel = 0;
    var v = yu(o);
    if (n.firstPendingTime = v, s <= n.lastSuspendedTime ? n.firstSuspendedTime = n.lastSuspendedTime = n.nextKnownPendingLevel = 0 : s <= n.firstSuspendedTime && (n.firstSuspendedTime = s - 1), s <= n.lastPingedTime && (n.lastPingedTime = 0), s <= n.lastExpiredTime && (n.lastExpiredTime = 0), n === or && (Qe = or = null, Dt = 0), 1 < o.effectTag ? o.lastEffect !== null ? (o.lastEffect.nextEffect = o, v = o.firstEffect) : v = o : v = o.firstEffect, v !== null) {
      var S = Ve;
      Ve |= si, lv.current = null, us = na;
      var E = of();
      if (as(E)) {
        if ("selectionStart" in E)
          var x = { start: E.selectionStart, end: E.selectionEnd };
        else
          e: {
            x = (x = E.ownerDocument) && x.defaultView || window;
            var z = x.getSelection && x.getSelection();
            if (z && z.rangeCount !== 0) {
              x = z.anchorNode;
              var U = z.anchorOffset, ye = z.focusNode;
              z = z.focusOffset;
              try {
                x.nodeType, ye.nodeType;
              } catch {
                x = null;
                break e;
              }
              var Ce = 0, Je = -1, vt = -1, sr = 0, wn = 0, M = E, O = null;
              t:
                for (; ; ) {
                  for (var I; M !== x || U !== 0 && M.nodeType !== 3 || (Je = Ce + U), M !== ye || z !== 0 && M.nodeType !== 3 || (vt = Ce + z), M.nodeType === 3 && (Ce += M.nodeValue.length), (I = M.firstChild) !== null; )
                    O = M, M = I;
                  for (; ; ) {
                    if (M === E)
                      break t;
                    if (O === x && ++sr === U && (Je = Ce), O === ye && ++wn === z && (vt = Ce), (I = M.nextSibling) !== null)
                      break;
                    M = O, O = M.parentNode;
                  }
                  M = I;
                }
              x = Je === -1 || vt === -1 ? null : { start: Je, end: vt };
            } else
              x = null;
          }
        x = x || { start: 0, end: 0 };
      } else
        x = null;
      uf = { activeElementDetached: null, focusedElem: E, selectionRange: x }, na = !1, ke = v;
      do
        try {
          yv();
        } catch (Xe) {
          if (ke === null)
            throw Error(d(330));
          Ra(ke, Xe), ke = ke.nextEffect;
        }
      while (ke !== null);
      ke = v;
      do
        try {
          for (E = n, x = r; ke !== null; ) {
            var te = ke.effectTag;
            if (te & 16 && tr(ke.stateNode, ""), te & 128) {
              var fe = ke.alternate;
              if (fe !== null) {
                var we = fe.ref;
                we !== null && (typeof we == "function" ? we(null) : we.current = null);
              }
            }
            switch (te & 1038) {
              case 2:
                iv(ke), ke.effectTag &= -3;
                break;
              case 6:
                iv(ke), ke.effectTag &= -3, Pi(ke.alternate, ke);
                break;
              case 1024:
                ke.effectTag &= -1025;
                break;
              case 1028:
                ke.effectTag &= -1025, Pi(ke.alternate, ke);
                break;
              case 4:
                Pi(ke.alternate, ke);
                break;
              case 8:
                U = ke, Ks(E, U, x), nv(U);
            }
            ke = ke.nextEffect;
          }
        } catch (Xe) {
          if (ke === null)
            throw Error(d(330));
          Ra(ke, Xe), ke = ke.nextEffect;
        }
      while (ke !== null);
      if (we = uf, fe = of(), te = we.focusedElem, x = we.selectionRange, fe !== te && te && te.ownerDocument && af(te.ownerDocument.documentElement, te)) {
        for (x !== null && as(te) && (fe = x.start, we = x.end, we === void 0 && (we = fe), "selectionStart" in te ? (te.selectionStart = fe, te.selectionEnd = Math.min(we, te.value.length)) : (we = (fe = te.ownerDocument || document) && fe.defaultView || window, we.getSelection && (we = we.getSelection(), U = te.textContent.length, E = Math.min(x.start, U), x = x.end === void 0 ? E : Math.min(x.end, U), !we.extend && E > x && (U = x, x = E, E = U), U = rf(te, E), ye = rf(te, x), U && ye && (we.rangeCount !== 1 || we.anchorNode !== U.node || we.anchorOffset !== U.offset || we.focusNode !== ye.node || we.focusOffset !== ye.offset) && (fe = fe.createRange(), fe.setStart(U.node, U.offset), we.removeAllRanges(), E > x ? (we.addRange(fe), we.extend(ye.node, ye.offset)) : (fe.setEnd(ye.node, ye.offset), we.addRange(fe)))))), fe = [], we = te; we = we.parentNode; )
          we.nodeType === 1 && fe.push({
            element: we,
            left: we.scrollLeft,
            top: we.scrollTop
          });
        for (typeof te.focus == "function" && te.focus(), te = 0; te < fe.length; te++)
          we = fe[te], we.element.scrollLeft = we.left, we.element.scrollTop = we.top;
      }
      na = !!us, uf = us = null, n.current = o, ke = v;
      do
        try {
          for (te = n; ke !== null; ) {
            var Pe = ke.effectTag;
            if (Pe & 36 && Am(te, ke.alternate, ke), Pe & 128) {
              fe = void 0;
              var ut = ke.ref;
              if (ut !== null) {
                var Qt = ke.stateNode;
                switch (ke.tag) {
                  case 5:
                    fe = Qt;
                    break;
                  default:
                    fe = Qt;
                }
                typeof ut == "function" ? ut(fe) : ut.current = fe;
              }
            }
            ke = ke.nextEffect;
          }
        } catch (Xe) {
          if (ke === null)
            throw Error(d(330));
          Ra(ke, Xe), ke = ke.nextEffect;
        }
      while (ke !== null);
      ke = null, Lp(), Ve = S;
    } else
      n.current = o;
    if (hu)
      hu = !1, Ta = n, fl = r;
    else
      for (ke = v; ke !== null; )
        r = ke.nextEffect, ke.nextEffect = null, ke = r;
    if (r = n.firstPendingTime, r === 0 && (xr = null), r === 1073741823 ? n === od ? dl++ : (dl = 0, od = n) : dl = 0, typeof rc == "function" && rc(o.stateNode, s), ur(n), Co)
      throw Co = !1, n = cl, cl = null, n;
    return (Ve & id) !== hn || ir(), null;
  }
  function yv() {
    for (; ke !== null; ) {
      var n = ke.effectTag;
      n & 256 && Mm(ke.alternate, ke), !(n & 512) || hu || (hu = !0, zp(97, function() {
        return pl(), null;
      })), ke = ke.nextEffect;
    }
  }
  function pl() {
    if (fl !== 90) {
      var n = 97 < fl ? 97 : fl;
      return fl = 90, dt(n, Um);
    }
  }
  function Um() {
    if (Ta === null)
      return !1;
    var n = Ta;
    if (Ta = null, (Ve & (Cr | si)) !== hn)
      throw Error(d(331));
    var r = Ve;
    for (Ve |= si, n = n.current.firstEffect; n !== null; ) {
      try {
        var o = n;
        if (o.effectTag & 512)
          switch (o.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              tv(5, o), td(5, o);
          }
      } catch (s) {
        if (n === null)
          throw Error(d(330));
        Ra(n, s);
      }
      o = n.nextEffect, n.nextEffect = null, n = o;
    }
    return Ve = r, ir(), !0;
  }
  function gv(n, r, o) {
    r = Jf(o, r), r = Eo(n, r, 1073741823), va(n, r), n = xo(n, 1073741823), n !== null && ur(n);
  }
  function Ra(n, r) {
    if (n.tag === 3)
      gv(n, n, r);
    else
      for (var o = n.return; o !== null; ) {
        if (o.tag === 3) {
          gv(o, n, r);
          break;
        } else if (o.tag === 1) {
          var s = o.stateNode;
          if (typeof o.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (xr === null || !xr.has(s))) {
            n = Jf(r, n), n = ov(o, n, 1073741823), va(o, n), o = xo(o, 1073741823), o !== null && ur(o);
            break;
          }
        }
        o = o.return;
      }
  }
  function Sv(n, r, o) {
    var s = n.pingCache;
    s !== null && s.delete(r), or === n && Dt === o ? Zt === Js || Zt === vu && lr === 1073741823 && bt() - Ea < ec ? Ro(n, Dt) : bo = !0 : bv(n, o) && (r = n.lastPingedTime, r !== 0 && r < o || (n.lastPingedTime = o, ur(n)));
  }
  function zm(n, r) {
    var o = n.stateNode;
    o !== null && o.delete(r), r = 0, r === 0 && (r = yn(), r = ba(r, n, null)), n = xo(n, r), n !== null && ur(n);
  }
  var Ev;
  Ev = function(n, r, o) {
    var s = r.expirationTime;
    if (n !== null) {
      var v = r.pendingProps;
      if (n.memoizedProps !== v || cn.current)
        Pr = !0;
      else {
        if (s < o) {
          switch (Pr = !1, r.tag) {
            case 3:
              Qs(r), Pt();
              break;
            case 5:
              if ($f(r), r.mode & 4 && o !== 1 && v.hidden)
                return r.expirationTime = r.childExpirationTime = 1, null;
              break;
            case 1:
              On(r.type) && Zo(r);
              break;
            case 4:
              As(r, r.stateNode.containerInfo);
              break;
            case 10:
              s = r.memoizedProps.value, v = r.type._context, Bt(fa, v._currentValue), v._currentValue = s;
              break;
            case 13:
              if (r.memoizedState !== null)
                return s = r.child.childExpirationTime, s !== 0 && s >= o ? Xp(n, r, o) : (Bt(jt, jt.current & 1), r = Ni(n, r, o), r !== null ? r.sibling : null);
              Bt(jt, jt.current & 1);
              break;
            case 19:
              if (s = r.childExpirationTime >= o, n.effectTag & 64) {
                if (s)
                  return Kp(n, r, o);
                r.effectTag |= 64;
              }
              if (v = r.memoizedState, v !== null && (v.rendering = null, v.tail = null), Bt(jt, jt.current), !s)
                return null;
          }
          return Ni(n, r, o);
        }
        Pr = !1;
      }
    } else
      Pr = !1;
    switch (r.expirationTime = 0, r.tag) {
      case 2:
        if (s = r.type, n !== null && (n.alternate = null, r.alternate = null, r.effectTag |= 2), n = r.pendingProps, v = sa(r, vn.current), Qn(r, o), v = Wf(
          null,
          r,
          s,
          n,
          v,
          o
        ), r.effectTag |= 1, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
          if (r.tag = 1, r.memoizedState = null, r.updateQueue = null, On(s)) {
            var S = !0;
            Zo(r);
          } else
            S = !1;
          r.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, Os(r);
          var E = s.getDerivedStateFromProps;
          typeof E == "function" && rl(r, s, E, n), v.updater = ha, r.stateNode = v, v._reactInternalFiber = r, ru(r, s, n, o), r = Kf(null, r, s, !0, S, o);
        } else
          r.tag = 0, ar(null, r, v, o), r = r.child;
        return r;
      case 16:
        e: {
          if (v = r.elementType, n !== null && (n.alternate = null, r.alternate = null, r.effectTag |= 2), n = r.pendingProps, Kr(v), v._status !== 1)
            throw v._result;
          switch (v = v._result, r.type = v, S = r.tag = Su(v), n = Yn(v, n), S) {
            case 0:
              r = go(null, r, v, n, o);
              break e;
            case 1:
              r = Gp(null, r, v, n, o);
              break e;
            case 11:
              r = Yp(null, r, v, n, o);
              break e;
            case 14:
              r = cu(null, r, v, Yn(v.type, n), s, o);
              break e;
          }
          throw Error(d(306, v, ""));
        }
        return r;
      case 0:
        return s = r.type, v = r.pendingProps, v = r.elementType === s ? v : Yn(s, v), go(n, r, s, v, o);
      case 1:
        return s = r.type, v = r.pendingProps, v = r.elementType === s ? v : Yn(s, v), Gp(n, r, s, v, o);
      case 3:
        if (Qs(r), s = r.updateQueue, n === null || s === null)
          throw Error(d(282));
        if (s = r.pendingProps, v = r.memoizedState, v = v !== null ? v.element : null, Ds(n, r), nl(r, s, null, o), s = r.memoizedState.element, s === v)
          Pt(), r = Ni(n, r, o);
        else {
          if ((v = r.stateNode.hydrate) && (ga = Yo(r.stateNode.containerInfo.firstChild), Nr = r, v = yo = !0), v)
            for (o = Vf(r, null, s, o), r.child = o; o; )
              o.effectTag = o.effectTag & -3 | 1024, o = o.sibling;
          else
            ar(n, r, s, o), Pt();
          r = r.child;
        }
        return r;
      case 5:
        return $f(r), n === null && su(r), s = r.type, v = r.pendingProps, S = n !== null ? n.memoizedProps : null, E = v.children, Hl(s, v) ? E = null : S !== null && Hl(s, S) && (r.effectTag |= 16), Qp(n, r), r.mode & 4 && o !== 1 && v.hidden ? (r.expirationTime = r.childExpirationTime = 1, r = null) : (ar(n, r, E, o), r = r.child), r;
      case 6:
        return n === null && su(r), null;
      case 13:
        return Xp(n, r, o);
      case 4:
        return As(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = il(r, null, s, o) : ar(n, r, s, o), r.child;
      case 11:
        return s = r.type, v = r.pendingProps, v = r.elementType === s ? v : Yn(s, v), Yp(n, r, s, v, o);
      case 7:
        return ar(n, r, r.pendingProps, o), r.child;
      case 8:
        return ar(
          n,
          r,
          r.pendingProps.children,
          o
        ), r.child;
      case 12:
        return ar(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          s = r.type._context, v = r.pendingProps, E = r.memoizedProps, S = v.value;
          var x = r.type._context;
          if (Bt(fa, x._currentValue), x._currentValue = S, E !== null)
            if (x = E.value, S = nr(x, S) ? 0 : (typeof s._calculateChangedBits == "function" ? s._calculateChangedBits(x, S) : 1073741823) | 0, S === 0) {
              if (E.children === v.children && !cn.current) {
                r = Ni(n, r, o);
                break e;
              }
            } else
              for (x = r.child, x !== null && (x.return = r); x !== null; ) {
                var z = x.dependencies;
                if (z !== null) {
                  E = x.child;
                  for (var U = z.firstContext; U !== null; ) {
                    if (U.context === s && U.observedBits & S) {
                      x.tag === 1 && (U = pa(o, null), U.tag = 2, va(x, U)), x.expirationTime < o && (x.expirationTime = o), U = x.alternate, U !== null && U.expirationTime < o && (U.expirationTime = o), tl(x.return, o), z.expirationTime < o && (z.expirationTime = o);
                      break;
                    }
                    U = U.next;
                  }
                } else
                  E = x.tag === 10 && x.type === r.type ? null : x.child;
                if (E !== null)
                  E.return = x;
                else
                  for (E = x; E !== null; ) {
                    if (E === r) {
                      E = null;
                      break;
                    }
                    if (x = E.sibling, x !== null) {
                      x.return = E.return, E = x;
                      break;
                    }
                    E = E.return;
                  }
                x = E;
              }
          ar(n, r, v.children, o), r = r.child;
        }
        return r;
      case 9:
        return v = r.type, S = r.pendingProps, s = S.children, Qn(r, o), v = br(v, S.unstable_observedBits), s = s(v), r.effectTag |= 1, ar(n, r, s, o), r.child;
      case 14:
        return v = r.type, S = Yn(v, r.pendingProps), S = Yn(v.type, S), cu(n, r, v, S, s, o);
      case 15:
        return Ys(n, r, r.type, r.pendingProps, s, o);
      case 17:
        return s = r.type, v = r.pendingProps, v = r.elementType === s ? v : Yn(s, v), n !== null && (n.alternate = null, r.alternate = null, r.effectTag |= 2), r.tag = 1, On(s) ? (n = !0, Zo(r)) : n = !1, Qn(r, o), jp(r, s, v), ru(r, s, v, o), Kf(
          null,
          r,
          s,
          !0,
          n,
          o
        );
      case 19:
        return Kp(n, r, o);
    }
    throw Error(d(156, r.tag));
  };
  var rc = null, gu = null;
  function Hm(n) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
      return !1;
    var r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (r.isDisabled || !r.supportsFiber)
      return !0;
    try {
      var o = r.inject(n);
      rc = function(s) {
        try {
          r.onCommitFiberRoot(o, s, void 0, (s.current.effectTag & 64) === 64);
        } catch {
        }
      }, gu = function(s) {
        try {
          r.onCommitFiberUnmount(o, s);
        } catch {
        }
      };
    } catch {
    }
    return !0;
  }
  function jm(n, r, o, s) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null;
  }
  function fi(n, r, o, s) {
    return new jm(n, r, o, s);
  }
  function cd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Su(n) {
    if (typeof n == "function")
      return cd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Fa)
        return 11;
      if (n === Ei)
        return 14;
    }
    return 2;
  }
  function zr(n, r) {
    var o = n.alternate;
    return o === null ? (o = fi(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.effectTag = 0, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null), o.childExpirationTime = n.childExpirationTime, o.expirationTime = n.expirationTime, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : {
      expirationTime: r.expirationTime,
      firstContext: r.firstContext,
      responders: r.responders
    }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function ic(n, r, o, s, v, S) {
    var E = 2;
    if (s = n, typeof n == "function")
      cd(n) && (E = 1);
    else if (typeof n == "string")
      E = 5;
    else
      e:
        switch (n) {
          case Vt:
            return Li(o.children, v, S, r);
          case An:
            E = 8, v |= 7;
            break;
          case Fn:
            E = 8, v |= 1;
            break;
          case Xr:
            return n = fi(12, o, r, v | 8), n.elementType = Xr, n.type = Xr, n.expirationTime = S, n;
          case qr:
            return n = fi(13, o, r, v), n.type = qr, n.elementType = qr, n.expirationTime = S, n;
          case En:
            return n = fi(19, o, r, v), n.elementType = En, n.expirationTime = S, n;
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case hr:
                  E = 10;
                  break e;
                case Gi:
                  E = 9;
                  break e;
                case Fa:
                  E = 11;
                  break e;
                case Ei:
                  E = 14;
                  break e;
                case Va:
                  E = 16, s = null;
                  break e;
                case $a:
                  E = 22;
                  break e;
              }
            throw Error(d(130, n == null ? n : typeof n, ""));
        }
    return r = fi(E, o, r, v), r.elementType = n, r.type = s, r.expirationTime = S, r;
  }
  function Li(n, r, o, s) {
    return n = fi(7, n, s, r), n.expirationTime = o, n;
  }
  function fd(n, r, o) {
    return n = fi(6, n, null, r), n.expirationTime = o, n;
  }
  function dd(n, r, o) {
    return r = fi(4, n.children !== null ? n.children : [], n.key, r), r.expirationTime = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Tv(n, r, o) {
    this.tag = r, this.current = null, this.containerInfo = n, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = o, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
  }
  function bv(n, r) {
    var o = n.firstSuspendedTime;
    return n = n.lastSuspendedTime, o !== 0 && o >= r && n <= r;
  }
  function wo(n, r) {
    var o = n.firstSuspendedTime, s = n.lastSuspendedTime;
    o < r && (n.firstSuspendedTime = r), (s > r || o === 0) && (n.lastSuspendedTime = r), r <= n.lastPingedTime && (n.lastPingedTime = 0), r <= n.lastExpiredTime && (n.lastExpiredTime = 0);
  }
  function pd(n, r) {
    r > n.firstPendingTime && (n.firstPendingTime = r);
    var o = n.firstSuspendedTime;
    o !== 0 && (r >= o ? n.firstSuspendedTime = n.lastSuspendedTime = n.nextKnownPendingLevel = 0 : r >= n.lastSuspendedTime && (n.lastSuspendedTime = r + 1), r > n.nextKnownPendingLevel && (n.nextKnownPendingLevel = r));
  }
  function wa(n, r) {
    var o = n.lastExpiredTime;
    (o === 0 || o > r) && (n.lastExpiredTime = r);
  }
  function Eu(n, r, o, s) {
    var v = r.current, S = yn(), E = nu.suspense;
    S = ba(S, v, E);
    e:
      if (o) {
        o = o._reactInternalFiber;
        t: {
          if (rn(o) !== o || o.tag !== 1)
            throw Error(d(170));
          var x = o;
          do {
            switch (x.tag) {
              case 3:
                x = x.stateNode.context;
                break t;
              case 1:
                if (On(x.type)) {
                  x = x.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            x = x.return;
          } while (x !== null);
          throw Error(d(171));
        }
        if (o.tag === 1) {
          var z = o.type;
          if (On(z)) {
            o = lo(o, z, x);
            break e;
          }
        }
        o = x;
      } else
        o = oi;
    return r.context === null ? r.context = o : r.pendingContext = o, r = pa(S, E), r.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (r.callback = s), va(v, r), Ca(v, S), S;
  }
  function ac(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function oc(n, r) {
    n = n.memoizedState, n !== null && n.dehydrated !== null && n.retryTime < r && (n.retryTime = r);
  }
  function Tu(n, r) {
    oc(n, r), (n = n.alternate) && oc(n, r);
  }
  function vd(n, r, o) {
    o = o != null && o.hydrate === !0;
    var s = new Tv(n, r, o), v = fi(3, null, null, r === 2 ? 7 : r === 1 ? 3 : 0);
    s.current = v, v.stateNode = s, Os(v), n[Go] = s.current, o && r !== 0 && es(n, n.nodeType === 9 ? n : n.ownerDocument), this._internalRoot = s;
  }
  vd.prototype.render = function(n) {
    Eu(n, this._internalRoot, null, null);
  }, vd.prototype.unmount = function() {
    var n = this._internalRoot, r = n.containerInfo;
    Eu(null, n, null, function() {
      r[Go] = null;
    });
  };
  function _o(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function hd(n, r) {
    if (r || (r = n ? n.nodeType === 9 ? n.documentElement : n.firstChild : null, r = !(!r || r.nodeType !== 1 || !r.hasAttribute("data-reactroot"))), !r)
      for (var o; o = n.lastChild; )
        n.removeChild(o);
    return new vd(n, 0, r ? { hydrate: !0 } : void 0);
  }
  function bu(n, r, o, s, v) {
    var S = o._reactRootContainer;
    if (S) {
      var E = S._internalRoot;
      if (typeof v == "function") {
        var x = v;
        v = function() {
          var U = ac(E);
          x.call(U);
        };
      }
      Eu(r, E, n, v);
    } else {
      if (S = o._reactRootContainer = hd(o, s), E = S._internalRoot, typeof v == "function") {
        var z = v;
        v = function() {
          var U = ac(E);
          z.call(U);
        };
      }
      fv(function() {
        Eu(r, E, n, v);
      });
    }
    return ac(E);
  }
  function Im(n, r, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: kt, key: s == null ? null : "" + s, children: n, containerInfo: r, implementation: o };
  }
  Zu = function(n) {
    if (n.tag === 13) {
      var r = Ot(yn(), 150, 100);
      Ca(n, r), Tu(n, r);
    }
  }, Kc = function(n) {
    n.tag === 13 && (Ca(n, 3), Tu(n, 3));
  }, Pn = function(n) {
    if (n.tag === 13) {
      var r = yn();
      r = ba(r, n, null), Ca(n, r), Tu(n, r);
    }
  }, Ue = function(n, r, o) {
    switch (r) {
      case "input":
        if (St(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var s = o[r];
            if (s !== n && s.form === n.form) {
              var v = Il(s);
              if (!v)
                throw Error(d(90));
              Jn(s), St(s, v);
            }
          }
        }
        break;
      case "textarea":
        Ba(n, o);
        break;
      case "select":
        r = o.value, r != null && Ht(n, !!o.multiple, r, !1);
    }
  }, We = cv, be = function(n, r, o, s, v) {
    var S = Ve;
    Ve |= 4;
    try {
      return dt(98, n.bind(null, r, o, s, v));
    } finally {
      Ve = S, Ve === hn && ir();
    }
  }, De = function() {
    (Ve & (1 | Cr | si)) === hn && (Pm(), pl());
  }, de = function(n, r) {
    var o = Ve;
    Ve |= 2;
    try {
      return n(r);
    } finally {
      Ve = o, Ve === hn && ir();
    }
  };
  function Cv(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_o(r))
      throw Error(d(200));
    return Im(n, r, null, o);
  }
  var rS = { Events: [jl, gr, Il, ae, $, Ja, function(n) {
    sn(n, ff);
  }, xe, Z, Ln, Fo, pl, { current: !1 }] };
  return function(n) {
    var r = n.findFiberByHostInstance;
    return Hm(c({}, n, { overrideHookState: null, overrideProps: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ct.ReactCurrentDispatcher, findHostInstanceByFiber: function(o) {
      return o = Ku(o), o === null ? null : o.stateNode;
    }, findFiberByHostInstance: function(o) {
      return r ? r(o) : null;
    }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null }));
  }({
    findFiberByHostInstance: Xo,
    bundleType: 0,
    version: "16.14.0",
    rendererPackageName: "react-dom"
  }), Wr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rS, Wr.createPortal = Cv, Wr.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternalFiber;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(d(188)) : Error(d(268, Object.keys(n)));
    return n = Ku(r), n = n === null ? null : n.stateNode, n;
  }, Wr.flushSync = function(n, r) {
    if ((Ve & (Cr | si)) !== hn)
      throw Error(d(187));
    var o = Ve;
    Ve |= 1;
    try {
      return dt(99, n.bind(null, r));
    } finally {
      Ve = o, ir();
    }
  }, Wr.hydrate = function(n, r, o) {
    if (!_o(r))
      throw Error(d(200));
    return bu(null, n, r, !0, o);
  }, Wr.render = function(n, r, o) {
    if (!_o(r))
      throw Error(d(200));
    return bu(null, n, r, !1, o);
  }, Wr.unmountComponentAtNode = function(n) {
    if (!_o(n))
      throw Error(d(40));
    return n._reactRootContainer ? (fv(function() {
      bu(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Go] = null;
      });
    }), !0) : !1;
  }, Wr.unstable_batchedUpdates = cv, Wr.unstable_createPortal = function(n, r) {
    return Cv(n, r, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
  }, Wr.unstable_renderSubtreeIntoContainer = function(n, r, o, s) {
    if (!_o(o))
      throw Error(d(200));
    if (n == null || n._reactInternalFiber === void 0)
      throw Error(d(38));
    return bu(n, r, o, !1, s);
  }, Wr.version = "16.14.0", Wr;
}
var Yr = {}, p0, Ub;
function Yk() {
  if (Ub)
    return p0;
  Ub = 1;
  var u = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return p0 = u, p0;
}
var v0, zb;
function Qk() {
  return zb || (zb = 1, v0 = Function.call.bind(Object.prototype.hasOwnProperty)), v0;
}
var h0, Hb;
function Gk() {
  if (Hb)
    return h0;
  Hb = 1;
  var u = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var c = Yk(), p = {}, d = Qk();
    u = function(b) {
      var C = "Warning: " + b;
      typeof console < "u" && console.error(C);
      try {
        throw new Error(C);
      } catch {
      }
    };
  }
  function m(b, C, g, k, R) {
    if (process.env.NODE_ENV !== "production") {
      for (var D in b)
        if (d(b, D)) {
          var N;
          try {
            if (typeof b[D] != "function") {
              var P = Error(
                (k || "React class") + ": " + g + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            N = b[D](C, D, k, g, null, c);
          } catch (re) {
            N = re;
          }
          if (N && !(N instanceof Error) && u(
            (k || "React class") + ": type specification of " + g + " `" + D + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof N + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), N instanceof Error && !(N.message in p)) {
            p[N.message] = !0;
            var Y = R ? R() : "";
            u(
              "Failed " + g + " type: " + N.message + (Y ?? "")
            );
          }
        }
    }
  }
  return m.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (p = {});
  }, h0 = m, h0;
}
var Bh = { exports: {} }, $i = {};
/** @license React v0.19.1
 * scheduler-tracing.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jb;
function Xk() {
  if (jb)
    return $i;
  jb = 1;
  var u = 0;
  return $i.__interactionsRef = null, $i.__subscriberRef = null, $i.unstable_clear = function(c) {
    return c();
  }, $i.unstable_getCurrent = function() {
    return null;
  }, $i.unstable_getThreadID = function() {
    return ++u;
  }, $i.unstable_subscribe = function() {
  }, $i.unstable_trace = function(c, p, d) {
    return d();
  }, $i.unstable_unsubscribe = function() {
  }, $i.unstable_wrap = function(c) {
    return c;
  }, $i;
}
var m0 = {};
/** @license React v0.19.1
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ib;
function qk() {
  return Ib || (Ib = 1, function(u) {
    process.env.NODE_ENV !== "production" && function() {
      var c = 0, p = 0, d = 0;
      u.__interactionsRef = null, u.__subscriberRef = null, u.__interactionsRef = {
        current: /* @__PURE__ */ new Set()
      }, u.__subscriberRef = {
        current: null
      };
      function m(Q) {
        var ne = u.__interactionsRef.current;
        u.__interactionsRef.current = /* @__PURE__ */ new Set();
        try {
          return Q();
        } finally {
          u.__interactionsRef.current = ne;
        }
      }
      function b() {
        return u.__interactionsRef.current;
      }
      function C() {
        return ++d;
      }
      function g(Q, ne, X) {
        var $ = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : c, K = {
          __count: 1,
          id: p++,
          name: Q,
          timestamp: ne
        }, ee = u.__interactionsRef.current, ae = new Set(ee);
        ae.add(K), u.__interactionsRef.current = ae;
        var Oe = u.__subscriberRef.current, Ue;
        try {
          Oe !== null && Oe.onInteractionTraced(K);
        } finally {
          try {
            Oe !== null && Oe.onWorkStarted(ae, $);
          } finally {
            try {
              Ue = X();
            } finally {
              u.__interactionsRef.current = ee;
              try {
                Oe !== null && Oe.onWorkStopped(ae, $);
              } finally {
                K.__count--, Oe !== null && K.__count === 0 && Oe.onInteractionScheduledWorkCompleted(K);
              }
            }
          }
        }
        return Ue;
      }
      function k(Q) {
        var ne = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c, X = u.__interactionsRef.current, $ = u.__subscriberRef.current;
        $ !== null && $.onWorkScheduled(X, ne), X.forEach(function(ae) {
          ae.__count++;
        });
        var K = !1;
        function ee() {
          var ae = u.__interactionsRef.current;
          u.__interactionsRef.current = X, $ = u.__subscriberRef.current;
          try {
            var Oe;
            try {
              $ !== null && $.onWorkStarted(X, ne);
            } finally {
              try {
                Oe = Q.apply(void 0, arguments);
              } finally {
                u.__interactionsRef.current = ae, $ !== null && $.onWorkStopped(X, ne);
              }
            }
            return Oe;
          } finally {
            K || (K = !0, X.forEach(function(Ue) {
              Ue.__count--, $ !== null && Ue.__count === 0 && $.onInteractionScheduledWorkCompleted(Ue);
            }));
          }
        }
        return ee.cancel = function() {
          $ = u.__subscriberRef.current;
          try {
            $ !== null && $.onWorkCanceled(X, ne);
          } finally {
            X.forEach(function(Oe) {
              Oe.__count--, $ && Oe.__count === 0 && $.onInteractionScheduledWorkCompleted(Oe);
            });
          }
        }, ee;
      }
      var R = null;
      R = /* @__PURE__ */ new Set();
      function D(Q) {
        R.add(Q), R.size === 1 && (u.__subscriberRef.current = {
          onInteractionScheduledWorkCompleted: Y,
          onInteractionTraced: P,
          onWorkCanceled: ue,
          onWorkScheduled: re,
          onWorkStarted: G,
          onWorkStopped: j
        });
      }
      function N(Q) {
        R.delete(Q), R.size === 0 && (u.__subscriberRef.current = null);
      }
      function P(Q) {
        var ne = !1, X = null;
        if (R.forEach(function($) {
          try {
            $.onInteractionTraced(Q);
          } catch (K) {
            ne || (ne = !0, X = K);
          }
        }), ne)
          throw X;
      }
      function Y(Q) {
        var ne = !1, X = null;
        if (R.forEach(function($) {
          try {
            $.onInteractionScheduledWorkCompleted(Q);
          } catch (K) {
            ne || (ne = !0, X = K);
          }
        }), ne)
          throw X;
      }
      function re(Q, ne) {
        var X = !1, $ = null;
        if (R.forEach(function(K) {
          try {
            K.onWorkScheduled(Q, ne);
          } catch (ee) {
            X || (X = !0, $ = ee);
          }
        }), X)
          throw $;
      }
      function G(Q, ne) {
        var X = !1, $ = null;
        if (R.forEach(function(K) {
          try {
            K.onWorkStarted(Q, ne);
          } catch (ee) {
            X || (X = !0, $ = ee);
          }
        }), X)
          throw $;
      }
      function j(Q, ne) {
        var X = !1, $ = null;
        if (R.forEach(function(K) {
          try {
            K.onWorkStopped(Q, ne);
          } catch (ee) {
            X || (X = !0, $ = ee);
          }
        }), X)
          throw $;
      }
      function ue(Q, ne) {
        var X = !1, $ = null;
        if (R.forEach(function(K) {
          try {
            K.onWorkCanceled(Q, ne);
          } catch (ee) {
            X || (X = !0, $ = ee);
          }
        }), X)
          throw $;
      }
      u.unstable_clear = m, u.unstable_getCurrent = b, u.unstable_getThreadID = C, u.unstable_subscribe = D, u.unstable_trace = g, u.unstable_unsubscribe = N, u.unstable_wrap = k;
    }();
  }(m0)), m0;
}
var Fb;
function Kk() {
  return Fb || (Fb = 1, process.env.NODE_ENV === "production" ? Bh.exports = Xk() : Bh.exports = qk()), Bh.exports;
}
/** @license React v16.14.0
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vb;
function Zk() {
  return Vb || (Vb = 1, process.env.NODE_ENV !== "production" && function() {
    var u = gi, c = mC(), p = yC(), d = Gk(), m = Kk(), b = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    b.hasOwnProperty("ReactCurrentDispatcher") || (b.ReactCurrentDispatcher = {
      current: null
    }), b.hasOwnProperty("ReactCurrentBatchConfig") || (b.ReactCurrentBatchConfig = {
      suspense: null
    });
    function C(e) {
      {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          i[a - 1] = arguments[a];
        k("warn", e, i);
      }
    }
    function g(e) {
      {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          i[a - 1] = arguments[a];
        k("error", e, i);
      }
    }
    function k(e, t, i) {
      {
        var a = i.length > 0 && typeof i[i.length - 1] == "string" && i[i.length - 1].indexOf(`
    in`) === 0;
        if (!a) {
          var l = b.ReactDebugCurrentFrame, f = l.getStackAddendum();
          f !== "" && (t += "%s", i = i.concat([f]));
        }
        var h = i.map(function(w) {
          return "" + w;
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
        try {
          var y = 0, T = "Warning: " + t.replace(/%s/g, function() {
            return i[y++];
          });
          throw new Error(T);
        } catch {
        }
      }
    }
    if (!u)
      throw Error("ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.");
    var R = function(e, t, i, a, l, f, h, y, T) {
      var w = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(i, w);
      } catch (_) {
        this.onError(_);
      }
    };
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var D = document.createElement("react"), N = function(e, t, i, a, l, f, h, y, T) {
        if (!(typeof document < "u"))
          throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var w = document.createEvent("Event"), _ = !0, F = window.event, A = Object.getOwnPropertyDescriptor(window, "event"), V = Array.prototype.slice.call(arguments, 3);
        function se() {
          D.removeEventListener(et, se, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = F), t.apply(i, V), _ = !1;
        }
        var pe, Le = !1, je = !1;
        function Ct(Nt) {
          if (pe = Nt.error, Le = !0, pe === null && Nt.colno === 0 && Nt.lineno === 0 && (je = !0), Nt.defaultPrevented && pe != null && typeof pe == "object")
            try {
              pe._suppressLogging = !0;
            } catch {
            }
        }
        var et = "react-" + (e || "invokeguardedcallback");
        window.addEventListener("error", Ct), D.addEventListener(et, se, !1), w.initEvent(et, !1, !1), D.dispatchEvent(w), A && Object.defineProperty(window, "event", A), _ && (Le ? je && (pe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://fb.me/react-crossorigin-error for more information.")) : pe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(pe)), window.removeEventListener("error", Ct);
      };
      R = N;
    }
    var P = R, Y = !1, re = null, G = !1, j = null, ue = {
      onError: function(e) {
        Y = !0, re = e;
      }
    };
    function Q(e, t, i, a, l, f, h, y, T) {
      Y = !1, re = null, P.apply(ue, arguments);
    }
    function ne(e, t, i, a, l, f, h, y, T) {
      if (Q.apply(this, arguments), Y) {
        var w = K();
        G || (G = !0, j = w);
      }
    }
    function X() {
      if (G) {
        var e = j;
        throw G = !1, j = null, e;
      }
    }
    function $() {
      return Y;
    }
    function K() {
      if (Y) {
        var e = re;
        return Y = !1, re = null, e;
      } else
        throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    var ee = null, ae = null, Oe = null;
    function Ue(e, t, i) {
      ee = e, ae = t, Oe = i, (!Oe || !ae) && g("EventPluginUtils.setComponentTree(...): Injected module is missing getNodeFromInstance or getInstanceFromNode.");
    }
    var Ie;
    Ie = function(e) {
      var t = e._dispatchListeners, i = e._dispatchInstances, a = Array.isArray(t), l = a ? t.length : t ? 1 : 0, f = Array.isArray(i), h = f ? i.length : i ? 1 : 0;
      (f !== a || h !== l) && g("EventPluginUtils: Invalid `event`.");
    };
    function ze(e, t, i) {
      var a = e.type || "unknown-event";
      e.currentTarget = Oe(i), ne(a, t, void 0, e), e.currentTarget = null;
    }
    function $e(e) {
      var t = e._dispatchListeners, i = e._dispatchInstances;
      if (Ie(e), Array.isArray(t))
        for (var a = 0; a < t.length && !e.isPropagationStopped(); a++)
          ze(e, t[a], i[a]);
      else
        t && ze(e, t, i);
      e._dispatchListeners = null, e._dispatchInstances = null;
    }
    var xe = 0, Z = 1, We = 2, be = 3, De = 4, de = 5, Re = 6, st = 7, Ze = 8, Ge = 9, q = 10, oe = 11, Ne = 12, he = 13, Ye = 14, tt = 15, Jt = 16, Be = 17, ot = 18, en = 19, Ee = 20, ct = 21, nt = 22, un = null, _t = {};
    function Lt() {
      if (un)
        for (var e in _t) {
          var t = _t[e], i = un.indexOf(e);
          if (!(i > -1))
            throw Error("EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `" + e + "`.");
          if (!Fn[i]) {
            if (!t.extractEvents)
              throw Error("EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `" + e + "` does not.");
            Fn[i] = t;
            var a = t.eventTypes;
            for (var l in a)
              if (!kt(a[l], t, l))
                throw Error("EventPluginRegistry: Failed to publish event `" + l + "` for plugin `" + e + "`.");
          }
        }
    }
    function kt(e, t, i) {
      if (Xr.hasOwnProperty(i))
        throw Error("EventPluginRegistry: More than one plugin attempted to publish the same event name, `" + i + "`.");
      Xr[i] = e;
      var a = e.phasedRegistrationNames;
      if (a) {
        for (var l in a)
          if (a.hasOwnProperty(l)) {
            var f = a[l];
            Vt(f, t, i);
          }
        return !0;
      } else if (e.registrationName)
        return Vt(e.registrationName, t, i), !0;
      return !1;
    }
    function Vt(e, t, i) {
      if (hr[e])
        throw Error("EventPluginRegistry: More than one plugin attempted to publish the same registration name, `" + e + "`.");
      hr[e] = t, Gi[e] = t.eventTypes[i].dependencies;
      {
        var a = e.toLowerCase();
        An[a] = e, e === "onDoubleClick" && (An.ondblclick = e);
      }
    }
    var Fn = [], Xr = {}, hr = {}, Gi = {}, An = {};
    function Fa(e) {
      if (un)
        throw Error("EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.");
      un = Array.prototype.slice.call(e), Lt();
    }
    function qr(e) {
      var t = !1;
      for (var i in e)
        if (e.hasOwnProperty(i)) {
          var a = e[i];
          if (!_t.hasOwnProperty(i) || _t[i] !== a) {
            if (_t[i])
              throw Error("EventPluginRegistry: Cannot inject two different event plugins using the same name, `" + i + "`.");
            _t[i] = a, t = !0;
          }
        }
      t && Lt();
    }
    var En = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ei = 1, Va = 32, $a = 64, Xi = null, Vn = null, Kr = null;
    function $n(e) {
      var t = ae(e);
      if (t) {
        if (typeof Xi != "function")
          throw Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var i = t.stateNode;
        if (i) {
          var a = ee(i);
          Xi(t.stateNode, t.type, a);
        }
      }
    }
    function qi(e) {
      Xi = e;
    }
    function Tn(e) {
      Vn ? Kr ? Kr.push(e) : Kr = [e] : Vn = e;
    }
    function Zr() {
      return Vn !== null || Kr !== null;
    }
    function Ti() {
      if (Vn) {
        var e = Vn, t = Kr;
        if (Vn = null, Kr = null, $n(e), t)
          for (var i = 0; i < t.length; i++)
            $n(t[i]);
      }
    }
    var wr = !0, Jn = !1, Ut = !1, er = !1, zt = function(e, t) {
      return e(t);
    }, St = function(e, t, i, a, l) {
      return e(t, i, a, l);
    }, $t = function() {
    }, Et = zt, rt = !1, Xt = !1;
    function Ht() {
      var e = Zr();
      e && ($t(), Ti());
    }
    function mr(e, t) {
      if (rt)
        return e(t);
      rt = !0;
      try {
        return zt(e, t);
      } finally {
        rt = !1, Ht();
      }
    }
    function Ki(e, t, i) {
      if (Xt)
        return e(t, i);
      Xt = !0;
      try {
        return Et(e, t, i);
      } finally {
        Xt = !1, Ht();
      }
    }
    function Ba(e, t, i, a, l) {
      var f = rt;
      rt = !0;
      try {
        return St(e, t, i, a, l);
      } finally {
        rt = f, rt || Ht();
      }
    }
    function Zi(e) {
      !rt && !Jn && $t();
    }
    function Wa(e, t, i, a) {
      zt = e, St = t, $t = i, Et = a;
    }
    var Ji = 0, bi = 1, Jr = 2, bn = 0, tr = 1, ea = 2, Nn = 3, Ci = 4, Ol = 5, Ya = 6, Dl = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", W = Dl + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ie = "data-reactroot", He = new RegExp("^[" + Dl + "][" + W + "]*$"), lt = Object.prototype.hasOwnProperty, qt = {}, Kt = {};
    function rn(e) {
      return lt.call(Kt, e) ? !0 : lt.call(qt, e) ? !1 : He.test(e) ? (Kt[e] = !0, !0) : (qt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function yr(e, t, i) {
      return t !== null ? t.type === bn : i ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function tn(e, t, i, a) {
      if (i !== null && i.type === bn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (a)
            return !1;
          if (i !== null)
            return !i.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Ml(e, t, i, a) {
      if (t === null || typeof t > "u" || tn(e, t, i, a))
        return !0;
      if (a)
        return !1;
      if (i !== null)
        switch (i.type) {
          case Nn:
            return !t;
          case Ci:
            return t === !1;
          case Ol:
            return isNaN(t);
          case Ya:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Ku(e) {
      return sn.hasOwnProperty(e) ? sn[e] : null;
    }
    function an(e, t, i, a, l, f) {
      this.acceptsBooleans = t === ea || t === Nn || t === Ci, this.attributeName = a, this.attributeNamespace = l, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = f;
    }
    var sn = {}, Al = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Al.forEach(function(e) {
      sn[e] = new an(
        e,
        bn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], i = e[1];
      sn[t] = new an(
        t,
        tr,
        !1,
        // mustUseProperty
        i,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      sn[e] = new an(
        e,
        ea,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      sn[e] = new an(
        e,
        ea,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      sn[e] = new an(
        e,
        Nn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      sn[e] = new an(
        e,
        Nn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      sn[e] = new an(
        e,
        Ci,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      sn[e] = new an(
        e,
        Ya,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      sn[e] = new an(
        e,
        Ol,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    });
    var Qc = /[\-\:]([a-z])/g, Fo = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Qc, Fo);
      sn[t] = new an(
        t,
        tr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Qc, Fo);
      sn[t] = new an(
        t,
        tr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Qc, Fo);
      sn[t] = new an(
        t,
        tr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      sn[e] = new an(
        e,
        tr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1
      );
    });
    var Gc = "xlinkHref";
    sn[Gc] = new an(
      "xlinkHref",
      tr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      sn[e] = new an(
        e,
        tr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0
      );
    }), b.ReactDebugCurrentFrame;
    var hp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Nl = !1;
    function Xc(e) {
      !Nl && hp.test(e) && (Nl = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function mp(e, t, i, a) {
      if (a.mustUseProperty) {
        var l = a.propertyName;
        return e[l];
      } else {
        a.sanitizeURL && Xc("" + i);
        var f = a.attributeName, h = null;
        if (a.type === Ci) {
          if (e.hasAttribute(f)) {
            var y = e.getAttribute(f);
            return y === "" ? !0 : Ml(t, i, a, !1) ? y : y === "" + i ? i : y;
          }
        } else if (e.hasAttribute(f)) {
          if (Ml(t, i, a, !1))
            return e.getAttribute(f);
          if (a.type === Nn)
            return i;
          h = e.getAttribute(f);
        }
        return Ml(t, i, a, !1) ? h === null ? i : h : h === "" + i ? i : h;
      }
    }
    function qc(e, t, i) {
      {
        if (!rn(t))
          return;
        if (!e.hasAttribute(t))
          return i === void 0 ? void 0 : null;
        var a = e.getAttribute(t);
        return a === "" + i ? i : a;
      }
    }
    function Pl(e, t, i, a) {
      var l = Ku(t);
      if (!yr(t, l, a)) {
        if (Ml(t, i, l, a) && (i = null), a || l === null) {
          if (rn(t)) {
            var f = t;
            i === null ? e.removeAttribute(f) : e.setAttribute(f, "" + i);
          }
          return;
        }
        var h = l.mustUseProperty;
        if (h) {
          var y = l.propertyName;
          if (i === null) {
            var T = l.type;
            e[y] = T === Nn ? !1 : "";
          } else
            e[y] = i;
          return;
        }
        var w = l.attributeName, _ = l.attributeNamespace;
        if (i === null)
          e.removeAttribute(w);
        else {
          var F = l.type, A;
          F === Nn || F === Ci && i === !0 ? A = "" : (A = "" + i, l.sanitizeURL && Xc(A.toString())), _ ? e.setAttributeNS(_, w, A) : e.setAttribute(w, A);
        }
      }
    }
    var Zu = /^(.*)[\\\/]/;
    function Kc(e, t, i) {
      var a = "";
      if (t) {
        var l = t.fileName, f = l.replace(Zu, "");
        if (/^index\./.test(f)) {
          var h = l.match(Zu);
          if (h) {
            var y = h[1];
            if (y) {
              var T = y.replace(Zu, "");
              f = T + "/" + f;
            }
          }
        }
        a = " (at " + f + ":" + t.lineNumber + ")";
      } else
        i && (a = " (created by " + i + ")");
      return `
    in ` + (e || "Unknown") + a;
    }
    var Pn = typeof Symbol == "function" && Symbol.for, Qa = Pn ? Symbol.for("react.element") : 60103, _n = Pn ? Symbol.for("react.portal") : 60106, Bn = Pn ? Symbol.for("react.fragment") : 60107, xi = Pn ? Symbol.for("react.strict_mode") : 60108, _r = Pn ? Symbol.for("react.profiler") : 60114, Ga = Pn ? Symbol.for("react.provider") : 60109, Xa = Pn ? Symbol.for("react.context") : 60110, Ll = Pn ? Symbol.for("react.concurrent_mode") : 60111, qa = Pn ? Symbol.for("react.forward_ref") : 60112, Ju = Pn ? Symbol.for("react.suspense") : 60113, es = Pn ? Symbol.for("react.suspense_list") : 60120, Vo = Pn ? Symbol.for("react.memo") : 60115, ta = Pn ? Symbol.for("react.lazy") : 60116, $o = Pn ? Symbol.for("react.block") : 60121, yp = typeof Symbol == "function" && Symbol.iterator, Tm = "@@iterator";
    function ei(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = yp && e[yp] || e[Tm];
      return typeof t == "function" ? t : null;
    }
    var gp = -1, Zc = 0, Ka = 1, Sp = 2;
    function Jc(e) {
      return e._status === Ka ? e._result : null;
    }
    function Ep(e) {
      if (e._status === gp) {
        e._status = Zc;
        var t = e._ctor, i = t();
        e._result = i, i.then(function(a) {
          if (e._status === Zc) {
            var l = a.default;
            l === void 0 && g(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, a), e._status = Ka, e._result = l;
          }
        }, function(a) {
          e._status === Zc && (e._status = Sp, e._result = a);
        });
      }
    }
    function ef(e, t, i) {
      var a = t.displayName || t.name || "";
      return e.displayName || (a !== "" ? i + "(" + a + ")" : i);
    }
    function me(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Bn:
          return "Fragment";
        case _n:
          return "Portal";
        case _r:
          return "Profiler";
        case xi:
          return "StrictMode";
        case Ju:
          return "Suspense";
        case es:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Xa:
            return "Context.Consumer";
          case Ga:
            return "Context.Provider";
          case qa:
            return ef(e, e.render, "ForwardRef");
          case Vo:
            return me(e.type);
          case $o:
            return me(e.render);
          case ta: {
            var t = e, i = Jc(t);
            if (i)
              return me(i);
            break;
          }
        }
      return null;
    }
    var ts = b.ReactDebugCurrentFrame;
    function Tp(e) {
      switch (e.tag) {
        case be:
        case De:
        case Re:
        case st:
        case q:
        case Ge:
          return "";
        default:
          var t = e._debugOwner, i = e._debugSource, a = me(e.type), l = null;
          return t && (l = me(t.type)), Kc(a, i, l);
      }
    }
    function kn(e) {
      var t = "", i = e;
      do
        t += Tp(i), i = i.return;
      while (i);
      return t;
    }
    var Ri = null, Ul = !1;
    function na() {
      {
        if (Ri === null)
          return null;
        var e = Ri._debugOwner;
        if (e !== null && typeof e < "u")
          return me(e.type);
      }
      return null;
    }
    function qe() {
      return Ri === null ? "" : kn(Ri);
    }
    function kr() {
      ts.getCurrentStack = null, Ri = null, Ul = !1;
    }
    function Bo(e) {
      ts.getCurrentStack = qe, Ri = e, Ul = !1;
    }
    function ti(e) {
      Ul = e;
    }
    function Ln(e) {
      return "" + e;
    }
    function ni(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return "";
      }
    }
    var Wo = null, ns = {
      checkPropTypes: null
    };
    {
      Wo = b.ReactDebugCurrentFrame;
      var bp = {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0
      }, Cp = {
        value: function(e, t, i) {
          return bp[e.type] || e.onChange || e.readOnly || e.disabled || e[t] == null || Jn ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
        },
        checked: function(e, t, i) {
          return e.onChange || e.readOnly || e.disabled || e[t] == null || Jn ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
        }
      };
      ns.checkPropTypes = function(e, t) {
        d(Cp, t, "prop", e, Wo.getStackAddendum);
      };
    }
    function xp(e) {
      var t = e.type, i = e.nodeName;
      return i && i.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function rs(e) {
      return e._valueTracker;
    }
    function tf(e) {
      e._valueTracker = null;
    }
    function Rp(e) {
      var t = "";
      return e && (xp(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function wi(e) {
      var t = xp(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), a = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof i > "u" || typeof i.get != "function" || typeof i.set != "function")) {
        var l = i.get, f = i.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(y) {
            a = "" + y, f.call(this, y);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        });
        var h = {
          getValue: function() {
            return a;
          },
          setValue: function(y) {
            a = "" + y;
          },
          stopTracking: function() {
            tf(e), delete e[t];
          }
        };
        return h;
      }
    }
    function Za(e) {
      rs(e) || (e._valueTracker = wi(e));
    }
    function is(e) {
      if (!e)
        return !1;
      var t = rs(e);
      if (!t)
        return !0;
      var i = t.getValue(), a = Rp(e);
      return a !== i ? (t.setValue(a), !0) : !1;
    }
    var nf = !1, rf = !1, af = !1, of = !1;
    function as(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function os(e, t) {
      var i = e, a = t.checked, l = c({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: a ?? i._wrapperState.initialChecked
      });
      return l;
    }
    function lf(e, t) {
      ns.checkPropTypes("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !rf && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components", na() || "A component", t.type), rf = !0), t.value !== void 0 && t.defaultValue !== void 0 && !nf && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components", na() || "A component", t.type), nf = !0);
      var i = e, a = t.defaultValue == null ? "" : t.defaultValue;
      i._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ni(t.value != null ? t.value : a),
        controlled: as(t)
      };
    }
    function ls(e, t) {
      var i = e, a = t.checked;
      a != null && Pl(i, "checked", a, !1);
    }
    function zl(e, t) {
      var i = e;
      {
        var a = as(t);
        !i._wrapperState.controlled && a && !of && (g("A component is changing an uncontrolled input of type %s to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components", t.type), of = !0), i._wrapperState.controlled && !a && !af && (g("A component is changing a controlled input of type %s to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components", t.type), af = !0);
      }
      ls(e, t);
      var l = ni(t.value), f = t.type;
      if (l != null)
        f === "number" ? (l === 0 && i.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        i.value != l) && (i.value = Ln(l)) : i.value !== Ln(l) && (i.value = Ln(l));
      else if (f === "submit" || f === "reset") {
        i.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Hl(i, t.type, l) : t.hasOwnProperty("defaultValue") && Hl(i, t.type, ni(t.defaultValue)), t.checked == null && t.defaultChecked != null && (i.defaultChecked = !!t.defaultChecked);
    }
    function us(e, t, i) {
      var a = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, f = l === "submit" || l === "reset";
        if (f && (t.value === void 0 || t.value === null))
          return;
        var h = Ln(a._wrapperState.initialValue);
        i || h !== a.value && (a.value = h), a.defaultValue = h;
      }
      var y = a.name;
      y !== "" && (a.name = ""), a.defaultChecked = !a.defaultChecked, a.defaultChecked = !!a._wrapperState.initialChecked, y !== "" && (a.name = y);
    }
    function uf(e, t) {
      var i = e;
      zl(i, t), wp(i, t);
    }
    function wp(e, t) {
      var i = t.name;
      if (t.type === "radio" && i != null) {
        for (var a = e; a.parentNode; )
          a = a.parentNode;
        for (var l = a.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), f = 0; f < l.length; f++) {
          var h = l[f];
          if (!(h === e || h.form !== e.form)) {
            var y = Bm(h);
            if (!y)
              throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            is(h), zl(h, y);
          }
        }
      }
    }
    function Hl(e, t, i) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || e.ownerDocument.activeElement !== e) && (i == null ? e.defaultValue = Ln(e._wrapperState.initialValue) : e.defaultValue !== Ln(i) && (e.defaultValue = Ln(i)));
    }
    var ss = !1, _p = !1;
    function Yo(e) {
      var t = "";
      return u.Children.forEach(e, function(i) {
        i != null && (t += i);
      }), t;
    }
    function sf(e, t) {
      typeof t.children == "object" && t.children !== null && u.Children.forEach(t.children, function(i) {
        i != null && (typeof i == "string" || typeof i == "number" || typeof i.type == "string" && (_p || (_p = !0, g("Only strings and numbers are supported as <option> children."))));
      }), t.selected != null && !ss && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ss = !0);
    }
    function cf(e, t) {
      t.value != null && e.setAttribute("value", Ln(ni(t.value)));
    }
    function ri(e, t) {
      var i = c({
        children: void 0
      }, t), a = Yo(t.children);
      return a && (i.children = a), i;
    }
    var Qo;
    Qo = !1;
    function Go() {
      var e = na();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Xo = ["value", "defaultValue"];
    function jl(e) {
      {
        ns.checkPropTypes("select", e);
        for (var t = 0; t < Xo.length; t++) {
          var i = Xo[t];
          if (e[i] != null) {
            var a = Array.isArray(e[i]);
            e.multiple && !a ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", i, Go()) : !e.multiple && a && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", i, Go());
          }
        }
      }
    }
    function gr(e, t, i, a) {
      var l = e.options;
      if (t) {
        for (var f = i, h = {}, y = 0; y < f.length; y++)
          h["$" + f[y]] = !0;
        for (var T = 0; T < l.length; T++) {
          var w = h.hasOwnProperty("$" + l[T].value);
          l[T].selected !== w && (l[T].selected = w), w && a && (l[T].defaultSelected = !0);
        }
      } else {
        for (var _ = Ln(ni(i)), F = null, A = 0; A < l.length; A++) {
          if (l[A].value === _) {
            l[A].selected = !0, a && (l[A].defaultSelected = !0);
            return;
          }
          F === null && !l[A].disabled && (F = l[A]);
        }
        F !== null && (F.selected = !0);
      }
    }
    function Il(e, t) {
      return c({}, t, {
        value: void 0
      });
    }
    function ii(e, t) {
      var i = e;
      jl(t), i._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Qo && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://fb.me/react-controlled-components"), Qo = !0);
    }
    function kp(e, t) {
      var i = e;
      i.multiple = !!t.multiple;
      var a = t.value;
      a != null ? gr(i, !!t.multiple, a, !1) : t.defaultValue != null && gr(i, !!t.multiple, t.defaultValue, !0);
    }
    function Op(e, t) {
      var i = e, a = i._wrapperState.wasMultiple;
      i._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? gr(i, !!t.multiple, l, !1) : a !== !!t.multiple && (t.defaultValue != null ? gr(i, !!t.multiple, t.defaultValue, !0) : gr(i, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function bm(e, t) {
      var i = e, a = t.value;
      a != null && gr(i, !!t.multiple, a, !1);
    }
    var cs = !1;
    function ff(e, t) {
      var i = e;
      if (t.dangerouslySetInnerHTML != null)
        throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var a = c({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Ln(i._wrapperState.initialValue)
      });
      return a;
    }
    function Ja(e, t) {
      var i = e;
      ns.checkPropTypes("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !cs && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://fb.me/react-controlled-components", na() || "A component"), cs = !0);
      var a = t.value;
      if (a == null) {
        var l = t.children, f = t.defaultValue;
        if (l != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (f != null)
              throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Array.isArray(l)) {
              if (!(l.length <= 1))
                throw Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            f = l;
          }
        }
        f == null && (f = ""), a = f;
      }
      i._wrapperState = {
        initialValue: ni(a)
      };
    }
    function _i(e, t) {
      var i = e, a = ni(t.value), l = ni(t.defaultValue);
      if (a != null) {
        var f = Ln(a);
        f !== i.value && (i.value = f), t.defaultValue == null && i.defaultValue !== f && (i.defaultValue = f);
      }
      l != null && (i.defaultValue = Ln(l));
    }
    function fs(e, t) {
      var i = e, a = i.textContent;
      a === i._wrapperState.initialValue && a !== "" && a !== null && (i.value = a);
    }
    function ds(e, t) {
      _i(e, t);
    }
    var Fl = "http://www.w3.org/1999/xhtml", Vl = "http://www.w3.org/1998/Math/MathML", qo = "http://www.w3.org/2000/svg", Wn = {
      html: Fl,
      mathml: Vl,
      svg: qo
    };
    function df(e) {
      switch (e) {
        case "svg":
          return qo;
        case "math":
          return Vl;
        default:
          return Fl;
      }
    }
    function pf(e, t) {
      return e == null || e === Fl ? df(t) : e === qo && t === "foreignObject" ? Fl : e;
    }
    var Dp = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, a, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, i, a, l);
        });
      } : e;
    }, ps, Mp = Dp(function(e, t) {
      if (e.namespaceURI === Wn.svg && !("innerHTML" in e)) {
        ps = ps || document.createElement("div"), ps.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var i = ps.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; i.firstChild; )
          e.appendChild(i.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Or = 1, Dr = 3, Un = 8, ra = 9, vs = 11, $l = function(e, t) {
      if (t) {
        var i = e.firstChild;
        if (i && i === e.lastChild && i.nodeType === Dr) {
          i.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    };
    function ia(e) {
      return e;
    }
    function Cm(e) {
      return e;
    }
    function Bl(e, t) {
      var i = {};
      return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
    }
    var eo = {
      animationend: Bl("Animation", "AnimationEnd"),
      animationiteration: Bl("Animation", "AnimationIteration"),
      animationstart: Bl("Animation", "AnimationStart"),
      transitionend: Bl("Transition", "TransitionEnd")
    }, aa = {}, Ap = {};
    En && (Ap = document.createElement("div").style, "AnimationEvent" in window || (delete eo.animationend.animation, delete eo.animationiteration.animation, delete eo.animationstart.animation), "TransitionEvent" in window || delete eo.transitionend.transition);
    function hs(e) {
      if (aa[e])
        return aa[e];
      if (!eo[e])
        return e;
      var t = eo[e];
      for (var i in t)
        if (t.hasOwnProperty(i) && i in Ap)
          return aa[e] = t[i];
      return e;
    }
    var vf = "abort", Np = hs("animationend"), hf = hs("animationiteration"), mf = hs("animationstart"), Cn = "blur", to = "canplay", no = "canplaythrough", ms = "cancel", oa = "change", Wl = "click", Ko = "close", ki = "compositionend", Yl = "compositionstart", yf = "compositionupdate", Ql = "contextmenu", gf = "copy", Sf = "cut", Ef = "dblclick", ro = "auxclick", Pp = "drag", Gl = "dragend", io = "dragenter", Tf = "dragexit", Xl = "dragleave", bf = "dragover", ys = "dragstart", ao = "drop", gs = "durationchange", oo = "emptied", Cf = "encrypted", xf = "ended", nr = "error", Sr = "focus", Oi = "gotpointercapture", ql = "input", ai = "invalid", xn = "keydown", Er = "keypress", zn = "keyup", la = "load", Ss = "loadstart", Rf = "loadeddata", wf = "loadedmetadata", Es = "lostpointercapture", Di = "mousedown", Kl = "mousemove", ua = "mouseout", Mi = "mouseover", Zl = "mouseup", Jl = "paste", _f = "pause", kf = "play", Of = "playing", Df = "pointercancel", Mf = "pointerdown", Ts = "pointermove", rr = "pointerout", ft = "pointerover", Bt = "pointerup", oi = "progress", vn = "ratechange", cn = "reset", li = "scroll", sa = "seeked", On = "seeking", ca = "selectionchange", bs = "stalled", lo = "submit", Zo = "suspend", eu = "textInput", Af = "timeupdate", Jo = "toggle", Cs = "touchcancel", xs = "touchend", Rs = "touchmove", Nf = "touchstart", tu = hs("transitionend"), ws = "volumechange", _s = "waiting", Pf = "wheel", el = [vf, to, no, gs, oo, Cf, xf, nr, Rf, wf, Ss, _f, kf, Of, oi, vn, sa, On, bs, Zo, Af, ws, _s];
    function Lf(e) {
      return e;
    }
    var xm = typeof WeakMap == "function" ? WeakMap : Map, Lp = new xm();
    function Mr(e) {
      var t = Lp.get(e);
      return t === void 0 && (t = /* @__PURE__ */ new Map(), Lp.set(e, t)), t;
    }
    function Ai(e) {
      return e._reactInternalFiber;
    }
    function Uf(e) {
      return e._reactInternalFiber !== void 0;
    }
    function Up(e, t) {
      e._reactInternalFiber = t;
    }
    var bt = (
      /*              */
      0
    ), Ar = (
      /*         */
      1
    ), on = (
      /*             */
      2
    ), dt = (
      /*                */
      4
    ), zp = (
      /*    */
      6
    ), uo = (
      /*              */
      8
    ), ir = (
      /*          */
      16
    ), zf = (
      /*              */
      32
    ), Ot = (
      /*            */
      64
    ), Yn = (
      /*                   */
      128
    ), fa = (
      /*              */
      256
    ), da = (
      /*               */
      512
    ), Tr = (
      /*             */
      1024
    ), ks = (
      /*    */
      1028
    ), Hf = (
      /*   */
      932
    ), jf = (
      /*        */
      2047
    ), tl = (
      /*            */
      2048
    ), Qn = (
      /*         */
      4096
    ), br = b.ReactCurrentOwner;
    function Gn(e) {
      var t = e, i = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var a = t;
        do
          t = a, (t.effectTag & (on | Tr)) !== bt && (i = t.return), a = t.return;
        while (a);
      }
      return t.tag === be ? i : null;
    }
    function Os(e) {
      if (e.tag === he) {
        var t = e.memoizedState;
        if (t === null) {
          var i = e.alternate;
          i !== null && (t = i.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Ds(e) {
      return e.tag === be ? e.stateNode.containerInfo : null;
    }
    function pa(e) {
      return Gn(e) === e;
    }
    function va(e) {
      {
        var t = br.current;
        if (t !== null && t.tag === Z) {
          var i = t, a = i.stateNode;
          a._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", me(i.type) || "A component"), a._warnedAboutRefsInRender = !0;
        }
      }
      var l = Ai(e);
      return l ? Gn(l) === l : !1;
    }
    function If(e) {
      if (Gn(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function nl(e) {
      var t = e.alternate;
      if (!t) {
        var i = Gn(e);
        if (i === null)
          throw Error("Unable to find node on an unmounted component.");
        return i !== e ? null : e;
      }
      for (var a = e, l = t; ; ) {
        var f = a.return;
        if (f === null)
          break;
        var h = f.alternate;
        if (h === null) {
          var y = f.return;
          if (y !== null) {
            a = l = y;
            continue;
          }
          break;
        }
        if (f.child === h.child) {
          for (var T = f.child; T; ) {
            if (T === a)
              return If(f), e;
            if (T === l)
              return If(f), t;
            T = T.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== l.return)
          a = f, l = h;
        else {
          for (var w = !1, _ = f.child; _; ) {
            if (_ === a) {
              w = !0, a = f, l = h;
              break;
            }
            if (_ === l) {
              w = !0, l = f, a = h;
              break;
            }
            _ = _.sibling;
          }
          if (!w) {
            for (_ = h.child; _; ) {
              if (_ === a) {
                w = !0, a = h, l = f;
                break;
              }
              if (_ === l) {
                w = !0, l = h, a = f;
                break;
              }
              _ = _.sibling;
            }
            if (!w)
              throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (a.alternate !== l)
          throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (a.tag !== be)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function Ff(e) {
      var t = nl(e);
      if (!t)
        return null;
      for (var i = t; ; ) {
        if (i.tag === de || i.tag === Re)
          return i;
        if (i.child) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === t)
          return null;
        for (; !i.sibling; ) {
          if (!i.return || i.return === t)
            return null;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      return null;
    }
    function nu(e) {
      var t = nl(e);
      if (!t)
        return null;
      for (var i = t; ; ) {
        if (i.tag === de || i.tag === Re || Ut)
          return i;
        if (i.child && i.tag !== De) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === t)
          return null;
        for (; !i.sibling; ) {
          if (!i.return || i.return === t)
            return null;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      return null;
    }
    function so(e, t) {
      if (t == null)
        throw Error("accumulateInto(...): Accumulated items must not be null or undefined.");
      return e == null ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t];
    }
    function rl(e, t, i) {
      Array.isArray(e) ? e.forEach(t, i) : e && t.call(i, e);
    }
    var ha = null, Hp = function(e) {
      e && ($e(e), e.isPersistent() || e.constructor.release(e));
    }, jp = function(e) {
      return Hp(e);
    };
    function Ms(e) {
      e !== null && (ha = so(ha, e));
      var t = ha;
      if (ha = null, !!t) {
        if (rl(t, jp), ha)
          throw Error("processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.");
        X();
      }
    }
    function ru(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Dr ? t.parentNode : t;
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function iu(e) {
      if (!En)
        return !1;
      var t = "on" + e, i = t in document;
      if (!i) {
        var a = document.createElement("div");
        a.setAttribute(t, "return;"), i = typeof a[t] == "function";
      }
      return i;
    }
    var au = 10, co = [];
    function Ip(e) {
      e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, co.length < au && co.push(e);
    }
    function il(e, t, i, a) {
      if (co.length) {
        var l = co.pop();
        return l.topLevelType = e, l.eventSystemFlags = a, l.nativeEvent = t, l.targetInst = i, l;
      }
      return {
        topLevelType: e,
        eventSystemFlags: a,
        nativeEvent: t,
        targetInst: i,
        ancestors: []
      };
    }
    function Vf(e) {
      if (e.tag === be)
        return e.stateNode.containerInfo;
      for (; e.return; )
        e = e.return;
      return e.tag !== be ? null : e.stateNode.containerInfo;
    }
    function ou(e, t, i, a, l) {
      for (var f = null, h = 0; h < Fn.length; h++) {
        var y = Fn[h];
        if (y) {
          var T = y.extractEvents(e, t, i, a, l);
          T && (f = so(f, T));
        }
      }
      return f;
    }
    function ui(e, t, i, a, l) {
      var f = ou(e, t, i, a, l);
      Ms(f);
    }
    function lu(e) {
      var t = e.targetInst, i = t;
      do {
        if (!i) {
          var a = e.ancestors;
          a.push(i);
          break;
        }
        var l = Vf(i);
        if (!l)
          break;
        var f = i.tag;
        (f === de || f === Re) && e.ancestors.push(i), i = gd(l);
      } while (i);
      for (var h = 0; h < e.ancestors.length; h++) {
        t = e.ancestors[h];
        var y = ru(e.nativeEvent), T = e.topLevelType, w = e.nativeEvent, _ = e.eventSystemFlags;
        h === 0 && (_ |= $a), ui(T, t, w, y, _);
      }
    }
    function al(e, t, i, a) {
      var l = il(e, i, a, t);
      try {
        Ki(lu, l);
      } finally {
        Ip(l);
      }
    }
    function fo(e, t) {
      for (var i = Mr(t), a = Gi[e], l = 0; l < a.length; l++) {
        var f = a[l];
        As(f, t, i);
      }
    }
    function As(e, t, i) {
      if (!i.has(e)) {
        switch (e) {
          case li:
            Ws(li, t);
            break;
          case Sr:
          case Cn:
            Ws(Sr, t), Ws(Cn, t), i.set(Cn, null), i.set(Sr, null);
            break;
          case ms:
          case Ko:
            iu(Lf(e)) && Ws(e, t);
            break;
          case ai:
          case lo:
          case cn:
            break;
          default:
            var a = el.indexOf(e) !== -1;
            a || Pt(e, t);
            break;
        }
        i.set(e, null);
      }
    }
    function ol(e, t) {
      for (var i = Mr(t), a = Gi[e], l = 0; l < a.length; l++) {
        var f = a[l];
        if (!i.has(f))
          return !1;
      }
      return !0;
    }
    var $f;
    function Bf(e) {
      $f = e;
    }
    var jt;
    function Ns(e) {
      jt = e;
    }
    var Ps;
    function Ls(e) {
      Ps = e;
    }
    var Xn = !1, Dn = [], At = null, Wt = null, Yt = null, ma = /* @__PURE__ */ new Map(), Rn = /* @__PURE__ */ new Map(), po = [];
    function Wf() {
      return Dn.length > 0;
    }
    var vo = [Di, Zl, Cs, xs, Nf, ro, Ef, Df, Mf, Bt, Gl, ys, ao, ki, Yl, xn, Er, zn, ql, eu, Ko, ms, gf, Sf, Jl, Wl, oa, Ql, cn, lo], ll = [Sr, Cn, io, Xl, Mi, ua, ft, rr, Oi, Es];
    function ya(e) {
      return vo.indexOf(e) > -1;
    }
    function uu(e, t, i) {
      As(e, t, i);
    }
    function Us(e, t) {
      var i = Mr(t);
      vo.forEach(function(a) {
        uu(a, t, i);
      }), ll.forEach(function(a) {
        uu(a, t, i);
      });
    }
    function zs(e, t, i, a, l) {
      return {
        blockedOn: e,
        topLevelType: t,
        eventSystemFlags: i | Va,
        nativeEvent: l,
        container: a
      };
    }
    function Hs(e, t, i, a, l) {
      var f = zs(e, t, i, a, l);
      Dn.push(f);
    }
    function Yf(e, t) {
      switch (e) {
        case Sr:
        case Cn:
          At = null;
          break;
        case io:
        case Xl:
          Wt = null;
          break;
        case Mi:
        case ua:
          Yt = null;
          break;
        case ft:
        case rr: {
          var i = t.pointerId;
          ma.delete(i);
          break;
        }
        case Oi:
        case Es: {
          var a = t.pointerId;
          Rn.delete(a);
          break;
        }
      }
    }
    function ho(e, t, i, a, l, f) {
      if (e === null || e.nativeEvent !== f) {
        var h = zs(t, i, a, l, f);
        if (t !== null) {
          var y = vl(t);
          y !== null && jt(y);
        }
        return h;
      }
      return e.eventSystemFlags |= a, e;
    }
    function Qf(e, t, i, a, l) {
      switch (t) {
        case Sr: {
          var f = l;
          return At = ho(At, e, t, i, a, f), !0;
        }
        case io: {
          var h = l;
          return Wt = ho(Wt, e, t, i, a, h), !0;
        }
        case Mi: {
          var y = l;
          return Yt = ho(Yt, e, t, i, a, y), !0;
        }
        case ft: {
          var T = l, w = T.pointerId;
          return ma.set(w, ho(ma.get(w) || null, e, t, i, a, T)), !0;
        }
        case Oi: {
          var _ = l, F = _.pointerId;
          return Rn.set(F, ho(Rn.get(F) || null, e, t, i, a, _)), !0;
        }
      }
      return !1;
    }
    function Fp(e) {
      var t = gd(e.target);
      if (t !== null) {
        var i = Gn(t);
        if (i !== null) {
          var a = i.tag;
          if (a === he) {
            var l = Os(i);
            if (l !== null) {
              e.blockedOn = l, p.unstable_runWithPriority(e.priority, function() {
                Ps(i);
              });
              return;
            }
          } else if (a === be) {
            var f = i.stateNode;
            if (f.hydrate) {
              e.blockedOn = Ds(i);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function mo(e) {
      if (e.blockedOn !== null)
        return !1;
      var t = Ys(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
      if (t !== null) {
        var i = vl(t);
        return i !== null && jt(i), e.blockedOn = t, !1;
      }
      return !0;
    }
    function Gf(e, t, i) {
      mo(e) && i.delete(t);
    }
    function Vp() {
      for (Xn = !1; Dn.length > 0; ) {
        var e = Dn[0];
        if (e.blockedOn !== null) {
          var t = vl(e.blockedOn);
          t !== null && $f(t);
          break;
        }
        var i = Ys(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
        i !== null ? e.blockedOn = i : Dn.shift();
      }
      At !== null && mo(At) && (At = null), Wt !== null && mo(Wt) && (Wt = null), Yt !== null && mo(Yt) && (Yt = null), ma.forEach(Gf), Rn.forEach(Gf);
    }
    function ul(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Xn || (Xn = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, Vp)));
    }
    function js(e) {
      if (Dn.length > 0) {
        ul(Dn[0], e);
        for (var t = 1; t < Dn.length; t++) {
          var i = Dn[t];
          i.blockedOn === e && (i.blockedOn = null);
        }
      }
      At !== null && ul(At, e), Wt !== null && ul(Wt, e), Yt !== null && ul(Yt, e);
      var a = function(y) {
        return ul(y, e);
      };
      ma.forEach(a), Rn.forEach(a);
      for (var l = 0; l < po.length; l++) {
        var f = po[l];
        f.blockedOn === e && (f.blockedOn = null);
      }
      for (; po.length > 0; ) {
        var h = po[0];
        if (h.blockedOn !== null)
          break;
        Fp(h), h.blockedOn === null && po.shift();
      }
    }
    function $p(e, t, i) {
      e.addEventListener(t, i, !1);
    }
    function Is(e, t, i) {
      e.addEventListener(t, i, !0);
    }
    var Xf = {}, Fs = /* @__PURE__ */ new Map(), Vs = /* @__PURE__ */ new Map(), $s = [Cn, "blur", ms, "cancel", Wl, "click", Ko, "close", Ql, "contextMenu", gf, "copy", Sf, "cut", ro, "auxClick", Ef, "doubleClick", Gl, "dragEnd", ys, "dragStart", ao, "drop", Sr, "focus", ql, "input", ai, "invalid", xn, "keyDown", Er, "keyPress", zn, "keyUp", Di, "mouseDown", Zl, "mouseUp", Jl, "paste", _f, "pause", kf, "play", Df, "pointerCancel", Mf, "pointerDown", Bt, "pointerUp", vn, "rateChange", cn, "reset", sa, "seeked", lo, "submit", Cs, "touchCancel", xs, "touchEnd", Nf, "touchStart", ws, "volumeChange"], Rm = [oa, ca, eu, Yl, ki, yf], wm = [Pp, "drag", io, "dragEnter", Tf, "dragExit", Xl, "dragLeave", bf, "dragOver", Kl, "mouseMove", ua, "mouseOut", Mi, "mouseOver", Ts, "pointerMove", rr, "pointerOut", ft, "pointerOver", li, "scroll", Jo, "toggle", Rs, "touchMove", Pf, "wheel"], _m = [vf, "abort", Np, "animationEnd", hf, "animationIteration", mf, "animationStart", to, "canPlay", no, "canPlayThrough", gs, "durationChange", oo, "emptied", Cf, "encrypted", xf, "ended", nr, "error", Oi, "gotPointerCapture", la, "load", Rf, "loadedData", wf, "loadedMetadata", Ss, "loadStart", Es, "lostPointerCapture", Of, "playing", oi, "progress", On, "seeking", bs, "stalled", Zo, "suspend", Af, "timeUpdate", tu, "transitionEnd", _s, "waiting"];
    function Nr(e, t) {
      for (var i = 0; i < e.length; i += 2) {
        var a = e[i], l = e[i + 1], f = l[0].toUpperCase() + l.slice(1), h = "on" + f, y = {
          phasedRegistrationNames: {
            bubbled: h,
            captured: h + "Capture"
          },
          dependencies: [a],
          eventPriority: t
        };
        Vs.set(a, t), Fs.set(a, y), Xf[l] = y;
      }
    }
    function ga(e, t) {
      for (var i = 0; i < e.length; i++)
        Vs.set(e[i], t);
    }
    Nr($s, Ji), Nr(wm, bi), Nr(_m, Jr), ga(Rm, Ji);
    function yo(e) {
      var t = Vs.get(e);
      return t === void 0 ? Jr : t;
    }
    var Bp = p.unstable_UserBlockingPriority, Wp = p.unstable_runWithPriority, su = !0;
    function qf(e) {
      su = !!e;
    }
    function Bs() {
      return su;
    }
    function Pt(e, t) {
      Pr(t, e, !1);
    }
    function Ws(e, t) {
      Pr(t, e, !0);
    }
    function Pr(e, t, i) {
      var a;
      switch (yo(t)) {
        case Ji:
          a = ar.bind(null, t, Ei, e);
          break;
        case bi:
          a = Yp.bind(null, t, Ei, e);
          break;
        case Jr:
        default:
          a = cu.bind(null, t, Ei, e);
          break;
      }
      var l = Lf(t);
      i ? Is(e, l, a) : $p(e, l, a);
    }
    function ar(e, t, i, a) {
      Zi(a.timeStamp), Ba(cu, e, t, i, a);
    }
    function Yp(e, t, i, a) {
      Wp(Bp, cu.bind(null, e, t, i, a));
    }
    function cu(e, t, i, a) {
      if (su) {
        if (Wf() && ya(e)) {
          Hs(
            null,
            // Flags that we're not actually blocked on anything as far as we know.
            e,
            t,
            i,
            a
          );
          return;
        }
        var l = Ys(e, t, i, a);
        if (l === null) {
          Yf(e, a);
          return;
        }
        if (ya(e)) {
          Hs(l, e, t, i, a);
          return;
        }
        Qf(l, e, t, i, a) || (Yf(e, a), al(e, t, a, null));
      }
    }
    function Ys(e, t, i, a) {
      var l = ru(a), f = gd(l);
      if (f !== null) {
        var h = Gn(f);
        if (h === null)
          f = null;
        else {
          var y = h.tag;
          if (y === he) {
            var T = Os(h);
            if (T !== null)
              return T;
            f = null;
          } else if (y === be) {
            var w = h.stateNode;
            if (w.hydrate)
              return Ds(h);
            f = null;
          } else
            h !== f && (f = null);
        }
      }
      return al(e, t, a, f), null;
    }
    var Qp = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, go = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Gp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Kf = ["Webkit", "ms", "Moz", "O"];
    Object.keys(go).forEach(function(e) {
      Kf.forEach(function(t) {
        go[Gp(t, e)] = go[e];
      });
    });
    function Qs(e, t, i) {
      var a = t == null || typeof t == "boolean" || t === "";
      return a ? "" : !i && typeof t == "number" && t !== 0 && !(go.hasOwnProperty(e) && go[e]) ? t + "px" : ("" + t).trim();
    }
    var Zf = /([A-Z])/g, Xp = /^ms-/;
    function qp(e) {
      return e.replace(Zf, "-$1").toLowerCase().replace(Xp, "-ms-");
    }
    var Gs = function() {
    };
    {
      var Kp = /^(?:webkit|moz|o)[A-Z]/, Ni = /^-ms-/, Zp = /-(.)/g, Xs = /;\s*$/, So = {}, qs = {}, fu = !1, Jp = !1, km = function(e) {
        return e.replace(Zp, function(t, i) {
          return i.toUpperCase();
        });
      }, Jf = function(e) {
        So.hasOwnProperty(e) && So[e] || (So[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          km(e.replace(Ni, "ms-"))
        ));
      }, Om = function(e) {
        So.hasOwnProperty(e) && So[e] || (So[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ed = function(e, t) {
        qs.hasOwnProperty(t) && qs[t] || (qs[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Xs, "")));
      }, Dm = function(e, t) {
        fu || (fu = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ev = function(e, t) {
        Jp || (Jp = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Gs = function(e, t) {
        e.indexOf("-") > -1 ? Jf(e) : Kp.test(e) ? Om(e) : Xs.test(t) && ed(e, t), typeof t == "number" && (isNaN(t) ? Dm(e, t) : isFinite(t) || ev(e, t));
      };
    }
    var Mm = Gs;
    function tv(e) {
      {
        var t = "", i = "";
        for (var a in e)
          if (e.hasOwnProperty(a)) {
            var l = e[a];
            if (l != null) {
              var f = a.indexOf("--") === 0;
              t += i + (f ? a : qp(a)) + ":", t += Qs(a, l, f), i = ";";
            }
          }
        return t || null;
      }
    }
    function td(e, t) {
      var i = e.style;
      for (var a in t)
        if (t.hasOwnProperty(a)) {
          var l = a.indexOf("--") === 0;
          l || Mm(a, t[a]);
          var f = Qs(a, t[a], l);
          a === "float" && (a = "cssFloat"), l ? i.setProperty(a, f) : i[a] = f;
        }
    }
    function Am(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function nd(e) {
      var t = {};
      for (var i in e)
        for (var a = Qp[i] || [i], l = 0; l < a.length; l++)
          t[a[l]] = i;
      return t;
    }
    function nv(e, t) {
      {
        if (!t)
          return;
        var i = nd(e), a = nd(t), l = {};
        for (var f in i) {
          var h = i[f], y = a[f];
          if (y && h !== y) {
            var T = h + "," + y;
            if (l[T])
              continue;
            l[T] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Am(e[h]) ? "Removing" : "Updating", h, y);
          }
        }
      }
    }
    var rv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, iv = c({
      menuitem: !0
    }, rv), rd = "__html", du = null;
    du = b.ReactDebugCurrentFrame;
    function Ks(e, t) {
      if (t) {
        if (iv[e] && !(t.children == null && t.dangerouslySetInnerHTML == null))
          throw Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." + du.getStackAddendum());
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (!(typeof t.dangerouslySetInnerHTML == "object" && rd in t.dangerouslySetInnerHTML))
            throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(t.style == null || typeof t.style == "object"))
          throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." + du.getStackAddendum());
      }
    }
    function Pi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var pu = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, av = {
      "aria-current": 0,
      // state
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Eo = {}, ov = new RegExp("^(aria)-[" + W + "]*$"), Nm = new RegExp("^(aria)[A-Z][" + W + "]*$"), Zs = Object.prototype.hasOwnProperty;
    function lv(e, t) {
      {
        if (Zs.call(Eo, t) && Eo[t])
          return !0;
        if (Nm.test(t)) {
          var i = "aria-" + t.slice(4).toLowerCase(), a = av.hasOwnProperty(i) ? i : null;
          if (a == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Eo[t] = !0, !0;
          if (t !== a)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), Eo[t] = !0, !0;
        }
        if (ov.test(t)) {
          var l = t.toLowerCase(), f = av.hasOwnProperty(l) ? l : null;
          if (f == null)
            return Eo[t] = !0, !1;
          if (t !== f)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, f), Eo[t] = !0, !0;
        }
      }
      return !0;
    }
    function hn(e, t) {
      {
        var i = [];
        for (var a in t) {
          var l = lv(e, a);
          l || i.push(a);
        }
        var f = i.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop", f, e) : i.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop", f, e);
      }
    }
    function id(e, t) {
      Pi(e, t) || hn(e, t);
    }
    var Cr = !1;
    function si(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Cr && (Cr = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Sa = function() {
    };
    {
      var mn = {}, uv = Object.prototype.hasOwnProperty, vu = /^on./, Js = /^on[^A-Z]/, ad = new RegExp("^(aria)-[" + W + "]*$"), Ve = new RegExp("^(aria)[A-Z][" + W + "]*$");
      Sa = function(e, t, i, a) {
        if (uv.call(mn, t) && mn[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), mn[t] = !0, !0;
        if (a) {
          if (hr.hasOwnProperty(t))
            return !0;
          var f = An.hasOwnProperty(l) ? An[l] : null;
          if (f != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, f), mn[t] = !0, !0;
          if (vu.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), mn[t] = !0, !0;
        } else if (vu.test(t))
          return Js.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), mn[t] = !0, !0;
        if (ad.test(t) || Ve.test(t))
          return !0;
        if (l === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), mn[t] = !0, !0;
        if (l === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), mn[t] = !0, !0;
        if (l === "is" && i !== null && i !== void 0 && typeof i != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), mn[t] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), mn[t] = !0, !0;
        var h = Ku(t), y = h !== null && h.type === bn;
        if (pu.hasOwnProperty(l)) {
          var T = pu[l];
          if (T !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, T), mn[t] = !0, !0;
        } else if (!y && t !== l)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), mn[t] = !0, !0;
        return typeof i == "boolean" && tn(t, i, h, !1) ? (i ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, t, t, i, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, t, t, i, t, t, t), mn[t] = !0, !0) : y ? !0 : tn(t, i, h, !1) ? (mn[t] = !0, !1) : ((i === "false" || i === "true") && h !== null && h.type === Nn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, t, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, i), mn[t] = !0), !0);
      };
    }
    var or = function(e, t, i) {
      {
        var a = [];
        for (var l in t) {
          var f = Sa(e, l, t[l], i);
          f || a.push(l);
        }
        var h = a.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://fb.me/react-attribute-behavior", h, e) : a.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://fb.me/react-attribute-behavior", h, e);
      }
    };
    function Qe(e, t, i) {
      Pi(e, t) || or(e, t, i);
    }
    var Dt = !1, Zt = "dangerouslySetInnerHTML", To = "suppressContentEditableWarning", lr = "suppressHydrationWarning", sl = "autoFocus", ci = "children", Lr = "style", bo = "__html", Ea = Wn.html, ec, ke, Co, cl, xr, hu, Ta, fl, Ur, dl;
    {
      ec = {
        // Chrome is the only major browser not shipping <time>. But as of July
        // 2017 it intends to ship it due to widespread usage. We intentionally
        // *don't* warn for <time> even if it's unrecognized by Chrome because
        // it soon will be, and many apps have been using it anyway.
        time: !0,
        // There are working polyfills for <dialog>. Let people use it.
        dialog: !0,
        // Electron ships a custom <webview> tag to display external web content in
        // an isolated frame and process.
        // This tag is not present in non Electron environments such as JSDom which
        // is often used for testing purposes.
        // @see https://electronjs.org/docs/api/webview-tag
        webview: !0
      }, Co = function(e, t) {
        id(e, t), si(e, t), Qe(
          e,
          t,
          /* canUseEventSystem */
          !0
        );
      }, fl = En && !document.documentMode;
      var od = /\r\n?/g, tc = /\u0000|\uFFFD/g;
      Ur = function(e) {
        var t = typeof e == "string" ? e : "" + e;
        return t.replace(od, `
`).replace(tc, "");
      }, cl = function(e, t) {
        if (!Dt) {
          var i = Ur(t), a = Ur(e);
          a !== i && (Dt = !0, g('Text content did not match. Server: "%s" Client: "%s"', a, i));
        }
      }, xr = function(e, t, i) {
        if (!Dt) {
          var a = Ur(i), l = Ur(t);
          l !== a && (Dt = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(a)));
        }
      }, hu = function(e) {
        if (!Dt) {
          Dt = !0;
          var t = [];
          e.forEach(function(i) {
            t.push(i);
          }), g("Extra attributes from the server: %s", t);
        }
      }, Ta = function(e, t) {
        t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
      }, dl = function(e, t) {
        var i = e.namespaceURI === Ea ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
        return i.innerHTML = t, i.innerHTML;
      };
    }
    function yn(e, t) {
      var i = e.nodeType === ra || e.nodeType === vs, a = i ? e : e.ownerDocument;
      fo(t, a);
    }
    function ba(e) {
      return e.nodeType === ra ? e : e.ownerDocument;
    }
    function Ca() {
    }
    function xo(e) {
      e.onclick = Ca;
    }
    function nc(e, t, i, a, l) {
      for (var f in a)
        if (a.hasOwnProperty(f)) {
          var h = a[f];
          if (f === Lr)
            h && Object.freeze(h), td(t, h);
          else if (f === Zt) {
            var y = h ? h[bo] : void 0;
            y != null && Mp(t, y);
          } else if (f === ci)
            if (typeof h == "string") {
              var T = e !== "textarea" || h !== "";
              T && $l(t, h);
            } else
              typeof h == "number" && $l(t, "" + h);
          else
            f === To || f === lr || f === sl || (hr.hasOwnProperty(f) ? h != null && (typeof h != "function" && Ta(f, h), yn(i, f)) : h != null && Pl(t, f, h, l));
        }
    }
    function ur(e, t, i, a) {
      for (var l = 0; l < t.length; l += 2) {
        var f = t[l], h = t[l + 1];
        f === Lr ? td(e, h) : f === Zt ? Mp(e, h) : f === ci ? $l(e, h) : Pl(e, f, h, a);
      }
    }
    function sv(e, t, i, a) {
      var l, f = ba(i), h, y = a;
      if (y === Ea && (y = df(e)), y === Ea) {
        if (l = Pi(e, t), !l && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var T = f.createElement("div");
          T.innerHTML = "<script><\/script>";
          var w = T.firstChild;
          h = T.removeChild(w);
        } else if (typeof t.is == "string")
          h = f.createElement(e, {
            is: t.is
          });
        else if (h = f.createElement(e), e === "select") {
          var _ = h;
          t.multiple ? _.multiple = !0 : t.size && (_.size = t.size);
        }
      } else
        h = f.createElementNS(y, e);
      return y === Ea && !l && Object.prototype.toString.call(h) === "[object HTMLUnknownElement]" && !Object.prototype.hasOwnProperty.call(ec, e) && (ec[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), h;
    }
    function ld(e, t) {
      return ba(t).createTextNode(e);
    }
    function Pm(e, t, i, a) {
      var l = Pi(t, i);
      Co(t, i);
      var f;
      switch (t) {
        case "iframe":
        case "object":
        case "embed":
          Pt(la, e), f = i;
          break;
        case "video":
        case "audio":
          for (var h = 0; h < el.length; h++)
            Pt(el[h], e);
          f = i;
          break;
        case "source":
          Pt(nr, e), f = i;
          break;
        case "img":
        case "image":
        case "link":
          Pt(nr, e), Pt(la, e), f = i;
          break;
        case "form":
          Pt(cn, e), Pt(lo, e), f = i;
          break;
        case "details":
          Pt(Jo, e), f = i;
          break;
        case "input":
          lf(e, i), f = os(e, i), Pt(ai, e), yn(a, "onChange");
          break;
        case "option":
          sf(e, i), f = ri(e, i);
          break;
        case "select":
          ii(e, i), f = Il(e, i), Pt(ai, e), yn(a, "onChange");
          break;
        case "textarea":
          Ja(e, i), f = ff(e, i), Pt(ai, e), yn(a, "onChange");
          break;
        default:
          f = i;
      }
      switch (Ks(t, f), nc(t, e, a, f, l), t) {
        case "input":
          Za(e), us(e, i, !1);
          break;
        case "textarea":
          Za(e), fs(e);
          break;
        case "option":
          cf(e, i);
          break;
        case "select":
          kp(e, i);
          break;
        default:
          typeof f.onClick == "function" && xo(e);
          break;
      }
    }
    function cv(e, t, i, a, l) {
      Co(t, a);
      var f = null, h, y;
      switch (t) {
        case "input":
          h = os(e, i), y = os(e, a), f = [];
          break;
        case "option":
          h = ri(e, i), y = ri(e, a), f = [];
          break;
        case "select":
          h = Il(e, i), y = Il(e, a), f = [];
          break;
        case "textarea":
          h = ff(e, i), y = ff(e, a), f = [];
          break;
        default:
          h = i, y = a, typeof h.onClick != "function" && typeof y.onClick == "function" && xo(e);
          break;
      }
      Ks(t, y);
      var T, w, _ = null;
      for (T in h)
        if (!(y.hasOwnProperty(T) || !h.hasOwnProperty(T) || h[T] == null))
          if (T === Lr) {
            var F = h[T];
            for (w in F)
              F.hasOwnProperty(w) && (_ || (_ = {}), _[w] = "");
          } else
            T === Zt || T === ci || T === To || T === lr || T === sl || (hr.hasOwnProperty(T) ? f || (f = []) : (f = f || []).push(T, null));
      for (T in y) {
        var A = y[T], V = h != null ? h[T] : void 0;
        if (!(!y.hasOwnProperty(T) || A === V || A == null && V == null))
          if (T === Lr)
            if (A && Object.freeze(A), V) {
              for (w in V)
                V.hasOwnProperty(w) && (!A || !A.hasOwnProperty(w)) && (_ || (_ = {}), _[w] = "");
              for (w in A)
                A.hasOwnProperty(w) && V[w] !== A[w] && (_ || (_ = {}), _[w] = A[w]);
            } else
              _ || (f || (f = []), f.push(T, _)), _ = A;
          else if (T === Zt) {
            var se = A ? A[bo] : void 0, pe = V ? V[bo] : void 0;
            se != null && pe !== se && (f = f || []).push(T, se);
          } else
            T === ci ? V !== A && (typeof A == "string" || typeof A == "number") && (f = f || []).push(T, "" + A) : T === To || T === lr || (hr.hasOwnProperty(T) ? (A != null && (typeof A != "function" && Ta(T, A), yn(l, T)), !f && V !== A && (f = [])) : (f = f || []).push(T, A));
      }
      return _ && (nv(_, y[Lr]), (f = f || []).push(Lr, _)), f;
    }
    function fv(e, t, i, a, l) {
      i === "input" && l.type === "radio" && l.name != null && ls(e, l);
      var f = Pi(i, a), h = Pi(i, l);
      switch (ur(e, t, f, h), i) {
        case "input":
          zl(e, l);
          break;
        case "textarea":
          _i(e, l);
          break;
        case "select":
          Op(e, l);
          break;
      }
    }
    function Ro(e) {
      {
        var t = e.toLowerCase();
        return pu.hasOwnProperty(t) && pu[t] || null;
      }
    }
    function dv(e, t, i, a, l) {
      var f, h;
      switch (ke = i[lr] === !0, f = Pi(t, i), Co(t, i), t) {
        case "iframe":
        case "object":
        case "embed":
          Pt(la, e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < el.length; y++)
            Pt(el[y], e);
          break;
        case "source":
          Pt(nr, e);
          break;
        case "img":
        case "image":
        case "link":
          Pt(nr, e), Pt(la, e);
          break;
        case "form":
          Pt(cn, e), Pt(lo, e);
          break;
        case "details":
          Pt(Jo, e);
          break;
        case "input":
          lf(e, i), Pt(ai, e), yn(l, "onChange");
          break;
        case "option":
          sf(e, i);
          break;
        case "select":
          ii(e, i), Pt(ai, e), yn(l, "onChange");
          break;
        case "textarea":
          Ja(e, i), Pt(ai, e), yn(l, "onChange");
          break;
      }
      Ks(t, i);
      {
        h = /* @__PURE__ */ new Set();
        for (var T = e.attributes, w = 0; w < T.length; w++) {
          var _ = T[w].name.toLowerCase();
          switch (_) {
            case "data-reactroot":
              break;
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              h.add(T[w].name);
          }
        }
      }
      var F = null;
      for (var A in i)
        if (i.hasOwnProperty(A)) {
          var V = i[A];
          if (A === ci)
            typeof V == "string" ? e.textContent !== V && (ke || cl(e.textContent, V), F = [ci, V]) : typeof V == "number" && e.textContent !== "" + V && (ke || cl(e.textContent, V), F = [ci, "" + V]);
          else if (hr.hasOwnProperty(A))
            V != null && (typeof V != "function" && Ta(A, V), yn(l, A));
          else if (
            // Convince Flow we've calculated it (it's DEV-only in this method.)
            typeof f == "boolean"
          ) {
            var se = void 0, pe = Ku(A);
            if (!ke) {
              if (!(A === To || A === lr || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === Zt) {
                  var Le = e.innerHTML, je = V ? V[bo] : void 0, Ct = dl(e, je ?? "");
                  Ct !== Le && xr(A, Le, Ct);
                } else if (A === Lr) {
                  if (h.delete(A), fl) {
                    var et = tv(V);
                    se = e.getAttribute("style"), et !== se && xr(A, se, et);
                  }
                } else if (f)
                  h.delete(A.toLowerCase()), se = qc(e, A, V), V !== se && xr(A, se, V);
                else if (!yr(A, pe, f) && !Ml(A, V, pe, f)) {
                  var Nt = !1;
                  if (pe !== null)
                    h.delete(pe.attributeName), se = mp(e, A, V, pe);
                  else {
                    var H = a;
                    if (H === Ea && (H = df(t)), H === Ea)
                      h.delete(A.toLowerCase());
                    else {
                      var B = Ro(A);
                      B !== null && B !== A && (Nt = !0, h.delete(B)), h.delete(A);
                    }
                    se = qc(e, A, V);
                  }
                  V !== se && !Nt && xr(A, se, V);
                }
              }
            }
          }
        }
      switch (h.size > 0 && !ke && hu(h), t) {
        case "input":
          Za(e), us(e, i, !0);
          break;
        case "textarea":
          Za(e), fs(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof i.onClick == "function" && xo(e);
          break;
      }
      return F;
    }
    function pv(e, t) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ud(e, t) {
      cl(e.nodeValue, t);
    }
    function mu(e, t) {
      {
        if (Dt)
          return;
        Dt = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function vv(e, t) {
      {
        if (Dt)
          return;
        Dt = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function hv(e, t, i) {
      {
        if (Dt)
          return;
        Dt = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function sd(e, t) {
      {
        if (t === "" || Dt)
          return;
        Dt = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function mv(e, t, i) {
      switch (t) {
        case "input":
          uf(e, i);
          return;
        case "textarea":
          ds(e, i);
          return;
        case "select":
          bm(e, i);
          return;
      }
    }
    function yu(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function xa(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Lm(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function yv(e, t) {
      for (var i = xa(e), a = 0, l = 0; i; ) {
        if (i.nodeType === Dr) {
          if (l = a + i.textContent.length, a <= t && l >= t)
            return {
              node: i,
              offset: t - a
            };
          a = l;
        }
        i = xa(Lm(i));
      }
    }
    function pl(e) {
      var t = e.ownerDocument, i = t && t.defaultView || window, a = i.getSelection && i.getSelection();
      if (!a || a.rangeCount === 0)
        return null;
      var l = a.anchorNode, f = a.anchorOffset, h = a.focusNode, y = a.focusOffset;
      try {
        l.nodeType, h.nodeType;
      } catch {
        return null;
      }
      return Um(e, l, f, h, y);
    }
    function Um(e, t, i, a, l) {
      var f = 0, h = -1, y = -1, T = 0, w = 0, _ = e, F = null;
      e:
        for (; ; ) {
          for (var A = null; _ === t && (i === 0 || _.nodeType === Dr) && (h = f + i), _ === a && (l === 0 || _.nodeType === Dr) && (y = f + l), _.nodeType === Dr && (f += _.nodeValue.length), (A = _.firstChild) !== null; )
            F = _, _ = A;
          for (; ; ) {
            if (_ === e)
              break e;
            if (F === t && ++T === i && (h = f), F === a && ++w === l && (y = f), (A = _.nextSibling) !== null)
              break;
            _ = F, F = _.parentNode;
          }
          _ = A;
        }
      return h === -1 || y === -1 ? null : {
        start: h,
        end: y
      };
    }
    function gv(e, t) {
      var i = e.ownerDocument || document, a = i && i.defaultView || window;
      if (a.getSelection) {
        var l = a.getSelection(), f = e.textContent.length, h = Math.min(t.start, f), y = t.end === void 0 ? h : Math.min(t.end, f);
        if (!l.extend && h > y) {
          var T = y;
          y = h, h = T;
        }
        var w = yv(e, h), _ = yv(e, y);
        if (w && _) {
          if (l.rangeCount === 1 && l.anchorNode === w.node && l.anchorOffset === w.offset && l.focusNode === _.node && l.focusOffset === _.offset)
            return;
          var F = i.createRange();
          F.setStart(w.node, w.offset), l.removeAllRanges(), h > y ? (l.addRange(F), l.extend(_.node, _.offset)) : (F.setEnd(_.node, _.offset), l.addRange(F));
        }
      }
    }
    function Ra(e) {
      return e && e.nodeType === Dr;
    }
    function Sv(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Ra(e) ? !1 : Ra(t) ? Sv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function zm(e) {
      return e && e.ownerDocument && Sv(e.ownerDocument.documentElement, e);
    }
    function Ev(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function rc() {
      for (var e = window, t = yu(); t instanceof e.HTMLIFrameElement; ) {
        if (Ev(t))
          e = t.contentWindow;
        else
          return t;
        t = yu(e.document);
      }
      return t;
    }
    function gu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Hm() {
      var e = rc();
      return {
        // Used by Flare
        activeElementDetached: null,
        focusedElem: e,
        selectionRange: gu(e) ? fi(e) : null
      };
    }
    function jm(e) {
      var t = rc(), i = e.focusedElem, a = e.selectionRange;
      if (t !== i && zm(i)) {
        a !== null && gu(i) && cd(i, a);
        for (var l = [], f = i; f = f.parentNode; )
          f.nodeType === Or && l.push({
            element: f,
            left: f.scrollLeft,
            top: f.scrollTop
          });
        typeof i.focus == "function" && i.focus();
        for (var h = 0; h < l.length; h++) {
          var y = l[h];
          y.element.scrollLeft = y.left, y.element.scrollTop = y.top;
        }
      }
    }
    function fi(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = pl(e), t || {
        start: 0,
        end: 0
      };
    }
    function cd(e, t) {
      var i = t.start, a = t.end;
      a === void 0 && (a = i), "selectionStart" in e ? (e.selectionStart = i, e.selectionEnd = Math.min(a, e.value.length)) : gv(e, t);
    }
    var Su = function() {
    }, zr = function() {
    };
    {
      var ic = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], Li = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], fd = Li.concat(["button"]), dd = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Tv = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      zr = function(e, t) {
        var i = c({}, e || Tv), a = {
          tag: t
        };
        return Li.indexOf(t) !== -1 && (i.aTagInScope = null, i.buttonTagInScope = null, i.nobrTagInScope = null), fd.indexOf(t) !== -1 && (i.pTagInButtonScope = null), ic.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (i.listItemTagAutoclosing = null, i.dlItemTagAutoclosing = null), i.current = a, t === "form" && (i.formTag = a), t === "a" && (i.aTagInScope = a), t === "button" && (i.buttonTagInScope = a), t === "nobr" && (i.nobrTagInScope = a), t === "p" && (i.pTagInButtonScope = a), t === "li" && (i.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (i.dlItemTagAutoclosing = a), i;
      };
      var bv = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return dd.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, wo = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, pd = {};
      Su = function(e, t, i) {
        i = i || Tv;
        var a = i.current, l = a && a.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var f = bv(e, l) ? null : a, h = f ? null : wo(e, i), y = f || h;
        if (y) {
          var T = y.tag, w = qe(), _ = !!f + "|" + e + "|" + T + "|" + w;
          if (!pd[_]) {
            pd[_] = !0;
            var F = e, A = "";
            if (e === "#text" ? /\S/.test(t) ? F = "Text nodes" : (F = "Whitespace text nodes", A = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : F = "<" + e + ">", f) {
              var V = "";
              T === "table" && e === "tr" && (V += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", F, T, A, V);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", F, T);
          }
        }
      };
    }
    var wa;
    wa = "suppressHydrationWarning";
    var Eu = "$", ac = "/$", oc = "$?", Tu = "$!", vd = "style", _o = null, hd = null;
    function bu(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function Im(e) {
      var t, i, a = e.nodeType;
      switch (a) {
        case ra:
        case vs: {
          t = a === ra ? "#document" : "#fragment";
          var l = e.documentElement;
          i = l ? l.namespaceURI : pf(null, "");
          break;
        }
        default: {
          var f = a === Un ? e.parentNode : e, h = f.namespaceURI || null;
          t = f.tagName, i = pf(h, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), T = zr(null, y);
        return {
          namespace: i,
          ancestorInfo: T
        };
      }
    }
    function Cv(e, t, i) {
      {
        var a = e, l = pf(a.namespace, t), f = zr(a.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: f
        };
      }
    }
    function rS(e) {
      return e;
    }
    function n(e) {
      _o = Bs(), hd = Hm(), qf(!1);
    }
    function r(e) {
      jm(hd), qf(_o), _o = null, hd = null;
    }
    function o(e, t, i, a, l) {
      var f;
      {
        var h = a;
        if (Su(e, null, h.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, T = zr(h.ancestorInfo, e);
          Su(null, y, T);
        }
        f = h.namespace;
      }
      var w = sv(e, t, i, f);
      return Rv(l, w), Wm(w, t), w;
    }
    function s(e, t) {
      e.appendChild(t);
    }
    function v(e, t, i, a, l) {
      return Pm(e, t, i, a), bu(t, i);
    }
    function S(e, t, i, a, l, f) {
      {
        var h = f;
        if (typeof a.children != typeof i.children && (typeof a.children == "string" || typeof a.children == "number")) {
          var y = "" + a.children, T = zr(h.ancestorInfo, t);
          Su(null, y, T);
        }
      }
      return cv(e, t, i, a, l);
    }
    function E(e, t) {
      return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function x(e, t) {
      return !!t.hidden;
    }
    function z(e, t, i, a) {
      {
        var l = i;
        Su(null, e, l.ancestorInfo);
      }
      var f = ld(e, t);
      return Rv(a, f), f;
    }
    var U = typeof setTimeout == "function" ? setTimeout : void 0, ye = typeof clearTimeout == "function" ? clearTimeout : void 0, Ce = -1;
    function Je(e, t, i, a) {
      bu(t, i) && e.focus();
    }
    function vt(e, t, i, a, l, f) {
      Wm(e, l), fv(e, t, i, a, l);
    }
    function sr(e) {
      $l(e, "");
    }
    function wn(e, t, i) {
      e.nodeValue = i;
    }
    function M(e, t) {
      e.appendChild(t);
    }
    function O(e, t) {
      var i;
      e.nodeType === Un ? (i = e.parentNode, i.insertBefore(t, e)) : (i = e, i.appendChild(t));
      var a = e._reactRootContainer;
      a == null && i.onclick === null && xo(i);
    }
    function I(e, t, i) {
      e.insertBefore(t, i);
    }
    function te(e, t, i) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, i) : e.insertBefore(t, i);
    }
    function fe(e, t) {
      e.removeChild(t);
    }
    function we(e, t) {
      e.nodeType === Un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Pe(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ut(e) {
      e.nodeValue = "";
    }
    function Qt(e, t) {
      e = e;
      var i = t[vd], a = i != null && i.hasOwnProperty("display") ? i.display : null;
      e.style.display = Qs("display", a);
    }
    function Xe(e, t) {
      e.nodeValue = t;
    }
    function _a(e, t, i) {
      return e.nodeType !== Or || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Fm(e, t) {
      return t === "" || e.nodeType !== Dr ? null : e;
    }
    function O1(e) {
      return e.data === oc;
    }
    function D1(e) {
      return e.data === Tu;
    }
    function iS(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Or || t === Dr)
          break;
      }
      return e;
    }
    function xv(e) {
      return iS(e.nextSibling);
    }
    function aS(e) {
      return iS(e.firstChild);
    }
    function M1(e, t, i, a, l, f) {
      Rv(f, e), Wm(e, i);
      var h;
      {
        var y = l;
        h = y.namespace;
      }
      return dv(e, t, i, h, a);
    }
    function A1(e, t, i) {
      return Rv(i, e), pv(e, t);
    }
    function N1(e) {
      for (var t = e.nextSibling, i = 0; t; ) {
        if (t.nodeType === Un) {
          var a = t.data;
          if (a === ac) {
            if (i === 0)
              return xv(t);
            i--;
          } else
            (a === Eu || a === Tu || a === oc) && i++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function oS(e) {
      for (var t = e.previousSibling, i = 0; t; ) {
        if (t.nodeType === Un) {
          var a = t.data;
          if (a === Eu || a === Tu || a === oc) {
            if (i === 0)
              return t;
            i--;
          } else
            a === ac && i++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function P1(e) {
      js(e);
    }
    function L1(e) {
      js(e);
    }
    function U1(e, t, i) {
      ud(t, i);
    }
    function z1(e, t, i, a, l) {
      t[wa] !== !0 && ud(a, l);
    }
    function H1(e, t) {
      t.nodeType === Or ? mu(e, t) : t.nodeType === Un || vv(e, t);
    }
    function j1(e, t, i, a) {
      t[wa] !== !0 && (a.nodeType === Or ? mu(i, a) : a.nodeType === Un || vv(i, a));
    }
    function I1(e, t, i) {
      hv(e, t);
    }
    function F1(e, t) {
      sd(e, t);
    }
    function V1(e, t, i, a, l) {
      t[wa] !== !0 && hv(i, a);
    }
    function $1(e, t, i, a) {
      t[wa] !== !0 && sd(i, a);
    }
    function B1(e, t, i) {
      t[wa];
    }
    var Vm = Math.random().toString(36).slice(2), md = "__reactInternalInstance$" + Vm, lS = "__reactEventHandlers$" + Vm, yd = "__reactContainere$" + Vm;
    function Rv(e, t) {
      t[md] = e;
    }
    function W1(e, t) {
      t[yd] = e;
    }
    function uS(e) {
      e[yd] = null;
    }
    function $m(e) {
      return !!e[yd];
    }
    function gd(e) {
      var t = e[md];
      if (t)
        return t;
      for (var i = e.parentNode; i; ) {
        if (t = i[yd] || i[md], t) {
          var a = t.alternate;
          if (t.child !== null || a !== null && a.child !== null)
            for (var l = oS(e); l !== null; ) {
              var f = l[md];
              if (f)
                return f;
              l = oS(l);
            }
          return t;
        }
        e = i, i = e.parentNode;
      }
      return null;
    }
    function vl(e) {
      var t = e[md] || e[yd];
      return t && (t.tag === de || t.tag === Re || t.tag === he || t.tag === be) ? t : null;
    }
    function Cu(e) {
      if (e.tag === de || e.tag === Re)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Bm(e) {
      return e[lS] || null;
    }
    function Wm(e, t) {
      e[lS] = t;
    }
    function ko(e) {
      do
        e = e.return;
      while (e && e.tag !== de);
      return e || null;
    }
    function Y1(e, t) {
      for (var i = 0, a = e; a; a = ko(a))
        i++;
      for (var l = 0, f = t; f; f = ko(f))
        l++;
      for (; i - l > 0; )
        e = ko(e), i--;
      for (; l - i > 0; )
        t = ko(t), l--;
      for (var h = i; h--; ) {
        if (e === t || e === t.alternate)
          return e;
        e = ko(e), t = ko(t);
      }
      return null;
    }
    function Q1(e, t, i) {
      for (var a = []; e; )
        a.push(e), e = ko(e);
      var l;
      for (l = a.length; l-- > 0; )
        t(a[l], "captured", i);
      for (l = 0; l < a.length; l++)
        t(a[l], "bubbled", i);
    }
    function G1(e, t, i, a, l) {
      for (var f = e && t ? Y1(e, t) : null, h = []; !(!e || e === f); ) {
        var y = e.alternate;
        if (y !== null && y === f)
          break;
        h.push(e), e = ko(e);
      }
      for (var T = []; !(!t || t === f); ) {
        var w = t.alternate;
        if (w !== null && w === f)
          break;
        T.push(t), t = ko(t);
      }
      for (var _ = 0; _ < h.length; _++)
        i(h[_], "bubbled", a);
      for (var F = T.length; F-- > 0; )
        i(T[F], "captured", l);
    }
    function X1(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function q1(e, t, i) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(i.disabled && X1(t));
        default:
          return !1;
      }
    }
    function sS(e, t) {
      var i, a = e.stateNode;
      if (!a)
        return null;
      var l = ee(a);
      if (!l || (i = l[t], q1(t, e.type, l)))
        return null;
      if (!(!i || typeof i == "function"))
        throw Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof i + "` type.");
      return i;
    }
    function K1(e, t, i) {
      var a = t.dispatchConfig.phasedRegistrationNames[i];
      return sS(e, a);
    }
    function Z1(e, t, i) {
      e || g("Dispatching inst must not be null");
      var a = K1(e, i, t);
      a && (i._dispatchListeners = so(i._dispatchListeners, a), i._dispatchInstances = so(i._dispatchInstances, e));
    }
    function J1(e) {
      e && e.dispatchConfig.phasedRegistrationNames && Q1(e._targetInst, Z1, e);
    }
    function cS(e, t, i) {
      if (e && i && i.dispatchConfig.registrationName) {
        var a = i.dispatchConfig.registrationName, l = sS(e, a);
        l && (i._dispatchListeners = so(i._dispatchListeners, l), i._dispatchInstances = so(i._dispatchInstances, e));
      }
    }
    function ex(e) {
      e && e.dispatchConfig.registrationName && cS(e._targetInst, null, e);
    }
    function lc(e) {
      rl(e, J1);
    }
    function tx(e, t, i, a) {
      G1(i, a, cS, e, t);
    }
    function nx(e) {
      rl(e, ex);
    }
    var Sd = null, Ym = null, Ed = null;
    function rx(e) {
      return Sd = e, Ym = dS(), !0;
    }
    function ix() {
      Sd = null, Ym = null, Ed = null;
    }
    function fS() {
      if (Ed)
        return Ed;
      var e, t = Ym, i = t.length, a, l = dS(), f = l.length;
      for (e = 0; e < i && t[e] === l[e]; e++)
        ;
      var h = i - e;
      for (a = 1; a <= h && t[i - a] === l[f - a]; a++)
        ;
      var y = a > 1 ? 1 - a : void 0;
      return Ed = l.slice(e, y), Ed;
    }
    function dS() {
      return "value" in Sd ? Sd.value : Sd.textContent;
    }
    var ax = 10, ox = {
      type: null,
      target: null,
      // currentTarget is set when dispatching; no use in copying it here
      currentTarget: function() {
        return null;
      },
      eventPhase: null,
      bubbles: null,
      cancelable: null,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: null,
      isTrusted: null
    };
    function wv() {
      return !0;
    }
    function xu() {
      return !1;
    }
    function Hr(e, t, i, a) {
      delete this.nativeEvent, delete this.preventDefault, delete this.stopPropagation, delete this.isDefaultPrevented, delete this.isPropagationStopped, this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = i;
      var l = this.constructor.Interface;
      for (var f in l)
        if (l.hasOwnProperty(f)) {
          delete this[f];
          var h = l[f];
          h ? this[f] = h(i) : f === "target" ? this.target = a : this[f] = i[f];
        }
      var y = i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1;
      return y ? this.isDefaultPrevented = wv : this.isDefaultPrevented = xu, this.isPropagationStopped = xu, this;
    }
    c(Hr.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = wv);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = wv);
      },
      /**
       * We release all dispatched `SyntheticEvent`s after each event loop, adding
       * them back into the pool. This allows a way to hold onto a reference that
       * won't be added back into the pool.
       */
      persist: function() {
        this.isPersistent = wv;
      },
      /**
       * Checks if this event should be released back into the pool.
       *
       * @return {boolean} True if this should not be released, false otherwise.
       */
      isPersistent: xu,
      /**
       * `PooledClass` looks for `destructor` on each instance it releases.
       */
      destructor: function() {
        var e = this.constructor.Interface;
        for (var t in e)
          Object.defineProperty(this, t, uc(t, e[t]));
        this.dispatchConfig = null, this._targetInst = null, this.nativeEvent = null, this.isDefaultPrevented = xu, this.isPropagationStopped = xu, this._dispatchListeners = null, this._dispatchInstances = null, Object.defineProperty(this, "nativeEvent", uc("nativeEvent", null)), Object.defineProperty(this, "isDefaultPrevented", uc("isDefaultPrevented", xu)), Object.defineProperty(this, "isPropagationStopped", uc("isPropagationStopped", xu)), Object.defineProperty(this, "preventDefault", uc("preventDefault", function() {
        })), Object.defineProperty(this, "stopPropagation", uc("stopPropagation", function() {
        }));
      }
    }), Hr.Interface = ox, Hr.extend = function(e) {
      var t = this, i = function() {
      };
      i.prototype = t.prototype;
      var a = new i();
      function l() {
        return t.apply(this, arguments);
      }
      return c(a, l.prototype), l.prototype = a, l.prototype.constructor = l, l.Interface = c({}, t.Interface, e), l.extend = t.extend, pS(l), l;
    }, pS(Hr);
    function uc(e, t) {
      var i = typeof t == "function";
      return {
        configurable: !0,
        set: a,
        get: l
      };
      function a(h) {
        var y = i ? "setting the method" : "setting the property";
        return f(y, "This is effectively a no-op"), h;
      }
      function l() {
        var h = i ? "accessing the method" : "accessing the property", y = i ? "This is a no-op function" : "This is set to null";
        return f(h, y), t;
      }
      function f(h, y) {
        g("This synthetic event is reused for performance reasons. If you're seeing this, you're %s `%s` on a released/nullified synthetic event. %s. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.", h, e, y);
      }
    }
    function lx(e, t, i, a) {
      var l = this;
      if (l.eventPool.length) {
        var f = l.eventPool.pop();
        return l.call(f, e, t, i, a), f;
      }
      return new l(e, t, i, a);
    }
    function ux(e) {
      var t = this;
      if (!(e instanceof t))
        throw Error("Trying to release an event instance into a pool of a different type.");
      e.destructor(), t.eventPool.length < ax && t.eventPool.push(e);
    }
    function pS(e) {
      e.eventPool = [], e.getPooled = lx, e.release = ux;
    }
    var sx = Hr.extend({
      data: null
    }), cx = Hr.extend({
      data: null
    }), fx = [9, 13, 27, 32], vS = 229, Qm = En && "CompositionEvent" in window, Td = null;
    En && "documentMode" in document && (Td = document.documentMode);
    var dx = En && "TextEvent" in window && !Td, hS = En && (!Qm || Td && Td > 8 && Td <= 11), mS = 32, yS = String.fromCharCode(mS), Oo = {
      beforeInput: {
        phasedRegistrationNames: {
          bubbled: "onBeforeInput",
          captured: "onBeforeInputCapture"
        },
        dependencies: [ki, Er, eu, Jl]
      },
      compositionEnd: {
        phasedRegistrationNames: {
          bubbled: "onCompositionEnd",
          captured: "onCompositionEndCapture"
        },
        dependencies: [Cn, ki, xn, Er, zn, Di]
      },
      compositionStart: {
        phasedRegistrationNames: {
          bubbled: "onCompositionStart",
          captured: "onCompositionStartCapture"
        },
        dependencies: [Cn, Yl, xn, Er, zn, Di]
      },
      compositionUpdate: {
        phasedRegistrationNames: {
          bubbled: "onCompositionUpdate",
          captured: "onCompositionUpdateCapture"
        },
        dependencies: [Cn, yf, xn, Er, zn, Di]
      }
    }, gS = !1;
    function px(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function vx(e) {
      switch (e) {
        case Yl:
          return Oo.compositionStart;
        case ki:
          return Oo.compositionEnd;
        case yf:
          return Oo.compositionUpdate;
      }
    }
    function hx(e, t) {
      return e === xn && t.keyCode === vS;
    }
    function SS(e, t) {
      switch (e) {
        case zn:
          return fx.indexOf(t.keyCode) !== -1;
        case xn:
          return t.keyCode !== vS;
        case Er:
        case Di:
        case Cn:
          return !0;
        default:
          return !1;
      }
    }
    function ES(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function TS(e) {
      return e.locale === "ko";
    }
    var sc = !1;
    function mx(e, t, i, a) {
      var l, f;
      if (Qm ? l = vx(e) : sc ? SS(e, i) && (l = Oo.compositionEnd) : hx(e, i) && (l = Oo.compositionStart), !l)
        return null;
      hS && !TS(i) && (!sc && l === Oo.compositionStart ? sc = rx(a) : l === Oo.compositionEnd && sc && (f = fS()));
      var h = sx.getPooled(l, t, i, a);
      if (f)
        h.data = f;
      else {
        var y = ES(i);
        y !== null && (h.data = y);
      }
      return lc(h), h;
    }
    function yx(e, t) {
      switch (e) {
        case ki:
          return ES(t);
        case Er:
          var i = t.which;
          return i !== mS ? null : (gS = !0, yS);
        case eu:
          var a = t.data;
          return a === yS && gS ? null : a;
        default:
          return null;
      }
    }
    function gx(e, t) {
      if (sc) {
        if (e === ki || !Qm && SS(e, t)) {
          var i = fS();
          return ix(), sc = !1, i;
        }
        return null;
      }
      switch (e) {
        case Jl:
          return null;
        case Er:
          if (!px(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case ki:
          return hS && !TS(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Sx(e, t, i, a) {
      var l;
      if (dx ? l = yx(e, i) : l = gx(e, i), !l)
        return null;
      var f = cx.getPooled(Oo.beforeInput, t, i, a);
      return f.data = l, lc(f), f;
    }
    var Ex = {
      eventTypes: Oo,
      extractEvents: function(e, t, i, a, l) {
        var f = mx(e, t, i, a), h = Sx(e, t, i, a);
        return f === null ? h : h === null ? f : [f, h];
      }
    }, Tx = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function bS(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Tx[e.type] : t === "textarea";
    }
    var CS = {
      change: {
        phasedRegistrationNames: {
          bubbled: "onChange",
          captured: "onChangeCapture"
        },
        dependencies: [Cn, oa, Wl, Sr, ql, xn, zn, ca]
      }
    };
    function xS(e, t, i) {
      var a = Hr.getPooled(CS.change, e, t, i);
      return a.type = "change", Tn(i), lc(a), a;
    }
    var bd = null, Cd = null;
    function bx(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function Cx(e) {
      var t = xS(Cd, e, ru(e));
      mr(xx, t);
    }
    function xx(e) {
      Ms(e);
    }
    function _v(e) {
      var t = Cu(e);
      if (is(t))
        return e;
    }
    function Rx(e, t) {
      if (e === oa)
        return t;
    }
    var Gm = !1;
    En && (Gm = iu("input") && (!document.documentMode || document.documentMode > 9));
    function wx(e, t) {
      bd = e, Cd = t, bd.attachEvent("onpropertychange", wS);
    }
    function RS() {
      bd && (bd.detachEvent("onpropertychange", wS), bd = null, Cd = null);
    }
    function wS(e) {
      e.propertyName === "value" && _v(Cd) && Cx(e);
    }
    function _x(e, t, i) {
      e === Sr ? (RS(), wx(t, i)) : e === Cn && RS();
    }
    function kx(e, t) {
      if (e === ca || e === zn || e === xn)
        return _v(Cd);
    }
    function Ox(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Dx(e, t) {
      if (e === Wl)
        return _v(t);
    }
    function Mx(e, t) {
      if (e === ql || e === oa)
        return _v(t);
    }
    function Ax(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Hl(e, "number", e.value);
    }
    var Nx = {
      eventTypes: CS,
      _isInputEventSupported: Gm,
      extractEvents: function(e, t, i, a, l) {
        var f = t ? Cu(t) : window, h, y;
        if (bx(f) ? h = Rx : bS(f) ? Gm ? h = Mx : (h = kx, y = _x) : Ox(f) && (h = Dx), h) {
          var T = h(e, t);
          if (T) {
            var w = xS(T, i, a);
            return w;
          }
        }
        y && y(e, f, t), e === Cn && Ax(f);
      }
    }, xd = Hr.extend({
      view: null,
      detail: null
    }), Px = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Lx(e) {
      var t = this, i = t.nativeEvent;
      if (i.getModifierState)
        return i.getModifierState(e);
      var a = Px[e];
      return a ? !!i[a] : !1;
    }
    function Xm(e) {
      return Lx;
    }
    var _S = 0, kS = 0, OS = !1, DS = !1, Rd = xd.extend({
      screenX: null,
      screenY: null,
      clientX: null,
      clientY: null,
      pageX: null,
      pageY: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      getModifierState: Xm,
      button: null,
      buttons: null,
      relatedTarget: function(e) {
        return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
      },
      movementX: function(e) {
        if ("movementX" in e)
          return e.movementX;
        var t = _S;
        return _S = e.screenX, OS ? e.type === "mousemove" ? e.screenX - t : 0 : (OS = !0, 0);
      },
      movementY: function(e) {
        if ("movementY" in e)
          return e.movementY;
        var t = kS;
        return kS = e.screenY, DS ? e.type === "mousemove" ? e.screenY - t : 0 : (DS = !0, 0);
      }
    }), MS = Rd.extend({
      pointerId: null,
      width: null,
      height: null,
      pressure: null,
      tangentialPressure: null,
      tiltX: null,
      tiltY: null,
      twist: null,
      pointerType: null,
      isPrimary: null
    }), wd = {
      mouseEnter: {
        registrationName: "onMouseEnter",
        dependencies: [ua, Mi]
      },
      mouseLeave: {
        registrationName: "onMouseLeave",
        dependencies: [ua, Mi]
      },
      pointerEnter: {
        registrationName: "onPointerEnter",
        dependencies: [rr, ft]
      },
      pointerLeave: {
        registrationName: "onPointerLeave",
        dependencies: [rr, ft]
      }
    }, Ux = {
      eventTypes: wd,
      /**
       * For almost every interaction we care about, there will be both a top-level
       * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
       * we do not extract duplicate events. However, moving the mouse into the
       * browser from outside will not fire a `mouseout` event. In this case, we use
       * the `mouseover` top-level event.
       */
      extractEvents: function(e, t, i, a, l) {
        var f = e === Mi || e === ft, h = e === ua || e === rr;
        if (f && !(l & Va) && (i.relatedTarget || i.fromElement) || !h && !f)
          return null;
        var y;
        if (a.window === a)
          y = a;
        else {
          var T = a.ownerDocument;
          T ? y = T.defaultView || T.parentWindow : y = window;
        }
        var w, _;
        if (h) {
          w = t;
          var F = i.relatedTarget || i.toElement;
          if (_ = F ? gd(F) : null, _ !== null) {
            var A = Gn(_);
            (_ !== A || _.tag !== de && _.tag !== Re) && (_ = null);
          }
        } else
          w = null, _ = t;
        if (w === _)
          return null;
        var V, se, pe, Le;
        e === ua || e === Mi ? (V = Rd, se = wd.mouseLeave, pe = wd.mouseEnter, Le = "mouse") : (e === rr || e === ft) && (V = MS, se = wd.pointerLeave, pe = wd.pointerEnter, Le = "pointer");
        var je = w == null ? y : Cu(w), Ct = _ == null ? y : Cu(_), et = V.getPooled(se, w, i, a);
        et.type = Le + "leave", et.target = je, et.relatedTarget = Ct;
        var Nt = V.getPooled(pe, _, i, a);
        return Nt.type = Le + "enter", Nt.target = Ct, Nt.relatedTarget = je, tx(et, Nt, w, _), l & $a ? [et, Nt] : [et];
      }
    };
    function zx(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ru = typeof Object.is == "function" ? Object.is : zx, Hx = Object.prototype.hasOwnProperty;
    function _d(e, t) {
      if (Ru(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var i = Object.keys(e), a = Object.keys(t);
      if (i.length !== a.length)
        return !1;
      for (var l = 0; l < i.length; l++)
        if (!Hx.call(t, i[l]) || !Ru(e[i[l]], t[i[l]]))
          return !1;
      return !0;
    }
    var jx = En && "documentMode" in document && document.documentMode <= 11, AS = {
      select: {
        phasedRegistrationNames: {
          bubbled: "onSelect",
          captured: "onSelectCapture"
        },
        dependencies: [Cn, Ql, Gl, Sr, xn, zn, Di, Zl, ca]
      }
    }, cc = null, qm = null, kd = null, Km = !1;
    function Ix(e) {
      if ("selectionStart" in e && gu(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, i = t.getSelection();
      return {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      };
    }
    function NS(e) {
      return e.window === e ? e.document : e.nodeType === ra ? e : e.ownerDocument;
    }
    function PS(e, t) {
      var i = NS(t);
      if (Km || cc == null || cc !== yu(i))
        return null;
      var a = Ix(cc);
      if (!kd || !_d(kd, a)) {
        kd = a;
        var l = Hr.getPooled(AS.select, qm, e, t);
        return l.type = "select", l.target = cc, lc(l), l;
      }
      return null;
    }
    var Fx = {
      eventTypes: AS,
      extractEvents: function(e, t, i, a, l, f) {
        var h = f || NS(a);
        if (!h || !ol("onSelect", h))
          return null;
        var y = t ? Cu(t) : window;
        switch (e) {
          case Sr:
            (bS(y) || y.contentEditable === "true") && (cc = y, qm = t, kd = null);
            break;
          case Cn:
            cc = null, qm = null, kd = null;
            break;
          case Di:
            Km = !0;
            break;
          case Ql:
          case Zl:
          case Gl:
            return Km = !1, PS(i, a);
          case ca:
            if (jx)
              break;
          case xn:
          case zn:
            return PS(i, a);
        }
        return null;
      }
    }, Vx = Hr.extend({
      animationName: null,
      elapsedTime: null,
      pseudoElement: null
    }), $x = Hr.extend({
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Bx = xd.extend({
      relatedTarget: null
    });
    function kv(e) {
      var t, i = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && i === 13 && (t = 13)) : t = i, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    var Wx = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Yx = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Qx(e) {
      if (e.key) {
        var t = Wx[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var i = kv(e);
        return i === 13 ? "Enter" : String.fromCharCode(i);
      }
      return e.type === "keydown" || e.type === "keyup" ? Yx[e.keyCode] || "Unidentified" : "";
    }
    var Gx = xd.extend({
      key: Qx,
      location: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      repeat: null,
      locale: null,
      getModifierState: Xm,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? kv(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? kv(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Xx = Rd.extend({
      dataTransfer: null
    }), qx = xd.extend({
      touches: null,
      targetTouches: null,
      changedTouches: null,
      altKey: null,
      metaKey: null,
      ctrlKey: null,
      shiftKey: null,
      getModifierState: Xm
    }), Kx = Hr.extend({
      propertyName: null,
      elapsedTime: null,
      pseudoElement: null
    }), Zx = Rd.extend({
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: null,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: null
    }), Jx = [vf, ms, to, no, Ko, gs, oo, Cf, xf, nr, ql, ai, la, Rf, wf, Ss, _f, kf, Of, oi, vn, cn, sa, On, bs, lo, Zo, Af, Jo, ws, _s], eR = {
      // simpleEventPluginEventTypes gets populated from
      // the DOMEventProperties module.
      eventTypes: Xf,
      extractEvents: function(e, t, i, a, l) {
        var f = Fs.get(e);
        if (!f)
          return null;
        var h;
        switch (e) {
          case Er:
            if (kv(i) === 0)
              return null;
          case xn:
          case zn:
            h = Gx;
            break;
          case Cn:
          case Sr:
            h = Bx;
            break;
          case Wl:
            if (i.button === 2)
              return null;
          case ro:
          case Ef:
          case Di:
          case Kl:
          case Zl:
          case ua:
          case Mi:
          case Ql:
            h = Rd;
            break;
          case Pp:
          case Gl:
          case io:
          case Tf:
          case Xl:
          case bf:
          case ys:
          case ao:
            h = Xx;
            break;
          case Cs:
          case xs:
          case Rs:
          case Nf:
            h = qx;
            break;
          case Np:
          case hf:
          case mf:
            h = Vx;
            break;
          case tu:
            h = Kx;
            break;
          case li:
            h = xd;
            break;
          case Pf:
            h = Zx;
            break;
          case gf:
          case Sf:
          case Jl:
            h = $x;
            break;
          case Oi:
          case Es:
          case Df:
          case Mf:
          case Ts:
          case rr:
          case ft:
          case Bt:
            h = MS;
            break;
          default:
            Jx.indexOf(e) === -1 && g("SimpleEventPlugin: Unhandled event type, `%s`. This warning is likely caused by a bug in React. Please file an issue.", e), h = Hr;
            break;
        }
        var y = h.getPooled(f, t, i, a);
        return lc(y), y;
      }
    }, tR = ["ResponderEventPlugin", "SimpleEventPlugin", "EnterLeaveEventPlugin", "ChangeEventPlugin", "SelectEventPlugin", "BeforeInputEventPlugin"];
    Fa(tR), Ue(Bm, vl, Cu), qr({
      SimpleEventPlugin: eR,
      EnterLeaveEventPlugin: Ux,
      ChangeEventPlugin: Nx,
      SelectEventPlugin: Fx,
      BeforeInputEventPlugin: Ex
    });
    var LS = "⚛", nR = "⛔", qn = typeof performance < "u" && typeof performance.mark == "function" && typeof performance.clearMarks == "function" && typeof performance.measure == "function" && typeof performance.clearMeasures == "function", wu = null, ka = null, _u = null, Ov = !1, Dv = !1, Zm = !1, Od = 0, Oa = 0, Mv = /* @__PURE__ */ new Set(), Jm = function(e) {
      return LS + " " + e;
    }, rR = function(e, t) {
      var i = t ? nR + " " : LS + " ", a = t ? " Warning: " + t : "";
      return "" + i + e + a;
    }, fc = function(e) {
      performance.mark(Jm(e));
    }, iR = function(e) {
      performance.clearMarks(Jm(e));
    }, dc = function(e, t, i) {
      var a = Jm(t), l = rR(e, i);
      try {
        performance.measure(l, a);
      } catch {
      }
      performance.clearMarks(a), performance.clearMeasures(l);
    }, ey = function(e, t) {
      return e + " (#" + t + ")";
    }, ty = function(e, t, i) {
      return i === null ? e + " [" + (t ? "update" : "mount") + "]" : e + "." + i;
    }, ny = function(e, t) {
      var i = me(e.type) || "Unknown", a = e._debugID, l = e.alternate !== null, f = ty(i, l, t);
      if (Ov && Mv.has(f))
        return !1;
      Mv.add(f);
      var h = ey(f, a);
      return fc(h), !0;
    }, US = function(e, t) {
      var i = me(e.type) || "Unknown", a = e._debugID, l = e.alternate !== null, f = ty(i, l, t), h = ey(f, a);
      iR(h);
    }, Av = function(e, t, i) {
      var a = me(e.type) || "Unknown", l = e._debugID, f = e.alternate !== null, h = ty(a, f, t), y = ey(h, l);
      dc(h, y, i);
    }, Nv = function(e) {
      switch (e.tag) {
        case be:
        case de:
        case Re:
        case De:
        case st:
        case q:
        case Ge:
        case Ze:
          return !0;
        default:
          return !1;
      }
    }, aR = function() {
      ka !== null && _u !== null && US(_u, ka), _u = null, ka = null, Zm = !1;
    }, oR = function() {
      for (var e = wu; e; )
        e._debugIsCurrentlyTiming && Av(e, null, null), e = e.return;
    }, zS = function(e) {
      e.return !== null && zS(e.return), e._debugIsCurrentlyTiming && ny(e, null);
    }, lR = function() {
      wu !== null && zS(wu);
    };
    function Pv() {
      Oa++;
    }
    function uR() {
      Ov && (Dv = !0), ka !== null && ka !== "componentWillMount" && ka !== "componentWillReceiveProps" && (Zm = !0);
    }
    function HS(e) {
      {
        if (!qn || Nv(e) || (wu = e, !ny(e, null)))
          return;
        e._debugIsCurrentlyTiming = !0;
      }
    }
    function jS(e) {
      {
        if (!qn || Nv(e))
          return;
        e._debugIsCurrentlyTiming = !1, US(e, null);
      }
    }
    function IS(e) {
      {
        if (!qn || Nv(e) || (wu = e.return, !e._debugIsCurrentlyTiming))
          return;
        e._debugIsCurrentlyTiming = !1, Av(e, null, null);
      }
    }
    function sR(e) {
      {
        if (!qn || Nv(e) || (wu = e.return, !e._debugIsCurrentlyTiming))
          return;
        e._debugIsCurrentlyTiming = !1;
        var t = e.tag === he ? "Rendering was suspended" : "An error was thrown inside this error boundary";
        Av(e, null, t);
      }
    }
    function Da(e, t) {
      {
        if (!qn || (aR(), !ny(e, t)))
          return;
        _u = e, ka = t;
      }
    }
    function Ma() {
      {
        if (!qn)
          return;
        if (ka !== null && _u !== null) {
          var e = Zm ? "Scheduled a cascading update" : null;
          Av(_u, ka, e);
        }
        ka = null, _u = null;
      }
    }
    function FS(e) {
      {
        if (wu = e, !qn)
          return;
        Od = 0, fc("(React Tree Reconciliation)"), lR();
      }
    }
    function VS(e, t) {
      {
        if (!qn)
          return;
        var i = null;
        if (e !== null)
          if (e.tag === be)
            i = "A top-level update interrupted the previous render";
          else {
            var a = me(e.type) || "Unknown";
            i = "An update to " + a + " interrupted the previous render";
          }
        else
          Od > 1 && (i = "There were cascading updates");
        Od = 0;
        var l = t ? "(React Tree Reconciliation: Completed Root)" : "(React Tree Reconciliation: Yielded)";
        oR(), dc(l, "(React Tree Reconciliation)", i);
      }
    }
    function cR() {
      {
        if (!qn)
          return;
        Ov = !0, Dv = !1, Mv.clear(), fc("(Committing Changes)");
      }
    }
    function fR() {
      {
        if (!qn)
          return;
        var e = null;
        Dv ? e = "Lifecycle hook scheduled a cascading update" : Od > 0 && (e = "Caused by a cascading update in earlier commit"), Dv = !1, Od++, Ov = !1, Mv.clear(), dc("(Committing Changes)", "(Committing Changes)", e);
      }
    }
    function $S() {
      {
        if (!qn)
          return;
        Oa = 0, fc("(Committing Snapshot Effects)");
      }
    }
    function BS() {
      {
        if (!qn)
          return;
        var e = Oa;
        Oa = 0, dc("(Committing Snapshot Effects: " + e + " Total)", "(Committing Snapshot Effects)", null);
      }
    }
    function WS() {
      {
        if (!qn)
          return;
        Oa = 0, fc("(Committing Host Effects)");
      }
    }
    function YS() {
      {
        if (!qn)
          return;
        var e = Oa;
        Oa = 0, dc("(Committing Host Effects: " + e + " Total)", "(Committing Host Effects)", null);
      }
    }
    function QS() {
      {
        if (!qn)
          return;
        Oa = 0, fc("(Calling Lifecycle Methods)");
      }
    }
    function GS() {
      {
        if (!qn)
          return;
        var e = Oa;
        Oa = 0, dc("(Calling Lifecycle Methods: " + e + " Total)", "(Calling Lifecycle Methods)", null);
      }
    }
    var ry = [], Lv;
    Lv = [];
    var Do = -1;
    function ku(e) {
      return {
        current: e
      };
    }
    function cr(e, t) {
      if (Do < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Lv[Do] && g("Unexpected Fiber popped."), e.current = ry[Do], ry[Do] = null, Lv[Do] = null, Do--;
    }
    function fr(e, t, i) {
      Do++, ry[Do] = e.current, Lv[Do] = i, e.current = t;
    }
    var iy;
    iy = {};
    var jr = {};
    Object.freeze(jr);
    var Mo = ku(jr), Aa = ku(!1), ay = jr;
    function pc(e, t, i) {
      return i && Na(t) ? ay : Mo.current;
    }
    function XS(e, t, i) {
      {
        var a = e.stateNode;
        a.__reactInternalMemoizedUnmaskedChildContext = t, a.__reactInternalMemoizedMaskedChildContext = i;
      }
    }
    function vc(e, t) {
      {
        var i = e.type, a = i.contextTypes;
        if (!a)
          return jr;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var f = {};
        for (var h in a)
          f[h] = t[h];
        {
          var y = me(i) || "Unknown";
          d(a, f, "context", y, qe);
        }
        return l && XS(e, t, f), f;
      }
    }
    function Uv() {
      return Aa.current;
    }
    function Na(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function zv(e) {
      cr(Aa, e), cr(Mo, e);
    }
    function oy(e) {
      cr(Aa, e), cr(Mo, e);
    }
    function qS(e, t, i) {
      {
        if (Mo.current !== jr)
          throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        fr(Mo, t, e), fr(Aa, i, e);
      }
    }
    function KS(e, t, i) {
      {
        var a = e.stateNode, l = t.childContextTypes;
        if (typeof a.getChildContext != "function") {
          {
            var f = me(t) || "Unknown";
            iy[f] || (iy[f] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", f, f));
          }
          return i;
        }
        var h;
        Da(e, "getChildContext"), h = a.getChildContext(), Ma();
        for (var y in h)
          if (!(y in l))
            throw Error((me(t) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var T = me(t) || "Unknown";
          d(
            l,
            h,
            "child context",
            T,
            // In practice, there is one case in which we won't get a stack. It's when
            // somebody calls unstable_renderSubtreeIntoContainer() and we process
            // context from the parent component instance. The stack will be missing
            // because it's outside of the reconciliation, and so the pointer has not
            // been set. This is rare and doesn't matter. We'll also remove that API.
            qe
          );
        }
        return c({}, i, {}, h);
      }
    }
    function Hv(e) {
      {
        var t = e.stateNode, i = t && t.__reactInternalMemoizedMergedChildContext || jr;
        return ay = Mo.current, fr(Mo, i, e), fr(Aa, Aa.current, e), !0;
      }
    }
    function ZS(e, t, i) {
      {
        var a = e.stateNode;
        if (!a)
          throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (i) {
          var l = KS(e, t, ay);
          a.__reactInternalMemoizedMergedChildContext = l, cr(Aa, e), cr(Mo, e), fr(Mo, l, e), fr(Aa, i, e);
        } else
          cr(Aa, e), fr(Aa, i, e);
      }
    }
    function dR(e) {
      {
        if (!(pa(e) && e.tag === Z))
          throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case be:
              return t.stateNode.context;
            case Z: {
              var i = t.type;
              if (Na(i))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var JS = 0, pR = 1, vR = 2, hR = p.unstable_runWithPriority, ly = p.unstable_scheduleCallback, eE = p.unstable_cancelCallback, mR = p.unstable_shouldYield, tE = p.unstable_requestPaint, uy = p.unstable_now, yR = p.unstable_getCurrentPriorityLevel, jv = p.unstable_ImmediatePriority, nE = p.unstable_UserBlockingPriority, rE = p.unstable_NormalPriority, iE = p.unstable_LowPriority, aE = p.unstable_IdlePriority;
    if (!(m.__interactionsRef != null && m.__interactionsRef.current != null))
      throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at http://fb.me/react-profiling");
    var oE = {}, dr = 99, hl = 98, Ui = 97, sy = 96, Dd = 95, hc = 90, gR = mR, SR = (
      // Fall back gracefully if we're running an older version of Scheduler.
      tE !== void 0 ? tE : function() {
      }
    ), Ao = null, Iv = null, cy = !1, lE = uy(), Ir = lE < 1e4 ? uy : function() {
      return uy() - lE;
    };
    function mc() {
      switch (yR()) {
        case jv:
          return dr;
        case nE:
          return hl;
        case rE:
          return Ui;
        case iE:
          return sy;
        case aE:
          return Dd;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function uE(e) {
      switch (e) {
        case dr:
          return jv;
        case hl:
          return nE;
        case Ui:
          return rE;
        case sy:
          return iE;
        case Dd:
          return aE;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function No(e, t) {
      var i = uE(e);
      return hR(i, t);
    }
    function Md(e, t, i) {
      var a = uE(e);
      return ly(a, t, i);
    }
    function sE(e) {
      return Ao === null ? (Ao = [e], Iv = ly(jv, cE)) : Ao.push(e), oE;
    }
    function ER(e) {
      e !== oE && eE(e);
    }
    function Pa() {
      if (Iv !== null) {
        var e = Iv;
        Iv = null, eE(e);
      }
      cE();
    }
    function cE() {
      if (!cy && Ao !== null) {
        cy = !0;
        var e = 0;
        try {
          var t = !0, i = Ao;
          No(dr, function() {
            for (; e < i.length; e++) {
              var a = i[e];
              do
                a = a(t);
              while (a !== null);
            }
          }), Ao = null;
        } catch (a) {
          throw Ao !== null && (Ao = Ao.slice(e + 1)), ly(jv, Pa), a;
        } finally {
          cy = !1;
        }
      }
    }
    var Hn = 0, nn = 1, di = 2, yc = 4, La = 8, Ad = 1073741823, Te = 0, Ua = 1, Ou = 2, fE = 3, pt = Ad, dE = pt - 1, Fv = 10, Vv = dE - 1;
    function fy(e) {
      return Vv - (e / Fv | 0);
    }
    function Du(e) {
      return (Vv - e) * Fv;
    }
    function TR(e, t) {
      return ((e / t | 0) + 1) * t;
    }
    function dy(e, t, i) {
      return Vv - TR(Vv - e + t / Fv, i / Fv);
    }
    var Nd = 5e3, py = 250;
    function bR(e) {
      return dy(e, Nd, py);
    }
    function CR(e, t) {
      return dy(e, t, py);
    }
    var pE = 500, vE = 100;
    function hE(e) {
      return dy(e, pE, vE);
    }
    function mE(e, t) {
      if (t === pt)
        return dr;
      if (t === Ua || t === Ou)
        return Dd;
      var i = Du(t) - Du(e);
      return i <= 0 ? dr : i <= pE + vE ? hl : i <= Nd + py ? Ui : Dd;
    }
    var zi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var xR = function(e) {
        for (var t = null, i = e; i !== null; )
          i.mode & nn && (t = i), i = i.return;
        return t;
      }, Mu = function(e) {
        var t = [];
        return e.forEach(function(i) {
          t.push(i);
        }), t.sort().join(", ");
      }, Pd = [], Ld = [], Ud = [], zd = [], Hd = [], jd = [], Au = /* @__PURE__ */ new Set();
      zi.recordUnsafeLifecycleWarnings = function(e, t) {
        Au.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Pd.push(e), e.mode & nn && typeof t.UNSAFE_componentWillMount == "function" && Ld.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ud.push(e), e.mode & nn && typeof t.UNSAFE_componentWillReceiveProps == "function" && zd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Hd.push(e), e.mode & nn && typeof t.UNSAFE_componentWillUpdate == "function" && jd.push(e));
      }, zi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Pd.length > 0 && (Pd.forEach(function(A) {
          e.add(me(A.type) || "Component"), Au.add(A.type);
        }), Pd = []);
        var t = /* @__PURE__ */ new Set();
        Ld.length > 0 && (Ld.forEach(function(A) {
          t.add(me(A.type) || "Component"), Au.add(A.type);
        }), Ld = []);
        var i = /* @__PURE__ */ new Set();
        Ud.length > 0 && (Ud.forEach(function(A) {
          i.add(me(A.type) || "Component"), Au.add(A.type);
        }), Ud = []);
        var a = /* @__PURE__ */ new Set();
        zd.length > 0 && (zd.forEach(function(A) {
          a.add(me(A.type) || "Component"), Au.add(A.type);
        }), zd = []);
        var l = /* @__PURE__ */ new Set();
        Hd.length > 0 && (Hd.forEach(function(A) {
          l.add(me(A.type) || "Component"), Au.add(A.type);
        }), Hd = []);
        var f = /* @__PURE__ */ new Set();
        if (jd.length > 0 && (jd.forEach(function(A) {
          f.add(me(A.type) || "Component"), Au.add(A.type);
        }), jd = []), t.size > 0) {
          var h = Mu(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, h);
        }
        if (a.size > 0) {
          var y = Mu(a);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state

Please update the following components: %s`, y);
        }
        if (f.size > 0) {
          var T = Mu(f);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, T);
        }
        if (e.size > 0) {
          var w = Mu(e);
          C(`componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
        if (i.size > 0) {
          var _ = Mu(i);
          C(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
        if (l.size > 0) {
          var F = Mu(l);
          C(`componentWillUpdate has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, F);
        }
      };
      var $v = /* @__PURE__ */ new Map(), yE = /* @__PURE__ */ new Set();
      zi.recordLegacyContextWarning = function(e, t) {
        var i = xR(e);
        if (i === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!yE.has(e.type)) {
          var a = $v.get(i);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], $v.set(i, a)), a.push(e));
        }
      }, zi.flushLegacyContextWarning = function() {
        $v.forEach(function(e, t) {
          if (e.length !== 0) {
            var i = e[0], a = /* @__PURE__ */ new Set();
            e.forEach(function(h) {
              a.add(me(h.type) || "Component"), yE.add(h.type);
            });
            var l = Mu(a), f = kn(i);
            g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://fb.me/react-legacy-context%s`, l, f);
          }
        });
      }, zi.discardPendingWarnings = function() {
        Pd = [], Ld = [], Ud = [], zd = [], Hd = [], jd = [], $v = /* @__PURE__ */ new Map();
      };
    }
    var pi = null, gc = null, RR = function(e) {
      pi = e;
    };
    function Sc(e) {
      {
        if (pi === null)
          return e;
        var t = pi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function vy(e) {
      return Sc(e);
    }
    function hy(e) {
      {
        if (pi === null)
          return e;
        var t = pi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var i = Sc(e.render);
            if (e.render !== i) {
              var a = {
                $$typeof: qa,
                render: i
              };
              return e.displayName !== void 0 && (a.displayName = e.displayName), a;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function gE(e, t) {
      {
        if (pi === null)
          return !1;
        var i = e.elementType, a = t.type, l = !1, f = typeof a == "object" && a !== null ? a.$$typeof : null;
        switch (e.tag) {
          case Z: {
            typeof a == "function" && (l = !0);
            break;
          }
          case xe: {
            (typeof a == "function" || f === ta) && (l = !0);
            break;
          }
          case oe: {
            (f === qa || f === ta) && (l = !0);
            break;
          }
          case Ye:
          case tt: {
            (f === Vo || f === ta) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var h = pi(i);
          if (h !== void 0 && h === pi(a))
            return !0;
        }
        return !1;
      }
    }
    function SE(e) {
      {
        if (pi === null || typeof WeakSet != "function")
          return;
        gc === null && (gc = /* @__PURE__ */ new WeakSet()), gc.add(e);
      }
    }
    var wR = function(e, t) {
      {
        if (pi === null)
          return;
        var i = t.staleFamilies, a = t.updatedFamilies;
        bl(), $T(function() {
          my(e.current, a, i);
        });
      }
    }, _R = function(e, t) {
      {
        if (e.context !== jr)
          return;
        bl(), Jw(function() {
          ip(t, e, null, null);
        });
      }
    };
    function my(e, t, i) {
      {
        var a = e.alternate, l = e.child, f = e.sibling, h = e.tag, y = e.type, T = null;
        switch (h) {
          case xe:
          case tt:
          case Z:
            T = y;
            break;
          case oe:
            T = y.render;
            break;
        }
        if (pi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var w = !1, _ = !1;
        if (T !== null) {
          var F = pi(T);
          F !== void 0 && (i.has(F) ? _ = !0 : t.has(F) && (h === Z ? _ = !0 : w = !0));
        }
        gc !== null && (gc.has(e) || a !== null && gc.has(a)) && (_ = !0), _ && (e._debugNeedsRemount = !0), (_ || w) && yi(e, pt), l !== null && !_ && my(l, t, i), f !== null && my(f, t, i);
      }
    }
    var kR = function(e, t) {
      {
        var i = /* @__PURE__ */ new Set(), a = new Set(t.map(function(l) {
          return l.current;
        }));
        return yy(e.current, a, i), i;
      }
    };
    function yy(e, t, i) {
      {
        var a = e.child, l = e.sibling, f = e.tag, h = e.type, y = null;
        switch (f) {
          case xe:
          case tt:
          case Z:
            y = h;
            break;
          case oe:
            y = h.render;
            break;
        }
        var T = !1;
        y !== null && t.has(y) && (T = !0), T ? OR(e, i) : a !== null && yy(a, t, i), l !== null && yy(l, t, i);
      }
    }
    function OR(e, t) {
      {
        var i = DR(e, t);
        if (i)
          return;
        for (var a = e; ; ) {
          switch (a.tag) {
            case de:
              t.add(a.stateNode);
              return;
            case De:
              t.add(a.stateNode.containerInfo);
              return;
            case be:
              t.add(a.stateNode.containerInfo);
              return;
          }
          if (a.return === null)
            throw new Error("Expected to reach root first.");
          a = a.return;
        }
      }
    }
    function DR(e, t) {
      for (var i = e, a = !1; ; ) {
        if (i.tag === de)
          a = !0, t.add(i.stateNode);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return a;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return a;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      return !1;
    }
    function Hi(e, t) {
      if (e && e.defaultProps) {
        var i = c({}, t), a = e.defaultProps;
        for (var l in a)
          i[l] === void 0 && (i[l] = a[l]);
        return i;
      }
      return t;
    }
    function MR(e) {
      if (Ep(e), e._status !== Ka)
        throw e._result;
      return e._result;
    }
    var gy = ku(null), Sy;
    Sy = {};
    var Bv = null, Ec = null, Wv = null, Yv = !1;
    function Qv() {
      Bv = null, Ec = null, Wv = null, Yv = !1;
    }
    function EE() {
      Yv = !0;
    }
    function TE() {
      Yv = !1;
    }
    function bE(e, t) {
      var i = e.type._context;
      fr(gy, i._currentValue, e), i._currentValue = t, i._currentRenderer !== void 0 && i._currentRenderer !== null && i._currentRenderer !== Sy && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), i._currentRenderer = Sy;
    }
    function Ey(e) {
      var t = gy.current;
      cr(gy, e);
      var i = e.type._context;
      i._currentValue = t;
    }
    function AR(e, t, i) {
      if (Ru(i, t))
        return 0;
      var a = typeof e._calculateChangedBits == "function" ? e._calculateChangedBits(i, t) : Ad;
      return (a & Ad) !== a && g("calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s", a), a | 0;
    }
    function CE(e, t) {
      for (var i = e; i !== null; ) {
        var a = i.alternate;
        if (i.childExpirationTime < t)
          i.childExpirationTime = t, a !== null && a.childExpirationTime < t && (a.childExpirationTime = t);
        else if (a !== null && a.childExpirationTime < t)
          a.childExpirationTime = t;
        else
          break;
        i = i.return;
      }
    }
    function NR(e, t, i, a) {
      var l = e.child;
      for (l !== null && (l.return = e); l !== null; ) {
        var f = void 0, h = l.dependencies;
        if (h !== null) {
          f = l.child;
          for (var y = h.firstContext; y !== null; ) {
            if (y.context === t && y.observedBits & i) {
              if (l.tag === Z) {
                var T = ml(a, null);
                T.tag = Gv, yl(l, T);
              }
              l.expirationTime < a && (l.expirationTime = a);
              var w = l.alternate;
              w !== null && w.expirationTime < a && (w.expirationTime = a), CE(l.return, a), h.expirationTime < a && (h.expirationTime = a);
              break;
            }
            y = y.next;
          }
        } else
          l.tag === q ? f = l.type === e.type ? null : l.child : f = l.child;
        if (f !== null)
          f.return = l;
        else
          for (f = l; f !== null; ) {
            if (f === e) {
              f = null;
              break;
            }
            var _ = f.sibling;
            if (_ !== null) {
              _.return = f.return, f = _;
              break;
            }
            f = f.return;
          }
        l = f;
      }
    }
    function Tc(e, t) {
      Bv = e, Ec = null, Wv = null;
      var i = e.dependencies;
      if (i !== null) {
        var a = i.firstContext;
        a !== null && (i.expirationTime >= t && Rg(), i.firstContext = null);
      }
    }
    function gn(e, t) {
      if (Yv && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Wv !== e) {
        if (!(t === !1 || t === 0)) {
          var i;
          typeof t != "number" || t === Ad ? (Wv = e, i = Ad) : i = t;
          var a = {
            context: e,
            observedBits: i,
            next: null
          };
          if (Ec === null) {
            if (Bv === null)
              throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            Ec = a, Bv.dependencies = {
              expirationTime: Te,
              firstContext: a,
              responders: null
            };
          } else
            Ec = Ec.next = a;
        }
      }
      return e._currentValue;
    }
    var xE = 0, RE = 1, Gv = 2, Ty = 3, Xv = !1, by, qv;
    by = !1, qv = null;
    function Cy(e) {
      var t = {
        baseState: e.memoizedState,
        baseQueue: null,
        shared: {
          pending: null
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function xy(e, t) {
      var i = t.updateQueue, a = e.updateQueue;
      if (i === a) {
        var l = {
          baseState: a.baseState,
          baseQueue: a.baseQueue,
          shared: a.shared,
          effects: a.effects
        };
        t.updateQueue = l;
      }
    }
    function ml(e, t) {
      var i = {
        expirationTime: e,
        suspenseConfig: t,
        tag: xE,
        payload: null,
        callback: null,
        next: null
      };
      return i.next = i, i.priority = mc(), i;
    }
    function yl(e, t) {
      var i = e.updateQueue;
      if (i !== null) {
        var a = i.shared, l = a.pending;
        l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, qv === a && !by && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), by = !0);
      }
    }
    function wE(e, t) {
      var i = e.alternate;
      i !== null && xy(i, e);
      var a = e.updateQueue, l = a.baseQueue;
      l === null ? (a.baseQueue = t.next = t, t.next = t) : (t.next = l.next, l.next = t);
    }
    function PR(e, t, i, a, l, f) {
      switch (i.tag) {
        case RE: {
          var h = i.payload;
          if (typeof h == "function") {
            EE(), e.mode & nn && h.call(f, a, l);
            var y = h.call(f, a, l);
            return TE(), y;
          }
          return h;
        }
        case Ty:
          e.effectTag = e.effectTag & ~Qn | Ot;
        case xE: {
          var T = i.payload, w;
          return typeof T == "function" ? (EE(), e.mode & nn && T.call(f, a, l), w = T.call(f, a, l), TE()) : w = T, w == null ? a : c({}, a, w);
        }
        case Gv:
          return Xv = !0, a;
      }
      return a;
    }
    function Id(e, t, i, a) {
      var l = e.updateQueue;
      Xv = !1, qv = l.shared;
      var f = l.baseQueue, h = l.shared.pending;
      if (h !== null) {
        if (f !== null) {
          var y = f.next, T = h.next;
          f.next = T, h.next = y;
        }
        f = h, l.shared.pending = null;
        var w = e.alternate;
        if (w !== null) {
          var _ = w.updateQueue;
          _ !== null && (_.baseQueue = h);
        }
      }
      if (f !== null) {
        var F = f.next, A = l.baseState, V = Te, se = null, pe = null, Le = null;
        if (F !== null) {
          var je = F;
          do {
            var Ct = je.expirationTime;
            if (Ct < a) {
              var et = {
                expirationTime: je.expirationTime,
                suspenseConfig: je.suspenseConfig,
                tag: je.tag,
                payload: je.payload,
                callback: je.callback,
                next: null
              };
              Le === null ? (pe = Le = et, se = A) : Le = Le.next = et, Ct > V && (V = Ct);
            } else {
              if (Le !== null) {
                var Nt = {
                  expirationTime: pt,
                  // This update is going to be committed so we never want uncommit it.
                  suspenseConfig: je.suspenseConfig,
                  tag: je.tag,
                  payload: je.payload,
                  callback: je.callback,
                  next: null
                };
                Le = Le.next = Nt;
              }
              QT(Ct, je.suspenseConfig), A = PR(e, l, je, A, t, i);
              var H = je.callback;
              if (H !== null) {
                e.effectTag |= zf;
                var B = l.effects;
                B === null ? l.effects = [je] : B.push(je);
              }
            }
            if (je = je.next, je === null || je === F) {
              if (h = l.shared.pending, h === null)
                break;
              je = f.next = h.next, h.next = F, l.baseQueue = f = h, l.shared.pending = null;
            }
          } while (!0);
        }
        Le === null ? se = A : Le.next = pe, l.baseState = se, l.baseQueue = Le, Hh(V), e.expirationTime = V, e.memoizedState = A;
      }
      qv = null;
    }
    function LR(e, t) {
      if (typeof e != "function")
        throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + e);
      e.call(t);
    }
    function _E() {
      Xv = !1;
    }
    function Kv() {
      return Xv;
    }
    function kE(e, t, i) {
      var a = t.effects;
      if (t.effects = null, a !== null)
        for (var l = 0; l < a.length; l++) {
          var f = a[l], h = f.callback;
          h !== null && (f.callback = null, LR(h, i));
        }
    }
    var UR = b.ReactCurrentBatchConfig;
    function Fd() {
      return UR.suspense;
    }
    var Ry = {}, zR = Array.isArray, OE = new u.Component().refs, wy, _y, ky, Oy, Dy, DE, Zv, My, Ay, Ny;
    {
      wy = /* @__PURE__ */ new Set(), _y = /* @__PURE__ */ new Set(), ky = /* @__PURE__ */ new Set(), Oy = /* @__PURE__ */ new Set(), My = /* @__PURE__ */ new Set(), Dy = /* @__PURE__ */ new Set(), Ay = /* @__PURE__ */ new Set(), Ny = /* @__PURE__ */ new Set();
      var ME = /* @__PURE__ */ new Set();
      Zv = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var i = t + "_" + e;
          ME.has(i) || (ME.add(i), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, DE = function(e, t) {
        if (t === void 0) {
          var i = me(e) || "Component";
          Dy.has(i) || (Dy.add(i), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      }, Object.defineProperty(Ry, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Ry);
    }
    function Jv(e, t, i, a) {
      var l = e.memoizedState;
      e.mode & nn && i(a, l);
      var f = i(a, l);
      DE(t, f);
      var h = f == null ? l : c({}, l, f);
      if (e.memoizedState = h, e.expirationTime === Te) {
        var y = e.updateQueue;
        y.baseState = h;
      }
    }
    var Py = {
      isMounted: va,
      enqueueSetState: function(e, t, i) {
        var a = Ai(e), l = ja(), f = Fd(), h = Fu(l, a, f), y = ml(h, f);
        y.payload = t, i != null && (Zv(i, "setState"), y.callback = i), yl(a, y), yi(a, h);
      },
      enqueueReplaceState: function(e, t, i) {
        var a = Ai(e), l = ja(), f = Fd(), h = Fu(l, a, f), y = ml(h, f);
        y.tag = RE, y.payload = t, i != null && (Zv(i, "replaceState"), y.callback = i), yl(a, y), yi(a, h);
      },
      enqueueForceUpdate: function(e, t) {
        var i = Ai(e), a = ja(), l = Fd(), f = Fu(a, i, l), h = ml(f, l);
        h.tag = Gv, t != null && (Zv(t, "forceUpdate"), h.callback = t), yl(i, h), yi(i, f);
      }
    };
    function AE(e, t, i, a, l, f, h) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        e.mode & nn && y.shouldComponentUpdate(a, f, h), Da(e, "shouldComponentUpdate");
        var T = y.shouldComponentUpdate(a, f, h);
        return Ma(), T === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", me(t) || "Component"), T;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !_d(i, a) || !_d(l, f) : !0;
    }
    function HR(e, t, i) {
      var a = e.stateNode;
      {
        var l = me(t) || "Component", f = a.render;
        f || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), a.getInitialState && !a.getInitialState.isReactClassApproved && !a.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), a.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), a.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), a.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !Ay.has(t) && (Ay.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof a.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof a.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", me(t) || "A pure component"), typeof a.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof a.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof a.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof a.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var h = a.props !== i;
        a.props !== void 0 && h && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), a.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof a.getSnapshotBeforeUpdate == "function" && typeof a.componentDidUpdate != "function" && !ky.has(t) && (ky.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", me(t))), typeof a.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof a.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var y = a.state;
        y && (typeof y != "object" || zR(y)) && g("%s.state: must be set to an object or null", l), typeof a.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function NE(e, t) {
      t.updater = Py, e.stateNode = t, Up(t, e), t._reactInternalInstance = Ry;
    }
    function PE(e, t, i) {
      var a = !1, l = jr, f = jr, h = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          h === null || h !== void 0 && h.$$typeof === Xa && h._context === void 0
        );
        if (!y && !Ny.has(t)) {
          Ny.add(t);
          var T = "";
          h === void 0 ? T = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof h != "object" ? T = " However, it is set to a " + typeof h + "." : h.$$typeof === Ga ? T = " Did you accidentally pass the Context.Provider instead?" : h._context !== void 0 ? T = " Did you accidentally pass the Context.Consumer instead?" : T = " However, it is set to an object with keys {" + Object.keys(h).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", me(t) || "Component", T);
        }
      }
      if (typeof h == "object" && h !== null)
        f = gn(h);
      else {
        l = pc(e, t, !0);
        var w = t.contextTypes;
        a = w != null, f = a ? vc(e, l) : jr;
      }
      e.mode & nn && new t(i, f);
      var _ = new t(i, f), F = e.memoizedState = _.state !== null && _.state !== void 0 ? _.state : null;
      NE(e, _);
      {
        if (typeof t.getDerivedStateFromProps == "function" && F === null) {
          var A = me(t) || "Component";
          _y.has(A) || (_y.add(A), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", A, _.state === null ? "null" : "undefined", A));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof _.getSnapshotBeforeUpdate == "function") {
          var V = null, se = null, pe = null;
          if (typeof _.componentWillMount == "function" && _.componentWillMount.__suppressDeprecationWarning !== !0 ? V = "componentWillMount" : typeof _.UNSAFE_componentWillMount == "function" && (V = "UNSAFE_componentWillMount"), typeof _.componentWillReceiveProps == "function" && _.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? se = "componentWillReceiveProps" : typeof _.UNSAFE_componentWillReceiveProps == "function" && (se = "UNSAFE_componentWillReceiveProps"), typeof _.componentWillUpdate == "function" && _.componentWillUpdate.__suppressDeprecationWarning !== !0 ? pe = "componentWillUpdate" : typeof _.UNSAFE_componentWillUpdate == "function" && (pe = "UNSAFE_componentWillUpdate"), V !== null || se !== null || pe !== null) {
            var Le = me(t) || "Component", je = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Oy.has(Le) || (Oy.add(Le), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-unsafe-component-lifecycles`, Le, je, V !== null ? `
  ` + V : "", se !== null ? `
  ` + se : "", pe !== null ? `
  ` + pe : ""));
          }
        }
      }
      return a && XS(e, l, f), _;
    }
    function jR(e, t) {
      Da(e, "componentWillMount");
      var i = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), Ma(), i !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", me(e.type) || "Component"), Py.enqueueReplaceState(t, t.state, null));
    }
    function LE(e, t, i, a) {
      var l = t.state;
      if (Da(e, "componentWillReceiveProps"), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, a), Ma(), t.state !== l) {
        {
          var f = me(e.type) || "Component";
          wy.has(f) || (wy.add(f), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", f));
        }
        Py.enqueueReplaceState(t, t.state, null);
      }
    }
    function Ly(e, t, i, a) {
      HR(e, t, i);
      var l = e.stateNode;
      l.props = i, l.state = e.memoizedState, l.refs = OE, Cy(e);
      var f = t.contextType;
      if (typeof f == "object" && f !== null)
        l.context = gn(f);
      else {
        var h = pc(e, t, !0);
        l.context = vc(e, h);
      }
      {
        if (l.state === i) {
          var y = me(t) || "Component";
          My.has(y) || (My.add(y), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & nn && zi.recordLegacyContextWarning(e, l), zi.recordUnsafeLifecycleWarnings(e, l);
      }
      Id(e, i, l, a), l.state = e.memoizedState;
      var T = t.getDerivedStateFromProps;
      typeof T == "function" && (Jv(e, t, T, i), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (jR(e, l), Id(e, i, l, a), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.effectTag |= dt);
    }
    function IR(e, t, i, a) {
      var l = e.stateNode, f = e.memoizedProps;
      l.props = f;
      var h = l.context, y = t.contextType, T = jr;
      if (typeof y == "object" && y !== null)
        T = gn(y);
      else {
        var w = pc(e, t, !0);
        T = vc(e, w);
      }
      var _ = t.getDerivedStateFromProps, F = typeof _ == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !F && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (f !== i || h !== T) && LE(e, l, i, T), _E();
      var A = e.memoizedState, V = l.state = A;
      if (Id(e, i, l, a), V = e.memoizedState, f === i && A === V && !Uv() && !Kv())
        return typeof l.componentDidMount == "function" && (e.effectTag |= dt), !1;
      typeof _ == "function" && (Jv(e, t, _, i), V = e.memoizedState);
      var se = Kv() || AE(e, t, f, i, A, V, T);
      return se ? (!F && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Da(e, "componentWillMount"), typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), Ma()), typeof l.componentDidMount == "function" && (e.effectTag |= dt)) : (typeof l.componentDidMount == "function" && (e.effectTag |= dt), e.memoizedProps = i, e.memoizedState = V), l.props = i, l.state = V, l.context = T, se;
    }
    function FR(e, t, i, a, l) {
      var f = t.stateNode;
      xy(e, t);
      var h = t.memoizedProps;
      f.props = t.type === t.elementType ? h : Hi(t.type, h);
      var y = f.context, T = i.contextType, w = jr;
      if (typeof T == "object" && T !== null)
        w = gn(T);
      else {
        var _ = pc(t, i, !0);
        w = vc(t, _);
      }
      var F = i.getDerivedStateFromProps, A = typeof F == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      !A && (typeof f.UNSAFE_componentWillReceiveProps == "function" || typeof f.componentWillReceiveProps == "function") && (h !== a || y !== w) && LE(t, f, a, w), _E();
      var V = t.memoizedState, se = f.state = V;
      if (Id(t, a, f, l), se = t.memoizedState, h === a && V === se && !Uv() && !Kv())
        return typeof f.componentDidUpdate == "function" && (h !== e.memoizedProps || V !== e.memoizedState) && (t.effectTag |= dt), typeof f.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || V !== e.memoizedState) && (t.effectTag |= fa), !1;
      typeof F == "function" && (Jv(t, i, F, a), se = t.memoizedState);
      var pe = Kv() || AE(t, i, h, a, V, se, w);
      return pe ? (!A && (typeof f.UNSAFE_componentWillUpdate == "function" || typeof f.componentWillUpdate == "function") && (Da(t, "componentWillUpdate"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate(a, se, w), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(a, se, w), Ma()), typeof f.componentDidUpdate == "function" && (t.effectTag |= dt), typeof f.getSnapshotBeforeUpdate == "function" && (t.effectTag |= fa)) : (typeof f.componentDidUpdate == "function" && (h !== e.memoizedProps || V !== e.memoizedState) && (t.effectTag |= dt), typeof f.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || V !== e.memoizedState) && (t.effectTag |= fa), t.memoizedProps = a, t.memoizedState = se), f.props = a, f.state = se, f.context = w, pe;
    }
    var Uy, zy, Hy, jy, Iy, UE = function(e) {
    };
    Uy = !1, zy = !1, Hy = {}, jy = {}, Iy = {}, UE = function(e) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var t = 'Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.' + qe();
        jy[t] || (jy[t] = !0, g('Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.'));
      }
    };
    var eh = Array.isArray;
    function Vd(e, t, i) {
      var a = i.ref;
      if (a !== null && typeof a != "function" && typeof a != "object") {
        if ((e.mode & nn || er) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(i._owner && i._self && i._owner.stateNode !== i._self)) {
          var l = me(e.type) || "Component";
          Hy[l] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref%s', a, kn(e)), Hy[l] = !0);
        }
        if (i._owner) {
          var f = i._owner, h;
          if (f) {
            var y = f;
            if (y.tag !== Z)
              throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref");
            h = y.stateNode;
          }
          if (!h)
            throw Error("Missing owner for string ref " + a + ". This error is likely caused by a bug in React. Please file an issue.");
          var T = "" + a;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === T)
            return t.ref;
          var w = function(_) {
            var F = h.refs;
            F === OE && (F = h.refs = {}), _ === null ? delete F[T] : F[T] = _;
          };
          return w._stringRef = T, w;
        } else {
          if (typeof a != "string")
            throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!i._owner)
            throw Error("Element ref was specified as a string (" + a + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://fb.me/react-refs-must-have-owner for more information.`);
        }
      }
      return a;
    }
    function th(e, t) {
      if (e.type !== "textarea") {
        var i = "";
        throw i = " If you meant to render a collection of children, use an array instead." + qe(), Error("Objects are not valid as a React child (found: " + (Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t) + ")." + i);
      }
    }
    function nh() {
      {
        var e = "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it." + qe();
        if (Iy[e])
          return;
        Iy[e] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function zE(e) {
      function t(H, B) {
        if (e) {
          var L = H.lastEffect;
          L !== null ? (L.nextEffect = B, H.lastEffect = B) : H.firstEffect = H.lastEffect = B, B.nextEffect = null, B.effectTag = uo;
        }
      }
      function i(H, B) {
        if (!e)
          return null;
        for (var L = B; L !== null; )
          t(H, L), L = L.sibling;
        return null;
      }
      function a(H, B) {
        for (var L = /* @__PURE__ */ new Map(), ce = B; ce !== null; )
          ce.key !== null ? L.set(ce.key, ce) : L.set(ce.index, ce), ce = ce.sibling;
        return L;
      }
      function l(H, B) {
        var L = Yu(H, B);
        return L.index = 0, L.sibling = null, L;
      }
      function f(H, B, L) {
        if (H.index = L, !e)
          return B;
        var ce = H.alternate;
        if (ce !== null) {
          var le = ce.index;
          return le < B ? (H.effectTag = on, B) : le;
        } else
          return H.effectTag = on, B;
      }
      function h(H) {
        return e && H.alternate === null && (H.effectTag = on), H;
      }
      function y(H, B, L, ce) {
        if (B === null || B.tag !== Re) {
          var le = e0(L, H.mode, ce);
          return le.return = H, le;
        } else {
          var ge = l(B, L);
          return ge.return = H, ge;
        }
      }
      function T(H, B, L, ce) {
        if (B !== null && (B.elementType === L.type || // Keep this check inline so it only runs on the false path:
        gE(B, L))) {
          var le = l(B, L.props);
          return le.ref = Vd(H, B, L), le.return = H, le._debugSource = L._source, le._debugOwner = L._owner, le;
        }
        var ge = Jg(L, H.mode, ce);
        return ge.ref = Vd(H, B, L), ge.return = H, ge;
      }
      function w(H, B, L, ce) {
        if (B === null || B.tag !== De || B.stateNode.containerInfo !== L.containerInfo || B.stateNode.implementation !== L.implementation) {
          var le = t0(L, H.mode, ce);
          return le.return = H, le;
        } else {
          var ge = l(B, L.children || []);
          return ge.return = H, ge;
        }
      }
      function _(H, B, L, ce, le) {
        if (B === null || B.tag !== st) {
          var ge = xl(L, H.mode, ce, le);
          return ge.return = H, ge;
        } else {
          var it = l(B, L);
          return it.return = H, it;
        }
      }
      function F(H, B, L) {
        if (typeof B == "string" || typeof B == "number") {
          var ce = e0("" + B, H.mode, L);
          return ce.return = H, ce;
        }
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case Qa: {
              var le = Jg(B, H.mode, L);
              return le.ref = Vd(H, null, B), le.return = H, le;
            }
            case _n: {
              var ge = t0(B, H.mode, L);
              return ge.return = H, ge;
            }
          }
          if (eh(B) || ei(B)) {
            var it = xl(B, H.mode, L, null);
            return it.return = H, it;
          }
          th(H, B);
        }
        return typeof B == "function" && nh(), null;
      }
      function A(H, B, L, ce) {
        var le = B !== null ? B.key : null;
        if (typeof L == "string" || typeof L == "number")
          return le !== null ? null : y(H, B, "" + L, ce);
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case Qa:
              return L.key === le ? L.type === Bn ? _(H, B, L.props.children, ce, le) : T(H, B, L, ce) : null;
            case _n:
              return L.key === le ? w(H, B, L, ce) : null;
          }
          if (eh(L) || ei(L))
            return le !== null ? null : _(H, B, L, ce, null);
          th(H, L);
        }
        return typeof L == "function" && nh(), null;
      }
      function V(H, B, L, ce, le) {
        if (typeof ce == "string" || typeof ce == "number") {
          var ge = H.get(L) || null;
          return y(B, ge, "" + ce, le);
        }
        if (typeof ce == "object" && ce !== null) {
          switch (ce.$$typeof) {
            case Qa: {
              var it = H.get(ce.key === null ? L : ce.key) || null;
              return ce.type === Bn ? _(B, it, ce.props.children, le, ce.key) : T(B, it, ce, le);
            }
            case _n: {
              var ht = H.get(ce.key === null ? L : ce.key) || null;
              return w(B, ht, ce, le);
            }
          }
          if (eh(ce) || ei(ce)) {
            var Mt = H.get(L) || null;
            return _(B, Mt, ce, le, null);
          }
          th(B, ce);
        }
        return typeof ce == "function" && nh(), null;
      }
      function se(H, B) {
        {
          if (typeof H != "object" || H === null)
            return B;
          switch (H.$$typeof) {
            case Qa:
            case _n:
              UE(H);
              var L = H.key;
              if (typeof L != "string")
                break;
              if (B === null) {
                B = /* @__PURE__ */ new Set(), B.add(L);
                break;
              }
              if (!B.has(L)) {
                B.add(L);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", L);
              break;
          }
        }
        return B;
      }
      function pe(H, B, L, ce) {
        for (var le = null, ge = 0; ge < L.length; ge++) {
          var it = L[ge];
          le = se(it, le);
        }
        for (var ht = null, Mt = null, mt = B, xt = 0, yt = 0, Gt = null; mt !== null && yt < L.length; yt++) {
          mt.index > yt ? (Gt = mt, mt = null) : Gt = mt.sibling;
          var dn = A(H, mt, L[yt], ce);
          if (dn === null) {
            mt === null && (mt = Gt);
            break;
          }
          e && mt && dn.alternate === null && t(H, mt), xt = f(dn, xt, yt), Mt === null ? ht = dn : Mt.sibling = dn, Mt = dn, mt = Gt;
        }
        if (yt === L.length)
          return i(H, mt), ht;
        if (mt === null) {
          for (; yt < L.length; yt++) {
            var pn = F(H, L[yt], ce);
            pn !== null && (xt = f(pn, xt, yt), Mt === null ? ht = pn : Mt.sibling = pn, Mt = pn);
          }
          return ht;
        }
        for (var Zn = a(H, mt); yt < L.length; yt++) {
          var Ft = V(Zn, H, yt, L[yt], ce);
          Ft !== null && (e && Ft.alternate !== null && Zn.delete(Ft.key === null ? yt : Ft.key), xt = f(Ft, xt, yt), Mt === null ? ht = Ft : Mt.sibling = Ft, Mt = Ft);
        }
        return e && Zn.forEach(function(pr) {
          return t(H, pr);
        }), ht;
      }
      function Le(H, B, L, ce) {
        var le = ei(L);
        if (typeof le != "function")
          throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          L[Symbol.toStringTag] === "Generator" && (zy || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), zy = !0), L.entries === le && (Uy || g("Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead."), Uy = !0);
          var ge = le.call(L);
          if (ge)
            for (var it = null, ht = ge.next(); !ht.done; ht = ge.next()) {
              var Mt = ht.value;
              it = se(Mt, it);
            }
        }
        var mt = le.call(L);
        if (mt == null)
          throw Error("An iterable object provided no iterator.");
        for (var xt = null, yt = null, Gt = B, dn = 0, pn = 0, Zn = null, Ft = mt.next(); Gt !== null && !Ft.done; pn++, Ft = mt.next()) {
          Gt.index > pn ? (Zn = Gt, Gt = null) : Zn = Gt.sibling;
          var pr = A(H, Gt, Ft.value, ce);
          if (pr === null) {
            Gt === null && (Gt = Zn);
            break;
          }
          e && Gt && pr.alternate === null && t(H, Gt), dn = f(pr, dn, pn), yt === null ? xt = pr : yt.sibling = pr, yt = pr, Gt = Zn;
        }
        if (Ft.done)
          return i(H, Gt), xt;
        if (Gt === null) {
          for (; !Ft.done; pn++, Ft = mt.next()) {
            var Vi = F(H, Ft.value, ce);
            Vi !== null && (dn = f(Vi, dn, pn), yt === null ? xt = Vi : yt.sibling = Vi, yt = Vi);
          }
          return xt;
        }
        for (var u0 = a(H, Gt); !Ft.done; pn++, Ft = mt.next()) {
          var Rl = V(u0, H, pn, Ft.value, ce);
          Rl !== null && (e && Rl.alternate !== null && u0.delete(Rl.key === null ? pn : Rl.key), dn = f(Rl, dn, pn), yt === null ? xt = Rl : yt.sibling = Rl, yt = Rl);
        }
        return e && u0.forEach(function(Rk) {
          return t(H, Rk);
        }), xt;
      }
      function je(H, B, L, ce) {
        if (B !== null && B.tag === Re) {
          i(H, B.sibling);
          var le = l(B, L);
          return le.return = H, le;
        }
        i(H, B);
        var ge = e0(L, H.mode, ce);
        return ge.return = H, ge;
      }
      function Ct(H, B, L, ce) {
        for (var le = L.key, ge = B; ge !== null; ) {
          if (ge.key === le) {
            switch (ge.tag) {
              case st: {
                if (L.type === Bn) {
                  i(H, ge.sibling);
                  var it = l(ge, L.props.children);
                  return it.return = H, it._debugSource = L._source, it._debugOwner = L._owner, it;
                }
                break;
              }
              case nt:
              default: {
                if (ge.elementType === L.type || // Keep this check inline so it only runs on the false path:
                gE(ge, L)) {
                  i(H, ge.sibling);
                  var ht = l(ge, L.props);
                  return ht.ref = Vd(H, ge, L), ht.return = H, ht._debugSource = L._source, ht._debugOwner = L._owner, ht;
                }
                break;
              }
            }
            i(H, ge);
            break;
          } else
            t(H, ge);
          ge = ge.sibling;
        }
        if (L.type === Bn) {
          var Mt = xl(L.props.children, H.mode, ce, L.key);
          return Mt.return = H, Mt;
        } else {
          var mt = Jg(L, H.mode, ce);
          return mt.ref = Vd(H, B, L), mt.return = H, mt;
        }
      }
      function et(H, B, L, ce) {
        for (var le = L.key, ge = B; ge !== null; ) {
          if (ge.key === le)
            if (ge.tag === De && ge.stateNode.containerInfo === L.containerInfo && ge.stateNode.implementation === L.implementation) {
              i(H, ge.sibling);
              var it = l(ge, L.children || []);
              return it.return = H, it;
            } else {
              i(H, ge);
              break;
            }
          else
            t(H, ge);
          ge = ge.sibling;
        }
        var ht = t0(L, H.mode, ce);
        return ht.return = H, ht;
      }
      function Nt(H, B, L, ce) {
        var le = typeof L == "object" && L !== null && L.type === Bn && L.key === null;
        le && (L = L.props.children);
        var ge = typeof L == "object" && L !== null;
        if (ge)
          switch (L.$$typeof) {
            case Qa:
              return h(Ct(H, B, L, ce));
            case _n:
              return h(et(H, B, L, ce));
          }
        if (typeof L == "string" || typeof L == "number")
          return h(je(H, B, "" + L, ce));
        if (eh(L))
          return pe(H, B, L, ce);
        if (ei(L))
          return Le(H, B, L, ce);
        if (ge && th(H, L), typeof L == "function" && nh(), typeof L > "u" && !le)
          switch (H.tag) {
            case Z: {
              var it = H.stateNode;
              if (it.render._isMockFunction)
                break;
            }
            case xe: {
              var ht = H.type;
              throw Error((ht.displayName || ht.name || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
            }
          }
        return i(H, B);
      }
      return Nt;
    }
    var bc = zE(!0), Fy = zE(!1);
    function VR(e, t) {
      if (!(e === null || t.child === e.child))
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var i = t.child, a = Yu(i, i.pendingProps);
        for (t.child = a, a.return = t; i.sibling !== null; )
          i = i.sibling, a = a.sibling = Yu(i, i.pendingProps), a.return = t;
        a.sibling = null;
      }
    }
    function $R(e, t) {
      for (var i = e.child; i !== null; )
        Y_(i, t), i = i.sibling;
    }
    var $d = {}, gl = ku($d), Bd = ku($d), rh = ku($d);
    function ih(e) {
      if (e === $d)
        throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function HE() {
      var e = ih(rh.current);
      return e;
    }
    function Vy(e, t) {
      fr(rh, t, e), fr(Bd, e, e), fr(gl, $d, e);
      var i = Im(t);
      cr(gl, e), fr(gl, i, e);
    }
    function Cc(e) {
      cr(gl, e), cr(Bd, e), cr(rh, e);
    }
    function $y() {
      var e = ih(gl.current);
      return e;
    }
    function jE(e) {
      ih(rh.current);
      var t = ih(gl.current), i = Cv(t, e.type);
      t !== i && (fr(Bd, e, e), fr(gl, i, e));
    }
    function By(e) {
      Bd.current === e && (cr(gl, e), cr(Bd, e));
    }
    var BR = 0, IE = 1, Wy = 1, Wd = 2, ji = ku(BR);
    function ah(e, t) {
      return (e & t) !== 0;
    }
    function Yd(e) {
      return e & IE;
    }
    function Yy(e, t) {
      return e & IE | t;
    }
    function WR(e, t) {
      return e | t;
    }
    function Nu(e, t) {
      fr(ji, t, e);
    }
    function xc(e) {
      cr(ji, e);
    }
    function YR(e, t) {
      var i = e.memoizedState;
      if (i !== null)
        return i.dehydrated !== null;
      var a = e.memoizedProps;
      return a.fallback === void 0 ? !1 : a.unstable_avoidThisFallback !== !0 ? !0 : !t;
    }
    function oh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === he) {
          var i = t.memoizedState;
          if (i !== null) {
            var a = i.dehydrated;
            if (a === null || O1(a) || D1(a))
              return t;
          }
        } else if (t.tag === en && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.effectTag & Ot) !== bt;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function Pu(e, t) {
      var i = {
        responder: e,
        props: t
      };
      return Object.freeze(i), i;
    }
    var Rc = (
      /* */
      1
    ), wc = (
      /*    */
      2
    ), lh = (
      /*   */
      4
    ), Se = b.ReactCurrentDispatcher, vi = b.ReactCurrentBatchConfig, Qy;
    Qy = /* @__PURE__ */ new Set();
    var Sl = Te, ln = null, Kn = null, jn = null, uh = !1, QR = 25, J = null, hi = null, El = -1, Gy = !1;
    function It() {
      {
        var e = J;
        hi === null ? hi = [e] : hi.push(e);
      }
    }
    function _e() {
      {
        var e = J;
        hi !== null && (El++, hi[El] !== e && GR(e));
      }
    }
    function Qd(e) {
      e != null && !Array.isArray(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", J, typeof e);
    }
    function GR(e) {
      {
        var t = me(ln.type);
        if (!Qy.has(t) && (Qy.add(t), hi !== null)) {
          for (var i = "", a = 30, l = 0; l <= El; l++) {
            for (var f = hi[l], h = l === El ? e : f, y = l + 1 + ". " + f; y.length < a; )
              y += " ";
            y += h + `
`, i += y;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://fb.me/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, i);
        }
      }
    }
    function Fr() {
      throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Xy(e, t) {
      if (Gy)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", J), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, J, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var i = 0; i < t.length && i < e.length; i++)
        if (!Ru(e[i], t[i]))
          return !1;
      return !0;
    }
    function _c(e, t, i, a, l, f) {
      Sl = f, ln = t, hi = e !== null ? e._debugHookTypes : null, El = -1, Gy = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.expirationTime = Te, e !== null && e.memoizedState !== null ? Se.current = KE : hi !== null ? Se.current = qE : Se.current = XE;
      var h = i(a, l);
      if (t.expirationTime === Sl) {
        var y = 0;
        do {
          if (t.expirationTime = Te, !(y < QR))
            throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, Gy = !1, Kn = null, jn = null, t.updateQueue = null, El = -1, Se.current = ZE, h = i(a, l);
        } while (t.expirationTime === Sl);
      }
      Se.current = gh, t._debugHookTypes = hi;
      var T = Kn !== null && Kn.next !== null;
      if (Sl = Te, ln = null, Kn = null, jn = null, J = null, hi = null, El = -1, uh = !1, T)
        throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return h;
    }
    function FE(e, t, i) {
      t.updateQueue = e.updateQueue, t.effectTag &= ~(da | dt), e.expirationTime <= i && (e.expirationTime = Te);
    }
    function VE() {
      if (Se.current = gh, uh)
        for (var e = ln.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
      Sl = Te, ln = null, Kn = null, jn = null, hi = null, El = -1, J = null, uh = !1;
    }
    function kc() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return jn === null ? ln.memoizedState = jn = e : jn = jn.next = e, jn;
    }
    function Oc() {
      var e;
      if (Kn === null) {
        var t = ln.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Kn.next;
      var i;
      if (jn === null ? i = ln.memoizedState : i = jn.next, i !== null)
        jn = i, i = jn.next, Kn = e;
      else {
        if (e === null)
          throw Error("Rendered more hooks than during the previous render.");
        Kn = e;
        var a = {
          memoizedState: Kn.memoizedState,
          baseState: Kn.baseState,
          baseQueue: Kn.baseQueue,
          queue: Kn.queue,
          next: null
        };
        jn === null ? ln.memoizedState = jn = a : jn = jn.next = a;
      }
      return jn;
    }
    function XR() {
      return {
        lastEffect: null
      };
    }
    function qy(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ky(e, t, i) {
      var a = kc(), l;
      i !== void 0 ? l = i(t) : l = t, a.memoizedState = a.baseState = l;
      var f = a.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      }, h = f.dispatch = GE.bind(null, ln, f);
      return [a.memoizedState, h];
    }
    function Zy(e, t, i) {
      var a = Oc(), l = a.queue;
      if (l === null)
        throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var f = Kn, h = f.baseQueue, y = l.pending;
      if (y !== null) {
        if (h !== null) {
          var T = h.next, w = y.next;
          h.next = w, y.next = T;
        }
        f.baseQueue = h = y, l.pending = null;
      }
      if (h !== null) {
        var _ = h.next, F = f.baseState, A = null, V = null, se = null, pe = _;
        do {
          var Le = pe.expirationTime;
          if (Le < Sl) {
            var je = {
              expirationTime: pe.expirationTime,
              suspenseConfig: pe.suspenseConfig,
              action: pe.action,
              eagerReducer: pe.eagerReducer,
              eagerState: pe.eagerState,
              next: null
            };
            se === null ? (V = se = je, A = F) : se = se.next = je, Le > ln.expirationTime && (ln.expirationTime = Le, Hh(Le));
          } else {
            if (se !== null) {
              var Ct = {
                expirationTime: pt,
                // This update is going to be committed so we never want uncommit it.
                suspenseConfig: pe.suspenseConfig,
                action: pe.action,
                eagerReducer: pe.eagerReducer,
                eagerState: pe.eagerState,
                next: null
              };
              se = se.next = Ct;
            }
            if (QT(Le, pe.suspenseConfig), pe.eagerReducer === e)
              F = pe.eagerState;
            else {
              var et = pe.action;
              F = e(F, et);
            }
          }
          pe = pe.next;
        } while (pe !== null && pe !== _);
        se === null ? A = F : se.next = V, Ru(F, a.memoizedState) || Rg(), a.memoizedState = F, a.baseState = A, a.baseQueue = se, l.lastRenderedState = F;
      }
      var Nt = l.dispatch;
      return [a.memoizedState, Nt];
    }
    function Jy(e, t, i) {
      var a = Oc(), l = a.queue;
      if (l === null)
        throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var f = l.dispatch, h = l.pending, y = a.memoizedState;
      if (h !== null) {
        l.pending = null;
        var T = h.next, w = T;
        do {
          var _ = w.action;
          y = e(y, _), w = w.next;
        } while (w !== T);
        Ru(y, a.memoizedState) || Rg(), a.memoizedState = y, a.baseQueue === null && (a.baseState = y), l.lastRenderedState = y;
      }
      return [y, f];
    }
    function Gd(e) {
      var t = kc();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var i = t.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: qy,
        lastRenderedState: e
      }, a = i.dispatch = GE.bind(null, ln, i);
      return [t.memoizedState, a];
    }
    function sh(e) {
      return Zy(qy);
    }
    function ch(e) {
      return Jy(qy);
    }
    function eg(e, t, i, a) {
      var l = {
        tag: e,
        create: t,
        destroy: i,
        deps: a,
        // Circular
        next: null
      }, f = ln.updateQueue;
      if (f === null)
        f = XR(), ln.updateQueue = f, f.lastEffect = l.next = l;
      else {
        var h = f.lastEffect;
        if (h === null)
          f.lastEffect = l.next = l;
        else {
          var y = h.next;
          h.next = l, l.next = y, f.lastEffect = l;
        }
      }
      return l;
    }
    function tg(e) {
      var t = kc(), i = {
        current: e
      };
      return Object.seal(i), t.memoizedState = i, i;
    }
    function fh(e) {
      var t = Oc();
      return t.memoizedState;
    }
    function ng(e, t, i, a) {
      var l = kc(), f = a === void 0 ? null : a;
      ln.effectTag |= e, l.memoizedState = eg(Rc | t, i, void 0, f);
    }
    function rg(e, t, i, a) {
      var l = Oc(), f = a === void 0 ? null : a, h = void 0;
      if (Kn !== null) {
        var y = Kn.memoizedState;
        if (h = y.destroy, f !== null) {
          var T = y.deps;
          if (Xy(f, T)) {
            eg(t, i, h, f);
            return;
          }
        }
      }
      ln.effectTag |= e, l.memoizedState = eg(Rc | t, i, h, f);
    }
    function dh(e, t) {
      return typeof jest < "u" && tb(ln), ng(dt | da, lh, e, t);
    }
    function Dc(e, t) {
      return typeof jest < "u" && tb(ln), rg(dt | da, lh, e, t);
    }
    function ig(e, t) {
      return ng(dt, wc, e, t);
    }
    function ph(e, t) {
      return rg(dt, wc, e, t);
    }
    function $E(e, t) {
      if (typeof t == "function") {
        var i = t, a = e();
        return i(a), function() {
          i(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var f = e();
        return l.current = f, function() {
          l.current = null;
        };
      }
    }
    function ag(e, t, i) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = i != null ? i.concat([e]) : null;
      return ng(dt, wc, $E.bind(null, t, e), a);
    }
    function vh(e, t, i) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = i != null ? i.concat([e]) : null;
      return rg(dt, wc, $E.bind(null, t, e), a);
    }
    function qR(e, t) {
    }
    var hh = qR;
    function mh(e, t) {
      var i = kc(), a = t === void 0 ? null : t;
      return i.memoizedState = [e, a], e;
    }
    function Mc(e, t) {
      var i = Oc(), a = t === void 0 ? null : t, l = i.memoizedState;
      if (l !== null && a !== null) {
        var f = l[1];
        if (Xy(a, f))
          return l[0];
      }
      return i.memoizedState = [e, a], e;
    }
    function og(e, t) {
      var i = kc(), a = t === void 0 ? null : t, l = e();
      return i.memoizedState = [l, a], l;
    }
    function yh(e, t) {
      var i = Oc(), a = t === void 0 ? null : t, l = i.memoizedState;
      if (l !== null && a !== null) {
        var f = l[1];
        if (Xy(a, f))
          return l[0];
      }
      var h = e();
      return i.memoizedState = [h, a], h;
    }
    function lg(e, t) {
      var i = Gd(e), a = i[0], l = i[1];
      return dh(function() {
        var f = vi.suspense;
        vi.suspense = t === void 0 ? null : t;
        try {
          l(e);
        } finally {
          vi.suspense = f;
        }
      }, [e, t]), a;
    }
    function BE(e, t) {
      var i = sh(), a = i[0], l = i[1];
      return Dc(function() {
        var f = vi.suspense;
        vi.suspense = t === void 0 ? null : t;
        try {
          l(e);
        } finally {
          vi.suspense = f;
        }
      }, [e, t]), a;
    }
    function WE(e, t) {
      var i = ch(), a = i[0], l = i[1];
      return Dc(function() {
        var f = vi.suspense;
        vi.suspense = t === void 0 ? null : t;
        try {
          l(e);
        } finally {
          vi.suspense = f;
        }
      }, [e, t]), a;
    }
    function ug(e, t, i) {
      var a = mc();
      No(a < hl ? hl : a, function() {
        e(!0);
      }), No(a > Ui ? Ui : a, function() {
        var l = vi.suspense;
        vi.suspense = t === void 0 ? null : t;
        try {
          e(!1), i();
        } finally {
          vi.suspense = l;
        }
      });
    }
    function sg(e) {
      var t = Gd(!1), i = t[0], a = t[1], l = mh(ug.bind(null, a, e), [a, e]);
      return [l, i];
    }
    function YE(e) {
      var t = sh(), i = t[0], a = t[1], l = Mc(ug.bind(null, a, e), [a, e]);
      return [l, i];
    }
    function QE(e) {
      var t = ch(), i = t[0], a = t[1], l = Mc(ug.bind(null, a, e), [a, e]);
      return [l, i];
    }
    function GE(e, t, i) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = ja(), l = Fd(), f = Fu(a, e, l), h = {
        expirationTime: f,
        suspenseConfig: l,
        action: i,
        eagerReducer: null,
        eagerState: null,
        next: null
      };
      h.priority = mc();
      var y = t.pending;
      y === null ? h.next = h : (h.next = y.next, y.next = h), t.pending = h;
      var T = e.alternate;
      if (e === ln || T !== null && T === ln)
        uh = !0, h.expirationTime = Sl, ln.expirationTime = Sl;
      else {
        if (e.expirationTime === Te && (T === null || T.expirationTime === Te)) {
          var w = t.lastRenderedReducer;
          if (w !== null) {
            var _;
            _ = Se.current, Se.current = Ii;
            try {
              var F = t.lastRenderedState, A = w(F, i);
              if (h.eagerReducer = w, h.eagerState = A, Ru(A, F))
                return;
            } catch {
            } finally {
              Se.current = _;
            }
          }
        }
        typeof jest < "u" && (eb(e), N_(e)), yi(e, f);
      }
    }
    var gh = {
      readContext: gn,
      useCallback: Fr,
      useContext: Fr,
      useEffect: Fr,
      useImperativeHandle: Fr,
      useLayoutEffect: Fr,
      useMemo: Fr,
      useReducer: Fr,
      useRef: Fr,
      useState: Fr,
      useDebugValue: Fr,
      useResponder: Fr,
      useDeferredValue: Fr,
      useTransition: Fr
    }, XE = null, qE = null, KE = null, ZE = null, za = null, Ii = null, Sh = null;
    {
      var cg = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ke = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://fb.me/rules-of-hooks");
      };
      XE = {
        readContext: function(e, t) {
          return gn(e, t);
        },
        useCallback: function(e, t) {
          return J = "useCallback", It(), Qd(t), mh(e, t);
        },
        useContext: function(e, t) {
          return J = "useContext", It(), gn(e, t);
        },
        useEffect: function(e, t) {
          return J = "useEffect", It(), Qd(t), dh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return J = "useImperativeHandle", It(), Qd(i), ag(e, t, i);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", It(), Qd(t), ig(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", It(), Qd(t);
          var i = Se.current;
          Se.current = za;
          try {
            return og(e, t);
          } finally {
            Se.current = i;
          }
        },
        useReducer: function(e, t, i) {
          J = "useReducer", It();
          var a = Se.current;
          Se.current = za;
          try {
            return Ky(e, t, i);
          } finally {
            Se.current = a;
          }
        },
        useRef: function(e) {
          return J = "useRef", It(), tg(e);
        },
        useState: function(e) {
          J = "useState", It();
          var t = Se.current;
          Se.current = za;
          try {
            return Gd(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", It(), void 0;
        },
        useResponder: function(e, t) {
          return J = "useResponder", It(), Pu(e, t);
        },
        useDeferredValue: function(e, t) {
          return J = "useDeferredValue", It(), lg(e, t);
        },
        useTransition: function(e) {
          return J = "useTransition", It(), sg(e);
        }
      }, qE = {
        readContext: function(e, t) {
          return gn(e, t);
        },
        useCallback: function(e, t) {
          return J = "useCallback", _e(), mh(e, t);
        },
        useContext: function(e, t) {
          return J = "useContext", _e(), gn(e, t);
        },
        useEffect: function(e, t) {
          return J = "useEffect", _e(), dh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return J = "useImperativeHandle", _e(), ag(e, t, i);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", _e(), ig(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", _e();
          var i = Se.current;
          Se.current = za;
          try {
            return og(e, t);
          } finally {
            Se.current = i;
          }
        },
        useReducer: function(e, t, i) {
          J = "useReducer", _e();
          var a = Se.current;
          Se.current = za;
          try {
            return Ky(e, t, i);
          } finally {
            Se.current = a;
          }
        },
        useRef: function(e) {
          return J = "useRef", _e(), tg(e);
        },
        useState: function(e) {
          J = "useState", _e();
          var t = Se.current;
          Se.current = za;
          try {
            return Gd(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", _e(), void 0;
        },
        useResponder: function(e, t) {
          return J = "useResponder", _e(), Pu(e, t);
        },
        useDeferredValue: function(e, t) {
          return J = "useDeferredValue", _e(), lg(e, t);
        },
        useTransition: function(e) {
          return J = "useTransition", _e(), sg(e);
        }
      }, KE = {
        readContext: function(e, t) {
          return gn(e, t);
        },
        useCallback: function(e, t) {
          return J = "useCallback", _e(), Mc(e, t);
        },
        useContext: function(e, t) {
          return J = "useContext", _e(), gn(e, t);
        },
        useEffect: function(e, t) {
          return J = "useEffect", _e(), Dc(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return J = "useImperativeHandle", _e(), vh(e, t, i);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", _e(), ph(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", _e();
          var i = Se.current;
          Se.current = Ii;
          try {
            return yh(e, t);
          } finally {
            Se.current = i;
          }
        },
        useReducer: function(e, t, i) {
          J = "useReducer", _e();
          var a = Se.current;
          Se.current = Ii;
          try {
            return Zy(e, t, i);
          } finally {
            Se.current = a;
          }
        },
        useRef: function(e) {
          return J = "useRef", _e(), fh();
        },
        useState: function(e) {
          J = "useState", _e();
          var t = Se.current;
          Se.current = Ii;
          try {
            return sh(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", _e(), hh();
        },
        useResponder: function(e, t) {
          return J = "useResponder", _e(), Pu(e, t);
        },
        useDeferredValue: function(e, t) {
          return J = "useDeferredValue", _e(), BE(e, t);
        },
        useTransition: function(e) {
          return J = "useTransition", _e(), YE(e);
        }
      }, ZE = {
        readContext: function(e, t) {
          return gn(e, t);
        },
        useCallback: function(e, t) {
          return J = "useCallback", _e(), Mc(e, t);
        },
        useContext: function(e, t) {
          return J = "useContext", _e(), gn(e, t);
        },
        useEffect: function(e, t) {
          return J = "useEffect", _e(), Dc(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return J = "useImperativeHandle", _e(), vh(e, t, i);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", _e(), ph(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", _e();
          var i = Se.current;
          Se.current = Sh;
          try {
            return yh(e, t);
          } finally {
            Se.current = i;
          }
        },
        useReducer: function(e, t, i) {
          J = "useReducer", _e();
          var a = Se.current;
          Se.current = Sh;
          try {
            return Jy(e, t, i);
          } finally {
            Se.current = a;
          }
        },
        useRef: function(e) {
          return J = "useRef", _e(), fh();
        },
        useState: function(e) {
          J = "useState", _e();
          var t = Se.current;
          Se.current = Sh;
          try {
            return ch(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", _e(), hh();
        },
        useResponder: function(e, t) {
          return J = "useResponder", _e(), Pu(e, t);
        },
        useDeferredValue: function(e, t) {
          return J = "useDeferredValue", _e(), WE(e, t);
        },
        useTransition: function(e) {
          return J = "useTransition", _e(), QE(e);
        }
      }, za = {
        readContext: function(e, t) {
          return cg(), gn(e, t);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Ke(), It(), mh(e, t);
        },
        useContext: function(e, t) {
          return J = "useContext", Ke(), It(), gn(e, t);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Ke(), It(), dh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return J = "useImperativeHandle", Ke(), It(), ag(e, t, i);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Ke(), It(), ig(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Ke(), It();
          var i = Se.current;
          Se.current = za;
          try {
            return og(e, t);
          } finally {
            Se.current = i;
          }
        },
        useReducer: function(e, t, i) {
          J = "useReducer", Ke(), It();
          var a = Se.current;
          Se.current = za;
          try {
            return Ky(e, t, i);
          } finally {
            Se.current = a;
          }
        },
        useRef: function(e) {
          return J = "useRef", Ke(), It(), tg(e);
        },
        useState: function(e) {
          J = "useState", Ke(), It();
          var t = Se.current;
          Se.current = za;
          try {
            return Gd(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Ke(), It(), void 0;
        },
        useResponder: function(e, t) {
          return J = "useResponder", Ke(), It(), Pu(e, t);
        },
        useDeferredValue: function(e, t) {
          return J = "useDeferredValue", Ke(), It(), lg(e, t);
        },
        useTransition: function(e) {
          return J = "useTransition", Ke(), It(), sg(e);
        }
      }, Ii = {
        readContext: function(e, t) {
          return cg(), gn(e, t);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Ke(), _e(), Mc(e, t);
        },
        useContext: function(e, t) {
          return J = "useContext", Ke(), _e(), gn(e, t);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Ke(), _e(), Dc(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return J = "useImperativeHandle", Ke(), _e(), vh(e, t, i);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Ke(), _e(), ph(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Ke(), _e();
          var i = Se.current;
          Se.current = Ii;
          try {
            return yh(e, t);
          } finally {
            Se.current = i;
          }
        },
        useReducer: function(e, t, i) {
          J = "useReducer", Ke(), _e();
          var a = Se.current;
          Se.current = Ii;
          try {
            return Zy(e, t, i);
          } finally {
            Se.current = a;
          }
        },
        useRef: function(e) {
          return J = "useRef", Ke(), _e(), fh();
        },
        useState: function(e) {
          J = "useState", Ke(), _e();
          var t = Se.current;
          Se.current = Ii;
          try {
            return sh(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Ke(), _e(), hh();
        },
        useResponder: function(e, t) {
          return J = "useResponder", Ke(), _e(), Pu(e, t);
        },
        useDeferredValue: function(e, t) {
          return J = "useDeferredValue", Ke(), _e(), BE(e, t);
        },
        useTransition: function(e) {
          return J = "useTransition", Ke(), _e(), YE(e);
        }
      }, Sh = {
        readContext: function(e, t) {
          return cg(), gn(e, t);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Ke(), _e(), Mc(e, t);
        },
        useContext: function(e, t) {
          return J = "useContext", Ke(), _e(), gn(e, t);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Ke(), _e(), Dc(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return J = "useImperativeHandle", Ke(), _e(), vh(e, t, i);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Ke(), _e(), ph(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Ke(), _e();
          var i = Se.current;
          Se.current = Ii;
          try {
            return yh(e, t);
          } finally {
            Se.current = i;
          }
        },
        useReducer: function(e, t, i) {
          J = "useReducer", Ke(), _e();
          var a = Se.current;
          Se.current = Ii;
          try {
            return Jy(e, t, i);
          } finally {
            Se.current = a;
          }
        },
        useRef: function(e) {
          return J = "useRef", Ke(), _e(), fh();
        },
        useState: function(e) {
          J = "useState", Ke(), _e();
          var t = Se.current;
          Se.current = Ii;
          try {
            return ch(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Ke(), _e(), hh();
        },
        useResponder: function(e, t) {
          return J = "useResponder", Ke(), _e(), Pu(e, t);
        },
        useDeferredValue: function(e, t) {
          return J = "useDeferredValue", Ke(), _e(), WE(e, t);
        },
        useTransition: function(e) {
          return J = "useTransition", Ke(), _e(), QE(e);
        }
      };
    }
    var Eh = p.unstable_now, JE = 0, Xd = -1;
    function KR() {
      return JE;
    }
    function eT() {
      JE = Eh();
    }
    function fg(e) {
      Xd = Eh(), e.actualStartTime < 0 && (e.actualStartTime = Eh());
    }
    function tT(e) {
      Xd = -1;
    }
    function Th(e, t) {
      if (Xd >= 0) {
        var i = Eh() - Xd;
        e.actualDuration += i, t && (e.selfBaseDuration = i), Xd = -1;
      }
    }
    var mi = null, Lu = null, Uu = !1;
    function ZR(e) {
      var t = e.stateNode.containerInfo;
      return Lu = aS(t), mi = e, Uu = !0, !0;
    }
    function nT(e, t) {
      switch (e.tag) {
        case be:
          H1(e.stateNode.containerInfo, t);
          break;
        case de:
          j1(e.type, e.memoizedProps, e.stateNode, t);
          break;
      }
      var i = K_();
      i.stateNode = t, i.return = e, i.effectTag = uo, e.lastEffect !== null ? (e.lastEffect.nextEffect = i, e.lastEffect = i) : e.firstEffect = e.lastEffect = i;
    }
    function rT(e, t) {
      switch (t.effectTag = t.effectTag & ~Tr | on, e.tag) {
        case be: {
          var i = e.stateNode.containerInfo;
          switch (t.tag) {
            case de:
              var a = t.type;
              t.pendingProps, I1(i, a);
              break;
            case Re:
              var l = t.pendingProps;
              F1(i, l);
              break;
          }
          break;
        }
        case de: {
          var f = e.type, h = e.memoizedProps, y = e.stateNode;
          switch (t.tag) {
            case de:
              var T = t.type;
              t.pendingProps, V1(f, h, y, T);
              break;
            case Re:
              var w = t.pendingProps;
              $1(f, h, y, w);
              break;
            case he:
              B1(f, h);
              break;
          }
          break;
        }
        default:
          return;
      }
    }
    function iT(e, t) {
      switch (e.tag) {
        case de: {
          var i = e.type;
          e.pendingProps;
          var a = _a(t, i);
          return a !== null ? (e.stateNode = a, !0) : !1;
        }
        case Re: {
          var l = e.pendingProps, f = Fm(t, l);
          return f !== null ? (e.stateNode = f, !0) : !1;
        }
        case he:
          return !1;
        default:
          return !1;
      }
    }
    function dg(e) {
      if (Uu) {
        var t = Lu;
        if (!t) {
          rT(mi, e), Uu = !1, mi = e;
          return;
        }
        var i = t;
        if (!iT(e, t)) {
          if (t = xv(i), !t || !iT(e, t)) {
            rT(mi, e), Uu = !1, mi = e;
            return;
          }
          nT(mi, i);
        }
        mi = e, Lu = aS(t);
      }
    }
    function JR(e, t, i) {
      var a = e.stateNode, l = M1(a, e.type, e.memoizedProps, t, i, e);
      return e.updateQueue = l, l !== null;
    }
    function ew(e) {
      var t = e.stateNode, i = e.memoizedProps, a = A1(t, i, e);
      if (a) {
        var l = mi;
        if (l !== null)
          switch (l.tag) {
            case be: {
              var f = l.stateNode.containerInfo;
              U1(f, t, i);
              break;
            }
            case de: {
              var h = l.type, y = l.memoizedProps, T = l.stateNode;
              z1(h, y, T, t, i);
              break;
            }
          }
      }
      return a;
    }
    function tw(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return N1(i);
    }
    function aT(e) {
      for (var t = e.return; t !== null && t.tag !== de && t.tag !== be && t.tag !== he; )
        t = t.return;
      mi = t;
    }
    function bh(e) {
      if (e !== mi)
        return !1;
      if (!Uu)
        return aT(e), Uu = !0, !1;
      var t = e.type;
      if (e.tag !== de || t !== "head" && t !== "body" && !E(t, e.memoizedProps))
        for (var i = Lu; i; )
          nT(e, i), i = xv(i);
      return aT(e), e.tag === he ? Lu = tw(e) : Lu = mi ? xv(e.stateNode) : null, !0;
    }
    function pg() {
      mi = null, Lu = null, Uu = !1;
    }
    var qd = b.ReactCurrentOwner, Tl = !1, vg, hg, mg, yg, gg, zu, Sg, Ch;
    vg = {}, hg = {}, mg = {}, yg = {}, gg = {}, zu = !1, Sg = {}, Ch = {};
    function Vr(e, t, i, a) {
      e === null ? t.child = Fy(t, null, i, a) : t.child = bc(t, e.child, i, a);
    }
    function nw(e, t, i, a) {
      t.child = bc(t, e.child, null, a), t.child = bc(t, null, i, a);
    }
    function oT(e, t, i, a, l) {
      if (t.type !== t.elementType) {
        var f = i.propTypes;
        f && d(
          f,
          a,
          // Resolved props
          "prop",
          me(i),
          qe
        );
      }
      var h = i.render, y = t.ref, T;
      return Tc(t, l), qd.current = t, ti(!0), T = _c(e, t, h, a, y, l), t.mode & nn && t.memoizedState !== null && (T = _c(e, t, h, a, y, l)), ti(!1), e !== null && !Tl ? (FE(e, t, l), Po(e, t, l)) : (t.effectTag |= Ar, Vr(e, t, T, l), t.child);
    }
    function lT(e, t, i, a, l, f) {
      if (e === null) {
        var h = i.type;
        if (B_(h) && i.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        i.defaultProps === void 0) {
          var y = h;
          return y = Sc(h), t.tag = tt, t.type = y, bg(t, h), uT(e, t, y, a, l, f);
        }
        {
          var T = h.propTypes;
          T && d(
            T,
            a,
            // Resolved props
            "prop",
            me(h),
            qe
          );
        }
        var w = Zg(i.type, null, a, null, t.mode, f);
        return w.ref = t.ref, w.return = t, t.child = w, w;
      }
      {
        var _ = i.type, F = _.propTypes;
        F && d(
          F,
          a,
          // Resolved props
          "prop",
          me(_),
          qe
        );
      }
      var A = e.child;
      if (l < f) {
        var V = A.memoizedProps, se = i.compare;
        if (se = se !== null ? se : _d, se(V, a) && e.ref === t.ref)
          return Po(e, t, f);
      }
      t.effectTag |= Ar;
      var pe = Yu(A, a);
      return pe.ref = t.ref, pe.return = t, t.child = pe, pe;
    }
    function uT(e, t, i, a, l, f) {
      if (t.type !== t.elementType) {
        var h = t.elementType;
        h.$$typeof === ta && (h = Jc(h));
        var y = h && h.propTypes;
        y && d(
          y,
          a,
          // Resolved (SimpleMemoComponent has no defaultProps)
          "prop",
          me(h),
          qe
        );
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (_d(T, a) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type && (Tl = !1, l < f))
          return t.expirationTime = e.expirationTime, Po(e, t, f);
      }
      return Eg(e, t, i, a, f);
    }
    function rw(e, t, i) {
      var a = t.pendingProps;
      return Vr(e, t, a, i), t.child;
    }
    function iw(e, t, i) {
      var a = t.pendingProps.children;
      return Vr(e, t, a, i), t.child;
    }
    function aw(e, t, i) {
      t.effectTag |= dt;
      var a = t.pendingProps, l = a.children;
      return Vr(e, t, l, i), t.child;
    }
    function sT(e, t) {
      var i = t.ref;
      (e === null && i !== null || e !== null && e.ref !== i) && (t.effectTag |= Yn);
    }
    function Eg(e, t, i, a, l) {
      if (t.type !== t.elementType) {
        var f = i.propTypes;
        f && d(
          f,
          a,
          // Resolved props
          "prop",
          me(i),
          qe
        );
      }
      var h;
      {
        var y = pc(t, i, !0);
        h = vc(t, y);
      }
      var T;
      return Tc(t, l), qd.current = t, ti(!0), T = _c(e, t, i, a, h, l), t.mode & nn && t.memoizedState !== null && (T = _c(e, t, i, a, h, l)), ti(!1), e !== null && !Tl ? (FE(e, t, l), Po(e, t, l)) : (t.effectTag |= Ar, Vr(e, t, T, l), t.child);
    }
    function cT(e, t, i, a, l) {
      if (t.type !== t.elementType) {
        var f = i.propTypes;
        f && d(
          f,
          a,
          // Resolved props
          "prop",
          me(i),
          qe
        );
      }
      var h;
      Na(i) ? (h = !0, Hv(t)) : h = !1, Tc(t, l);
      var y = t.stateNode, T;
      y === null ? (e !== null && (e.alternate = null, t.alternate = null, t.effectTag |= on), PE(t, i, a), Ly(t, i, a, l), T = !0) : e === null ? T = IR(t, i, a, l) : T = FR(e, t, i, a, l);
      var w = Tg(e, t, i, T, h, l);
      {
        var _ = t.stateNode;
        _.props !== a && (zu || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", me(t.type) || "a component"), zu = !0);
      }
      return w;
    }
    function Tg(e, t, i, a, l, f) {
      sT(e, t);
      var h = (t.effectTag & Ot) !== bt;
      if (!a && !h)
        return l && ZS(t, i, !1), Po(e, t, f);
      var y = t.stateNode;
      qd.current = t;
      var T;
      return h && typeof i.getDerivedStateFromError != "function" ? (T = null, tT()) : (ti(!0), T = y.render(), t.mode & nn && y.render(), ti(!1)), t.effectTag |= Ar, e !== null && h ? nw(e, t, T, f) : Vr(e, t, T, f), t.memoizedState = y.state, l && ZS(t, i, !0), t.child;
    }
    function fT(e) {
      var t = e.stateNode;
      t.pendingContext ? qS(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qS(e, t.context, !1), Vy(e, t.containerInfo);
    }
    function ow(e, t, i) {
      fT(t);
      var a = t.updateQueue;
      if (!(e !== null && a !== null))
        throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");
      var l = t.pendingProps, f = t.memoizedState, h = f !== null ? f.element : null;
      xy(e, t), Id(t, l, null, i);
      var y = t.memoizedState, T = y.element;
      if (T === h)
        return pg(), Po(e, t, i);
      var w = t.stateNode;
      if (w.hydrate && ZR(t)) {
        var _ = Fy(t, null, T, i);
        t.child = _;
        for (var F = _; F; )
          F.effectTag = F.effectTag & ~on | Tr, F = F.sibling;
      } else
        Vr(e, t, T, i), pg();
      return t.child;
    }
    function lw(e, t, i) {
      jE(t), e === null && dg(t);
      var a = t.type, l = t.pendingProps, f = e !== null ? e.memoizedProps : null, h = l.children, y = E(a, l);
      return y ? h = null : f !== null && E(a, f) && (t.effectTag |= ir), sT(e, t), t.mode & yc && i !== Ua && x(a, l) ? (Yg(Ua), t.expirationTime = t.childExpirationTime = Ua, null) : (Vr(e, t, h, i), t.child);
    }
    function uw(e, t) {
      return e === null && dg(t), null;
    }
    function sw(e, t, i, a, l) {
      e !== null && (e.alternate = null, t.alternate = null, t.effectTag |= on);
      var f = t.pendingProps;
      jS(t);
      var h = MR(i);
      t.type = h;
      var y = t.tag = W_(h);
      HS(t);
      var T = Hi(h, f), w;
      switch (y) {
        case xe:
          return bg(t, h), t.type = h = Sc(h), w = Eg(null, t, h, T, l), w;
        case Z:
          return t.type = h = vy(h), w = cT(null, t, h, T, l), w;
        case oe:
          return t.type = h = hy(h), w = oT(null, t, h, T, l), w;
        case Ye: {
          if (t.type !== t.elementType) {
            var _ = h.propTypes;
            _ && d(
              _,
              T,
              // Resolved for outer only
              "prop",
              me(h),
              qe
            );
          }
          return w = lT(
            null,
            t,
            h,
            Hi(h.type, T),
            // The inner type can have defaults too
            a,
            l
          ), w;
        }
      }
      var F = "";
      throw h !== null && typeof h == "object" && h.$$typeof === ta && (F = " Did you wrap a component in React.lazy() more than once?"), Error("Element type is invalid. Received a promise that resolves to: " + h + ". Lazy element type must resolve to a class or function." + F);
    }
    function cw(e, t, i, a, l) {
      e !== null && (e.alternate = null, t.alternate = null, t.effectTag |= on), t.tag = Z;
      var f;
      return Na(i) ? (f = !0, Hv(t)) : f = !1, Tc(t, l), PE(t, i, a), Ly(t, i, a, l), Tg(null, t, i, !0, f, l);
    }
    function fw(e, t, i, a) {
      e !== null && (e.alternate = null, t.alternate = null, t.effectTag |= on);
      var l = t.pendingProps, f;
      {
        var h = pc(t, i, !1);
        f = vc(t, h);
      }
      Tc(t, a);
      var y;
      {
        if (i.prototype && typeof i.prototype.render == "function") {
          var T = me(i) || "Unknown";
          vg[T] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", T, T), vg[T] = !0);
        }
        t.mode & nn && zi.recordLegacyContextWarning(t, null), ti(!0), qd.current = t, y = _c(null, t, i, l, f, a), ti(!1);
      }
      if (t.effectTag |= Ar, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        {
          var w = me(i) || "Unknown";
          hg[w] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), hg[w] = !0);
        }
        t.tag = Z, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        Na(i) ? (_ = !0, Hv(t)) : _ = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, Cy(t);
        var F = i.getDerivedStateFromProps;
        return typeof F == "function" && Jv(t, i, F, l), NE(t, y), Ly(t, i, l, a), Tg(null, t, i, !0, _, a);
      } else
        return t.tag = xe, t.mode & nn && t.memoizedState !== null && (y = _c(null, t, i, l, f, a)), Vr(null, t, y, a), bg(t, i), t.child;
    }
    function bg(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var i = "", a = na();
          a && (i += `

Check the render method of \`` + a + "`.");
          var l = a || e._debugID || "", f = e._debugSource;
          f && (l = f.fileName + ":" + f.lineNumber), gg[l] || (gg[l] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", i));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var h = me(t) || "Unknown";
          yg[h] || (g("%s: Function components do not support getDerivedStateFromProps.", h), yg[h] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var y = me(t) || "Unknown";
          mg[y] || (g("%s: Function components do not support contextType.", y), mg[y] = !0);
        }
      }
    }
    var Cg = {
      dehydrated: null,
      retryTime: Te
    };
    function dw(e, t, i) {
      return ah(e, Wd) && (t === null || t.memoizedState !== null);
    }
    function dT(e, t, i) {
      var a = t.mode, l = t.pendingProps;
      lk(t) && (t.effectTag |= Ot);
      var f = ji.current, h = !1, y = (t.effectTag & Ot) !== bt;
      if (y || dw(f, e) ? (h = !0, t.effectTag &= ~Ot) : (e === null || e.memoizedState !== null) && l.fallback !== void 0 && l.unstable_avoidThisFallback !== !0 && (f = WR(f, Wy)), f = Yd(f), Nu(t, f), e === null)
        if (l.fallback !== void 0 && dg(t), h) {
          var T = l.fallback, w = xl(null, a, Te, null);
          if (w.return = t, (t.mode & di) === Hn) {
            var _ = t.memoizedState, F = _ !== null ? t.child.child : t.child;
            w.child = F;
            for (var A = F; A !== null; )
              A.return = w, A = A.sibling;
          }
          var V = xl(T, a, i, null);
          return V.return = t, w.sibling = V, t.memoizedState = Cg, t.child = w, V;
        } else {
          var se = l.children;
          return t.memoizedState = null, t.child = Fy(t, null, se, i);
        }
      else {
        var pe = e.memoizedState;
        if (pe !== null) {
          var Le = e.child, je = Le.sibling;
          if (h) {
            var Ct = l.fallback, et = Yu(Le, Le.pendingProps);
            if (et.return = t, (t.mode & di) === Hn) {
              var Nt = t.memoizedState, H = Nt !== null ? t.child.child : t.child;
              if (H !== Le.child) {
                et.child = H;
                for (var B = H; B !== null; )
                  B.return = et, B = B.sibling;
              }
            }
            if (t.mode & La) {
              for (var L = 0, ce = et.child; ce !== null; )
                L += ce.treeBaseDuration, ce = ce.sibling;
              et.treeBaseDuration = L;
            }
            var le = Yu(je, Ct);
            return le.return = t, et.sibling = le, et.childExpirationTime = Te, t.memoizedState = Cg, t.child = et, le;
          } else {
            var ge = l.children, it = Le.child, ht = bc(t, it, ge, i);
            return t.memoizedState = null, t.child = ht;
          }
        } else {
          var Mt = e.child;
          if (h) {
            var mt = l.fallback, xt = xl(
              // It shouldn't matter what the pending props are because we aren't
              // going to render this fragment.
              null,
              a,
              Te,
              null
            );
            if (xt.return = t, xt.child = Mt, Mt !== null && (Mt.return = xt), (t.mode & di) === Hn) {
              var yt = t.memoizedState, Gt = yt !== null ? t.child.child : t.child;
              xt.child = Gt;
              for (var dn = Gt; dn !== null; )
                dn.return = xt, dn = dn.sibling;
            }
            if (t.mode & La) {
              for (var pn = 0, Zn = xt.child; Zn !== null; )
                pn += Zn.treeBaseDuration, Zn = Zn.sibling;
              xt.treeBaseDuration = pn;
            }
            var Ft = xl(mt, a, i, null);
            return Ft.return = t, xt.sibling = Ft, Ft.effectTag |= on, xt.childExpirationTime = Te, t.memoizedState = Cg, t.child = xt, Ft;
          } else {
            t.memoizedState = null;
            var pr = l.children;
            return t.child = bc(t, Mt, pr, i);
          }
        }
      }
    }
    function pT(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var i = e.alternate;
      i !== null && i.expirationTime < t && (i.expirationTime = t), CE(e.return, t);
    }
    function pw(e, t, i) {
      for (var a = t; a !== null; ) {
        if (a.tag === he) {
          var l = a.memoizedState;
          l !== null && pT(a, i);
        } else if (a.tag === en)
          pT(a, i);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    function vw(e) {
      for (var t = e, i = null; t !== null; ) {
        var a = t.alternate;
        a !== null && oh(a) === null && (i = t), t = t.sibling;
      }
      return i;
    }
    function hw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Sg[e])
        if (Sg[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function mw(e, t) {
      e !== void 0 && !Ch[e] && (e !== "collapsed" && e !== "hidden" ? (Ch[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Ch[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function vT(e, t) {
      {
        var i = Array.isArray(e), a = !i && typeof ei(e) == "function";
        if (i || a) {
          var l = i ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function yw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Array.isArray(e)) {
          for (var i = 0; i < e.length; i++)
            if (!vT(e[i], i))
              return;
        } else {
          var a = ei(e);
          if (typeof a == "function") {
            var l = a.call(e);
            if (l)
              for (var f = l.next(), h = 0; !f.done; f = l.next()) {
                if (!vT(f.value, h))
                  return;
                h++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function xg(e, t, i, a, l, f) {
      var h = e.memoizedState;
      h === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: i,
        tailExpiration: 0,
        tailMode: l,
        lastEffect: f
      } : (h.isBackwards = t, h.rendering = null, h.renderingStartTime = 0, h.last = a, h.tail = i, h.tailExpiration = 0, h.tailMode = l, h.lastEffect = f);
    }
    function hT(e, t, i) {
      var a = t.pendingProps, l = a.revealOrder, f = a.tail, h = a.children;
      hw(l), mw(f, l), yw(h, l), Vr(e, t, h, i);
      var y = ji.current, T = ah(y, Wd);
      if (T)
        y = Yy(y, Wd), t.effectTag |= Ot;
      else {
        var w = e !== null && (e.effectTag & Ot) !== bt;
        w && pw(t, t.child, i), y = Yd(y);
      }
      if (Nu(t, y), (t.mode & di) === Hn)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var _ = vw(t.child), F;
            _ === null ? (F = t.child, t.child = null) : (F = _.sibling, _.sibling = null), xg(
              t,
              !1,
              // isBackwards
              F,
              _,
              f,
              t.lastEffect
            );
            break;
          }
          case "backwards": {
            var A = null, V = t.child;
            for (t.child = null; V !== null; ) {
              var se = V.alternate;
              if (se !== null && oh(se) === null) {
                t.child = V;
                break;
              }
              var pe = V.sibling;
              V.sibling = A, A = V, V = pe;
            }
            xg(
              t,
              !0,
              // isBackwards
              A,
              null,
              // last
              f,
              t.lastEffect
            );
            break;
          }
          case "together": {
            xg(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0,
              t.lastEffect
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function gw(e, t, i) {
      Vy(t, t.stateNode.containerInfo);
      var a = t.pendingProps;
      return e === null ? t.child = bc(t, null, a, i) : Vr(e, t, a, i), t.child;
    }
    function Sw(e, t, i) {
      var a = t.type, l = a._context, f = t.pendingProps, h = t.memoizedProps, y = f.value;
      {
        var T = t.type.propTypes;
        T && d(T, f, "prop", "Context.Provider", qe);
      }
      if (bE(t, y), h !== null) {
        var w = h.value, _ = AR(l, y, w);
        if (_ === 0) {
          if (h.children === f.children && !Uv())
            return Po(e, t, i);
        } else
          NR(t, l, _, i);
      }
      var F = f.children;
      return Vr(e, t, F, i), t.child;
    }
    var mT = !1;
    function Ew(e, t, i) {
      var a = t.type;
      a._context === void 0 ? a !== a.Consumer && (mT || (mT = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
      var l = t.pendingProps, f = l.children;
      typeof f != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Tc(t, i);
      var h = gn(a, l.unstable_observedBits), y;
      return qd.current = t, ti(!0), y = f(h), ti(!1), t.effectTag |= Ar, Vr(e, t, y, i), t.child;
    }
    function Rg() {
      Tl = !0;
    }
    function Po(e, t, i) {
      jS(t), e !== null && (t.dependencies = e.dependencies), tT();
      var a = t.expirationTime;
      a !== Te && Hh(a);
      var l = t.childExpirationTime;
      return l < i ? null : (VR(e, t), t.child);
    }
    function Tw(e, t, i) {
      {
        var a = t.return;
        if (a === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, i.index = t.index, i.sibling = t.sibling, i.return = t.return, i.ref = t.ref, t === a.child)
          a.child = i;
        else {
          var l = a.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = i;
        }
        var f = a.lastEffect;
        return f !== null ? (f.nextEffect = e, a.lastEffect = e) : a.firstEffect = a.lastEffect = e, e.nextEffect = null, e.effectTag = uo, i.effectTag |= on, i;
      }
    }
    function yT(e, t, i) {
      var a = t.expirationTime;
      if (t._debugNeedsRemount && e !== null)
        return Tw(e, t, Zg(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.expirationTime));
      if (e !== null) {
        var l = e.memoizedProps, f = t.pendingProps;
        if (l !== f || Uv() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Tl = !0;
        else if (a < i) {
          switch (Tl = !1, t.tag) {
            case be:
              fT(t), pg();
              break;
            case de:
              if (jE(t), t.mode & yc && i !== Ua && x(t.type, f))
                return Yg(Ua), t.expirationTime = t.childExpirationTime = Ua, null;
              break;
            case Z: {
              var h = t.type;
              Na(h) && Hv(t);
              break;
            }
            case De:
              Vy(t, t.stateNode.containerInfo);
              break;
            case q: {
              var y = t.memoizedProps.value;
              bE(t, y);
              break;
            }
            case Ne:
              {
                var T = t.childExpirationTime >= i;
                T && (t.effectTag |= dt);
              }
              break;
            case he: {
              var w = t.memoizedState;
              if (w !== null) {
                var _ = t.child, F = _.childExpirationTime;
                if (F !== Te && F >= i)
                  return dT(e, t, i);
                Nu(t, Yd(ji.current));
                var A = Po(e, t, i);
                return A !== null ? A.sibling : null;
              } else
                Nu(t, Yd(ji.current));
              break;
            }
            case en: {
              var V = (e.effectTag & Ot) !== bt, se = t.childExpirationTime >= i;
              if (V) {
                if (se)
                  return hT(e, t, i);
                t.effectTag |= Ot;
              }
              var pe = t.memoizedState;
              if (pe !== null && (pe.rendering = null, pe.tail = null), Nu(t, ji.current), se)
                break;
              return null;
            }
          }
          return Po(e, t, i);
        } else
          Tl = !1;
      } else
        Tl = !1;
      switch (t.expirationTime = Te, t.tag) {
        case We:
          return fw(e, t, t.type, i);
        case Jt: {
          var Le = t.elementType;
          return sw(e, t, Le, a, i);
        }
        case xe: {
          var je = t.type, Ct = t.pendingProps, et = t.elementType === je ? Ct : Hi(je, Ct);
          return Eg(e, t, je, et, i);
        }
        case Z: {
          var Nt = t.type, H = t.pendingProps, B = t.elementType === Nt ? H : Hi(Nt, H);
          return cT(e, t, Nt, B, i);
        }
        case be:
          return ow(e, t, i);
        case de:
          return lw(e, t, i);
        case Re:
          return uw(e, t);
        case he:
          return dT(e, t, i);
        case De:
          return gw(e, t, i);
        case oe: {
          var L = t.type, ce = t.pendingProps, le = t.elementType === L ? ce : Hi(L, ce);
          return oT(e, t, L, le, i);
        }
        case st:
          return rw(e, t, i);
        case Ze:
          return iw(e, t, i);
        case Ne:
          return aw(e, t, i);
        case q:
          return Sw(e, t, i);
        case Ge:
          return Ew(e, t, i);
        case Ye: {
          var ge = t.type, it = t.pendingProps, ht = Hi(ge, it);
          if (t.type !== t.elementType) {
            var Mt = ge.propTypes;
            Mt && d(
              Mt,
              ht,
              // Resolved for outer only
              "prop",
              me(ge),
              qe
            );
          }
          return ht = Hi(ge.type, ht), lT(e, t, ge, ht, a, i);
        }
        case tt:
          return uT(e, t, t.type, t.pendingProps, a, i);
        case Be: {
          var mt = t.type, xt = t.pendingProps, yt = t.elementType === mt ? xt : Hi(mt, xt);
          return cw(e, t, mt, yt, i);
        }
        case en:
          return hT(e, t, i);
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ac(e) {
      e.effectTag |= dt;
    }
    function gT(e) {
      e.effectTag |= Yn;
    }
    var ST, wg, ET, TT;
    ST = function(e, t, i, a) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === de || l.tag === Re)
          s(e, l.stateNode);
        else if (l.tag !== De) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, wg = function(e) {
    }, ET = function(e, t, i, a, l) {
      var f = e.memoizedProps;
      if (f !== a) {
        var h = t.stateNode, y = $y(), T = S(h, i, f, a, l, y);
        t.updateQueue = T, T && Ac(t);
      }
    }, TT = function(e, t, i, a) {
      i !== a && Ac(t);
    };
    function xh(e, t) {
      switch (e.tailMode) {
        case "hidden": {
          for (var i = e.tail, a = null; i !== null; )
            i.alternate !== null && (a = i), i = i.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        }
        case "collapsed": {
          for (var l = e.tail, f = null; l !== null; )
            l.alternate !== null && (f = l), l = l.sibling;
          f === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : f.sibling = null;
          break;
        }
      }
    }
    function bT(e, t, i) {
      var a = t.pendingProps;
      switch (t.tag) {
        case We:
        case Jt:
        case tt:
        case xe:
        case oe:
        case st:
        case Ze:
        case Ne:
        case Ge:
        case Ye:
          return null;
        case Z: {
          var l = t.type;
          return Na(l) && zv(t), null;
        }
        case be: {
          Cc(t), oy(t);
          var f = t.stateNode;
          if (f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), e === null || e.child === null) {
            var h = bh(t);
            h && Ac(t);
          }
          return wg(t), null;
        }
        case de: {
          By(t);
          var y = HE(), T = t.type;
          if (e !== null && t.stateNode != null)
            ET(e, t, T, a, y), e.ref !== t.ref && gT(t);
          else {
            if (!a) {
              if (t.stateNode === null)
                throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return null;
            }
            var w = $y(), _ = bh(t);
            if (_)
              JR(t, y, w) && Ac(t);
            else {
              var F = o(T, a, y, w, t);
              ST(F, t, !1, !1), t.stateNode = F, v(F, T, a, y) && Ac(t);
            }
            t.ref !== null && gT(t);
          }
          return null;
        }
        case Re: {
          var A = a;
          if (e && t.stateNode != null) {
            var V = e.memoizedProps;
            TT(e, t, V, A);
          } else {
            if (typeof A != "string" && t.stateNode === null)
              throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var se = HE(), pe = $y(), Le = bh(t);
            Le ? ew(t) && Ac(t) : t.stateNode = z(A, se, pe, t);
          }
          return null;
        }
        case he: {
          xc(t);
          var je = t.memoizedState;
          if ((t.effectTag & Ot) !== bt)
            return t.expirationTime = i, t;
          var Ct = je !== null, et = !1;
          if (e === null)
            t.memoizedProps.fallback !== void 0 && bh(t);
          else {
            var Nt = e.memoizedState;
            if (et = Nt !== null, !Ct && Nt !== null) {
              var H = e.child.sibling;
              if (H !== null) {
                var B = t.firstEffect;
                B !== null ? (t.firstEffect = H, H.nextEffect = B) : (t.firstEffect = t.lastEffect = H, H.nextEffect = null), H.effectTag = uo;
              }
            }
          }
          if (Ct && !et && (t.mode & di) !== Hn) {
            var L = e === null && t.memoizedProps.unstable_avoidThisFallback !== !0;
            L || ah(ji.current, Wy) ? i_() : a_();
          }
          return (Ct || et) && (t.effectTag |= dt), null;
        }
        case De:
          return Cc(t), wg(t), null;
        case q:
          return Ey(t), null;
        case Be: {
          var ce = t.type;
          return Na(ce) && zv(t), null;
        }
        case en: {
          xc(t);
          var le = t.memoizedState;
          if (le === null)
            return null;
          var ge = (t.effectTag & Ot) !== bt, it = le.rendering;
          if (it === null)
            if (ge)
              xh(le, !1);
            else {
              var ht = l_() && (e === null || (e.effectTag & Ot) === bt);
              if (!ht)
                for (var Mt = t.child; Mt !== null; ) {
                  var mt = oh(Mt);
                  if (mt !== null) {
                    ge = !0, t.effectTag |= Ot, xh(le, !1);
                    var xt = mt.updateQueue;
                    return xt !== null && (t.updateQueue = xt, t.effectTag |= dt), le.lastEffect === null && (t.firstEffect = null), t.lastEffect = le.lastEffect, $R(t, i), Nu(t, Yy(ji.current, Wd)), t.child;
                  }
                  Mt = Mt.sibling;
                }
            }
          else {
            if (!ge) {
              var yt = oh(it);
              if (yt !== null) {
                t.effectTag |= Ot, ge = !0;
                var Gt = yt.updateQueue;
                if (Gt !== null && (t.updateQueue = Gt, t.effectTag |= dt), xh(le, !0), le.tail === null && le.tailMode === "hidden" && !it.alternate) {
                  var dn = t.lastEffect = le.lastEffect;
                  return dn !== null && (dn.nextEffect = null), null;
                }
              } else if (
                // The time it took to render last row is greater than time until
                // the expiration.
                Ir() * 2 - le.renderingStartTime > le.tailExpiration && i > Ua
              ) {
                t.effectTag |= Ot, ge = !0, xh(le, !1);
                var pn = i - 1;
                t.expirationTime = t.childExpirationTime = pn, Yg(pn);
              }
            }
            if (le.isBackwards)
              it.sibling = t.child, t.child = it;
            else {
              var Zn = le.last;
              Zn !== null ? Zn.sibling = it : t.child = it, le.last = it;
            }
          }
          if (le.tail !== null) {
            if (le.tailExpiration === 0) {
              var Ft = 500;
              le.tailExpiration = Ir() + Ft;
            }
            var pr = le.tail;
            le.rendering = pr, le.tail = pr.sibling, le.lastEffect = t.lastEffect, le.renderingStartTime = Ir(), pr.sibling = null;
            var Vi = ji.current;
            return ge ? Vi = Yy(Vi, Wd) : Vi = Yd(Vi), Nu(t, Vi), pr;
          }
          return null;
        }
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function bw(e, t) {
      switch (e.tag) {
        case Z: {
          var i = e.type;
          Na(i) && zv(e);
          var a = e.effectTag;
          return a & Qn ? (e.effectTag = a & ~Qn | Ot, e) : null;
        }
        case be: {
          Cc(e), oy(e);
          var l = e.effectTag;
          if ((l & Ot) !== bt)
            throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");
          return e.effectTag = l & ~Qn | Ot, e;
        }
        case de:
          return By(e), null;
        case he: {
          xc(e);
          var f = e.effectTag;
          return f & Qn ? (e.effectTag = f & ~Qn | Ot, e) : null;
        }
        case en:
          return xc(e), null;
        case De:
          return Cc(e), null;
        case q:
          return Ey(e), null;
        default:
          return null;
      }
    }
    function CT(e) {
      switch (e.tag) {
        case Z: {
          var t = e.type.childContextTypes;
          t != null && zv(e);
          break;
        }
        case be: {
          Cc(e), oy(e);
          break;
        }
        case de: {
          By(e);
          break;
        }
        case De:
          Cc(e);
          break;
        case he:
          xc(e);
          break;
        case en:
          xc(e);
          break;
        case q:
          Ey(e);
          break;
      }
    }
    function _g(e, t) {
      return {
        value: e,
        source: t,
        stack: kn(t)
      };
    }
    function Cw(e) {
      var t = e.error;
      {
        var i = e.componentName, a = e.componentStack, l = e.errorBoundaryName, f = e.errorBoundaryFound, h = e.willRetry;
        if (t != null && t._suppressLogging) {
          if (f && h)
            return;
          console.error(t);
        }
        var y = i ? "The above error occurred in the <" + i + "> component:" : "The above error occurred in one of your React components:", T;
        f && l ? h ? T = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + l + ".") : T = "This error was initially handled by the error boundary " + l + `.
Recreating the tree from scratch failed so React will unmount the tree.` : T = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://fb.me/react-error-boundaries to learn more about error boundaries.`;
        var w = "" + y + a + `

` + ("" + T);
        console.error(w);
      }
    }
    var xT = null;
    xT = /* @__PURE__ */ new Set();
    var xw = typeof WeakSet == "function" ? WeakSet : Set;
    function kg(e, t) {
      var i = t.source, a = t.stack;
      a === null && i !== null && (a = kn(i));
      var l = {
        componentName: i !== null ? me(i.type) : null,
        componentStack: a !== null ? a : "",
        error: t.value,
        errorBoundary: null,
        errorBoundaryName: null,
        errorBoundaryFound: !1,
        willRetry: !1
      };
      e !== null && e.tag === Z && (l.errorBoundary = e.stateNode, l.errorBoundaryName = me(e.type), l.errorBoundaryFound = !0, l.willRetry = !0);
      try {
        Cw(l);
      } catch (f) {
        setTimeout(function() {
          throw f;
        });
      }
    }
    var Rw = function(e, t) {
      Da(e, "componentWillUnmount"), t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount(), Ma();
    };
    function ww(e, t) {
      if (Q(null, Rw, null, e, t), $()) {
        var i = K();
        Bu(e, i);
      }
    }
    function RT(e) {
      var t = e.ref;
      if (t !== null)
        if (typeof t == "function") {
          if (Q(null, t, null, null), $()) {
            var i = K();
            Bu(e, i);
          }
        } else
          t.current = null;
    }
    function _w(e, t) {
      if (Q(null, t, null), $()) {
        var i = K();
        Bu(e, i);
      }
    }
    function kw(e, t) {
      switch (t.tag) {
        case xe:
        case oe:
        case tt:
        case nt:
          return;
        case Z: {
          if (t.effectTag & fa && e !== null) {
            var i = e.memoizedProps, a = e.memoizedState;
            Da(t, "getSnapshotBeforeUpdate");
            var l = t.stateNode;
            t.type === t.elementType && !zu && (l.props !== t.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", me(t.type) || "instance"), l.state !== t.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", me(t.type) || "instance"));
            var f = l.getSnapshotBeforeUpdate(t.elementType === t.type ? i : Hi(t.type, i), a);
            {
              var h = xT;
              f === void 0 && !h.has(t.type) && (h.add(t.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", me(t.type)));
            }
            l.__reactInternalSnapshotBeforeUpdate = f, Ma();
          }
          return;
        }
        case be:
        case de:
        case Re:
        case De:
        case Be:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function wT(e, t) {
      var i = t.updateQueue, a = i !== null ? i.lastEffect : null;
      if (a !== null) {
        var l = a.next, f = l;
        do {
          if ((f.tag & e) === e) {
            var h = f.destroy;
            f.destroy = void 0, h !== void 0 && h();
          }
          f = f.next;
        } while (f !== l);
      }
    }
    function _T(e, t) {
      var i = t.updateQueue, a = i !== null ? i.lastEffect : null;
      if (a !== null) {
        var l = a.next, f = l;
        do {
          if ((f.tag & e) === e) {
            var h = f.create;
            f.destroy = h();
            {
              var y = f.destroy;
              if (y !== void 0 && typeof y != "function") {
                var T = void 0;
                y === null ? T = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof y.then == "function" ? T = `

It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://fb.me/react-hooks-data-fetching` : T = " You returned: " + y, g("An effect function must not return anything besides a function, which is used for clean-up.%s%s", T, kn(t));
              }
            }
          }
          f = f.next;
        } while (f !== l);
      }
    }
    function Ow(e) {
      if ((e.effectTag & da) !== bt)
        switch (e.tag) {
          case xe:
          case oe:
          case tt:
          case nt: {
            wT(lh | Rc, e), _T(lh | Rc, e);
            break;
          }
        }
    }
    function Dw(e, t, i, a) {
      switch (i.tag) {
        case xe:
        case oe:
        case tt:
        case nt: {
          _T(wc | Rc, i);
          return;
        }
        case Z: {
          var l = i.stateNode;
          if (i.effectTag & dt)
            if (t === null)
              Da(i, "componentDidMount"), i.type === i.elementType && !zu && (l.props !== i.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", me(i.type) || "instance"), l.state !== i.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", me(i.type) || "instance")), l.componentDidMount(), Ma();
            else {
              var f = i.elementType === i.type ? t.memoizedProps : Hi(i.type, t.memoizedProps), h = t.memoizedState;
              Da(i, "componentDidUpdate"), i.type === i.elementType && !zu && (l.props !== i.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", me(i.type) || "instance"), l.state !== i.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", me(i.type) || "instance")), l.componentDidUpdate(f, h, l.__reactInternalSnapshotBeforeUpdate), Ma();
            }
          var y = i.updateQueue;
          y !== null && (i.type === i.elementType && !zu && (l.props !== i.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", me(i.type) || "instance"), l.state !== i.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", me(i.type) || "instance")), kE(i, y, l));
          return;
        }
        case be: {
          var T = i.updateQueue;
          if (T !== null) {
            var w = null;
            if (i.child !== null)
              switch (i.child.tag) {
                case de:
                  w = i.child.stateNode;
                  break;
                case Z:
                  w = i.child.stateNode;
                  break;
              }
            kE(i, T, w);
          }
          return;
        }
        case de: {
          var _ = i.stateNode;
          if (t === null && i.effectTag & dt) {
            var F = i.type, A = i.memoizedProps;
            Je(_, F, A);
          }
          return;
        }
        case Re:
          return;
        case De:
          return;
        case Ne: {
          {
            var V = i.memoizedProps.onRender;
            typeof V == "function" && V(i.memoizedProps.id, t === null ? "mount" : "update", i.actualDuration, i.treeBaseDuration, i.actualStartTime, KR(), e.memoizedInteractions);
          }
          return;
        }
        case he: {
          jw(e, i);
          return;
        }
        case en:
        case Be:
        case Ee:
        case ct:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Mw(e, t) {
      for (var i = e; ; ) {
        if (i.tag === de) {
          var a = i.stateNode;
          t ? Pe(a) : Qt(i.stateNode, i.memoizedProps);
        } else if (i.tag === Re) {
          var l = i.stateNode;
          t ? ut(l) : Xe(l, i.memoizedProps);
        } else if (i.tag === he && i.memoizedState !== null && i.memoizedState.dehydrated === null) {
          var f = i.child.sibling;
          f.return = i, i = f;
          continue;
        } else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Aw(e) {
      var t = e.ref;
      if (t !== null) {
        var i = e.stateNode, a;
        switch (e.tag) {
          case de:
            a = i;
            break;
          default:
            a = i;
        }
        typeof t == "function" ? t(a) : (t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().%s", me(e.type), kn(e)), t.current = a);
      }
    }
    function Nw(e) {
      var t = e.ref;
      t !== null && (typeof t == "function" ? t(null) : t.current = null);
    }
    function kT(e, t, i) {
      switch (j_(t), t.tag) {
        case xe:
        case oe:
        case Ye:
        case tt:
        case nt: {
          var a = t.updateQueue;
          if (a !== null) {
            var l = a.lastEffect;
            if (l !== null) {
              var f = l.next;
              {
                var h = i > Ui ? Ui : i;
                No(h, function() {
                  var T = f;
                  do {
                    var w = T.destroy;
                    w !== void 0 && _w(t, w), T = T.next;
                  } while (T !== f);
                });
              }
            }
          }
          return;
        }
        case Z: {
          RT(t);
          var y = t.stateNode;
          typeof y.componentWillUnmount == "function" && ww(t, y);
          return;
        }
        case de: {
          RT(t);
          return;
        }
        case De: {
          AT(e, t, i);
          return;
        }
        case Ee:
          return;
        case ot:
          return;
        case ct:
          return;
      }
    }
    function Pw(e, t, i) {
      for (var a = t; ; ) {
        if (kT(e, a, i), a.child !== null && // If we use mutation we drill down into portals using commitUnmount above.
        // If we don't use mutation we drill down into portals here instead.
        a.tag !== De) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === t)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === t)
            return;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    function OT(e) {
      var t = e.alternate;
      e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, e.stateNode = null, t !== null && OT(t);
    }
    function Lw(e) {
      for (var t = e.return; t !== null; ) {
        if (DT(t))
          return t;
        t = t.return;
      }
      throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function DT(e) {
      return e.tag === de || e.tag === be || e.tag === De;
    }
    function Uw(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || DT(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== de && t.tag !== Re && t.tag !== ot; ) {
            if (t.effectTag & on || t.child === null || t.tag === De)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.effectTag & on))
            return t.stateNode;
        }
    }
    function MT(e) {
      var t = Lw(e), i, a, l = t.stateNode;
      switch (t.tag) {
        case de:
          i = l, a = !1;
          break;
        case be:
          i = l.containerInfo, a = !0;
          break;
        case De:
          i = l.containerInfo, a = !0;
          break;
        case Ee:
        default:
          throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
      t.effectTag & ir && (sr(i), t.effectTag &= ~ir);
      var f = Uw(e);
      a ? Og(e, f, i) : Dg(e, f, i);
    }
    function Og(e, t, i) {
      var a = e.tag, l = a === de || a === Re;
      if (l || Ut) {
        var f = l ? e.stateNode : e.stateNode.instance;
        t ? te(i, f, t) : O(i, f);
      } else if (a !== De) {
        var h = e.child;
        if (h !== null) {
          Og(h, t, i);
          for (var y = h.sibling; y !== null; )
            Og(y, t, i), y = y.sibling;
        }
      }
    }
    function Dg(e, t, i) {
      var a = e.tag, l = a === de || a === Re;
      if (l || Ut) {
        var f = l ? e.stateNode : e.stateNode.instance;
        t ? I(i, f, t) : M(i, f);
      } else if (a !== De) {
        var h = e.child;
        if (h !== null) {
          Dg(h, t, i);
          for (var y = h.sibling; y !== null; )
            Dg(y, t, i), y = y.sibling;
        }
      }
    }
    function AT(e, t, i) {
      for (var a = t, l = !1, f, h; ; ) {
        if (!l) {
          var y = a.return;
          e:
            for (; ; ) {
              if (y === null)
                throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
              var T = y.stateNode;
              switch (y.tag) {
                case de:
                  f = T, h = !1;
                  break e;
                case be:
                  f = T.containerInfo, h = !0;
                  break e;
                case De:
                  f = T.containerInfo, h = !0;
                  break e;
              }
              y = y.return;
            }
          l = !0;
        }
        if (a.tag === de || a.tag === Re)
          Pw(e, a, i), h ? we(f, a.stateNode) : fe(f, a.stateNode);
        else if (a.tag === De) {
          if (a.child !== null) {
            f = a.stateNode.containerInfo, h = !0, a.child.return = a, a = a.child;
            continue;
          }
        } else if (kT(e, a, i), a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === t)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === t)
            return;
          a = a.return, a.tag === De && (l = !1);
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    function zw(e, t, i) {
      AT(e, t, i), OT(t);
    }
    function Mg(e, t) {
      switch (t.tag) {
        case xe:
        case oe:
        case Ye:
        case tt:
        case nt: {
          wT(wc | Rc, t);
          return;
        }
        case Z:
          return;
        case de: {
          var i = t.stateNode;
          if (i != null) {
            var a = t.memoizedProps, l = e !== null ? e.memoizedProps : a, f = t.type, h = t.updateQueue;
            t.updateQueue = null, h !== null && vt(i, h, f, l, a);
          }
          return;
        }
        case Re: {
          if (t.stateNode === null)
            throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var y = t.stateNode, T = t.memoizedProps, w = e !== null ? e.memoizedProps : T;
          wn(y, w, T);
          return;
        }
        case be: {
          {
            var _ = t.stateNode;
            _.hydrate && (_.hydrate = !1, P1(_.containerInfo));
          }
          return;
        }
        case Ne:
          return;
        case he: {
          Hw(t), NT(t);
          return;
        }
        case en: {
          NT(t);
          return;
        }
        case Be:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Hw(e) {
      var t = e.memoizedState, i, a = e;
      t === null ? i = !1 : (i = !0, a = e.child, r_()), a !== null && Mw(a, i);
    }
    function jw(e, t) {
      var i = t.memoizedState;
      if (i === null) {
        var a = t.alternate;
        if (a !== null) {
          var l = a.memoizedState;
          if (l !== null) {
            var f = l.dehydrated;
            f !== null && L1(f);
          }
        }
      }
    }
    function NT(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var i = e.stateNode;
        i === null && (i = e.stateNode = new xw()), t.forEach(function(a) {
          var l = C_.bind(null, e, a);
          i.has(a) || (a.__reactDoNotTraceInteractions !== !0 && (l = m.unstable_wrap(l)), i.add(a), a.then(l, l));
        });
      }
    }
    function Iw(e) {
      sr(e.stateNode);
    }
    var Fw = typeof WeakMap == "function" ? WeakMap : Map;
    function PT(e, t, i) {
      var a = ml(i, null);
      a.tag = Ty, a.payload = {
        element: null
      };
      var l = t.value;
      return a.callback = function() {
        E_(l), kg(e, t);
      }, a;
    }
    function LT(e, t, i) {
      var a = ml(i, null);
      a.tag = Ty;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var f = t.value;
        a.payload = function() {
          return kg(e, t), l(f);
        };
      }
      var h = e.stateNode;
      return h !== null && typeof h.componentDidCatch == "function" ? a.callback = function() {
        SE(e), typeof l != "function" && (g_(this), kg(e, t));
        var T = t.value, w = t.stack;
        this.componentDidCatch(T, {
          componentStack: w !== null ? w : ""
        }), typeof l != "function" && e.expirationTime !== pt && g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", me(e.type) || "Unknown");
      } : a.callback = function() {
        SE(e);
      }, a;
    }
    function Vw(e, t, i) {
      var a = e.pingCache, l;
      if (a === null ? (a = e.pingCache = new Fw(), l = /* @__PURE__ */ new Set(), a.set(i, l)) : (l = a.get(i), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(i, l))), !l.has(t)) {
        l.add(t);
        var f = T_.bind(null, e, i, t);
        i.then(f, f);
      }
    }
    function $w(e, t, i, a, l) {
      if (i.effectTag |= tl, i.firstEffect = i.lastEffect = null, a !== null && typeof a == "object" && typeof a.then == "function") {
        var f = a;
        if ((i.mode & di) === Hn) {
          var h = i.alternate;
          h ? (i.updateQueue = h.updateQueue, i.memoizedState = h.memoizedState, i.expirationTime = h.expirationTime) : (i.updateQueue = null, i.memoizedState = null);
        }
        var y = ah(ji.current, Wy), T = t;
        do {
          if (T.tag === he && YR(T, y)) {
            var w = T.updateQueue;
            if (w === null) {
              var _ = /* @__PURE__ */ new Set();
              _.add(f), T.updateQueue = _;
            } else
              w.add(f);
            if ((T.mode & di) === Hn) {
              if (T.effectTag |= Ot, i.effectTag &= ~(Hf | tl), i.tag === Z) {
                var F = i.alternate;
                if (F === null)
                  i.tag = Be;
                else {
                  var A = ml(pt, null);
                  A.tag = Gv, yl(i, A);
                }
              }
              i.expirationTime = pt;
              return;
            }
            Vw(e, l, f), T.effectTag |= Qn, T.expirationTime = l;
            return;
          }
          T = T.return;
        } while (T !== null);
        a = new Error((me(i.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.` + kn(i));
      }
      o_(), a = _g(a, i);
      var V = t;
      do {
        switch (V.tag) {
          case be: {
            var se = a;
            V.effectTag |= Qn, V.expirationTime = l;
            var pe = PT(V, se, l);
            wE(V, pe);
            return;
          }
          case Z:
            var Le = a, je = V.type, Ct = V.stateNode;
            if ((V.effectTag & Ot) === bt && (typeof je.getDerivedStateFromError == "function" || Ct !== null && typeof Ct.componentDidCatch == "function" && !qT(Ct))) {
              V.effectTag |= Qn, V.expirationTime = l;
              var et = LT(V, Le, l);
              wE(V, et);
              return;
            }
            break;
        }
        V = V.return;
      } while (V !== null);
    }
    var Bw = Math.ceil, Ag = b.ReactCurrentDispatcher, UT = b.ReactCurrentOwner, Ng = b.IsSomeRendererActing, fn = (
      /*                    */
      0
    ), Rh = (
      /*               */
      1
    ), Ww = (
      /*                 */
      2
    ), zT = (
      /*         */
      4
    ), Pg = (
      /*       */
      8
    ), $r = (
      /*                */
      16
    ), Ha = (
      /*                */
      32
    ), Hu = 0, wh = 1, HT = 2, _h = 3, kh = 4, Lg = 5, Fe = fn, Rr = null, Ae = null, In = Te, Mn = Hu, Oh = null, Lo = pt, Kd = pt, Dh = null, Zd = Te, Mh = !1, Ug = 0, jT = 500, Me = null, Ah = !1, zg = null, Nc = null, Jd = !1, Pc = null, ep = hc, Hg = Te, ju = null, Yw = 50, tp = 0, jg = null, Qw = 50, Nh = 0, np = null, Iu = null, rp = Te;
    function ja() {
      return (Fe & ($r | Ha)) !== fn ? fy(Ir()) : (rp !== Te || (rp = fy(Ir())), rp);
    }
    function Gw() {
      return fy(Ir());
    }
    function Fu(e, t, i) {
      var a = t.mode;
      if ((a & di) === Hn)
        return pt;
      var l = mc();
      if ((a & yc) === Hn)
        return l === dr ? pt : dE;
      if ((Fe & $r) !== fn)
        return In;
      var f;
      if (i !== null)
        f = CR(e, i.timeoutMs | 0 || Nd);
      else
        switch (l) {
          case dr:
            f = pt;
            break;
          case hl:
            f = hE(e);
            break;
          case Ui:
          case sy:
            f = bR(e);
            break;
          case Dd:
            f = Ou;
            break;
          default:
            throw Error("Expected a valid priority level");
        }
      return Rr !== null && f === In && (f -= 1), f;
    }
    function Xw(e, t) {
      w_(), M_(e);
      var i = Ph(e, t);
      if (i === null) {
        O_(e);
        return;
      }
      k_(e, t), uR();
      var a = mc();
      if (t === pt ? /* Check if we're inside unbatchedUpdates */ (Fe & Pg) !== fn && // Check if we're not already rendering
      (Fe & ($r | Ha)) === fn ? (Cl(i, t), Ig(i)) : (Br(i), Cl(i, t), Fe === fn && Pa()) : (Br(i), Cl(i, t)), (Fe & zT) !== fn && // Only updates at user-blocking priority or greater are considered
      // discrete, even inside a discrete event.
      (a === hl || a === dr))
        if (ju === null)
          ju = /* @__PURE__ */ new Map([[i, t]]);
        else {
          var l = ju.get(i);
          (l === void 0 || l > t) && ju.set(i, t);
        }
    }
    var yi = Xw;
    function Ph(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var i = e.alternate;
      i !== null && i.expirationTime < t && (i.expirationTime = t);
      var a = e.return, l = null;
      if (a === null && e.tag === be)
        l = e.stateNode;
      else
        for (; a !== null; ) {
          if (i = a.alternate, a.childExpirationTime < t && (a.childExpirationTime = t), i !== null && i.childExpirationTime < t && (i.childExpirationTime = t), a.return === null && a.tag === be) {
            l = a.stateNode;
            break;
          }
          a = a.return;
        }
      return l !== null && (Rr === l && (Hh(t), Mn === kh && Qu(l, In)), sb(l, t)), l;
    }
    function Lh(e) {
      var t = e.lastExpiredTime;
      if (t !== Te)
        return t;
      var i = e.firstPendingTime;
      if (!ub(e, i))
        return i;
      var a = e.lastPingedTime, l = e.nextKnownPendingLevel, f = a > l ? a : l;
      return f <= Ou && i !== f ? Te : f;
    }
    function Br(e) {
      var t = e.lastExpiredTime;
      if (t !== Te) {
        e.callbackExpirationTime = pt, e.callbackPriority = dr, e.callbackNode = sE(Ig.bind(null, e));
        return;
      }
      var i = Lh(e), a = e.callbackNode;
      if (i === Te) {
        a !== null && (e.callbackNode = null, e.callbackExpirationTime = Te, e.callbackPriority = hc);
        return;
      }
      var l = ja(), f = mE(l, i);
      if (a !== null) {
        var h = e.callbackPriority, y = e.callbackExpirationTime;
        if (
          // Callback must have the exact same expiration time.
          y === i && // Callback must have greater or equal priority.
          h >= f
        )
          return;
        ER(a);
      }
      e.callbackExpirationTime = i, e.callbackPriority = f;
      var T;
      i === pt ? T = sE(Ig.bind(null, e)) : T = Md(
        f,
        IT.bind(null, e),
        // Compute a task timeout based on the expiration time. This also affects
        // ordering because tasks are processed in timeout order.
        {
          timeout: Du(i) - Ir()
        }
      ), e.callbackNode = T;
    }
    function IT(e, t) {
      if (rp = Te, t) {
        var i = ja();
        return n0(e, i), Br(e), null;
      }
      var a = Lh(e);
      if (a !== Te) {
        var l = e.callbackNode;
        if ((Fe & ($r | Ha)) !== fn)
          throw Error("Should not already be working.");
        if (bl(), (e !== Rr || a !== In) && (Vu(e, a), ib(e, a)), Ae !== null) {
          var f = Fe;
          Fe |= $r;
          var h = WT(), y = Uh(e);
          FS(Ae);
          do
            try {
              f_();
              break;
            } catch (_) {
              BT(e, _);
            }
          while (!0);
          if (Qv(), Fe = f, YT(h), zh(y), Mn === wh) {
            var T = Oh;
            throw Vg(), Vu(e, a), Qu(e, a), Br(e), T;
          }
          if (Ae !== null)
            Vg();
          else {
            ZT();
            var w = e.finishedWork = e.current.alternate;
            e.finishedExpirationTime = a, qw(e, w, Mn, a);
          }
          if (Br(e), e.callbackNode === l)
            return IT.bind(null, e);
        }
      }
      return null;
    }
    function qw(e, t, i, a) {
      switch (Rr = null, i) {
        case Hu:
        case wh:
          throw Error("Root did not complete. This is a bug in React.");
        case HT: {
          n0(e, a > Ou ? Ou : a);
          break;
        }
        case _h: {
          Qu(e, a);
          var l = e.lastSuspendedTime;
          a === l && (e.nextKnownPendingLevel = Fg(t));
          var f = Lo === pt;
          if (f && // do not delay if we're inside an act() scope
          !Wu.current) {
            var h = Ug + jT - Ir();
            if (h > 10) {
              if (Mh) {
                var y = e.lastPingedTime;
                if (y === Te || y >= a) {
                  e.lastPingedTime = a, Vu(e, a);
                  break;
                }
              }
              var T = Lh(e);
              if (T !== Te && T !== a)
                break;
              if (l !== Te && l !== a) {
                e.lastPingedTime = l;
                break;
              }
              e.timeoutHandle = U($u.bind(null, e), h);
              break;
            }
          }
          $u(e);
          break;
        }
        case kh: {
          Qu(e, a);
          var w = e.lastSuspendedTime;
          if (a === w && (e.nextKnownPendingLevel = Fg(t)), // do not delay if we're inside an act() scope
          !Wu.current) {
            if (Mh) {
              var _ = e.lastPingedTime;
              if (_ === Te || _ >= a) {
                e.lastPingedTime = a, Vu(e, a);
                break;
              }
            }
            var F = Lh(e);
            if (F !== Te && F !== a)
              break;
            if (w !== Te && w !== a) {
              e.lastPingedTime = w;
              break;
            }
            var A;
            if (Kd !== pt)
              A = Du(Kd) - Ir();
            else if (Lo === pt)
              A = 0;
            else {
              var V = u_(Lo), se = Ir(), pe = Du(a) - se, Le = se - V;
              Le < 0 && (Le = 0), A = x_(Le) - Le, pe < A && (A = pe);
            }
            if (A > 10) {
              e.timeoutHandle = U($u.bind(null, e), A);
              break;
            }
          }
          $u(e);
          break;
        }
        case Lg: {
          if (
            // do not delay if we're inside an act() scope
            !Wu.current && Lo !== pt && Dh !== null
          ) {
            var je = R_(Lo, a, Dh);
            if (je > 10) {
              Qu(e, a), e.timeoutHandle = U($u.bind(null, e), je);
              break;
            }
          }
          $u(e);
          break;
        }
        default:
          throw Error("Unknown root exit status.");
      }
    }
    function Ig(e) {
      var t = e.lastExpiredTime, i = t !== Te ? t : pt;
      if ((Fe & ($r | Ha)) !== fn)
        throw Error("Should not already be working.");
      if (bl(), (e !== Rr || i !== In) && (Vu(e, i), ib(e, i)), Ae !== null) {
        var a = Fe;
        Fe |= $r;
        var l = WT(), f = Uh(e);
        FS(Ae);
        do
          try {
            c_();
            break;
          } catch (y) {
            BT(e, y);
          }
        while (!0);
        if (Qv(), Fe = a, YT(l), zh(f), Mn === wh) {
          var h = Oh;
          throw Vg(), Vu(e, i), Qu(e, i), Br(e), h;
        }
        if (Ae !== null)
          throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
        ZT(), e.finishedWork = e.current.alternate, e.finishedExpirationTime = i, Kw(e), Br(e);
      }
      return null;
    }
    function Kw(e) {
      Rr = null, $u(e);
    }
    function Zw() {
      if ((Fe & (Rh | $r | Ha)) !== fn) {
        (Fe & $r) !== fn && g("unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.");
        return;
      }
      e_(), bl();
    }
    function Jw(e, t, i, a) {
      return No(dr, e.bind(null, t, i, a));
    }
    function e_() {
      if (ju !== null) {
        var e = ju;
        ju = null, e.forEach(function(t, i) {
          n0(i, t), Br(i);
        }), Pa();
      }
    }
    function FT(e, t) {
      var i = Fe;
      Fe |= Rh;
      try {
        return e(t);
      } finally {
        Fe = i, Fe === fn && Pa();
      }
    }
    function t_(e, t) {
      var i = Fe;
      Fe |= Ww;
      try {
        return e(t);
      } finally {
        Fe = i, Fe === fn && Pa();
      }
    }
    function n_(e, t, i, a, l) {
      var f = Fe;
      Fe |= zT;
      try {
        return No(hl, e.bind(null, t, i, a, l));
      } finally {
        Fe = f, Fe === fn && Pa();
      }
    }
    function VT(e, t) {
      var i = Fe;
      Fe &= ~Rh, Fe |= Pg;
      try {
        return e(t);
      } finally {
        Fe = i, Fe === fn && Pa();
      }
    }
    function $T(e, t) {
      if ((Fe & ($r | Ha)) !== fn)
        throw Error("flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.");
      var i = Fe;
      Fe |= Rh;
      try {
        return No(dr, e.bind(null, t));
      } finally {
        Fe = i, Pa();
      }
    }
    function Vu(e, t) {
      e.finishedWork = null, e.finishedExpirationTime = Te;
      var i = e.timeoutHandle;
      if (i !== Ce && (e.timeoutHandle = Ce, ye(i)), Ae !== null)
        for (var a = Ae.return; a !== null; )
          CT(a), a = a.return;
      Rr = e, Ae = Yu(e.current, null), In = t, Mn = Hu, Oh = null, Lo = pt, Kd = pt, Dh = null, Zd = Te, Mh = !1, Iu = null, zi.discardPendingWarnings();
    }
    function BT(e, t) {
      do {
        try {
          if (Qv(), VE(), kr(), Ae === null || Ae.return === null)
            return Mn = wh, Oh = t, Ae = null, null;
          wr && Ae.mode & La && Th(Ae, !0), $w(e, Ae.return, Ae, t, In), Ae = XT(Ae);
        } catch (i) {
          t = i;
          continue;
        }
        return;
      } while (!0);
    }
    function WT(e) {
      var t = Ag.current;
      return Ag.current = gh, t === null ? gh : t;
    }
    function YT(e) {
      Ag.current = e;
    }
    function Uh(e) {
      {
        var t = m.__interactionsRef.current;
        return m.__interactionsRef.current = e.memoizedInteractions, t;
      }
    }
    function zh(e) {
      m.__interactionsRef.current = e;
    }
    function r_() {
      Ug = Ir();
    }
    function QT(e, t) {
      e < Lo && e > Ou && (Lo = e), t !== null && e < Kd && e > Ou && (Kd = e, Dh = t);
    }
    function Hh(e) {
      e > Zd && (Zd = e);
    }
    function i_() {
      Mn === Hu && (Mn = _h);
    }
    function a_() {
      (Mn === Hu || Mn === _h) && (Mn = kh), Zd !== Te && Rr !== null && (Qu(Rr, In), sb(Rr, Zd));
    }
    function o_() {
      Mn !== Lg && (Mn = HT);
    }
    function l_() {
      return Mn === Hu;
    }
    function u_(e) {
      var t = Du(e);
      return t - Nd;
    }
    function s_(e, t) {
      var i = Du(e);
      return i - (t.timeoutMs | 0 || Nd);
    }
    function c_() {
      for (; Ae !== null; )
        Ae = GT(Ae);
    }
    function f_() {
      for (; Ae !== null && !gR(); )
        Ae = GT(Ae);
    }
    function GT(e) {
      var t = e.alternate;
      HS(e), Bo(e);
      var i;
      return (e.mode & La) !== Hn ? (fg(e), i = $g(t, e, In), Th(e, !0)) : i = $g(t, e, In), kr(), e.memoizedProps = e.pendingProps, i === null && (i = XT(e)), UT.current = null, i;
    }
    function XT(e) {
      Ae = e;
      do {
        var t = Ae.alternate, i = Ae.return;
        if ((Ae.effectTag & tl) === bt) {
          Bo(Ae);
          var a = void 0;
          if ((Ae.mode & La) === Hn ? a = bT(t, Ae, In) : (fg(Ae), a = bT(t, Ae, In), Th(Ae, !1)), IS(Ae), kr(), d_(Ae), a !== null)
            return a;
          if (i !== null && // Do not append effects to parents if a sibling failed to complete
          (i.effectTag & tl) === bt) {
            i.firstEffect === null && (i.firstEffect = Ae.firstEffect), Ae.lastEffect !== null && (i.lastEffect !== null && (i.lastEffect.nextEffect = Ae.firstEffect), i.lastEffect = Ae.lastEffect);
            var l = Ae.effectTag;
            l > Ar && (i.lastEffect !== null ? i.lastEffect.nextEffect = Ae : i.firstEffect = Ae, i.lastEffect = Ae);
          }
        } else {
          var f = bw(Ae);
          if ((Ae.mode & La) !== Hn) {
            Th(Ae, !1);
            for (var h = Ae.actualDuration, y = Ae.child; y !== null; )
              h += y.actualDuration, y = y.sibling;
            Ae.actualDuration = h;
          }
          if (f !== null)
            return sR(Ae), f.effectTag &= jf, f;
          IS(Ae), i !== null && (i.firstEffect = i.lastEffect = null, i.effectTag |= tl);
        }
        var T = Ae.sibling;
        if (T !== null)
          return T;
        Ae = i;
      } while (Ae !== null);
      return Mn === Hu && (Mn = Lg), null;
    }
    function Fg(e) {
      var t = e.expirationTime, i = e.childExpirationTime;
      return t > i ? t : i;
    }
    function d_(e) {
      if (!(In !== Ua && e.childExpirationTime === Ua)) {
        var t = Te;
        if ((e.mode & La) !== Hn) {
          for (var i = e.actualDuration, a = e.selfBaseDuration, l = e.alternate === null || e.child !== e.alternate.child, f = e.child; f !== null; ) {
            var h = f.expirationTime, y = f.childExpirationTime;
            h > t && (t = h), y > t && (t = y), l && (i += f.actualDuration), a += f.treeBaseDuration, f = f.sibling;
          }
          e.actualDuration = i, e.treeBaseDuration = a;
        } else
          for (var T = e.child; T !== null; ) {
            var w = T.expirationTime, _ = T.childExpirationTime;
            w > t && (t = w), _ > t && (t = _), T = T.sibling;
          }
        e.childExpirationTime = t;
      }
    }
    function $u(e) {
      var t = mc();
      return No(dr, p_.bind(null, e, t)), null;
    }
    function p_(e, t) {
      do
        bl();
      while (Pc !== null);
      if (__(), (Fe & ($r | Ha)) !== fn)
        throw Error("Should not already be working.");
      var i = e.finishedWork, a = e.finishedExpirationTime;
      if (i === null)
        return null;
      if (e.finishedWork = null, e.finishedExpirationTime = Te, i === e.current)
        throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackExpirationTime = Te, e.callbackPriority = hc, e.nextKnownPendingLevel = Te, cR();
      var l = Fg(i);
      ek(e, a, l), e === Rr && (Rr = null, Ae = null, In = Te);
      var f;
      if (i.effectTag > Ar ? i.lastEffect !== null ? (i.lastEffect.nextEffect = i, f = i.firstEffect) : f = i : f = i.firstEffect, f !== null) {
        var h = Fe;
        Fe |= Ha;
        var y = Uh(e);
        UT.current = null, $S(), n(e.containerInfo), Me = f;
        do
          if (Q(null, v_, null), $()) {
            if (Me === null)
              throw Error("Should be working on an effect.");
            var T = K();
            Bu(Me, T), Me = Me.nextEffect;
          }
        while (Me !== null);
        BS(), eT(), WS(), Me = f;
        do
          if (Q(null, h_, null, e, t), $()) {
            if (Me === null)
              throw Error("Should be working on an effect.");
            var w = K();
            Bu(Me, w), Me = Me.nextEffect;
          }
        while (Me !== null);
        YS(), r(e.containerInfo), e.current = i, QS(), Me = f;
        do
          if (Q(null, m_, null, e, a), $()) {
            if (Me === null)
              throw Error("Should be working on an effect.");
            var _ = K();
            Bu(Me, _), Me = Me.nextEffect;
          }
        while (Me !== null);
        GS(), Me = null, SR(), zh(y), Fe = h;
      } else
        e.current = i, $S(), BS(), eT(), WS(), YS(), QS(), GS();
      fR();
      var F = Jd;
      if (Jd)
        Jd = !1, Pc = e, Hg = a, ep = t;
      else
        for (Me = f; Me !== null; ) {
          var A = Me.nextEffect;
          Me.nextEffect = null, Me = A;
        }
      var V = e.firstPendingTime;
      if (V !== Te) {
        if (Iu !== null) {
          var se = Iu;
          Iu = null;
          for (var pe = 0; pe < se.length; pe++)
            rb(e, se[pe], e.memoizedInteractions);
        }
        Cl(e, V);
      } else
        Nc = null;
      if (F || ab(e, a), V === pt ? e === jg ? tp++ : (tp = 0, jg = e) : tp = 0, H_(i.stateNode, a), Br(e), Ah) {
        Ah = !1;
        var Le = zg;
        throw zg = null, Le;
      }
      return (Fe & Pg) !== fn || Pa(), null;
    }
    function v_() {
      for (; Me !== null; ) {
        var e = Me.effectTag;
        if ((e & fa) !== bt) {
          Bo(Me), Pv();
          var t = Me.alternate;
          kw(t, Me), kr();
        }
        (e & da) !== bt && (Jd || (Jd = !0, Md(Ui, function() {
          return bl(), null;
        }))), Me = Me.nextEffect;
      }
    }
    function h_(e, t) {
      for (; Me !== null; ) {
        Bo(Me);
        var i = Me.effectTag;
        if (i & ir && Iw(Me), i & Yn) {
          var a = Me.alternate;
          a !== null && Nw(a);
        }
        var l = i & (on | dt | uo | Tr);
        switch (l) {
          case on: {
            MT(Me), Me.effectTag &= ~on;
            break;
          }
          case zp: {
            MT(Me), Me.effectTag &= ~on;
            var f = Me.alternate;
            Mg(f, Me);
            break;
          }
          case Tr: {
            Me.effectTag &= ~Tr;
            break;
          }
          case ks: {
            Me.effectTag &= ~Tr;
            var h = Me.alternate;
            Mg(h, Me);
            break;
          }
          case dt: {
            var y = Me.alternate;
            Mg(y, Me);
            break;
          }
          case uo: {
            zw(e, Me, t);
            break;
          }
        }
        Pv(), kr(), Me = Me.nextEffect;
      }
    }
    function m_(e, t) {
      for (; Me !== null; ) {
        Bo(Me);
        var i = Me.effectTag;
        if (i & (dt | zf)) {
          Pv();
          var a = Me.alternate;
          Dw(e, a, Me);
        }
        i & Yn && (Pv(), Aw(Me)), kr(), Me = Me.nextEffect;
      }
    }
    function bl() {
      if (ep !== hc) {
        var e = ep > Ui ? Ui : ep;
        return ep = hc, No(e, y_);
      }
    }
    function y_() {
      if (Pc === null)
        return !1;
      var e = Pc, t = Hg;
      if (Pc = null, Hg = Te, (Fe & ($r | Ha)) !== fn)
        throw Error("Cannot flush passive effects while already rendering.");
      var i = Fe;
      Fe |= Ha;
      for (var a = Uh(e), l = e.current.firstEffect; l !== null; ) {
        {
          if (Bo(l), Q(null, Ow, null, l), $()) {
            if (l === null)
              throw Error("Should be working on an effect.");
            var f = K();
            Bu(l, f);
          }
          kr();
        }
        var h = l.nextEffect;
        l.nextEffect = null, l = h;
      }
      return zh(a), ab(e, t), Fe = i, Pa(), Nh = Pc === null ? 0 : Nh + 1, !0;
    }
    function qT(e) {
      return Nc !== null && Nc.has(e);
    }
    function g_(e) {
      Nc === null ? Nc = /* @__PURE__ */ new Set([e]) : Nc.add(e);
    }
    function S_(e) {
      Ah || (Ah = !0, zg = e);
    }
    var E_ = S_;
    function KT(e, t, i) {
      var a = _g(i, t), l = PT(e, a, pt);
      yl(e, l);
      var f = Ph(e, pt);
      f !== null && (Br(f), Cl(f, pt));
    }
    function Bu(e, t) {
      if (e.tag === be) {
        KT(e, e, t);
        return;
      }
      for (var i = e.return; i !== null; ) {
        if (i.tag === be) {
          KT(i, e, t);
          return;
        } else if (i.tag === Z) {
          var a = i.type, l = i.stateNode;
          if (typeof a.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && !qT(l)) {
            var f = _g(t, e), h = LT(
              i,
              f,
              // TODO: This is always sync
              pt
            );
            yl(i, h);
            var y = Ph(i, pt);
            y !== null && (Br(y), Cl(y, pt));
            return;
          }
        }
        i = i.return;
      }
    }
    function T_(e, t, i) {
      var a = e.pingCache;
      if (a !== null && a.delete(t), Rr === e && In === i) {
        Mn === kh || Mn === _h && Lo === pt && Ir() - Ug < jT ? Vu(e, In) : Mh = !0;
        return;
      }
      if (ub(e, i)) {
        var l = e.lastPingedTime;
        l !== Te && l < i || (e.lastPingedTime = i, Br(e), Cl(e, i));
      }
    }
    function b_(e, t) {
      if (t === Te) {
        var i = null, a = ja();
        t = Fu(a, e, i);
      }
      var l = Ph(e, t);
      l !== null && (Br(l), Cl(l, t));
    }
    function C_(e, t) {
      var i = Te, a;
      a = e.stateNode, a !== null && a.delete(t), b_(e, i);
    }
    function x_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Bw(e / 1960) * 1960;
    }
    function R_(e, t, i) {
      var a = i.busyMinDurationMs | 0;
      if (a <= 0)
        return 0;
      var l = i.busyDelayMs | 0, f = Ir(), h = s_(e, i), y = f - h;
      if (y <= l)
        return 0;
      var T = l + a - y;
      return T;
    }
    function w_() {
      if (tp > Yw)
        throw tp = 0, jg = null, Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Nh > Qw && (Nh = 0, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function __() {
      zi.flushLegacyContextWarning(), zi.flushPendingUnsafeLifecycleWarnings();
    }
    function ZT() {
      var e = !0;
      VS(np, e), np = null;
    }
    function Vg() {
      var e = !1;
      VS(np, e), np = null;
    }
    function k_(e, t) {
      Rr !== null && t > In && (np = e);
    }
    var jh = null;
    function O_(e) {
      {
        var t = e.tag;
        if (t !== be && t !== Z && t !== xe && t !== oe && t !== Ye && t !== tt && t !== nt)
          return;
        var i = me(e.type) || "ReactComponent";
        if (jh !== null) {
          if (jh.has(i))
            return;
          jh.add(i);
        } else
          jh = /* @__PURE__ */ new Set([i]);
        g("Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.%s", t === Z ? "the componentWillUnmount method" : "a useEffect cleanup function", kn(e));
      }
    }
    var $g;
    {
      var D_ = null;
      $g = function(e, t, i) {
        var a = lb(D_, t);
        try {
          return yT(e, t, i);
        } catch (f) {
          if (f !== null && typeof f == "object" && typeof f.then == "function")
            throw f;
          if (Qv(), VE(), CT(t), lb(t, a), t.mode & La && fg(t), Q(null, yT, null, e, t, i), $()) {
            var l = K();
            throw l;
          } else
            throw f;
        }
      };
    }
    var JT = !1, Bg;
    Bg = /* @__PURE__ */ new Set();
    function M_(e) {
      if (Ul && (Fe & $r) !== fn)
        switch (e.tag) {
          case xe:
          case oe:
          case tt: {
            var t = Ae && me(Ae.type) || "Unknown", i = t;
            if (!Bg.has(i)) {
              Bg.add(i);
              var a = me(e.type) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://fb.me/setstate-in-render", a, t, t);
            }
            break;
          }
          case Z: {
            JT || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), JT = !0);
            break;
          }
        }
    }
    var Wu = {
      current: !1
    };
    function eb(e) {
      Ng.current === !0 && Wu.current !== !0 && g(`It looks like you're using the wrong act() around your test interactions.
Be sure to use the matching version of act() corresponding to your renderer:

// for react-dom:
import {act} from 'react-dom/test-utils';
// ...
act(() => ...);

// for react-test-renderer:
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;
// ...
act(() => ...);%s`, kn(e));
    }
    function tb(e) {
      (e.mode & nn) !== Hn && Ng.current === !1 && Wu.current === !1 && g(`An update to %s ran an effect, but was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s`, me(e.type), kn(e));
    }
    function A_(e) {
      Fe === fn && Ng.current === !1 && Wu.current === !1 && g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s`, me(e.type), kn(e));
    }
    var N_ = A_, nb = !1;
    function P_(e) {
      nb === !1 && p.unstable_flushAllWithoutAsserting === void 0 && (e.mode & di || e.mode & yc) && (nb = !0, g(`In Concurrent or Sync modes, the "scheduler" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: 
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

For more info, visit https://fb.me/react-mock-scheduler`));
    }
    function Wg(e, t) {
      return t * 1e3 + e.interactionThreadID;
    }
    function Yg(e) {
      Iu === null ? Iu = [e] : Iu.push(e);
    }
    function rb(e, t, i) {
      if (i.size > 0) {
        var a = e.pendingInteractionMap, l = a.get(t);
        l != null ? i.forEach(function(y) {
          l.has(y) || y.__count++, l.add(y);
        }) : (a.set(t, new Set(i)), i.forEach(function(y) {
          y.__count++;
        }));
        var f = m.__subscriberRef.current;
        if (f !== null) {
          var h = Wg(e, t);
          f.onWorkScheduled(i, h);
        }
      }
    }
    function Cl(e, t) {
      rb(e, t, m.__interactionsRef.current);
    }
    function ib(e, t) {
      var i = /* @__PURE__ */ new Set();
      if (e.pendingInteractionMap.forEach(function(f, h) {
        h >= t && f.forEach(function(y) {
          return i.add(y);
        });
      }), e.memoizedInteractions = i, i.size > 0) {
        var a = m.__subscriberRef.current;
        if (a !== null) {
          var l = Wg(e, t);
          try {
            a.onWorkStarted(i, l);
          } catch (f) {
            Md(dr, function() {
              throw f;
            });
          }
        }
      }
    }
    function ab(e, t) {
      var i = e.firstPendingTime, a;
      try {
        if (a = m.__subscriberRef.current, a !== null && e.memoizedInteractions.size > 0) {
          var l = Wg(e, t);
          a.onWorkStopped(e.memoizedInteractions, l);
        }
      } catch (h) {
        Md(dr, function() {
          throw h;
        });
      } finally {
        var f = e.pendingInteractionMap;
        f.forEach(function(h, y) {
          y > i && (f.delete(y), h.forEach(function(T) {
            if (T.__count--, a !== null && T.__count === 0)
              try {
                a.onInteractionScheduledWorkCompleted(T);
              } catch (w) {
                Md(dr, function() {
                  throw w;
                });
              }
          }));
        });
      }
    }
    var Qg = null, Gg = null, Xg = null, Lc = !1, L_ = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function U_(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://fb.me/react-devtools"), !0;
      try {
        var i = t.inject(e);
        typeof t.onScheduleFiberRoot == "function" && (Qg = function(a, l) {
          try {
            t.onScheduleFiberRoot(i, a, l);
          } catch (f) {
            Lc || (Lc = !0, g("React instrumentation encountered an error: %s", f));
          }
        }), Gg = function(a, l) {
          try {
            var f = (a.current.effectTag & Ot) === Ot;
            if (wr) {
              var h = Gw(), y = mE(h, l);
              t.onCommitFiberRoot(i, a, y, f);
            }
          } catch (T) {
            Lc || (Lc = !0, g("React instrumentation encountered an error: %s", T));
          }
        }, Xg = function(a) {
          try {
            t.onCommitFiberUnmount(i, a);
          } catch (l) {
            Lc || (Lc = !0, g("React instrumentation encountered an error: %s", l));
          }
        };
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !0;
    }
    function z_(e, t) {
      typeof Qg == "function" && Qg(e, t);
    }
    function H_(e, t) {
      typeof Gg == "function" && Gg(e, t);
    }
    function j_(e) {
      typeof Xg == "function" && Xg(e);
    }
    var qg;
    {
      qg = !1;
      try {
        var ob = Object.preventExtensions({}), I_ = /* @__PURE__ */ new Map([[ob, null]]), F_ = /* @__PURE__ */ new Set([ob]);
        I_.set(0, 0), F_.add(0);
      } catch {
        qg = !0;
      }
    }
    var V_ = 1;
    function $_(e, t, i, a) {
      this.tag = e, this.key = i, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = a, this.effectTag = bt, this.nextEffect = null, this.firstEffect = null, this.lastEffect = null, this.expirationTime = Te, this.childExpirationTime = Te, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugID = V_++, this._debugIsCurrentlyTiming = !1, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !qg && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Fi = function(e, t, i, a) {
      return new $_(e, t, i, a);
    };
    function Kg(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function B_(e) {
      return typeof e == "function" && !Kg(e) && e.defaultProps === void 0;
    }
    function W_(e) {
      if (typeof e == "function")
        return Kg(e) ? Z : xe;
      if (e != null) {
        var t = e.$$typeof;
        if (t === qa)
          return oe;
        if (t === Vo)
          return Ye;
      }
      return We;
    }
    function Yu(e, t) {
      var i = e.alternate;
      i === null ? (i = Fi(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i._debugID = e._debugID, i._debugSource = e._debugSource, i._debugOwner = e._debugOwner, i._debugHookTypes = e._debugHookTypes, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.effectTag = bt, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null, i.actualDuration = 0, i.actualStartTime = -1), i.childExpirationTime = e.childExpirationTime, i.expirationTime = e.expirationTime, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue;
      var a = e.dependencies;
      switch (i.dependencies = a === null ? null : {
        expirationTime: a.expirationTime,
        firstContext: a.firstContext,
        responders: a.responders
      }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.selfBaseDuration = e.selfBaseDuration, i.treeBaseDuration = e.treeBaseDuration, i._debugNeedsRemount = e._debugNeedsRemount, i.tag) {
        case We:
        case xe:
        case tt:
          i.type = Sc(e.type);
          break;
        case Z:
          i.type = vy(e.type);
          break;
        case oe:
          i.type = hy(e.type);
          break;
      }
      return i;
    }
    function Y_(e, t) {
      e.effectTag &= on, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null;
      var i = e.alternate;
      if (i === null)
        e.childExpirationTime = Te, e.expirationTime = t, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childExpirationTime = i.childExpirationTime, e.expirationTime = i.expirationTime, e.child = i.child, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue;
        var a = i.dependencies;
        e.dependencies = a === null ? null : {
          expirationTime: a.expirationTime,
          firstContext: a.firstContext,
          responders: a.responders
        }, e.selfBaseDuration = i.selfBaseDuration, e.treeBaseDuration = i.treeBaseDuration;
      }
      return e;
    }
    function Q_(e) {
      var t;
      return e === vR ? t = yc | di | nn : e === pR ? t = di | nn : t = Hn, L_ && (t |= La), Fi(be, null, null, t);
    }
    function Zg(e, t, i, a, l, f) {
      var h, y = We, T = e;
      if (typeof e == "function")
        Kg(e) ? (y = Z, T = vy(T)) : T = Sc(T);
      else if (typeof e == "string")
        y = de;
      else
        e:
          switch (e) {
            case Bn:
              return xl(i.children, l, f, t);
            case Ll:
              y = Ze, l |= yc | di | nn;
              break;
            case xi:
              y = Ze, l |= nn;
              break;
            case _r:
              return G_(i, l, f, t);
            case Ju:
              return X_(i, l, f, t);
            case es:
              return q_(i, l, f, t);
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Ga:
                    y = q;
                    break e;
                  case Xa:
                    y = Ge;
                    break e;
                  case qa:
                    y = oe, T = hy(T);
                    break e;
                  case Vo:
                    y = Ye;
                    break e;
                  case ta:
                    y = Jt, T = null;
                    break e;
                  case $o:
                    y = nt;
                    break e;
                }
              var w = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var _ = a ? me(a.type) : null;
                _ && (w += `

Check the render method of \`` + _ + "`.");
              }
              throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (e == null ? e : typeof e) + "." + w);
            }
          }
      return h = Fi(y, i, t, l), h.elementType = e, h.type = T, h.expirationTime = f, h;
    }
    function Jg(e, t, i) {
      var a = null;
      a = e._owner;
      var l = e.type, f = e.key, h = e.props, y = Zg(l, f, h, a, t, i);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function xl(e, t, i, a) {
      var l = Fi(st, e, a, t);
      return l.expirationTime = i, l;
    }
    function G_(e, t, i, a) {
      (typeof e.id != "string" || typeof e.onRender != "function") && g('Profiler must specify an "id" string and "onRender" function as props');
      var l = Fi(Ne, e, a, t | La);
      return l.elementType = _r, l.type = _r, l.expirationTime = i, l;
    }
    function X_(e, t, i, a) {
      var l = Fi(he, e, a, t);
      return l.type = Ju, l.elementType = Ju, l.expirationTime = i, l;
    }
    function q_(e, t, i, a) {
      var l = Fi(en, e, a, t);
      return l.type = es, l.elementType = es, l.expirationTime = i, l;
    }
    function e0(e, t, i) {
      var a = Fi(Re, e, null, t);
      return a.expirationTime = i, a;
    }
    function K_() {
      var e = Fi(de, null, null, Hn);
      return e.elementType = "DELETED", e.type = "DELETED", e;
    }
    function t0(e, t, i) {
      var a = e.children !== null ? e.children : [], l = Fi(De, a, e.key, t);
      return l.expirationTime = i, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function lb(e, t) {
      return e === null && (e = Fi(We, null, null, Hn)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.effectTag = t.effectTag, e.nextEffect = t.nextEffect, e.firstEffect = t.firstEffect, e.lastEffect = t.lastEffect, e.expirationTime = t.expirationTime, e.childExpirationTime = t.childExpirationTime, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugID = t._debugID, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugIsCurrentlyTiming = t._debugIsCurrentlyTiming, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Z_(e, t, i) {
      this.tag = t, this.current = null, this.containerInfo = e, this.pendingChildren = null, this.pingCache = null, this.finishedExpirationTime = Te, this.finishedWork = null, this.timeoutHandle = Ce, this.context = null, this.pendingContext = null, this.hydrate = i, this.callbackNode = null, this.callbackPriority = hc, this.firstPendingTime = Te, this.firstSuspendedTime = Te, this.lastSuspendedTime = Te, this.nextKnownPendingLevel = Te, this.lastPingedTime = Te, this.lastExpiredTime = Te, this.interactionThreadID = m.unstable_getThreadID(), this.memoizedInteractions = /* @__PURE__ */ new Set(), this.pendingInteractionMap = /* @__PURE__ */ new Map();
    }
    function J_(e, t, i, a) {
      var l = new Z_(e, t, i), f = Q_(t);
      return l.current = f, f.stateNode = l, Cy(f), l;
    }
    function ub(e, t) {
      var i = e.firstSuspendedTime, a = e.lastSuspendedTime;
      return i !== Te && i >= t && a <= t;
    }
    function Qu(e, t) {
      var i = e.firstSuspendedTime, a = e.lastSuspendedTime;
      i < t && (e.firstSuspendedTime = t), (a > t || i === Te) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = Te), t <= e.lastExpiredTime && (e.lastExpiredTime = Te);
    }
    function sb(e, t) {
      var i = e.firstPendingTime;
      t > i && (e.firstPendingTime = t);
      var a = e.firstSuspendedTime;
      a !== Te && (t >= a ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = Te : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
    }
    function ek(e, t, i) {
      e.firstPendingTime = i, t <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = Te : t <= e.firstSuspendedTime && (e.firstSuspendedTime = t - 1), t <= e.lastPingedTime && (e.lastPingedTime = Te), t <= e.lastExpiredTime && (e.lastExpiredTime = Te);
    }
    function n0(e, t) {
      var i = e.lastExpiredTime;
      (i === Te || i > t) && (e.lastExpiredTime = t);
    }
    var r0, i0;
    r0 = !1, i0 = {};
    function tk(e) {
      if (!e)
        return jr;
      var t = Ai(e), i = dR(t);
      if (t.tag === Z) {
        var a = t.type;
        if (Na(a))
          return KS(t, a, i);
      }
      return i;
    }
    function nk(e, t) {
      {
        var i = Ai(e);
        if (i === void 0)
          throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(e));
        var a = Ff(i);
        if (a === null)
          return null;
        if (a.mode & nn) {
          var l = me(i.type) || "Component";
          i0[l] || (i0[l] = !0, i.mode & nn ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s", t, t, l, kn(a)) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node%s", t, t, l, kn(a)));
        }
        return a.stateNode;
      }
    }
    function rk(e, t, i, a) {
      return J_(e, t, i);
    }
    function ip(e, t, i, a) {
      z_(t, e);
      var l = t.current, f = ja();
      typeof jest < "u" && (P_(l), eb(l));
      var h = Fd(), y = Fu(f, l, h), T = tk(i);
      t.context === null ? t.context = T : t.pendingContext = T, Ul && Ri !== null && !r0 && (r0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, me(Ri.type) || "Unknown"));
      var w = ml(y, h);
      return w.payload = {
        element: e
      }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", a), w.callback = a), yl(l, w), yi(l, y), y;
    }
    function a0(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case de:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function cb(e, t) {
      var i = e.memoizedState;
      i !== null && i.dehydrated !== null && i.retryTime < t && (i.retryTime = t);
    }
    function o0(e, t) {
      cb(e, t);
      var i = e.alternate;
      i && cb(i, t);
    }
    function ik(e) {
      if (e.tag === he) {
        var t = hE(ja());
        yi(e, t), o0(e, t);
      }
    }
    function ak(e) {
      e.tag === he && (yi(e, fE), o0(e, fE));
    }
    function ok(e) {
      if (e.tag === he) {
        var t = ja(), i = Fu(t, e, null);
        yi(e, i), o0(e, i);
      }
    }
    function fb(e) {
      var t = nu(e);
      return t === null ? null : t.tag === Ee ? t.stateNode.instance : t.stateNode;
    }
    var db = function(e) {
      return !1;
    };
    function lk(e) {
      return db(e);
    }
    var pb = null, vb = null, hb = null, mb = null;
    {
      var yb = function(e, t, i, a) {
        if (i >= t.length)
          return a;
        var l = t[i], f = Array.isArray(e) ? e.slice() : c({}, e);
        return f[l] = yb(e[l], t, i + 1, a), f;
      }, gb = function(e, t, i) {
        return yb(e, t, 0, i);
      };
      pb = function(e, t, i, a) {
        for (var l = e.memoizedState; l !== null && t > 0; )
          l = l.next, t--;
        if (l !== null) {
          var f = gb(l.memoizedState, i, a);
          l.memoizedState = f, l.baseState = f, e.memoizedProps = c({}, e.memoizedProps), yi(e, pt);
        }
      }, vb = function(e, t, i) {
        e.pendingProps = gb(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps), yi(e, pt);
      }, hb = function(e) {
        yi(e, pt);
      }, mb = function(e) {
        db = e;
      };
    }
    function uk(e) {
      var t = e.findFiberByHostInstance, i = b.ReactCurrentDispatcher;
      return U_(c({}, e, {
        overrideHookState: pb,
        overrideProps: vb,
        setSuspenseHandler: mb,
        scheduleUpdate: hb,
        currentDispatcherRef: i,
        findHostInstanceByFiber: function(a) {
          var l = Ff(a);
          return l === null ? null : l.stateNode;
        },
        findFiberByHostInstance: function(a) {
          return t ? t(a) : null;
        },
        // React Refresh
        findHostInstancesForRefresh: kR,
        scheduleRefresh: wR,
        scheduleRoot: _R,
        setRefreshHandler: RR,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: function() {
          return Ri;
        }
      }));
    }
    b.IsSomeRendererActing;
    function l0(e, t, i) {
      this._internalRoot = sk(e, t, i);
    }
    l0.prototype.render = function(e) {
      var t = this._internalRoot;
      {
        typeof arguments[1] == "function" && g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
        var i = t.containerInfo;
        if (i.nodeType !== Un) {
          var a = fb(t.current);
          a && a.parentNode !== i && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      ip(e, t, null, null);
    }, l0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot, t = e.containerInfo;
      ip(null, e, null, function() {
        uS(t);
      });
    };
    function sk(e, t, i) {
      var a = i != null && i.hydrate === !0;
      i != null && i.hydrationOptions;
      var l = rk(e, t, a);
      if (W1(l.current, e), a && t !== JS) {
        var f = e.nodeType === ra ? e : e.ownerDocument;
        Us(e, f);
      }
      return l;
    }
    function ck(e, t) {
      return new l0(e, JS, t);
    }
    function Uc(e) {
      return !!(e && (e.nodeType === Or || e.nodeType === ra || e.nodeType === vs || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    var fk = b.ReactCurrentOwner, Sb, Eb = !1;
    Sb = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = fb(e._reactRootContainer._internalRoot.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var i = !!e._reactRootContainer, a = Ih(e), l = !!(a && vl(a));
      l && !i && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Or && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Ih(e) {
      return e ? e.nodeType === ra ? e.documentElement : e.firstChild : null;
    }
    function dk(e) {
      var t = Ih(e);
      return !!(t && t.nodeType === Or && t.hasAttribute(ie));
    }
    function pk(e, t) {
      var i = t || dk(e);
      if (!i)
        for (var a = !1, l; l = e.lastChild; )
          !a && l.nodeType === Or && l.hasAttribute(ie) && (a = !0, g("render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.")), e.removeChild(l);
      return i && !t && !Eb && (Eb = !0, C("render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v17. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.")), ck(e, i ? {
        hydrate: !0
      } : void 0);
    }
    function vk(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Fh(e, t, i, a, l) {
      Sb(i), vk(l === void 0 ? null : l, "render");
      var f = i._reactRootContainer, h;
      if (f) {
        if (h = f._internalRoot, typeof l == "function") {
          var T = l;
          l = function() {
            var w = a0(h);
            T.call(w);
          };
        }
        ip(t, h, e, l);
      } else {
        if (f = i._reactRootContainer = pk(i, a), h = f._internalRoot, typeof l == "function") {
          var y = l;
          l = function() {
            var w = a0(h);
            y.call(w);
          };
        }
        VT(function() {
          ip(t, h, e, l);
        });
      }
      return a0(h);
    }
    function hk(e) {
      {
        var t = fk.current;
        if (t !== null && t.stateNode !== null) {
          var i = t.stateNode._warnedAboutRefsInRender;
          i || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", me(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Or ? e : nk(e, "findDOMNode");
    }
    function mk(e, t, i) {
      if (!Uc(t))
        throw Error("Target container is not a DOM element.");
      {
        var a = $m(t) && t._reactRootContainer === void 0;
        a && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?");
      }
      return Fh(null, e, t, !0, i);
    }
    function yk(e, t, i) {
      if (!Uc(t))
        throw Error("Target container is not a DOM element.");
      {
        var a = $m(t) && t._reactRootContainer === void 0;
        a && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Fh(null, e, t, !1, i);
    }
    function gk(e, t, i, a) {
      if (!Uc(i))
        throw Error("Target container is not a DOM element.");
      if (!(e != null && Uf(e)))
        throw Error("parentComponent must be a valid React Component");
      return Fh(e, t, i, !1, a);
    }
    function Sk(e) {
      if (!Uc(e))
        throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = $m(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var i = Ih(e), a = i && !vl(i);
          a && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return VT(function() {
          Fh(null, null, e, !1, function() {
            e._reactRootContainer = null, uS(e);
          });
        }), !0;
      } else {
        {
          var l = Ih(e), f = !!(l && vl(l)), h = e.nodeType === Or && Uc(e.parentNode) && !!e.parentNode._reactRootContainer;
          f && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", h ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    function Ek(e, t, i) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: _n,
        key: a == null ? null : "" + a,
        children: e,
        containerInfo: t,
        implementation: i
      };
    }
    var Tb = "16.14.0";
    Bf(ik), Ns(ak), Ls(ok);
    var bb = !1;
    (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), qi(mv), Wa(FT, n_, Zw, t_);
    function Cb(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Uc(t))
        throw Error("Target container is not a DOM element.");
      return Ek(e, t, null, i);
    }
    function Tk(e, t, i, a) {
      return gk(e, t, i, a);
    }
    function bk(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      return bb || (bb = !0, C('The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.')), Cb(e, t, i);
    }
    var Ck = {
      // Keep in sync with ReactDOMUnstableNativeDependencies.js
      // ReactTestUtils.js, and ReactTestUtilsAct.js. This is an array for better minification.
      Events: [vl, Cu, Bm, qr, Xr, lc, nx, Tn, Ti, cu, Ms, bl, Wu]
    }, xk = uk({
      findFiberByHostInstance: gd,
      bundleType: 1,
      version: Tb,
      rendererPackageName: "react-dom"
    });
    if (!xk && En && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var xb = window.location.protocol;
      /^(https?|file):$/.test(xb) && console.info("%cDownload the React DevTools for a better development experience: https://fb.me/react-devtools" + (xb === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://fb.me/react-devtools-faq` : ""), "font-weight:bold");
    }
    Yr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ck, Yr.createPortal = Cb, Yr.findDOMNode = hk, Yr.flushSync = $T, Yr.hydrate = mk, Yr.render = yk, Yr.unmountComponentAtNode = Sk, Yr.unstable_batchedUpdates = FT, Yr.unstable_createPortal = bk, Yr.unstable_renderSubtreeIntoContainer = Tk, Yr.version = Tb;
  }()), Yr;
}
function gC() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gC);
    } catch (u) {
      console.error(u);
    }
  }
}
process.env.NODE_ENV === "production" ? (gC(), _0.exports = Wk()) : _0.exports = Zk();
var SC = _0.exports;
const k0 = /* @__PURE__ */ wk(SC), FM = /* @__PURE__ */ Ik({
  __proto__: null,
  default: k0
}, [SC]);
function $b(u) {
  return u instanceof HTMLElement || u instanceof SVGElement;
}
function Jk(u) {
  return u && vr(u) === "object" && $b(u.nativeElement) ? u.nativeElement : $b(u) ? u : null;
}
function eO(u) {
  var c = Jk(u);
  if (c)
    return c;
  if (u instanceof gi.Component) {
    var p;
    return (p = k0.findDOMNode) === null || p === void 0 ? void 0 : p.call(k0, u);
  }
  return null;
}
function X0(u, c, p) {
  var d = ve.useRef({});
  return (!("value" in d.current) || p(d.current.condition, c)) && (d.current.value = u(), d.current.condition = c), d.current.value;
}
var EC = function(c, p) {
  typeof c == "function" ? c(p) : vr(c) === "object" && c && "current" in c && (c.current = p);
}, tO = function() {
  for (var c = arguments.length, p = new Array(c), d = 0; d < c; d++)
    p[d] = arguments[d];
  var m = p.filter(Boolean);
  return m.length <= 1 ? m[0] : function(b) {
    p.forEach(function(C) {
      EC(C, b);
    });
  };
}, VM = function() {
  for (var c = arguments.length, p = new Array(c), d = 0; d < c; d++)
    p[d] = arguments[d];
  return X0(function() {
    return tO.apply(void 0, p);
  }, p, function(m, b) {
    return m.length !== b.length || m.every(function(C, g) {
      return C !== b[g];
    });
  });
}, nO = function(c) {
  var p, d, m = s0.isMemo(c) ? c.type.type : c.type;
  return !(typeof m == "function" && !((p = m.prototype) !== null && p !== void 0 && p.render) && m.$$typeof !== s0.ForwardRef || typeof c == "function" && !((d = c.prototype) !== null && d !== void 0 && d.render) && c.$$typeof !== s0.ForwardRef);
};
function jo(u, c) {
  if (!(u instanceof c))
    throw new TypeError("Cannot call a class as a function");
}
function Bb(u, c) {
  for (var p = 0; p < c.length; p++) {
    var d = c[p];
    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(u, _k(d.key), d);
  }
}
function Io(u, c, p) {
  return c && Bb(u.prototype, c), p && Bb(u, p), Object.defineProperty(u, "prototype", {
    writable: !1
  }), u;
}
function O0(u, c) {
  return O0 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p, d) {
    return p.__proto__ = d, p;
  }, O0(u, c);
}
function fm(u, c) {
  if (typeof c != "function" && c !== null)
    throw new TypeError("Super expression must either be null or a function");
  u.prototype = Object.create(c && c.prototype, {
    constructor: {
      value: u,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(u, "prototype", {
    writable: !1
  }), c && O0(u, c);
}
function Vc(u) {
  return Vc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(c) {
    return c.__proto__ || Object.getPrototypeOf(c);
  }, Vc(u);
}
function q0() {
  try {
    var u = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (q0 = function() {
    return !!u;
  })();
}
function D0(u) {
  if (u === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return u;
}
function TC(u, c) {
  if (c && (vr(c) == "object" || typeof c == "function"))
    return c;
  if (c !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return D0(u);
}
function bC(u) {
  var c = q0();
  return function() {
    var p, d = Vc(u);
    if (c) {
      var m = Vc(this).constructor;
      p = Reflect.construct(d, arguments, m);
    } else
      p = d.apply(this, arguments);
    return TC(this, p);
  };
}
function rO(u) {
  if (Array.isArray(u))
    return kk(u);
}
function CC(u) {
  if (typeof Symbol < "u" && u[Symbol.iterator] != null || u["@@iterator"] != null)
    return Array.from(u);
}
function iO() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qi(u) {
  return rO(u) || CC(u) || fC(u) || iO();
}
var xC = function(c) {
  return +setTimeout(c, 16);
}, RC = function(c) {
  return clearTimeout(c);
};
typeof window < "u" && "requestAnimationFrame" in window && (xC = function(c) {
  return window.requestAnimationFrame(c);
}, RC = function(c) {
  return window.cancelAnimationFrame(c);
});
var Wb = 0, dm = /* @__PURE__ */ new Map();
function wC(u) {
  dm.delete(u);
}
var om = function(c) {
  var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Wb += 1;
  var d = Wb;
  function m(b) {
    if (b === 0)
      wC(d), c();
    else {
      var C = xC(function() {
        m(b - 1);
      });
      dm.set(d, C);
    }
  }
  return m(p), d;
};
om.cancel = function(u) {
  var c = dm.get(u);
  return wC(u), RC(c);
};
process.env.NODE_ENV !== "production" && (om.ids = function() {
  return dm;
});
function cp(u) {
  for (var c = 0, p, d = 0, m = u.length; m >= 4; ++d, m -= 4)
    p = u.charCodeAt(d) & 255 | (u.charCodeAt(++d) & 255) << 8 | (u.charCodeAt(++d) & 255) << 16 | (u.charCodeAt(++d) & 255) << 24, p = /* Math.imul(k, m): */
    (p & 65535) * 1540483477 + ((p >>> 16) * 59797 << 16), p ^= /* k >>> r: */
    p >>> 24, c = /* Math.imul(k, m): */
    (p & 65535) * 1540483477 + ((p >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (c & 65535) * 1540483477 + ((c >>> 16) * 59797 << 16);
  switch (m) {
    case 3:
      c ^= (u.charCodeAt(d + 2) & 255) << 16;
    case 2:
      c ^= (u.charCodeAt(d + 1) & 255) << 8;
    case 1:
      c ^= u.charCodeAt(d) & 255, c = /* Math.imul(h, m): */
      (c & 65535) * 1540483477 + ((c >>> 16) * 59797 << 16);
  }
  return c ^= c >>> 13, c = /* Math.imul(h, m): */
  (c & 65535) * 1540483477 + ((c >>> 16) * 59797 << 16), ((c ^ c >>> 15) >>> 0).toString(36);
}
function aO(u, c) {
  var p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, d = /* @__PURE__ */ new Set();
  function m(b, C) {
    var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, k = d.has(b);
    if (cm(!k, "Warning: There may be circular references"), k)
      return !1;
    if (b === C)
      return !0;
    if (p && g > 1)
      return !1;
    d.add(b);
    var R = g + 1;
    if (Array.isArray(b)) {
      if (!Array.isArray(C) || b.length !== C.length)
        return !1;
      for (var D = 0; D < b.length; D++)
        if (!m(b[D], C[D], R))
          return !1;
      return !0;
    }
    if (b && C && vr(b) === "object" && vr(C) === "object") {
      var N = Object.keys(b);
      return N.length !== Object.keys(C).length ? !1 : N.every(function(P) {
        return m(b[P], C[P], R);
      });
    }
    return !1;
  }
  return m(u, c);
}
var oO = "%";
function M0(u) {
  return u.join(oO);
}
var lO = /* @__PURE__ */ function() {
  function u(c) {
    jo(this, u), gt(this, "instanceId", void 0), gt(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = c;
  }
  return Io(u, [{
    key: "get",
    value: function(p) {
      return this.opGet(M0(p));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(p) {
      return this.cache.get(p) || null;
    }
  }, {
    key: "update",
    value: function(p, d) {
      return this.opUpdate(M0(p), d);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(p, d) {
      var m = this.cache.get(p), b = d(m);
      b === null ? this.cache.delete(p) : this.cache.set(p, b);
    }
  }]), u;
}(), $c = "data-token-hash", Wi = "data-css-hash", uO = "data-cache-path", _l = "__cssinjs_instance__";
function sO() {
  var u = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var c = document.body.querySelectorAll("style[".concat(Wi, "]")) || [], p = document.head.firstChild;
    Array.from(c).forEach(function(m) {
      m[_l] = m[_l] || u, m[_l] === u && document.head.insertBefore(m, p);
    });
    var d = {};
    Array.from(document.querySelectorAll("style[".concat(Wi, "]"))).forEach(function(m) {
      var b = m.getAttribute(Wi);
      if (d[b]) {
        if (m[_l] === u) {
          var C;
          (C = m.parentNode) === null || C === void 0 || C.removeChild(m);
        }
      } else
        d[b] = !0;
    });
  }
  return new lO(u);
}
var pm = /* @__PURE__ */ ve.createContext({
  hashPriority: "low",
  cache: sO(),
  defaultCache: !0
});
function cO(u, c) {
  if (u.length !== c.length)
    return !1;
  for (var p = 0; p < u.length; p++)
    if (u[p] !== c[p])
      return !1;
  return !0;
}
var K0 = /* @__PURE__ */ function() {
  function u() {
    jo(this, u), gt(this, "cache", void 0), gt(this, "keys", void 0), gt(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Io(u, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(p) {
      var d, m, b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, C = {
        map: this.cache
      };
      return p.forEach(function(g) {
        if (!C)
          C = void 0;
        else {
          var k;
          C = (k = C) === null || k === void 0 || (k = k.map) === null || k === void 0 ? void 0 : k.get(g);
        }
      }), (d = C) !== null && d !== void 0 && d.value && b && (C.value[1] = this.cacheCallTimes++), (m = C) === null || m === void 0 ? void 0 : m.value;
    }
  }, {
    key: "get",
    value: function(p) {
      var d;
      return (d = this.internalGet(p, !0)) === null || d === void 0 ? void 0 : d[0];
    }
  }, {
    key: "has",
    value: function(p) {
      return !!this.internalGet(p);
    }
  }, {
    key: "set",
    value: function(p, d) {
      var m = this;
      if (!this.has(p)) {
        if (this.size() + 1 > u.MAX_CACHE_SIZE + u.MAX_CACHE_OFFSET) {
          var b = this.keys.reduce(function(R, D) {
            var N = Tt(R, 2), P = N[1];
            return m.internalGet(D)[1] < P ? [D, m.internalGet(D)[1]] : R;
          }, [this.keys[0], this.cacheCallTimes]), C = Tt(b, 1), g = C[0];
          this.delete(g);
        }
        this.keys.push(p);
      }
      var k = this.cache;
      p.forEach(function(R, D) {
        if (D === p.length - 1)
          k.set(R, {
            value: [d, m.cacheCallTimes++]
          });
        else {
          var N = k.get(R);
          N ? N.map || (N.map = /* @__PURE__ */ new Map()) : k.set(R, {
            map: /* @__PURE__ */ new Map()
          }), k = k.get(R).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(p, d) {
      var m = p.get(d[0]);
      if (d.length === 1) {
        var b;
        return m.map ? p.set(d[0], {
          map: m.map
        }) : p.delete(d[0]), (b = m.value) === null || b === void 0 ? void 0 : b[0];
      }
      var C = this.deleteByPath(m.map, d.slice(1));
      return (!m.map || m.map.size === 0) && !m.value && p.delete(d[0]), C;
    }
  }, {
    key: "delete",
    value: function(p) {
      if (this.has(p))
        return this.keys = this.keys.filter(function(d) {
          return !cO(d, p);
        }), this.deleteByPath(this.cache, p);
    }
  }]), u;
}();
gt(K0, "MAX_CACHE_SIZE", 20);
gt(K0, "MAX_CACHE_OFFSET", 5);
var Yb = 0, _C = /* @__PURE__ */ function() {
  function u(c) {
    jo(this, u), gt(this, "derivatives", void 0), gt(this, "id", void 0), this.derivatives = Array.isArray(c) ? c : [c], this.id = Yb, c.length === 0 && dC(c.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Yb += 1;
  }
  return Io(u, [{
    key: "getDerivativeToken",
    value: function(p) {
      return this.derivatives.reduce(function(d, m) {
        return m(p, d);
      }, void 0);
    }
  }]), u;
}(), y0 = new K0();
function A0(u) {
  var c = Array.isArray(u) ? u : [u];
  return y0.has(c) || y0.set(c, new _C(c)), y0.get(c);
}
var fO = /* @__PURE__ */ new WeakMap(), g0 = {};
function dO(u, c) {
  for (var p = fO, d = 0; d < c.length; d += 1) {
    var m = c[d];
    p.has(m) || p.set(m, /* @__PURE__ */ new WeakMap()), p = p.get(m);
  }
  return p.has(g0) || p.set(g0, u()), p.get(g0);
}
var Qb = /* @__PURE__ */ new WeakMap();
function up(u) {
  var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, p = Qb.get(u) || "";
  return p || (Object.keys(u).forEach(function(d) {
    var m = u[d];
    p += d, m instanceof _C ? p += m.id : m && vr(m) === "object" ? p += up(m, c) : p += m;
  }), c && (p = cp(p)), Qb.set(u, p)), p;
}
function Gb(u, c) {
  return cp("".concat(c, "_").concat(up(u, !0)));
}
var N0 = kl();
function P0(u) {
  return typeof u == "number" ? "".concat(u, "px") : u;
}
function lm(u, c, p) {
  var d, m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, b = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (b)
    return u;
  var C = at(at({}, m), {}, (d = {}, gt(d, $c, c), gt(d, Wi, p), d)), g = Object.keys(C).map(function(k) {
    var R = C[k];
    return R ? "".concat(k, '="').concat(R, '"') : null;
  }).filter(function(k) {
    return k;
  }).join(" ");
  return "<style ".concat(g, ">").concat(u, "</style>");
}
var kC = function(c) {
  var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(p ? "".concat(p, "-") : "").concat(c).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, pO = function(c, p, d) {
  return Object.keys(c).length ? ".".concat(p).concat(d != null && d.scope ? ".".concat(d.scope) : "", "{").concat(Object.entries(c).map(function(m) {
    var b = Tt(m, 2), C = b[0], g = b[1];
    return "".concat(C, ":").concat(g, ";");
  }).join(""), "}") : "";
}, OC = function(c, p, d) {
  var m = {}, b = {};
  return Object.entries(c).forEach(function(C) {
    var g, k, R = Tt(C, 2), D = R[0], N = R[1];
    if (d != null && (g = d.preserve) !== null && g !== void 0 && g[D])
      b[D] = N;
    else if ((typeof N == "string" || typeof N == "number") && !(d != null && (k = d.ignore) !== null && k !== void 0 && k[D])) {
      var P, Y = kC(D, d == null ? void 0 : d.prefix);
      m[Y] = typeof N == "number" && !(d != null && (P = d.unitless) !== null && P !== void 0 && P[D]) ? "".concat(N, "px") : String(N), b[D] = "var(".concat(Y, ")");
    }
  }), [b, pO(m, p, {
    scope: d == null ? void 0 : d.scope
  })];
}, Xb = process.env.NODE_ENV !== "test" && kl() ? ve.useLayoutEffect : ve.useEffect, DC = function(c, p) {
  var d = ve.useRef(!0);
  Xb(function() {
    return c(d.current);
  }, p), Xb(function() {
    return d.current = !1, function() {
      d.current = !0;
    };
  }, []);
}, $M = function(c, p) {
  DC(function(d) {
    if (!d)
      return c();
  }, p);
}, vO = at({}, ve), qb = vO.useInsertionEffect, hO = function(c, p, d) {
  ve.useMemo(c, d), DC(function() {
    return p(!0);
  }, d);
}, mO = qb ? function(u, c, p) {
  return qb(function() {
    return u(), c();
  }, p);
} : hO, yO = at({}, ve), gO = yO.useInsertionEffect, SO = function(c) {
  var p = [], d = !1;
  function m(b) {
    if (d) {
      process.env.NODE_ENV !== "production" && dC(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    p.push(b);
  }
  return ve.useEffect(function() {
    return d = !1, function() {
      d = !0, p.length && p.forEach(function(b) {
        return b();
      });
    };
  }, c), m;
}, EO = function() {
  return function(c) {
    c();
  };
}, TO = typeof gO < "u" ? SO : EO;
function bO() {
  return !1;
}
var L0 = !1;
function CO() {
  return L0;
}
const xO = process.env.NODE_ENV === "production" ? bO : CO;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var S0 = window;
  if (typeof S0.webpackHotUpdate == "function") {
    var RO = S0.webpackHotUpdate;
    S0.webpackHotUpdate = function() {
      return L0 = !0, setTimeout(function() {
        L0 = !1;
      }, 0), RO.apply(void 0, arguments);
    };
  }
}
function Z0(u, c, p, d, m) {
  var b = ve.useContext(pm), C = b.cache, g = [u].concat(Qi(c)), k = M0(g), R = TO([k]), D = xO(), N = function(G) {
    C.opUpdate(k, function(j) {
      var ue = j || [void 0, void 0], Q = Tt(ue, 2), ne = Q[0], X = ne === void 0 ? 0 : ne, $ = Q[1], K = $;
      process.env.NODE_ENV !== "production" && $ && D && (d == null || d(K, D), K = null);
      var ee = K || p(), ae = [X, ee];
      return G ? G(ae) : ae;
    });
  };
  ve.useMemo(
    function() {
      N();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [k]
    /* eslint-enable */
  );
  var P = C.opGet(k);
  process.env.NODE_ENV !== "production" && !P && (N(), P = C.opGet(k));
  var Y = P[1];
  return mO(function() {
    m == null || m(Y);
  }, function(re) {
    return N(function(G) {
      var j = Tt(G, 2), ue = j[0], Q = j[1];
      return re && ue === 0 && (m == null || m(Y)), [ue + 1, Q];
    }), function() {
      C.opUpdate(k, function(G) {
        var j = G || [], ue = Tt(j, 2), Q = ue[0], ne = Q === void 0 ? 0 : Q, X = ue[1], $ = ne - 1;
        return $ === 0 ? (R(function() {
          (re || !C.opGet(k)) && (d == null || d(X, !1));
        }), null) : [ne - 1, X];
      });
    };
  }, [k]), Y;
}
var wO = {}, _O = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Gu = /* @__PURE__ */ new Map();
function kO(u) {
  Gu.set(u, (Gu.get(u) || 0) + 1);
}
function OO(u, c) {
  if (typeof document < "u") {
    var p = document.querySelectorAll("style[".concat($c, '="').concat(u, '"]'));
    p.forEach(function(d) {
      if (d[_l] === c) {
        var m;
        (m = d.parentNode) === null || m === void 0 || m.removeChild(d);
      }
    });
  }
}
var DO = 0;
function MO(u, c) {
  Gu.set(u, (Gu.get(u) || 0) - 1);
  var p = Array.from(Gu.keys()), d = p.filter(function(m) {
    var b = Gu.get(m) || 0;
    return b <= 0;
  });
  p.length - d.length > DO && d.forEach(function(m) {
    OO(m, c), Gu.delete(m);
  });
}
var AO = function(c, p, d, m) {
  var b = d.getDerivativeToken(c), C = at(at({}, b), p);
  return m && (C = m(C)), C;
}, MC = "token";
function NO(u, c) {
  var p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d = sp(pm), m = d.cache.instanceId, b = d.container, C = p.salt, g = C === void 0 ? "" : C, k = p.override, R = k === void 0 ? wO : k, D = p.formatToken, N = p.getComputedToken, P = p.cssVar, Y = dO(function() {
    return Object.assign.apply(Object, [{}].concat(Qi(c)));
  }, c), re = up(Y), G = up(R), j = P ? up(P) : "", ue = Z0(MC, [g, u.id, re, G, j], function() {
    var Q, ne = N ? N(Y, R, u) : AO(Y, R, u, D), X = at({}, ne), $ = "";
    if (P) {
      var K = OC(ne, P.key, {
        prefix: P.prefix,
        ignore: P.ignore,
        unitless: P.unitless,
        preserve: P.preserve
      }), ee = Tt(K, 2);
      ne = ee[0], $ = ee[1];
    }
    var ae = Gb(ne, g);
    ne._tokenKey = ae, X._tokenKey = Gb(X, g);
    var Oe = (Q = P == null ? void 0 : P.key) !== null && Q !== void 0 ? Q : ae;
    ne._themeKey = Oe, kO(Oe);
    var Ue = "".concat(_O, "-").concat(cp(ae));
    return ne._hashId = Ue, [ne, Ue, X, $, (P == null ? void 0 : P.key) || ""];
  }, function(Q) {
    MO(Q[0]._themeKey, m);
  }, function(Q) {
    var ne = Tt(Q, 4), X = ne[0], $ = ne[3];
    if (P && $) {
      var K = Ic($, cp("css-variables-".concat(X._themeKey)), {
        mark: Wi,
        prepend: "queue",
        attachTo: b,
        priority: -999
      });
      K[_l] = m, K.setAttribute($c, X._themeKey);
    }
  });
  return ue;
}
var PO = function(c, p, d) {
  var m = Tt(c, 5), b = m[2], C = m[3], g = m[4], k = d || {}, R = k.plain;
  if (!C)
    return null;
  var D = b._tokenKey, N = -999, P = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(N)
  }, Y = lm(C, g, D, P, R);
  return [N, D, Y];
}, LO = {
  animationIterationCount: 1,
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
}, BM = "-ms-", WM = "-moz-", YM = "-webkit-", AC = "comm", NC = "rule", PC = "decl", UO = "@import", zO = "@keyframes", HO = "@layer", LC = Math.abs, J0 = String.fromCharCode, jO = Object.assign;
function QM(u, c) {
  return Ia(u, 0) ^ 45 ? (((c << 2 ^ Ia(u, 0)) << 2 ^ Ia(u, 1)) << 2 ^ Ia(u, 2)) << 2 ^ Ia(u, 3) : 0;
}
function UC(u) {
  return u.trim();
}
function IO(u, c) {
  return (u = c.exec(u)) ? u[0] : u;
}
function Kh(u, c, p) {
  return u.replace(c, p);
}
function FO(u, c, p) {
  return u.indexOf(c, p);
}
function Ia(u, c) {
  return u.charCodeAt(c) | 0;
}
function fp(u, c, p) {
  return u.slice(c, p);
}
function Ho(u) {
  return u.length;
}
function VO(u) {
  return u.length;
}
function lp(u, c) {
  return c.push(u), u;
}
function GM(u, c) {
  return u.map(c).join("");
}
function XM(u, c) {
  return u.filter(function(p) {
    return !IO(p, c);
  });
}
var vm = 1, Bc = 1, zC = 0, Si = 0, Sn = 0, Wc = "";
function hm(u, c, p, d, m, b, C, g) {
  return { value: u, root: c, parent: p, type: d, props: m, children: b, line: vm, column: Bc, length: C, return: "", siblings: g };
}
function $O(u, c) {
  return jO(hm("", null, null, "", null, null, 0, u.siblings), u, { length: -u.length }, c);
}
function qM(u) {
  for (; u.root; )
    u = $O(u.root, { children: [u] });
  lp(u, u.siblings);
}
function BO() {
  return Sn;
}
function WO() {
  return Sn = Si > 0 ? Ia(Wc, --Si) : 0, Bc--, Sn === 10 && (Bc = 1, vm--), Sn;
}
function Yi() {
  return Sn = Si < zC ? Ia(Wc, Si++) : 0, Bc++, Sn === 10 && (Bc = 1, vm++), Sn;
}
function Xu() {
  return Ia(Wc, Si);
}
function Zh() {
  return Si;
}
function mm(u, c) {
  return fp(Wc, u, c);
}
function U0(u) {
  switch (u) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function YO(u) {
  return vm = Bc = 1, zC = Ho(Wc = u), Si = 0, [];
}
function QO(u) {
  return Wc = "", u;
}
function E0(u) {
  return UC(mm(Si - 1, z0(u === 91 ? u + 2 : u === 40 ? u + 1 : u)));
}
function GO(u) {
  for (; (Sn = Xu()) && Sn < 33; )
    Yi();
  return U0(u) > 2 || U0(Sn) > 3 ? "" : " ";
}
function XO(u, c) {
  for (; --c && Yi() && !(Sn < 48 || Sn > 102 || Sn > 57 && Sn < 65 || Sn > 70 && Sn < 97); )
    ;
  return mm(u, Zh() + (c < 6 && Xu() == 32 && Yi() == 32));
}
function z0(u) {
  for (; Yi(); )
    switch (Sn) {
      case u:
        return Si;
      case 34:
      case 39:
        u !== 34 && u !== 39 && z0(Sn);
        break;
      case 40:
        u === 41 && z0(u);
        break;
      case 92:
        Yi();
        break;
    }
  return Si;
}
function qO(u, c) {
  for (; Yi() && u + Sn !== 57; )
    if (u + Sn === 84 && Xu() === 47)
      break;
  return "/*" + mm(c, Si - 1) + "*" + J0(u === 47 ? u : Yi());
}
function KO(u) {
  for (; !U0(Xu()); )
    Yi();
  return mm(u, Si);
}
function ZO(u) {
  return QO(Jh("", null, null, null, [""], u = YO(u), 0, [0], u));
}
function Jh(u, c, p, d, m, b, C, g, k) {
  for (var R = 0, D = 0, N = C, P = 0, Y = 0, re = 0, G = 1, j = 1, ue = 1, Q = 0, ne = "", X = m, $ = b, K = d, ee = ne; j; )
    switch (re = Q, Q = Yi()) {
      case 40:
        if (re != 108 && Ia(ee, N - 1) == 58) {
          FO(ee += Kh(E0(Q), "&", "&\f"), "&\f", LC(R ? g[R - 1] : 0)) != -1 && (ue = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        ee += E0(Q);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        ee += GO(re);
        break;
      case 92:
        ee += XO(Zh() - 1, 7);
        continue;
      case 47:
        switch (Xu()) {
          case 42:
          case 47:
            lp(JO(qO(Yi(), Zh()), c, p, k), k);
            break;
          default:
            ee += "/";
        }
        break;
      case 123 * G:
        g[R++] = Ho(ee) * ue;
      case 125 * G:
      case 59:
      case 0:
        switch (Q) {
          case 0:
          case 125:
            j = 0;
          case 59 + D:
            ue == -1 && (ee = Kh(ee, /\f/g, "")), Y > 0 && Ho(ee) - N && lp(Y > 32 ? Zb(ee + ";", d, p, N - 1, k) : Zb(Kh(ee, " ", "") + ";", d, p, N - 2, k), k);
            break;
          case 59:
            ee += ";";
          default:
            if (lp(K = Kb(ee, c, p, R, D, m, g, ne, X = [], $ = [], N, b), b), Q === 123)
              if (D === 0)
                Jh(ee, c, K, K, X, b, N, g, $);
              else
                switch (P === 99 && Ia(ee, 3) === 110 ? 100 : P) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Jh(u, K, K, d && lp(Kb(u, K, K, 0, 0, m, g, ne, m, X = [], N, $), $), m, $, N, g, d ? X : $);
                    break;
                  default:
                    Jh(ee, K, K, K, [""], $, 0, g, $);
                }
        }
        R = D = Y = 0, G = ue = 1, ne = ee = "", N = C;
        break;
      case 58:
        N = 1 + Ho(ee), Y = re;
      default:
        if (G < 1) {
          if (Q == 123)
            --G;
          else if (Q == 125 && G++ == 0 && WO() == 125)
            continue;
        }
        switch (ee += J0(Q), Q * G) {
          case 38:
            ue = D > 0 ? 1 : (ee += "\f", -1);
            break;
          case 44:
            g[R++] = (Ho(ee) - 1) * ue, ue = 1;
            break;
          case 64:
            Xu() === 45 && (ee += E0(Yi())), P = Xu(), D = N = Ho(ne = ee += KO(Zh())), Q++;
            break;
          case 45:
            re === 45 && Ho(ee) == 2 && (G = 0);
        }
    }
  return b;
}
function Kb(u, c, p, d, m, b, C, g, k, R, D, N) {
  for (var P = m - 1, Y = m === 0 ? b : [""], re = VO(Y), G = 0, j = 0, ue = 0; G < d; ++G)
    for (var Q = 0, ne = fp(u, P + 1, P = LC(j = C[G])), X = u; Q < re; ++Q)
      (X = UC(j > 0 ? Y[Q] + " " + ne : Kh(ne, /&\f/g, Y[Q]))) && (k[ue++] = X);
  return hm(u, c, p, m === 0 ? NC : g, k, R, D, N);
}
function JO(u, c, p, d) {
  return hm(u, c, p, AC, J0(BO()), fp(u, 2, -2), 0, d);
}
function Zb(u, c, p, d, m) {
  return hm(u, c, p, PC, fp(u, 0, d), fp(u, d + 1, -1), d, m);
}
function H0(u, c) {
  for (var p = "", d = 0; d < u.length; d++)
    p += c(u[d], d, u, c) || "";
  return p;
}
function eD(u, c, p, d) {
  switch (u.type) {
    case HO:
      if (u.children.length)
        break;
    case UO:
    case PC:
      return u.return = u.return || u.value;
    case AC:
      return "";
    case zO:
      return u.return = u.value + "{" + H0(u.children, d) + "}";
    case NC:
      if (!Ho(u.value = u.props.join(",")))
        return "";
  }
  return Ho(p = H0(u.children, d)) ? u.return = u.value + "{" + p + "}" : "";
}
function HC(u, c) {
  var p = c.path, d = c.parentSelectors;
  cm(!1, "[Ant Design CSS-in-JS] ".concat(p ? "Error in ".concat(p, ": ") : "").concat(u).concat(d.length ? " Selector: ".concat(d.join(" | ")) : ""));
}
var tD = function(c, p, d) {
  if (c === "content") {
    var m = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, b = ["normal", "none", "initial", "inherit", "unset"];
    (typeof p != "string" || b.indexOf(p) === -1 && !m.test(p) && (p.charAt(0) !== p.charAt(p.length - 1) || p.charAt(0) !== '"' && p.charAt(0) !== "'")) && HC("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(p, "\"'`."), d);
  }
}, nD = function(c, p, d) {
  c === "animation" && d.hashId && p !== "none" && HC("You seem to be using hashed animation '".concat(p, "', in which case 'animationName' with Keyframe as value is recommended."), d);
}, Jb = "data-ant-cssinjs-cache-path", jC = "_FILE_STYLE__", qu, IC = !0;
function rD() {
  if (!qu && (qu = {}, kl())) {
    var u = document.createElement("div");
    u.className = Jb, u.style.position = "fixed", u.style.visibility = "hidden", u.style.top = "-9999px", document.body.appendChild(u);
    var c = getComputedStyle(u).content || "";
    c = c.replace(/^"/, "").replace(/"$/, ""), c.split(";").forEach(function(m) {
      var b = m.split(":"), C = Tt(b, 2), g = C[0], k = C[1];
      qu[g] = k;
    });
    var p = document.querySelector("style[".concat(Jb, "]"));
    if (p) {
      var d;
      IC = !1, (d = p.parentNode) === null || d === void 0 || d.removeChild(p);
    }
    document.body.removeChild(u);
  }
}
function iD(u) {
  return rD(), !!qu[u];
}
function aD(u) {
  var c = qu[u], p = null;
  if (c && kl())
    if (IC)
      p = jC;
    else {
      var d = document.querySelector("style[".concat(Wi, '="').concat(qu[u], '"]'));
      d ? p = d.innerHTML : delete qu[u];
    }
  return [p, c];
}
var FC = "_skip_check_", VC = "_multi_value_";
function em(u) {
  var c = H0(ZO(u), eD);
  return c.replace(/\{%%%\:[^;];}/g, ";");
}
function oD(u) {
  return vr(u) === "object" && u && (FC in u || VC in u);
}
function lD(u, c, p) {
  if (!c)
    return u;
  var d = ".".concat(c), m = p === "low" ? ":where(".concat(d, ")") : d, b = u.split(",").map(function(C) {
    var g, k = C.trim().split(/\s+/), R = k[0] || "", D = ((g = R.match(/^\w+/)) === null || g === void 0 ? void 0 : g[0]) || "";
    return R = "".concat(D).concat(m).concat(R.slice(D.length)), [R].concat(Qi(k.slice(1))).join(" ");
  });
  return b.join(",");
}
var uD = function u(c) {
  var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, m = d.root, b = d.injectHash, C = d.parentSelectors, g = p.hashId, k = p.layer, R = p.path, D = p.hashPriority, N = p.transformers, P = N === void 0 ? [] : N, Y = p.linters, re = Y === void 0 ? [] : Y, G = "", j = {};
  function ue(X) {
    var $ = X.getName(g);
    if (!j[$]) {
      var K = u(X.style, p, {
        root: !1,
        parentSelectors: C
      }), ee = Tt(K, 1), ae = ee[0];
      j[$] = "@keyframes ".concat(X.getName(g)).concat(ae);
    }
  }
  function Q(X) {
    var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return X.forEach(function(K) {
      Array.isArray(K) ? Q(K, $) : K && $.push(K);
    }), $;
  }
  var ne = Q(Array.isArray(c) ? c : [c]);
  return ne.forEach(function(X) {
    var $ = typeof X == "string" && !m ? {} : X;
    if (typeof $ == "string")
      G += "".concat($, `
`);
    else if ($._keyframe)
      ue($);
    else {
      var K = P.reduce(function(ee, ae) {
        var Oe;
        return (ae == null || (Oe = ae.visit) === null || Oe === void 0 ? void 0 : Oe.call(ae, ee)) || ee;
      }, $);
      Object.keys(K).forEach(function(ee) {
        var ae = K[ee];
        if (vr(ae) === "object" && ae && (ee !== "animationName" || !ae._keyframe) && !oD(ae)) {
          var Oe = !1, Ue = ee.trim(), Ie = !1;
          (m || b) && g ? Ue.startsWith("@") ? Oe = !0 : Ue = lD(ee, g, D) : m && !g && (Ue === "&" || Ue === "") && (Ue = "", Ie = !0);
          var ze = u(ae, p, {
            root: Ie,
            injectHash: Oe,
            parentSelectors: [].concat(Qi(C), [Ue])
          }), $e = Tt(ze, 2), xe = $e[0], Z = $e[1];
          j = at(at({}, j), Z), G += "".concat(Ue).concat(xe);
        } else {
          let De = function(de, Re) {
            process.env.NODE_ENV !== "production" && (vr(ae) !== "object" || !(ae != null && ae[FC])) && [tD, nD].concat(Qi(re)).forEach(function(Ge) {
              return Ge(de, Re, {
                path: R,
                hashId: g,
                parentSelectors: C
              });
            });
            var st = de.replace(/[A-Z]/g, function(Ge) {
              return "-".concat(Ge.toLowerCase());
            }), Ze = Re;
            !LO[de] && typeof Ze == "number" && Ze !== 0 && (Ze = "".concat(Ze, "px")), de === "animationName" && Re !== null && Re !== void 0 && Re._keyframe && (ue(Re), Ze = Re.getName(g)), G += "".concat(st, ":").concat(Ze, ";");
          };
          var We, be = (We = ae == null ? void 0 : ae.value) !== null && We !== void 0 ? We : ae;
          vr(ae) === "object" && ae !== null && ae !== void 0 && ae[VC] && Array.isArray(be) ? be.forEach(function(de) {
            De(ee, de);
          }) : De(ee, be);
        }
      });
    }
  }), m ? k && (G = "@layer ".concat(k.name, " {").concat(G, "}"), k.dependencies && (j["@layer ".concat(k.name)] = k.dependencies.map(function(X) {
    return "@layer ".concat(X, ", ").concat(k.name, ";");
  }).join(`
`))) : G = "{".concat(G, "}"), [G, j];
};
function $C(u, c) {
  return cp("".concat(u.join("%")).concat(c));
}
function sD() {
  return null;
}
var BC = "style";
function j0(u, c) {
  var p = u.token, d = u.path, m = u.hashId, b = u.layer, C = u.nonce, g = u.clientOnly, k = u.order, R = k === void 0 ? 0 : k, D = ve.useContext(pm), N = D.autoClear, P = D.mock, Y = D.defaultCache, re = D.hashPriority, G = D.container, j = D.ssrInline, ue = D.transformers, Q = D.linters, ne = D.cache, X = D.layer, $ = p._tokenKey, K = [$];
  X && K.push("layer"), K.push.apply(K, Qi(d));
  var ee = N0;
  process.env.NODE_ENV !== "production" && P !== void 0 && (ee = P === "client");
  var ae = Z0(
    BC,
    K,
    // Create cache if needed
    function() {
      var $e = K.join("|");
      if (iD($e)) {
        var xe = aD($e), Z = Tt(xe, 2), We = Z[0], be = Z[1];
        if (We)
          return [We, $, be, {}, g, R];
      }
      var De = c(), de = uD(De, {
        hashId: m,
        hashPriority: re,
        layer: X ? b : void 0,
        path: d.join("-"),
        transformers: ue,
        linters: Q
      }), Re = Tt(de, 2), st = Re[0], Ze = Re[1], Ge = em(st), q = $C(K, Ge);
      return [Ge, $, q, Ze, g, R];
    },
    // Remove cache if no need
    function($e, xe) {
      var Z = Tt($e, 3), We = Z[2];
      (xe || N) && N0 && pC(We, {
        mark: Wi
      });
    },
    // Effect: Inject style here
    function($e) {
      var xe = Tt($e, 4), Z = xe[0];
      xe[1];
      var We = xe[2], be = xe[3];
      if (ee && Z !== jC) {
        var De = {
          mark: Wi,
          prepend: X ? !1 : "queue",
          attachTo: G,
          priority: R
        }, de = typeof C == "function" ? C() : C;
        de && (De.csp = {
          nonce: de
        });
        var Re = [], st = [];
        Object.keys(be).forEach(function(Ge) {
          Ge.startsWith("@layer") ? Re.push(Ge) : st.push(Ge);
        }), Re.forEach(function(Ge) {
          Ic(em(be[Ge]), "_layer-".concat(Ge), at(at({}, De), {}, {
            prepend: !0
          }));
        });
        var Ze = Ic(Z, We, De);
        Ze[_l] = ne.instanceId, Ze.setAttribute($c, $), process.env.NODE_ENV !== "production" && Ze.setAttribute(uO, K.join("|")), st.forEach(function(Ge) {
          Ic(em(be[Ge]), "_effect-".concat(Ge), De);
        });
      }
    }
  ), Oe = Tt(ae, 3), Ue = Oe[0], Ie = Oe[1], ze = Oe[2];
  return function($e) {
    var xe;
    if (!j || ee || !Y)
      xe = /* @__PURE__ */ ve.createElement(sD, null);
    else {
      var Z;
      xe = /* @__PURE__ */ ve.createElement("style", vC({}, (Z = {}, gt(Z, $c, Ie), gt(Z, Wi, ze), Z), {
        dangerouslySetInnerHTML: {
          __html: Ue
        }
      }));
    }
    return /* @__PURE__ */ ve.createElement(ve.Fragment, null, xe, $e);
  };
}
var cD = function(c, p, d) {
  var m = Tt(c, 6), b = m[0], C = m[1], g = m[2], k = m[3], R = m[4], D = m[5], N = d || {}, P = N.plain;
  if (R)
    return null;
  var Y = b, re = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(D)
  };
  return Y = lm(b, C, g, re, P), k && Object.keys(k).forEach(function(G) {
    if (!p[G]) {
      p[G] = !0;
      var j = em(k[G]), ue = lm(j, C, "_effect-".concat(G), re, P);
      G.startsWith("@layer") ? Y = ue + Y : Y += ue;
    }
  }), [D, g, Y];
}, WC = "cssVar", fD = function(c, p) {
  var d = c.key, m = c.prefix, b = c.unitless, C = c.ignore, g = c.token, k = c.scope, R = k === void 0 ? "" : k, D = sp(pm), N = D.cache.instanceId, P = D.container, Y = g._tokenKey, re = [].concat(Qi(c.path), [d, R, Y]), G = Z0(WC, re, function() {
    var j = p(), ue = OC(j, d, {
      prefix: m,
      unitless: b,
      ignore: C,
      scope: R
    }), Q = Tt(ue, 2), ne = Q[0], X = Q[1], $ = $C(re, X);
    return [ne, X, $, d];
  }, function(j) {
    var ue = Tt(j, 3), Q = ue[2];
    N0 && pC(Q, {
      mark: Wi
    });
  }, function(j) {
    var ue = Tt(j, 3), Q = ue[1], ne = ue[2];
    if (Q) {
      var X = Ic(Q, ne, {
        mark: Wi,
        prepend: "queue",
        attachTo: P,
        priority: -999
      });
      X[_l] = N, X.setAttribute($c, d);
    }
  });
  return G;
}, dD = function(c, p, d) {
  var m = Tt(c, 4), b = m[1], C = m[2], g = m[3], k = d || {}, R = k.plain;
  if (!b)
    return null;
  var D = -999, N = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(D)
  }, P = lm(b, g, C, N, R);
  return [D, C, P];
}, ap;
ap = {}, gt(ap, BC, cD), gt(ap, MC, PO), gt(ap, WC, dD);
var KM = /* @__PURE__ */ function() {
  function u(c, p) {
    jo(this, u), gt(this, "name", void 0), gt(this, "style", void 0), gt(this, "_keyframe", !0), this.name = c, this.style = p;
  }
  return Io(u, [{
    key: "getName",
    value: function() {
      var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return p ? "".concat(p, "-").concat(this.name) : this.name;
    }
  }]), u;
}();
function zc(u) {
  return u.notSplit = !0, u;
}
zc(["borderTop", "borderBottom"]), zc(["borderTop"]), zc(["borderBottom"]), zc(["borderLeft", "borderRight"]), zc(["borderLeft"]), zc(["borderRight"]);
function pD(u) {
  return Ok(u) || CC(u) || fC(u) || Dk();
}
function I0(u, c) {
  for (var p = u, d = 0; d < c.length; d += 1) {
    if (p == null)
      return;
    p = p[c[d]];
  }
  return p;
}
function YC(u, c, p, d) {
  if (!c.length)
    return p;
  var m = pD(c), b = m[0], C = m.slice(1), g;
  return !u && typeof b == "number" ? g = [] : Array.isArray(u) ? g = Qi(u) : g = at({}, u), d && p === void 0 && C.length === 1 ? delete g[b][C[0]] : g[b] = YC(g[b], C, p, d), g;
}
function T0(u, c, p) {
  var d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return c.length && d && p === void 0 && !I0(u, c.slice(0, -1)) ? u : YC(u, c, p, d);
}
function vD(u) {
  return vr(u) === "object" && u !== null && Object.getPrototypeOf(u) === Object.prototype;
}
function eC(u) {
  return Array.isArray(u) ? [] : {};
}
var hD = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function mD() {
  for (var u = arguments.length, c = new Array(u), p = 0; p < u; p++)
    c[p] = arguments[p];
  var d = eC(c[0]);
  return c.forEach(function(m) {
    function b(C, g) {
      var k = new Set(g), R = I0(m, C), D = Array.isArray(R);
      if (D || vD(R)) {
        if (!k.has(R)) {
          k.add(R);
          var N = I0(d, C);
          D ? d = T0(d, C, []) : (!N || vr(N) !== "object") && (d = T0(d, C, eC(R))), hD(R).forEach(function(P) {
            b([].concat(Qi(C), [P]), k);
          });
        }
      } else
        d = T0(d, C, R);
    }
    b([]);
  }), d;
}
function QC() {
}
let zo = null;
function yD() {
  zo = null, Mk();
}
let eS = QC;
process.env.NODE_ENV !== "production" && (eS = (u, c, p) => {
  cm(u, `[antd: ${c}] ${p}`), process.env.NODE_ENV === "test" && yD();
});
const GC = /* @__PURE__ */ ve.createContext({}), ym = process.env.NODE_ENV !== "production" ? (u) => {
  const {
    strict: c
  } = ve.useContext(GC), p = (d, m, b) => {
    if (!d)
      if (c === !1 && m === "deprecated") {
        const C = zo;
        zo || (zo = {}), zo[u] = zo[u] || [], zo[u].includes(b || "") || zo[u].push(b || ""), C || console.warn("[antd] There exists deprecated usage in your code:", zo);
      } else
        process.env.NODE_ENV !== "production" && eS(d, u, b);
  };
  return p.deprecated = (d, m, b, C) => {
    p(d, "deprecated", `\`${m}\` is deprecated. Please use \`${b}\` instead.${C ? ` ${C}` : ""}`);
  }, p;
} : () => {
  const u = () => {
  };
  return u.deprecated = QC, u;
}, gm = eS, gD = /* @__PURE__ */ hC(void 0);
var SD = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, ED = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const XC = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, tC = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, ED),
  timePickerLocale: Object.assign({}, XC)
}, Qr = "${label} is not a valid ${type}", Sm = {
  locale: "en",
  Pagination: SD,
  DatePicker: tC,
  TimePicker: XC,
  Calendar: tC,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: Qr,
        method: Qr,
        array: Qr,
        object: Qr,
        number: Qr,
        date: Qr,
        boolean: Qr,
        integer: Qr,
        float: Qr,
        regexp: Qr,
        email: Qr,
        url: Qr,
        hex: Qr
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty"
  }
};
let tm = Object.assign({}, Sm.Modal), nm = [];
const nC = () => nm.reduce((u, c) => Object.assign(Object.assign({}, u), c), Sm.Modal);
function TD(u) {
  if (u) {
    const c = Object.assign({}, u);
    return nm.push(c), tm = nC(), () => {
      nm = nm.filter((p) => p !== c), tm = nC();
    };
  }
  tm = Object.assign({}, Sm.Modal);
}
function ZM() {
  return tm;
}
const qC = /* @__PURE__ */ hC(void 0), KC = "internalMark", ZC = (u) => {
  const {
    locale: c = {},
    children: p,
    _ANT_MARK__: d
  } = u;
  if (process.env.NODE_ENV !== "production") {
    const b = ym("LocaleProvider");
    process.env.NODE_ENV !== "production" && b(d === KC, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  ve.useEffect(() => TD(c && c.Modal), [c]);
  const m = ve.useMemo(() => Object.assign(Object.assign({}, c), {
    exist: !0
  }), [c]);
  return /* @__PURE__ */ ve.createElement(qC.Provider, {
    value: m
  }, p);
};
process.env.NODE_ENV !== "production" && (ZC.displayName = "LocaleProvider");
var Gr = (
  /** @class */
  function() {
    function u(c, p) {
      c === void 0 && (c = ""), p === void 0 && (p = {});
      var d;
      if (c instanceof u)
        return c;
      typeof c == "number" && (c = Ak(c)), this.originalInput = c;
      var m = Nk(c);
      this.originalInput = c, this.r = m.r, this.g = m.g, this.b = m.b, this.a = m.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (d = p.format) !== null && d !== void 0 ? d : m.format, this.gradientType = p.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = m.ok;
    }
    return u.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, u.prototype.isLight = function() {
      return !this.isDark();
    }, u.prototype.getBrightness = function() {
      var c = this.toRgb();
      return (c.r * 299 + c.g * 587 + c.b * 114) / 1e3;
    }, u.prototype.getLuminance = function() {
      var c = this.toRgb(), p, d, m, b = c.r / 255, C = c.g / 255, g = c.b / 255;
      return b <= 0.03928 ? p = b / 12.92 : p = Math.pow((b + 0.055) / 1.055, 2.4), C <= 0.03928 ? d = C / 12.92 : d = Math.pow((C + 0.055) / 1.055, 2.4), g <= 0.03928 ? m = g / 12.92 : m = Math.pow((g + 0.055) / 1.055, 2.4), 0.2126 * p + 0.7152 * d + 0.0722 * m;
    }, u.prototype.getAlpha = function() {
      return this.a;
    }, u.prototype.setAlpha = function(c) {
      return this.a = Pk(c), this.roundA = Math.round(100 * this.a) / 100, this;
    }, u.prototype.isMonochrome = function() {
      var c = this.toHsl().s;
      return c === 0;
    }, u.prototype.toHsv = function() {
      var c = Rb(this.r, this.g, this.b);
      return { h: c.h * 360, s: c.s, v: c.v, a: this.a };
    }, u.prototype.toHsvString = function() {
      var c = Rb(this.r, this.g, this.b), p = Math.round(c.h * 360), d = Math.round(c.s * 100), m = Math.round(c.v * 100);
      return this.a === 1 ? "hsv(".concat(p, ", ").concat(d, "%, ").concat(m, "%)") : "hsva(".concat(p, ", ").concat(d, "%, ").concat(m, "%, ").concat(this.roundA, ")");
    }, u.prototype.toHsl = function() {
      var c = wb(this.r, this.g, this.b);
      return { h: c.h * 360, s: c.s, l: c.l, a: this.a };
    }, u.prototype.toHslString = function() {
      var c = wb(this.r, this.g, this.b), p = Math.round(c.h * 360), d = Math.round(c.s * 100), m = Math.round(c.l * 100);
      return this.a === 1 ? "hsl(".concat(p, ", ").concat(d, "%, ").concat(m, "%)") : "hsla(".concat(p, ", ").concat(d, "%, ").concat(m, "%, ").concat(this.roundA, ")");
    }, u.prototype.toHex = function(c) {
      return c === void 0 && (c = !1), _b(this.r, this.g, this.b, c);
    }, u.prototype.toHexString = function(c) {
      return c === void 0 && (c = !1), "#" + this.toHex(c);
    }, u.prototype.toHex8 = function(c) {
      return c === void 0 && (c = !1), Lk(this.r, this.g, this.b, this.a, c);
    }, u.prototype.toHex8String = function(c) {
      return c === void 0 && (c = !1), "#" + this.toHex8(c);
    }, u.prototype.toHexShortString = function(c) {
      return c === void 0 && (c = !1), this.a === 1 ? this.toHexString(c) : this.toHex8String(c);
    }, u.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, u.prototype.toRgbString = function() {
      var c = Math.round(this.r), p = Math.round(this.g), d = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(c, ", ").concat(p, ", ").concat(d, ")") : "rgba(".concat(c, ", ").concat(p, ", ").concat(d, ", ").concat(this.roundA, ")");
    }, u.prototype.toPercentageRgb = function() {
      var c = function(p) {
        return "".concat(Math.round(kb(p, 255) * 100), "%");
      };
      return {
        r: c(this.r),
        g: c(this.g),
        b: c(this.b),
        a: this.a
      };
    }, u.prototype.toPercentageRgbString = function() {
      var c = function(p) {
        return Math.round(kb(p, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(c(this.r), "%, ").concat(c(this.g), "%, ").concat(c(this.b), "%)") : "rgba(".concat(c(this.r), "%, ").concat(c(this.g), "%, ").concat(c(this.b), "%, ").concat(this.roundA, ")");
    }, u.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var c = "#" + _b(this.r, this.g, this.b, !1), p = 0, d = Object.entries(Uk); p < d.length; p++) {
        var m = d[p], b = m[0], C = m[1];
        if (c === C)
          return b;
      }
      return !1;
    }, u.prototype.toString = function(c) {
      var p = !!c;
      c = c ?? this.format;
      var d = !1, m = this.a < 1 && this.a >= 0, b = !p && m && (c.startsWith("hex") || c === "name");
      return b ? c === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (c === "rgb" && (d = this.toRgbString()), c === "prgb" && (d = this.toPercentageRgbString()), (c === "hex" || c === "hex6") && (d = this.toHexString()), c === "hex3" && (d = this.toHexString(!0)), c === "hex4" && (d = this.toHex8String(!0)), c === "hex8" && (d = this.toHex8String()), c === "name" && (d = this.toName()), c === "hsl" && (d = this.toHslString()), c === "hsv" && (d = this.toHsvString()), d || this.toHexString());
    }, u.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, u.prototype.clone = function() {
      return new u(this.toString());
    }, u.prototype.lighten = function(c) {
      c === void 0 && (c = 10);
      var p = this.toHsl();
      return p.l += c / 100, p.l = Vh(p.l), new u(p);
    }, u.prototype.brighten = function(c) {
      c === void 0 && (c = 10);
      var p = this.toRgb();
      return p.r = Math.max(0, Math.min(255, p.r - Math.round(255 * -(c / 100)))), p.g = Math.max(0, Math.min(255, p.g - Math.round(255 * -(c / 100)))), p.b = Math.max(0, Math.min(255, p.b - Math.round(255 * -(c / 100)))), new u(p);
    }, u.prototype.darken = function(c) {
      c === void 0 && (c = 10);
      var p = this.toHsl();
      return p.l -= c / 100, p.l = Vh(p.l), new u(p);
    }, u.prototype.tint = function(c) {
      return c === void 0 && (c = 10), this.mix("white", c);
    }, u.prototype.shade = function(c) {
      return c === void 0 && (c = 10), this.mix("black", c);
    }, u.prototype.desaturate = function(c) {
      c === void 0 && (c = 10);
      var p = this.toHsl();
      return p.s -= c / 100, p.s = Vh(p.s), new u(p);
    }, u.prototype.saturate = function(c) {
      c === void 0 && (c = 10);
      var p = this.toHsl();
      return p.s += c / 100, p.s = Vh(p.s), new u(p);
    }, u.prototype.greyscale = function() {
      return this.desaturate(100);
    }, u.prototype.spin = function(c) {
      var p = this.toHsl(), d = (p.h + c) % 360;
      return p.h = d < 0 ? 360 + d : d, new u(p);
    }, u.prototype.mix = function(c, p) {
      p === void 0 && (p = 50);
      var d = this.toRgb(), m = new u(c).toRgb(), b = p / 100, C = {
        r: (m.r - d.r) * b + d.r,
        g: (m.g - d.g) * b + d.g,
        b: (m.b - d.b) * b + d.b,
        a: (m.a - d.a) * b + d.a
      };
      return new u(C);
    }, u.prototype.analogous = function(c, p) {
      c === void 0 && (c = 6), p === void 0 && (p = 30);
      var d = this.toHsl(), m = 360 / p, b = [this];
      for (d.h = (d.h - (m * c >> 1) + 720) % 360; --c; )
        d.h = (d.h + m) % 360, b.push(new u(d));
      return b;
    }, u.prototype.complement = function() {
      var c = this.toHsl();
      return c.h = (c.h + 180) % 360, new u(c);
    }, u.prototype.monochromatic = function(c) {
      c === void 0 && (c = 6);
      for (var p = this.toHsv(), d = p.h, m = p.s, b = p.v, C = [], g = 1 / c; c--; )
        C.push(new u({ h: d, s: m, v: b })), b = (b + g) % 1;
      return C;
    }, u.prototype.splitcomplement = function() {
      var c = this.toHsl(), p = c.h;
      return [
        this,
        new u({ h: (p + 72) % 360, s: c.s, l: c.l }),
        new u({ h: (p + 216) % 360, s: c.s, l: c.l })
      ];
    }, u.prototype.onBackground = function(c) {
      var p = this.toRgb(), d = new u(c).toRgb(), m = p.a + d.a * (1 - p.a);
      return new u({
        r: (p.r * p.a + d.r * d.a * (1 - p.a)) / m,
        g: (p.g * p.a + d.g * d.a * (1 - p.a)) / m,
        b: (p.b * p.a + d.b * d.a * (1 - p.a)) / m,
        a: m
      });
    }, u.prototype.triad = function() {
      return this.polyad(3);
    }, u.prototype.tetrad = function() {
      return this.polyad(4);
    }, u.prototype.polyad = function(c) {
      for (var p = this.toHsl(), d = p.h, m = [this], b = 360 / c, C = 1; C < c; C++)
        m.push(new u({ h: (d + C * b) % 360, s: p.s, l: p.l }));
      return m;
    }, u.prototype.equals = function(c) {
      return this.toRgbString() === new u(c).toRgbString();
    }, u;
  }()
);
const JC = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, dp = Object.assign(Object.assign({}, JC), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
});
function bD(u, c) {
  let {
    generateColorPalettes: p,
    generateNeutralColorPalettes: d
  } = c;
  const {
    colorSuccess: m,
    colorWarning: b,
    colorError: C,
    colorInfo: g,
    colorPrimary: k,
    colorBgBase: R,
    colorTextBase: D
  } = u, N = p(k), P = p(m), Y = p(b), re = p(C), G = p(g), j = d(R, D), ue = u.colorLink || u.colorInfo, Q = p(ue);
  return Object.assign(Object.assign({}, j), {
    colorPrimaryBg: N[1],
    colorPrimaryBgHover: N[2],
    colorPrimaryBorder: N[3],
    colorPrimaryBorderHover: N[4],
    colorPrimaryHover: N[5],
    colorPrimary: N[6],
    colorPrimaryActive: N[7],
    colorPrimaryTextHover: N[8],
    colorPrimaryText: N[9],
    colorPrimaryTextActive: N[10],
    colorSuccessBg: P[1],
    colorSuccessBgHover: P[2],
    colorSuccessBorder: P[3],
    colorSuccessBorderHover: P[4],
    colorSuccessHover: P[4],
    colorSuccess: P[6],
    colorSuccessActive: P[7],
    colorSuccessTextHover: P[8],
    colorSuccessText: P[9],
    colorSuccessTextActive: P[10],
    colorErrorBg: re[1],
    colorErrorBgHover: re[2],
    colorErrorBgActive: re[3],
    colorErrorBorder: re[3],
    colorErrorBorderHover: re[4],
    colorErrorHover: re[5],
    colorError: re[6],
    colorErrorActive: re[7],
    colorErrorTextHover: re[8],
    colorErrorText: re[9],
    colorErrorTextActive: re[10],
    colorWarningBg: Y[1],
    colorWarningBgHover: Y[2],
    colorWarningBorder: Y[3],
    colorWarningBorderHover: Y[4],
    colorWarningHover: Y[4],
    colorWarning: Y[6],
    colorWarningActive: Y[7],
    colorWarningTextHover: Y[8],
    colorWarningText: Y[9],
    colorWarningTextActive: Y[10],
    colorInfoBg: G[1],
    colorInfoBgHover: G[2],
    colorInfoBorder: G[3],
    colorInfoBorderHover: G[4],
    colorInfoHover: G[4],
    colorInfo: G[6],
    colorInfoActive: G[7],
    colorInfoTextHover: G[8],
    colorInfoText: G[9],
    colorInfoTextActive: G[10],
    colorLinkHover: Q[4],
    colorLink: Q[6],
    colorLinkActive: Q[7],
    colorBgMask: new Gr("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const CD = (u) => {
  let c = u, p = u, d = u, m = u;
  return u < 6 && u >= 5 ? c = u + 1 : u < 16 && u >= 6 ? c = u + 2 : u >= 16 && (c = 16), u < 7 && u >= 5 ? p = 4 : u < 8 && u >= 7 ? p = 5 : u < 14 && u >= 8 ? p = 6 : u < 16 && u >= 14 ? p = 7 : u >= 16 && (p = 8), u < 6 && u >= 2 ? d = 1 : u >= 6 && (d = 2), u > 4 && u < 8 ? m = 4 : u >= 8 && (m = 6), {
    borderRadius: u,
    borderRadiusXS: d,
    borderRadiusSM: p,
    borderRadiusLG: c,
    borderRadiusOuter: m
  };
};
function xD(u) {
  const {
    motionUnit: c,
    motionBase: p,
    borderRadius: d,
    lineWidth: m
  } = u;
  return Object.assign({
    // motion
    motionDurationFast: `${(p + c).toFixed(1)}s`,
    motionDurationMid: `${(p + c * 2).toFixed(1)}s`,
    motionDurationSlow: `${(p + c * 3).toFixed(1)}s`,
    // line
    lineWidthBold: m + 1
  }, CD(d));
}
const RD = (u) => {
  const {
    controlHeight: c
  } = u;
  return {
    controlHeightSM: c * 0.75,
    controlHeightXS: c * 0.5,
    controlHeightLG: c * 1.25
  };
};
function wD(u) {
  return (u + 8) / u;
}
function _D(u) {
  const c = new Array(10).fill(null).map((p, d) => {
    const m = d - 1, b = u * Math.pow(2.71828, m / 5), C = d > 1 ? Math.floor(b) : Math.ceil(b);
    return Math.floor(C / 2) * 2;
  });
  return c[1] = u, c.map((p) => ({
    size: p,
    lineHeight: wD(p)
  }));
}
const kD = (u) => {
  const c = _D(u), p = c.map((D) => D.size), d = c.map((D) => D.lineHeight), m = p[1], b = p[0], C = p[2], g = d[1], k = d[0], R = d[2];
  return {
    fontSizeSM: b,
    fontSize: m,
    fontSizeLG: C,
    fontSizeXL: p[3],
    fontSizeHeading1: p[6],
    fontSizeHeading2: p[5],
    fontSizeHeading3: p[4],
    fontSizeHeading4: p[3],
    fontSizeHeading5: p[2],
    lineHeight: g,
    lineHeightLG: R,
    lineHeightSM: k,
    fontHeight: Math.round(g * m),
    fontHeightLG: Math.round(R * C),
    fontHeightSM: Math.round(k * b),
    lineHeightHeading1: d[6],
    lineHeightHeading2: d[5],
    lineHeightHeading3: d[4],
    lineHeightHeading4: d[3],
    lineHeightHeading5: d[2]
  };
};
function OD(u) {
  const {
    sizeUnit: c,
    sizeStep: p
  } = u;
  return {
    sizeXXL: c * (p + 8),
    // 48
    sizeXL: c * (p + 4),
    // 32
    sizeLG: c * (p + 2),
    // 24
    sizeMD: c * (p + 1),
    // 20
    sizeMS: c * p,
    // 16
    size: c * p,
    // 16
    sizeSM: c * (p - 1),
    // 12
    sizeXS: c * (p - 2),
    // 8
    sizeXXS: c * (p - 3)
    // 4
  };
}
const Uo = (u, c) => new Gr(u).setAlpha(c).toRgbString(), op = (u, c) => new Gr(u).darken(c).toHexString(), DD = (u) => {
  const c = am(u);
  return {
    1: c[0],
    2: c[1],
    3: c[2],
    4: c[3],
    5: c[4],
    6: c[5],
    7: c[6],
    8: c[4],
    9: c[5],
    10: c[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, MD = (u, c) => {
  const p = u || "#fff", d = c || "#000";
  return {
    colorBgBase: p,
    colorTextBase: d,
    colorText: Uo(d, 0.88),
    colorTextSecondary: Uo(d, 0.65),
    colorTextTertiary: Uo(d, 0.45),
    colorTextQuaternary: Uo(d, 0.25),
    colorFill: Uo(d, 0.15),
    colorFillSecondary: Uo(d, 0.06),
    colorFillTertiary: Uo(d, 0.04),
    colorFillQuaternary: Uo(d, 0.02),
    colorBgLayout: op(p, 4),
    colorBgContainer: op(p, 0),
    colorBgElevated: op(p, 0),
    colorBgSpotlight: Uo(d, 0.85),
    colorBgBlur: "transparent",
    colorBorder: op(p, 15),
    colorBorderSecondary: op(p, 6)
  };
};
function AD(u) {
  const c = Object.keys(JC).map((p) => {
    const d = am(u[p]);
    return new Array(10).fill(1).reduce((m, b, C) => (m[`${p}-${C + 1}`] = d[C], m[`${p}${C + 1}`] = d[C], m), {});
  }).reduce((p, d) => (p = Object.assign(Object.assign({}, p), d), p), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, u), c), bD(u, {
    generateColorPalettes: DD,
    generateNeutralColorPalettes: MD
  })), kD(u.fontSize)), OD(u)), RD(u)), xD(u));
}
const e1 = A0(AD), F0 = {
  token: dp,
  override: {
    override: dp
  },
  hashed: !0
}, t1 = /* @__PURE__ */ gi.createContext(F0), tS = "anticon", ND = (u, c) => c || (u ? `ant-${u}` : "ant"), Em = /* @__PURE__ */ ve.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: ND,
  iconPrefixCls: tS
}), PD = `-ant-${Date.now()}-${Math.random()}`;
function LD(u, c) {
  const p = {}, d = (C, g) => {
    let k = C.clone();
    return k = (g == null ? void 0 : g(k)) || k, k.toRgbString();
  }, m = (C, g) => {
    const k = new Gr(C), R = am(k.toRgbString());
    p[`${g}-color`] = d(k), p[`${g}-color-disabled`] = R[1], p[`${g}-color-hover`] = R[4], p[`${g}-color-active`] = R[6], p[`${g}-color-outline`] = k.clone().setAlpha(0.2).toRgbString(), p[`${g}-color-deprecated-bg`] = R[0], p[`${g}-color-deprecated-border`] = R[2];
  };
  if (c.primaryColor) {
    m(c.primaryColor, "primary");
    const C = new Gr(c.primaryColor), g = am(C.toRgbString());
    g.forEach((R, D) => {
      p[`primary-${D + 1}`] = R;
    }), p["primary-color-deprecated-l-35"] = d(C, (R) => R.lighten(35)), p["primary-color-deprecated-l-20"] = d(C, (R) => R.lighten(20)), p["primary-color-deprecated-t-20"] = d(C, (R) => R.tint(20)), p["primary-color-deprecated-t-50"] = d(C, (R) => R.tint(50)), p["primary-color-deprecated-f-12"] = d(C, (R) => R.setAlpha(R.getAlpha() * 0.12));
    const k = new Gr(g[0]);
    p["primary-color-active-deprecated-f-30"] = d(k, (R) => R.setAlpha(R.getAlpha() * 0.3)), p["primary-color-active-deprecated-d-02"] = d(k, (R) => R.darken(2));
  }
  return c.successColor && m(c.successColor, "success"), c.warningColor && m(c.warningColor, "warning"), c.errorColor && m(c.errorColor, "error"), c.infoColor && m(c.infoColor, "info"), `
  :root {
    ${Object.keys(p).map((C) => `--${u}-${C}: ${p[C]};`).join(`
`)}
  }
  `.trim();
}
function UD(u, c) {
  const p = LD(u, c);
  kl() ? Ic(p, `${PD}-dynamic-theme`) : process.env.NODE_ENV !== "production" && gm(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const V0 = /* @__PURE__ */ ve.createContext(!1), zD = (u) => {
  let {
    children: c,
    disabled: p
  } = u;
  const d = ve.useContext(V0);
  return /* @__PURE__ */ ve.createElement(V0.Provider, {
    value: p ?? d
  }, c);
}, pp = /* @__PURE__ */ ve.createContext(void 0), HD = (u) => {
  let {
    children: c,
    size: p
  } = u;
  const d = ve.useContext(pp);
  return /* @__PURE__ */ ve.createElement(pp.Provider, {
    value: p || d
  }, c);
};
function jD() {
  const u = sp(V0), c = sp(pp);
  return {
    componentDisabled: u,
    componentSize: c
  };
}
const um = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], ID = "5.17.4";
function b0(u) {
  return u >= 0 && u <= 255;
}
function Wh(u, c) {
  const {
    r: p,
    g: d,
    b: m,
    a: b
  } = new Gr(u).toRgb();
  if (b < 1)
    return u;
  const {
    r: C,
    g,
    b: k
  } = new Gr(c).toRgb();
  for (let R = 0.01; R <= 1; R += 0.01) {
    const D = Math.round((p - C * (1 - R)) / R), N = Math.round((d - g * (1 - R)) / R), P = Math.round((m - k * (1 - R)) / R);
    if (b0(D) && b0(N) && b0(P))
      return new Gr({
        r: D,
        g: N,
        b: P,
        a: Math.round(R * 100) / 100
      }).toRgbString();
  }
  return new Gr({
    r: p,
    g: d,
    b: m,
    a: 1
  }).toRgbString();
}
var FD = function(u, c) {
  var p = {};
  for (var d in u)
    Object.prototype.hasOwnProperty.call(u, d) && c.indexOf(d) < 0 && (p[d] = u[d]);
  if (u != null && typeof Object.getOwnPropertySymbols == "function")
    for (var m = 0, d = Object.getOwnPropertySymbols(u); m < d.length; m++)
      c.indexOf(d[m]) < 0 && Object.prototype.propertyIsEnumerable.call(u, d[m]) && (p[d[m]] = u[d[m]]);
  return p;
};
function n1(u) {
  const {
    override: c
  } = u, p = FD(u, ["override"]), d = Object.assign({}, c);
  Object.keys(dp).forEach((P) => {
    delete d[P];
  });
  const m = Object.assign(Object.assign({}, p), d), b = 480, C = 576, g = 768, k = 992, R = 1200, D = 1600;
  if (m.motion === !1) {
    const P = "0s";
    m.motionDurationFast = P, m.motionDurationMid = P, m.motionDurationSlow = P;
  }
  return Object.assign(Object.assign(Object.assign({}, m), {
    // ============== Background ============== //
    colorFillContent: m.colorFillSecondary,
    colorFillContentHover: m.colorFill,
    colorFillAlter: m.colorFillQuaternary,
    colorBgContainerDisabled: m.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: m.colorBgContainer,
    colorSplit: Wh(m.colorBorderSecondary, m.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: m.colorTextQuaternary,
    colorTextDisabled: m.colorTextQuaternary,
    colorTextHeading: m.colorText,
    colorTextLabel: m.colorTextSecondary,
    colorTextDescription: m.colorTextTertiary,
    colorTextLightSolid: m.colorWhite,
    colorHighlight: m.colorError,
    colorBgTextHover: m.colorFillSecondary,
    colorBgTextActive: m.colorFill,
    colorIcon: m.colorTextTertiary,
    colorIconHover: m.colorText,
    colorErrorOutline: Wh(m.colorErrorBg, m.colorBgContainer),
    colorWarningOutline: Wh(m.colorWarningBg, m.colorBgContainer),
    // Font
    fontSizeIcon: m.fontSizeSM,
    // Line
    lineWidthFocus: m.lineWidth * 4,
    // Control
    lineWidth: m.lineWidth,
    controlOutlineWidth: m.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: m.controlHeight / 2,
    controlItemBgHover: m.colorFillTertiary,
    controlItemBgActive: m.colorPrimaryBg,
    controlItemBgActiveHover: m.colorPrimaryBgHover,
    controlItemBgActiveDisabled: m.colorFill,
    controlTmpOutline: m.colorFillQuaternary,
    controlOutline: Wh(m.colorPrimaryBg, m.colorBgContainer),
    lineType: m.lineType,
    borderRadius: m.borderRadius,
    borderRadiusXS: m.borderRadiusXS,
    borderRadiusSM: m.borderRadiusSM,
    borderRadiusLG: m.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: m.sizeXXS,
    paddingXS: m.sizeXS,
    paddingSM: m.sizeSM,
    padding: m.size,
    paddingMD: m.sizeMD,
    paddingLG: m.sizeLG,
    paddingXL: m.sizeXL,
    paddingContentHorizontalLG: m.sizeLG,
    paddingContentVerticalLG: m.sizeMS,
    paddingContentHorizontal: m.sizeMS,
    paddingContentVertical: m.sizeSM,
    paddingContentHorizontalSM: m.size,
    paddingContentVerticalSM: m.sizeXS,
    marginXXS: m.sizeXXS,
    marginXS: m.sizeXS,
    marginSM: m.sizeSM,
    margin: m.size,
    marginMD: m.sizeMD,
    marginLG: m.sizeLG,
    marginXL: m.sizeXL,
    marginXXL: m.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: b,
    screenXSMin: b,
    screenXSMax: C - 1,
    screenSM: C,
    screenSMMin: C,
    screenSMMax: g - 1,
    screenMD: g,
    screenMDMin: g,
    screenMDMax: k - 1,
    screenLG: k,
    screenLGMin: k,
    screenLGMax: R - 1,
    screenXL: R,
    screenXLMin: R,
    screenXLMax: D - 1,
    screenXXL: D,
    screenXXLMin: D,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Gr("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Gr("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Gr("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), d);
}
var rC = function(u, c) {
  var p = {};
  for (var d in u)
    Object.prototype.hasOwnProperty.call(u, d) && c.indexOf(d) < 0 && (p[d] = u[d]);
  if (u != null && typeof Object.getOwnPropertySymbols == "function")
    for (var m = 0, d = Object.getOwnPropertySymbols(u); m < d.length; m++)
      c.indexOf(d[m]) < 0 && Object.prototype.propertyIsEnumerable.call(u, d[m]) && (p[d[m]] = u[d[m]]);
  return p;
};
const r1 = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0
}, i1 = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, VD = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, a1 = (u, c, p) => {
  const d = p.getDerivativeToken(u), {
    override: m
  } = c, b = rC(c, ["override"]);
  let C = Object.assign(Object.assign({}, d), {
    override: m
  });
  return C = n1(C), b && Object.entries(b).forEach((g) => {
    let [k, R] = g;
    const {
      theme: D
    } = R, N = rC(R, ["theme"]);
    let P = N;
    D && (P = a1(Object.assign(Object.assign({}, C), N), {
      override: N
    }, D)), C[k] = P;
  }), C;
};
function vp() {
  const {
    token: u,
    hashed: c,
    theme: p,
    override: d,
    cssVar: m
  } = gi.useContext(t1), b = `${ID}-${c || ""}`, C = p || e1, [g, k, R] = NO(C, [dp, u], {
    salt: b,
    override: d,
    getComputedToken: a1,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: n1,
    cssVar: m && {
      prefix: m.prefix,
      key: m.key,
      unitless: r1,
      ignore: i1,
      preserve: VD
    }
  });
  return [C, R, c ? k : "", g, m];
}
function o1(u, c, p) {
  return c = Vc(c), TC(u, q0() ? Reflect.construct(c, [], Vc(u).constructor) : c.apply(u, p));
}
let l1 = /* @__PURE__ */ Io(function u() {
  jo(this, u);
});
const u1 = "CALC_UNIT", $D = new RegExp(u1, "g");
function C0(u) {
  return typeof u == "number" ? `${u}${u1}` : u;
}
let BD = /* @__PURE__ */ function(u) {
  function c(p) {
    var d;
    return jo(this, c), d = o1(this, c), d.result = "", p instanceof c ? d.result = `(${p.result})` : typeof p == "number" ? d.result = C0(p) : typeof p == "string" && (d.result = p), d;
  }
  return fm(c, u), Io(c, [{
    key: "add",
    value: function(d) {
      return d instanceof c ? this.result = `${this.result} + ${d.getResult()}` : (typeof d == "number" || typeof d == "string") && (this.result = `${this.result} + ${C0(d)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(d) {
      return d instanceof c ? this.result = `${this.result} - ${d.getResult()}` : (typeof d == "number" || typeof d == "string") && (this.result = `${this.result} - ${C0(d)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(d) {
      return this.lowPriority && (this.result = `(${this.result})`), d instanceof c ? this.result = `${this.result} * ${d.getResult(!0)}` : (typeof d == "number" || typeof d == "string") && (this.result = `${this.result} * ${d}`), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(d) {
      return this.lowPriority && (this.result = `(${this.result})`), d instanceof c ? this.result = `${this.result} / ${d.getResult(!0)}` : (typeof d == "number" || typeof d == "string") && (this.result = `${this.result} / ${d}`), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(d) {
      return this.lowPriority || d ? `(${this.result})` : this.result;
    }
  }, {
    key: "equal",
    value: function(d) {
      const {
        unit: m = !0
      } = d || {};
      return this.result = this.result.replace($D, m ? "px" : ""), typeof this.lowPriority < "u" ? `calc(${this.result})` : this.result;
    }
  }]);
}(l1), WD = /* @__PURE__ */ function(u) {
  function c(p) {
    var d;
    return jo(this, c), d = o1(this, c), d.result = 0, p instanceof c ? d.result = p.result : typeof p == "number" && (d.result = p), d;
  }
  return fm(c, u), Io(c, [{
    key: "add",
    value: function(d) {
      return d instanceof c ? this.result += d.result : typeof d == "number" && (this.result += d), this;
    }
  }, {
    key: "sub",
    value: function(d) {
      return d instanceof c ? this.result -= d.result : typeof d == "number" && (this.result -= d), this;
    }
  }, {
    key: "mul",
    value: function(d) {
      return d instanceof c ? this.result *= d.result : typeof d == "number" && (this.result *= d), this;
    }
  }, {
    key: "div",
    value: function(d) {
      return d instanceof c ? this.result /= d.result : typeof d == "number" && (this.result /= d), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]);
}(l1);
const YD = (u) => {
  const c = u === "css" ? BD : WD;
  return (p) => new c(p);
};
function QD(u) {
  var c = ve.useRef();
  c.current = u;
  var p = ve.useCallback(function() {
    for (var d, m = arguments.length, b = new Array(m), C = 0; C < m; C++)
      b[C] = arguments[C];
    return (d = c.current) === null || d === void 0 ? void 0 : d.call.apply(d, [c].concat(b));
  }, []);
  return p;
}
function rm(u) {
  var c = ve.useRef(!1), p = ve.useState(u), d = Tt(p, 2), m = d[0], b = d[1];
  ve.useEffect(function() {
    return c.current = !1, function() {
      c.current = !0;
    };
  }, []);
  function C(g, k) {
    k && c.current || b(g);
  }
  return [m, C];
}
const JM = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, eA = function(u) {
  let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: u.colorText,
    fontSize: u.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: u.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: c ? "inherit" : u.fontFamily
  };
}, GD = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), tA = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), XD = (u) => ({
  a: {
    color: u.colorLink,
    textDecoration: u.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${u.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: u.colorLinkHover
    },
    "&:active": {
      color: u.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: u.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: u.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: u.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), qD = (u, c, p, d) => {
  const m = `[class^="${c}"], [class*=" ${c}"]`, b = p ? `.${p}` : m, C = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let g = {};
  return d !== !1 && (g = {
    fontFamily: u.fontFamily,
    fontSize: u.fontSize
  }), {
    [b]: Object.assign(Object.assign(Object.assign({}, g), C), {
      [m]: C
    })
  };
}, KD = (u) => ({
  outline: `${P0(u.lineWidthFocus)} solid ${u.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), nA = (u) => ({
  "&:focus-visible": Object.assign({}, KD(u))
});
function ZD(u) {
  return u === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var c = arguments.length, p = new Array(c), d = 0; d < c; d++)
        p[d] = arguments[d];
      return `max(${p.map((m) => P0(m)).join(",")})`;
    },
    min: function() {
      for (var c = arguments.length, p = new Array(c), d = 0; d < c; d++)
        p[d] = arguments[d];
      return `min(${p.map((m) => P0(m)).join(",")})`;
    }
  };
}
const s1 = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let $0 = !0;
function c1() {
  for (var u = arguments.length, c = new Array(u), p = 0; p < u; p++)
    c[p] = arguments[p];
  if (!s1)
    return Object.assign.apply(Object, [{}].concat(c));
  $0 = !1;
  const d = {};
  return c.forEach((m) => {
    Object.keys(m).forEach((C) => {
      Object.defineProperty(d, C, {
        configurable: !0,
        enumerable: !0,
        get: () => m[C]
      });
    });
  }), $0 = !0, d;
}
const iC = {};
function JD() {
}
const eM = (u) => {
  let c, p = u, d = JD;
  return s1 && typeof Proxy < "u" && (c = /* @__PURE__ */ new Set(), p = new Proxy(u, {
    get(m, b) {
      return $0 && c.add(b), m[b];
    }
  }), d = (m, b) => {
    var C;
    iC[m] = {
      global: Array.from(c),
      component: Object.assign(Object.assign({}, (C = iC[m]) === null || C === void 0 ? void 0 : C.component), b)
    };
  }), {
    token: p,
    keys: c,
    flush: d
  };
}, f1 = (u, c) => {
  const [p, d] = vp();
  return j0({
    theme: p,
    token: d,
    hashId: "",
    path: ["ant-design-icons", u],
    nonce: () => c == null ? void 0 : c.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${u}`]: Object.assign(Object.assign({}, GD()), {
      [`.${u} .${u}-icon`]: {
        display: "block"
      }
    })
  }]);
}, d1 = (u, c, p) => {
  var d;
  return typeof p == "function" ? p(c1(c, (d = c[u]) !== null && d !== void 0 ? d : {})) : p ?? {};
}, p1 = (u, c, p, d) => {
  const m = Object.assign({}, c[u]);
  if (d != null && d.deprecatedTokens) {
    const {
      deprecatedTokens: C
    } = d;
    C.forEach((g) => {
      let [k, R] = g;
      var D;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && cm(!(m != null && m[k]), `Component Token \`${String(k)}\` of ${u} is deprecated. Please use \`${String(R)}\` instead.`), (m != null && m[k] || m != null && m[R]) && ((D = m[R]) !== null && D !== void 0 || (m[R] = m == null ? void 0 : m[k]));
    });
  }
  const b = Object.assign(Object.assign({}, p), m);
  return Object.keys(b).forEach((C) => {
    b[C] === c[C] && delete b[C];
  }), b;
}, tM = (u, c) => `${[c, u.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function v1(u, c, p) {
  let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const m = Array.isArray(u) ? u : [u, u], [b] = m, C = m.join("-");
  return function(g) {
    let k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : g;
    const [R, D, N, P, Y] = vp(), {
      getPrefixCls: re,
      iconPrefixCls: G,
      csp: j
    } = sp(Em), ue = re(), Q = Y ? "css" : "js", ne = YD(Q), {
      max: X,
      min: $
    } = ZD(Q), K = {
      theme: R,
      token: P,
      hashId: N,
      nonce: () => j == null ? void 0 : j.nonce,
      clientOnly: d.clientOnly,
      layer: {
        name: "antd"
      },
      // antd is always at top of styles
      order: d.order || -999
    };
    return j0(Object.assign(Object.assign({}, K), {
      clientOnly: !1,
      path: ["Shared", ue]
    }), () => [{
      // Link
      "&": XD(P)
    }]), f1(G, j), [j0(Object.assign(Object.assign({}, K), {
      path: [C, g, G]
    }), () => {
      if (d.injectStyle === !1)
        return [];
      const {
        token: ae,
        flush: Oe
      } = eM(P), Ue = d1(b, D, p), Ie = `.${g}`, ze = p1(b, D, Ue, {
        deprecatedTokens: d.deprecatedTokens
      });
      Y && Object.keys(Ue).forEach((Z) => {
        Ue[Z] = `var(${kC(Z, tM(b, Y.prefix))})`;
      });
      const $e = c1(ae, {
        componentCls: Ie,
        prefixCls: g,
        iconCls: `.${G}`,
        antCls: `.${ue}`,
        calc: ne,
        // @ts-ignore
        max: X,
        // @ts-ignore
        min: $
      }, Y ? Ue : ze), xe = c($e, {
        hashId: N,
        prefixCls: g,
        rootPrefixCls: ue,
        iconPrefixCls: G
      });
      return Oe(b, ze), [d.resetStyle === !1 ? null : qD($e, g, k, d.resetFont), xe];
    }), N];
  };
}
const rA = (u, c, p, d) => {
  const m = v1(u, c, p, Object.assign({
    resetStyle: !1,
    // Sub Style should default after root one
    order: -998
  }, d)), b = (C) => {
    let {
      prefixCls: g,
      rootCls: k = g
    } = C;
    return m(g, k), null;
  };
  return process.env.NODE_ENV !== "production" && (b.displayName = `SubStyle_${Array.isArray(u) ? u.join(".") : u}`), b;
}, nM = (u, c, p) => {
  function d(R) {
    return `${u}${R.slice(0, 1).toUpperCase()}${R.slice(1)}`;
  }
  const {
    unitless: m = {},
    injectStyle: b = !0
  } = p ?? {}, C = {
    [d("zIndexPopup")]: !0
  };
  Object.keys(m).forEach((R) => {
    C[d(R)] = m[R];
  });
  const g = (R) => {
    let {
      rootCls: D,
      cssVar: N
    } = R;
    const [, P] = vp();
    return fD({
      path: [u],
      prefix: N.prefix,
      key: N == null ? void 0 : N.key,
      unitless: Object.assign(Object.assign({}, r1), C),
      ignore: i1,
      token: P,
      scope: D
    }, () => {
      const Y = d1(u, P, c), re = p1(u, P, Y, {
        deprecatedTokens: p == null ? void 0 : p.deprecatedTokens
      });
      return Object.keys(Y).forEach((G) => {
        re[d(G)] = re[G], delete re[G];
      }), re;
    }), null;
  };
  return (R) => {
    const [, , , , D] = vp();
    return [(N) => b && D ? /* @__PURE__ */ gi.createElement(gi.Fragment, null, /* @__PURE__ */ gi.createElement(g, {
      rootCls: R,
      cssVar: D,
      component: u
    }), N) : N, D == null ? void 0 : D.key];
  };
}, iA = (u, c, p, d) => {
  const m = v1(u, c, p, d), b = nM(Array.isArray(u) ? u[0] : u, p, d);
  return function(C) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C;
    const [, k] = m(C, g), [R, D] = b(g);
    return [R, k, D];
  };
};
function aA(u, c) {
  return um.reduce((p, d) => {
    const m = u[`${d}1`], b = u[`${d}3`], C = u[`${d}6`], g = u[`${d}7`];
    return Object.assign(Object.assign({}, p), c(d, {
      lightColor: m,
      lightBorderColor: b,
      darkColor: C,
      textColor: g
    }));
  }, {});
}
const rM = Object.assign({}, ve), {
  useId: aC
} = rM, iM = () => "", aM = typeof aC > "u" ? iM : aC;
function oM(u, c, p) {
  var d, m;
  const b = ym("ConfigProvider"), C = u || {}, g = C.inherit === !1 || !c ? Object.assign(Object.assign({}, F0), {
    hashed: (d = c == null ? void 0 : c.hashed) !== null && d !== void 0 ? d : F0.hashed,
    cssVar: c == null ? void 0 : c.cssVar
  }) : c, k = aM();
  if (process.env.NODE_ENV !== "production") {
    const R = C.cssVar || g.cssVar, D = !!(typeof C.cssVar == "object" && (!((m = C.cssVar) === null || m === void 0) && m.key) || k);
    process.env.NODE_ENV !== "production" && b(!R || D, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return X0(() => {
    var R, D;
    if (!u)
      return c;
    const N = Object.assign({}, g.components);
    Object.keys(u.components || {}).forEach((re) => {
      N[re] = Object.assign(Object.assign({}, N[re]), u.components[re]);
    });
    const P = `css-var-${k.replace(/:/g, "")}`, Y = ((R = C.cssVar) !== null && R !== void 0 ? R : g.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: p == null ? void 0 : p.prefixCls
    }, typeof g.cssVar == "object" ? g.cssVar : {}), typeof C.cssVar == "object" ? C.cssVar : {}), {
      key: typeof C.cssVar == "object" && ((D = C.cssVar) === null || D === void 0 ? void 0 : D.key) || P
    });
    return Object.assign(Object.assign(Object.assign({}, g), C), {
      token: Object.assign(Object.assign({}, g.token), C.token),
      components: N,
      cssVar: Y
    });
  }, [C, g], (R, D) => R.some((N, P) => {
    const Y = D[P];
    return !aO(N, Y, !0);
  }));
}
var lM = ["children"], h1 = /* @__PURE__ */ ve.createContext({});
function uM(u) {
  var c = u.children, p = R0(u, lM);
  return /* @__PURE__ */ ve.createElement(h1.Provider, {
    value: p
  }, c);
}
var sM = /* @__PURE__ */ function(u) {
  fm(p, u);
  var c = bC(p);
  function p() {
    return jo(this, p), c.apply(this, arguments);
  }
  return Io(p, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), p;
}(ve.Component), wl = "none", Yh = "appear", Qh = "enter", Gh = "leave", oC = "none", Bi = "prepare", Hc = "start", jc = "active", nS = "end", m1 = "prepared";
function lC(u, c) {
  var p = {};
  return p[u.toLowerCase()] = c.toLowerCase(), p["Webkit".concat(u)] = "webkit".concat(c), p["Moz".concat(u)] = "moz".concat(c), p["ms".concat(u)] = "MS".concat(c), p["O".concat(u)] = "o".concat(c.toLowerCase()), p;
}
function cM(u, c) {
  var p = {
    animationend: lC("Animation", "AnimationEnd"),
    transitionend: lC("Transition", "TransitionEnd")
  };
  return u && ("AnimationEvent" in c || delete p.animationend.animation, "TransitionEvent" in c || delete p.transitionend.transition), p;
}
var fM = cM(kl(), typeof window < "u" ? window : {}), y1 = {};
if (kl()) {
  var dM = document.createElement("div");
  y1 = dM.style;
}
var Xh = {};
function g1(u) {
  if (Xh[u])
    return Xh[u];
  var c = fM[u];
  if (c)
    for (var p = Object.keys(c), d = p.length, m = 0; m < d; m += 1) {
      var b = p[m];
      if (Object.prototype.hasOwnProperty.call(c, b) && b in y1)
        return Xh[u] = c[b], Xh[u];
    }
  return "";
}
var S1 = g1("animationend"), E1 = g1("transitionend"), T1 = !!(S1 && E1), uC = S1 || "animationend", sC = E1 || "transitionend";
function cC(u, c) {
  if (!u)
    return null;
  if (vr(u) === "object") {
    var p = c.replace(/-\w/g, function(d) {
      return d[1].toUpperCase();
    });
    return u[p];
  }
  return "".concat(u, "-").concat(c);
}
const pM = function(u) {
  var c = Fc();
  function p(m) {
    m && (m.removeEventListener(sC, u), m.removeEventListener(uC, u));
  }
  function d(m) {
    c.current && c.current !== m && p(c.current), m && m !== c.current && (m.addEventListener(sC, u), m.addEventListener(uC, u), c.current = m);
  }
  return ve.useEffect(function() {
    return function() {
      p(c.current);
    };
  }, []), [d, p];
};
var b1 = kl() ? jk : qh;
const vM = function() {
  var u = ve.useRef(null);
  function c() {
    om.cancel(u.current);
  }
  function p(d) {
    var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    c();
    var b = om(function() {
      m <= 1 ? d({
        isCanceled: function() {
          return b !== u.current;
        }
      }) : p(d, m - 1);
    });
    u.current = b;
  }
  return ve.useEffect(function() {
    return function() {
      c();
    };
  }, []), [p, c];
};
var hM = [Bi, Hc, jc, nS], mM = [Bi, m1], C1 = !1, yM = !0;
function x1(u) {
  return u === jc || u === nS;
}
const gM = function(u, c, p) {
  var d = rm(oC), m = Tt(d, 2), b = m[0], C = m[1], g = vM(), k = Tt(g, 2), R = k[0], D = k[1];
  function N() {
    C(Bi, !0);
  }
  var P = c ? mM : hM;
  return b1(function() {
    if (b !== oC && b !== nS) {
      var Y = P.indexOf(b), re = P[Y + 1], G = p(b);
      G === C1 ? C(re, !0) : re && R(function(j) {
        function ue() {
          j.isCanceled() || C(re, !0);
        }
        G === !0 ? ue() : Promise.resolve(G).then(ue);
      });
    }
  }, [u, b]), ve.useEffect(function() {
    return function() {
      D();
    };
  }, []), [N, b];
};
function SM(u, c, p, d) {
  var m = d.motionEnter, b = m === void 0 ? !0 : m, C = d.motionAppear, g = C === void 0 ? !0 : C, k = d.motionLeave, R = k === void 0 ? !0 : k, D = d.motionDeadline, N = d.motionLeaveImmediately, P = d.onAppearPrepare, Y = d.onEnterPrepare, re = d.onLeavePrepare, G = d.onAppearStart, j = d.onEnterStart, ue = d.onLeaveStart, Q = d.onAppearActive, ne = d.onEnterActive, X = d.onLeaveActive, $ = d.onAppearEnd, K = d.onEnterEnd, ee = d.onLeaveEnd, ae = d.onVisibleChanged, Oe = rm(), Ue = Tt(Oe, 2), Ie = Ue[0], ze = Ue[1], $e = rm(wl), xe = Tt($e, 2), Z = xe[0], We = xe[1], be = rm(null), De = Tt(be, 2), de = De[0], Re = De[1], st = Fc(!1), Ze = Fc(null);
  function Ge() {
    return p();
  }
  var q = Fc(!1);
  function oe() {
    We(wl, !0), Re(null, !0);
  }
  var Ne = QD(function(Lt) {
    if (Z !== wl) {
      var kt = Ge();
      if (!(Lt && !Lt.deadline && Lt.target !== kt)) {
        var Vt = q.current, Fn;
        Z === Yh && Vt ? Fn = $ == null ? void 0 : $(kt, Lt) : Z === Qh && Vt ? Fn = K == null ? void 0 : K(kt, Lt) : Z === Gh && Vt && (Fn = ee == null ? void 0 : ee(kt, Lt)), Vt && Fn !== !1 && oe();
      }
    }
  }), he = pM(Ne), Ye = Tt(he, 1), tt = Ye[0], Jt = function(kt) {
    switch (kt) {
      case Yh:
        return gt(gt(gt({}, Bi, P), Hc, G), jc, Q);
      case Qh:
        return gt(gt(gt({}, Bi, Y), Hc, j), jc, ne);
      case Gh:
        return gt(gt(gt({}, Bi, re), Hc, ue), jc, X);
      default:
        return {};
    }
  }, Be = ve.useMemo(function() {
    return Jt(Z);
  }, [Z]), ot = gM(Z, !u, function(Lt) {
    if (Lt === Bi) {
      var kt = Be[Bi];
      return kt ? kt(Ge()) : C1;
    }
    if (ct in Be) {
      var Vt;
      Re(((Vt = Be[ct]) === null || Vt === void 0 ? void 0 : Vt.call(Be, Ge(), null)) || null);
    }
    return ct === jc && Z !== wl && (tt(Ge()), D > 0 && (clearTimeout(Ze.current), Ze.current = setTimeout(function() {
      Ne({
        deadline: !0
      });
    }, D))), ct === m1 && oe(), yM;
  }), en = Tt(ot, 2), Ee = en[0], ct = en[1], nt = x1(ct);
  q.current = nt, b1(function() {
    ze(c);
    var Lt = st.current;
    st.current = !0;
    var kt;
    !Lt && c && g && (kt = Yh), Lt && c && b && (kt = Qh), (Lt && !c && R || !Lt && N && !c && R) && (kt = Gh);
    var Vt = Jt(kt);
    kt && (u || Vt[Bi]) ? (We(kt), Ee()) : We(wl);
  }, [c]), qh(function() {
    // Cancel appear
    (Z === Yh && !g || // Cancel enter
    Z === Qh && !b || // Cancel leave
    Z === Gh && !R) && We(wl);
  }, [g, b, R]), qh(function() {
    return function() {
      st.current = !1, clearTimeout(Ze.current);
    };
  }, []);
  var un = ve.useRef(!1);
  qh(function() {
    Ie && (un.current = !0), Ie !== void 0 && Z === wl && ((un.current || Ie) && (ae == null || ae(Ie)), un.current = !0);
  }, [Ie, Z]);
  var _t = de;
  return Be[Bi] && ct === Hc && (_t = at({
    transition: "none"
  }, _t)), [Z, ct, _t, Ie ?? c];
}
function EM(u) {
  var c = u;
  vr(u) === "object" && (c = u.transitionSupport);
  function p(m, b) {
    return !!(m.motionName && c && b !== !1);
  }
  var d = /* @__PURE__ */ ve.forwardRef(function(m, b) {
    var C = m.visible, g = C === void 0 ? !0 : C, k = m.removeOnLeave, R = k === void 0 ? !0 : k, D = m.forceRender, N = m.children, P = m.motionName, Y = m.leavedClassName, re = m.eventProps, G = ve.useContext(h1), j = G.motion, ue = p(m, j), Q = Fc(), ne = Fc();
    function X() {
      try {
        return Q.current instanceof HTMLElement ? Q.current : eO(ne.current);
      } catch {
        return null;
      }
    }
    var $ = SM(ue, g, X, m), K = Tt($, 4), ee = K[0], ae = K[1], Oe = K[2], Ue = K[3], Ie = ve.useRef(Ue);
    Ue && (Ie.current = !0);
    var ze = ve.useCallback(function(de) {
      Q.current = de, EC(b, de);
    }, [b]), $e, xe = at(at({}, re), {}, {
      visible: g
    });
    if (!N)
      $e = null;
    else if (ee === wl)
      Ue ? $e = N(at({}, xe), ze) : !R && Ie.current && Y ? $e = N(at(at({}, xe), {}, {
        className: Y
      }), ze) : D || !R && !Y ? $e = N(at(at({}, xe), {}, {
        style: {
          display: "none"
        }
      }), ze) : $e = null;
    else {
      var Z;
      ae === Bi ? Z = "prepare" : x1(ae) ? Z = "active" : ae === Hc && (Z = "start");
      var We = cC(P, "".concat(ee, "-").concat(Z));
      $e = N(at(at({}, xe), {}, {
        className: zk(cC(P, ee), gt(gt({}, We, We && Z), P, typeof P == "string")),
        style: Oe
      }), ze);
    }
    if (/* @__PURE__ */ ve.isValidElement($e) && nO($e)) {
      var be = $e, De = be.ref;
      De || ($e = /* @__PURE__ */ ve.cloneElement($e, {
        ref: ze
      }));
    }
    return /* @__PURE__ */ ve.createElement(sM, {
      ref: ne
    }, $e);
  });
  return d.displayName = "CSSMotion", d;
}
const TM = EM(T1);
var B0 = "add", W0 = "keep", Y0 = "remove", x0 = "removed";
function bM(u) {
  var c;
  return u && vr(u) === "object" && "key" in u ? c = u : c = {
    key: u
  }, at(at({}, c), {}, {
    key: String(c.key)
  });
}
function Q0() {
  var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return u.map(bM);
}
function CM() {
  var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], p = [], d = 0, m = c.length, b = Q0(u), C = Q0(c);
  b.forEach(function(R) {
    for (var D = !1, N = d; N < m; N += 1) {
      var P = C[N];
      if (P.key === R.key) {
        d < N && (p = p.concat(C.slice(d, N).map(function(Y) {
          return at(at({}, Y), {}, {
            status: B0
          });
        })), d = N), p.push(at(at({}, P), {}, {
          status: W0
        })), d += 1, D = !0;
        break;
      }
    }
    D || p.push(at(at({}, R), {}, {
      status: Y0
    }));
  }), d < m && (p = p.concat(C.slice(d).map(function(R) {
    return at(at({}, R), {}, {
      status: B0
    });
  })));
  var g = {};
  p.forEach(function(R) {
    var D = R.key;
    g[D] = (g[D] || 0) + 1;
  });
  var k = Object.keys(g).filter(function(R) {
    return g[R] > 1;
  });
  return k.forEach(function(R) {
    p = p.filter(function(D) {
      var N = D.key, P = D.status;
      return N !== R || P !== Y0;
    }), p.forEach(function(D) {
      D.key === R && (D.status = W0);
    });
  }), p;
}
var xM = ["component", "children", "onVisibleChanged", "onAllRemoved"], RM = ["status"], wM = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function _M(u) {
  var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : TM, p = /* @__PURE__ */ function(d) {
    fm(b, d);
    var m = bC(b);
    function b() {
      var C;
      jo(this, b);
      for (var g = arguments.length, k = new Array(g), R = 0; R < g; R++)
        k[R] = arguments[R];
      return C = m.call.apply(m, [this].concat(k)), gt(D0(C), "state", {
        keyEntities: []
      }), gt(D0(C), "removeKey", function(D) {
        var N = C.state.keyEntities, P = N.map(function(Y) {
          return Y.key !== D ? Y : at(at({}, Y), {}, {
            status: x0
          });
        });
        return C.setState({
          keyEntities: P
        }), P.filter(function(Y) {
          var re = Y.status;
          return re !== x0;
        }).length;
      }), C;
    }
    return Io(b, [{
      key: "render",
      value: function() {
        var g = this, k = this.state.keyEntities, R = this.props, D = R.component, N = R.children, P = R.onVisibleChanged, Y = R.onAllRemoved, re = R0(R, xM), G = D || ve.Fragment, j = {};
        return wM.forEach(function(ue) {
          j[ue] = re[ue], delete re[ue];
        }), delete re.keys, /* @__PURE__ */ ve.createElement(G, re, k.map(function(ue, Q) {
          var ne = ue.status, X = R0(ue, RM), $ = ne === B0 || ne === W0;
          return /* @__PURE__ */ ve.createElement(c, vC({}, j, {
            key: X.key,
            visible: $,
            eventProps: X,
            onVisibleChanged: function(ee) {
              if (P == null || P(ee, {
                key: X.key
              }), !ee) {
                var ae = g.removeKey(X.key);
                ae === 0 && Y && Y();
              }
            }
          }), function(K, ee) {
            return N(at(at({}, K), {}, {
              index: Q
            }), ee);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(g, k) {
        var R = g.keys, D = k.keyEntities, N = Q0(R), P = CM(D, N);
        return {
          keyEntities: P.filter(function(Y) {
            var re = D.find(function(G) {
              var j = G.key;
              return Y.key === j;
            });
            return !(re && re.status === x0 && Y.status === Y0);
          })
        };
      }
    }]), b;
  }(ve.Component);
  return gt(p, "defaultProps", {
    component: "div"
  }), p;
}
_M(T1);
function kM(u) {
  const {
    children: c
  } = u, [, p] = vp(), {
    motion: d
  } = p, m = ve.useRef(!1);
  return m.current = m.current || d === !1, m.current ? /* @__PURE__ */ ve.createElement(uM, {
    motion: d
  }, c) : c;
}
const R1 = /* @__PURE__ */ ve.memo((u) => {
  let {
    dropdownMatchSelectWidth: c
  } = u;
  return ym("ConfigProvider").deprecated(c === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (R1.displayName = "PropWarning");
const OM = process.env.NODE_ENV !== "production" ? R1 : () => null;
var DM = function(u, c) {
  var p = {};
  for (var d in u)
    Object.prototype.hasOwnProperty.call(u, d) && c.indexOf(d) < 0 && (p[d] = u[d]);
  if (u != null && typeof Object.getOwnPropertySymbols == "function")
    for (var m = 0, d = Object.getOwnPropertySymbols(u); m < d.length; m++)
      c.indexOf(d[m]) < 0 && Object.prototype.propertyIsEnumerable.call(u, d[m]) && (p[d[m]] = u[d[m]]);
  return p;
};
let G0 = !1;
const oA = process.env.NODE_ENV !== "production" ? (u) => {
  process.env.NODE_ENV !== "production" && gm(!G0, u, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), MM = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], AM = "ant";
let sm, w1, _1, k1;
function im() {
  return sm || AM;
}
function NM() {
  return w1 || tS;
}
function PM(u) {
  return Object.keys(u).some((c) => c.endsWith("Color"));
}
const LM = (u) => {
  const {
    prefixCls: c,
    iconPrefixCls: p,
    theme: d,
    holderRender: m
  } = u;
  c !== void 0 && (sm = c), p !== void 0 && (w1 = p), "holderRender" in u && (k1 = m), d && (PM(d) ? (process.env.NODE_ENV !== "production" && gm(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), UD(im(), d)) : _1 = d);
}, lA = () => ({
  getPrefixCls: (u, c) => c || (u ? `${im()}-${u}` : im()),
  getIconPrefixCls: NM,
  getRootPrefixCls: () => sm || im(),
  getTheme: () => _1,
  holderRender: k1
}), UM = (u) => {
  const {
    children: c,
    csp: p,
    autoInsertSpaceInButton: d,
    alert: m,
    anchor: b,
    form: C,
    locale: g,
    componentSize: k,
    direction: R,
    space: D,
    virtual: N,
    dropdownMatchSelectWidth: P,
    popupMatchSelectWidth: Y,
    popupOverflow: re,
    legacyLocale: G,
    parentContext: j,
    iconPrefixCls: ue,
    theme: Q,
    componentDisabled: ne,
    segmented: X,
    statistic: $,
    spin: K,
    calendar: ee,
    carousel: ae,
    cascader: Oe,
    collapse: Ue,
    typography: Ie,
    checkbox: ze,
    descriptions: $e,
    divider: xe,
    drawer: Z,
    skeleton: We,
    steps: be,
    image: De,
    layout: de,
    list: Re,
    mentions: st,
    modal: Ze,
    progress: Ge,
    result: q,
    slider: oe,
    breadcrumb: Ne,
    menu: he,
    pagination: Ye,
    input: tt,
    textArea: Jt,
    empty: Be,
    badge: ot,
    radio: en,
    rate: Ee,
    switch: ct,
    transfer: nt,
    avatar: un,
    message: _t,
    tag: Lt,
    table: kt,
    card: Vt,
    tabs: Fn,
    timeline: Xr,
    timePicker: hr,
    upload: Gi,
    notification: An,
    tree: Fa,
    colorPicker: qr,
    datePicker: En,
    rangePicker: Ei,
    flex: Va,
    wave: $a,
    dropdown: Xi,
    warning: Vn,
    tour: Kr,
    floatButtonGroup: $n
  } = u, qi = ve.useCallback((Et, rt) => {
    const {
      prefixCls: Xt
    } = u;
    if (rt)
      return rt;
    const Ht = Xt || j.getPrefixCls("");
    return Et ? `${Ht}-${Et}` : Ht;
  }, [j.getPrefixCls, u.prefixCls]), Tn = ue || j.iconPrefixCls || tS, Zr = p || j.csp;
  f1(Tn, Zr);
  const Ti = oM(Q, j.theme, {
    prefixCls: qi("")
  });
  process.env.NODE_ENV !== "production" && (G0 = G0 || !!Ti);
  const wr = {
    csp: Zr,
    autoInsertSpaceInButton: d,
    alert: m,
    anchor: b,
    locale: g || G,
    direction: R,
    space: D,
    virtual: N,
    popupMatchSelectWidth: Y ?? P,
    popupOverflow: re,
    getPrefixCls: qi,
    iconPrefixCls: Tn,
    theme: Ti,
    segmented: X,
    statistic: $,
    spin: K,
    calendar: ee,
    carousel: ae,
    cascader: Oe,
    collapse: Ue,
    typography: Ie,
    checkbox: ze,
    descriptions: $e,
    divider: xe,
    drawer: Z,
    skeleton: We,
    steps: be,
    image: De,
    input: tt,
    textArea: Jt,
    layout: de,
    list: Re,
    mentions: st,
    modal: Ze,
    progress: Ge,
    result: q,
    slider: oe,
    breadcrumb: Ne,
    menu: he,
    pagination: Ye,
    empty: Be,
    badge: ot,
    radio: en,
    rate: Ee,
    switch: ct,
    transfer: nt,
    avatar: un,
    message: _t,
    tag: Lt,
    table: kt,
    card: Vt,
    tabs: Fn,
    timeline: Xr,
    timePicker: hr,
    upload: Gi,
    notification: An,
    tree: Fa,
    colorPicker: qr,
    datePicker: En,
    rangePicker: Ei,
    flex: Va,
    wave: $a,
    dropdown: Xi,
    warning: Vn,
    tour: Kr,
    floatButtonGroup: $n
  };
  process.env.NODE_ENV !== "production" && ym("ConfigProvider")(!("autoInsertSpaceInButton" in u), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Jn = Object.assign({}, j);
  Object.keys(wr).forEach((Et) => {
    wr[Et] !== void 0 && (Jn[Et] = wr[Et]);
  }), MM.forEach((Et) => {
    const rt = u[Et];
    rt && (Jn[Et] = rt);
  }), typeof d < "u" && (Jn.button = Object.assign({
    autoInsertSpace: d
  }, Jn.button));
  const Ut = X0(() => Jn, Jn, (Et, rt) => {
    const Xt = Object.keys(Et), Ht = Object.keys(rt);
    return Xt.length !== Ht.length || Xt.some((mr) => Et[mr] !== rt[mr]);
  }), er = ve.useMemo(() => ({
    prefixCls: Tn,
    csp: Zr
  }), [Tn, Zr]);
  let zt = /* @__PURE__ */ ve.createElement(ve.Fragment, null, /* @__PURE__ */ ve.createElement(OM, {
    dropdownMatchSelectWidth: P
  }), c);
  const St = ve.useMemo(() => {
    var Et, rt, Xt, Ht;
    return mD(((Et = Sm.Form) === null || Et === void 0 ? void 0 : Et.defaultValidateMessages) || {}, ((Xt = (rt = Ut.locale) === null || rt === void 0 ? void 0 : rt.Form) === null || Xt === void 0 ? void 0 : Xt.defaultValidateMessages) || {}, ((Ht = Ut.form) === null || Ht === void 0 ? void 0 : Ht.validateMessages) || {}, (C == null ? void 0 : C.validateMessages) || {});
  }, [Ut, C == null ? void 0 : C.validateMessages]);
  Object.keys(St).length > 0 && (zt = /* @__PURE__ */ ve.createElement(gD.Provider, {
    value: St
  }, zt)), g && (zt = /* @__PURE__ */ ve.createElement(ZC, {
    locale: g,
    _ANT_MARK__: KC
  }, zt)), (Tn || Zr) && (zt = /* @__PURE__ */ ve.createElement(Hk.Provider, {
    value: er
  }, zt)), k && (zt = /* @__PURE__ */ ve.createElement(HD, {
    size: k
  }, zt)), zt = /* @__PURE__ */ ve.createElement(kM, null, zt);
  const $t = ve.useMemo(() => {
    const Et = Ti || {}, {
      algorithm: rt,
      token: Xt,
      components: Ht,
      cssVar: mr
    } = Et, Ki = DM(Et, ["algorithm", "token", "components", "cssVar"]), Ba = rt && (!Array.isArray(rt) || rt.length > 0) ? A0(rt) : e1, Zi = {};
    Object.entries(Ht || {}).forEach((Ji) => {
      let [bi, Jr] = Ji;
      const bn = Object.assign({}, Jr);
      "algorithm" in bn && (bn.algorithm === !0 ? bn.theme = Ba : (Array.isArray(bn.algorithm) || typeof bn.algorithm == "function") && (bn.theme = A0(bn.algorithm)), delete bn.algorithm), Zi[bi] = bn;
    });
    const Wa = Object.assign(Object.assign({}, dp), Xt);
    return Object.assign(Object.assign({}, Ki), {
      theme: Ba,
      token: Wa,
      components: Zi,
      override: Object.assign({
        override: Wa
      }, Zi),
      cssVar: mr
    });
  }, [Ti]);
  return Q && (zt = /* @__PURE__ */ ve.createElement(t1.Provider, {
    value: $t
  }, zt)), Ut.warning && (zt = /* @__PURE__ */ ve.createElement(GC.Provider, {
    value: Ut.warning
  }, zt)), ne !== void 0 && (zt = /* @__PURE__ */ ve.createElement(zD, {
    disabled: ne
  }, zt)), /* @__PURE__ */ ve.createElement(Em.Provider, {
    value: Ut
  }, zt);
}, Yc = (u) => {
  const c = ve.useContext(Em), p = ve.useContext(qC);
  return /* @__PURE__ */ ve.createElement(UM, Object.assign({
    parentContext: c,
    legacyLocale: p
  }, u));
};
Yc.ConfigContext = Em;
Yc.SizeContext = pp;
Yc.config = LM;
Yc.useConfig = jD;
Object.defineProperty(Yc, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && gm(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), pp)
});
process.env.NODE_ENV !== "production" && (Yc.displayName = "ConfigProvider");
function uA(u) {
  return u && /* @__PURE__ */ gi.isValidElement(u) && u.type === gi.Fragment;
}
const zM = (u, c, p) => /* @__PURE__ */ gi.isValidElement(u) ? /* @__PURE__ */ gi.cloneElement(u, typeof p == "function" ? p(u.props || {}) : p) : c;
function sA(u, c) {
  return zM(u, u, c);
}
const HM = um.map((u) => `${u}-inverse`);
function cA(u) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(Qi(HM), Qi(um)).includes(u) : um.includes(u);
}
export {
  XM as $,
  gm as A,
  Sm as B,
  Yc as C,
  V0 as D,
  QM as E,
  Kh as F,
  Ia as G,
  Ho as H,
  FO as I,
  WM as J,
  KM as K,
  IO as L,
  BM as M,
  fp as N,
  GM as O,
  um as P,
  zO as Q,
  NC as R,
  H0 as S,
  Gr as T,
  $O as U,
  PC as V,
  YM as W,
  VO as X,
  qM as Y,
  jO as Z,
  Qi as _,
  Em as a,
  DC as a0,
  eD as a1,
  ZO as a2,
  mC as a3,
  Qk as a4,
  Gk as a5,
  Yk as a6,
  om as a7,
  SC as a8,
  pD as a9,
  Io as aa,
  jo as ab,
  eO as ac,
  X0 as ad,
  JM as ae,
  SD as af,
  s0 as ag,
  fm as ah,
  bC as ai,
  nO as aj,
  qC as ak,
  $M as al,
  FM as am,
  v1 as an,
  pp as ao,
  q0 as ap,
  O0 as aq,
  Vc as ar,
  D0 as as,
  mD as at,
  I0 as au,
  T0 as av,
  aO as aw,
  EC as ax,
  $b as ay,
  aA as b,
  sA as c,
  TM as d,
  ym as e,
  GD as f,
  iA as g,
  vp as h,
  cA as i,
  uA as j,
  wD as k,
  nA as l,
  c1 as m,
  rA as n,
  tO as o,
  KD as p,
  rm as q,
  eA as r,
  VM as s,
  QD as t,
  P0 as u,
  ZM as v,
  zD as w,
  tA as x,
  lA as y,
  oA as z
};
