"use client";
import { Button } from "@/components/ui/button";
import React from "react";

function page() {
  const handleTest = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/dashboard/allAds`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
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
    <main className="mt-5 flex flex-col items-center justify-center gap-5">
      <Button onClick={handleTest}>test</Button>
    </main>
  );
}

export default page;
