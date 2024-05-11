import React from "react";
import adam from "../../images/adam.jpg";
import madeline from "../../images/madeline.jpg";
import marcel from "../../images/marcel.jpg";
import Card from "./Card";

export default function Main() {
  let infoList = [
    {
      img: adam,
      name: "Adam Sandler",
      desc: `The way I wrote it changed frequently. It’s not a coincidence Tailwind
    was released the same year. It might look wrong, but spend time with it
    and you’ll realize semantic CSS was a 20 year mistake.`,
    },
    {
      img: madeline,
      name: "Madeline Bauer",
      desc: `I have no design skills and with Tailwind I can actually make good
    looking websites with ease and it's everything I ever wanted in a
    CSS framework.`,
    },
    {
      img: marcel,
      name: "Marcel Khalifa",
      desc: `I started using @tailwindcss. I instantly fell in love with their
    responsive modifiers, thorough documentation, and how easy it was
    customizing color palettes.`,
    },
  ];

  return (
    <section>
      <div className="container px-5 pb-32 pt-28 text-center">
        <h2 className="font-bold text-4xl">
          “Best practices” don’t actually work.
        </h2>
        <p className="mt-8 max-w-5xl mx-auto">
          I’ve written a few thousand words on why traditional “semantic class
          names” are the reason CSS is hard to maintain, but the truth is you’re
          never going to believe me until you actually try it. If you can
          suppress the urge to retch long enough to give it a chance, I really
          think you’ll wonder how you ever worked with CSS any other way.
        </p>

        <div className="mt-10 flex flex-col space-x-0 space-y-8 md:flex-row md:space-x-5 md:space-y-0">
          {infoList.map((e) => {
            return <Card img={e.img} name={e.name} desc={e.desc} />;
          })}
        </div>
      </div>
    </section>
  );
}
