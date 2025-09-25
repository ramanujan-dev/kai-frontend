import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === NavLink
  );

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">KAI bank</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">{navLinks}</ul>
        </nav>
      </div>
    </header>
  );
}
