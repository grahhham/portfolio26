"use client";

import { Card } from "@/components/layout/Card";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-box padded">
      <Card
        id="not-found-card"
        data={{
          img_url: "/not-found.jpg",
          title: "Sorry, not found!",
          w: 500,
          h: 500,
        }}
      >
        <li className="button-container">
          {/* Copying Button component styling */}
          <Link 
            id="home"
            href={"/"}
            className="card-button"
          >
            Back Home
            <span className="button-indicator"></span>
          </Link>
        </li>
      </Card>
    </div>
  )
}