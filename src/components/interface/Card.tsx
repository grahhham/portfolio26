import { ReactNode, useState } from "react";
import Image from "next/image";

interface CardProps {
  id: string;
  img_url: string;
  title: string;
  children?: ReactNode;
}

export function Card({ id, img_url, title, children, }: CardProps) {

  const [isHovered, setIsHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      id={id}
      className={`
        group/card flex flex-col overflow-hidden
        bg-card-bg text-card-fg
        rounded-2xl
        w-2xs`}
    >
      {/* Image */}
      <Image
        src={img_url}
        alt={title}
        width={100}
        height={100}
        className="flex-1 w-full h-full object-cover"
      />
      {/* Hover container */}
      <div
        className={`flex flex-col bg-card-bg`}
        aria-hidden={!isHovered}
      >
        {/* Description */}
        <div
          className={`px-2 py-1 border-b-1`}
        >
          {title}
        </div>
        {/* Control panel */}
        <div>
          {children}
        </div>

      </div>
      <Image
        src={img_url}
        alt={title}
        width={100}
        height={100}
        className={`
          flex-1 w-full object-cover absolute h-full 
          group-hover/card:h-[calc-size(auto,size)] transition-all duration-240 pointer-events-none
          group-focus-within/card:h-[calc-size(auto,size)]
        `}
      />
    </div>

  );

}
