import Categories from "@/components/Categories";
import CTAButton from "@/components/CTAButton";
import { TextHighlight } from "@/components/TextHighlight";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between px-1 md:px-5
        pb-14 pt-4"
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
      <Link href="/addItem">
        <div className="my-16">
          <CTAButton />
        </div>
      </Link>
      <Categories />
    </main>
  );
}
