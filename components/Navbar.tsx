"use client";

import * as React from "react";
import Link from "next/link";

// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SearchBox } from "./SearchBox";
import { Button } from "./ui/button";
import { ThemeToggler } from "./ThemeToggler";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Electronics",
    href: "/electronics",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Cars",
    href: "/cars",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Clothes",
    href: "/clothes",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Furniture",
    href: "/furniture",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Sport Equipments",
    href: "/sports",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Art",
    href: "/art",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Navbar() {
  return (
    <nav
      className="items-center justify-between gap-5 bg-surface px-5 py-6 md:flex
        md:flex-row"
    >
      <div className="flex flex-row items-center justify-center gap-5">
        <Link href="/" legacyBehavior passHref>
          <img
            src="/mazady.gif"
            alt="mazadat"
            className="h-[50px] w-[100px] object-cover"
          />
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="rtl:flex-row-reverse">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]
                    lg:grid-cols-[.75fr_1fr]"
                >
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col
                          justify-end rounded-md bg-gradient-to-b from-muted/50
                          to-muted p-6 no-underline outline-none focus:shadow-md
                          rtl:text-end"
                        href="/"
                      >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Mazady
                        </div>
                        <p
                          className="text-sm leading-tight text-muted-foreground"
                        >
                          Beautifully designed components that you can copy and
                          paste into your apps. Accessible. Customizable. Open
                          Source.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Sell On Mazady" />
                  <ListItem href="/docs/installation" title="Buy On Mazady" />
                  <ListItem
                    href="/docs/primitives/typography"
                    title="How Mazady works"
                  />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  className="grid w-[400px] gap-3 p-4 md:w-[500px]
                    md:grid-cols-3 lg:w-[600px]"
                >
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Mazady guide
                </NavigationMenuLink>
              </Link>{" "}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex flex-row items-center justify-center gap-5">
        <SearchBox />
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
        <ThemeToggler />
      </div>
    </nav>
  );
}

const ListItem = ({ href, title }: { href: string; title: string }) => {
  return (
    <li>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink>
          <div
            className="flex h-[50px] items-center justify-center bg-muted
              text-center text-sm font-medium leading-none hover:text-orange-500"
          >
            {title}
          </div>
        </NavigationMenuLink>
      </Link>
    </li>
  );
};
ListItem.displayName = "ListItem";
