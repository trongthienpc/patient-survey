"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  if (pathname === "/login") return null;

  return (
    <header className="w-full bg-white border-b border-primary shadow-sm sticky top-0 z-50">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 h-14 sm:h-16 flex items-center justify-start transition-all duration-300">
        <Link href="/" className="relative h-10 w-32 sm:h-12 sm:w-40 md:w-48">
          <Image
            src="/logo_enterprise.png"
            alt="Enterprise Logo"
            sizes="auto"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
      </div>
    </header>
  );
};
