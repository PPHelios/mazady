import Categories from "@/components/Categories";
import CTAButton from "@/components/CTAButton";
import { TextHighlight } from "@/components/TextHighlight";
import Link from "next/link";

export default function Home() {
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
      <div className="relative w-full">
        <Link href="/addItem">
          <div
            className="absolute -top-80 left-0 z-[-1] h-[25rem] w-screen
              translate-y-1/2 bg-gradient-to-r from-transparent via-surface
              to-transparent dark:bg-gradient-to-r dark:via-blue-950 md:-left-5"
          />
          <div className="my-16">
            <CTAButton />
          </div>
        </Link>
      </div>
      <Categories />
    </main>
  );
}
