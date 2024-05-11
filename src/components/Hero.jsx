import React from "react";
import heroImg from "../images/undraw_learning_sketching_nd4f.svg";

export default function Hero() {
  return (
    <section className="pt-12">
      <div className="container px-6 space-x-6 flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-center space-y-5 py-8 text-center md:text-left text-slate-900">
          <h1 className="font-bold text-3xl md:text-4xl">
            Rapidly build modern websites without ever leaving your HTML.
          </h1>
          <p>
            A utility-first CSS framework packed with classes like flex, pt-4,
            text-center and rotate-90 that can be composed to build any design,
            directly in your markup.
          </p>
          <a
            href="#"
            className="py-2 px-6 rounded-full self-center md:self-start text-white bg-orange-500 hover:bg-slate-900 transition-all ease-in-out"
          >
            Get Started
          </a>
        </div>

        <div className="md:w-1/2">
          <img src={heroImg} alt="Tailwind Hero" />
        </div>
      </div>
    </section>
  );
}
