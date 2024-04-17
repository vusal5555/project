import Image from "next/image";
import Link from "next/link";

const mockData: any = [
  "https://utfs.io/f/200ff487-fa3b-458e-8af9-31ad6127be39-gc3iaf.jpg",
  "https://utfs.io/f/ad87a7ba-e720-4e07-bcbd-ff52f2775d73-gc3iad.jpg",
  "https://utfs.io/f/ad87a7ba-e720-4e07-bcbd-ff52f2775d73-gc3iad.jpg",
];

const mockImages = mockData.map((url: any, index: any) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        {[...mockImages, ...mockImages, ...mockImages].map((img: any) => {
          return (
            <div className="w-48 p-4">
              <img src={img.url} className="w-full" alt="Image"></img>
            </div>
          );
        })}
      </div>
    </main>
  );
}
