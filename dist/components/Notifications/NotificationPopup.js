import { jsx as i, jsxs as h, Fragment as f } from "react/jsx-runtime";
import { Inbox as g } from "./Inbox.js";
import { UnreadBadge as m } from "./UnreadBadge.js";
import { NotificationAPIContext as p } from "../Provider/index.js";
import { useState as b, useContext as I } from "react";
import { NotificationPreferencesPopup as P } from "../Preferences/NotificationPreferencesPopup.js";
import "../Preferences/PreferenceInput.js";
import { Filter as S } from "./interface.js";
import { R as x } from "../../assets/channelUtils.js";
import { P as C } from "../../assets/index.js";
import { B as s } from "../../assets/button.js";
const F = (t) => {
  var a, r, c, d;
  const [u, o] = b(!1), n = I(p);
  if (!n)
    return null;
  const e = {
    buttonIcon: t.buttonIcon || /* @__PURE__ */ i(
      x,
      {
        style: {
          fontSize: t.buttonIconSize || (t.buttonWidth ? t.buttonWidth / 2 : 20),
          color: t.iconColor || "#000000"
        }
      }
    ),
    buttonWidth: t.buttonWidth || 40,
    buttonHeight: t.buttonHeight || 40,
    popupWidth: t.popupWidth || 400,
    popupHeight: t.popupHeight || 600,
    buttonIconSize: t.buttonIconSize || (t.buttonWidth ? t.buttonWidth / 2 : 20),
    imageShape: t.imageShape || "circle",
    iconColor: t.iconColor || "#000000",
    pagination: t.pagination || "INFINITE_SCROLL",
    pageSize: t.pageSize || 10,
    pagePosition: t.pagePosition || "top",
    popupZIndex: t.popupZIndex || 1030,
    unreadBadgeProps: t.unreadBadgeProps ?? {},
    count: t.count || "COUNT_UNOPENED_NOTIFICATIONS",
    filter: t.filter || S.ALL,
    header: {
      title: (a = t.header) == null ? void 0 : a.title,
      button1ClickHandler: ((r = t.header) == null ? void 0 : r.button1ClickHandler) ?? n.markAsArchived,
      button2ClickHandler: ((c = t.header) == null ? void 0 : c.button2ClickHandler) ?? (() => o(!0))
    },
    renderers: {
      notification: (d = t.renderers) == null ? void 0 : d.notification
    }
  };
  return /* @__PURE__ */ h(f, { children: [
    /* @__PURE__ */ i(
      C,
      {
        autoAdjustOverflow: !0,
        trigger: "click",
        content: /* @__PURE__ */ i(
          g,
          {
            maxHeight: e.popupHeight - 73,
            pagination: e.pagination,
            filter: e.filter,
            imageShape: e.imageShape,
            pageSize: e.pageSize,
            pagePosition: e.pagePosition,
            notificationRenderer: e.renderers.notification,
            header: e.header
          }
        ),
        onOpenChange: (l) => {
          l && n.markAsOpened();
        },
        arrow: !1,
        overlayStyle: {
          padding: "0 16px",
          width: e.popupWidth
        },
        zIndex: t.popupZIndex,
        children: /* @__PURE__ */ i(
          "div",
          {
            style: {
              display: "inline-block"
            },
            children: /* @__PURE__ */ i(
              m,
              {
                ...t.unreadBadgeProps,
                style: {
                  top: 5,
                  right: 5
                },
                count: e.count,
                filter: e.filter,
                children: /* @__PURE__ */ i(
                  s,
                  {
                    icon: e.buttonIcon,
                    style: {
                      width: e.buttonWidth,
                      height: e.buttonHeight
                    },
                    shape: "circle",
                    type: "text"
                  }
                )
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ i(
      P,
      {
        open: u,
        onClose: () => o(!1)
      }
    )
  ] });
};
export {
  F as NotificationPopup
};
