import Image from "next/image";
import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import Link from "next/link";
import type { RootLayoutProps } from "./types";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.className} ${montserratAlternates.variable}`}
      >
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <Link href="/">
              <div className="relative">
                {/* Desktop logo */}
                <Image
                  src="/printforge-logo.svg"
                  alt="PrintForge Logo"
                  className="hidden md:block"
                  width={200}
                  height={200}
                />
                {/* Mobile logo */}
                <Image
                  src="/printforge-logo-icon.svg"
                  alt="PrintForge Logo"
                  className="w-[40px] h-auto block md:hidden"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
            <ul className="flex items-center gap-2.5">
              <li className="text-sm uppercase cursor-pointer">
                <Link href="/3dmodels">3D Models</Link>
              </li>
              <li className="text-sm uppercase cursor-pointer">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
