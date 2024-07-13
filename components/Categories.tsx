import { HoverEffect } from "./ui/card-hover-effect";

export function Categories() {
  return (
    <div className="mx-auto max-w-5xl px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    id: 0,
    title: "Electronics",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "electronics",
    image: "electronics.webp",
    endDate: "2024-07-1T09:17:00.000Z",
    lastPid: 500,
  },
  {
    id: 1,
    title: "Cars",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "cars",
    image: "cars.webp",
    endDate: "2024-07-27T00:00:00.000Z",
    lastPid: 450,
  },
  {
    id: 2,
    title: "Clothes",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "clothes",
    image: "clothes.webp",
    endDate: "2024-07-20T08:23:00.000Z",
    lastPid: 650,
  },
  {
    id: 3,
    title: "Furniture",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "furniture",
    image: "furniture.webp",
    endDate: "2024-07-15T05:22:00.000Z",
    lastPid: 1450,
  },
  {
    id: 4,
    title: "Sport Equipments",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "sports",
    image: "sports.webp",
    endDate: "2024-07-18T01:30:45.000Z",
    lastPid: 700,
  },
  {
    id: 5,
    title: "Art",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "art",
    image: "art.webp",
    endDate: "2024-07-25T13:23:00.000Z",
    lastPid: 850,
  },
];
