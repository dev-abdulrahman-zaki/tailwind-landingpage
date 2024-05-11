import React from "react";

export default function NavLinks({ title }) {
  return (
    <a
      href="#"
      className="text-slate-900 hover:text-orange-500 transition-all ease-in-out"
    >
      {title}
    </a>
  );
}
