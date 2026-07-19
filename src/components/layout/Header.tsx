"use client";

import { FaGithub } from 'react-icons/fa';

import { Card } from "@/components/layout/Card";
import { Button, BUTTON_STYLE } from "@/components/interface/Button";
import { useTheme } from "next-themes";
import Link from "next/link";
import { SITE_TITLE } from '../../../lib/config';
import { useState, useEffect } from "react";

export function Header() {

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, forcing a re-render *after* hydration is safe
  useEffect(() => {
    setMounted(true);
  }, []);

  // Compute a safe, stable target theme string outside the JSX tags
  const currentTheme = mounted ? theme : "light";

  return (
    <>
      <div id="nav" className={"max-box padded" + (mounted ? "" : " shy")}>
        <Button
          id="theme-shortcut"
          styleType={BUTTON_STYLE.flat}
          onClick={(/* e */) => {setTheme((currentTheme) == "dark" ? "light" : "dark")}}
        >
          <span style={{fontSize: "1.5rem", lineHeight: "1.5rem"}} className="light-display">☾</span>
          <span style={{fontSize: "1.5rem", lineHeight: "1.5rem"}} className="dark-display">☼︎</span>
        </Button>
        {/* Copy all contents from here on into nav-allowance */}
        {/* Don't forget to update ID's */}
        <Card
          id="nav-card"
          nav={true}
          data={{
            img_url: (currentTheme) == "dark" ? "/logo-dark-v1.png" : "/logo-light-v1.png",
            title: SITE_TITLE,
            w: 2160,
            h: 160
          }}
        >
          <li className="button-container">
            {/* Copying Button component styling */}
            <Link 
              id="home"
              href={"/"}
              className="card-button"
            >
              Home
              <span className="button-indicator"></span>
            </Link>
          </li>
          <li className="button-container">
            {/* Copying Button component styling */}
            <Link 
              id="github"
              href={"https://github.com/grahhham"}
              target={"_blank"}
              className="card-button"
              style={{lineHeight: "1rem"}}
            >
              <FaGithub className="icon" />
              <span className="button-indicator"></span>
            </Link>
          </li>
          <li>
            <Button
              id="theme"
              onClick={(/* e */) => {setTheme((currentTheme) == "dark" ? "light" : "dark")}}
            >
              <span className="light-display">Dark</span>
              <span className="dark-display">Light</span>
            </Button>    
          </li>
        </Card>
      </div>
      <div id="nav-allowance" inert className="max-box padded">
        <Card
          id="nav-allowance-card"
          nav={true}
          data={{
            img_url: (currentTheme) == "dark" ? "/logo-dark-v1.png" : "/logo-light-v1.png",
            title: SITE_TITLE,
            w: 2160,
            h: 160
          }}
        >
          <li className="button-container">
            {/* Copying Button component styling */}
            <Link 
              id="home-allowance"
              href={"/"}
              className="card-button"
            >
              Home
              <span className="button-indicator"></span>
            </Link>
          </li>
          <li className="button-container">
            {/* Copying Button component styling */}
            <Link 
              id="github-allowance"
              href={"https://github.com/grahhham"}
              target={"_blank"}
              className="card-button"
              style={{lineHeight: "1rem"}}
            >
              <FaGithub className="icon" />
              <span className="button-indicator"></span>
            </Link>
          </li>
          <li>
            <Button
              id="theme-allowance"
              onClick={(/* e */) => {setTheme((currentTheme) == "dark" ? "light" : "dark")}}
            >
              <span className="light-display">Dark</span>
              <span className="dark-display">Light</span>
            </Button>    
          </li>
       </Card>
      </div>
    </>
  );
}