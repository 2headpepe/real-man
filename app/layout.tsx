import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import clsx from "clsx";

import "./globals.css";

const bebasNeue = localFont<"--font-bebas-neue">({
  src: [
    {
      path: "./assets/fonts/bebas-neue-bold.ttf",
      weight: "700",
    },
    {
      path: "./assets/fonts/bebas-neue-regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-bebas-neue",
});

const damn = localFont<"--font-damn">({
  src: [
    {
      path: "./assets/fonts/DAMN.ttf",
      weight: "400",
    },
  ],
  variable: "--font-damn",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Real Man",
  description: "Real man description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          bebasNeue.variable,
          damn.variable,
          manrope.variable,
          "antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
