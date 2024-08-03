"use client";

import * as React from "react";
import Link from "next/link";

// import { Icons } from "@/components/icons"

import { SearchBox } from "./SearchBox";
import { Button } from "./ui/button";
import { ThemeToggler } from "./ThemeToggler";
import ResSheet from "./ResSheet";
import NavMenu from "./NavMenu";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { logoutUser } from "@/lib/features/auth/authSlice";
export function Navbar() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();
  return (
    <nav
      className="items-center justify-between gap-5 bg-surface p-2 md:flex
        md:flex-col md:px-5 md:py-6  lg:flex-row"
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
        {isLoggedIn ? (
          <Button
            onClick={() => dispatch(logoutUser())}
            variant="secondary"
            className="dark:bg-black dark:hover:bg-slate-800"
          >
            Logout
          </Button>
        ) : (
          <div className="flex flex-row items-center justify-center gap-5">
            <Link href="/login" legacyBehavior passHref>
              <Button
                className="bg-orange-600 hover:bg-orange-400/70 dark:text-white"
              >
                Login
              </Button>
            </Link>
            <Link href="/signup" legacyBehavior passHref>
              <Button
                variant="secondary"
                className="dark:bg-black dark:hover:bg-slate-800"
              >
                Signup
              </Button>
            </Link>
          </div>
        )}
        <ThemeToggler />
      </div>
    </nav>
  );
}
