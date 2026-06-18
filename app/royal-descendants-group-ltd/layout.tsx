import { Cormorant_Garamond } from "next/font/google";
import type { ReactNode } from "react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export default function RoyalLayout({ children }: { children: ReactNode }) {
  return <div className={cormorant.variable}>{children}</div>;
}
