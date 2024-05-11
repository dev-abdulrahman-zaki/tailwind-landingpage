import React from "react";
import logo from "../images/logo-trans.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="container flex flex-col-reverse justify-between px-5 py-10 space-y-8 text-white lg:flex-row lg:space-y-0">
        <div className="flex flex-col items-center justify-between pt-8 space-y-3 lg:pt-0 md:space-y- md:items-center ">
          <div>
            <img src={logo} alt="Logo" className="h-8" />
          </div>
          <div className="flex space-x-4 ">
            <a href="https://www.linkedin.com/in/dev-abdulrahman-zaki/" target="_blank">
              <FaLinkedin size={32} />
            </a>
            <a href="https://github.com/dev-abdulrahman-zaki" target="_blank">
            <FaGithub size={32} />
            </a>
          </div>
        </div>

        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-slate-300">
              Home
            </a>
            <a href="#" className="hover:text-slate-300">
              About
            </a>
            <a href="#" className="hover:text-slate-300">
              Contact
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-slate-300">
              Imprint
            </a>
            <a href="#" className="hover:text-slate-300">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-300">
              Credits
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form action="#">
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Subscribe to Newsletter"
                className="flex-1 px-6 py-2 rounded-full text-slate-950"
              />
              <button className="px-4 py-2 transition-all ease-in-out bg-orange-500 rounded-full hover:bg-slate-500">
                Go
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
