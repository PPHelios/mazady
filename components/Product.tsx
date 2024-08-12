"use client";
import React, { useMemo } from "react";
import { WobbleCard } from "./ui/wobble-card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { timeDiffFromNow } from "@/helpers/functions";
const CountDownTimer = dynamic(() => import("./CountDownTimer"), {
  ssr: false,
});
/* eslint-disable*/
type Props = {
  _id: string | number;
  item_name: string;
  imageUrls: string[];
  item_expiration_date: string;
  item_price: number;
  category: string;
  myAds?: boolean;
};
export default function Product({
  _id,
  item_name,
  imageUrls,
  item_expiration_date,
  item_price,
  category,
  myAds = false,
}: Props) {
  const router = useRouter();
  const timeLeft = useMemo(
    () => timeDiffFromNow(item_expiration_date),
    [item_expiration_date],
  );
  const timeEnded = useMemo(
    () =>
      timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0,
    [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds],
  );
  return (
    <WobbleCard
      containerClassName="h-[380px] max-w-[400px] border-2 border-gray-500 dark:border-gray-200 cursor-pointer pointer-events-auto "
      onClick={() => router.push(`/${category}/${_id}`)}
    >
      <div key={item_name} className="flex h-full flex-col justify-between">
        <div>
          <div className="h-[180px] overflow-hidden">
            <img
              src={imageUrls[0]}
              alt={item_name}
              className="w-full rounded-2xl object-cover"
            />
          </div>
          <div className="px-4 py-3">
            <h2
              className="max-w-80 text-balance text-left text-base font-semibold
                tracking-[-0.015em] md:text-xl lg:text-3xl"
            >
              {item_name}
            </h2>
            {/* <p className="mt-4 line-clamp-3 max-w-[26rem] text-left text-base/6">
              {description}
            </p> */}
          </div>
          <div className="my-5 min-h-9">
            <CountDownTimer
              endDate={item_expiration_date}
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
              Last Bid: {item_price}$
            </div>
            <Button
              className="pointer-events-auto z-10 w-1/2 cursor-pointer
                rounded-es-none rounded-ss-none bg-orange-600
                hover:bg-orange-600/50 dark:text-white"
              onClick={(e) => {
                e.stopPropagation();
                alert("Bid added");
              }}
              disabled={timeEnded || myAds}
            >
              Bid {item_price + 50}$
            </Button>
          </div>
        </div>
      </div>
    </WobbleCard>
  );
}
