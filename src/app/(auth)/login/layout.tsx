import LoginHeader from "@/components/header/LoginHeader";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LoginHeader></LoginHeader>
      {children}
    </>
  );
}
