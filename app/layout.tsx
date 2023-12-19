import type { Metadata } from "next";
import { Work_Sans, Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "@/reduxtoolkit/provider";

const work_sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adomi Capital",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${work_sans.variable} ${raleway.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
