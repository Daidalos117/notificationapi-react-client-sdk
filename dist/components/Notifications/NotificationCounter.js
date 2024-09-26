import { jsx as n } from "react/jsx-runtime";
import { UnreadBadge as r } from "./UnreadBadge.js";
const e = (o) => {
  const t = o.count || "COUNT_UNOPENED_NOTIFICATIONS";
  return /* @__PURE__ */ n(r, { ...o, count: t });
};
export {
  e as NotificationCounter
};
