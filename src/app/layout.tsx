import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/app/provider";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taxify",
  description:
    "A simple taxi service mockup created with Next.js and Tailwind.css",
};

interface IRootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </Provider>
      </body>
    </html>
  );
}
