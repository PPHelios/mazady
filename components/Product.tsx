import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const CountDownTimer = dynamic(() => import("./CountDownTimer"), {
  ssr: false,
});
type Props = {
  id: number;
  title: string;
  image: string;
  link: string;
  endDate: string;
  lastPid: number;
};
export default function Product({
  id,
  title,
  image,
  link,
  endDate,
  lastPid,
}: Props) {
  const router = useRouter();

  return (
    <WobbleCard
      containerClassName="h-[340px] border border-gray-200 cursor-pointer pointer-events-auto "
      onClick={() => router.push(`/${link}/${id}`)}
    >
      <div key={title} className="flex h-full flex-col justify-between">
        <div>
          <div className="h-[180px] overflow-hidden">
            <img
              src={`/${image}`}
              alt={title}
              className="w-full rounded-2xl object-cover"
            />
          </div>
          <div className="px-4 py-3">
            <h2
              className="max-w-80 text-balance text-left text-base font-semibold
                tracking-[-0.015em] md:text-xl lg:text-3xl"
            >
              {title}
            </h2>
            {/* <p className="mt-4 line-clamp-3 max-w-[26rem] text-left text-base/6">
              {description}
            </p> */}
          </div>
          <div></div>
          <div className="min-h-9">
            <CountDownTimer
              endDate={endDate}
              activeStyle={{ color: "darkRed", fontSize: "1.2rem" }}
              endedStyle={{ color: "darkRed", fontSize: "1.2rem" }}
              className="mx-5 bg-slate-200 py-1 text-xl font-semibold"
            />
          </div>
          <div className="flex items-center justify-between px-5 pb-5">
            <div
              className="flex h-10 w-1/2 items-center justify-center rounded-sm
                rounded-ee-none rounded-se-none border bg-background text-center"
            >
              Last Pid: {lastPid}$
            </div>
            <Button
              className="pointer-events-auto z-10 w-1/2 cursor-pointer
                rounded-es-none rounded-ss-none bg-orange-600
                hover:bg-orange-600/50 dark:text-white"
              onClick={(e) => {
                e.stopPropagation();
                alert("Pid added");
              }}
            >
              Pid {lastPid + 50}$
            </Button>
          </div>
        </div>
      </div>
    </WobbleCard>
  );
}
