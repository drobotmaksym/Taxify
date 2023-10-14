import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/app/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taxify",
  description:
    "A simple taxi service mockup created with Next.js and Tailwind.css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <Provider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </Provider>
      </body>
    </html>
  );
}
