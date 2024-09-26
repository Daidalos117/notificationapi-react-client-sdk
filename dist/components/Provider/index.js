import { jsx as B } from "react/jsx-runtime";
import { createContext as F, useState as N, useCallback as b, useMemo as G, useRef as m, useEffect as M, useContext as J } from "react";
const _ = async (e, c, r, a, f, w, p) => {
  const h = z(a, f, w), l = await fetch(
    `https://${c}/${a}/users/${encodeURIComponent(
      f
    )}/${r}`,
    {
      method: e,
      body: JSON.stringify(p),
      headers: {
        Authorization: `Basic ${h}`
      }
    }
  );
  try {
    return await l.json();
  } catch {
    return;
  }
}, z = (e, c, r) => btoa(r ? e + ":" + c + ":" + r : e + ":" + c), U = {
  host: "api.notificationapi.com",
  websocketHost: "ws.notificationapi.com",
  userId: "",
  clientId: "",
  hashedUserId: "",
  getInAppDefaultCount: 100,
  getInAppDefaultOldest: new Date(
    Date.now() - 2592e6
  ).toISOString(),
  onNewInAppNotifications: void 0,
  keepWebSocketAliveForSeconds: 86400
  // 24 hours
}, o = {
  config: U,
  init: function(e) {
    return this.config = { ...U, ...e }, {
      ...this
    };
  },
  rest: {
    generic: function(e, c, r) {
      return _(
        e,
        o.config.host,
        c,
        o.config.clientId,
        o.config.userId,
        o.config.hashedUserId,
        r
      );
    },
    getNotifications: function(e, c) {
      return o.rest.generic(
        "GET",
        `notifications/INAPP_WEB?count=${c}&before=${e}`
      );
    },
    patchNotifications: function(e) {
      return o.rest.generic(
        "PATCH",
        "notifications/INAPP_WEB",
        e
      );
    },
    getPreferences: function() {
      return o.rest.generic("GET", "preferences");
    },
    postPreferences: function(e) {
      return o.rest.generic(
        "POST",
        "preferences",
        e
      );
    }
  },
  websocket: {
    object: void 0,
    connect: function() {
      let e = `wss://${o.config.websocketHost}?userId=${encodeURIComponent(o.config.userId)}&envId=${o.config.clientId}`;
      return o.config.hashedUserId && (e += `&userIdHash=${encodeURIComponent(o.config.hashedUserId)}`), o.websocket.object = new WebSocket(e), o.websocket.object.onmessage = (c) => {
        const r = JSON.parse(c.data);
        if (!(!r || !r.route) && r.route === "inapp_web/new_notifications") {
          const a = r;
          o.config.onNewInAppNotifications && o.config.onNewInAppNotifications(
            a.payload.notifications
          );
        }
      }, o.websocket.object;
    },
    disconnect: function(e) {
      var c;
      o.websocket.object && ((c = o.websocket.object) == null || c.close(), e && e(o.websocket.object));
    }
  },
  openWebSocket: function() {
    return o.websocket.connect(() => {
      setTimeout(
        () => {
          this.websocket.disconnect(() => {
            this.websocket.connect();
          });
        },
        54e4
      );
    });
  },
  getInAppNotifications: async (e) => {
    const c = e.maxCountNeeded || o.config.getInAppDefaultCount, r = e.oldestNeeded || o.config.getInAppDefaultOldest;
    let a = [], f = e.before, w = !0, p = !0;
    for (; p; ) {
      const h = (await o.rest.getNotifications(
        f,
        c
      )).notifications.filter(
        (l) => !a.find((g) => g.id === l.id)
      );
      f = h.reduce(
        (l, g) => l < g.date ? l : g.date,
        e.before
      ), a = [...a, ...h], w = h.length > 0, p = !0, (!w || a.length >= c || f < r) && (p = !1);
    }
    return {
      items: a,
      hasMore: w,
      oldestReceived: f
    };
  },
  updateInAppNotifications: async (e) => {
    const c = {
      trackingIds: e.ids
    };
    return e.archived === !0 ? c.archived = (/* @__PURE__ */ new Date()).toISOString() : e.archived === !1 && (c.archived = null), e.clicked === !0 ? c.clicked = (/* @__PURE__ */ new Date()).toISOString() : e.clicked === !1 && (c.clicked = null), e.opened === !0 ? c.opened = (/* @__PURE__ */ new Date()).toISOString() : e.opened === !1 && (c.opened = null), o.rest.patchNotifications(c);
  },
  getPreferences: async () => o.rest.getPreferences(),
  updateDeliveryOption: async (e) => o.rest.postPreferences([e])
}, R = F(
  void 0
), q = (e) => {
  const r = {
    ...{
      apiURL: "https://api.notificationapi.com",
      wsURL: "wss://ws.notificationapi.com",
      initialLoadMaxCount: 1e3,
      initialLoadMaxAge: new Date((/* @__PURE__ */ new Date()).setMonth((/* @__PURE__ */ new Date()).getMonth() - 3)),
      playSoundOnNewNotification: !1,
      newNotificationSoundPath: "https://proxy.notificationsounds.com/notification-sounds/elegant-notification-sound/download/file-sounds-1233-elegant.mp3"
    },
    ...e
  }, [a, f] = N(), [w, p] = N(), [h, l] = N(!1), [g, y] = N((/* @__PURE__ */ new Date()).toISOString()), [A, D] = N(!0), P = b(() => {
    r.playSoundOnNewNotification && new Audio(r.newNotificationSoundPath).play().catch((s) => {
      console.log("Failed to play new notification sound:", s);
    });
  }, [r.newNotificationSoundPath, r.playSoundOnNewNotification]), S = b((n) => {
    const s = (/* @__PURE__ */ new Date()).toISOString();
    f((t) => (n = n.filter((i) => !(i.expDate && new Date(i.expDate * 1e3).toISOString() > s || i.date > s)), t ? [
      ...n.filter((i) => !t.find((d) => d.id === i.id)),
      ...t
    ] : n));
  }, []), u = G(() => o.init({
    clientId: e.clientId,
    userId: e.userId,
    hashedUserId: e.hashedUserId,
    onNewInAppNotifications: (n) => {
      P(), S(n);
    }
  }), [
    e.clientId,
    e.userId,
    e.hashedUserId,
    S,
    P
  ]), v = b(
    async (n, s) => {
      const t = await u.rest.getNotifications(n, s);
      y(t.oldestReceived), D(t.couldLoadMore), S(t.notifications);
    },
    [S, u.rest]
  ), O = m(A), C = m(h), x = m(g);
  M(() => {
    O.current = A, C.current = h, x.current = g;
  }, [A, h, g]);
  const k = b(
    async (n) => {
      if (!(!n && (!O.current || C.current))) {
        l(!0);
        try {
          await v(
            n ? (/* @__PURE__ */ new Date()).toISOString() : x.current,
            n ? r.initialLoadMaxCount : 1e3
          );
        } finally {
          l(!1);
        }
      }
    },
    [r.initialLoadMaxCount, v]
  ), $ = async (n) => {
    if (!a)
      return;
    const s = (/* @__PURE__ */ new Date()).toISOString(), t = a.filter((i) => n.includes(i.id) && !i.clicked).map((i) => i.id);
    u.updateInAppNotifications({ ids: t, clicked: !0 }), f((i) => {
      if (!i)
        return [];
      const d = [...i];
      return d.filter((I) => t.includes(I.id)).forEach((I) => {
        I.clicked = s;
      }), d;
    });
  }, E = async () => {
    if (!a)
      return;
    const n = (/* @__PURE__ */ new Date()).toISOString(), s = a.filter((t) => !t.opened || !t.seen).map((t) => t.id);
    s.length !== 0 && (u.updateInAppNotifications({
      ids: s,
      opened: !0
    }), f((t) => {
      if (!t)
        return [];
      const i = [...t];
      return i.filter((d) => s.includes(d.id)).forEach((d) => {
        d.opened = n, d.seen = !0;
      }), i;
    }));
  }, j = async (n) => {
    if (!a)
      return;
    const s = a.filter((t) => t.archived && (n === "ALL" || n.includes(t.id))).map((t) => t.id);
    s.length !== 0 && (u.updateInAppNotifications({
      ids: s,
      archived: !1
    }), f((t) => {
      if (!t)
        return [];
      const i = [...t];
      return i.filter((d) => s.includes(d.id)).forEach((d) => {
        d.archived = void 0;
      }), i;
    }));
  }, T = async (n) => {
    if (!a)
      return;
    const s = (/* @__PURE__ */ new Date()).toISOString(), t = a.filter((i) => !i.archived && (n === "ALL" || n.includes(i.id))).map((i) => i.id);
    t.length !== 0 && (u.updateInAppNotifications({ ids: t, archived: !0 }), f((i) => {
      if (!i)
        return [];
      const d = [...i];
      return d.filter((I) => t.includes(I.id)).forEach((I) => {
        I.archived = s;
      }), d;
    }));
  }, W = (n, s, t, i) => L([
    {
      notificationId: n,
      channel: s,
      delivery: t,
      subNotificationId: i
    }
  ]), L = (n) => {
    u.rest.postPreferences(n).then(() => {
      u.getPreferences().then((s) => {
        p(s);
      });
    });
  };
  M(() => {
    f([]), l(!1), p(void 0), y((/* @__PURE__ */ new Date()).toISOString()), D(!0), k(!0), u.openWebSocket(), u.getPreferences().then((n) => {
      p(n);
    });
  }, [u, k]);
  const H = {
    notifications: a,
    preferences: w,
    loadNotifications: k,
    markAsOpened: E,
    markAsArchived: T,
    markAsUnarchived: j,
    markAsClicked: $,
    updateDelivery: W,
    updateDeliveries: L,
    client: u
  };
  return /* @__PURE__ */ B(R.Provider, { value: H, children: e.children });
}, K = () => {
  const e = J(R);
  if (!e)
    throw new Error("useMyContext must be used within a MyProvider");
  return e;
};
q.useNotificationAPIContext = K;
export {
  R as NotificationAPIContext,
  q as NotificationAPIProvider
};
