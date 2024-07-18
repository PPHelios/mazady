"use client";
import { useParams } from "next/navigation";
import React from "react";
import Product from "@/components/Product";
import { projects } from "@/data";
function Category() {
  const params = useParams<{ category: string }>();
  const categoryInfo = projects.find(
    (project) => project.link === params.category,
  );
  return (
    <main>
      {categoryInfo && (
        <div
          className="relative mx-auto mt-9 flex h-[220px] flex-col items-center
            justify-center md:h-[320px] md:w-1/2"
        >
          <h1
            className="overflow-hidden rounded-full bg-blue-900/40
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
      <div
        className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-4 px-3
          py-8 md:px-28 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Product key={project.link} {...project} />
        ))}
      </div>
    </main>
  );
}

export default Category;
