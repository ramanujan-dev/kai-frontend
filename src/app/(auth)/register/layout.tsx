import RegisterHeader from "@/components/header/RegisterHeader";
import MainContainer from "@/components/main-container";

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainContainer>
      <RegisterHeader></RegisterHeader>
      {children}
    </MainContainer>
  );
}
