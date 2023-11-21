import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Terribly Tiny Tales | Profile Page",
  description:
    "Terribly Tiny Tales tells great stories with top creators for the world's most ambitious brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <StyledComponentsRegistry>
        <link rel="icon" href="/favicon.ico" />
        <body className={inter.className}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
