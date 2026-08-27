var l = { exports: {} }, s = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d;
function p() {
  if (d) return s;
  d = 1;
  var i = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(u, r, e) {
    var a = null;
    if (e !== void 0 && (a = "" + e), r.key !== void 0 && (a = "" + r.key), "key" in r) {
      e = {};
      for (var x in r)
        x !== "key" && (e[x] = r[x]);
    } else e = r;
    return r = e.ref, {
      $$typeof: i,
      type: u,
      key: a,
      ref: r !== void 0 ? r : null,
      props: e
    };
  }
  return s.Fragment = t, s.jsx = n, s.jsxs = n, s;
}
var c;
function v() {
  return c || (c = 1, l.exports = p()), l.exports;
}
var o = v();
function R({ href: i = "", title: t = "Contact" }) {
  const n = "button", u = /* @__PURE__ */ o.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ o.jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
        /* @__PURE__ */ o.jsx("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
      ]
    }
  );
  return i ? /* @__PURE__ */ o.jsx("a", { href: i, target: "_blank", rel: "noopener", className: n, title: t, "aria-label": t, children: u }) : /* @__PURE__ */ o.jsx("span", { className: n, title: t, "aria-label": t, children: u });
}
export {
  R as default
};
