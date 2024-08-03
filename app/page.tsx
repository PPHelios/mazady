"use client";
import Categories from "@/components/Categories";
import CTAButton from "@/components/CTAButton";
import { TextHighlight } from "@/components/TextHighlight";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const handleTest = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/user`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
      }
      const res = await response.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between px-1
        pb-14 pt-4 md:px-5"
    >
      <div className="relative flex h-screen items-center justify-center">
        <img
          src="/banner.webp"
          alt="mazadat"
          className="absolute left-0 top-0 size-full object-cover"
        />
        <div
          className="mx-auto rounded-md border border-gray-100 bg-blue-200/40
            bg-clip-padding backdrop-blur-md"
        >
          <TextHighlight />
        </div>
      </div>
      <Button onClick={handleTest}>test</Button>
      <Link href="/addItem">
        <div className="my-16">
          <CTAButton />
        </div>
      </Link>
      <Categories />
    </main>
  );
}
