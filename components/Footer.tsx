import { Facebook, Instagram, X, Youtube } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="relative mt-16 bg-white pb-6 pt-8 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="px-4 lg:w-6/12">
            <h4 className="fonat-semibold text-blueGray-700 text-3xl">
              Let&apos;s keep in touch!
            </h4>
            <h5 className="text-blueGray-600 mb-2 mt-0 text-lg">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mb-6 mt-6 lg:mb-0">
              <button
                className="text-lightBlue-400 align-center mr-2 h-10 w-10
                  items-center justify-center rounded-full bg-background
                  font-normal shadow-lg outline-none focus:outline-none
                  dark:bg-slate-700"
                type="button"
              >
                <div className="flex items-center justify-center">
                  <Facebook />
                </div>
              </button>
              <button
                className="text-lightBlue-600 align-center mr-2 h-10 w-10
                  items-center justify-center rounded-full bg-background
                  font-normal shadow-lg outline-none focus:outline-none
                  dark:bg-slate-700"
                type="button"
              >
                <div className="flex items-center justify-center">
                  <X />
                </div>
              </button>
              <button
                className="align-center mr-2 h-10 w-10 items-center
                  justify-center rounded-full bg-background font-normal
                  shadow-lg outline-none focus:outline-none dark:bg-slate-700"
                type="button"
              >
                <div className="flex items-center justify-center">
                  <Instagram />
                </div>
              </button>
              <button
                className="text-blueGray-800 align-center mr-2 h-10 w-10
                  items-center justify-center rounded-full bg-background
                  font-normal shadow-lg outline-none focus:outline-none
                  dark:bg-slate-700"
                type="button"
              >
                <div className="flex items-center justify-center">
                  <Youtube />
                </div>
              </button>
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="ml-auto w-full px-4 lg:w-4/12">
                <span
                  className="text-blueGray-500 mb-2 block text-sm font-semibold
                    uppercase"
                >
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block
                        pb-2 text-sm font-semibold"
                      href="/"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block
                        pb-2 text-sm font-semibold"
                      href="/"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block
                        pb-2 text-sm font-semibold"
                      href="/"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block
                        pb-2 text-sm font-semibold"
                      href="/"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <span
                  className="text-blueGray-500 mb-2 block text-sm font-semibold
                    uppercase"
                >
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block
                        pb-2 text-sm font-semibold"
                      href="/"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block
                        pb-2 text-sm font-semibold"
                      href="/"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block
                        pb-2 text-sm font-semibold"
                      href="/"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block
                        pb-2 text-sm font-semibold"
                      href="/"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="my-6 border-blueGray-300"> */}
        <div
          className="flex flex-wrap items-center justify-center
            md:justify-between"
        >
          <div className="mx-auto w-full px-4 text-center md:w-4/12">
            <div className="text-blueGray-500 py-1 text-sm font-semibold">
              Copyright © <span id="get-current-year">2024</span>
              <a
                href="/"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
              >
                {" "}
                Mazady By{" "}
              </a>
              <a href="/" className="text-blueGray-500 hover:text-blueGray-800">
                Haytham Atef
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
