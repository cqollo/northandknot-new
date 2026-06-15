import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "North & Knot — Bespoke Furniture, Nairobi",
  description: "Heirloom-quality bespoke furniture and functional art, handcrafted in Nairobi, Kenya. Commissions open.",
  keywords: ["bespoke furniture", "woodwork", "Nairobi", "custom furniture", "Kenya"],
  openGraph: {
    title: "North & Knot",
    description: "Bespoke furniture & functional art, handcrafted in Nairobi.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
