"use client";

import ImagesUploader from "@/components/ImagesUploader";
import React, { useState } from "react";
import {
  BottomGradient,
  LabelInputContainer,
} from "@/components/ui/FormElements";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DatePicker from "@/components/DatePicker";

function AddItem() {
  const [files, setFiles] = useState(null);
  const [date, setDate] = React.useState<Date>(new Date());
  console.log("date", date);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <main>
      <div
        className="mx-auto mt-8 w-full max-w-md rounded-none bg-white p-4
          shadow-input dark:bg-black md:rounded-2xl md:p-8"
      >
        <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Add a new item
        </h1>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="itemName">Item name</Label>
            <Input id="itemName" placeholder="Enter Item Name" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="itemDesc">Item description</Label>
            <Textarea
              id="itemDesc"
              placeholder="Enter Item Descriptdescription"
              className="bg-blue-100 placeholder:text-neutral-600
                dark:bg-zinc-800 dark:placeholder:text-neutral-400"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="itemPrice">Item price</Label>
            <Input
              id="itemPrice"
              placeholder="Enter Item price"
              type="number"
            />
          </LabelInputContainer>
          <div className="my-4">
            <Label htmlFor="endDate">Bid expiration date</Label>
            <div className="flex items-center justify-center">
              <DatePicker date={date} setDate={setDate} />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <ImagesUploader files={files} setFiles={setFiles} />
          </div>
          <button
            className="group/btn relative mt-8 block h-10 w-full rounded-md
              bg-orange-600 text-white
              shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
              hover:bg-orange-400/70
              dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit &rarr;
            <BottomGradient />
          </button>
          <div
            className="my-8 h-px w-full bg-gradient-to-r from-transparent
              via-neutral-300 to-transparent dark:via-neutral-700"
          />
        </form>
      </div>
    </main>
  );
}

export default AddItem;
