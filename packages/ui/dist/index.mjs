// src/Header/Header.tsx
import { jsx } from "react/jsx-runtime";
function Header({ children }) {
  return /* @__PURE__ */ jsx("header", {
    className: "h-12 mb-4 flex items-center justify-center bg-neutral-100",
    children,
  });
}
export { Header };
