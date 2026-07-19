import type { Metadata } from "next";
import "pretendard/dist/web/variable/pretendardvariable.css";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

export const metadata: Metadata = {
  title: "CLARÉ 피부과 | 청담 프리미엄 피부과 클리닉",
  description:
    "정확한 진단과 섬세한 시술로 당신만의 피부를 설계하는 프리미엄 피부과, CLARÉ. 안티에이징, 색소·모공 케어, 맞춤 스킨케어 프로그램을 전문의와 상담하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
