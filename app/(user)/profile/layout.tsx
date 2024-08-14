import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
