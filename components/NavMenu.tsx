import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { components } from "@/data";
function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList
        className="container hidden md:flex rtl:flex-row-reverse"
      >
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
                    className="flex size-full select-none flex-col justify-end
                      rounded-md bg-gradient-to-b from-muted/50 to-muted p-6
                      no-underline outline-none focus:shadow-md rtl:text-end"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">Mazady</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Mazady is a leading website in online bidding. Add your
                      item now to get the heighest price.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/addItem" title="Sell On Mazady" />
              <ListItem href="/" title="Buy On Mazady" />
              <ListItem
                href="/"
                title="How Mazady works"
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3
                lg:w-[600px]"
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
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
export default NavMenu;
