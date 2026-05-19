"use client";

import { Card } from "@/components/layout/Card";
import { Button } from "@/components/interface/Button";
import { useTheme } from "next-themes";

export function Header() {

  const { theme, setTheme } = useTheme()

  return (
    <>
      <div id="nav" className="max-box padded">
        <Card
          id="nav-card"
          url="/test_logo.jpg"
          title="Welcome to my portfolio."
        >
          <div>
            <Button
              id="home"
            onClick={(/* e */) => {}}
            >
              Home
            </Button>
            <Button
              id="theme"
              onClick={(/* e */) => {setTheme(theme == "dark" ? "light" : "dark")}}
            >
              <span className="light-display">Dark</span>
              <span className="dark-display">Light</span>
            </Button>    
          </div>
        </Card>
      </div>
      <div id="nav-allowance" inert className="max-box padded">
        <Card
          id="nav-allowance-card"
          url="/test_logo.jpg"
          title="Welcome to my portfolio."
        >
          <div>
            <Button
              id="home-inert"
            onClick={(/* e */) => {}}
            >
              Home
            </Button>
            <Button
              id="theme-inert"
              onClick={(/* e */) => {setTheme(theme == "dark" ? "light" : "dark")}}
            >
              <span className="light-display">Dark</span>
              <span className="dark-display">Light</span>
            </Button>    
          </div>
        </Card>
      </div>
    </>
  );
}