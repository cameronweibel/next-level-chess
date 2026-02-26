import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Level Chess | GM Noël Studer - Reach 1200+ Elo in 30 Days",
  description:
    "Join thousands of chess players who boosted their ratings with GM Noël Studer's proven training system. Free eBook + courses from Switzerland's youngest-ever Grandmaster.",
  openGraph: {
    title: "Next Level Chess | Reach 1200+ Elo in 30 Days",
    description:
      "The proven chess improvement system by GM Noël Studer. 134 five-star reviews. Join thousands who already boosted their ratings.",
    type: "website",
    url: "https://nextlevelchess.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
