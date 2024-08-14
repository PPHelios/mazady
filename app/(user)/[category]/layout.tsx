import React from "react";

type Props = {
  params: { category: string };
};

// To statically render all paths at build time
export function generateStaticParams() {
  const categories = [
    "cars",
    "electronics",
    "home",
    "fashion",
    "sports",
    "art",
    "other",
  ];
  return categories.map((category) => ({ category }));
}

// To prevent unspecified paths from being statically rendered
export const dynamicParams = false;
export async function generateMetadata({ params }: Props) {
  return {
    title: params.category,
  };
}
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
