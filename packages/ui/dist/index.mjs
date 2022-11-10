// src/Header/Header.tsx
import Image from "next/image";
import { jsx, jsxs } from "react/jsx-runtime";
function Header({ children, logoSrc, logoAlt }) {
  return /* @__PURE__ */ jsxs("header", {
    className: "mb-4 flex items-center justify-start gap-4 p-4 ",
    children: [
      /* @__PURE__ */ jsx(Image, {
        src: logoSrc,
        alt: logoAlt,
        className: "h-8 w-auto"
      }),
      children
    ]
  });
}
export {
  Header
};
