"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import ItemCarousel from "@/components/ItemCarousel";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Item } from "@/types/types";
import { useAppDispatch } from "@/lib/hooks";
import { searchItemId } from "@/lib/features/search/searchSlice";
import LoaderComponent from "@/components/LoaderComponent";
const CountDownTimer = dynamic(() => import("@/components/CountDownTimer"), {
  ssr: false,
});
function ProductPage() {
  const params = useParams<{ category: string; id: string }>();
  const [ad, setAd] = React.useState<Item | null>(null);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchAds = async () => {
      try {
        setLoading(true);
        const response = await dispatch(
          searchItemId({ category: params.category, id: params.id }),
        ).unwrap();
        setAd(response.ad);
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
        console.log(err);
      }
    };
    if (!ad) {
      fetchAds();
    }
  }, [ad, dispatch, params.category, params.id]);
  return (
    <main>
      {loading && <LoaderComponent />}
      {ad && (
        <div className="p-2 md:p-5">
          <h1 className="text-3xl md:hidden">{ad.item_name}</h1>
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="">
              <ItemCarousel pics={ad.imageUrls} />
            </div>
            <div className="w-full">
              <h1 className="hidden text-3xl md:block">{ad.item_name}</h1>
              <div>
                <div className="flex min-h-6 items-center justify-start">
                  <CountDownTimer
                    endDate={ad.item_expiration_date}
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
                    <div>$ {ad.item_price}</div>
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
                  <p className="mt-4">{ad.item_desc}</p>
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
