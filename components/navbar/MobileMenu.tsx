"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu } from "lucide-react";
import { SearchBox } from "../SearchBox";
import Link from "next/link";
import { components } from "@/data";
import { ThemeToggler } from "../ThemeToggler";
import AuthBtns from "./AuthBtns";
import { useIsBreakpointActive } from "@/hooks/useIsBreakpointActive";

function MobileMenu() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const notMobile = useIsBreakpointActive("md");
const closeSheet = () => setSheetOpen(false)
  {
    /* If not mobile close the sheet*/
  }
  useEffect(() => {
    if (notMobile) {
      setSheetOpen(false);
    }
  });
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger className="md:hidden">
        <Menu color="darkOrange" size={20} />
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-auto md:hidden">
        <SheetHeader>
          <SheetTitle>Mazady</SheetTitle>
        </SheetHeader>
        <div className="flex-col justify-start gap-5 pt-5">
          <SearchBox setSheetOpen={setSheetOpen} />
          <div>
            <MenuContent
              content={[
                { title: "Sell On Mazady", href: "/addItem" },
                { title: "Buy On Mazady", href: "/" },
              ]}
              label="Our Services"
            />
            <MenuContent content={components} label="Categories" />
            <Title label="Mazady guide" clasName="text-left mt-5 " />
          </div>
        </div>

        <div
          className="mt-8 flex w-full flex-col items-start justify-center gap-5"
        >
          <AuthBtns closeSheet={closeSheet} />
          <ThemeToggler />
        </div>
      </SheetContent>
    </Sheet>
  );
}
const Title = ({ label, clasName }: { label: string; clasName?: string }) => {
  return (
    <div
      className={`cursor-pointer text-lg font-medium hover:text-orange-500
        ${clasName}`}
    >
      {label}
    </div>
  );
};

const MenuContent = ({
  content,
  label,
}: {
  content: { title: string; href: string; description?: string }[];
  label: string;
}) => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Title label={label} />
          </AccordionTrigger>
          <AccordionContent
            className="flex flex-col items-start justify-start gap-6"
          >
            {content.map((item) => (
              <SheetClose key={item.title} asChild>
                <Link
                  href={item.href}
                  passHref
                  className="hover:text-orange-500"
                >
                  {item.title}
                </Link>
              </SheetClose>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default MobileMenu;
