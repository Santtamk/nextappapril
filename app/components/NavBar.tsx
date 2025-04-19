import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
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
            <Link href="/3d-models">3D Models</Link>
          </li>
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
