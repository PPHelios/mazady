"use client";
import { useParams } from "next/navigation";
import React from "react";
import { projects } from "@/components/Categories";
import Product from "@/components/Product";
function Category() {
  const params = useParams<{ category: string }>();
  const categoryInfo = projects.find(
    (project) => project.link === params.category,
  );
  return (
    <main>
      {categoryInfo && (
        <div
          className="relative h-[320px] mx-auto mt-9 flex w-[50%] flex-col items-center
            justify-center "
        >
          <h1 className="text-5xl font-bold text-white p-10 bg-blue-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 rounded-full overflow-hidden">{categoryInfo.title}</h1>
          {/* <div>{categoryInfo.description}</div> */}
          <img
            src={`/${categoryInfo?.image}`}
            alt="mazadat"
            className="absolute size-full top-0 left-0 right-0 object-cover z-[-1] rounded-md"
          />
        </div>
      )}
      <div
        className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-4
          lg:grid-cols-3 py-8 px-28"
      >
        {projects.map((project) => (
          <Product key={project.link} {...project} />
        ))}
      </div>
    </main>
  );
}

export default Category;
