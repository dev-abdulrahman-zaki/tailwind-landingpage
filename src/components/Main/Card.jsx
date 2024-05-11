import React from "react";

export default function Card({ img, name, desc }) {
  return (
    <div className="md:w-1/3 flex flex-col items-center p-6 space-y-2 rounded-lg border border-slate-200 bg-slate-100 hover:bg-white transition-all ease-in-out">
      <img src={img} alt={name} className="w-16 rounded-full -mt-12" />
      <h5 className="font-bold text-lg text-slate-900">{name}</h5>
      <p className="leading-5 text-sm text-slate-700">{desc}</p>
    </div>
  );
}
