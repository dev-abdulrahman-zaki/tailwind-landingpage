import React from 'react'

export default function Sec() {
  return (
    <section className="bg-orange-500">
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
            <h2 className="text-3xl md:text-2xl font-bold leading-tight text-center text-white  md:max-w xl md:text-left">
                Move even faster with Tailwind UI.
            </h2>
            <div>
                <a href="#" className="p-3 px-6 pt-2 text-organge-500 bg-white rounded-full shadow-2xl baseline text-orange-500 hover:bg-slate-900 hover:text-white transition-all ease-in-out">Start Here</a>
            </div>
        </div>
    </section>
  )
}
