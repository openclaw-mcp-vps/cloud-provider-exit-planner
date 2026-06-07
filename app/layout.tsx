import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloud Exit Planner — Multi-Cloud Migration Strategy Generator",
  description: "Generate step-by-step migration plans and cost estimates for switching cloud providers. Escape vendor lock-in with AI-powered exit strategies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a67947c6-334b-4626-8b6b-a37d1e9992bd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
