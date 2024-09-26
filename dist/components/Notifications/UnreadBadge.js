import { jsx as i } from "react/jsx-runtime";
import { useContext as r } from "react";
import { NotificationAPIContext as c } from "../Provider/index.js";
import { B as l } from "../../assets/index2.js";
const h = (e) => {
  const o = r(c);
  return /* @__PURE__ */ i(
    l,
    {
      count: ((n) => e.count === "COUNT_UNOPENED_NOTIFICATIONS" || e.count === void 0 ? n.filter((t) => !t.opened && !t.seen).length : e.count === "COUNT_UNARCHIVED_NOTIFICATIONS" ? n.filter(
        (t) => !t.archived && !t.clicked && !t.replies && !t.actioned1 && !t.actioned2
      ).length : n.filter(e.count).length)((o == null ? void 0 : o.notifications) || []),
      color: e.color,
      overflowCount: e.overflowCount,
      dot: e.dot,
      showZero: e.showZero,
      size: e.size,
      style: {
        ...e.style
      },
      children: e.children
    }
  );
};
export {
  h as UnreadBadge
};
