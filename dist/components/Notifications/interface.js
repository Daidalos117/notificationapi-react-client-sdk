var N = /* @__PURE__ */ ((I) => (I.INFINITE_SCROLL = "infinite_scroll", I.PAGINATED = "paginated", I))(N || {}), r = /* @__PURE__ */ ((I) => (I.square = "square", I.circle = "circle", I))(r || {}), T = /* @__PURE__ */ ((I) => (I.ALL = "ALL", I.UNARCHIVED = "UNARCHIVED", I))(T || {}), A = /* @__PURE__ */ ((I) => (I.EMAIL = "EMAIL", I.INAPP_WEB = "INAPP_WEB", I.SMS = "SMS", I.CALL = "CALL", I.PUSH = "PUSH", I.WEB_PUSH = "WEB_PUSH", I))(A || {}), O = /* @__PURE__ */ ((I) => (I.OFF = "off", I.INSTANT = "instant", I.HOURLY = "hourly", I.DAILY = "daily", I.WEEKLY = "weekly", I.MONTHLY = "monthly", I))(O || {}), E = /* @__PURE__ */ ((I) => (I.COUNT_UNOPENED_NOTIFICATIONS = "COUNT_UNOPENED_NOTIFICATIONS", I.COUNT_UNARCHIVED_NOTIFICATIONS = "COUNT_UNARCHIVED_NOTIFICATIONS", I))(E || {}), t = /* @__PURE__ */ ((I) => (I.TOP_LEFT = "top-left", I.TOP_RIGHT = "top-right", I.BOTTOM_LEFT = "bottom-left", I.BOTTOM_RIGHT = "bottom-right", I))(t || {});
const L = {
  opened: "opened",
  clicked: "clicked",
  archived: "archived",
  replied: "replied",
  actioned1: "actioned1",
  actioned2: "actioned2"
};
export {
  E as COUNT_TYPE,
  A as Channels,
  O as DeliveryOptions,
  T as Filter,
  r as ImageShape,
  L as NOTIFICATION_ACTIONS,
  N as Pagination,
  t as Position
};
