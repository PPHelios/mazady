import * as React from "react";
import Link from "next/link";

// import { Icons } from "@/components/icons"

import { SearchBox } from "./SearchBox";
import { ThemeToggler } from "./ThemeToggler";
import ResSheet from "./ResSheet";
import NavMenu from "./NavMenu";
import NavbarDropdownMenu from "./NavbarDropdownMenu";
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
        <ResSheet />
        <Link href="/" passHref>
          <img
            src="/mazady.gif"
            alt="mazadat"
            className="h-[30px] w-[100px] object-cover"
          />
        </Link>
        <NavMenu />
      </div>

      <div className="hidden flex-row items-center justify-center gap-5 md:flex">
        <SearchBox />
        <NavbarDropdownMenu />
        <ThemeToggler />
      </div>
    </nav>
  );
}
