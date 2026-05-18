"use client";

import { Card } from "@/components/layout/Card";
import { Button } from "@/components/interface/Button";
import { useTheme } from "next-themes";

export function Header() {

  const { theme, setTheme } = useTheme()

  return (
    <div className="max-box padded">
      <Card
        id="header"
        url="/test_logo.jpg"
        title="Mount Fuji"
      >
        <div>
          <Button
            id="home"
           onClick={(e) => {}}
          >
            Home
          </Button>
          <Button
            id="theme"
            onClick={(e) => {setTheme(theme == "dark" ? "light" : "dark")}}
          >
            <span className="light-display">Dark</span>
            <span className="dark-display">Light</span>
          </Button>    
        </div>
      </Card>
    </div>
  );
}