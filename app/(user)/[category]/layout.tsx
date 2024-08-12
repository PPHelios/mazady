import React from "react"

type Props = {
  params: { category: string };
};

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
