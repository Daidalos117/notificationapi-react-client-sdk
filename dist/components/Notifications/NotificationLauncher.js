import { jsx as i, jsxs as l } from "react/jsx-runtime";
import { Inbox as h } from "./Inbox.js";
import { UnreadBadge as g } from "./UnreadBadge.js";
import { useState as m, useContext as b } from "react";
import { NotificationAPIContext as s } from "../Provider/index.js";
import { NotificationPreferencesPopup as I } from "../Preferences/NotificationPreferencesPopup.js";
import "../Preferences/PreferenceInput.js";
import { R as S } from "../../assets/channelUtils.js";
import { P } from "../../assets/index.js";
import { B as C } from "../../assets/button.js";
const B = (t) => {
  var a, r, d, c;
  const [u, o] = m(!1), n = b(s);
  if (!n)
    return null;
  const e = {
    buttonIcon: t.buttonIcon || /* @__PURE__ */ i(
      S,
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
    offsetX: t.offsetX || 16,
    offsetY: t.offsetY || 16,
    position: t.position || "BOTTOM_RIGHT",
    count: t.count || "COUNT_UNOPENED_NOTIFICATIONS",
    filter: t.filter || "ALL",
    header: {
      title: (a = t.header) == null ? void 0 : a.title,
      button1ClickHandler: ((r = t.header) == null ? void 0 : r.button1ClickHandler) ?? n.markAsArchived,
      button2ClickHandler: ((d = t.header) == null ? void 0 : d.button2ClickHandler) ?? (() => o(!0))
    },
    renderers: {
      notification: (c = t.renderers) == null ? void 0 : c.notification
    }
  };
  return /* @__PURE__ */ l(
    "div",
    {
      style: {
        position: "fixed",
        right: e.offsetX,
        bottom: e.offsetY,
        zIndex: 9999
      },
      children: [
        /* @__PURE__ */ i(
          P,
          {
            autoAdjustOverflow: !0,
            trigger: "click",
            content: /* @__PURE__ */ i(
              h,
              {
                maxHeight: 500,
                pagination: e.pagination,
                filter: e.filter,
                imageShape: e.imageShape,
                pageSize: e.pageSize,
                pagePosition: e.pagePosition,
                notificationRenderer: e.renderers.notification,
                header: e.header
              }
            ),
            arrow: !1,
            overlayStyle: {
              padding: "0 16px",
              minWidth: e.popupWidth
            },
            onOpenChange: (f) => {
              f && n.markAsOpened();
            },
            children: /* @__PURE__ */ i(
              "div",
              {
                style: {
                  display: "inline-block"
                },
                children: /* @__PURE__ */ i(
                  g,
                  {
                    ...t.unreadBadgeProps,
                    style: {
                      top: 5,
                      right: 5
                    },
                    count: e.count,
                    children: /* @__PURE__ */ i(
                      C,
                      {
                        icon: e.buttonIcon,
                        style: {
                          width: e.buttonWidth,
                          height: e.buttonHeight
                        },
                        shape: "circle",
                        type: "default"
                      }
                    )
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ i(
          I,
          {
            open: u,
            onClose: () => o(!1)
          }
        )
      ]
    }
  );
};
export {
  B as NotificationLauncher
};
