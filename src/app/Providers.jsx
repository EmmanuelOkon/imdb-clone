"use client";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-slate-900 dark:text-slate-200 text-slate-800 transition-colors duration-300 min-h-screen select-none">{children}</div>
    </ThemeProvider>
  );
}
