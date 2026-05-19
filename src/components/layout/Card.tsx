// import React, { ReactNode } from 'react';

import Image from "next/image";
import { ReactNode } from "react";

import ImageFrame from "@/components/interface/ImageFrame";
import { ButtonRow } from "@/components/layout/ButtonRow";

interface CardProps {
  id: string;
  title: string;
  url: string;
  children?: ReactNode;
  animationDelay?: string;
}

export function Card({ id, title, url, children, animationDelay }: CardProps) {
  return (
    <div
      id={id}
      className="max card fade-in"
      style={{ animationDelay }}
    >
      {/* Image for spacing*/}
      <Image
        src={url}
        alt={title}
        width={1000}
        height={1000}
        className="card-img img-spacing"
      />
      {/* Hover container */}
      <div
        className="hover-container"
      >
        {/* Description */}
        <div
          className="img-desc"
        >
          {title}
        </div>
        {/* Control panel */}
        <ButtonRow
          id={"btrw"+id}
        >
          {children}
        </ButtonRow>

      </div>
      {/* Image for viewing/interacting*/}
      <ImageFrame
        src={url}
        alt={title}
        width={1000}
        height={1000}
        className={"card-img img-interactive"}
      />
    </div>

  );
}