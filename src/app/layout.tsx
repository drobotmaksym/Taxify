import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/app/provider";
import { concat } from "@/library/utils";
import { ILayout } from "@/library/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taxify",
  description:
    "A simple taxi service mockup created with Next.js and Tailwind.css",
};

const Layout = ({ children }: ILayout) => {
  const className = concat(inter.className, "flex flex-col min-h-screen");

  return (
    <html
      lang="en"
      className="text-primary-foreground antialiased"
      suppressHydrationWarning
    >
      <body className={className}>
        <Provider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
