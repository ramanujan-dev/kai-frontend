import React from "react";

export default function Heading2({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <h2 className={`text-center mx-auto pb-5 text-xl font-bold ${className}`}>
      {children}
    </h2>
  );
}
