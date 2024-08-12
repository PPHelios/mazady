import React from "react";
import { cookies } from "next/headers";
import { Item } from "@/types/types";
import Product from "@/components/Product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My ads",
};
const getData = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/myAds`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      throw new Error(errorData.message);
    }
    return response.json();
  } catch (error: any) {
    console.log(error);
    return error.message;
  }
};
export default async function page() {
  const data = (await getData()) ?? null;
  // console.log(data);
  return (
    <main className="mt-5 flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-bold md:text-5xl">My Ads</h1>
      {data && data?.ads && data?.ads.length === 0 ? (
        <h1>No ads</h1>
      ) : (
        <div
          className="mx-auto flex w-full max-w-7xl flex-wrap items-center
            justify-center gap-4 px-3 py-8 md:px-28"
        >
          {data &&
            data?.ads &&
            data?.ads.length > 0 &&
            data.ads.map((item: Item) => (
              <Product
                key={item._id}
                _id={item._id}
                item_name={item.item_name}
                item_price={item.item_price}
                imageUrls={item.imageUrls}
                category={item.category}
                item_expiration_date={item.item_expiration_date}
                myAds={true}
              />
            ))}
        </div>
      )}
    </main>
  );
}
