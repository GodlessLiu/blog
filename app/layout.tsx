import type { Metadata } from "next";
import "@/themes/index.css";
import Script from "next/script";
import { LoadingBar } from "./components/LoadingProgressBar";

export const metadata: Metadata = {
  title: "Hilary Liu",
  description: "Hilary Liu's personal website",
};

export default function BasicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script>
        {
          `
          // init theme
          !function(){
              const e =window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches
              const theme = localStorage.getItem("hl-theme") || (e ? "dark" : "light")
              if(theme === "dark" || theme !== "light"){
                  document.documentElement.classList.toggle("dark",!0)
              }
          }()
          `
        }
      </Script>
      <body
        className={`antialiased`}
      >
        <LoadingBar />
        {children}
      </body>
    </html>
  );
}
