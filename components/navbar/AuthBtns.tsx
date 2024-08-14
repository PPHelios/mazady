"use client";
import React from "react";
import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { Button } from "../ui/button";
import NavbarDropdownMenu from "./NavbarDropdownMenu";

export default function AuthBtns({ closeSheet }: { closeSheet?: () => void }) {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  return (
    <>
      {isLoggedIn ? (
        <NavbarDropdownMenu closeSheet={closeSheet} />
      ) : (
        <div className="flex flex-row items-center justify-center gap-5">
          <Link onClick={() => closeSheet && closeSheet()} href="/login">
            <Button
              className="bg-orange-600 hover:bg-orange-400/70 dark:text-white"
            >
              Login
            </Button>
          </Link>
          <Link onClick={closeSheet && closeSheet} href="/signup">
            <Button
              variant="secondary"
              className="dark:bg-black dark:hover:bg-slate-800"
            >
              Signup
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
