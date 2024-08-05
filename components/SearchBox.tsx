"use client";

import * as React from "react";

import { useMediaQuery } from "@/utils/useMediaQuery";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

type Status = {
  value: string;
  label: string;
  link: string;
};

const statuses: Status[] = [
  {
    value: "electronics",
    label: "Electronics",
    link: "electronics",
  },
  {
    value: "cars",
    label: "Cars",
    link: "cars",
  },
  {
    value: "fashion",
    label: "Fashion",
    link: "fashion",
  },
  {
    value: "home",
    label: "Home",
    link: "home",
  },
  {
    value: "sport Equipments",
    label: "Sport Equipments",
    link: "sports",
  },
  {
    value: "art",
    label: "Art",
    link: "art",
  },
];

export function SearchBox({
  setSheetOpen,
}: {
  setSheetOpen?: (open: boolean) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[200px] justify-start">
            <Search className="mr-2 size-4 shrink-0 opacity-50" /> Search for
            category
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0" align="start">
          <StatusList setOpen={setOpen} setSheetOpen={setSheetOpen} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="w-[200px] justify-start md:w-[150px]"
        >
          <Search className="mr-2 size-4 shrink-0 opacity-50" /> Search for
          category
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList setSheetOpen={setSheetOpen} setOpen={setOpen} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({
  setOpen,
  setSheetOpen,
}: {
  setOpen: (open: boolean) => void;
  setSheetOpen?: (open: boolean) => void;
}) {
  const router = useRouter();
  return (
    <Command>
      <CommandInput placeholder="Pick Category..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                // setSelectedStatus(
                //   statuses.find((priority) => priority.value === value) || null,
                // );
                setOpen(false);
                if (setSheetOpen) {
                  setSheetOpen(false);
                }
                router.push(`/${status.link}`);
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
