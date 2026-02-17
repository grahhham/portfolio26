"use client";

import { Gallery } from "@/components/ui/Gallery";

const galleryItems = [
  {
    id: "1",
    url: "https://picsum.photos/400/400?random=1",
    alt: "Gallery item 1",
    title: "Mountain landscape",
  },
  {
    id: "2",
    url: "https://picsum.photos/400/400?random=2",
    alt: "Gallery item 2",
    title: "Forest path",
  },
  {
    id: "3",
    url: "https://picsum.photos/400/400?random=3",
    alt: "Gallery item 3",
    title: "Ocean sunset",
  },
  {
    id: "4",
    url: "https://picsum.photos/400/400?random=4",
    alt: "Gallery item 4",
    title: "Desert dunes",
  },
  {
    id: "5",
    url: "https://picsum.photos/400/400?random=5",
    alt: "Gallery item 5",
    title: "Urban architecture",
  },
];

export default function Home() {
  const handleItemAction = (itemId: string, action: string) => {
    console.log(`Item ${itemId}: ${action}`);
  };

  return (
    <div className="space-y-8 w-full px-6 md:px-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Gallery</h1>
        <p className="text-gray-600">
          Explore our collection of curated images
        </p>
      </div>
      <Gallery
        items={galleryItems}
        onItemAction={handleItemAction}
      />
    </div>
  );
}
