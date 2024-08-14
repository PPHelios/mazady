import * as React from "react";
import Link from "next/link";

// import { Icons } from "@/components/icons"

import { SearchBox } from "../SearchBox";
import { ThemeToggler } from "../ThemeToggler";
import MobileMenu from "./MobileMenu";
import NavbarMenu from "./NavbarMenu";
import AuthBtns from "./AuthBtns";
export function Navbar() {
  return (
    <nav
      className="items-center justify-between gap-5 bg-surface p-2 md:flex
        md:flex-col md:px-5 md:py-6 lg:flex-row"
    >
      <div
        className="pointer-events-auto z-10 flex flex-row items-center
          justify-between gap-5 md:justify-center"
      >
        {/* Burger menu for moblies*/}
        <MobileMenu />
        <Link href="/" passHref>
          <img
            src="/mazady.gif"
            alt="mazadat"
            className="h-[30px] w-[100px] object-cover"
          />
        </Link>
        <NavbarMenu />
      </div>

      <div className="hidden flex-row items-center justify-center gap-5 md:flex">
        <SearchBox />
        <AuthBtns />
        <ThemeToggler />
      </div>
    </nav>
  );
}
