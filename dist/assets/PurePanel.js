import { a as R } from "./index3.js";
import * as e from "react";
import { I as w } from "./AntdIcon.js";
import { u as E } from "./index4.js";
import { C as y, a as I } from "./colors.js";
var j = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, z = function(s, l) {
  return /* @__PURE__ */ e.createElement(w, R({}, s, {
    ref: l,
    icon: j
  }));
}, S = /* @__PURE__ */ e.forwardRef(z);
process.env.NODE_ENV !== "production" && (S.displayName = "CloseOutlined");
function L(n) {
  return (s) => /* @__PURE__ */ e.createElement(y, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ e.createElement(n, Object.assign({}, s)));
}
const M = (n, s, l, W) => L((r) => {
  const {
    prefixCls: f,
    style: p
  } = r, a = e.useRef(null), [m, g] = e.useState(0), [v, C] = e.useState(0), [c, P] = E(!1, {
    value: r.open
  }), {
    getPrefixCls: O
  } = e.useContext(I), h = O("select", f);
  e.useEffect(() => {
    if (P(!0), typeof ResizeObserver < "u") {
      const i = new ResizeObserver((t) => {
        const o = t[0].target;
        g(o.offsetHeight + 8), C(o.offsetWidth);
      }), u = setInterval(() => {
        var t;
        const o = `.${h}-dropdown`, d = (t = a.current) === null || t === void 0 ? void 0 : t.querySelector(o);
        d && (clearInterval(u), i.observe(d));
      }, 10);
      return () => {
        clearInterval(u), i.disconnect();
      };
    }
  }, []);
  let b = Object.assign(Object.assign({}, r), {
    style: Object.assign(Object.assign({}, p), {
      margin: 0
    }),
    open: c,
    visible: c,
    getPopupContainer: () => a.current
  });
  const x = {
    paddingBottom: m,
    position: "relative",
    minWidth: v
  };
  return /* @__PURE__ */ e.createElement("div", {
    ref: a,
    style: x
  }, /* @__PURE__ */ e.createElement(n, Object.assign({}, b)));
});
export {
  S as R,
  M as g,
  L as w
};
