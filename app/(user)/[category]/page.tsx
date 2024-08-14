"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import Product from "@/components/Product";
import { projects } from "@/data";
import { useAppDispatch } from "@/lib/hooks";
import { searchCategory } from "@/lib/features/search/searchSlice";
import { Item } from "@/types/types";
import LoaderComponent from "@/components/LoaderComponent";

function Category() {
  const params = useParams<{ category: string }>();
  const categoryInfo = projects.find(
    (project) => project.link === params.category,
  );
  const [ads, setAds] = React.useState<Item[]>([]);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchAds = async () => {
      try {
        setLoading(true);
        const response = await dispatch(
          searchCategory({ category: params.category }),
        ).unwrap();
        setAds(response.ads);
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
        console.log(err);
      }
    };
    if (ads.length === 0) {
      fetchAds();
    }
  }, [ads, dispatch, params.category]);

  return (
    <main>
      {categoryInfo && (
        <div
          className="relative mx-auto mt-9 flex h-[220px] flex-col items-center
            justify-center md:h-[320px] md:w-1/2"
        >
          <h1
            className="overflow-hidden rounded-full bg-gray-800/20
              bg-clip-padding p-10 text-3xl font-bold text-white
              backdrop-blur-md md:text-5xl"
          >
            {categoryInfo.title}
          </h1>
          {/* <div>{categoryInfo.description}</div> */}
          <img
            src={`/${categoryInfo?.image}`}
            alt="mazadat"
            className="absolute inset-x-0 top-0 z-[-1] size-full rounded-md
              object-cover p-1 md:p-0"
          />
        </div>
      )}
      {loading && <LoaderComponent />}
      {ads && ads.length > 0 && (
        <div
          className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-4 px-3
            py-8 md:px-28 lg:grid-cols-3"
        >
          {ads.map((item) => (
            <Product key={item._id} {...item} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Category;
