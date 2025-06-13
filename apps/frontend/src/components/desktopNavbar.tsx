"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";

type Props = PropsWithChildren;
const DesktopNavbar = (props: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => setScrollPosition(window.scrollY);

  const pathname = usePathname();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const isScrollDown = scrollPosition > 10;
  const isHome = pathname === "/";
  return (
    <nav
      className={cn(
        "hidden fixed transition-colors w-full z-50 text-white top-0 md:block bg-gradient-to-b from-gray-600 to-gray-800 h-14",
        {
          "bg-white text-gray-700 shadow-md": isScrollDown || !isHome,
        }
      )}
    >
      <div className="flex items-center py-1 px-2 max-w-7xl mx-auto">
        {props.children}
      </div>
      <hr className="border-b border-gray-100 opacity-25 " />
    </nav>
  );
};

export default DesktopNavbar;