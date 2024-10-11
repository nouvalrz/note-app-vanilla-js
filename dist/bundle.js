(() => {
  var t = {
      7: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, u(r.key), r);
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = u(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function u(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var c = (function (n) {
          function u() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, u),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ("object" == t(n) || "function" == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, u)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(u, n),
            (c = u),
            (l = [
              {
                key: "_clearContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "_setStyle",
                value: function () {
                  this._style.textContent =
                    "\n      div {\n\n        color: #020420;\n        border-top: 1px solid var(--lightgray);\n        background-color: #020420;\n        color: white;\n        text-align: center;\n        padding-block: 1rem;\n        \n        display: flex;\n        justify-content: space-between;\n\n        padding: 1rem 2rem;\n      }\n  \n      h4, h5 {\n        margin: 0;\n        font-weight: 600;\n      }\n\n      @media screen and (max-width: 768px){\n        div {\n            flex-direction: column;\n            align-items: center;\n        }\n      }\n    ";
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  this._clearContent(),
                    this._setStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      "      \n          <div>\n            <h4>Develop by Nouval Rizky</h4>\n            <h5>Design inspired by Nuxt Official Website</h4>\n          </div>\n        ");
                },
              },
            ]) && e(c.prototype, l),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, l;
        })(n(HTMLElement));
        customElements.define("app-footer", c);
      },
      133: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, u(r.key), r);
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = u(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function u(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var c = (function (n) {
          function u() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, u),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ("object" == t(n) || "function" == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, u)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(u, n),
            (c = u),
            (l = [
              {
                key: "_clearContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "_setStyle",
                value: function () {
                  this._style.textContent =
                    "\n    div {\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      width: 100%; \n      color: #020420;\n      border-bottom: 2px solid #00d07c;\n      background-color: #020420;\n      color: white;\n      text-align: center;\n      padding-block: 1rem;\n      \n      display: flex;\n      justify-content: center;\n      align-items: flex-end;\n      gap: 0.5rem;\n    }\n\n    h2 {\n      margin: 0;\n      font-weight: 600;\n    }\n\n    .badge {\n      border: 1.5px solid var(--green-outline);\n      border-radius: 2rem;\n      font-size: 0.8rem;\n      background-color: var(--dark-green);\n      padding: 0.2rem 0.8rem;\n    }\n  ";
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  this._clearContent(),
                    this._setStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '      \n        <div>\n          <h2>Notes App</h2>\n          <span class="badge">by Nouval</>\n        </div>\n      ');
                },
              },
            ]) && e(c.prototype, l),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, l;
        })(n(HTMLElement));
        customElements.define("app-header", c);
      },
      394: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, u(r.key), r);
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = u(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function u(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var c = (function (n) {
          function u() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, u),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ("object" == t(n) || "function" == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, u)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(u, n),
            (c = u),
            (l = [
              {
                key: "_clearContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  this._clearContent(),
                    (this._shadowRoot.innerHTML +=
                      "      \n          <div>\n            <i>Belum ada catatan</i>\n          </div>\n        ");
                },
              },
            ]) && e(c.prototype, l),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, l;
        })(n(HTMLElement));
        customElements.define("note-empty", c);
      },
      877: (t, e, n) => {
        "use strict";
        n.d(e, { A: () => u });
        var r = n(601),
          o = n.n(r),
          i = n(314),
          a = n.n(i)()(o());
        a.push([
          t.id,
          '* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --lightgray: #334155;\n  --gray: #182134;\n  --darkgray: #0d1424;\n  --green: rgb(0, 220, 130);\n  --green-rgb: 0, 220, 130;\n  --white-text: #dce3eb;\n  --green-outline: #024b41;\n  --dark-green: #021b2a;\n}\n\nbody {\n  font-family: "Poppins", sans-serif;\n  background: rgb(2, 50, 53);\n  background: linear-gradient(\n    180deg,\n    rgba(2, 50, 53, 1) 0%,\n    rgba(6, 10, 35, 1) 22%,\n    rgba(6, 10, 35, 1) 96%,\n    rgba(14, 21, 41, 1) 100%\n  );\n  color: var(--white-text);\n}\n\nmain {\n  margin-block: 6rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 1rem;\n}\n\n.note-list {\n  margin: auto;\n  width: 100%;\n  max-width: 80rem;\n}\n',
          "",
        ]);
        const u = a;
      },
      314: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var u = 0; u < this.length; u++) {
                  var c = this[u][0];
                  null != c && (a[c] = !0);
                }
              for (var l = 0; l < t.length; l++) {
                var s = [].concat(t[l]);
                (r && a[s[0]]) ||
                  (void 0 !== i &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = i)),
                  n &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = n))
                      : (s[2] = n)),
                  o &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = o))
                      : (s[4] = "".concat(o))),
                  e.push(s));
              }
            }),
            e
          );
        };
      },
      601: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      72: (t) => {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, a = [], u = 0; u < t.length; u++) {
            var c = t[u],
              l = r.base ? c[0] + r.base : c[0],
              s = i[l] || 0,
              f = "".concat(l, " ").concat(s);
            i[l] = s + 1;
            var p = n(f),
              d = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(d);
            else {
              var y = o(d, r);
              (r.byIndex = u),
                e.splice(u, 0, { identifier: f, updater: y, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var u = n(i[a]);
              e[u].references--;
            }
            for (var c = r(t, o), l = 0; l < i.length; l++) {
              var s = n(i[l]);
              0 === e[s].references && (e[s].updater(), e.splice(s, 1));
            }
            i = c;
          };
        };
      },
      659: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, n) => {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      "use strict";
      var t = n(72),
        e = n.n(t),
        r = n(825),
        o = n.n(r),
        i = n(659),
        a = n.n(i),
        u = n(56),
        c = n.n(u),
        l = n(540),
        s = n.n(l),
        f = n(113),
        p = n.n(f),
        d = n(877),
        y = {};
      function b(t) {
        return (
          (b =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          b(t)
        );
      }
      function h(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, m(r.key), r);
        }
      }
      function m(t) {
        var e = (function (t) {
          if ("object" != b(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != b(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == b(e) ? e : e + "";
      }
      (y.styleTagTransform = p()),
        (y.setAttributes = c()),
        (y.insert = a().bind(null, "head")),
        (y.domAPI = o()),
        (y.insertStyleElement = s()),
        e()(d.A, y),
        d.A && d.A.locals && d.A.locals,
        n(133);
      const v = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }),
          (e = [
            {
              key: "emptyElement",
              value: function (t) {
                t.innerHTML = "";
              },
            },
            {
              key: "showElement",
              value: function (t) {
                (t.style.display = "block"), (t.hidden = !1);
              },
            },
            {
              key: "hideElement",
              value: function (t) {
                (t.style.display = "none"), (t.hidden = !0);
              },
            },
            {
              key: "isValidInteger",
              value: function (t) {
                return Number.isNaN(t) || Number.isFinite(t);
              },
            },
            {
              key: "formatDateString",
              value: function (t) {
                var e = new Date(t),
                  n = String(e.getHours()).padStart(2, "0"),
                  r = String(e.getMinutes()).padStart(2, "0"),
                  o = e.getDate(),
                  i = e.getFullYear(),
                  a = [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "Mei",
                    "Jun",
                    "Jul",
                    "Agu",
                    "Sep",
                    "Okt",
                    "Nov",
                    "Des",
                  ][e.getMonth()];
                return ""
                  .concat(n, ":")
                  .concat(r, " - ")
                  .concat(o, " ")
                  .concat(a, " ")
                  .concat(i);
              },
            },
          ]),
          null && h(t.prototype, null),
          e && h(t, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function g(t) {
        return (
          (g =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          g(t)
        );
      }
      function w(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, T(r.key), r);
        }
      }
      function _(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (_ = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (O()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && S(o, n.prototype), o;
              })(t, arguments, j(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              S(n, t)
            );
          }),
          _(t)
        );
      }
      function O() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (O = function () {
          return !!t;
        })();
      }
      function S(t, e) {
        return (
          (S = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          S(t, e)
        );
      }
      function j(t) {
        return (
          (j = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          j(t)
        );
      }
      function k(t, e, n) {
        return (
          (e = T(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function T(t) {
        var e = (function (t) {
          if ("object" != g(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != g(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == g(e) ? e : e + "";
      }
      var x = (function (t) {
        function e() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            k(
              (t = (function (t, e, n) {
                return (
                  (e = j(e)),
                  (function (t, e) {
                    if (e && ("object" == g(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(t);
                  })(
                    t,
                    O()
                      ? Reflect.construct(e, n || [], j(t).constructor)
                      : e.apply(t, n),
                  )
                );
              })(this, e)),
              "_shadowRoot",
              null,
            ),
            k(t, "_style", null),
            k(t, "_submitEvent", "submit"),
            k(t, "_createNoteEvent", "create-note"),
            k(t, "_maxTitleLength", 50),
            (t._shadowRoot = t.attachShadow({ mode: "open" })),
            (t._style = document.createElement("style")),
            (t.maxTitleLength = t.getAttribute("max-title-length")),
            t.render(),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && S(t, e);
          })(e, t),
          (n = e),
          (o = [
            {
              key: "observedAttributes",
              get: function () {
                return ["max-title-length"];
              },
            },
          ]),
          (r = [
            {
              key: "maxTitleLength",
              get: function () {
                return this._maxTitleLength;
              },
              set: function (t) {
                var e = Number(t);
                v.isValidInteger(e) && (this._maxTitleLength = t);
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var t = this;
                this._shadowRoot
                  .querySelector("form")
                  .addEventListener("submit", function (e) {
                    return t._onNoteSubmit(e);
                  }),
                  this._shadowRoot
                    .querySelector("#title")
                    .addEventListener("keyup", function (e) {
                      return t._onTitleChange(e);
                    });
              },
            },
            {
              key: "disconnectedCallback",
              value: function () {
                var t = this;
                this._shadowRoot
                  .querySelector("form")
                  .removeEventListener("submit", function (e) {
                    return t._onFormSubmit(e);
                  }),
                  this._shadowRoot
                    .querySelector("#title")
                    .removeEventListener("keyup", function (e) {
                      return t._onTitleChange(e);
                    });
              },
            },
            {
              key: "_onTitleChange",
              value: function (t) {
                var e = t.target.value;
                this._shadowRoot.querySelector("#charLimit").innerHTML = ""
                  .concat(e.length, "/")
                  .concat(this.maxTitleLength);
                var n = this._shadowRoot.querySelector(
                  ".form-group__validation",
                );
                e.length > this.maxTitleLength
                  ? ((n.innerHTML = "Judul melebihi batas karakter"),
                    (n.style.display = "block"))
                  : (n.style.display = "none");
              },
            },
            {
              key: "_onNoteSubmit",
              value: function (t) {
                t.preventDefault();
                var e = this._shadowRoot.querySelector("#title").value,
                  n = this._shadowRoot.querySelector("#content").value,
                  r = {
                    id: +new Date(),
                    title: e,
                    body: n,
                    createdAt: new Date().toISOString(),
                    archived: !1,
                  };
                this._clearForm(),
                  document.dispatchEvent(
                    new CustomEvent("add-note", { detail: r }),
                  );
              },
            },
            {
              key: "_clearForm",
              value: function () {
                this._shadowRoot.querySelector("form").reset(),
                  (this._shadowRoot.querySelector("#charLimit").innerHTML =
                    "0/".concat(this.maxTitleLength));
              },
            },
            {
              key: "_clearContent",
              value: function () {
                this._shadowRoot.innerHTML = "";
              },
            },
            {
              key: "_setStyle",
              value: function () {
                this._style.textContent =
                  '\n      :host{\n        display: block;\n      }\n\n      * {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n      }\n\n      .note-form {\n        margin: auto;\n        border: 1px solid var(--lightgray);\n        border-radius: 0.3rem;\n        width: 100%;\n        max-width: 38rem;\n        background-color: var(--gray);\n        overflow: hidden;\n      }\n\n      .note-form__header {\n        border-bottom: 1px solid var(--lightgray);\n        background-color: var(--darkgray);\n        padding: 0.5rem 1rem;\n      }\n\n      .note-form__header h4 {\n        font-weight: 400;\n      }\n\n      .note-form__body {\n        padding: 1.5rem 1rem;\n        display: flex;\n        flex-direction: column;\n        gap: 1.5rem;\n      }\n\n      .note-form__body button {\n        border-radius: 0.2rem;\n        padding: 0.5rem 1rem;\n        transition: all 0.2s;\n        border: none;\n        background-color: var(--green);\n        font-weight: 600;\n      }\n\n      .note-form__body button:hover {\n        cursor: pointer;\n        background-color: rgba(var(--green-rgb), 0.6);\n      }\n\n      .form-group__header{\n        display: flex;\n        justify-content: space-between;\n      }\n\n      .form-group label {\n        display: block;\n        margin-bottom: 0.5rem;\n      }\n        \n      .form-group input,\n      .form-group textarea {\n        font-size: 0.9rem;\n        font-family: "Poppins", sans-serif;\n        line-height: 1.5;\n        width: 100%;\n        display: block;\n        background-color: var(--gray);\n        border: 1px solid var(--lightgray);\n        color: white;\n        padding: 0.7rem;\n        border-radius: 0.3rem;\n        resize: vertical;\n        font-weight: 300;\n      }\n\n      .form-group input:focus-visible,\n      .form-group textarea:focus-visible {\n        appearance: none;\n        outline: none;\n        box-shadow: 0 0 0 1px var(--green);\n      }\n\n      .form-group__validation{\n        color: red;\n        font-size: 0.8rem;\n        padding-block: 0.5rem;\n        display: none;\n      }\n    ';
              },
            },
            {
              key: "render",
              value: function () {
                this._clearContent(),
                  this._setStyle(),
                  this._shadowRoot.appendChild(this._style),
                  (this._shadowRoot.innerHTML +=
                    '\n      <div class="note-form">\n        <div class="note-form__header">\n          <h4>Tambah Note</h4>\n        </div>\n        <form class="note-form__body">\n          <div class="form-group">\n            <div class="form-group__header">\n              <label for="title">Judul</label>\n              <span id="charLimit">0/'
                      .concat(
                        this.maxTitleLength,
                        '</span>\n            </div>\n              <input type="text" name="title" id="title" required pattern=".{1,',
                      )
                      .concat(
                        this.maxTitleLength,
                        '}" title="Masukkan antara 1-',
                      )
                      .concat(
                        this.maxTitleLength,
                        ' karakter"  />\n              <span class="form-group__validation">Judul melebihi batas karakter</span>\n          </div>\n          <div class="form-group">\n            <label for="content">Isi</label>\n            <textarea name="content" id="content" rows="6" required></textarea>\n          </div>\n          <button type="submit">Simpan</button>\n        </form>\n      </div>\n    ',
                      ));
              },
            },
          ]) && w(n.prototype, r),
          o && w(n, o),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r, o;
      })(_(HTMLElement));
      function E(t) {
        return (
          (E =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          E(t)
        );
      }
      function P(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, D(r.key), r);
        }
      }
      function R(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (R = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (C()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && M(o, n.prototype), o;
              })(t, arguments, L(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              M(n, t)
            );
          }),
          R(t)
        );
      }
      function C() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (C = function () {
          return !!t;
        })();
      }
      function M(t, e) {
        return (
          (M = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          M(t, e)
        );
      }
      function L(t) {
        return (
          (L = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          L(t)
        );
      }
      function A(t, e, n) {
        return (
          (e = D(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function D(t) {
        var e = (function (t) {
          if ("object" != E(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != E(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == E(e) ? e : e + "";
      }
      customElements.define("note-form", x);
      var N = (function (t) {
        function e() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            A(
              (t = (function (t, e, n) {
                return (
                  (e = L(e)),
                  (function (t, e) {
                    if (e && ("object" == E(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(t);
                  })(
                    t,
                    C()
                      ? Reflect.construct(e, n || [], L(t).constructor)
                      : e.apply(t, n),
                  )
                );
              })(this, e)),
              "_shadowRoot",
              null,
            ),
            A(t, "_style", null),
            A(t, "_itemMinWidth", 16),
            A(t, "_gap", 1),
            (t._shadowRoot = t.attachShadow({ mode: "open" })),
            (t._style = document.createElement("style")),
            t.render(),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && M(t, e);
          })(e, t),
          (n = e),
          (o = [
            {
              key: "observedAttributes",
              get: function () {
                return ["item-min-width", "gap"];
              },
            },
          ]),
          (r = [
            {
              key: "itemMinWidth",
              get: function () {
                return this._itemMinWidth;
              },
              set: function (t) {
                var e = Number(t);
                v.isValidInteger(e) && (this._itemMinWidth = t);
              },
            },
            {
              key: "gap",
              get: function () {
                return this._gap;
              },
              set: function (t) {
                var e = Number(t);
                v.isValidInteger(e) && (this._gap = t);
              },
            },
            {
              key: "attributeChangedCallback",
              value: function (t, e, n) {
                switch (t) {
                  case "item-min-width":
                    this.itemMinWidth = n;
                    break;
                  case "gap":
                    this.gap = n;
                }
                this.render();
              },
            },
            {
              key: "_setStyle",
              value: function () {
                this._style.textContent =
                  "\n      * {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n      }\n      .note-list__wrapper {\n        margin-block: 1rem;\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(".concat(
                    this.itemMinWidth,
                    "rem, 1fr));\n        gap: 1rem;\n      }\n    ",
                  );
              },
            },
            {
              key: "_clearContent",
              value: function () {
                this._shadowRoot.innerHTML = "";
              },
            },
            {
              key: "render",
              value: function () {
                this._clearContent(),
                  this._setStyle(),
                  this._shadowRoot.appendChild(this._style),
                  (this._shadowRoot.innerHTML +=
                    '\n      <div class="note-list__wrapper">\n        <slot></slot>\n      </div>\n    ');
              },
            },
          ]) && P(n.prototype, r),
          o && P(n, o),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r, o;
      })(R(HTMLElement));
      function H(t) {
        return (
          (H =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          H(t)
        );
      }
      function q(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function I(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? q(Object(n), !0).forEach(function (e) {
                J(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : q(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function B(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, U(r.key), r);
        }
      }
      function F(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (F = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (Z()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && z(o, n.prototype), o;
              })(t, arguments, W(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              z(n, t)
            );
          }),
          F(t)
        );
      }
      function Z() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (Z = function () {
          return !!t;
        })();
      }
      function z(t, e) {
        return (
          (z = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          z(t, e)
        );
      }
      function W(t) {
        return (
          (W = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          W(t)
        );
      }
      function J(t, e, n) {
        return (
          (e = U(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function U(t) {
        var e = (function (t) {
          if ("object" != H(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != H(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == H(e) ? e : e + "";
      }
      customElements.define("note-list", N);
      var G = (function (t) {
        function e() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            J(
              (t = (function (t, e, n) {
                return (
                  (e = W(e)),
                  (function (t, e) {
                    if (e && ("object" == H(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(t);
                  })(
                    t,
                    Z()
                      ? Reflect.construct(e, n || [], W(t).constructor)
                      : e.apply(t, n),
                  )
                );
              })(this, e)),
              "_shadowRoot",
              null,
            ),
            J(t, "_style", null),
            J(t, "_note", {
              id: null,
              title: null,
              body: null,
              createdAt: null,
              archived: !1,
            }),
            (t._shadowRoot = t.attachShadow({ mode: "open" })),
            (t._style = document.createElement("style")),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && z(t, e);
          })(e, t),
          (n = e),
          (r = [
            {
              key: "note",
              get: function () {
                return this._note;
              },
              set: function (t) {
                (this._note = t), this.render();
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var t = this;
                this._shadowRoot
                  .querySelector("#toggleArchived")
                  .addEventListener("click", function (e) {
                    return t._onToggleArchived(e);
                  }),
                  this._shadowRoot
                    .querySelector("#deleteNote")
                    .addEventListener("click", function (e) {
                      return t._onDeleteNote(e);
                    });
              },
            },
            {
              key: "disconnectedCallback",
              value: function () {
                var t = this;
                this._shadowRoot
                  .querySelector("#toggleArchived")
                  .removeEventListener("click", function (e) {
                    return t._onToggleArchived(e);
                  }),
                  this._shadowRoot
                    .querySelector("#deleteNote")
                    .removeEventListener("click", function (e) {
                      return t._onDeleteNote(e);
                    });
              },
            },
            {
              key: "_editNote",
              value: function (t) {
                document.dispatchEvent(
                  new CustomEvent("edit-note", { detail: t }),
                );
              },
            },
            {
              key: "_onToggleArchived",
              value: function (t) {
                t.preventDefault();
                var e = I(
                  I({}, this.note),
                  {},
                  { archived: !this.note.archived },
                );
                this._editNote(e);
              },
            },
            {
              key: "_onDeleteNote",
              value: function (t) {
                t.preventDefault(),
                  document.dispatchEvent(
                    new CustomEvent("delete-note", { detail: this.note }),
                  );
              },
            },
            {
              key: "_clearContent",
              value: function () {
                this._shadowRoot.innerHTML = "";
              },
            },
            {
              key: "_setStyle",
              value: function () {
                this._style.textContent =
                  "\n      * {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n      }\n      .note-list__item {\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n        border: 1px solid var(--lightgray);\n        border-radius: 0.3rem;\n        padding: 1rem;\n      }\n\n      .note-list__item-body {\n        overflow: scroll;\n        height: 10rem;\n\n        flex-grow: 1;\n        font-size: 0.9rem;\n        padding-block: 1rem;\n        border-block: 1.5px dashed var(--lightgray);\n      }\n\n      .note-list__button-group {\n        display: flex;\n        justify-content: flex-end;\n        gap: 0.5rem;\n      }\n\n      .note-list__button-group button {\n        border: 1px solid var(--lightgray);\n        background-color: var(--gray);\n        color: white;\n        border-radius: 0.2rem;\n        padding: 0.5rem 1rem;\n        transition: all 0.2s;\n      }\n\n      .note-list__button-group button:hover {\n        cursor: pointer;\n        background-color: transparent;\n      }\n\n      i {\n        margin-right: 0.3rem;\n      }\n\n      .red {\n        color: red !important;\n      }\n    ";
              },
            },
            {
              key: "render",
              value: function () {
                this._clearContent(), this._setStyle();
                var t = v.formatDateString(this.note.createdAt);
                this._shadowRoot.appendChild(this._style),
                  (this._shadowRoot.innerHTML +=
                    '\n      <div class="note-list__item">\n        <h4>'
                      .concat(this.note.title, "</h4>\n        <p>")
                      .concat(
                        t,
                        '</p>\n        <p class="note-list__item-body">\n          ',
                      )
                      .concat(
                        this.note.body,
                        '\n        </p>\n        <div class="note-list__button-group">\n          <button type="button" id="toggleArchived">',
                      )
                      .concat(
                        this.note.archived ? "Restore" : "Arsip",
                        '\n          </button>\n          <button type="button" class="red" id="deleteNote">\n            Hapus\n          </button>\n        </div>\n      </div>\n    ',
                      ));
              },
            },
          ]) && B(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r;
      })(F(HTMLElement));
      function V(t) {
        return (
          (V =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          V(t)
        );
      }
      function K(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, Y(r.key), r);
        }
      }
      function Y(t) {
        var e = (function (t) {
          if ("object" != V(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != V(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == V(e) ? e : e + "";
      }
      customElements.define("note-item", G), n(7), n(394);
      var X = [
        {
          id: "notes-jT-jjsyz61J8XKiI",
          title: "Welcome to Notes, Dimas!",
          body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
          createdAt: "2022-07-28T10:03:12.594Z",
          archived: !1,
        },
        {
          id: "notes-aB-cdefg12345",
          title: "Meeting Agenda",
          body: "Discuss project updates and assign tasks for the upcoming week.",
          createdAt: "2022-08-05T15:30:00.000Z",
          archived: !1,
        },
        {
          id: "notes-XyZ-789012345",
          title: "Shopping List",
          body: "Milk, eggs, bread, fruits, and vegetables.",
          createdAt: "2022-08-10T08:45:23.120Z",
          archived: !1,
        },
        {
          id: "notes-1a-2b3c4d5e6f",
          title: "Personal Goals",
          body: "Read two books per month, exercise three times a week, learn a new language.",
          createdAt: "2022-08-15T18:12:55.789Z",
          archived: !1,
        },
        {
          id: "notes-LMN-456789",
          title: "Recipe: Spaghetti Bolognese",
          body: "Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",
          createdAt: "2022-08-20T12:30:40.200Z",
          archived: !1,
        },
        {
          id: "notes-QwErTyUiOp",
          title: "Workout Routine",
          body: "Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",
          createdAt: "2022-08-25T09:15:17.890Z",
          archived: !1,
        },
        {
          id: "notes-abcdef-987654",
          title: "Book Recommendations",
          body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
          createdAt: "2022-09-01T14:20:05.321Z",
          archived: !1,
        },
        {
          id: "notes-zyxwv-54321",
          title: "Daily Reflections",
          body: "Write down three positive things that happened today and one thing to improve tomorrow.",
          createdAt: "2022-09-07T20:40:30.150Z",
          archived: !1,
        },
        {
          id: "notes-poiuyt-987654",
          title: "Travel Bucket List",
          body: "1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",
          createdAt: "2022-09-15T11:55:44.678Z",
          archived: !1,
        },
        {
          id: "notes-asdfgh-123456",
          title: "Coding Projects",
          body: "1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",
          createdAt: "2022-09-20T17:10:12.987Z",
          archived: !1,
        },
        {
          id: "notes-5678-abcd-efgh",
          title: "Project Deadline",
          body: "Complete project tasks by the deadline on October 1st.",
          createdAt: "2022-09-28T14:00:00.000Z",
          archived: !1,
        },
        {
          id: "notes-9876-wxyz-1234",
          title: "Health Checkup",
          body: "Schedule a routine health checkup with the doctor.",
          createdAt: "2022-10-05T09:30:45.600Z",
          archived: !1,
        },
        {
          id: "notes-qwerty-8765-4321",
          title: "Financial Goals",
          body: "1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",
          createdAt: "2022-10-12T12:15:30.890Z",
          archived: !1,
        },
        {
          id: "notes-98765-54321-12345",
          title: "Holiday Plans",
          body: "Research and plan for the upcoming holiday destination.",
          createdAt: "2022-10-20T16:45:00.000Z",
          archived: !1,
        },
        {
          id: "notes-1234-abcd-5678",
          title: "Language Learning",
          body: "Practice Spanish vocabulary for 30 minutes every day.",
          createdAt: "2022-10-28T08:00:20.120Z",
          archived: !1,
        },
      ];
      function Q(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return $(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return $(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? $(t, e)
                    : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function $(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var tt = Q(
        (function () {
          return (
            (t = function t() {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t);
            }),
            (e = [
              {
                key: "getAll",
                value: function () {
                  return X;
                },
              },
            ]),
            null && K(t.prototype, null),
            e && K(t, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, e;
        })().getAll(),
      );
      document.addEventListener("DOMContentLoaded", function () {
        !(function () {
          document.addEventListener("add-note", function (e) {
            tt.push(e.detail), t();
          }),
            document.addEventListener("edit-note", function (e) {
              var n = tt.findIndex(function (t) {
                return t.id === e.detail.id;
              });
              tt.splice(n, 1, e.detail), t();
            }),
            document.addEventListener("delete-note", function (e) {
              var n = tt.findIndex(function (t) {
                return t.id === e.detail.id;
              });
              tt.splice(n, 1), t();
            });
          var t = function () {
              e(), n();
            },
            e = function () {
              var t = document.querySelector("#note-list-active"),
                e = tt
                  .filter(function (t) {
                    return !t.archived;
                  })
                  .sort(function (t, e) {
                    return new Date(e.createdAt) - new Date(t.createdAt);
                  })
                  .map(function (t) {
                    var e = document.createElement("note-item");
                    return (e.note = t), e;
                  });
              if (0 === e.length) {
                var n = document.createElement("note-empty");
                e.push(n);
              }
              v.emptyElement(t), t.append.apply(t, Q(e));
            },
            n = function () {
              var t = document.querySelector("#note-list-archived"),
                e = tt
                  .filter(function (t) {
                    return t.archived;
                  })
                  .sort(function (t, e) {
                    return new Date(e.createdAt) - new Date(t.createdAt);
                  })
                  .map(function (t) {
                    var e = document.createElement("note-item");
                    return (e.note = t), e;
                  });
              if (0 === e.length) {
                var n = document.createElement("note-empty");
                e.push(n);
              }
              v.emptyElement(t), t.append.apply(t, Q(e));
            };
          t();
        })();
      });
    })();
})();
