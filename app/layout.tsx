import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Figma Design Handoff Checker — Validate Design-to-Code",
  description: "Compare live websites against Figma designs. Catch spacing, color, and typography discrepancies before they ship."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="575d0b91-c57a-4ee1-878b-405c34904a92"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
