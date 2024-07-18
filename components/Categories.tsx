import { projects } from "@/data";
import { HoverEffect } from "./ui/card-hover-effect";

export default function Categories() {
  return (
    <div className="mx-auto max-w-5xl md:px-8" data-testid="div">
      <HoverEffect items={projects} />
    </div>
  );
}
