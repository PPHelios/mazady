import { Categories } from "@/components/Categories";
import { TextHighlight } from "@/components/TextHighlight";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between px-5
        pb-14 pt-4"
    >
      <div className="w-full h-screen relative flex justify-center items-center">
        <img src="/banner.jpg" alt="mazadat" className="object-cover absolute top-0 left-0 w-full h-full"/>
        <div className=" mx-auto bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100">
          <TextHighlight/>
        </div>
      </div>
      <Categories/>
    </main>
  );
}
