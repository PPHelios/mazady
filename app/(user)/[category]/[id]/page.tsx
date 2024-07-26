"use client";
import { useParams } from "next/navigation";
import React from "react";
import ItemCarousel from "@/components/ItemCarousel";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { projects } from "@/data";
const CountDownTimer = dynamic(() => import("@/components/CountDownTimer"), {
  ssr: false,
});
function ProductPage() {
  const params = useParams<{ id: string }>();
  const item = projects.find((project) => project.id === +params.id);

  return (
    <main>
      {item && (
        <div className="p-2 md:p-5">
          <h1 className="text-3xl md:hidden">{item.title}</h1>
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="">
              <ItemCarousel pics={item.pics} />
            </div>
            <div className="w-full">
              <h1 className="hidden text-3xl md:block">{item.title}</h1>
              <div>
                <div className="flex min-h-6 items-center justify-start">
                  <CountDownTimer
                    endDate={item.endDate}
                    activeStyle={{ color: "red", fontWeight: "semibold" }}
                    endedStyle={{ color: "red" }}
                  />
                </div>
                <div className="my-2">
                  <div>Current Bid</div>
                  <div
                    className="mt-1 flex items-center justify-start gap-2
                      text-lg"
                  >
                    <div>$ {item.lastBid}</div>
                    <div className="text-sm text-muted-foreground">2 bids</div>
                  </div>
                  <div
                    className="mt-2 flex items-center justify-start gap-2
                      text-lg"
                  >
                    <Button
                      className="bg-orange-600 hover:bg-orange-600/50
                        dark:text-white"
                      data-testid="btn"
                    >
                      Bid Now
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-slate-200"
                    >
                      <Heart className="size-4 text-red-400" />
                    </Button>
                  </div>
                  <p className="mt-4">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default ProductPage;
