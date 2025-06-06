import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const geistKarla = Karla({
  variable: "--font-geist-karla",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Clipy",
  description: "“Capture. Clip. Share.”",
  icons: {
    icon: "",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistKarla.variable} font-karla antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
