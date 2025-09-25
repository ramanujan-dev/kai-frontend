import React from "react";

export default function MainContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex flex-col h-screen">{children}</div>;
}
