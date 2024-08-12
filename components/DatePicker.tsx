"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DatePicker({
  date,
  setDate,
}: {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            `w-full h-24 justify-start bg-slate-300 text-left font-normal
            placeholder:text-neutral-600 dark:bg-zinc-800
            dark:placeholder:text-neutral-400`,
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 size-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          // @ts-ignore
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
