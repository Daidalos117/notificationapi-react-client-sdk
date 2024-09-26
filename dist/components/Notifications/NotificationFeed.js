import { jsxs as d, jsx as f } from "react/jsx-runtime";
import { useState as m, useContext as s, useEffect as h } from "react";
import { Inbox as u } from "./Inbox.js";
import { NotificationAPIContext as S } from "../Provider/index.js";
import { NotificationPreferencesPopup as x } from "../Preferences/NotificationPreferencesPopup.js";
import "../Preferences/PreferenceInput.js";
import { Filter as H } from "./interface.js";
const v = (e) => {
  var r, o, a, l;
  const [c, n] = m(!1), t = s(S);
  if (h(() => {
    if (!t)
      return;
    t.markAsOpened();
    const g = setInterval(() => {
      t.markAsOpened();
    }, 5e3);
    return () => clearInterval(g);
  }, [t]), !t)
    return null;
  const i = {
    imageShape: e.imageShape || "circle",
    pagination: e.pagination || "INFINITE_SCROLL",
    pageSize: e.pageSize || 10,
    pagePosition: e.pagePosition || "top",
    style: e.style || {},
    filter: e.filter || H.ALL,
    infiniteScrollHeight: e.infiniteScrollHeight ? e.infiniteScrollHeight : window.innerHeight * 0.75,
    renderers: {
      notification: (r = e.renderers) == null ? void 0 : r.notification
    },
    header: {
      title: (o = e.header) == null ? void 0 : o.title,
      button1ClickHandler: ((a = e.header) == null ? void 0 : a.button1ClickHandler) ?? t.markAsArchived,
      button2ClickHandler: ((l = e.header) == null ? void 0 : l.button2ClickHandler) ?? (() => n(!0))
    }
  };
  return /* @__PURE__ */ d(
    "div",
    {
      style: {
        padding: 12,
        boxSizing: "border-box",
        background: "#fff",
        ...e.style
      },
      children: [
        /* @__PURE__ */ f(
          u,
          {
            maxHeight: i.infiniteScrollHeight,
            pagination: i.pagination,
            filter: i.filter,
            imageShape: i.imageShape,
            pageSize: i.pageSize,
            pagePosition: i.pagePosition,
            notificationRenderer: i.renderers.notification,
            header: i.header
          }
        ),
        /* @__PURE__ */ f(
          x,
          {
            open: c,
            onClose: () => n(!1)
          }
        )
      ]
    }
  );
};
export {
  v as NotificationFeed
};
