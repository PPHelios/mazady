"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Signup() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div
      className="mx-auto w-full max-w-md rounded-none bg-white p-4 shadow-input
        dark:bg-black md:rounded-2xl md:p-8"
    >
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to Mazady
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Login to enjoy mazady
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="example@mazady.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md
            bg-orange-600 text-white
            shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
            hover:bg-orange-400/70
            dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Login &rarr;
          <BottomGradient />
        </button>

        <div
          className="my-8 h-px w-full bg-gradient-to-r from-transparent
            via-neutral-300 to-transparent dark:via-neutral-700"
        />
      </form>
    </div>
  );
}

export const BottomGradient = () => {
  return (
    <>
      <span
        className="absolute inset-x-0 -bottom-px block h-px w-full
          bg-gradient-to-r from-transparent via-cyan-500 to-transparent
          opacity-0 transition duration-500 group-hover/btn:opacity-100"
      />
      <span
        className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2
          bg-gradient-to-r from-transparent via-indigo-500 to-transparent
          opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100"
      />
    </>
  );
};

export const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
