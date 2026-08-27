import { d as n, o as i, c as o, a as e } from "./main-M3OTn2jS.js";
const a = ["href", "title", "aria-label"], l = ["title", "aria-label"], h = /* @__PURE__ */ n({
  __name: "EnvelopeButton",
  props: {
    href: { default: "" },
    title: { default: "Contact" }
  },
  setup(t) {
    return (s, r) => t.href ? (i(), o("a", {
      key: 0,
      href: t.href,
      target: "_blank",
      rel: "noopener",
      class: "button",
      title: t.title,
      "aria-label": t.title
    }, [...r[0] || (r[0] = [
      e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "22",
        height: "22",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "aria-hidden": "true"
      }, [
        e("rect", {
          x: "2",
          y: "4",
          width: "20",
          height: "16",
          rx: "2"
        }),
        e("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
      ], -1)
    ])], 8, a)) : (i(), o("span", {
      key: 1,
      class: "button",
      title: t.title,
      "aria-label": t.title
    }, [...r[1] || (r[1] = [
      e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "22",
        height: "22",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "aria-hidden": "true"
      }, [
        e("rect", {
          x: "2",
          y: "4",
          width: "20",
          height: "16",
          rx: "2"
        }),
        e("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
      ], -1)
    ])], 8, l));
  }
});
export {
  h as default
};
