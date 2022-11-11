// src/Header/Header.tsx
import { jsx } from "react/jsx-runtime";
function Header({ children }) {
  return /* @__PURE__ */ jsx("header", {
    className: "mb-4 flex items-center justify-start gap-4 p-4 ",
    children
  });
}
export {
  Header
};
