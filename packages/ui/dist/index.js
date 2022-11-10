"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Header: () => Header
});
module.exports = __toCommonJS(src_exports);

// src/Header/Header.tsx
var import_image = __toESM(require("next/image"));
var import_jsx_runtime = require("react/jsx-runtime");
function Header({ children, logoSrc, logoAlt }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
    className: "mb-4 flex items-center justify-start gap-4 p-4 ",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_image.default, {
        src: logoSrc,
        alt: logoAlt,
        className: "h-8 w-auto"
      }),
      children
    ]
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Header
});
