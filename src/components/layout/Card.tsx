// import React, { ReactNode } from 'react';

import { ReactNode } from "react";

import ImageFrame from "@/components/interface/ImageFrame";
import { ButtonRow } from "@/components/layout/ButtonRow";
import { CardDataElement } from "@/types/Data";

interface CardProps {
  id: string;
  data: CardDataElement;
  children?: ReactNode;
  nav?: boolean;
  animationDelay?: string;
}

export function Card({ id, data, children, nav, animationDelay }: CardProps) {
  return (
    <div
      id={id}
      className="max card fade-in"
      style={{ animationDelay }}
    >
      {/* Image for spacing*/}
      <ImageFrame
        src={
          data.img_url+(
            data.url_suffix ?
              data.url_suffix + 
                (data.w_thumb ? data.w_thumb : data.w)
            : ""
          )
        }
        alt={data.title}
        width={data.w_thumb ? data.w_thumb : data.w}
        height={data.h_thumb ? data.h_thumb : data.h}
        className="card-img img-spacing"
      />
      {/* Hover container */}
      {nav ? 
        <nav
          className="hover-container"
          aria-label="Main Navigation"
        >
          {/* Description */}
          <h1
            className="img-desc"
          >
            {data.title}
          </h1>
          {/* Control panel */}
          <ButtonRow
            id={"btrw"+id}
          >
            {children}
          </ButtonRow>

        </nav>
      : 
        <div
          className="hover-container"
        >
          {/* Description */}
          <div
            className="img-desc"
          >
            {data.title}
          </div>
          {/* Control panel */}
          <ButtonRow
            id={"btrw"+id}
          >
            {children}
          </ButtonRow>

        </div>
      }
      {/* Image for viewing/interacting*/}
      <ImageFrame
        src={
          data.img_url+(
            data.url_suffix ?
              data.url_suffix + 
                (data.w_thumb ? data.w_thumb : data.w)
            : ""
          )
        }
        alt={data.title}
        width={data.w_thumb ? data.w_thumb : data.w}
        height={data.h_thumb ? data.h_thumb : data.h}
        className={"card-img img-interactive"}
        hideAlerts={true}
      />
    </div>

  );
}