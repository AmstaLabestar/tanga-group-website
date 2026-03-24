"use client";

import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export default function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const next: Theme = isDark ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignore storage failures
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Basculer le thème clair/sombre"
      className="flex items-center justify-center w-9 h-9 rounded-md text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan/30"
    >
      <Sun className="hidden dark:block w-5 h-5" />
      <Moon className="block dark:hidden w-5 h-5" />
    </button>
  );
}
