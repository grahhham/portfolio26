"use client";

import { Card } from "@/components/interface/Card";
import { Button } from "@/components/interface/Button";

export default function Home() {
  return (
    <div className="space-y-8 w-full px-6 md:px-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Gallery</h1>
      </div>
      <Card
        id="test"
        img_url="https://cdn.gaijinpot.com/app/uploads/sites/6/2016/02/Mount-Fuji-New.jpg"
        title="Mount Fuji"
      >
        <div>
          <Button
            id="test2"
            text="Test"
            onClick={(e) => {}}
          >

          </Button>
        </div>
      </Card>
    </div>
  );
}
