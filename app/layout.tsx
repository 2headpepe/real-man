import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bebasNeue = localFont<"--font-bebas-neue">({
  src: [
    {
      path: "../public/fonts/bebas-neue-bold.ttf",
      weight: "700",
    },
    {
      path:"../public/fonts/bebas-neue-regular.ttf",
      weight: "400",
    }
  ],
  variable: "--font-bebas-neue",
});

const damn = localFont<"--font-damn">({
  src: [
    {
      path: "../public/fonts/DAMN.ttf",
      weight: "400",
    },
  ],
  variable: "--font-damn",
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
      <body className={`${bebasNeue.variable} ${damn.variable} antialiased`}>{children}</body>
    </html>
  );
}
